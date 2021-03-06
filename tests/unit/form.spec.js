import { shallowMount, createWrapper } from '@vue/test-utils'
import Form from '@/components/Form.vue'

describe('Form.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Form)
    expect(wrapper.element).toMatchSnapshot()
  })
  it('emits custom estimation event on submission from root', () => {
    const wrapper = shallowMount(Form)
    const submitButton = wrapper.find('input.tq-submit')
    const rootWrapper = createWrapper(wrapper.vm.$root)

    wrapper.vm.$data.bestGuess = 5
    wrapper.vm.$data.optimisticGuess = 5
    wrapper.vm.$data.pessimisticGuess = 5

    submitButton.trigger('click')

    expect(rootWrapper.emitted().guessesSubmitted).toBeTruthy()
    expect(rootWrapper.emitted().guessesSubmitted[0][0].bestGuess).toEqual(5)
    expect(rootWrapper.emitted().guessesSubmitted[0][0].optimisticGuess).toEqual(5)
    expect(rootWrapper.emitted().guessesSubmitted[0][0].pessimisticGuess).toEqual(5)

  })
})
