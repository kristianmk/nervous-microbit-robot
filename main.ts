function decreaseScared () {
    scared += -1
}
function isScared () {
    return scared > 0
}
function scaredAction () {
    pins.servoWritePin(AnalogPin.P1, 0)
    basic.showIcon(IconNames.Sad)
    delay_ms = randint(2000, 4000)
    delayDivider = 100
    delayEachIteration_ms = delay_ms / delayDivider
    for (let index = 0; index <= delayDivider; index++) {
        if (isScaredAgain()) {
            return scaredAgain()
        }
        basic.pause(delayEachIteration_ms)
    }
    for (let index = 0; index < randint(1, 3); index++) {
        delayEachIteration_ms = randint(5, 20)
        for (let index3 = 0; index3 <= randint(83, 100); index3++) {
            if (isScaredAgain()) {
                return scaredAgain()
            }
            basic.pause(delayEachIteration_ms)
            pins.servoWritePin(AnalogPin.P1, index3)
        }
        pins.servoWritePin(AnalogPin.P1, 0)
        delay_ms = randint(500, 3000)
        delayDivider = 100
        delayEachIteration_ms = delay_ms / delayDivider
        for (let index4 = 0; index4 <= delayDivider; index4++) {
            if (isScaredAgain()) {
                return scaredAgain()
            }
            basic.pause(delayEachIteration_ms)
        }
    }
    for (let index = 0; index < randint(1, 1); index++) {
        delayEachIteration_ms = randint(20, 75)
        for (let index6 = 0; index6 <= 180; index6++) {
            if (isScaredAgain()) {
                return scaredAgain()
            }
            basic.pause(delayEachIteration_ms)
            pins.servoWritePin(AnalogPin.P1, index6)
        }
    }
    decreaseScared()
    return 0
}
function increaseScared () {
    scared += 1
}
input.onSound(DetectedSound.Loud, function () {
    increaseScared()
})
function isScaredAgain () {
    return scared > 1
}
function scaredAgain () {
    pins.servoWritePin(AnalogPin.P1, 0)
    basic.showIcon(IconNames.Confused)
    decreaseScared()
    return 0
}
let delayEachIteration_ms = 0
let delayDivider = 0
let delay_ms = 0
let scared = 0
scared = 0
pins.servoWritePin(AnalogPin.P1, 180)
basic.forever(function () {
    while (true) {
        if (isScared()) {
            scaredAction()
        } else {
            basic.showIcon(IconNames.Happy)
        }
    }
})
