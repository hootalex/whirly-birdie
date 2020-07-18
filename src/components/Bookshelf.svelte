<!-- see demo at http://wbook2.glitch.me/-->

<style>

.section {
margin: auto;
    max-width: 850px;
    background-color: transparent;
    color: black;
    box-sizing: border-box;
    border-bottom: 10px solid var(--wood);
    display: flex;
    align-items: flex-end;
}

.section h2 {
margin: 0;
font-variation-settings: "wght" 70, "wdth" 120, "ital" 0;
margin-bottom: 50px;
font-size: 15px;
}

.shelf {
-webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  width: 80%;
    height: 380px;
    display: flex;
    align-items: flex-end;
    cursor: pointer;
}

.radio {
font-family: "Whirlybats";
    font-size: 250px;
    line-height: 0.85;
    color: var(--blue);
}

.bookline {
letter-spacing: -3px;
    position: absolute;
    top: 0;
    font-variation-settings: "wght" 50, "wdth" 150, "ital" 0;
    text-shadow: 0px 5px 0px;

}

.book {
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-right: 2px;
  margin-bottom: 2px;
  text-align: center;
  overflow: hidden;
  position: relative;
  padding-top: 35px;
  box-sizing: border-box;
  transition: .2s;
  transition-property: transform;
  color: var(--white);
}

.book:hover {
transform: rotate(-2deg)
}

.book:active {
transform: translateY(10px);

}

.hide {
  opacity: 0;
  transform: translateY(-30px);
}

.rotatedbook {
  transform: rotate(-7deg);
  margin-left: 18px;
  margin-bottom: 4px;
}

.whirlybatbook {
font-family: "Whirlybats";
    font-size: 30px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: absolute;
    bottom: 20px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: currentColor;
}

.booktitle {
  font-family: "Whirly Birdie";
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-variation-settings: "wght" 50, "wdth" 60.06, "ital" 0;
  font-size: 40px;
}

.smalltitle {
    font-size: 25px!important;
    font-variation-settings: "wght" 55, "wdth" 50, "ital" 0;
    writing-mode: horizontal-tb;
    margin-left: 0;
    margin-top: -5px;
}

  .plant {
display: none; 
}

@media screen and (max-width: 600px) {
  .radio {
display: none; 
}
  
  .plant {
    display: block;
font-family: "Whirlybats";
    font-size: 40vw;
    line-height: 0.85;
    color: var(--green);
}
  
  
  .shelf {
height: 250px;
    width: 100%;
}
  
  .smalltitle {
    font-size: 14px!important;
}
}
</style>

    
<div class="section">
   <div class="shelf">
    </div>
  <div class="radio">
    Z
  </div>
    <div class="plant">
    p
  </div>
 </div>
<br>


    <script>
    //https://stackoverflow.com/a/11944765
  //using this to get random items form arrays that don't repeat
  
  Array.prototype.randomDiffElement = function(last) {
    if (this.length == 0) {
      return;
    } else if (this.length == 1) {
      return this[0];
    } else {
      var num = 0;
      do {
        num = Math.floor(Math.random() * this.length);
      } while (this[num] == last);
      return this[num];
    }
  };

function randomrange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
</script>
    
    <script>
        var bookcolors = [
    "var(--red)",
    "var(--blue)", "var(--blue)",
    "var(--sun)",
    "var(--forest)",
    "var(--green)",
     "var(--navy)"
  ];

  var lightcolors = [
    "var(--sun)",
    "var(--white)",
    "var(--lightgreen)"
  ];

 var darkcolors = [
    "var(--black)",
    "var(--red)",
    "var(--blue)",
    "var(--green)",
    "var(--wood)"
  ];

  var smallwords1 = [
  "The",
  "Of",
  "On",
  "Deep",
  "To",
  "Onward",
  "Exact",
  "Haunted",
  "Brave",
  "Small",
  "Quick",
  "True",
  "Dream",
  "London",
  "New York",
  "Paris",
  "Morning",
  "New",
  "Busy",
  "My",
  "Atomic",
  "Swirl",
  "On the",
  "Tour of",
  "Visiting",
  "Visit",
  "Tech",
  "Liminal",
  "Old",
  "Port",
  "Lovely",
  "Fantastic",
  "No",
  "Midnight",
  "Early",
  "Silver",
  "Cute",
  "Perfect",
  "Grumpy",
  "Rainy",
  "Cosmic",
  "Hudson",
  "Dear",
  "Super",
  "Hot",
  "","","",""
];

var smallwords2 = [
  "Space",
  "Lakes",
  "Thought",
  "Blue",
  "Cube",
  "Cats",
  "Bugs",
  "Lights",
  "Walks",
  "Stars",
  "Lines",
  "Parks",
  "Night",
  "Cave",
  "Glow",
  "Ocean",
  "Moon",
  "Life",
  "Violet",
  "Wing",
  "Eyes",
  "Airway",
  "Door",
  "Dove",
  "Bat",
  "Type",
  "Cup",
  "Art",
  "Place",
  "Why?",
  "Where",
  "Fog",
  "Highway",
  "Sea",
  "Pearl",
  "Letter",
  "Trail",
  "Gift",
  "Whale",
  "Metro",
  "Maps",
  "Moth",
  "Fire",
  "Fortune",
  "Cruise",
  "Cold",
  "Ship",
  "Hall",
  "Rome",
  "Array",
  "Angel",
  "Train",
  "Camera",
  "Bike",
  "Scooter",
  "Portal",
  "Swirl",
  "Cloud",
  "Bliss",
  "Berlin",
  "Parade",
  "Piano",
  "Window",
  "River",
  "Houses",
  "Hill",
  "Ticket",
  "Dot",
  "Chime",
  "Glass",
  "Attic",
  "Ostrich",
  "Joust",
  "Wish",
  "Zinc",
  "Wave",
  "Sounds",
  "Mix",
  "Sun",
  "Fox",
  "Awe",
  "Emu",
  "Hop",
  "Key",
  "Owl"
];

