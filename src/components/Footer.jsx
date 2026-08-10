import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">

          {/* Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-sm text-gray-400">
              © {currentYear} Muhammad Yusril.
            </p>

            <p className="mt-1 text-xs text-gray-600">
              Built with React & Tailwind CSS.
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">

            <a
              href="https://github.com/myusrilap"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition"
            >
              <FaGithub size={17} />
            </a>

            <a
              href="https://www.linkedin.com/in/myusrilap/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition"
            >
              <FaLinkedinIn size={17} />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition"
            >
              <ArrowUp size={17} />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;