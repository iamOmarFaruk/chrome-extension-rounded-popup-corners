# Hello World Chrome Extension

A simple Chrome extension that creates a rounded popup with a "Hello World" message when clicked.


![image](https://github.com/user-attachments/assets/231c0bb1-1c77-493c-9714-774da1198ea0)


## Example

![Chrome Extension Rounded Popup Corners Example](https://raw.githubusercontent.com/iamOmarFaruk/chrome-extension-rounded-popup-corners/refs/heads/main/example.png)

## Installation

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" by toggling the switch in the top right corner
4. Click "Load unpacked" and select the directory containing this extension
5. The extension should now appear in your Chrome toolbar

## Usage

1. Navigate to any webpage
2. Click on the Hello World extension icon in your Chrome toolbar
3. A rounded popup will appear in the top right corner of the webpage
4. Click the "Close" button to dismiss the popup

## Files

- `manifest.json`: Configuration file for the extension
- `background.js`: Handles the extension click event and injects the content script
- `content.js`: Creates the rounded popup with the "Hello World" message

## Credit

Created by [Omar Faruk](https://github.com/iamOmarFaruk)

## Note

This extension requires the following icons in an 'images' folder:
- images/icon16.png (16x16 px)
- images/icon48.png (48x48 px)  
- images/icon128.png (128x128 px)

You'll need to create these icon files before loading the extension. 
