import { shallowMount } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import Form from '@/components/Form.vue'
import TimeInput from '@/components/TimeInput.vue'

describe('Form.vue', () => {
  it('renders the form', () => {
    const wrapper = shallowMount(Form)
    expect(wrapper.find('form').exists()).toBe(true)
  })
  it('catches guessUpdated event emitted by inputs and applies new guess value', () => {
    const wrapper = mount(Form)
    const input = wrapper.find(TimeInput)

    input.vm.$emit('guessUpdated', { 'name': "bestGuess", 'value': 5 })

    expect(input.emitted().guessUpdated).toBeTruthy()
    expect(wrapper.vm.$data.bestGuess).toEqual(5)


  })
  it('emits custom estimation event on submission', () => {
    const wrapper = shallowMount(Form)
    const submitButton = wrapper.find('input.tq-submit')
    submitButton.trigger('click')
    expect(wrapper.emitted().guessesSubmitted).toBeTruthy()
  })
})
