import { LinkedinLogo } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container-site py-10 flex flex-col items-center gap-4">
        <a
          href="https://www.linkedin.com/in/michelletaylor/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-charcoal transition-colors"
          aria-label="LinkedIn"
        >
          <LinkedinLogo size={22} weight="fill" />
        </a>
        <p className="text-xs text-muted-light">
          &copy; {new Date().getFullYear()} Michelle Taylor
        </p>
      </div>
    </footer>
  );
}
