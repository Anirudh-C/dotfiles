#!/bin/sh

setosconfig() {
    rm ~/.xinitrc
    cp OS/xinitrc ~/.xinitrc
    rm ~/.xmodmap
    cp OS/xmodmap ~/.xmodmap
    rm ~/.Xresources
    cp OS/Xresources ~/.Xresources
}

setshellconfig() {
	rm ~/.bashrc
	rm ~/.bash_profile
	cp Work/Shell/bashrc ~/.bashrc
	cp Work/Shell/bash_profile ~/.bash_profile
}

setconfigdir() {
    rm -rf ~/.config
    cp -r Config/ ~/.config
}

loading() {
    mypid=$!
    loadingText=$1

    echo -ne "$loadingText\r"

    while kill -0 $mypid 2>/dev/null; do
        echo -ne "$mypid :: $loadingText.\r"
        sleep 0.5
        echo -ne "$mypid :: $loadingText..\r"
        sleep 0.5
        echo -ne "$mypid :: $loadingText...\r"
        sleep 0.5
        echo -ne "\r\033[K"
        echo -ne "$mypid :: $loadingText\r"
        sleep 0.5
    done

    echo "$loadingText...Finished"
}

setosconfig & loading "Getting OS config files"
setshellconfig & loading "Getting shell config"
setconfigdir & loading "Getting .config directory"
