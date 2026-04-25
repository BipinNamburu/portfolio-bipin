export default function Footer() {
  return (
    <footer className="bg-ink text-paper/60 px-6 md:px-12 py-8 border-t border-paper/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs uppercase tracking-[0.2em]">
        <p>© {new Date().getFullYear()} Bipin Namburu</p>
        <p className="font-mono normal-case tracking-normal">
          Set in Fraunces &amp; Inter — built with Next.js
        </p>
        <p>Bengaluru, IN</p>
      </div>
    </footer>
  );
}
