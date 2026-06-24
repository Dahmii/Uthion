import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-[#3300FF] text-white pt-20 pb-10 px-6 md:px-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-20 mb-20">          

          <div>
            <h3 className="font-semibold mb-6 text-blue-100">Company</h3>
            <ul className="space-y-3 text-sm text-blue-50">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-blue-100">Legal</h3>
            <ul className="space-y-3 text-sm text-blue-50">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="text-blue-200 hover:text-white transition-colors"
                aria-label="LinkedIn">
                
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-white transition-colors"
                aria-label="Twitter">
                
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-white transition-colors"
                aria-label="Email">
                
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Huge Logo Text */}
        <div className="flex justify-center items-center mb-8">
          <h1 className="text-[15vw] md:text-[12vw] font-bold tracking-tighter leading-none opacity-90 select-none">
            UTHION
          </h1>
        </div>

        <div className="border-t border-blue-400/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-200">
          <p>© 2026 Uthion. All rights reserved.</p>
          <p>Strategic Advisory for Ambitious Enterprises</p>
        </div>
      </div>
    </footer>);

}