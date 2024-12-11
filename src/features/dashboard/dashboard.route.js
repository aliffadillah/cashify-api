const express = require('express');
const { getDashboard } = require('./dashboard.controller');

const router = express.Router();

router.get('/:id_profile/:monthYear', getDashboard);

module.exports = router;
