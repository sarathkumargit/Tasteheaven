import React from 'react';
import {
  Phone, Mail, MapPin, Facebook, Instagram, Twitter, MessageCircle,
} from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-4 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-1">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-gray-300 text-xs">Reach us quickly — we're here for you!</p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4 items-start">
          {/* Left: Google Map */}
          <div className="rounded-xl overflow-hidden border border-gray-700 shadow-lg h-64">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798467422068!2d79.9553!3d6.9271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e344ab9a7536!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Right: Info */}
          <div className="space-y-4 text-sm">
            {/* Location */}
            <div className="flex items-start space-x-3 p-3 bg-gray-800 border border-gray-700 rounded-xl">
              <MapPin className="text-orange-500 mt-1" size={16} />
              <div>
                <p className="text-white font-medium">123 Galle Rd, Colombo</p>
                <p className="text-gray-400 text-xs">Near Liberty Plaza</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-3 p-3 bg-gray-800 border border-gray-700 rounded-xl">
              <Phone className="text-orange-500 mt-1" size={16} />
              <div>
                <p className="text-white font-medium">+94 11 234 5678</p>
                <p className="text-gray-400 text-xs">+94 77 123 4567</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-3 p-3 bg-gray-800 border border-gray-700 rounded-xl">
              <Mail className="text-blue-400 mt-1" size={16} />
              <div>
                <p className="text-white font-medium">info@restaurant.com</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start space-x-3 p-3 bg-gray-800 border border-gray-700 rounded-xl">
              <MessageCircle className="text-green-400 mt-1" size={16} />
              <div>
                <p className="text-white font-medium">+94 77 123 4567</p>
                <p className="text-gray-400 text-xs">Chat with us on WhatsApp</p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex space-x-4 mt-2 justify-start pl-1">
              <a href="#" className="text-blue-500 hover:text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-pink-500 hover:text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-sky-400 hover:text-white">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;