import React from 'react';
import { Command, Search, Sparkles, Zap, Box, Users, Lock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <Command className="w-8 h-8" />
            <span className="font-bold text-xl">Raycast</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-gray-300">Features</a>
            <a href="#store" className="hover:text-gray-300">Store</a>
            <a href="#pricing" className="hover:text-gray-300">Pricing</a>
            <a href="#changelog" className="hover:text-gray-300">Changelog</a>
          </div>
          <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition">
            Download
          </button>
        </nav>

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Supercharge your productivity
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Raycast is a blazingly fast, totally extendable launcher. It lets you complete tasks, calculate, share common links, and much more.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition font-medium">
              Download for Mac
            </button>
            <button className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-900 transition">
              Browse Store
            </button>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-xl">
            <Search className="w-10 h-10 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Search Everything</h3>
            <p className="text-gray-400">Find what you need instantly with lightning-fast search.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl">
            <Sparkles className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">AI-Powered</h3>
            <p className="text-gray-400">Let AI help you write, analyze, and create faster than ever.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl">
            <Zap className="w-10 h-10 text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Quick Actions</h3>
            <p className="text-gray-400">Execute commands and automate tasks with keyboard shortcuts.</p>
          </div>
        </div>
      </section>

      {/* Store Section */}
      <section className="bg-gray-900 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Extensions Store</h2>
            <p className="text-gray-400 text-xl">Customize Raycast with powerful extensions built by the community.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-black p-4 rounded-xl hover:bg-gray-800 transition cursor-pointer">
                <Box className="w-12 h-12 mb-4" />
                <h4 className="font-medium mb-2">Extension {i}</h4>
                <p className="text-sm text-gray-400">Enhance your workflow with custom commands.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">Built for teams</h2>
            <p className="text-gray-400 text-xl mb-6">
              Share commands, snippets, and workflows with your team to boost productivity together.
            </p>
            <div className="flex space-x-4">
              <Users className="w-8 h-8 text-purple-400" />
              <Lock className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gradient-to-r from-purple-900 to-blue-900 p-1 rounded-xl">
              <div className="bg-black rounded-lg p-6">
                <pre className="text-sm text-gray-400">
                  <code>
                    {`// Example team script
raycast.team.share({
  commands: ["deploy", "review"],
  with: "engineering-team"
});`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Command className="w-6 h-6" />
                <span className="font-bold">Raycast</span>
              </div>
              <p className="text-gray-400">Supercharge your productivity</p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Product</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Download</li>
                <li>Features</li>
                <li>Security</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Company</h5>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Resources</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Documentation</li>
                <li>API</li>
                <li>Community</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;