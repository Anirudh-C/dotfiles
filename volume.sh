#!/bin/sh

incr=+5%
decr=-5%

sink=$(pacmd list-sinks | grep "index" | awk '{print $3}')
cur=$(pactl list sinks | grep "Volume: " | awk '{print $12}')

case "$1" in
	"up")
		if [[ "$cur" == "100%" ]]; then
			pactl set-sink-volume $sink 100%
		else
			pactl set-sink-volume $sink $incr
		fi
	;;
	"down")
		if [[ "$cur" == "0%" ]]; then
			pactl set-sink-volume $sink 0%
		else
			pactl set-sink-volume $sink $decr
		fi
	;;
	"mute")
		pactl set-sink-mute $sink toggle
	;;
	*)
		echo "Unsupported: \"$1\""
		exit 1	
esac

pactl list sinks | grep "Volume: " | awk '{print $12}'
