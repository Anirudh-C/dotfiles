"""
Returns a string of dashes and spaces to depict the volume indicator in the dwm status bar
"""
import sys

arg = int(int(sys.argv[1])/10)

if arg != 0:
    result = "["
    for i in range(10):
        if i < arg:
            result += "-"
        else:
            result += "."
    result += "]"
else:
    result = "mute"

print(result)
