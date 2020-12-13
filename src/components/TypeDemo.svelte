<script>
  import { whirlyPresets } from "./config.js";
  import { TOUCH } from "./stores.js";
  import {
    setCursor_Pointer,
    setCursor_Default,
    setCursor_Grab,
    setCursor_Grabbing,
    setCursor_Edit,
  } from "./_Cursor.svelte";
  export let initialStyle = "whirly-birdie-medium";
  export let initialText = "Whirly Birdy is a cool font!";
  export let fontSize = "6vw";
  export let index = 0;

  const styleNames = Object.keys(whirlyPresets);
  let dom_node, cssString, variableAxis;
  let selected = initialStyle;
  let weightVal = 0;
  let isVisible = false;
  let ref1;

  const presetChanged = (e) => {
    if (e.options[e.selectedIndex].value !== "custom") {
      let customOption = dom_node.querySelector(".custom");
      selected = e.options[e.selectedIndex].value;
      customOption.hidden = true;
    }
  };

  const selectCustom = () => {
    let customOption = dom_node.querySelector(".custom");
    customOption.hidden = false;
    customOption.selected = true;
    // customOption.innerHTML = selected.replace(/-/g, ' ') + '*'
  };

  $: variableAxis = {
    width: whirlyPresets[selected].width,
    weight: whirlyPresets[selected].weight,
    italic: whirlyPresets[selected].italic,
  };

  $: cssString =
    "font-variation-settings:'wght' " +
    variableAxis.weight +
    ", 'wdth' " +
    variableAxis.width +
    ", 'ital' " +
    variableAxis.italic;
</script>

<section bind:this="{dom_node}">
  <div class="controls" bind:this="{ref1}">
    <div
      class="select"
      on:mouseenter="{setCursor_Pointer}"
      on:mouseleave="{setCursor_Default}"
    >
      <select
        aria-label="Type Presets"
        class="type-presets"
        on:change="{(e) => presetChanged(e.currentTarget)}"
      >
        <option hidden disabled class="custom" value="Custom">Custom</option>
        {#each styleNames as styleName}
          <option
            value="{styleName}"
            selected="{styleName === initialStyle ? true : false}"
          >
            {styleName.replace(/-/g, ' ')}
          </option>
        {/each}
      </select>
      <div class="select_arrow"></div>
    </div>

    <div class="sliders">
      <div
        class="slider"
        on:mouseenter="{setCursor_Grab}"
        on:mouseleave="{setCursor_Default}"
        on:mousedown="{setCursor_Grabbing}"
        on:mouseup="{setCursor_Grab}"
      >
        <label>Weight</label>
        <input
          aria-label="Weight Axis"
          type="range"
          min="50"
          max="100"
          value="{variableAxis.weight}"
          class="slider weight"
          on:input="{(e) => {
            selectCustom();
            variableAxis.weight = e.currentTarget.value;
          }}"
        />
      </div>
      <div
        class="slider"
        on:mouseenter="{setCursor_Grab}"
        on:mouseleave="{setCursor_Default}"
        on:mousedown="{setCursor_Grabbing}"
        on:mouseup="{setCursor_Grab}"
      >
        <label>Width</label>
        <input
          aria-label="Width Axis"
          type="range"
          min="50"
          max="150"
          value="{variableAxis.width}"
          class="slider width"
          on:input="{(e) => {
            selectCustom();
            variableAxis.width = e.currentTarget.value;
          }}"
        />
      </div>
      <div
        class="slider"
        on:mouseenter="{setCursor_Grab}"
        on:mouseleave="{setCursor_Default}"
        on:mousedown="{setCursor_Grabbing}"
        on:mouseup="{setCursor_Grab}"
      >
        <label>Italic</label>
        <input
          aria-label="Italic Axis"
          type="range"
          min="0"
          max="20"
          value="{variableAxis.italic}"
          class="slider italic"
          on:input="{(e) => {
            selectCustom();
            variableAxis.italic = e.currentTarget.value;
          }}"
        />
      </div>
    </div>

<!--     <svg
      width="50"
      height="13"
      viewBox="0 0 50 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.1215 3.85465C20.7446 6.95349 24.9999 13 24.9999 13C24.9999 13
        29.2554 6.80233 34.8785 3.85465C40.5015 0.906979 50 2.86102e-06 50
        2.86102e-06L-1.1365e-06 5.32481e-06C-1.1365e-06 5.32481e-06 9.49844
        0.755819 15.1215 3.85465Z"
        fill="{'var(--type)'}"
      ></path>
    </svg> -->
  </div>

  <p
    contenteditable="true"
    spellcheck="false"
    style="{cssString + ';font-size:' + fontSize}"
    on:mouseenter="{setCursor_Edit}"
    on:mouseleave="{setCursor_Default}"
  >
    {initialText}
  </p>
</section>

