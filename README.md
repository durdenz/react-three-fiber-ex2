# Instructions for Setting up and running React-Three-Fluid-Example on Windows
## Install Node
1. Go to https://nodejs.org/en/download and download the installer for Windows x64 architecture
    - Run the installer and accept defaults for all options
2. Installing Node will also install npm which is the node package manager that you use in the following steps
## Set Up React Environment
1. Execute the following commands in a command window:
```npm uninstall -g create-react-app```
```npm install -g npx```

## Create React App Project Folder
1. In a command window, 'cd' to wherever you want to put your React projects
2. In that command window, Run the following commands:
```mkdir React-Projects```
```cd React-Projects```
```npx create-react-app example1```
```cd example1```

## Set up React Three Fiber Modules
1. Run the following command in a command window:
```npm install three @types/three @react-three/fiber```

## Set up React Fluid Distortion Modules
1. Run the following command in a command window:
```npm install --force @whatisjery/react-fluid-distortion @react-three/drei @react-three/postprocessing postprocessing leva```


## Run the React default React Application to make sure everything is setup ok
1. In the command window, Run the following command:
```npm start```
2. This will compile the Default app, and launch a tab in your browser with the application.
3. The compile and launch process can take a while...

## To stop the React application
4. To stop the execution of the application, In the command window where you ran "npm start", press `ctrl-C` twice and then close the browser tab

## Replace the App.js file in the src folder with the App.js for the Fluid demo
1. Use the File Explorer to delete the App.js in the example1\src folder
2. Use the File Explorer to copy the App.js that I sent you to the example1\src folder

## Run the React example1 React Application
1. In the command window, Run the following command:
```npm start```
2. This will compile the Default app, and launch a tab in your browser with the application.
3. The compile and launch process will take a while...
4. You will see errors reported in the command window... Ignore them (for now)
5. You will see errors reported in the browser window... Click on the X in the upper right corner of the browser window to dismiss the errors and the app should start running. The browser window background will turn black and a blue fluid animation will follow the mouse pointer around...

## To stop the React application
4. To stop the execution of the application, In the command window where you ran "npm start", press `ctrl-C` twice and then close the browser tab

