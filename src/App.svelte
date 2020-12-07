<script>
  export let name;
  import Hero from "./components/Hero.svelte";
  import Nav from "./components/_Nav.svelte";
  import Clouds from "./components/Clouds.svelte";
  import TypeMain from "./components/TypeMain.svelte";
  import GlyphMain from "./components/GlyphMain.svelte";
  import Playground from "./components/Playground.svelte";
  import Purchase from "./components/Purchase.svelte";
  import Footer from "./components/Footer.svelte";
  import Wave from "./components/Wave.svelte";
  import Cursor from "./components/_Cursor.svelte";

  import {
    WIDTH,
    HEIGHT,
    scrollY,
    mousePos,
    TOUCH,
    lamplight,
  } from "./components/stores.js";
  let whirlybirdie = null;
  let whirlybats = null;
  let playground = null;
  let purchase = null;

  let itemPos = [0, 0, 0, 0];

  if ("ontouchstart" in window || "ontouch" in window) {
    TOUCH.set(true);
  }

  let y = 0;
  let windowHeight = 0;
  let windowWidth = 0;
  let padding = 50;
  $: padding = windowWidth > 750 ? 50 : 20;
  $: {
    scrollY.set(y);
    HEIGHT.set(windowHeight);
    WIDTH.set(windowWidth);
    if (whirlybats && whirlybirdie && playground && purchase) {
      let whirlybirdiePos = whirlybirdie.offsetTop - padding;
      let whirlybatsPos =
        windowWidth > 750
          ? whirlybats.offsetTop + padding * 5
          : whirlybats.offsetTop - padding * 2.5;
      let playgroundPos = playground.offsetTop - padding * 2.5;
      let purchasePos = purchase.offsetTop - padding * 2.5;
      itemPos = [whirlybirdiePos, whirlybatsPos, playgroundPos, purchasePos];
    }
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
  on:mousemove="{onMouseMove}"
/>

<!--Handle Scroll and MousePos Events-->
<Cursor />
<main>
  <div style="background:var(--offwhite)">
    <section>
      <Nav positions="{itemPos}" scrollY="{y}" />
      <Hero />
    </section>

    <section class="type constrain" bind:this="{whirlybirdie}">
      <TypeMain />
    </section>

    <div class="fullWidth zig1 flipX">
      <Wave
        zig="{false}"
        color="{$WIDTH > 750 ? 'var(--blue)' : 'var(--lightnavy)'}"
      />
    </div>

    <section class="glyph blue constrain" bind:this="{whirlybats}">
      {#if windowWidth > 1200}
        <Clouds />
      {/if}
      <GlyphMain />
    </section>
  </div>

  <div class="fullWidth zig2">
    <Wave zig="{false}" color="{$lamplight ? '#101010' : '#d7c9c9'}" />
  </div>
  <section
    bind:this="{playground}"
    class="playground navy"
    style="{$lamplight ? 'background:#101010' : ''}"
  >
    <Playground />
  </section>

  <div class="fullWidth zig3 flipX">
    <Wave
      zig="{false}"
      color="{$WIDTH > 1024 ? 'var(--offwhite)' : 'var(--white)'}"
    />
  </div>
  <section bind:this="{purchase}" class="purchase">
    <Purchase />
  </section>
<!--   <div class="fullWidth zig4 flipXY">
    <Wave
      zig="{false}"
      color="{$WIDTH > 1024 ? 'var(--offwhite)' : 'var(--blue)'}"
    />
  </div> -->
</main>
<Footer />

<style>
  @font-face {
    font-family: "Whirly Birdie";
    src: url("https://cdn.glitch.com/1711052e-ea5e-4036-9c61-dd3ef6782855%2FWhirlyBirdieGX.ttf?v=1607226790987")
      format("truetype");
  }

  @font-face {
    font-family: "Whirlybats";
    src: url("https://cdn.glitch.com/1711052e-ea5e-4036-9c61-dd3ef6782855%2FWhirlybatsGX.ttf?v=1607306916801")
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
    /*     --blue: #63a6cb; */
    --blue: #4f9bc4;
    --sun: #fec031;
    --forest: #464d33;
    /*   --green: #678d66; */
    /*     --green: #60985f; */
    --green: #457544;
    --medgreen: #47c981;
    --lightgreen: #ccd9d1;
    /*   --wood: #AD6C2F; */
    --orange: #ff8729;
    --wood: #663d16;
    --navy: #112b5a;
    --lightnavy: #274a8c;
    --offwhite: #fbefe0;
    /*   --offwhite: #f4f7fa; */
    --lightgrey: #d5d4d4;

    --radius: 0;
    --margin: 80px;
    --rowGap: 0;
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
    cursor: none;
  }
  
  :global(*){
    cursor: none !important;
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

  main {
    /*     background:var(--offwhite); */
    position: relative;
    z-index: 1;
/*     margin-bottom: -5vw; */
  }

  section {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(min-content, max-content);
    /*     column-gap: var(--colGap); */
    row-gap: var(--rowGap);
    margin: 0;
    padding: 0 var(--margin) 0 var(--margin);
    position: relative;
  }
  section.constrain {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .flipX {
    -moz-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    transform: scaleX(-1);
  }
  .flipY {
    -moz-transform: scaleY(-1);
    -webkit-transform: scaleY(-1);
    -o-transform: scaleY(-1);
    transform: scaleY(-1);
  }
  .flipXY {
    -moz-transform: scale(-1, -1);
    -webkit-transform: scale(-1, -1);
    -o-transform: scale(-1, -1);
    transform: scale(-1, -1);
  }
  .type {
    z-index: 3;
  }
  .zig1 {
    margin-top: calc(var(--padding) * -4);
  }
  .glyph {
    padding-top: calc(var(--padding) * 6);
  }
  .playground {
    padding: 0 0 calc(var(--padding) * 4) 0;
  }
  .purchase {
    padding: calc(var(--padding) * 2) var(--margin) calc(var(--padding) * 2)
      var(--margin);
    background: var(--offwhite);
    display: flex;
    row-gap: 0;
  }
  .blue {
    padding-bottom: calc(var(--padding) * 5);
    background: var(--blue);
  }
  .zig2 {
    margin-top: calc(var(--padding) * -2.49);
  }
  .zig3 {
    margin-top: calc(var(--padding) * -2.49);
  }
  .zig4 {
    margin-top: -2px;
  }
  .navy {
    background: #d7c9c9;
  }
  .fullWidth {
    width: 100vw;
    height: auto;
    overflow: hidden;
    margin-bottom: -1px;
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
    .purchase {
      flex-direction: column-reverse;
      align-items: center;
      margin: 0;
      padding: 0;
      background: var(--white);
    }
  }
  @media screen and (max-width: 750px) {

    section.constrain {
      display: grid;
      padding: 0;
      z-index: 0;
    }
    :root {
      --margin: 20px;
      --padding: 20px;
    }
    .zig0 {
      display: block;
    }
    .zig1 {
      margin-top: calc(var(--padding) * -2);
    }
    .zig1,.zig2,.zig3{
      display:none;
    }
  }
  @media screen and (max-width: 600px) {
    :root {
      --radius: 0;
      --margin: 8px;
      --padding: 20px;
      --rowGap: 0;
    }
  }
</style>
