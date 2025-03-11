// src/pages/NotFound.tsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4">
      <h1 className="text-4xl font-bold mb-4">404 - صفحه پیدا نشد</h1>
      <p className="mb-6">مسیر وارد شده وجود ندارد.</p>
      <Link to="/dashboard" className="text-blue-600 underline">
        بازگشت به داشبورد
      </Link>
    </div>
  );
}
