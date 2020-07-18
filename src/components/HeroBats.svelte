<script>
import Title from './Title-Bats.svelte'
import City from './City.svelte'
import Street from './Street.svelte'
import {scrollY,HEIGHT,constrain} from './stores.js'

let sectionDom

</script>

<section bind:this={sectionDom} class="hero">
    <Title 
        time={
            sectionDom ? constrain(($scrollY-sectionDom.clientHeight*.8-(sectionDom.offsetTop-$HEIGHT))/(sectionDom.clientHeight*.5+$HEIGHT),{min:0,max:1}) 
            : 0
        }
        timeB={
            sectionDom ? constrain(($scrollY-sectionDom.clientHeight*.8-(sectionDom.offsetTop-$HEIGHT*.8))/(sectionDom.clientHeight*.5+$HEIGHT*.40),{min:0,max:1}) 
            : 0
        }
        />
</section>
<div>
  <p><span class="dropillo">O</span> <span style="text-transform: uppercase; letter-spacing: 2px;">Whirlybats</span> is a dingbat font with a twist. Instead of using variable font technology to squish and squash type, Whirlybats uses it to animate its 100+ glyphs. Try it below! ↓</p>
</div>


<style>
    section{
        margin: 35vh calc(-1 * var(--margin)) 30vh calc(-1 * var(--margin));
        grid-column:1 / 13;
        display:block;
        overflow:hidden;
/*         border-bottom: 4px dotted rgba(0,0,0,0.1);
        border-top: 4px dotted rgba(0,0,0,0.1); */
        padding: 24px 0 24px 0;
    }
 /*  Whirlybat dropcap in the tab */
  
  .dropillo {
font-family: 'Whirlybats';
    font-size: 150px;
    padding-right: 8px;
    float: left;
    line-height: .7;
}
  
    div{
        font-family: 'Nicholson Beta';
        font-feature-settings: "salt" 2;
        grid-column: 4 / 10;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size: 20px;
      
/*       custom tab/bookmark style */
      
    margin-bottom: -20px;
    padding: 20px;
    box-shadow: inset 0px -8px 0px 0px rgba(0,0,0,0.05);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom: none;
    color: var(--black);
      text-align: center;
      background-color: var(--blue);
    }
    p{
      max-width:800px;
      text-align: left;
    }

  @media screen and (max-width: 1024px) {
     div{
       grid-column:2 / 12;
     }
  }
  @media screen and (max-width: 750px) {
     div{
       grid-column:1 / 13;
     }
  }
   @media screen and (max-width: 600px) {
     div{
       grid-column:1 / 13;
/*        margin:0 0 -20px 0 */
     }

  }
</style>