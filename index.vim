set shell=/bin/bash
set rtp+=~/.vim/bundle/Vundle.vim

call vundle#begin()

" Plugin from tasty development
Plugin 'gmarik/Vundle.vim'

" Language
Plugin 'scrooloose/syntastic' " syntax checking
Plugin 'scrooloose/nerdcommenter'
Plugin 'mattn/emmet-vim'
Plugin 'w0rp/ale' " syntax checking
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
Plugin 'ervandew/supertab' " insert mode completion with tab
Plugin 'tpope/vim-endwise' " add end of function
Plugin 'raimondi/delimitmate' " automatic close quote, bracket ... ;
Plugin 'taglist.vim'
Plugin 'jiangmiao/auto-pairs' " Insert or delete brackets, parens, quotes in pair.
Plugin 'alvan/vim-closetag' " auto insert xml closetag
Plugin 'ludovicchabant/vim-gutentags' " tag custom

" Code display
Plugin 'tpope/vim-surround' " surround code
Plugin 'nathanaelkane/vim-indent-guides' " show indent guide line
Plugin 'tomasr/molokai'
Plugin 'sjl/gundo.vim'
Plugin 'kien/rainbow_parentheses.vim'
Plugin 'nanotech/jellybeans.vim'
Plugin 'ap/vim-css-color'
Plugin 'junegunn/seoul256.vim'
Plugin 'valloric/matchtagalways' " show html/xml tag matching

" Integrations
Plugin 'tpope/vim-fugitive' " vim with git command(e.g., Gdiff)
Plugin 'scrooloose/nerdtree'
Plugin 'airblade/vim-gitgutter' " vim with git status(added, modified, and removed lines)
Plugin 'mileszs/ack.vim' " file search
Plugin 'christoomey/vim-tmux-navigator'
Plugin 'junegunn/gv.vim'
Plugin 'octref/rootignore'

" Interface
Plugin 'vim-airline/vim-airline' " vim status bar
Plugin 'vim-airline/vim-airline-themes'
Plugin 'ctrlpvim/ctrlp.vim' " file finder
Plugin 'godlygeek/tabular' " text align tool
Plugin 'junegunn/fzf' " unit file finder
Plugin 'sirver/ultisnips' " code skeleton
Plugin 'xuyuanp/nerdtree-git-plugin' " git status on nerdtree
Plugin 'thaerkh/vim-workspace'
Plugin 'mhinz/vim-startify' " cached page dashboard
Plugin 'sickill/vim-monokai'

" Commands
Plugin 'majutsushi/tagbar'
Plugin 'tpope/vim-repeat'
Plugin 'easymotion/vim-easymotion'
Plugin 'terryma/vim-multiple-cursors' " multiple word selecting
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

source ~/.vim/custom/index.vim

colorscheme monokai-phoenix
