var date = new Date

var delta = {
    time: date.getTime,
}

delta.getDeltaTime = function(prevTime) {
    return date.getTime() - prevTime
}


function $(query, type, doc) {
    let typ

    switch (type) {
        case 1:
            typ = "GetElementById"
        case 2:
            typ = "GetElementByClassName"
        case 3:
            typ = "GetElementByName"
        case 4:
            typ = "GetElementByTagName"
        default:
            typ = "GetElementById"
    }

    if (typeof doc[typ] === "function") {
        return doc[typ](query)
    } else {
        return document[typ](query)
    }
}