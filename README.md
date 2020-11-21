# 국밥마라

![KakaoTalk_Photo_2020-11-22-06-09-23](https://user-images.githubusercontent.com/46921003/99888663-ee033600-2c91-11eb-852e-0a0d870c8dcb.jpeg)



## 서비스 한줄 소개

**국밥중독자, 마라중독자 모두 여기로 오라. 당신의 국밥사랑 마라사랑을 이 세상 널리 알려보세요 🔥😎**

무언가에 중독되는 것, 무언가를 열정 다해 좋아하는 것이 한 사람의 특별한 특성이 되는 요즘!👀 마라중독이라는 키워드가 생겨날 정도로, 음식에 대한 애정도 하나의 캐릭터가 됩니다.

사람들이 이러한 자신의 '음식덕력'을 기록하고, 공유하며 더욱 몰입할 수 있도록 하는 앱 ✨**국밥마라**✨

자신의 국밥사랑, 마라사랑을 스탬프로 기록하고, 내가 얼마나 국밥에 진심인지! 얼마나 마라에 진심인지! 사람들에게 맘껏 자랑하세요 🥺❤️



## ERD

<img width="375" alt="Screen Shot 2020-11-22 at 2 47 58 AM" src="https://user-images.githubusercontent.com/46921003/99883853-496efd00-2c6d-11eb-973a-719d90a23099.png">



## Sequelize 각 모델간의 관계 

```javascript
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

let sequelize;

if (config.use_env_variable) {
sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize; 
db.Sequelize = Sequelize;

db.Mala = require('./mala')(sequelize, Sequelize)
db.Rice = require('./rice')(sequelize, Sequelize)
db.Level = require('./level')(sequelize, Sequelize)
db.Percent = require('./percent')(sequelize, Sequelize)

module.exports = db;
```





## API 명세서

[🔥API 명세서](https://github.com/SOPT-27th-Hackathon-6th/Server/wiki)



## 개발 환경

- Node.js
- Express
- Sequelize ORM
- MySQL
- NPM
- PM2



### 팀원

<table>
    <tr align="center">
      <td colspan="3"><b>Server Developer<b></td>
    </tr>
    <tr align="center">
        <td>
            <img src="https://github.com/MyunDev.png?size=100">
            <br>
            <a href="https://github.com/MyunDev"><I>김현기</I></a>
        </td>
        <td>
            <img src="https://github.com/sophryu99.png?size=100">
            <br>
            <a href="https://github.com/sophryu99"><I>류세화</I></a>
        </td>
    </tr>
    <tr align="center">
    </tr>
</table>


