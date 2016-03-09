## TemAcucar

### Installation

- clone the project
- run `npm install`
- if you are using npm version 2 then you need to run the following command, npm@3 won't need this command. to follow up why you need to run this command you can look at this [issue](https://github.com/rackt/react-redux/issues/236)
- Actually, you probably wont need to run the following command at all. I just left it here because I'm not sure yet. So I recommend not running it unless you run into trouble without it.

```js
npm run setup_project
```

### Configuration

1. Copy `.env.sample` to `.env.debug` to create debug environment for development and set the config vars.

2. Copy `.env.sample` to `.env.staging` to create staging environment and set the config vars.

3. Copy `.env.sample` to `.env.production` to create production environment and set the config vars.

### iOS Setup

Xcode 7.0 or higher is required. It can be installed from the App Store.

### Android Setup

- Follow this guide: https://facebook.github.io/react-native/docs/android-setup.html
- Instal Google Play Services SDK package: https://developers.google.com/android/guides/setup and https://developer.android.com/intl/pt-br/sdk/installing/adding-packages.html (Step 3)

### Running on iOS

`bin/run-ios`

### Running on Android

`bin/run-android`

### Building release for iOS simulator

- For staging environment release, run `bin/build-ios-simulator`

- For production environment release, run `ENV=production bin/build-ios-simulator`

### Building release for Android

1. Request the appropriate `keystore` file and passwords to your team's manager and save the `keystore` file to `android/app`

2. Configure the passwords on the appropriate `.env.*` files

3. Then:

  - For staging environment release, run `bin/build-android`

  - For production environment release, run `ENV=production bin/build-android`

### Releasing iOS bundle to CodePush

Use this if you didn't need to rebuild and just want to publish new JS + assets (works only on device, wont work on Appetize.io).

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
