/** @type {import('next').NextConfig} */
import nextI18NextConfig from './next-i18next.config.js';

const nextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ['en', 'th'], // English and Thai
    defaultLocale: 'th',   // Default language
  },
};

export default nextConfig;
