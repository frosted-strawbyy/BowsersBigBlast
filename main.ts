function check_pressed () {
    if (pins.digitalReadPin(DigitalPin.P11) == 1) {
        if (running) {
            running = false
            reset()
            music.stopMelody(MelodyStopOptions.All)
            music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
        }
        basic.pause(1000)
        return
    }
    if (!(running)) {
        running = true
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
        reset()
    }
    if (pins.digitalReadPin(DigitalPin.P9) == 1 && !(button_1_done)) {
        button_1_done = true
        check_bowser()
    }
    if (pins.digitalReadPin(DigitalPin.P12) == 1 && !(button_2_done)) {
        button_2_done = true
        check_bowser()
    }
    if (pins.digitalReadPin(DigitalPin.P14) == 1 && !(button_3_done)) {
        button_3_done = true
        check_bowser()
    }
    if (pins.digitalReadPin(DigitalPin.P13) == 1 && !(button_4_done)) {
        button_4_done = true
        check_bowser()
    }
    if (pins.digitalReadPin(DigitalPin.P15) == 1 && !(button_5_done)) {
        button_5_done = true
        check_bowser()
    }
}
function set_LEDs () {
    if (button_1_done) {
        pins.digitalWritePin(DigitalPin.P16, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
    if (button_2_done) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    if (button_3_done) {
        pins.digitalWritePin(DigitalPin.P5, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P5, 0)
    }
    if (button_4_done) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    if (button_5_done) {
        pins.digitalWritePin(DigitalPin.P8, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
}
function check_bowser () {
    set_LEDs()
    if (button_1_done && bowsers_button == 1) {
        bowers_button_hit = true
    }
    if (button_2_done && bowsers_button == 2) {
        bowers_button_hit = true
    }
    if (button_3_done && bowsers_button == 3) {
        bowers_button_hit = true
    }
    if (button_4_done && bowsers_button == 4) {
        bowers_button_hit = true
    }
    if (button_5_done && bowsers_button == 5) {
        bowers_button_hit = true
    }
    music.stopMelody(MelodyStopOptions.All)
    basic.pause(2000)
    if (bowers_button_hit) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.UntilDone)
        basic.pause(1000)
        reset()
    } else {
        music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.UntilDone)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.LoopingInBackground)
    }
}
function reset () {
    button_1_done = false
    button_2_done = false
    button_3_done = false
    button_4_done = false
    button_5_done = false
    bowsers_button = randint(1, 5)
    bowers_button_hit = false
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.LoopingInBackground)
}
let bowers_button_hit = false
let bowsers_button = 0
let button_5_done = false
let button_4_done = false
let button_3_done = false
let button_2_done = false
let button_1_done = false
let running = false
led.enable(false)
music.setVolume(255)
basic.forever(function () {
    check_pressed()
    set_LEDs()
})
