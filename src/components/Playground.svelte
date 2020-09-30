<script>
import Clock from './Clock.svelte'
import Bookshelf from './Bookshelf.svelte'
import Desk from './Desk.svelte' 
import Poster from './Poster.svelte' 
import Lamp from './Lamp.svelte' 
//This svelte file is a container for the little interactive experiments.
</script>

<section>
<container class="demo col2 demo-1">
  <Bookshelf/>
</container>
<container class="demo col1 demo-2">
  <Clock/>
</container>
<container class="demo col1 demo-3">
  <Poster/>
</container>
<container class="demo col1 demo-4">
  <Desk/>
</container>
  <container class="demo col1 demo-5">
  <Lamp/>
</container>
</section>

<style>
    section{
/*         --type2: #fc4347; */
/*         --playGroundPadding: calc(var(--padding) * .5); */
        --columnNum : 24;
        --gridGap : 8px;
        /* for square grid */
        --gridHeight: calc((100vw - var(--gridGap) * (var(--columnNum) - 1)) / var(--columnNum));
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
      z-index:0;
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
    grid-column: 4 / 15;
    grid-row: 2 / 10;
    background:var(--transparent)
  }
  .demo-2{
    grid-column: 15 / 23;
    grid-row: 1 / 9;
    background:var(--transparent);
  }
  .demo-3{
    grid-column: 3 / 8;
    grid-row: 11 / 18;
    background:var(--transparent)
  }
  .demo-4{
    grid-column: 6 / 23;
    grid-row: 10 / 28;
    background:var(--transparent)
  }
  .demo-5{
grid-column: 12 / 25;
    grid-row: 9 / 15;
/*     pointer-events: none; */
  }
   @media screen and (max-width: 900px) {
	.demo-1{
        grid-column:2 / 21;
    grid-row: 18 / 36;
  }
     .demo-2{
    grid-column: 8 / 25;
    grid-row: 3 / 20;
  }
     .demo-3{
    display:none;
  }
  .demo-4{
        grid-column: 1 / 25;
       grid-row: 40 / 68;
  }
     .demo-5{
            grid-column: 9 / 25;
    grid-row: 40 / 42;
     }
  }

</style>