"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "royal_authenticated";

/** Mock: validação client-side, sem backend. Senhas aceitas no Vercel. */
const MOCK_PASSWORDS = ["sarm1234"];

function isPasswordValid(input: string): boolean {
  if (typeof window === "undefined") return false;
  const envPass = process.env.NEXT_PUBLIC_SITE_PASSWORD;
  if (envPass && input === envPass) return true;
  return MOCK_PASSWORDS.includes(input);
}

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const checkAuth = useCallback(() => {
    if (typeof window === "undefined") return false;
    try {
      return sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      return false;
    }
  }, []);

  useEffect(() => {
    if (mounted && checkAuth()) {
      setAuthenticated(true);
    }
  }, [mounted, checkAuth]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (isPasswordValid(password)) {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // ignore
      }
      setAuthenticated(true);
    } else {
      setError("Senha incorreta. Tente novamente.");
    }
  };

  if (!mounted) {
    return (
      <div className="password-gate">
        <div className="password-gate-inner">
          <div className="password-gate-loading" />
        </div>
      </div>
    );
  }

  if (authenticated) {
    return <>{children}</>;
  }

  return (
    <div className="password-gate">
      <div className="password-gate-overlay" />
      <div className="password-gate-inner">
        <div className="password-gate-card">
          <h1 className="password-gate-title">ROYAL</h1>
          <p className="password-gate-subtitle">Conteúdo exclusivo</p>
          <form onSubmit={handleSubmit} className="password-gate-form">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite a senha"
              className="password-gate-input"
              autoFocus
              autoComplete="current-password"
              aria-label="Senha de acesso"
            />
            <button type="submit" className="password-gate-btn">
              ENTRAR
            </button>
          </form>
          {error && <p className="password-gate-error">{error}</p>}
        </div>
      </div>
    </div>
  );
}
