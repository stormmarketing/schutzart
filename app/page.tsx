export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#263524]">

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        
        {/* TEKST */}
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#66724a]">
            Malinois · Cockapoo
          </p>

          <h1 className="mb-6 max-w-xl text-5xl font-serif leading-tight md:text-7xl">
            Hunder med hjerte, helse og harmoni
          </h1>

          <p className="mb-8 max-w-lg text-lg leading-8">
            Kennel SchutzArt driver målrettet oppdrett av malinois som sports- og tjenestehund,
            og cockapoo som aktive familiehunder. Helse, mentalitet og trygg oppfølging står i fokus.
          </p>

          <a
            href="#om-oss"
            className="inline-block rounded-lg bg-[#4f5f35] px-7 py-4 text-sm font-bold uppercase tracking-widest text-white"
          >
            Les mer om oss
          </a>
        </div>

        {/* BILDE */}
        <div className="flex justify-center">
          <img
            src="/images/cockapoo.png"
            alt="Cockapoo"
            className="max-w-md w-full"
          />
        </div>

      </section>

    </main>
  );
}
