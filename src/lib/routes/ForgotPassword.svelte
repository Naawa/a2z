<script lang="ts">
	import { page } from "$app/stores";
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
                text-align: center;
                width: 100%;
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
	<form method="POST" use:enhance>
		<p in:fly={{ y: 50, duration: 300, delay: 550 }} out:fly={{ y: 50, duration: 300, delay: 200 }}>Reset</p>
		<input in:fly={{ y: 50, duration: 300, delay: 600 }} out:fly={{ y: 50, duration: 300, delay: 150 }} type="email" name="email" bind:value={$form.email} placeholder="your-email@example.com" {...$constraints.email}>
		<button in:fly={{ y: 50, duration: 300, delay: 700 }} out:fly={{ y: 50, duration: 300, delay: 100 }}>Submit</button>
        <p in:fly={{ y: 50, duration: 300, delay: 700 }} out:fly={{ y: 50, duration: 300, delay: 200 }}>Forgot email? Get <a href="/support">support.</a></p>
	</form>
</section>