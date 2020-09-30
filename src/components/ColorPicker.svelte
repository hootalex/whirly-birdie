<script>
  import { typeColor } from "./stores.js";
  let selectedColor = null;
  export let mobileColor = "#000000";
  export let themeColor = typeColor;
  export let sticky = false;

  const handleClick = (e) => {
    const themeID = e.target.getAttribute("color");
    console.log(themeID);
    if (themeID !== $themeColor.selected) {
      switch (themeID) {
        case "invert":
          themeColor.set({
            selected: themeID,
            type: "var(--white)",
            type2: "var(--offwhite)",
            bg: "var(--black)",
            bg2: "var(--red)",
            alpha: ".1",
          });
          break;
        case "red":
          themeColor.set({
            selected: themeID,
            type: "var(--sun)",
            type2: "var(--red)",
            bg: "var(--red)",
            bg2: "var(--offwhite)",
            alpha: ".15",
          });
          break;
        case "blue":
          themeColor.set({
            selected: themeID,
            type: "var(--blue)",
            type2: "var(--red)",
            bg: "var(--navy)",
            bg2: "var(--sun)",
            alpha: ".1",
          });
          break;
        case "sun":
          themeColor.set({
            selected: themeID,
            type: "var(--sun)",
            type2: "var(--wood)",
            bg: "var(--wood)",
            bg2: "var(--offwhite)",
            alpha: ".1",
          });
          break;
        case "green":
          themeColor.set({
            selected: themeID,
            type: "var(--lightgreen)",
            type2: "var(--white)",
            bg: "var(--green)",
            bg2: "var(--sun)",
            alpha: ".1",
          });
          break;
        default:
          break;
      }
    } else {
      themeColor.set({
        selected: null,
        type: "var(--black)",
        type2: "var(--white)",
        bg: "var(--white)",
        bg2: "var(--blue)",
        alpha: ".05",
      });
    }
  };
</script>

<container style="--mobileColor:{mobileColor}">
  <div class="colorpicker {sticky ? 'sticky' : ''}">
    <div
      on:click="{handleClick}"
      color="invert"
      class="{$themeColor.selected === 'invert' ? 'selected' : ''}"
      style="background-color: var(--black)"></div>
    <div
      class="{$themeColor.selected === 'red' ? 'selected' : ''}"
      on:click="{handleClick}"
      color="red"
      style="background-color: var(--red)"></div>
    <div
      class="{$themeColor.selected === 'blue' ? 'selected' : ''}"
      on:click="{handleClick}"
      color="blue"
      style="background-color: var(--blue)"></div>
    <div
      class="{$themeColor.selected === 'sun' ? 'selected' : ''}"
      on:click="{handleClick}"
      color="sun"
      style="background-color: var(--sun)"></div>
    <div
      class="{$themeColor.selected === 'green' ? 'selected' : ''}"
      on:click="{handleClick}"
      color="green"
      style="background-color: var(--green)"></div>
  </div>
</container>

<style>
  container {
    top: 60px;
    right: -63px;
    position: absolute;
    height: calc(100% - 120px);
    pointer-events: none;
  }
  .colorpicker {
    /* width: 100%; */
    text-align: right;
    margin-bottom: 30px;
    user-select: none;
    z-index: 990;
    background: rgb(240 238 238);
    width: max-content;
    display: flex;
    flex-direction: column;
    padding: 8px;
    border-left: 3px solid #dbdbdb;
    pointer-events: all;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .sticky {
    top: var(--padding);
    position: sticky;
  }

  .colorpicker div {
    /*   display: inline-block; */
    height: 20px;
    width: 20px;
    border-radius: 50%;
    margin: 8px;
    cursor: pointer;
    border: 4px solid transparent;
    position: relative;
  }

  .colorpicker div.selected {
    /*   border:4px solid var(--white) */
  }
  .colorpicker div:before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    width: 10px;
    height: 10px;
    background: white;
    pointer-events: none;
    border-radius: 50%;
    transform: scale3d(0, 0, 0);
  }
  .colorpicker div.selected:before {
    transition: transform 0.25s;
    transform: scale3d(1, 1, 1);
  }
  @media screen and (max-width: 1024px) {
    container {
      right: -40px;
    }
    .colorpicker {
      border: none;
      border-bottom: 3px solid #dbdbdb;
    }
  }
  @media screen and (max-width: 750px) {
    container {
      width: 100%;
      right: 0;
      top: 0;
    }
    .colorpicker {
      display: inline-block;
      right: 0;
      width: 100%;
      text-align: center;
      padding: 8px 0 8px 0;
      top: 0;
      background: var(--bg);
      border-bottom: 0;
    }
    .colorpicker:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--type);
      opacity: calc(var(--alpha) * 1.75);
    }
    .colorpicker div {
      display: inline-block;
      margin:4px;
    }
    .colorpicker div.selected {
      /* border-color:white; */
    }
    .colorpicker div:before {
      /* top:0;
    left:0;
    width:20px;
    height:20px;
    border:2px solid white;
    background:transparent; */
    }
  }
</style>
