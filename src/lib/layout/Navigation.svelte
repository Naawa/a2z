<script lang="ts">
    import { page } from "$app/stores";
	import { fly } from "svelte/transition";
</script>
<style lang="scss">
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 6dvh;
        font-size: larger;
        div {
            display: flex;
            gap: 8vw;
            justify-content: space-between;
            a {
                text-decoration: none;
                color: black;
                font-weight: 1000;
                transition: 0.3s;
            }
        }
    }
    .active {
        color: var(--accent);
    }
    #logo {
        font-weight: 1000;
        font-size: larger;
    }
</style>

<nav>
    <div id="logo" in:fly={{ x: -50, duration: 300, delay: 550 }} out:fly={{ x: -50, duration: 300, delay: 150 }}>a2z</div>
    <div>
        <a id="first" href="/" class:active={$page.url.pathname==='/'} in:fly={{ y: -50, duration: 300, delay: 600 }} out:fly={{ y: -50, duration: 300, delay: 100 }}>Home</a>
        {#if $page.data.session}
            <a id="first" href="/dashboard" class:active={$page.url.pathname==='/dashboard'} in:fly|global={{ x: 50, duration: 300, delay: 650 }} out:fly|global={{ x: 50, duration: 300, delay: 50 }}>Dashboard</a>
        {:else}
            <a id="second" href="/login" class:active={$page.url.pathname==='/login' || $page.url.pathname==='/register'} in:fly|global={{ x: 50, duration: 300, delay: 650 }} out:fly|global={{ x: 50, duration: 300, delay: 50 }}>Get Started</a>
        {/if}
    </div>
</nav>