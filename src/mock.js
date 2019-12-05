var Moke = require("mockjs")



Moke.mock("/user/name","get",function(){
    return({name:"123456"})
})



