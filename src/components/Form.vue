<template>
<div>
  <form>
    <span v-bind:class="inputHeadingClasses">Optimistic:</span>
    <TimeInput v-bind:guess="'optimisticGuess'" @guessUpdated="updateGuesses" />
    <span v-bind:class="inputHeadingClasses">Best Guess:</span>
    <TimeInput v-bind:guess="'bestGuess'" @guessUpdated="updateGuesses" />
    <span v-bind:class="inputHeadingClasses">Pessimistic:</span>
    <TimeInput v-bind:guess="'pessimisticGuess'" @guessUpdated="updateGuesses" />
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
      inputHeadingClasses: 'block px-3 mt-4 mb-3 font-sans text-2xl',
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

      this.$root.$emit('guessesSubmitted', { 'bestGuess': bestGuess, 'optimisticGuess': optimisticGuess, 'pessimisticGuess': pessimisticGuess })
    }
  }
}
</script>

