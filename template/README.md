# {{ name }}

> {{ description }}

## Config Vue
``` bash

# install dependencies
cd {{ name }}
npm install

# serve with hot reload at localhost:8080
npm run dev
```

## Build and run device  with Capacitor

- Capacitor is already with the dependencies/libs installed in this project 
``` bash
npm install --save @capacitor/core @capacitor/cli
```

- Configure your package name.
- For default we use "ga.ivue.app" 
- You change manualy in capacitor.config.json
```bash
  npx cap init ionic-vue ga.hhalmeida.ionicvue
```

- If you update webpack, Change webpack config to build files in 'www' folder 

 ``` js
 build: {
    // Template for index.htmlc
    index: path.resolve(__dirname, '../www/index.html'),
 
    // Paths
    assetsRoot: path.resolve(__dirname, '../www'), 
    ...
  }
 ``` 

 **You will run the projects according to the Technology and IDE you are using (Android Studio or xCode)**

### Build 
 - Android
    ``` bash
      npm run build
      npx cap add android
      npx cap sync
      npx cap copy
      npx cap open android
    ```

 - iOS
 - if you don't instaled cocoapods 
 - For this instalation you need Ruby in your system
 ``` bash
    gem install cocoapods
 ```

``` bash
    npm run build
    npx cap add ios
    npx cap sync
    npx cap copy
    npx cap open ios
```

## References

https://br.vuejs.org/v2/guide/

http://vuejs-templates.github.io/webpack/

https://ionicframework.com/docs/

https://www.npmjs.com/package/@ionic/core

https://capacitor.ionicframework.com/docs/getting-started/

https://guides.cocoapods.org/using/getting-started.html#installation


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
