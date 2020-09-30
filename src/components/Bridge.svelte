<script>
  import Train from "./Train.svelte";
  export let positionX = "left:0px";
  export let positionY = "top:0px";
</script>

<div class="bridge" style="{positionX};{positionY}">
  <Train />
</div>

<style>
  .bridge {
    width: calc(100% - 100px);
    height: 210px;
    background: url(https://cdn.glitch.com/deae9ec6-f4ee-4950-863b-b40470e94a3c%2Fbridge.svg?v=1583544345983);
    background-size: auto 90%;
    background-position: center 40px;
    background-repeat: repeat-x;
    overflow: hidden;
    position: absolute;
    bottom: 10vh;
  }

  @media screen and (max-width: 600px) {
    .bridge {
      width: 100%;
      z-index: 20;
      left: 0px !important;
      right: 0px !important;
      height: 155px;
      bottom: 50px !important;
    }
  }
</style>
