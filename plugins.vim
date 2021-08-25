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
Plugin 'elzr/vim-json'
Plugin 'othree/html5.vim'
Plugin 'burnettk/vim-angular'
Plugin 'peitalin/vim-jsx-typescript'

" Completion
Plugin 'valloric/youcompleteme',
Plugin 'ervandew/supertab'
Plugin 'tpope/vim-endwise'
Plugin 'raimondi/delimitmate'
Plugin 'taglist.vim'
Plugin 'jiangmiao/auto-pairs'

" Code display
Plugin 'tpope/vim-surround'
Plugin 'nathanaelkane/vim-indent-guides'
Plugin 'nanotech/jellybeans.vim'
Plugin 'ap/vim-css-color'
Plugin 'valloric/matchtagalways'

" Integrations
Plugin 'tpope/vim-fugitive' " vim with git command(e.g., Gdiff)
Plugin 'scrooloose/nerdtree'
Plugin 'airblade/vim-gitgutter' " vim with git status(added, modified, and removed lines)
Plugin 'kien/ctrlp.vim'
Plugin 'mileszs/ack.vim'
Plugin 'xuyuanp/nerdtree-git-plugin'

" Interface
Plugin 'vim-airline/vim-airline' " vim status bar
Plugin 'vim-airline/vim-airline-themes'
Plugin 'godlygeek/tabular'
Plugin 'blueyed/vim-diminactive'

" Commands
Plugin 'majutsushi/tagbar'
Plugin 'tpope/vim-repeat'
Plugin 'junegunn/fzf'
Plugin 'terryma/vim-multiple-cursors'

" Other
Plugin 'editorconfig/editorconfig-vim'
Plugin 'tpope/vim-sensible'

call vundle#end()

colorscheme jellybeans

set t_Co=256
set hlsearch
set number
set laststatus=2 " turn on bottom bar
set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*
set wildignore+=*/tmp/*,*.so,*.swp,*.zip     " MacOSX/Linux
set wildignore+=*\\tmp\\*,*.swp,*.zip,*.exe  " Windows

filetype plugin on
" autocmd VimEnter * NERDTree

syntax enable
filetype indent on
highlight Comment term=bold cterm=bold ctermfg=4

