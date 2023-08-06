<script lang="ts">
	import { fly } from "svelte/transition";
	import NavMenu from "./utils/NavMenu.svelte";
	import NavButton from "./utils/NavButton.svelte";
	import { page } from "$app/stores";

</script>
<style lang="scss">
    nav {
        //border: solid 1px red;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 6dvh;
        font-size: larger;
        div {
            display: flex;

            a {
                text-decoration: none;
                color: black;
                font-weight: 1000;
                transition: 0.3s;
                width: 6em;
            }
            text-align: center;

            &:first-of-type {
                text-align: left;
            }

            &:last-of-type {
                text-align: right;
            }
        }
    }
    .active {
        color: var(--accent);
    }
</style>

<nav>
    <div>
        <a href="/" in:fly={{ x: -50, duration: 300, delay: 550 }} out:fly={{ x: -50, duration: 300, delay: 100 }}>a2z</a>
    </div>
    <div>
        <a href="/" in:fly={{ y: -50, duration: 300, delay: 550 }} out:fly={{ y: -50, duration: 300, delay: 100 }} class:active={$page.url.pathname==='/services'}>Services</a><a href="/" in:fly={{ y: -50, duration: 300, delay: 550 }} out:fly={{ y: -50, duration: 300, delay: 100 }} class:active={$page.url.pathname==='/products'}>Products</a>
    </div>
    <div>
        {#if $page.data.session}
            <a id="first" href="/dashboard" class:active={$page.url.pathname==='/dashboard'} in:fly|global={{ x: 50, duration: 300, delay: 650 }} out:fly|global={{ x: 50, duration: 300, delay: 50 }}>Dashboard</a>
        {:else}
            <a id="second" href="/login" class:active={$page.url.pathname==='/login' || $page.url.pathname==='/register'} in:fly|global={{ x: 50, duration: 300, delay: 650 }} out:fly|global={{ x: 50, duration: 300, delay: 50 }}>Login</a>
        {/if}
    </div>
</nav>