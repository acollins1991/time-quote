<template>
  <div id="app">
    <Form />
    <GuessCalculator />
  </div>
</template>

<script>
import Form from './components/Form.vue'
import GuessCalculator from './components/GuessCalculator'

export default {
  name: 'app',
  components: {
    Form,
    GuessCalculator
  }
}
</script>
