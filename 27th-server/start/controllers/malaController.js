const util = require('../utils/util');
const responseMessage = require('../utils/responseMessage');
const statusCode = require('../utils/statusCode');
const userModel = require('../models/rice');
const { Mala } = require('../models');

module.exports = {
    // GET: stamp 유무 데이터 받아오기
    getMala: async (req, res) => {
        try {
            const data = await Mala.findAll()
            return res.status(statusCode.OK).send(util.success(statusCode.OK, "마라 스탬프 조회 성공", data));
        } catch (err) {
            console.log(err);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(sstatusCodec.INTERNAL_SERVER_ERROR, responseMessage.READ_POST_ALL_FAIL));
        }
    },

    // POST: stamp 찍으면 포스트하기
    createPost : async (req, res) => {
        //const PostId = parseInt(req.params.postId);
        const isStamp = parseInt(req.body.isStamp);
        //const isStamp = parseInt(req.body.isStamp);
        try {
            const like = await Mala.create({ isStamp });
            //await Mala.addPost(like)
            return res.status(statusCode.OK).send(util.success(statusCode.OK, "마라 스탬프 등록 성공", like));
        } catch (err) {
            console.error(err);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, '게시글 좋아요 실패'));
        }
    }
}
