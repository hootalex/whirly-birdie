<script>
import ColorPicker from './ColorPicker.svelte'
import { glyphColor } from './stores.js';

let uppercase = false;
let numlock = false;
let symlock = false; 
let savedKey = 'g'
// let unfinished = ';)”%^~€¥£•'
let unfinished = []


let keyOrder = [{
    default:'qwertyuiop',
    upper:'QWERTYUIOP',
    num:'1234567890',
    sym:'[]{}#%^*+='
    },
    {
    default:'asdfghjkl',
    upper:'ASDFGHJKL',
    num:'-/:;()$&@"',
    sym:'_\\|~<>€£¥·'
    },
    {
    default:"zxcvbnm",
    upper:'ZXCVBNM',
    num:".,?!'",
    sym:".,?!'"
    }
    ]

const handleKeydown = (event,row,index) => {
    event.preventDefault()
    let currentKey = uppercase ? keyOrder[row].upper.charAt(index) 
        : numlock && symlock ? keyOrder[row].sym.charAt(index) 
        : numlock && !symlock ? keyOrder[row].num.charAt(index) 
        : keyOrder[row].default.charAt(index)
        savedKey = currentKey
        console.log(currentKey)
}

const handleCapKey = (event) => {
    event.preventDefault()
    if(!numlock){
        uppercase = !uppercase
    }else{
        symlock = !symlock
    }
    console.log({'sym:':symlock,'num':numlock,'cap':uppercase},savedKey)
}

const handleNumKey = (event) => {
    event.preventDefault()
    uppercase = false
    numlock = !numlock
    if(numlock){
        symlock=false;
    }else{

    }
    console.log({'sym:':symlock,'num':numlock,'cap':uppercase},savedKey)
}

</script>

<section style='--type:{$glyphColor.type};--bg:{$glyphColor.bg};--type2:{$glyphColor.type2};--bg2:{$glyphColor.bg2};--alpha:{$glyphColor.alpha}'>
<ColorPicker themeColor={glyphColor}/>
<container class="interactive">
    <div class="display">
        <div class="featured">
                <h3>{savedKey}</h3>
                <!-- <label>{savedKey}</label> -->
        </div>
    </div>
    <container id="keyboard">
        {#each Array(keyOrder.length) as _, i}
            <div class={"row row-"+i}>
                {#if i === 2}
                    <button 
                        class="cap {uppercase?'selected':''} {numlock ? 'numlock' : ''}"
                        on:click={handleCapKey}
                    >
                        <p class="">
                        {numlock && !symlock ? '#+='
                        : numlock && symlock ? '123'
                        : 'S'
                        }
                        </p>
                    </button>
                {/if}
                
                {#each Array(keyOrder[i][uppercase ? 'upper' 
                    : (numlock && symlock) ? 'sym'
                    : (numlock && !symlock) ? 'num' 
                    : 'default'].length) as _, j}
                    <button
                        on:click={(e)=>{handleKeydown(e,i,j)}}
                        class="{
                        (!uppercase && unfinished.includes(keyOrder[i].default.charAt(j))) ? 'hidden'
                        : (uppercase && unfinished.includes(keyOrder[i].upper.charAt(j))) ? 'hidden'
                        : (numlock && !symlock && unfinished.includes(keyOrder[i].num.charAt(j))) ? 'hidden'
                        : (numlock && symlock && unfinished.includes(keyOrder[i].sym.charAt(j))) ? 'hidden'
                        : ''
                        } {
                        (!uppercase && !numlock && savedKey === keyOrder[i].default.charAt(j)) ? 'selected' 
                        : (uppercase && savedKey === keyOrder[i].upper.charAt(j)) ? 'selected'
                        : (numlock && !symlock && (savedKey === keyOrder[i].num.charAt(j))) ? 'selected'
                        : (numlock && symlock && (savedKey === keyOrder[i].sym.charAt(j))) ? 'selected'
                        : ''
                        }"
                    >
                    <p>
                    { uppercase ? keyOrder[i].upper.charAt(j) 
                    : numlock && !symlock ? keyOrder[i].num.charAt(j) 
                    : numlock && symlock ? keyOrder[i].sym.charAt(j) 
                    : keyOrder[i].default.charAt(j)}
                    </p>
                    </button>
                {/each}  
            </div>
        {/each}
        <div class="row row-3">
            <button 
            on:click={handleNumKey}
            class="num">
                <p>{numlock ? 'abc' : '123'}</p>
            </button>
            <!-- <div class="null"></div> -->
            <div class="spacebar"></div>
            <!-- <div class="return"></div> -->
            <!-- <button
            on:click={(e)=>{savedKey='.'}}
            class="{
                (savedKey === '.') ? 'selected' 
                : ''
            }"
            >
            <p>.</p>
            </button> -->
        </div>
    </container>
</container>

</section>

