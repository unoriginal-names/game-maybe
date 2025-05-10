var game = {
    points: 0,
    pointInterval: 3000,
    pointTimer: 0,
    atoms: 0,
    atomBoost: 0,
    atomResets: 0,
}

function atom() {
    game.atoms += 1
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

    game.atomBoost = game.atoms / 100
    game.pointTimer += delta.time

    if (game.pointTimer >= game.pointInterval) {
        game.points += (1 * game.atomBoost)
        game.pointTimer -= game.pointInterval
    }
}, 100)