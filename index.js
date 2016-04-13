'use strict';

module.exports = {
    apple: {
        phone : _isIphone(),
        ipod : _isIpod(),
        tablet : _isIpad(),
        device : _isApple()
    },
    android : {
        phone: _isAndroidPhone(),
        tablet: _isAndroidTablet(),
        device: _isAndroid()
    },
    windows: {
        phone: _isWindowsPhone(),
        tablet: _isWindowsTablet(),
        device: _isWindows()
    },
    other: {
        blackberry: _isBlackBerry(),
        blackberry10: _isBlackBerry10(),
        opera: _isOpera(),
        firefox: _isFirefox(),
        device: _isOtherDevice()
    },
    seven_inch: _isSevenInch(),
    any: _isApple() || _isAndroid() || _isWindows() || _isOtherDevice(),
    phone: _isIphone() || _isAndroidPhone() || _isWindowsPhone(),
    tablet: _isIpad() || _isAndroidTablet() || _isWindowsTablet()
};

function _isApple() {
    return _isIphone() || _isIpod() || _isIpad();
}

function _isIphone() {
    return !!navigator.userAgent.match(/iPhone/i);
}

function _isIpod() {
    return !!navigator.userAgent.match(/iPod/i);
}

function _isIpad() {
    return !!navigator.userAgent.match(/iPad/i);
}

function _isAndroid() {
    return _isAndroidPhone() || _isAndroidTablet();
}

function _isAndroidPhone() {
    return !!navigator.userAgent.match(/(?=.*\\bAndroid\b)(?=.*\bMobile\b)/i);
}

function _isAndroidTablet() {
    return !_isAndroidPhone() && !!navigator.userAgent.match(/Android/i);
}

function _isWindows() {
    return _isWindowsPhone() || _isWindowsTablet();
}

function _isWindowsPhone() {
    return !!navigator.userAgent.match(/IEMobile/i);
}

function _isWindowsTablet() {
    return !!navigator.userAgent.match(/(?=.*\bWindows\b)(?=.*\bARM\b)/i);
}

function _isOtherDevice() {
    return _isBlackBerry() || _isBlackBerry10() || _isOpera() || _isFirefox();
}

function _isBlackBerry() {
    return !!navigator.userAgent.match(/BlackBerry/i);
}

function _isBlackBerry10() {
    return !!navigator.userAgent.match(/BB10/i);
}

function _isOpera() {
    return !!navigator.userAgent.match(/Opera Mini/i);
}

function _isFirefox() {
    return !!navigator.userAgent.match(/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i);
}

function _isSevenInch() {
    return !!navigator.userAgent.match(new RegExp('(?:Nexus 7|BNTV250|KindleFire|Silk|GT-P1000)', 'i'));
}
