<script lang="ts">
    import Input from "$lib/components/Input.svelte";
    import PrimaryCTA from "$lib/components/PrimaryCTA.svelte";
	import { fly } from "svelte/transition";
    
    export let inputProperties = [
        {
            type: "email",
            placeholder: "your-email@example.com"
        },
        {
            type: "password",
            placeholder: "Password"
        }
    ]
</script>

<style lang="scss">
    section {
        form {
            p {
                &:first-of-type {
                    font-size: 2em;
                    font-weight: 1000;
                }
            }
            margin: auto;
            height: clamp(400px, 66vh, 800px);
            width: clamp(250px, 100%, 600px);
            border-radius: 50px;
            opacity: 75%;
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 4dvh;
        }
    }
</style>

<section transition:fly={{ y: 200, duration: 300 }}>
    <form>
        <p>Login</p>
        {#each inputProperties as properties}
            <Input {properties}></Input>
        {/each}
        <PrimaryCTA>Login</PrimaryCTA>
        <p>First time? <a href="/register"><i>Register</i></a></p>
    </form>
</section>