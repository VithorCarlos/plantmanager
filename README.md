# PlantManager 🌱
This is a portfolio of an application that has the idea of helping people remember to take care of their plants

# Getting Started 💻

#### You need to install with NPM or YARN:

↓↓↓↓


Install node_modules: `npm install` OR `yarn install`

Expo: `npm install --global expo-cli`

React Native: `npm install -g react-native-cli`

Json Server: `npm install -g json-server`

# How to configure this project to run? 🤔

#### You need to veriry wich is your IpAdrress of your Computer:

↓↓↓↓                                                                                     


Windows: In CMD type `ipconfig`

Linux (Unbutu): In terminal type `ifconfig`

MacOS: In terminal type `ipconfig getifaddr en1` (to Ethernet of cable) OR `ipconfig getifaddr en0` (to Wifi)

#### Now do you need alter your baseURL:

↓↓↓↓


Inside of: `./src/services/api.ts` you do configure your baseURL - `'http://YOURIPADRESS:3333'`.

(Exemple: `baseURL: 'http://192.168.0.10:3333'`)

# How to start the project? 🤔

#### In your terminal, inside project folder, do you need execute the command:

↓↓↓↓


`npm run android` (For android emulator), 

`npm run ios` (For IOS emulator), OR 

`expo start`

#### Now you do start the json-server with the command:

↓↓↓↓


`json-server ./src/services/server.json --host YOURHOSTNAME --port 3333 --delay 700`


# These are the settings to start the project, thanks and see you later! 😉



