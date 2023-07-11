<script lang="ts">
    import Navigation from "$lib/layout/Navigation.svelte";
    import Footer from "$lib/layout/Footer.svelte";
    import "$lib/scss/global.scss";
    import { invalidate } from '$app/navigation';
    import { onMount } from 'svelte';

    export let data;

    $: ({ supabase, session } = data);

    onMount(() => {
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((event, _session) => {
        if (_session?.expires_at !== session?.expires_at) {
          invalidate('supabase:auth')
        }
      });

      return () => subscription.unsubscribe();
    });
</script>
<Navigation></Navigation>
{#key data.url}
  <main>
      <slot />
  </main>
{/key}
<Footer></Footer>