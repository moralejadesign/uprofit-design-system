import ThemeToggle from '@/components/ThemeToggle'

/* ─── Shared SVG icons ────────────────────────────────────────────────────── */
const IconPlus    = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
const IconSearch  = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
const IconDots    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
const IconTrash   = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6"/></svg>
const IconCheck   = () => <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
const IconWarn    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
const IconInfo    = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
const IconCircle  = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
const IconClose   = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
const IconUp      = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="18 15 12 9 6 15"/></svg>
const IconDown    = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
const IconRemove  = () => <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
const IconEmail   = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
const IconDoc     = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
const IconBroadcast = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/></svg>

/* ─── Section wrapper ─────────────────────────────────────────────────────── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 'var(--space-12)' }}>
      <div style={{
        fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semi)',
        letterSpacing: '0.12em', textTransform: 'uppercase',
        color: 'var(--color-text-muted)', marginBottom: 'var(--space-5)',
        paddingBottom: 'var(--space-3)', borderBottom: '1px solid var(--color-border-soft)',
      }}>
        {title}
      </div>
      {children}
    </section>
  )
}

function SubLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semi)', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 'var(--space-3)' }}>
      {children}
    </div>
  )
}

function Row({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--space-3)', ...style }}>{children}</div>
}

function Col({ children, gap = 'var(--space-3)' }: { children: React.ReactNode; gap?: string }) {
  return <div style={{ display: 'flex', flexDirection: 'column', gap }}>{children}</div>
}

function Grid({ cols = 2, children }: { cols?: number; children: React.ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 'var(--space-5)' }}>
      {children}
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function Page() {
  return (
    <div style={{ maxWidth: 1160, margin: '0 auto', padding: 'var(--space-8) var(--space-6)' }}>

      {/* Header */}
      <header style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: 'var(--space-12)', paddingBottom: 'var(--space-8)',
        borderBottom: '1px solid var(--color-border)',
      }}>
        <div>
          <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-bold)', letterSpacing: '-0.02em', color: 'var(--color-yellow)' }}>
            UPROFIT <span style={{ color: 'var(--color-text-primary)' }}>Design System</span>
          </div>
          <div className="t-body-sm t-secondary" style={{ marginTop: 6 }}>Operations UI · v1.0</div>
        </div>
        <ThemeToggle />
      </header>

      {/* ── Colors ─────────────────────────────────────────────────── */}
      <Section title="Color Palette">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
          {[
            { name: 'Base',      hex: '#101217' },
            { name: 'Surface',   hex: '#171B22' },
            { name: 'Surface 2', hex: '#1E2330' },
            { name: 'Border',    hex: '#272D3A' },
            { name: 'Yellow',    hex: '#FCBC11' },
            { name: 'Cyan',      hex: '#6FCAEF' },
            { name: 'Purple',    hex: '#614BFB' },
            { name: 'Pink',      hex: '#E37EE8' },
            { name: 'Green',     hex: '#87DE86' },
            { name: 'Orange',    hex: '#DF5614' },
          ].map(({ name, hex }) => (
            <div key={name} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', minWidth: 80 }}>
              <div style={{ width: 64, height: 64, borderRadius: 'var(--radius-md)', background: hex, border: '1px solid rgba(255,255,255,0.08)' }} />
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)' }}>{name}</div>
              <div style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}>{hex}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Typography ──────────────────────────────────────────────── */}
      <Section title="Typography · Space Grotesk">
        <Col gap="var(--space-5)">
          {[
            { label: 'Display / 64px / 700', cls: 't-display', text: 'UPROFIT' },
            { label: 'H1 / 32px / 700',      cls: 't-h1',      text: 'Operations Dashboard' },
            { label: 'H2 / 24px / 600',      cls: 't-h2',      text: 'Client Overview' },
            { label: 'H3 / 20px / 600',      cls: 't-h3',      text: 'Account Summary' },
            { label: 'Body MD / 16px',        cls: 't-body-md', text: 'The quick brown fox jumps over the lazy dog.' },
            { label: 'Body / 14px',           cls: 't-body',    text: 'The quick brown fox jumps over the lazy dog.' },
            { label: 'Body SM / 12px',        cls: 't-body-sm t-secondary', text: 'The quick brown fox jumps over the lazy dog.' },
            { label: 'Badge / 11px / 600 / Uppercase', cls: 't-badge', text: 'KYC Approved · Active · Pending' },
          ].map(({ label, cls, text }) => (
            <div key={label}>
              <div className="t-badge t-muted" style={{ marginBottom: 6 }}>{label}</div>
              <div className={cls}>{text}</div>
            </div>
          ))}
          <div>
            <div className="t-badge t-muted" style={{ marginBottom: 6 }}>Mono / Space Mono</div>
            <div className="t-mono t-secondary" style={{ fontSize: 'var(--text-sm)' }}>$12,450.00 · 2024-01-15 · TX-0042</div>
          </div>
        </Col>
      </Section>

      {/* ── Buttons ─────────────────────────────────────────────────── */}
      <Section title="Buttons">
        <Col>
          <SubLabel>Variants</SubLabel>
          <Row>
            <button className="btn btn-primary btn-md">Primary</button>
            <button className="btn btn-secondary btn-md">Secondary</button>
            <button className="btn btn-ghost btn-md">Ghost</button>
            <button className="btn btn-danger btn-md">Danger</button>
            <button className="btn btn-success btn-md">Success</button>
            <button className="btn btn-primary btn-md" disabled>Disabled</button>
          </Row>

          <SubLabel>Sizes</SubLabel>
          <Row style={{ alignItems: 'flex-end' }}>
            <button className="btn btn-primary btn-sm">Small</button>
            <button className="btn btn-primary btn-md">Medium</button>
            <button className="btn btn-primary btn-lg">Large</button>
          </Row>

          <SubLabel>With icons</SubLabel>
          <Row>
            <button className="btn btn-primary btn-md"><IconPlus /> Add Client</button>
            <button className="btn btn-secondary btn-md"><IconSearch /> Search</button>
            <button className="btn btn-ghost btn-md btn-icon"><IconDots /></button>
            <button className="btn btn-danger btn-sm"><IconTrash /> Delete</button>
          </Row>
        </Col>
      </Section>

      {/* ── Badges ──────────────────────────────────────────────────── */}
      <Section title="Badges">
        <Col>
          <SubLabel>Status</SubLabel>
          <Row>
            <span className="badge badge-yellow">Warning</span>
            <span className="badge badge-green">Success</span>
            <span className="badge badge-red">Error</span>
            <span className="badge badge-cyan">Info</span>
            <span className="badge badge-purple">Premium</span>
            <span className="badge badge-pink">VIP</span>
            <span className="badge badge-muted">Inactive</span>
          </Row>

          <SubLabel>KYC Status</SubLabel>
          <Row>
            <span className="badge badge-kyc-approved"><IconCheck /> Approved</span>
            <span className="badge badge-kyc-pending">Pending</span>
            <span className="badge badge-kyc-rejected">Rejected</span>
            <span className="badge badge-kyc-review">In Review</span>
            <span className="badge badge-kyc-none">None</span>
          </Row>
        </Col>
      </Section>

      {/* ── Forms ───────────────────────────────────────────────────── */}
      <Section title="Form Controls">
        <Grid cols={2}>
          <Col>
            <div className="form-group">
              <label className="form-label form-label-required">Full Name</label>
              <input className="input" type="text" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <div className="input-wrap">
                <span className="icon-left"><IconEmail /></span>
                <input className="input input-icon-left" type="email" placeholder="john@example.com" />
              </div>
              <div className="form-hint">Used for login and notifications.</div>
            </div>
            <div className="form-group">
              <label className="form-label">Account Type</label>
              <select className="select">
                <option>Standard</option>
                <option>Premium</option>
                <option>VIP</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Notes</label>
              <textarea className="textarea" placeholder="Add internal notes..." />
            </div>
          </Col>
          <Col>
            <div className="form-group">
              <label className="form-label">Search</label>
              <div className="input-wrap">
                <span className="icon-left"><IconSearch /></span>
                <input className="input input-icon-left" type="search" placeholder="Search clients..." />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Success State</label>
              <input className="input input-success" type="text" defaultValue="Valid entry" />
              <div className="form-hint" style={{ color: 'var(--color-green)' }}>Looks good!</div>
            </div>
            <div className="form-group">
              <label className="form-label">Error State</label>
              <input className="input input-error" type="text" defaultValue="Invalid value" />
              <div className="form-hint" style={{ color: 'var(--color-orange)' }}>This field is required.</div>
            </div>
            <div className="form-group">
              <label className="form-label">Disabled</label>
              <input className="input" type="text" placeholder="Disabled input" disabled />
            </div>
          </Col>
        </Grid>
      </Section>

      {/* ── Chips & Toggles ─────────────────────────────────────────── */}
      <Section title="Chips & Toggles">
        <Col>
          <SubLabel>Chips</SubLabel>
          <Row>
            <span className="chip active">All</span>
            <span className="chip">Active</span>
            <span className="chip">Pending</span>
            <span className="chip">Suspended</span>
            <span className="chip">
              VIP
              <span className="chip-remove"><IconRemove /></span>
            </span>
          </Row>

          <SubLabel>Toggles</SubLabel>
          <Row>
            <label className="toggle-wrap">
              <input className="toggle" type="checkbox" defaultChecked />
              <span className="toggle-label">Notifications enabled</span>
            </label>
            <label className="toggle-wrap">
              <input className="toggle" type="checkbox" />
              <span className="toggle-label">Two-factor auth</span>
            </label>
            <label className="toggle-wrap">
              <input className="toggle" type="checkbox" defaultChecked />
              <span className="toggle-label">Auto-approve</span>
            </label>
          </Row>
        </Col>
      </Section>

      {/* ── Toasts ──────────────────────────────────────────────────── */}
      <Section title="Alerts & Toasts">
        <Col>
          <div className="toast toast-success">
            <span className="toast-icon"><IconCheck /></span>
            <div className="toast-content">
              <div className="toast-title">Account approved</div>
              <div className="toast-desc">Client has been verified and activated.</div>
            </div>
          </div>
          <div className="toast toast-warning">
            <span className="toast-icon"><IconWarn /></span>
            <div className="toast-content">
              <div className="toast-title">KYC review required</div>
              <div className="toast-desc">Documents need manual verification.</div>
            </div>
          </div>
          <div className="toast toast-error">
            <span className="toast-icon"><IconCircle /></span>
            <div className="toast-content">
              <div className="toast-title">Transaction failed</div>
              <div className="toast-desc">Insufficient balance. Please review.</div>
            </div>
          </div>
          <div className="toast toast-info">
            <span className="toast-icon"><IconInfo /></span>
            <div className="toast-content">
              <div className="toast-title">System maintenance</div>
              <div className="toast-desc">Scheduled downtime on Sunday 02:00 UTC.</div>
            </div>
          </div>
        </Col>
      </Section>

      {/* ── Cards & Stats ────────────────────────────────────────────── */}
      <Section title="Cards & Stat Cards">
        <div className="stat-grid" style={{ marginBottom: 'var(--space-5)' }}>
          {[
            { label: 'Total AUM',       value: '$4.2M',  delta: '+12.4%',        dir: 'up' as const },
            { label: 'Active Clients',  value: '1,248',  delta: '+34 this week',  dir: 'up' as const },
            { label: 'Pending KYC',     value: '87',     delta: '-5 from yesterday', dir: 'down' as const },
            { label: 'Monthly Revenue', value: '$182K',  delta: '+8.1%',          dir: 'up' as const },
          ].map(({ label, value, delta, dir }) => (
            <div key={label} className="stat-card">
              <div className="stat-label">{label}</div>
              <div className="stat-value">{value}</div>
              <span className={`stat-delta ${dir}`}>
                {dir === 'up' ? <IconUp /> : <IconDown />}
                {delta}
              </span>
            </div>
          ))}
        </div>

        <Grid cols={2}>
          <div className="card">
            <div className="card-header">
              <span className="card-title">Recent Clients</span>
              <button className="btn btn-ghost btn-sm">View all</button>
            </div>
            <Col gap="var(--space-2)">
              {[
                { initials: 'JD', name: 'James Doe',    email: 'james@example.com',  badgeCls: 'badge-kyc-approved', status: 'Approved', avatarStyle: {} },
                { initials: 'AM', name: 'Anna Martinez', email: 'anna@example.com',  badgeCls: 'badge-kyc-pending',  status: 'Pending',  avatarStyle: { background: 'rgba(97,75,251,0.15)', color: 'var(--color-purple)' } },
                { initials: 'RK', name: 'Ryan Kim',      email: 'ryan@example.com',  badgeCls: 'badge-kyc-review',   status: 'Review',   avatarStyle: { background: 'rgba(111,202,239,0.15)', color: 'var(--color-cyan)' } },
              ].map(({ initials, name, email, badgeCls, status, avatarStyle }) => (
                <div key={name} className="client-card">
                  <div className="client-avatar" style={avatarStyle}>{initials}</div>
                  <div style={{ flex: 1 }}>
                    <div className="t-body" style={{ fontWeight: 'var(--weight-medium)' }}>{name}</div>
                    <div className="t-body-sm t-muted">{email}</div>
                  </div>
                  <span className={`badge ${badgeCls}`}>{status}</span>
                </div>
              ))}
            </Col>
          </div>

          <div className="card card-accent">
            <div className="card-header">
              <span className="card-title">Quick Actions</span>
            </div>
            <Col gap="var(--space-3)">
              <button className="btn btn-primary btn-md" style={{ width: '100%', justifyContent: 'flex-start' }}>
                <IconPlus /> Add New Client
              </button>
              <button className="btn btn-secondary btn-md" style={{ width: '100%', justifyContent: 'flex-start' }}>
                <IconDoc /> Export Report
              </button>
              <button className="btn btn-ghost btn-md" style={{ width: '100%', justifyContent: 'flex-start' }}>
                <IconBroadcast /> Run KYC Batch
              </button>
            </Col>
          </div>
        </Grid>
      </Section>

      {/* ── Modal ───────────────────────────────────────────────────── */}
      <Section title="Modal">
        <div className="modal-demo">
          <div className="modal-header">
            <div>
              <div className="card-title">Suspend Account</div>
              <div className="t-body-sm t-muted" style={{ marginTop: 4 }}>This action will restrict access.</div>
            </div>
            <button className="btn btn-ghost btn-sm btn-icon"><IconClose /></button>
          </div>
          <div className="modal-body">
            <div className="toast toast-warning" style={{ marginBottom: 'var(--space-4)' }}>
              <span className="toast-icon"><IconWarn /></span>
              <div className="toast-content">
                <div className="toast-title">The client will lose all platform access</div>
              </div>
            </div>
            <Col gap="var(--space-3)">
              <div className="form-group">
                <label className="form-label form-label-required">Reason for suspension</label>
                <select className="select">
                  <option>Select a reason…</option>
                  <option>Policy violation</option>
                  <option>Fraud suspected</option>
                  <option>Client request</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Internal notes</label>
                <textarea className="textarea" placeholder="Add context for this action..." />
              </div>
            </Col>
          </div>
          <div className="modal-footer">
            <button className="btn btn-ghost btn-md">Cancel</button>
            <button className="btn btn-danger btn-md">Suspend Account</button>
          </div>
        </div>
      </Section>

      {/* ── Token Reference ──────────────────────────────────────────── */}
      <Section title="Token Reference">
        <Grid cols={2}>
          <div>
            <SubLabel>Spacing</SubLabel>
            <table className="token-table">
              <thead><tr><th>Token</th><th>Value</th></tr></thead>
              <tbody>
                {[['--space-1','4px'],['--space-2','8px'],['--space-3','12px'],['--space-4','16px'],['--space-5','20px'],['--space-6','24px'],['--space-8','32px'],['--space-10','40px'],['--space-12','48px'],['--space-16','64px']].map(([t,v]) => (
                  <tr key={t}><td>{t}</td><td>{v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <SubLabel>Border Radius</SubLabel>
            <table className="token-table">
              <thead><tr><th>Token</th><th>Value</th></tr></thead>
              <tbody>
                {[['--radius-sm','4px'],['--radius-md','8px'],['--radius-lg','12px'],['--radius-xl','16px'],['--radius-full','9999px']].map(([t,v]) => (
                  <tr key={t}><td>{t}</td><td>{v}</td></tr>
                ))}
              </tbody>
            </table>
            <div style={{ marginTop: 'var(--space-5)' }}>
              <SubLabel>Motion</SubLabel>
              <table className="token-table">
                <thead><tr><th>Token</th><th>Value</th></tr></thead>
                <tbody>
                  <tr><td>--duration</td><td>160ms</td></tr>
                  <tr><td>--ease</td><td>cubic-bezier(0.16,1,0.3,1)</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </Grid>
      </Section>

    </div>
  )
}
