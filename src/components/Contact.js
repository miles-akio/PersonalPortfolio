// === src/components/Contact.js ===
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-10 bg-gray-900">
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>
      <form className="max-w-xl">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
        ></textarea>
        <button className="bg-purple-600 px-6 py-2 rounded hover:bg-purple-700">Send</button>
      </form>
    </section>
  );
};

export default Contact;