<script>
  import TypeDemo from "./TypeDemo.svelte";
  import ColorPicker from "./ColorPicker.svelte";
  import { typeColor } from "./stores.js";
</script>

<div class="infobox">
  <p class="dropillo">1</p>
  <p>
    <span
      style="text-transform: uppercase; letter-spacing: 2px; font-family: 'Whirly Birdie'; font-variation-settings: 'wght' 70, 'wdth' 150, 'ital' 0;"
    >
      Whirly Birdie
    </span>
    <span style="opacity:.55">is a display typeface inspired by American
      advertising of the 50s. Thanks to its variable capabilities, Whirly Birdie
      can look as at home on a luxury-scented candle as it would on a cereal
      box.</span>
    Try it below! ↓
  </p>
</div>
<section
  style="--type:{$typeColor.type};--bg:{$typeColor.bg};--type2:{$typeColor.type2};--bg2:{$typeColor.bg2};--alpha:{$typeColor.alpha}"
>
  <ColorPicker
    themeColor="{typeColor}"
    sticky="true"
    mobileColor="{'#d7ae54'}"
  />

  <TypeDemo
    index="{0}"
    initialStyle="Whirly-Birdie-Wide-Bold"
    initialText="Corn Flakes"
    fontSize="10vw"
  />
  <TypeDemo
    index="{1}"
    initialStyle="Whirly-Birdie-Narrow-Light"
    initialText="Real Whole Grain"
    fontSize="12vw"
  />
  <TypeDemo
    index="{2}"
    initialStyle="Whirly-Birdie-Narrow-Bold"
    initialText="Strawberry Goodness"
    fontSize="9vw"
  />
  <TypeDemo
    index="{3}"
    initialStyle="Whirly-Birdie-Narrow-Italic"
    initialText="Café around back →"
    fontSize="8vw"
  />
  <TypeDemo
    index="{4}"
    initialStyle="Whirly-Birdie-Light"
    initialText="Enhanced With Chocolate Bits"
    fontSize="6vw"
  />
</section>

<style>
  section {
    grid-column: 1 / 13;
    display: block;
    /*         overflow-x:hidden; */
    padding: calc(var(--padding) * 2) var(--padding) calc(var(--padding) * 2)
      var(--padding);
    /*         margin-bottom: 80px; */
    border-radius: var(--radius);
    height: fit-content;
    background-color: var(--bg);
    position: relative;
    max-width: calc(100vw - 2 * var(--padding) - 2 * var(--margin));
    /*         border-top-left-radius: 0px; */
  }

  /*  Whirlybat dropcap in the tab */

  .dropillo {
    font-family: "Whirlybats";
    font-size: 190px;
    padding-right: 8px;
    padding-bottom: 8px;
    float: left;
    margin: 0;
    font-variation-settings: "anim" 100;
    transition: 1s;
  }

  .infobox {
    font-family: "Nicholson Beta";
    grid-column: 4 / 10;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;

    /*       custom tab/bookmark style */

    margin: 0 0 -20px 0;
    padding: 20px;
    box-shadow: inset 0px -8px 0px 0px rgba(0, 0, 0, 0.05);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom: none;
    color: var(--black);
    text-align: center;
    background-color: var(--sun);
    width: 80%;
    max-width: 580px;
    
    -webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
  }
  p {
    max-width: 800px;
    text-align: left;
  }
  @media screen and (max-width: 1024px) {
    div {
      grid-column: 2 / 12;
    }
  }
  @media screen and (max-width: 750px) {
    div {
      grid-column: 1 / 13;
      box-shadow: none;
      max-width: none;
      width: unset;
    }

    .infobox {
      grid-column: 1 / 13;
      display: block;
      padding: calc(var(--padding) * 2) var(--padding) calc(var(--padding) * 2)
        var(--padding);
      width: auto;
      max-width: unset;
    }

    .dropillo {
      line-height: 0.8;
    }

    section {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      padding-top: calc(var(--padding) * 2 + 64px);
      max-width: unset;
    }
  }
  @media screen and (max-width: 600px) {
    div {
      /*        margin:0 8px -20px 8px */
    }
    section {
      /*       margin: 0 8px 0 8px; */
    }
  }
</style>
