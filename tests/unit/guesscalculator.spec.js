import { shallowMount, createWrapper } from '@vue/test-utils'
import GuessCalculator from '@/components/GuessCalculator.vue'

describe( 'GuessCalculator.vue', () => {
    it('Renders initial values, 0m 0h 0d', () => {
        const wrapper = shallowMount(GuessCalculator)
        expect(wrapper.find('span.minutes').text()).toEqual('0m')
        expect(wrapper.find('span.hours').text()).toEqual('0h')
        expect(wrapper.find('span.days').text()).toEqual('0d')
    })
    it('Calculates the estimation on guessSubmitted root emitted event using PERT formula, 5mins', () => {

        const wrapper = shallowMount(GuessCalculator)
        const rootWrapper = createWrapper(wrapper.vm.$root)

        rootWrapper.vm.$emit('guessesSubmitted', { 'bestGuess': 5, 'optimisticGuess': 5, 'pessimisticGuess': 5 })

        expect(rootWrapper.emitted().guessesSubmitted).toBeTruthy()

        // 1505mins converts to 1day 1hours 5mins
        expect(wrapper.vm.$data.minutes).toEqual(5)
        expect(wrapper.vm.$data.hours).toEqual(0)
        expect(wrapper.vm.$data.days).toEqual(0)

    })
    it('Calculates the estimation on guessSubmitted root emitted event using PERT formula, 1439mins', () => {

        const wrapper = shallowMount(GuessCalculator)
        const rootWrapper = createWrapper(wrapper.vm.$root)

        rootWrapper.vm.$emit('guessesSubmitted', { 'bestGuess': 1439, 'optimisticGuess': 1439, 'pessimisticGuess': 1439 })

        expect(rootWrapper.emitted().guessesSubmitted).toBeTruthy()

        // 1505mins converts to 1day 1hours 5mins
        expect(wrapper.vm.$data.minutes).toEqual(59)
        expect(wrapper.vm.$data.hours).toEqual(23)
        expect(wrapper.vm.$data.days).toEqual(0)

    })
    it('Calculates the estimation on guessSubmitted root emitted event using PERT formula, 1505mins', () => {

        const wrapper = shallowMount(GuessCalculator)
        const rootWrapper = createWrapper(wrapper.vm.$root)

        rootWrapper.vm.$emit('guessesSubmitted', { 'bestGuess': 1505, 'optimisticGuess': 1505, 'pessimisticGuess': 1505 })

        expect(rootWrapper.emitted().guessesSubmitted).toBeTruthy()

        // 1505mins converts to 1day 1hours 5mins
        expect(wrapper.vm.$data.minutes).toEqual(5)
        expect(wrapper.vm.$data.hours).toEqual(1)
        expect(wrapper.vm.$data.days).toEqual(1)

    })
})