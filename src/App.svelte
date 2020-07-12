<script>
	export let name;
	import Hero from './components/Hero.svelte';
	import TypeMain from './components/TypeMain.svelte'
	import GlyphMain from './components/GlyphMain.svelte'
	import { scrollY, mousePos } from './components/stores.js';
  
  let y = 0

  $:{
    scrollY.set(y)
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
bind:scrollY={y}
on:mousemove={onMouseMove}
/> 

<!--Handle Scroll and MousePos Events-->
<main>
  <Hero/>
  <TypeMain/>
  <GlyphMain/>
</main>

<style>
  @font-face {
  font-family: "Whirly Birdie";
  src: url("https://cdn.glitch.com/1711052e-ea5e-4036-9c61-dd3ef6782855%2FWhirlyBirdieGX.ttf?v=1594486166041")
    format("truetype");
}

@font-face {
  font-family: "Whirlybats";
  src: url("https://cdn.glitch.com/1711052e-ea5e-4036-9c61-dd3ef6782855%2FWhirlybatsGX.ttf?v=1594475225985")
    format("truetype");
}

@font-face {
  font-family: "Whirlybats UI";
  src: url("https://cdn.glitch.com/1711052e-ea5e-4036-9c61-dd3ef6782855%2FWhirlybatsUIGX.ttf?v=1591649382889")
    format("truetype");
}

@font-face {
  font-family: "Nicholson Beta";
  src: url("https://cdn.glitch.com/1711052e-ea5e-4036-9c61-dd3ef6782855%2Fnicholsonbeta-webfont.woff2?v=1584151257949")
    format("woff2");
}

/* Master colors */

:root {
  --black: #000000;
  --white: #ffffff;
  --red: #fc4347;
  --blue: #7ca0c9;
  --sun: #fec031;
  --forest: #464D33;
  --green: #70936f;
  --lightgreen: #CCD9D1;
  --wood: #AD6C2F;
  --navy: #1D3767;
  --offwhite: #fff4e7;
  --lightgrey:#d5d4d4;
  
  --radius: 45px;
  --margin: 40px;
  --padding: 50px;
}

:global(html), :global(body) {
  font-family: "Whirly Birdie";
  font-variation-settings: "wght" 75, "wdth" 110, "ital" 0;
  margin:0;
  padding:0;
background-color: var(--offwhite);
}

@keyframes -global-basicAnimation {
  0%   { font-variation-settings: "anim" 100; }
  100% { font-variation-settings: "anim" 200; }
}
  
	main {
		display:grid;
		grid-template-columns: repeat(12, 1fr);
		grid-auto-rows: minmax(min-content, max-content);
		column-gap: 16px;
		row-gap: 40px;
		margin: 0 var(--margin) 0 var(--margin);
		min-height: 500vh;
	}
  
  	/* no outline for non-keyboard-inputs elements */
	:global(button:focus),
	:global(input:focus),
	:global(label:focus),
	:global(select:focus){
	  outline: none;
	}
  
  :global(body.user-is-tabbing *:focus),
	:global(body.user-is-tabbing input:focus + container) {
	  outline: 2px solid #7AACFE !important; /* for non-webkit browsers */
	  outline: 5px auto -webkit-focus-ring-color !important;
	}
  @media screen and (max-width: 750px) {
	:root{
    --margin:20px;
    --padding:20px;
  }
  }
  @media screen and (max-width: 600px) {
	:root{
    --margin:0px;
    --padding:20px;
  }
}

</style>