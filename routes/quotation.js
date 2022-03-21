var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var Quotation = require("../db/models/quotations");

/* GET quotations listing. */
router.get("/", (req, res, next) => {
  Quotation.find({}, (err, result) => {
    if (err) {
      console.debug("Hey Look! Error", err);
      res.json(err);
    } else {
      // console.log(res);
      res.json(result);
    }
  });
});

// Create new customer
router.post("/", (req, res, next) => {
  console.debug(req.body);
  const data = req.body;
  const dateObj = new Date()

  const newQuotation = new Quotation({
    item: data.item,
    price: data.price,
    quantity: data.quantity,
    date: dateObj
  });
  
  newQuotation.save((err, newInstance) => {
    if (err) {
      console.error("Hey look, Error!", err);
      res.json(err);
    } else {
      res.json(newInstance);
    }
  });
});

router.delete("/:id", (req, res, next) => {
  const id = req.params['id']
  console.log("Delete this items", id)
  console.debug("Item to delete",id);
  Quotation.findByIdAndDelete(id, (err, doc) => {
    if (err) {
      console.error("Hey look, Error!", err);
      res.json(err);
    } else {
      res.status(200).json(doc);
    }
  });
});


module.exports = router;

