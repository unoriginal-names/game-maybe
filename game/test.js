var date = new Date

var delta = {
    time: date.getTime,
}

delta.getDeltaTime = function(prevTime) {
    return date.getTime() - prevTime
}


function $(query, type) {
    let func

    switch (type) {
        case 1:
            func = "GetElementById"
        case 2:
            func = "GetElementByClassName"
        case 3:
            func = "GetElementByName"
        case 4:
            func = "GetElementByTagName"
        default:
            func = "GetElementById"
    }

    return document[func](query)
}