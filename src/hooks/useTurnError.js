import { useState } from "react";

export const useTurnError = () => {
  const [error, setError] = useState(false);
  const on = () => setError(true);
  const off = () => setError(false);
  const toggle = () => setError(error => !error);

  return { error, toggle,  on, off };
};