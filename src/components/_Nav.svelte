<script>
  import {WIDTH,HEIGHT,TOUCH} from './stores.js'
  let selected = false
  let bg
  let buttonHover = false
</script>

<button 
  class="wb-icon {selected ? 'wb-iconend' : ''}" 
  type="button" 
  on:mouseover={()=>{buttonHover = true}}
  on:mouseout={()=>{buttonHover = false}}
  on:click={()=>{selected=!selected}}>
  χ
</button>

<nav class="hide {selected ? 'expanded' : ''}">
  <div bind:this={bg} class="bg {buttonHover && !$TOUCH ? 'hover' : ''}" 
       style={
         selected ? 'transform:scale('+ Math.max($WIDTH,$HEIGHT)/bg.offsetWidth*2.5 +');-webkit-transform:scale('+ Math.max($WIDTH,$HEIGHT)/bg.offsetWidth*2.5 +')' : ''}>
  </div>
  
  <h2><span class="wb-icon" style="color:var(--black)">B</span> <span>W</span><span>h</span><span>I</span><span>r</span><span>l</span><span class="kerny">y</span> <span>B</span><span>i</span><span>r</span><span>d</span><span>i</span><span>e</span></h2>
  
    <h2><span>W</span><span>h</span><span>I</span><span>r</span><span>l</span><span class="kerny">y</span><span>b</span><span>a</span><span class="kerny">t</span><span>s</span> <span class="wb-icon" style="color:var(--black)">D</span></h2>
  
  <h2><span class="wb-icon" style="color:var(--black)">O</span> <span>P</span><span>l</span><span>a</span><span class="kerny">y</span><span class="kernhalf">g</span><span>r</span><span>o</span><span>u</span><span>n</span><span>d</span></h2>
  
  <h2><span>B</span><span>u</span><span>y</span> <span>N</span><span>o</span><span>w</span><span>!</span> <span class="wb-icon" style="color:var(--black)">$</span></h2>
  
</nav>

<style>
  
    h2 span {
display: inline-block;
      font-variation-settings: 'wght' 74, 'wdth' 75, 'ital' 0;
}
  
  h2 span:nth-child(odd) {
  transform: translateY(2px);
}
  
          h2 span:nth-child(even) {
  color: var(--wood)
}
  
    h2 span:nth-child(3n) {
  color: var(--blue)
}
  
      h2 span:nth-child(4n) {
  color: var(--green)
}
  
        h2 span:nth-child(5n) {
  color: var(--wood)
}
  
  
  
    h2 span:hover {
transform: translateY(-4px);
}
  
  .kerny {
margin-left: -.7vw;
}
  
  .kernhalf {
    margin-left: -.2vw;
}
  
  .wb-icon {
  font-family: "Whirlybats";
  font-variation-settings: "anim" 100;
  display: inline-block;
  white-space: nowrap;
  transition:.5s;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
  
  .wb-iconend {
  font-variation-settings: "anim" 200;
}
  
  button{
position: fixed;
    top: 0px;
    left: 0;
    z-index: 999;
    background: transparent;
    color: var(--black);
    width: 80px;
    height: 80px;
    border: none;
    font-weight: normal;
    font-size: 24px;
    text-align: center;
    border-bottom-right-radius: 10px;
border-bottom-left-radius: 10px;
    
  }
  nav{
    width:100%;
    height:100%;
    position:fixed;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    top:0;
    left:0;
    z-index:998;
    pointer-events:none;
/*     opacity:0; */
    transition:.5s;
    
  }
  h2{
    font-size: 6vw;
    margin: 30px;
    opacity:0;
    transition:.5s;
    z-index:999;
    font-weight: normal;
  }
  .expanded h2{
    opacity:1;
  }
  .bg{
    content:'';
    position:fixed;
    top:0px;
    left:0;
    width:80px;
    height:80px;
    border-radius:50%;
    background: var(--white);
    transform-origin:center;
    -webkit-transform-origin: center;
    transform:scale(0);
    -webkit-transform: scale(0);
    transition: transform .45s;
/*     opacity:0; */
  }
  .bg.hover{
    transform: scale(.7);
    -webkit-transform: scale(0.7);
  }
  .expanded .bg{
    background: #e3f5ff;
    transition: transform .65s;
    opacity:1;
  }
/*   nav.expanded:before{
    transform:scale3d(80,80,80)
  } */
  nav.expanded{
    pointer-events:all;
    opacity:1;
  }
  @media screen and (max-width: 600px) {
    button,.bg{
      width:55px;
      height:52px;
    }
    
    h2 span {
font-size: 9vw;
}
    
/*     button,.bg{
      left:0;
      bottom:0;
    } */
 
  }
  
  
  
</style>
