const Product = require('../models/product');

exports.getProducts= async(req, res) => {

    try {
        //const pageSize= +req.query.pageSize;
        //const currentPage= +req.query.page;
        const categoryId = req.params.categoryId;
        
        const products = await Product.find({categoryId});//.skip(pageSize * (currentPage-1)).limit(pageSize);
        const count = await Product.count();   
           
        res.status(200).json({
            products,
            maxProducts: count
        });
    } catch(error) {
        console.log(error)
    } 
}

exports.getProduct = async (req, res, next) => {
    try {
        const _id = req.params.id;
        const product = await Post.findById({_id});
        if(product) {
            res.status(200).json({
                product
            })
        } else {
            res.status(404).json({message: 'Product not found'})
        }
    }catch(error) {
        console.log(error)
    }
}

exports.createProduct = async (req, res) => {
    try {
    //const url = req.protocol + "://" + req.get('host');
    const product = new Product ({
        name: req.body.name,
        imagePath: req.body.imagePath,
        categoryId: req.body.categoryId,
        availableQty: req.body.availableQty,
        unit: req.body.unit,
        price: req.body.price,
        currency: req.body.currency
    })
    const createdProduct = await product.save();
    res.status(201)
        .json({
            id: createdProduct._id,
            name : createdProduct.name,
            imagePath: createdProduct.imagePath,
            categoryId: createdProduct.categoryId,
            availableQty: createdProduct.availableQty,
            unit: createdProduct.unit,
            price: createdProduct.price,
            currency: createdProduct.currency
        });
    } catch(error) {
        console.log(error)
    } 
}

exports.updateProduct = async (req, res, next) => {
    // try {
    //     let imagePath = req.body.imagePath;
    //     if(req.file) {
    //         imagePath = req.file
    //     } 
    //     const product = new Post({
    //         _id: req.body.id,
    //         name : req.body.title,
    //         description : req.body.description,
    //         imagePath: imagePath,
    //         category: req.body.category,
    //         price: req.body.price,
    //         availableQty: req.body.availableQty,
    //         unit: req.body.unit
    //     });
    //     const _id = req.params.id;
    //     const updatedProduct = await Post.updateOne({_id}, product);
    //     if(updatedProduct.n > 0) {
    //         res.status(200).json({
    //             message: "Updated successfully",
    //             product: updatedProduct
    //         });
    //     } else {
    //         res.status(401).json({
    //             message: "No product"
    //         });
    //     }       
    // } catch(error) {
    //         message: "Unable to update product"
    // }
}

exports.deleteProduct = async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await Product.deleteOne({_id});
        if(result.n > 0) {
            res.status(200).json({
            message: "Deleted successfully"
            })
        } else {
            res.status(401)
               .json({
                    message: "Not authorized"
                })
        }
    } catch(error){
      console.log(error)
    }     
}