input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showNumber(steps * 0.7)
    basic.showString("m")
})
input.onGesture(Gesture.FreeFall, function () {
    music.playMelody("F E D C D E F G ", 120)
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
})
input.onButtonPressed(Button.AB, function () {
    steps = 0
})
input.onButtonPressed(Button.B, function () {
	
})
let steps = 0
steps = 0
basic.showNumber(steps)
if (steps == 10) {
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showNumber(0.7 * steps)
}
