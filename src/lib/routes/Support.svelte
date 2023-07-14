<script lang="ts">
	import { fly } from "svelte/transition";
</script>

<style lang="scss">
	 section {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 3dvh;
        p {
            &:first-of-type {
                font-size: 2em;
                font-weight: 1000;
            }
        }
    }
</style>

<section>
    <p in:fly={{ y: 50, duration: 300, delay: 550 }} out:fly={{ y: 50, duration: 300, delay: 150 }}>Support</p>
	<p in:fly={{ y: 50, duration: 300, delay: 600 }} out:fly={{ y: 50, duration: 300, delay: 100 }}>For any support, please email Naous at naous.islam@outlook.com</p>
</section>