game.splash("the sharki")
pause(500)
game.splash("start")
effects.bubbles.startScreenEffect(500)
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
controller.moveSprite(squalo)
squalo.setStayInScreen(true)
