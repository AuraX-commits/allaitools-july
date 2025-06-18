
import fs from 'fs';
import path from 'path';
import { generateSitemap } from './sitemapGenerator';

// Generate comprehensive sitemap file
const generateSitemapFiles = async () => {
  // Ensure the public directory exists
  const publicDir = path.resolve(__dirname, '../../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  try {
    // Generate comprehensive sitemap content
    const sitemap = await generateSitemap();
    const sitemapPath = path.resolve(publicDir, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap);
    console.log(`Comprehensive sitemap generated at ${sitemapPath}`);
    console.log(`Sitemap accessible at: https://www.allaitools.tech/sitemap.xml`);
    
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
};

// Export the async function
export default generateSitemapFiles;
