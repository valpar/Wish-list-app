//const products = [];
const Product = require('../models/product');

exports.getAddProductPage = 
    (req, res) => {
    res.render('add-product', {
        pageTitle: "Add New Product",
        path: "/admin/add-product"
    });
}

exports.postAddProducts = (req, res) => {
    console.log(req.body.title);
    //products.push({title: req.body.title});
    const {title, image, price, description} = req.body
    const product = new Product(title, image, price, description);
    product.saveProduct();
    res.redirect('/');
}

exports.getProducts = (req, res) => {
    
    Product.fetchAllProducts((products)=>{
        res.render('shop', {
        pageTitle: 'Welcome to My Shop!',
        products: products,
        path: '/'
        });
    })
    
   // res.sendFile(path.join(rootDirectory, 'views', 'shop.html'));
}