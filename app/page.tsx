import "./globals.css";

export default function Home() {
  return (
    <main className="page">
      <header className="nav">
        <img src="/images/logo.jpeg" className="logo" />
        <nav>
          <a>HJEM</a>
          <a>OM OSS</a>
          <a>VÅRE HUNDER</a>
          <a>VALPER</a>
          <a>INFO</a>
          <a>KONTAKT</a>
        </nav>
        <button>KONTAKT OSS</button>
      </header>

      <section className="hero">
        <div className="heroText">
          <h1>Cockapoo med<br />hjerte, helse og<br />harmoni</h1>
          <div className="divider"><span></span><b>♥</b><span></span></div>
          <p>
            I Kennel SchutzArt avler vi cockapooer med fokus på helse,
            gemytt og kvalitet. Vårt mål er å gi deg en trygg og god start
            på et livslangt vennskap.
          </p>
          <button>LES MER OM OSS</button>
        </div>

        <div className="heroImage">
          <img src="/images/cockapoo-hero.jpg" />
        </div>
      </section>

      <section className="features">
        <Feature title="Helse i fokus" text="Vi prioriterer helse, gemytt og funksjon i vårt avlsarbeid." icon="♥" />
        <Feature title="Oppvekst i hjemmet" text="Valpene våre vokser opp i en kjærlig familie med hverdagslyder og sosialisering." icon="⌂" />
        <Feature title="Tett oppfølging" text="Vi følger deg opp før, under og etter valpekjøpet." icon="♟" />
        <Feature title="Trygge hjem" text="Vi ønsker å finne de beste hjemmene for våre valper – for livet." icon="✓" />
      </section>

      <section className="aboutBreed">
        <div>
          <p className="eyebrow">OM RASEN</p>
          <h2>Hvorfor velge en<br />cockapoo?</h2>
          <p>
            Cockapooen er kjent for sitt vennlige gemytt, intelligens og
            allsidige pels. De passer perfekt som familiehund, turkamerat
            og bestevenn.
          </p>
          <button>LES MER OM RASEN</button>
        </div>

        <img src="/images/cockapoo-1.png" />
      </section>

      <section className="dogs">
        <p className="eyebrow center">VÅRE HUNDER</p>
        <div className="smallDivider">— ♥ —</div>
        <h2>Møt våre firbeinte</h2>
        <p>Våre hunder er en viktig del av familien og grunnlaget i vårt avlsarbeid.</p>

        <div className="dogGrid">
          <Dog image="/images/nm-ipo.jpg" name="Sansa" />
          <Dog image="/images/cockapoo-hero.jpg" name="Freia" />
          <Dog image="/images/malinois-natur.jpg" name="Malinois" />
          <Dog image="/images/cockapoo-1.png" name="Cockapoo" />
        </div>
      </section>
    </main>
  );
}

function Feature({ title, text, icon }: { title: string; text: string; icon: string }) {
  return (
    <div className="feature">
      <div className="featureIcon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Dog({ image, name }: { image: string; name: string }) {
  return (
    <div className="dog">
      <img src={image} />
      <h3>{name}</h3>
    </div>
  );
}
