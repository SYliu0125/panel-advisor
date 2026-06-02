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
          <a
            href="https://github.com/SYliu0125/panel-advisor"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text3)', fontSize: 12, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 5 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            GitHub
          </a>
        </div>
      </header>

      <main style={{ flex: 1, maxWidth: 1100, width: '100%', margin: '0 auto', padding: '28px 24px' }}>
        <PanelAdvisor />
      </main>

      <footer style={{ padding: '16px 24px', textAlign: 'center', fontSize: 12, color: 'var(--text3)', borderTop: '1px solid var(--border)' }}>
        230 diagnoses · 22 categories · IHC markers + molecular alterations
      </footer>

      {showChangelog && <ChangelogPanel onClose={() => setShowChangelog(false)} />}
    </div>
  )
}
