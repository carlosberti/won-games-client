import { Story, Meta } from '@storybook/react/types-6-0'
import LoadingSpinner from '.'

export default {
  title: 'LoadingSpinner',
  component: LoadingSpinner
} as Meta

export const Default: Story = () => <LoadingSpinner />
