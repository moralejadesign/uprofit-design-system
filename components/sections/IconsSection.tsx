import UilUser              from '@iconscout/react-unicons/icons/uil-user'
import UilShieldCheck       from '@iconscout/react-unicons/icons/uil-shield-check'
import UilChartLine         from '@iconscout/react-unicons/icons/uil-chart-line'
import UilBell              from '@iconscout/react-unicons/icons/uil-bell'
import UilSearch            from '@iconscout/react-unicons/icons/uil-search'
import UilFileAlt           from '@iconscout/react-unicons/icons/uil-file-alt'
import UilCheckCircle       from '@iconscout/react-unicons/icons/uil-check-circle'
import UilTimesCircle       from '@iconscout/react-unicons/icons/uil-times-circle'
import UilExclamationTriangle from '@iconscout/react-unicons/icons/uil-exclamation-triangle'
import UilInfoCircle        from '@iconscout/react-unicons/icons/uil-info-circle'
import UilEditAlt           from '@iconscout/react-unicons/icons/uil-edit-alt'
import UilExport            from '@iconscout/react-unicons/icons/uil-export'
import UilFilter            from '@iconscout/react-unicons/icons/uil-filter'
import UilRedo              from '@iconscout/react-unicons/icons/uil-redo'
import UilEllipsisH         from '@iconscout/react-unicons/icons/uil-ellipsis-h'
// @ts-expect-error — solid package has no type declarations
import { UisCheckCircle } from '@iconscout/react-unicons-solid'

