const pool = require('../modules/pool')
//const dayjs = require('dayjs')
//dayjs.locale('ko'); // use korean time
const user_tb = 'user_tb';

module.exports = {
  
  getUser: async () => {
    const query = `SELECT * FROM ${user_tb}`;
    try {
      return await pool.queryParam(query);
    } catch (err) {
      console.log('get user err : ', err);
      throw err;
    }
  }
};