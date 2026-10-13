import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="w-full px-3 sm:px-6 py-16 flex items-center justify-center min-h-[65vh]">
      <div className="max-w-lg w-full glass-panel rounded-[32px] p-8 sm:p-10 text-center">
        <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-indigo-500 mb-2">
          404 — PAGE NOT FOUND
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Route Not Found
        </h1>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been consolidated
          into the single-page portfolio experience.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6 py-3 text-xs sm:text-sm font-semibold shadow-md transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 glass-pill hover:bg-white text-slate-800 rounded-full px-5 py-3 text-xs sm:text-sm font-semibold transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>View Projects</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
