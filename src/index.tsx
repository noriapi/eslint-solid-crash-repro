import { createSignal } from "solid-js";

export const createSome = () => {
  const [a] = createSignal("a" as string);

  return a;
};
