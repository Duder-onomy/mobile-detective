# Mobile Detective

Will return an object that gives information about the users device.

### Install

```shell
npm install --save-dev mobile-detective
```

### Useage
```javascript
var mobileDetective = require('mobile-detective');

if(mobileDetective.any) {
    console.log('YOUR ON MOBILE DAWG');
}
```

The Object it returns will look like this:

```javascript
{
    apple: {
        phone : boolean,
        ipod : boolean,
        tablet : boolean,
        device : boolean
    },
    android : {
        phone: boolean,
        tablet: boolean,
        device: boolean
    },
    windows: {
        phone: boolean,
        tablet: boolean,
        device: boolean
    },
    other: {
        blackberry: boolean,
        blackberry10: boolean,
        opera: boolean,
        firefox: boolean,
        device: boolean
    },
    seven_inch: boolean,
    any: boolean,
    phone: boolean,
    tablet: boolean
}
```