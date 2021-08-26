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
Plugin 'townk/vim-autoclose'
Plugin 'alvan/vim-closetag'

" Code display
Plugin 'tpope/vim-surround'
Plugin 'nathanaelkane/vim-indent-guides'
Plugin 'sjl/gundo.vim'
Plugin 'nanotech/jellybeans.vim'
Plugin 'ap/vim-css-color'
Plugin 'valloric/matchtagalways'

" Integrations
Plugin 'tpope/vim-fugitive' " vim with git command(e.g., Gdiff)
Plugin 'scrooloose/nerdtree'
Plugin 'airblade/vim-gitgutter' " vim with git status(added, modified, and removed lines)
Plugin 'mileszs/ack.vim'
Plugin 'christoomey/vim-tmux-navigator'
Plugin 'junegunn/gv.vim'


" Interface
Plugin 'vim-airline/vim-airline' " vim status bar
Plugin 'vim-airline/vim-airline-themes'
Plugin 'ctrlpvim/ctrlp.vim'
Plugin 'godlygeek/tabular'
Plugin 'junegunn/fzf'
Plugin 'xuyuanp/nerdtree-git-plugin'

" Commands
Plugin 'majutsushi/tagbar'
Plugin 'tpope/vim-repeat'
Plugin 'terryma/vim-multiple-cursors'
Plugin 'flazz/vim-colorschemes'

" Other
Plugin 'editorconfig/editorconfig-vim'
Plugin 'tpope/vim-sensible'

call vundle#end()

source ~/.vim/config/language.vim
source ~/.vim/config/completion.vim
source ~/.vim/config/code-display.vim
source ~/.vim/config/integrations.vim
source ~/.vim/config/interface.vim
source ~/.vim/config/commands.vim
source ~/.vim/config/other.vim

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

