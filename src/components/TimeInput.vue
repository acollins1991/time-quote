<template>
    <div>
        <input type="number" name="minutes" min="0" max="60" step="5" class="tq-time-input tq-time-input--minutes" v-bind:class="inputClasses" v-model.number="minutesInputValue">
        <input type="number" name="hours" min="0" max="25" step="1" class="tq-time-input tq-time-input--hours" v-bind:class="inputClasses" v-model.number="hoursInputValue">
        <input type="number" name="days" min="0" max="30" step="1" class="tq-time-input tq-time-input--days" v-bind:class="inputClasses" v-model.number="daysInputValue">
    </div>
</template>

<script>
export default {
    name: 'TimeInput',
    props: ['guess'],
    data() {
        return {
            inputClasses: 'shadow appearance-none border border-red py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline',
            minutesInputValue: 0,
            hoursInputValue: 0,
            daysInputValue: 0
        }
    },
    computed: {
        totalMinutes: function(){
            return this.minutesInputValue + ( this.hoursInputValue*60 ) + ( ( 60*24 )*this.daysInputValue )
        }
    },
    watch: {
        totalMinutes: function(value){
            this.$emit('guessUpdated', this.guess, value)
        }
    }
}
</script>

