#!/bin/sh

copyosconfig() {
    cp ~/.xinitrc OS
    mv OS/.xinitrc OS/xinitrc
    cp ~/.Xresources OS
    mv OS/.Xresources OS/Xresources
    cp /etc/X11/xorg.conf.d/10-monitor.conf OS/Monitor
    cp ~/.xmodmap OS/Keyboard
    mv OS/Keyboard/.xmodmap OS/Keyboard/xmodmap
}

copytmuxconfig() {
    cp ~/.tmux.conf Work
    mv Work/.tmux.conf Work/tmux.conf
}

copyshellconfig() {
    :
}

copyconfigdir() {
    cp -r ~/.config .
    rm -rf Config/
    mv .config/ Config/
    rm -rf Config/google-chrome
}

updatepackages() {
    cat /dev/null > ~/dotfiles/packages.txt
    pacman -Qqe >> ~/dotfiles/packages.txt
}

loading() {
    mypid=$!
    loadingText=$1

    echo -ne "$loadingText\r"

    while kill -0 $mypid 2>/dev/null; do
        echo -ne "$loadingText.\r"
        sleep 0.5
        echo -ne "$loadingText..\r"
        sleep 0.5
        echo -ne "$loadingText...\r"
        sleep 0.5
        echo -ne "\r\033[K"
        echo -ne "$loadingText\r"
        sleep 0.5
    done

    echo "$loadingText...Finished"
}

copyosconfig & loading "Copying OS config files"
copytmuxconfig & loading "Copying tmux config"
copyshellconfig & loading "Copying shell config"
copyconfigdir & loading "Copying .config directory"
updatepackages & loading "Updating packages.txt"
