import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden">
                <Image
                  src="/app-icon.svg"
                  alt="MotifyUp App Icon"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
              </div>
              <span className="text-2xl font-bold text-gray-900">MotifyUp</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">Features</a>
              <a href="#screenshots" className="text-gray-700 hover:text-green-600 transition-colors">Gallery</a>
              <a href="#download" className="text-gray-700 hover:text-green-600 transition-colors">Download</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8" aria-labelledby="hero-heading">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl overflow-hidden">
              <Image
                src="/app-icon.svg"
                alt="MotifyUp App Icon"
                width={96}
                height={96}
                className="w-24 h-24"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Stay Focused.
              <span className="block text-green-600">Stay Motivated.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your journey to achieving more starts with MotifyUp. Transform your family's motivation 
              and track progress together with our innovative goal-tracking app.
            </p>
            <div className="flex justify-center">
              <a
                href="https://apps.apple.com/us/app/motifyup/id6738029147?platform=iphone"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-2xl hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on App Store
              </a>
            </div>
          </div>
          
          {/* Rating */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-700">5.0</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose MotifyUp?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed to help families stay motivated and achieve their goals together
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">For Every Family Member</h3>
              <p className="text-gray-600">
                Create individual profiles for each family member and track their unique goals and progress separately.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Track Progress Daily</h3>
              <p className="text-gray-600">
                Monitor daily achievements with visual progress indicators, earned stars, and task completion tracking.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-purple-50 hover:bg-purple-100 transition-colors">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete Your Journeys</h3>
              <p className="text-gray-600">
                Set long-term goals and track completion rates across different categories like reading, fitness, and creativity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              App Gallery
            </h2>
            <p className="text-xl text-gray-600">
              Beautiful, intuitive interface designed for the whole family
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="group flex justify-center">
              <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-2 shadow-xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl max-w-[180px]">
                <div className="bg-white rounded-xl overflow-hidden">
                  <Image
                    src="/1st-screen.png"
                    alt="MotifyUp App Screen 1"
                    width={160}
                    height={320}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
            
            <div className="group flex justify-center">
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl p-2 shadow-xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl max-w-[180px]">
                <div className="bg-white rounded-xl overflow-hidden">
                  <Image
                    src="/2nd-screen.png"
                    alt="MotifyUp App Screen 2"
                    width={160}
                    height={320}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
            
            <div className="group flex justify-center">
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl p-2 shadow-xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl max-w-[180px]">
                <div className="bg-white rounded-xl overflow-hidden">
                  <Image
                    src="/3rd-screen.png"
                    alt="MotifyUp App Screen 3"
                    width={160}
                    height={320}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
            
            <div className="group flex justify-center">
              <div className="bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl p-2 shadow-xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl max-w-[180px]">
                <div className="bg-white rounded-xl overflow-hidden">
                  <Image
                    src="/4th-screen.png"
                    alt="MotifyUp App Screen 4"
                    width={160}
                    height={320}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
            
            <div className="group flex justify-center">
              <div className="bg-gradient-to-br from-red-400 to-orange-500 rounded-2xl p-2 shadow-xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl max-w-[180px]">
                <div className="bg-white rounded-xl overflow-hidden">
                  <Image
                    src="/5th-screen.png"
                    alt="MotifyUp App Screen 5"
                    width={160}
                    height={320}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
            
            <div className="group flex justify-center">
              <div className="bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl p-2 shadow-xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl max-w-[180px]">
                <div className="bg-white rounded-xl overflow-hidden">
                  <Image
                    src="/6th-screen.png"
                    alt="MotifyUp App Screen 6"
                    width={160}
                    height={320}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Family's Motivation?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of families who are already achieving their goals with MotifyUp
          </p>
          
          <div className="flex justify-center mb-8">
            <a
              href="https://apps.apple.com/us/app/motifyup/id6738029147?platform=iphone"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-2xl hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </a>
          </div>
          
          <p className="text-sm text-gray-500">
            Free to download
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="/app-icon.svg"
                    alt="MotifyUp App Icon"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
                <span className="text-2xl font-bold">MotifyUp</span>
              </div>
              <p className="text-gray-400">
                Motivate to achieve goals. Transform your family's motivation with our innovative goal-tracking app.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#screenshots" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
                <li><a href="#download" className="text-gray-400 hover:text-white transition-colors">Download</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Developer</h3>
              <p className="text-gray-400 mb-2">MetaLeap LLC</p>
              <p className="text-gray-400 text-sm">
                Designed for iPad and iPhone
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} MetaLeap LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
