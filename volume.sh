#!/bin/sh

incr=+5%
decr=-5%

cur=$(pactl list sinks | grep "Volume: " | awk '{print $12}')

case "$1" in
	"up")
		if [[ "$cur" == "100%" ]]; then
			pactl set-sink-volume 0 100%
		else
			pactl set-sink-volume 0 $incr
		fi
	;;
	"down")
		if [[ "$cur" == "0%" ]]; then
			pactl set-sink-volume 0 0%
		else
			pactl set-sink-volume 0 $decr
		fi
	;;
	"mute")
		pactl set-sink-mute 0 toggle
	;;
	*)
		echo "Unsupported: \"$1\""
		exit 1	
esac

pactl list sinks | grep "Volume: " | awk '{print $12}'
