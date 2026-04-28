export default function Home() {
  return (
    <main className="bg-[#f8f6f1] text-[#2b241f]">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl font-semibold leading-tight mb-6">
            Hunder med hjerte, <br /> helse og harmoni
          </h1>
          <p className="text-lg mb-6">
            Kennel SchutzArt driver målrettet avl av Malinois og Cockapoo.
            Vi legger vekt på mentalitet, helse og egenskaper tilpasset både arbeid og familie.
          </p>
        </div>

        <img
          src="/images/inspirasjon-forside.jpeg"
          alt="Hund"
          className="rounded-xl shadow-lg"
        />
      </section>

      {/* OM OSS */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

          <img
            src="/images/nm-ipo.jpg"
            alt="Førsteplass under NM IPO II i Trondheim"
            className="rounded-xl shadow"
          />

          <div>
            <p className="uppercase text-sm tracking-widest text-gray-500 mb-2">
              Om oss
            </p>

            <h2 className="text-3xl font-semibold mb-6">
              Erfaring fra trening, konkurranse og avl
            </h2>

            <p className="mb-4">
              Kennel SchutzArt drives av Tom Thoresen og Laila Gulbrandsøy, og holder til i Sandefjord.
            </p>

            <p className="mb-4">
              Vi har samlet drevet med og jobbet med hunder i over 30 år hver. Gjennom årene har vi konkurrert og trent med blant annet Dobermann, Malinois, Schäfer og Border Collie.
            </p>

            <p className="mb-4">
              Vi har tidligere hatt Dobermann og drevet Dobermann-oppdrett med tre kull. Der fikk vi mange gode valpekjøpere som trente og konkurrerte innen både lydighet og IGP/IPO på NM- og VM-nivå.
            </p>

            <p className="mb-4">
              Tom har selv konkurrert på NM- og VM-nivå med Dobermann og Malinois flere ganger. Under Dobermann NM hadde han blant annet beste lydighet i Gruppe B, blant alle raser i IGP.
            </p>

            <p className="mb-4">
              Vi har også jobbet med egen hundeskole og vært figuranter under ulike mentaltester.
            </p>

            <p>
              Laila har hatt særlig fokus på unghundtrening og avl hos SchutzArt, med ansvar for å utvikle gode, friske og stabile hunder.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
