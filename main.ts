input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.SmallHeart)
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        basic.showIcon(IconNames.Heart)
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
