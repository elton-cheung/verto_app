# Verto (The Mobile App) version 1.0 
This app is a prototype for Verto's mobile platform, built in React Native and AWS. The goal is to create an iOS/Android app for Verto users to buy and sell products to and from other college students. This is an MVP for the primary functionality of viewing products from other sellers and uploading products to the database. We developed the entire frontend from scratch, which was an emphasis from our project manager, and the backend has been developed by Verto, whose API we use.

## Requirements: 
* Apple [Xcode](https://developer.apple.com/xcode/) 11+ with the latest iOS SDK
* Android [Android_Studio](https://developer.android.com/studio/) 3.6+ with latest Android SDK

## Build 
1. [Installation](https://reactnative.dev/docs/running-on-device):
* iOS: 
Inside verto/ios directory: ```pod install```
Inside verto directory:     ```npx react-native run-ios ```

2. If you get a build error about missing modules (i.e. React Navigation), uninstall and reinstall the module:
* ```npm uninstall react-navigation```
* ```npm install react-navigation```

## Dependencies
1. React-native 0.6+
2. Refer to verto/package.json for more info.

## Known Fatal Bugs
1. Clicking the "upload" button when adding a product (sell tab) causes the app to crash.
2. Clicking the "logout" button in the settings screen (top right header button) causes the app to crash.
3. There are occurences when typing the password will trigger a "Strong Password" to hinder the input field of the password, this is not consistent, but may prevent the user from signing in



## Known Missing Features
1. Forgot Password page is not connected to the Verto API as Verto has not created one yet.
2. Profile screen is a placeholder and does not hold any information.
3. Settings screen is undeveloped and does not hold any information.
4. AddProduct screen was developed using a form builder library called tcomb-form-native. In hindsight, we recommend to Verto they use another library or use native built-in components as this library is deprecated. The uploads also use a static price.
5. SearchCarousel on SplashScreen is frontend mockup. Can't use to search by categories. 
6. DetailsScreen is a frontend mockup. Buy/Message buttons don't navigate anywhere. User and description is static, but the other fields are pulled from the database.
7. Datepicker for the sign-up page is deprecated, we recommend using another library. It is also incomplete as some of the values such as (max date is hard coded)
8. As of April 30, 2020, the PhoneInput and PhoneVerification page is incomplete due to the API not working but when the API is back, it should be implemented
9. Better features to check for Input fields in the SignUp should be used instead of checking them in the frontend. SignUp currently checks for three basic case: (Missing Input, Password not being the same, and age)
10. In addition, checking password strength feature is not implemented in the current build


## Verto Useful Components
1. SplashScreen: Main screen for Verto users (after logging in). Users will see an updated list of products that is being pulled from Verto's API. They can click on each card to see a details screen for each product.
2. AddProduct: Screen for adding products to the database. User selects an image (which is the only required field for the backend), which is sent to Verto's API and uploaded to the database using attributes pre-filled in by an image-recognition API.
3. DetailsScreen: Tapping on a card in the SplashScreen(shop tab) will display further details about the product.
