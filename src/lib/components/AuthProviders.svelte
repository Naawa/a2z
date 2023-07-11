<script>
	import { page } from "$app/stores";

    async function authWithProvider() {
        const { error } = await $page.data.supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `https://a2z-inky.vercel.app/auth/callback`
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
    span {
        display: flex;
        align-self: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        gap: 2dvh;
        img {
            position: absolute;
            height: 25px;
            width: 25px;
            translate: -60px;
        }
        button {
            padding: 0.75rem;
            width: clamp(200px, 25vw, 400px);
            font-weight: 700;
            border-radius: 0.75rem;
            border: solid 0.25em var(--accent);
            background-color: var(--light);
            transition: 0.3s;
            color: var(--accent);
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1em;
            
            &:hover {
                color: var(--light);
                border: solid 0.25em var(--accent);
                background-color: var(--accent);
            }
        }
    }
</style>
<span>
    <p>Or use your google account, </p>
    <button on:click={authWithProvider}><img alt="Google logo." src="/google.png">Google</button>
</span>