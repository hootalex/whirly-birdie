<script>
  export let message; //Exporting a variable lets it be visible to the parent component//
  //If you set message = "some string" it becomes the default value in case you didn't declare a props//
</script>

<div>
  <p class="message">{message}</p>
  <!-- The prop called "Message" takes the received string and adds additional string elements! -->
  <p class="bird notranslate">!</p>
  <p></p>
</div>

<style>
  p {
    margin: 0;
    padding: 0;
    text-align: center;
  }
  .message {
    /*     animation: bounce .5s ease infinite alternate; */
    font-size: 12px;
/*     margin-left: 20px; */
    margin-bottom: 30px;
  }
  .bird {
    font-family: Whirlybats;
    font-size: calc(3vw + 50px);
    animation: basicAnimationDelayi 3.5s linear infinite;
    line-height: 0.7em;
    margin-top: -15%;
    color: var(--red);
    padding-bottom: 10px;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-4px);
    }
  }
</style>
