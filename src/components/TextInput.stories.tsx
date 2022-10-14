import { Meta, StoryObj } from "@storybook/react";
import { TextInput, RootProps, InputProps } from "./TextInput";
import { Envelope } from "phosphor-react";
export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type your e-mail address" />,
    ],
  },
  argTypes: {},
} as Meta<RootProps>;

export const Default: StoryObj<RootProps> = {};
export const WithoutIcon: StoryObj<RootProps> = {
  args: {
    children: [
      <TextInput.Input placeholder="Type your e-mail address" />,
    ],
  }
};
