import React, { useState, useMemo } from 'react';

// Sample blog posts with featured images
const blogPosts = [
  {
    id: 1,
    title: "Building FEiOS: My AI Operating System Journey",
    excerpt: "How I built a personal AI assistant from scratch on Linux Mint using Python, React, and Ollama. The journey from idea to working system.",
    date: "August 5, 2026",
    category: "AI Development",
    tags: ["AI", "Python", "Linux", "Ollama", "React"],
    readTime: "5 min read",
    featuredImage: "🚀",
    content: `Building FEiOS was born from a simple idea: what if I could have an AI assistant that truly understands my projects?

After months of development, FEiOS can now:
- Manage projects and track tasks
- Generate React components from natural language
- Run terminal commands safely
- Commit changes to Git
- Remember everything about your projects

The system is built with a deterministic Python orchestrator that coordinates modular skills. The LLM generates, but Python decides.

This project taught me so much about system architecture, AI integration, and building tools that actually help developers work better.`
  },
  {
    id: 2,
    title: "From Zero to Portfolio: My React Journey",
    excerpt: "Building a modern developer portfolio with React, Tailwind CSS, and dark mode support. A complete guide to my development process.",
    date: "August 4, 2026",
    category: "Web Development",
    tags: ["React", "Tailwind CSS", "JavaScript", "Portfolio", "Frontend"],
    readTime: "4 min read",
    featuredImage: "⚛️",
    content: `I built this portfolio to showcase my work and skills. The key features include:
- Dark mode toggle with persistent state
- Project showcase with GitHub links
- Contact form with WhatsApp integration
- SEO optimization for Google search
- Full blog system with search and tags

The stack: React for the UI, Tailwind CSS for styling, and GitHub Pages for hosting.

I learned a lot about React hooks, state management, and deploying to GitHub Pages.`
  },
  {
    id: 3,
    title: "AI-Powered Trading: The Future of Forex",
    excerpt: "Exploring how AI and machine learning can revolutionize forex trading strategies and decision-making.",
    date: "August 3, 2026",
    category: "Trading",
    tags: ["AI", "Trading", "Forex", "Machine Learning", "Finance"],
    readTime: "6 min read",
    featuredImage: "📊",
    content: `Forex trading is evolving. With AI, we can analyze market patterns faster and make more informed decisions.

Key areas I'm exploring:
- Technical analysis automation
- Sentiment analysis from news
- Strategy backtesting
- Risk management optimization

The goal is to build an AI-powered trading assistant that helps traders make better decisions.

Machine learning models can identify patterns that humans might miss, leading to better trading strategies.`
  },
  {
    id: 4,
    title: "Linux Mint: My Development Environment",
    excerpt: "Why Linux Mint is my preferred OS for development and how I set it up for maximum productivity.",
    date: "August 2, 2026",
    category: "Linux",
    tags: ["Linux", "Development", "Productivity", "Terminal", "Setup"],
    readTime: "3 min read",
    featuredImage: "🐧",
    content: `Linux Mint has been my development environment of choice for years. Here's why:
- Stable and reliable
- Great for Python development
- Excellent terminal and scripting support
- Lightweight and fast

My setup includes Python, Node.js, Docker, Ollama for AI, and of course, FEiOS.

I've customized my terminal with aliases, custom prompts, and useful scripts to make development faster.`
  },
  {
    id: 5,
    title: "Getting Started with React Hooks",
    excerpt: "A beginner-friendly guide to React Hooks: useState, useEffect, useContext, and more.",
    date: "August 1, 2026",
    category: "Web Development",
    tags: ["React", "Hooks", "JavaScript", "Tutorial", "Frontend"],
    readTime: "7 min read",
    featuredImage: "🎣",
    content: `React Hooks revolutionized how we write React components. Here's a quick guide:

useState - Manage state in functional components
useEffect - Handle side effects like API calls
useContext - Access context without prop drilling
useReducer - Manage complex state logic

Hooks make React components cleaner and more reusable. They're essential for modern React development.`
  }
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTag, setActiveTag] = useState(null);

  // Get all unique categories
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  
  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set();
    blogPosts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags);
  }, []);

  // Get related posts (same category or tags)
  const getRelatedPosts = (currentPost) => {
    return blogPosts
      .filter(post => 
        post.id !== currentPost.id && 
        (post.category === currentPost.category || 
         post.tags.some(tag => currentPost.tags.includes(tag)))
      )
      .slice(0, 3);
  };

  // Filter posts based on category, search, and tags
  const filteredPosts = useMemo(() => {
    let posts = blogPosts;

    // Filter by category
    if (activeCategory !== 'All') {
      posts = posts.filter(post => post.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase().trim();
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        post.content.toLowerCase().includes(term) ||
        post.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }

    // Filter by tag
    if (activeTag) {
      posts = posts.filter(post => post.tags.includes(activeTag));
    }

    return posts;
  }, [activeCategory, searchTerm, activeTag]);

  // Handle tag click
  const handleTagClick = (tag) => {
    setActiveTag(activeTag === tag ? null : tag);
  };

  // Clear all filters
  const clearFilters = () => {
    setActiveCategory('All');
    setSearchTerm('');
    setActiveTag(null);
  };

  // Render full post
  if (selectedPost) {
    const relatedPosts = getRelatedPosts(selectedPost);
    
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
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                {selectedPost.category}
              </span>
              <span>{selectedPost.date}</span>
              <span>{selectedPost.readTime}</span>
              <span className="text-2xl">{selectedPost.featuredImage}</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
              {selectedPost.title}
            </h1>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedPost.tags.map(tag => (
                <span 
                  key={tag}
                  onClick={() => { setSelectedPost(null); handleTagClick(tag); }}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-600 transition"
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {selectedPost.content.split('\n').map((paragraph, i) => (
                <p key={i} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          {/* Comments Section */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              💬 Comments
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Comments are powered by GitHub Issues. Leave a comment on the GitHub discussion.
            </p>
            <a 
              href="https://github.com/feisalbarreh-dotcom/devportfolio/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
            >
              View Comments on GitHub →
            </a>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                📚 Related Posts
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map(post => (
                  <div 
                    key={post.id}
                    onClick={() => setSelectedPost(post)}
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg cursor-pointer hover:shadow-lg transition"
                  >
                    <span className="text-2xl mr-2">{post.featuredImage}</span>
                    <h4 className="font-semibold text-gray-800 dark:text-white hover:text-blue-600">
                      {post.title}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  // Render blog list
  return (
    <section id="blog" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
          📝 My Blog
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Insights, tutorials, and thoughts on AI, development, and technology.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="🔍 Search posts by title, tag, or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 dark:text-gray-400"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
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

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                activeTag === tag
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-purple-100 dark:hover:bg-gray-600'
              }`}
            >
              #{tag}
            </button>
          ))}
          {activeTag && (
            <button
              onClick={clearFilters}
              className="px-3 py-1 text-xs text-red-500 hover:text-red-700"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Results Count */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-6">
          {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
        </p>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {filteredPosts.map(post => (
              <article 
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3 flex-wrap">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                    <span className="text-2xl">{post.featuredImage}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {post.tags.slice(0, 3).map(tag => (
                      <span 
                        key={tag}
                        onClick={(e) => { e.stopPropagation(); handleTagClick(tag); }}
                        className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full hover:bg-purple-100 dark:hover:bg-gray-600 transition"
                      >
                        #{tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="text-xs text-gray-400">+{post.tags.length - 3}</span>
                    )}
                  </div>
                  <span className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                    Read more →
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No posts found. Try adjusting your search or filters.
            </p>
            <button
              onClick={clearFilters}
              className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
