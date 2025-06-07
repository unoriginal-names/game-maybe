let prev = Date.now()

var delta = {
    time: 0,
}

delta.getDelta = function() {
    delta.time = Date.now() - prev
    prev = Date.now()
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