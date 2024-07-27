import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import PageNav from "../components/PageNav";
import { useAuth } from "../Context/FakeAuthContext";
import styles from "./Login.module.css";
import { useEffect, useState } from "react";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { Login, isAuthenticated } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    if (email !== "jack@example.com" || password !== "qwerty") {
      setError("Invalid email or password");
      return;
    }

    Login(email, password);
  }

  useEffect(
    function () {
      if (isAuthenticated) {
        navigate("/app", { replace: true });
      }
    },
    [isAuthenticated, navigate]
  );

  return (
    <main className={styles.login}>
      <PageNav />

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          {error && <p className={styles.error}>{error}</p>}
          <Button onClick={handleSubmit} type="primary">
            Login
          </Button>
        </div>
      </form>
    </main>
  );
}
