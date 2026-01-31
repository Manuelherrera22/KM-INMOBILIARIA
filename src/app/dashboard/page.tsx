export default function DashboardPage() {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                <div>
                    <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: '#fff' }}>Panel de Control</h1>
                    <p style={{ color: '#888', letterSpacing: '0.05em' }}>Bienvenido de nuevo, resumen ejecutivo.</p>
                </div>
                <button className="btn btn-primary" style={{ padding: '0.8rem 2rem' }}>
                    + Nueva Propiedad
                </button>
            </div>

            {/* Metrics Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                <MetricCard title="Propiedades Activas" value="12" change="+2 esta semana" />
                <MetricCard title="Total Leads" value="48" change="+12% vs mes anterior" />
                <MetricCard title="Visitas Totales" value="1,240" change="+5% vs ayer" />
                <MetricCard title="Cierres en Curso" value="3" change="En proceso legal" />
            </div>

            {/* Recent Activity Section */}
            <div style={{ borderTop: '1px solid #222', paddingTop: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', fontFamily: 'var(--font-heading)', color: '#fff' }}>Actividad Reciente</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <ActivityItem
                        action="Nuevo Lead"
                        target="Roberto Gomez interesada en 'Penthouse Lujo'"
                        time="Hace 10 min"
                    />
                    <ActivityItem
                        action="Propiedad Publicada"
                        target="Casa de Campo en La Calera"
                        time="Hace 2 horas"
                    />
                    <ActivityItem
                        action="Visita Agendada"
                        target="Cliente VIP para viernes 14:00"
                        time="Hace 5 horas"
                    />
                </div>
            </div>
        </div>
    )
}

function MetricCard({ title, value, change }: { title: string, value: string, change: string }) {
    return (
        <div style={{ padding: '2rem', border: '1px solid #222', background: '#0a0a0a' }}>
            <p style={{ color: '#666', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>{title}</p>
            <h2 style={{ fontSize: '3rem', fontWeight: '400', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem', color: '#fff' }}>{value}</h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--primary)' }}>{change}</p>
        </div>
    )
}

function ActivityItem({ action, target, time }: { action: string, target: string, time: string }) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.5rem 0',
            borderBottom: '1px solid #111',
            color: '#ccc'
        }}>
            <div>
                <span style={{ color: 'var(--primary)', marginRight: '1rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{action}</span>
                <span style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontStyle: 'italic' }}>{target}</span>
            </div>
            <span style={{ fontSize: '0.8rem', color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{time}</span>
        </div>
    )
}
