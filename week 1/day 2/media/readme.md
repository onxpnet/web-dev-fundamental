

# Learning HTML Media Elements

## Overview

This document provides an introduction to HTML media elements, including images, audio, video, and iframes. These elements are used to embed multimedia content into web pages.

## Image

To display an image on a webpage, use the `<img>` tag.

### Syntax

```html
<img src="image-url.jpg" alt="Description of Image" width="300" height="200">
```

Attributes
- src: Specifies the URL of the image.
- alt: Provides alternative text for the image if it cannot be displayed.
- width and height: Define the dimensions of the image.

## Audio

To embed an audio file, use the <audio> tag.

### Syntax

```html
<audio controls>
  <source src="audio-file.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

Attributes
- controls: Adds playback controls (play, pause, volume) to the audio player.
- src: Specifies the URL of the audio file. Example: src="audio-file.mp3".
- type: Specifies the MIME type of the audio file. Example: type="audio/mpeg".

## Video

To embed a video file, use the `<video>` tag.

### Syntax

```html
<video width="640" height="360" controls>
  <source src="video-file.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

Attributes
- controls: Adds playback controls (play, pause, volume) to the video player.
- width and height: Define the dimensions of the video in pixels. Example: width="640" height="360".
- src: Specifies the URL of the video file. Example: src="video-file.mp4".
- type: Specifies the MIME type of the video file. Example: type="video/mp4".

## Iframe

To embed another webpage or content within your page, use the `<iframe>` tag.

### Syntax

```html
<iframe src="https://www.example.com" width="600" height="400" frameborder="0">
  Your browser does not support iframes.
</iframe>
```

Attributes
- src: Specifies the URL of the page to display. Example: src="https://www.example.com"
- width and height: Define the dimensions of the iframe in pixels. Example: width="600" height="400".
- frameborder: Specifies whether to display a border around the iframe. Example:  frameborder="0" (0 for no border).
