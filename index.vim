set shell=/bin/bash
set rtp+=~/.vim/bundle/Vundle.vim

call vundle#begin()

" Plugin from tasty development
Plugin 'gmarik/Vundle.vim'

" Language
Plugin 'scrooloose/syntastic'
Plugin 'scrooloose/nerdcommenter'
Plugin 'mattn/emmet-vim'
Plugin 'w0rp/ale'
Plugin 'morhetz/gruvbox'
Plugin 'pangloss/vim-javascript'
Plugin 'leafgarland/typescript-vim'
Plugin 'tpope/vim-markdown'
Plugin 'elzr/vim-json'
Plugin 'othree/html5.vim'
Plugin 'instant-markdown/vim-instant-markdown'
Plugin 'burnettk/vim-angular'
Plugin 'peitalin/vim-jsx-typescript'
Plugin 'udalov/kotlin-vim'

" Completion
Plugin 'valloric/youcompleteme',
Plugin 'honza/vim-snippets'
Plugin 'ervandew/supertab'
Plugin 'tpope/vim-endwise'
Plugin 'raimondi/delimitmate'
Plugin 'taglist.vim'
Plugin 'jiangmiao/auto-pairs'
Plugin 'alvan/vim-closetag'
Plugin 'ludovicchabant/vim-gutentags'

" Code display
Plugin 'tpope/vim-surround'
Plugin 'nathanaelkane/vim-indent-guides'
Plugin 'tomasr/molokai'
Plugin 'sjl/gundo.vim'
Plugin 'kien/rainbow_parentheses.vim'
Plugin 'nanotech/jellybeans.vim'
Plugin 'ap/vim-css-color'
Plugin 'junegunn/seoul256.vim'
Plugin 'valloric/matchtagalways'

" Integrations
Plugin 'tpope/vim-fugitive' " vim with git command(e.g., Gdiff)
Plugin 'scrooloose/nerdtree'
Plugin 'airblade/vim-gitgutter' " vim with git status(added, modified, and removed lines)
Plugin 'mileszs/ack.vim'
Plugin 'christoomey/vim-tmux-navigator'
Plugin 'junegunn/gv.vim'
Plugin 'octref/rootignore'

" Interface
Plugin 'vim-airline/vim-airline' " vim status bar
Plugin 'vim-airline/vim-airline-themes'
Plugin 'ctrlpvim/ctrlp.vim'
Plugin 'godlygeek/tabular'
Plugin 'junegunn/fzf'
"Plugin 'sirver/ultisnips'
Plugin 'xuyuanp/nerdtree-git-plugin'
Plugin 'thaerkh/vim-workspace'
Plugin 'mhinz/vim-startify'

" Commands
Plugin 'majutsushi/tagbar'
Plugin 'tpope/vim-repeat'
Plugin 'easymotion/vim-easymotion'
Plugin 'terryma/vim-multiple-cursors'
Plugin 'flazz/vim-colorschemes'

" Other
Plugin 'editorconfig/editorconfig-vim'
Plugin 'tpope/vim-sensible'
Plugin 'vimwiki/vimwiki'

call vundle#end()

" vim awesome config
for include_file in uniq(sort(globpath(&rtp, 'config/*.vim', 0, 1)))
    execute "source " . include_file
endfor

source ~/.vim/autocmd.vim
source ~/.vim/abbr.vim

colorscheme seoul256

set t_Co=256
set hlsearch
set number
set laststatus=2 " turn on bottom bar

set smartindent
set tabstop=4
set expandtab
set shiftwidth=4

set wildignore+=*/tmp/*,*.so,*.swp,*.zip     " MacOSX/Linux
set wildignore+=*\\tmp\\*,*.swp,*.zip,*.exe  " Windows

set shell=/bin/zsh

nnoremap <S-Up> <Up>ddp<Up>
nnoremap <S-Down> ddp

filetype plugin on

syntax enable
filetype indent on
highlight Comment term=bold cterm=bold ctermfg=4
