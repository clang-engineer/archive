" systastic
" - syntax checking hack for vim
set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*

"let g:syntastic_always_populate_loc_list = 1
"let g:syntastic_auto_loc_list = 1
"let g:syntastic_check_on_open = 1
"let g:syntastic_check_on_wq = 0

let g:syntastic_html_tidy_ignore_errors=[" proprietary attribute " ,"trimming empty \<", "inserting implicit ", "unescaped \&" , "lacks \"action", "lacks value", "lacks \"src", "is not recognized!", "discarding unexpected", "replacing obsolete ", "attribute name"]
" let g:syntastic_java_javac_classpath = "/Users/kim-youngjun/Desktop/reference/jh-angular/build/classes"

" the nerd commenter
" [count]<leader>cc |NERDCommenterComment|

" emmet.vim

" ale
" let g:ale_java_javac_executable = "javac -cp ~/.m2/repository/org/projectlombok/lombok/1.18.16/lombok-1.18.16.jar" "for lombok

" gruvbox
" - retro groove color scheme

" vim-javascript
" - js syntax highlight

" typescript-vim

" vim-json

" html5.vim

" vim-instant-markdown
let g:instant_markdown_slow = 1
let g:instant_markdown_autostart = 0

" vim-angular

" vim-jsx-typescript
