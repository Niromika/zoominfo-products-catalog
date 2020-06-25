## Installation

1. run `npm run install` (yes, with the word "run", because it is a script in the package.json) it will install the packages of the server and the app.

2. If you are going to run it on android, use `adb -s emulator-5554 reverse tcp:3000 tcp:3000` (this will allow to access localhost from the emulator).



## Quick Start

1. open your emulator/simulator.

2. run `npm run start-server` to start the server.

3. run `npm run start-app` to start the app (in another terminal window at the same path).

4. run `npm run start-android` or `npm run start-ios` (in another terminal window at the same path).