<script>
export let positionX = 'left:0px'
export let positionY = 'top:0px'
export let positionZ = 'z-index:0'
export let letter = '/';
</script>

<div class="tree" style="{positionX};{positionY};{positionZ}">
{letter}
</div>

<style>
  .tree {
  position: absolute;
  z-index: 20;
  display: inline-block;
  font-family: "Whirlybats";
  font-size: 220px;
  color: var(--green);
}


@media screen and (max-width: 875px) {
  .tree {
  font-size: 240px;
}
      }
</style>