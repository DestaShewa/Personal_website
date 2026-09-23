export default function robots() {
  const baseUrl = 'https://desta-portfolio.vercel.app'; // User needs to update this
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

