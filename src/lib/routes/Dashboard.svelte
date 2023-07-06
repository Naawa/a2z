<script lang="ts">
    import { fly } from "svelte/transition";
</script>
<style lang="scss">
    section {
        display: grid;
        grid-template-areas: 
            "topbar topbar topbar"
            "options main main"
            "logout main main";
        grid-template-columns: 2fr 4fr;
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
        #options {
            grid-area: options;
            background-color: var(--options);
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
            font-weight: bold;
            font-size: larger;
            
            &:hover {
                background-color: lighten($color: #ff0000, $amount: 40%);
            }
            transition: 0.3s;
        }
    }
    @media (width < 600px) {
        section {
            display: grid;
            grid-template-areas: 
            "topbar topbar topbar"
            "options options options"
            "main main main"
            "logout logout logout"; 
            grid-template-rows: 1fr 1fr 3fr 1fr;
        }
    }
</style>
<section>
    <div in:fly={{ y: -200, duration: 300, delay: 300 }} out:fly={{ y: -200, duration: 300 }} id="topbar">
    
    </div>
    <div in:fly={{ x: -200, duration: 300, delay: 300 }} out:fly={{ x: -200, duration: 300 }}  id="options">
    
    </div>
    <div in:fly={{ x: 200, duration: 300, delay: 300 }} out:fly={{ x: 200, duration: 300 }}  id="main">
    
    </div>
    <div in:fly={{ y: 200, duration: 300, delay: 300 }} out:fly={{ y: 200, duration: 300 }} id="logout">
    
    </div>
</section>