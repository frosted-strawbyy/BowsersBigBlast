def check_pressed():
    if pins.digital_read_pin(DigitalPin.P10) == 1:
        if not (button_1_done):
            set_LED(1, True)
def set_LED(num: number, bool2: bool):
    if num == 1:
        if bool2:
            pins.digital_write_pin(DigitalPin.P0, 1)
        else:
            pins.digital_write_pin(DigitalPin.P0, 0)
def reset():
    global button_1_done, button_2_done, button_3_done, button_4_done, button_5_done, bowsers_button
    button_1_done = False
    button_2_done = False
    button_3_done = False
    button_4_done = False
    button_5_done = False
    set_LED(1, False)
    set_LED(2, False)
    set_LED(3, False)
    set_LED(4, False)
    set_LED(5, False)
    bowsers_button = randint(1, 5)
bowsers_button = 0
button_5_done = False
button_4_done = False
button_3_done = False
button_2_done = False
button_1_done = False
led.enable(False)
reset()

def on_forever():
    check_pressed()
basic.forever(on_forever)
