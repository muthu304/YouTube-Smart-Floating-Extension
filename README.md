# YouTube Smart Floating Extension

A lightweight Chrome extension that keeps the YouTube video visible while you scroll.  
When you scroll past the main video player, it automatically becomes a **floating, draggable mini-player** that stays on screen — allowing you to read comments, browse, and multitask without pausing the video.

---

## ✨ Features

- ✅ Auto-detects YouTube video on watch pages
- ✅ Converts the video into a **floating mini-player** while scrolling
- ✅ **Draggable** — move the player anywhere on the screen
- ✅ **Smooth transition** with preserved layout (no page jump)
- ✅ Works on all YouTube video URLs
- ✅ Clean, no data collection, no API keys

---

## 🎯 Why I Built This

I wanted to improve the YouTube experience by keeping the video visible even when scrolling to read comments.  
This project helped me understand:

- DOM manipulation
- Scroll event handling
- CSS transforms and fixed positioning
- Drag and drop logic in JavaScript
- How Chrome extensions inject content scripts

> *This project was built as a learning exercise with guidance from ChatGPT, and I fully understand the logic behind each component.*

---

## 🧩 How It Works

When scrolling past the original player:
- A placeholder is inserted to maintain layout
- The video switches to `position: fixed` and scales down
- Drag behavior is added so users can reposition it freely

When scrolling back up:
- The video returns to its original position and size

---

## 📁 Project Structure

youtube-smart-floating-extension/
│
├─ manifest.json
├─ content.js
├─ styles.css
└─ README.md

---

## 🚀 Installation (Local Testing)

1. Open **Chrome**
2. Go to `chrome://extensions/`
3. Enable **Developer Mode** (top-right)
4. Click **Load Unpacked**
5. Select the project folder

Open any YouTube video → scroll → enjoy the floating player 🎬

---

## 👨‍💻 Author

Muthugurubharath N
github: muthu304

---

## 📝 License

This project is open-source. You may modify and use it freely.
