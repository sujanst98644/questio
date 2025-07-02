import React from "react";

const Footer = () => (
    <footer className="bg-gray-900 text-white py-8">
        <div className="flex flex-wrap justify-around">
            <div>
                <h4 className="font-semibold mb-2">Support</h4>
                <ul className="list-none p-0 space-y-1">
                    <li><a href="/contact" className="text-white hover:underline">Contact Us</a></li>
                    <li><a href="/faq" className="text-white hover:underline">FAQ</a></li>
                    <li><a href="/help" className="text-white hover:underline">Help Center</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold mb-2">Useful Links</h4>
                <ul className="list-none p-0 space-y-1">
                    <li><a href="/about" className="text-white hover:underline">About Us</a></li>
                    <li><a href="/blog" className="text-white hover:underline">Blog</a></li>
                    <li><a href="/terms" className="text-white hover:underline">Terms of Service</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold mb-2">Others</h4>
                <ul className="list-none p-0 space-y-1">
                    <li><a href="/privacy" className="text-white hover:underline">Privacy Policy</a></li>
                    <li><a href="/careers" className="text-white hover:underline">Careers</a></li>
                    <li><a href="/feedback" className="text-white hover:underline">Feedback</a></li>
                </ul>
            </div>
        </div>
        <div className="text-center mt-8 text-sm">
            &copy; {new Date().getFullYear()} Your Website Name. All rights reserved.
        </div>
    </footer>
);

export default Footer;