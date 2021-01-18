module.exports = {
  docs: [
    "Hello",
    {
      type: "category",
      label: "资料收集",
      collapsed: false,
      items: [
        {
          type: 'link',
          label: 'Custom Label', // The label that should be displayed (string).
          href: 'https://example.com' // The target URL (string).
        }
      ],
    },

  ],
};
