var rollbase = require('./rollbase.js');
var mongodb = require('../modules/mongoose.js');
var rply = { type: 'text' }; //type是必需的,但可以更改

////////////////////////////////////////
//////////////// 
////////////////////////////////////////		

         // 雖然答案有兩個，但只會回傳第一個 Bobo 物件


function switchfind(id, name) {
    var idcheck = functionSwitch.find(function(item, index, array){
        return idcheck.groupid === '002';  // 取得陣列 like === '蘿蔔泥'
      });
      console.log(findLike);  

};

module.exports = {
    switchfind: switchfind
};