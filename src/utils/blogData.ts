import { BlogPost } from "../types";

const authors = [
  {
    id: 1,
    name: "Alex Chen",
    avatar: "/lovable-uploads/author-1.png",
    title: "AI Technology Writer"
  },
  {
    id: 2,
    name: "Sarah Johnson", 
    avatar: "/lovable-uploads/author-2.png",
    title: "Machine Learning Researcher"
  },
  {
    id: 3,
    name: "Michael Torres",
    avatar: "/lovable-uploads/author-3.png", 
    title: "Data Science Expert"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding the Basics of AI",
    excerpt: "An introductory guide to artificial intelligence and its applications.",
    content: `
      <h2>What is AI?</h2>
      <p>Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn.</p>
      <h2>Applications of AI</h2>
      <p>AI is used in various fields such as healthcare, finance, robotics, and more.</p>
    `,
    author: authors[0],
    date: "2023-01-15",
    readingTime: "5 min read",
    category: "Technology",
    tags: ["AI", "Basics", "Technology"],
    coverImage: "/images/ai-basics.png",
    slug: "understanding-basics-of-ai"
  },
  {
    id: 2,
    title: "Machine Learning Explained",
    excerpt: "Dive into the world of machine learning and how it powers AI.",
    content: `
      <h2>What is Machine Learning?</h2>
      <p>Machine Learning is a subset of AI that enables systems to learn from data and improve over time without being explicitly programmed.</p>
      <h2>Types of Machine Learning</h2>
      <p>Supervised, unsupervised, and reinforcement learning are the main types.</p>
    `,
    author: authors[1],
    date: "2023-02-10",
    readingTime: "7 min read",
    category: "Technology",
    tags: ["Machine Learning", "AI", "Data"],
    coverImage: "/images/machine-learning.png",
    slug: "machine-learning-explained"
  },
  {
    id: 3,
    title: "The Future of AI in Healthcare",
    excerpt: "Exploring how AI is transforming the healthcare industry.",
    content: `
      <h2>AI in Diagnostics</h2>
      <p>AI algorithms can analyze medical images to assist in diagnosis.</p>
      <h2>Personalized Medicine</h2>
      <p>AI helps tailor treatments to individual patients.</p>
    `,
    author: authors[2],
    date: "2023-03-05",
    readingTime: "8 min read",
    category: "Healthcare",
    tags: ["AI", "Healthcare", "Future"],
    coverImage: "/images/ai-healthcare.png",
    slug: "future-of-ai-in-healthcare"
  },
  {
    id: 4,
    title: "Natural Language Processing: Making Machines Understand Us",
    excerpt: "An overview of NLP and its impact on technology.",
    content: `
      <h2>What is NLP?</h2>
      <p>Natural Language Processing enables machines to understand and respond to human language.</p>
      <h2>Applications of NLP</h2>
      <p>Chatbots, translation services, and sentiment analysis are common uses.</p>
    `,
    author: authors[0],
    date: "2023-04-12",
    readingTime: "6 min read",
    category: "Technology",
    tags: ["NLP", "AI", "Language"],
    coverImage: "/images/nlp.png",
    slug: "natural-language-processing"
  },
  {
    id: 5,
    title: "AI Ethics: Navigating the Moral Landscape",
    excerpt: "Understanding the ethical considerations in AI development.",
    content: `
      <h2>Why Ethics Matter</h2>
      <p>AI systems can impact society in profound ways, raising ethical questions.</p>
      <h2>Key Ethical Issues</h2>
      <p>Bias, privacy, and accountability are central concerns.</p>
    `,
    author: authors[1],
    date: "2023-05-20",
    readingTime: "9 min read",
    category: "Ethics",
    tags: ["AI", "Ethics", "Society"],
    coverImage: "/images/ai-ethics.png",
    slug: "ai-ethics"
  },
  {
    id: 6,
    title: "Deep Learning Demystified",
    excerpt: "A deep dive into deep learning and neural networks.",
    content: `
      <h2>What is Deep Learning?</h2>
      <p>Deep Learning is a subset of machine learning involving neural networks with many layers.</p>
      <h2>Applications</h2>
      <p>Image recognition, speech processing, and more.</p>
    `,
    author: authors[2],
    date: "2023-06-15",
    readingTime: "10 min read",
    category: "Technology",
    tags: ["Deep Learning", "AI", "Neural Networks"],
    coverImage: "/images/deep-learning.png",
    slug: "deep-learning-demystified"
  },
  {
    id: 7,
    title: "AI in Finance: Opportunities and Risks",
    excerpt: "How AI is reshaping the financial industry.",
    content: `
      <h2>AI Applications in Finance</h2>
      <p>Fraud detection, algorithmic trading, and risk management.</p>
      <h2>Challenges</h2>
      <p>Regulatory compliance and ethical concerns.</p>
    `,
    author: authors[0],
    date: "2023-07-10",
    readingTime: "7 min read",
    category: "Finance",
    tags: ["AI", "Finance", "Risk"],
    coverImage: "/images/ai-finance.png",
    slug: "ai-in-finance"
  },
  {
    id: 8,
    title: "Robotics and AI: The Future of Automation",
    excerpt: "Exploring the synergy between robotics and artificial intelligence.",
    content: `
      <h2>Robotics Overview</h2>
      <p>Robots are increasingly powered by AI to perform complex tasks.</p>
      <h2>Impact on Industry</h2>
      <p>Manufacturing, logistics, and healthcare robotics.</p>
    `,
    author: authors[1],
    date: "2023-08-05",
    readingTime: "8 min read",
    category: "Technology",
    tags: ["Robotics", "AI", "Automation"],
    coverImage: "/images/robotics.png",
    slug: "robotics-and-ai"
  },
  {
    id: 9,
    title: "AI and Cybersecurity: Protecting the Digital World",
    excerpt: "The role of AI in enhancing cybersecurity measures.",
    content: `
      <h2>AI in Threat Detection</h2>
      <p>AI systems can identify and respond to cyber threats faster than humans.</p>
      <h2>Challenges</h2>
      <p>Adversarial attacks and AI vulnerabilities.</p>
    `,
    author: authors[2],
    date: "2023-09-01",
    readingTime: "9 min read",
    category: "Security",
    tags: ["AI", "Cybersecurity", "Protection"],
    coverImage: "/images/ai-cybersecurity.png",
    slug: "ai-and-cybersecurity"
  },
  {
    id: 10,
    title: "AI in Education: Personalized Learning Experiences",
    excerpt: "How AI is transforming education through personalization.",
    content: `
      <h2>Personalized Learning</h2>
      <p>AI adapts educational content to individual student needs.</p>
      <h2>Tools and Platforms</h2>
      <p>Examples include intelligent tutoring systems and adaptive assessments.</p>
    `,
    author: authors[0],
    date: "2023-10-10",
    readingTime: "7 min read",
    category: "Education",
    tags: ["AI", "Education", "Personalization"],
    coverImage: "/images/ai-education.png",
    slug: "ai-in-education"
  },
  {
    id: 11,
    title: "AI and the Environment: Opportunities for Sustainability",
    excerpt: "Leveraging AI to address environmental challenges.",
    content: `
      <h2>AI for Climate Change</h2>
      <p>Predictive models and resource optimization.</p>
      <h2>Smart Cities</h2>
      <p>AI-driven solutions for energy efficiency and waste management.</p>
    `,
    author: authors[1],
    date: "2023-11-20",
    readingTime: "8 min read",
    category: "Environment",
    tags: ["AI", "Environment", "Sustainability"],
    coverImage: "/images/ai-environment.png",
    slug: "ai-and-the-environment"
  },
  {
    id: 12,
    title: "The Ultimate Guide to AI Marketing Tools: Transform Your Digital Strategy in 2024",
    excerpt: "Discover how AI marketing tools are revolutionizing digital campaigns. From content creation to customer analytics, explore the best AI solutions for modern marketers.",
    content: `
      <h2>Introduction: The AI Marketing Revolution</h2>
      <p>Artificial Intelligence has fundamentally transformed the marketing landscape, offering unprecedented opportunities for personalization, automation, and data-driven decision making. In this comprehensive guide, we'll explore the most powerful AI marketing tools that are helping businesses achieve remarkable results.</p>

      <h2>Content Creation and Copywriting AI Tools</h2>
      <p>One of the most significant impacts of AI in marketing is in content creation. Tools like <a href="/tools/copy-ai">Copy.ai</a> have revolutionized how marketers approach copywriting, enabling the creation of compelling ad copy, email campaigns, and social media content at scale.</p>
      
      <p>For video content creation, <a href="/tools/synthesia">Synthesia</a> offers groundbreaking AI video generation capabilities, allowing marketers to create professional videos without expensive production costs. Similarly, <a href="/tools/descript">Descript</a> provides comprehensive video editing and transcription services powered by AI.</p>

      <h2>Design and Visual Content Tools</h2>
      <p>Visual content remains crucial for marketing success. <a href="/tools/canva">Canva</a> has integrated AI features that help create stunning graphics, while <a href="/tools/midjourney">Midjourney</a> enables the generation of unique, high-quality images for marketing campaigns.</p>

      <p>For more specialized design needs, <a href="/tools/adobe-firefly">Adobe Firefly</a> offers advanced AI-powered creative tools that integrate seamlessly with existing Adobe workflows.</p>

      <h2>Customer Analytics and Insights</h2>
      <p>Understanding your audience is critical for marketing success. <a href="/tools/mixpanel">Mixpanel</a> provides AI-driven analytics that help marketers understand user behavior and optimize their campaigns accordingly.</p>

      <p>For social media management and analytics, <a href="/tools/hootsuite">Hootsuite</a> offers comprehensive AI-powered insights that help optimize posting schedules and content performance.</p>

      <h2>Email Marketing Automation</h2>
      <p>Email marketing remains one of the highest ROI marketing channels. <a href="/tools/mailchimp">Mailchimp</a> has integrated AI features for email optimization, while <a href="/tools/klaviyo">Klaviyo</a> offers advanced AI-driven personalization for e-commerce businesses.</p>

      <h2>SEO and Content Optimization</h2>
      <p>Search engine optimization is essential for digital marketing success. <a href="/tools/semrush">SEMrush</a> provides AI-powered SEO insights, while <a href="/tools/surfer-seo">Surfer SEO</a> offers content optimization recommendations based on AI analysis.</p>

      <p>For content research and optimization, <a href="/tools/buzzsumo">BuzzSumo</a> helps identify trending topics and content opportunities using AI-driven analytics.</p>

      <h2>Chatbots and Customer Service</h2>
      <p>AI-powered customer service tools are transforming how businesses interact with their customers. <a href="/tools/intercom">Intercom</a> offers intelligent chatbot solutions, while <a href="/tools/zendesk">Zendesk</a> provides AI-enhanced customer support capabilities.</p>

      <h2>Implementation Strategy</h2>
      <p>Successfully implementing AI marketing tools requires a strategic approach:</p>
      <ul>
        <li>Start with one or two tools that address your biggest pain points</li>
        <li>Ensure proper data integration across your marketing stack</li>
        <li>Train your team on new AI capabilities</li>
        <li>Continuously monitor and optimize AI-driven campaigns</li>
      </ul>

      <h2>Conclusion</h2>
      <p>AI marketing tools are no longer optional—they're essential for staying competitive in today's digital landscape. By leveraging these powerful solutions, marketers can achieve better results, improve efficiency, and create more personalized customer experiences.</p>
    `,
    author: authors[0],
    date: "2024-03-15",
    readingTime: "12 min read",
    category: "AI Marketing",
    tags: ["AI", "Marketing", "Digital Strategy", "Automation"],
    coverImage: "/lovable-uploads/0b1649a8-b70f-4dfd-8fb8-32e49632912f.png",
    slug: "ultimate-guide-ai-marketing-tools-2024"
  },
  {
    id: 13,
    title: "AI Data Analysis Tools: Unleashing the Power of Intelligent Analytics",
    excerpt: "Explore cutting-edge AI data analysis tools that transform raw data into actionable insights. Perfect for businesses looking to make data-driven decisions.",
    content: `
      <h2>The Data Revolution: Why AI Analytics Matter</h2>
      <p>In today's data-driven world, the ability to quickly analyze and extract insights from vast amounts of information is crucial for business success. AI-powered data analysis tools are transforming how organizations approach analytics, making complex data science accessible to everyone.</p>

      <h2>Business Intelligence and Visualization</h2>
      <p><a href="/tools/tableau">Tableau</a> leads the pack in AI-enhanced data visualization, offering intelligent recommendations and automated insights that help users discover patterns in their data. Its natural language processing capabilities allow users to ask questions about their data in plain English.</p>

      <p>For comprehensive business intelligence, <a href="/tools/power-bi">Microsoft Power BI</a> integrates AI capabilities that automatically detect anomalies and suggest relevant visualizations based on your data structure.</p>

      <h2>Advanced Analytics and Machine Learning</h2>
      <p><a href="/tools/dataiku">Dataiku</a> provides a collaborative data science platform that makes machine learning accessible to both technical and non-technical users. Its AI-assisted features help automate model building and deployment.</p>

      <p>For organizations looking for cloud-based solutions, <a href="/tools/aws-sagemaker">AWS SageMaker</a> offers a fully managed machine learning service that simplifies the process of building, training, and deploying ML models.</p>

      <h2>Real-time Analytics and Monitoring</h2>
      <p>Real-time data processing is crucial for modern businesses. <a href="/tools/databricks">Databricks</a> provides a unified analytics platform that combines data engineering, data science, and machine learning in a collaborative environment.</p>

      <p>For application performance monitoring with AI insights, <a href="/tools/datadog">Datadog</a> offers intelligent alerting and anomaly detection that helps teams identify issues before they impact users.</p>

      <h2>Customer Analytics and Personalization</h2>
      <p>Understanding customer behavior is essential for business growth. <a href="/tools/amplitude">Amplitude</a> provides AI-powered product analytics that help teams understand user journeys and optimize experiences.</p>

      <p>For e-commerce businesses, <a href="/tools/google-analytics">Google Analytics 4</a> includes machine learning capabilities that provide predictive insights about customer behavior and lifetime value.</p>

      <h2>Data Preparation and Cleaning</h2>
      <p>Clean data is the foundation of good analysis. <a href="/tools/trifacta">Trifacta</a> uses machine learning to suggest data cleaning and transformation steps, dramatically reducing the time spent on data preparation.</p>

      <p>For automated data quality monitoring, <a href="/tools/great-expectations">Great Expectations</a> helps ensure data reliability through AI-powered validation and testing.</p>

      <h2>Natural Language Processing for Data</h2>
      <p>Making data accessible through natural language is a game-changer. <a href="/tools/thoughtspot">ThoughtSpot</a> allows users to search their data using natural language queries, making analytics accessible to everyone in the organization.</p>

      <h2>Best Practices for AI Data Analysis</h2>
      <ul>
        <li>Start with clean, well-structured data</li>
        <li>Define clear business objectives before choosing tools</li>
        <li>Ensure data governance and security protocols</li>
        <li>Train team members on new AI capabilities</li>
        <li>Regularly validate AI-generated insights</li>
      </ul>

      <h2>Future of AI in Data Analysis</h2>
      <p>As AI continues to evolve, we can expect even more sophisticated analysis capabilities, including automated insight generation, predictive modeling, and real-time decision support systems.</p>
    `,
    author: authors[1],
    date: "2024-03-10",
    readingTime: "10 min read",
    category: "Data Analytics",
    tags: ["AI", "Data Analysis", "Business Intelligence", "Machine Learning"],
    coverImage: "/lovable-uploads/88f30453-c4e9-4085-9fca-cb6abfa32573.png",
    slug: "ai-data-analysis-tools-intelligent-analytics"
  },
  {
    id: 14,
    title: "AI Content Creation and Educational Tools: Revolutionizing Learning and Knowledge Sharing",
    excerpt: "Discover how AI is transforming content creation and education. From automated writing to personalized learning experiences.",
    content: `
      <h2>The Educational AI Revolution</h2>
      <p>Artificial Intelligence is revolutionizing how we create content and approach education. From automated writing assistance to personalized learning experiences, AI tools are making high-quality content creation and education more accessible than ever before.</p>

      <h2>AI Writing and Content Generation</h2>
      <p><a href="/tools/jasper">Jasper AI</a> stands out as one of the most comprehensive AI writing platforms, offering specialized templates for various content types including blog posts, marketing copy, and educational materials.</p>

      <p>For academic and research writing, <a href="/tools/grammarly">Grammarly</a> provides AI-powered writing assistance that goes beyond grammar checking to offer style and clarity suggestions, making it invaluable for educators and students alike.</p>

      <p><a href="/tools/notion-ai">Notion AI</a> integrates seamlessly into the popular productivity platform, offering AI-powered content generation and organization features that are perfect for creating educational resources and course materials.</p>

      <h2>Language Learning and Translation</h2>
      <p>Language education has been transformed by AI. <a href="/tools/duolingo">Duolingo</a> uses adaptive AI to personalize language learning experiences, while <a href="/tools/babbel">Babbel</a> offers conversation practice with AI tutors.</p>

      <p>For professional translation needs, <a href="/tools/deepl">DeepL</a> provides highly accurate AI translation that maintains context and nuance, making it valuable for educational content localization.</p>

      <h2>Video Creation and Educational Media</h2>
      <p>Video content is crucial for modern education. <a href="/tools/loom">Loom</a> offers AI-powered video creation and editing features that make it easy for educators to create engaging instructional content.</p>

      <p>For more advanced video production, <a href="/tools/pictory">Pictory</a> uses AI to transform text content into engaging videos, perfect for creating educational materials from existing written content.</p>

      <h2>Research and Knowledge Management</h2>
      <p>AI is revolutionizing research processes. <a href="/tools/perplexity">Perplexity AI</a> provides AI-powered research assistance with source citations, making it valuable for academic research and fact-checking.</p>

      <p>For organizing and connecting knowledge, <a href="/tools/obsidian">Obsidian</a> offers AI-enhanced note-taking and knowledge graph features that help researchers and students visualize connections between concepts.</p>

      <h2>Personalized Learning Platforms</h2>
      <p><a href="/tools/khan-academy">Khan Academy</a> has integrated AI to provide personalized learning paths and adaptive practice exercises that adjust to individual student needs.</p>

      <p>For professional skill development, <a href="/tools/coursera">Coursera</a> uses AI to recommend courses and create personalized learning experiences based on career goals and interests.</p>

      <h2>Assessment and Feedback Tools</h2>
      <p>AI-powered assessment tools are changing how we evaluate learning. <a href="/tools/turnitin">Turnitin</a> now includes AI detection capabilities alongside its plagiarism checking, while <a href="/tools/gradescope">Gradescope</a> uses AI to streamline grading and provide consistent feedback.</p>

      <h2>Content Curation and Discovery</h2>
      <p>Finding relevant educational content is easier with AI. <a href="/tools/pocket">Pocket</a> uses AI to recommend articles and resources based on reading history and interests.</p>

      <h2>Implementation Strategies for Educators</h2>
      <ul>
        <li>Start with one AI tool that addresses a specific need</li>
        <li>Provide training for educators on AI capabilities and limitations</li>
        <li>Establish guidelines for ethical AI use in education</li>
        <li>Regularly evaluate the effectiveness of AI tools</li>
        <li>Maintain human oversight in AI-generated content</li>
      </ul>

      <h2>The Future of AI in Education</h2>
      <p>As AI technology continues to advance, we can expect even more sophisticated educational tools that provide hyper-personalized learning experiences, real-time feedback, and adaptive curriculum design.</p>
    `,
    author: authors[2],
    date: "2024-03-05",
    readingTime: "11 min read",
    category: "Education",
    tags: ["AI", "Education", "Content Creation", "E-learning"],
    coverImage: "/lovable-uploads/e7d72d2c-ed33-4be9-b2cb-f9ed5c8077bb.png",
    slug: "ai-content-creation-educational-tools"
  },
  {
    id: 15,
    title: "AI Automation and Collaboration Tools: Streamlining Workflows for Maximum Productivity",
    excerpt: "Explore how AI-powered automation and collaboration tools are transforming workplace productivity and team efficiency.",
    content: `
      <h2>The Automation Advantage</h2>
      <p>In today's fast-paced business environment, automation isn't just a luxury—it's a necessity. AI-powered automation and collaboration tools are helping teams work smarter, not harder, by eliminating repetitive tasks and enhancing communication.</p>

      <h2>Workflow Automation Platforms</h2>
      <p><a href="/tools/zapier">Zapier</a> leads the automation space by connecting thousands of apps and services, enabling complex workflows without coding. Its AI-powered suggestions help users discover automation opportunities they might have missed.</p>

      <p>For more advanced automation needs, <a href="/tools/microsoft-power-automate">Microsoft Power Automate</a> provides enterprise-grade workflow automation with AI capabilities for document processing and decision-making.</p>

      <p><a href="/tools/integromat">Make (formerly Integromat)</a> offers visual workflow building with advanced data manipulation capabilities, perfect for complex business process automation.</p>

      <h2>AI-Enhanced Communication Tools</h2>
      <p>Modern collaboration relies on intelligent communication. <a href="/tools/slack">Slack</a> has integrated AI features for message summaries, thread insights, and automated responses that help teams stay organized and productive.</p>

      <p><a href="/tools/microsoft-teams">Microsoft Teams</a> leverages AI for meeting transcription, real-time translation, and intelligent content suggestions that enhance collaboration across global teams.</p>

      <h2>Project Management and Planning</h2>
      <p><a href="/tools/monday">Monday.com</a> uses AI to predict project timelines, identify bottlenecks, and suggest resource allocation improvements, making project management more efficient and accurate.</p>

      <p>For agile teams, <a href="/tools/jira">Jira</a> offers AI-powered insights for sprint planning, bug prediction, and automated task assignment based on team capacity and expertise.</p>

      <p><a href="/tools/asana">Asana</a> provides intelligent project insights and automated workflow suggestions that help teams optimize their processes and meet deadlines consistently.</p>

      <h2>Document Management and Knowledge Sharing</h2>
      <p>Efficient document handling is crucial for productivity. <a href="/tools/google-workspace">Google Workspace</a> includes AI features for smart document suggestions, automated formatting, and intelligent search across all files.</p>

      <p><a href="/tools/confluence">Confluence</a> offers AI-powered content recommendations and automated page organization that helps teams maintain up-to-date knowledge bases.</p>

      <h2>Customer Relationship Management</h2>
      <p>AI is transforming CRM systems. <a href="/tools/salesforce">Salesforce</a> Einstein provides predictive analytics, automated lead scoring, and intelligent opportunity insights that help sales teams close more deals.</p>

      <p><a href="/tools/hubspot">HubSpot</a> offers AI-powered contact management, email automation, and performance analytics that streamline marketing and sales processes.</p>

      <h2>Time Management and Scheduling</h2>
      <p>Smart scheduling tools are eliminating coordination headaches. <a href="/tools/calendly">Calendly</a> uses AI to optimize meeting scheduling and reduce conflicts, while <a href="/tools/clockify">Clockify</a> provides intelligent time tracking insights.</p>

      <h2>Code Review and Development Automation</h2>
      <p>For development teams, <a href="/tools/github">GitHub</a> Copilot provides AI-powered code suggestions and automated code review capabilities that accelerate development cycles.</p>

      <p><a href="/tools/gitlab">GitLab</a> offers comprehensive DevOps automation with AI-enhanced security scanning and deployment optimization.</p>

      <h2>Email and Communication Automation</h2>
      <p><a href="/tools/gmail">Gmail</a> includes smart compose and reply features that save time on email communication, while <a href="/tools/boomerang">Boomerang</a> provides AI-powered email scheduling and follow-up automation.</p>

      <h2>Best Practices for AI Automation Implementation</h2>
      <ul>
        <li>Identify repetitive tasks that consume significant time</li>
        <li>Start with simple automations before building complex workflows</li>
        <li>Ensure proper data security and access controls</li>
        <li>Train team members on new automation capabilities</li>
        <li>Regularly review and optimize automated processes</li>
        <li>Maintain human oversight for critical decisions</li>
      </ul>

      <h2>Measuring Automation Success</h2>
      <p>Track key metrics such as time saved, error reduction, and team productivity to measure the impact of your AI automation initiatives. Regular assessment ensures you're maximizing the value of these powerful tools.</p>

      <h2>The Future of Workplace Automation</h2>
      <p>As AI technology continues to evolve, we can expect even more sophisticated automation capabilities, including predictive workflow optimization, intelligent resource allocation, and seamless cross-platform integration.</p>
    `,
    author: authors[0],
    date: "2024-02-28",
    readingTime: "13 min read",
    category: "Productivity",
    tags: ["AI", "Automation", "Collaboration", "Productivity", "Workflow"],
    coverImage: "/lovable-uploads/0b1649a8-b70f-4dfd-8fb8-32e49632912f.png",
    slug: "ai-automation-collaboration-tools-productivity"
  }
];

// Keep the old export for backward compatibility
export const blogData = blogPosts;
