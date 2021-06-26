const express = require('express');

const {showEmergency,showEmergencyById} = require('../src/controllers/EmergencyController');
const {showInformation,showInformationById} = require('../src/controllers/InformationController');
const {showGuide} = require('../src/controllers/GuideController');
const validators = require('../src/validators/validator')
const router = express.Router();

 
// Get All emergency
router.get('/emergency', showEmergency);
 
// Get Single emergency
router.get('/emergency/search', showEmergencyById);

// Get All information
router.get('/information', showInformation);
 
// Get Single information
router.get('/information/search', showInformationById);

// Get All Guide
router.get('/guide', showGuide);
 
module.exports= router;