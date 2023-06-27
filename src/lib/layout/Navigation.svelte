<script lang="ts">
    import { page } from "$app/stores";
</script>
<style lang="scss">
    nav {
        //border: solid 1px red;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 6dvh;
        div {
            display: flex;
            gap: 8vw;
            justify-content: space-between;
            a {
                text-decoration: none;
                color: black;
                font-weight: 1000;
            }
        }
    }
    .active {
        color: #410095;
    }
    #logo {
        font-weight: 1000;
        font-size: larger;
    }
</style>

<nav>
    <div id="logo">A2Z</div>
    <div>
        <a id="first" href="/" class:active={$page.url.pathname==='/'}>Home</a>
        <a id="second" href="/login" class:active={$page.url.pathname==='/login'}>Get Started</a>
    </div>
</nav>