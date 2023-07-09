<script lang="ts">
	import AuthProviders from "$lib/components/AuthProviders.svelte";
    import Input from "$lib/components/Input.svelte";
	import { fly } from "svelte/transition";
    import { enhance } from "$app/forms";

    export let form: any;

    let name = form?.name ?? "";
    let email = form?.email ?? "";
    
    let input = [
        {
            type: "name",
            placeholder: "Your Name",
            name: "name",
            value: name
        },
        {
            type: "email",
            placeholder: "your-email@example.com",
            name: "email",
            value: email
        },
        {
            type: "password",
            placeholder: "********",
            name: "password"
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
                width: 100%;
                text-align: center;
            }
        }
    }
</style>

<section>
    <form method="POST" action="/register" use:enhance>
        <p in:fly={{ y: 50, duration: 300, delay: 650 }} out:fly={{ y: 50, duration: 300, delay: 300 }}>Register</p>
        {#if form?.error}
            <p>{form?.error}</p>
        {/if}
        {#each input as properties, i}
            <div in:fly|global={{ y: 50, duration: 300, delay: 650 + (i * 50) }} out:fly|global={{ y: 50, duration: 300, delay: (250) - (i * 50)}}>
                <Input {properties}></Input>
            </div>
        {/each}
        <div in:fly={{ y: 50, duration: 300, delay: 850 }} out:fly={{ y: 50, duration: 300, delay: 100 }}>
            <button>Register</button>
        </div>
    </form>
    <div in:fly={{ y: 50, duration: 300, delay: 900 }} out:fly={{ y: 50, duration: 300, delay: 50 }}>
        <AuthProviders></AuthProviders>
    </div>
    <p in:fly={{ y: 50, duration: 300, delay: 950}} out:fly={{ y: 50, duration: 300, }}>Have an account? <a href="/login"><i>Login</i></a></p>
</section>