<script>
import TypeDemo from './TypeDemo.svelte'
import ColorPicker from './ColorPicker.svelte'
import { glyphColor } from './stores.js';
</script>

<section style='--type:{$glyphColor.type};--bg:{$glyphColor.bg}'>
<ColorPicker themeColor={glyphColor}/>
<h2>
</h2>

<container id="keyboard">
</container>

</section>

<style>
    section{
        grid-column:1 / 13;
        display:block;
        overflow-x:hidden;
        padding: 50px;
        border-radius: var(--radius);
        height: fit-content;
        background-color: var(--bg);
    }

</style>