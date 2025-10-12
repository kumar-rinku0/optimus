import Banner from "@/components/banner";
import ContectBanner from "@/components/contect-banner";
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <div id="banner">
        <Banner
          title="#stayhome"
          description="Save more with coupons and up to 70% off!!"
        />
      </div>

      {/* Contact Banner or Info */}
      <div id="contact-info">
        <ContectBanner />
      </div>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          ✉️ Get in Touch
        </h2>
        <form className="space-y-6 bg-gray-100 p-8 rounded-lg shadow-md">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Type your message here..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Optional: Google Maps Embed Placeholder */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h3 className="text-xl font-semibold mb-4">📍 Our Location</h3>
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-md shadow-inner">
          <span className="text-gray-500">Google Maps Embed Here</span>
        </div>
      </section>
    </div>
  );
};

export default Contact;
