<script>
   import { fly } from "svelte/transition";

</script>
<style lang="scss">
   section {
      display: grid;
      grid-template-rows: 3fr 1fr;
      div {
         display: flex;
         flex-direction: column;
         justify-content: center;
         gap: 3em;
         h1 {
            line-height: 130%;
            font-weight: 1000;
            font-size: clamp(36px, 6dvw, 5rem);
         }
         p {
            width: clamp(250px, 100%, 600px);
         }
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
<section>
   <div>
      <h1 in:fly={{ y: 50, duration: 300, delay: 700 }} out:fly={{ y: 50, duration: 300, delay: 300 }}>Any help you need,<br>from a2z.</h1>
      <p in:fly={{ y: 50, duration: 300, delay: 800 }} out:fly={{ y: 50, duration: 300, delay: 200 }}>
         A2Z aims to provide a platform where people can use their skills to help others on their own time.<br><br>

         If you are a tradesman looking for some extra income, or if you are a person that is looking for affordable and fast help with any kind of plumbing, electrical, or renovation work, A2Z is the place for you.
      </p>
   </div>
   <div in:fly={{ y: 50, duration: 300, delay: 900 }} out:fly={{ y: 50, duration: 300, delay: 100 }}>
      <button>Find a Professional</button>
   </div>
</section>