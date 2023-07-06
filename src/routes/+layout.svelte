<script lang="ts">
    import Navigation from "$lib/layout/Navigation.svelte";
    import Footer from "$lib/layout/Footer.svelte";
    import "$lib/scss/global.scss"
    import { page } from "$app/stores";
    import { fly } from "svelte/transition";
	import { onMount } from "svelte";

    export let data;
    let start = false;

    onMount(() => { start = true; });
</script>

{#if start}
<Navigation></Navigation>
<main>
    {#key data.url}
        <div in:fly={{ y: 200, duration: 300,delay: 300}} out:fly={{ y: 200, duration: 300 }}>
            <slot />
        </div>
    {/key}
</main>
<Footer></Footer>
{/if}