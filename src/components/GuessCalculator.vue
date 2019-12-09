<template>
    <div class="text-5xl mt-5">
        <span class="days">{{ days }}d </span>
        <span class="hours">{{ hours }}h </span>
        <span class="minutes">{{ minutes }}m </span>
    </div>
</template>

<script>
export default {
    name: 'GuessCalculator',
    data(){
        return {
            minutes: 0,
            hours: 0,
            days: 0,
            totalMinutes: 0
        }
    },
    methods: {
        calculateEstimation: function(event){
            const bestGuess = event.bestGuess
            const optimisticGuess = event.optimisticGuess
            const pessimisticGuess = event.pessimisticGuess

            // PERT calc
            const totalMinutes = ( optimisticGuess + ( bestGuess*4 ) + pessimisticGuess ) / 6

            this.totalMinutes = totalMinutes

            // below 1 hour
            if( totalMinutes <= 59 ) {
                this.minutes = Math.round(totalMinutes)
            } 
            // at least 1 hour but less than 1 day
            else if( totalMinutes >= 60 && totalMinutes <= 1439 ) {
                let hours = totalMinutes / 60
                let rhours = Math.floor(hours)
                let minutes = (hours - rhours) * 60
                let rminutes = Math.round(minutes)

                this.minutes = rminutes 
                this.hours = rhours
            }
            // at 1 day
            else if( totalMinutes >= 1440 ) {
                let days = ( totalMinutes / 60 ) / 24
                let rdays = Math.floor(days)
                let hours = (days - rdays) * 24
                let rhours = Math.floor(hours)
                let minutes = (hours - rhours) * 60
                let rminutes = Math.round(minutes)

                this.minutes = rminutes 
                this.hours = rhours
                this.days = rdays
            }

        }
    },
    mounted(){
        this.$root.$on('guessesSubmitted', this.calculateEstimation)
    }
}
</script>
