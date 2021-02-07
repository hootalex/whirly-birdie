<script>
  import Tree from "./Tree.svelte";
</script>

<div class="street notranslate">
  <div class="car">(</div>
  <div class="car2">J</div>
  <div class="snail">j</div>

  <Tree
    letter="{'…'}"
    positionX="{'right:-.5%'}"
    positionY="{'transform: translateY(-20px);'}"
  />

  <Tree
    letter="{'…'}"
    positionX="{'right:25%'}"
    positionY="{'transform: translateY(-12px);'}"
  />

  <Tree
    letter="{'…'}"
    positionX="{'right:15%'}"
    positionY="{'transform: translateY(-62px);'}"
  />

  <Tree
    letter="{'…'}"
    positionX="{'left:25%'}"
    positionY="{'transform: translateY(-59px);'}"
  />

  <Tree
    letter="{'…'}"
    positionX="{'right:40%'}"
    positionY="{'transform: translateY(-23px);'}"
  />

  <Tree
    letter="{'…'}"
    positionX="{'left:-.5%'}"
    positionY="{'transform: translateY(-36px);'}"
  />
</div>

<style>
  .street {
    position: relative;
    width: 100%;
    z-index: 35;
    height: 280px;
  }

  .car,
  .car2,
  .snail {
    font-family: "Whirlybats";
    font-size: 120px;
    position: absolute;
    width: 100%;
  }

  .car {
    animation: car 8s linear;
    animation-iteration-count: 3;
    animation-fill-mode: forwards;
    color: var(--red);
    top: -80px;
  }

  .car2 {
    animation: car 9s infinite linear;
    color: var(--navy);
    top: -25px;
    animation-iteration-count: 2;
    animation-fill-mode: forwards;
  }

  .snail {
    animation: car 13s infinite linear;
    color: var(--blue);
    animation-iteration-count: 3;
    animation-fill-mode: forwards;
    top: 0px;
  }

  @keyframes car {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  @media screen and (max-width: 600px) {
    .car,
    .car2,
    .snail {
      font-family: "Whirlybats";
      font-size: 90px;
      position: absolute;
      width: 100%;
    }

    .car {
      display: none;
    }

    .car2 {
      animation: car 5s infinite linear;
      color: var(--navy);
      padding-top: 15px;
    }

    .snail {
      animation: car 7s infinite linear;
      color: var(--blue);
      padding-top: 35px;
    }

    .street {
      display: none;
    }
  }
</style>
