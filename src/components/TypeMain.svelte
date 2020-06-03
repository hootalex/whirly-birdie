<script>
import TypeDemo from './TypeDemo.svelte'
import ColorPicker from './ColorPicker.svelte'
import { typeColor } from './stores.js';
</script>

<section style='--type:{$typeColor.type};--bg:{$typeColor.bg}'>
<ColorPicker themeColor={typeColor}/>
    <TypeDemo initialStyle="Whirly-Birdie-Wide-Bold" initialText="Classic" fontSize="10vw"/>
    <TypeDemo initialStyle="Whirly-Birdie-Bold" initialText="Warm but" fontSize="10vw"/>
    <TypeDemo initialStyle="Whirly-Birdie-Wide-Light-Italic" initialText="Clear-cut" fontSize="7vw"/>
    <TypeDemo initialStyle="Whirly-Birdie-Narrow" initialText="Last stop for 1000 miles" fontSize="7vw"/>
    <TypeDemo initialStyle="Whirly-Birdie-Wide" initialText="100% super unleaded gasoline" fontSize="30px"/>
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