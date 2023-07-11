<script lang="ts">
    import { page } from "$app/stores";
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
    <div id="logo">a2z</div>
    <div>
        <a id="first" href="/" class:active={$page.url.pathname==='/'}>Home</a>
        {#if $page.data.supabase.getSession()}
            <a id="first" href="/dashboard" class:active={$page.url.pathname==='/dashboard'}>Dashboard</a>
        {:else}
            <a id="second" href="/login" class:active={$page.url.pathname==='/login' || $page.url.pathname==='/register'}>Get Started</a>
            {/if}
    </div>
</nav>