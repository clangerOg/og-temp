import Link from 'next/link';

export default async function TermsAndConditionsPage() {
  return (
    <div className="mt-24">
      <div className="flex justify-between items-center flex-wrap-reverse gap-6">
        <p className="text-4xl text-primary-900 dark:text-primary-50 font-semibold break-all">
          Allgemeine Geschäftsbedingungen
        </p>
        <div className="flex gap-1 font-mono text-sm text-primary-500 items-center">
          <Link
            href={'/'}
            className="transition-colors hover:bg-primary-100 dark:hover:bg-primary-800 px-1.5 py-1 rounded-md"
          >
            orbitgrowth
          </Link>
          <p className="text-primary-600">/</p>
          <Link
            href={'/legal'}
            className="transition-colors hover:bg-primary-100 dark:hover:bg-primary-800 px-1.5 py-1 rounded-md"
          >
            legal
          </Link>
          <p className="text-primary-600">/</p>
          <Link
            href={'/legal/terms-and-conditions'}
            className="transition-colors hover:bg-primary-100 dark:hover:bg-primary-800 px-1.5 py-1 rounded-md"
          >
            terms-and-conditions
          </Link>
        </div>
      </div>
      <article className="mt-16 prose prose-zinc dark:!prose-invert break-words">
        <p className="font-mono">
          Darauf musst du bitte noch ein bisschen warten... AGBs schreiben kann
          ganzschön kompliziert sein &#128580;
        </p>
      </article>
    </div>
  );
}
