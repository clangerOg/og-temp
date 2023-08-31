import Link from 'next/link';

export default async function ImprintPage() {
  return (
    <div className="mt-24">
      <div className="flex justify-between items-center flex-wrap-reverse gap-6">
        <p className="text-4xl text-primary-900 dark:text-primary-50 font-semibold break-all">
          Impressum
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
            href={'/legal/imprint'}
            className="transition-colors hover:bg-primary-100 dark:hover:bg-primary-800 px-1.5 py-1 rounded-md"
          >
            imprint
          </Link>
        </div>
      </div>
      <article className="mt-16 prose prose-zinc dark:!prose-invert break-words">
        <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
        <p>
          Kosche und Langer GbR, Webdesign Agentur
          <br />
          Friedrich-List-Stra&szlig;e, 4<br />
          40880 Ratingen
        </p>

        <p>
          <strong>Vertreten durch:</strong>
          <br />
          Paul Georg Kosche
          <br />
          Christoph Sebastian Langer
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: +49 176 42013555
          <br />
          E-Mail: hello@orbitgrowth.de
        </p>

        <h2>EU-Streitschlichtung</h2>
        <p>
          Die Europ&auml;ische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{' '}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>

        <h2>
          Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
        </h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <p>
          Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a>
        </p>
      </article>
    </div>
  );
}
