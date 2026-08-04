import React, { useState } from 'react';

// Sample blog posts - you can add more
const blogPosts = [
  {
    id: 1,
    title: "Building FEiOS: My AI Operating System Journey",
    excerpt: "How I built a personal AI assistant from scratch on Linux Mint using Python, React, and Ollama...",
    date: "August 5, 2026",
    category: "AI Development",
    readTime: "5 min read",
    content: `Building FEiOS was born from a simple idea: what if I could have an AI assistant that truly understands my projects?

After months of development, FEiOS can now:
- Manage projects and track tasks
- Generate React components from natural language
- Run terminal commands safely
- Commit changes to Git
- Remember everything about your projects

The system is built with a deterministic Python orchestrator that coordinates modular skills. The LLM generates, but Python decides.`
  },
  {
    id: 2,
    title: "From Zero to Portfolio: My React Journey",
    excerpt: "Building a modern developer portfolio with React, Tailwind CSS, and dark mode support...",
    date: "August 4, 2026",
    category: "Web Development",
    readTime: "4 min read",
    content: `I built this portfolio to showcase my work and skills. The key features include:
- Dark mode toggle with persistent state
- Project showcase with GitHub links
- Contact form with WhatsApp integration
- SEO optimization for Google search

The stack: React for the UI, Tailwind CSS for styling, and GitHub Pages for hosting.`
  },
  {
    id: 3,
    title: "AI-Powered Trading: The Future of Forex",
    excerpt: "Exploring how AI and machine learning can revolutionize forex trading strategies...",
    date: "August 3, 2026",
    category: "Trading",
    readTime: "6 min read",
    content: `Forex trading is evolving. With AI, we can analyze market patterns faster and make more informed decisions.

Key areas I'm exploring:
- Technical analysis automation
- Sentiment analysis from news
- Strategy backtesting
- Risk management optimization

The goal is to build an AI-powered trading assistant that helps traders make better decisions.`
  },
  {
    id: 4,
    title: "Linux Mint: My Development Environment",
    excerpt: "Why Linux Mint is my preferred OS for development and how I set it up for productivity...",
    date: "August 2, 2026",
    category: "Linux",
    readTime: "3 min read",
    content: `Linux Mint has been my development environment of choice for years. Here's why:
- Stable and reliable
- Great for Python development
- Excellent terminal and scripting support
- Lightweight and fast

My setup includes Python, Node.js, Docker, Ollama for AI, and of course, FEiOS.`
  }
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  if (selectedPost) {
    return (
      <section className="py-16 bg-white dark:bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <button 
            onClick={() => setSelectedPost(null)}
            className="mb-6 text-blue-600 dark:text-blue-400 hover:underline flex items-center"
          >
            ← Back to all posts
          </button>
          <article>
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                {selectedPost.category}
              </span>
              <span>{selectedPost.date}</span>
              <span>{selectedPost.readTime}</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
              {selectedPost.title}
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {selectedPost.content.split('\n').map((paragraph, i) => (
                <p key={i} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
          📝 My Blog
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Insights, tutorials, and thoughts on AI, development, and technology.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredPosts.map(post => (
            <article 
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <span className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                  Read more →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
