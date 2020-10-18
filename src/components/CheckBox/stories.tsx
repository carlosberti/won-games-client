import { Story, Meta } from '@storybook/react/types-6-0'
import CheckBox, { CheckBoxProps } from '.'

export default {
  title: 'Form/CheckBox',
  component: CheckBox,
  argTypes: {
    onCheck: { action: 'checked' }
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CheckBoxProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <CheckBox
        name="category"
        label="Action"
        labelFor="action"
        isChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <CheckBox
        name="category"
        label="Adventure"
        labelFor="adventure"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <CheckBox
        name="category"
        label="Strategy"
        labelFor="strategy"
        {...args}
      />
    </div>
  </>
)
