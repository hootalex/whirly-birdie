<script>
  export let positionX = "left:0px";
  export let positionY = "top:0px";
  export let signText;
  export let signCSS;
  export let windows;
  export let buildingSize = "widetower";
</script>

<div class="towercontainer notranslate {buildingSize}" style="{positionX};{positionY}">
  <div class="towersign notranslate" style="{signText ? signCSS : 'display:none'}">
    {@html signText}
    <!--Can be HTML Tags-->
  </div>
  <div class="signbeam" style="{signText ? '' : 'display:none'}">
    <img
      src="https://cdn.glitch.com/deae9ec6-f4ee-4950-863b-b40470e94a3c%2Fstand2-01.svg?v=1583560283121"
      alt="A Sturdy Beam"
    />
    <hr />
    <img
      src="https://cdn.glitch.com/deae9ec6-f4ee-4950-863b-b40470e94a3c%2Fstand2-01.svg?v=1583560283121"
      alt="A Sturdy Beam"
    />
  </div>

  <div class="tower">{windows}</div>
</div>

<style>
  .towercontainer {
    display: inline-block;
    position: absolute;
    width: 150px;
    z-index: 3;
  }

  .signbeam {
    width: calc(100% + 20px);
    display: flex;
    justify-content: space-between;
    margin-left: -30px;
    padding-left: 40px;
  }

  .signbeam img {
    position: relative;
    margin-bottom: -20px;
    z-index: -1;
    height: 150px;
  }

  .signbeam hr {
    border: 0;
    width: calc(100% + 20px);
    border-bottom: 3px solid black;
    margin-left: -48px;
    margin-right: -55px;
    margin-bottom: 13px;
  }

  /* tower height and width can be set to whatever
windows added with css content to make responsiveness easier */

  .tower {
    font-family: "Whirlybats";
    height: 300px;
    text-align: center;
    font-size: 16px;
    width: calc(100% + 40px);
    height: 100%;
    background-color: var(--blue);
    border-left: 40px solid var(--navy);
    color: var(--offwhite);
    padding: 10px;
    box-sizing: border-box;
    padding-bottom: 50px;
  }

  /*   .narrowtower .tower:after {
    content: "¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬";
  }

  .widetower {
    width: 300px;
  }

  .widetower .tower:after {
    content: "¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬";
  }

  .shorttower .tower:after {
    content: "¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬ ¬";
  } */

  .towersign {
    position: relative;
    width: 100%;
    height: 140px;
    background-color: var(--sun);
    color: var(--red);
    margin-left: 40px;
    margin-bottom: -100px;
    z-index: 2;
    text-align: center;
    font-size: 60px;
    line-height: 0.8;
    padding: 12px;
    box-sizing: border-box;
  }

  .widetower {
    width: 300px;
  }

  @media screen and (max-width: 875px) {
    .tablethide {
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    .mobilehide {
      display: none;
    }

    .narrowtower {
      left: 10px !important;
    }

    .shorttower {
      right: 50px !important;
    }
  }
</style>
