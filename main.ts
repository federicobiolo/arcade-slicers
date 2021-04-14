scene.onHitWall(SpriteKind.Food, function (sprite, location) {
    sprite.destroy(effects.fire, 100)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.spray, 100)
})
let ciambellone_gordo: Sprite = null
game.splash("the sharki", "")
pause(500)
game.splash("start")
effects.bubbles.startScreenEffect(500)
tiles.setTilemap(tilemap`level1`)
let squalo = sprites.create(img`
    .................88fff..............
    ...............888966f..............
    ...............89966f...............
    ..............f88666f............fff
    ........ffffff888888ff.........ff66f
    ......ff66666666666668fff.....ff66f.
    ....ff6666666688888866888ff..f9966f.
    ....f6866666ff6686866688888fff966f..
    ....f6661111ff1686866688888886668f..
    .....f611111111666666888888888668f..
    ......f888668811666688888888fff668f.
    .......f8161811166688888696f...f66f.
    ........f6681118666f999988f.....f66f
    .........ff1111f6966f99fff.......fff
    ...........fff8ff6966ff.............
    .................fffff..............
    `, SpriteKind.Player)
controller.moveSprite(squalo, 150, 0)
squalo.setStayInScreen(true)
squalo.setPosition(80, 104)
info.setScore(0)
info.setLife(3)
game.onUpdateInterval(500, function () {
    ciambellone_gordo = sprites.create(img`
        ..............bbbbbbb...........
        ...........bb66663333baa........
        .........bb3367776333663aa......
        ........b33333888333389633aa....
        .......b3333333333333389633aa...
        ......b34443333333333338633bae..
        .....b3455433333333334443333ae..
        ....b33322333dddd3333455233daee.
        ...b3d333333dd3bbbb33322333dabe.
        ..b3d333333d3bb33bb33333333da4e.
        ..bd33333333b33aab3333333223a4ee
        .b3d3663333b33aab33366332442b4ee
        .bd3b983333a3aa3333387633ee3b4ee
        .bd6983333baaa333333387633bb4bee
        b3d6833333bba333333333863ba44ebe
        bdd3333333bb3333333333333a44bebe
        add666633333322333366333ba44bbbe
        ad67776333332442336983d3a444b4e.
        add888b333333ee3369833d3a44b44e.
        add333333333333336833d3a444b4e..
        a3dd3333344433333dddd3a444b44e..
        ab33ddd325543333dd33aa444b44e...
        .eabb3dd32233333baaa4444b44e....
        .ebabb3d333d33baa444443b44e.....
        ..ebaab3ddd3aaa4444433b44e......
        ..eebbaab33a44444333b444e.......
        ...eeebbaab444b333b4444e........
        ....ebeeebbbbbbbb4444ee.........
        .....eebbbb44444444ee...........
        .......eeebbb444eee.............
        ..........eeeeee................
        ................................
        `, SpriteKind.Food)
    ciambellone_gordo.setPosition(randint(0, 190), 0)
    ciambellone_gordo.setVelocity(0, 50)
})
