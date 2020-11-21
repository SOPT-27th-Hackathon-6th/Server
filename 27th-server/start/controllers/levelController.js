const util = require('../utils/util');
const responseMessage = require('../utils/responseMessage');
const statusCode = require('../utils/statusCode');
const { Level, Mala, Rice } = require('../models');



module.exports = {
    /**
     *  [GET] /level/:foodType/:levelNum
     *  레벨 내용 기져오기
     */
    getLevel: async(req, res) => {
        
        const foodType = Number.parseInt(req.params.foodType);
        
        if (foodType === 0) {
            //국밥인 경우
            const riceData = await Rice.findAll()
            const riceDatalength = riceData.length
            var levelNum = riceDatalength / 3
        } else {
            //마라탕인 경우
            const malaData = await Mala.findAll()
            const malaDatalength = malaData.length
            var levelNum = malaDatalength / 3
        }
        //const levelNum = Number.parseInt(req.params.levelNum);
        try {
            //SELECT * FROM LEVEL_TB WHERE foodType = foodType and levelNum = levelNum
            const data = await Level.findAll({
                where: {
                  foodType: foodType,
                  levelNum: levelNum
                }
            });
            return res.status(200).send(util.success(200, '레벨 내용 가져오기 성공', data));

        } catch (err) {
            console.log(err);
            return res.status(500).send(util.fail(500, '레벨 내용 가져오기 실패'));
        }
    }, 
}