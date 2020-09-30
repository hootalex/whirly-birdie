<script>
  import Title from "./Title.svelte";
  import City from "./City.svelte";
  import Street from "./Street.svelte";
</script>

<section class="hero">
  <Title />
  <City />
  <Street />
</section>

<style>
  section {
    margin: 0 calc(-1 * var(--margin)) 0 calc(-1 * var(--margin));
    grid-column: 1 / 13;
    display: block;
    overflow: hidden;
  }
</style>
