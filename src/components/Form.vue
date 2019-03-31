<template>
<div>
  <form v-on:guessUpdated="updateGuesses">
    Optimistic:
    <br>
    <TimeInput v-bind:guess="'optimisticGuess'" />
    <br>
    Best Guess:
    <br>
    <TimeInput v-bind:guess="'bestGuess'" />
    <br>
    Pessimistic:
    <br>
    <TimeInput v-bind:guess="'pessitimisticGuess'" />
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
      pessitimisticGuess: 0
    }
  },
  components: {
    TimeInput
  },
  methods: {
    emitGuessesSubmitted: function(){
      const bestGuess = this.bestGuess
      const optimisticGuess = this.optimisticGuess
      const pessitimisticGuess = this.pessitimisticGuess

      this.$emit('guessesSubmitted', { bestGuess, optimisticGuess, pessitimisticGuess })
    }
  }
}
</script>

