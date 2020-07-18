import { writable } from 'svelte/store';

export const scrollY = writable(0);
export const HEIGHT = writable(0);
export const WIDTH = writable(0);
export const mousePos = writable({x:0,y:0})
export const typeColor = writable({selected:null,type:'var(--black)',bg:'var(--white)',alpha:'.05'})
export const glyphColor = writable({selected:null,type:'var(--black)',type2:'var(--white)',bg:'var(--white)',bg2:'var(--blue)',alpha:'.05'})

export function constrain(value, constraints) {
    return Math.max(Math.min(value, constraints.max), constraints.min);
}
