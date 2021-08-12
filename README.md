# Web BLE API PoC

Create TSL certificates with:
```
openssl req -nodes -new -x509 -keyout server.key -out server.cert
```
then allow chrome to accept self-signed certificates from localhost with:
```
chrome://flags/#allow-insecure-localhost
```

BLE Device Simulator App:
https://github.com/WebBluetoothCG/ble-test-peripheral-android

Possibly Not Supported Error:
https://chromium.googlesource.com/chromium/blink/+/refs/heads/main/Source/modules/bluetooth/BluetoothError.cpp

Client Characteristic Configuration Descriptor:
https://github.com/WebBluetoothCG/ble-test-peripheral-android/pull/59
https://bugs.chromium.org/p/chromium/issues/detail?id=578811

## Considerations

* Web BLE API is in __experimental__ status for most functionality: not yet suited for production
* STWIN Fw is not compatible out-of-the-box with current API to receive notifications: Client Characteristic Configuration Descriptors need to be developed (to check)
* Some APIs (for example ```getDevices()``` and ```watchAdvertisements()```) are behind the ```chrome://flags/#enable-experimental-web-platform-features``` flag
* The __Persistent Device Permissions__ feature is behind the ```chrome://flags/#enable-web-bluetooth-new-permissions-backend``` flag

## References

* [API Specification Doc](https://webbluetoothcg.github.io/web-bluetooth/)
* [API Reference](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API)
* [API Implementation Status](https://github.com/WebBluetoothCG/web-bluetooth/blob/main/implementation-status.md)
* [Reference Examples 1](https://developers.google.com/web/updates/2015/07/interact-with-ble-devices-on-the-web)
* [Reference Examples 2](https://github.com/WebBluetoothCG/demos)
* [Reference Examples 3](https://googlechrome.github.io/samples/web-bluetooth/)
* [Reference Examples 4](https://googlechrome.github.io/samples/web-bluetooth/watch-advertisements.html)# WebBLE_API_PoC
