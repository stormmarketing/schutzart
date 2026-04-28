export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#263524]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <img src="/images/logo.jpeg" alt="Kennel SchutzArt" className="h-28 w-auto" />

        <nav className="hidden gap-8 text-xs font-semibold uppercase tracking-widest md:flex">
          <a href="#hjem">Hjem</a>
          <a href="#om-oss">Om oss</a>
          <a href="#hunder">Våre hunder</a>
          <a href="#avl">Avl</a>
          <a href="#english">English</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        <a
          href="mailto:tom@brukshund.net"
          className="rounded-lg bg-[#4f5f35] px-5 py-3 text-xs font-bold uppercase tracking-widest text-white"
        >
          Kontakt oss
        </a>
      </header>

      <section id="hjem" className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-6 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#66724a]">
            Malinois · Cockapoo
          </p>

          <h1 className="mb-6 max-w-xl text-5xl font-serif leading-tight md:text-7xl">
            Hunder med hjerte, helse og harmoni
          </h1>

          <div className="mb-8 flex items-center gap-5 text-[#4f5f35]">
            <span className="h-px w-24 bg-[#4f5f35]" />
            <span className="text-2xl">♥</span>
            <span className="h-px w-24 bg-[#4f5f35]" />
          </div>

          <p className="mb-8 max-w-lg text-lg leading-8">
            Kennel SchutzArt driver målrettet oppdrett av malinois som sports- og
            tjenestehund, og cockapoo som aktive familiehunder. Helse, mentalitet
            og trygg oppfølging står i fokus.
          </p>

          <a
            href="#om-oss"
            className="inline-block rounded-lg bg-[#4f5f35] px-7 py-4 text-sm font-bold uppercase tracking-widest text-white"
          >
            Les mer om oss
          </a>
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
          <img
            src="/images/inspirasjon-forside.jpeg"
            alt="Cockapoo hos Kennel SchutzArt"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-[#efe9dd] py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 text-center md:grid-cols-4">
          {[
            ["Helse i fokus", "Vi prioriterer helse, gemytt og funksjon i vårt avlsarbeid."],
            ["Oppvokst i hjemmet", "Valpene vokser opp med trygghet, hverdag og sosialisering."],
            ["Tett oppfølging", "Vi følger valpekjøpere før, under og etter valpekjøpet."],
            ["Trygge hjem", "Vi ønsker å finne riktige hjem for våre valper."],
          ].map(([title, text]) => (
            <div key={title} className="px-4">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#4f5f35] text-2xl">
                ♥
              </div>
              <h3 className="mb-2 font-serif text-2xl">{title}</h3>
              <p className="text-sm leading-7">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="avl" className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#66724a]">
            Våre raser
          </p>
          <h2 className="mb-6 font-serif text-5xl">Malinois og cockapoo</h2>
          <p className="mb-5 leading-8">
            Vi driver med to tydelige retninger i avlen. Malinois avles utelukkende
            som sports- og tjenestehund for aktive og erfarne hundefolk.
          </p>
          <p className="leading-8">
            Cockapoo avles som aktive familiehunder, med fokus på helse,
            mentalitet, trygghet og gode hverdags-egenskaper.
          </p>
        </div>

        <img
          src="/images/inspirasjon-hunder.jpeg"
          alt="Hund hos Kennel SchutzArt"
          className="rounded-3xl shadow-lg"
        />
      </section>

      <section id="hunder" className="bg-[#e8e7d9] py-20 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#66724a]">
            Våre hunder
          </p>
          <h2 className="mb-4 font-serif text-5xl">Møt våre firbeinte</h2>
          <p className="mx-auto mb-12 max-w-2xl">
            Hundene våre er en viktig del av familien og grunnlaget for vårt avlsarbeid.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <img src="/images/inspirasjon-hunder.jpeg" alt="Sansa" className="mb-5 h-72 w-full rounded-2xl object-cover" />
              <h3 className="font-serif text-3xl">Sansa</h3>
              <p className="mt-3 text-sm leading-7">Malinois med stort hjerte, arbeidslyst og kapasitet.</p>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <img src="/images/inspirasjon-forside.jpeg" alt="Cockapoo" className="mb-5 h-72 w-full rounded-2xl object-cover" />
              <h3 className="font-serif text-3xl">Cockapoo</h3>
              <p className="mt-3 text-sm leading-7">Aktive, sosiale og trygge familiehunder.</p>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <img src="/images/logo.jpeg" alt="SchutzArt" className="mb-5 h-72 w-full rounded-2xl bg-[#f7f3ea] object-contain" />
              <h3 className="font-serif text-3xl">SchutzArt</h3>
              <p className="mt-3 text-sm leading-7">Oppdrett med erfaring, ansvar og langvarig oppfølging.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="om-oss" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <img
              src="/images/nm-ipo.jpg"
              alt="Førsteplass under NM IPO II i Trondheim"
              className="w-full rounded-3xl shadow-lg"
            />
            <p className="mt-3 text-sm italic text-gray-500">
              Førsteplass under NM IPO II i Trondheim.
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#66724a]">
              Om oss
            </p>
            <h2 className="mb-6 font-serif text-5xl">
              Erfaring fra trening, konkurranse og avl
            </h2>

            <div className="space-y-5 leading-8">
              <p>Kennel SchutzArt drives av Tom Thoresen og Laila Gulbrandsøy, og holder til i Sandefjord.</p>
              <p>Vi har samlet drevet med og jobbet med hunder i over 30 år hver. Gjennom årene har vi konkurrert og trent med blant annet Dobermann, Malinois, Schäfer og Border Collie.</p>
              <p>Vi har tidligere hatt Dobermann og drevet Dobermann-oppdrett med tre kull. Der fikk vi mange gode valpekjøpere som trente og konkurrerte innen både lydighet og IGP/IPO på NM- og VM-nivå.</p>
              <p>Tom har selv konkurrert på NM- og VM-nivå med Dobermann og Malinois flere ganger. Under Dobermann NM hadde han blant annet beste lydighet i Gruppe B, blant alle raser i IGP.</p>
              <p>Vi har også jobbet med egen hundeskole og vært figuranter under ulike mentaltester.</p>
              <p>Laila har hatt særlig fokus på unghundtrening og avl hos SchutzArt, med ansvar for å utvikle gode, friske og stabile hunder.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="english" className="bg-[#f7f3ea] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#66724a]">
            English
          </p>
          <h2 className="mb-6 font-serif text-5xl">About Kennel SchutzArt</h2>
          <p className="mb-5 leading-8">
            Kennel SchutzArt is owned by Tom Thoresen and Laila Gulbrandsøy and is located in Sandefjord, Norway.
            We have more than 30 years of experience each with dogs, training, competition and breeding.
          </p>
          <p className="leading-8">
            We breed Malinois for sport and service work, and Cockapoo as active family dogs.
            Health, mentality, function and responsible follow-up are important values in our breeding work.
          </p>
        </div>
      </section>

      <section id="kontakt" className="bg-[#4f5f35] py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-6 font-serif text-5xl">Kontakt oss</h2>
          <p className="mb-8 text-lg">Tom Thoresen og Laila Gulbrandsøy · Sandefjord</p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:tom@brukshund.net" className="rounded-lg bg-white px-6 py-3 font-semibold text-[#4f5f35]">
              tom@brukshund.net
            </a>
            <a href="mailto:laila@brukshund.net" className="rounded-lg bg-white px-6 py-3 font-semibold text-[#4f5f35]">
              laila@brukshund.net
            </a>
            <a href="https://www.facebook.com/Malinoisvonschutzart" target="_blank" className="rounded-lg border border-white px-6 py-3 font-semibold">
              Facebook
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
