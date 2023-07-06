<script lang="ts">
    import Navigation from "$lib/layout/Navigation.svelte";
    import Footer from "$lib/layout/Footer.svelte";
    import "$lib/scss/global.scss";
    import { fly } from "svelte/transition";

    export let data;
</script>

<Navigation></Navigation>
<main>
    {#key data.url}
        <div in:fly={{ y: 200, duration: 300,delay: 300}} out:fly={{ y: 200, duration: 300 }}>
            <slot />
        </div>
    {/key}
</main>
<Footer></Footer>