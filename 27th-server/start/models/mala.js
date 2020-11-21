module.exports = (sequelize, DataTypes) => {
    return sequelize.define('MALA_TB', {
    //모델의 Attributes (Column)을 정의하는곳
    isStamp: {
        type: DataTypes.INTEGER(),
        allowNull: false,
    },
},  {//모델의 옵션들을 지정하는곳
        freezeTableName: true,
        timestamps: true,
    });
};