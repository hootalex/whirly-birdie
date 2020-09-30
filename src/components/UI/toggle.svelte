<script>
  export let hide = false;
  export let styles = "";
  export let classes = "";
  export let name = "";
  export let value = false;

  let toggleDom;
  let circlePathValues;
</script>

<label
  bind:this="{toggleDom}"
  {name}
  class="{value ? 'toggled' : ''}
  {hide ? 'hide' : ''}
  {styles}">
  <input
    type="checkbox"
    aria-label="{name}"
    bind:checked="{value}"
    on:change="{() => {
      console.log(value);
    }}" />
  <container class="{classes}">
    <div class="track">
      <div class="toggleButton"></div>
    </div>
  </container>
</label>

<style>
  input {
    opacity: 0;
    width: 0;
    height: 0;
    padding: 0;
    margin: 0;
    position: absolute;
  }

  label.hide {
    opacity: 0;
    pointer-events: none;
  }
  label:hover {
    cursor: pointer;
  }
  .hide container {
    pointer-events: none;
  }
  container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 40px;
    width: 64px;
    border-radius: 32px;
    overflow: hidden;
    background: rgba(200, 200, 200, 0.2);
    transition: background-color 0.25s, opacity 0.25s;
    pointer-events: all;
  }
  .toggled container {
    background: var(--black);
  }
  .track {
    pointer-events: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    transform: translate(5px, 0px);
    transition: transform 0.25s;
  }
  .toggled container .track {
    transform: translate(27px, 0px);
  }
  .toggleButton {
    display: inline-block;
    position: relative;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: red;
  }
  .toggled .toggleButton {
    background: var(--offwhite);
  }

  .icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
  }
</style>