</script>
    <script>
      
  var sheight = document.getElementsByClassName("shelf")[0].offsetHeight;
  var swidth = document.getElementsByClassName("shelf")[0].offsetWidth;
  var booknum = 9;
  var bwidth = swidth / booknum;
  var fontmin = 22
  var fontmax = 30

//this is basically a media query to change the number of books on mobile
  
  function myFunction(x) {
  
   if (x.matches) { // If media query matches
      booknum = 6
      bwidth = swidth / booknum
      fontmin = 15
      fontmax = 15
  }
  
}
  
//call the media query 
var x = window.matchMedia("(max-width: 700px)")
myFunction(x) 
x.addListener(myFunction) 
  
  

  function randombooks() {
    
    //clear the shelf
    document.getElementsByClassName("shelf")[0].innerHTML = ""

    var i = 0;

    for (i = 0; i < booknum; i++) {
      //using the array prototype from before
      var randombookcolor = bookcolors.randomDiffElement(randombookcolor);

      //random number within range
      var randomheight =
        Math.floor(Math.random() * (sheight - (sheight - 50) + 1)) +
        (sheight - 50);

      var randomwidth =
        Math.floor(Math.random() * (bwidth - (bwidth - 20) + 1)) +
        (bwidth - 20);

      //book title mashup
      var randomword1 = smallwords1.randomDiffElement(smallwords1);
      var randomword2 = smallwords2.randomDiffElement(smallwords2);

      document.getElementsByClassName("shelf")[0].insertAdjacentHTML(
        'beforeend',
        "<div class='book' style='width:" +
          randomwidth +
          "px; height:" +
          randomheight +
          "px; background-color:" +
          randombookcolor +
          "'>" +
          "<div class='booktitle'>" +
          randomword1 +
          " " +
          randomword2 +
          "</div></div>"
      );
    }

    
    var book = document.getElementsByClassName('booktitle');
for (var i = 0; i < book.length; i++) {
  
      var randomsize = randomrange(fontmin, fontmax);
      var randomwidth = randomrange(50, 70);
    
  console.log(book[i].innerText.length)
  
  
  book[i].style.fontSize = randomsize + "px"
  book[i].style.color = "var(--white)"

  
   if (book[i].innerText.length > 13) {
       // book[i].style.color = 'purple';
       book[i].style.fontVariationSettings = "'wght' 80, 'wdth' 50, 'ital' 0";
      }

    
       if (book[i].innerText.length == 12) {
       // book[i].style.color = 'pink';
       book[i].style.fontVariationSettings = "'wght' 70, 'wdth' 50, 'ital' 0";
      }
  
         if (book[i].innerText.length == 11) {
       // book[i].style.color = 'pink';
       book[i].style.fontVariationSettings = "'wght' 80, 'wdth' 90, 'ital' 10";
      }
  
           if (book[i].innerText.length == 10) {
       // book[i].style.color = 'pink';
       book[i].style.fontVariationSettings = "'wght' 80, 'wdth' 50, 'ital' 0";
      }
  
             if (book[i].innerText.length == 9) {
       // book[i].style.color = 'pink';
       book[i].style.fontVariationSettings = "'wght' 90, 'wdth' 120, 'ital' 0";
      }
  
               if (book[i].innerText.length == 8) {
       // book[i].style.color = 'pink';
       book[i].style.fontVariationSettings = "'wght' 100, 'wdth' 130, 'ital' 0";
      }
  
                 if (book[i].innerText.length == 7) {
       // book[i].style.color = 'pink';
       book[i].style.fontVariationSettings = "'wght' 80, 'wdth' 100, 'ital' 0";
      }
  
                   if (book[i].innerText.length == 6) {
       // book[i].style.color = 'pink';
       book[i].style.fontVariationSettings = "'wght' 100, 'wdth' 100, 'ital' 0";
      }
  
                     if (book[i].innerText.length == 5) {
       // book[i].style.color = 'pink';
       book[i].style.fontVariationSettings = "'wght' 60, 'wdth' 120, 'ital' 0";
      }

                       if (book[i].innerText.length == 4) {
book[i].classList.add("smalltitle")
      }
  
        if (book[i].innerText.length < 9) {
        book[i]
          .parentElement
          .insertAdjacentHTML(
          "beforeend",
            "<div style='" +
              "' class='whirlybatbook'></div>"
          );
      }
  
          if (book[i].innerText.length < 7) {
        book[i]
          .parentElement
          .insertAdjacentHTML(
          "beforeend",
"<div style='" +
              "' class='bookline'>" +
              "_________" +
              "</div>"
          );
      }


}
    
    
    //looking at the lengths of book titles, and changing the font based on that

document.querySelectorAll(".book:last-child")[0].classList.add("rotatedbook")
    
  }

  randombooks();

//the wave effect I'm not sure how to recreate in plain javascript

//   $(".shelf").click(function() {
//     randombooks();


//     //hide books when they are created
//     $(".book").addClass("hide");

//     //delay removing hide for the wave effect
//     $(".book").each(function(i) {
//       var row = $(this);
//       setTimeout(function() {
//         row.removeClass("hide");
//       }, 70 * i);
//     });
//   });

document.querySelector(".shelf").addEventListener("click", (e) => { 
randombooks()
});
  

</script>
