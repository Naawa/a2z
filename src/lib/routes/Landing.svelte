<script>
	import Button from "../components/Button.svelte";

</script>
<style lang="scss">
   section {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      h1 {
         line-height: 130%;
         font-weight: 1000;
         font-size: clamp(36px, 6dvh, 3rem);
      }
      p {
         width: clamp(250px, 100%, 600px);
      }
      div {
         display: flex;
         gap: 4dvh;
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
   <h1>Any help you need,<br>from A2Z.</h1>
   <p>
      A2Z aims to provide a platform where people can use their skills to help others on their own time.<br><br>

      If you are a tradesman looking for some extra income, or if you are a person that is looking for affordable and fast help with any kind of plumbing, electrical, or renovation work, A2Z is the place for you.
   </p>
   <div>
      <Button color={"#E1FFF3"}>Find a Professional</Button>
      <Button color={"#E1FFF3"}>Find a Professional</Button>
   </div>
</section>