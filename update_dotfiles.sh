#!/bin/sh

copyosconfig() {
    cp ~/.xinitrc OS
    mv OS/.xinitrc OS/xinitrc
    cp ~/.xmodmap OS/
    mv OS/.xmodmap OS/xmodmap
    cp ~/.Xresources OS/
    mv OS/.Xresources OS/Xresources
}

copyshellconfig() {
    cp ~/.bashrc Work/Shell/bashrc
    cp ~/.bash_profile Work/Shell/bash_profile
}

copyconfigdir() {
    cp -r ~/.config .
    rm -rf Config/
    mv .config/ Config/
    rm -rf Config/google-chrome
    rm -rf Config/Slack
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
copyshellconfig & loading "Copying shell config"
copyconfigdir & loading "Copying .config directory"
updatepackages & loading "Updating packages.txt"
