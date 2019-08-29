const ejs = require('ejs')
const fastXmlParser = require('fast-xml-parser')

function xmlToJson(result) {
  var options = {
    attrPrefix: "@_",
    textNodeName: "#text",
    ignoreNonTextNodeAttr: true,
    ignoreTextNodeAttr: true,
    ignoreNameSpace: true,
    ignoreRootElement: false,
    textNodeConversion: true,
    textAttrConversion: false,
    arrayMode: false
  }
  if(fastXmlParser.validate(result) === true) { //optional (it'll return an object in case it's not valid)
    var jsonObj = fastXmlParser.parse(result, options);
    console.log(jsonObj)
  }
  var tObj = fastXmlParser.getTraversalObj(result, options)
  var jsonObj = fastXmlParser.convertToJson(tObj)
  return jsonObj
}
module.exports = { xmlToJson }