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

ng generate component Button

------------------




------------------

npm uninstall @types/jasmine
-core karma karma-chrome-launcher karma-coverage karma-jasmine-html-reporter

npm install @types/jest jest-preset-angular

sudo npm install jest@^27.0.0 jest-preset-angular@^9.0.0 ts-jest@^27.0.0 --save-dev --legacy-peer-deps



## Frontend ReactNative Commands :


sudo npm install -g react-native-cli

npx react-native init ReactNativeApp

cd ReactNativeApp

npx react-native run-ios

npx react-native run-android


sudo launchctl limit maxfiles 524288 524288
ulimit -n 524288


\curl -sSL https://get.rvm.io | bash -s stable

source ~/.rvm/scripts/rvm

rvm install 3.0.0
rvm use 3.0.0 --default

rbenv install 3.0.0
rbenv global 3.0.0

brew install autoconf automake libtool coreutils libyaml libksba readline zlib openssl@1.1

Set Environment Variables for OpenSSL : 
export LDFLAGS="-L/usr/local/opt/openssl@1.1/lib"
export CPPFLAGS="-I/usr/local/opt/openssl@1.1/include"
export PKG_CONFIG_PATH="/usr/local/opt/openssl@1.1/lib/pkgconfig"


echo 'export LDFLAGS="-L/usr/local/opt/openssl@1.1/lib"' >> ~/.zshrc
echo 'export CPPFLAGS="-I/usr/local/opt/openssl@1.1/include"' >> ~/.zshrc
echo 'export PKG_CONFIG_PATH="/usr/local/opt/openssl@1.1/lib/pkgconfig"' >> ~/.zshrc


npm install @react-navigation/native
npm install @react-navigation/stack
npm install react-native-screens react-native-safe-area-context


npm install @types/react @types/react-native @types/react-navigation --save-dev

npm install @react-navigation/stack
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context

npm install @types/react @types/react-native --save-dev

npm install react-native-gesture-handler

npx pod-install ios

------------------------------------------------------------


/my-project
  /shared
    /components
      /Button
        Button.tsx
        Button.module.ts
  /web
    /src
      /app
        /components
          /Button
            Button.component.ts
            Button.component.html
            Button.component.css
          /home
            home.component.ts
            home.component.html
            home.component.css
          ...
      ...
  /mobile
    /src
      /components
        /Button
          Button.native.tsx
        /home
          Home.native.tsx
        ...
      ...
  package.json
  tsconfig.json


