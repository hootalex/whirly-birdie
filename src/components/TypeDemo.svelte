<script>
import {whirlyPresets} from './whirlyPresets.js'
export let initialStyle = 'whirly-birdie-medium';
export let initialText = 'Whirly Birdy is a cool font!';
export let fontSize = '6vw';

const styleNames = Object.keys(whirlyPresets)
let dom_node, cssString, variableAxis
let selected = initialStyle
let weightVal = 0

const presetChanged = (e) => {
    if (e.options[e.selectedIndex].value !== 'custom'){
        let customOption = dom_node.querySelector('.custom')
        selected = e.options[e.selectedIndex].value
        customOption.hidden = true
    }
}

const selectCustom = () => {
    let customOption = dom_node.querySelector('.custom')
    customOption.hidden = false
    customOption.selected = true
    customOption.innerHTML = selected.replace(/-/g, ' ') + '*'
}

$: variableAxis = {
        width: whirlyPresets[selected].width,
        weight: whirlyPresets[selected].weight,
        italic: whirlyPresets[selected].italic
    }

$: cssString = "font-variation-settings:\'wght\' "+variableAxis.weight+", \'wdth\' "+variableAxis.width+", \'ital\' "+variableAxis.italic

</script>

<div bind:this={dom_node}>
<div class="select">
<select class="type-presets" 
on:change={e=>presetChanged(e.currentTarget)}
>
    <option hidden disabled class="custom" value={initialStyle.replace(/-/g, ' ') + '*'}>{initialStyle.replace(/-/g, ' ') + '*'}</option>
    {#each styleNames as styleName}
        <option value={styleName} selected={(styleName === initialStyle) ? true : false}>
            {styleName.replace(/-/g, ' ')}
        </option>
    {/each}
</select>
  <div class="select_arrow">
    </div>
</div>

<div style="font-family:'Nicholson Beta';font-size:13px;display:inline;color:var(--type);">
Weight:
<input type="range" min="50" max="100" value={variableAxis.weight} class="slider weight" on:input={(e)=>{ selectCustom(); variableAxis.weight = e.currentTarget.value;}}>
Width:
<input type="range" min="50" max="150" value={variableAxis.width} class="slider width" 
on:input={(e)=>{ selectCustom(); variableAxis.width = e.currentTarget.value;}}>
Italic:
<input type="range" min="0" max="20" value={variableAxis.italic} class="slider italic" 
on:input={(e)=>{ selectCustom(); variableAxis.italic = e.currentTarget.value;}}>
</div>
<p contenteditable="true" spellcheck="false" style="{cssString+';font-size:'+fontSize}">{initialText}</p>

</div>

<style>

:root {
  --type: #000000;
  --bg: #ffffff;
  --accent: rgba(0,0,0,0.2)
}

select, input, p { outline: none; }

input {
  width: 100px;
}


div {
  text-align: center;
}

p {
  font-size: 5vw;
  margin: 10px;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 0px solid var(--type);
  color: var(--type);
}

    select, select option{
        text-transform: capitalize
    }
    
    input[type=range] {
  -webkit-appearance: none;
  margin: 12px 0;
  padding-bottom: 4px;
  background-color: var(--bg);
      margin: 0;
      padding: 0;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  height: 1px;
  cursor: pointer;
  background: var(--type);
}
input[type=range]::-webkit-slider-thumb {
  height: 25px;
  width: 16px;
  border-radius: 5px;
  border: 1px solid var(--type);
  background: var(--bg);
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -12px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: var(--type);
}
input[type=range]::-moz-range-track {
  height: 1px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.78);
}
input[type=range]::-moz-range-thumb {
  height: 25px;
  width: 16px;
  border-radius: 5px;
  border: 1px solid var(--type);
  background: var(--bg);
  cursor: pointer;
}
input[type=range]::-ms-track {
  height: 1px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: var(--type);
  border-radius: 0px;
}
input[type=range]::-ms-fill-upper {
  background: var(--type);
  border-radius: 0px;
}
input[type=range]::-ms-thumb {
  height: 25px;
  width: 16px;
  border-radius: 5px;
    border: 1px solid var(--type);
  background: var(--bg);
  cursor: pointer;
  height: 1px;
}
input[type=range]:focus::-ms-fill-lower {
  background: var(--type);
}
input[type=range]:focus::-ms-fill-upper {
  background: var(--type);
}

.select {
    position: relative;
    display: inline-block;
    margin-bottom: 15px;
}    

.select select {
        width: 230px;
        font-family: "Nicholson Beta";
        font-size: 13px;
        display: inline-block;
        cursor: pointer;
        padding: 7px 10px;
        outline: 0;
        border-radius: 0px;
        background: transparent;
        color: var(--type);
        border: 1px solid var(--type);
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        border-radius: 5px;
    }
        .select select::-ms-expand {
            display: none;
        }

.select_arrow {
    position: absolute;
    top: 13px;
    right: 15px;
    pointer-events: none;
    border-style: solid;
    border-width: 8px 5px 0px 5px;
    border-color: var(--type) transparent transparent transparent;
}


</style>