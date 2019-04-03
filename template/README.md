# {{ name }}

> {{ description }}

NOTE :: For use push notifications in android, you need create app in firebase and download google-services.json and paste in android folder.

## Install Dependencies
``` bash
# install dependencies
npm install
```

## Capacitor build device or emulator/simulator
### Build and run device  with Capacitor
 - Android
 ```bash
    npx cap add android
    npx cap sync
    npm run build
    npx cap copy
    npx cap open android
```

 - iOS
 - if you don't instaled cocoapods 
 ``` bash
    gem install cocoapods
 ```

``` bash
    npx cap add ios
    npx cap sync
    npm run build
    npx cap copy
    npx cap open ios
```
## Build Setup

``` bash
# serve with hot reload at localhost:8080 for development 
npm run dev

# build to run in android device or emulator
npm run build-android

# build to run in ios device or emulator 
npm run build-ios

# build to run android and ios
npm run build-native

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

## References

https://br.vuejs.org/v2/guide/

http://vuejs-templates.github.io/webpack/

https://ionicframework.com/docs/

https://www.npmjs.com/package/@ionic/core

https://capacitor.ionicframework.com/docs/getting-started/

https://guides.cocoapods.org/using/getting-started.html#installation


For a detailed explanation on how things work, check out the [guide](http://hhalmeida.github.io/ivue-base/).
