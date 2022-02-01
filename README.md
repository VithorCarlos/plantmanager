# PlantManager 🌱
This is a portfolio of an application that has the idea of helping people remember to take care of their plants

# Project Ideia

<div>
  <img height=400em src=https://lh3.googleusercontent.com/YfAkIRx8fqxApW7ObqDoK2nW0kJcMWFiZJ3g09CtNakcXGycH2NvKNznjx1_Gp_LXAFHQwff9mAN-BAGkR7cmk1DbbcHIWpFzvaZGVFVkZooIv_PwnvdaYDylH5sOWgI8lY-0pj51ZUbkfMqx68fr8OCrcpBE-M0S5Imb_MXpOP7nVjqO8msY1Kay0XpJHGKMBJSX_GlSyzEDjrg-tWNg7iiSyQF0BMxpeWHbHI_gdfD1_foFoPqO2yTv6t9pjDzv1JGEq_s0OCrPXfTbNshWHKFUjz2FCP7_wMC3uiEI8LQsT0n-1yrIrbdBRlY_o8AaB1lZdlmIoRSN8RB_90RbEAF5J9fZ03xhj7JQtcHvy3MAKnMmbVpXD0qgeI4F3b5c7PiqKa3aiX84tX4mWsYF1qi-XZUjcDZ1PZr_jJuZ1bQIz0oY4266i5z7y8zqy5Njynnkd9md83sOHbZydKMjXVnqBvvJOwI8nYnwzAagEpKGsfzqJxE42PEtFNyGSmOunaZ01TSTrObBWWaJf_lvnKx5Q_SRILngewXv7ebaleliND16CJCBqPjahPWei9ZXxdYy_urGb7y51p34CGMfqnGRhDeeVpJN5v2DsxToUBh_WT4B6fgmp45ib-79D2CCPjow4jBJ2tD-lW7sWuN6JLVv7J8qP-WHBTb97z51tUIBB892FbEhsPvT-DZxr1dA4y7CI7v1HezDJg6GzbxqlHEww=w1566-h881-no?authuser=0?username=VithorCarlos&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true"/>
</div>

# Getting Started 💻

### Requires [Node 12 LTS](https://nodejs.org/en/download/) or Later.
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



