import {Meta, StoryObj } from "@storybook/react"
import { Checkbox, CheckboxProps } from "./Checkbox";
import { Text } from "./Text";

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {},
  decorators: [
    (story) => (
      <div className="flex items-center gap-2">
        {story()}
        <Text size="sm">Aceite os termos para prosseguir</Text>
      </div>
    )
    ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}