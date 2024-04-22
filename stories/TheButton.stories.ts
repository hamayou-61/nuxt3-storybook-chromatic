import type { Meta, StoryObj } from '@storybook/vue3'
import TheButton from '../components/TheButton.vue'

type Story = StoryObj<typeof TheButton>

const meta: Meta<typeof TheButton> = {
  title: 'Components/TheButton',
  component: TheButton,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: {
        type: 'text'
      }
    },
    height: {
      control: {
        type: 'number'
      }
    },
    elevation: {
      control: {
        type: 'number'
      }
    },
    variant: {
      control: {
        type: 'select'
      },
      options: ['plain', 'outlined', 'tonal', 'text', undefined]
    },
    color: {
      control: {
        type: 'select'
      },
      options: ['primary', 'success', 'error', 'info']
    },
    href: {
      control: {
        type: 'text'
      }
    },
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
    label: 'Button',
    variant: 'flat',
    color: 'primary',
    flat: true,
    rounded: false,
    disabled: false,
    loading: true,
    exact: false,
    elevation: 1000,
    height: 1000
  }
}

export default meta
