<script>
  import ColorPicker from "./ColorPicker.svelte";
  import Toggle from "./UI/toggle.svelte";
  import { glyphColor } from "./stores.js";

  let isTyping = false;
  let typeArea = null;
  let uppercase = false;
  let numlock = false;
  let symlock = false;
  let savedKey = "g";
  let linearAnim = false;

  let keyOrder = [
    {
      default: "qwertyuiop",
      upper: "QWERTYUIOP",
      num: "1234567890",
      sym: "[]{}#%^*+=",
    },
    {
      default: "asdfghjkl",
      upper: "ASDFGHJKL",
      num: '-/:;()$&@"',
      sym: "_\\|~<>€£¥·",
    },
    {
      default: "zxcvbnm",
      upper: "ZXCVBNM",
      num: ".,?!'",
      sym: ".,?!'",
    },
  ];

  const handleKeydown = (event, row, index) => {
    event.preventDefault();
    isTyping = false;
    let currentKey = uppercase
      ? keyOrder[row].upper.charAt(index)
      : numlock && symlock
      ? keyOrder[row].sym.charAt(index)
      : numlock && !symlock
      ? keyOrder[row].num.charAt(index)
      : keyOrder[row].default.charAt(index);
    savedKey = currentKey;

    typeArea.innerHTML = currentKey;
    // console.log(currentKey)
  };

  const handleCapKey = (event) => {
    event.preventDefault();
    if (!numlock) {
      uppercase = !uppercase;
    } else {
      symlock = !symlock;
    }
    console.log({ "sym:": symlock, num: numlock, cap: uppercase }, savedKey);
  };

  const handleNumKey = (event) => {
    event.preventDefault();
    uppercase = false;
    numlock = !numlock;
    if (numlock) {
      symlock = false;
    } else {
    }
    console.log({ "sym:": symlock, num: numlock, cap: uppercase }, savedKey);
  };

  const loseFocus = () => {
    console.log("lostfocus");
    if (typeArea.innerHTML === "") {
      isTyping = false;
      typeArea.innerHTML = savedKey;
    }
  };
</script>

<div class="infobox">
  <p>
    <span class="dropillo">O</span>
    <span style="text-transform: uppercase; letter-spacing: 2px; font-family: 'Nicholson Beta Bold'">
      Whirlybats
    </span>
    is a dingbat font with a twist. Instead of using variable font technology to
    squish and squash type, Whirlybats uses it to animate its 150+ glyphs. Try it below! ↓
  </p>
</div>
<section
  style="--type:{$glyphColor.type};--bg:{$glyphColor.bg};--type2:{$glyphColor.type2};--bg2:{$glyphColor.bg2};--alpha:{$glyphColor.alpha}">

  <ColorPicker
    themeColor="{glyphColor}"
    sticky="true"
    mobileColor="{'#25417a'}" />

  <container class="interactive">
<!--     <div class="controls">
      <Toggle bind:value="{linearAnim}" />
      <p>{linearAnim ? 'Linear' : 'Eased'}</p>
      <p>G - Globe</p>
      <svg
        width="50"
        height="13"
        viewBox="0 0 50 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.1215 3.85465C20.7446 6.95349 24.9999 13 24.9999 13C24.9999 13
          29.2554 6.80233 34.8785 3.85465C40.5015 0.906979 50 2.86102e-06 50
          2.86102e-06L-1.1365e-06 5.32481e-06C-1.1365e-06 5.32481e-06 9.49844
          0.755819 15.1215 3.85465Z"
          fill="{'var(--type)'}"></path>
      </svg>
    </div> -->
    <div class="display">
      <div class="featured {isTyping ? 'typing' : ''}">
        <p
          bind:this="{typeArea}"
          on:focusout="{loseFocus}"
          on:input="{(e) => {
            e.preventDefault();
            isTyping = true;
          }}"
          spellcheck="false"
          data-text="{savedKey}"
          contenteditable="true">
          g
        </p>
      </div>
    </div>
    <container id="keyboard" class="{isTyping ? 'typing' : ''}">
      {#each Array(keyOrder.length) as _, i}
        <div class="{'row row-' + i}">
          {#if i === 2}
            <button
              class="cap {uppercase ? 'selected' : ''}
              {numlock ? 'numlock' : ''}"
              on:click="{handleCapKey}">
              <p class="">
                {numlock && !symlock ? '#+=' : numlock && symlock ? '123' : 'S'}
              </p>
            </button>
          {/if}

          {#each Array(keyOrder[i][uppercase ? 'upper' : numlock && symlock ? 'sym' : numlock && !symlock ? 'num' : 'default'].length) as _, j}
            <button
              on:click="{(e) => {
                handleKeydown(e, i, j);
              }}"
              class="{
                  !uppercase && !numlock && savedKey === keyOrder[i].default.charAt(j) ? 'selected' 
                  : uppercase && savedKey === keyOrder[i].upper.charAt(j) ? 'selected' 
                  : numlock && !symlock && savedKey === keyOrder[i].num.charAt(j) ? 'selected' 
                  : numlock && symlock && savedKey === keyOrder[i].sym.charAt(j) ? 'selected' 
                  : ''}
              ">
              <p>
                {uppercase ? keyOrder[i].upper.charAt(j) : numlock && !symlock ? keyOrder[i].num.charAt(j) : numlock && symlock ? keyOrder[i].sym.charAt(j) : keyOrder[i].default.charAt(j)}
              </p>
            </button>
          {/each}
        </div>
      {/each}
      <div class="row row-3">
        <button on:click="{handleNumKey}" class="num">
          <p>{numlock ? 'abc' : '123'}</p>
        </button>
        <div class="spacebar"></div>
      </div>
    </container>
  </container>

