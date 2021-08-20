" systastic
" - syntax checking hack for vim
let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0
let g:syntastic_html_tidy_ignore_errors=[" proprietary attribute " ,"trimming empty \<", "inserting implicit ", "unescaped \&" , "lacks \"action", "lacks value", "lacks \"src", "is not recognized!", "discarding unexpected", "replacing obsolete ", "attribute name"]
let g:syntastic_java_javac_classpath = "/Users/kim-youngjun/Desktop/workspace/InsightEx/build/classes"

" the nerd commenter
" [count]<leader>cc |NERDCommenterComment|

" emmet.vim

" ale
let g:ale_java_javac_executable = "javac -cp ~/.m2/repository/org/projectlombok/lombok/1.18.16/lombok-1.18.16.jar" "for lombok

" gruvbox
" - retro groove color scheme

" vim-javascript
" - js syntax highlight
let g:javascript_plugin_jsdoc = 1
let g:javascript_plugin_ngdoc = 1
let g:javascript_plugin_flow = 1
augroup javascript_folding
    au!
    au FileType javascript setlocal foldmethod=syntax
augroup END

" typescript-vim

" vim-json

" html5.vim

" vim-angular

" vim-jsx-typescript
