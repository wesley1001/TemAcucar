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

1. Copy `.env.sample` to `.env` to create default environment for development and set the config vars.

2. Copy `.env.sample` to `.env.staging` to create staging environment and set the config vars.

3. Copy `.env.sample` to `.env.production` to create production environment and set the config vars.

4. on `./ios/TemAcucar/`, copy `Info.sample.plist` to `Info.plist` and configure the variables there (as of now, `react-native-config` package does not make config variables to `plist` files, so we need this duplication of configurations).

IMPORTANT: for now, changes to `Info.plist` must be done for every build on iOS, if you want to change the enviroment config vars.

### Android Setup

- Follow this guide: https://facebook.github.io/react-native/docs/android-setup.html
- Instal Google Play Services SDK package: https://developers.google.com/android/guides/setup and https://developer.android.com/intl/pt-br/sdk/installing/adding-packages.html (Step 3)

### Generate new iOS bundle with main.jsbundle and assets

```
rm -rf ./ios/release/
mkdir ./ios/release
react-native bundle \
--platform ios \
--entry-file index.ios.js \
--bundle-output ./ios/release/main.jsbundle \
--assets-dest ./ios/release \
--dev false
```

### Generate new Android bundle with main.jsbundle and assets

```
rm -rf ./android/release/
mkdir ./android/release
react-native bundle \
--platform android \
--entry-file index.android.js \
--bundle-output ./android/release/main.jsbundle \
--assets-dest ./android/release \
--dev false
```

### Compile iOS app

1. Generate new iOS bundle

2. Open `TemAcucar.xcodeproj`

3. Remove the old references to `main.jsbundle` and `assets` from `Release` group.

![](http://s11.postimg.org/pohv1wgov/Screen_Shot_2016_02_18_at_4_36_11_PM.png)
![](http://s11.postimg.org/3rvc1j3i7/Screen_Shot_2016_02_18_at_4_36_59_PM.png)

4. Add new `main.jsbundle` and `assets` to `Release` group.

![](http://s11.postimg.org/43cseajy7/Screen_Shot_2016_02_18_at_4_37_11_PM.png)

5. Navigate to `Product > Scheme > Edit Scheme...` and change `Build Configuration` to `Release`.

6. Navigate to `Product > Build` and make sure the build succeeds.

7. Navigate to `Product > Scheme > Edit Scheme...` and change `Build Configuration` to `Debug`, so we don't need to check this change in for other developers.

### Release compiled iOS app to Appetize.io

1. Compile iOS app

2. In your shell, go to `cd ~/Library/Developer/Xcode/DerivedData`, search form a folder starting with `TemAcucar` and `cd` it. Then `open Build/Products/Release-iphonesimulator/`.

3. Find `TemAcucar.app`, zip it, and upload the zip to Appetize.io.

### Release iOS to CodePush

Use this if you didn't need to recompile and just want to publish new JS + assets (works only on device, wont work on Appetize.io).

First generate new iOS bundle, then:

```
code-push release TemAcucar-iOS ./ios/release 0.0.1 --description "Release Changelog" --mandatory
```
