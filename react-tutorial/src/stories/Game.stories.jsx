import { Game } from '../components/Game';

export default {
  component: Game,
  title: Game.name,
};

const Template = (args) => <Game {...args} />;

export const a = Template.bind({});
a.args = {
};
