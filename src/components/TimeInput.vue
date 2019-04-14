<template>
    <div class="flex flex-wrap">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label v-bind:class="labelClasses" v-bind:for="guess + '-minutes-input'">Minutes</label>
            <input v-bind:id="guess + '-minutes-input'" type="number" name="minutes" min="0" max="60" step="5" class="tq-time-input tq-time-input--minutes" v-bind:class="inputClasses" v-model.number="minutesInputValue">
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label v-bind:class="labelClasses" v-bind:for="guess + '-hours-input'">Hours</label>
            <input v-bind:id="guess + '-hours-input'" type="number" name="hours" min="0" max="25" step="1" class="tq-time-input tq-time-input--hours" v-bind:class="inputClasses" v-model.number="hoursInputValue">
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label v-bind:class="labelClasses" v-bind:for="guess + '-days-input'">Days</label>
            <input v-bind:id="guess + '-days-input'" type="number" name="days" min="0" max="30" step="1" class="tq-time-input tq-time-input--days" v-bind:class="inputClasses" v-model.number="daysInputValue">
        </div>
    </div>
</template>

<script>
export default {
    name: 'TimeInput',
    props: ['guess'],
    data() {
        return {
            labelClasses: 'block uppercase tracking-wide text-grey-darker text-sm font-bold mb-2',
            inputClasses: 'appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white',
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
            this.$emit('guessUpdated', { 'name': this.guess, 'value': value })
        }
    }
}
</script>

