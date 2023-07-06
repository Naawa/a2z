<script>
	import PrimaryCTA from "../components/PrimaryCTA.svelte";
   import SecondaryCTA from "$lib/components/SecondaryCTA.svelte";
   import { fly } from "svelte/transition";

</script>
<style lang="scss">
   section {
      h1 {
         line-height: 130%;
         font-weight: 1000;
         font-size: clamp(36px, 6dvw, 5rem);
      }
      p {
         width: clamp(250px, 100%, 600px);
      }
      div {
         display: flex;
         gap: 2dvh;
      }
   }
   
   @media (width < 600px) {
      section {
         div {
            flex-direction: column;
         }
      }
   }
</style>
<section transition:fly={{ y: 200, duration: 300 }}>
   <h1>Any help you need,<br>from A2Z.</h1>
   <p>
      A2Z aims to provide a platform where people can use their skills to help others on their own time.<br><br>

      If you are a tradesman looking for some extra income, or if you are a person that is looking for affordable and fast help with any kind of plumbing, electrical, or renovation work, A2Z is the place for you.
   </p>
   <div>
      <PrimaryCTA>Find a Professional</PrimaryCTA>
      <SecondaryCTA>Find a Professional</SecondaryCTA>
   </div>
</section>