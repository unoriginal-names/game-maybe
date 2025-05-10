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
    let res = game

    console.log($(Object.keys(res), 2))

    for (let i = 0; i < $(Object.keys(res), 2).length; i++) {
        $(Object.keys(res), 2)[i].innerHTML
        // object.keys  is um idk
    }

    game.atomBoost = 1 + game.atoms / 100
    game.pointTimer += delta.time

    if (game.pointTimer >= game.pointInterval) {
        game.points += (1 * game.atomBoost)
        game.pointTimer -= game.pointInterval
    }
}, 100)