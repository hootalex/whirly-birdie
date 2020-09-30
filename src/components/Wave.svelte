<script>
  export let color = "var(--blue)";
  export let zig = false;
</script>

<!-- <svg
  id="slope"
  data-name="Layer 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 320.25 21.87">
  <defs>
    <style>
      .cls-1 {
      }
    </style>
  </defs>
  <polygon
    class="cls-1"
    fill="{color}"
    points="323.4 24.19 -1.63 24.19 -1.63 0.12 323.4 19.17 323.4 24.19"></polygon>
</svg> -->

{#if zig}
  <svg id="zigzag" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 320.31 26.78"><defs><style>.cls-1{}</style></defs><polygon class="cls-1" fill={color} points="0 26.78 320.31 26.78 320.26 0.34 293.98 18 267.2 0 240.43 18 213.66 0 186.88 18 160.11 0 133.34 18 106.57 0 79.81 18 53.04 0 26.27 18 0 0.34 0 26.78"/></svg>
{:else}
<svg id="wave" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 320.25 21.87"><defs><style>.cls-1{}</style></defs><path class="cls-1" fill={color} d="M0,21.87H320.17L320.25,0c-6.1.17-9.2,3.56-12.48,7.14s-6.85,7.48-13.79,7.48-10.43-3.8-13.79-7.48S273.64,0,267.2,0s-9.62,3.47-13,7.15-6.85,7.48-13.79,7.48S230,10.83,226.64,7.15,220.1,0,213.66,0s-9.62,3.47-13,7.15-6.84,7.48-13.79,7.48-10.42-3.8-13.78-7.48S166.55,0,160.11,0s-9.62,3.47-13,7.15-6.84,7.48-13.79,7.48-10.42-3.8-13.78-7.48S113,0,106.57,0,97,3.47,93.59,7.15s-6.84,7.48-13.78,7.48S69.39,10.83,66,7.15,59.48,0,53,0s-9.62,3.47-13,7.15-6.85,7.48-13.79,7.48-10.42-3.8-13.79-7.48S6.11.18,0,0Z"/></svg>
{/if}

<style>
  svg {
    width: 100%;
    display: block;
    transform: translateY(2px);
  }
  path,
  polygon {
    transition: fill 0.125s;
  }
</style>
