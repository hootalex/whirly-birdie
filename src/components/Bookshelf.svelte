<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { WIDTH, HEIGHT, cursor } from "./stores.js";
  import { cubicInOut } from "svelte/easing";
  import { constrain, randomDiffArr, isEqual, fadeScale } from "./helpers.js";
  import {
    setCursor_Random,
    setCursor_Anim,
    setCursor_Default,
  } from "./_Cursor.svelte";
  import { smallwords1, smallwords2 } from "./config.js";

  let bookModel = [
    //sample fields
    {
      widthMult: 0.5, //We store a random decimal to be used later in calculating final random width,height,fontsize
      heightMult: 0.5,
      bgColor: "#ffffff",
      words: ["hello", "world"],
      fontMult: 0.4,
      bookline: false,
      whirlybat: false,
      smalltitle: false,
      varSettings: "'wght' 80, 'wdth' 50, 'ital' 0",
    },
  ];
  let bookModelNew = ["", "", "", "", "", "", "", "", ""];

  let bookcolors = [
    "var(--redX)",
    "var(--lightnavyX)",
    "var(--lightnavyX)",
    "var(--sunX)",
    "var(--forestX)",
    "var(--greenX)",
    "var(--navyX)",
  ];

  let shelfDom = null;
  var sheight = 0;
  var swidth = 0;
  let bookmax = 9;
  var booknum = 9;
  var bwidth = swidth / booknum;
  var bwidthMin = 0.6; //make randomness between 60% and 100% of book width
  var bheightMin = 0.75; //make randomness between 76% and 100% of book width
  var fontmin = 22;
  var fontmax = 25;
  let containerDom = null;

  $: {
    if (shelfDom) {
      swidth = shelfDom.offsetWidth;
      sheight = shelfDom.offsetHeight;
    }

    if ($WIDTH < 1200) {
      booknum = 6;
      bwidth = swidth / booknum;
      fontmin = 15;
      fontmax = 15;
    } else {
      booknum = 9;
      bwidth = swidth / booknum;
      fontmin = 22;
      fontmax = 30;
    }
  }

  const createBookModel = () => {
    let newBookModel = [];

    //Pre generate a random non repeting array
    let randomBookcolors = randomDiffArr(bookcolors, bookmax);
    let randomwords1 = randomDiffArr(smallwords1, bookmax, false);
    let randomwords2 = randomDiffArr(smallwords2, bookmax, false);

    //Loop to specify generate book specs
    for (let i = 0; i < bookmax; i++) {
      let bookcolor = randomBookcolors[i];
      let word1 = randomwords1[i];
      let word2 = randomwords2[i];
      let stringLength = word1.length + word2.length;
      let varSettings = null;
      let smalltitle = false;
      let bookline = false;
      let whirlybat = false;

      //switch statement for variable settings
      switch (stringLength) {
        case 12:
          varSettings = "'wght' 70, 'wdth' 50, 'ital' 0";
          bookline = true;
          break;
        case 11:
          varSettings = "'wght' 80, 'wdth' 90, 'ital' 10";
          bookline = true;
          break;
        case 10:
          varSettings = "'wght' 80, 'wdth' 50, 'ital' 0";
          bookline = true;
          break;
        case 9:
          varSettings = "'wght' 90, 'wdth' 120, 'ital' 0";
          bookline = true;
          break;
        case 8:
          varSettings = "'wght' 100, 'wdth' 130, 'ital' 0";
          bookline = true;
          break;
        case 7:
          varSettings = "'wght' 80, 'wdth' 100, 'ital' 0";
          break;
        case 6:
          varSettings = "'wght' 100, 'wdth' 100, 'ital' 0";
          break;
        case 5:
          varSettings = "'wght' 60, 'wdth' 120, 'ital' 0";
          break;
        case 4:
          varSettings = "'wght' 80, 'wdth' 50, 'ital' 0";
          break;
        case 3:
          smalltitle = true;
          break;
        case 2:
          break;
        case 1:
          break;
        default:
          //This setting if length is greater than 12
          varSettings = "'wght' 80, 'wdth' 50, 'ital' 0";
          break;
      }

      if (stringLength < 9) {
        whirlybat = true;
      }

      newBookModel.push({
        words: [word1, word2],
        bgColor: bookcolor,
        bookline: bookline,
        whirlybat: whirlybat,
        smalltitle: smalltitle,
        varSettings: varSettings,
        widthMult: Math.random(),
        heightMult: Math.random(),
        fontMult: Math.random(),
      });
    }

    return newBookModel;
  };

  const handleClick = () => {
    containerDom.classList.remove("bounce");
    void containerDom.offsetWidth;
    containerDom.classList.add("bounce");
    setCursor_Anim();
    if (isEqual(bookModel, bookModelNew)) {
      bookModelNew = createBookModel();
    }
  };

  onMount(async () => {
    bookModelNew = createBookModel();
    bookModel = bookModelNew;
  });
