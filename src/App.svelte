<script>
	export let name;
	import Hero from './components/Hero.svelte';
	import TypeMain from './components/TypeMain.svelte'
	import GlyphMain from './components/GlyphMain.svelte'
	import { scrollY, mousePos } from './components/stores.js';
	let onScroll = e => {
		scrollY.set(e.target.documentElement.scrollTop) //Set global scroll value
	}
	let onMouseMove = e => {
		mousePos.set({
			x:e.clientX,
			y:e.clientY
		})  //Set global mouse position value
	}
</script>

<!--Handle Scroll and MousePos Events-->
<svelte:window 
on:scroll={onScroll}
on:mousemove={onMouseMove}
/> 

<!--Handle Scroll and MousePos Events-->
<main>
  <Hero/>
  <TypeMain/>
  <GlyphMain/>
</main>

<style>
	main {
		display:grid;
		grid-template-columns: repeat(12, 1fr);
		grid-auto-rows: minmax(min-content, max-content);
		column-gap: 16px;
		row-gap: 40px;
		margin: 0 40px 0 40px;
		min-height: 500vh;
	}

</style>