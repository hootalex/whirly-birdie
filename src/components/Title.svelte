<script>
import Bird from './Bird.svelte';
import { scrollY } from './stores.js';
import { spring } from 'svelte/motion';

const yMax = spring(0,{
		stiffness: 0.08,
	  damping: 0.5
  })

scrollY.subscribe(value => {
  let inc = .2
  let windowHeight = window.innerHeight
	let minMax = Math.min(Math.max(parseInt(value*inc), 0), windowHeight*.7*inc);
  yMax.set(minMax)
})

</script>


<div class="titleContainer">
  <Bird message={'A new Font!'}/> 
  <h1>
    <div class="title" aria-label="Whirly Birdie!">
      <span class="char6" style="transform: translate({-$yMax*.5}px,{5 - $yMax*.5}px)" aria-hidden="true">W</span
      ><span class="char7" style="transform: translate({-$yMax*.5}px,{-5 + $yMax*.5}px)" aria-hidden="true">h</span
      ><span class="char8" style="transform: translate(0px,{5 - $yMax*.5}px)" aria-hidden="true">i</span
      ><span class="char9" style="transform: translate({$yMax*.5}px,{-5 + $yMax*.5}px)" aria-hidden="true">r</span
      ><span class="char10" style="transform: translate({$yMax*.5}px,{5 - $yMax*.5}px)" aria-hidden="true">l</span
      ><span class="char11" style="transform: translate({$yMax}px,{-5 + $yMax*.5}px)" aria-hidden="true" >y</span
      ><span class="char12" aria-hidden="true"> </span
      ><span class="char13" style="transform: translate({-$yMax}px,{5 + $yMax}px)" aria-hidden="true">B</span
      ><span class="char14" style="transform: translate({-$yMax*.5}px,{-5 + $yMax*2}px)" aria-hidden="true">i</span
      ><span class="char15" style="transform: translate({-$yMax*.5}px,{5 + $yMax}px)" aria-hidden="true">r</span
      ><span class="char16" style="transform: translate(0px,{-5 + $yMax*2}px)" aria-hidden="true">d</span
      ><span class="char17" style="transform: translate({$yMax*.5}px,{5 + $yMax}px)" aria-hidden="true">i</span
      ><span class="char18" style="transform: translate({$yMax*.5}px,{-5 + $yMax*2}px)" aria-hidden="true">e</span
      ><span class="char19" style="transform: translate({$yMax}px,{5 + $yMax}px)" aria-hidden="true">!</span>
    </div>
  </h1>
</div>

<style>
.titleContainer{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  position:relative;
  width:100%;
  height:80vh;
  margin-bottom:-10vh;
  z-index: 1;
}
  h1 {
    font-weight: normal;
    font-size: 10vw;
    font-variation-settings: "wght" 100, "wdth" 150, "ital" 0;
    line-height: 1.1;
    color: var(--black);
    text-align: center;
    padding: 0 0 0 0;
    margin: 0;
  }

  .title span {
    display: inline-block;
  }

  .title .char12 {
    display: block;
  }

  .char7, .char17 {
    color: var(--red);
  }

  .char9, .char15, .char19 {
    color: var(--blue);
  }

  .char11, .char13 {
    color: var(--green);
  }

  .char11 {
    margin-left: -3.5vw;
  }

  .char7, .char9, .char11, .char14, .char16, .char18 {
    transform: translateY(-5px);
  }

  .char6, .char8, .char10, .char13, .char15, .char17, .char19 {
    transform: translateY(5px);
  }
  
    @media screen and (max-width: 875px) {
    .title {
      font-size: 20vw;
      font-family: "Whirly Birdie";
      font-variation-settings: "wght" 80, "wdth" 50;
      line-height: 1;
    }

    .char11 {
      margin-left: -2.5vw;
    }
  }

  @media screen and (max-width: 600px) {
    .title {
      font-size: 30vw;
      font-family: "Whirly Birdie";
      font-variation-settings: "wght" 80, "wdth" 50;
      line-height: 1;
    }

    .char11 {
      margin-left: -4vw;
    }
  }
</style>