<script>
  import { onMount } from "svelte";

  let lamp = null;
  let lighton = false;

  console.log(lamp);

  const handleclick = () => {
    lighton = !lighton;
    console.log(lighton);

    if (lighton) {
      lamplight.set(true);
    } else {
      lamplight.set(false);
    }
  };

  onMount(async () => {
    console.log(lamp);
  });
</script>

<svg
  id="lamp"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  x="0px"
  y="0px"
  viewbox="0 0 1236.3 677.8"
  style="enable-background:new 0 0 1236.3 677.8;"
  xml:space="preserve">
  <style type="text/css">
    .la0 {
      opacity: 0.36;
      fill: var(--sun);
    }
    .la1 {
      fill: var(--sun);
    }
    .la2 {
      fill: none;
      stroke: var(--white);
      stroke-width: 8;
      stroke-miterlimit: 10;
    }
    .la3 {
      fill: var(--red);
    }
  </style>

  <g class:lightshow="{lighton}" id="light">
    {#if lighton}
      <circle class="la0" cx="227.5" cy="477.4" r="188.9"></circle>
      <circle class="la0" cx="227.5" cy="477.4" r="139.1"></circle>
      <circle class="la1" cx="227.5" cy="477.4" r="89.4"></circle>
    {/if}
  </g>

  <g id="Layer_1">

    <path class="la2" d="M229.4,256.8c0,0,392.9-437.5,1010.7-69.9"></path>
    <svg bind:this="{lamp}" on:click="{handleclick}">
      <path
        class="la3"
        d="M227.6,249.2C101.9,249.2,0,351.1,0,476.8h455.2C455.2,351.1,353.3,249.2,227.6,249.2z"></path>
    </svg>
  </g>
</svg>
<!-- <script>
  
  import { onMount } from 'svelte';
  
  onMount(async () => {
  
var el = document.getElementById("lamp");
  
  el.onclick = function(){
            el.classList.toggle("lightshow");
  };
      
      
        });

</script> -->

<style>
  svg {
    width: 100%;
  }

  #light {
  }
</style>
