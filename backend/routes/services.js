const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// ADD SERVICE
router.post('/', async (req, res) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.json({ message: 'Service added!', service });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add service' });
  }
});

// GET ALL SERVICES
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch services' });
  }
});

module.exports = router;