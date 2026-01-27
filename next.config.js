/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: () => [
    {
      source: '/resume',
      destination: 'https://static.clark-brown.com/resume/resume.pdf',
      permanent: true,
    },
  ],
}

module.exports = nextConfig
