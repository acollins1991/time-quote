import { shallowMount } from '@vue/test-utils'
import GuessCalculator from '@/components/GuessCalculator.vue'

describe( 'GuessCalculator.vue', () => {
    it('Renders initial values, 0m 0h 0d', () => {
        const wrapper = shallowMount(GuessCalculator)
        expect(wrapper.find('span.minutes').text()).toEqual('0m')
        expect(wrapper.find('span.hours').text()).toEqual('0h')
        expect(wrapper.find('span.days').text()).toEqual('0d')
    })
})