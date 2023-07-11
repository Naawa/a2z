<script lang="ts">
	import { fly } from "svelte/transition";
</script>
<style lang="scss">
    section {
        display: flex;
        align-items: center;
        justify-content: center;

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2em;

            button {
                background-color: var(--danger);
                color: var(--dark);
                border: none;

                &:hover {
                    background-color: lighten($color: #ff0000, $amount: 40%);
                }
            }

            a {
                text-decoration: none;
                background-color: var(--safe);
                padding: 0.75rem;
                padding: 0.75rem;
                width: clamp(200px, 25vw, 400px);
                font-weight: 700;
                border-radius: 0.75rem;
                border: none;
                text-align: center;

                &:hover {
                    background-color: lighten($color: #00ff77, $amount: 42%);
                }
            }
        }
    }
</style>

<section>
    <form method="POST">
        <h1 in:fly={{ y: 50, duration: 200, delay: 600 }} out:fly={{ y: 50, duration: 200, delay: 500 }} >Are you sure you want to log out?</h1>
        <br>
        <button type="submit" in:fly={{ y: 50, duration: 200, delay: 700 }} out:fly={{ y: 50, duration: 200, delay: 400 }} >Yes</button><a href="/dashboard" in:fly={{ y: 50, duration: 200, delay: 800 }} out:fly={{ y: 50, duration: 200, delay: 300 }} >Go Back</a>
    </form>
</section>