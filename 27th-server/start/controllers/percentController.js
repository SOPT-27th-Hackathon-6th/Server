const util = require('../utils/util');
const responseMessage = require('../utils/responseMessage');
const statusCode = require('../utils/statusCode');
const userModel = require('../models/rice');
const { Mala, Rice } = require('../models');
const dateCalculate = require('date-utils');

module.exports = {
    // GET: stamp 유무 데이터 받아오기
    getRicePercent: async (req, res) => {
        
        //필요한 날짜 구하기
        const newDate = new Date();
        const presentTime = newDate.toFormat("YYYY-MM-DD");
        const presentNewDate = new Date(presentTime)
        try {
            const data = await Rice.findAll({
                limit: 1,
                order: [
                    ['createdAt', 'DESC']
                ]
            })
            const date = data[0].createdAt
            const parsedDate = date.slice(0, 10)
            const calcDate = new Date(parsedDate);
            const dateDiff = Math.ceil((presentNewDate.getTime() - calcDate.getTime()) / (1000 * 3600 * 24));
            //console.log(dateDiff);
            
            //Percent Table에서 데이터 조회하기


            return res.status(statusCode.OK).send(util.success(statusCode.OK, "국밥 스탬프 조회 성공", data));
        } catch (err) {
            console.log(err);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, "국밥 스탬프 조회 실패"));
        }
    },

    // GET: stamp 유무 데이터 받아오기
    getMalaPercent: async (req, res) => {
        try {
            const data = await Mala.findAll()
            return res.status(statusCode.OK).send(util.success(statusCode.OK, "마라 스탬프 조회 성공", data));
        } catch (err) {
            console.log(err);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, "국밥 스탬프 조회 실패"));
        }
    },

    // POST: stamp 찍으면 포스트하기
    createPost: async (req, res) => {
        //const PostId = parseInt(req.params.postId);
        const isStamp = parseInt(req.body.isStamp);
        //const isStamp = parseInt(req.body.isStamp);
        try {
            const like = await Rice.create({ isStamp });
            //await Mala.addPost(like)
            return res.status(statusCode.OK).send(util.success(statusCode.OK, "국밥 스탬프 등록 성공", like));
        } catch (err) {
            console.error(err);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, "국밥 스탬프 조회 실패"));
        }

    }
}