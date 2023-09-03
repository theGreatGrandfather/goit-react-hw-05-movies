import { useState } from "react";

export const useTurnLoader = () => {
  const [loading, setLoading] = useState(false);
  const on = () => setLoading(true);
  const off = () => setLoading(false);
  const toggle = () => setLoading(loading => !loading);

  return { loading, toggle,  on, off };
};