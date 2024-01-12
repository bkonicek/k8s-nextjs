const orgName = process.env.ORG_NAME ?? 'testing'
/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: `/${orgName.toLowerCase()}`,
  assetPrefix: `/${orgName.toLowerCase()}`
}

module.exports = nextConfig
