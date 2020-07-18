  <script>
  import { typeColor } from './stores.js'
  let selectedColor = null
  export let themeColor = typeColor

  const handleClick = (e)=>{
    const themeID = e.target.getAttribute("color")
    console.log(themeID)
    if(themeID !== $themeColor.selected){
      switch(themeID) {
        case 'invert':
          themeColor.set({selected:themeID,type:'var(--white)',type2:'var(--offwhite)',bg:'var(--black)',bg2:'var(--red)',alpha:'.1'})
          break;
        case 'red':
          themeColor.set({selected:themeID,type:'var(--sun)',type2:'var(--red)',bg:'var(--red)',bg2:'var(--offwhite)',alpha:'.15'})
          break;
        case 'blue':
          themeColor.set({selected:themeID,type:'var(--blue)',type2:'var(--red)',bg:'var(--navy)',bg2:'var(--sun)',alpha:'.1'})
          break;
        case 'sun':
          themeColor.set({selected:themeID,type:'var(--sun)',type2:'var(--wood)',bg:'var(--wood)',bg2:'var(--offwhite)',alpha:'.1'})
          break;
        case 'green':
          themeColor.set({selected:themeID,type:'var(--lightgreen)',type2:'var(--white)',bg:'var(--green)',bg2:'var(--sun)',alpha:'.1'})
          break;
        default:
          break;
      }

    }else{
      themeColor.set({selected:null,type:'var(--black)',type2:'var(--white)',bg:'var(--white)',bg2:'var(--blue)',alpha:'.05'})
    }    

  }

  
</script>

<div class="colorpicker">
  <div on:click={handleClick} color="invert" class="{$themeColor.selected === 'invert' ? 'selected' : ''}"  style="background-color: var(--black)">
  </div>
  <div class="{$themeColor.selected === 'red' ? 'selected' : ''}" on:click={handleClick} color="red" style="background-color: var(--red)"></div>
  <div class="{$themeColor.selected === 'blue' ? 'selected' : ''}" on:click={handleClick} color="blue" style="background-color: var(--blue)"></div>
  <div class="{$themeColor.selected === 'sun' ? 'selected' : ''}" on:click={handleClick} color="sun" style="background-color: var(--sun)"></div>
  <div class="{$themeColor.selected === 'green' ? 'selected' : ''}" on:click={handleClick} color="green" style="background-color: var(--green)"></div>
</div>

<style>
.colorpicker {
width: 100%;
text-align: right;
margin-bottom: 15px;
}

.colorpicker div {
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin: 1px;
  cursor: pointer;
  border:2px solid transparent
}

.colorpicker div.selected{
  border:2px solid var(--white)
}
@media screen and (max-width: 990px) {
  .colorpicker{
    text-align: center;
  }
}

</style>