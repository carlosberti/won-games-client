module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/preset-typescript', '@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-knobs/register'],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`);
    return config
  }
};
