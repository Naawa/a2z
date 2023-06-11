<script>
	import Button from "./Button.svelte";

</script>
<style lang="scss">
   section {
      display: flex;
      flex-direction: column;
      h1 {
         font-size: 90px;
         line-height: 130%;
         font-weight: 1000;
      }
      p {
         max-width: 40%;
      }
      div {
         display: flex;
         align-items: center;
         gap: 1em;
      }
   }
</style>
<section>
   <h1>Any help you need,<br>from A2Z.</h1>
   <br>
   <br>
   <p>
      A2Z aims to provide a platform where people can use their skills to help others on their own time.<br><br>

      If you are a tradesman looking for some extra income, or if you are a person that is looking for affordable and fast help with any kind of plumbing, electrical, or renovation work, A2Z is the place for you.
   </p>
   <br>
   <br>
   <div>
      <Button color={"#E1FFF3"}>View Jobs</Button>
      <Button color={"#EAE9FF"}>Post a Jobs</Button>
   </div>
</section>