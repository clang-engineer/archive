call plug#begin('~/.vim/plugged') " 플러그인 시작kjk

" Conquer Of Completion 자동완성 플러그인
Plug 'neoclide/coc.nvim', {'branch': 'release'}

" nvim-treesitter 구문 파싱 하이라이팅
" Plug 'nvim-treesitter/nvim-treesitter', {'do': ':TSUpdate'}

" Tagbar 코드 뷰어 창
" Plug 'majutsushi/tagbar'
Plug 'preservim/tagbar'

" NERDTree 코드 뷰어 창
Plug 'preservim/nerdtree'

" 컬러스킴(색상표) jellybeans, gruvbox
Plug 'nanotech/jellybeans.vim'
" Plug 'morhetz/gruvbox'

" 하단에 다양한 상태(몇 번째 줄, 인코딩, etc.)를
" 표시하는 상태바 추가
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'

" CScope 플러그인
Plug 'ronakg/quickr-cscope.vim'

" CtrlP 파일 탐색 플러그인
Plug 'ctrlpvim/ctrlp.vim'

" 비활성 윈도우 강조
" Plug 'blueyed/vim-diminactive'

" vim cutlass 잘라내기 명령어가 yank 에 영향을 주지 않음
" Plug 'svermeulen/vim-cutlass'

" VIM GAS(GNU ASsembler) Highlighting
Plug 'Shirk/vim-gas'
Plug 'ervandew/supertab'
Plug 'raimondi/delimitmate'
Plug 'tpope/vim-surround'
Plug 'christoomey/vim-tmux-navigator'
Plug 'mhinz/vim-startify'
Plug 'terryma/vim-multiple-cursors' " multiple word selecting
Plug 'vimwiki/vimwiki' " vim wiki plug

call plug#end()

" vim awesome config
for include_file in uniq(sort(globpath(&rtp, 'plugin/*.vim', 0, 1)))
    execute "source " . include_file
endfor

source ~/.vim/custom/index.vim