export default function IconsSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>

      {/* Intro */}
      <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: 680 }}>
        Icons use the <strong style={{ color: 'var(--color-text-primary)' }}>Unicons</strong> library by Iconscout — 1,000+ pixel-perfect icons in two styles:{' '}
        <strong style={{ color: 'var(--color-text-primary)' }}>Line</strong> (<code className="inline-code">uil</code>) for general UI, and{' '}
        <strong style={{ color: 'var(--color-text-primary)' }}>Solid</strong> (<code className="inline-code">uis</code>) for emphasis and filled states. Always pair icons with a text label or aria attribute.
      </p>

      {/* Usage */}
      <div>
        <div className="icon-sub-label">Usage</div>
        <div className="icon-code-block">
          <div className="code-comment">{'<!-- Line style -->'}</div>
          <div>
            <span className="code-tag">{'<i'}</span>
            <span className="code-attr"> class=</span>
            <span className="code-string">{'"uil uil-{icon-name}"'}</span>
            <span className="code-tag">{'></i>'}</span>
          </div>
          <br />
          <div className="code-comment">{'<!-- Solid style -->'}</div>
          <div>
            <span className="code-tag">{'<i'}</span>
            <span className="code-attr"> class=</span>
            <span className="code-string">{'"uis uis-{icon-name}"'}</span>
            <span className="code-tag">{'></i>'}</span>
          </div>
          <br />
          <div className="code-comment">{'<!-- CDN -->'}</div>
          <div>
            <span className="code-tag">{'<link'}</span>
            <span className="code-attr"> rel=</span>
            <span className="code-string">{'"stylesheet"'}</span>
            <span className="code-attr"> href=</span>
            <span className="code-url">{'"https://unicons.iconscout.com/release/v4.0.8/css/line.css"'}</span>
            <span className="code-tag">{' />'}</span>
          </div>
        </div>
      </div>

      {/* Style Variants */}
      <div>
        <div className="icon-sub-label">Style Variants</div>
        <div className="icon-variants-grid">
          {/* Line */}
          <div className="icon-variant-card">
            <div className="icon-variant-header">
              <span className="icon-variant-label">LINE</span>
              <span className="icon-variant-pill">UIL</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-5)', alignItems: 'center', padding: 'var(--space-4) 0' }}>
              <UilUser size="28" color="currentColor" />
              <UilShieldCheck size="28" color="currentColor" />
              <UilChartLine size="28" color="currentColor" />
              <UilBell size="28" color="currentColor" />
              <UilSearch size="28" color="currentColor" />
              <UilFileAlt size="28" color="currentColor" />
            </div>
            <p className="icon-variant-desc">Default for all UI elements, nav, and buttons.</p>
          </div>

          {/* Solid */}
          <div className="icon-variant-card">
            <div className="icon-variant-header">
              <span className="icon-variant-label">SOLID</span>
              <span className="icon-variant-pill">UIS</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-5)', alignItems: 'center', padding: 'var(--space-4) 0' }}>
              <UisCheckCircle size="28" color="currentColor" />
            </div>
            <p className="icon-variant-desc">Use for active states, status indicators, and emphasis.</p>
          </div>
        </div>
      </div>

      {/* Icon Sizes */}
      <div>
        <div className="icon-sub-label">Icon Sizes</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--space-5)', flexWrap: 'wrap' }}>
          {[
            { size: 14, label: '14px', sub: 'xs' },
            { size: 16, label: '16px', sub: 'sm' },
            { size: 20, label: '20px', sub: 'md' },
            { size: 24, label: '24px', sub: 'lg' },
            { size: 32, label: '32px', sub: 'xl' },
            { size: 48, label: '48px', sub: '2xl' },
          ].map(({ size, label, sub }) => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
              <UilChartLine size={String(size)} color="currentColor" />
              <div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)' }}>{label}</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Icon Colors */}
      <div>
        <div className="icon-sub-label">Icon Colors</div>
        <div style={{ display: 'flex', gap: 'var(--space-6)', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          {[
            { label: 'Primary',   color: 'var(--color-text-primary)',   icon: <UilUser size="28" color="var(--color-text-primary)" /> },
            { label: 'Secondary', color: 'var(--color-text-secondary)', icon: <UilUser size="28" color="var(--color-text-secondary)" /> },
            { label: 'Muted',     color: 'var(--color-text-muted)',     icon: <UilUser size="28" color="var(--color-text-muted)" /> },
            { label: 'Accent',    color: 'var(--color-accent)',         icon: <UilUser size="28" color="var(--color-accent)" /> },
            { label: 'Success',   color: 'var(--color-success)',        icon: <UilCheckCircle size="28" color="var(--color-success)" /> },
            { label: 'Error',     color: 'var(--color-error)',          icon: <UilTimesCircle size="28" color="var(--color-error)" /> },
            { label: 'Warning',   color: 'var(--color-warning)',        icon: <UilExclamationTriangle size="28" color="var(--color-warning)" /> },
            { label: 'Info',      color: 'var(--color-info)',           icon: <UilInfoCircle size="28" color="var(--color-info)" /> },
          ].map(({ label, icon }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-3)' }}>
              {icon}
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Icons with Buttons */}
      <div>
        <div className="icon-sub-label">Icons with Buttons</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', alignItems: 'center' }}>
          <button className="btn btn-primary btn-md">
            <UilShieldCheck size="16" color="currentColor" /> Approve KYC
          </button>
          <button className="btn btn-secondary btn-md">
            <UilEditAlt size="16" color="currentColor" /> Edit Client
          </button>
          <button className="btn btn-secondary btn-md">
            <UilExport size="16" color="currentColor" /> Export
          </button>
          <button className="btn btn-danger btn-md">
            <UilTimesCircle size="16" color="currentColor" /> Reject
          </button>
          <button className="btn btn-ghost btn-md btn-icon" aria-label="Search">
            <UilSearch size="18" color="currentColor" />
          </button>
          <button className="btn btn-ghost btn-md btn-icon" aria-label="Filter">
            <UilFilter size="18" color="currentColor" />
          </button>
          <button className="btn btn-ghost btn-md btn-icon" aria-label="Refresh">
            <UilRedo size="18" color="currentColor" />
          </button>
          <button className="btn btn-ghost btn-md btn-icon" aria-label="More options">
            <UilEllipsisH size="18" color="currentColor" />
          </button>
        </div>
      </div>

    </div>
  )
}
