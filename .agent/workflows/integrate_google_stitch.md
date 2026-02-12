---
description: How to import Google Stitch UI designs into the project
---

# Integrating Google Stitch Designs

Google Stitch is an AI UI design tool that exports HTML/CSS. To "connect" it with Antigravity (this coding assistant), follow these steps:

1. **Generate & Export in Stitch**
   - Create your design in Google Stitch.
   - Click the **Export** or **Code** button.
   - Choose **HTML/CSS** (or React if available).
   - Copy the code or download the files.

2. **Bring it to Antigravity**
   - **Option A (Paste):** Simply paste the code into the chat and say: *"Convert this Stitch code to a React component using Tailwind CSS."*
   - **Option B (File):** Save the code to a file (e.g., `stitch_export.html`) in your project folder.
   - Then tell me: *"Read stitch_export.html and refactor it into src/components/NewComponent.jsx"*

3. **Antigravity Transformation**
   - I will take the raw HTML/CSS and:
     - Convert it to JSX.
     - Replace raw CSS with Tailwind classes (matching your project's style).
     - Split it into reusable components if needed.
     - Hook it up to your `router.jsx` or existing pages.

## Example Request
> "I have a design from Stitch for a new Login page. Here is the HTML code: [paste code]. Please replace my current Login.jsx with this design."
