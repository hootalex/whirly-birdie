<script>
  export let name;
  import Hero from "./components/Hero.svelte";
  import Nav from "./components/_Nav.svelte";
  import Coaster from "./components/Coaster-gsap.svelte";
  import TypeMain from "./components/TypeMain.svelte";
  import GlyphMain from "./components/GlyphMain.svelte";
  import Playground from "./components/Playground.svelte";
  import Wave from "./components/Wave.svelte";
  import {
    WIDTH,
    HEIGHT,
    scrollY,
    mousePos,
    TOUCH,
  } from "./components/stores.js";
  import Inview from "svelte-inview";

  let ref1;
  let batsInView = false;

  if ("ontouchstart" in window || "ontouch" in window) {
    TOUCH.set(true);
  }

  $: {
    if (batsInView) {
      // document.body.classList.add('blue')
    } else {
      // document.body.classList.remove('blue')
    }
  }

  let y = 0;
  let windowHeight = 0;
  let windowWidth = 0;

  $: {
    scrollY.set(y);
    HEIGHT.set(windowHeight);
    WIDTH.set(windowWidth);
  }

  let onMouseMove = (e) => {
    mousePos.set({
      x: e.clientX,
      y: e.clientY,
    }); //Set global mouse position value
  };
</script>

<!--Handle Scroll and MousePos Events-->
<svelte:window
  bind:scrollY="{y}"
  bind:innerHeight="{windowHeight}"
  bind:innerWidth="{windowWidth}"
  on:mousemove="{onMouseMove}" />

<!--Handle Scroll and MousePos Events-->
<section >
  <Nav/>
  <Hero />
</section>
<section>
    <TypeMain />
</section>

<div class="fullWidth">
  <Wave zig="{false}" color="{'var(--blue)'}" />
</div>


  <section bind:this="{ref1}" class="glyph blue" >
<!--     <Coaster /> -->
    <GlyphMain />
  </section>

<div class="fullWidth">
  <Wave zig="{false}" color="{'#d7c9c9'}" />
</div>
<section class="playground navy">
  <Playground />
</section>

<style>
  @font-face {
    font-family: "Whirly Birdie";
    src: url("https://cdn.glitch.com/1711052e-ea5e-4036-9c61-dd3ef6782855%2FWhirlyBirdieGX.ttf?v=1601410185751")
      format("truetype");
  }

  @font-face {
    font-family: "Whirlybats";
    src: url("https://cdn.glitch.com/1711052e-ea5e-4036-9c61-dd3ef6782855%2FWhirlybatsGX.ttf?v=1601389249451")
      format("truetype");
  }

  @font-face {
    font-family: "Whirlybats UI";
    src: url("https://cdn.glitch.com/1711052e-ea5e-4036-9c61-dd3ef6782855%2FWhirlybatsUIGX.ttf?v=1596161084186")
      format("truetype");
  }

  @font-face {
    font-family: "Nicholson Beta";
    src: url("https://cdn.glitch.com/1711052e-ea5e-4036-9c61-dd3ef6782855%2FNicholsonGothicsw-Regular.woff2?v=1598380691911")
      format("woff2");
  }
  
    @font-face {
    font-family: "Nicholson Beta Bold";
    src: url("https://cdn.glitch.com/1711052e-ea5e-4036-9c61-dd3ef6782855%2FNicholsonGothic-Bold.otf?v=1601341212402")
      format("opentype");
  }

  /* Master colors */

  :root {
    --black: #000000;
    --white: #ffffff;
    /*   --red: #fc4347; */
    --red: #e5332a;
    /*   --blue: #7ca0c9; */
    --blue: #63a6cb;
    --sun: #fec031;
    --forest: #464d33;
    /*   --green: #678d66; */
    --green: #60985f;
    --medgreen: #47c981;
    --lightgreen: #ccd9d1;
    /*   --wood: #AD6C2F; */
    --wood: #663d16;
    --navy: #112b5a;
    --lightnavy: #274a8c;
    --offwhite: #fbefe0;
    /*   --offwhite: #f4f7fa; */
    --lightgrey: #d5d4d4;

    --radius: 45px;
    --margin: 80px;
    --rowGap: 20px;
    --colGap: 16px;
    --padding: 50px;
  }

  :global(::selection) {
    background: var(--sun); /* WebKit/Blink Browsers */
  }

  :global(::-moz-selection) {
    background: var(--sun); /* Gecko Browsers */
  }

  :global(html),
  :global(body) {
    font-family: "Whirly Birdie";
    font-variation-settings: "wght" 75, "wdth" 110, "ital" 0;
    margin: 0;
    padding: 0;
    background-color: var(--offwhite);
    transition: background 0.125s;
  }

  :global(body.blue) {
    background-color: var(--blue);
  }

  @keyframes -global-basicAnimation {
    0% {
      font-variation-settings: "anim" 100;
    }
    100% {
      font-variation-settings: "anim" 200;
    }
  }

  @keyframes -global-basicAnimationDelay {
    0% {
      font-variation-settings: "anim" 100;
    }
    70% {
      font-variation-settings: "anim" 100;
    }
    100% {
      font-variation-settings: "anim" 200;
    }
  }

  section {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(min-content, max-content);
    column-gap: var(--colGap);
    row-gap: var(--rowGap);
    margin: 0;
    padding: calc(var(--padding) * 2) var(--margin) calc(var(--padding) * 2) var(--margin);
    position: relative;
  }
  .playground {
    padding: 0 0 calc(var(--padding) * 2) 0;
  }
  .blue {
    margin-bottom:calc(var(--padding) * -2.5);
    padding-bottom:calc(var(--padding) * 5);
    background: var(--blue);
  }
  .navy {
    background: #d7c9c9;
  }
  .fullWidth {
    width: 100vw;
    height: auto;
    overflow: hidden;
  }

  /* no outline for non-keyboard-inputs elements */
  :global(button:focus),
  :global(input:focus),
  :global(label:focus),
  :global(:focus),
  :global(select:focus) {
    outline: none;
  }

  :global(body.user-is-tabbing *:focus),
  :global(body.user-is-tabbing input:focus + container) {
    outline: 2px solid #7aacfe !important; /* for non-webkit browsers */
    outline: 5px auto -webkit-focus-ring-color !important;
  }
  @media screen and (max-width: 1024px) {
    :root {
      --margin: 40px;
    }
  }
  @media screen and (max-width: 750px) {
    :root {
      --margin: 20px;
      --padding: 20px;
    }
  }
  @media screen and (max-width: 600px) {
    :root {
      --radius: 20px;
      --margin: 8px;
      --padding: 20px;
      --rowGap: 20px;
    }
  }
</style>
