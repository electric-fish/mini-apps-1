// The server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single line of CSV report
//  (see included sample output), where the keys of the JSON objects will be the columns of the CSV report.
// You may assume the JSON data has a regular structure and hierarchy (see included sample file).
// In other words, all sibling records at a particular level of the hierarchy will have the same set of properties,
// but child objects might not contain the same properties. In all cases, every property you encounter must be present in the final CSV output.
// You may also assume that child records in the JSON will always be in a property called `children`.

module.exports.objParser = (obj) => {
  let properties = { 'uniqueId': [] };
  var uniqueId = 0;

  var objParserHelper = (data) => {
    properties['uniqueId'].push(uniqueId++);

    //--- enters each existing row property into property list ---//
    for (var key in data) {
      if (key !== 'children') {
        if (properties[key] === undefined) {
          properties[key] = [];
          for (var i = 0; i < properties['uniqueId'].length - 1; i++) {
              properties[key].push('');
          }
          properties[key].push(data[key]);
        } else {
          properties[key].push(data[key]);
        }
      }
    }

    //--- enters empty string if property exists but has no data in this row ---//
    for (var key in properties) {
      if (data[key] === undefined && key !== 'uniqueId') {
        properties[key].push('');
      }
    }

    //--- iterate through children ---//
    if (data['children']) {
      for (var i = 0; i < data['children'].length; i++) {
        objParserHelper(data['children'][i]);
      }
    }
  }

  objParserHelper(obj);
  return properties;
}

module.exports.objPrinter = (obj) => {
  let result = '';
  let rowLen = obj['uniqueId'].length;

  let isFirstProp = true;

  //--- prints property row ---//
  for (var key in obj) {
    if (!isFirstProp) {
      result += ',';
    }
    if (key !== 'uniqueId') {
      result += key;
      isFirstProp = false;
    }
  }
  result += '\n';

  //--- iterate through uniqueId to print ---//
  for (var i = 0; i < rowLen; i++) {
    isFirstProp = true;
    for (var key in obj) {
      if(!isFirstProp) {
        result += ',';
      }
      if (key !== 'uniqueId') {
        result += obj[key][i];
        isFirstProp = false;
      }
    }
    result += '\n';
  }

  return result;
}

module.exports.parser = (jsonData) => {
  let newObj = this.objParser(jsonData);
  console.log(newObj);

  let csvStr = this.objPrinter(newObj);
  // console.log(csvStr);
  return csvStr;
}