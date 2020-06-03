import { writable } from 'svelte/store';

export const scrollY = writable(0);
export const mousePos = writable({x:0,y:0})
export const typeColor = writable({selected:null,type:'var(--black)',bg:'var(--white)'})
export const glyphColor = writable({selected:null,type:'var(--black)',bg:'var(--white)'})
