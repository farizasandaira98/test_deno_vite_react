# 🚀 Building a Web App with Deno + React + TypeScript + Vite

Welcome to your project that combines the power of **Deno** for your backend, **React** for your frontend, and **Vite** for blazing-fast development! This setup ensures you can create modern web apps with minimal overhead. 

## 🛠️ Project Setup

Follow these steps to get your project up and running in no time:

1. **Clone the Repository**:
   ```bash
   git clone <your-repo-url>
   cd <your-project-directory>
2. **Install Dependencies: We use Vite and Deno, so first, ensure both are installed globally:
   ```bash
   npm install
3. Start Development: Kick off both the backend and frontend servers with a single command:
   ```bash
   npm run dev
the API will run on the port specified in your api/main.ts.
Vite will launch your React app.

# 📝 Scripts Breakdown
Here's what each script in the project does:

# Command	Description
npm run dev	Runs both the Deno backend (dev:api) and the Vite dev server (dev:vite) simultaneously.
npm run serve	Builds the project and starts the Deno server (for when you're ready to deploy or serve the app).
npm run build	Compiles TypeScript (tsc -b) and builds your frontend assets with Vite.
npm run lint	Runs ESLint to catch code issues and keep everything clean and consistent.
npm run preview	Previews the production build of the frontend using Vite's preview mode.

# Detailed Scripts:
dev: Concurrently runs the Deno backend and the Vite frontend.
serve: Builds the project and starts the backend for production.
build: Builds both TypeScript and Vite assets for production.
lint: Lints the codebase using ESLint to catch common issues.
preview: Previews the production build with Vite.

# 🌱 Getting Started with Development

1. Backend Development:
   - Head over to api/main.ts to start adding your API routes and logic.
   - Run the backend in isolation using:
   ```bash
   npm run dev:api
   ```
   
2. Frontend Development:
  - Customize your React components in the src directory.
  - To work on the frontend only, use:
  ```bash
  npm run dev:vite
  ```

# 🧰 Tools & Technologies
Here's a quick overview of the tools used:
Deno: Modern runtime for JavaScript and TypeScript.
React: UI library for building user interfaces.
TypeScript: Strict syntactical superset of JavaScript.
Vite: Fast and lightweight build tool for modern web development.
ESLint: Linter for keeping your code clean and consistent.

# 🤔 Common Issues & Troubleshooting
Port Conflicts: If you're running multiple apps on the same port, update the port settings in your config files.
Deno Permissions: Deno runs in a sandboxed environment. Make sure you use the appropriate permissions like --allow-net and --allow-env in your scripts.
Vite Preview Issue: If the preview command fails, check if your production build was successful first.

# 💡 Tips
Use ESLint (npm run lint) regularly to ensure your code is following best practices.
Modify the scripts to suit your workflow. You can split frontend and backend development if needed.
Take advantage of Vite’s HMR (Hot Module Replacement) for fast feedback during development!

Happy coding! 🎉

