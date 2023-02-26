# Project

# ⭐ A. SETUP DEVELOPMENT ENVIROMENT

1. Nodejs: https://nodejs.org/en/ (Cài bản LTS)
2. Yarn (https://yarnpkg.com/lang/en/docs/install/#windows-stable)
3. Git SCM: https://git-scm.com/download/
4. Visual Studio Code: https://code.visualstudio.com/Download

# ⭐ B. GIT

## Install

https://git-scm.com/downloads

- Check cài đăt thành công:

* Window: open cmd -> git -v

MAC:

- open terminal
- Install brew: https://docs.brew.sh/Installation
- Install git: brew install git
- Check git: git -v

## Create repository github

- Login: https://github.com/
- Tạo 1 repository

## Clone repository

- Open VScode
- Open folder code
- Open terminal vscode tại folder code
- Nhập: git clone <HTTPS của repository>

* Lưu ý: Cần phải kiểm soát chặt chẽ cấu trúc folder code.

- Repo bản thân tự tạo: dùng để code (code nhớ FORMAT)
- Repo document: Yêu cầu không thay đổi code. Chỉ dùng git pull để lấy tài liệu.

## Step git push code

- Lần đầu:

* Khởi tạo git: git init
* Config email : git config --global user.email '<email>'
* Config username : git config --global user.name '<name>'
* Add toàn bộ file change: git add .
* Tạo commit mô tả: git commit -m 'homework1'
* git push

- Những lần sau:

* Add toàn bộ file change: git add .
* Tạo commit mô tả: git commit -m 'homework1'
* git push

#

git log —oneline
git reset ...
tạo branch: git checkout -b manhph
git add .
git commit -m 'ádadsdasd'
git commit —amend

git reset --soft HEAD~
Git stash
Git stash apply
git cherry-pick —CODE

git checkout development
git pull origin development --rebase
git checkout manhph
git rebase development

nếu có conflic thì sửa
git add .
git rebase --continue
:wq
git push
git help -f

git push
git branch --show-current

git remote add origin <remote repository URL>

git branch -D …
