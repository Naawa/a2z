<script lang="ts">
    import { fly } from "svelte/transition";
    export let data: any

    let user = data;
    $: ({ user } = data)
</script>
<style lang="scss">
    section {
        display: grid;
        grid-template-areas: 
            "topbar topbar topbar"
            "panel main main"
            "logout main main";
        grid-template-columns: 2fr 7fr;
        grid-template-rows: 2fr 6fr 1fr;
        gap: 1em;
        padding: 2em 0;
        div {
            border-radius: 0.75em;
            padding: 2em;
        }
        #topbar {
            grid-area: topbar;
            background-color: var(--neutral);
        }
        #panel {
            grid-area: panel;
            background-color: var(--panel);
        }
        #main {
            grid-area: main;
            background-color: var(--safe);
        }
        #logout {
            grid-area: logout;
            background-color: var(--danger);
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            
            &:hover {
                background-color: lighten($color: #ff0000, $amount: 40%);
            }
            transition: 0.3s;

            a {
                height: 100%;
                width: 100%;
                border: none;
                background-color: transparent;
                font-weight: bold;
                color: var(--dark);
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration: none;
            }
        }
    }
    @media (width < 600px) {
        section {
            display: grid;
            grid-template-areas: 
            "topbar topbar topbar"
            "panel panel panel"
            "main main main"
            "logout logout logout"; 
            grid-template-rows: 1fr 1fr 7fr 1fr;

            div:first-of-type {
                padding: 0 2em;
                display: flex;
                align-items: center;
            }
        }
    }
</style>
<section>
    <div in:fly={{ y: -100, duration: 200, delay: 600 }} out:fly={{ y: -100, duration: 200, delay: 300 }} id="topbar">
        <h1>Welcome {user.email}</h1>
    </div>
    <div in:fly={{ x: -100, duration: 200, delay: 700 }} out:fly={{ x: -100, duration: 200, delay: 200 }}  id="panel">
    
    </div>
    <div in:fly={{ x: 100, duration: 200, delay: 800 }} out:fly={{ x: 100, duration: 200, delay: 100 }}  id="main">
    
    </div>
    <div in:fly={{ y: 100, duration: 200, delay: 900 }} out:fly={{ y: 100, duration: 200 }} id="logout">
        <a href="/logout">Logout</a>
    </div>
</section>