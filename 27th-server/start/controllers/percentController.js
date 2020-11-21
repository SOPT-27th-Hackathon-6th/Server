const util = require('../utils/util');
const responseMessage = require('../utils/responseMessage');
const statusCode = require('../utils/statusCode');
const userModel = require('../models/rice');
const { Mala, Rice, Percent } = require('../models');
const dateCalculate = require('date-utils');

module.exports = {
    // GET: stamp 유무 데이터 받아오기
    getMalaPercent: async (req, res) => {
        
        //필요한 날짜 구하기
        const newDate = new Date();
        const presentTime = newDate.toFormat("YYYY-MM-DD");
        const presentNewDate = new Date(presentTime)
        try {
            const data = await Mala.findAll({
                limit: 1,
                order: [
                    ['createdAt', 'DESC']
                ]
            })
            const date = data[0].createdAt
            const parsedDate = date.slice(0, 10)
            const calcDate = new Date(parsedDate);
            const dateDiff = Math.ceil((presentNewDate.getTime() - calcDate.getTime()) / (1000 * 3600 * 24));
            
            if (dateDiff >= 10){
                dateDiff = 10
            }
           
            //Percent Table에서 데이터 조회하기
            const percentData = await Percent.findAll({
                where: {
                  day : dateDiff
                }
            });
            console.log(percentData)

            return res.status(statusCode.OK).send(util.success(statusCode.OK, "혈중농도 조회 성공", percentData));

        } catch (err) {
            console.log(err);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, "혈중농도 조회 실패"));
        }
    },
}