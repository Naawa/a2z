<script lang="ts">
</script>
<style lang="scss">
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 20vh;

        h1 {
            font-size: 36px;
            font-weight: 1000;
        }

        div {
            display: flex;
            gap: 6em;

            a {
                text-decoration: none;
                color: black;
                font-weight: 1000;
                font-size: 24px;
                
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