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



<style>
    section{
        margin: 35vh calc(-1 * var(--margin)) 30vh calc(-1 * var(--margin));
        grid-column:1 / 13;
        display:block;
        overflow:hidden;
/*         border-bottom: 4px dotted rgba(0,0,0,0.1);
        border-top: 4px dotted rgba(0,0,0,0.1); */
        padding: 24px 0 24px 0;
      z-index:0;
    }
 /*  Whirlybat dropcap in the tab */
</style>