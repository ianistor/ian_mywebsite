---
layout: tool
title: "News Board"
overlay_text: "Unreal Engine"
summary: "An Unreal Engine editor plugin for sharing project updates directly inside the editor."
image: https://raw.githubusercontent.com/ianistor/ian_website/main/assets/images/tools_showcase/newsboard/ProjectNews.png
tags: [production, communication, unreal]
featured: true
landing_position: 1
trailer_video: /assets/images/tools_showcase/newsboard/ProjectNews.png
trailer_fit: fit
links:
  - label: "Fab"
    url: "TBD"
---

# News Board

News Board is an Unreal Engine editor plugin for sharing project updates directly inside the editor. It gives the team a central Project News window where updates can be written as Unreal assets or as markdown/text files in the project Content folder.

The goal is to decrease the chances of missing important project changes/information. Artists, designers, and developers can see relevant news when they open the project, mark it as read, snooze it, or hide it until the message changes.

<img src="https://raw.githubusercontent.com/ianistor/ian_website/main/assets/images/tools_showcase/newsboard/ProjectNews.png" />

## What It Does

- Shows project news inside Unreal Editor.
- Opens a Project News popup on startup when there are unread updates.
- Lets users open the Project News window manually from the editor toolbar.
- Supports updates from Unreal `NewsBoard Asset` data assets.
- Supports updates from `.md` and `.txt` files under the configured Content folder.
- Tracks read, snooze, and dismissed state per user.
- Shows all posts in one list, with the current status shown on each post.
- Lets users mark a post as read or unread.
- Lets users snooze an update until tomorrow.
- Lets users hide an update until its content changes.

## Installation

1. Install the `NewsBoard` plugin from Fab.
2. Regenerate project files if needed.
3. Build or open the project in Unreal Engine 5.7.
4. Enable the plugin if Unreal asks for confirmation.
5. Restart the editor.

After the plugin is installed, News Board can be configured from:

`Project Settings -> Plugins -> NewsBoard`

## Opening News Board

News Board can open in two ways.

On editor startup, the Project News window opens automatically if there is at least one unread update that is allowed to show on startup.

You can also open it manually from the NewsBoard button in the main editor toolbar.

<img width="1130" height="433" alt="image" src="https://github.com/user-attachments/assets/b47e5ba1-c3d5-4dfc-b428-b9429a61f6a0" />


## Creating Updates With a NewsBoard Asset

Use a NewsBoard Asset when you want the update to live as an Unreal asset in the project.

1. In the Content Browser, create a new Data Asset.
2. Choose `NewsBoardAsset`.
3. Fill in the update fields.
4. Save the asset.

<img width="1233" height="369" alt="image" src="https://github.com/user-attachments/assets/7507a440-c648-4fa6-a9f7-aa08d9fc6de2" />


### Asset Fields

<img src="https://raw.githubusercontent.com/ianistor/ian_website/main/assets/images/tools_showcase/newsboard/ProjectNews_UAsset.png" />

`Show On Startup`

Controls whether this update can open the Project News popup when the editor starts. If the user already read, snoozed, or dismissed the update, it will not open again unless the update becomes unread for that user.

`Title`

The title shown in the left post list and at the top of the selected post.

`Published Date`

The date shown with the update. New assets default to the current local date and time, but the value can be edited manually.

`Tags`

Short labels shown under the post title. Tags are displayed as colored chips. They are visual labels only.

`Body`

The main update text. The body supports a small markdown-style subset for headings, bullets, image URL references, and inline emphasis. Keep in mind that images are not rendered inside the window.

`Sort Order`

Controls ordering. Higher numbers appear before lower numbers. If two posts have the same sort order, the newest publication date appears first.

## Creating Updates With Markdown or Text Files

Use markdown or text files when you want updates to be easy to edit outside Unreal.

By default, News Board scans:

`Content/NewsBoard`

Supported file types:

- `.md`
- `.txt`

The folder can be changed in:

`Project Settings -> Plugins -> NewsBoard -> Text Updates Folder`

### Markdown Front Matter

Markdown files can include front matter at the top of the file.

