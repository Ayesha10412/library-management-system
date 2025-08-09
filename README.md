# 📚 Minimal Library Management System- LibraTech

### **Live Demo:** [https://library-management-system-client-one.vercel.app/](https://library-management-system-client-one.vercel.app/)

---

## **Overview**

The **Minimal Library Management System** is a simple, functional, and responsive web application built with **React**, **TypeScript**, and **Redux Toolkit Query (RTK Query)**.
It allows users to **view, add, edit, delete, and borrow books** without any authentication. The project demonstrates **state management, API integration**, and **clean UI design**.

---

## **✨ Features**

### **1. Public Access**

- All routes are accessible without login or authentication.

### **2. Book Management**

- View all books in a table format with details:

  - Title, Author, Genre, ISBN, Copies, Availability, and Actions.

- **Add Book**: Create a new book with all required details.
- **Edit Book**: Update existing book details.
- **Delete Book**: Remove books with a confirmation dialog.
- Automatic availability status update when copies reach 0.

### **3. Borrow Books**

- Borrow a book with:

  - Quantity (cannot exceed available copies)
  - Due Date

- Updates book availability in real-time.
- Redirects to **Borrow Summary** after borrowing.

### **4. Borrow Summary**

- Displays an aggregated list of borrowed books with:

  - Book Title
  - ISBN
  - Total Quantity Borrowed

### **5. Responsive UI**

- Built with **Tailwind CSS** for a clean and adaptive layout.
- Works on **mobile, tablet, and desktop** devices.

---

### **🔮Future Improvements**

-While the current version delivers all core features, there are several potential enhancements for future iterations:

-Authentication & Authorization
Add user login and role-based access (e.g., admin, librarian, member) to restrict certain actions.

-Search & Filter
Implement search by title, author, ISBN, and filters for genre or availability.

-Pagination & Sorting
Add server-side pagination and sorting options for large book collections.

-Overdue Management
Track overdue books and send automated reminders to borrowers.

-Return Book Feature
Allow users to mark a book as returned, updating available copies automatically.

-Category Management
Add genre/category creation and filtering.

-Export Data
Allow exporting book and borrow data to CSV or PDF.

-PWA Support
Make the application installable and usable offline.

## **🖥️ Pages**

| Path              | Description                                |
| ----------------- | ------------------------------------------ |
| `/books`          | List of all books with management actions. |
| `/create-book`    | Add a new book.                            |
| `/books/:id`      | View a book's detailed information.        |
| `/edit-book/:id`  | Edit existing book details.                |
| `/borrow/:bookId` | Borrow a selected book.                    |
| `/borrow-summary` | View borrowed books summary.               |

---

## **🛠️ Tech Stack**

| Layer            | Technology                |
| ---------------- | ------------------------- |
| Frontend         | React + TypeScript        |
| State Management | Redux Toolkit + RTK Query |
| Backend          | Node.js + Express.js      |
| Database         | MongoDB + Mongoose        |
| Styling          | Tailwind CSS +  shadcn/ui + daisyUI |

---

## **📡 API Features**

- **Books API**: CRUD operations for books.
- **Borrow API**: Borrow book, and fetch borrow summary.
- Pagination-ready book listings.
- Proper error handling for user-friendly messages.

---

## **🚀 Getting Started**

### **Prerequisites**

- Node.js >= 16
- npm or yarn

### **Installation**

```bash
# Clone the repository
git clone <your-repo-link>

# Install dependencies
cd frontend
npm install

### **Environment Variables**

Create a `.env` file in the backend with:
Create a .env file in the backend with:

PORT=5000
MONGODB_URI=<your-mongodb-uri>

### **Run Locally**

# Start frontend
cd frontend
npm run dev
```

---

## **📦 Deployment**

- **Frontend**: [Vercel](https://vercel.com/)
- **Backend**: [Vercel](https://vercel.com/) or any Node hosting service
- **Database**: MongoDB Atlas

---
