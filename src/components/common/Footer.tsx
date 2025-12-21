import { Facebook, Instagram, Mail, MessageCircle, Phone, Twitter, Youtube } from "lucide-react"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-[#3b0a0a] font-serif text-white pt-16">
            <div className="max-w-7xl mx-auto px-6">
                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* App Section */}
                    <div>
                        <h2 className="text-3xl font-serif mb-6">SwarNika</h2>
                        <div className="p-2 inline-block rounded">
                            <Image src="/images/Swarnika Jwellers-Logo.jpg" alt="QR Code" width={120} height={120} />
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="font-bold mb-4">Useful Links</h3>
                        <ul className="space-y-2 text-sm text-gray-200">
                            <li>Delivery Information</li>
                            <li>International Shipping</li>
                            <li>Payment Options</li>
                            <li>Track Your Order</li>
                            <li>Returns</li>
                            <li>Find a Store</li>
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h3 className="font-bold mb-4">Information</h3>
                        <ul className="space-y-2 text-sm text-gray-200">
                            <li>Blog</li>
                            <li>Offers & Contest Details</li>
                            <li>Help & FAQs</li>
                            <li>About SwarNika</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold mb-4">Contact Us</h3>
                        <p className="text-sm font-sans mb-2">1800-266-0123</p>

                        <h4 className="font-semibold mt-4 mb-2">Chat With Us</h4>
                        <p className="text-sm font-sans font-normal mb-4">
                            +91 8147349242
                        </p>


                        <div className="flex gap-4">
                            <MessageCircle size={18} />
                            <Mail size={18} />
                            <Phone size={18} />
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/20 my-10" />

                {/* Social */}
                <div className="flex items-center gap-6 mb-8">
                    <span className="font-bold text-white text-lg">Social</span>

                    <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition">
                        <Instagram size={16} className="text-white" />
                    </div>

                    <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition">
                        <Twitter size={16} className="text-white" />
                    </div>

                    <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition">
                        <Facebook size={16} className="text-white" />
                    </div>

                    <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition">
                        <Youtube size={16} className="text-white" />
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/20 py-6 flex flex-col md:flex-row justify-between text-md text-gray-300">
                    <p>© 2025 SwarNika Company Limited. All Rights Reserved.</p>
                    <div className="flex text-sm md:text-md gap-4 mt-2 md:mt-0">
                        <span>Terms & Conditions</span>
                        <span>Privacy Policy</span>
                        <span>Disclaimer</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
