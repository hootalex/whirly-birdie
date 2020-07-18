<script>
import Building from './Building.svelte'
import Bridge from './Bridge.svelte'
</script>

<div class="city">

<Building 
    buildingSize={'narrowtower'}
    positionX={'left:220px'} 
    positionY={'bottom:60px'} 
    signText={'<span>E</span>'}
    signCSS={'font-family:"Whirlybats";font-size:110px;padding-top: 15px;color:var(--sun);background:var(--blue);animation: basicAnimation 1s linear infinite;'}
/>

<Building 
    buildingSize={'shorttower mobilehide'}
    positionX={'left:40px'} 
    positionY={'bottom:0px'} 
    signText={'<span style="font-variation-settings:\'wght\' 80, \'wdth\' 70, \'ital\' 0; font-size: 30px; line-height: 1.5">One Hot</span> <span style="font-variation-settings:\'wght\' 60, \'wdth\' 65, \'ital\' 0; font-size: 60px; line-height: .7;">Font</span>'}
    signCSS={'font-size:40px;color:var(--red);background:var(--black);'}
/>

<Building 
    buildingSize={'widetower tablethide mobilehide'}
    positionX={'left:400px'} 
    positionY={'bottom:30px'} 
    signText={'<span style="font-variation-settings:\'wght\' 100, \'wdth\' 110, \'ital\' 0; font-size: 50px">Punchy</span> <span style="font-variation-settings:\'wght\' 100, \'wdth\' 150, \'ital\' 0; font-size: 50px">Titles</span>'}
    signCSS={'font-size:58px;color:var(--red);background:var(--sun)'}
/>

<Building 
    buildingSize={'shorttower'}
    positionX={'right:80px'} 
    positionY={'bottom:30px; z-index:21'} 
signText={'i'}
    signCSS={'font-family:"Whirlybats";font-size:110px;padding-top: 25px;color:var(--white);background:var(--green);animation: basicAnimation 1s infinite;'}
/>

<Bridge positionX={'right:40px'} positionY={'bottom:60px'}/>

</div>



<style>

    .city{
        width:100%;
        height:550px;
        position:relative;
        overflow-x: hidden;
        overflow-y:visible;
    }
    
    
    
</style>