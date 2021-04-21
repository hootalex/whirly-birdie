<script context="module">
  import { cursor, cursorAnim } from "./stores.js";

  export const setCursor_Pointer = () => {
    cursor.set({ type: "pointer", state: 200 });
  };
  export const setCursor_Default = () => {
    cursor.set({ type: "default", state: 200 });
    cursorAnim.set(false);
  };
  export const setCursor_Grab = () => {
    cursor.set({ type: "grab", state: 100 });
  };
  export const setCursor_Grabbing = () => {
    cursor.set({ type: "grab", state: 200 });
  };
  export const setCursor_Edit = () => {
    cursor.set({ type: "edit", state: 100 });
  };
  export const setCursor_Zoom = () => {
    cursor.set({ type: "zoom", state: 100 });
  };
  export const setCursor_Random = () => {
    cursor.set({ type: "random", state: 100 });
  };
  
  export const setCursor_Anim = () => {
    cursorAnim.set(false);
    document.querySelectorAll(".cursor p").forEach((e) => {
      void e.offsetWidth;
    });
    cursorAnim.set(true);
  };
  export const reset_Anim = () => {
    cursorAnim.set(false);
  };

  export const setCursor_Hide = () => {
    cursor.set({ type: null, state: 100 });
  };
</script>

<script>
  import { mousePos } from "./stores.js";

  let x = 0;
  let y = 0;
  let hide = true;
  $: {
    x = $mousePos.x - 32;
    y = $mousePos.y - 32;
    hide = $mousePos.x ? false : true;
  }

</script>

<svelte:body
  on:mouseleave="{setCursor_Hide}"
  on:mouseenter="{setCursor_Default}"
/>

<div
  class="cursor {$cursor.type} notranslate"
  class:hide
  style="transform:translate({x}px,{y}px)"
>
  {#if $cursor.type === 'default'}
    <p style="color: var(--white)" class="wb-icon notranslate">ϊ</p>
    <p style="color: var(--black)" class="wb-icon notranslate">2</p>
  {:else if $cursor.type === 'pointer'}
    <p style="color: var(--white)" class="wb-icon notranslate">ω</p>
    <p style="color: var(--black)" class="wb-icon notranslate">Ω</p>
  {:else if $cursor.type === 'grab'}
    <p
      style="color: var(--white);font-variation-settings:'anim' {$cursor.state}"
      class="wb-icon notranslate"
    >
      ο
    </p>
  <p
      style="color: var(--black);font-variation-settings:'anim' {$cursor.state}"
      class="wb-icon notranslate"
    >
      Ο
    </p>
  
  {:else if $cursor.type === 'edit'}
    <p style="color: var(--white)" class="wb-icon notranslate">Ϗ</p>
    <p style="color: var(--black)" class="wb-icon notranslate">ϗ</p>
  {:else if $cursor.type === 'zoom'}
    <p style="color: var(--white)" class="wb-icon notranslate">ͱ</p>
    <p style="color: var(--black)" class="wb-icon notranslate">Ͱ</p>
  {:else if $cursor.type === 'random'}
    <p
      style="color: var(--white)"
      class="wb-icon notranslate"
      on:webkitAnimationEnd="{reset_Anim}"
      class:anim="{$cursorAnim}"
    >
      τ
    </p>
    <p
      style="color: var(--black)"
      class="wb-icon notranslate"
      on:webkitAnimationEnd="{reset_Anim}"
      class:anim="{$cursorAnim}"
    >
      Τ
    </p>
  {/if}
</div>

<style>
  .anim {
    animation: basicAnimation .35s 1;
  }
  .cursor {
    position: fixed;
    text-align: center;
    width: 64px;
    height: 64px;
    font-size: 64px;
    z-index: 999;
    pointer-events: none;
    display:none;
  }
  .cursor.default {
    top: 16px;
    left: 0;
  }
  .cursor.pointer {
    top: 16px;
    left: -16px;
  }
  .cursor.grab {
    top: 8px;
    left: -16px;
  }
  .cursor.hide {
    opacity: 0;
  }
  .cursor.edit{
    
  }
  .cursor.zoom{
    top: 45px;
    left: 5px;
  }
  .cursor.random{
    
  }
  p {
    position: absolute;
    margin: 0;
    transition: font-variation-settings 0.4s;
  }
  
  @media (hover: hover) and (pointer: fine) {
  .cursor { display: block; }
  } 

</style>
