" vim-airline
let g:airline#extensions#tabline#enabled = 1 " turn on buffer list
let g:airline_theme='hybrid'

" vim-airline-themes

" ctrlp-vim
" - <c-f>, <c-b> : cycle mode
" - <c-d> : filename only search
let g:ctrlp_custom_ignore = '\v[\/]\.(git|hg|svn)$'
let g:ctrlp_custom_ignore = {
  \ 'dir':  '\v[\/]\.(git|hg|svn)$',
  \ 'file': '\v\.(exe|so|dll)$',
  \ 'link': 'some_bad_symbolic_links',
  \ }
let g:ctrlp_custom_ignore = 'node_modules\|ds_store\|target'

" vim Tabluar
" - aligning text

" fzf
" - file finder
" - find * -type f | fzf > selected
" - vim $(fzf)

" vim-diminactive
let g:diminactive_enable_focus = 1
