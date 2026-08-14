"use client";
import { login } from "@/lib/auth";
import css from "./LoginForm.module.css";
import { useAuthStore } from "@/stores/authStore";

const LoginForm = () => {
  const setUser = useAuthStore((s) => s.setUser);

  const handleSubmit = async (formData: FormData) => {
    const body = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    const res = await login(body);
    setUser(res.user);
  };

  return (
    <form className={css["loginForm"]} action={handleSubmit}>
      <input type="email" name="email" defaultValue={"bc81@example.com"} />
      <input
        type="password"
        name="password"
        defaultValue={"bc81@example.com"}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
