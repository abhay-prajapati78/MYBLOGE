const Contact = require('../models/ContactUs.model');

exports.SendMeassage = async(req,res)=>{
    try {
        const contact = await Contact.create(req.body);
        return res.status(201).json({message:"message successfully send"});
    } catch (error) {
        console.log(error)
    }
}