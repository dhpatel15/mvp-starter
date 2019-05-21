const db = require('../../database');
const util = require('util');
const services =  require('../services');


module.exports = {
  getVets: {
    get: async () => {
      try {
        db.query = util.promisify(db.query)
        let result = await db.query('SELECT * FROM vets')
        return  JSON.parse(JSON.stringify(result));
      } catch (err) {
        console.log('DB ERROR', err);
        return err;
      }
    }
  },
  deleteVet: {
    post: async (data) => {
      try {
        db.query = util.promisify(db.query)
        const { vetName, vetID } = data
        let q = `DELETE FROM vets WHERE vet_name=\"${vetName}\" AND id=${vetID}`
        // let q = `INSERT INTO items (quantity, description) VALUES (${quantity}, \"${description}\")`
        let result = await db.query(q);
        return result
      } catch (err) {
        console.log('DB ERROR', err);
        return err;
      }
    }
  }, 
  addVet: {
    post: async (data) => {
      try {
        db.query = util.promisify(db.query)
        const { vetName, vetLocation } = data
        let q = `INSERT INTO matchedVets (vet_name, vet_location) VALUES (\"${vetName}\", \"${vetLocation}\")`
        let result = await db.query(q);
        return result
      } catch (err) {
        console.log('DB ERROR', err);
        return err;
      }
    }
  },
};