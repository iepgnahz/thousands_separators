'use strict';

function thousands_separators(num) {
  var numStr = "" + num;
  var nums = numStr.split(".");
  var integer = nums[0];
  var decimal = nums[1];
  return splitNum(integer) + (decimal ? "." + decimal : "");
}

function splitNum(numStr){
  var sp = "";
  var sl = "";
  for(var i = numStr.length - 3; i > 0; i = i - 3){
    sp = numStr.substring(0,i);
    sl = numStr.substring(i);
    numStr = sp + "," + sl;
  }
  return numStr;
}

module.exports = thousands_separators;
