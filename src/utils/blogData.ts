export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: number;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Ultimate Guide to AI Writing Tools in 2024",
    excerpt: "Discover the best AI writing tools that can revolutionize your content creation process. From GPT-4 to specialized writing assistants.",
    content: `
      <h2>Introduction to AI Writing Tools</h2>
      <p>AI writing tools have transformed the content creation landscape...</p>
      <!-- Full article content would go here -->
    `,
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "AI Tools",
    tags: ["AI Writing", "Content Creation", "Productivity"],
    readTime: 8,
    featured: true
  },
  {
    id: 2,
    title: "How AI Image Generators Are Changing Creative Industries",
    excerpt: "Explore the impact of AI image generation tools like DALL-E, Midjourney, and Stable Diffusion on graphic design and digital art.",
    content: `
      <h2>The Rise of AI Image Generation</h2>
      <p>AI image generators have become increasingly sophisticated...</p>
      <!-- Full article content would go here -->
    `,
    author: "Mike Chen",
    date: "2024-01-12",
    category: "AI Tools",
    tags: ["AI Art", "Image Generation", "Design"],
    readTime: 6,
    featured: true
  },
  {
    id: 3,
    title: "AI Code Assistants: Boosting Developer Productivity",
    excerpt: "Learn how AI-powered coding tools like GitHub Copilot and ChatGPT are helping developers write better code faster.",
    content: `
      <h2>The Evolution of Code Assistance</h2>
      <p>AI code assistants have revolutionized software development...</p>
      <!-- Full article content would go here -->
    `,
    author: "Alex Rivera",
    date: "2024-01-10",
    category: "Development",
    tags: ["AI Coding", "Productivity", "Development"],
    readTime: 7,
    featured: false
  },
  {
    id: 4,
    title: "The Future of AI Customer Service Tools",
    excerpt: "Discover how AI chatbots and virtual assistants are transforming customer support across industries.",
    content: `
      <h2>AI in Customer Service</h2>
      <p>Customer service has been one of the first areas to widely adopt AI...</p>
      <!-- Full article content would go here -->
    `,
    author: "Emma Wilson",
    date: "2024-01-08",
    category: "Business",
    tags: ["Customer Service", "Chatbots", "AI Support"],
    readTime: 5,
    featured: false
  },
  {
    id: 5,
    title: "AI Video Creation Tools: A Comprehensive Review",
    excerpt: "Compare the top AI video generation platforms and learn how they're democratizing video content creation.",
    content: `
      <h2>AI Video Generation Revolution</h2>
      <p>Video content creation has traditionally required significant resources...</p>
      <!-- Full article content would go here -->
    `,
    author: "David Park",
    date: "2024-01-05",
    category: "Video",
    tags: ["AI Video", "Content Creation", "Media"],
    readTime: 9,
    featured: true
  },
  {
    id: 6,
    title: "Building Ethical AI: Guidelines for Responsible Development",
    excerpt: "Explore the importance of ethical considerations in AI development and implementation across various industries.",
    content: `
      <h2>The Importance of AI Ethics</h2>
      <p>As AI becomes more prevalent in our daily lives...</p>
      <!-- Full article content would go here -->
    `,
    author: "Dr. Lisa Anderson",
    date: "2024-01-03",
    category: "Ethics",
    tags: ["AI Ethics", "Responsible AI", "Technology"],
    readTime: 10,
    featured: false
  }
];
