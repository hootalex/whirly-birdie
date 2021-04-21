<script>
  import {onMount} from 'svelte'
  import { WIDTH, HEIGHT, TOUCH, scrollY } from "./stores.js";
  import {
    setCursor_Pointer,
    setCursor_Default
  } from "./_Cursor.svelte";
  export let positions = [100, 200, 300, 400];
  let currentIndex = 0
  $:{
    if($scrollY){
      currentIndex = findIndex(positions, $scrollY)
      // console.log(currentIndex)
    }
  }
  let selected = false;
  let bg;
  let buttonHover = false;
  let loaded = false

  let findIndex = (arr, val) => {
    let index = 0;
    arr.forEach((e, i) => {
      index = val >= e && index < i ? i : index;
    });
    return index;
  };

  let handleClick = (index) => {
    window.scrollTo(0, positions[index]);
    scrollY.set(positions[index] + 200)
    setTimeout(() => {
      selected = false;
    }, 300);
  };
  
  $:{
    console.log()
  }
  
  onMount(()=>{
    loaded = true
  })
</script>

<button
  class="wb-icon notranslate
         {selected ? 'wb-iconend' : ''}
         {$scrollY < positions[0] || !loaded ? 'hide' : ''}
         "
  type="button"
  on:mouseenter="{()=>{
    setCursor_Pointer()
    buttonHover = true;
  }}"
  on:mouseleave="{()=>{
    setCursor_Default()
    buttonHover = false;
  }}"
  on:click="{() => {
    selected = !selected;
  }}"
