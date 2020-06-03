<script>
import Title from './Title.svelte'
import City from './City.svelte'
import Street from './Street.svelte'
</script>

<section class="hero">
    <Title/>
    <City/>
    <Street/>
</section>

<style>
    section{
        margin: 0 -40px 0 -40px;
        grid-column:1 / 13;
        display:block;
        overflow:hidden;
    }
</style>