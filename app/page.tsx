export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f6f1] text-[#243225]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <img src="/images/logo.jpeg" alt="Kennel SchutzArt" className="h-24 w-auto" />

        <nav className="hidden gap-8 text-sm font-medium uppercase tracking-wide md:flex">
          <a href="#om-oss">Om oss</a>
          <a href="#hunder">Våre hunder</a>
          <a href="#avl">Avl</a>
          <a href="#kontakt">Kontakt</a>
          <a href="#english">English</a>
        </nav>

        <a
          href="mailto:tom@brukshund.net"
          className="rounded-lg bg-[#4b5a32] px-5 py-3 text-sm font-semibold text-white"
        >
          Kontakt oss
        </a>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#66724a]">
            Malinois · Cockapoo
          </p>

          <h1 className="mb-6 text-5xl font-semibold leading-tight md:text-7xl">
            Hunder med hjerte, helse og harmoni
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-8 text-[#384333]">
            Kennel SchutzArt driver målrettet oppdrett av to typer hunder:
            malinois som sports- og tjenestehund, og cockapoo som aktive
            familiehunder. Helse, mentalitet og trygg oppfølging står i fokus.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#om-oss"
              className="rounded-lg bg-[#4b5a32] px-6 py-3 font-semibold text-white"
            >
              Les mer om oss
            </a>

            <a
              href="https://www.facebook.com/Malinoisvonschutzart"
              target="_blank"
              className="rounded-lg border border-[#4b5a32] px-6 py-3 font-semibold text-[#4b5a32]"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-4 shadow-sm">
          <img
            src="/images/inspirasjon-forside.jpeg"
            alt="Cockapoo"
            className="h-auto w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="bg-[#eeeadd] py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-4">
          <div>
            <h3 className="mb-2 text-xl font-semibold">Helse i fokus</h3>
            <p className="leading-7">Vi prioriterer helse, funksjon og gode avlsvalg.</p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">Mentalitet</h3>
            <p className="leading-7">Trygge, stabile og arbeidsvillige hunder.</p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">Oppfølging</h3>
            <p className="leading-7">Vi følger valpekjøpere før, under og etter kjøp.</p>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">Riktig hjem</h3>
            <p className="leading-7">Vi er opptatt av god match mellom hund og eier.</p>
          </div>
        </div>
      </section>

      <section id="avl" className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#66724a]">
            Malinois
          </p>
          <h2 className="mb-4 text-4xl font-semibold">Sports- og tjenestehund</h2>
          <p className="leading-8">
            Våre malinois er for aktive og erfarne hundefolk som ønsker hund til
            sport, tjeneste eller målrettet trening. Her er mentalitet,
            arbeidslyst, nervefasthet og funksjon viktigst.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#66724a]">
            Cockapoo
          </p>
          <h2 className="mb-4 text-4xl font-semibold">Aktive familiehunder</h2>
          <p className="leading-8">
            Våre cockapoo skal være sunne, sosiale og aktive familiehunder. Vi
            legger vekt på godt gemytt, trygg oppvekst og hunder som passer inn i
            aktive hjem.
          </p>
        </div>
      </section>

      <section id="hunder" className="bg-[#e9e8dc] py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#66724a]">
            Våre hunder
          </p>
          <h2 className="mb-6 text-5xl font-semibold">Møt våre firbeinte</h2>
          <p className="mx-auto mb-12 max-w-2xl leading-8">
            Hundene våre er en viktig del av familien og grunnlaget for vårt
            avlsarbeid.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <img
                src="/images/inspirasjon-hunder.jpeg"
                alt="Hund hos SchutzArt"
                className="mb-5 h-72 w-full rounded-2xl object-cover"
              />
              <h3 className="text-3xl font-semibold">Sansa</h3>
              <p className="mt-3 leading-7">
                Malinois med stort hjerte, god kapasitet og sterk arbeidslyst.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <img
                src="/images/inspirasjon-forside.jpeg"
                alt="Cockapoo hos SchutzArt"
                className="mb-5 h-72 w-full rounded-2xl object-cover"
              />
              <h3 className="text-3xl font-semibold">Cockapoo</h3>
              <p className="mt-3 leading-7">
                Aktive, sosiale og trygge familiehunder med helse i fokus.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <img
                src="/images/logo.jpeg"
                alt="Kennel SchutzArt logo"
                className="mb-5 h-72 w-full rounded-2xl object-contain bg-[#f8f6f1]"
              />
              <h3 className="text-3xl font-semibold">SchutzArt</h3>
              <p className="mt-3 leading-7">
                Oppdrett med erfaring, ansvar og langvarig oppfølging.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="om-oss" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <img
              src="/images/nm-ipo-trondheim.jpg"
              alt="Førsteplass under NM IPO II i Trondheim"
              className="w-full rounded-3xl object-cover shadow-sm"
            />
            <p className="mt-3 text-sm italic text-gray-500">
              Førsteplass under NM IPO II i Trondheim.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#66724a]">
              Om oss
            </p>

            <h2 className="mb-6 text-5xl font-semibold">
              Erfaring fra trening, konkurranse og avl
            </h2>

            <div className="space-y-5 leading-8 text-[#384333]">
              <p>
                Kennel SchutzArt drives av Tom Thoresen og Laila Gulbrandsøy, og
                holder til i Sandefjord.
              </p>

              <p>
                Vi har samlet drevet med og jobbet med hunder i over 30 år hver.
                Gjennom årene har vi konkurrert og trent med blant annet
                Dobermann, Malinois, Schæfer og Border Collie.
              </p>

              <p>
                Vi har tidligere hatt Dobermann og drevet Dobermann-oppdrett med
                tre kull. Der fikk vi mange gode valpekjøpere som trente og
                konkurrerte innen både lydighet og IGP/IPO på NM- og VM-nivå.
              </p>

              <p>
                Tom har selv konkurrert på NM- og VM-nivå med Dobermann og
                Malinois flere ganger. Under Dobermann NM hadde han blant annet
                beste lydighet, Gruppe B, blant alle raser i IGP.
              </p>

              <p>
                Vi har også jobbet med egen hundeskole og vært figuranter under
                ulike mentaltester.
              </p>

              <p>
                Laila har hatt særlig fokus på unghundtrening og avl hos
                SchutzArt, med ansvar for å utvikle gode, friske og stabile
                hunder.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="english" className="bg-[#f8f6f1] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#66724a]">
            English
          </p>

          <h2 className="mb-6 text-4xl font-semibold">About Kennel SchutzArt</h2>

          <p className="mb-5 leading-8">
            Kennel SchutzArt is owned by Tom Thoresen and Laila Gulbrandsøy and
            is located in Sandefjord, Norway. We have more than 30 years of
            experience each with dogs, training, competition and breeding.
          </p>

          <p className="leading-8">
            We breed two types of dogs: Malinois for sport and service work, and
            Cockapoo as active family dogs. Health, mentality, function and
            responsible follow-up are important values in our breeding work.
          </p>
        </div>
      </section>

      <section id="kontakt" className="bg-[#4b5a32] py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-6 text-5xl font-semibold">Kontakt oss</h2>

          <p className="mb-8 text-lg">
            Tom Thoresen og Laila Gulbrandsøy · Sandefjord
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:tom@brukshund.net"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-[#4b5a32]"
            >
              tom@brukshund.net
            </a>

            <a
              href="mailto:laila@brukshund.net"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-[#4b5a32]"
            >
              laila@brukshund.net
            </a>

            <a
              href="https://www.facebook.com/Malinoisvonschutzart"
              target="_blank"
              className="rounded-lg border border-white px-6 py-3 font-semibold text-white"
            >
              Facebook
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
