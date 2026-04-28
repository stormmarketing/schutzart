import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#f7f5f2] text-gray-800">

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-10 items-center p-10 max-w-6xl mx-auto">
        <div>
          <h1 className="text-5xl font-semibold mb-6 text-[#2e3a2f]">
            Hunder med hjerte, helse og harmoni
          </h1>
          <p className="text-lg mb-6">
            Kennel SchutzArt driver målrettet avl av Malinois og Cockapoo.
            Vi legger vekt på mentalitet, helse og egenskaper tilpasset både arbeid og familie.
          </p>
        </div>

        <Image
          src="/images/inspirasjon-forside.jpeg"
          alt="Cockapoo"
          width={600}
          height={400}
          className="rounded-xl"
        />
      </section>

      {/* OM OSS */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

          <Image
            src="/images/nm-ipo-trondheim.jpg"
            alt="NM IPO Trondheim"
            width={600}
            height={400}
            className="rounded-xl"
          />

          <div>
            <h2 className="text-3xl font-semibold mb-4 text-[#2e3a2f]">
              Om oss
            </h2>

            <p className="mb-4">
              Kennel SchutzArt drives av Tom Thoresen og Laila Gulbrandsøy,
              og holder til i Sandefjord.
            </p>

            <p className="mb-4">
              Vi har begge over 30 års erfaring med hund, trening og konkurranse.
              Gjennom årene har vi jobbet aktivt med raser som Dobermann, Malinois,
              Schæfer og Border Collie.
            </p>

            <p className="mb-4">
              Vi har tidligere drevet oppdrett av Dobermann, med flere kull hvor
              valpekjøpere har hevdet seg på høyt nivå innen lydighet og IGP,
              både nasjonalt og internasjonalt.
            </p>

            <p className="mb-4">
              Tom har konkurrert på både NM- og VM-nivå med Dobermann og Malinois,
              og oppnådde blant annet Beste Lydighet (Gruppe B) under Dobermann NM.
            </p>

            <p className="mb-4">
              Vi har også erfaring fra hundeskole og arbeid som figuranter under
              mentale tester.
            </p>

            <p className="mb-6">
              Laila har hatt et særlig fokus på unghundtrening og avl, med mål om å
              utvikle sunne, stabile og funksjonelle hunder.
            </p>

            <p className="italic text-sm text-gray-500">
              Førsteplass under NM IPO II i Trondheim
            </p>

          </div>
        </div>
      </section>

    </main>
  );
}
<section className="bg-white py-16">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

    <img
      src="/images/nm-ipo-trondheim.jpg"
      alt="NM IPO Trondheim"
      className="rounded-xl"
    />

    <div>
      <h2 className="text-3xl font-semibold mb-4 text-[#2e3a2f]">
        Om oss
      </h2>

      <p className="mb-4">
        Kennel SchutzArt drives av Tom Thoresen og Laila Gulbrandsøy, og holder til i Sandefjord.
      </p>

      <p className="mb-4">
        Vi har begge over 30 års erfaring med hund, trening og konkurranse.
      </p>

      <p className="mb-4">
        Gjennom årene har vi jobbet med Dobermann, Malinois, Schæfer og Border Collie – både innen trening, konkurranse og avl.
      </p>

      <p className="mb-4">
        Tom har konkurrert på NM- og VM-nivå med Dobermann og Malinois, og oppnådde blant annet Beste Lydighet under Dobermann NM.
      </p>

      <p className="mb-4">
        Laila har hatt fokus på unghundtrening og avl, med mål om å utvikle sunne og stabile hunder.
      </p>

      <p className="italic text-sm text-gray-500">
        Førsteplass under NM IPO II i Trondheim
      </p>

    </div>
  </div>
</section>
