<script>
import TypeDemo from './TypeDemo.svelte'
import ColorPicker from './ColorPicker.svelte'
import { typeColor } from './stores.js';
</script>

<section style='--type:{$typeColor.type};--bg:{$typeColor.bg};--alpha:{$typeColor.alpha}'>
<ColorPicker themeColor={typeColor}/>
    <TypeDemo initialStyle="Whirly-Birdie-Wide-Bold" initialText="Friendly" fontSize="10vw"/>
    <TypeDemo initialStyle="Whirly-Birdie-Light" initialText="Yet precise" fontSize="10vw"/>
    <TypeDemo initialStyle="Whirly-Birdie-Wide-Italic" initialText="Clear-cut" fontSize="7vw"/>
    <TypeDemo initialStyle="Whirly-Birdie-Narrow-Bold" initialText="Last stop for 1000 miles" fontSize="7vw"/>
    <TypeDemo initialStyle="Whirly-Birdie-Wide" initialText="100% super unleaded gasoline" fontSize="30px"/>
</section>

<style>
    section{
        grid-column:1 / 13;
        display:block;
        overflow-x:hidden;
        padding: var(--padding);
        border-radius: var(--radius);
        height: fit-content;
        background-color: var(--bg);
    }

</style>