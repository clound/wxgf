const path = require('path');
const util = require('../libs/utils')
//日志根目录
const baseLogPath = path.resolve(__dirname, '../logs')

/*报错输出日志*/
//错误日志目录、文件名、输出完整路径
const errorPath = "/error";
const errorFileName = "error";
const errorLogPath = baseLogPath + errorPath + "/" + errorFileName;

/*请求数据得到响应时输出响应日志*/
//响应日志目录、文件名、输出完整路径
const responsePath = "/response";
const responseFileName = "response";
const responseLogPath = baseLogPath + responsePath + "/" + responseFileName + '-' + util.parseTime(new Date(), '{y}-{m}-{d}') + '.log';

/*操作数据库进行增删改等敏感操作记录日志*/
//操作日志目录、文件名、输出完整路径
// const handlePath = "/handle";
// const handleFileName = "handle";
// const handleLogPath = baseLogPath + handlePath + "/" + handleFileName;


module.exports = {
    //日志格式等设置
    appenders:
        {
            "rule-console": {"type": "console"},
            "errorLogger": {
                "type": "dateFile",
                "filename": errorLogPath,
                "pattern": "yyyy-MM-dd-hh.log",
                "alwaysIncludePattern": true,
                "compress": true,
                "daysToKeep": 10,
                "path": errorPath
            },
            "resLogger": {
                "type": "file",
                "filename": responseLogPath,
                "alwaysIncludePattern": true,
                "maxLogSize": 20971520, //文件最大存储空间（byte）
                "compress": true,
                "path": responsePath
            }
        },
    //供外部调用的名称和对应设置定义
    categories: {
        "default": {"appenders": ["rule-console"], "level": "all"},
        "resLogger": {"appenders": ["resLogger"], "level": "info"},
        "errorLogger": {"appenders": ["errorLogger"], "level": "error"},
        "http": {"appenders": ["resLogger"], "level": "info"}
    },
    "baseLogPath": baseLogPath
}