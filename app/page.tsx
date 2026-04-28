export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", background: "#fbf8f1" }}>
      
      {/* NAV */}
      <div style={{ display: "flex", justifyContent: "space-between", padding: "20px 6%" }}>
        <img src="/images/logo.jpeg" style={{ width: 90 }} />
        <button style={{ background: "#435837", color: "white", padding: "12px 20px", borderRadius: 8 }}>
          Kontakt oss
        </button>
      </div>

      {/* HERO */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", padding: "40px 6%" }}>
        
        <div>
          <h1 style={{ fontSize: 60, fontFamily: "Georgia", color: "#30442d" }}>
            Malinois & Cockapoo med kvalitet
          </h1>
          <p>
            Kennel SchutzArt driver seriøst oppdrett med fokus på helse, gemytt og sterke egenskaper.
          </p>
        </div>

        <img src="/images/cockapoo-hero.jpg" style={{ width: "100%", borderRadius: 20 }} />
      </section>

      {/* HUNDER */}
      <section style={{ padding: "60px 6%" }}>
        <h2 style={{ fontSize: 40, fontFamily: "Georgia" }}>Møt våre 4-beinte</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginTop: 30 }}>
          
          <div>
            <img src="/images/nm-ipo.jpg" style={{ width: "100%", borderRadius: 20 }} />
            <h3>Sansa</h3>
          </div>

          <div>
            <img src="/images/cockapoo-1.png" style={{ width: "100%", borderRadius: 20 }} />
            <h3>Freia</h3>
          </div>

          <div>
            <img src="/images/malinois-natur.jpg" style={{ width: "100%", borderRadius: 20 }} />
            <h3>Malinois</h3>
          </div>

        </div>
      </section>

    </main>
  );
}
