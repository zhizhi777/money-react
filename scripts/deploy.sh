#!/usr/bin/env bash

npm run build &&
cd build &&
git init &&
git add . &&
git commit -am 'init' &&
git remote add origin git@github.com:zhizhi777/money-website.git &&
git push -u origin master -f
cd ../
