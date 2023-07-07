<script>
	import SecondaryCTA from "./SecondaryCTA.svelte";
</script>
<style lang="scss">
    form {
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
    }
</style>
<form>
    <p>Or use your google account, </p>
    <SecondaryCTA><img alt="Google logo." src="/google.png">Google</SecondaryCTA>
</form>