import businessModel from '../models/businesses'

module.exports = {
    getById: (req, res, next) => {
        console.log(req.body);
        businessModel.findById(req.params.businessId, (err, businessInfo) => {
            if(err) {
                next(err);
            } else {
                res.json({status:"success", message: "Business found", data: {business: businessInfo}});
            }
        });
    },
    getAll: (req, res, next) => {
        let businessList = [];

        businessModel.find({}, (err, businesses) => {
            if (err) {
                next(err);
            } else {
                for(let business of businesses) {
                    businessList.push({id: business._id, name: business.name, email: business.email, url: business.url});
                }
                res.json({status:"success", message:"Business list here for you", data:{businesses: businessList}});
            }
        });
    },
    updateById: (req, res, next) => {
        businessModel.findByIdAndUpdate(req.params.businessId, {name: req.body.name}, (err, businessInfo) => {
            if(err) {
                next(err);
            } else {
                res.json({status: "success", message: "Business updated successfully", data:null});
            }
        });
    },
    deleteById: (req, res, next) => {
        businessModel.findByIdAndRemove(req.params.businessId, {name: req.body.name}, (err, businessInfo) => {
            if(err) {
                next(err);
            } else {
                res.json({status: "success", message: "Business deleted successfully", data:null});
            }
        });
    },
    create: (req, res, next) => {
        businessModel.create({name: req.body.name, email: req.body.email, url: req.body.url}, (err, result) => {
            if(err) {
                next(err);
            } else {
                res.json({status: "success", message: "Business created successfully", data: null});
            }
        });
    }

}