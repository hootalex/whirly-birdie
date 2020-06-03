  <script>
  import { typeColor } from './stores.js'
  let selectedColor = null
  export let themeColor = typeColor

  const handleClick = (e)=>{
    const themeID = e.target.id

    if(themeID !== $themeColor.selected){
      switch(themeID) {
        case 'invert':
          themeColor.set({selected:themeID,type:'var(--white)',bg:'var(--black)'})
          break;
        case 'red':
          themeColor.set({selected:themeID,type:'var(--sun)',bg:'var(--red)'})
          break;
        case 'blue':
          themeColor.set({selected:themeID,type:'var(--blue)',bg:'var(--navy)'})
          break;
        case 'sun':
          themeColor.set({selected:themeID,type:'var(--sun)',bg:'var(--wood)'})
          break;
        case 'green':
          themeColor.set({selected:themeID,type:'var(--lightgreen)',bg:'var(--green)'})
          break;
        case 'navy':
          themeColor.set({selected:themeID,type:'var(--offwhite)',bg:'var(--navy)'})
          break;
        default:
          break;
      }

    }else{
      themeColor.set({selected:null,type:'var(--black)',bg:'var(--white)'})
    }    

  }

  
</script>

<div class="colorpicker">
  <div on:click={handleClick} id="invert" class="{$themeColor.selected === 'invert' ? 'selected' : ''}"  style="background-color: var(--black)">
  </div>
  <div class="{$themeColor.selected === 'red' ? 'selected' : ''}" on:click={handleClick} id="red" style="background-color: var(--red)"></div>
  <div class="{$themeColor.selected === 'blue' ? 'selected' : ''}" on:click={handleClick} id="blue" style="background-color: var(--blue)"></div>
  <div class="{$themeColor.selected === 'sun' ? 'selected' : ''}" on:click={handleClick} id="sun" style="background-color: var(--sun)"></div>
  <div class="{$themeColor.selected === 'green' ? 'selected' : ''}" on:click={handleClick} id="green" style="background-color: var(--green)"></div>
</div>

<style>
.colorpicker {
width: 100%;
text-align: right;
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
</style>