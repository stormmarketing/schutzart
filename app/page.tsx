import Image from 'next/image'
import { Heart, ShieldCheck, Home, PawPrint, Facebook, Mail } from 'lucide-react'

const dogs = [
  { name: 'Sansa', type: 'Malinois', text: 'Sports- og tjenestehund med kapasitet, nerve og arbeidsvilje.' },
  { name: 'Lykke', type: 'Cockapoo', text: 'Aktiv, sosial og trygg familiehund med godt gemytt.' },
  { name: 'Nova', type: 'Cockapoo', text: 'Rolig, nysgjerrig og tillitsfull – en viktig del av flokken.' },
  { name: 'Milo', type: 'Cockapoo', text: 'Glad, leken og aktiv – med hjerte for mennesker.' },
]

const values = [
  { icon: Heart, title: 'Helse i fokus', text: 'Vi prioriterer helse, mentalitet og funksjon i alt vårt avlsarbeid.' },
  { icon: Home, title: 'Oppvokst i hjemmet', text: 'Valpene vokser opp nært familien, med trygghet og god sosialisering.' },
  { icon: PawPrint, title: 'To tydelige retninger', text: 'Malinois for sport og tjeneste. Cockapoo for aktive familier.' },
  { icon: ShieldCheck, title: 'Trygge hjem', text: 'Vi ønsker varige, gode matcher mellom hund og eier.' },
]

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-linen">
      <header className="fixed top-0 z-50 w-full border-b border-forest/10 bg-linen/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-3">
            <Image src="/images/logo.jpeg" alt="Kennel SchutzArt logo" width={76} height={76} className="rounded-full object-cover" />
            <span className="hidden text-sm font-semibold tracking-[0.25em] text-forest md:block">KENNEL SCHUTZART</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.18em] text-bark md:flex">
            <a href="#om">Om oss</a><a href="#hunder">Våre hunder</a><a href="#avl">Avl</a><a href="#english">English</a>
          </nav>
          <a href="#kontakt" className="rounded-xl bg-forest px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-sm">Kontakt oss</a>
        </div>
      </header>

      <section id="home" className="relative pt-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 md:grid-cols-2 md:py-20">
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-moss">Malinois · Cockapoo</p>
            <h1 className="font-serif text-5xl leading-tight text-forest md:text-7xl">Hunder med hjerte, helse og harmoni</h1>
            <div className="my-8 flex items-center gap-4 text-forest"><span className="h-px w-24 bg-forest/40" /><Heart size={22} fill="currentColor"/><span className="h-px w-24 bg-forest/40" /></div>
            <p className="text-lg leading-8 text-bark/80">Kennel SchutzArt driver målrettet oppdrett av to typer hunder: malinois som sports- og tjenestehund, og cockapoo som aktive familiehunder. Helse, mentalitet og trygg oppfølging er viktig for oss.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#kontakt" className="rounded-xl bg-forest px-7 py-4 font-semibold uppercase tracking-wider text-white">Ta kontakt</a>
              <a href="#avl" className="rounded-xl border border-forest/30 px-7 py-4 font-semibold uppercase tracking-wider text-forest">Les om avl</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-cream" />
            <Image src="/images/inspirasjon-forside.jpeg" alt="Cockapoo og SchutzArt designinspirasjon" width={900} height={1100} className="relative rounded-[2.5rem] object-cover shadow-2xl soft-edge" priority />
          </div>
        </div>
      </section>

      <section className="bg-cream py-10">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-4">
          {values.map((v) => <div key={v.title} className="rounded-3xl bg-linen p-7 text-center shadow-sm"><v.icon className="mx-auto mb-4 text-forest" size={34}/><h3 className="font-serif text-2xl text-forest">{v.title}</h3><p className="mt-3 leading-7 text-bark/70">{v.text}</p></div>)}
        </div>
      </section>

      <section id="om" className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div><p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-moss">Om oss</p><h2 className="font-serif text-4xl text-forest md:text-5xl">Kennel SchutzArt</h2><p className="mt-6 text-lg leading-8 text-bark/80">Hos oss handler oppdrett om mer enn hunder. Det handler om trygghet, ansvar, relasjon og livslange bånd. Vi legger vekt på sunne hunder, god mentalitet og riktig match mellom hund og hjem.</p><p className="mt-4 text-lg leading-8 text-bark/80">Malinois avles for mennesker som forstår rasens kapasitet og behov. Cockapoo passer for aktive familier som ønsker en sosial, glad og trenbar følgesvenn.</p></div>
        <Image src="/images/inspirasjon-hunder.jpeg" alt="SchutzArt hundeside inspirasjon" width={900} height={1100} className="rounded-[2.5rem] shadow-xl" />
      </section>

      <section id="avl" className="bg-forest px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white/10 p-8"><h2 className="font-serif text-4xl">Malinois</h2><p className="mt-5 text-lg leading-8 text-white/80">Vår malinois er utelukkende rettet mot sport og tjeneste. Dette er hunder som krever kunnskap, aktivitet, struktur og målrettet trening.</p></div>
          <div className="rounded-[2rem] bg-white/10 p-8"><h2 className="font-serif text-4xl">Cockapoo</h2><p className="mt-5 text-lg leading-8 text-white/80">Vår cockapoo skal være en aktiv familiehund med godt gemytt, trygghet, sosialitet og helse som grunnleggende verdier.</p></div>
        </div>
      </section>

      <section id="hunder" className="mx-auto max-w-7xl px-6 py-20 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-moss">Våre hunder</p><h2 className="font-serif text-5xl text-forest">Møt våre firbeinte</h2>
        <div className="mt-12 grid gap-7 md:grid-cols-4">
          {dogs.map((dog) => <article key={dog.name} className="overflow-hidden rounded-[2rem] bg-cream text-left shadow-sm"><Image src="/images/logo.jpeg" alt={dog.name} width={500} height={500} className="h-64 w-full object-cover"/><div className="p-6"><p className="text-sm uppercase tracking-[0.2em] text-moss">{dog.type}</p><h3 className="mt-2 font-serif text-3xl text-forest">{dog.name}</h3><p className="mt-3 leading-7 text-bark/70">{dog.text}</p></div></article>)}
        </div>
      </section>

      <section id="english" className="bg-cream px-6 py-16">
        <div className="mx-auto max-w-4xl text-center"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-moss">English</p><h2 className="font-serif text-4xl text-forest">Kennel SchutzArt</h2><p className="mt-5 text-lg leading-8 text-bark/80">We breed two distinct types of dogs: Malinois for sport and service work, and Cockapoos as active family companions. Health, mentality and responsible breeding are central to our work.</p></div>
      </section>

      <footer id="kontakt" className="bg-bark px-6 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div><h2 className="font-serif text-4xl">Kontakt oss</h2><p className="mt-4 text-white/70">Ta kontakt for spørsmål om hundene våre, planer og tilgjengelighet.</p></div>
          <div className="space-y-3"><p className="font-semibold">Tom Thoresen</p><a className="flex items-center gap-2 text-white/80" href="mailto:tom@brukshund.net"><Mail size={18}/> tom@brukshund.net</a><p className="pt-4 font-semibold">Laila Gulbrandsøy</p><a className="flex items-center gap-2 text-white/80" href="mailto:laila@brukshund.net"><Mail size={18}/> laila@brukshund.net</a></div>
          <div><a href="https://www.facebook.com/Malinoisvonschutzart" target="_blank" className="inline-flex items-center gap-3 rounded-xl bg-white px-5 py-4 font-semibold text-bark"><Facebook size={20}/> Følg oss på Facebook</a></div>
        </div>
      </footer>
    </main>
  )
}
