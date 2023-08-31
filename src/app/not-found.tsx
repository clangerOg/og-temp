export default function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center text-2xl font-semibold text-primary-900 dark:text-primary-50 text-center grow">
      <p className="font-mono max-w-prose">
        Tut uns leid, aber diese Seite konnten wir nicht finden.
      </p>
      <p className="text-base text-primary-500 mt-6 font-normal">
        Wer hat dich auf die falsche Route gelockt?
      </p>
    </div>
  );
}
