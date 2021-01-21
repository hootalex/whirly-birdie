<script>
  import { onMount } from "svelte";
  import { setCursor_Pointer, setCursor_Default } from "./_Cursor.svelte";
  import { scrollY, WIDTH, HEIGHT } from "./stores.js";
  import { spring } from "svelte/motion";

  let showAnim = false;
  const yMax = spring(0, {
    stiffness: 0.12,
    damping: 0.59,
  });

  scrollY.subscribe((value) => {
    let inc = 0.2;
    let windowHeight = window.innerHeight;
    let documentHeight = document.body.clientHeight;
    let offsetTop = 0.7;
    let offsetBottom = 0.1;
    let min = documentHeight - windowHeight * offsetTop;
    let max = documentHeight - windowHeight * offsetBottom;

    let minMax = Math.min(Math.max(value + windowHeight, min), max);
    let ratio = (minMax - min) / (windowHeight * (offsetTop - offsetBottom));

    yMax.set(ratio);
    
    showAnim = (documentHeight - windowHeight*2) <= value ? true : false;
  });

   function randomWhirlybat(length) {
     let result           = '';
     let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,:;…!?·•*#//\(){}[]-_’«»"$€£¥+=><¬~^∅%↻◚╋☁☌☺⚑@&©®™℠`';
     for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
     }
     return result;
  }

  function animationloop(x) {
    let el = document.getElementById(x)

    el.addEventListener("webkitAnimationIteration", switchoutbat);

    function switchoutbat() {
    console.log("animation relooped")
    el.innerHTML = randomWhirlybat(1)
    }
  }

    onMount(()=>{
      animationloop("pipe1")
      animationloop("pipe2")
      animationloop("pipe3")
      animationloop("pipe4")
    })
</script>

