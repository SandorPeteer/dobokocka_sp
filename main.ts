function kocka () {
    for (let index2 = 0; index2 <= 4; index2++) {
        for (let index = 0; index <= 5; index++) {
            if (index == 5) {
                led.plot(2, 2)
            } else if (index == 4) {
                led.plot(1, 3)
                led.plot(3, 1)
            } else if (index == 3) {
                led.plot(1, 3)
                led.plot(2, 2)
                led.plot(3, 1)
            } else if (index == 2) {
                led.plot(1, 1)
                led.plot(3, 1)
                led.plot(1, 3)
                led.plot(3, 3)
            } else if (index == 1) {
                led.plot(1, 1)
                led.plot(1, 3)
                led.plot(2, 2)
                led.plot(3, 1)
                led.plot(3, 3)
            } else if (index == 0) {
                led.plot(1, 1)
                led.plot(1, 2)
                led.plot(1, 3)
                led.plot(3, 1)
                led.plot(3, 2)
                led.plot(3, 3)
            } else {
                basic.clearScreen()
            }
            basic.pause(30 * (1 + index2))
            basic.clearScreen()
        }
    }
    basic.clearScreen()
    basic.pause(500)
    value = randint(1, 6)
    if (value == 1) {
        led.plot(2, 2)
    } else if (value == 2) {
        led.plot(1, 1)
        led.plot(3, 3)
    } else if (value == 3) {
        led.plot(1, 3)
        led.plot(2, 2)
        led.plot(3, 1)
    } else if (value == 4) {
        led.plot(1, 1)
        led.plot(3, 1)
        led.plot(1, 3)
        led.plot(3, 3)
    } else if (value == 5) {
        led.plot(1, 1)
        led.plot(1, 3)
        led.plot(2, 2)
        led.plot(3, 1)
        led.plot(3, 3)
    } else if (value == 6) {
        led.plot(1, 1)
        led.plot(1, 2)
        led.plot(1, 3)
        led.plot(3, 1)
        led.plot(3, 2)
        led.plot(3, 3)
    } else {
        basic.clearScreen()
    }
    finish = true
}
let finish = false
let value = 0
input.onGesture(Gesture.Shake, kocka)
input.onButtonPressed(Button.A, kocka)
basic.forever(function () {
    if (finish == true) {
        basic.clearScreen()
        if (value == 1) {
            led.plot(2, 2)
        } else if (value == 2) {
            led.plot(1, 1)
            led.plot(3, 3)
        } else if (value == 3) {
            led.plot(1, 3)
            led.plot(2, 2)
            led.plot(3, 1)
        } else if (value == 4) {
            led.plot(1, 1)
            led.plot(3, 1)
            led.plot(1, 3)
            led.plot(3, 3)
        } else if (value == 5) {
            led.plot(1, 1)
            led.plot(1, 3)
            led.plot(2, 2)
            led.plot(3, 1)
            led.plot(3, 3)
        } else if (value == 6) {
            led.plot(1, 1)
            led.plot(1, 2)
            led.plot(1, 3)
            led.plot(3, 1)
            led.plot(3, 2)
            led.plot(3, 3)
        } else {
            basic.clearScreen()
        }
        basic.pause(500)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `,0)
basic.pause(500)
    }
})
