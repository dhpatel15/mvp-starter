var models = require('../models');

module.exports = {
  getVets: {
    get: async (req, res) => {
      try {
        let result = await models.getVets.get()
        res.send(result);
      } catch (err) {
        console.log('Error', err);
        res.sendStatus(500);
      }
    }, 
  },
  deleteVet:{
    post: async (req, res) => {
      let data = req.body;
      try {
        let result = await models.deleteVet.post(data)
        console.log(result);
        res.send(200);
      } catch (err) {
        console.log('Error', err);
        res.sendStatus(500);
      }
    }
  },  
  addVet:{
    post: async (req, res) => {
      let data = req.body;
      try {
        let result = await models.addVet.post(data)
        console.log(result);
        res.send(200);
      } catch (err) {
        console.log('Error', err);
        res.sendStatus(500);
      }
    }
  },
};