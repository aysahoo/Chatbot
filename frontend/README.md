# Chatbot Project

## Folder Structure

```
/Chatbot
  /frontend      # React/Vite app
    /src
    ...
  /backend       # Express/OpenAI server
    index.js
    .env
    ...
```

## How to Run

### 1. Start the backend
```
cd backend
npm run dev
```

### 2. Start the frontend
```
cd ../frontend
npm run dev
```

- The frontend will be available at http://localhost:5173 (default Vite port)
- The backend will run at http://localhost:5000

## Environment Variables
- Place your OpenAI API key in `backend/.env`:
  ```
  OPENAI_API_KEY=sk-...your-key...
  ```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Backend Setup

1. Create a `server` folder in the project root.
2. Add an `index.js` file inside `server` (see below for code).
3. Run `npm install express cors axios dotenv` in the root directory.
4. Create a `.env` file in the root with your OpenAI key:
   ```
   OPENAI_API_KEY=sk-...your-key...
   ```
5. Start the backend with:
   ```
   npm run server
   ```
