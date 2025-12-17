module.exports = {
  siteMetadata: {
    title: `RCS Gemini Dapp Companion`,
    description: `Global Web3 Retail & Social for Africa-South1.`,
    siteUrl: `https://rcs-gemini-dapp.web.app`, // Use your Firebase URL here
    author: `RCS DISTRIBUTION AND RETAIL, LLC`,
    region: `Africa-South1`,
    currencies: [`ZAR`, `NGN`, `KES`, `BRL`, `ARS`, `JMD`]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RCS Gemini Dapp`,
        short_name: `RCS Dapp`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#00ffcc`, // Your Web3 Teal
        display: `standalone`,
        icon: 'src/assets/favicon.png', 
      },
    },
    'gatsby-plugin-ipfs',
    'gatsby-plugin-netlify',
  ],
};
