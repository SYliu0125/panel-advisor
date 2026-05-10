import { useState, useMemo } from 'react'
import { DIAGNOSES } from './panelAdvisor'

const ROLE_LABEL = { positive: 'Positive', negative: 'Negative', variable: 'Variable', screen: 'Screen', loss: 'Loss', retained: 'Retained' }
const ROLE_COLOR = {
  positive: 'var(--green)',
  negative: 'var(--red, #ef4444)',
  variable: 'var(--yellow)',
  screen: 'var(--accent)',
  loss: 'var(--red, #ef4444)',
  retained: 'var(--green)',
}
const ROLE_ORDER = { positive: 0, variable: 1, screen: 2, retained: 3, loss: 4, negative: 5 }

function scoreMatch(diagnosis, query) {
  const q = query.toLowerCase()
  const name = diagnosis.name.toLowerCase()
  const cat = diagnosis.category.toLowerCase()
  if (name === q) return 100
  if (name.startsWith(q)) return 80
  if (name.includes(q)) return 60
  if (cat.includes(q)) return 40
  const words = q.split(/\s+/).filter(Boolean)
  if (words.every(w => name.includes(w))) return 50
  const matchCount = words.filter(w => name.includes(w) || cat.includes(w)).length
  if (matchCount > 0) return matchCount * 10
  return 0
}

function RoleBadge({ role }) {
  return (
    <span style={{
      fontSize: 11, fontWeight: 600,
      color: ROLE_COLOR[role] || 'var(--text2)',
      background: `${ROLE_COLOR[role] || 'var(--text2)'}18`,
      padding: '2px 8px', borderRadius: 4,
    }}>
      {ROLE_LABEL[role] || role}
    </span>
  )
}

