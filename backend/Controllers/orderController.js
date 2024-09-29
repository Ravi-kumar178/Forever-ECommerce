import orderModel from '../Models/orderModel.js'
import userModel from '../Models/userModel.js'

//placing orders using cod method
const placeOrder = async(req,res) => {

    try {
        const{userId, items, amount, address} = req.body;
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment:false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId,{cartData:{}});

        return res.json({success:true, message:"Order Placed"})
        
    } 
    catch (error) {
        console.log(error);
        return res.json({success: false, message:error.message})
    }
    
}
//placing orders using cod method
const placeOrderStripe = async(req,res) => {

}
//placing orders using cod method
const placeOrderRazorpay = async(req,res) => {

}
//placing orders using cod method
const allOrders = async(req,res) => {

}
//placing orders using cod method
const userOrders = async(req,res) => {
    try {
        const {userId} = req.body;
        const orders = await orderModel.find({userId});
        return res.json({success:true,orders})
    }
     catch (error) {
        console.log(error);
        return res.json({success: false, message:error.message})
    }
}
//placing orders using cod method
const updateStatus = async(req,res) => {

}

export {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus}