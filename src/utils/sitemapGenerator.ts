
import { supabase } from "@/lib/supabaseClient";
import { blogPosts } from "./blogData";
import { mapRowToAITool } from "./toolsData";

// Define base URL for the site
const baseUrl = "https://www.allaitools.tech";

// Get current date in YYYY-MM-DD format for lastmod
const getCurrentDate = () => {
  const now = new Date();
  return now.toISOString().split('T')[0];
};

// Generate comprehensive sitemap XML string
export const generateSitemap = async (): Promise<string> => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

  // Add static pages with priorities
  const staticPages = [
    { url: "/", priority: "1.0", changefreq: "daily" },
    { url: "/categories", priority: "0.9", changefreq: "weekly" },
    { url: "/compare", priority: "0.8", changefreq: "weekly" },
    { url: "/recommend", priority: "0.8", changefreq: "weekly" },
    { url: "/submit-tool", priority: "0.8", changefreq: "weekly" },
    { url: "/pricing", priority: "0.7", changefreq: "monthly" },
    { url: "/about", priority: "0.7", changefreq: "monthly" },
    { url: "/blog", priority: "0.8", changefreq: "weekly" },
    { url: "/careers", priority: "0.6", changefreq: "monthly" },
    { url: "/contact", priority: "0.6", changefreq: "monthly" },
    { url: "/terms", priority: "0.5", changefreq: "yearly" },
    { url: "/privacy", priority: "0.5", changefreq: "yearly" },
    { url: "/login", priority: "0.5", changefreq: "monthly" },
    { url: "/signup", priority: "0.5", changefreq: "monthly" },
    { url: "/dashboard", priority: "0.4", changefreq: "weekly" }
  ];

  staticPages.forEach(page => {
    sitemap += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${getCurrentDate()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  try {
    // Fetch ALL tools from Supabase
    const { data: aiTools, error } = await supabase
      .from('ai_tools')
      .select('*');
    
    if (error) {
      console.error('Error fetching tools for sitemap:', error);
      throw error;
    }
    
    console.log(`Adding ${aiTools?.length || 0} tools to comprehensive sitemap`);
    
    // Add tool detail pages with images
    if (aiTools && aiTools.length > 0) {
      aiTools.forEach(toolRow => {
        const tool = mapRowToAITool(toolRow);
        const slug = tool.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
        sitemap += `  <url>
    <loc>${baseUrl}/tool/${tool.id}/${slug}</loc>
    <lastmod>${getCurrentDate()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${tool.logo}</image:loc>
      <image:title>${tool.name} - ${tool.shortDescription}</image:title>
      <image:caption>Logo of ${tool.name}, ${tool.shortDescription}</image:caption>
    </image:image>
  </url>
`;
      });
    }
    
    // Add category pages
    const allCategories = new Set<string>();
    aiTools?.forEach(toolRow => {
      const tool = mapRowToAITool(toolRow);
      tool.category.forEach(cat => allCategories.add(cat));
    });
    
    const categories = Array.from(allCategories);
    console.log(`Adding ${categories.length} categories to comprehensive sitemap`);
    
    categories.forEach(category => {
      sitemap += `  <url>
    <loc>${baseUrl}/categories/${encodeURIComponent(category)}</loc>
    <lastmod>${getCurrentDate()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;
    });

  } catch (error) {
    console.error('Error generating dynamic sitemap content:', error);
  }

  // Add blog post pages with images
  blogPosts.forEach(post => {
    sitemap += `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${getCurrentDate()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>`;
    
    if (post.coverImage) {
      sitemap += `
    <image:image>
      <image:loc>${post.coverImage}</image:loc>
      <image:title>${post.title}</image:title>
      <image:caption>${post.excerpt}</image:caption>
    </image:image>`;
    }
    
    sitemap += `
  </url>
`;
  });

  // Close urlset tag
  sitemap += `</urlset>`;

  return sitemap;
};

// Remove the other sitemap generation functions since we're using one comprehensive sitemap
export default {
  generateSitemap
};
