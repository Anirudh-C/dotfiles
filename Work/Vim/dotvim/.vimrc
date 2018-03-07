set tabstop=4
set shiftwidth=4
set softtabstop=4
set expandtab
set number relativenumber
set splitbelow
set splitright
" Colorscheme
syntax on
set background=dark
colorscheme nord
filetype plugin indent on
set nobackup
set showcmd
set noswapfile
" Fuzzy file finding
set path+=**
set wildmenu
set wildmode=full
" Custom Status Line
set laststatus=2
set statusline=
set statusline+=%1*\ %<%F\                                "File+path
set statusline+=%2*\ %y\                                  "FileType
set statusline+=%3*\ %{''.(&fenc!=''?&fenc:&enc).''}      "Encoding
set statusline+=%3*\ %{(&bomb?\",BOM\":\"\")}\            "Encoding2
set statusline+=%4*\ %{&ff}\                              "FileFormat (dos/unix..) 
set statusline+=%8*\ %=\ row:%l/%L\ (%03p%%)\             "Rownumber/total (%)
set statusline+=%9*\ col:%03c\                            "Colnr
set statusline+=%0*\ \ %m%r%w\ %P\                     "Modified? Readonly? Top/bot.
" custom commands
" map ; to :
map ; :
let mapleader = ','
" Spelling check and correct
nnoremap <leader>s :set spell spelllang=en_us nospell?<CR>
nnoremap <leader>f 1z=<CR>
" create html tags from the inserted text
nnoremap <leader>t bi<<Esc>ea><Esc>yypa/<Esc>O
" Remove highlighting after searches
nnoremap <leader><space> :noh<CR>
" tabs
nnoremap <leader>l :tabn<CR>
nnoremap <leader>h :tabp<CR>
nnoremap <leader>tn :tabnew<CR>
nnoremap <leader>tc :close<CR>
" ctags
nnoremap <leader>m :!ctags -R .<CR><CR>:echom "Ctags generated!!"<CR>
" easy escape
inoremap jk <Esc>
" Nerdtree
let g:nerdtree_tabs_open_on_console_startup=1
