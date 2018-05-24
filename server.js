const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static(__dirname + '/PathWaze/dist/PathWaze'));

mongoose.connect('mongodb://localhost/PathWaze');

// var uniqueValidator = require("mongoose-unique-validator");
const ProductSchema = new mongoose.Schema({

    name: { type: String, required: [true, "Product must have a name"], minlength: [3, "Name must be longer than 3 characters"], unique: [true, "This product already exists"]},
    qty: { type: Number, required: [true, "Product must have a Qty"], minlength: [0, "You must have at least 0 products"]},
    price: { type: String, required: [true, "Product must have a Price"]},
}, { timestamps: true });

// ProductSchema.plugin(uniqueValidator);

const Product = mongoose.model('Product', ProductSchema);

// 1. Retrieve all Products
app.get('/landing', function (req, res) {
    Product.find({}, function (err, data) {
        if (err) {
            console.log("Returned error", err);
            res.json({ message: "Error", error: err });
        } else {
            res.json(data);
        }
    });
});

// // Edit one product
// app.get('/product/:id/edit', function (req, res) {
//     Product.find({}, function (err, data) {
//         if (err) {
//             console.log("Returned error", err);
//             res.json({ message: "Error", error: err });
//         } else {
//             res.json(data);
//         }
//     });
// });

// //Display one product
// app.get('/product/:id', function (req, res) {
//     Product.findById(req.params.id, function (err, data) {
//         if (err) {
//             console.log("Returned error", err);
//             res.json({ message: "Error", error: err });
//         } else {
//             res.json(data);
//         }
//     });
// });
// // 2. Create new Product
// app.post('/product/new', function (req, res) {
//     console.log("POST /products/new");
//     console.log(req.body);
//     var product = new Product(req.body);

//     product.save(function (err) {
//         if (err) {
//             res.json({ message: "Error", error: err })
//         } else {
//             res.json({ message: "Success", data: Product })
//         }
//     })

// })
// // 3. Update a Product by ID
// app.put('/product/:id/edit', function (req, res) {
//     var obj = {};
//     if (req.body.name) { //if in the body your passing a new firstName.
//         obj['name'] = req.body.name;
//     }
//     if (req.body.qty) {
//         obj['qty'] = req.body.qty;
//     }
//     if (req.body.price) {
//         obj['price'] = req.body.price;
//     }
    
//     Product.update({ _id: req.params.id }, {
//         $set: obj
//     }, function (err, data) {
//         if (err) {
//             res.json({ message: "Error", error: err })
//         } else {
//             res.json({ message: "Success", data: data })
//         }
//     });
// })

// // 4. Delete a Product by ID
// app.delete('/product/:id', function (req, res) {
//     Product.remove({ _id: req.params.id }, function (err) {
//         if (err) {
//             res.json({ message: "Error", error: err })
//         } else {
//             res.json({ message: "Success" })
//         }
//     });
// })

// catch all for angular routes
app.all("**", (req, res, next) => {
    res.sendFile(path.resolve("./PathWaze/dist/PathWaze/index.html"))
})
// tell your server which port to run on
app.listen(4200);
// print to terminal window
console.log("Running in localhost at port 4200");