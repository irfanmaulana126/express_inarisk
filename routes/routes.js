const express = require('express');

const {showEmergency,showEmergencyById} = require('../src/controllers/EmergencyController');
const {showInformation,showInformationById,showInformationByType} = require('../src/controllers/InformationController');
const {showGuide} = require('../src/controllers/GuideController');
const {postNotifications,getNotification} = require('../src/controllers/NotifController');
const {showDisaster} = require('../src/controllers/DisasterController');
const validators = require('../src/validators/validator')
const router = express.Router();

 
// Get All emergency
router.get('/emergency', showEmergency);
 
// Get Single emergency
router.get('/emergency/search', showEmergencyById);

// Get All information
router.get('/information/type/:id', showInformationByType);
 
// Get Single information
router.get('/information/:id', showInformationById);

// Get All Guide
router.get('/guide/:id', showGuide);

// Get All Guide
router.get('/disaster', showDisaster);

router.post('/notif', postNotifications);
router.get('/notif', getNotification);

 
module.exports= router;