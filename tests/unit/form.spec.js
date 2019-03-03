import { shallowMount } from '@vue/test-utils'
import Form from '@/components/Form.vue'

describe('Form.vue', () => {
  it('renders the form', () => {
    const wrapper = shallowMount(Form)
    expect(wrapper.find('form').exists()).toBe(true)
  })
  it('emits custom estimation event on submission', () => {
    const wrapper = shallowMount(Form)
    const submitButton = wrapper.find('input.tq-submit')
    submitButton.trigger('click')
    expect(wrapper.emitted().guessesSubmitted).toBeTruthy()
  })
})
