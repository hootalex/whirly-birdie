<script>
import {WIDTH} from './stores.js'

</script>

<style type="text/css">
  
        svg {
width: 100%;
grid-column: 1 / 13;
}
  
.coa0{clip-path:url(#SVGIiD_2_);}
.coa1{fill:none;stroke:var(--white);stroke-miterlimit:10;}
.coa2{fill:#010101;}
.coa3{fill:none;stroke:var(--white);stroke-width:5;stroke-miterlimit:10;}
.coa4{fill:none;stroke:var(--white);stroke-width:11;stroke-miterlimit:10;}
.coa5{fill:var(--white);}
.coastercars {
font-size: 100px;
offset-path: path('M24.8,415.1c0,0,90.8,0,133.3,0c109.7,0,96.1-174,255.3-174c69,0,117.4,38.2,161.6,87 c28.7,31.7,61.8,69.3,105,82.3c54.4,16.5,94-14.9,116.9-62.3c25.8-53.4,38.9-120.5,87.6-159.2c78.7-62.6,169.1-8,198.5,76.3 c22.1,63.3,36.5,149.7,120.8,149.7l187.8,0.3');   
offset-distance: 10%;
font-family: "Whirlybats";
animation: rollercoaster 20s cubic-bezier(.31,.19,.78,.67) infinite;
fill: var(--white);
  opacity: 0;
  transform: translateY(-20px);
}
.car2 {
animation-delay: .25s;
  fill: var(--sun);
}
  .car3 {
animation-delay: .5s;
}

  .car4 {
animation-delay: .75s;
    fill: var(--sun);
}

  .car5 {
animation-delay: 1s;
}

    .car6 {
animation-delay: 1.25s;
      fill: var(--sun);
}

    .car7 {
animation-delay: 1.5s;
}

.battitle {
font-family: "Whirly Birdie";
  position: absolute;
  font-size: 120px;
  font-variation-settings: 'wght' 80, 'wdth' 50, 'ital' 0;
  fill: var(--navy);
}

.cloud {
  font-family: "Whirlybats";
font-size: 180px;
fill: var(--white);
  font-variation-settings: "anim" 100;
  transition: .7s;
  user-select: none;
}

.cloud:hover {
font-variation-settings: "anim" 200;
}
    
    
    @keyframes rollercoaster {
0% {
    offset-distance: 2%;
    opacity: 0;
  }
  0.4% {
    offset-distance: 3%;
    opacity: 1;
  }
  20% {
    offset-distance: 94%;
    opacity: 1;
  }
  20.4% {
    offset-distance: 95%;
    opacity: 0;
  }
  40% {
    offset-distance: 95%;
    opacity: 0;
  }
  100% {
    offset-distance: 95%;
    opacity: 0;
  }
}
  
     .dropillo {
font-family: 'Whirlybats';
    font-size: 150px;
    padding-right: 8px;
    float: left;
    line-height: .7;
}
  
    .infobox{
        font-family: 'Nicholson Beta';
        font-feature-settings: "salt" 2;
        grid-column: 4 / 10;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size: 20px;
      z-index:0;
      
/*       custom tab/bookmark style */
      
    margin-bottom: -20px;
    padding: 20px;
    box-shadow: inset 0px -8px 0px 0px rgba(0,0,0,0.05);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom: none;
    color: var(--black);
      text-align: center;
      background-color: var(--sun);
    }
    p{
      max-width:800px;
      text-align: left;
    }

  @media screen and (max-width: 1024px) {
     .infobox{
       grid-column:2 / 12;
     }
  }
  @media screen and (max-width: 750px) {
     .infobox{
       grid-column:1 / 13;
     }

    
  }
   @media screen and (max-width: 600px) {
     .infobox, .mobilecoastercontainer{
       grid-column:1 / 13;
     }
  }

</style>

  
 {#if $WIDTH>600}
  <svg version="1.1" id="desktopcoaster" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewbox="0 -70 1415.4 895.4" style="enable-background:new 0 0 1415.4 795.4;" xml:space="preserve">
<style type="text/css">
	.co0{fill:none;stroke:var(--white);stroke-miterlimit:10;}
</style>
<g>
	<g>
		<g>
			<line class="co0" x1="197.6" y1="591" x2="311.5" y2="704.9"/>
			<line class="co0" x1="311.5" y1="591" x2="197.6" y2="704.9"/>
			<line class="co0" x1="311.9" y1="591" x2="425.8" y2="704.9"/>
			<line class="co0" x1="425.8" y1="591" x2="311.9" y2="704.9"/>
			<line class="co0" x1="424.1" y1="591" x2="538" y2="704.9"/>
			<line class="co0" x1="538" y1="591" x2="424.1" y2="704.9"/>
			<line class="co0" x1="537.6" y1="591" x2="651.5" y2="704.9"/>
			<line class="co0" x1="651.5" y1="591" x2="537.6" y2="704.9"/>
			<line class="co0" x1="650.7" y1="591" x2="764.6" y2="704.9"/>
			<line class="co0" x1="764.6" y1="591" x2="650.7" y2="704.9"/>
			<line class="co0" x1="764.9" y1="591" x2="878.8" y2="704.9"/>
			<line class="co0" x1="878.8" y1="591" x2="764.9" y2="704.9"/>
			<line class="co0" x1="877.1" y1="591" x2="991" y2="704.9"/>
			<line class="co0" x1="991" y1="591" x2="877.1" y2="704.9"/>
			<line class="co0" x1="991.4" y1="591" x2="1105.3" y2="704.9"/>
			<line class="co0" x1="1105.3" y1="591" x2="991.4" y2="704.9"/>
			<line class="co0" x1="1104.5" y1="591" x2="1218.4" y2="704.9"/>
			<line class="co0" x1="1218.4" y1="591" x2="1104.5" y2="704.9"/>
			<line class="co0" x1="197.6" y1="476.7" x2="311.5" y2="590.6"/>
			<line class="co0" x1="311.5" y1="476.7" x2="197.6" y2="590.6"/>
			<line class="co0" x1="311.9" y1="476.7" x2="425.8" y2="590.6"/>
			<line class="co0" x1="425.8" y1="476.7" x2="311.9" y2="590.6"/>
			<line class="co0" x1="424.1" y1="476.7" x2="538" y2="590.6"/>
			<line class="co0" x1="538" y1="476.7" x2="424.1" y2="590.6"/>
			<line class="co0" x1="537.6" y1="476.7" x2="651.5" y2="590.6"/>
			<line class="co0" x1="651.5" y1="476.7" x2="537.6" y2="590.6"/>
			<line class="co0" x1="650.7" y1="476.7" x2="764.6" y2="590.6"/>
			<line class="co0" x1="764.6" y1="476.7" x2="650.7" y2="590.6"/>
			<line class="co0" x1="764.9" y1="476.7" x2="878.8" y2="590.6"/>
			<line class="co0" x1="878.8" y1="476.7" x2="764.9" y2="590.6"/>
			<line class="co0" x1="877.1" y1="476.7" x2="991" y2="590.6"/>
			<line class="co0" x1="991" y1="476.7" x2="877.1" y2="590.6"/>
			<line class="co0" x1="991.4" y1="476.7" x2="1105.3" y2="590.6"/>
			<line class="co0" x1="1105.3" y1="476.7" x2="991.4" y2="590.6"/>
			<line class="co0" x1="1104.5" y1="476.7" x2="1218.4" y2="590.6"/>
			<line class="co0" x1="1218.4" y1="476.7" x2="1104.5" y2="590.6"/>
			<path class="co0" d="M224.9,389.7c29.1,28.7,58.1,57.7,86.6,86.6"/>
			<line class="co0" x1="311.5" y1="362.4" x2="197.6" y2="476.3"/>
			<line class="co0" x1="311.9" y1="362.4" x2="425.8" y2="476.3"/>
			<line class="co0" x1="425.8" y1="362.4" x2="311.9" y2="476.3"/>
			<line class="co0" x1="424.1" y1="362.4" x2="538" y2="476.3"/>
			<line class="co0" x1="538" y1="362.4" x2="424.1" y2="476.3"/>
			<line class="co0" x1="537.6" y1="362.4" x2="651.5" y2="476.3"/>
			<path class="co0" d="M627.6,386.3c-30.6,29.1-59.6,60.1-90,90"/>
			<path class="co0" d="M705.6,417.5c19.7,19.6,39.4,39.1,59,58.8"/>
			<path class="co0" d="M709.8,417.2c-19.8,19.2-38.8,39.2-59.1,59.1"/>
			<path class="co0" d="M781.6,379.1c32.4,33.3,65.4,65.3,97.2,97.2"/>
			<line class="co0" x1="878.8" y1="362.4" x2="764.9" y2="476.3"/>
			<line class="co0" x1="877.1" y1="362.4" x2="991" y2="476.3"/>
			<line class="co0" x1="991" y1="362.4" x2="877.1" y2="476.3"/>
			<line class="co0" x1="991.4" y1="362.4" x2="1105.3" y2="476.3"/>
			<line class="co0" x1="1105.3" y1="362.4" x2="991.4" y2="476.3"/>
			<line class="co0" x1="1104.5" y1="362.4" x2="1218.4" y2="476.3"/>
			<path class="co0" d="M1169.2,411.6c-21.2,21.8-43.2,42.8-64.7,64.7"/>
			<path class="co0" d="M274.1,324.6c12.9,11.8,24.9,25.8,37.4,37.4"/>
			<path class="co0" d="M328.8,265c33.2,32.4,65.2,65.4,97,97"/>
			<line class="co0" x1="425.8" y1="248.1" x2="311.9" y2="362"/>
			<line class="co0" x1="424.1" y1="248.1" x2="538" y2="362"/>
			<path class="co0" d="M510.7,275.4c-28.7,29-57.7,58-86.6,86.6"/>
			<path class="co0" d="M572.5,327.1C561,339.4,548,349.4,537.6,362"/>
			<path class="co0" d="M815.1,298.3c21.9,20.1,41.9,43.1,63.7,63.7"/>
			<path class="co0" d="M878.8,248.1C854,269.4,833,295.4,809,317.5"/>
			<line class="co0" x1="877.1" y1="248.1" x2="991" y2="362"/>
			<line class="co0" x1="991" y1="248.1" x2="877.1" y2="362"/>
			<line class="co0" x1="991.4" y1="248.1" x2="1105.3" y2="362"/>
			<path class="co0" d="M1082.6,270.8c-30.6,30.6-60.6,60.6-91.2,91.2"/>
			<path class="co0" d="M1112,354.5c-2.7,2.3-5.7,4.3-7.5,7.5"/>
			<path class="co0" d="M853.6,222.5c7.9,7.9,15.8,15.8,23.7,23.7c0.5,0.5,1,1,1.4,1.4"/>
			<path class="co0" d="M916.9,173.6c25.1,24.8,49.1,49.8,74.1,74.1"/>
			<path class="co0" d="M960.4,164.4c-27.4,28-55.4,55-83.3,83.3"/>
			<path class="co0" d="M1041.8,197.3c-17.8,16.1-32.8,34.1-50.4,50.4"/>
		</g>
	</g>
</g>
<g>
	<path class="coa2" d="M153.1,440.2H24.8V308.1c0-14.4,2.7-27.1,8.2-38.2c5.4-11.1,13.1-19.7,22.8-25.9c9.8-6.2,20.9-9.3,33.3-9.3
		c20,0,35.7,6.7,47,20.1c11.3,13.4,17,31.2,17,53.3V440.2z"/>
</g>
<g>
	<path class="coa2" d="M1391.4,440.2h-128.2V308.1c0-14.4,2.7-27.1,8.2-38.2c5.4-11.1,13.1-19.7,22.8-25.9c9.8-6.2,20.9-9.3,33.3-9.3
		c20,0,35.7,6.7,47,20.1c11.3,13.4,17,31.2,17,53.3v132.1H1391.4z"/>
</g>
<line class="coa3" x1="197.9" y1="404.5" x2="197.9" y2="705.8"/>
<line class="coa3" x1="311.3" y1="279.1" x2="311.3" y2="706.1"/>
<line class="coa3" x1="424.7" y1="240.7" x2="424.7" y2="705.8"/>
<line class="coa3" x1="538" y1="292.4" x2="538" y2="706.1"/>
<line class="coa3" x1="651.4" y1="399.6" x2="651.4" y2="705.8"/>
<line class="coa3" x1="764.7" y1="398" x2="764.7" y2="706.1"/>
<line class="coa3" x1="878.1" y1="196.9" x2="878.1" y2="705.8"/>
<line class="coa3" x1="991.4" y1="169.5" x2="991.4" y2="706.1"/>
<line class="coa3" x1="1218.2" y1="410.2" x2="1218.2" y2="705.8"/>
<line class="coa3" x1="1104.8" y1="340.3" x2="1104.8" y2="705.8"/>
<path class="coa4" d="M24.8,415.1c0,0,90.8,0,133.3,0c109.7,0,96.1-174,255.3-174c69,0,117.4,38.2,161.6,87
	c28.7,31.7,61.8,69.3,105,82.3c54.4,16.5,94-14.9,116.9-62.3c25.8-53.4,38.9-120.5,87.6-159.2c78.7-62.6,169.1-8,198.5,76.3
	c22.1,63.3,36.5,149.7,120.8,149.7l187.8,0.3"/>
<rect x="151" y="485.4" class="coa5" width="94.7" height="145.7"/>
<rect x="263" y="432.8" class="coa5" width="94.7" height="145.7"/>
<rect x="377.5" y="390.2" class="coa5" width="94.7" height="145.7"/>
<rect x="489.8" y="413.2" class="coa5" width="94.7" height="145.7"/>
<rect x="603.8" y="461.7" class="coa5" width="94.7" height="145.7"/>
<rect x="717.9" y="473.5" class="coa5" width="94.7" height="145.7"/>
<rect x="829.9" y="413" class="coa5" width="94.7" height="145.7"/>
<rect x="943.5" y="390.5" class="coa5" width="94.7" height="145.7"/>
<rect x="1056.7" y="447.3" class="coa5" width="94.7" height="145.7"/>
<rect x="1171" y="480.8" class="coa5" width="94.7" height="145.7"/>
      
      <text class="coastercars car1">4</text>
      <text class="coastercars car2">o</text>
      <text class="coastercars car3">i</text>
      <text class="coastercars car4">H</text>
      <text class="coastercars car5">p</text>
      <text class="coastercars car6">b</text>
      <text class="coastercars car7">r</text>
      
      <text text-anchor="middle" x="198" y="606" class="battitle">W</text>
      <text text-anchor="middle" x="311" y="555" class="battitle">H</text>
      <text text-anchor="middle" x="423" y="510" class="battitle">I</text>
      <text text-anchor="middle" x="536" y="533" class="battitle">R</text>
      <text text-anchor="middle" x="653" y="583" class="battitle">L</text>
      <text text-anchor="middle" x="766" y="598" class="battitle">Y</text>
      <text text-anchor="middle" x="877" y="533" class="battitle">B</text>
      <text text-anchor="middle" x="992" y="511" class="battitle">A</text>
      <text text-anchor="middle" x="1104" y="570" class="battitle">T</text>
      <text text-anchor="middle" x="1220" y="601" class="battitle">S</text>
      
      <text text-anchor="middle" x="570" y="101" class="cloud">õ</text>
      <text text-anchor="middle" x="250" y="191" class="cloud">õ</text>
      <text text-anchor="middle" x="1211" y="151" class="cloud" style="fill:var(--sun)">*</text>
</svg>
 {:else} 
  
  <svg version="1.1" id="mobilecoaster" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
 viewbox="0 -100 1415.4 900" style="enable-background:new 0 0 1415.4 768.4;" xml:space="preserve">
<style type="text/css">
.mc0{fill:none;}
.mc1{fill:var(--white);}
.mc2{fill:#010101;}
.mc3{fill:none;stroke:var(--white);stroke-width:5;stroke-miterlimit:10;}

  .mobilecoastercars {
font-size: 100px;
offset-path: path('M25.3,388.4c0,0,90.8,0,133.3,0c109.7,0,96.1-174,255.3-174c69,0,117.4,38.2,161.6,87 c28.7,31.7,61.8,69.3,105,82.3c54.4,16.5,94-14.9,116.9-62.3c25.8-53.4,38.9-120.5,87.6-159.2c78.7-62.6,169.1-8,198.5,76.3 c22.1,63.3,36.5,149.7,120.8,149.7l187.8,0.3');   
offset-distance: 10%;
font-family: "Whirlybats";
animation: rollercoaster 20s cubic-bezier(.31,.19,.78,.67) infinite;
fill: var(--white);
opacity: 0;
transform: translateY(-20px);
}

  .mcar2 {
animation-delay: .25s;
  fill: var(--sun);
}
  .mcar3 {
animation-delay: .5s;
}

  .mcar4 {
animation-delay: .75s;
    fill: var(--sun);
}

  .mcar5 {
animation-delay: 1s;
}

    .mcar6 {
animation-delay: 1.25s;
      fill: var(--sun);
}

    .mcar7 {
animation-delay: 1.5s;
}

  .mbattitle {
font-family: "Whirly Birdie";
  position: absolute;
  font-size: 180px;
  font-variation-settings: 'wght' 80, 'wdth' 50, 'ital' 0;
  fill: var(--navy);
}
  



</style>
<g>
<g>
  <g>
    <g>
      <path class="mc0" d="M1239,390.2l-26.5,1.1l-9.9-2.9c-2.7,0.5-5.4,0.8-8.1,0.8c-12,0-22.7-4.9-31.6-12.6l-12.8-3.8l-24.4-30.7
        c-1.2-0.9-2.3-1.9-3.4-2.9c-8.6-7.9-12.5-19.4-13.4-30.8l-37.5-99.6c-1-0.8-1.9-1.6-2.8-2.4c-5-4.6-8.4-10.3-10.5-16.6
        l-10.7-12.4c-1.4-1.1-2.8-2.2-4.1-3.5c-3.3-3.1-6-6.7-8-10.6l-0.7-0.8c-3.7-1.3-7.2-3.1-10.5-5.3c-9.2-1.7-17.4-6.3-24.4-12.7
        c-0.8-0.7-1.5-1.4-2.1-2.2c-2,0.3-3.9,0.4-5.9,0.4c-8.3,0-15.9-2.3-22.8-6.3l-27.8-2.5l-7.6,2.7c-8.2,7-19.3,11.1-30,11.1
        c-0.4,0-0.7,0-1.1,0l-8.5,3l-33.1,36.5l-31,50l-6.2,19.1c-0.4,7-3,14.3-6.7,20.6l-6.1,18.7l-26.9,51.2l-2.6,2.5
        c-1.9,3.1-4.1,6-6.5,8.4c-3.1,3.1-6.7,5.7-10.7,7.8l-20.7,19.5l-7.3-0.2c-6.2,3-13.2,4.6-19.9,4.6c-4.7,0-9.2-0.8-13.4-2.1
        c-3.8,1-7.6,1.5-11.4,1.5c-12.5,0-23.5-5.2-32.5-13.5c-0.8-0.7-1.5-1.5-2.3-2.3c-7.7-2.1-14.7-6.3-20.8-11.9
        c-3.7-3.4-6.5-7.4-8.6-11.8l-35.6-28.9l-45.9-50.4c-6.4-2.3-12.3-6.1-17.4-10.8c-3.4-3.1-6.1-6.9-8.1-10.9l-5.1-3.2
        c-8.6-1.9-16.3-6.3-22.9-12.4c-1.6-1.5-3.1-3.1-4.4-4.8l-0.2-0.1c-1.7,0.2-3.4,0.3-5.1,0.3c-10.2,0-19.4-3.5-27.4-9.2l-28.8-5
        c-3,0.6-6,1-9,1c-2.4,0-4.7-0.2-7-0.6l-22.7,1l-36,7.9l-25.1,15.6c-2.3,2-4.9,3.7-7.7,5.2l-34.6,33.1l-42.7,60.1l-10.9,10.1
        c-2.4,6.8-6.4,13.1-11,17.7c-5.7,5.7-13.3,9.9-21.2,12l-0.5,0.4L173.6,707l1091.3,14.8L1239,390.2z"/>
    </g>
    <g>
      <g>
        
          <rect x="254.1" y="540.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -364.5303 361.8685)" class="mc1" width="1" height="161.1"/>
      </g>
      <g>
        
          <rect x="174" y="620.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -364.5309 361.8698)" class="mc1" width="161.1" height="1"/>
      </g>
      <g>
        
          <rect x="368.3" y="540.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -331.0529 442.6905)" class="mc1" width="1" height="161.1"/>
      </g>
      <g>
        
          <rect x="288.3" y="620.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -331.0533 442.692)" class="mc1" width="161.1" height="1"/>
      </g>
      <g>
        
          <rect x="480.6" y="540.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -298.1903 522.0278)" class="mc1" width="1" height="161.1"/>
      </g>
      <g>
        
          <rect x="400.5" y="620.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -298.1906 522.0295)" class="mc1" width="161.1" height="1"/>
      </g>
      <g>
        
          <rect x="594.1" y="540.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -264.9471 602.2842)" class="mc1" width="1" height="161.1"/>
      </g>
      <g>
        
          <rect x="514" y="620.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -264.9472 602.2861)" class="mc1" width="161.1" height="1"/>
      </g>
      <g>
        
          <rect x="707.1" y="540.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -231.8213 682.2557)" class="mc1" width="1" height="161.1"/>
      </g>
      <g>
        
          <rect x="627.1" y="620.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -231.821 682.2598)" class="mc1" width="161.1" height="1"/>
      </g>
      <g>
        
          <rect x="821.4" y="540.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -198.3732 763.0071)" class="mc1" width="1" height="161.1"/>
      </g>
      <g>
        
          <rect x="741.3" y="620.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -198.3725 763.0115)" class="mc1" width="161.1" height="1"/>
      </g>
      <g>
        
          <rect x="933.5" y="540.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -165.51 842.3487)" class="mc1" width="1" height="161.1"/>
      </g>
      <g>
        
          <rect x="853.5" y="620.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -165.51 842.3487)" class="mc1" width="161.1" height="1"/>
      </g>
      <g>
        
          <rect x="1047.9" y="540.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -132.0335 923.1661)" class="mc1" width="1" height="161.1"/>
      </g>
      <g>
        
          <rect x="967.8" y="620.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -132.0322 923.1712)" class="mc1" width="161.1" height="1"/>
      </g>
      <g>
        
          <rect x="1161" y="540.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -98.906 1003.145)" class="mc1" width="1" height="161.1"/>
      </g>
      <g>
        
          <rect x="1080.9" y="620.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -98.906 1003.145)" class="mc1" width="161.1" height="1"/>
      </g>
      <g>
        
          <rect x="254.1" y="426.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -283.7087 328.3932)" class="mc1" width="1" height="161.1"/>
      </g>
      <g>
        
          <rect x="174" y="506.2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -283.7084 328.392)" class="mc1" width="161.1" height="1"/>
      </g>
      <g>
        
          <rect x="368.3" y="426.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -250.2309 409.2155)" class="mc1" width="1" height="161.1"/>
      </g>
      <g>
        
          <rect x="288.3" y="506.2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -250.2307 409.2142)" class="mc1" width="161.1" height="1"/>
      </g>
      <g>
        
          <rect x="480.6" y="426.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -217.3681 488.5532)" class="mc1" width="1" height="161.1"/>
      </g>
      <g>
        
          <rect x="400.5" y="506.2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -217.3681 488.5517)" class="mc1" width="161.1" height="1"/>
      </g>
      <g>
        
          <rect x="594.1" y="426.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -184.1245 568.81)" class="mc1" width="1" height="161.1"/>
      </g>
      <g>
        
          <rect x="514" y="506.2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -184.1247 568.8083)" class="mc1" width="161.1" height="1"/>
      </g>
      <g>
        
          <rect x="707.1" y="426.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -150.9985 648.782)" class="mc1" width="1" height="161.1"/>
      </g>
      <g>
        
          <rect x="627.1" y="506.2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -150.9985 648.782)" class="mc1" width="161.1" height="1"/>
      </g>
      <g>
        
          <rect x="821.4" y="426.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -117.55 729.5338)" class="mc1" width="1" height="161.1"/>
      </g>
      <g>
        
          <rect x="741.3" y="506.2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -117.55 729.5338)" class="mc1" width="161.1" height="1"/>
      </g>
      <g>
        
          <rect x="933.5" y="426.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -84.6862 808.8752)" class="mc1" width="1" height="161.1"/>
      </g>
      <g>
        
          <rect x="853.5" y="506.2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -84.6875 808.8709)" class="mc1" width="161.1" height="1"/>
      </g>
      <g>
        
          <rect x="1047.9" y="426.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -51.2097 889.6934)" class="mc1" width="1" height="161.1"/>
      </g>
      <g>
        
          <rect x="967.8" y="506.2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -51.2097 889.6934)" class="mc1" width="161.1" height="1"/>
      </g>
      <g>
        
          <rect x="1161" y="426.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -18.0815 969.6723)" class="mc1" width="1" height="161.1"/>
      </g>
      <g>
        
          <rect x="1080.9" y="506.2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -18.0835 969.6672)" class="mc1" width="161.1" height="1"/>
      </g>
      <g>
        <path class="mc1" d="M223.5,360.6c-0.2,0.3-0.4,0.5-0.6,0.8l88.3,88.3l0.7-0.7L223.5,360.6z"/>
      </g>
      <g>
        
          <rect x="174" y="391.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -202.886 294.9143)" class="mc1" width="161.1" height="1"/>
      </g>
      <g>
        
          <rect x="368.3" y="311.8" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -169.4084 375.7365)" class="mc1" width="1" height="161.1"/>
      </g>
      <g>
        
          <rect x="288.3" y="391.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -169.4084 375.7365)" class="mc1" width="161.1" height="1"/>
      </g>
      <g>
        
          <rect x="480.6" y="311.8" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -136.5457 455.074)" class="mc1" width="1" height="161.1"/>
      </g>
      <g>
        
          <rect x="400.5" y="391.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -136.5457 455.074)" class="mc1" width="161.1" height="1"/>
      </g>
      <g>
        
          <rect x="594.1" y="311.8" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -103.3023 535.3306)" class="mc1" width="1" height="161.1"/>
      </g>
      <g>
        <path class="mc1" d="M630.7,355.5L537.2,449l0.7,0.7l93.3-93.3C631.1,356.1,630.9,355.8,630.7,355.5z"/>
      </g>
      <g>
        <path class="mc1" d="M703.8,387.8c-0.4-0.1-0.7-0.2-1.1-0.3c-0.2,0-0.4,0.1-0.6,0.1l62.1,62.1l0.7-0.7L703.8,387.8z"/>
      </g>
      <g>
        <path class="mc1" d="M710.2,389.1L650.3,449l0.7,0.7l60.4-60.4C711,389.3,710.6,389.2,710.2,389.1z"/>
      </g>
      <g>
        <path class="mc1" d="M780.6,350.4c-0.2,0.3-0.4,0.6-0.6,0.9l98.4,98.4l0.7-0.7L780.6,350.4z"/>
      </g>
      <g>
        
          <rect x="741.3" y="391.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -36.7277 696.056)" class="mc1" width="161.1" height="1"/>
      </g>
      <g>
        
          <rect x="933.5" y="311.8" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -3.8643 775.3952)" class="mc1" width="1" height="161.1"/>
      </g>
      <g>
        
          <rect x="853.5" y="391.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -3.8652 775.3932)" class="mc1" width="161.1" height="1"/>
      </g>
      <g>
        
          <rect x="1047.9" y="311.8" transform="matrix(0.7071 -0.7071 0.7071 0.7071 29.6116 856.2135)" class="mc1" width="1" height="161.1"/>
      </g>
      <g>
        
          <rect x="967.8" y="391.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 29.6126 856.2157)" class="mc1" width="161.1" height="1"/>
      </g>
      <g>
        
          <rect x="1161" y="311.8" transform="matrix(0.7071 -0.7071 0.7071 0.7071 62.74 936.1919)" class="mc1" width="1" height="161.1"/>
      </g>
      <g>
        <path class="mc1" d="M1170.8,382.3l-66.6,66.6l0.7,0.7l66.8-66.8C1171.4,382.7,1171.1,382.5,1170.8,382.3z"/>
      </g>
      <g>
        <path class="mc1" d="M267.3,291.5l43.8,43.8l0.7-0.7l-44-44C267.7,291,267.5,291.3,267.3,291.5z"/>
      </g>
      <g>
        <path class="mc1" d="M328.6,237.1c-0.2,0.2-0.5,0.5-0.7,0.7l97.6,97.6l0.7-0.7L328.6,237.1z"/>
      </g>
      <g>
        
          <rect x="288.3" y="277.6" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -88.5862 342.2589)" class="mc1" width="161.1" height="1"/>
      </g>
      <g>
        
          <rect x="480.6" y="197.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -55.7235 421.5963)" class="mc1" width="1" height="161.1"/>
      </g>
      <g>
        <path class="mc1" d="M513.5,244.9l-89.8,89.8l0.7,0.7l90.2-90.2C514.3,245,513.9,245,513.5,244.9z"/>
      </g>
      <g>
        <path class="mc1" d="M574.1,297.8l-36.9,36.9l0.7,0.7l36.8-36.8C574.6,298.3,574.4,298,574.1,297.8z"/>
      </g>
      <g>
        <path class="mc1" d="M818.5,274c-0.2,0.3-0.3,0.6-0.5,0.9l60.4,60.4l0.7-0.7L818.5,274z"/>
      </g>
      <g>
        <path class="mc1" d="M812.2,288.4l66.9-66.9l-0.7-0.7l-65.9,65.9C812.4,287.3,812.3,287.8,812.2,288.4z"/>
      </g>
      <g>
        
          <rect x="933.5" y="197.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 76.958 741.9174)" class="mc1" width="1" height="161.1"/>
      </g>
      <g>
        
          <rect x="853.5" y="277.6" transform="matrix(0.7071 -0.7071 0.7071 0.7071 76.957 741.9155)" class="mc1" width="161.1" height="1"/>
      </g>
      <g>
        
          <rect x="1047.9" y="197.5" transform="matrix(0.7071 -0.7071 0.7071 0.7071 110.4336 822.7361)" class="mc1" width="1" height="161.1"/>
      </g>
      <g>
        <path class="mc1" d="M1084.2,241.5L991,334.7l0.7,0.7l92.9-92.9C1084.5,242.2,1084.3,241.9,1084.2,241.5z"/>
      </g>
      <g>
        <path class="mc1" d="M1113.1,325.7l-9,9l0.7,0.7l8.7-8.7C1113.4,326.3,1113.3,326,1113.1,325.7z"/>
      </g>
      <g>
        <path class="mc1" d="M419.3,214.9l6.2,6.2l0.7-0.7l-5.6-5.6C420.1,214.8,419.7,214.9,419.3,214.9z"/>
      </g>
      <g>
        <path class="mc1" d="M431.6,212.5l-7.8,7.8l0.7,0.7l9.3-9.3C433,212,432.3,212.3,431.6,212.5z"/>
      </g>
      <g>
        <path class="mc1" d="M851.1,192.3c-0.2,0.3-0.3,0.6-0.5,0.9l27.9,27.9l0.7-0.7L851.1,192.3z"/>
      </g>
      <g>
        <path class="mc1" d="M916.7,145.7c-0.4,0.1-0.7,0.2-1.1,0.3l75,75l0.7-0.7L916.7,145.7z"/>
      </g>
      <g>
        <path class="mc1" d="M963.9,133.2l-87.2,87.2l0.7,0.7l87.3-87.3C964.5,133.6,964.2,133.4,963.9,133.2z"/>
      </g>
      <g>
        <path class="mc1" d="M1040.5,170.9L991,220.4l0.7,0.7l49.4-49.4C1040.9,171.4,1040.7,171.2,1040.5,170.9z"/>
      </g>
    </g>
  </g>