```md
---
title: "Asset Update"
date: 2026-05-09
tags: [production, workflow, assets]
---

# Asset Update

Your updates here.

```

Supported front matter fields:

`title`

Overrides the title shown in the post list.

`date`

Sets the published date. If no date is provided, the file modified time is used.

`tags`

Adds visual tag chips to the post.


## Supported Markdown

News Board supports the formatting currently needed for project update posts:

```md
# Heading 1
## Heading 2
### Heading 3

Regular paragraph text with **bold**, *italic*, and `inline code`.

- Bullet item
- Another bullet item

![Reference image](https://example.com/image.gif)
```

Notes:

- Headings are rendered as larger bold text.
- Bullet lines beginning with `- ` are rendered as list items.
- `**bold**` and `__bold__` render as bold.
- `*italic*` and `_italic_` render as italic.
- Backtick text renders as inline code.
- Markdown image syntax is shown as a URL/reference block. The image itself is not rendered.

## Read, Unread, Snooze, and Dismiss

Each user has their own read state. One person's read, snooze, or dismiss choice does not affect anyone else on the project.

`New`

The update has not been read by the current user.

`Read`

The update has been marked as read by the current user. Read posts remain visible in the window, but they do not trigger the startup popup.

`Snoozed`

The update is hidden from startup until the snooze time expires. The default snooze duration is 24 hours.

`Don't show again until update`

The update is treated as read and will not open the startup popup again until the update content changes.

## Marking a Post as Read or Unread

Select a post, then use the main action button at the bottom of the Project News window.

- If the post is new, the button says `Mark as Read`.
- If the post is already read, snoozed, or dismissed, the button says `Mark as Unread`.

You can also right-click a post in the list and choose:

- `Mark as Read`
- `Mark as Unread`

Marking a post as unread clears its read, snooze, and dismissed state for the current user.

## Startup Popup Behavior

The Project News popup opens on startup only when there is at least one unread update that has `Show On Startup` enabled.

If all updates are read, snoozed, or dismissed, the startup popup will not open.

The popup closes automatically after choosing:

- `Snooze until tomorrow`
- `Don't show again until update`

## Settings

News Board settings are available in:

`Project Settings -> Plugins -> NewsBoard`

`Show Startup Window`

Enables or disables the automatic Project News startup popup.

`Startup Delay Seconds`

How long News Board waits after editor startup before checking for unread updates.

`Default Snooze Hours`

How many hours `Snooze until tomorrow` should hide a post from startup.

`Text Updates Folder`

The folder under project Content where markdown and text updates are discovered. The default is `NewsBoard`, which maps to `Content/NewsBoard`.

## How Updates Are Tracked

News Board stores read, snooze, and dismiss information in Unreal's editor per-project user settings.

This means:

- The state is local to each user.
- It is not saved into the update asset.
- It is not written into shared project content.
- It should not interfere with other team members.

For NewsBoard Assets, the asset path is used as the stable identity for the update. Older assets that still have a hidden legacy update id continue to work.

For markdown/text files, the file path is used as the stable identity.

News Board also stores a content hash for read and dismissed states. When the update title, body, markdown image URL reference, or tags change, the hash changes and the update can appear as new again.

## Recommended Workflow

Use `NewsBoardAsset` for updates that should be authored and reviewed inside Unreal.

Use markdown files for longer posts, release notes, production notes, or updates that are easier to edit in a text editor.

Keep update titles short and clear.

Use tags for categories such as:

- `art`
- `tools`
- `animation`
- `pipeline`
- `release`
- `important`

Use `Sort Order` for priority when several posts share similar dates.

## Troubleshooting

### The Project News window does not open on startup

Check that:

- `Show Startup Window` is enabled in settings.
- At least one update has `Show On Startup` enabled.
- At least one update is still unread for the current user.
- The markdown file is inside the configured text updates folder.

### I do not see my markdown update

Check that:

- The file extension is `.md` or `.txt`.
- The file is under `Content/NewsBoard`, or under the folder configured in settings.
- The editor has been restarted or the NewsBoard window has been reopened.

