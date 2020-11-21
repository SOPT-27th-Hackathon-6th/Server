module.exports = (sequelize, DataTypes) => {
    return sequelize.define('PERCENT_TB', {
    //모델의 Attributes (Column)을 정의하는곳
    day: {
        type: DataTypes.INTEGER(),
        allowNull: false,
    },
    percent: {
        type: DataTypes.INTEGER(),
        allowNull: false,
    },
},  {//모델의 옵션들을 지정하는곳
        freezeTableName: true,
        timestamps: false,
    });
};