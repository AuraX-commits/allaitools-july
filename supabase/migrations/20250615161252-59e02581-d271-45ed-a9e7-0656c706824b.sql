
-- Insert "Veo3.io"
INSERT INTO public.ai_tools (
  id, name, description, shortdescription, url, logo, category, pricing, rating, reviewcount, features, apiaccess, pros, cons, usecases
) VALUES (
  '627e9c69-2475-4182-9fb3-11adf844e41c',
  'Veo3.io',
  'Website Introduction: VEO3 is a new generation of AI intelligent video creation platform, providing enterprises and individuals with zero-threshold efficient video solutions. Through natural language input, you can automatically generate scripts, match millions of high-definition resources in the material library, and output marketing videos, product explanations and short video content suitable for multiple scenarios in 3 minutes. Core highlights: (1) Original "text to video" engine, intelligent analysis of semantic recommendation pictures. (2) Built-in 1000+ industry templates, support brand-exclusive visual customization. (3) Full-process AI optimization, from speech synthesis to intelligent camera movement, one-click completion. (4) Support 4K ultra-clear export and multi-platform format presets. Featured functions: Real-time collaborative editing, team online annotation. Intelligent copyright detection to avoid risks. Data dashboard to track video dissemination effects. Whether it is e-commerce live broadcast, education and training or social media operation, VEO3 uses AI technology to reduce video production costs by 80%, allowing creativity to quickly transform into high-quality visual assets. Experience it now and start a new era of efficient content production!',
  'Powered by Google Veo 3 AI, veo3.io generates cinematic videos from text or images in seconds. Create Hollywood-quality videos with next-gen Video AI. Try free now!',
  'https://www.veo3.io/',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5', -- Placeholder image
  ARRAY['Video Generation'],
  'Freemium',
  5, 0,
  ARRAY['Text-to-video generation', '4K export', 'Script generation', 'AI scene suggestion', 'Brand customization', 'Real-time editing'],
  FALSE,
  ARRAY['Easy video creation with text prompts','Extensive template library','Fast production'],
  ARRAY['May require human editing for nuance','Limited for advanced studio needs'],
  ARRAY['Create marketing videos','Product explainers','Social media content']
);

-- Insert "Nlevel.ai"
INSERT INTO public.ai_tools (
  id, name, description, shortdescription, url, logo, category, pricing, rating, reviewcount, features, apiaccess, pros, cons, usecases
) VALUES (
  '91337ae8-f4da-4bc3-a5d5-8153cb4e65f8',
  'Nlevel.ai',
  'Nlevel.ai is a web platform that allows users to generate 3D models and 2D images using AI by entering text prompts. The site supports natural language input, so users can describe what they want without needing technical knowledge. It includes a prompt assist feature that helps improve and expand prompts for better results. Users who don’t have a specific idea in mind can use a random generation button to create a starting point. Once a model is generated, it can be directly modified and customized through the interface. Users can make multiple iterations of a model to fine-tune details and reach a final version that matches their vision.',
  'Nlevel.ai is a web tool that uses AI to create 3D models and 2D images from text. It includes prompt assist, random generation, and direct model editing.',
  'https://nlevel.ai/',
  'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7', -- Placeholder image
  ARRAY['Image Generation'],
  'Freemium',
  5, 0,
  ARRAY['Text-to-3D generation','Prompt assist','Direct model editing','Random generation'],
  FALSE,
  ARRAY['Enables rapid prototyping of 3D assets','No technical expertise required'],
  ARRAY['Model editing interface has a learning curve','Limited free assets'],
  ARRAY['Generate concept 3D assets','Create unique images from prompts']
);

-- Insert "Purecode AI"
INSERT INTO public.ai_tools (
  id, name, description, shortdescription, url, logo, category, pricing, rating, reviewcount, features, apiaccess, pros, cons, usecases
) VALUES (
  '499c18bf-066d-47a1-9c07-b1ea7c76035d',
  'Purecode AI',
  'PureCode AI helps you speed up front-end development by generating and customizing UI components using AI. Whether you''re building a dashboard with Tailwind, designing forms with Material UI, or working with plain CSS, PureCode AI integrates seamlessly into your workflow through a VS Code extension. Just describe what you need—like a responsive login page or a styled navbar—and the tool generates production-ready code based on your existing project setup. You can quickly edit multiple files, understand how changes impact your codebase, and switch between normal or agent modes depending on how hands-on you want to be. It’s perfect if you''re racing to meet a deadline, prototyping a new feature, or just looking to skip repetitive UI coding tasks.',
  'AI coding agent for VS code that understands context across your entire project.',
  'https://purecode.ai/',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6', -- Placeholder image
  ARRAY['Design'],
  'Paid',
  5, 0,
  ARRAY['Generates UI code','Integrates with VS Code','Tailwind/Material UI/CSS support','Contextual editing'],
  FALSE,
  ARRAY['Accelerates UI development','Supports multiple frameworks','Context-aware output'],
  ARRAY['Requires specifications for best results','Paid product'],
  ARRAY['Build web dashboards','Prototype new UI components','Edit multi-file projects quickly']
);

