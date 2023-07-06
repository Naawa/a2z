<script lang="ts">
    import AuthProviders from "$lib/components/AuthProviders.svelte";
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
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 3dvh;
        form {
            p {
                &:first-of-type {
                    font-size: 2em;
                    font-weight: 1000;
                }
            }
            width: clamp(250px, 100%, 600px);
            border-radius: 50px;
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 4dvh;
        }
    }
</style>

<section in:fly={{ y: 200, duration: 900 }} out:fly={{ y: 200, duration: 300 }}>
    <form>
        <p>Login</p>
        {#each inputProperties as properties}
            <Input {properties}></Input>
        {/each}
        <PrimaryCTA>Login</PrimaryCTA>
    </form>
    <AuthProviders></AuthProviders>
    <p>First time? <a href="/register"><i>Register</i></a></p>
</section>