### A post is not opening again after I changed it

News Board detects changes from the content hash. For assets, changing `Title`, `Body`, or `Tags` affects the hash. For markdown files, changing the body or front matter affects the hash.

If needed, right-click the post and choose `Mark as Unread`.

### One user marked a post as read, but another user still sees it

That is expected. Read state is per user, not shared with the project.

## Current Limitations

- Markdown support is intentionally limited to the subset used by project news posts.
- Images are not rendered in the Project News window. Markdown image syntax is displayed as a URL/reference block.
- The window does not currently auto-refresh when files are edited on disk while the window is already open.


# News Board

News Board is an Unreal Engine editor plugin for sharing project updates directly inside the editor. It gives the team a central Project News window where updates can be written as Unreal assets or as markdown/text files in the project Content folder.

The goal is to keep important project information close to the work. Artists, designers, and developers can see relevant news when they open the project, mark it as read, snooze it, or hide it until the message changes.

## What It Does

- Shows project news inside Unreal Editor.
- Opens a Project News popup on startup when there are unread updates.
- Lets users open the Project News window manually from the editor toolbar.
- Supports updates from Unreal `NewsBoard Asset` data assets.
- Supports updates from `.md` and `.txt` files under the configured Content folder.
- Tracks read, snooze, and dismissed state per user.
- Shows all posts in one list, with the current status shown on each post.
- Lets users mark a post as read or unread.
- Lets users snooze an update until tomorrow.
- Lets users hide an update until its content changes.

## Installation

1. Install the `NewsBoard` plugin from Fab.
2. Regenerate project files if needed.
3. Build or open the project in Unreal Engine 5.7.
4. Enable the plugin if Unreal asks for confirmation.
5. Restart the editor.

After the plugin is installed, News Board can be configured from:

`Project Settings -> Plugins -> NewsBoard`

## Opening News Board

News Board can open in two ways.

On editor startup, the Project News window opens automatically if there is at least one unread update that is allowed to show on startup.

You can also open it manually from the NewsBoard button in the main editor toolbar.

## Creating Updates With a NewsBoard Asset

Use a NewsBoard Asset when you want the update to live as an Unreal asset in the project.

1. In the Content Browser, create a new Data Asset.
2. Choose `NewsBoardAsset`.
3. Fill in the update fields.
4. Save the asset.

### Asset Fields

`Show On Startup`

Controls whether this update can open the Project News popup when the editor starts. If the user already read, snoozed, or dismissed the update, it will not open again unless the update becomes unread for that user.

`Title`

The title shown in the left post list and at the top of the selected post.

`Published Date`

The date shown with the update. New assets default to the current local date and time, but the value can be edited manually.

`Tags`

Short labels shown under the post title. Tags are displayed as colored chips. They are visual labels only.

`Body`

The main update text. The body supports a small markdown-style subset for headings, bullets, image URL references, and inline emphasis. Keep in mind that images are not rendered inside the window.

`Sort Order`

Controls ordering. Higher numbers appear before lower numbers. If two posts have the same sort order, the newest publication date appears first.

## Creating Updates With Markdown or Text Files

Use markdown or text files when you want updates to be easy to edit outside Unreal.

By default, News Board scans:

`Content/NewsBoard`

Supported file types:

- `.md`
- `.txt`

The folder can be changed in:

`Project Settings -> Plugins -> NewsBoard -> Text Updates Folder`

### Markdown Front Matter

Markdown files can include front matter at the top of the file.

```md
---
title: "Asset Update"
date: 2026-05-09
tags: [production, workflow, assets]
---

# Asset Update

Your updates here.

```

Supported front matter fields:

`title`

Overrides the title shown in the post list.

`date`

Sets the published date. If no date is provided, the file modified time is used.

`tags`

Adds visual tag chips to the post.


## Supported Markdown

News Board supports the formatting currently needed for project update posts:

```md
# Heading 1
## Heading 2
### Heading 3

Regular paragraph text with **bold**, *italic*, and `inline code`.

- Bullet item
- Another bullet item

![Reference image](https://example.com/image.gif)
```

