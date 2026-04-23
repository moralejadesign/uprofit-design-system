'use client'

import { useEffect, useState } from 'react'
import UilPalette       from '@iconscout/react-unicons/icons/uil-palette'
import UilFont          from '@iconscout/react-unicons/icons/uil-font'
import UilRulerCombined from '@iconscout/react-unicons/icons/uil-ruler-combined'
import UilSquareFull    from '@iconscout/react-unicons/icons/uil-square-full'
import UilTag           from '@iconscout/react-unicons/icons/uil-tag'
import UilListUiAlt     from '@iconscout/react-unicons/icons/uil-list-ui-alt'
import UilLayerGroup    from '@iconscout/react-unicons/icons/uil-layer-group'
import UilTable         from '@iconscout/react-unicons/icons/uil-table'
import UilBell          from '@iconscout/react-unicons/icons/uil-bell'
import UilWindowSection from '@iconscout/react-unicons/icons/uil-window-section'
import UilApps          from '@iconscout/react-unicons/icons/uil-apps'
import UilSun           from '@iconscout/react-unicons/icons/uil-sun'
import UilMoon          from '@iconscout/react-unicons/icons/uil-moon'
import UilBars          from '@iconscout/react-unicons/icons/uil-bars'
import UilTimes         from '@iconscout/react-unicons/icons/uil-times'

type NavItem  = { id: string; label: string; Icon: React.ElementType; soon?: boolean }
type NavGroup = { group: string; items: NavItem[] }

const nav: NavGroup[] = [
  {
    group: 'Foundation',
    items: [
      { id: 'colors',     label: 'Colors',          Icon: UilPalette },
      { id: 'typography', label: 'Typography',       Icon: UilFont },
      { id: 'spacing',    label: 'Spacing & Radius', Icon: UilRulerCombined },
    ],
  },
  {
    group: 'Components',
    items: [
      { id: 'buttons', label: 'Buttons',         Icon: UilSquareFull },
      { id: 'badges',  label: 'Badges & Status', Icon: UilTag },
      { id: 'forms',   label: 'Inputs & Forms',  Icon: UilListUiAlt },
      { id: 'cards',   label: 'Cards',           Icon: UilLayerGroup },
      { id: 'tables',  label: 'Tables',          Icon: UilTable },
      { id: 'alerts',  label: 'Alerts & Toasts', Icon: UilBell },
      { id: 'modals',  label: 'Modals',          Icon: UilWindowSection },
      { id: 'icons',   label: 'Icons',           Icon: UilApps },
    ],
  },
]

const allIds = nav.flatMap(g => g.items.filter(i => !i.soon).map(i => i.id))

export default function Sidebar() {
  const [active, setActive]           = useState('colors')
  const [theme, setTheme]             = useState<'dark' | 'light'>('dark')
  const [mobileOpen, setMobileOpen]   = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    allIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActive(id)
    setMobileOpen(false)
  }

  return (
    <>
      {/* Hamburger — mobile only */}
      <button className="mobile-nav-toggle" onClick={() => setMobileOpen(true)} aria-label="Open menu">
        <UilBars size="20" color="currentColor" />
      </button>

      {/* Overlay — mobile only */}
      <div
        className={`sidebar-overlay${mobileOpen ? ' open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      <aside className={`sidebar${mobileOpen ? ' mobile-open' : ''}`}>

        {/* Brand */}
        <div className="sidebar-brand">
          <div className="sidebar-logo">UP</div>
          <div>
            <div className="sidebar-title">UPROFIT</div>
            <div className="sidebar-subtitle">Design System V1.0</div>
          </div>
          <button className="sidebar-close-btn" onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <UilTimes size="18" color="currentColor" />
          </button>
        </div>

        {/* Theme toggle */}
        <button className="sidebar-theme-toggle" onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark'
            ? <UilSun size="16" color="currentColor" />
            : <UilMoon size="16" color="currentColor" />
          }
          <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
          <div className={`sidebar-toggle-pill${theme === 'light' ? ' on' : ''}`}>
            <div className="sidebar-toggle-thumb" />
          </div>
        </button>

        {/* Nav */}
        <nav className="sidebar-nav">
          {nav.map(({ group, items }) => (
            <div key={group} className="nav-group">
              <div className="nav-group-label">{group}</div>
              {items.map(({ id, label, Icon, soon }) => (
                <button
                  key={id}
                  className={`nav-item${active === id ? ' active' : ''}${soon ? ' soon' : ''}`}
                  onClick={() => !soon && scrollTo(id)}
                  disabled={soon}
                >
                  <Icon size="16" color="currentColor" />
                  <span>{label}</span>
                  {soon && <span className="nav-soon">Soon</span>}
                </button>
              ))}
            </div>
          ))}
        </nav>

      </aside>
    </>
  )
}
