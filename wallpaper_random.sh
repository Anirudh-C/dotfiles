#!/bin/sh
image=sudo ls ~/Projects/wallpapers/*.png | sort -R | head -1
echo "$image"
feh --bg-fill $image
