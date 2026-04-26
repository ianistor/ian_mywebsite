---
layout: tool
title: "Houdini Windows Toast pop up notification"
overlay_text: "Get Windows toast alerts in Houdini when long node cooks finish."
summary: "A toast notification tool for Houdini that alerts you when nodes finish cooking."
image: https://public-files.gumroad.com/t8susl0u79ceockidc4u192fwuc4
featured: true
links:
  - label: "Gumroad"
    url: "https://ianistor.gumroad.com/l/ian_hou_notify"
---

## Houdini Windows Toast pop up notification

![GIF](https://public-files.gumroad.com/t8susl0u79ceockidc4u192fwuc4)
---

## Description

This tool allows you to safely alt-tab to a different window while Houdini is processing a node change or cooking.
It's something that I found myself doing a lot lately, the moment Houdini takes a longer time to process something, I alt tab and get lost in endless scrolling or just simply wait with no visual/audio cue its done. (Yes I have a golden retriever attention span)

So here comes my tool that I've been using for a while now... its a toast notification tool that installs its dependent python library, you can customize it and add an icon and an audio cue to it if you want. I personally use a sound notification as well as a funny warcraft 3 peon as my personal assistant toaster.

---

## Features

- Toast notification when a node finishes cooking  
- Installs required Python dependency automatically  
- Customizable notification title and message  
- Optional audio notification  
- Optional icon display  
- Supports local audio and icon paths  

---

## Parameters

- **Title**  
  The notification title text  

- **Message**  
  The main notification message  

- **Toggle Audio**  
  Enable or disable sound playback  

- **Audio Path**  
  Path to the local sound file  

- **Toggle Icon**  
  Enable or disable icon display  

- **Icon Path**  
  Path to the icon file (ICO or PNG)  

---

## Usage

Fill in the parameters and add the HDA at the end of your network or where you want to be notified Houdini passed that node.

The sound and icon will only play or show if their toggles are enabled.

---

## Troubleshoot

- Make sure the audio and icon paths are valid local paths  
- Check file permissions to ensure Houdini can read them  
- If the toast does not appear, verify the `win11toast` Python package is installed  

---

## Screenshots or GIFs
![GIF](https://public-files.gumroad.com/t8susl0u79ceockidc4u192fwuc4)

---

## Updates

- 17/07/25  
  Released tool version 1.4 (main release)  

- 18/07/25  
  Released version 1.5 which should fix the python sop transforming into a merge node  

---

## Download

**Get it here:**  
https://ianistor.gumroad.com/l/ian_hou_notify
