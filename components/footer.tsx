import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-hairline">
      <div className="mx-auto max-w-3xl px-6 pb-14 pt-8 sm:px-10">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {site.name}
          {site.sourceRepo ? (
            <>
              {" · "}
              <Link
                href={`https://github.com/${site.sourceRepo}`}
                className="hover:underline underline-offset-4"
              >
                code source
              </Link>
            </>
          ) : null}
          <span className="text-faint"> · next.js · github pages</span>
        </p>
      </div>
    </footer>
  );
}