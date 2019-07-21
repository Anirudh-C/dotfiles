#!/bin/sh

incr=5%

cur=$(xbacklight -get)
case "$1" in
	"up")
		if [[ $cur -eq 0 ]]; then
			xbacklight -set 1
		else
			xbacklight -inc $incr
		fi
	;;
	"down")
		if [[ $cur -le 5 ]]; then
			xbacklight -set 1
		else
			xbacklight -dec $incr
		fi
	;;
	*)
		echo "Unsupported: \"$1\""
		exit 1
esac

xbacklight -get
