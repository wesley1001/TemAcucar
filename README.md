## TemAcucar

#### React-Native 0.18.0-rc & Redux 3.0.5 & React-Redux 4.0.6

This repo demonstrates the usage of latest React-Native with Redux.

### Usage

- clone the project
- run `npm install`
- if you are using npm version 2 then you need to run the following command, npm@3 won't need this command. to follow up why you need to run this command you can look at this [issue](https://github.com/rackt/react-redux/issues/236)

```js
npm run setup_project
```

### Android Setup

- Follow this guide: https://facebook.github.io/react-native/docs/android-setup.html
- Instal Google Play Services SDK package: https://developers.google.com/android/guides/setup and https://developer.android.com/intl/pt-br/sdk/installing/adding-packages.html (Step 3)

### Release iOS to CodePush


```
rm -rf ./ios/release/
mkdir ./ios/release
react-native bundle \
--platform ios \
--entry-file index.ios.js \
--bundle-output ./ios/release/main.jsbundle \
--assets-dest ./ios/release \
--dev false
code-push release TemAcucar-iOS ./ios/release 0.0.1 --description "Release Changelog" --mandatory
```
