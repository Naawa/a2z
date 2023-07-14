<script lang="ts">
	import { page } from "$app/stores";
	import AuthProviders from "$lib/components/AuthProviders.svelte";
	import { fly } from "svelte/transition";
	import { superForm } from "sveltekit-superforms/client";

    export let data;

    const { form, constraints, message, enhance} = superForm(data.form, {
        applyAction: true,
        invalidateAll: true,
        resetForm: false,
    })
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
    <div class="message">
        {#if $message}
            <div in:fly={{y: -200, duration: 400}} out:fly={{y: -200, duration: 400}} class:success={$page.status == 200} class:error={$page.status >= 400}>
                {$message}
            </div>
        {/if}
    </div>
    <form method="POST" action="/register" use:enhance>
        <p in:fly={{ y: 50, duration: 300, delay: 650 }} out:fly={{ y: 50, duration: 300, delay: 300 }}>Register</p>
        <input in:fly={{ y: 50, duration: 300, delay: 850 }} out:fly={{ y: 50, duration: 300, delay: 200 }} placeholder="your-email@example.com" type="email" name="email" bind:value={$form.email} {...$constraints.email}>
        <input in:fly={{ y: 50, duration: 300, delay: 900 }} out:fly={{ y: 50, duration: 300, delay: 150 }} placeholder="********" type="password" name="password" bind:value={$form.password} {...$constraints.password}>
        <div in:fly={{ y: 50, duration: 300, delay: 850 }} out:fly={{ y: 50, duration: 300, delay: 100 }}>
            <button>Register</button>
        </div>
    </form>
    <div in:fly={{ y: 50, duration: 300, delay: 900 }} out:fly={{ y: 50, duration: 300, delay: 50 }}>
        <AuthProviders></AuthProviders>
    </div>
    <p in:fly={{ y: 50, duration: 300, delay: 950}} out:fly={{ y: 50, duration: 300, }}>Have an account? <a href="/login">Login.</a></p>
</section>