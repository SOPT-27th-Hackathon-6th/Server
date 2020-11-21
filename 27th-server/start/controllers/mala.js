const util = require('../utils/util');
const responseMessage = require('../utils/responseMessage');
const statusCode = require('../utils/statusCode');
const userModel = require('../models/test')

const malaController = {
    getUser: async (req, res) => {
        const data = await userModel.getUser();
        
        //const user = data[0];
        //console.log(user)
        //const dto = {
            //id: user.id,
           // email: user.email,
          //  userName: user.userName,
        //}
        return res.status(200).send(util.success(200, '테스트 조회 완료', data));
    },
}

module.exports = malaController;