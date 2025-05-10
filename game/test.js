var date = new Date

var delta = {
    time: date.getTime,
}

delta.getDeltaTime = function(prevTime) {
    return date.getTime() - prevTime
}

function $(query, type) {
    switch (type) {
        case 1:
            return document.getElementById(query)
        case 2:
            return document.getElementsByClassName(query)
        case 3:
            return document.getElementsByName(query)
        case 4:
            return document.getElementsByTagName(query)
        default:
            return document.getElementById(query)
    }
}