# Phone Number Authentication Demo

This is a simple **authentication demo** built with **Next.js (App Router)**.  
It uses **phone number validation** (via a mock API) for login and manages authentication state through **cookies** and **localStorage**.  

The project contains only **two pages**:
- **Login Page** – Users enter their phone number for quick validation.
- **Dashboard Page** – Displays a welcome message with the user’s full name after login.

Users can **log in** and **log out**, with state handled by both localStorage (for user details) and cookies (for authentication).

---

## 🚀 Features

- ✅ Phone number authentication (fake/mock validation for demo purposes)  
- ✅ Authentication state stored in **cookies**  
- ✅ User profile data saved in **localStorage**  
- ✅ Login and Logout functionality  
- ✅ Redirect to dashboard if already logged in  
- ✅ Built with **Next.js App Router** and **React**  

---

## 🛠️ Tech Stack

- **Next.js** (App Router)  
- **React**  
- **Tailwind CSS** (for styling)  

---

## 📂 Project Structure

│── src/
│ ├── app/
│ │ ├── auth/ # Login page
│ │ │ └── _components/ # Auth form components
│ │ └── dashboard/ # Dashboard page
│ ├── utils/
│ │ └── validation.js # Phone number validation helper
│ └── assets/ # SVG and static assets
│── package.json
│── README.md

---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/phone-auth-demo.git
   cd phone-auth-demo
Install dependencies

```bash
npm install
or if you use Yarn:
yarn install
Run the development server


npm run dev
or:
yarn dev
Open your browser and navigate to:


http://localhost:3000
