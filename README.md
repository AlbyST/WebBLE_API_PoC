# Web BLE API PoC

This repo holds a very basic PoC of the Web BLE APIs.

Since the APIs work only in trusted environments you need to create your own certificates before running the example code.

Create TSL certificates with:
```
openssl req -nodes -new -x509 -keyout server.key -out server.cert
```
then allow chrome to accept self-signed certificates from localhost with:
```
chrome://flags/#allow-insecure-localhost
```
Other Chrome flags to enable to run the code are:

* ```enable-experimental-web-platform-features``` to use the ```getDevices()``` and ```watchAdvertisements()``` APIs
* ```enable-web-bluetooth-new-permissions-backend``` to enable first-time only explicit user permission to connect with a particular device. Subsequent requests to connect to the same device will not require the explicit user permission.

You can use a BLE Device Simulator App to simulate a BLE device for experimenting:
https://github.com/WebBluetoothCG/ble-test-peripheral-android

## Considerations

* Web BLE API is in __experimental__ status for most functionality: not yet suited for production
* STWIN Fw is not compatible out-of-the-box with current API to receive notifications: Client Characteristic Configuration Descriptors need to be developed (need to check this)

  Trying to enable characteristic's notifications on an STWIN raises the following error:

  https://chromium.googlesource.com/chromium/blink/+/refs/heads/main/Source/modules/bluetooth/BluetoothError.cpp

  It seems that this error is raised because of missing Client Characteristic Configuration Descriptor:
  
  https://github.com/WebBluetoothCG/ble-test-peripheral-android/pull/59
  https://bugs.chromium.org/p/chromium/issues/detail?id=578811
  
* Some APIs (for example ```getDevices()``` and ```watchAdvertisements()```) are behind the ```chrome://flags/#enable-experimental-web-platform-features``` flag
* The __Persistent Device Permissions__ feature is behind the ```chrome://flags/#enable-web-bluetooth-new-permissions-backend``` flag

## References

* [API Specification Doc](https://webbluetoothcg.github.io/web-bluetooth/)
* [API Reference](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API)
* [API Implementation Status](https://github.com/WebBluetoothCG/web-bluetooth/blob/main/implementation-status.md)
* [Reference Examples 1](https://developers.google.com/web/updates/2015/07/interact-with-ble-devices-on-the-web)
* [Reference Examples 2](https://github.com/WebBluetoothCG/demos)
* [Reference Examples 3](https://googlechrome.github.io/samples/web-bluetooth/)
* [Reference Examples 4](https://googlechrome.github.io/samples/web-bluetooth/watch-advertisements.html)
