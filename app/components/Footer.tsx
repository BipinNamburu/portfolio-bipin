export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg px-6 md:px-12 py-6">
      <div className="max-w-content mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-t3">
        <p>© {new Date().getFullYear()} Bipin Namburu</p>
        <p>Bengaluru, IN</p>
      </div>
    </footer>
  );
}
