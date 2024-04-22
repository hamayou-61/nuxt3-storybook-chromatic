import type { Meta, StoryObj } from '@storybook/vue3'
import TheButtonGroup from '../components/TheButtonGroup.vue'

type Story = StoryObj<typeof TheButtonGroup>

const meta: Meta<typeof TheButtonGroup> = {
  title: 'Components/TheButtonGroup',
  component: TheButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'click' }
  }
  // render: args => ({
  //   components: { Button },
  //   setup () {
  //     return { args }
  //   },
  //   template: '<Button v-bind="args" />'
  // })
}

export const Default: Story = {
  args: {
    isNew: true,
    // label: 'Button',
    // variant: 'flat',
    // color: 'primary',
    // flat: true,
    // rounded: false,
    // disabled: false,
    // loading: true,
    // exact: false,
    // elevation: 1000,
    // height: 1000
  }
}

export default meta
