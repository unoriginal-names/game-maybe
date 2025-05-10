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
            return document.GetElementById(query)
        case 2:
            return document.GetElementByClassName(query)
        case 3:
            return document.GetElementByName(query)
        case 4:
            return document.GetElementByTagName(query)
        default:
            return document.GetElementById(query)
    }
}