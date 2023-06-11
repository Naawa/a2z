<script lang="ts">
	import Background from "$lib/components/Background.svelte";
    import Navigation from "$lib/components/Navigation.svelte";
    import "$lib/scss/global.scss"
</script>

<Background></Background>
<Navigation></Navigation>
<slot />