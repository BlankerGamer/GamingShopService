'use strict';
// use model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var GamingserviceSchema = new Schema({
    name: {
        type: String,
        
    },   
    imgproduct: {
        type: String,
        
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date
    },
    createby: {
        _id: {
            type: String
        },
        username: {
            type: String
        },
        displayname: {
            type: String
        }
    },
    updateby: {
        _id: {
            type: String
        },
        username: {
            type: String
        },
        displayname: {
            type: String
        }
    }
});
GamingserviceSchema.pre('save', function(next){
    let Gamingservice = this;
    const model = mongoose.model("Gamingservice", GamingserviceSchema);
    if (Gamingservice.isNew) {
        // create
        next();
    }else{
        // update
        Gamingservice.updated = new Date();
        next();
    }
    
    
})
mongoose.model("Gamingservice", GamingserviceSchema);