<style>
  :root {
    --type: #000000;
    --bg: #ffffff;
    --accent: rgba(0, 0, 0, 0.2);
  }
  section {
    margin-bottom: 30px;
  }
  hr {
    margin: 0;
    border-color: var(--type);
    width: 100%;
    opacity: calc(var(--alpha) * 2);
  }
  select,
  input,
  p {
    outline: none;
  }
  section {
    text-align: center;
    /*   display: flex;
  flex-direction: column;
  align-items: center; */
  }

  .controls {
    display: inline-block;
    padding: 15px;
    position: relative;
    user-select: none;
  }
  .controls:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 18px;
    background: var(--type);
    opacity: var(--alpha);
    pointer-events: none;
  }
  svg {
    position: absolute;
    opacity: calc(var(--alpha) * 3);
    top: calc(100%);
    left: calc(50% - 25px);
  }
  input {
    width: 100px;
  }

  .sliders {
    font-family: "Nicholson Beta";
    font-size: 13px;
    display: inline-block;
    color: var(--type);
    /*     font-feature-settings: "salt" 2; */
  }
  .slider {
    display: inline-block;
    margin: 8px 15px 8px 15px;
  }
  label {
    cursor: none;
  }
  p {
    font-size: 5vw;
    margin: 30px 10px 30px 10px;
    padding: 10px 0 12px 0;
    border-bottom: 0px solid var(--type);
    color: var(--type);
    position: relative;
    line-height: 1.1;
    /*   display: flex;
  justify-content: center; */
  }
  /* p:after{
  content:'';
  position:absolute;
  bottom:0;
  width:80%;height:2px;
  background: var(--type);
  opacity: .1;
  pointer-events: none;
  transition:width .24s;
}
p:hover:after{
  background:var(--bg2);
  opacity:1;
}
p:focus:after{
  background:var(--bg2);
  opacity:1;
  width:100%;
} */

  select,
  select option {
    text-transform: capitalize;
  }

input[type=range] {
 width: 100%;
 margin: 20px 0;
 background-color: transparent;
 -webkit-appearance: none;
}
input[type=range]:focus {
 outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
 background: var(--type);
 border: 0px solid var(--type);
 border: 0;
 width: 100%;
 height: 1px;
}
input[type=range]::-webkit-slider-thumb {
 margin-top: -15px;
 width: 50px;
 height: 31px;
 background: var(--type);
 border: 4.6px solid rgba(0, 0, 0, 0);
 border-radius: 2px;
 -webkit-appearance: none;
}
input[type=range]:focus::-webkit-slider-runnable-track {
 background: var(--type);
}
input[type=range]::-moz-range-track {
 background: var(--type);
 border: 0px solid var(--type);
 border: 0;
 width: 100%;
 height: 1px;
}
input[type=range]::-moz-range-thumb {
 width: 50px;
 height: 31px;
 background: var(--type);
 border: 4.6px solid rgba(0, 0, 0, 0);
 border-radius: 2px;
}
input[type=range]::-ms-track {
 background: transparent;
 border-color: transparent;
 border-width: 15px 0;
 color: transparent;
 width: 100%;
 height: 1px;
}
input[type=range]::-ms-fill-lower {
 background: var(--type);
 border: 0px solid var(--type);
 border: 0;
}
input[type=range]::-ms-fill-upper {
 background: var(--type);
 border: 0px solid var(--type);
 border: 0;
}
input[type=range]::-ms-thumb {
 width: 50px;
 height: 31px;
 background: var(--type);
 border: 4.6px solid rgba(0, 0, 0, 0);
 border-radius: 2px;
 margin-top: 0px;
 /*Needed to keep the Edge thumb centred*/
}
input[type=range]:focus::-ms-fill-lower {
 background: var(--type);
}
input[type=range]:focus::-ms-fill-upper {
 background: var(--type);
}
/*TODO: Use one of the selectors from https://stackoverflow.com/a/20541859/7077589 and figure out
how to remove the virtical space around the range input in IE*/
@supports (-ms-ime-align:auto) {
 /* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
 input[type=range] {
   margin: 0;
   /*Edge starts the margin from the thumb, not the track as other browsers do*/
 }
}


  .select {
    position: relative;
    display: inline-block;
    margin: 0 15px 0 0;
  }

  .select select {
    width: 230px;
    font-family: "Nicholson Beta";
    /*     font-feature-settings: "salt" 2; */
    font-size: 13px;
    display: inline-block;
    cursor: none;
    padding: 7px 10px;
    outline: 0;
    border-radius: 0px;
    background: transparent;
    color: var(--type);
    border: 1px solid var(--type);
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 5px;
  }
  .select select::-ms-expand {
    display: none;
  }

  .select_arrow {
    position: absolute;
    top: 13px;
    right: 15px;
    pointer-events: none;
    border-style: solid;
    border-width: 8px 5px 0px 5px;
    border-color: var(--type) transparent transparent transparent;
  }

  @media (hover: hover) {
    .controls:before {
      opacity: 0;
      transition: 0.4s;
    }
    svg {
      opacity: 0;
      transition: 0.4s;
    }
    section:hover svg {
      opacity: calc(var(--alpha) * 3);
    }
    section:hover .controls:before {
      opacity: var(--alpha);
    }
  }

  @media screen and (max-width: 990px) {
    .controls {
      width: calc(100% - 24px);
      max-width: 400px;
      /* opacity:0;
    transition:.2s; */
      /* transform: translate3d(0,10px,0) */
    }
    .controls.visible {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    .select {
      margin: 8px 15px 8px 15px;
      width: calc(100% - 25px);
    }
    .select select {
      width: 100%;
    }
    .sliders {
      display: block;
    }
    .slider {
      display: flex;
      margin: 15px 15px 8px 15px;
      /* width: 100%; */
      width: calc(100% - 24px);
      display: flex;
    }
    label {
      margin-right: 8px;
      width: 48px;
      text-align: left;
      align-items: center;
      display: flex;
    }
    input[type="range"] {
      padding-bottom: 0;
    }
    p {
      margin: 0px 10px 60px 10px;
    }
    .controls:before {
      opacity: 0;
    }
    svg {
      display: none;
    }
  }
</style>
