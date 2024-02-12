require("dotenv").config();

exports.getBrowser = function(browserString){
    if(browserString.indexOf("Edg") > -1){
        browserName = "Edge";
    }
    else if(browserString.indexOf("Chrome") > -1){
        browserName = "Chrome";
    }
    else if(browserString.indexOf("Firefox") > -1){
        browserName = "Firefox";
    }
    else if(browserString.indexOf("OP") > -1){
        browserName = "Opera";
    }
    else if(browserString.indexOf("Safari") > -1){
        browserName = "Safari";
    }
    else{
        browserName="No browser detection";
    }

    return browserName;
}

exports.generateRandomNumber = function(){
    var minm = 100000;
    var maxm = 999999;
    return Math.floor(Math
    .random() * (maxm - minm + 1)) + minm;
}