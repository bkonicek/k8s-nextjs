const orgName = process.env.ORG_NAME
/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: `/${orgName.toLowerCase()}`,
  assetPrefix: `/${orgName.toLowerCase()}`
}

module.exports = nextConfig
