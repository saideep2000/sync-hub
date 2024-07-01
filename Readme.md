## Backend Commands :

npm init -y

npm install express body-parser cors mongoose

npm install --save-dev typescript ts-node @types/node @types/express @types/body-parser @types/cors jest ts-jest @types/jest

setup typescript configuration : npx tsc --init

mkdir src
mkdir src/routes src/controllers src/models src/middlewares

configure Jest : npx ts-jest config:init

## Frontend Angular Commands :

brew update

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

brew upgrade node

sudo npm install -g @angular/cli

sudo chown -R $(whoami) $(npm config get cache)

npm cache clean --force
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps

ng serve

ng generate service api

ng generate component message

npm install --save-dev jest jest-preset-angular @types/jest ts-jest

npm install --save-dev esbuild

rm -rf node_modules package-lock.json
npm install

npm install --save-dev babel-jest @babel/core @babel/preset-env

npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/preset-typescript

npm install --save-dev identity-obj-proxy

npm install --save-dev jest jest-preset-angular @babel/core @babel/preset-env @babel/preset-typescript ts-jest identity-obj-proxy


## Frontend ReactNative Commands :


sudo npm install -g react-native-cli

npx react-native init ReactNativeApp

cd ReactNativeApp

npx react-native run-ios

npx react-native run-android
