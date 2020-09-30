import { writable } from "svelte/store";

export const scrollY = writable(0);
export const HEIGHT = writable(0);
export const WIDTH = writable(0);
export const TOUCH = writable(false);
export const mousePos = writable({ x: 0, y: 0 });
export const typeDemoInView = writable(-1);
export const typeColor = writable({
  selected: null,
  type: "var(--black)",
  type2: "var(--white)",
  bg: "var(--white)",
  bg2: "var(--blue)",
  alpha: ".05",
});
export const glyphColor = writable({
  selected: null,
  type: "var(--black)",
  type2: "var(--white)",
  bg: "var(--white)",
  bg2: "var(--blue)",
  alpha: ".05",
});

export const lamplight = writable(false);