<footer>
  <div class="cred">
    <h2>We made this ↑</h2>

    <container>
      <div>
        <h3>RICHARD YEE</h3>
        <p>Design & Dev</p>
                <a
          on:mouseenter="{setCursor_Pointer}"
          on:mouseleave="{setCursor_Default}"
          href="https://yee.gd"
        ><span class="wb-icon">H</span></a>
        <a
          on:mouseenter="{setCursor_Pointer}"
          on:mouseleave="{setCursor_Default}"
          href="https://twitter.com/yeemachine"
        ><span class="wb-icon">B</span></a>
         <a
          on:mouseenter="{setCursor_Pointer}"
          on:mouseleave="{setCursor_Default}"
          href="https://instagram.com/yeemachine"
        ><span class="wb-icon">®</span></a>
      </div>

      <hr />

      <div>
        <h3>ALEX TOMLINSON</h3>
        <p>Type & Design</p>
                <a
          on:mouseenter="{setCursor_Pointer}"
          on:mouseleave="{setCursor_Default}"
          href="https://alex.gd"
        ><span class="wb-icon">H</span></a>
        <a
          on:mouseenter="{setCursor_Pointer}"
          on:mouseleave="{setCursor_Default}"
          href="https://twitter.com/hootalex"
        ><span class="wb-icon">B</span></a>
                <a
          on:mouseenter="{setCursor_Pointer}"
          on:mouseleave="{setCursor_Default}"
          href="https://instagram.com/hoot.alex"
        ><span class="wb-icon">®</span></a>
                <a
          on:mouseenter="{setCursor_Pointer}"
          on:mouseleave="{setCursor_Default}"
          href="https://ursaminor.xyz"
        ><span class="wb-icon">Μ</span></a>
        
      </div>
      
    </container>
  </div>
  
  <div
    class="stamp"
    style="transform:scale3D({0.5 + 0.5 * $yMax},{0.5 + 0.5 * $yMax},{0.5 + 0.5 * $yMax});
                width:{Math.min(Math.max($WIDTH * 0.95), $HEIGHT * 0.85)}px;
                height:{Math.min(Math.max($WIDTH * 0.95), $HEIGHT * 0.85)}px;"
  ></div>
  <svg
    version="1.1"
    id="pipes"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewbox="0 0 1500 800"
    xml:space="preserve"
  >
             
    
    <style type="text/css">
      @keyframes pipeani {
        0% {
          offset-distance: 0%;
        }
        100% {
          offset-distance: 100%;
        }
      }
      .st0 {
        fill: var(--black);
      }
      .st1 {
        opacity: 0.3;
        fill: none;
        stroke: #aa9abf;
        stroke-width: 80;
        stroke-miterlimit: 10;
      }

      .pipe {
        font-family: "Whirlybats";
        font-size: 80px;
        transform: translateY(31px);
        fill: #aa9abf;
      }

    </style>
    

    
    <path
      class="st1"
      d="M134.7-97.9v248.8c0,37.8,30.6,68.4,68.4,68.4h180.3c37.8,0,68.4,30.6,68.4,68.4v289
	c0,37.8,30.6,68.4,68.4,68.4H755c37.8,0,68.4,30.6,68.4,68.4v270.9"
    ></path>
    <path
      class="st1"
      d="M558.7-152.2v537.7c0,37.8-30.6,68.4-68.4,68.4H259.9c-37.8,0-68.4,30.6-68.4,68.4v451.3"
    ></path>
    <path
      class="st1"
      d="M695.6-156.5v592c0,37.8,30.6,68.4,68.4,68.4h239c37.8,0,68.4,30.6,68.4,68.4v384"
    ></path>
    <path
      class="st1"
      d="M1353.9-127.2v306.3c0,37.8-30.6,68.4-68.4,68.4h-247.7c-37.8,0-68.4,30.6-68.4,68.4v0
	c0,37.8,30.6,68.4,68.4,68.4h152.1c37.8,0,68.4,30.6,68.4,68.4v519.8"
    ></path>
    
    
      <text text-anchor="middle" class="pipe" id="pipe1">S</text>
      <text text-anchor="middle" class="pipe" id="pipe2">C</text>
      <text text-anchor="middle" class="pipe" id="pipe3">s</text>
      <text text-anchor="middle" class="pipe" id="pipe4">j</text>
    
    {#if showAnim}
     <animateMotion 
    path="M134.7-97.9v248.8c0,37.8,30.6,68.4,68.4,68.4h180.3c37.8,0,68.4,30.6,68.4,68.4v289,c0,37.8,30.6,68.4,68.4,68.4H755c37.8,0,68.4,30.6,68.4,68.4v270.9"
    href="#pipe1" 
    dur="10s" 
    rotate="auto"
    repeatcount="indefinite"
    keytimes="0;1"  
    calcmode="spline"
    keysplines="0.4, 0, 0.2, 1"
                     ></animateMotion>
      
            <animateMotion 
    path="M558.7-152.2v537.7c0,37.8-30.6,68.4-68.4,68.4H259.9c-37.8,0-68.4,30.6-68.4,68.4v451.3"
    href="#pipe2" 
    dur="9s" 
    rotate="auto"
    repeatcount="indefinite"
    keytimes="0;1"  
    calcmode="spline"
    keysplines="0.4, 0, 0.2, 1"
    ></animateMotion>
      
                  <animateMotion 
    path="M695.6-156.5v592c0,37.8,30.6,68.4,68.4,68.4h239c37.8,0,68.4,30.6,68.4,68.4v384"
    href="#pipe3" 
    dur="8s" 
    rotate="auto"
    repeatcount="indefinite"
    keytimes="0;1"  
    calcmode="spline"
    keysplines="0.4, 0, 0.2, 1"
    ></animateMotion>
      
                        <animateMotion 
    path="M1353.9-127.2v306.3c0,37.8-30.6,68.4-68.4,68.4h-247.7c-37.8,0-68.4,30.6-68.4,68.4v0,c0,37.8,30.6,68.4,68.4,68.4h152.1c37.8,0,68.4,30.6,68.4,68.4v519.8"
    href="#pipe4" 
    dur="7s" 
    rotate="auto"
    repeatcount="indefinite"
    keytimes="0;1"  
    calcmode="spline"
    keysplines="0.4, 0, 0.2, 1"
    ></animateMotion>
    
    {/if}

  </svg>
  
            <div class="telegramstickers">
    <a on:mouseenter="{setCursor_Pointer}" on:mouseleave="{setCursor_Default}" href="https://t.me/addstickers/Whirlybats">Telegram Stickers</a>
  </div>
  
          <div class="contact">
    <a on:mouseenter="{setCursor_Pointer}" on:mouseleave="{setCursor_Default}" href="mailto:1alextomlinson@gmail.com">Contact</a>
  </div>
  
</footer>

<style>
  svg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
  }
  hr {
    border-color: black;
    margin: 0 24px 0 24px;
    opacity: 0.1;
    border: none;
  }
  h2 {
z-index: 1;
    font-variation-settings: "wght" 65, "wdth" 77, "ital" 0;
    font-size: 10vw;
    line-height: 1;
    font-weight: normal;
    font-size: clamp(42px, calc(3vw + 2vh), 70px);
    margin-bottom: 0.4em;
  }
  h3,
  p {
    margin: 0;
    z-index: 1;
    font-weight: normal;
    font-size: 14px;
  }
  .cred {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: initial;
  }
  .stamp {
    min-width: 400px;
    min-height: 400px;
    max-width: 700px;
    max-height: 700px;
    border-radius: 50%;
    background: #aa9abf;
  }
  
  .contact a {
    font-family: "Nicholson Beta";
    color: #aa9abf;
    position: absolute;
    bottom: 20px;
    right: 20px;
    z-index: 10;
    font-size: 17px;
}
  
    .telegramstickers a {
    font-family: "Nicholson Beta";
    color: #aa9abf;
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 10;
    font-size: 17px;
      display: none;
}
  
  footer {
    position: sticky;
    overflow: hidden;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: 90vh;
    background: var(--black);
    display: flex;
    place-items: center;
    flex-direction: column;
    color: black;
    align-items: center;
    justify-content: center;
  }
  a {
    color: black;
    text-decoration: none;
    font-size: 32px;
  }
  a:hover{
    cursor:none;
  }
  container {
    display: flex;
    font-family: "Nicholson Beta";
    z-index: 2;
    padding-top: 24px;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
  }
  @media screen and (max-width: 600px) {
    .cred {
      align-items: initial;
    }
    h2 {
      margin-bottom: 16px;
    }
  }
</style>
