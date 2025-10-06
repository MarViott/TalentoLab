// src/components/LoginButton.jsx
import React from 'react';
import { loginWithGoogle } from '../api/google';
export default function LoginButton() {
  return <button onClick={loginWithGoogle}>Iniciar sesión con Google</button>;
}

