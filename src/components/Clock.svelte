<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import { constrain, randomDiffArr, isEqual, fadeScale } from "./helpers.js";

  let locked = false;
  let containerDom = null;
  let glyphList =
    "QWERTYUOPSGHKLZXCVNMqwertyuiopadfghjklzxcvbnm1234567890,.;-()?$|^ôöòóøōõ";
  let coords = [
    { x: 0, y: -32 },
    { x: 19.5, y: -27 },
    { x: 33.5, y: -14 },
    { x: 39.5, y: 6 },
    { x: 32.5, y: 24 },
    { x: 19.5, y: 38 },
    { x: 0, y: 45 },
    { x: -18.5, y: 38 },
    { x: -31.5, y: 24 },
    { x: -38.5, y: 6 },
    { x: -33.5, y: -14 },
    { x: -17.5, y: -27 },
  ];
  let letters = ["M", "x", "8", "b", "a", "t", "4", "r", "j", "i", "c", "p"];
  let newLetters = ["M", "x", "8", "b", "a", "t", "4", "r", "j", "i", "c", "p"];

  const handleClick = () => {
    console.log("click");
    containerDom.classList.remove("bounce");
    void containerDom.offsetWidth;
    containerDom.classList.add("bounce");
    if (isEqual(letters, newLetters)) {
      newLetters = randomDiffArr(glyphList.split(""), 12, false, letters);
    }
  };

  let time = new Date();
  $: hours = time.getHours();
  $: minutes = time.getMinutes();
  $: seconds = time.getSeconds();

  onMount(() => {
    const interval = setInterval(() => {
      time = new Date();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<container bind:this="{containerDom}" on:click="{handleClick}" class="bounce">
  <svg viewBox="-50 -50 100 100" overflow="visible">
    <circle class="clock-shadow" r="50"></circle>
    <circle class="clock-face" r="50"></circle>

    <!-- markers -->
    <!-- {#each [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] as minute}
		<line
			class='major'
			y1='35'
			y2='45'
			transform='rotate({30 * minute})'
		/>

		{#each [1, 2, 3, 4] as offset}
			<line
				class='minor'
				y1='42'
				y2='45'
				transform='rotate({6 * (minute + offset)})'
			/>
		{/each}
	{/each} -->

    <!-- whirly numbers -->
    {#each letters as letter, i}
      {#if letter === newLetters[i]}
        <g
          class="numGroup"
          in:fadeScale="{{ delay: 50 * (letters.length - 4), duration: 300, easing: cubicInOut, baseScale: 0.5 }}"
          out:fade="{{ duration: 150, easing: cubicInOut, delay: 50 * i }}"
          on:introend="{() => {
            if (i === letters.length - 1) {
              locked = false;
            }
          }}"
          on:outroend="{() => (letters[i] = newLetters[i])}">
          <text
            text-anchor="middle"
            x="{coords[i].x}"
            y="{coords[i].y}"
            class="num {seconds >= 5 * i && seconds < 5 * i + 5 ? 'featured' : ''}">
            {letter}
          </text>
        </g>
      {/if}
    {/each}

    <!-- hour hand -->
    <line
      class="hour"
      y1="2"
      y2="-20"
      transform="rotate({30 * hours + minutes / 2})"></line>

    <!-- minute hand -->
    <line
      class="minute"
      y1="4"
      y2="-30"
      transform="rotate({6 * minutes + seconds / 10})"></line>

    <!-- second hand -->
    <g transform="rotate({6 * seconds})">
      <line class="second" y1="10" y2="-38"></line>
      <line class="second-counterweight" y1="10" y2="2"></line>
    </g>
  </svg>
</container>

<style>
  @keyframes -global-bounceZ {
    0% {
      transform: scale3d(1, 1, 1);
    }
    50% {
      transform: scale3d(0.9, 0.9, 0.9);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }
  @keyframes -global-bounceZR {
    0% {
      transform: scale3d(0.99, 0.99, 0.99);
    }
    50% {
      transform: scale3d(1.03, 1.03, 1.03);
    }
    100% {
      transform: scale3d(0.99, 0.99, 0.99);
    }
  }
  container {
    width: calc(100% - var(--padding) * 2);
    height: calc(100% - var(--padding) * 2);
    padding: var(--padding);
  }
  container:hover {
    cursor: pointer;
  }
  svg {
    width: 100%;
    height: 100%;
  }
  .bounce {
    animation: bounceZ 0.3s ease-out 1;
  }

  .clock-face {
    stroke: transparent;
    fill: var(--white);
  }
  .clock-shadow {
    stroke: transparent;
    fill: var(--wood);
    opacity: 0.3;
  }
  .bounce .clock-shadow {
    animation: bounceZR 0.3s ease-out 1;
  }

  .minor {
    stroke: #999;
    stroke-width: 0.3;
  }

  .major {
    stroke: #333;
    stroke-width: 1;
  }

  .hour {
    stroke: #333;
  }

  .minute {
    stroke: #666;
  }

  .second,
  .second-counterweight {
    stroke: var(--red);
  }

  .second-counterweight {
    stroke-width: 3;
  }

  text {
    font-family: "Whirlybats";
    font-size: 15px;
    font-weight: normal;
  }
  .numGroup {
    transform-box: fill-box;
    transform-origin: center;
  }

  .featured {
    fill: var(--black);
    animation: basicAnimation 1s cubic-bezier(0.43, 0.96, 0.49, 1.03) infinite;
  }
</style>
