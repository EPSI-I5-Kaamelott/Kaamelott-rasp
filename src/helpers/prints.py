#!/usr/bin/python

import pifacecad
import sys

cad = pifacecad.PiFaceCAD()

cad.lcd.set_cursor(0,0)
cad.lcd.write(sys.argv[1])

cad.lcd.set_cursor(0,1)
cad.lcd.write(sys.argv[2])

cad.lcd.cursor_off()
cad.lcd.blink_off()
