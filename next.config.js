module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/add',
        destination: 'https://discord.com/oauth2/authorize?client_id=880173509077266483&scope=bot%20applications.commands&permissions=805432446',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/pyyyJpw5QW',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/ZulyBot',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/zulybot',
        permanent: true
      },
      {
        source: '/andgithub',
        destination: 'https://github.com/andrelucaas',
        permanent: true
      },
      {
        source: '/adgdeveloper',
        destination: 'https://www.adgdeveloper.tk',
        permanent: true
      },
      {
        source: '/andtwitter',
        destination: 'https://twitter.com/4DG_YT',
        permanent: true
      }
    ]
  },
}