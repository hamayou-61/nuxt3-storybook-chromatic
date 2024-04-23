import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonGroup from '../components/ButtonGroup.vue'

type Story = StoryObj<typeof ButtonGroup>

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'click' }
  },
  args: {
    mainLink: {
      label: 'メインリンク',
      url: 'https://www.google.com/'
    },
    subLinks: [
      {
        label: 'サブリンク1',
        url: 'https://www.google.com/'
      }
    ]
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
    color: 'default',
    isNew: false
  }
}


export const DefaultNew: Story = {
  args: {
    color: 'default',
    isNew: true
  }
}

export const Primary: Story = {
  args: {
    color: 'primary',
    isNew: false
  }
}

export const PrimaryNew: Story = {
  args: {
    color: 'primary',
    isNew: true
  }
}

export const Secondary: Story = {
  args: {
    color: 'secondary',
    isNew: false
  }
}

export const SecondaryNew: Story = {
  args: {
    color: 'secondary',
    isNew: true
  }
}


export default meta
