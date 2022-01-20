var mongoose = require('mongoose');


var UserSchema  = new mongoose.Schema
(
    {
        sup_name:{
            type : String,
            required : true,
            

        },
        sup_id:{
            type: String,
            unique: true,
            required: true
        }, 
        email: {
            type: String,
            unique: true, //key constraint
            required: true
        },
        age:
        {
            type:  Number,
            default: 21
        },
        location:
        {
            type:  String,
            required: true
        },
    }
);


var Supplier = mongoose.model('SupplierInformation', UserSchema);

module.exports = Supplier;




