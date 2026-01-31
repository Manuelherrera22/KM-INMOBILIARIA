import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import ContactForm from '@/components/ContactForm'

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
    <main>
      {/* Navigation */}
      <nav style={{
        position: 'absolute', top: 0, left: 0, width: '100%',
        padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10
      }}>
        <div style={{ color: '#fff', fontWeight: 'bold', letterSpacing: '0.1em' }}>KM.</div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link href="/propiedades" style={{ color: '#ccc', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Colección</Link>
          <Link href="/dashboard" style={{ color: 'var(--primary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', borderBottom: '1px solid var(--primary)' }}>Acceso Privado</Link>
        </div>
      </nav>

      {/* 1. HERO: Minimalist Impact */}
      <section style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 2rem',
        background: 'linear-gradient(to bottom, #050505 0%, #080808 100%)',
        position: 'relative'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="animate-fade-up" style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--primary)',
            display: 'block',
            marginBottom: '2rem'
          }}>
            Est. MMXXIV
          </span>

          <h1 className="animate-fade-up animate-delay-100" style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(4rem, 10vw, 8rem)',
            lineHeight: '0.9',
            color: '#F5F5F0',
            marginBottom: '2rem'
          }}>
            KMINMOBILIARIA.
          </h1>

          <p className="animate-fade-up animate-delay-200" style={{
            color: '#A3A3A3',
            fontSize: '1.25rem',
            maxWidth: '600px',
            margin: '0 auto 4rem',
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontWeight: '300'
          }}>
            "Redefiniendo el lujo inmobiliario en Ecuador. Desde Cumbayá hasta la Costa."
          </p>

          <div className="animate-fade-up animate-delay-300" style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            <Link href="/propiedades" className="btn btn-primary" style={{ padding: '1rem 3rem', minWidth: '200px' }}>
              Ver Colección
            </Link>
            <Link href="/dashboard" className="btn" style={{
              border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '1rem 3rem', minWidth: '200px'
            }}>
              Acceso Broker
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE VISION: Split Layout */}
      <section style={{ padding: '10rem 2rem', background: '#050505' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            <div>
              <span style={{ color: 'var(--primary)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>Nuestra Filosofía</span>
              <h2 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '2rem', color: '#fff' }}>
                Más que una inmobiliaria, <br /> un legado.
              </h2>
              <p style={{ color: '#888', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                En un mercado saturado, KM Inmobiliaria representa la excelencia en Cumbayá, Quito y Samborondón.
                No gestionamos transacciones; curamos patrimonios. Entendemos que una propiedad en Ecuador no es solo metros cuadrados,
                es el legado de su familia.
              </p>
              <Link href="/propiedades" style={{ borderBottom: '1px solid #fff', paddingBottom: '4px', fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Descubra Nuestra Colección
              </Link>
            </div>
            {/* Abstract Image Representation */}
            <div className="glass-panel" style={{ height: '500px', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--card-border)' }}>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '5rem', display: 'block', marginBottom: '1rem', opacity: 0.5 }}>🏛️</span>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: '#666' }}>Arquitectura & Diseño</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BOUTIQUE SERVICES: 3-Col Grid */}
      <section style={{ padding: '8rem 2rem', background: '#080808' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '3rem', color: '#fff' }}>Servicios Privados</h2>
            <div style={{ width: '40px', height: '1px', background: 'var(--primary)', margin: '1.5rem auto 0' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            {/* Service 1 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', border: '1px solid var(--primary)', borderRadius: '50%', margin: '0 auto 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>I</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Valuación de Mercado</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>Análisis profundo basado en data real y tendencias macroeconómicas para maximizar el valor de su activo.</p>
            </div>
            {/* Service 2 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', border: '1px solid var(--primary)', borderRadius: '50%', margin: '0 auto 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>II</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Marketing Exclusivo</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>Producción audiovisual cinematográfica y campañas dirigidas a compradores calificados en el mercado global.</p>
            </div>
            {/* Service 3 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', border: '1px solid var(--primary)', borderRadius: '50%', margin: '0 auto 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>III</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Concierge Legal</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>Acompañamiento jurídico integral. Blindamos su operación desde la intención de compra hasta la entrega de llaves.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE COLLECTION: Featured Properties */}
      <section style={{ padding: '10rem 2rem', background: '#050505' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', color: '#fff' }}>La Colección</h2>
            <Link href="/propiedades" style={{ color: 'var(--primary)', fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Ver Inventario Completo &rarr;
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '3rem' }}>
            {featuredProperties.map((p: any) => (
              <Link key={p.id} href={`/p/${p.id}`} className="glass-panel" style={{
                display: 'block', textDecoration: 'none', color: 'inherit', border: 'none', background: 'transparent', boxShadow: 'none'
              }}>
                <div style={{ height: '450px', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--primary)' }}>
                  <img
                    src={`https://images.unsplash.com/photo-1600596542815-2250c3d58e78?q=80&w=800&auto=format&fit=crop`}
                    alt="Luxury Property"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                    className="hover-scale"
                  />
                  <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', background: 'linear-gradient(to top, #000 0%, transparent 50%)' }}></div>
                  <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', background: 'var(--primary)', color: '#000', padding: '4px 12px', fontWeight: 'bold' }}>{p.type}</div>
                </div>
                <div style={{ paddingTop: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: '#fff' }}>{p.title}</h3>
                  <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '1rem' }}>{p.address}</p>
                  <span style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: 'var(--primary)' }}>
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(p.price)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRIVATE OFFICE: Contact */}
      <section style={{ padding: '8rem 2rem', background: '#080808' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="glass-panel" style={{ padding: '4rem', border: '1px solid var(--card-border)', background: '#050505' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span style={{ color: 'var(--primary)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Private Office</span>
              <h2 style={{ fontSize: '2.5rem', marginTop: '1rem', color: '#fff' }}>Inicie una Conversación</h2>
            </div>

            <ContactForm context="LANDING" />
          </div>
        </div>
      </section>

      <footer style={{ padding: '4rem 2rem', background: '#050505', borderTop: '1px solid #111', color: '#444', textAlign: 'center' }}>
        <div style={{ marginBottom: '1rem', fontStyle: 'italic', fontSize: '0.9rem' }}>Av. 12 de Octubre & Cordero, Quito, Ecuador</div>
        <p style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>© KMINMOBILIARIA ECUADOR MMXXIV</p>
      </footer>
    </main>
  )
}
