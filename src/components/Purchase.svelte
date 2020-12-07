<script>
  import {
    setCursor_Pointer,
    setCursor_Default,
    setCursor_Zoom,
  } from "./_Cursor.svelte";
  const birdieChars =
    "AÁÂÄÀÅÃÆBCÇDÐEÉÊËÈFGHIÍÎÏÌJKLMNÑOÓÔÖÒØÕŒPÞQRSTUÚÛÜÙVWẂŴẄẀXYÝŶŸỲZ0123456789.,:;…!¡?¿·•*#/(){}[]-–—_‚„“”‘’ $^ĂĀĄĆČĎĐĚĖĘĢĪĮĶĽĻŁŃŇŅŊŐŌŔŘŖŚŠŞẞŦŤŢŰŪŲŮŹŽŻ/«»‹›¢€£¥+−=><~%↑→↓←@&§©®™°|";

  const batsChars =
    "ABÇCDEFGHIJKLMNOPQRSTŢUVWXYÝZabcdeéfghijĵklmnoóôöòōøõpṕqʠɋrstuvwxyzϻАБВГДЕЁЖЗ*+=±^абвг{}[]−×÷≤#%∞ΟοΩωϊ2ͰϚͱΤτϏϗΛλΑΒΓΔΕΖΗΘΙΚΜΝΞΠΡΣΦσΨφψχ⓪01345⑤6⑥789⁄.,:;…!¡‽?¿·•/()-–_’«¢¤$€£¥≠><≥≈~∫∑√∂‰↑↓←◚◊╋☁☌⚑@&¶§©®™°|¦†‡·✉∏";

  const paypalURLs = {
    wb: "VJNM8A9FJ5DLS",
    wbt: "DT26W6UEE76XJ",
    both: "EU8NL2Q9G9DLN",
  };
  let fontChoice = "both";

  const handleForm = (e) => {
    console.log(fontChoice);
  };
  
   var phraseIndex = 0;

      var licensingPhrases = [
        "Licensing is unlimited!",
        "Seriously!",
        "Apps...",
        "Books...",
        "Packaging...",
        "Neon signs...",
        "Restaurant awnings...",
        "Video games...",
        "It’s really that simple!",
        "Don’t believe us?",
        "Buy the font and find out!",
        "Licensing"
      ];

      function licensingSwap() {
        
        event.preventDefault();
        
        document.getElementById("licensing").innerHTML =
          licensingPhrases[phraseIndex++ % licensingPhrases.length];
      }
</script>

<section
  class="specimen"
  on:mouseenter="{setCursor_Zoom}"
  on:mouseleave="{setCursor_Default}"
