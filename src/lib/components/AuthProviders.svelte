<script>
	import { page } from "$app/stores";

    async function authWithProvider() {
        const { error } = await $page.data.supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `https://a2z-inky.vercel.app/api/auth/callback`
            }
        })
        if (error) {
            throw error(500, {
                message: "Auth error.",
            })
        }
    }
</script>
<style lang="scss">
    div {
        display: flex;
        align-self: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        gap: 2dvh;
        img {
            position: absolute;
            height: 1em;
            width: 1em;
            translate: -4em;
        }
        button {
            padding: 0.75rem;
            font-weight: 700;
            border-radius: 0.75rem;
            border: solid 0.25em var(--accent);
            background-color: var(--light);
            transition: 0.3s;
            color: var(--accent);
            display: flex;
            justify-content: center;
            align-items: center;
            width: clamp(250px, 60dvw, 300px);
            
            &:hover {
                color: var(--light);
                border: solid 0.25em var(--accent);
                background-color: var(--accent);
            }
        }
    }
</style>
<div>
    <p>Or use your google account, </p>
    <button on:click={authWithProvider}><img alt="Google logo." src="/google.png">Google</button>
</div>