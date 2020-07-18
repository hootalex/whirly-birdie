<script>
import TypeDemo from './TypeDemo.svelte'
import ColorPicker from './ColorPicker.svelte'
import { typeColor } from './stores.js';
</script>

<div>
  <p><span class="dropillo">1</span><span style="text-transform: uppercase; letter-spacing: 2px;">Whirly Birdie</span> is a display typeface inspired by American advertising of the 50s. Thanks to its variable capabilities, Whirly Birdie can look as at home on a luxury-scented candle as it would on a cereal box. Give it a try below! ↓</p>
</div>
<section style='--type:{$typeColor.type};--bg:{$typeColor.bg};--alpha:{$typeColor.alpha}'>
<ColorPicker themeColor={typeColor}/>
    <TypeDemo initialStyle="Whirly-Birdie-Wide-Bold" initialText="Corn Flakes" fontSize="10vw"/>
    <TypeDemo initialStyle="Whirly-Birdie-Light" initialText="Fresh Rain" fontSize="10vw"/>
    <TypeDemo initialStyle="Whirly-Birdie-Narrow-Italic" initialText="Entrance Second Floor" fontSize="7vw"/>
    <TypeDemo initialStyle="Whirly-Birdie-Narrow-Bold" initialText="Last stop for 5 miles" fontSize="7vw"/>
    <TypeDemo initialStyle="Whirly-Birdie-Wide-Light" initialText="Super leaded gasoline" fontSize="30px"/>
</section>

<style>
    section{
        grid-column:1 / 13;
        display:block;
        overflow-x:hidden;
        padding: var(--padding);
/*         margin-bottom: 80px; */
        border-radius: var(--radius);
        height: fit-content;
        background-color: var(--bg);
/*         border-top-left-radius: 0px; */
      
    }
  
  /*  Whirlybat dropcap in the tab */
  
  .dropillo {
font-family: 'Whirlybats';
    font-size: 190px;
    padding-right: 8px;
    padding-bottom: 8px;
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
      
    margin: 0 0 -20px 0;
    padding: 20px;
    box-shadow: inset 0px -8px 0px 0px rgba(0,0,0,0.05);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom: none;
    color: var(--black);
      text-align: center;
      background-color: var(--sun);
    }
    p{
      max-width:800px;
      text-align:left;
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
     section{
         border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }
  }
   @media screen and (max-width: 600px) {
     div{
/*        margin:0 8px -20px 8px */
     }
     section{
/*       margin: 0 8px 0 8px; */
     }
  }
 

</style>