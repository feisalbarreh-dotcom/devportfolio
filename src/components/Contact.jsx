import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    
    try {
      // Using Formspree - replace with your endpoint
      const response = await fetch('https://formspree.io/f/xrpzzdlw', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError(true);
        setTimeout(() => setError(false), 5000);
      }
    } catch (e) {
      setError(true);
      setTimeout(() => setError(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
          📬 Contact Me
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Let's build something amazing together. Reach out for collaborations, projects, or just to say hello!
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* WhatsApp Card */}
          <a 
            href="https://wa.me/254718242965?text=Hi%20Feisal%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 bg-green-500 hover:bg-green-600 text-white rounded-xl shadow-lg transition transform hover:-translate-y-1"
          >
            <span className="text-2xl">💬</span>
            <span className="font-semibold">WhatsApp Me</span>
            <span className="text-sm opacity-90">(+254) 718 242 965</span>
          </a>

          {/* Email Card */}
          <a 
            href="mailto:feisalbarreh@gmail.com?subject=Portfolio%20Inquiry"
            className="flex items-center justify-center gap-3 p-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-lg transition transform hover:-translate-y-1"
          >
            <span className="text-2xl">📧</span>
            <span className="font-semibold">Send Email</span>
            <span className="text-sm opacity-90">feisalbarreh@gmail.com</span>
          </a>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 md:p-8">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
            Or Send a Message
          </h3>

          {submitted ? (
            <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-4 rounded-lg text-center">
              ✅ Thank you! Your message has been sent. I'll get back to you within 24 hours.
            </div>
          ) : error ? (
            <div className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 p-4 rounded-lg text-center">
              ❌ Something went wrong. Please try again or reach out via WhatsApp or Email.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                  Your Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project, idea, or question..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition transform hover:-translate-y-1 shadow-lg"
              >
                🚀 Send Message
              </button>

              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                I typically respond within 24 hours. For urgent matters, reach out via WhatsApp.
              </p>
            </form>
          )}
        </div>

        {/* Direct Contact Info */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>📞 <a href="tel:+254718242965" className="hover:text-blue-600">(+254) 718 242 965</a></p>
          <p>📧 <a href="mailto:feisalbarreh@gmail.com" className="hover:text-blue-600">feisalbarreh@gmail.com</a></p>
          <p className="mt-2">📍 Nairobi, Kenya | 🌍 Available Worldwide</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
