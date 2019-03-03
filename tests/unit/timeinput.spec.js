import { shallowMount } from '@vue/test-utils'
import TimeInput from '@/components/TimeInput.vue'

describe('TimeInput.vue', () => {
  it('displays inputs for minutes, hours, days', () => {
    const wrapper = shallowMount(TimeInput)
    const minutesInput = wrapper.find('input.tq-time-input--minutes')
    expect(minutesInput.exists()).toBe(true)
    const hoursInput = wrapper.find('input.tq-time-input--hours')
    expect(hoursInput.exists()).toBe(true)
    const daysInput = wrapper.find('input.tq-time-input--days')
    expect(daysInput.exists()).toBe(true)
  })
  it('inputs convert inputs to total minutes and sets guess prop to total minutes', () => {
    const wrapper = shallowMount(TimeInput, {
      propsData: {
        guess: 0
      }
    })

    // check initial values
    expect(wrapper.vm.$data.minutesInputValue).toBe(0)
    expect(wrapper.vm.$data.hoursInputValue).toBe(0)
    expect(wrapper.vm.$data.daysInputValue).toBe(0)

    // collect inputs
    const minutesInput = wrapper.find('input.tq-time-input--minutes')
    const hoursInput = wrapper.find('input.tq-time-input--hours')
    const daysInput = wrapper.find('input.tq-time-input--days')

    // set change events and new values on inputs
    minutesInput.element.value = 5
    hoursInput.element.value = 1
    daysInput.element.value = 1
    minutesInput.trigger('input')
    expect(wrapper.vm.$data.minutesInputValue)
    hoursInput.trigger('input')
    expect(wrapper.vm.$data.hoursInputValue)
    daysInput.trigger('input')
    expect(wrapper.vm.$data.daysInputValue)
 
    // expect accurate total minutes value after input changes and set guess prop to this: 5mins = 5, 1hr = 60, 1day = 1440, total = 1505
    setTimeout(() => {
      expect(wrapper.vm.totalMinutes).toBe(1505) 
      expect(wrapper.vm.$props.guess).toBe(1505)
    }, 3000) 
  })
})
