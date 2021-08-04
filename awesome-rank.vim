set shell=/bin/bash

set rtp+=~/.vim/bundle/Vundle.vim

call vundle#begin()
Plugin 'VundleVim/Vundle.vim'
" language
Plugin 'scrooloose/syntastic'
Plugin 'scrooloose/nerdcommenter'
Plugin 'mattn/emmet-vim'
Plugin 'w0rp/ale'
Plugin 'morhetz/gruvbox'
Plugin 'leafgarland/typescript-vim'
Plugin 'elzr/vim-json'
Plugin 'othree/html5.vim'

" completion
" Plugin 'valloric/youcompleteme'
Plugin 'honza/vim-snippets'
Plugin 'ervandew/supertab'
Plugin 'tpope/vim-endwise'
Plugin 'raimondi/delimitmate'

" code display
Plugin 'tpope/vim-surround'
" Plugin 'vim-airline/vim-airline'
Plugin 'altercation/vim-colors-solarized'
Plugin 'nathanaelkane/vim-indent-guides'
Plugin 'yggdroot/indentline'
Plugin 'tomasr/molokai'
Plugin 'sjl/gundo.vim'
Plugin 'nanotech/jellybeans.vim'

" integration
Plugin 'tpope/vim-fugitive'
Plugin 'scrooloose/nerdtree'
Plugin 'airblade/vim-gitgutter'
Plugin 'kien/ctrlp.vim'
Plugin 'mileszs/ack.vim'
Plugin 'christoomey/vim-tmux-navigator'

" interface
Plugin 'vim-airline/vim-airline-themes'
Plugin 'bling/vim-airline'
" Plugin 'ctrlpvim/ctrlp.vim'
Plugin 'godlygeek/tabular'
Plugin 'junegunn/fzf.vim'
" Plugin 'sirver/ultisnips'
Plugin 'shougo/unite.vim'
Plugin 'jistr/vim-nerdtree-tabs'
Plugin 'xuyuanp/nerdtree-git-plugin'

" command
Plugin 'majutsushi/tagbar'
Plugin 'tpope/vim-repeat'
Plugin 'tpope/vim-commentary'
Plugin 'junegunn/fzf'
Plugin 'easymotion/vim-easymotion'
Plugin 'terryma/vim-multiple-cursors'
Plugin 'flazz/vim-colorschemes'
Plugin 'tomtom/tcomment_vim'

" other
Plugin 'editorconfig/editorconfig-vim'

call vundle#end()

set t_Co=256
set hlsearch
set number

"for NERDTree
let g:NERDTreeWinSize=60

" for jellybeans
colorscheme jellybeans

" for taglist
nmap <F8> :Tagbar<CR>

" for indent guide
let g:indentguides_spacechar = '┆'
let g:indentguides_tabchar = '|'
let g:indent_guides_enable_on_vim_startup = 1
let g:indent_guides_start_level=2
let g:indent_guides_guide_size=1

" for vim-airline
let g:airline#extensions#tabline#enabled = 1 " turn on buffer list
let g:airline_theme='hybrid'
set laststatus=2 " turn on bottom bar
let mapleader = ","

" for blueyed/vim-diminactive
let g:diminactive_enable_focus = 1

" for 'scrooloose/syntastic'
set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*

let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0

syntax enable
filetype indent on
highlight Comment term=bold cterm=bold ctermfg=4
