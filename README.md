# PlantManager 🌱
This is a portfolio of an application that has the idea of helping people remember to take care of their plants

# Getting Started 💻

# Project Ideia

<div>
  <img height=400em src=https://lh3.googleusercontent.com/EJIahwuDWMxnmIvX6BzFkaP0Rlb_jy0B-Rb9WeQ1Stpx2vrWjh-K8YxXdnDijumNn0l_eJsyO0jKPUvKYHy_YRQc_RkscX9TvuPMovYN_joMIu8G8-DGKvJmNmoZqJRb-fAojX0UcUKKC40KPS7fpl3xoYSEFuGl42xi0mxEKaZwoNpm05qUxgEBRb8OJQUuRj7NiIcg92R9WAksvne21Uxr8urMmO0VhPG1MADsJPuPiIY7z-_dZvuOEF2-enH15oc6BvG9oC3lOBlnE6K71-mkTlMHKfjqg5iPkBRV0HXeFgb8bXM_uAsu8karQBIF8eQ8tsjyU3QHAGlqcyo96stnynKQ43PHkF-7arBMqGIKCmqR8fIFlk_eWQpxMvlU8RxM-hXwMV0z3hjXMx_DgpWCGSIVt0uRQLV_YPJ5f9DHXl45kRoFz_P6F2NZCCW1SV9QXZQ-M-LbOb9BDHmmuMH7Ws8c7nF3vPtVVXp-9EvooBQikR8Bs8H56Fqr8rZbYSE90kNWtWRHJRgzKz25PP6v9z1JvnsaxUBc3drBr1IMHyu5zrUimCTYvGKi9n1aC3TojAErvY3_YGQGSmi5iOsgJvMJEXVxjD4UQ4haJ_zCw86uhn3qBkvFY6KEmavBSEFCWg_b4CtUGsEXIfts31kp7_f8AH-acEnQz33oQ3-TnwRuKoecmr-y1D4IHoAhy99cSnFmkQ39nhhWT6-B4ag6Zw=w1668-h938-no?authuser=0?username=VithorCarlos&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true"/>
</div>

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



