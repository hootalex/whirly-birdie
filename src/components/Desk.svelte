<script>
  import { onMount } from "svelte";
  import { lamplight } from "./stores.js";
  import {
    setCursor_Random,
    setCursor_Anim,
    setCursor_Default,
  } from "./_Cursor.svelte";
  onMount(async () => {
    var compcolors = ["var(--medgreen)", "var(--sun)", "var(--red)"];

    var devicecolors = ["var(--black)", "var(--white)"];

    var compscreen = ["q", "ʠ", "ɋ"];

    let el = document.getElementById("computer");

    let stand = document.getElementById("stand");

    let screen = document.getElementById("screen");

    el.onclick = function (e) {
      e.preventDefault();
      setCursor_Anim();
      const randomScreen =
        compcolors[Math.floor(Math.random() * compcolors.length)];

      const randomComp =
        compscreen[Math.floor(Math.random() * compscreen.length)];

      const randomDevice =
        devicecolors[Math.floor(Math.random() * devicecolors.length)];

      screen.style.fill = randomScreen;

      el.style.fill = randomDevice;

      el.innerHTML = randomComp;

      stand.style.fill = randomDevice;
    };
  });
</script>

<svg
  id="desk"
  class:lampOn="{$lamplight}"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  x="0px"
  y="0px"
  viewbox="0 0 728.4 881.7"
  style="enable-background:new 0 0 728.4 881.7;"
  xml:space="preserve"
><style type="text/css">
    #desk {
      width: 100%;
      height: 100%;
    }
    .st0 {
      fill: var(--black);
    }
    .st1 {
      fill: none;
      stroke: var(--black);
      stroke-width: 5;
      stroke-miterlimit: 10;
    }
    .st2 {
      fill: var(--navy);
    }
    .st3 {
      fill: none;
      stroke: #010101;
      stroke-width: 5;
      stroke-miterlimit: 10;
    }
    #screen {
      fill: var(--medgreen);
    }
    #computer {
      font-family: "Whirlybats";
      font-size: 250px;
      user-select: none;
      cursor: none;
    }

    #seat {
      font-family: "Whirlybats";
      font-size: 330px;
      user-select: none;
      fill: var(--woodX);
      font-variation-settings: "anim" 100;
      transition: font-variation-settings 1s;
    }

    .vase {
      fill: var(--lightnavyX);
    }

    #leaf1,
    #leaf2 {
      font-variation-settings: "anim" 100;
      transition: font-variation-settings 1s;
      user-select: none;
    }

    .leaf {
      font-family: "Whirlybats";
      font-size: 300px;
      fill: var(--greenX);
    }

    @media (hover: hover) {
      #leaf2:hover {
        font-variation-settings: "anim" 200;
      }
      #seat:hover {
        /*           animation: seatRotate 1.5s;
            animation-timing-function: ease-in-out; */
        font-variation-settings: "anim" 200;
      }
      #computer:hover {
        animation: basicAnimation 1s linear infinite;
      }
    }
  
  @media (hover:none){
    #computer{
animation: basicAnimation 1s linear infinite;
}
}
  </style>
  <g id="desk">
    <rect x="196.3" y="292.1" id="screen" width="170" height="120"></rect>
    <rect x="26.3" y="492.1" class="st0" width="677.7" height="13.2"></rect>
    <path
      class="st3"
      d="M73.6,499L34.7,781.6c-1.1,7.7,7.1,10.9,9.4,3.8l94.4-286.2"
    ></path>
    <path
      class="st3"
      d="M656.3,499l38.9,282.6c1.1,7.7-7.1,10.9-9.4,3.8l-94.4-286.2"
    ></path>
  </g>
  <svg x="50" y="0"><style type="text/css">
      .sa0 {
        fill: var(--sun);
      }
      .sa1 {
        fill: none;
        stroke: #000000;
        stroke-width: 7;
        stroke-linecap: round;
        stroke-miterlimit: 10;
      }
    </style>
    <rect x="462.6" y="713" width="16.3" height="112.8"></rect>
    <polyline
      class="sa1"
      points="401.5,824.7 470.1,800 538.8,824.7 "
    ></polyline>
  </svg>

  <text
    text-anchor="middle"
    x="642"
    y="-141"
    class="leaf"
    style="transform: rotate(45deg)"
    id="leaf1"
  >
    ṕ
  </text>
  <text
    text-anchor="middle"
    x="631"
    y="229"
    class="leaf"
    style="transform: rotate(15deg); fill: var(--forestX);"
    id="leaf2"
  >
    ṕ
  </text>
  <svg x="200" y="437">
    <path
      id="stand"
      d="M210.4,50.5H12.5c-8.9,0-15-9.1-11.5-17.3L8.6,15C12.4,5.9,21.3,0,31.1,0h160.6c9.8,0,18.7,5.9,22.5,15l7.6,18.2
      C225.3,41.4,219.3,50.5,210.4,50.5z"
    ></path>
  </svg>
  <svg x="302" y="68"><style type="text/css">
      .sz0 {
        fill: var(--lightnavyX);
      }
    </style>
    <path
      class="sz0"
      d="M256.1,418.8h-14c-19.4,0-35.6-14.8-37.4-34.2l-4.4-48.5c-1.2-12.8,8.9-23.8,21.8-23.8h54.1
      c12.8,0,22.9,11,21.8,23.8l-4.4,48.5C291.8,404,275.6,418.8,256.1,418.8z"
    ></path>
  </svg>
  <text
    on:mouseenter="{setCursor_Random}"
    on:mouseleave="{setCursor_Default}"
    text-anchor="middle"
    x="312"
    y="450"
    id="computer"
  >
    ʠ
  </text>
  <text text-anchor="middle" x="532" y="780" id="seat">ž</text>
</svg>
