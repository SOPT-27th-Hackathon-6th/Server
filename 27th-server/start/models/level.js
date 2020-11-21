module.exports = (sequelize, DataTypes) => {
    return sequelize.define('LEVEL_TB', {
    //모델의 Attributes (Column)을 정의하는곳
    levelNum: {
        type: DataTypes.INTEGER(),
        unique: true,
        allowNull: true,
    },
    description: {
        type: DataTypes.TEXT(),
        allowNull: true,
    },
    foodType: {
        type: DataTypes.INTEGER(),
        allowNUll: true
    },
    levelName: {
        type: DataTypes.STRING(45),
        allowNull: true
    }
},  {//모델의 옵션들을 지정하는곳
        freezeTableName: true,
        timestamps: false,
    });
};