import { useState } from 'react'
import PanelAdvisor from './PanelAdvisor.jsx'
import { CHANGELOG } from './changelog.js'

function ChangelogPanel({ onClose }) {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.45)',
          zIndex: 200, backdropFilter: 'blur(2px)',
        }}
      />
      {/* Panel */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, width: 420, maxWidth: '100vw',
        background: 'var(--surface)', borderLeft: '1px solid var(--border)',
        zIndex: 201, display: 'flex', flexDirection: 'column', overflowY: 'auto',
      }}>
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '16px 20px', borderBottom: '1px solid var(--border)',
          position: 'sticky', top: 0, background: 'var(--surface)', zIndex: 1,
        }}>
          <div>
            <div style={{ fontWeight: 600, fontSize: 15 }}>What's New</div>
            <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 2 }}>Data & content updates</div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--text3)', fontSize: 20, lineHeight: 1, padding: '4px 6px',
            }}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Entries */}
        <div style={{ padding: '8px 0 32px' }}>
          {CHANGELOG.map((entry, i) => (
            <div key={i} style={{ padding: '20px 20px 0' }}>
              {/* Date + label */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 6 }}>
                <span style={{
                  fontSize: 11, fontWeight: 600, fontFamily: 'IBM Plex Mono, monospace',
                  color: 'var(--accent)', letterSpacing: '0.04em',
                }}>
                  {entry.date}
                </span>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>
                  {entry.label}
                </span>
              </div>

              {/* Summary */}
              <p style={{ fontSize: 12, color: 'var(--text2)', marginBottom: 12, lineHeight: 1.6 }}>
                {entry.summary}
              </p>

              {/* Sections */}
              {entry.sections.map((s, j) => (
                <div key={j} style={{ marginBottom: 10 }}>
                  <div style={{
                    fontSize: 10, fontWeight: 600, textTransform: 'uppercase',
                    letterSpacing: '0.07em', color: 'var(--text3)', marginBottom: 4,
                  }}>
                    {s.heading}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                    {s.items.map((item, k) => (
                      <span key={k} style={{
                        fontSize: 11, padding: '2px 8px', borderRadius: 4,
                        background: 'var(--surface2)', color: 'var(--text2)',
                        border: '1px solid var(--border)',
                      }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* Fixes */}
              {entry.fixes && entry.fixes.length > 0 && (
                <div style={{ marginTop: 10 }}>
                  <div style={{
                    fontSize: 10, fontWeight: 600, textTransform: 'uppercase',
                    letterSpacing: '0.07em', color: 'var(--text3)', marginBottom: 4,
                  }}>
                    Corrections
                  </div>
                  {entry.fixes.map((fix, k) => (
                    <div key={k} style={{
                      fontSize: 11, color: 'var(--text2)', lineHeight: 1.6,
                      paddingLeft: 10, borderLeft: '2px solid var(--yellow)',
                      marginBottom: 4,
                    }}>
                      {fix}
                    </div>
                  ))}
                </div>
              )}

              {/* Divider */}
              {i < CHANGELOG.length - 1 && (
                <div style={{ borderBottom: '1px solid var(--border)', marginTop: 20 }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default function App() {
  const [showChangelog, setShowChangelog] = useState(false)

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)', display: 'flex', flexDirection: 'column' }}>
      <header style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 24px', height: 56, background: 'var(--surface)',
        borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, zIndex: 100,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <span style={{ fontWeight: 600, fontSize: 15, letterSpacing: '-0.2px' }}>IHC Panel Advisor</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button
            onClick={() => setShowChangelog(true)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: 0,
              color: 'var(--text3)', fontSize: 12, display: 'flex', alignItems: 'center', gap: 5,
              fontFamily: 'inherit',
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            What's New
          </button>
        </div>
      </header>

      <main style={{ flex: 1, maxWidth: 1100, width: '100%', margin: '0 auto', padding: '28px 24px' }}>
        <PanelAdvisor />
      </main>

      <footer style={{ padding: '16px 24px', textAlign: 'center', fontSize: 12, color: 'var(--text3)', borderTop: '1px solid var(--border)' }}>
        242 diagnoses · 22 categories · IHC markers + molecular alterations
      </footer>

      {showChangelog && <ChangelogPanel onClose={() => setShowChangelog(false)} />}
    </div>
  )
}
