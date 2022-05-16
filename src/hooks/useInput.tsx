import { useState, useCallback } from "react";

type Output = [string, (value?: string) => void];

export function useInput(initialValue: string = ""): Output {
  const [value, setInputValues] = useState<string>(initialValue);

  const setInput = useCallback((event: any) => {
    setInputValues({ [event.target.name]: event.target.value });
  }, []);
  return [value, setInput];
}
