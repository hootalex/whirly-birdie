import { writable } from 'svelte/store';

export const scrollY = writable(0);
export const mousePos = writable({x:0,y:0})
export const typeColor = writable({selected:null,type:'var(--black)',bg:'var(--white)',alpha:'.05'})
export const glyphColor = writable({selected:null,type:'var(--black)',bg:'var(--white)',alpha:'.05'})
