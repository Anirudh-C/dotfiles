# fiddler-dots

## Software
* Arch
* dwm
* st
* tmux
* [vim](https://github.com/anirudh-c/fiddler-vim)
* [emacs](https://github.com/anirudh-c/fiddler-emacs)
* bash

## Screenshot
![scrot](https://github.com/Anirudh-C/dotfiles/blob/master/scrot.png)

## Configs
### OS
    |
    |--> ~/.xinitrc
    |--> ~/.Xresources
    |--> ~/dotfiles/dwm
    |--> Monitor
         |
         |--> /etc/X11/xorg.conf.d/10-monitor.conf
    |--> Keyboard
         |
         |--> ~/.xmodmap

### Work
    |
    |--> Terminal
         |
         |--> ~/dotfiles/st
    |--> Vim
         |
         |--> ~/.vim
         |--> ~/.vimrc
         |--> ~/.viminfo
         |--> ~/vimwiki
    |--> Emacs
         |
         |--> ~/.emacs.d
    |--> ~/.tmux.conf
    |--> Shell
         |
         |--> ~/.bashrc
         |--> ~/.bash_profile

## Install
To install the dotfiles:
```bash
$ git clone https://github.com/anirudh-c/dotfiles
$ dotfiles/setup.sh
```

## Updating
To update your version of this repo with changes:
```bash
$ dotfiles/update_dotfiles.sh
```
