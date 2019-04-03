import { shallowMount, createWrapper } from '@vue/test-utils'
import Form from '@/components/Form.vue'

describe('Form.vue', () => {
  it('renders the form', () => {
    const wrapper = shallowMount(Form)
    expect(wrapper.find('form').exists()).toBe(true)
  })
  it('emits custom estimation event on submission from root', () => {
    const wrapper = shallowMount(Form)
    const submitButton = wrapper.find('input.tq-submit')
    const rootWrapper = createWrapper(wrapper.vm.$root)
    submitButton.trigger('click')
    expect(rootWrapper.emitted().guessesSubmitted).toBeTruthy()
  })
})
