const Category = require('../models/category');

exports.getCategories = async(req, res) => {

    try {
        const categories = await Category.find();
        const count = await Category.count();        
        res.status(200).json(
            categories.map(category => {
                return {
                    id: category._id,
                    categoryId: category.categoryId,
                    name: category.name,
                    description: category.description,
                    status: category.status
                }                
            })
        );
    } catch(error) {
        message: "Unable to get categories"
    } 
}

exports.getCategory = async (req, res, next) => {
    try {
        const _id = req.params.id;
        const category = await Category.findById({_id});
        if(category) {
            res.status(200).json({
                id: category._id,
                name: category.name,
                description: category.description,
                status: category.status
            })
        } else {
            res.status(404).json({message: 'Category not found'})
        }
    }catch(error) {
        message: "Unable to get category"
    }
}

exports.createCategory = async (req, res) => {
    try {
        console.log(req.body)
        const category = new Category ({
            categoryId: req.body.categoryId,
            name: req.body.name,
            description: req.body.description
        });
        const createdCategory = await category.save();
        res.status(201)
            .json({
                category: createdCategory
            });
    } catch(error) {
        console.log(error)
            message: "Unable to save Category"
    } 
}

exports.updateCategory = async (req, res, next) => {
    try {       
        const category = new Category({
            _id: req.body.id,
            name : req.body.name,
            description : req.body.description,
            status: req.body.status
        });
        const _id = req.params.id;
        const updatedCategory = await Category.updateOne({_id}, category);
        if(updatedCategory.n > 0) {
            res.status(200).json({
                message: "Updated successfully",
                category: updatedCategory
            });
        } else {
            res.status(401).json({
                message: "Not authorized"
            });
        }       
    } catch(error) {
            message: "Unable to update category"
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const _id = req.params.id;
        const result = await Category.deleteOne({_id});
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
      message: "Unable to delete category"
    }     
}