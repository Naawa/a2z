<script lang="ts">
    import Navigation from "$lib/layout/Navigation.svelte";
    import Footer from "$lib/layout/Footer.svelte";
    import "$lib/scss/global.scss";
    import { fly } from "svelte/transition";
    import { onMount } from 'svelte';

    let mounted = false;

    onMount(() => mounted = true);

    export let data;
</script>
<Navigation></Navigation>
{#if mounted}
    <main>
        {#key data.url}
            <div in:fly={{ y: 200, duration: 300,delay: 300}} out:fly={{ y: 200, duration: 300 }}>
                <slot />
            </div>
        {/key}
    </main>
{/if}
<Footer></Footer>