var game = {
    points: 0,
    atoms: 0,
    atomResets: 0,
}

window.setInterval(function() {
    let res = {    
        ["points"]: game.points
    }
    for (i = 0; res.length; i++) {
        let elements = document.querySelectorAll(".res." + Object.keys(res)[i])
        elements.forEach(function (element) {
            element.innerHTML = res[i]
        })
    }
}, 100)