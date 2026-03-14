<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/c53737cb-c343-4774-8d71-5765e885dc6a

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Create `.env.local` and set these values:
   - `GEMINI_API_KEY`
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
   - optional: `MAIL_TO` (defaults to `venkatcharan.ds@gmail.com`)
3. Run the contact API in one terminal:
   `npm run dev:api`
4. Run the app in another terminal:
   `npm run dev`
