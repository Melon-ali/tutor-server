# tutor-server

# 🎓 tutor-server – Find & Connect with the Best Tutors  

🚀 **tutor-server** is a platform where students can discover qualified tutors, book sessions, and manage their learning journey.  

Live : 

```
https://tutor-server-mu.vercel.app
```

## 🌟 Features  
### 🔹 **Students**  
- 🏫 **Find Tutors:** Search by subject, grade, or name.  
- 📅 **Book Sessions:** View tutor availability and schedule lessons.  
- ⭐ **Ratings & Reviews:** Share your learning experience.  

### 🔹 **Tutors**  
- 👨‍🏫 **Create a Profile:** List subjects, qualifications, and experience.  
- 🕒 **Manage Availability:** Accept and manage bookings.  
- 💰 **Track Earnings:** View completed sessions and payments.  

### 🔹 **Admin**  
- 👨‍🏫 **Manage student and tutor:** List student and tutor management.  
- 🕒 **Manage Category:** Accept and manage bookings.  
- 💰 **Manage Subject** View Subjects and Manage. 

---

## 🚀 Tech Stack  
### **Frontend:**  
- ⚡ **Next.js 15** – SEO-friendly & optimized for performance  
- 🎨 **TypeScript + Tailwind CSS** – Modern, responsive UI  

### **Backend:**  
- 🔧 **Node.js + Express.js** – Scalable REST API  
- 🗄️ **MongoDB + Mongoose** – NoSQL database  
- 🔐 **JWT + bcrypt** – Secure authentication  

### **Payment Integration:**  
- 💳 **SSLCommerz / Stripe / PayPal** 




---

## 🔧 Installation  
```bash
# Clone the repository
git clone https://github.com/Melon-ali/tutor-server
cd tutor-server

# Install dependencies
npm install

# Run the backend
npm run dev

```

---

## 🔧 .env.local Setup
```bash

NODE_ENV=development
PORT=8080
DATABASE_URL=<Your mongoDB URL>
BCRYPT_SALT_ROUNDS=<Your Bcrypt salt rounds>
JWT_ACCESS_SECRET=<Your JWT access secret>
JWT_REFRESH_SECRET=<Your JWT refresh secret>
JWT_ACCESS_EXPIRES_IN=<Your JWT access expires in>
JWT_REFRESH_EXPIRES_IN=<Your JWT refresh expires in>

STORE_ID=<Your SSL Commerze store id>
STORE_PASS=<Your SSL Commerze store password>


```