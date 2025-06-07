var gameSettings = {
	refreshRate: 50,
}

var game = {
    points: 0,
    pointInterval: 5000,
    pointTimer: 0,
    atoms: 0,
    atomBoost: 0,
    atomResets: 0,
}

var displays = {
    points: game.points,
    pointIntervalBase: game.pointTimer,
    pointInterval: game.pointInterval * 100,
    pointTimer: game.pointTimer / 1000,
    atoms: game.atoms,
    atomBoost: game.atomBoost * 100 - 100
}

function atom() {
    game.atoms += 1
}

window.setInterval(function() {
    delta.getDelta()

    let keys = Object.keys(game)

    for (let i = 0; i < keys.length; i++) {
        for (let j = 0; j < $("res." + keys[i], 2).length; j++) {
            $("res." + keys[i], 2)[j].innerHTML = game[keys[i]]
        }
    }

    for (let i = 0; i < $(keys, 2).length; i++) {
        $(keys[i], 2)[i].innerHTML = res[i]
    }

    game.atomBoost = 1 + game.atoms / 1000
    game.pointTimer += delta.time

    if (game.pointTimer >= game.pointInterval) {
        game.points += (1 * game.atomBoost)
        game.pointTimer -= game.pointInterval
    }
}, gameSettings.refreshRate)