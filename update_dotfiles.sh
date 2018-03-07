#!/bin/sh

# OS
cp ~/.xinitrc OS
mv OS/.xinitrc OS/xinitrc
cp ~/.Xresources OS
mv OS/.Xresources OS/Xresources
cp -r ~/.config/i3 OS
cp -r ~/.config/polybar OS
cp /etc/X11/xorg.conf.d/10-monitor.conf OS/Monitor
cp ~/.xmodmap OS/Keyboard
mv OS/Keyboard/.xmodmap OS/Keyboard/xmodmap

# Vim
cp -r ~/.vim Work/Vim
rm -rf Work/Vim/dotvim
mv Work/Vim/.vim Work/Vim/dotvim
cp ~/.vimrc Work/Vim
mv Work/Vim/.vimrc Work/Vim/vimrc
cp -r ~/vimwiki Work/Vim

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
