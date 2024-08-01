const mongoose = require('mongoose');

const referralSchema = new mongoose.Schema({
    referralCode: { type: String, required: true, unique: true },
    referrerId: { type: String, required: true },
    referredId: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Canceled', 'Completed'], required: true },
    reward: { type: String, default: null }
});

const Referral = mongoose.model('Referral', referralSchema);

module.exports = Referral;