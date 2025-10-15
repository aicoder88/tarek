// [build] library: 'shadcn'
import type { Meta, StoryObj } from "@storybook/react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";

const meta: Meta<typeof Sheet> = {
  title: "ui/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof meta>;

const renderSheet = (args: Story["args"] | undefined, triggerLabel: string) => {
    const side = args?.side ?? "right";
    return (
      <Sheet>
        <SheetTrigger>{triggerLabel}</SheetTrigger>
        <SheetContent side={side}>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    );
};

export const Default: Story = {
  render: (args) => renderSheet(args, "Open Right"),
  args: {
    side: "right",
  },
};

export const Left: Story = {
  render: (args) => renderSheet(args, "Open Left"),
  args: {
    side: "left",
  },
};

export const Top: Story = {
  render: (args) => renderSheet(args, "Open Top"),
  args: {
    side: "top",
  },
};

export const Bottom: Story = {
  render: (args) => renderSheet(args, "Open Bottom"),
  args: {
    side: "bottom",
  },
};