</script>

<container
  on:mouseenter="{setCursor_Random}"
  on:mouseleave="{setCursor_Default}"
  on:click="{(e) => {
    e.preventDefault();
    handleClick();
  }}"
>
  <section bind:this="{containerDom}" class="section bounce">
    <div class="shelf" bind:this="{shelfDom}" bind:offsetWidth="{swidth}">
      {#each bookModel as book, i}
        {#if isEqual(bookModel[i], bookModelNew[i])}
          <div
            class="book {booknum >= i + 1 ? '' : 'hide'}
            {booknum === i + 1 ? 'rotated' : ''}"
            in:fly="{{ delay: 50 * (bookModel.length - 4), duration: 300, y: -20, easing: cubicInOut }}"
            out:fade="{{ duration: 150, easing: cubicInOut, delay: 50 * i }}"
            on:outroend="{() => (bookModel[i] = bookModelNew[i])}"
            style="width:{bwidth * bwidthMin + bwidth * (1 - bwidthMin) * book.widthMult}px;
            height:{sheight * bheightMin + sheight * (1 - bheightMin) * book.heightMult}px;
            background:{book.bgColor}"
          >
            <div
              class="booktitle {book.smalltitle ? 'smalltitle' : ''}"
              style="font-size:{fontmin + (fontmax - fontmin) * book.fontMult}px;
              font-variation-settings: {book.varSettings}"
            >
              {book.words[0]}
              {book.words[1]}
            </div>
            {#if book.bookline}
              <div class="bookline">________</div>
            {/if}
            {#if book.whirlybat}
              <div class="whirlybatbook"></div>
            {/if}
          </div>
        {/if}
      {/each}
    </div>
  </section>
</container>

<style>
  @keyframes -global-bounce {
    0% {
      transform: translate3d(0px, 0px, 0px);
    }
    50% {
      transform: translate3d(0px, 10px, 0px);
    }
    100% {
      transform: translate3d(0px, 0px, 0px);
    }
  }
  container {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  container:hover {
    cursor: none;
  }
  section {
    margin: auto;
    width: calc(100% - var(--padding));
    /*     max-width: 850px; */
    background-color: transparent;
    color: black;
    box-sizing: border-box;
    border-bottom: 10px solid var(--woodX);
    display: flex;
    align-items: flex-end;
    transition: 0.2s transform;
    position: relative;
  }

  .bounce {
    animation: bounce 0.3s ease-out 1;
  }

  .shelf {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: calc(100% - 40px);
    height: 380px;
    display: flex;
    align-items: flex-end;
    cursor: none;
  }

  .bookline {
    letter-spacing: -3px;
    position: absolute;
    top: 0;
    font-variation-settings: "wght" 50, "wdth" 150, "ital" 0;
    text-shadow: 0px 5px 0px;
  }

  .book {
    display: flex;
    align-items: baseline;
    justify-content: center;
    margin-right: 2px;
    margin-bottom: 2px;
    text-align: center;
    overflow: hidden;
    position: relative;
    padding-top: 35px;
    box-sizing: border-box;
    transition: 0.2s;
    transition-property: transform;
    color: var(--white);
  }

  .book:hover {
    transform: rotate(-2deg);
  }

  .book:active {
    transform: translateY(10px);
  }

  .hide {
    display: none;
  }

  .shelf .book.rotated {
    transform: rotate(-7deg);
    margin-left: 18px;
    margin-bottom: 4px;
  }

  .whirlybatbook {
    font-family: "Whirlybats";
    font-size: 30px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: absolute;
    bottom: 20px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: currentColor;
  }

  .booktitle {
    font-family: "Whirly Birdie";
    writing-mode: vertical-rl;
    text-orientation: mixed;
    font-variation-settings: "wght" 50, "wdth" 60.06, "ital" 0;
    font-size: 40px;
    color: var(--white);
  }

  .smalltitle {
    font-size: 25px !important;
    font-variation-settings: "wght" 55, "wdth" 50, "ital" 0;
    writing-mode: horizontal-tb;
    margin-left: 0;
    margin-top: -5px;
  }

  @media screen and (max-width: 600px) {
    .shelf {
      height: 250px;
      width: 100%;
    }

    .smalltitle {
      font-size: 14px !important;
    }
  }
</style>
