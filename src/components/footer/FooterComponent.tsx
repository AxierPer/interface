export default function FooterComponent() {
  return (
    <footer className="bg-zinc-800 text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Logo y Secciones */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-10">
          {/* Logo */}
          <div className="lg:col-span-1">
            <div className="text-xl font-bold text-blue-500">Your Logo</div>
          </div>

          {/* Sección Solutions */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-400 uppercase tracking-wider">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Marketing</a></li>
              <li><a href="#" className="hover:text-blue-400">Analytics</a></li>
              <li><a href="#" className="hover:text-blue-400">Automation</a></li>
              <li><a href="#" className="hover:text-blue-400">Commerce</a></li>
              <li><a href="#" className="hover:text-blue-400">Insights</a></li>
            </ul>
          </div>

          {/* Sección Support */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-400 uppercase tracking-wider">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Submit ticket</a></li>
              <li><a href="#" className="hover:text-blue-400">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400">Guides</a></li>
            </ul>
          </div>

          {/* Sección Company */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-400 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">About</a></li>
              <li><a href="#" className="hover:text-blue-400">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400">Jobs</a></li>
              <li><a href="#" className="hover:text-blue-400">Press</a></li>
            </ul>
          </div>

          {/* Sección Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-400 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Terms of service</a></li>
              <li><a href="#" className="hover:text-blue-400">Privacy policy</a></li>
              <li><a href="#" className="hover:text-blue-400">License</a></li>
            </ul>
          </div>
        </div>

        {/* Suscripción al Newsletter */}
        <div className="border-t border-gray-700 pt-6">
          <h3 className="text-gray-400 font-semibold mb-4">Subscribe to our newsletter</h3>
          <p className="text-gray-500 mb-4">The latest news, articles, and resources, sent to your inbox weekly.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded bg-zinc-700 text-white border border-zinc-900 focus:ring-2 focus:ring-gray-500 focus:outline-none"
            />
            <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Inferior */}
        <div className="mt-10 flex justify-between items-center text-gray-500 text-sm">
          <p>© 2024 Your Company, Inc. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400"><i className="fab fa-facebook"></i> Facebook</a>
            <a href="#" className="hover:text-blue-400"><i className="fab fa-instagram"></i> Instagram</a>
            <a href="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i> Twitter</a>
            <a href="#" className="hover:text-blue-400"><i className="fab fa-github"></i> GitHub</a>
            <a href="#" className="hover:text-blue-400"><i className="fab fa-youtube"></i> YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
