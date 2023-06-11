<script lang="ts">
</script>
<style lang="scss">
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: clamp(175px, 20vh, 20vh);

        h1 {
            font-size: clamp(16px, 4vw, 36px);
            font-weight: 1000;
        }

        div {
            display: flex;
            width: clamp(125px, 50%, 350px);
            justify-content: space-between;
            a {
                text-decoration: none;
                color: black;
                font-weight: 1000;
                font-size: clamp(12px, 3vw, 24px);
                &:first-of-type {
                    color: #410095;
                }
            }
        }
    }
</style>

<nav>
    <h1>A2Z</h1>
    <div>
        <a href="/">Home</a>
        <a href="/login">Get Started</a>
    </div>
</nav>