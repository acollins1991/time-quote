<template>
    <div>
        <span class="minutes">{{ minutes }}m </span>
        <span class="hours">{{ hours }}h </span>
        <span class="days">{{ days }}d </span>
    </div>
</template>

<script>
export default {
    name: 'GuessCalculator',
    data(){
        return {
            minutes: 0,
            hours: 0,
            days: 0
        }
    }
}
</script>
