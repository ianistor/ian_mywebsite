---
layout: tool
title: "Asset Status Overlay"
overlay_text:  "Unreal Engine"
summary: "Visual status tracking for assets directly inside the Unreal Engine Content Browser and viewport."
image: https://cdnb.artstation.com/p/assets/images/images/093/739/371/large/ioan-andrei-nistor-artstationthumbnailfront.jpg?1765303899
featured: true
landing_position: 0
trailer_video: /assets/aso/ASODemo.mp4
trailer_fit: contain
tags : [unreal, tool]
links:
  - label: "Fab"
    url: "https://fab.com/s/d783d916db7e"
---

## Asset Status Overlay

## Problem

Tracking asset production status inside Unreal often relies on external tools or naming conventions.

This creates friction in the workflow. Artists and designers have to constantly context switch to understand what is done, in progress, or needs attention.

There is no native way to visualize status directly on assets in the editor.

## Solution

A plugin that adds visual status indicators directly on asset thumbnails in the Content Browser and provides a viewport debug visualization.

It allows teams to track asset progress in context, without leaving the editor.

## Features

### Thumbnail Overlay

- Customizable status labels with colors
- Configurable font size for overlays

<img src="https://github.com/user-attachments/assets/610f5290-5fe8-4d1a-a953-b395addd09ae" width="714" height="400" />

### Metadata and Status Management

- Status persistence via asset metadata
- Quick status assignment in Content Browser via context menu
- Bulk assign or remove status
- Quick status removal via context menu
- Assign status directly from level selection

<img src="https://github.com/user-attachments/assets/6c077a69-4da3-41ed-9956-8b5b71218cee" width="714" height="400" />
<img src="https://github.com/user-attachments/assets/4393e30d-bbcc-49ec-b65b-e86a24c53188" width="714" height="400" />
<img src="https://github.com/user-attachments/assets/330b8844-3b39-4c66-885c-554996d30ed6" width="714" height="400" />
<img src="https://github.com/user-attachments/assets/4f0fc80a-b192-41c2-9ad2-d1b7914fb614" width="714" height="400" />

### Level Visualization

- Viewport status visualization for actor and material status

<img src="https://github.com/user-attachments/assets/dfa40971-0b93-40a2-90c8-8eeb940c8dc9" width="714" height="400" />

- Actor overlay is applied at actor level
- For multiple materials, the color represents an average of material statuses

<img src="https://github.com/user-attachments/assets/4cc05bac-efd8-40fb-a7fe-619490011a96" width="714" height="400" />

## Installation

Enable the plugin:

Edit → Plugins → Editor → Asset Status Overlay

## Configuration

Project Settings → Asset Status Overlay

<img src="https://github.com/user-attachments/assets/5138766c-914c-4aa9-8cb6-fb6be15034c2" width="714" height="400" />

## Tips and Best Practices

- Refresh thumbnails by changing folders or switching Content Browser view mode
- Establish consistent status naming conventions
- Use distinct colors for different status levels
- Update statuses as assets progress
- Configure status options before rolling out to a team

<img src="https://github.com/user-attachments/assets/f694fbc9-8de6-4733-a673-12e3a1988f8c" width="714" height="400" />

## Technical Details

- Status stored as `AssetStatus` metadata tag
- No additional files or databases required
- Clean removal via metadata tag deletion

## Requirements

- Unreal Engine 5.6 and 5.7
- Editor Scripting Utilities plugin auto enabled

## Download

**Get it here:**  
https://fab.com/s/d783d916db7e

# Current Version: 3.0
* Bug fixing and optimization
* (New Feature) Added status change feature in context menu (right click menu, in the level)
* Material Status Visualizer now shows an average of all Statuses colors if more than 1 is on that mesh. If it's only one it will show the status color of that one. (old version was just displaying first material status)
* Added an option for the visualizer in the Project Settings, now you can pick between Lit and Unlit mode (this should help increase visibility for most lightning conditions in your level)
* Auto Save setting added, now it no longer automatically saves the asset after a status change (by default, its now a toggle option in settings), this is to align with UE's edit & saving.
* Changing font size now lets you know you need to restart your engine.

# Version: 2.0

* Bug fixing and optimization
* Added viewport overlay debug

# * Version: 1.0
* Initial release
* Core status overlay functionality
* Status removal capability
* Customizable statuses and appearance
* Content Browser integration
* Configurable font size