</section>

<style>
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
  .controls p {
    font-family: "Nicholson Beta";
    font-size: 13px;
    display: inline-block;
    color: var(--type);
  }
  svg {
    position: absolute;
    opacity: calc(var(--alpha) * 3);
    top: calc(100%);
    left: calc(50% - 25px);
  }

  .dropillo {
    font-family: "Whirlybats";
    font-size: 150px;
    padding-right: 8px;
    float: left;
    line-height: 0.7;
  }

  .infobox {
    font-family: "Nicholson Beta";
    grid-column: 4 / 10;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    z-index: 0;

    /*       custom tab/bookmark style */

    margin-bottom: -20px;
    padding: 20px;
    box-shadow: inset 0px -8px 0px 0px rgba(0, 0, 0, 0.05);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom: none;
    color: var(--white);
    text-align: center;
    background-color: var(--lightnavy);
  }
  .infobox p {
    max-width: 800px;
    text-align: left;
  }
  @media screen and (max-width: 1024px) {
    .infobox {
      grid-column: 2 / 12;
    }
  }
  @media screen and (max-width: 750px) {
    .infobox {
      grid-column: 1 / 13;
      box-shadow: none;
    }
  }
  @media screen and (max-width: 600px) {
    .infobox,
    .mobilecoastercontainer {
      grid-column: 1 / 13;
    }
  }

  section {
    --type2: #fc4347;
    grid-column: 1 / 13;
    display: block;
    /*         overflow-x:hidden; */
    padding: var(--padding);
    border-radius: var(--radius);
    height: fit-content;
    background-color: var(--bg);
    color: var(--type);
    z-index: 0;
    position: relative;
  }

  .interactive {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
  }
  .row {
    display: flex;
  }
  button {
    --radius: 10px;
    width: 8.75vw;
    max-width: 80px;
    min-width: 30px;
    height: 6vw;
    max-height: 60px;
    margin: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Whirlybats";
    font-variation-settings: "anim" 100;
    border-radius: var(--radius);
    border: 0px;
    background: transparent;
    position: relative;
    color: var(--type);
    transition: transform 0.3s;
    overflow: hidden;
  }
  button:focus {
    outline-color: var(--type);
  }
  #keyboard:not(.typing) button.selected {
    transform: scale3d(0.9, 0.9, 0.9);
    color: var(--bg);
    font-family: "Whirly Birdie";
    font-variation-settings: "wght" 75, "wdth" 110, "ital" 0;
    pointer-events: none;
  }
  /* button.selected:after{
        opacity: calc(var(--alpha) * 4.5)
    } */
  button:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: var(--alpha);
    border-radius: var(--radius);
    background: var(--type);
    z-index: 0;
  }
  button:before {
    content: "";
    width: 8.75vw;
    height: 8.75vw;
    min-width: 100px;
    min-height: 100px;
    max-height: 100px;
    max-width: 100px;
    position: absolute;
    /* opacity: calc(var(--alpha) * 2.5); */
    border-radius: 50%;
    background: var(--bg2);
    z-index: 0;
    transform: scale3d(0, 0, 0);
    transition: 0.4s;
  }
  #keyboard:not(.typing) button.selected:before {
    transform: scale3d(1.05, 1.05, 1.05);
  }
  button.hidden {
    pointer-events: none;
  }
  button p {
    pointer-events: none;
    margin: 0;
    font-size: 40px;
    z-index: 1;
  }
  #keyboard:not(.typing) button.selected p {
    font-size: clamp(10px, 4vw, 24px);
    color: var(--type2);
  }
  container#keyboard .cap,
  container#keyboard .cap.selected {
    transition: font-variation-settings 0.3s;
    font-family: "Whirlybats UI";
    pointer-events: all;
  }
  container#keyboard .cap.selected p {
    font-size: clamp(10px, 4vw, 40px) !important;
    color: var(--bg) !important;
  }
  container#keyboard .cap,
  container#keyboard .num {
    position: absolute;
    left: 0;
  }
  container#keyboard .cap.numlock,
  container#keyboard .num {
    font-family: "Whirly Birdie";
    font-variation-settings: "wght" 75, "wdth" 110, "ital" 0;
  }
  container#keyboard .cap.numlock p,
  container#keyboard .num p {
    font-size: clamp(10px, 3vw, 20px);
  }

  /* remove when ready */
  /*     container#keyboard .cap.numlock{
        pointer-events: none;
        color:transparent;
        display:none;
    } */

  container#keyboard .cap:after,
  container#keyboard .num:after {
    opacity: calc(var(--alpha) * 4);
  }
  container#keyboard .cap.selected,
  container#keyboard .num.selected {
    font-variation-settings: "anim" 200;
    transform: scale3d(1, 1, 1);
    border: 0px;
    color: var(--bg);
    pointer-events: all;
  }
  container#keyboard .cap.selected::after,
  container#keyboard .num.selected:after {
    opacity: 1 !important;
  }
  container#keyboard .cap:before,
  container#keyboard .num:before {
    display: none;
  }
  .null {
    --radius: 4px;
    width: 8.5vw;
    max-width: 80px;
    height: 6vw;
    max-height: 60px;
    margin: 4px;
    border-radius: var(--radius);
    background: var(--type);
    opacity: 0;
  }
  .spacebar {
    --radius: 10px;
    width: calc(42.5vw + 8px * 4);
    max-width: 432px;
    height: 6vw;
    max-height: 60px;
    margin: 4px;
    border-radius: var(--radius);
    background: var(--type);
    opacity: var(--alpha);
  }
  .return {
    --radius: 2px;
    position: absolute;
    right: 0;
    width: 12vw;
    max-width: 100px;
    height: 6vw;
    max-height: 60px;
    margin: 4px;
    border-radius: var(--radius);
    background: var(--type);
    opacity: var(--alpha);
  }

  .display {
    position: relative;
    width: 100%;
    /*         max-width: 1000px; */
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .featured {
    opacity: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1440px;
    margin-bottom: var(--padding);
    min-height: 246px;
  }
  .featured p {
    max-width: 100%;
    font-family: "Whirlybats";
    font-variant-ligatures: none;
    /*       turned ligatures off */
    animation: basicAnimation 1s infinite;
    font-size: clamp(100px, 80vw, 200px);
    margin: 0;
    text-align: center;
    font-weight: normal;
    word-wrap: break-word;
    border-radius: 0;
    overflow: hidden;
    position: relative;
    transition: font-size 0.4s;
  }
  :global([contentEditable="true"]:empty:not(:focus):before) {
    content: attr(data-text);
  }
  .featured p:focus,
  .featured.typing p {
    font-size: 80px;
  }
  label {
    position: absolute;
    top: var(--padding);
    left: var(--padding);
    background: var(--bg2);
    color: var(--type2);
    font-size: 12px;
    padding: 8px 16px 8px 16px;
    border-radius: 40px;
  }
  #keyboard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  @media screen and (max-width: 1000px) {
    button {
      max-width: 60px;
    }
    button,
    .spacebar,
    .null {
      margin: 2px;
      height: 10vw;
    }
    button:before {
      width: 14vw;
      height: 14vw;
      min-width: 50px;
      min-height: 50px;
      max-width: 80px;
      max-height: 80px;
    }

    .featured h3 {
      font-size: clamp(100px, 80vw, 200px);
    }
    .spacebar {
      width: calc(42.5vw + 4px * 4);
      max-width: 316px;
    }
  }

  @media screen and (max-width: 750px) {
    button p {
      font-size: 5.25vw;
    }
    .display {
      margin: var(--padding) 0 var(--padding) 0;
    }
    section {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      padding-top: calc(var(--padding) * 2 + 64px);
    }
  }

  @media screen and (max-width: 600px) {
    button {
      width: 8.35vw;
    }
    .featured {
      min-height: 240px;
    }
    .featured p:focus,
    .featured.typing p {
      font-size: 64px;
    }
  }

  @media (hover: hover) {
    button:hover {
      cursor: pointer;
      animation: basicAnimation 1s infinite;
    }
    button:hover:after {
      opacity: calc(var(--alpha) * 2);
    }
    button.selected:hover:after {
      opacity: calc(var(--alpha) * 2);
    }
    .num:hover,
    .cap:hover {
      animation: none;
    }
    /* .cap:hover:after,.num:hover:after{
            opacity: calc(var(--alpha) * 4);
        } */
  }
</style>
