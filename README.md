# archive

이전 GitHub 저장소들을 한 곳으로 통합한 개인 archive. 프로필 정리를 위해 원본 repo는 삭제했지만 commit history는 그대로 보존된다.

## 통합된 저장소

| 경로 | 원본 repo | 원본 default branch | archive 일자 |
|---|---|---|---|
| `yorez.github.io-v1/` | `clang-engineer/yorez.github.io-v1` | master | 2026-06-08 |
| `kaggle-bigdata-certification-kr/` | `clang-engineer/kaggle-bigdata-certification-kr` | main | 2026-06-08 |
| `bigdata-cert/` | `clang-engineer/bigdata-cert` | main | 2026-06-08 |
| `fe-performance-optimization-lecture1/` | `clang-engineer/fe-performance-optimization-lecture1` | master | 2026-06-08 |
| `fe-performance-optimization-lecture2/` | `clang-engineer/fe-performance-optimization-lecture2` | master | 2026-06-08 |
| `vim-config/` | `clang-engineer/vim-config` | master | 2026-06-08 |
| `zsh-config/` | `clang-engineer/zsh-config` | master | 2026-06-08 |
| `tmux-config/` | `clang-engineer/tmux-config` | master | 2026-06-08 |
| `hammerspoon-config/` | `clang-engineer/hammerspoon-config` | master | 2026-06-08 |
| `python-script/` | `clang-engineer/python-script` | main | 2026-06-08 |
| `yorez.github.io-v2/` | `clang-engineer/yorez.github.io-v2` | master | 2026-06-08 |
| `tax-refund/` | `clang-engineer/tax-refund` | master | 2026-06-08 |
| `quartz-explorer/` | `clang-engineer/quartz-explorer` | main | 2026-06-08 |
| `batch-explorer/` | `clang-engineer/batch-explorer` | develop | 2026-06-08 |

## 기법

1. `git subtree add --prefix=<name> <url> <branch>`로 원본 repo의 history를 폴더로 흡수
2. `git filter-repo --commit-callback`으로 모든 commit의 author/committer를 `clang.engineer@gmail.com`으로 통일 (date는 그대로 보존)
3. push 완료 후 GitHub 프로필에서 잔디 보존 확인
4. 원본 repo 삭제 (`gh repo delete`)

commit date를 보존하므로 옛 날짜의 잔디가 그대로 유지되고, author email 통일로 본인 계정에 카운트된다.

## 잃은 것

- Issues, PRs, Releases, Stars
- 원본 commit의 SHA (rewrite로 인해 새 SHA)
- 원본 author/committer 정보 (모두 본인 계정으로 덮어씀)
