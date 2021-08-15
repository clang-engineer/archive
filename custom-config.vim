set shell=/bin/bash

set rtp+=~/.vim/bundle/Vundle.vim

call vundle#begin()

" Plugin from tasty development
Plugin 'gmarik/Vundle.vim'
Plugin 'nanotech/jellybeans.vim'
Plugin 'majutsushi/tagbar'
Plugin 'scrooloose/nerdtree'
Plugin 'nathanaelkane/vim-indent-guides'
Plugin 'airblade/vim-gitgutter' " vim with git status(added, modified, and removed lines)
Plugin 'tpope/vim-fugitive' " vim with git command(e.g., Gdiff)
Plugin 'vim-airline/vim-airline' " vim status bar
Plugin 'vim-airline/vim-airline-themes'
Plugin 'blueyed/vim-diminactive'

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
Plugin 'valloric/youcompleteme', { 'do': 'python3 ./install.py --java-completer --js-completer --ts-completer'}
Plugin 'ervandew/supertab'
Plugin 'tpope/vim-endwise'
Plugin 'raimondi/delimitmate'
Plugin 'taglist.vim'
Plugin 'jiangmiao/auto-pairs'

" Code display
Plugin 'tpope/vim-surround'
Plugin 'ap/vim-css-color'
Plugin 'valloric/matchtagalways'

" Integrations
Plugin 'kien/ctrlp.vim'
Plugin 'xuyuanp/nerdtree-git-plugin'

" Interface

" Commands
Plugin 'tpope/vim-repeat'
Plugin 'junegunn/fzf'
Plugin 'terryma/vim-multiple-cursors'

" Other
Plugin 'editorconfig/editorconfig-vim'
Plugin 'tpope/vim-sensible'

call vundle#end()

set t_Co=256
set hlsearch
set number

" for NERDTree
let g:NERDTreeWinSize=60

" for jellybeans
colorscheme gruvbox

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
"let mapleader = ","
"nnoremap <leader>q :bp<CR>
"nnoremap <leader>w :bn<CR>

" for blueyed/vim-diminactive
let g:diminactive_enable_focus = 1

" for systastic
set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*

let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0
let g:syntastic_html_tidy_ignore_errors=[" proprietary attribute " ,"trimming empty \<", "inserting implicit ", "unescaped \&" , "lacks \"action", "lacks value", "lacks \"src", "is not recognized!", "discarding unexpected", "replacing obsolete ", "attribute name"]
let g:syntastic_java_javac_classpath = "/Users/kim-youngjun/Desktop/workspace/InsightEx/build/classes"

"for ycm
let g:ycm_collect_identifiers_from_comments_and_strings = 1
let g:ycm_complete_in_strings = 1
let g:ycm_complete_in_comments = 1
let g:ycm_min_num_of_chars_for_completion = 1
let g:ycm_filetype_blacklist = {}
let g:ycm_filetype_blacklist = {
    \ 'tagbar' : 1,
    \ 'qf' : 1,
    \ 'notes' : 1,
    \ 'markdown' : 1,
    \ 'unite' : 1,
    \ 'text' : 1,
    \ 'vimwiki' : 1,
    \ 'pandoc' : 1,
    \ 'infolog' : 1,
    \ 'mail' : 1
    \}

" for nerdtree
let g:NERDCreateDefaultMappings = 1
let g:NERDSpaceDelims = 1
let g:NERDCompactSexyComs = 1
let g:NERDDefaultAlign = 'left'
let g:NERDAltDelims_java = 1
let g:NERDCustomDelimiters = { 'c': { 'left': '/**','right': '*/' } }
let g:NERDCommentEmptyLines = 1
let g:NERDTrimTrailingWhitespace = 1
let g:NERDToggleCheckAllLines = 1

" for ctrlp
set wildignore+=*/tmp/*,*.so,*.swp,*.zip     " MacOSX/Linux
set wildignore+=*\\tmp\\*,*.swp,*.zip,*.exe  " Windows

let g:ctrlp_custom_ignore = '\v[\/]\.(git|hg|svn)$'
let g:ctrlp_custom_ignore = {
  \ 'dir':  '\v[\/]\.(git|hg|svn)$',
  \ 'file': '\v\.(exe|so|dll)$',
  \ 'link': 'some_bad_symbolic_links',
  \ }
let g:ctrlp_custom_ignore = 'node_modules\|DS_Store\|target'

syntax enable
filetype indent on
highlight Comment term=bold cterm=bold ctermfg=4