Notes:

- Headings are rendered as larger bold text.
- Bullet lines beginning with `- ` are rendered as list items.
- `**bold**` and `__bold__` render as bold.
- `*italic*` and `_italic_` render as italic.
- Backtick text renders as inline code.
- Markdown image syntax is shown as a URL/reference block. The image itself is not rendered.

## Read, Unread, Snooze, and Dismiss

Each user has their own read state. One person's read, snooze, or dismiss choice does not affect anyone else on the project.

`New`

The update has not been read by the current user.

`Read`

The update has been marked as read by the current user. Read posts remain visible in the window, but they do not trigger the startup popup.

`Snoozed`

The update is hidden from startup until the snooze time expires. The default snooze duration is 24 hours.

`Don't show again until update`

The update is treated as read and will not open the startup popup again until the update content changes.

## Marking a Post as Read or Unread

Select a post, then use the main action button at the bottom of the Project News window.

- If the post is new, the button says `Mark as Read`.
- If the post is already read, snoozed, or dismissed, the button says `Mark as Unread`.

You can also right-click a post in the list and choose:

- `Mark as Read`
- `Mark as Unread`

Marking a post as unread clears its read, snooze, and dismissed state for the current user.

## Startup Popup Behavior

The Project News popup opens on startup only when there is at least one unread update that has `Show On Startup` enabled.

If all updates are read, snoozed, or dismissed, the startup popup will not open.

The popup closes automatically after choosing:

- `Snooze until tomorrow`
- `Don't show again until update`

## Settings

News Board settings are available in:

`Project Settings -> Plugins -> NewsBoard`

`Show Startup Window`

Enables or disables the automatic Project News startup popup.

`Startup Delay Seconds`

How long News Board waits after editor startup before checking for unread updates.

`Default Snooze Hours`

How many hours `Snooze until tomorrow` should hide a post from startup.

`Text Updates Folder`

The folder under project Content where markdown and text updates are discovered. The default is `NewsBoard`, which maps to `Content/NewsBoard`.

## How Updates Are Tracked

News Board stores read, snooze, and dismiss information in Unreal's editor per-project user settings.

This means:

- The state is local to each user.
- It is not saved into the update asset.
- It is not written into shared project content.
- It should not interfere with other team members.

For NewsBoard Assets, the asset path is used as the stable identity for the update. Older assets that still have a hidden legacy update id continue to work.

For markdown/text files, the file path is used as the stable identity.

News Board also stores a content hash for read and dismissed states. When the update title, body, markdown image URL reference, or tags change, the hash changes and the update can appear as new again.

## Recommended Workflow

Use `NewsBoardAsset` for updates that should be authored and reviewed inside Unreal.

Use markdown files for longer posts, release notes, production notes, or updates that are easier to edit in a text editor.

Keep update titles short and clear.

Use tags for categories such as:

- `art`
- `tools`
- `animation`
- `pipeline`
- `release`
- `important`

Use `Sort Order` for priority when several posts share similar dates.

## Troubleshooting

### The Project News window does not open on startup

Check that:

- `Show Startup Window` is enabled in settings.
- At least one update has `Show On Startup` enabled.
- At least one update is still unread for the current user.
- The markdown file is inside the configured text updates folder.

### I do not see my markdown update

Check that:

- The file extension is `.md` or `.txt`.
- The file is under `Content/NewsBoard`, or under the folder configured in settings.
- The editor has been restarted or the NewsBoard window has been reopened.

### A post is not opening again after I changed it

News Board detects changes from the content hash. For assets, changing `Title`, `Body`, or `Tags` affects the hash. For markdown files, changing the body or front matter affects the hash.

If needed, right-click the post and choose `Mark as Unread`.

### One user marked a post as read, but another user still sees it

That is expected. Read state is per user, not shared with the project.

## Current Limitations

- Markdown support is intentionally limited to the subset used by project news posts.
- Images are not rendered in the Project News window. Markdown image syntax is displayed as a URL/reference block.
- The window does not currently auto-refresh when files are edited on disk while the window is already open.
