var app = require('./config/server.config');
var Register = require('./models/models.supplier');



app.post('/register', function(req, res, next) {
    var registerSupplier = new Register(req.body);
    registerSupplier.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(registerSupplier);
        }
    });
});


app.post('/update_supplier', function(req, res, next) {
    
    var email = req.body.email;
    var sup_name = req.body.sup_name;
    Register.updateOne({ "email": email }, { "sup_name": sup_name }, function(err, data) {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    });
});


app.post('/delete_supplier', function(req, res, next) {
    
    var email = req.body.email;
    var sup_name = req.body.sup_name;
    Register.deleteOne({ "email": email }, function(err, data) {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    });
});




