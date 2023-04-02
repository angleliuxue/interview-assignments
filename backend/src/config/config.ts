export default {
    db:{
        host:"192.168.233.3",
        user:"root",
        password:"123456",
        database:"shortUrl"
    },
    mongodb:"mongodb://192.168.233.3:27017/shortUrl",
    redis:{
        host:"192.168.233.3",
        port:6379
    },
    serverPort:8081,
    rediskey:{
        shortIdPool:"shortIdPool"
    },
    poolMaxNumber:10,
    poolMinRate:0.5,
    genCountEveryTime:2,
}