</g>
</g>
<g>
<path class="mc2" d="M153.1,413.2H24.8V281.1c0-14.4,2.7-27.1,8.2-38.2c5.4-11.1,13.1-19.7,22.8-25.9c9.8-6.2,20.9-9.3,33.3-9.3
  c20,0,35.7,6.7,47,20.1c11.3,13.4,17,31.2,17,53.3V413.2z"/>
</g>
<g>
<path class="mc2" d="M1391.4,413.2h-128.2V281.1c0-14.4,2.7-27.1,8.2-38.2c5.4-11.1,13.1-19.7,22.8-25.9c9.8-6.2,20.9-9.3,33.3-9.3
  c20,0,35.7,6.7,47,20.1c11.3,13.4,17,31.2,17,53.3v132.1H1391.4z"/>
</g>
<line class="mc3" x1="197.9" y1="377.5" x2="197.9" y2="678.8"/>
<line class="mc3" x1="311.3" y1="252.1" x2="311.3" y2="679.1"/>
<line class="mc3" x1="424.7" y1="213.7" x2="424.7" y2="678.8"/>
<line class="mc3" x1="538" y1="265.4" x2="538" y2="679.1"/>
<line class="mc3" x1="651.4" y1="372.6" x2="651.4" y2="678.8"/>
<line class="mc3" x1="764.7" y1="371" x2="764.7" y2="679.1"/>
<line class="mc3" x1="878.1" y1="169.9" x2="878.1" y2="678.8"/>
<line class="mc3" x1="991.4" y1="142.5" x2="991.4" y2="679.1"/>
<line class="mc3" x1="1218.2" y1="383.2" x2="1218.2" y2="678.8"/>
<line class="mc3" x1="1104.8" y1="311.2" x2="1104.8" y2="678.8"/>
<path class="mc1" d="M1391.6,393.7l-187.8-0.3c-34.5,0-61-13.8-81-42.1c-17.1-24.2-26.9-55.2-36.4-85.1c-2.9-9.2-5.7-17.8-8.6-26.2
c-16.4-47.2-52-83.8-92.9-95.6c-33.4-9.7-66.9-2.1-97,21.8c-34,27-50.4,69.2-66.2,110c-6.2,15.9-12.5,32.3-19.8,47.3
c-27.5,56.9-72.5,80.6-123.4,65.2c-43.4-13.1-76.2-49.3-105-81.2l-2.4-2.7c-25.4-28-47.7-47.3-70.2-60.8
c-27.6-16.4-56.1-24.4-87.3-24.4c-84.1,0-117.6,49.1-150,96.7c-27.1,39.8-52.7,77.3-105.3,77.3H24.8v-11h133.3
c46.9,0,69.7-33.6,96.3-72.5c32.4-47.6,69.1-101.5,159-101.5c75.1,0,125.9,44.9,165.7,88.8l2.4,2.7c27.9,30.9,59.6,65.8,100.1,78
c26.6,8.1,76.3,11.1,110.4-59.4c7.1-14.7,13.1-30.2,19.5-46.5c16.4-42.1,33.4-85.7,69.6-114.6c41.7-33.1,81.1-31.2,106.9-23.8
c44.2,12.8,82.6,52.1,100.2,102.6c3,8.5,5.8,17.3,8.7,26.5c18.6,58.7,37.9,119.5,106.9,119.5l187.8,0.3L1391.6,393.7z"/>
<g>
<rect x="24.6" y="467.1" class="mc1" width="126.6" height="194.9"/>
</g>
<g>
<rect x="160.7" y="428.1" class="mc1" width="126.6" height="194.9"/>
</g>
<g>
<rect x="300" y="376.3" class="mc1" width="126.6" height="194.9"/>
</g>
<g>
<rect x="436.4" y="404.2" class="mc1" width="126.6" height="194.9"/>
</g>
<g>
<rect x="575.1" y="438.2" class="mc1" width="126.6" height="194.9"/>
</g>
<g>
<rect x="713.8" y="452.6" class="mc1" width="126.6" height="194.9"/>
</g>
<g>
<rect x="849.9" y="412.3" class="mc1" width="126.6" height="194.9"/>
</g>
<g>
<rect x="988" y="376.7" class="mc1" width="126.6" height="194.9"/>
</g>
<g>
<rect x="1125.6" y="445.7" class="mc1" width="126.6" height="194.9"/>
</g>
<g>
<rect x="1264.6" y="486.5" class="mc1" width="126.6" height="194.9"/>
</g>
    
          <text class="coastercars car1">4</text>
    <text class="coastercars car2">o</text>
    <text class="coastercars car3">i</text>
    <text class="coastercars car4">H</text>
    <text class="coastercars car5">p</text>
    <text class="coastercars car6">b</text>
    <text class="coastercars car7">r</text>
    
     <text text-anchor="middle" x="89" y="634" class="mbattitle">W</text>
    <text text-anchor="middle" x="226" y="595" class="mbattitle">H</text>
    <text text-anchor="middle" x="363" y="540" class="mbattitle">I</text>
    <text text-anchor="middle" x="499" y="570" class="mbattitle">R</text>
    <text text-anchor="middle" x="643" y="603" class="mbattitle">L</text>
    <text text-anchor="middle" x="777" y="619" class="mbattitle">Y</text>
    <text text-anchor="middle" x="916" y="578" class="mbattitle">B</text>
    <text text-anchor="middle" x="1052" y="540" class="mbattitle">A</text>
    <text text-anchor="middle" x="1192" y="608" class="mbattitle">T</text>
    <text text-anchor="middle" x="1330" y="650" class="mbattitle">S</text>
    
          <text text-anchor="middle" x="570" y="101" class="cloud">õ</text>
      <text text-anchor="middle" x="250" y="191" class="cloud">õ</text>
      <text text-anchor="middle" x="1211" y="151" class="cloud" style="fill:var(--sun)">*</text>
    
</svg>
{/if}

<div class="infobox">
  <p><span class="dropillo">O</span> <span style="text-transform: uppercase; letter-spacing: 2px;">Whirlybats</span> is a dingbat font with a twist. Instead of using variable font technology to squish and squash type, Whirlybats uses it to animate its 100+ glyphs. Try it below! ↓</p>
</div>
