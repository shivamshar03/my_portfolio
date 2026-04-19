import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: 'https://github.com/shivamshar03', icon: FaGithub, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/shivam-sharma-ab489721b/', icon: FaLinkedin, label: 'LinkedIn' },
    { href: 'https://x.com/ShivamShar03', icon: FaTwitter, label: 'Twitter' },
    { href: 'mailto:shivamsharma.py@gmail.com', icon: FaEnvelope, label: 'Email' },
  ];

  return (
    <footer className="relative bg-[#08080c] border-t border-white/[0.04]">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="gradient-text font-extrabold text-2xl tracking-tight">SS</span>
              <span className="text-slate-500 font-light ml-1">/dev</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-6">
              Software Developer | AI Enthusiast | Community Leader. Building innovative solutions with
              Python, AI/ML, and modern web technologies. Leading NexHub community and mentoring at Abhyudaya Coding Club.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/projects', label: 'Projects' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-2.5">
              <li className="text-sm text-slate-500">Indore, India</li>
              <li>
                <a
                  href="mailto:shivamsharma.py@gmail.com"
                  className="text-sm text-slate-500 hover:text-cyan-400 transition-colors"
                >
                  shivamsharma.py@gmail.com
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-400 hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300"
            >
              Let&apos;s Connect
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] mt-12 pt-6 flex justify-center items-center">
          <p className="text-xs text-slate-600 flex items-center gap-1">
            © {currentYear} Shivam Sharma. Built with <FaHeart className="w-3 h-3 text-red-500" /> and code.
          </p>
        </div>
      </div>
    </footer>
  );
}