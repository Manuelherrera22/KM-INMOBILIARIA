import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import ContactForm from '@/components/ContactForm'
import WhatsAppFloating from '@/components/WhatsAppFloating'
import MapWrapper from '@/components/MapWrapper'

export const dynamic = 'force-dynamic'
export const revalidate = 0

// Fetch top 3 active properties
async function getFeaturedProperties() {
  try {
    return await prisma.property.findMany({
      where: { status: 'ACTIVE' },
      take: 3,
      orderBy: { createdAt: 'desc' }
    })
  } catch (error) {
    return []
  }
}

export default async function Home() {
  const featuredProperties = await getFeaturedProperties()

  return (
    <main style={{
      minHeight: '100vh',
      color: '#fff',
      paddingBottom: '4rem',
      // Premium Background: Black & Gold Geometric (Matches User Reference)
      backgroundImage: `linear-gradient(to bottom, rgba(5,5,5,0.85), rgba(5,5,5,0.95)), url('https://images.unsplash.com/photo-1635243179234-7a0e104e4606?q=80&w=2670&auto=format&fit=crop')`,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {/* Navigation: Persistent & Platform Style */}
      <nav className="nav-container" style={{
        position: 'fixed', top: 0, left: 0, width: '100%',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100,
        background: 'rgba(5,5,5,0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #111'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link href="/" style={{ color: '#fff', fontWeight: '800', letterSpacing: '0.05em', fontSize: '1.2rem', textDecoration: 'none' }}>KM.</Link>
        </div>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link href="/" style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: '600' }}>INICIO</Link>
          <Link href="/propiedades" style={{ color: '#ccc', fontSize: '0.9rem' }}>CATÁLOGO</Link>
          <Link href="/dashboard" style={{ color: '#ccc', fontSize: '0.9rem' }}>ACCESO</Link>
        </div>
      </nav>

      {/* 1. HERO: BRAND STATEMENT + VIDEO */}
      <section style={{ paddingTop: '8rem', paddingBottom: '4rem', paddingLeft: '2rem', paddingRight: '2rem', textAlign: 'center' }}>
        <h1 className="heading-lg animate-fade-up" style={{
          fontSize: 'clamp(3rem, 6vw, 5rem)', // Fluid sizing 
          marginBottom: '1rem',
          lineHeight: '1.1',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          KM PLATAFORMA<br /><span style={{ color: 'var(--primary)' }}>INMOBILIARIA</span>
        </h1>

        {/* High Demand Inventory Grid */}
        <div className="property-grid">
          {/* Show only the latest 3 properties (New Arrivals) */}
          {featuredProperties.map((p: any) => (
            <Link key={p.id} href={`/p/${p.id}`} className="glass-panel" style={{
              display: 'block', textDecoration: 'none', color: 'inherit', textAlign: 'left',
              border: '1px solid #222', background: '#0a0a0a', borderRadius: '12px', overflow: 'hidden',
              position: 'relative',
              animation: 'fade-in-up 0.8s ease-out'
            }}>
              {/* Badge: Scarcity / Interest */}
              {p.interestCount && p.interestCount > 0 ? (
                <div style={{
                  position: 'absolute', top: '1rem', right: '1rem', zIndex: 10,
                  background: 'rgba(220, 38, 38, 0.9)', color: '#fff',
                  padding: '6px 12px', borderRadius: '99px',
                  fontSize: '0.75rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px',
                  boxShadow: '0 4px 12px rgba(220, 38, 38, 0.4)'
                }}>
                  <span style={{ animation: 'pulse 2s infinite' }}>🔥</span>
                  {p.interestCount} Interesados
                </div>
              ) : null}

              <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10, background: '#10B981', color: '#000', padding: '4px 10px', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '4px' }}>
                NUEVA ENTRADA
              </div>

              <div style={{ height: '300px', position: 'relative' }}>
                <img
                  src={p.images && p.images.startsWith('http') ? p.images : "https://images.unsplash.com/photo-1600596542815-2250c3d58e78?q=80&w=800&auto=format&fit=crop"}
                  alt="Property"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0a0a0a 0%, transparent 50%)' }}></div>
              </div>

              <div style={{ padding: '1.5rem', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#fff', lineHeight: '1.2' }}>{p.title}</h3>
                </div>
                <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '1rem' }}>{p.address}</p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #222', paddingTop: '1rem' }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--primary)' }}>
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(p.price)}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Ver Detalles &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 2. THE STORY / MANIFESTO (Emotional Hook) */}
      <section className="manifesto-section" style={{ padding: '0 1rem 8rem', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <div className="animate-fade-up">
          <span style={{ color: 'var(--primary)', fontSize: '0.9rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block', fontWeight: 'bold' }}>
            La Visión
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '2.5rem', fontFamily: 'var(--font-heading)', lineHeight: '1.2', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
            "No vendemos metros cuadrados.<br />
            <span style={{ background: 'linear-gradient(to right, #fff, #aaa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontStyle: 'italic' }}>Diseñamos legados."</span>
          </h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#ddd', maxWidth: '800px', margin: '0 auto', fontWeight: '300' }}>
            En un mercado saturado de ruido, <strong>KM</strong> se erige como un santuario para la excelencia.
            Entendemos que una propiedad no es solo ingeniería; es el escenario donde su patrimonio florece.
            Rechazamos lo ordinario para ofrecerle, estrictamente, lo extraordinario.
          </p>
        </div>
      </section>

      {/* 3. THE 3 QUESTIONS (Rational Reassurance) */}
      <section className="questions-section" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {/* Q1 */}
          <div className="glass-panel" style={{ padding: '2.5rem', background: '#0a0a0a', borderRadius: '8px', border: '1px solid #222' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.1em' }}>¿Qué hacemos?</h3>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.5', fontWeight: '500' }}>
              Conectamos capital inteligente con activos inmobiliarios de alto valor en Ecuador.
            </p>
            <div style={{ marginTop: '1.5rem', height: '1px', width: '50px', background: '#333' }}></div>
          </div>

          {/* Q2 */}
          <div className="glass-panel" style={{ padding: '2.5rem', background: '#0a0a0a', borderRadius: '8px', border: '1px solid #222' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.1em' }}>¿Para quién?</h3>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.5', fontWeight: '500' }}>
              Para inversores y familias que valoran su tiempo, la privacidad y la excelencia patrimonial.
            </p>
            <div style={{ marginTop: '1.5rem', height: '1px', width: '50px', background: '#333' }}></div>
          </div>

          {/* Q3 */}
          <div className="glass-panel" style={{ padding: '2.5rem', background: '#0a0a0a', borderRadius: '8px', border: '1px solid #222' }}>
            <h3 style={{ color: 'var(--primary)', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.1em' }}>¿Por qué confiar?</h3>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.5', fontWeight: '500' }}>
              Curaduría experta y transparencia radical. No vendemos metros, gestionamos futuros.
            </p>
            <div style={{ marginTop: '1.5rem', height: '1px', width: '50px', background: '#333' }}></div>
          </div>
        </div>
      </section>


      {/* 3.5. STRATEGIC LOCATION (MAP) */}
      <section style={{ paddingTop: '0', paddingBottom: '0', position: 'relative', height: '600px', overflow: 'hidden', borderTop: '1px solid #222', borderBottom: '1px solid #222' }}>
        {/* Overlay Title */}
        <div className="map-overlay" style={{
          background: 'rgba(5,5,5,0.9)', backdropFilter: 'blur(10px)',
          padding: '1.5rem', borderRadius: '8px', border: '1px solid #333',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
        }}>
          <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.5rem' }}>Ubicación & Plusvalía</h3>
          <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.4' }}>
            Mapa Interactivo. Explore nuestra colección en el Centro Financiero y Cumbayá.
          </p>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <div style={{ width: '12px', height: '12px', background: '#10B981', borderRadius: '50%', border: '2px solid #fff' }}></div>
            <span style={{ fontSize: '0.8rem', color: '#10B981', fontWeight: 'bold' }}>PROPIEDADES DISPONIBLES</span>
          </div>
        </div>

        {/* Interactive Leaflet Map */}
        <div style={{ height: '100%', width: '100%' }}>
          <MapWrapper properties={featuredProperties} />
        </div>
      </section>


      {/* 4. FAST CONTACT */}
      <section style={{ padding: '6rem 2rem' }}>
        <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Inicie su Consulta</h2>
          <ContactForm context="LANDING" />
        </div>
      </section>

      <WhatsAppFloating />

      <footer style={{ padding: '4rem 2rem', background: '#050505', borderTop: '1px solid #111', color: '#444', textAlign: 'center' }}>
        <div style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>Av. 12 de Octubre & Cordero, Quito, Ecuador</div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem', fontSize: '0.8rem', flexWrap: 'wrap' }}>
          <Link href="/privacidad" style={{ color: '#666', textDecoration: 'none' }}>Privacidad</Link>
          <Link href="/cookies" style={{ color: '#666', textDecoration: 'none' }}>Cookies</Link>
        </div>

        <p style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>© KM PLATAFORMA MMXXIV</p>
      </footer>
    </main>
  )
}
