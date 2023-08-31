import { cn } from '@/lib/utils';
import Link from 'next/link';

export default async function Landing() {
  return (
    <main className="grow relative flex flex-col h-full">
      {/**
       * Fixed Background Image
       */}
      <div className="fixed left-1/2 transform -translate-x-1/2 bottom-0 z-0">
        <svg
          width="201"
          height="947"
          viewBox="0 0 201 947"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary-200 dark:text-primary-800"
        >
          <path
            d="M13.4849 360.737L16.4904 352.414L28.05 345.94L50.4758 339.467L82.1493 335.768H116.597L149.889 339.467L175.32 345.94L186.649 352.414L188.498 360.737M18.8023 368.135L21.3454 360.737L37.9914 352.414L64.8098 345.94H93.7089H122.839L154.05 349.639L175.32 356.575L182.256 363.049L183.412 368.597M173.702 383.856L172.083 378.539L166.535 374.608L152.894 368.597L132.549 366.285L110.355 364.205L83.074 365.129L60.8795 368.135L40.0721 372.759L31.9803 377.383L29.4372 381.082L28.5124 384.781"
            stroke="currentColor"
            strokeWidth="1.50824"
          />
          <path
            d="M158.905 954.21L126.076 495.291V472.403L136.017 445.816L164.916 399.115L163.529 395.416M163.529 395.416L168.615 391.717L172.377 385.474M163.529 395.416L160.928 393.451M151.507 310.568L176.476 316.116L188.267 321.434L196.358 327.214L199.826 333.918V339.929L172.377 385.474M151.507 310.568L119.833 308.025H83.0736L49.0882 310.951M151.507 310.568V297.621L149.195 294.384L142.953 289.529L125.151 285.599L113.36 284.674L97.6388 283.981L81.6865 284.674L71.0516 285.599L62.9598 287.68L54.868 291.379L50.4754 296.696L49.0882 301.32V310.951M30.1304 387.555L1 339.698V335.537L4.4679 328.138L19.2643 318.891L48.1634 311.03L49.0882 310.951M30.1304 387.555L31.5175 390.329L34.0606 392.873L38.2221 395.647M30.1304 387.555L32.7891 383.972M38.2221 395.647L37.7597 400.04L68.7396 451.133L74.0571 465.93L77.2938 483.963L56.2552 954.21M38.2221 395.647L41.112 392.988M39.6093 313.357L24.8129 307.1L17.1835 302.245L14.178 297.159V291.841M14.178 291.841L19.2643 286.293L37.2973 278.432L51.8625 274.964L74.0571 271.496L101.569 270.34L136.479 272.421L166.072 278.894L180.868 285.599L186.417 293.228M14.178 291.841L15.334 288.373L19.9578 283.518L31.2863 277.507L48.857 272.421L54.159 271.496M186.417 293.228L185.261 299.471L179.019 305.019L166.766 310.568L162.373 311.955M186.417 293.228L185.955 290.223L184.799 287.217L180.175 282.593L169.54 277.276L156.131 273.346L146.305 271.381M54.159 271.496L68.7396 268.953L74.0571 268.651M54.159 271.496L39.3781 266.872L29.2056 260.861L25.9689 255.544L28.0496 249.533M28.0496 249.533L39.3781 242.135L57.18 236.817L80.7617 233.58L112.435 232.656L142.953 236.586L162.373 242.135L171.621 248.608L172.892 251.845M28.0496 249.533L29.2056 245.602L39.3781 239.129L57.18 233.58L80.7617 230.575L85.1544 230.419M146.305 271.381L136.479 269.415L125.151 268.524M146.305 271.381L157.749 267.797L169.54 261.324L174.164 255.081L172.892 251.845M172.892 251.845L171.621 246.065L162.373 240.054L152.2 236.124L136.017 231.962L115.903 229.704M125.151 268.524L115.903 267.797H89.0846L74.0571 268.651M125.151 268.524V257.856L119.371 254.619L110.817 252.538H94.4021L80.2993 255.081L74.9818 257.856L74.0571 268.651M85.1544 230.419L113.36 229.419L115.903 229.704M85.1544 230.419V186.879L88.1599 125.613M88.1599 125.613L94.4021 105.268M88.1599 125.613L93.7085 123.532L102.725 123.07L111.048 125.613H111.279M94.4021 105.268L96.714 103.65L101.338 103.419L104.806 105.268M94.4021 105.268V84.692M104.806 105.268L111.279 125.613M104.806 105.268L104.35 84.692M111.279 125.613L115.903 229.704M94.4021 84.692L96.0204 83.9984H101.338L104.35 84.692M94.4021 84.692V42.846M104.35 84.692L103.422 42.846M94.4021 42.846V2.84955L98.5636 1L102.494 2.38716L103.422 42.846M94.4021 42.846L96.2516 41.9212L100.875 41.69L103.422 42.846M172.377 385.474L168.9 382.983M41.112 392.988L44.0019 390.329L45.3891 389.852M41.112 392.988L32.7891 383.972M32.7891 383.972L35.4478 380.388L39.6093 378.955M45.3891 389.852L39.6093 378.955M45.3891 389.852L54.868 386.589M39.6093 378.955L47.9322 376.088M54.868 386.589L58.1047 385.474L65.2717 384.179M54.868 386.589L47.9322 376.088M47.9322 376.088L56.2552 373.221L61.8038 372.666M65.2717 384.179L77.2938 382.007H79.6057M65.2717 384.179L61.8038 372.666M61.8038 372.666L77.2938 371.117M79.6057 382.007L77.2938 371.117M79.6057 382.007H94.6333M77.2938 371.117L88.6223 369.984H94.6333M94.6333 382.007H109.661L111.742 382.138M94.6333 382.007V369.984M94.6333 369.984H111.742M111.742 382.138V369.984M111.742 382.138L125.151 382.983M111.742 369.984H113.36L128.85 371.384M125.151 382.983L135.323 383.625L139.947 384.646M125.151 382.983L128.85 371.384M128.85 371.384L143.052 372.666M139.947 384.646L143.052 372.666M139.947 384.646L151.507 387.198M143.052 372.666L149.195 373.221L155.784 375.764M151.507 387.198L153.125 387.555L158.327 391.485M151.507 387.198L155.784 375.764M155.784 375.764L162.373 378.307L168.9 382.983M158.327 391.485L163.529 380.388M158.327 391.485L160.928 393.451M168.9 382.983L160.928 393.451"
            stroke="currentColor"
            strokeWidth="1.50824"
          />
          <path
            d="M170.696 383.856L199.826 336.23M198.67 332.762L168.846 382.238M166.997 380.157L195.665 326.751M165.147 380.157L191.734 323.977M162.373 377.614L187.804 321.203M158.905 376.458L183.874 319.815M154.744 375.071L178.788 317.041M151.044 373.915L172.545 315.423M146.421 372.528L165.147 313.804M141.566 371.834L158.905 312.417M136.248 371.834L152.2 311.03M130.699 371.834L143.877 310.105M124.92 370.909L135.092 310.105M119.14 370.909L126.769 308.487M113.591 369.984L117.521 308.487M106.424 369.984L108.505 308.487M99.9508 369.984V307.562M93.9397 369.984L91.1654 307.562M88.1599 369.984L82.1489 308.487M82.1489 370.909L73.1323 308.487M76.1378 370.909L64.8094 310.105M70.1268 371.834L56.7176 310.105M64.8094 371.834L47.9323 311.03M59.2607 372.528L41.2277 313.804M54.6369 373.915L34.0607 315.423M50.7066 374.839L27.8185 316.81M46.5451 376.92L21.8074 318.428M42.846 377.845L16.7212 320.74M40.0717 379.001L12.5597 323.052M36.835 379.926L8.8606 325.827M34.0607 381.775L5.6239 327.445M34.0607 383.625L3.54316 330.45M31.5175 384.55L1.9248 333.918M74.5195 421.772L76.1378 424.315L78.2186 425.008L80.2993 424.315L80.7617 421.772L79.3746 419.46L77.2938 418.766L74.5195 419.922V421.772ZM80.7617 444.197L81.6865 446.509L83.0736 447.897L84.692 448.359L86.5415 447.897L87.4663 445.353L86.0792 442.81L83.536 441.654L80.7617 444.197ZM127.232 446.509L126.769 449.515L127.232 450.902L129.312 449.977L130.931 448.359L131.393 446.047L130.931 444.66L129.312 444.197L127.232 446.509ZM136.71 428.245L138.791 427.089L140.41 425.471L140.872 424.315L140.41 422.465L139.254 422.003L137.635 422.928L136.248 424.315L136.017 426.858L136.71 428.245Z"
            stroke="currentColor"
            strokeWidth="1.50824"
          />
        </svg>
      </div>

      {/**
       * Headlines
       */}
      <div className="mt-24 relative z-10">
        <p
          className={cn(
            'text-5xl text-primary-900 dark:text-primary-50 font-semibold max-w-2xl'
          )}
        >
          Herausragende Webseiten für lokale Unternehmen, zu fairen Preisen.
        </p>
        <p
          className={cn(
            'mt-4 text-base text-primary-400 leading-7 max-w-prose'
          )}
        >
          OrbitGrowth ist eine Webdesign Agentur aus Ratingen, die sich auf das
          Designen und Entwickeln von Webseiten für lokale Unternehmen
          spezialisiert hat.
        </p>
      </div>

      {/**
       * Contact (links)
       */}
      <div className="mt-14 text-base text-primary-500 flex flex-col gap-5 font-mono">
        <Link
          href={
            'mailto:hello@orbitgrowth.de?subject=Neue%20Kontaktanfrage%20an%20OrbitGrowth'
          }
          className="hover:text-primary-300 transition-colors"
        >
          hello@orbitgrowth.de
        </Link>
        <p>+49 176 57600680</p>
        <p>
          Friedrich-List-Straße 4 <br />
          40880 Ratingen
        </p>
      </div>

      {/**
       * Legal links
       */}
      <div className="mt-44 grow w-full flex justify-end items-end flex-col gap-4">
        <Link
          href={'legal/imprint'}
          className="inline-flex justify-center items-center text-base text-primary-400 gap-2"
        >
          Impressum
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7"
              stroke="#71717A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 7H17V17"
              stroke="#71717A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
        <Link
          href={'legal/privacy-policy'}
          className="inline-flex justify-center items-center text-base text-primary-400 gap-2"
        >
          Datenschutz
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7"
              stroke="#71717A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 7H17V17"
              stroke="#71717A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
        <Link
          href={'legal/terms-and-conditions'}
          className="inline-flex justify-center items-center text-base text-primary-400 gap-2"
        >
          AGB
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7"
              stroke="#71717A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 7H17V17"
              stroke="#71717A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </div>
      {/**
      <div className="w-full flex flex-col justify-center items-center">
        <div className="min-h-[90vh] md:min-h-screen flex flex-col justify-between items-start gap-24">
          <div className="relative z-10">
            <div className="mt-24">
              <p
                className={cn(
                  'text-5xl text-primary-50 font-semibold max-w-2xl'
                )}
              >
                Herausragende Webseiten für lokale Unternehmen, zu fairen
                Preisen.
              </p>
              <p
                className={cn(
                  'mt-4 text-base text-primary-400 leading-7 max-w-prose'
                )}
              >
                OrbitGrowth ist eine Webdesign Agentur aus Ratingen, die sich
                auf das Designen und Entwickeln von Webseiten für lokale
                Unternehmen spezialisiert hat.
              </p>
            </div>
            <div className="mt-14 text-xl text-primary-500 flex flex-col gap-5">
              <Link
                href={
                  'mailto:hello@orbitgrowth.de?subject=Neue%20Kontaktanfrage%20an%20OrbitGrowth'
                }
                className="hover:text-primary-300 transition-colors"
              >
                hello@orbitgrowth.de
              </Link>
              <p>+49 176 57600680</p>
              <p>
                Friedrich-List-Straße 4 <br />
                40880 Ratingen
              </p>
            </div>
          </div>
          <div className="w-full flex justify-end items-end flex-col gap-4">
            <Link
              href={'/imprint'}
              className="inline-flex justify-center items-center text-base text-primary-400 gap-2"
            >
              Impressum
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7"
                  stroke="#71717A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 7H17V17"
                  stroke="#71717A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
            <Link
              href={'/privacy-policy'}
              className="inline-flex justify-center items-center text-base text-primary-400 gap-2"
            >
              Datenschutz
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7"
                  stroke="#71717A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 7H17V17"
                  stroke="#71717A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
            <Link
              href={'/tac'}
              className="inline-flex justify-center items-center text-base text-primary-400 gap-2"
            >
              AGB
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7"
                  stroke="#71717A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 7H17V17"
                  stroke="#71717A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div> */}
    </main>
  );
}
