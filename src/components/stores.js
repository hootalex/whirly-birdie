import { writable } from "svelte/store";

export const scrollY = writable(0);
export const HEIGHT = writable(0);
export const WIDTH = writable(0);
export const TOUCH = writable(false);
export const mousePos = writable({ x: null, y: null });
export const cursor = writable({ type: "default", state: 100 });
export const cursorAnim = writable(false);
export const typeDemoInView = writable(-1);
export const typeColor = writable({
  selected: "invert",
  type: "var(--white)",
  type2: "var(--offwhite)",
  bg: "var(--black)",
  bg2: "var(--red)",
  alpha: ".1",
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
