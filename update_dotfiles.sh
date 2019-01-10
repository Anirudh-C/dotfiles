#!/bin/sh

# OS
cp ~/.xinitrc OS
mv OS/.xinitrc OS/xinitrc
cp ~/.Xresources OS
mv OS/.Xresources OS/Xresources
cp -r ~/.config/i3 OS
cp /etc/X11/xorg.conf.d/10-monitor.conf OS/Monitor
cp ~/.xmodmap OS/Keyboard
mv OS/Keyboard/.xmodmap OS/Keyboard/xmodmap

# Tmux
cp ~/.tmux.conf Work
mv Work/.tmux.conf Work/tmux.conf

# Shell
cp ~/.zshrc Work/Shell
mv Work/Shell/.zshrc Work/Shell/zshrc
cp -r ~/.oh-my-zsh Work/Shell
rm -rf Work/Shell/oh-my-zsh
mv Work/Shell/.oh-my-zsh Work/Shell/oh-my-zsh
rm -rf Work/Shell/oh-my-zsh/.git

# Terminal
# cp -r ~/.config/alacritty Work

# All system config files
cp -r ~/.config .
rm -rf Config/
mv .config/ Config/
