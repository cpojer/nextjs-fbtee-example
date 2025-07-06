export default (api) => {
  const isServer = api.caller((caller) => !!caller && caller.isServer);
  return {
    presets: [
      [
        'next/babel',
        {
          'preset-env': {
            targets: {
              node: '22',
            },
          },
          'transform-runtime': {
            regenerator: !isServer,
          },
        },
      ],
      '@nkzw/babel-preset-fbtee',
    ],
  };
};