export default function PanelAdvisor({ onAddMarkers }) {
  const [mode, setMode] = useState('diagnosis') // 'diagnosis' | 'marker' | 'molecular'
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)
  const [picked, setPicked] = useState(new Set())

  const togglePick = (marker) => {
    setPicked(prev => {
      const next = new Set(prev)
      next.has(marker) ? next.delete(marker) : next.add(marker)
      return next
    })
  }

  const reset = () => { setQuery(''); setSelected(null); setPicked(new Set()) }

  // Diagnosis search results
  const diagnosisResults = useMemo(() => {
    if (mode !== 'diagnosis' || !query.trim()) return []
    return DIAGNOSES
      .map(d => ({ ...d, score: scoreMatch(d, query.trim()) }))
      .filter(d => d.score > 0)
      .sort((a, b) => b.score - a.score)
  }, [query, mode])

  // Marker search results: list of { diagnosis, category, marker entry } sorted by role
  const markerResults = useMemo(() => {
    if (mode !== 'marker' || !query.trim()) return []
    const q = query.trim().toLowerCase()
    const hits = []
    DIAGNOSES.forEach(d => {
      d.markers.forEach(m => {
        if (m.marker.toLowerCase().includes(q)) {
          hits.push({ diagnosis: d.name, category: d.category, diagnosisId: d.id, ...m })
        }
      })
    })
    return hits.sort((a, b) => (ROLE_ORDER[a.role] ?? 9) - (ROLE_ORDER[b.role] ?? 9))
  }, [query, mode])

  // Molecular search results: list of { diagnosis, category, diagnosisId, alteration, notes }
  const molecularResults = useMemo(() => {
    if (mode !== 'molecular' || !query.trim()) return []
    const q = query.trim().toLowerCase()
    const hits = []
    DIAGNOSES.forEach(d => {
      if (!d.molecular) return
      d.molecular.forEach(mol => {
        if (mol.alteration.toLowerCase().includes(q) || mol.notes.toLowerCase().includes(q)) {
          hits.push({ diagnosis: d.name, category: d.category, diagnosisId: d.id, ...mol })
        }
      })
    })
    return hits.sort((a, b) => a.diagnosis.localeCompare(b.diagnosis))
  }, [query, mode])

  const diagnosis = selected ? DIAGNOSES.find(d => d.id === selected) : null

  return (
    <div>
      {/* Mode toggle */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
        <button
          className={`filter-chip ${mode === 'diagnosis' ? 'active' : ''}`}
          onClick={() => { setMode('diagnosis'); reset() }}
        >
          Search by Diagnosis
        </button>
        <button
          className={`filter-chip ${mode === 'marker' ? 'active' : ''}`}
          onClick={() => { setMode('marker'); reset() }}
        >
          Search by Marker
        </button>
        <button
          className={`filter-chip ${mode === 'molecular' ? 'active' : ''}`}
          onClick={() => { setMode('molecular'); reset() }}
        >
          Search by Genetic Alteration
        </button>
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={{ marginBottom: 12 }}>
          <input
            className="input"
            placeholder={
              mode === 'diagnosis' ? 'Search diagnosis (e.g. lung adeno, melanoma, DLBCL...)' :
              mode === 'marker' ? 'Search marker (e.g. TTF-1, CD20, p40...)' :
              'Search gene or alteration (e.g. EWSR1, BRAF, ETV6-NTRK3, fusion...)'
            }
            value={query}
            onChange={e => { setQuery(e.target.value); setSelected(null); setPicked(new Set()) }}
            autoFocus
          />
        </div>

        {/* Diagnosis mode: chips */}
        {mode === 'diagnosis' && !selected && query.trim() && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {diagnosisResults.map(d => (
              <button
                key={d.id}
                className="filter-chip"
                onClick={() => { setSelected(d.id); setPicked(new Set()) }}
                style={{ fontSize: 13 }}
              >
                <span style={{ fontSize: 10, color: 'var(--text3)', marginRight: 4 }}>{d.category}</span>
                {d.name}
              </button>
            ))}
            {diagnosisResults.length === 0 && (
              <div className="empty-state" style={{ width: '100%' }}>
                <div className="empty-text">No matching diagnoses. Try a different search term.</div>
              </div>
            )}
          </div>
        )}

        {/* Molecular mode: reverse lookup table */}
        {mode === 'molecular' && query.trim() && (
          molecularResults.length === 0 ? (
            <div className="empty-state">
              <div className="empty-text">No matching alterations. Try a gene name, fusion partner, or keyword (e.g. fusion, mutation, deletion).</div>
            </div>
          ) : (
            <div className="card" style={{ padding: 0, overflow: 'hidden', marginTop: 8 }}>
              <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--border)', fontSize: 13, color: 'var(--text2)' }}>
                <strong style={{ color: 'var(--text)' }}>{molecularResults.length}</strong> result{molecularResults.length !== 1 ? 's' : ''} — sorted by diagnosis
              </div>
              <div className="table-scroll">
                <table className="order-table">
                  <thead>
                    <tr>
                      <th>Alteration</th>
                      <th>Diagnosis</th>
                      <th>Category</th>
                      <th style={{ minWidth: 280 }}>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {molecularResults.map((r, i) => (
                      <tr key={i}>
                        <td>
                          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 600, fontSize: 13, color: 'var(--accent)' }}>{r.alteration}</span>
                        </td>
                        <td>
                          <button
                            className="btn btn-ghost"
                            style={{ fontSize: 12, padding: '2px 8px', textAlign: 'left' }}
                            onClick={() => { setMode('diagnosis'); setQuery(r.diagnosis); setSelected(r.diagnosisId); setPicked(new Set()) }}
                          >
                            {r.diagnosis}
                          </button>
                        </td>
                        <td>
                          <span style={{ fontSize: 11, color: 'var(--text3)' }}>{r.category}</span>
                        </td>
                        <td>
                          <span style={{ fontSize: 12, color: 'var(--text2)' }}>{r.notes}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )
        )}

        {/* Marker mode: reverse lookup table */}
        {mode === 'marker' && query.trim() && (
          markerResults.length === 0 ? (
            <div className="empty-state">
              <div className="empty-text">No matching markers. Try a different search term.</div>
            </div>
          ) : (
            <div className="card" style={{ padding: 0, overflow: 'hidden', marginTop: 8 }}>
              <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--border)', fontSize: 13, color: 'var(--text2)' }}>
                <strong style={{ color: 'var(--text)' }}>{markerResults.length}</strong> result{markerResults.length !== 1 ? 's' : ''} — sorted by positivity
              </div>
              <div className="table-scroll">
                <table className="order-table">
                  <thead>
                    <tr>
                      <th>Marker</th>
                      <th>Diagnosis</th>
                      <th>Category</th>
                      <th>Expected</th>
                      <th>Sensitivity</th>
                      <th>Specificity</th>
                      <th style={{ minWidth: 240 }}>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {markerResults.map((r, i) => (
                      <tr key={i}>
                        <td>
                          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 600, fontSize: 13 }}>{r.marker}</span>
                        </td>
                        <td>
                          <button
                            className="btn btn-ghost"
                            style={{ fontSize: 12, padding: '2px 8px', textAlign: 'left' }}
                            onClick={() => { setMode('diagnosis'); setQuery(r.diagnosis); setSelected(r.diagnosisId); setPicked(new Set()) }}
                          >
                            {r.diagnosis}
                          </button>
                        </td>
                        <td>
                          <span style={{ fontSize: 11, color: 'var(--text3)' }}>{r.category}</span>
                        </td>
                        <td><RoleBadge role={r.role} /></td>
                        <td>
                          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 12, color: 'var(--text2)' }}>
                            {r.sensitivity || '—'}
                          </span>
                        </td>
                        <td>
                          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 12, color: 'var(--text2)' }}>
                            {r.specificity || '—'}
                          </span>
                        </td>
                        <td>
                          <span style={{ fontSize: 12, color: 'var(--text2)' }}>{r.notes}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )
        )}
      </div>

      {/* Disclaimer */}
      <div style={{ marginTop: 24, padding: '14px 16px', background: 'var(--surface2)', borderRadius: 8, borderLeft: '3px solid var(--yellow)', fontSize: 12, color: 'var(--text2)', lineHeight: 1.7 }}>
        <div style={{ fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>About this data</div>
        <p style={{ margin: 0 }}>
          Data sourced from the <em>Quick Reference Handbook for Surgical Pathologists</em> and Claude AI training data. This tool is a reference aid only — it does not constitute a diagnostic protocol and is not a substitute for institutional guidelines, clinical judgement, or current literature.
        </p>
      </div>

      {/* Diagnosis detail view */}
      {diagnosis && (
        <div className="card" style={{ padding: 0, overflow: 'hidden', marginTop: 24 }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
            <div>
              <div style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 2 }}>{diagnosis.category}</div>
              <div style={{ fontWeight: 600, fontSize: 17 }}>{diagnosis.name}</div>
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              {onAddMarkers && picked.size > 0 && (
                <button
                  className="btn btn-primary"
                  style={{ fontSize: 13 }}
                  onClick={() => { onAddMarkers([...picked]); setPicked(new Set()) }}
                >
                  + Add {picked.size} marker{picked.size !== 1 ? 's' : ''} to order
                </button>
              )}
              <button className="btn btn-ghost" style={{ fontSize: 13 }} onClick={() => { setSelected(null); setPicked(new Set()) }}>
                ← Back
              </button>
            </div>
          </div>

          <div className="table-scroll">
            <table className="order-table">
              <thead>
                <tr>
                  <th>Marker</th>
                  <th>Expected</th>
                  <th>Sensitivity</th>
                  <th>Specificity</th>
                  <th style={{ minWidth: 260 }}>Notes</th>
                  {onAddMarkers && <th></th>}
                </tr>
              </thead>
              <tbody>
                {diagnosis.markers.map((m, i) => (
                  <tr key={i}>
                    <td>
                      <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 600, fontSize: 13 }}>{m.marker}</span>
                    </td>
                    <td><RoleBadge role={m.role} /></td>
                    <td>
                      <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 12, color: 'var(--text2)' }}>
                        {m.sensitivity || '—'}
                      </span>
                    </td>
                    <td>
                      <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 12, color: 'var(--text2)' }}>
                        {m.specificity || '—'}
                      </span>
                    </td>
                    <td>
                      <span style={{ fontSize: 12, color: 'var(--text2)' }}>{m.notes}</span>
                    </td>
                    {onAddMarkers && (
                      <td>
                        <button
                          className="btn btn-ghost"
                          style={{
                            fontSize: 15, padding: '2px 10px', lineHeight: 1,
                            background: picked.has(m.marker) ? 'var(--accent)' : '',
                            color: picked.has(m.marker) ? '#fff' : '',
                            borderColor: picked.has(m.marker) ? 'var(--accent)' : '',
                          }}
                          title={picked.has(m.marker) ? `Deselect ${m.marker}` : `Select ${m.marker}`}
                          onClick={() => togglePick(m.marker)}
                        >
                          {picked.has(m.marker) ? '✓' : '+'}
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {diagnosis.molecular && diagnosis.molecular.length > 0 && (
            <div style={{ padding: '14px 20px', borderTop: '1px solid var(--border)', background: 'var(--surface2)' }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--accent)', marginBottom: 10, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Molecular Alterations
              </div>
              <table className="order-table" style={{ background: 'transparent' }}>
                <thead>
                  <tr>
                    <th style={{ background: 'transparent' }}>Alteration</th>
                    <th style={{ background: 'transparent', minWidth: 300 }}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {diagnosis.molecular.map((mol, i) => (
                    <tr key={i}>
                      <td>
                        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 600, fontSize: 13, color: 'var(--accent)' }}>
                          {mol.alteration}
                        </span>
                      </td>
                      <td>
                        <span style={{ fontSize: 12, color: 'var(--text2)' }}>{mol.notes}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