>
  <div class="whirlybirdiecharset" class:notselected="{fontChoice === 'wbt'}">
    {#each birdieChars as char, i}<span>{char}</span>{/each}
  </div>

  <hr />

  <div class="whirlybatcharset" class:notselected="{fontChoice === 'wb'}">
    {#each batsChars as char, i}<span>{char}</span>{/each}
  </div>
</section>
<section class="checkout">
  <h2>Purchase Fonts!</h2>
  <form
    class="purchaseform"
    action="https://www.paypal.com/cgi-bin/webscr"
    method="post"
    target="_top"
    on:change="{handleForm}"
  >
    <input type="hidden" name="cmd" value="_s-xclick">
    <input type="hidden" name="hosted_button_id" value={paypalURLs[fontChoice]}>

    <label
      on:mouseenter="{setCursor_Pointer}"
      on:mouseleave="{setCursor_Default}"
      class="container"
      id="wb"
    >
      <p>Whirly Birdie Variable</p>
      <p>$25</p>
      <input type="radio" name="font" bind:group="{fontChoice}" value="wb" />
      <span class="checkmark"></span>
    </label>
    <label
      on:mouseenter="{setCursor_Pointer}"
      on:mouseleave="{setCursor_Default}"
      class="container"
      id="wbt"
    >
      <p>Whirlybats Variable</p>
      <p>$25</p>
      <input type="radio" name="font" bind:group="{fontChoice}" value="wbt" />
      <span class="checkmark"></span>
    </label>
    <label
      on:mouseenter="{setCursor_Pointer}"
      on:mouseleave="{setCursor_Default}"
      class="container"
      id="both"
    >
      <p>Whirly Birdie + Whirlybats Variable</p>
      <p>$45</p>
      <input
        type="radio"
        checked="checked"
        name="font"
        bind:group="{fontChoice}"
        value="both"
      />
      <span class="checkmark"></span>
    </label>
    <br />
    <input
      on:mouseenter="{setCursor_Pointer}"
      on:mouseleave="{setCursor_Default}"
      class="purchasebutton"
      type="submit"
      value="Purchase    →"
    />
    
  </form>
  
          <button  on:mouseenter="{setCursor_Pointer}" on:mouseleave="{setCursor_Default}" on:click="{() => licensingSwap()}" class="purchasebutton" id="licensing">Licensing</button>

  
</section>

<style>
  section {
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
    
    
    -webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
  }
  .specimen {
    min-height: calc(640px + 4vw);
    background: #84c1e2;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .checkout {
    top: calc(var(--padding) * 1.5);
    position: sticky;
    width: 420px;
    background: white;
    margin-top: calc(var(--padding) * 1.5);
    margin-bottom: calc(var(--padding) * 1.5);
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-left: 3px solid #dbdbdb;
  }

  h2 {
    font-family: "Whirly Birdie";
    font-variation-settings: "wght" 55, "wdth" 50, "ital" 0;
    margin: 0;
    margin-bottom: 40px;
    font-size: 8vw;
    font-size: clamp(80px, 8vw, 120px);
    line-height: 0.9;
    font-weight: normal;
  }

  .charactersetcontainer,
  .purchase {
    padding: 60px;
    box-sizing: border-box;
  }

  .whirlybirdiecharset {
    font-family: "Whirly Birdie";
    font-variation-settings: "wght" 80, "wdth" 110, "ital" 0;
  }

  .whirlybatcharset {
    font-family: "Whirlybats";
  }

  .whirlybirdiecharset,
  .whirlybatcharset {
    transition: 0.2s;
  }

  .whirlybirdiecharset span,
  .whirlybatcharset span {
    font-size: 16px;
    display: inline-block;
    padding: 5px;
    margin: 1px;
    transition: 0.1s;
  }

  .notselected {
    opacity: 0.3;
    transform: scale3d(0.5, 0.5, 0.5);
    pointer-events: none;
  }

  .charactersetcontainer,
  .purchase {
    padding: 60px;
    box-sizing: border-box;
  }

  .whirlybirdiecharset {
    font-family: "Whirly Birdie";
    font-variation-settings: "wght" 80, "wdth" 110, "ital" 0;
  }

  .whirlybatcharset {
    font-family: "Whirlybats";
  }

  .whirlybirdiecharset,
  .whirlybatcharset {
    transition: 0.2s;
  }
  hr {
    border: none;
    border-bottom: 1px solid var(--navy);
    width: 100%;
    margin: calc(var(--padding) * 1.5) 0 calc(var(--padding) * 1.5) 0;
  }
  .whirlybirdiecharset span,
  .whirlybatcharset span {
    font-size: 16px;
    font-size: clamp(16px, 2vw, 40px);
    display: inline-block;
    padding: 3px;
    margin: 1px;
    transition: transform 0.1s;
    color: var(--navy);
  }

  .notselected {
    opacity: 0.3;
    transform: scale3d(0.85, 0.85, 0.85);
    pointer-events: none;
  }

  /* .whirlybirdiecharset span:first-child, .whirlybatcharset span:first-child {
 font-size: 45px;
    float: left;
} */

  .purchasecontainer hr {
    border: none;
    border-bottom: 1px solid var(--buytheme);
  }

  .whirlybirdiecharset span:hover,
  .whirlybatcharset span:hover {
    transform: scale3d(2.5, 2.5, 2.5);
    background-color: white;
    border-radius: 5px;
    color: var(--black);
  }

  .whirlybatcharset span:hover {
    animation: basicAnimation 1s 1;
    animation-fill-mode: forwards;
  }

  body {
    font-family: helvetica, arial, sans-serif;
    margin: 2em;
  }

  h1 {
    font-style: italic;
    color: #373fff;
  }

  .purchaseform label {
    font-family: "Nicholson Beta";
    border-bottom: 1px solid var(--black);
    font-size: 20px;
    display: flex;
    justify-content: space-between;
  }
  .purchaseform label p:first-child {
    margin-right: 32px;
  }

  .purchasebutton {
    -webkit-appearance: none;
/*     background-color: var(--blue); */
    background-color: var(--green);
    border: 0;
    padding: 15px 25px 15px 25px;
    font-size: 20px;
    font-family: "Nicholson Beta";
    border-radius: 50px;
    color: var(--white);
  }
  .purchasebutton:hover {
    cursor: none;
    opacity: .9;
  }
  
    .purchasebutton:active {
    cursor: none;
    opacity: 1;
  }
  
  #licensing {
    margin-top: 10px;
    background-color: var(--blue);
}

  input[type="radio"] {
    margin-left: 0;
  }

  /* The container */
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: none;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default radio button */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: none;
  }

  /* Create a custom radio button */
  .checkmark {
    position: absolute;
    top: 20px;
    left: 0;
    height: 24px;
    width: 24px;
    background-color: #eee;
    border-radius: 50%;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the radio button is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: var(--blue);
  }

  /* Create the indicator (the dot/circle - hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the indicator (dot/circle) when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the indicator (dot/circle) */
  .container .checkmark:after {
    top: 8px;
    left: 8px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }

  @media screen and (max-width: 1024px) {
    .specimen {
      width: 100%;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
      min-height: 0;
      max-width: calc(100vw - 2 * var(--padding));
    }
    hr {
      margin: calc(var(--padding) * 1) 0 calc(var(--padding) * 1) 0;
    }
    .checkout {
      width: 100%;
      position: relative;
      border-bottom-left-radius: var(--radius);
      border-top-right-radius: 0;
      border-left: none;
      margin-top: 0;
      margin-bottom: 0;
      top: unset;
      max-width: calc(100vw - 2 * var(--padding));
    }
  }
</style>
