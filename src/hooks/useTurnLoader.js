import { useState } from "react";

export const useTurnLoader = () => {
  const [loading, setLoading] = useState(false);
  const onLoading = () => setLoading(true);
  const offLoading = () => setLoading(false);
  const toggleLoading = () => setLoading(loading => !loading);

  return { loading, toggleLoading,  onLoading, offLoading };
};