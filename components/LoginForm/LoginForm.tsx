"use client";
import { login } from "@/lib/auth";
import css from "./LoginForm.module.css";

const LoginForm = () => {
  const handleSubmit = async (formData: FormData) => {
    const body = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    await login(body);
  };
  return (
    <form className={css["loginForm"]} action={handleSubmit}>
      <input type="email" />
      <input type="password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
