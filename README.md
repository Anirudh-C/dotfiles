# Setup

## Software
* Arch
* i3 window manager
* tmux
* [vim](https://github.com/anirudh-c/fiddler-vim)
* [emacs](https://github.com/anirudh-c/fiddler-emacs)
* zsh

## Configs
### OS
    |
    |--> ~/.xinitrc
    |--> ~/.Xresources
    |--> ~/.config/i3/config
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
         |--> ~/.zshrc
         |--> ~/.oh-my-zsh

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