-- Insert "Best Name Generator"
INSERT INTO public.ai_tools (
  id, name, description, shortdescription, url, logo, category, pricing, rating, reviewcount, features, apiaccess, pros, cons, usecases
) VALUES (
  'ff37e360-33e6-4f47-8c98-3670a1d3c523',
  'Best Name Generator',
  'Meet the best name generator online! Create unique and meaningful names instantly with our free AI tool. Unlimited uses, no signup required. Generate perfect names for your project today!',
  'Meet the best name generator online! Create unique and meaningful names instantly with our free AI tool. Unlimited uses, no signup required. Generate perfect names for your project today!',
  'https://www.bestnamegenerators.com/',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158', -- Placeholder image
  ARRAY['Text Generation'],
  'Free',
  5, 0,
  ARRAY['Unlimited naming','AI-generated','No signup required'],
  FALSE,
  ARRAY['Instant and free','No account needed'],
  ARRAY['Limited control over generated names'],
  ARRAY['Business/project name brainstorming','Personal nickname creation']
);

-- Insert "Notetify AI"
INSERT INTO public.ai_tools (
  id, name, description, shortdescription, url, logo, category, pricing, rating, reviewcount, features, apiaccess, pros, cons, usecases
) VALUES (
  '4157da1f-5503-49fc-a0a1-299c476f7ac9',
  'Notetify AI',
  'Notetify AI uses AI to auto-generate detailed, readable study notes. Input your subject, text or images, and the tool produces well-formatted notes customized to your grade, preference, and tone. OCR support turns photos of textbooks into notes. All notes are organized in a personal dashboard and can be filtered and downloaded.',
  'Tired of wasting time making study notes? Try Notetify AI, AI-powered notes generator for students and educators. Just fill out the form, then generate notes instantly. It''s also completely free!',
  'https://notetifyai.vercel.app/',
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b', -- Placeholder image
  ARRAY['Education'],
  'Free',
  5, 0,
  ARRAY['AI note generation','Customization: curriculum, tone, grade','OCR support','Dashboard'],
  FALSE,
  ARRAY['Creates readable notes from any input','Useful for multiple subjects','Free to use'],
  ARRAY['AI output may need review for accuracy','Limited advanced formatting'],
  ARRAY['Exam/test preparation','Turning notes/screenshots into study materials']
);

-- Insert "Vidnoz Gen"
INSERT INTO public.ai_tools (
  id, name, description, shortdescription, url, logo, category, pricing, rating, reviewcount, features, apiaccess, pros, cons, usecases
) VALUES (
  '86d9743d-ce06-49c0-9d3a-fd8f93b0bbdd',
  'Vidnoz Gen',
  'Vidnoz Gen including Image to Video, Text to Video, Kissing Video, Photo Dance, and Video Face Swap. Create with a suite of AI-powered media tools.',
  'Vidnoz Gen - AI tool suite for Image and Video Creation',
  'https://www.vidnoz.com/vidnoz-gen-home.html?a_aid=682efad8d4573',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5', -- Placeholder image
  ARRAY['Image Generation'],
  'Freemium',
  5, 0,
  ARRAY['Image-to-video','Text-to-video','Face Swap','Photo Dance'],
  FALSE,
  ARRAY['Versatile media creation suite','Combines several AI tools'],
  ARRAY['May require credits or payment for advanced results','Output quality depends on input'],
  ARRAY['Social content creation','Entertainment','Marketing media']
);

-- Insert "Vidnoz AI Video Translator"
INSERT INTO public.ai_tools (
  id, name, description, shortdescription, url, logo, category, pricing, rating, reviewcount, features, apiaccess, pros, cons, usecases
) VALUES (
  '07e0f94f-565d-43d0-aa4e-81808ce229c5',
  'Vidnoz AI Video Translator',
  'Effortlessly translate your videos into 140+ languages using AI-powered voice cloning that preserves natural speaking styles.',
  'Free Vidnoz AI Video Translator',
  'https://www.vidnoz.com/video-translate.html?a_aid=682efad8d4573',
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b', -- Placeholder image
  ARRAY['Video Generation'],
  'Freemium',
  5, 0,
  ARRAY['AI video translation','Voice cloning','140+ language support'],
  FALSE,
  ARRAY['Makes video content multilingual','Natural style voice output'],
  ARRAY['Automated translation may require manual review for nuance'],
  ARRAY['Translate marketing videos','Help global audience understand your content']
);

-- Insert "Sisif.ai"
INSERT INTO public.ai_tools (
  id, name, description, shortdescription, url, logo, category, pricing, rating, reviewcount, features, apiaccess, pros, cons, usecases
) VALUES (
  '0fbe5aa5-ab98-438c-a311-076f69f61a5c',
  'Sisif.ai',
  'Create professional AI-generated videos from simple text prompts using our advanced text-to-video generator. No video editing skills required. Perfect for TikTok, Instagram, YouTube, social media marketing, and creative projects.',
  'AI Video Generator: Turn Text into Stunning Videos in Seconds',
  'https://sisif.ai/',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6', -- Placeholder image
  ARRAY['Video Generation'],
  'Freemium',
  5, 0,
  ARRAY['Text-to-video AI','No editing skills required','Social media ready formats'],
  FALSE,
  ARRAY['Simple and fast video creation','Good for creators and marketers'],
  ARRAY['Less customization than pro editing apps'],
  ARRAY['Social video production','Advertising','YouTube/TikTok content']
);
