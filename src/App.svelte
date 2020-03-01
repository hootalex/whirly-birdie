<script>
	export let name="alex";
  import Nav from './Navigation.svelte'
</script>


<main>
  <Nav/>
	<h1>Hello {name}, welcome to Svelte!</h1>
	<p><a href="https://glitch.com/edit/#!/svelte">Remix this on Glitch</a> and visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
  
  <div class="glitchButton" style="position:absolute;top:20px;right:20px;"></div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>