#!/bin/sh

setosconfig() {
    rm ~/.xinitrc
    cp OS/xinitrc ~/.xinitrc
    rm ~/.Xresources
    cp OS/Xresources ~/.Xresources
    rm ~/.xmodmap
    cp OS/Keyboard/xmodmap ~/.xmodmap
}

settmuxconfig() {
    rm ~/.tmux.conf
    cp Work/tmux.conf ~/.tmux.conf
}

setshellconfig() {
    rm ~/.zshrc
    cp Work/Shell/zshrc ~/.zshrc
    rm -rf ~/.oh-my-zsh
    cp -r Work/Shell/oh-my-zsh ~/
    mv ~/oh-my-zsh ~/.oh-my-zsh
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
settmuxconfig & loading "Getting tmux config"
setshellconfig & loading "Getting shell config"
setconfigdir & loading "Getting .config directory"
