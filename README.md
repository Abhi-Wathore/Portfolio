# 🚀 Abhishek Wathore – Portfolio Website

A modern, responsive **portfolio website** built with **React, TypeScript, Vite, Tailwind CSS, and Supabase**.  
This project showcases my skills, projects, and experience as a **Software Developer**, along with a fully functional contact form.

---

## 🌐 Live Preview
> (Add your deployed URL here once live)

```
https://abhi-wathore.github.io/Portfolio/

```

---

## 🛠️ Tech Stack

- **Frontend:** React + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Backend / BaaS:** Supabase
- **Database:** PostgreSQL (via Supabase)
- **Auth & Security:** Supabase Auth + RLS
- **Email Notifications:** Supabase Edge Functions
- **Deployment Ready:** Vercel / Netlify

---

## ✨ Features

- ⚡ Fast and optimized Vite setup
- 🎨 Modern UI with Tailwind CSS
- 🌙 Dark / Light mode support
- 📱 Fully responsive design
- 🧩 Modular component structure
- 📬 Contact form with Supabase backend
- 📧 Email notifications on new messages
- 🔐 Secure database access using RLS
- 🚀 Production-ready architecture

---

## 📂 Project Structure

```
portfolio/
├── public/
│   └── portfolio.png
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   ├── lib/
│   │   └── supabase.ts
│   ├── index.css
│   ├── App.tsx
│   └── main.tsx
├── supabase/
│   └── migrations/
├── .env
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Environment Variables
Create a `.env` file in the root:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

### 4️⃣ Run locally
```bash
npm run dev
```

Open in browser:
```
http://localhost:5173
```

---

## 🗄️ Supabase Setup

- Create a **Supabase project**
- Add a `contacts` table
- Enable **Row Level Security (RLS)**
- Allow:
  - Public `INSERT` for contact form
  - Authenticated `SELECT` for admin access
- Configure **Edge Function** for email notifications

---

## 📬 Contact Form Flow

```
User submits form
   ↓
Supabase INSERT (public)
   ↓
Database Trigger
   ↓
Edge Function
   ↓
Email notification sent
```

---

## 🔒 Security

- No service keys exposed to frontend
- RLS enabled on all tables
- Email logic handled server-side
- Environment variables secured

---

## 🚀 Deployment

You can deploy this project easily on:
- **Vercel**
- **Netlify**
- **Cloudflare Pages**

Just add the same environment variables on the platform.

---

## 📈 Future Enhancements

- Admin dashboard for messages
- Auto-reply emails
- Spam protection (CAPTCHA)
- Blog section
- Analytics integration

---

## 👨‍💻 Author

**Abhishek Wathore**  
Software Developer  

---

## 📄 License

This project is licensed under the **MIT License**.  
You are free to use and modify it for personal or commercial projects.

---

⭐ If you like this project, don’t forget to star the repo!
