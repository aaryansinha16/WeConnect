const asyncHandler = require('express-async-handler')
const userModel = require('../models/user.model')

const searchUsers = asyncHandler(async (req, res) => {
    console.log(req.query, 'QUERY')
    let temp = req.query.search ? 
        {
            $or: [
                { name: { $regex: req.query.search, $options: "i" } },

                { email: { $regex: req.query.search, $options: "i" } },
            ],
        } : {}

    // console.log('TEST:' , req.user)

    const users = await userModel.find(temp)
    .find({ _id: { $ne: req.user._id } });


    res.send(users);
})

module.exports = {searchUsers}