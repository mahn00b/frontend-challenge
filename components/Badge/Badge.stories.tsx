import Badge, { BadgeProps } from './Badge';

export default {
  component: Badge,
  title: 'Badge'
}

const Template = (args: BadgeProps) => <Badge type={args.type} >{args.children}</Badge>

export const Primary = Template.bind({})
