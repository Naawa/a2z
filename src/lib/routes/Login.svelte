<script lang="ts">
    import AuthProviders from "$lib/components/AuthProviders.svelte";
    import Input from "$lib/components/Input.svelte";
	import { fly } from "svelte/transition";
    import { enhance } from "$app/forms";


    export let form;

    let email = form?.email ?? "";
    
    let input = [
        {
            type: "email",
            placeholder: "your-email@example.com",
            value: email
        },
        {
            type: "password",
            placeholder: "********"
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
            div {
                text-align: center;
                width: 100%;
            }
        }
    }
</style>

<section>
    <form method="POST" action="/login" use:enhance>
        <p in:fly={{ y: 50, duration: 300, delay: 550 }} out:fly={{ y: 50, duration: 300, delay: 400 }}>Login</p>
        {#each input as properties, i}
            <div in:fly|global={{ y: 50, duration: 300, delay: 600 + (i * 50) }} out:fly|global={{ y: 50, duration: 300, delay: (300) - (i * 50) }} >
                <Input {properties}></Input>
            </div>
        {/each}
        <div in:fly={{ y: 50, duration: 300, delay: 700 }} out:fly={{ y: 50, duration: 300, delay: 200 }}>
            <button>Login</button>
        </div>
        <p in:fly={{ y: 50, duration: 300, delay: 700 }} out:fly={{ y: 50, duration: 300, delay: 200 }}>Forgot your password? <a href="/reset">Reset</a></p>
    </form>
    <div in:fly={{ y: 50, duration: 300, delay: 750}} out:fly={{ y: 50, duration: 300, delay: 150}}>
        <AuthProviders></AuthProviders>
    </div>
    <p in:fly={{ y: 50, duration: 300, delay: 800 }} out:fly={{ y: 50, duration: 300, delay: 100 }}>First time? <a href="/register">Register</a></p>
</section>