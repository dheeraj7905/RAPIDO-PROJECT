const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
        type: String,
        required: true,
        minlength: [3, 'Full name must be at least 3 characters long'],
    },
    lastname: {
        type: String,
        // required: true,
        minlength: [3, 'Last name must be at least 3 characters long'],
    },
},
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Email must be at least 5 characters long'],
    },
    password: {
        type: String,
        required: true,
        select: false, // Exclude password from query results by default
    },
    socketId: {
        type: String,
    },

});

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24d' });
    return token;
};

userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

userSchema.statics.hashPassword = async function(password) {
   
    return await bcrypt.hash(password, 10);
};

const User = mongoose.model('User', userSchema);

module.exports = User;