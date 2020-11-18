<script>
  export let color = "var(--blue)";
  export let zig = false;
</script>

<!-- <svg
  id="slope"
  data-name="Layer 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 320.25 21.87">
  <defs><style>
      .cls-1 {
      }
    </style></defs>
  <polygon
    class="cls-1"
    fill="{color}"
    points="323.4 24.19 -1.63 24.19 -1.63 0.12 323.4 19.17 323.4 24.19"></polygon>
</svg> -->

{#if zig}
  <svg
    id="zigzag"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewbox="0 0 320.31 26.78"
  ><defs>
      <style>
        .cls-1 {
        }
      </style>
    </defs>
    <polygon
      class="cls-1"
      fill="{color}"
      points="0 26.78 320.31 26.78 320.26 0.34 293.98 18 267.2 0 240.43 18 213.66 0 186.88 18 160.11 0 133.34 18 106.57 0 79.81 18 53.04 0 26.27 18 0 0.34 0 26.78"
    ></polygon></svg>
{:else}
  <svg
    id="wave"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1383.59 68.82"
  ><polygon
      class="cls-1"
      fill="{color}"
      points="1383.59 68.82 0 68.82 0 0 1383.59 44.45 1383.59 68.82"
    ></polygon></svg>
{/if}

<!-- <div style="background:{color}">
  
</div> -->
<style>
  div {
    width: 100%;
    height: calc(2 * var(--padding));
    margin-bottom: -2px;
  }
  svg {
    width: 100%;
    display: block;
    transform: translateY(4px);
  }
  path,
  polygon {
    transition: fill 0.125s;
  }
</style>
