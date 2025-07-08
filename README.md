# Decamond Assignment Flow Project

A simple yet robust authentication system built with Next.js (App Router),
TypeScript, and SCSS Modules. This project demonstrates a complete
authentication flow, from a login page with validation to a protected dashboard
page, with a focus on code quality, reusability, and modern front-end practices.
The user interface is in Persian and styled for a right-to-left (RTL) layout.

![Login Page Screenshot](https://placehold.co/600x400/EFEFEF/333333?text=Login+Page+Screenshot)
![Dashboard Screenshot](https://placehold.co/600x400/EFEFEF/333333?text=Dashboard+Screenshot)

---

## ✨ Features

- **Authentication Flow**: Secure login and logout functionality.
- **Protected Routes**: The dashboard is only accessible to authenticated users.
- **Redirect Logic**: Users are automatically redirected based on their
  authentication status.
- **API Integration**: Fetches user data from the `randomuser.me` API upon
  login.
- **Input Validation**: Validates Iranian phone numbers on the client-side.
- **Reusable Components**: Modular `Input` and `Button` components for a
  consistent UI.
- **Responsive Design**: Fully responsive layout for mobile, tablet, and desktop
  devices.
- **RTL Support**: Styled for right-to-left languages (Persian).
- **TypeScript**: Fully typed codebase for enhanced safety and developer
  experience.
- **SCSS Modules**: Scoped and well-structured styling with nested selectors.

---

## 🛠️ Tech Stack

- **[Next.js](https://nextjs.org/)**: React framework for production.
- **[React](https://reactjs.org/)**: JavaScript library for building user
  interfaces.
- **[TypeScript](https://www.typescriptlang.org/)**: Typed superset of
  JavaScript.
- **[Sass (SCSS Modules)](https://sass-lang.com/)**: CSS preprocessor for more
  maintainable styles.
- **[Vazirmatn Font](https://github.com/rastikerdar/vazirmatn)**: For Persian
  text rendering.

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your
local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/en/) (version 18.x or later) and
[npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) installed on your
machine.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result. The application will automatically redirect you to the `/auth` page.

---

## 📁 Folder Structure

The project follows the Next.js App Router structure, with a clear separation of
concerns.

. ├── app/ │ ├── auth/ # Login page route │ │ ├── auth.module.scss │ │ └──
page.tsx │ ├── dashboard/ # Dashboard page route │ │ ├── dashboard.module.scss │
│ └── page.tsx │ ├── globals.scss # Global styles │ ├── layout.tsx # Root layout
│ ├── page.module.scss # Styles for the root page │ └── page.tsx # Root page
(handles redirection) ├── components/ │ ├── Button/ │ │ ├── Button.module.scss │
│ └── Button.tsx │ └── Input/ │ ├── Input.module.scss │ └── Input.tsx ├── types/
│ └── api.ts # TypeScript types for API responses └── utils/ └── validation.ts #
Validation utility functions

---

## 👤 Author

**[Ali Monapour]**

- GitHub: [@alimonapour](https://github.com/alimonapour)
- LinkedIn: [Ali Monapour](https://www.linkedin.com/in/alimonapour/)
