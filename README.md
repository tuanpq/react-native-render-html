# react-native-render-html

Demonstration of using [react-native-render-html](https://www.npmjs.com/package/react-native-render-html) 3rd library in React Native.

## Screenshot
![alt text](https://github.com/tuanpq/static/blob/master/react-native-render-html/images/react-native-render-html.png "Screenshot")

## Setup development environment:

https://reactnative.dev/docs/environment-setup

## iOS

### Run on simulator

1. $npm install
2. $npx pod-install ios
3. $npx react-native start
4. Open a seperate Terminal and run $npx react-native run-ios

## Android

### Run on Android simulator

1. $npm install
2. $npx react-native start
3. $cd android
4. $./gradlew assembleDebug --warning-mode all
5. Open a seperate Terminal and run $npx react-native run-android

### Build debug apk

1. $mkdir android/app/assets
2. $mkdir android/app/src/main/assets
3. $npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
4. $cd android/
5. $./gradlew assembleDebug
6. $cd app/build/outputs/apk/debug