<style>
    section{
        --type2: #fc4347;
        grid-column:1 / 13;
        display:block;
        overflow-x:hidden;
        padding: var(--padding);
        border-radius: var(--radius);
        height: fit-content;
        background-color: var(--bg);
        color:var(--type);
        margin-bottom:calc(var(--padding) * 2)
/*              border-top-right-radius: 0px; */

    }
    
    .interactive{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        width:100%;
/*         margin: 0 0 var(--padding) 0; */
    }
    .row{
        display: flex;
    }
    button{
        --radius:10px;
        width:8.25vw;
        max-width:80px;
        min-width: 30px;
        height:6vw;
        max-height:60px;
        margin:4px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Whirlybats';
        font-variation-settings: "anim" 100;
        border-radius: var(--radius);
        border:0px;
        background:transparent;
        position: relative;
        color:var(--type);
        transition:transform .3s;
        overflow:hidden;
    }
    button:focus{
        outline-color:var(--type);
    }
    button.selected{
        transform: scale3d(0.9,0.9,0.9);
        color:var(--bg);
        font-family: "Whirly Birdie";
        font-variation-settings: "wght" 75, "wdth" 110, "ital" 0;
        pointer-events: none;
    }
    /* button.selected:after{
        opacity: calc(var(--alpha) * 4.5)
    } */
    button:after{
        content: '';
        width:100%;
        height: 100%;
        position: absolute;
        top:0;
        left:0;
        opacity: var(--alpha);
        border-radius: var(--radius);
        background: var(--type);
        z-index:0;
    }
    button:before{
        content: '';
        width:8.25vw;
        height:8.25vw;
        min-width:100px;
        min-height:100px;
        max-height: 100px;
        max-width: 100px;
        position: absolute;
        /* opacity: calc(var(--alpha) * 2.5); */
        border-radius: 50%;
        background: var(--bg2);
        z-index:0;
        transform:scale3d(0,0,0);
        transition:.4s;
    }
    button.selected:before{
        transform:scale3d(1.05,1.05,1.05)
    }
    button.hidden{
        pointer-events: none;
    }
    button.hidden p{
        /* display: none; */
    }
   button p {
    pointer-events:none;
    margin:0;
    font-size:clamp(10px , 4vw , 40px);
    z-index: 1;
  }
  button.selected p{
    font-size:clamp(10px , 4vw , 24px);
    color:var(--type2)
  }
    .cap,.cap.selected{
        transition: font-variation-settings .3s;
        font-family:'Whirlybats UI';
    }
    .cap.selected p{
        font-size:clamp(10px , 4vw , 40px);
        color:var(--bg)
    }
    .cap,.num{
        position: absolute;
        left: 0;
    }
    .capock,.num{
        font-family: "Whirly Birdie";
        font-variation-settings: "wght" 75, "wdth" 110, "ital" 0;
    }
    .cap.numlock p,.num p{
        font-size:clamp(10px , 3vw , 20px);
    }
  
  
  
    /* remove when ready */
    .cap.numlock{
        pointer-events: none;
        color:transparent;
        display:none;
    }
  
  
  
  
  
    .cap:after,.num:after{
        opacity: calc(var(--alpha) * 4);
    }
    .cap.selected,.num.selected{
        font-variation-settings: "anim" 200;
        transform: scale3d(1,1,1);
        border:0px;
        color:var(--bg);
        pointer-events: all;
    }   
    .cap.selected::after,.num.selected:after{
        opacity: 1 !important;
    }
    .cap:before,.num:before{
        display: none;
    }
    .null{
        --radius:4px;
        width:8.5vw;
        max-width:80px;
        height:6vw;
        max-height:60px;
        margin:4px;
        border-radius: var(--radius);
        background:var(--type);
        opacity:0;
    }
    .spacebar{
        --radius:10px;
        width: calc(42.5vw + 8px * 4);
        max-width: 432px;
        height:6vw;
        max-height:60px;
        margin:4px;
        border-radius: var(--radius);
        background:var(--type);
        opacity:var(--alpha);
    }
    .return{
        --radius:2px;
        position:absolute;
        right:0;
        width:12vw;
        max-width:100px;
        height:6vw;
        max-height:60px;
        margin:4px;
        border-radius: var(--radius);
        background:var(--type);
        opacity:var(--alpha);
    }

    .display{
        width:100%;
/*         max-width: 1000px; */
          justify-content: center;
    align-items: center;
    display: flex;
        /* background:var(--lightgrey) */
    }
    .featured{
        opacity:1;
        display:flex;
        align-items: center;
        justify-content: center;
        margin-bottom:var(--padding)
    }
    .featured.hide{
        /* opacity:0; */
    }
    .featured h3{
        font-family: "Whirlybats";
        animation: basicAnimation 1s infinite;
        font-size: clamp(100px , 80vw , 200px);
        margin: 0;
        text-align: center;
        font-weight: normal;
      position: relative
    }
  .featured h3:after{
    content:'';
    position:absolute;
    top:0;left:0;
    width:calc(100% - 8px);
    height:calc(100% - 8px);
    opacity:calc(var(--alpha) * 3);
/*     border:4px dotted var(--type); */
    pointer-events:none;
  }
    #keyboard{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
    }
  
    @media screen and (max-width: 1000px) {
  
        button{
            max-width:60px;
        }
        button,.spacebar,.null{
            margin:2px;
            height:10vw;
        }
        button:before{
            width:14vw;
            height:14vw;
            min-width: 50px;
            min-height: 50px;
            max-width: 80px;
            max-height: 80px;    
        }
      
        .featured h3{
           font-size: clamp(100px , 80vw , 200px);
          
        }
        .spacebar{
            width:calc(42.5vw + 4px * 4);
            max-width: 316px;
        }
    }
  
  @media screen and (max-width: 750px){
      .display{
        margin:var(--padding) 0 var(--padding) 0
      }
    section{
         border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }
  }
  
  @media screen and (max-width: 600px){
      section{
/*         margin: 0 8px 0 8px; */
      }
  } 


    @media (hover: hover) {
        button:hover{
            cursor: pointer;
            animation: basicAnimation 1s infinite;
        }
        button:hover:after{
            opacity: calc(var(--alpha) * 2)
        }
        button.selected:hover:after{
            opacity: calc(var(--alpha) * 2)
        }
        .num:hover,.cap:hover{
            animation: none;
        }
        /* .cap:hover:after,.num:hover:after{
            opacity: calc(var(--alpha) * 4);
        } */
    }

</style>