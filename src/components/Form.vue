<template>
<div>
  <form>
    Optimistic:
    <br>
    <TimeInput v-bind:guess="'optimisticGuess'" @guessUpdated="updateGuesses" />
    <br>
    Best Guess:
    <br>
    <TimeInput v-bind:guess="'bestGuess'" @guessUpdated="updateGuesses" />
    <br>
    Pessimistic:
    <br>
    <TimeInput v-bind:guess="'pessimisticGuess'" @guessUpdated="updateGuesses" />
    <br>
    <input type="submit" class="tq-submit bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" value="Submit" v-on:click.prevent="emitGuessesSubmitted">
  </form>
</div>
</template>

<script>
import TimeInput from "@/components/TimeInput.vue"

export default {
  name: "Form",
  data(){
    return {
      optimisticGuess: 0,
      bestGuess: 0,
      pessimisticGuess: 0
    }
  },
  components: {
    TimeInput
  },
  methods: {
    updateGuesses: function(eventPayload) {
      console.log( eventPayload.name )
      console.log( eventPayload.value )
      if( eventPayload.name === "optimisticGuess" ) {
        this.optimisticGuess = eventPayload.value
      } else if ( eventPayload.name === "bestGuess" ) {
        this.bestGuess = eventPayload.value 
      } else if ( eventPayload.name === "pessimisticGuess" ) {
        this.pessimisticGuess = eventPayload.value
      }
    },
    emitGuessesSubmitted: function(){
      const bestGuess = this.bestGuess
      const optimisticGuess = this.optimisticGuess
      const pessimisticGuess = this.pessimisticGuess

      this.$root.$emit('guessesSubmitted', { bestGuess, optimisticGuess, pessimisticGuess })
    }
  }
}
</script>

