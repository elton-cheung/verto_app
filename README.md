# Verto (The Mobile App) version 1.0 
This app is a prototype for Verto's mobile platform, built in React Native and AWS. The goal is to create an iOS/Android app for Verto users to buy and sell products to and from other college students. This is an MVP for the primary functionality of viewing products from other sellers and uploading products to the database. We developed the entire frontend from scratch, which was an emphasis from our project manager, and the backend has been developed by Verto, whose API we use.

## Requirements: 
* Apple [Xcode](https://developer.apple.com/xcode/) 11+ with the latest iOS SDK
* Android [Android_Studio](https://developer.android.com/studio/) 3.6+ with latest Android SDK

## Build 
1. Installation: ``` npm install ```
2. To run on
* Android: ``` npx react-native run-android ```
* iOS: 
Inside verto/ios directory: ```pod install```
Inside verto directory:     ```npx react-native run-ios ```

## Login Credentials
If having signup issues, use the following account to login:
email: vertostore@vertostore.com
password: VertoStore!

## Dependencies
1. React-native
2. Refer to verto/package.json for more info.

## Known Fatal Bugs
1. Clicking the "upload" button when adding a product (sell tab) causes the app to crash.
2. Clicking the "logout" button in the settings screen (top right header button) causes the app to crash.

## Known Missing Features
1. Forgot Password page is not connected to the Verto API as Verto has not created one yet.
2. Profile screen is a placeholder and does not hold any information.
3. Settings screen is undeveloped and does not hold any information.
4. AddProduct screen was developed using a form builder library called tcomb-form-native. In hindsight, we reccommend to Verto they use another library or use native built-in components as this library is deprecated. The uploads also use a static price.
5. DetailsScreen is a frontend mockup. Buy/Message buttons don't navigate anywhere. User and description is static, but the other fields are pulled from the database.

## Verto Useful Components
1. SplashScreen: Main screen for Verto users (after logging in). Users will see an updated list of products that is being pulled from Verto's API. They can click on each card to see a details screen for each product.
2. AddProduct: Screen for adding products to the database. User selects an image (which is the only required field for the backend), which is sent to Verto's API and uploaded to the database using attributes pre-filled in by an image-recognition API.
3. DetailsScreen: Tapping on a card in the SplashScreen(shop tab) will display further details about the product.
