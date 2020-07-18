<script>
//This svelte file is a container for the little interactive experiments.
</script>

<section>
<container class="demo col2 demo-1">
  Interactive goes here
</container>
<container class="demo col1 demo-2">
  Interactive goes here
</container>
<container class="demo col1 demo-3">
  Interactive goes here
</container>
<container class="demo col1 demo-4">
  Interactive goes here
</container>
</section>

<style>
    section{
/*         --type2: #fc4347; */
/*         --playGroundPadding: calc(var(--padding) * .5); */
        --columnNum : 8;
        --gridGap : var(--rowGap);
        /* for square grid */
        --gridHeight: calc((100vw - var(--margin) * 2 - var(--gridGap) * (var(--columnNum) - 1)) / var(--columnNum));
        grid-column:1 / 13;
        display:grid;
        grid-template-columns: repeat(var(--columnNum), 1fr);
		    grid-auto-rows: var(--gridHeight);
        column-gap: var(--gridGap);
		    row-gap: var(--gridGap);
        flex-wrap:wrap;
        overflow-x:hidden;
        justify-content:space-between;
        border-radius: var(--radius);
        height: fit-content;
/*         color:var(--type); */
    }
  
  .demo{
/*     min-height:400px; */
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: var(--radius);
/*     margin-bottom:var(--playGroundPadding); */
/*     height:var(--gridHeight); */
  }
  .col1{
/*     width:var(--gridHeight); */
  }
  .col2{
/*     width:calc(var(--gridHeight) * 2 + var(--playGroundPadding)); */
  }
  .demo-1{
    grid-column:1 / 6;
    grid-row: 1 / 5;
    background:var(--blue)
  }
  .demo-2{
    grid-column:6 / 9;
    grid-row: 1 / 4;
    background:var(--green)
  }
  .demo-3{
    grid-column:1 / 6;
    grid-row: 5 / 8;
    background:var(--sun)
  }
  .demo-4{
    grid-column:6 / 9;
    grid-row: 4 / 8;
    background:var(--wood)
  }
  .demo-5{
    background:var(--red)
  }
   @media screen and (max-width: 750px) {
	.demo-1{
    grid-column:1 / 9;
    grid-row: 1 / 8;
  }
     .demo-2{
    grid-column:1 / 9;
    grid-row: 8 / 16;
  }
     .demo-3{
    grid-column:1 / 9;
    grid-row: 16 / 21;
  }
     .demo-4{
    grid-column:1 / 9;
    grid-row: 21 / 33;
  }
  }
  

</style>