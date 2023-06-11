<script lang="ts">
    import { page } from "$app/stores";
</script>
<style lang="scss">
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: clamp(150px, 20dvh, 20dvh);

        h1 {
            font-size: clamp(20px, 4vw, 36px);
            font-weight: 1000;
        }

        div {
            display: flex;
            width: clamp(125px, 55%, 350px);
            justify-content: space-between;
            a {
                text-decoration: none;
                color: black;
                font-weight: 1000;
                font-size: clamp(14px, 3vw, 24px);
            }
        }
    }
    .active {
        color: #410095;
    }
</style>

<nav>
    <h1>A2Z</h1>
    <div>
        <a id="first" href="/" class:active={$page.url.pathname==='/'}>Home</a>
        <a id="second" href="/login" class:active={$page.url.pathname==='/login'}>Get Started</a>
    </div>
</nav>