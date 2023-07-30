import React from 'react'
import { Link } from 'react-router-dom';

export const Blogs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Post 1 */}
          <div className="bg-white rounded-lg shadow-lg">
            <img
              src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Blog Post 1"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Blog Post Title 1</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                at arcu eu ex ullamcorper venenatis.
              </p>
              <Link
                href="#"
                className="mt-4 inline-block px-4 py-2 bg-green-400 text-white rounded hover:bg-green-600"
              >
                Read more
              </Link>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white rounded-lg shadow-lg">
            <img
              src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Blog Post 2"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Blog Post Title 2</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                at arcu eu ex ullamcorper venenatis.
              </p>
              <Link
                href="#"
                className="mt-4 inline-block px-4 py-2 bg-green-400 text-white rounded hover:bg-green-600"
              >
                Read more
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg">
            <img
              src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Blog Post 2"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Blog Post Title 2</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                at arcu eu ex ullamcorper venenatis.
              </p>
              <Link
                href="#"
                className="mt-4 inline-block px-4 py-2 bg-green-400 text-white rounded hover:bg-green-600"
              >
                Read more
              </Link>
            </div>
          </div>

          {/* Add more blog posts here */}
        </div>
      </div>
    </section>
  );
}
