
import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import ToolsDirectory from "../components/home/ToolsDirectory";
import ComparisonSection from "../components/home/ComparisonSection";
import CategoryGrid from "../components/home/CategoryGrid";
import Newsletter from "../components/home/Newsletter";
import RecommendationPromo from "../components/home/RecommendationPromo";
import { ScrollToTop } from "../components/common/ScrollToTop";
import { Helmet } from "react-helmet-async";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Optimized SEO description with target keywords
  const seoDescription = "Discover all AI tools in one comprehensive directory! Find the best AI tools for every need at AllAITools.tech - your ultimate AI tools directory featuring 3000+ artificial intelligence solutions. Compare top AI tools for content creation, coding, marketing, design, and business automation. All tools at one place with expert reviews, pricing comparisons, and user ratings.";
  
  const enhancedSeoKeywords = "all ai tools, ai tools directory, all tools at one place, best ai tools, AllAITools.tech, AI tools directory, artificial intelligence tools directory, AI software directory, comprehensive AI tools directory, best AI tools directory, AI tool comparison directory, AI tools directory 2025, top AI tools directory, curated AI tools directory, AI directory platform, professional AI tools directory, text generation AI, image AI tools, AI coding assistants, AI chatbots, AI writing tools, best AI tools 2025, free AI tools, AI for business, AI productivity tools, AI content creation, AI design tools, AI data analysis, AI marketing tools, AI for developers, AI research tools, generative AI tools, AI image generators, AI video creators, AI code generators, language model tools, AI transcription services, AI translation tools, AI customer service, AI for education, AI decision support, AI analytics tools, multimodal AI models, enterprise AI solutions, AI recommendation engines, no-code AI tools, large language models, AI automation, ChatGPT alternatives, Midjourney alternatives, DALL-E alternatives, AI voice generators, AI audio tools, AI SEO tools, AI copywriting tools, AI personal assistants, AI project management, AI meeting assistants, GPT-powered tools, enterprise AI software, AI browser extensions, AI APIs, AI-powered search, AI document analysis, AI legal tools, AI healthcare solutions, AI email assistants, AI presentation creators, AI summarization tools, AI grammar checkers, AI trend analysis, AI sentiment analysis, AI photo editors, AI music generators, AI video editors, AI competitive analysis, AI personalization tools, AI-powered CRM, free ai tools, marketing tools, ai marketing, ai marketing tools, ai tools newsletter, ai news, ai newsletter, how to use ai tools, find ai tools, futurepedia, topaitools, indian ai tools, usa ai tools, ai tools near me, productivity ai tools, compare ai tools, ai girlfriend, ai girlfriend tools, ai boyfriend, ai sex, ai nsfw, nsfw tools, face swapping tools, notion ai, free chatgpt, pricing ai tools, recommend ai tools, compare tools, compare all ai tools, there's an ai for that, futurepedia alternative, alternative ai tool directory, aitoolbazaar, aibazaar, best ai tool for, best ai tool, deepseek free, manus im, manus free, manus credits, manus ai, lovable ai, no code ai tools, marketing ai tools, coding ai tools, image generation ai tools, voice assistant ai tools, research ai tools, language ai tools, 3d ai tools, car ai tools, automation ai tools, designing ai tools, photography ai tools, data ai tools, data analysis ai tool, customer service ai tool, find my ai tool, how to find best ai tool, search for new ai tools, new ai tools, new ai news, discover ai tools, conversational ai tools, text ai tools, ai resume, career ai tools, ai sales, sales ai tool, sales ai tools, content creation ai tools, vidnoz, vidnoz free, free vidnoz, vidnoz credits free, vidnoz credits, vidnoz login, vidnoz affiliate, vidnoz use cases, free vidnoz credits";

  // Additional long-tail keywords for deeper topical coverage
  const longTailKeywords = `
    all ai tools comprehensive directory artificial intelligence solutions,
    best artificial intelligence tools directory for small business productivity 2025,
    all tools at one place AI directory platform for content creators,
    top AI-powered content creation tools directory for marketing professionals,
    advanced machine learning software directory for data analysis and visualization,
    compare enterprise-grade AI solutions directory for customer experience automation,
    affordable AI tools directory for independent content creators and freelancers,
    specialized artificial intelligence applications directory for healthcare diagnostics,
    comprehensive AI tools directory of AI coding assistants for software development,
    innovative natural language processing tools directory for automated writing assistance,
    cutting-edge computer vision AI tools directory for image recognition and processing,
    multimodal AI platforms directory combining text image and audio generation capabilities,
    AI-powered decision support systems directory for business intelligence and analytics,
    real-time AI translation and transcription services directory for global communication,
    generative AI models directory for creating realistic 3D assets and animations,
    no-code AI automation tools directory for workflow optimization and business processes,
    personalized AI recommendation engines directory for e-commerce and content platforms,
    AI tools directory compatible with popular productivity suites and business software,
    semantic search and knowledge discovery AI tools directory for research professionals,
    AI voice and speech synthesis tools directory for natural-sounding audio content,
    proprietary vs open-source AI solutions directory comparison and feature analysis,
    AI technologies transforming creative industries directory and digital content creation,
    find best AI tool for my specific needs directory and requirements,
    how to choose right AI software directory for business automation,
    comprehensive comparison of leading AI platforms directory and services,
    discover new AI tools directory and emerging artificial intelligence technologies,
    AI tool recommendations directory based on industry and use case analysis
  `;
  
  // Adding 20 three-word keyword phrases for more targeted SEO
  const threeWordKeywords = `
    all ai tools,
    ai tools directory,
    all tools place,
    best ai tools,
    comprehensive AI directory,
    professional AI directory,
    AI content creation,
    machine learning tools,
    deep learning software,
    natural language processing,
    computer vision applications,
    data science platforms,
    AI workflow automation,
    enterprise AI solutions,
    prompt engineering tools,
    text generation APIs,
    AI image generators,
    multimodal AI models,
    AI code assistants,
    conversational AI chatbots,
    AI marketing automation,
    video creation tools,
    audio synthesis software,
    AI business intelligence,
    no-code AI platforms,
    generative AI applications,
    AI productivity suite,
    intelligent automation tools,
    AI analytics dashboard,
    voice AI technology,
    AI recommendation system
  `;

  // Optimized page title with target keywords
  const pageTitle = "All AI Tools Directory - Best AI Tools at One Place | AllAITools.tech";

  return (
    <div className="min-h-screen overflow-hidden bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta 
          name="description" 
          content={seoDescription} 
        />
        <meta property="og:title" content={pageTitle} />
        <meta 
          property="og:description" 
          content={seoDescription}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.allaitools.tech/og-image.png" />
        <meta property="og:url" content="https://www.allaitools.tech" />
        <meta property="og:site_name" content="All AI Tools Directory - Best AI Tools at One Place" />
        <meta property="og:locale" content="en_US" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta 
          name="twitter:description" 
          content={seoDescription}
        />
        <meta name="twitter:image" content="https://www.allaitools.tech/og-image.png" />
        <meta name="twitter:site" content="@AIToolsDirectory" />
        
        <meta name="keywords" content={`${enhancedSeoKeywords}, ${longTailKeywords}, ${threeWordKeywords}`} />
        <link rel="canonical" href="https://www.allaitools.tech" />
        
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="AllAITools AI Tools Directory Team" />
        <meta name="generator" content="AllAITools AI Tools Directory Platform" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Enhanced Schema.org markup for search engines */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "All AI Tools Directory - Best AI Tools at One Place",
              "alternateName": ["AllAITools.tech", "AI Tools Directory", "All AI Tools", "Best AI Tools Directory", "All Tools at One Place"],
              "url": "https://www.allaitools.tech",
              "description": "${seoDescription}",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.allaitools.tech/?search={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "sameAs": [
                "https://twitter.com/AIToolsDirectory",
                "https://www.linkedin.com/company/ai-tools-directory",
                "https://github.com/allaitools"
              ],
              "creator": {
                "@type": "Organization",
                "@id": "https://www.allaitools.tech/#organization"
              }
            }
          `}
        </script>

        {/* Organization Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.allaitools.tech/#organization",
              "name": "AllAITools.tech - All AI Tools Directory",
              "url": "https://www.allaitools.tech",
              "logo": "https://www.allaitools.tech/og-image.png",
              "description": "All AI tools at one place - the world's most comprehensive AI tools directory featuring best AI tools and artificial intelligence solutions.",
              "foundingDate": "2024",
              "knowsAbout": [
                "All AI Tools",
                "AI Tools Directory", 
                "Best AI Tools",
                "All Tools at One Place",
                "Artificial Intelligence",
                "Machine Learning",
                "AI Software Directory",
                "Technology Comparison",
                "AI Applications",
                "Business Automation",
                "Content Creation",
                "Data Analysis"
              ],
              "areaServed": "Worldwide",
              "serviceType": [
                "All AI Tools Directory",
                "Best AI Tools Discovery",
                "AI Software Comparison",
                "Technology Reviews",
                "AI Recommendations"
              ]
            }
          `}
        </script>

        {/* Service Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "All AI Tools Directory - Best AI Tools at One Place",
              "provider": {
                "@type": "Organization",
                "name": "AllAITools.tech"
              },
              "serviceType": "AI Tools Directory",
              "description": "All AI tools directory and comparison platform - find the best AI tools all at one place with comprehensive reviews and comparisons.",
              "areaServed": "Worldwide",
              "availableLanguage": "English",
              "category": "Technology Directory",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "All AI Tools Directory Catalog",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Best AI Tool Discovery"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Tool Comparison"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "AI Tool Reviews"
                    }
                  }
                ]
              }
            }
          `}
        </script>

        {/* ItemList Schema for AI Tools */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Best AI Tools Directory 2025 - All AI Tools at One Place",
              "description": "All AI tools directory list featuring the best artificial intelligence tools across all categories - all tools at one place.",
              "numberOfItems": "3000+",
              "itemListOrder": "https://schema.org/ItemListOrderDescending",
              "itemListElement": [
                {
                  "@type": "SoftwareApplication",
                  "position": 1,
                  "name": "ChatGPT",
                  "description": "Advanced conversational AI for text generation and assistance",
                  "applicationCategory": "AI Assistant"
                },
                {
                  "@type": "SoftwareApplication", 
                  "position": 2,
                  "name": "Midjourney",
                  "description": "AI-powered image generation and artistic creation tool",
                  "applicationCategory": "Image Generation"
                },
                {
                  "@type": "SoftwareApplication",
                  "position": 3, 
                  "name": "GitHub Copilot",
                  "description": "AI-powered code completion and programming assistant",
                  "applicationCategory": "Code Assistant"
                }
              ]
            }
          `}
        </script>

        {/* FAQ Schema for better SERP features */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Where can I find all AI tools at one place?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AllAITools.tech is the best AI tools directory where you can find all AI tools at one place. Our comprehensive AI tools directory features 3000+ verified AI tools across 50+ categories, making it the ultimate destination for discovering the best AI tools for any purpose."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes AllAITools the best AI tools directory?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AllAITools is the best AI tools directory because we offer all AI tools at one place with detailed comparisons, expert reviews, and comprehensive filtering. Our AI tools directory includes the best AI tools for content creation, coding, marketing, design, and business automation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are there free AI tools in this all AI tools directory?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Our all AI tools directory includes hundreds of free AI tools across all categories. You can filter by 'Free' pricing in our AI tools directory to discover the best AI tools that don't require any payment - all tools at one place for free."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How often is this AI tools directory updated with new tools?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our all AI tools directory is updated daily with new tools, feature updates, and pricing changes. We continuously monitor the AI landscape to ensure our AI tools directory has all the best AI tools and latest innovations all at one place."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I compare AI tools in this directory?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely! Our AI tools directory comparison feature allows you to compare the best AI tools side-by-side. You can analyze features, pricing, pros, and cons of all AI tools at one place to make informed decisions."
                  }
                }
              ]
            }
          `}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "All AI Tools Directory - Best AI Tools at One Place",
                  "item": "https://www.allaitools.tech/"
                }
              ]
            }
          `}
        </script>

        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Geo-targeting */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="ICBM" content="37.7749, -122.4194" />
        
        {/* Language and content targeting */}
        <meta httpEquiv="content-language" content="en-US" />
        <meta name="language" content="English" />
        
        {/* Publisher Information */}
        <meta name="publisher" content="AllAITools.tech - Best AI Tools Directory" />
        <meta name="copyright" content="AllAITools.tech" />
        
        {/* Content Classification */}
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="coverage" content="worldwide" />
        
        {/* Cache control for better performance */}
        <meta httpEquiv="cache-control" content="public, max-age=86400" />
      </Helmet>
      
      <Navbar />
      <main>
        {/* SEO Content Section with H1 and H2 tags - Hidden for UI but visible to search engines */}
        <section className="sr-only" aria-hidden="true">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-foreground mb-6">
                All AI Tools Directory - Best AI Tools at One Place | AllAITools.tech
              </h1>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg mb-4">
                  Welcome to AllAITools.tech, the ultimate AI tools directory where you can find all AI tools at one place! 
                  Our comprehensive AI tools directory features the best AI tools and artificial intelligence solutions across 50+ categories. 
                  Discover all tools at one place with our expertly curated AI tools directory, featuring 3000+ of the best AI tools 
                  for content creation, coding, marketing, design, and business automation.
                </p>
                
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  Why Choose AllAITools - The Best AI Tools Directory?
                </h2>
                
                <p className="mb-4">
                  AllAITools.tech is the premier destination for finding all AI tools at one place. Our AI tools directory stands out as 
                  the best AI tools directory because we provide comprehensive reviews, detailed comparisons, and expert insights for 
                  every tool. From free AI tools to enterprise solutions, you'll find all tools at one place in our 
                  carefully curated AI tools directory.
                </p>
                
                <h2 className="text-2xl font-semibold text-foreground mt-6 mb-3">
                  Discover the Best AI Tools Across All Categories
                </h2>
                
                <p className="mb-4">
                  Our all AI tools directory covers every category you need. Find the best AI tools for text generation, 
                  image creation, code assistance, marketing automation, and much more. With all tools at one place, 
                  you can easily compare features, pricing, and user reviews to make informed decisions.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-6 mb-3">
                  Featured Best AI Tools Categories in Our Directory
                </h2>
                
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Text Generation and AI Writing Tools - Best AI tools for content creation</li>
                  <li>Image Generation and Design AI - Top AI tools for visual content</li>
                  <li>Code Generation and Developer Tools - Best AI tools for programming</li>
                  <li>Conversational AI and Chatbots - Leading AI tools for communication</li>
                  <li>Marketing and Business Automation - Best AI tools for growth</li>
                  <li>Data Analysis and Research Tools - Top AI tools for insights</li>
                  <li>Video Creation and Editing AI - Best AI tools for video content</li>
                  <li>Voice and Audio Processing - Leading AI tools for audio</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-foreground mt-6 mb-3">
                  How Our All AI Tools Directory Works
                </h2>
                
                <p className="mb-4">
                  Finding the best AI tools has never been easier! Our AI tools directory uses advanced filtering and smart categorization 
                  to help you discover all AI tools at one place. Whether you're looking for free AI tools or premium solutions, 
                  our AI tools directory provides detailed information about features, pricing, pros, cons, and real user reviews.
                </p>

                <h2 className="text-2xl font-semibold text-foreground mt-6 mb-3">
                  Compare and Choose the Best AI Tools
                </h2>
                
                <p className="mb-4">
                  Our AI tools directory features a powerful comparison tool that lets you evaluate multiple AI tools side-by-side. 
                  Compare the best AI tools based on features, pricing, user ratings, and specific use cases. With all tools at one place, 
                  you can make data-driven decisions and find the perfect AI solution for your needs.
                </p>

                <p className="mb-4">
                  Start exploring our all AI tools directory today and discover how the best AI tools can transform your workflow, 
                  boost productivity, and unlock new possibilities. Our AI-powered recommendation engine helps you find tools that 
                  match your specific requirements from our extensive collection of all AI tools at one place.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <Hero />
        <RecommendationPromo />
        <ToolsDirectory />
        <CategoryGrid />
        <ComparisonSection />
        <Newsletter />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
