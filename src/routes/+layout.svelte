<script lang="ts">
    import Navigation from "$lib/layout/Navigation.svelte";
    import Footer from "$lib/layout/Footer.svelte";
    import "$lib/scss/global.scss"
</script>

<Navigation></Navigation>
<main>
    <slot />
</main>
<Footer></Footer>