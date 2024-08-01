require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const Referral = require('./schemas/referral.js');  // Import the referral schema

const app = express();
const port = 3000;

// Enable Mongoose debugging
mongoose.set('debug', true);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

app.get('/api/v1/install', async (req, res) => {
    const sampleData = [
        { referralCode: 'ref001', referrerId: 'user01', referredId: 'user02', status: 'Completed', reward: 10 },
        { referralCode: 'ref002', referrerId: 'user02', referredId: 'user03', status: 'Pending', reward: 15 },
        { referralCode: 'ref003', referrerId: 'user03', referredId: 'user04', status: 'Canceled', reward: null },
        { referralCode: 'ref004', referrerId: 'user04', referredId: 'user05', status: 'Completed', reward: 5 },
        { referralCode: 'ref005', referrerId: 'user05', referredId: 'user06', status: 'Completed', reward: 20 },
        { referralCode: 'ref006', referrerId: 'user06', referredId: 'user07', status: 'Pending', reward: 10 },
        { referralCode: 'ref007', referrerId: 'user07', referredId: 'user08', status: 'Canceled', reward: null },
        { referralCode: 'ref008', referrerId: 'user08', referredId: 'user09', status: 'Completed', reward: 5 },
        { referralCode: 'ref009', referrerId: 'user09', referredId: 'user10', status: 'Completed', reward: 10 },
        { referralCode: 'ref010', referrerId: 'user10', referredId: 'user01', status: 'Pending', reward: 15 }
    ];

    try {
        await Referral.insertMany(sampleData);
        res.send('Sample data inserted successfully');
    } catch (error) {
        res.status(500).send('Error inserting sample data: '+error.message);
    }
});

// Define the GET route
app.get('/api/v1/referral', async (req, res) => {

    const {referralCode} = req.query;

    try {
        const referral = await Referral.findOne({referralCode});

        if (referral) {
            res.json({
                referrerId: referral.referrerId,
                referredId: referral.referredId,
                status: referral.status,
                reward: referral.reward
            });
        } else {
            res.status(404).send('Referral not found');
        }
    } catch (error) {
        res.status(500).send('Error fetching referral details');
    }
});

app.get('/', (req, res) => {
    res.send('Server works');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
