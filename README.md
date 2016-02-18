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

### Release compiled iOS app to Appetize.io

Use this if you had to recompile, add new native libraries, etc.

1. Generate new iOS bunde

2. Open `TemAcucar.xcodeproj`

3. Remove the old references to `main.jsbundle` and `assets` from `Release` group.

![](http://s11.postimg.org/pohv1wgov/Screen_Shot_2016_02_18_at_4_36_11_PM.png)
![](http://s11.postimg.org/3rvc1j3i7/Screen_Shot_2016_02_18_at_4_36_59_PM.png)

4. Add new `main.jsbundle` and `assets` to `Release` group.

![](http://s11.postimg.org/43cseajy7/Screen_Shot_2016_02_18_at_4_37_11_PM.png)

5. Navigate to `Product > Scheme > Edit Scheme...` and change `Build Configuration` to `Release`.

6. Navigate to `Product > Build` and make sure the build succeeds.

7. In your shell, go to `cd ~/Library/Developer/Xcode/DerivedData`, search form a folder starting with `TemAcucar` and `cd` it. Then `open Build/Products/Release-iphonesimulator/`.

8. Find `TemAcucar.app`, zip it, and upload the zip to Appetize.io.

9. Navigate to `Product > Scheme > Edit Scheme...` and change `Build Configuration` to `Debug`, so we don't need to check this change in for other developers.

### Release iOS to CodePush

Use this if you didn't need to recompile and just want to publish new JS + assets.

First generate new iOS bundle, then:

```
code-push release TemAcucar-iOS ./ios/release 0.0.1 --description "Release Changelog" --mandatory
```