>
  {#if selected}
  χ
  {:else if currentIndex === 1}  
  O
  {:else if currentIndex === 2}
  ω
  {:else if currentIndex === 3}
  $
  {:else}
  1
  {/if}
</button>

<nav class="hide notranslate {selected ? 'expanded' : ''}">
  <div
    bind:this="{bg}"
    class="bg 
           {buttonHover && !$TOUCH ? 'hover' : ''}
           {$scrollY < positions[0] || !loaded  ? 'hide' : ''}"
    style="{selected ? 'transform:scale(' + (Math.max($WIDTH, $HEIGHT) / bg.offsetWidth) * 2.5 + ');-webkit-transform:scale(' + (Math.max($WIDTH, $HEIGHT) / bg.offsetWidth) * 2.5 + ')' : ''}"
  ></div>

  <h2
    class:selected="{0 === findIndex(positions, $scrollY)}"
    on:mouseenter="{setCursor_Pointer}"
    on:mouseleave="{setCursor_Default}"
    on:click="{() => handleClick(0)}"
  >
    <span class="wb-icon">1</span>
    <span>W</span><span>h</span><span>I</span><span>r</span><span>l</span><span
      class="kerny"
    >y</span>
    <span>B</span><span>i</span><span>r</span><span>d</span><span>i</span><span
    >e</span>
  </h2>

  <h2
    class:selected="{1 === findIndex(positions, $scrollY)}"
    on:mouseenter="{setCursor_Pointer}"
    on:mouseleave="{setCursor_Default}"
    on:click="{() => handleClick(1)}"
  >
    <span>W</span><span>h</span><span>I</span><span>r</span><span>l</span><span
      class="kerny"
    >y</span><span>b</span><span>a</span><span class="kerny">t</span><span
    >s</span>
    <span class="wb-icon">O</span>
  </h2>

  <h2
    class:selected="{2 === findIndex(positions, $scrollY)}"
    on:mouseenter="{setCursor_Pointer}"
    on:mouseleave="{setCursor_Default}"
    on:click="{() => handleClick(2)}"
  >
    <span class="wb-icon">ω</span>
    <span>P</span><span>l</span><span>a</span><span class="kerny">y</span><span
      class="kernhalf"
    >g</span><span>r</span><span>o</span><span>u</span><span>n</span><span
    >d</span>
  </h2>

  <h2
    class:selected="{3 === findIndex(positions, $scrollY)}"
    on:mouseenter="{setCursor_Pointer}"
    on:mouseleave="{setCursor_Default}"
    on:click="{() => handleClick(3)}"
  >
    <span>B</span><span>u</span><span>y</span>
    <span>N</span><span>o</span><span>w</span><span>!</span>
    <span class="wb-icon">$</span>
  </h2>
</nav>

<style>
  h2 {
    cursor: none;
  }

  h2 span {
    display: inline-block;
    font-variation-settings: "wght" 74, "wdth" 75, "ital" 0;
  }

  h2 span:nth-child(odd) {
    transform: translateY(2px);
  }

  h2 span:nth-child(even) {
    color: var(--wood);
  }

  h2 span:nth-child(3n) {
    color: var(--blue);
  }

  h2 span:nth-child(4n) {
    color: var(--green);
  }

  h2 span:nth-child(5n) {
    color: var(--wood);
  }

  h2.selected span {
    color: var(--green);
  }
  h2.selected span:nth-child(even) {
    color: var(--green);
  }

  h2.selected span:nth-child(3n) {
    color: var(--green);
  }

  h2.selected span:nth-child(4n) {
    color: var(--green);
  }

  h2.selected span:nth-child(5n) {
    color: var(--green);
  }

  .kerny {
    margin-left: -0.7vw;
  }

  .kernhalf {
    margin-left: -0.2vw;
  }

  .wb-icon {
    font-family: "Whirlybats";
    font-variation-settings: "anim" 100;
    display: inline-block;
    white-space: nowrap;
    transition: font-variation-settings 0.4s, transform 0.4s, opacity 0.4s;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: "liga";
    -webkit-font-smoothing: antialiased;
  }
  h2 span.wb-icon {
    color: var(--black);
  }
  h2.selected .wb-icon {
    color: var(--green);
  }
  .wb-iconend {
    transition: font-variation-settings 0s, transform 0.4s, opacity 0.4s;
    font-variation-settings: "anim" 200;
  }

  button {
    position: fixed;
    top: 0px;
    left: 0;
    z-index: 999;
    background: transparent;
    color: var(--black);
    width: 80px;
    height: 80px;
    border: none;
    font-weight: normal;
    font-size: 40px;
    text-align: center;
    transform-origin:center;
    -webkit-transform-origin: center;
    transition:.4s;
    transform:scale3d(1,1,1);
    -webkit-transform:scale3d(1,1,1);
    opacity:1;
    padding:0;
  }
  button.hide{
    opacity:0;
    pointer-events:none;
    transform:scale3d(0,0,0);
    -webkit-transform:scale3d(0,0,0);
  }
  button:hover {
    cursor: none;
  }
  nav {
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    z-index: 998;
    pointer-events: none;
    /*     opacity:0; */
    transition: 0.5s;
  }
  h2 {
    font-size: 6vw;
    margin: 30px;
    opacity: 0;
    transition: 0.5s;
    z-index: 999;
    font-weight: normal;
  }
  .expanded h2 {
    opacity: 1;
  }
  .bg {
    content: "";
    position: fixed;
    top: 0px;
    left: 0;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: var(--white);
    transform-origin: center;
    -webkit-transform-origin: center;
    transform: scale(0.8);
    -webkit-transform: scale(0.8);
    transition: 0.45s;
    /*     opacity:0; */
  }
  .bg.hide{
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  .bg.hover {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
  .expanded .bg {
    background: #e3f5ff;
    transition: 0.65s;
    opacity: 1;
  }
  /*   nav.expanded:before{
    transform:scale3d(80,80,80)
  } */
  nav.expanded {
    pointer-events: all;
    opacity: 1;
  }
  @media screen and (max-width: 1024px){
    .bg{
background:#e3f5ff
}
}
/*   @media screen and (max-width: 1024px) {
    button{
      color: var(--white);
      mix-blend-mode:difference;
    }
  } */
  @media screen and (max-width: 600px) {
    button,
    .bg {
      width: 64px;
      height: 64px;
      font-size: 32px;
    }

    h2 span {
      font-size: 9vw;
    }

    /*     button,.bg{
      left:0;
      bottom:0;
    } */
  }

  @media (hover: hover) {
    h2 span:hover {
      transform: translateY(-4px);
    }
    h2 span:hover {
      font-variation-settings: "wght" 90, "wdth" 90, "ital" 0;
    }

    h2 .wb-icon:hover {
      font-variation-settings: "anim" 200;
    }
  }
</style>
