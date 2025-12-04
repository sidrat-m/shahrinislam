# IEB Election Site

This project contains the frontend application for the IEB Election Site, built with Next.js.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)

## Downloading the Project from Git

### Option 1: Clone the Repository (Recommended)

If you have Git installed, clone the repository using:

```bash
git clone https://github.com/Talhanasar/IEB-Election-Site.git
cd IEB-Election-Site
```

### Option 2: Download as ZIP

1. Navigate to the repository on GitHub/GitLab
2. Click the "Code" or "Download" button
3. Select "Download ZIP"
4. Extract the ZIP file to your desired location
5. Open a terminal/command prompt in the extracted folder

## Starting the Frontend Server

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   
   Or if you're using yarn:
   ```bash
   yarn install
   ```
   
   Or if you're using pnpm:
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   
   Or if you're using yarn:
   ```bash
   yarn dev
   ```
   
   Or if you're using pnpm:
   ```bash
   pnpm dev
   ```

4. **Open your browser:**
   The application will be available at [http://localhost:3000](http://localhost:3000)

   You should see the application running. The page will automatically reload when you make changes to the code.

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run start` - Starts the production server (requires building first)
- `npm run lint` - Runs ESLint to check code quality

## Troubleshooting

- **Port 3000 already in use:** If port 3000 is already occupied, you can specify a different port:
  ```bash
  npm run dev -- -p 3001
  ```

- **Dependencies not installing:** Try deleting `node_modules` and `package-lock.json`, then run `npm install` again.

- **Module not found errors:** Ensure you're in the `frontend` directory when running npm commands.

## Project Structure

```
IEB-Election-Site/
├── frontend/          # Next.js frontend application
│   ├── app/          # Application pages and layouts
│   ├── components/   # React components
│   ├── lib/          # Utility functions
│   └── public/       # Static assets
└── README.md         # This file
```

