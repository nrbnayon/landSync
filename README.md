# LandSync

LandSync is a modern, comprehensive web application built with [Next.js 16](https://nextjs.org/) for managing land parcel data. It features a robust Role-Based Access Control (RBAC) system, ensuring secure and tailored experiences for both Administrators and active Users.

## 🚀 Features

-   **Secure Authentication**: Complete auth flow including Login, Registration, Forgot/Reset Password, and OTP Verification using JWT (JSON Web Tokens).
-   **Role-Based Access Control (RBAC)**:
    -   **Admin**: Full access to manage users, system settings, and comprehensive data views.
    -   **User**: Dedicated dashboard for managing personal or assigned land data.
-   **Data Management**:
    -   Interactive dashboards for visualizing and managing land parcels.
    -   Export capabilities to Excel and PDF formats.
-   **Modern UI/UX**:
    -   Built with **Tailwind CSS 4** for a sleek, responsive design.
    -   **Framer Motion** for smooth, engaging animations.
    -   **Radix UI** primitives for accessible, high-quality components.
    -   Dark/Light mode support via `next-themes`.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/), [HugeIcons](https://hugeicons.com/)
-   **Forms & Validation**: [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)
-   **Data Handling**: `exceljs`, `jspdf`
-   **Auth & Security**: `jose` (JWT)

## 📂 Project Structure

```bash
LandSync/
├── app/
│   ├── (auth)/          # Authentication routes (login, register, etc.)
│   ├── (roles)/         # Protected routes requiring specific roles
│   │   ├── admin/       # Admin-specific pages
│   │   ├── user/        # User-specific pages
│   │   └── dashboard/   # General dashboard
│   ├── api/             # API routes
│   └── globals.css      # Global styles
├── components/          # Reusable UI components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and configurations
├── public/              # Static assets
└── ...
```

## ⚡ Getting Started

### Prerequisites

Ensure you have the following installed:
-   [Node.js](https://nodejs.org/) (Latest LTS recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/land-sync.git
    cd land-sync
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Environment Setup:**
    Create a `.env` file in the root directory based on your configuration requirements (e.g., API endpoints, JWT secrets).

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Scripts

-   `npm run dev`: Starts the development server with Turbopack.
-   `npm run build`: Builds the application for production.
-   `npm start`: Runs the built production application.
-   `npm run lint`: Runs ESLint to check for code quality issues.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
