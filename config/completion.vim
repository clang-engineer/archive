" youcompleteme
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

let g:ycm_key_list_select_completion = ['<C-n>', '<Down>']
let g:ycm_key_list_previous_completion = ['<C-p>', '<Up>']

" snippets

" SuperTab
" - vim insert mode completions with Tab
let g:SuperTabDefaultCompletionType = '<C-n>'

" endwise.vim

" delimitmate
" - automatic closing of quotes, parenthesis, brackets, etc

" taglist.vim
" - structer browser

" Auto Pairs
" - Insert or delete brackets, parens, quotes in pair.

" vim-closetag
" - close html tag
