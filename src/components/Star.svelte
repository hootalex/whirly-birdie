<script>
export let positionX = 'left:0px'
export let positionY = 'top:0px'
export let positionZ = 'z-index:0'
export let letter = 'E';
</script>

<div class="star" style="{positionX};{positionY};{positionZ}">
{letter}
</div>

<style>
  .star {
  position: absolute;
  z-index: 20;
  display: inline-block;
  font-family: "Whirlybats";
  font-size: 8vw;
  color: var(--sun);
    animation: stari 4s infinite;
}
  
    @keyframes stari {
  0%   { color: var(--sun) }
  50%   { color: var(--sun) }
  51%   { color: var(--blue) }
  100% { color: var(--blue) }
}


@media screen and (max-width: 875px) {
/*   .star {
  font-size: 240px;
} */
      }
</style>