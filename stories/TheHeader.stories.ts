import { fn } from '@storybook/test'
import TheHeader from '../components/TheHeader.vue'

export default {
  title: 'Components/TheHeader',
  component: TheHeader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: {
      TheHeader
    },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      // Story args can be spread into the returned object
      return {
        ...args
      }
    },
    // Then, the spread values can be accessed directly in the template
    template: '<the-header :user="user" />'
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn()
  }
}

export const LoggedIn = {
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
}

export const LoggedOut = {
  args: {
    user: null
  }
}
