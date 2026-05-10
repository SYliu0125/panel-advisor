// Panel Advisor diagnosis data
// Sources: Quick Reference Handbook for Surgical Pathologists (Rekhtman et al.),
// Dabbs' Diagnostic Immunohistochemistry, WHO Classification of Tumours,
// and peer-reviewed pathology literature.
// Sensitivity/specificity values are approximate ranges.

export const DIAGNOSES = [
  {
    "id": "lung-adeno",
    "name": "Lung Adenocarcinoma",
    "category": "Lung",
    "markers": [
      {
        "marker": "TTF-1",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "high",
        "notes": "Clone 8G7G3/1 preferred — more specific than SPT24. Negative TTF-1 does not exclude lung primary (~20% are TTF-1–). Watch out: 8G7G3/1 can stain some GYN carcinomas."
      },
      {
        "marker": "Napsin-A",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "high",
        "notes": "Similar sensitivity to TTF-1; some adenoCAs stain for one but not both. Use together with TTF-1 for best yield. Use monoclonal only. Also positive in papillary RCC, GYN clear cell CA."
      },
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "low",
        "notes": "Diffuse strong. Non-specific; supports carcinoma lineage."
      },
      {
        "marker": "CK20",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually negative. Positivity suggests colorectal or mucinous primary."
      },
      {
        "marker": "p40",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative. Unlike p63, p40 does not cross-react with adenoCA."
      },
      {
        "marker": "p63",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "~30% focal positivity in adenoCA. Prefer p40 over p63 for squamous confirmation."
      },
      {
        "marker": "NE markers (SYN/CHR/CD56)",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative. Positivity suggests NE differentiation (carcinoid, SCLC, LCNEC)."
      }
    ]
  },
  {
    "id": "lung-mucinous-adeno",
    "name": "Lung Invasive Mucinous Adenocarcinoma",
    "category": "Lung",
    "markers": [
      {
        "marker": "TTF-1",
        "role": "variable",
        "sensitivity": "~15%",
        "specificity": "—",
        "notes": "Only ~15% focally positive. Morphologically and immunophenotypically mimics metastatic pancreatic/upper GI adenoCA."
      },
      {
        "marker": "Napsin-A",
        "role": "variable",
        "sensitivity": "~15%",
        "specificity": "—",
        "notes": "Focal in minority. If TTF-1/Napsin A positive → favour lung primary."
      },
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Usually positive."
      },
      {
        "marker": "CK20",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Variable; can be CK7+/CK20+ — overlaps with pancreatic/upper GI."
      },
      {
        "marker": "CDX2",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Focal positive in subset. Overlaps with GI metastasis."
      },
      {
        "marker": "DPC4/SMAD4",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Retained in lung IMA. Loss (~55%) is specific for pancreatic primary — useful if antibody works in your lab."
      }
    ]
  },
  {
    "id": "lung-scc",
    "name": "Lung Squamous Cell Carcinoma",
    "category": "Lung",
    "markers": [
      {
        "marker": "p40",
        "role": "positive",
        "sensitivity": "~98%",
        "specificity": "~99%",
        "notes": "Preferred over p63. Does not cross-react with adenoCA or lymphoma."
      },
      {
        "marker": "p63",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "lower",
        "notes": "Sensitive but ~30% of adenoCAs are also p63+. Use p40 preferentially."
      },
      {
        "marker": "CK5/6",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Supports squamous; also positive in mesothelioma."
      },
      {
        "marker": "CK903",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "HMWCK; supports squamous differentiation."
      },
      {
        "marker": "TTF-1",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative. Rare focal TTF-1 possible; strong positivity argues against SqCC."
      },
      {
        "marker": "Napsin-A",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Essentially always negative."
      },
      {
        "marker": "GATA3",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Frequently positive in lung SqCC — GATA3 is NOT useful to identify breast or urothelial primary in this context."
      }
    ]
  },
  {
    "id": "lung-sclc",
    "name": "Small Cell Lung Carcinoma (SCLC)",
    "category": "Lung",
    "markers": [
      {
        "marker": "TTF-1",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive in ~90% of pulmonary SCLC. NOT specific for lung: >50% of extrapulmonary SCLC are also TTF-1+."
      },
      {
        "marker": "Synaptophysin",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Often weak or focal; 20% of cases negative for both SYN and CHR — look for CD56."
      },
      {
        "marker": "Chromogranin A",
        "role": "positive",
        "sensitivity": "~60–80%",
        "specificity": "—",
        "notes": "Frequently weak/focal; less sensitive than SYN in SCLC."
      },
      {
        "marker": "CD56",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Most sensitive NE marker in SCLC. Positive even when SYN/CHR negative."
      },
      {
        "marker": "INSM1",
        "role": "positive",
        "sensitivity": "high",
        "specificity": "high",
        "notes": "New nuclear NE marker. Emerging as sensitive and specific for NE differentiation."
      },
      {
        "marker": "Ki-67",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Typically >70–80%. Useful in crushed specimens to distinguish from carcinoid (Ki-67 <20%)."
      },
      {
        "marker": "AE1/AE3",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Perinuclear dot-like pattern characteristic. Diffuse p40/CK903/CK5/6 positivity excludes SCLC."
      },
      {
        "marker": "p40",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative. Diffuse p40 positivity excludes SCLC (favours basaloid SqCC)."
      }
    ]
  },
  {
    "id": "lung-lcnec",
    "name": "Large Cell Neuroendocrine Carcinoma (LCNEC)",
    "category": "Lung",
    "markers": [
      {
        "marker": "Synaptophysin",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Required for NE designation."
      },
      {
        "marker": "Chromogranin A",
        "role": "positive",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Variable; less sensitive than SYN."
      },
      {
        "marker": "CD56",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Most sensitive NE marker."
      },
      {
        "marker": "INSM1",
        "role": "positive",
        "sensitivity": "high",
        "specificity": "—",
        "notes": "New nuclear NE marker; data emerging."
      },
      {
        "marker": "TTF-1",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Less often positive than in SCLC."
      },
      {
        "marker": "Ki-67",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Typically 40–80%. Overlaps with SCLC; morphology required for classification."
      },
      {
        "marker": "p40",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; diffuse p40 positivity excludes LCNEC."
      }
    ]
  },
  {
    "id": "lung-carcinoid",
    "name": "Pulmonary Carcinoid (Typical & Atypical)",
    "category": "Lung",
    "markers": [
      {
        "marker": "Synaptophysin",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse strong positivity. Consistent diffuse staining distinguishes carcinoid from SCLC (where NE markers can be focal/weak)."
      },
      {
        "marker": "Chromogranin A",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Diffuse strong. More specific than synaptophysin for well-differentiated NET."
      },
      {
        "marker": "CD56",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Sensitive NE marker."
      },
      {
        "marker": "INSM1",
        "role": "positive",
        "sensitivity": "high",
        "specificity": "—",
        "notes": "New nuclear NE marker."
      },
      {
        "marker": "TTF-1",
        "role": "variable",
        "sensitivity": "TC ~30%, AC ~50%",
        "specificity": "—",
        "notes": "TTF-1 positive in pulmonary carcinoids but NOT in GI carcinoids — useful for site of origin."
      },
      {
        "marker": "Ki-67",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Typical carcinoid <2% (mean 1%), atypical carcinoid <20% (mean 10%). Always perform in crushed NE specimens."
      },
      {
        "marker": "p40",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative."
      }
    ]
  },
  {
    "id": "mesothelioma",
    "name": "Malignant Mesothelioma (Epithelioid)",
    "category": "Mesothelioma",
    "markers": [
      {
        "marker": "Calretinin",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Must be BOTH nuclear AND cytoplasmic to count as positive. Most sensitive mesothelial marker."
      },
      {
        "marker": "WT1",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Nuclear. Also positive in ovarian serous CA — use Claudin-4/PAX8 to distinguish."
      },
      {
        "marker": "D2-40",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Membranous mesothelial/lymphatic marker."
      },
      {
        "marker": "CK5/6",
        "role": "positive",
        "sensitivity": "~75%",
        "specificity": "—",
        "notes": "Supports mesothelial; also positive in SqCC."
      },
      {
        "marker": "Claudin-4",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "New first-line marker. Strong membranous staining highly specific for carcinoma. Mesothelioma is consistently Claudin-4 negative."
      },
      {
        "marker": "Ber-EP4",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in mesothelioma; positive in most adenocarcinomas. Useful in effusion cytology."
      },
      {
        "marker": "MOC31",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Currently considered best marker to distinguish adenoCA (+) from mesothelioma (–)."
      },
      {
        "marker": "TTF-1",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative. Always include in pleural biopsies to exclude lung adenoCA."
      },
      {
        "marker": "Napsin-A",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative. Excludes lung adenoCA."
      },
      {
        "marker": "CEA",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Use monoclonal CEA. Negative in mesothelioma; positive in adenoCA."
      },
      {
        "marker": "BAP1",
        "role": "loss",
        "sensitivity": "~40%",
        "specificity": "~99%",
        "notes": "Loss of nuclear staining in ~40% mesothelioma (more in epithelioid). Highly specific for malignant mesothelioma vs. reactive mesothelial proliferation. Do BAP1 IHC first; if retained, proceed to p16 FISH."
      },
      {
        "marker": "PAX8",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually negative. Note: some peritoneal mesotheliomas can be PAX8+ — potential pitfall."
      }
    ]
  },
  {
    "id": "thymic-carcinoma",
    "name": "Thymic Carcinoma",
    "category": "Thymus",
    "markers": [
      {
        "marker": "CD5",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Expressed in thymic epithelium (not lymphocytes alone). Useful to distinguish thymic carcinoma from non-thymic carcinoma."
      },
      {
        "marker": "CD117",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "CD117/c-kit expression in thymic carcinoma."
      },
      {
        "marker": "PAX8",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Primarily applies to polyclonal PAX8 antibody. Distinguishes thymic carcinoma from lung CA (PAX8–); does not help vs. renal/Müllerian/thyroid."
      },
      {
        "marker": "AE1/AE3",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Epithelial marker; positive in carcinomatous component."
      },
      {
        "marker": "TdT",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in thymic carcinoma (positive in thymoma lymphocytes and T-ALL)."
      }
    ]
  },
  {
    "id": "breast-invasive",
    "name": "Invasive Breast Carcinoma",
    "category": "Breast",
    "markers": [
      {
        "marker": "GATA3",
        "role": "positive",
        "sensitivity": ">90%",
        "specificity": "moderate",
        "notes": "Highly sensitive including ~40% of triple-negative cases. Not specific: also in urothelial CA, many SqCCs, salivary gland tumors, skin adnexal tumors."
      },
      {
        "marker": "GCDFP-15",
        "role": "positive",
        "sensitivity": "~50–70%",
        "specificity": "high",
        "notes": "Highly specific but lower sensitivity."
      },
      {
        "marker": "Mammaglobin",
        "role": "positive",
        "sensitivity": "~50–75%",
        "specificity": "high",
        "notes": "High specificity; use with GATA3 for best yield."
      },
      {
        "marker": "ER",
        "role": "variable",
        "sensitivity": "~75%",
        "specificity": "—",
        "notes": "Score: ≥1% any intensity = positive. Lung adenoCA can be ER+ (especially with 6F11/SP1 clone) — favour 1D5 clone or confirm with PR and TTF-1."
      },
      {
        "marker": "PR",
        "role": "variable",
        "sensitivity": "~60–70%",
        "specificity": "—",
        "notes": "ER controls PR synthesis. ER+/PR– not uncommon; ER–/PR+ should prompt re-testing."
      },
      {
        "marker": "HER2",
        "role": "variable",
        "sensitivity": "~15–20%",
        "specificity": "—",
        "notes": "Score 3+ = positive; 2+ = equivocal → reflex FISH. Therapeutic target (trastuzumab)."
      },
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Essentially always positive; non-specific."
      },
      {
        "marker": "CK20",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Essentially always negative."
      },
      {
        "marker": "PAX8",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative. Useful to distinguish breast (PAX8–) from GYN tract (PAX8+) when ER/PR+."
      },
      {
        "marker": "E-cadherin",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Membranous positivity in ductal type. Loss = lobular carcinoma (in situ and invasive). Key marker to distinguish ductal from lobular."
      }
    ]
  },
  {
    "id": "breast-lobular",
    "name": "Lobular Breast Carcinoma",
    "category": "Breast",
    "markers": [
      {
        "marker": "E-cadherin",
        "role": "negative",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Loss of membranous E-cadherin is hallmark of lobular carcinoma. Negative = lobular; positive = ductal."
      },
      {
        "marker": "GATA3",
        "role": "positive",
        "sensitivity": ">90%",
        "specificity": "—",
        "notes": "Same as ductal; highly sensitive breast marker."
      },
      {
        "marker": "ER",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Most lobular carcinomas are strongly ER+."
      },
      {
        "marker": "PR",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Usually PR+."
      },
      {
        "marker": "HER2",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually HER2– in classic lobular carcinoma."
      },
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Positive."
      }
    ]
  },
  {
    "id": "prostate-adeno",
    "name": "Prostate Adenocarcinoma",
    "category": "Prostate",
    "markers": [
      {
        "marker": "NKX3.1",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "~97%",
        "notes": "Currently considered most sensitive and specific prostate marker. Maintained in high-grade tumours. Beware: can stain subset of male breast cancers."
      },
      {
        "marker": "PSA",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "~97%",
        "notes": "Highly specific. May be lost after androgen deprivation therapy. Cross-reacts with salivary duct CA and some bladder adenoCA."
      },
      {
        "marker": "PSAP",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "More sensitive than PSA. Note: PSAP cross-reacts with rectal carcinoid — do not misinterpret as prostate CA."
      },
      {
        "marker": "ERG",
        "role": "variable",
        "sensitivity": "~40–50%",
        "specificity": "high",
        "notes": "Result of TMPRSS2-ERG rearrangement. Not sensitive enough alone; when positive, highly specific for prostate."
      },
      {
        "marker": "AMACR/P504S",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive in malignant glands; useful in biopsy setting alongside basal cell markers."
      },
      {
        "marker": "p63",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Basal cell marker — absent in invasive adenocarcinoma. Present in benign glands. Key diagnostic marker."
      },
      {
        "marker": "CK903",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "HMWCK basal cell marker — absent in invasive adenocarcinoma."
      },
      {
        "marker": "CK5/6",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Basal cell marker; absent in invasive carcinoma."
      },
      {
        "marker": "CK7",
        "role": "negative",
        "sensitivity": "~5%",
        "specificity": "—",
        "notes": "Usually negative (CK7–/CK20–). Positivity should prompt reconsideration."
      },
      {
        "marker": "CAM5.2",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "LMWCK positive; pan-CK can be negative in prostate CA."
      }
    ],
    "molecular": [
      {
        "alteration": "TMPRSS2-ERG fusion 21q22 deletion",
        "notes": "~50% of prostate carcinomas. ERG IHC can confirm prostate origin (specific but only in 50% of cases). Androgen-driven gene fusion."
      }
    ]
  },
  {
    "id": "urothelial",
    "name": "Urothelial Carcinoma",
    "category": "Urinary",
    "markers": [
      {
        "marker": "GATA3",
        "role": "positive",
        "sensitivity": "~85–90%",
        "specificity": "—",
        "notes": "Most sensitive urothelial marker. Also positive in breast CA and SqCCs — context-dependent."
      },
      {
        "marker": "Uroplakin II",
        "role": "positive",
        "sensitivity": ">70%",
        "specificity": "~99%",
        "notes": "New antibody — more sensitive than Uroplakin III while retaining high specificity."
      },
      {
        "marker": "Uroplakin III",
        "role": "positive",
        "sensitivity": "~15–50%",
        "specificity": "high",
        "notes": "Highly specific but low sensitivity; being superseded by Uroplakin II."
      },
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Almost always positive."
      },
      {
        "marker": "CK20",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variable; CK7+/CK20+ profile strongly favours bladder (vs CK7+/CK20– = lung SqCC)."
      },
      {
        "marker": "p63",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Supports urothelial/squamous lineage."
      },
      {
        "marker": "CK903",
        "role": "positive",
        "sensitivity": "~75%",
        "specificity": "—",
        "notes": "Expressed in urothelial CA — useful in DDx vs. prostate CA (prostate CA is CK903–)."
      },
      {
        "marker": "PSA",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; excludes prostate origin."
      }
    ]
  },
  {
    "id": "renal-clear-cell",
    "name": "Renal Cell Carcinoma — Clear Cell",
    "category": "Urinary",
    "markers": [
      {
        "marker": "PAX8",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Most sensitive renal marker. Also positive in thyroid and Müllerian tumours — use with site-specific markers."
      },
      {
        "marker": "CAIX",
        "role": "positive",
        "sensitivity": "~85–95%",
        "specificity": "—",
        "notes": "Diffuse membranous positivity; relates to VHL mutation/HIF pathway. Specific for clear cell subtype."
      },
      {
        "marker": "CD10",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Membranous/luminal pattern; supports renal origin."
      },
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Diffuse; non-specific."
      },
      {
        "marker": "EMA",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Often positive; helpful when CKs are weak/negative (RCC can be pan-CK variable)."
      },
      {
        "marker": "CK7",
        "role": "negative",
        "sensitivity": "~5%",
        "specificity": "—",
        "notes": "Usually negative in clear cell RCC. Positivity favours papillary RCC."
      },
      {
        "marker": "TTF-1",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; excludes lung/thyroid primary."
      }
    ],
    "molecular": [
      {
        "alteration": "VHL gene inactivation",
        "notes": "~90% of clear cell RCC; biallelic loss via mutation, deletion, or promoter methylation. Drives HIF pathway → CAIX overexpression (IHC surrogate). Germline VHL = von Hippel-Lindau disease. VHL loss predicts response to VEGF-targeted therapy."
      }
    ]
  },
  {
    "id": "renal-papillary",
    "name": "Renal Cell Carcinoma — Papillary",
    "category": "Urinary",
    "markers": [
      {
        "marker": "PAX8",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Sensitive renal marker."
      },
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "More often positive than in clear cell RCC — useful distinction."
      },
      {
        "marker": "AMACR/P504S",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Strong diffuse positivity; distinguishes from clear cell RCC."
      },
      {
        "marker": "CD10",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variable; weaker than in clear cell RCC."
      },
      {
        "marker": "CAIX",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; helps distinguish from clear cell RCC."
      },
      {
        "marker": "Napsin-A",
        "role": "positive",
        "sensitivity": "~60–80%",
        "specificity": "—",
        "notes": "Positive in papillary RCC — potential pitfall when evaluating for lung adenoCA."
      }
    ],
    "molecular": [
      {
        "alteration": "Trisomy 7 and 17",
        "notes": "Characteristic chromosomal gains in papillary RCC type 1; detected by FISH or cytogenetics."
      },
      {
        "alteration": "MET mutations",
        "notes": "Activating MET mutations in hereditary papillary RCC type 1 (HPRC) and subset of sporadic type 1 papillary RCC. MET inhibitors under investigation."
      }
    ]
  },
  {
    "id": "colorectal-adeno",
    "name": "Colorectal Adenocarcinoma",
    "category": "Gastrointestinal",
    "markers": [
      {
        "marker": "CDX2",
        "role": "positive",
        "sensitivity": "~90–95%",
        "specificity": "—",
        "notes": "Most sensitive intestinal marker. Nuclear. Note: CDX2 loss occurs in ~10% and may predict poor prognosis / benefit from adjuvant chemotherapy."
      },
      {
        "marker": "SATB2",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "~95%",
        "notes": "Highly specific for lower GI origin. Nuclear. Useful in CUP workup."
      },
      {
        "marker": "CK20",
        "role": "positive",
        "sensitivity": "~80–90%",
        "specificity": "—",
        "notes": "Classic marker. Diffuse positivity."
      },
      {
        "marker": "CK7",
        "role": "negative",
        "sensitivity": "~20%",
        "specificity": "—",
        "notes": "Usually CK7–. CK7+/CK20+ pattern = upper GI/pancreatic; CK7–/CK20+ = colorectal."
      },
      {
        "marker": "MMR proteins (MLH1/MSH2/MSH6/PMS2)",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Loss of one or more proteins = MMR deficient (dMMR/MSI-H). ~15% of sporadic CRC; associated with Lynch syndrome when germline mutation. Predictive for immunotherapy (PD-1 inhibitors) and resistance to 5-FU."
      }
    ],
    "molecular": [
      {
        "alteration": "APC inactivation",
        "notes": "~80% of sporadic CRC; biallelic APC loss drives WNT/β-catenin pathway. Germline APC = familial adenomatous polyposis (FAP)."
      },
      {
        "alteration": "KRAS/NRAS mutations",
        "notes": "~40-50% of CRC; RAS mutations predict resistance to anti-EGFR antibodies (cetuximab/panitumumab). Must be wild-type for anti-EGFR therapy."
      },
      {
        "alteration": "BRAF V600E",
        "notes": "~5-20% of CRC; associated with MLH1 promoter hypermethylation/MSI-H and serrated pathway. Sporadic MSI-H CRC is BRAF V600E+ (vs Lynch syndrome which is BRAF wild-type). BRAF + MEK inhibitors approved in combination with anti-EGFR."
      }
    ]
  },
  {
    "id": "gastric-adeno",
    "name": "Gastric Adenocarcinoma",
    "category": "Gastrointestinal",
    "markers": [
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~75%",
        "specificity": "—",
        "notes": "Often positive; non-specific."
      },
      {
        "marker": "CK20",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Variable; less often than colorectal."
      },
      {
        "marker": "CDX2",
        "role": "variable",
        "sensitivity": "~50–70%",
        "specificity": "—",
        "notes": "Positive in intestinal-type; often negative in diffuse-type (signet ring)."
      },
      {
        "marker": "SATB2",
        "role": "negative",
        "sensitivity": "~15%",
        "specificity": "—",
        "notes": "Usually negative; helps exclude colorectal primary."
      },
      {
        "marker": "HER2",
        "role": "variable",
        "sensitivity": "~15–20%",
        "specificity": "—",
        "notes": "Overexpression/amplification in 15–20%; therapeutic target (trastuzumab). Score differs from breast (basolateral membrane counts)."
      },
      {
        "marker": "PD-L1",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Assessed in gastric CA for immunotherapy eligibility."
      },
      {
        "marker": "EBV (EBER ISH)",
        "role": "variable",
        "sensitivity": "~10%",
        "specificity": "—",
        "notes": "EBV-positive gastric carcinoma: ~10%; associated with dense lymphoid stroma (lymphoepithelioma-like pattern)."
      }
    ]
  },
  {
    "id": "pancreatic-ductal",
    "name": "Pancreatic Ductal Adenocarcinoma",
    "category": "Gastrointestinal",
    "markers": [
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Almost always positive."
      },
      {
        "marker": "CK20",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Focal/variable."
      },
      {
        "marker": "DPC4/SMAD4",
        "role": "loss",
        "sensitivity": "~55%",
        "specificity": "~99%",
        "notes": "Loss in 55% of pancreatic CA. Highly specific; also lost in gallbladder (19%), colon (11%), but not ovary/appendix/stomach. Finicky antibody — check if it works in your lab."
      },
      {
        "marker": "MUC1",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Supports ductal adenocarcinoma over IPMN with low-grade dysplasia."
      },
      {
        "marker": "CK19",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Ductal marker; also positive in cholangiocarcinoma."
      }
    ]
  },
  {
    "id": "pancreatic-net",
    "name": "Pancreatic Neuroendocrine Tumour (PanNET)",
    "category": "Gastrointestinal",
    "markers": [
      {
        "marker": "Synaptophysin",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse strong positivity."
      },
      {
        "marker": "Chromogranin A",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "More specific than SYN; patchy acceptable."
      },
      {
        "marker": "CD56",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Sensitive NE marker."
      },
      {
        "marker": "INSM1",
        "role": "positive",
        "sensitivity": "high",
        "specificity": "—",
        "notes": "New nuclear NE marker."
      },
      {
        "marker": "PAX8",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive in PanNET. Helps confirm pancreatic origin in metastatic setting."
      },
      {
        "marker": "ISL1",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Distinguishes PanNET (+) from ileal NET (–) and lung carcinoid (–). Useful in CUP setting for metastatic NET."
      },
      {
        "marker": "Ki-67",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Grading: G1 <3%, G2 3–20%, G3 >20%. Essential for WHO grading. Must be reported."
      },
      {
        "marker": "TTF-1",
        "role": "negative",
        "sensitivity": "~5%",
        "specificity": "—",
        "notes": "Usually negative; positivity suggests lung or thyroid origin."
      }
    ]
  },
  {
    "id": "hepatocellular",
    "name": "Hepatocellular Carcinoma (HCC)",
    "category": "Gastrointestinal",
    "markers": [
      {
        "marker": "Arginase-1",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "~96%",
        "notes": "More sensitive and specific than HepPar1; best current hepatocellular marker."
      },
      {
        "marker": "HepPar1",
        "role": "positive",
        "sensitivity": "~80–90%",
        "specificity": "~90%",
        "notes": "Granular cytoplasmic. Second-line if Arginase-1 negative. Less sensitive in poorly differentiated HCC."
      },
      {
        "marker": "Glypican-3",
        "role": "positive",
        "sensitivity": "~75–85%",
        "specificity": "~95%",
        "notes": "Positive in malignant hepatocytes; negative in benign hepatocytes — useful for HCC vs. benign nodule."
      },
      {
        "marker": "AFP",
        "role": "variable",
        "sensitivity": "~40–50%",
        "specificity": "—",
        "notes": "Low sensitivity but when positive, highly specific."
      },
      {
        "marker": "CD34",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Sinusoidal capillarisation pattern in HCC; not a primary diagnostic marker."
      },
      {
        "marker": "CK7",
        "role": "negative",
        "sensitivity": "~10%",
        "specificity": "—",
        "notes": "Usually negative. CK7 positivity suggests fibrolamellar variant or cholangiocarcinoma."
      },
      {
        "marker": "CK20",
        "role": "negative",
        "sensitivity": "~5%",
        "specificity": "—",
        "notes": "Usually negative."
      },
      {
        "marker": "EMA",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually negative in HCC vs. benign hepatocellular nodules."
      }
    ],
    "molecular": [
      {
        "alteration": "DNAJB1-PRKACA fusion (19p13.12 intrachromosomal deletion)",
        "notes": ">90% of fibrolamellar HCC (FL-HCC). Specific for FL-HCC; can be detected by FISH, RNA sequencing, or IHC (PRKACA overexpression surrogate). FL-HCC occurs in young patients without cirrhosis."
      }
    ]
  },
  {
    "id": "cholangiocarcinoma",
    "name": "Intrahepatic Cholangiocarcinoma",
    "category": "Gastrointestinal",
    "markers": [
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Diffuse strong. Non-specific for biliary origin."
      },
      {
        "marker": "CK19",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Biliary marker; also positive in pancreatic adenoCA."
      },
      {
        "marker": "CK20",
        "role": "negative",
        "sensitivity": "~20%",
        "specificity": "—",
        "notes": "Helps distinguish from colorectal."
      },
      {
        "marker": "Arginase-1",
        "role": "negative",
        "sensitivity": "~2%",
        "specificity": "—",
        "notes": "Negative — key to exclude HCC."
      },
      {
        "marker": "HepPar1",
        "role": "negative",
        "sensitivity": "~5%",
        "specificity": "—",
        "notes": "Negative; excludes HCC. Note: no good marker exists that is specific for cholangiocarcinoma."
      },
      {
        "marker": "CDX2",
        "role": "negative",
        "sensitivity": "~10%",
        "specificity": "—",
        "notes": "Usually negative; helps exclude colorectal metastasis."
      }
    ]
  },
  {
    "id": "ovarian-hgsc",
    "name": "Ovarian High-Grade Serous Carcinoma",
    "category": "Gynaecologic",
    "markers": [
      {
        "marker": "PAX8",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Pan-Müllerian marker. Also expressed in renal and thyroid CA."
      },
      {
        "marker": "WT1",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Best marker for ovarian serous CA. WT1 usually negative in uterine serous CA — helps distinguish ovarian from endometrial primary."
      },
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse strong; non-specific."
      },
      {
        "marker": "p53",
        "role": "abnormal",
        "sensitivity": "~80–90%",
        "specificity": "—",
        "notes": "Abnormal pattern = diffuse strong (mutant) OR completely absent (null). Wild-type = scattered variable weak. Abnormal p53 supports HGSC."
      },
      {
        "marker": "p16",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Diffuse strong positivity (unrelated to HPV here). Distinguishes HGSC from endometrioid CA (p16 patchy/negative)."
      },
      {
        "marker": "ER",
        "role": "variable",
        "sensitivity": "~50–60%",
        "specificity": "—",
        "notes": "Variable; also positive in endometrial CA and breast CA."
      },
      {
        "marker": "CK20",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Essentially always negative."
      }
    ]
  },
  {
    "id": "endometrial-endometrioid",
    "name": "Endometrial Endometrioid Carcinoma",
    "category": "Gynaecologic",
    "markers": [
      {
        "marker": "PAX8",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Sensitive Müllerian marker."
      },
      {
        "marker": "ER",
        "role": "positive",
        "sensitivity": ">90%",
        "specificity": "—",
        "notes": "Strongly positive in the majority. Prognostic and therapeutic."
      },
      {
        "marker": "PR",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Usually positive; prognostic."
      },
      {
        "marker": "p53",
        "role": "wild-type",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Wild-type pattern in most grade 1–2 cases. Abnormal p53 in ~15% of high-grade (grade 3) endometrioid CA."
      },
      {
        "marker": "p16",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Patchy or negative — distinguishes from serous CA (p16 diffuse strong)."
      },
      {
        "marker": "WT1",
        "role": "negative",
        "sensitivity": "~10%",
        "specificity": "—",
        "notes": "Usually negative — key distinction from ovarian serous CA (WT1+)."
      },
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Supports endometrial origin; non-specific."
      }
    ]
  },
  {
    "id": "endometrial-serous",
    "name": "Endometrial Serous Carcinoma",
    "category": "Gynaecologic",
    "markers": [
      {
        "marker": "PAX8",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Müllerian marker."
      },
      {
        "marker": "p53",
        "role": "abnormal",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Abnormal p53 (diffuse or null). Similar to ovarian HGSC."
      },
      {
        "marker": "p16",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Diffuse strong. Not HPV-related here."
      },
      {
        "marker": "WT1",
        "role": "negative",
        "sensitivity": "~10%",
        "specificity": "—",
        "notes": "WT1 usually negative in UTERINE serous CA — distinguishes from ovarian HGSC (WT1+)."
      },
      {
        "marker": "ER",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variable; less than endometrioid."
      },
      {
        "marker": "Ki-67",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "High proliferation index."
      }
    ]
  },
  {
    "id": "ovarian-clear-cell",
    "name": "Ovarian/Endometrial Clear Cell Carcinoma",
    "category": "Gynaecologic",
    "markers": [
      {
        "marker": "PAX8",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Müllerian marker."
      },
      {
        "marker": "Napsin-A",
        "role": "positive",
        "sensitivity": "~60–80%",
        "specificity": "—",
        "notes": "Positive in clear cell CA of GYN tract. Also positive in lung adenoCA and papillary RCC — potential pitfall."
      },
      {
        "marker": "HNF-1β",
        "role": "positive",
        "sensitivity": "~70–80%",
        "specificity": "—",
        "notes": "Nuclear marker of clear cell CA. Used alongside Napsin A to distinguish clear cell CA from serous and endometrioid CAs."
      },
      {
        "marker": "p53",
        "role": "wild-type",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually wild-type pattern."
      },
      {
        "marker": "WT1",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; distinguishes from HGSC."
      },
      {
        "marker": "ER",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually negative."
      }
    ]
  },
  {
    "id": "cervical-adeno",
    "name": "Cervical Adenocarcinoma (Usual / HPV-associated)",
    "category": "Gynaecologic",
    "markers": [
      {
        "marker": "p16",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Block-like diffuse nuclear and cytoplasmic staining — surrogate for high-risk HPV. Required distinction from endometrioid CA."
      },
      {
        "marker": "HPV ISH/PCR",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "high",
        "notes": "HR-HPV in situ hybridisation — direct evidence of HPV. Preferred for definitive confirmation."
      },
      {
        "marker": "PAX8",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Müllerian marker; positive in all GYN carcinomas."
      },
      {
        "marker": "ER",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative or low/focal — distinguishes from endometrioid CA (ER strongly+)."
      },
      {
        "marker": "PR",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually negative."
      },
      {
        "marker": "Vimentin",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually negative; endometrial endometrioid CA is vimentin+."
      }
    ]
  },
  {
    "id": "cervical-scc",
    "name": "Cervical Squamous Cell Carcinoma",
    "category": "Gynaecologic",
    "markers": [
      {
        "marker": "p16",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse block-like staining; surrogate for HR-HPV. Required per WHO for cervical SqCC classification."
      },
      {
        "marker": "p40",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Squamous marker."
      },
      {
        "marker": "p63",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Squamous differentiation."
      },
      {
        "marker": "CK7",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Variable."
      },
      {
        "marker": "PAX8",
        "role": "negative",
        "sensitivity": "~10%",
        "specificity": "—",
        "notes": "Usually negative in SqCC; positivity suggests adenocarcinoma component."
      }
    ]
  },
  {
    "id": "sex-cord-stromal",
    "name": "Ovarian Sex Cord-Stromal Tumours (Granulosa/Sertoli-Leydig)",
    "category": "Gynaecologic",
    "markers": [
      {
        "marker": "Inhibin",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Classic sex cord-stromal marker. Also positive in adrenocortical tumours and Leydig cells."
      },
      {
        "marker": "Calretinin",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Nuclear + cytoplasmic; most sensitive sex cord-stromal marker."
      },
      {
        "marker": "SF-1",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Nuclear; sensitive marker for steroidogenic cells."
      },
      {
        "marker": "FOXL2",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Nuclear; highly sensitive for granulosa cell tumour. FOXL2 C134W mutation is characteristic of adult granulosa cell tumour."
      },
      {
        "marker": "Melan-A",
        "role": "positive",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Positive in steroid cell tumours and Leydig cell tumours; also in adrenocortical tumours."
      },
      {
        "marker": "CD10",
        "role": "positive",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Variable positivity."
      },
      {
        "marker": "EMA",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Consistently negative — use to exclude epithelial tumours."
      },
      {
        "marker": "AE1/AE3",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually negative; can be focally positive — EMA is more reliable to exclude carcinoma."
      }
    ]
  },
  {
    "id": "thyroid-papillary",
    "name": "Papillary Thyroid Carcinoma",
    "category": "Thyroid",
    "markers": [
      {
        "marker": "TTF-1",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Confirms thyroid epithelial origin."
      },
      {
        "marker": "PAX8",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Sensitive thyroid/renal/Müllerian marker."
      },
      {
        "marker": "Thyroglobulin",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "~95%",
        "notes": "Specific for follicular-derived thyroid tumours. May be lost in poorly differentiated or anaplastic carcinoma."
      },
      {
        "marker": "HBME-1",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Supports malignancy over benign thyroid lesion."
      },
      {
        "marker": "Galectin-3",
        "role": "positive",
        "sensitivity": "~80–90%",
        "specificity": "—",
        "notes": "Malignancy marker; negative in most benign follicular lesions."
      },
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Non-specific."
      },
      {
        "marker": "Calcitonin",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; excludes medullary carcinoma."
      },
      {
        "marker": "BRAF V600E",
        "role": "variable",
        "sensitivity": "~50–70%",
        "specificity": "high",
        "notes": "IHC antibody available. When positive, confirms BRAF V600E mutation. Predictive of RAI refractoriness; may guide vemurafenib use."
      }
    ],
    "molecular": [
      {
        "alteration": "BRAF V600E",
        "notes": "~30-50% of all PTC; highest prevalence in tall cell variant (~80%). IHC surrogate available. Predicts RAI refractoriness. Dabrafenib+trametinib approved for BRAF V600E+ ATC (and active in PTC)."
      },
      {
        "alteration": "RAS mutations (HRAS/KRAS/NRAS)",
        "notes": "~30-50% of PTC; enriched in encapsulated follicular variant (EFVPTC) and NIFTP. Mutually exclusive with BRAF V600E."
      },
      {
        "alteration": "RET fusions",
        "notes": "~20% of PTC overall; highest in pediatric and post-radiation PTC. Multiple partners (CCDC6-RET most common). Selpercatinib/pralsetinib approved."
      },
      {
        "alteration": "NTRK1/NTRK3 fusions",
        "notes": "~5-10% of PTC; enriched in radiation-induced cases. TRK inhibitors (larotrectinib, entrectinib) approved."
      },
      {
        "alteration": "ALK fusions",
        "notes": "~5% of PTC; ALK IHC is surrogate. ALK inhibitors active."
      }
    ]
  },
  {
    "id": "thyroid-medullary",
    "name": "Medullary Thyroid Carcinoma",
    "category": "Thyroid",
    "markers": [
      {
        "marker": "Calcitonin",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "~99%",
        "notes": "Defining marker for C-cell (parafollicular cell) origin. Key diagnostic marker."
      },
      {
        "marker": "CEA",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Polyclonal CEA positive. Serum CEA used as tumour marker for recurrence monitoring."
      },
      {
        "marker": "Synaptophysin",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "NE differentiation; variable."
      },
      {
        "marker": "Chromogranin A",
        "role": "positive",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Less sensitive than SYN in MTC."
      },
      {
        "marker": "TTF-1",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Positive in most cases; note TTF-1 is expressed in C cells."
      },
      {
        "marker": "Thyroglobulin",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — critical to distinguish from follicular-derived thyroid tumours."
      },
      {
        "marker": "PAX8",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Variable/weak; less reliable than in follicular-derived tumours."
      }
    ],
    "molecular": [
      {
        "alteration": "RET activating mutations",
        "notes": "~40-60% of medullary thyroid carcinoma (sporadic and hereditary). Germline RET mutations = MEN2A (C634) and MEN2B (M918T). All MTC patients should have germline RET testing. Vandetanib/cabozantinib approved; selpercatinib active."
      }
    ]
  },
  {
    "id": "thyroid-follicular",
    "name": "Follicular Thyroid Carcinoma / Follicular Adenoma",
    "category": "Thyroid",
    "markers": [
      {
        "marker": "TTF-1",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Thyroid follicular epithelial marker."
      },
      {
        "marker": "PAX8",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Sensitive."
      },
      {
        "marker": "Thyroglobulin",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Usually retained in well-differentiated follicular carcinoma."
      },
      {
        "marker": "HBME-1",
        "role": "variable",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Higher expression in carcinoma vs. adenoma — not definitive alone."
      },
      {
        "marker": "Galectin-3",
        "role": "variable",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Favours malignancy over benign adenoma when positive."
      },
      {
        "marker": "Calcitonin",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; excludes medullary carcinoma."
      }
    ],
    "molecular": [
      {
        "alteration": "PAX8-PPARγ1 fusion t(2;3)",
        "notes": "~30-40% of follicular carcinomas; also in subset of follicular adenomas — not diagnostic of carcinoma alone."
      },
      {
        "alteration": "RAS mutations (HRAS/KRAS/NRAS)",
        "notes": "~40-50% of follicular carcinomas and adenomas; overlaps with EFVPTC/NIFTP. TERT promoter co-mutation predicts aggressive behavior."
      },
      {
        "alteration": "TERT promoter mutations",
        "notes": "~10-30% of follicular carcinomas; associated with aggressive behavior and dedifferentiation. Predictive of recurrence when co-occurring with RAS or BRAF."
      }
    ]
  },
  {
    "id": "oropharyngeal-scc",
    "name": "Oropharyngeal Squamous Cell Carcinoma (HPV-related)",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "p16",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "~85%",
        "notes": "Cutoff: ≥70% nuclear AND cytoplasmic staining. Surrogate for HR-HPV. All oropharyngeal SqCCs should be tested. HPV+ SqCC = favourable prognosis, superior chemo/radiosensitivity."
      },
      {
        "marker": "HPV ISH/PCR",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "high",
        "notes": "Viral-specific testing optional per guidelines; positive p16 is sufficient for classification in most guidelines."
      },
      {
        "marker": "p40",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Confirms squamous differentiation."
      },
      {
        "marker": "p63",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Squamous marker."
      },
      {
        "marker": "CK5/6",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Supports squamous."
      }
    ]
  },
  {
    "id": "salivary-duct-ca",
    "name": "Salivary Duct Carcinoma",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "HER2",
        "role": "positive",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "HER2 amplification/overexpression in ~30%; therapeutic target (trastuzumab) — similar testing criteria as breast CA."
      },
      {
        "marker": "AR",
        "role": "positive",
        "sensitivity": "~70–90%",
        "specificity": "—",
        "notes": "Androgen receptor; strong positivity in most salivary duct carcinomas."
      },
      {
        "marker": "PSA",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Can be positive in salivary duct CA — potential pitfall in CUP setting (do not misinterpret as prostate metastasis)."
      },
      {
        "marker": "GATA3",
        "role": "positive",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Commonly positive in salivary gland tumours."
      },
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Non-specific epithelial marker."
      }
    ],
    "molecular": [
      {
        "alteration": "TP53 mutations",
        "notes": "~50-60% of salivary duct carcinoma."
      },
      {
        "alteration": "HRAS mutations",
        "notes": "~25% of salivary duct carcinoma."
      },
      {
        "alteration": "PIK3CA mutations",
        "notes": "~25% of salivary duct carcinoma."
      },
      {
        "alteration": "PTEN loss",
        "notes": "~35% of salivary duct carcinoma."
      },
      {
        "alteration": "ERBB2 (HER2) amplification",
        "notes": "~35% of salivary duct carcinoma; therapeutic target — HER2-directed therapy applicable."
      },
      {
        "alteration": "HMGA2/PLAG1 rearrangements",
        "notes": "~25% each; suggest origin from pre-existing pleomorphic adenoma (carcinoma ex-PA)."
      }
    ]
  },
  {
    "id": "melanoma",
    "name": "Melanoma",
    "category": "Melanoma",
    "markers": [
      {
        "marker": "SOX10",
        "role": "positive",
        "sensitivity": "~97%",
        "specificity": "~85%",
        "notes": "Most sensitive melanoma/neural crest marker. Nuclear. Positive including in desmoplastic melanoma where HMB45/Melan-A may be negative."
      },
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "~75%",
        "notes": "Sensitive but non-specific; positive in many tumours (nerve sheath, histiocytic, etc.)."
      },
      {
        "marker": "HMB-45",
        "role": "positive",
        "sensitivity": "~75–80%",
        "specificity": "~97%",
        "notes": "Highly specific but less sensitive. Marks immature melanocytes. In benign nevus, lost in deep (mature) cells — maturation sign. Often negative in desmoplastic melanoma."
      },
      {
        "marker": "Melan-A",
        "role": "positive",
        "sensitivity": "~75–80%",
        "specificity": "~95%",
        "notes": "Specific; reacts with both immature and mature melanocytes. Often negative in desmoplastic/spindle cell melanoma. A103 clone also marks adrenocortical and sex cord-stromal tumours."
      },
      {
        "marker": "MiTF",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "~85%",
        "notes": "Nuclear; useful in desmoplastic melanoma and spindle cell variants where HMB45/Melan-A may be lost."
      },
      {
        "marker": "AE1/AE3",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative (rare focal aberrant positivity). Excludes carcinoma."
      },
      {
        "marker": "CD45",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; excludes lymphoma."
      },
      {
        "marker": "BRAF V600E",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "IHC antibody available. When positive, confirms BRAF V600E — predictive for targeted therapy (vemurafenib/dabrafenib). Primarily in cutaneous melanoma; rare in acral/mucosal."
      }
    ],
    "molecular": [
      {
        "alteration": "BRAF V600E",
        "notes": "~40-50% of cutaneous melanoma; dabrafenib + trametinib approved. Uncommon in acral/mucosal/ocular subtypes."
      },
      {
        "alteration": "NRAS mutations",
        "notes": "~8-15% of melanoma; NRAS-mutant tumors are BRAF wild-type and may benefit from MEK inhibition."
      },
      {
        "alteration": "KIT mutations",
        "notes": "~5-20% of acral and mucosal melanomas (much lower in cutaneous); imatinib/nilotinib active in KIT-mutant cases."
      },
      {
        "alteration": "GNAQ or GNA11 mutations",
        "notes": "~80-85% of ocular (uveal) melanoma; unique to this subtype, mutually exclusive with BRAF/NRAS/KIT. MEK inhibitors show modest activity."
      }
    ]
  },
  {
    "id": "dlbcl",
    "name": "Diffuse Large B-Cell Lymphoma (DLBCL)",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD20",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Defining B-cell marker. Therapeutic target for rituximab. May be lost after rituximab treatment."
      },
      {
        "marker": "PAX5",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Nuclear B-cell transcription factor; widest pan-B-cell marker."
      },
      {
        "marker": "CD79a",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Pan-B-cell marker; may be retained when CD20 is lost."
      },
      {
        "marker": "CD10",
        "role": "variable",
        "sensitivity": "~30–40%",
        "specificity": "—",
        "notes": "GCB subtype marker — Hans algorithm (CD10+ → GCB)."
      },
      {
        "marker": "BCL6",
        "role": "variable",
        "sensitivity": "~60–70%",
        "specificity": "—",
        "notes": "GCB marker — Hans algorithm (CD10–/BCL6+ → depends on MUM1)."
      },
      {
        "marker": "MUM1",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Non-GCB marker — Hans algorithm (CD10–/BCL6+/MUM1+ → non-GCB; BCL6+/MUM1– → GCB)."
      },
      {
        "marker": "BCL2",
        "role": "variable",
        "sensitivity": "~40–60%",
        "specificity": "—",
        "notes": "Prognostic — double expressor when co-expressed with MYC (by IHC: MYC >40%, BCL2 >50%)."
      },
      {
        "marker": "Ki-67",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Typically >40%; high proliferation. Near 100% → consider Burkitt lymphoma."
      },
      {
        "marker": "CD3",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in neoplastic cells; excludes T-cell lymphoma."
      },
      {
        "marker": "CD45",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Pan-haematopoietic marker; positive."
      }
    ]
  },
  {
    "id": "follicular-lymphoma",
    "name": "Follicular Lymphoma (FL)",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD20",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "B-cell marker; therapeutic target."
      },
      {
        "marker": "CD10",
        "role": "positive",
        "sensitivity": "~60–70%",
        "specificity": "—",
        "notes": "GC marker; supports follicular origin."
      },
      {
        "marker": "BCL6",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "GC marker; nuclear."
      },
      {
        "marker": "BCL2",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "t(14;18)-related. Key: BCL2+ in GC B cells = abnormal (normal GC B cells are BCL2–). Do NOT mistake BCL2+ primary follicles (mantle cells) for FL."
      },
      {
        "marker": "Ki-67",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Low in grade 1–2 (<20%); higher in grade 3. Useful for grading."
      },
      {
        "marker": "CD5",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; CD5+ B-cell lymphoma → CLL/SLL or MCL."
      },
      {
        "marker": "Cyclin D1",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; excludes mantle cell lymphoma."
      }
    ]
  },
  {
    "id": "mantle-cell",
    "name": "Mantle Cell Lymphoma (MCL)",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD20",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "B-cell marker. Bright CD20 on flow cytometry."
      },
      {
        "marker": "CD5",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Aberrant B-cell + T-cell co-expression. Normal mantle cells: CD5–/+; neoplastic MCL: CD5+, CD23–."
      },
      {
        "marker": "Cyclin D1",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "~99%",
        "notes": "Defining marker; t(11;14). Nuclear. Present including in blastoid variant."
      },
      {
        "marker": "SOX11",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive in Cyclin D1-negative MCL cases. Nuclear. Negative in leukemic non-nodal MCL (indolent variant)."
      },
      {
        "marker": "CD23",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative (vs CLL/SLL which is CD23+). Normal mantle cells: CD23+; neoplastic MCL: CD23–."
      },
      {
        "marker": "CD10",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually negative; helps distinguish from follicular lymphoma."
      },
      {
        "marker": "BCL6",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually negative."
      }
    ]
  },
  {
    "id": "cll-sll",
    "name": "CLL / Small Lymphocytic Lymphoma (CLL/SLL)",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD20",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Dim CD20 on flow cytometry (vs bright in other B-cell lymphomas)."
      },
      {
        "marker": "CD5",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Aberrant B-cell CD5 expression; co-expressed with CD23."
      },
      {
        "marker": "CD23",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "CD5+/CD23+ pattern distinguishes CLL/SLL from MCL (CD5+/CD23–)."
      },
      {
        "marker": "LEF1",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Nuclear; specific for CLL/SLL."
      },
      {
        "marker": "CD200",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive in CLL/SLL; negative in MCL."
      },
      {
        "marker": "Cyclin D1",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; excludes MCL."
      },
      {
        "marker": "Ki-67",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Low (<10%). Proliferation centres have higher Ki-67."
      }
    ]
  },
  {
    "id": "burkitt",
    "name": "Burkitt Lymphoma",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD20",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Mature B-cell marker."
      },
      {
        "marker": "CD10",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "GC marker; strongly positive."
      },
      {
        "marker": "BCL6",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "GC marker."
      },
      {
        "marker": "Ki-67",
        "role": "positive",
        "sensitivity": "~100%",
        "specificity": "—",
        "notes": "Near 100% — pathognomonic. Essential for diagnosis."
      },
      {
        "marker": "BCL2",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative (normal GC B-cell phenotype). BCL2 positivity → consider DLBCL or double-hit lymphoma."
      },
      {
        "marker": "TdT",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative (mature B-cell phenotype). TdT+ → lymphoblastic lymphoma."
      },
      {
        "marker": "CD34",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative (mature B-cell)."
      }
    ]
  },
  {
    "id": "classical-hodgkin",
    "name": "Classical Hodgkin Lymphoma (cHL)",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD30",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Defining marker for Reed-Sternberg cells. Membranous + Golgi (targetoid) pattern. May be lost after brentuximab treatment."
      },
      {
        "marker": "CD15",
        "role": "positive",
        "sensitivity": "~75–85%",
        "specificity": "—",
        "notes": "Membranous + Golgi. Supports cHL. Negative in NLPHL."
      },
      {
        "marker": "PAX5",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Weak nuclear staining in RS cells (weaker than reactive B cells). Negative in T-cell lymphomas."
      },
      {
        "marker": "CD45",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in RS cells — key diagnostic feature of cHL. Note: background lymphocytes are CD45+."
      },
      {
        "marker": "CD20",
        "role": "variable",
        "sensitivity": "~20–30%",
        "specificity": "—",
        "notes": "Variable/weak in RS cells. Strong positivity → favour NLPHL or B-cell lymphoma."
      },
      {
        "marker": "CD3",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in RS cells."
      },
      {
        "marker": "EBV/LMP1",
        "role": "variable",
        "sensitivity": "~30–40%",
        "specificity": "—",
        "notes": "EBV-associated in mixed cellularity subtype and immunocompromised patients."
      }
    ]
  },
  {
    "id": "alcl",
    "name": "Anaplastic Large Cell Lymphoma (ALCL)",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD30",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Defining marker — strong and diffuse. May be lost after brentuximab treatment."
      },
      {
        "marker": "ALK",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "ALK+ in ~60% of systemic ALCL (NPM1-ALK). Different staining pattern reflects translocation partner. ALK+ has better prognosis."
      },
      {
        "marker": "CD3",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "T-cell lineage marker; variable in ALCL (can be negative)."
      },
      {
        "marker": "CD45",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Variable; may be negative in ALCL (potential pitfall)."
      },
      {
        "marker": "EMA",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "EMA+ in ALCL; useful with ALK."
      },
      {
        "marker": "CD20",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; excludes B-cell lymphoma."
      }
    ]
  },
  {
    "id": "ptcl",
    "name": "Peripheral T-Cell Lymphoma (PTCL-NOS)",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD3",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Pan-T-cell marker; may be reduced or lost in neoplastic cells."
      },
      {
        "marker": "CD4",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Often CD4+ in nodal PTCL. Mutually exclusive with CD8 in normal T cells (abnormal double positive/negative occurs in lymphoma)."
      },
      {
        "marker": "CD8",
        "role": "variable",
        "sensitivity": "~20%",
        "specificity": "—",
        "notes": "Less common; suggests cytotoxic variant."
      },
      {
        "marker": "CD5",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "May be lost — hallmark of neoplastic mature T cells is aberrant loss of pan-T markers."
      },
      {
        "marker": "CD7",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "May be lost."
      },
      {
        "marker": "Ki-67",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Often high (>50%)."
      },
      {
        "marker": "CD20",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; excludes B-cell lymphoma."
      },
      {
        "marker": "CD30",
        "role": "variable",
        "sensitivity": "~20–30%",
        "specificity": "—",
        "notes": "Variable; strong positivity → consider ALCL."
      }
    ]
  },
  {
    "id": "plasma-cell-myeloma",
    "name": "Plasma Cell Myeloma (Multiple Myeloma)",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD138",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Defining plasma cell marker. Most sensitive."
      },
      {
        "marker": "CD38",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Plasma cell marker; therapeutic target (daratumumab). May be lost after daratumumab treatment."
      },
      {
        "marker": "Kappa/Lambda",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Light chain restriction (κ or λ); normal ratio κ:λ = 2–3:1. Monotypic restriction confirms clonality."
      },
      {
        "marker": "MUM1",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Plasma cell differentiation marker."
      },
      {
        "marker": "CD79a",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Retained in plasma cells; CD20 usually lost."
      },
      {
        "marker": "CD20",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually lost in plasma cell differentiation."
      },
      {
        "marker": "CD45",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Often dim or negative in plasma cell neoplasms."
      },
      {
        "marker": "Cyclin D1",
        "role": "variable",
        "sensitivity": "~20%",
        "specificity": "—",
        "notes": "Aberrant expression in subset; t(11;14)."
      },
      {
        "marker": "CD56",
        "role": "variable",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Aberrant expression in neoplastic plasma cells (normal plasma cells are CD56–)."
      }
    ]
  },
  {
    "id": "b-all",
    "name": "B-Lymphoblastic Leukaemia/Lymphoma (B-ALL/LBL)",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "TdT",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Precursor/blast marker. Nuclear. Also positive in T-ALL and AML (rarely)."
      },
      {
        "marker": "CD34",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Progenitor marker."
      },
      {
        "marker": "CD10",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "CALLA; positive in most B-ALL."
      },
      {
        "marker": "CD19",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Pan-B-cell marker; earliest B-cell marker."
      },
      {
        "marker": "PAX5",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Nuclear B-cell transcription factor."
      },
      {
        "marker": "CD20",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variable/dim; may be negative in precursor stage."
      },
      {
        "marker": "CD3",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; excludes T-lymphoblastic lymphoma."
      },
      {
        "marker": "MPO",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; excludes AML."
      }
    ]
  },
  {
    "id": "net-gastroenteropancreatic",
    "name": "Well-Differentiated NET (GI Tract / Ileal Carcinoid)",
    "category": "Neuroendocrine",
    "markers": [
      {
        "marker": "Synaptophysin",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse strong. Most sensitive NE marker."
      },
      {
        "marker": "Chromogranin A",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Diffuse strong; more specific than SYN. Patchy acceptable."
      },
      {
        "marker": "CD56",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Sensitive NE marker."
      },
      {
        "marker": "INSM1",
        "role": "positive",
        "sensitivity": "high",
        "specificity": "high",
        "notes": "New nuclear NE marker; highly sensitive and specific."
      },
      {
        "marker": "CDX2",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Positive in midgut/ileal carcinoids; helps confirm GI site of origin."
      },
      {
        "marker": "ISL1",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in ileal NET (vs positive in PanNET). Useful for site determination in metastatic NET."
      },
      {
        "marker": "TTF-1",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in GI carcinoid (vs positive in pulmonary carcinoid)."
      },
      {
        "marker": "Ki-67",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "G1 <3%, G2 3–20%, G3 >20%. Essential for WHO grading."
      }
    ]
  },
  {
    "id": "merkel-cell",
    "name": "Merkel Cell Carcinoma",
    "category": "Neuroendocrine",
    "markers": [
      {
        "marker": "CK20",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Paranuclear dot-like perinuclear pattern — pathognomonic when present. KEY distinguishing marker from SCLC."
      },
      {
        "marker": "Synaptophysin",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "NE differentiation."
      },
      {
        "marker": "CD56",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "NE marker."
      },
      {
        "marker": "INSM1",
        "role": "positive",
        "sensitivity": "high",
        "specificity": "—",
        "notes": "New nuclear NE marker."
      },
      {
        "marker": "TTF-1",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — key distinction from SCLC (which is TTF-1+ in ~90%). TTF-1– + CK20+ dot = Merkel cell."
      },
      {
        "marker": "CK7",
        "role": "negative",
        "sensitivity": "~5%",
        "specificity": "—",
        "notes": "Usually negative (SCLC is often CK7+)."
      },
      {
        "marker": "Merkel cell polyomavirus (CM2B4)",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Viral antigen detectable by IHC in ~80% of MCC. Virus-negative MCC may harbour RB loss."
      }
    ]
  },
  {
    "id": "gist",
    "name": "Gastrointestinal Stromal Tumour (GIST)",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "CD117",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Defining marker; KIT mutations are therapeutic target for imatinib. Diffuse cytoplasmic staining."
      },
      {
        "marker": "DOG1",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "~98%",
        "notes": "More specific than CD117. Positive in KIT-negative GIST (PDGFRA or SDH-mutant). First-line marker."
      },
      {
        "marker": "CD34",
        "role": "positive",
        "sensitivity": "~65–70%",
        "specificity": "—",
        "notes": "Variable; more often positive in gastric GIST."
      },
      {
        "marker": "SDHB",
        "role": "loss",
        "sensitivity": "~10%",
        "specificity": "—",
        "notes": "Loss of SDHB staining in SDH-deficient GIST (~10% of all GISTs). These are imatinib-resistant; SDHB IHC is a useful screen."
      },
      {
        "marker": "S100",
        "role": "negative",
        "sensitivity": "~5%",
        "specificity": "—",
        "notes": "Focal in rare cases; excludes schwannoma."
      },
      {
        "marker": "Desmin",
        "role": "negative",
        "sensitivity": "~5%",
        "specificity": "—",
        "notes": "Usually negative; excludes leiomyosarcoma."
      }
    ],
    "molecular": [
      {
        "alteration": "KIT mutation",
        "notes": "~80% of GISTs; exon 11 most common, then exon 9. Imatinib-sensitive. Testing guides therapy selection."
      },
      {
        "alteration": "PDGFRA mutation",
        "notes": "~5-7% of GISTs; D842V most common (imatinib-resistant — avapritinib approved). Gastric location predominant."
      },
      {
        "alteration": "SDH gene mutation",
        "notes": "~7% of GISTs (SDHA/B/C/D); SDHB IHC loss is the screen. Imatinib-insensitive. Associated with Carney triad and Carney-Stratakis syndrome. Gastric location, younger patients."
      }
    ]
  },
  {
    "id": "ewing-sarcoma",
    "name": "Ewing Sarcoma / PNET",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "CD99",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "low",
        "notes": "Diffuse strong membranous pattern. Sensitive but expressed in many other tumours (lymphoblastic lymphoma, sex cord-stromal, SFT, synovial sarcoma)."
      },
      {
        "marker": "NKX2.2",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "~95%",
        "notes": "New marker; much more specific than CD99. Positive in EWSR1-FLI1 target gene. Preferred over FLI1/ERG for diagnostic confirmation."
      },
      {
        "marker": "FLI1",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Less specific than NKX2.2; FLI1/ERG antibodies also stain endothelial cells — not specific alone."
      },
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Non-specific mesenchymal marker."
      },
      {
        "marker": "CD45",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; excludes lymphoma in SRBCT DDx."
      },
      {
        "marker": "Desmin",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; excludes rhabdomyosarcoma."
      },
      {
        "marker": "Synaptophysin",
        "role": "variable",
        "sensitivity": "~20%",
        "specificity": "—",
        "notes": "Focal in PNET subtype; not defining."
      },
      {
        "marker": "AE1/AE3",
        "role": "variable",
        "sensitivity": "~20%",
        "specificity": "—",
        "notes": "Focal in subset; potential pitfall."
      }
    ],
    "molecular": [
      {
        "alteration": "EWSR1-FLI1 fusion t(11;22)",
        "notes": "~80% of Ewing sarcomas. NKX2.2 is the IHC surrogate. FISH or NGS confirmation."
      },
      {
        "alteration": "EWSR1-ERG fusion t(21;22)",
        "notes": "~5-7% of cases. ERG IHC positive but non-specific (also in endothelial tumors). NKX2.2 preferred."
      },
      {
        "alteration": "Other EWSR1 fusions",
        "notes": "Rare — ETV1, E1AF, FEV. All involve ETS family transcription factors."
      }
    ]
  },
  {
    "id": "synovial-sarcoma",
    "name": "Synovial Sarcoma",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "TLE1",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Most sensitive synovial sarcoma marker. Nuclear. Not entirely specific — positive in some other sarcomas."
      },
      {
        "marker": "AE1/AE3",
        "role": "positive",
        "sensitivity": "~60–80%",
        "specificity": "—",
        "notes": "Strong in epithelial component; often focal or negative in spindle/round cell component."
      },
      {
        "marker": "EMA",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Epithelial marker; often focal."
      },
      {
        "marker": "CD99",
        "role": "positive",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Variable membranous; non-specific."
      },
      {
        "marker": "S100",
        "role": "negative",
        "sensitivity": "~10%",
        "specificity": "—",
        "notes": "Focally positive in ~30% — does not exclude SS; strong diffuse would suggest MPNST."
      },
      {
        "marker": "SOX10",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; distinguishes from MPNST and neural tumours."
      },
      {
        "marker": "STAT6",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; excludes solitary fibrous tumour (STAT6+)."
      },
      {
        "marker": "CD34",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative (vs SFT which is CD34+)."
      }
    ],
    "molecular": [
      {
        "alteration": "SS18-SSX1 fusion t(X;18)",
        "notes": "~60% of synovial sarcomas; monophasic or biphasic morphology."
      },
      {
        "alteration": "SS18-SSX2 fusion t(X;18)",
        "notes": "~35% of cases; monophasic only, better prognosis in localized disease."
      }
    ]
  },
  {
    "id": "solitary-fibrous-tumour",
    "name": "Solitary Fibrous Tumour (SFT)",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "STAT6",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "~98%",
        "notes": "Defining marker for SFT (NAB2-STAT6 fusion). Nuclear staining. Most specific soft tissue marker currently available."
      },
      {
        "marker": "CD34",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Diffuse strong; lost in some malignant SFTs."
      },
      {
        "marker": "BCL2",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Non-specific; supporting marker."
      },
      {
        "marker": "CD99",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Non-specific."
      },
      {
        "marker": "S100",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; excludes nerve sheath tumours."
      },
      {
        "marker": "TLE1",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; excludes synovial sarcoma."
      }
    ],
    "molecular": [
      {
        "alteration": "NAB2-STAT6 fusion inv(12)",
        "notes": ">90% of SFTs. STAT6 nuclear IHC is the diagnostic surrogate — highly sensitive and specific. Confirms diagnosis even in malignant/dedifferentiated cases."
      }
    ]
  },
  {
    "id": "rhabdomyosarcoma",
    "name": "Rhabdomyosarcoma (RMS)",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "Desmin",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Sensitive muscle marker."
      },
      {
        "marker": "Myogenin",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "~95%",
        "notes": "Nuclear; diffuse positivity in alveolar RMS; focal-to-patchy in embryonal and spindle cell/sclerosing RMS. Key diagnostic marker."
      },
      {
        "marker": "MyoD1",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Nuclear; supports skeletal muscle differentiation."
      },
      {
        "marker": "SMA",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variable; non-specific."
      },
      {
        "marker": "CD99",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative (unlike Ewing sarcoma which is CD99+)."
      },
      {
        "marker": "S100",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative."
      }
    ],
    "molecular": [
      {
        "alteration": "PAX3-FOXO1 t(2;13) — alveolar subtype",
        "notes": "~60% of alveolar RMS; associated with unfavorable prognosis. PAX7-FOXO1 t(1;13) in ~20% — somewhat better prognosis in localized disease. Fusion-negative \"ARMS\" behaves like ERMS."
      },
      {
        "alteration": "Loss of 11p15 — embryonal subtype",
        "notes": "ERMS: loss of 11p15 (Beckwith-Wiedemann locus); no recurrent translocations. MYOD1 L122R mutation in spindle cell/sclerosing variant."
      }
    ]
  },
  {
    "id": "chordoma",
    "name": "Chordoma",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "Brachyury",
        "role": "positive",
        "sensitivity": "~98%",
        "specificity": "~99%",
        "notes": "Highly sensitive and specific for notochordal differentiation. Nuclear. Defines chordoma. Also positive in rare subset of aggressive chordoma-like tumours with INI1 loss."
      },
      {
        "marker": "AE1/AE3",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse strong epithelial marker in chordoma; key distinguishing feature from chondrosarcoma (CK–)."
      },
      {
        "marker": "EMA",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Epithelial marker; supports chordoma."
      },
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive; also in chondrosarcoma — not distinguishing alone."
      },
      {
        "marker": "CD34",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative."
      }
    ]
  },
  {
    "id": "seminoma-dysgerminoma",
    "name": "Seminoma / Dysgerminoma",
    "category": "Germ Cell",
    "markers": [
      {
        "marker": "SALL4",
        "role": "positive",
        "sensitivity": "~98%",
        "specificity": "—",
        "notes": "Pan-germ cell marker. Nuclear. Most sensitive marker for GCTs."
      },
      {
        "marker": "OCT4",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Nuclear. Specific for seminoma/dysgerminoma and embryonal carcinoma among GCTs."
      },
      {
        "marker": "PLAP",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Classic seminoma marker."
      },
      {
        "marker": "CD117",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Membranous; supports seminoma."
      },
      {
        "marker": "D2-40",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Lymphatic marker; also positive in seminoma."
      },
      {
        "marker": "AE1/AE3",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative (dot-like at most) — distinguishes from embryonal carcinoma (CK+)."
      },
      {
        "marker": "CD30",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — distinguishes from embryonal carcinoma (CD30+)."
      },
      {
        "marker": "EMA",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative."
      }
    ]
  },
  {
    "id": "embryonal-carcinoma",
    "name": "Embryonal Carcinoma",
    "category": "Germ Cell",
    "markers": [
      {
        "marker": "SALL4",
        "role": "positive",
        "sensitivity": "~98%",
        "specificity": "—",
        "notes": "Pan-germ cell marker."
      },
      {
        "marker": "OCT4",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Nuclear; positive in embryonal CA and seminoma/dysgerminoma — distinguishes from yolk sac tumour and choriocarcinoma."
      },
      {
        "marker": "CD30",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Membranous; distinguishes embryonal CA from seminoma (CD30–). Membranous + Golgi pattern."
      },
      {
        "marker": "SOX2",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Nuclear; supports embryonal CA."
      },
      {
        "marker": "AE1/AE3",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Diffuse strong — distinguishes from seminoma (CK–)."
      },
      {
        "marker": "AFP",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — distinguishes from yolk sac tumour (AFP+)."
      }
    ]
  },
  {
    "id": "yolk-sac-tumour",
    "name": "Yolk Sac Tumour (Endodermal Sinus Tumour)",
    "category": "Germ Cell",
    "markers": [
      {
        "marker": "SALL4",
        "role": "positive",
        "sensitivity": "~98%",
        "specificity": "—",
        "notes": "Pan-germ cell marker."
      },
      {
        "marker": "Glypican-3",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Sensitive marker for yolk sac tumour."
      },
      {
        "marker": "AFP",
        "role": "positive",
        "sensitivity": "~75%",
        "specificity": "—",
        "notes": "Classic marker; not specific alone."
      },
      {
        "marker": "AE1/AE3",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive."
      },
      {
        "marker": "OCT4",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — distinguishes from embryonal CA and seminoma (both OCT4+)."
      },
      {
        "marker": "CD30",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — distinguishes from embryonal CA (CD30+)."
      }
    ]
  },
  {
    "id": "glioma-astrocytoma",
    "name": "Diffuse Glioma (Astrocytoma / Oligodendroglioma)",
    "category": "CNS",
    "markers": [
      {
        "marker": "GFAP",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Glial marker. Positive in both astrocytoma and oligodendroglioma."
      },
      {
        "marker": "OLIG2",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Universally expressed in diffuse gliomas. Nuclear. Negative in ependymoma (useful distinction)."
      },
      {
        "marker": "IDH1 R132H",
        "role": "variable",
        "sensitivity": "~90% of IDH-mut gliomas",
        "specificity": "high",
        "notes": "Antibody specific for R132H variant (~90% of IDH mutations). Positive = IDH-mutant glioma (better prognosis than IDH wild-type). Molecular confirmation needed for IDH1-negative cases."
      },
      {
        "marker": "ATRX",
        "role": "loss",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Loss in astrocytoma (IDH-mutant). Retained in oligodendroglioma (IDH-mutant + 1p/19q deleted). ATRX loss + p53+ → astrocytoma."
      },
      {
        "marker": "p53",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Diffuse strong in subset of astrocytomas (mutation). Scattered in oligodendroglioma. Use with ATRX."
      },
      {
        "marker": "Ki-67",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "For grading: Grade 2 low, Grade 3 intermediate, Grade 4 (GBM) high."
      }
    ],
    "molecular": [
      {
        "alteration": "IDH1/2 mutations + 1p/19q co-deletion",
        "notes": "Oligodendroglioma IDH-mutant, 1p/19q co-deleted (WHO 2021 definition). IDH R132H detectable by IHC in ~90% of IDH-mutant cases; others need sequencing. TERT promoter mutations and CIC mutations also common."
      },
      {
        "alteration": "IDH1/2 mutations + ATRX loss + TP53",
        "notes": "Astrocytoma IDH-mutant (WHO 2021 definition). IDH R132H IHC + ATRX loss (IHC) + p53 diffuse = astrocytoma. No 1p/19q co-deletion. Higher grade may have MYC, CCND2, or PDGFRA amplification (secondary GBM)."
      }
    ]
  },
  {
    "id": "renal-chromophobe",
    "name": "Chromophobe Renal Cell Carcinoma",
    "category": "Renal",
    "markers": [
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse strong; most reliable single marker. Oncocytoma is CK7– or only focally positive."
      },
      {
        "marker": "CD117",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Positive in both chromophobe RCC and oncocytoma — does not distinguish between them."
      },
      {
        "marker": "S100A1",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive in chromophobe RCC; helpful in differential with clear cell RCC (S100A1+) vs oncocytoma (S100A1+/–)."
      },
      {
        "marker": "CAIX",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; diffuse box-like CAIX is specific for clear cell RCC — useful to exclude ccRCC."
      },
      {
        "marker": "Vimentin",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually negative; positive in clear cell and papillary RCC — helps confirm chromophobe."
      },
      {
        "marker": "RCC antigen",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Less consistently positive than in clear cell RCC."
      }
    ]
  },
  {
    "id": "renal-oncocytoma",
    "name": "Renal Oncocytoma",
    "category": "Renal",
    "markers": [
      {
        "marker": "CK7",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative or only rare scattered cells. Diffuse CK7 favours chromophobe RCC."
      },
      {
        "marker": "CD117",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive; shared with chromophobe RCC — not discriminatory alone."
      },
      {
        "marker": "Vimentin",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; positive in clear cell and papillary RCC."
      },
      {
        "marker": "PAX8",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive; confirms renal tubular origin but does not distinguish benign vs malignant."
      },
      {
        "marker": "CAIX",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; useful to exclude clear cell RCC."
      }
    ]
  },
  {
    "id": "renal-collecting-duct",
    "name": "Collecting Duct Carcinoma (Bellini Duct)",
    "category": "Renal",
    "markers": [
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Diffuse strong; distinguishes from clear cell RCC."
      },
      {
        "marker": "PAX8",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive; confirms renal origin."
      },
      {
        "marker": "GATA3",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Positive; helps distinguish from urothelial CA in renal pelvis (both CK7+/GATA3+) — overlap is significant."
      },
      {
        "marker": "INI1/SMARCB1",
        "role": "retained",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Retained; loss would suggest renal medullary carcinoma (sickle cell trait-associated)."
      },
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive; shared with papillary RCC."
      }
    ]
  },
  {
    "id": "renal-medullary",
    "name": "Renal Medullary Carcinoma",
    "category": "Renal",
    "markers": [
      {
        "marker": "INI1/SMARCB1",
        "role": "loss",
        "sensitivity": "~95%",
        "specificity": "high",
        "notes": "Loss of nuclear staining is defining. Associated with sickle cell trait/disease. Highly aggressive. Also exclude epithelioid sarcoma (INI1-loss)."
      },
      {
        "marker": "PAX8",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive; confirms renal origin."
      },
      {
        "marker": "OCT4",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; helps exclude embryonal carcinoma which can be INI1-retained."
      }
    ],
    "molecular": [
      {
        "alteration": "SMARCB1 (INI1) loss",
        "notes": ">90% biallelic SMARCB1 inactivation. Loss of INI1 IHC is the diagnostic hallmark. Associated with sickle cell trait/disease. Aggressive tumor — median survival <1 year. Also SMARCA4 loss in minority of INI1-retained cases."
      }
    ]
  },
  {
    "id": "esophageal-scc",
    "name": "Esophageal Squamous Cell Carcinoma",
    "category": "Gastrointestinal",
    "markers": [
      {
        "marker": "p40",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "high",
        "notes": "Best squamous marker. Diffuse nuclear in SqCC."
      },
      {
        "marker": "p63",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "lower",
        "notes": "Sensitive but cross-reacts with adenoCA focally."
      },
      {
        "marker": "CK5/6",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Supports squamous."
      },
      {
        "marker": "CK7",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually negative; positive → adenoCA or adenosquamous."
      },
      {
        "marker": "TTF-1",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; useful in distinguishing from lung primary."
      }
    ]
  },
  {
    "id": "gastric-diffuse",
    "name": "Gastric Diffuse-Type Adenocarcinoma (Signet Ring)",
    "category": "Gastrointestinal",
    "markers": [
      {
        "marker": "E-cadherin",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Lost or aberrant in many diffuse-type gastric carcinomas; also in hereditary diffuse GC (CDH1 mutation). Membranous loss → abnormal."
      },
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive in most."
      },
      {
        "marker": "CDX2",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Variable; less often than intestinal-type gastric carcinoma."
      },
      {
        "marker": "CK20",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Variable."
      },
      {
        "marker": "MUC5AC",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Gastric mucin marker. Positive in diffuse-type; helps distinguish from intestinal-type (MUC2+) and colonic origin."
      }
    ]
  },
  {
    "id": "appendiceal-mucinous",
    "name": "Appendiceal Mucinous Neoplasm / Carcinoma",
    "category": "Gastrointestinal",
    "markers": [
      {
        "marker": "CDX2",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Strongly positive; intestinal phenotype."
      },
      {
        "marker": "CK20",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Diffuse strong."
      },
      {
        "marker": "CK7",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Typically negative or focal; CK7+ → upper GI or ovarian mucinous carcinoma."
      },
      {
        "marker": "SATB2",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Strong nuclear; supports lower GI origin."
      },
      {
        "marker": "MUC2",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Goblet-cell type intestinal mucin; positive."
      },
      {
        "marker": "PAX8",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; PAX8+ ovarian primary mucinous carcinoma is very rare — most ovarian mucinous CAs are GI metastases, not primary."
      }
    ]
  },
  {
    "id": "gallbladder-carcinoma",
    "name": "Gallbladder / Biliary Carcinoma",
    "category": "Gastrointestinal",
    "markers": [
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse strong; nearly always positive."
      },
      {
        "marker": "CK20",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variable; CK7+/CK20+ profile overlaps with upper GI and pancreatic carcinoma."
      },
      {
        "marker": "CDX2",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Focal in subset; less than colorectal."
      },
      {
        "marker": "MUC1",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive; distinguishes from reactive/benign biliary epithelium."
      },
      {
        "marker": "IMP3",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Positive in malignant biliary/gallbladder carcinoma; negative in benign — useful on biopsy."
      },
      {
        "marker": "pVHL",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Not a primary marker for gallbladder; loss seen in some subtypes."
      }
    ]
  },
  {
    "id": "pancreatic-acinar",
    "name": "Pancreatic Acinar Cell Carcinoma",
    "category": "Gastrointestinal",
    "markers": [
      {
        "marker": "BCL10",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "high",
        "notes": "Cytoplasmic dot-like staining; most specific marker for acinar differentiation. Not to be confused with BCL10 in lymphomas."
      },
      {
        "marker": "Trypsin",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "high",
        "notes": "Exocrine acinar enzyme; confirms acinar differentiation."
      },
      {
        "marker": "Chymotrypsin",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "high",
        "notes": "Acinar enzyme marker; use with trypsin."
      },
      {
        "marker": "Synaptophysin",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Focal NE marker expression in subset. Mixed acinar-NE tumors exist."
      },
      {
        "marker": "Chromogranin A",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually negative; diffuse positivity favours PanNET."
      },
      {
        "marker": "AE1/AE3",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Positive; confirms carcinoma."
      },
      {
        "marker": "DPC4/SMAD4",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Retained in acinar cell carcinoma; loss (~55%) is specific for pancreatic ductal adenocarcinoma."
      }
    ]
  },
  {
    "id": "meningioma",
    "name": "Meningioma",
    "category": "CNS",
    "markers": [
      {
        "marker": "EMA",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Most useful single marker; can be focal/weak in higher grade. Membranous and cytoplasmic."
      },
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse; non-specific mesenchymal marker."
      },
      {
        "marker": "SSTR2A",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "high",
        "notes": "Somatostatin receptor 2A. Highly sensitive and specific for meningioma. Useful in poorly-differentiated spindle cell tumors at skull base."
      },
      {
        "marker": "PR",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Positive in majority; WHO grade 1 > grade 2/3. Loss of PR in recurrent meningioma is a poor prognostic sign."
      },
      {
        "marker": "S100",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Focal in some cases; not a reliable marker."
      },
      {
        "marker": "AE1/AE3",
        "role": "variable",
        "sensitivity": "~35%",
        "specificity": "—",
        "notes": "Focal positivity in subset; strong positivity may suggest carcinoma."
      },
      {
        "marker": "SOX10",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; useful to exclude schwannoma/nerve sheath tumour."
      },
      {
        "marker": "STAT6",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; diffuse nuclear STAT6 is specific for SFT/hemangiopericytoma — important differential."
      }
    ]
  },
  {
    "id": "ependymoma",
    "name": "Ependymoma",
    "category": "CNS",
    "markers": [
      {
        "marker": "EMA",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Perinuclear dot-like and ring/lumen pattern (most specific pattern); also diffuse cytoplasmic."
      },
      {
        "marker": "GFAP",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Diffuse; shared with astrocytic tumors."
      },
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Diffuse; non-specific."
      },
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Diffuse."
      },
      {
        "marker": "OLIG2",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative or focal; OLIG2 diffuse positivity favours diffuse glioma. Useful differential."
      },
      {
        "marker": "L1CAM",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Positive in ZFTA-fused ependymomas (spinal and supratentorial); emerging molecular surrogate."
      }
    ],
    "molecular": [
      {
        "alteration": "C11orf95(ZFTA)-RELA fusion (11q13.1 chromothripsis)",
        "notes": "~60% of pediatric supratentorial ependymomas; comprises ~70% of all pediatric supratentorial ependymomas. L1CAM IHC is the surrogate. Poor prognosis. WHO 2021 classifies as ZFTA-fused supratentorial ependymoma."
      },
      {
        "alteration": "YAP1-MAMLD1/FAM118B fusions",
        "notes": "Subset of pediatric supratentorial ependymomas; better prognosis than ZFTA-fused. YAP1 IHC is positive."
      }
    ]
  },
  {
    "id": "medulloblastoma",
    "name": "Medulloblastoma",
    "category": "CNS",
    "markers": [
      {
        "marker": "Synaptophysin",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Diffuse; confirms NE/neural differentiation."
      },
      {
        "marker": "GFAP",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Focal in large cell/anaplastic variant; glial differentiation."
      },
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive in most."
      },
      {
        "marker": "NeuN",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Focal neuronal marker."
      },
      {
        "marker": "INI1/SMARCB1",
        "role": "retained",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Retained; loss would suggest ATRT (atypical teratoid/rhabdoid tumour). Key differential in young children."
      },
      {
        "marker": "β-catenin",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Nuclear in WNT-activated subgroup (~10%); best prognosis. Nuclear staining = WNT pathway activation."
      },
      {
        "marker": "GAB1",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Cytoplasmic; SHH-activated subgroup surrogate (pattern-positive)."
      },
      {
        "marker": "YAP1",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Nuclear in WNT and SHH subgroups; emerging molecular classifier."
      }
    ],
    "molecular": [
      {
        "alteration": "WNT-activated: CTNNB1 mutation + monosomy 6",
        "notes": "~10% of medulloblastoma; best prognosis. Nuclear β-catenin IHC confirms WNT activation. Treatment de-escalation trials ongoing."
      },
      {
        "alteration": "SHH-activated: PTCH1/SMO/SUFU mutations",
        "notes": "~30% of medulloblastoma; desmoplastic/nodular histology. GAB1 IHC is the surrogate. TP53-wt (favorable) vs TP53-mutant/GLI2/MYCN amplification (unfavorable, often large cell/anaplastic). Vismodegib active."
      },
      {
        "alteration": "Non-WNT/non-SHH: MYC amplification, chr 17 alterations",
        "notes": "~60% of medulloblastoma; Group 3 (MYC amplification, worst prognosis) and Group 4 (most common, intermediate prognosis)."
      }
    ]
  },
  {
    "id": "atrt",
    "name": "Atypical Teratoid/Rhabdoid Tumour (AT/RT)",
    "category": "CNS",
    "markers": [
      {
        "marker": "INI1/SMARCB1",
        "role": "loss",
        "sensitivity": "~98%",
        "specificity": "high",
        "notes": "Loss of nuclear expression is defining. Most AT/RTs have INI1 loss; rare SMARCA4-deficient AT/RTs retain INI1 but lose BRG1."
      },
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse; rhabdoid cells are vimentin+."
      },
      {
        "marker": "EMA",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Focal in subset."
      },
      {
        "marker": "SMA",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Focal in some."
      },
      {
        "marker": "GFAP",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Focal glial differentiation."
      }
    ],
    "molecular": [
      {
        "alteration": "SMARCB1 (INI1) deletion/mutation 22q11.2",
        "notes": "~75% of AT/RT; biallelic SMARCB1 inactivation. Loss of INI1 IHC is defining. Germline in ~35% (rhabdoid tumor predisposition syndrome 1)."
      },
      {
        "alteration": "SMARCA4 (BRG1) mutation",
        "notes": "Minority of AT/RT (INI1-intact, BRG1-deficient). Loss of BRG1 IHC confirms diagnosis. These are rhabdoid tumor predisposition syndrome 2."
      }
    ]
  },
  {
    "id": "leiomyosarcoma",
    "name": "Leiomyosarcoma",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "SMA",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse strong; best single smooth muscle marker. Also positive in myofibroblastic lesions — need clinical/morphologic correlation."
      },
      {
        "marker": "Desmin",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive in most; may be focal."
      },
      {
        "marker": "Calponin",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Smooth muscle marker; useful when desmin equivocal."
      },
      {
        "marker": "h-caldesmon",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "high",
        "notes": "More specific for smooth muscle differentiation than SMA/desmin. Negative in myofibroblastic lesions."
      },
      {
        "marker": "SOX10",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; useful to exclude MPNST."
      },
      {
        "marker": "CD34",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually negative; diffuse CD34+ favours SFT or DFSP."
      },
      {
        "marker": "MyoD1",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; nuclear MyoD1 → rhabdomyosarcoma."
      },
      {
        "marker": "INI1/SMARCB1",
        "role": "retained",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Retained in most LMS. Loss in ~10% (epithelioid LMS subtype)."
      }
    ]
  },
  {
    "id": "dedifferentiated-liposarcoma",
    "name": "Atypical Lipomatous Tumour / Dedifferentiated Liposarcoma",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "MDM2",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "high",
        "notes": "Nuclear; confirms MDM2 amplification (12q13-15). Highly specific for ALT/WDLPS and DDLPS vs other sarcomas. Not a substitute for FISH."
      },
      {
        "marker": "CDK4",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "high",
        "notes": "Nuclear; co-amplified with MDM2. Use MDM2 + CDK4 together for best specificity."
      },
      {
        "marker": "p16",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Variable; not specific."
      },
      {
        "marker": "S100",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Focal in lipogenic component; less in dedifferentiated areas."
      },
      {
        "marker": "SMA",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Focal myogenic differentiation possible in dedifferentiated component (heterologous differentiation)."
      }
    ]
  },
  {
    "id": "myxoid-liposarcoma",
    "name": "Myxoid / Round Cell Liposarcoma",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "S100",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Focal in lipogenic areas. Not specific."
      },
      {
        "marker": "MDM2",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative (distinguishes from ALT/DDLPS which is MDM2+)."
      },
      {
        "marker": "DDIT3 (CHOP)",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "high",
        "notes": "Nuclear; reflects FUS-DDIT3 or EWSR1-DDIT3 fusion. Strong nuclear → myxoid LPS. Useful IHC surrogate (confirm by FISH/RT-PCR)."
      }
    ],
    "molecular": [
      {
        "alteration": "FUS-DDIT3(CHOP) fusion t(12;16)",
        "notes": "~90% of myxoid/round cell liposarcoma. DDIT3 nuclear IHC is the surrogate. Confirming the fusion distinguishes from other myxoid sarcomas."
      },
      {
        "alteration": "EWSR1-DDIT3 fusion t(12;22)",
        "notes": "<10% of cases; clinically and morphologically identical to FUS-DDIT3 variant."
      }
    ]
  },
  {
    "id": "epithelioid-sarcoma",
    "name": "Epithelioid Sarcoma",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "INI1/SMARCB1",
        "role": "loss",
        "sensitivity": "~90%",
        "specificity": "high",
        "notes": "Loss is the key diagnostic feature. Classic type: ~90% loss. Proximal/large cell type: near 100% loss."
      },
      {
        "marker": "AE1/AE3",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Epithelioid sarcoma is strongly keratin positive — a major pitfall if mistaken for carcinoma."
      },
      {
        "marker": "EMA",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Positive; adds to carcinoma mimicry."
      },
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse; co-expressed with keratins."
      },
      {
        "marker": "CD34",
        "role": "positive",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Positive in ~50%; helpful as not seen in carcinomas."
      },
      {
        "marker": "S100",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; useful to exclude granular cell tumour."
      }
    ]
  },
  {
    "id": "angiosarcoma",
    "name": "Angiosarcoma",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "ERG",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "high",
        "notes": "Nuclear; most sensitive vascular marker. Note: also positive in prostate carcinoma and Ewing sarcoma (EWSR1-ERG fusion)."
      },
      {
        "marker": "CD31",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "high",
        "notes": "Most specific endothelial marker. Membranous. Scattered positivity in some epithelioid tumors."
      },
      {
        "marker": "CD34",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Positive but less specific than CD31/ERG."
      },
      {
        "marker": "FLI1",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Nuclear; also positive in Ewing sarcoma (EWS-FLI1)."
      },
      {
        "marker": "D2-40",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Some lymphangiosarcomas are D2-40 positive."
      },
      {
        "marker": "AE1/AE3",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Focal in epithelioid angiosarcoma — pitfall: can mimic carcinoma. CD31/ERG positivity resolves the differential."
      }
    ]
  },
  {
    "id": "mpnst",
    "name": "Malignant Peripheral Nerve Sheath Tumour (MPNST)",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "SOX10",
        "role": "positive",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Positive in ~50% of MPNST; a negative result does not exclude MPNST. Loss of SOX10 correlates with dedifferentiation."
      },
      {
        "marker": "S100",
        "role": "variable",
        "sensitivity": "~50–70%",
        "specificity": "—",
        "notes": "Focal/weak; diffuse strong S100 favours schwannoma over MPNST."
      },
      {
        "marker": "H3K27me3",
        "role": "loss",
        "sensitivity": "~50%",
        "specificity": "high",
        "notes": "Loss of trimethylation is seen in ~50% of MPNST (PRC2 complex loss). Not specific alone but high PPV in right context (NF1 patient, nerve sheath location). Retained in neurofibroma."
      },
      {
        "marker": "CD34",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Focal in some MPNST; diffuse in neurofibroma."
      },
      {
        "marker": "p16",
        "role": "loss",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Loss of p16 favours MPNST over neurofibroma."
      },
      {
        "marker": "Ki-67",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Elevated (typically >5%); useful to distinguish from benign nerve sheath tumors."
      }
    ]
  },
  {
    "id": "dsrct",
    "name": "Desmoplastic Small Round Cell Tumour (DSRCT)",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "WT1 (C-terminal)",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "high",
        "notes": "C-terminal antibody positive due to EWSR1-WT1 fusion preserving C-terminal domain. N-terminal WT1 antibody is NEGATIVE — distinguishes DSRCT from Wilms tumor."
      },
      {
        "marker": "Desmin",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Dot-like perinuclear; highly characteristic pattern."
      },
      {
        "marker": "AE1/AE3",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive; the classic co-expression of desmin+CK+WT1 in a small round cell tumor is essentially diagnostic of DSRCT."
      },
      {
        "marker": "NSE",
        "role": "positive",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Focal NE marker positivity; not specific."
      },
      {
        "marker": "CD99",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Variable membranous staining; less than in Ewing sarcoma."
      },
      {
        "marker": "NKX2.2",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative (positive in Ewing sarcoma) — key differential."
      }
    ],
    "molecular": [
      {
        "alteration": "EWSR1-WT1 fusion t(11;22)",
        "notes": "~99% of DSRCT. C-terminal WT1 IHC is the surrogate (N-terminal WT1 is negative). Virtually pathognomonic. FISH or NGS for confirmation."
      }
    ]
  },
  {
    "id": "clear-cell-sarcoma",
    "name": "Clear Cell Sarcoma of Soft Tissue (Melanoma of Soft Parts)",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "SOX10",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse nuclear; melanocytic lineage."
      },
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse strong; melanocytic lineage shared with melanoma."
      },
      {
        "marker": "HMB-45",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive; shared with melanoma — cannot distinguish from metastatic melanoma by IHC alone. Need EWSR1-ATF1 or EWSR1-CREB1 FISH confirmation."
      },
      {
        "marker": "Melan-A",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive; melanocytic marker."
      },
      {
        "marker": "AE1/AE3",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; carcinoma excluded."
      },
      {
        "marker": "CD34",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; SFT excluded."
      }
    ],
    "molecular": [
      {
        "alteration": "EWSR1-ATF1 fusion t(12;22)",
        "notes": "Most common fusion in clear cell sarcoma of soft tissue. Same fusion as angiomatoid fibrous histiocytoma and salivary gland clear cell carcinoma — clinical context essential."
      },
      {
        "alteration": "EWSR1-CREB1 fusion t(2;22)",
        "notes": "Second most common fusion; also seen in AFH and clear cell sarcoma of GI tract."
      }
    ]
  },
  {
    "id": "alveolar-soft-part-sarcoma",
    "name": "Alveolar Soft Part Sarcoma (ASPS)",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "TFE3",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "moderate",
        "notes": "Nuclear; driven by ASPSCR1-TFE3 fusion. Also positive in TFE3-rearranged RCC, PEComa, and some epithelioid angiosarcomas — need correlation."
      },
      {
        "marker": "Cathepsin K",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Lysosomal cysteine protease; positive in ASPS and PEComa."
      },
      {
        "marker": "Desmin",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Focal in some."
      },
      {
        "marker": "SMA",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Typically negative; useful to distinguish from rhabdoid tumors."
      },
      {
        "marker": "AE1/AE3",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; carcinoma excluded."
      }
    ],
    "molecular": [
      {
        "alteration": "ASPSCR1-TFE3 fusion t(X;17) unbalanced",
        "notes": "Defining alteration in ASPS. TFE3 nuclear IHC is the surrogate (positive in >95%). Same fusion as TFE3-rearranged RCC — renal location distinguishes."
      }
    ]
  },
  {
    "id": "pecoma",
    "name": "PEComa (Perivascular Epithelioid Cell Tumour)",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "HMB-45",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Most sensitive melanocytic marker in PEComa; cytoplasmic granular."
      },
      {
        "marker": "Melan-A",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive in most."
      },
      {
        "marker": "Cathepsin K",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Highly sensitive for PEComa including TFE3-rearranged cases."
      },
      {
        "marker": "SMA",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Smooth muscle component; co-expression of SMA + melanocytic markers is the hallmark of PEComa."
      },
      {
        "marker": "TFE3",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Positive in TFE3-rearranged subset (TSC wild-type). Nuclear TFE3 = TFE3-rearranged PEComa (different biology, may not respond to mTOR inhibitors)."
      },
      {
        "marker": "SOX10",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; useful to exclude melanoma (SOX10+)."
      }
    ],
    "molecular": [
      {
        "alteration": "TSC1/TSC2 inactivation",
        "notes": "Most PEComas have biallelic TSC1 (hamartin) or TSC2 (tuberin) loss of function. Germline TSC mutations = tuberous sclerosis. mTOR inhibitors (everolimus/sirolimus) are active in TSC-mutant PEComa."
      },
      {
        "alteration": "TFE3 rearrangement/amplification Xp11",
        "notes": "TFE3-rearranged PEComa (~10-15%); these are TSC-wild-type and may not respond to mTOR inhibitors. Nuclear TFE3 IHC is positive."
      }
    ]
  },
  {
    "id": "imt",
    "name": "Inflammatory Myofibroblastic Tumour (IMT)",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "ALK",
        "role": "positive",
        "sensitivity": "~50%",
        "specificity": "high",
        "notes": "Cytoplasmic/membranous; reflects ALK rearrangement (~50% of IMT). Pattern varies by fusion partner. Note: ALK-negative IMT exists and does not exclude diagnosis."
      },
      {
        "marker": "SMA",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Myofibroblastic differentiation."
      },
      {
        "marker": "Desmin",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Focal in subset."
      },
      {
        "marker": "AE1/AE3",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Focal in subset; EMA can be positive too."
      },
      {
        "marker": "CD34",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Typically negative; positive → SFT or DFSP."
      }
    ],
    "molecular": [
      {
        "alteration": "ALK fusions",
        "notes": "~50% of IMT; most common partners: TPM3, TPM4, CLTC, RANBP2. ALK IHC is the surrogate (positive in ~50%). ALK inhibitors (crizotinib) active in ALK+ IMT."
      },
      {
        "alteration": "ROS1 or RET fusions",
        "notes": "Rare, ALK-negative IMT; targetable with relevant kinase inhibitors."
      }
    ]
  },
  {
    "id": "dfsp",
    "name": "Dermatofibrosarcoma Protuberans (DFSP)",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "CD34",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse strong; key positive marker. Loss can occur in fibrosarcomatous transformation."
      },
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Non-specific spindle cell marker."
      },
      {
        "marker": "Factor XIIIa",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in DFSP; positive in dermatofibroma/benign fibrous histiocytoma. Key differential."
      },
      {
        "marker": "SMA",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in typical DFSP; positive in myofibrosarcoma."
      },
      {
        "marker": "S100",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; useful to exclude nerve sheath tumour."
      }
    ],
    "molecular": [
      {
        "alteration": "COL1A1-PDGFB fusion t(17;22)",
        "notes": ">90% of DFSP. Same translocation in giant cell fibroblastoma (pediatric/infantile variant of DFSP). PDGFB-directed therapy (imatinib) active in unresectable/metastatic DFSP."
      }
    ]
  },
  {
    "id": "undifferentiated-pleomorphic-sarcoma",
    "name": "Undifferentiated Pleomorphic Sarcoma (UPS / MFH)",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse; non-specific mesenchymal marker confirming sarcoma lineage."
      },
      {
        "marker": "SMA",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Focal in some."
      },
      {
        "marker": "Desmin",
        "role": "variable",
        "sensitivity": "~20%",
        "specificity": "—",
        "notes": "Focal in some; diffuse → leiomyosarcoma."
      },
      {
        "marker": "S100",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; positive → MPNST or clear cell sarcoma."
      },
      {
        "marker": "AE1/AE3",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; positive → sarcomatoid carcinoma."
      },
      {
        "marker": "MDM2",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative or low; if diffuse nuclear MDM2+ → consider DDLPS."
      },
      {
        "marker": "p16",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Variable; not diagnostic."
      }
    ]
  },
  {
    "id": "epithelioid-hemangioendothelioma",
    "name": "Epithelioid Hemangioendothelioma (EHE)",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "ERG",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Nuclear; endothelial marker confirming vascular lineage."
      },
      {
        "marker": "CD31",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "high",
        "notes": "Most specific endothelial marker."
      },
      {
        "marker": "CD34",
        "role": "positive",
        "sensitivity": "~75%",
        "specificity": "—",
        "notes": "Positive."
      },
      {
        "marker": "CAMTA1",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "high",
        "notes": "Nuclear; highly specific for WWTR1-CAMTA1 fusion EHE. Most useful distinguishing marker from angiosarcoma and carcinoma."
      },
      {
        "marker": "TFE3",
        "role": "variable",
        "sensitivity": "~10%",
        "specificity": "—",
        "notes": "Positive in YAP1-TFE3 fusion subset (CAMTA1-negative). Epithelioid morphology with CAMTA1−/TFE3+ → YAP1-TFE3 EHE."
      },
      {
        "marker": "AE1/AE3",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Focal; EHE can be keratin positive — significant pitfall for carcinoma especially in liver."
      }
    ],
    "molecular": [
      {
        "alteration": "WWTR1-CAMTA1 fusion t(1;3)",
        "notes": ">90% of EHE. CAMTA1 nuclear IHC is the diagnostic surrogate (~90% sensitive, highly specific). Confirms diagnosis in CAMTA1+ cases."
      },
      {
        "alteration": "YAP1-TFE3 fusion t(X;11)",
        "notes": "Rare subset (~10%); CAMTA1-negative but TFE3 IHC positive. Distinct morphology (more eosinophilic, vasoformative). Same TFE3 IHC as ASPS and TFE3-RCC — context required."
      }
    ]
  },
  {
    "id": "pheochromocytoma-paraganglioma",
    "name": "Pheochromocytoma / Paraganglioma",
    "category": "Endocrine",
    "markers": [
      {
        "marker": "Synaptophysin",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse in chief cells; most sensitive NE marker."
      },
      {
        "marker": "Chromogranin A",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Diffuse in chief cells."
      },
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive in sustentacular cells (peripheral cells); their presence is a reassuring feature of well-differentiated lesion."
      },
      {
        "marker": "SOX10",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive in sustentacular cells; more sensitive than S100 for sustentacular cells."
      },
      {
        "marker": "Tyrosine hydroxylase",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "high",
        "notes": "Rate-limiting enzyme in catecholamine synthesis. Most specific for catecholaminergic differentiation."
      },
      {
        "marker": "GATA3",
        "role": "positive",
        "sensitivity": "~75%",
        "specificity": "—",
        "notes": "Positive in paragangliomas; not widely known. GATA3 positivity does NOT mean urothelial or breast origin in this context."
      },
      {
        "marker": "SDHB",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Loss of granular cytoplasmic staining → SDH-deficient tumour (mutation in SDHA/B/C/D). Screen all pheochromocytomas/paragangliomas for hereditary syndrome."
      },
      {
        "marker": "AE1/AE3",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; carcinoma excluded."
      }
    ]
  },
  {
    "id": "adrenocortical-carcinoma",
    "name": "Adrenocortical Carcinoma (ACC)",
    "category": "Endocrine",
    "markers": [
      {
        "marker": "Inhibin",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Cytoplasmic; most sensitive adrenocortical marker. Also positive in sex cord-stromal tumors and steroid-producing cells."
      },
      {
        "marker": "Calretinin",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Nuclear + cytoplasmic in adrenocortical cells. Less sensitive than inhibin for ACC."
      },
      {
        "marker": "Melan-A",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive in adrenocortical tumours (different epitope than melanocytic Melan-A/MART-1). Clone A103 used here is not a melanocytic marker in this context."
      },
      {
        "marker": "SF-1",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "high",
        "notes": "Nuclear; transcription factor specific for adrenocortical and gonadal steroidogenic cells. Best single marker for ACC."
      },
      {
        "marker": "Synaptophysin",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Focal in subset of ACC — pitfall: can mimic pheochromocytoma or NET. Chromogranin is negative in ACC."
      },
      {
        "marker": "Chromogranin A",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in ACC; positive in pheochromocytoma and NET — key distinguishing feature."
      },
      {
        "marker": "AE1/AE3",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variable, can be focal."
      },
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Diffuse; non-specific."
      }
    ]
  },
  {
    "id": "thyroid-anaplastic",
    "name": "Anaplastic Thyroid Carcinoma",
    "category": "Thyroid",
    "markers": [
      {
        "marker": "AE1/AE3",
        "role": "positive",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Often lost or weak; focal in subset. Negativity does not exclude."
      },
      {
        "marker": "PAX8",
        "role": "positive",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Retained in a proportion; PAX8 positivity supports thyroid origin."
      },
      {
        "marker": "Thyroglobulin",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Always negative (lost differentiation). Positive → follicular carcinoma, not anaplastic."
      },
      {
        "marker": "TTF-1",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Always negative."
      },
      {
        "marker": "p53",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Diffuse strong (TP53 mutation). Common in anaplastic thyroid carcinoma."
      },
      {
        "marker": "PD-L1",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Variable; relevant for immunotherapy eligibility (pembrolizumab approved for BRAF-wild-type ATC)."
      }
    ],
    "molecular": [
      {
        "alteration": "TP53 mutations",
        "notes": "~70% of anaplastic thyroid carcinoma; hallmark of dedifferentiation from well-differentiated carcinoma."
      },
      {
        "alteration": "BRAF V600E",
        "notes": "~20% of ATC; dabrafenib + trametinib approved (FDA) for BRAF V600E+ ATC — first approved targeted therapy for this entity."
      },
      {
        "alteration": "TERT promoter mutations",
        "notes": "~30-70% of ATC; marker of aggressive biology."
      },
      {
        "alteration": "HRAS/KRAS/NRAS mutations",
        "notes": "~20-40% of ATC."
      },
      {
        "alteration": "PIK3CA/PTEN mutations",
        "notes": "PIK3CA ~5-25%, PTEN loss ~10-15%; PI3K/AKT pathway activation."
      },
      {
        "alteration": "ALK fusions",
        "notes": "~5% of ATC; ALK inhibitors may be active."
      }
    ]
  },
  {
    "id": "thyroid-poorly-differentiated",
    "name": "Poorly Differentiated Thyroid Carcinoma (PDTC)",
    "category": "Thyroid",
    "markers": [
      {
        "marker": "Thyroglobulin",
        "role": "positive",
        "sensitivity": "~50%",
        "specificity": "high",
        "notes": "Partially retained; reduced compared to well-differentiated thyroid carcinoma."
      },
      {
        "marker": "TTF-1",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Often retained; loss correlates with dedifferentiation."
      },
      {
        "marker": "PAX8",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Usually retained even when TTF-1/thyroglobulin lost."
      },
      {
        "marker": "Ki-67",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Elevated (typically 5–30%); WHO Turin criteria require > 5 mitoses/2 mm² and/or necrosis and/or convoluted nuclei."
      }
    ]
  },
  {
    "id": "nasopharyngeal-carcinoma",
    "name": "Nasopharyngeal Carcinoma (NPC)",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "AE1/AE3",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Confirms carcinoma; often strong in undifferentiated NPC despite primitive morphology."
      },
      {
        "marker": "p63",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Squamous lineage; positive in non-keratinizing and undifferentiated types."
      },
      {
        "marker": "EBV (EBER ISH)",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "high",
        "notes": "In situ hybridisation (EBER) is gold standard for EBV association in NPC. Positive in WHO types II and III. More sensitive than LMP1 IHC."
      },
      {
        "marker": "EBV/LMP1",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "EBV latent membrane protein; less sensitive than EBER ISH. A negative LMP1 does not exclude EBV-associated NPC."
      },
      {
        "marker": "p16",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually negative. p16+ nasopharyngeal SCC → consider HPV-related oropharyngeal carcinoma rather than true NPC."
      }
    ]
  },
  {
    "id": "nut-carcinoma",
    "name": "NUT Carcinoma (NUT Midline Carcinoma)",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "NUT",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "~99%",
        "notes": "Nuclear speckled; pathognomonic when positive. Any undifferentiated carcinoma in midline should be tested. BRD4-NUT fusion most common."
      },
      {
        "marker": "p40",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Focal squamous marker positivity in some; does not preclude NUT carcinoma."
      },
      {
        "marker": "AE1/AE3",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive; confirms epithelial lineage."
      },
      {
        "marker": "SOX2",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Positive in some; not specific."
      },
      {
        "marker": "CD34",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; useful to exclude SFT in mediastinum."
      }
    ],
    "molecular": [
      {
        "alteration": "BRD4-NUT fusion t(15;19)",
        "notes": "~67% of NUT carcinoma. NUT IHC (nuclear speckled) is sensitive (~90%) and specific (~99%). Bromodomain inhibitors under investigation."
      },
      {
        "alteration": "BRD3-NUT fusion t(9;15)",
        "notes": "~33% of NUT carcinoma; NUT IHC positive. Confirms diagnosis in midline undifferentiated carcinoma."
      }
    ]
  },
  {
    "id": "sinonasal-undifferentiated",
    "name": "Sinonasal Undifferentiated Carcinoma (SNUC)",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "AE1/AE3",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse positive; confirms epithelial lineage."
      },
      {
        "marker": "NUT",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; must be excluded in any sinonasal undifferentiated carcinoma (NUT carcinoma mimics SNUC)."
      },
      {
        "marker": "p40",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; p40+ → squamous cell carcinoma, not SNUC."
      },
      {
        "marker": "Synaptophysin",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; NE markers negative distinguishes from sinonasal NEC and olfactory neuroblastoma."
      },
      {
        "marker": "S100",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; positive → olfactory neuroblastoma (sustentacular cells) or melanoma."
      },
      {
        "marker": "IDH2 R172",
        "role": "variable",
        "sensitivity": "~20%",
        "specificity": "high",
        "notes": "Novel IDH2-mutant SNUC subtype; test with mutation-specific antibody. Separate entity with IDH2 R172 hotspot mutation."
      }
    ]
  },
  {
    "id": "olfactory-neuroblastoma",
    "name": "Olfactory Neuroblastoma (Esthesioneuroblastoma)",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "Synaptophysin",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Most sensitive NE marker; diffuse."
      },
      {
        "marker": "Chromogranin A",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive."
      },
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Sustentacular cells at periphery of cell nests; their presence helps confirm diagnosis of well-differentiated esthesioneuroblastoma."
      },
      {
        "marker": "AE1/AE3",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; positive → SNUC or NUT carcinoma."
      },
      {
        "marker": "p40",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; squamous marker."
      },
      {
        "marker": "CD99",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Variable; less than Ewing sarcoma — helpful when differential includes Ewing."
      }
    ]
  },
  {
    "id": "acinic-cell-carcinoma",
    "name": "Acinic Cell Carcinoma (Salivary Gland)",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "SOX10",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Nuclear; most sensitive marker for salivary acinic cell carcinoma."
      },
      {
        "marker": "DOG1",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Positive; same antibody as used for GIST — different context. Confirms acinar differentiation."
      },
      {
        "marker": "NR4A3",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "high",
        "notes": "Nuclear; NR4A3 fusion is defining for acinic cell carcinoma. IHC is a surrogate for fusion testing."
      },
      {
        "marker": "S100",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; useful to distinguish from mucoepidermoid carcinoma (S100-) and adenoid cystic (S100+)."
      },
      {
        "marker": "p63",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; useful to distinguish from squamous/mixed tumors."
      }
    ]
  },
  {
    "id": "adenoid-cystic-carcinoma",
    "name": "Adenoid Cystic Carcinoma (Salivary Gland)",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "MYB",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "high",
        "notes": "Nuclear; reflects MYB-NFIB fusion. Most specific marker for AdCC."
      },
      {
        "marker": "SOX10",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Diffuse nuclear in myoepithelial/abluminal cells."
      },
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Positive in myoepithelial cells."
      },
      {
        "marker": "SMA",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Myoepithelial marker; outer abluminal cells."
      },
      {
        "marker": "CD117",
        "role": "positive",
        "sensitivity": "~75%",
        "specificity": "—",
        "notes": "Luminal cell positivity; less useful distinguishing feature."
      },
      {
        "marker": "p63",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Abluminal cells; myoepithelial."
      },
      {
        "marker": "Ki-67",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Grade correlates with Ki-67; solid variant has highest Ki-67."
      }
    ],
    "molecular": [
      {
        "alteration": "MYB-NFIB fusion t(6;9)",
        "notes": "~60% of adenoid cystic carcinoma; most common fusion. MYB IHC is sensitive (~90%) but not specific for AdCC. Specific among salivary gland tumors."
      },
      {
        "alteration": "MYBL1-NFIB fusion t(8;9)",
        "notes": "~10% of AdCC; similar biology to MYB-NFIB. MYBL1 rearrangements confirm diagnosis when MYB FISH negative."
      }
    ]
  },
  {
    "id": "mucoepidermoid-carcinoma",
    "name": "Mucoepidermoid Carcinoma (Salivary Gland)",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "p63",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Epidermoid (squamous) component positive."
      },
      {
        "marker": "MAML2",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "high",
        "notes": "No direct IHC antibody but FISH for CRTC1-MAML2 or CRTC3-MAML2 fusion confirms diagnosis. IHC: evaluate with p63/p40 pattern."
      },
      {
        "marker": "SOX10",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in epidermoid/mucous cells; SOX10+ → AdCC myoepithelial cells."
      },
      {
        "marker": "MUC5AC",
        "role": "positive",
        "sensitivity": "~75%",
        "specificity": "—",
        "notes": "Mucous cells positive; confirms mucinous differentiation."
      },
      {
        "marker": "GATA3",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Variable; GATA3 positivity in salivary gland tumors is a known pitfall when working up unknown primaries."
      }
    ],
    "molecular": [
      {
        "alteration": "CRTC1-MAML2 fusion t(11;19)",
        "notes": "~60% of mucoepidermoid carcinoma; associated with lower grade and better prognosis. Specific among salivary gland tumors. Same fusion in ~50% of clear cell hidradenoma of skin."
      },
      {
        "alteration": "CRTC3-MAML2 fusion t(11;15)",
        "notes": "~10% of mucoepidermoid carcinoma; MAML2 FISH encompasses both CRTC1 and CRTC3 partners."
      }
    ]
  },
  {
    "id": "primary-mediastinal-bcl",
    "name": "Primary Mediastinal Large B-Cell Lymphoma (PMBL)",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD20",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "B-cell lineage."
      },
      {
        "marker": "CD19",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "B-cell lineage."
      },
      {
        "marker": "PAX5",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "B-cell lineage."
      },
      {
        "marker": "CD30",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Partial/variable expression; weaker than classical Hodgkin lymphoma."
      },
      {
        "marker": "MAL",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "high",
        "notes": "Positive in PMBL; useful to distinguish from mediastinal DLBCL."
      },
      {
        "marker": "CD15",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; positive → classical Hodgkin lymphoma."
      },
      {
        "marker": "PD-L1",
        "role": "positive",
        "sensitivity": "~75%",
        "specificity": "—",
        "notes": "Strong expression in most PMBL; 9p24.1 amplification. Relevant for PD-1/PD-L1 therapy."
      },
      {
        "marker": "BCL6",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Germinal centre derivation."
      }
    ]
  },
  {
    "id": "nkt-cell-lymphoma",
    "name": "Extranodal NK/T-Cell Lymphoma, Nasal Type",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD56",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "NK-cell lineage; membranous. Note: CD56+ T-cell lymphomas and neuroendocrine tumors also positive."
      },
      {
        "marker": "CD3",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Surface CD3 negative (NK cells lack surface CD3); cytoplasmic CD3ε positive."
      },
      {
        "marker": "CD3",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Cytoplasmic epsilon chain detected by polyclonal anti-CD3; positive in NK cells."
      },
      {
        "marker": "TIA-1",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Cytotoxic granule marker; positive."
      },
      {
        "marker": "Granzyme B",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Cytotoxic T-cell/NK-cell marker."
      },
      {
        "marker": "EBV (EBER ISH)",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "EBV EBER ISH positive in essentially all cases; required for diagnosis."
      },
      {
        "marker": "CD4",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative."
      },
      {
        "marker": "CD8",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually negative."
      },
      {
        "marker": "TCR",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "TCRβ/γ negative in true NK-cell lineage; some cases show αβ or γδ TCR (cytotoxic T-cell type)."
      }
    ]
  },
  {
    "id": "aitl",
    "name": "Angioimmunoblastic T-Cell Lymphoma (AITL)",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD3",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "T-cell marker; often weak/partial in tumour cells."
      },
      {
        "marker": "CD4",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "T helper cell phenotype."
      },
      {
        "marker": "PD-1 (CD279)",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Follicular helper T-cell (TFH) marker; most sensitive for AITL. Strong PD-1 on neoplastic cells in background of hyperplastic follicles."
      },
      {
        "marker": "CXCL13",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "TFH marker; helps confirm follicular helper T-cell origin."
      },
      {
        "marker": "BCL6",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "TFH marker; supports germinal centre-associated T-cell phenotype."
      },
      {
        "marker": "ICOS",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "TFH marker."
      },
      {
        "marker": "CD10",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "TFH marker; positive in a subset."
      },
      {
        "marker": "CD21",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Expanded FDC meshworks around vessels are a hallmark histologic feature; highlight with CD21 or CD23."
      },
      {
        "marker": "EBV (EBER ISH)",
        "role": "variable",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "EBV-positive B cells usually present in background; the T-cells themselves are EBER-negative."
      }
    ]
  },
  {
    "id": "hepatosplenic-tcl",
    "name": "Hepatosplenic T-Cell Lymphoma (HSTL)",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD3",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "T-cell marker."
      },
      {
        "marker": "TCR γδ",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Gamma-delta T-cell receptor; characteristic. ~20% are αβ TCR type."
      },
      {
        "marker": "CD56",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "NK-cell marker co-expressed."
      },
      {
        "marker": "TIA-1",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Cytotoxic granule marker."
      },
      {
        "marker": "CD4",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative."
      },
      {
        "marker": "CD8",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually negative (CD4-/CD8- double-negative phenotype)."
      },
      {
        "marker": "CD5",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "CD5 loss common; negative."
      },
      {
        "marker": "EBV/LMP1",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "EBV negative; helps distinguish from EBV+ NK/T-cell lymphoma."
      }
    ]
  },
  {
    "id": "blastic-plasmacytoid-dc",
    "name": "Blastic Plasmacytoid Dendritic Cell Neoplasm (BPDCN)",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD123",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "high",
        "notes": "IL-3 receptor α; most sensitive and specific marker. Therapeutic target (tagraxofusp)."
      },
      {
        "marker": "CD303 (BDCA-2)",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "high",
        "notes": "Plasmacytoid DC marker; highly specific."
      },
      {
        "marker": "TCF4 (E2-2)",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "high",
        "notes": "Nuclear transcription factor for pDC lineage; emerging as most specific single marker."
      },
      {
        "marker": "CD4",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive without T-cell differentiation markers."
      },
      {
        "marker": "CD56",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive; aberrant expression."
      },
      {
        "marker": "CD3",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; T-cell markers absent."
      },
      {
        "marker": "CD20",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; B-cell markers absent."
      },
      {
        "marker": "MPO",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; myeloid markers absent."
      }
    ]
  },
  {
    "id": "hairy-cell-leukemia",
    "name": "Hairy Cell Leukaemia",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD20",
        "role": "positive",
        "sensitivity": "~100%",
        "specificity": "—",
        "notes": "Bright expression."
      },
      {
        "marker": "CD25",
        "role": "positive",
        "sensitivity": "~100%",
        "specificity": "—",
        "notes": "IL-2 receptor; characteristically positive."
      },
      {
        "marker": "CD11c",
        "role": "positive",
        "sensitivity": "~100%",
        "specificity": "—",
        "notes": "Monocyte marker characteristically positive in HCL."
      },
      {
        "marker": "Annexin A1",
        "role": "positive",
        "sensitivity": "~100%",
        "specificity": "high",
        "notes": "Most specific marker for HCL. Not expressed in other B-cell lymphomas. Cytoplasmic."
      },
      {
        "marker": "TRAP (tartrate-resistant acid phosphatase)",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Historically used cytochemical stain; IHC available. Positive in HCL."
      },
      {
        "marker": "DBA.44 (CD72)",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive in HCL and useful in bone marrow trephine."
      },
      {
        "marker": "CD5",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; CD5+ → CLL/MCL."
      },
      {
        "marker": "CD10",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in typical HCL; helps exclude FL."
      }
    ]
  },
  {
    "id": "neuroblastoma",
    "name": "Neuroblastoma",
    "category": "Pediatric",
    "markers": [
      {
        "marker": "Synaptophysin",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Most consistent NE/neural marker in neuroblastoma."
      },
      {
        "marker": "Chromogranin A",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive; often weak or focal."
      },
      {
        "marker": "NSE",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Sensitive but not specific."
      },
      {
        "marker": "NB84 (NB-A)",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "high",
        "notes": "Neuroblastoma-specific antigen; most specific IHC marker."
      },
      {
        "marker": "PHOX2B",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "high",
        "notes": "Nuclear transcription factor; highly specific for neuroblastoma and paraganglioma. Not expressed in other small round cell tumors."
      },
      {
        "marker": "CD99",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; membranous CD99 → Ewing sarcoma."
      },
      {
        "marker": "Desmin",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; positive → RMS."
      },
      {
        "marker": "AE1/AE3",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; positive → DSRCT or NEC."
      },
      {
        "marker": "TdT",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; positive → lymphoblastic lymphoma/ALL."
      }
    ],
    "molecular": [
      {
        "alteration": "MYCN amplification",
        "notes": "~30% of neuroblastoma; strongest single predictor of poor prognosis. Defines high-risk disease regardless of stage."
      },
      {
        "alteration": "1p deletion",
        "notes": "~30% of neuroblastoma; associated with MYCN amplification and poor prognosis."
      },
      {
        "alteration": "+17q gain",
        "notes": "~30% of neuroblastoma; associated with poor prognosis."
      },
      {
        "alteration": "Hyperdiploidy",
        "notes": "~50% of neuroblastoma; associated with favorable prognosis (especially in infants with low-stage disease)."
      },
      {
        "alteration": "ALK mutations/amplification",
        "notes": "High-risk feature; germline ALK mutations = hereditary neuroblastoma. ALK inhibitors (crizotinib) under investigation."
      },
      {
        "alteration": "ATRX mutations / TERT rearrangements",
        "notes": "High-risk alterations in older children; associated with aggressive behavior."
      }
    ]
  },
  {
    "id": "wilms-tumor",
    "name": "Nephroblastoma (Wilms Tumour)",
    "category": "Pediatric",
    "markers": [
      {
        "marker": "WT1 (N-terminal)",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Nuclear; N-terminal WT1 antibody. Positive in blastemal and stromal components. Negative in DSRCT (use C-terminal WT1 for DSRCT)."
      },
      {
        "marker": "PAX2",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Nuclear; renal/Müllerian transcription factor. Positive in nephrogenic rests and Wilms tumour."
      },
      {
        "marker": "PAX8",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Nuclear; renal lineage."
      },
      {
        "marker": "Desmin",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Stromal component can be desmin positive (rhabdomyoblastic differentiation in some)."
      },
      {
        "marker": "CD56",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Blastemal component."
      },
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Stromal/mesenchymal component."
      },
      {
        "marker": "INI1/SMARCB1",
        "role": "retained",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Retained; loss → rhabdoid tumour of kidney."
      }
    ]
  },
  {
    "id": "hepatoblastoma",
    "name": "Hepatoblastoma",
    "category": "Pediatric",
    "markers": [
      {
        "marker": "AFP",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive; elevated serum AFP is a clinical hallmark. IHC can be focal."
      },
      {
        "marker": "HepPar1",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Hepatocellular differentiation marker; positive in hepatoblastic component."
      },
      {
        "marker": "Arginase-1",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "high",
        "notes": "Hepatocellular marker; more specific than Hep Par 1."
      },
      {
        "marker": "β-catenin",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Nuclear activation (CTNNB1 mutation); present in most hepatoblastomas."
      },
      {
        "marker": "Glypican-3",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive in hepatoblastoma and yolk sac tumour — not in normal liver. Useful for diagnosis."
      },
      {
        "marker": "Vimentin",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Stromal/blastemal component."
      }
    ]
  },
  {
    "id": "pleuropulmonary-blastoma",
    "name": "Pleuropulmonary Blastoma (PPB)",
    "category": "Pediatric",
    "markers": [
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse in blastemal/sarcomatous component."
      },
      {
        "marker": "Desmin",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Rhabdomyoblastic component positive."
      },
      {
        "marker": "MyoD1",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Nuclear; rhabdomyoblastic differentiation."
      },
      {
        "marker": "SMA",
        "role": "variable",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Stromal spindle cell component."
      },
      {
        "marker": "AE1/AE3",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in sarcomatous component; focal epithelial nests positive."
      },
      {
        "marker": "DICER1",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "No validated IHC for DICER1; molecular DICER1 mutation testing recommended for all PPB (DICER1 syndrome)."
      }
    ]
  },
  {
    "id": "osteosarcoma",
    "name": "Osteosarcoma",
    "category": "Bone",
    "markers": [
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Non-specific mesenchymal marker."
      },
      {
        "marker": "SATB2",
        "role": "positive",
        "sensitivity": "~75%",
        "specificity": "—",
        "notes": "Nuclear; osteoblast transcription factor. Useful to confirm osteoblastic differentiation. Also positive in colorectal adenocarcinoma — context-dependent."
      },
      {
        "marker": "SMA",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Focal in subset."
      },
      {
        "marker": "AE1/AE3",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; positive → sarcomatoid carcinoma."
      },
      {
        "marker": "MDM2",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Not amplified in most osteosarcoma; MDM2+ → DDLPS or parosteal osteosarcoma (well-differentiated)."
      },
      {
        "marker": "H3.3 G34W",
        "role": "positive",
        "sensitivity": "~90% of giant cell tumour of bone",
        "specificity": "high",
        "notes": "Specific for giant cell tumour of bone (H3F3A G34W mutation). Negative in osteosarcoma — helpful differential when giant cells present."
      }
    ]
  },
  {
    "id": "chondrosarcoma",
    "name": "Chondrosarcoma (Conventional)",
    "category": "Bone",
    "markers": [
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Diffuse in chondrocytes; confirms cartilaginous differentiation."
      },
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Non-specific mesenchymal marker."
      },
      {
        "marker": "IDH1 R132H",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "high",
        "notes": "Positive in IDH-mutant central/periosteal chondrosarcoma. Negative in periosteal (periosteal type is not IDH-mutant). Mutation-specific antibody."
      },
      {
        "marker": "NKX2.2",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; positive in Ewing sarcoma (and mesenchymal chondrosarcoma) — key differential."
      },
      {
        "marker": "SOX9",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Chondrogenic transcription factor; diffuse nuclear."
      }
    ]
  },
  {
    "id": "giant-cell-tumour-bone",
    "name": "Giant Cell Tumour of Bone (GCT)",
    "category": "Bone",
    "markers": [
      {
        "marker": "H3.3 G34W",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "~99%",
        "notes": "Nuclear; pathognomonic for GCT of bone. Absent in other giant cell-containing lesions (GCT of soft tissue, chondroblastoma, osteosarcoma with giant cells)."
      },
      {
        "marker": "p63",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Strong nuclear in mononuclear stromal cells; GCT classic positive marker."
      },
      {
        "marker": "CD68",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Osteoclast-like giant cells positive; not specific."
      },
      {
        "marker": "SATB2",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Focal in stromal cells."
      }
    ]
  },
  {
    "id": "chondroblastoma",
    "name": "Chondroblastoma",
    "category": "Bone",
    "markers": [
      {
        "marker": "H3.3 K36M",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "~99%",
        "notes": "Nuclear; mutation-specific antibody for H3F3B K36M. Most specific marker for chondroblastoma. Not present in other cartilaginous tumors or GCT."
      },
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Chondroid differentiation."
      },
      {
        "marker": "DOG1",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Focal in some; not useful for GIST differential in bone setting."
      },
      {
        "marker": "p63",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Focal; less intense than GCT."
      }
    ]
  },
  {
    "id": "basal-cell-carcinoma",
    "name": "Basal Cell Carcinoma (BCC)",
    "category": "Skin",
    "markers": [
      {
        "marker": "Ber-EP4",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "high",
        "notes": "Most useful distinguishing marker between BCC (BerEP4+) and SqCC (BerEP4–). Diffuse membranous."
      },
      {
        "marker": "p63",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Basal/myoepithelial marker; diffuse nuclear."
      },
      {
        "marker": "CK5/6",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Diffuse."
      },
      {
        "marker": "EMA",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; EMA+ → SqCC or trichilemmoma."
      },
      {
        "marker": "CEA",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; CEA+ → eccrine/sebaceous carcinoma."
      },
      {
        "marker": "AR",
        "role": "positive",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variable; helps distinguish from SqCC (AR usually negative)."
      }
    ]
  },
  {
    "id": "sebaceous-carcinoma",
    "name": "Sebaceous Carcinoma",
    "category": "Skin",
    "markers": [
      {
        "marker": "AR",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "high",
        "notes": "Most sensitive and specific marker for sebaceous differentiation. Also positive in breast apocrine carcinoma."
      },
      {
        "marker": "EMA",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive."
      },
      {
        "marker": "Adipophilin",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "high",
        "notes": "Cytoplasmic granular; very specific for sebaceous differentiation. Marks lipid droplets."
      },
      {
        "marker": "p63",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Focal in basal cells."
      },
      {
        "marker": "CK7",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually negative; CK7+ → Paget's disease or glandular differentiation."
      },
      {
        "marker": "MSH2/MSH6/MLH1/PMS2",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Evaluate for MMR deficiency (Muir-Torre syndrome). Loss of MSH2/MSH6 is most common."
      }
    ]
  },
  {
    "id": "cutaneous-scc",
    "name": "Cutaneous Squamous Cell Carcinoma",
    "category": "Skin",
    "markers": [
      {
        "marker": "p40",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "high",
        "notes": "Diffuse nuclear; best squamous marker."
      },
      {
        "marker": "p63",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse; slightly less specific than p40."
      },
      {
        "marker": "CK5/6",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Supports squamous."
      },
      {
        "marker": "Ber-EP4",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; positive → BCC."
      },
      {
        "marker": "CEA",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Focal in some SqCC; not specific."
      },
      {
        "marker": "p16",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "p16 positivity in cutaneous SCC usually does not indicate high-risk HPV (as opposed to oropharyngeal SCC). Use careful clinical correlation."
      }
    ]
  },
  {
    "id": "paget-extramammary",
    "name": "Extramammary Paget Disease",
    "category": "Skin",
    "markers": [
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~100%",
        "specificity": "—",
        "notes": "Diffuse strong; most consistent single marker."
      },
      {
        "marker": "GATA3",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Nuclear; apocrine/sweat gland lineage marker."
      },
      {
        "marker": "CK20",
        "role": "variable",
        "sensitivity": "~20%",
        "specificity": "—",
        "notes": "When positive, suggests pagetoid spread from internal CRC — clinical workup for secondary Paget required."
      },
      {
        "marker": "CDX2",
        "role": "variable",
        "sensitivity": "~15%",
        "specificity": "—",
        "notes": "Positive → underlying anorectal or GI carcinoma causing pagetoid spread."
      },
      {
        "marker": "CEA",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive; confirms glandular differentiation of Paget cells."
      },
      {
        "marker": "HER2",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Amplified/overexpressed in primary EMPD; therapeutic target."
      }
    ]
  },
  {
    "id": "choriocarcinoma",
    "name": "Choriocarcinoma (Gestational & Gonadal)",
    "category": "Germ Cell",
    "markers": [
      {
        "marker": "β-hCG",
        "role": "positive",
        "sensitivity": "~100%",
        "specificity": "high",
        "notes": "Cytoplasmic in syncytiotrophoblasts. Pathognomonic marker. Also elevated in serum."
      },
      {
        "marker": "AE1/AE3",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive in both cyto- and syncytiotrophoblasts."
      },
      {
        "marker": "Inhibin",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive in trophoblastic tumors including choriocarcinoma."
      },
      {
        "marker": "OCT4",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; OCT4+ → embryonal carcinoma or seminoma/dysgerminoma."
      },
      {
        "marker": "PLAP",
        "role": "positive",
        "sensitivity": "~75%",
        "specificity": "—",
        "notes": "Trophoblastic marker; positive in choriocarcinoma."
      },
      {
        "marker": "p63",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive in cytotrophoblasts; useful to distinguish from other trophoblastic tumors (PSTT: p63–)."
      }
    ]
  },
  {
    "id": "placental-site-trophoblastic",
    "name": "Placental Site Trophoblastic Tumour (PSTT) / Epithelioid Trophoblastic Tumour (ETT)",
    "category": "Germ Cell",
    "markers": [
      {
        "marker": "HSD3B1",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "high",
        "notes": "Intermediate trophoblast marker. Distinguishes PSTT/ETT from choriocarcinoma."
      },
      {
        "marker": "Mel-CAM (CD146)",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Intermediate trophoblast marker; diffuse in PSTT."
      },
      {
        "marker": "β-hCG",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Focally positive (less than choriocarcinoma); serum hCG usually only moderately elevated."
      },
      {
        "marker": "p63",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Focally positive in ETT (more than PSTT)."
      },
      {
        "marker": "AE1/AE3",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse positive."
      },
      {
        "marker": "Inhibin",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive in trophoblastic tumours."
      }
    ]
  },
  {
    "id": "secretory-carcinoma-salivary",
    "name": "Secretory Carcinoma (Salivary Gland / MASC)",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~100%",
        "specificity": "—",
        "notes": "Diffuse strong; consistently positive. One of the most reliable markers for this entity."
      },
      {
        "marker": "SOX10",
        "role": "positive",
        "sensitivity": "~100%",
        "specificity": "—",
        "notes": "Diffuse nuclear; reflects intercalated duct-type differentiation."
      },
      {
        "marker": "Mammaglobin",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Classically positive; named for this association. Also positive in some breast carcinomas."
      },
      {
        "marker": "GATA3",
        "role": "positive",
        "sensitivity": "~100%",
        "specificity": "—",
        "notes": "Strongly positive; \"breast-like\" immunophenotype along with salivary duct carcinoma."
      },
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Non-specific epithelial marker; positive."
      },
      {
        "marker": "AR",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually negative; AR+ favours salivary duct carcinoma over secretory carcinoma."
      },
      {
        "marker": "DOG1",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; DOG1+ acinic cell carcinoma is the main morphologic mimic."
      }
    ],
    "molecular": [
      {
        "alteration": "ETV6-NTRK3",
        "notes": "Molecular: ETV6-NTRK3 fusion in ~97%; ETV6-RET in ~3%. FISH or NGS confirmation. TRK inhibitors (larotrectinib) active in NTRK-fused tumors."
      }
    ]
  },
  {
    "id": "epithelial-myoepithelial-carcinoma",
    "name": "Epithelial-Myoepithelial Carcinoma (Salivary Gland)",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Inner ductal (luminal) epithelial cells positive."
      },
      {
        "marker": "EMA",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Luminal cells positive."
      },
      {
        "marker": "CD117",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Luminal ductal cells; also positive in adenoid cystic carcinoma."
      },
      {
        "marker": "SMA",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Outer myoepithelial cells; diffuse."
      },
      {
        "marker": "p63",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Outer myoepithelial cells; nuclear."
      },
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Myoepithelial cells positive; biphasic staining pattern."
      },
      {
        "marker": "SOX10",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Myoepithelial component; confirms biphasic nature."
      },
      {
        "marker": "AR",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Positive in apocrine variant (AR-rich epithelial-myoepithelial carcinoma)."
      }
    ],
    "molecular": [
      {
        "alteration": "HMGA2 rearrangements",
        "notes": "~25% of epithelial-myoepithelial carcinoma."
      },
      {
        "alteration": "PLAG1 rearrangements",
        "notes": "~25%; suggests origin from pleomorphic adenoma (carcinoma ex-PA)."
      },
      {
        "alteration": "HRAS mutations",
        "notes": "~20%; activating mutations common in epithelial-myoepithelial carcinoma."
      }
    ]
  },
  {
    "id": "polymorphous-adenocarcinoma",
    "name": "Polymorphous Adenocarcinoma (Salivary Gland)",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Diffuse; reflects intercalated duct origin. Shared with secretory carcinoma and AdCC."
      },
      {
        "marker": "SOX10",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Diffuse nuclear; similar to S100."
      },
      {
        "marker": "p63",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Positive — KEY: p63+/p40– profile is characteristic of polymorphous adenoCA (distinguishes from other basal tumors which are p40+)."
      },
      {
        "marker": "p40",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — hallmark of polymorphous adenoCA vs. basal cell adenoCA/adenoCA (which are p40+). Critical distinguishing marker."
      },
      {
        "marker": "Mammaglobin",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Frequently positive; overlaps with secretory carcinoma — correlation with PRKD mutation needed."
      },
      {
        "marker": "MYB",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; MYB+ is specific for adenoid cystic carcinoma. Key differential."
      }
    ],
    "molecular": [
      {
        "alteration": "PRKD1 mutation",
        "notes": "Molecular: PRKD1 E710D hotspot mutation in classic variant; PRKD1/2/3 fusions in cribriform variant. Confirms diagnosis when morphology is equivocal."
      }
    ]
  },
  {
    "id": "myoepithelioma-salivary",
    "name": "Myoepithelioma / Myoepithelial Carcinoma (Salivary Gland)",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "SMA",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Myoepithelial marker; diffuse in most cases."
      },
      {
        "marker": "p63",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Myoepithelial marker; nuclear."
      },
      {
        "marker": "Calponin",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Myoepithelial marker."
      },
      {
        "marker": "S100",
        "role": "variable",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Variably positive; myoepithelial origin confirmed when CK and 2–3 ME markers positive."
      },
      {
        "marker": "GFAP",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Focal in a subset; supports myoepithelial differentiation."
      },
      {
        "marker": "AE1/AE3",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Variable CK expression; confirm with epithelial markers."
      },
      {
        "marker": "INI1/SMARCB1",
        "role": "loss",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Loss in subset of myoepithelial carcinomas. EWSR1 rearrangements in ~45% (soft tissue type)."
      }
    ],
    "molecular": [
      {
        "alteration": "EWSR1 rearrangements (~45%)",
        "notes": "Partners include ZNF444 t(19;22), POU5F1 t(6;22), PBX1 t(1;22). Most common in clear cell variant of myoepithelial carcinoma (~30-40%)."
      },
      {
        "alteration": "SMARCB1 (INI1) loss",
        "notes": "Can occur in myoepithelial carcinoma (subset); associated with aggressive behavior."
      }
    ]
  },
  {
    "id": "pleomorphic-adenoma",
    "name": "Pleomorphic Adenoma (Benign Mixed Tumor)",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "PLAG1",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Nuclear; usually correlates with PLAG1 rearrangements but not entirely reliable. Not very useful in practice per book."
      },
      {
        "marker": "AE1/AE3",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Epithelial component positive."
      },
      {
        "marker": "EMA",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Epithelial component."
      },
      {
        "marker": "CD117",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Luminal cells; also seen in many salivary biphasic tumors."
      },
      {
        "marker": "SMA",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Myoepithelial component."
      },
      {
        "marker": "p63",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Myoepithelial/basal cells."
      },
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Myoepithelial cells; also chondromyxoid stroma."
      }
    ],
    "molecular": [
      {
        "alteration": "PLAG1/HMGA2 fusions",
        "notes": "Molecular: PLAG1 fusions (CTNNB1, LIFR, FGFR1) in ~50-60%; HMGA2 fusions in ~20-30%. Do NOT distinguish benign PA from carcinoma ex-PA."
      }
    ]
  },
  {
    "id": "basal-cell-adenoma-salivary",
    "name": "Basal Cell Adenoma / Basal Cell Adenocarcinoma (Salivary Gland)",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "LEF1",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "moderate",
        "notes": "Nuclear; somewhat sensitive and specific for basal cell adenoma/adenoCA among salivary gland tumors."
      },
      {
        "marker": "β-catenin (nuclear)",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Nuclear; reflects CTNNB1 mutations (~50-80% of adenomas and some carcinomas). Confirms basal cell lineage."
      },
      {
        "marker": "p63",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Basal/myoepithelial cells; diffuse in basal component."
      },
      {
        "marker": "p40",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Basal/myoepithelial cells; positive (unlike polymorphous adenoCA which is p40–)."
      },
      {
        "marker": "CD117",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Luminal cells positive."
      },
      {
        "marker": "SMA",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Focal myoepithelial component."
      },
      {
        "marker": "MYB",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative (or only focal); MYB diffuse+ → adenoid cystic carcinoma."
      }
    ]
  },
  {
    "id": "clear-cell-carcinoma-salivary",
    "name": "Clear Cell Carcinoma (Salivary Gland / Hyalinizing)",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "p63",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Diffuse; all cells positive (unlike biphasic tumors where only outer cells are p63+). Key positive marker."
      },
      {
        "marker": "p40",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive; unlike polymorphous adenoCA (p40–)."
      },
      {
        "marker": "CK5/6",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Supports squamoid/myoepithelial lineage."
      },
      {
        "marker": "SOX10",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Consistently negative — distinguishes from acinic cell CA, myoepithelioma, secretory CA (all SOX10+)."
      },
      {
        "marker": "S100",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; confirms distinction from SOX10/S100-positive salivary tumors."
      },
      {
        "marker": "AR",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; AR+ favours salivary duct carcinoma."
      }
    ],
    "molecular": [
      {
        "alteration": "EWSR1-ATF1",
        "notes": "Molecular: EWSR1-ATF1 fusion in ~80%. Confirms diagnosis. Same fusion in clear cell sarcoma and angiomatoid fibrous histiocytoma — context required."
      }
    ]
  },
  {
    "id": "warthin-tumor",
    "name": "Warthin Tumor (Papillary Cystadenoma Lymphomatosum)",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "PTAH",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Special stain for oncocytic (mitochondria-rich) cells; not in routine use but confirms oncocytic nature."
      },
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Oncocytic epithelium positive."
      },
      {
        "marker": "p63",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Basal cell layer of double-layered oncocytic epithelium positive."
      },
      {
        "marker": "CD20",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Lymphoid stroma B cells positive (majority of the dense lymphoid component)."
      },
      {
        "marker": "AR",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; helps exclude salivary duct carcinoma."
      },
      {
        "marker": "S100",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; distinguishes from oncocytic variants of secretory carcinoma."
      }
    ]
  },
  {
    "id": "low-grade-intraductal-ca-salivary",
    "name": "Low-Grade Intraductal Carcinoma (Salivary Gland)",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse; reflects intercalated duct origin. Key marker alongside SOX10 and mammaglobin."
      },
      {
        "marker": "SOX10",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Diffuse nuclear; confirms intercalated duct lineage."
      },
      {
        "marker": "Mammaglobin",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive; overlaps with secretory carcinoma — distinction requires morphology and NCOA4-RET status."
      },
      {
        "marker": "SMA / p63",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Myoepithelial cells surrounding tumor nests are SMA/p63 positive — confirms intraductal nature."
      },
      {
        "marker": "AR",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually negative (AR+ → high-grade intraductal CA with salivary duct CA-like profile)."
      }
    ],
    "molecular": [
      {
        "alteration": "NCOA4-RET",
        "notes": "Molecular: NCOA4-RET rearrangement in ~50%. Other partners not yet identified. Not routinely used diagnostically."
      }
    ]
  },
  {
    "id": "smarcb1-deficient-sinonasal-ca",
    "name": "SMARCB1 (INI1)-Deficient Sinonasal Carcinoma",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "INI1/SMARCB1",
        "role": "loss",
        "sensitivity": "~100%",
        "specificity": "high",
        "notes": "Complete loss of nuclear INI1 expression is defining. Highly aggressive carcinoma arising in sinonasal tract. Distinguished from SNUC by INI1 loss."
      },
      {
        "marker": "AE1/AE3",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Strong epithelial keratins; confirms carcinoma lineage."
      },
      {
        "marker": "p40",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Variable squamous differentiation marker."
      },
      {
        "marker": "SOX10",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; excludes melanoma and nerve sheath tumors."
      },
      {
        "marker": "NUT",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; NUT carcinoma is a key differential in sinonasal undifferentiated carcinomas."
      },
      {
        "marker": "NE markers",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "NE markers negative (SYN/CHR/CD56); distinguishes from sinonasal NEC and olfactory neuroblastoma."
      }
    ]
  },
  {
    "id": "biphenotypic-sinonasal-sarcoma",
    "name": "Biphenotypic Sinonasal Sarcoma (BSNS)",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse strong; neural differentiation. Key positive marker — unusual for a sarcoma with neural/muscle features."
      },
      {
        "marker": "SMA",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Smooth muscle marker; biphasic (neural + myogenic) differentiation is the defining feature."
      },
      {
        "marker": "SOX10",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — distinguishes BSNS from schwannoma and MPNST which are SOX10+. Critical differential."
      },
      {
        "marker": "AE1/AE3",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; confirms sarcoma (not carcinoma)."
      },
      {
        "marker": "Desmin",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually negative; distinguishes from rhabdomyosarcoma."
      },
      {
        "marker": "Myogenin",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; rhabdomyosarcoma excluded."
      }
    ],
    "molecular": [
      {
        "alteration": "PAX3-MAML3 fusion",
        "notes": "Molecular: PAX3-MAML3 gene fusion is defining in the vast majority of BSNS. Confirms diagnosis."
      }
    ]
  },
  {
    "id": "thyroid-hurthle-cell",
    "name": "Hürthle Cell (Oncocytic) Carcinoma of Thyroid",
    "category": "Thyroid",
    "markers": [
      {
        "marker": "TTF-1",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Retained in most cases; thyroid follicular epithelial marker."
      },
      {
        "marker": "PAX8",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Sensitive thyroid/renal/Müllerian marker."
      },
      {
        "marker": "Thyroglobulin",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "May be reduced compared to conventional follicular carcinoma; negative in anaplastic transformation."
      },
      {
        "marker": "Napsin-A",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Focally positive in some oncocytic thyroid tumors — potential pitfall when evaluating for lung origin."
      },
      {
        "marker": "HBME-1",
        "role": "positive",
        "sensitivity": "~75%",
        "specificity": "—",
        "notes": "Supports malignancy over benign Hürthle cell adenoma."
      },
      {
        "marker": "Galectin-3",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Malignancy marker; more often negative in benign Hürthle cell adenoma."
      }
    ],
    "molecular": [
      {
        "alteration": "RAS/TERT",
        "notes": "Molecular: RAS mutations and TERT promoter mutations in subset. Most oncocytic carcinomas have complex karyotypes without BRAF V600E."
      }
    ]
  },
  {
    "id": "low-grade-fibromyxoid-sarcoma",
    "name": "Low-Grade Fibromyxoid Sarcoma (Evans Tumor / LGFMS)",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "MUC4",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "high",
        "notes": "Cytoplasmic; most useful IHC marker for LGFMS. Negative in perineurioma and intramuscular myxoma (main mimics). Strong diffuse positivity."
      },
      {
        "marker": "EMA",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; EMA+ → perineurioma."
      },
      {
        "marker": "SMA",
        "role": "negative",
        "sensitivity": "~10%",
        "specificity": "—",
        "notes": "Usually negative; LMS is SMA+."
      },
      {
        "marker": "S100",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; neurofibroma is S100+."
      },
      {
        "marker": "STAT6",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; STAT6+ → solitary fibrous tumour (SFT — another bland spindle cell myxoid tumor in differential)."
      }
    ],
    "molecular": [
      {
        "alteration": "FUS-CREB3L2 fusion",
        "notes": "Molecular: FUS-CREB3L2 fusion in >90%; FUS-CREB3L1 in rare cases. Identical fusion in sclerosing epithelioid fibrosarcoma (SEF); LGFMS and SEF are likely related entities."
      }
    ]
  },
  {
    "id": "sclerosing-epithelioid-fibrosarcoma",
    "name": "Sclerosing Epithelioid Fibrosarcoma (SEF)",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "MUC4",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "high",
        "notes": "Positive in pure SEF and hybrid SEF/LGFMS; confirms diagnosis in right context."
      },
      {
        "marker": "EMA",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Focal in subset; can mimic carcinoma in dense sclerotic stroma."
      },
      {
        "marker": "AE1/AE3",
        "role": "variable",
        "sensitivity": "~20%",
        "specificity": "—",
        "notes": "Rare focal positivity; potential pitfall."
      },
      {
        "marker": "S100",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; nerve sheath tumour excluded."
      }
    ],
    "molecular": [
      {
        "alteration": "EWSR1-CREB3L1",
        "notes": "Molecular: EWSR1-CREB3L1 or FUS-CREB3L2 fusions. Overlaps with LGFMS genetics; hybrid tumors occur."
      }
    ]
  },
  {
    "id": "alveolar-rhabdomyosarcoma",
    "name": "Alveolar Rhabdomyosarcoma (ARMS)",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "Desmin",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Sensitive muscle marker; diffuse."
      },
      {
        "marker": "Myogenin",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "~95%",
        "notes": "Nuclear; DIFFUSE strong positivity in alveolar RMS — key distinction from embryonal RMS (where myogenin is patchy/focal)."
      },
      {
        "marker": "MyoD1",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Nuclear; confirms skeletal muscle differentiation."
      },
      {
        "marker": "CD99",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variable in subset; less than Ewing sarcoma."
      }
    ],
    "molecular": [
      {
        "alteration": "PAX3-FOXO1",
        "notes": "Molecular: PAX3-FOXO1 fusion in ~60%; PAX7-FOXO1 in ~20%. PAX7 fusion has better prognosis. Unfavorable prognosis regardless of fusion status. Fusion-negative \"ARMS\" are clinically similar to embryonal RMS."
      }
    ]
  },
  {
    "id": "embryonal-rhabdomyosarcoma",
    "name": "Embryonal Rhabdomyosarcoma (ERMS)",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "Desmin",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Sensitive muscle marker."
      },
      {
        "marker": "Myogenin",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Nuclear; FOCAL or PATCHY — key distinction from alveolar RMS (diffuse). Spindle cell/sclerosing variant also focal."
      },
      {
        "marker": "MyoD1",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Nuclear; skeletal muscle differentiation. Can be diffuse in some embryonal cases."
      },
      {
        "marker": "NE markers",
        "role": "variable",
        "sensitivity": "~20%",
        "specificity": "—",
        "notes": "SYN and CD56 can be focally positive in subset — potential pitfall with NE tumors. CHR usually negative."
      },
      {
        "marker": "CD99",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually negative (unlike Ewing sarcoma); helps in SRBCT differential."
      }
    ],
    "molecular": [
      {
        "alteration": "No recurrent fusion",
        "notes": "Molecular: No recurrent translocations (unlike ARMS). RAS pathway mutations (NRAS, KRAS, HRAS) most common. Loss of 11p15 (Beckwith-Wiedemann locus). Spindle cell/sclerosing variant has MYOD1 L122R mutation or VGLL2 fusions."
      }
    ]
  },
  {
    "id": "cic-rearranged-sarcoma",
    "name": "CIC-Rearranged Sarcoma (Ewing-like Sarcoma)",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "ETV4",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "high",
        "notes": "Nuclear; downstream target of CIC-DUX4 fusion. Most specific available IHC marker for CIC-rearranged sarcoma. Negative in other SRBCTs including Ewing sarcoma."
      },
      {
        "marker": "WT1",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Nuclear; positive in CIC-rearranged sarcoma. Also positive in DSRCT (using C-terminal antibody) — use ETV4 for specificity."
      },
      {
        "marker": "CD99",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Diffuse membranous in only ~20% of cases — significantly less than Ewing sarcoma (>90% diffuse). Helps distinguish."
      },
      {
        "marker": "NKX2.2",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — distinguishes from Ewing sarcoma (NKX2.2+). Critical differential."
      },
      {
        "marker": "AE1/AE3",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative (rare focal); carcinoma excluded."
      }
    ],
    "molecular": [
      {
        "alteration": "CIC-DUX4 (FISH/NGS)",
        "notes": "Molecular: CIC-DUX4 fusion in ~90%; CIC-FOXO4 in rare cases. Higher-grade behavior than Ewing sarcoma. Confirm by FISH or RNA sequencing."
      }
    ]
  },
  {
    "id": "bcor-sarcoma",
    "name": "BCOR-Rearranged Sarcoma",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "BCOR",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "moderate",
        "notes": "Nuclear; best IHC marker for BCOR-rearranged sarcoma. Also positive in synovial sarcoma and some other spindle cell tumors — not entirely specific."
      },
      {
        "marker": "SATB2",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Variable positive; non-specific (also marks osteosarcoma and colorectal CA)."
      },
      {
        "marker": "Cyclin D1",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Nuclear; positive in subset."
      },
      {
        "marker": "TLE1",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variable; also positive in synovial sarcoma."
      },
      {
        "marker": "CD99",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variable membranous."
      },
      {
        "marker": "NKX2.2",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — distinguishes from Ewing sarcoma."
      }
    ],
    "molecular": [
      {
        "alteration": "BCOR-CCNB3 fusion",
        "notes": "Molecular: BCOR-CCNB3 fusion (inv X) in ~90%; BCOR-MAML3 or BCOR internal tandem duplication (ITD) in others. ITD also seen in endometrial stromal sarcoma and clear cell sarcoma of kidney."
      }
    ]
  },
  {
    "id": "pseudomyogenic-hemangioendothelioma",
    "name": "Pseudomyogenic Hemangioendothelioma (Epithelioid Sarcoma-Like HE)",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "AE1/AE3",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Strongly positive — major pitfall; carcinoma mimic."
      },
      {
        "marker": "ERG",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Nuclear; confirms endothelial lineage."
      },
      {
        "marker": "FLI1",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Nuclear endothelial marker."
      },
      {
        "marker": "FOSB",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "high",
        "notes": "Nuclear; highly specific for pseudomyogenic HE. Reflects SERPINE1-FOSB fusion. Most specific available marker."
      },
      {
        "marker": "CD31",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Focal or negative (unlike typical vascular tumors which are strongly CD31+). Unusual for endothelial lineage."
      },
      {
        "marker": "CD34",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually negative — distinguishes from angiosarcoma and EHE (CD34+)."
      },
      {
        "marker": "EMA",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; epithelioid sarcoma (main mimic) can be EMA+."
      },
      {
        "marker": "INI1/SMARCB1",
        "role": "retained",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Retained — distinguishes from epithelioid sarcoma (INI1 loss) and renal medullary carcinoma."
      }
    ],
    "molecular": [
      {
        "alteration": "SERPINE1-FOSB",
        "notes": "Molecular: SERPINE1-FOSB fusion is defining. Multifocal, tends to occur in young adults; indolent but locally aggressive."
      }
    ]
  },
  {
    "id": "nodular-fasciitis",
    "name": "Nodular Fasciitis",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "SMA",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Diffuse with \"tram track\" (peripheral cytoplasmic) accentuation — characteristic pattern in IMT; nodular fasciitis has a similar pattern. Key positive marker."
      },
      {
        "marker": "Calponin",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Myofibroblastic differentiation."
      },
      {
        "marker": "Desmin",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; distinguishes from leiomyosarcoma (desmin+ and caldesmon+)."
      },
      {
        "marker": "h-caldesmon",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — key: caldesmon is positive in smooth muscle tumors but negative in nodular fasciitis."
      },
      {
        "marker": "CD34",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; CD34+ → DFSP or SFT."
      },
      {
        "marker": "S100",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; S100+ → neurofibroma."
      }
    ],
    "molecular": [
      {
        "alteration": "MYH9-USP6 fusion",
        "notes": "Molecular: MYH9-USP6 fusion in ~90% of nodular fasciitis. Self-limited reactive lesion. USP6 rearrangement also in aneurysmal bone cyst."
      }
    ]
  },
  {
    "id": "desmoid-fibromatosis",
    "name": "Desmoid Tumor / Deep Fibromatosis",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "β-catenin (nuclear)",
        "role": "positive",
        "sensitivity": "~75%",
        "specificity": "moderate",
        "notes": "Nuclear accumulation in desmoid-type fibromatosis (deep); reflects CTNNB1 or APC mutation. NOT seen in superficial fibromatoses (palmar/plantar — cytoplasmic only). Key marker."
      },
      {
        "marker": "SMA",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Myofibroblastic differentiation; usually diffuse."
      },
      {
        "marker": "CD34",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; CD34+ → SFT."
      },
      {
        "marker": "S100",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; S100+ → neurofibroma."
      },
      {
        "marker": "Desmin",
        "role": "variable",
        "sensitivity": "~20%",
        "specificity": "—",
        "notes": "Focal in occasional cases."
      }
    ],
    "molecular": [
      {
        "alteration": "CTNNB1 / APC mutations",
        "notes": "Molecular: CTNNB1 (β-catenin) mutations in sporadic desmoid; APC germline mutations in FAP-associated desmoids. Mutation testing useful when nuclear β-catenin IHC is equivocal."
      }
    ]
  },
  {
    "id": "myxofibrosarcoma",
    "name": "Myxofibrosarcoma",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Non-specific mesenchymal marker; diffuse."
      },
      {
        "marker": "SMA",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Focal in subset."
      },
      {
        "marker": "AE1/AE3",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; carcinoma excluded."
      },
      {
        "marker": "S100",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; nerve sheath tumors excluded."
      },
      {
        "marker": "STAT6",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; SFT excluded."
      },
      {
        "marker": "MUC4",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; LGFMS excluded (MUC4+)."
      }
    ],
    "molecular": [
      {
        "alteration": "Complex karyotype",
        "notes": "Molecular: No recurrent translocations; complex karyotype typical of high-grade pleomorphic sarcomas. Diagnosis is largely morphologic with exclusion of specific entities."
      }
    ]
  },
  {
    "id": "pleomorphic-liposarcoma",
    "name": "Pleomorphic Liposarcoma",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "S100",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Focal in lipogenic areas; less consistent than in well-differentiated LPS."
      },
      {
        "marker": "MDM2",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Not amplified — key distinction from well-differentiated/dedifferentiated LPS (MDM2+). Most important negative marker."
      },
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Non-specific mesenchymal marker."
      },
      {
        "marker": "AE1/AE3",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; sarcomatoid carcinoma excluded."
      }
    ],
    "molecular": [
      {
        "alteration": "Complex karyotype",
        "notes": "Molecular: No recurrent translocations; highly complex karyotype. Diagnosis requires identification of pleomorphic lipoblasts on morphology."
      }
    ]
  },
  {
    "id": "spindle-cell-lipoma",
    "name": "Spindle Cell Lipoma / Pleomorphic Lipoma",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "CD34",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Diffuse strong in spindle cells; most reliable marker. Distinguishes from neurofibroma and other spindle cell tumors."
      },
      {
        "marker": "S100",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Focal in mature lipocytes only; spindle cells are S100 negative."
      },
      {
        "marker": "Desmin",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; excludes smooth/skeletal muscle differentiation."
      },
      {
        "marker": "MDM2",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; MDM2+ → ALT/WDLPS. Important distinction — both can be CD34+."
      }
    ],
    "molecular": [
      {
        "alteration": "Rb1 loss",
        "notes": "Molecular: RB1 loss is characteristic (13q14 loss); shared with cellular and pleomorphic variants. Confirms diagnosis when morphology equivocal."
      }
    ]
  },
  {
    "id": "tenosynovial-giant-cell-tumor",
    "name": "Tenosynovial Giant Cell Tumor (TGCT / PVNS)",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "CD68",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Histiocytic marker; positive in mononuclear and giant cells."
      },
      {
        "marker": "CD163",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Histiocytic marker; positive."
      },
      {
        "marker": "Clusterin",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Cytoplasmic; supports synoviocytic/histiocytic lineage."
      },
      {
        "marker": "Desmin",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; excludes smooth muscle."
      },
      {
        "marker": "AE1/AE3",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; carcinoma excluded."
      }
    ],
    "molecular": [
      {
        "alteration": "CSF1 / COL6A3-CSF1",
        "notes": "Molecular: CSF1 gene rearrangements in most cases (COL6A3-CSF1 most common). Leads to overexpression of CSF1 and autocrine/paracrine proliferation of CSF1R+ histiocytes. Pexidartinib (CSF1R inhibitor) approved for symptomatic TGCT."
      }
    ]
  },
  {
    "id": "phosphaturic-mesenchymal-tumor",
    "name": "Phosphaturic Mesenchymal Tumor (PMT)",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "FGF-23",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "high",
        "notes": "The causative agent of oncogenic osteomalacia. IHC staining of FGF-23 correlates with tumor-induced osteomalacia. Serum FGF-23 elevated."
      },
      {
        "marker": "SSTR2A",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Somatostatin receptor; positive in most PMTs. Relevant for Ga-68 DOTATATE scanning for tumor localization."
      },
      {
        "marker": "D2-40",
        "role": "positive",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Lymphatic marker; variable expression."
      },
      {
        "marker": "SMA",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Focal in subset."
      },
      {
        "marker": "AE1/AE3",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; carcinoma excluded."
      }
    ],
    "molecular": [
      {
        "alteration": "FN1-FGFR1",
        "notes": "Molecular: FN1-FGFR1 fusion in ~70%; FN1-FGF1 and others in remaining. Causes overproduction of FGF-23 → hypophosphatemia → oncogenic osteomalacia."
      }
    ]
  },
  {
    "id": "ossifying-fibromyxoid-tumor",
    "name": "Ossifying Fibromyxoid Tumor (OFMT)",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Diffuse in most cases; supports schwannian origin. Key positive marker."
      },
      {
        "marker": "Desmin",
        "role": "positive",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Positive in ~50%; unusual co-expression with S100 is characteristic."
      },
      {
        "marker": "SMA",
        "role": "negative",
        "sensitivity": "~10%",
        "specificity": "—",
        "notes": "Usually negative; distinguishes from myoepithelial tumor."
      },
      {
        "marker": "AE1/AE3",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually negative."
      }
    ],
    "molecular": [
      {
        "alteration": "PHF1 rearrangement",
        "notes": "Molecular: PHF1 rearrangements (with EP400 and others) in subset. EP400-PHF1 is most common. Malignant OFMT may have MEAF6-PHF1 or EPC1-PHF1."
      }
    ]
  },
  {
    "id": "angiomatoid-fibrous-histiocytoma",
    "name": "Angiomatoid Fibrous Histiocytoma (AFH)",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "Desmin",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Focal; unusual for a non-myogenic tumor. The combination of EMA and desmin co-positivity should raise AFH."
      },
      {
        "marker": "EMA",
        "role": "variable",
        "sensitivity": "~45%",
        "specificity": "—",
        "notes": "Focal membranous; co-expression with desmin is a clue."
      },
      {
        "marker": "CD68",
        "role": "variable",
        "sensitivity": "~45%",
        "specificity": "—",
        "notes": "Histiocytic marker; variable."
      },
      {
        "marker": "CD99",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Variable; non-specific."
      },
      {
        "marker": "AE1/AE3",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; carcinoma excluded."
      }
    ],
    "molecular": [
      {
        "alteration": "EWSR1-CREB1 fusion",
        "notes": "Molecular: EWSR1-CREB1 in ~90%; FUS-ATF1 or EWSR1-ATF1 in remaining. All involve ATF1/CREB family genes. Same gene family as clear cell sarcoma."
      }
    ]
  },
  {
    "id": "extraskeletal-myxoid-chondrosarcoma",
    "name": "Extraskeletal Myxoid Chondrosarcoma (EMC)",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "S100",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Only focally positive in ~30%; significantly less than skeletal chondrosarcoma. Not a reliable marker."
      },
      {
        "marker": "Synaptophysin",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Focal NE marker expression in subset — potential pitfall."
      },
      {
        "marker": "AE1/AE3",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; EMA also negative. Carcinoma excluded."
      },
      {
        "marker": "INI1/SMARCB1",
        "role": "loss",
        "sensitivity": "~15%",
        "specificity": "—",
        "notes": "Loss in a small subset; unusual for this entity."
      }
    ],
    "molecular": [
      {
        "alteration": "EWSR1-NR4A3",
        "notes": "Molecular: EWSR1-NR4A3 fusion in ~70%; TAF15-NR4A3 in ~20%. NOT related to skeletal chondrosarcoma (no IDH mutations). Diagnosis is largely by morphology + molecular testing."
      }
    ]
  },
  {
    "id": "mesenchymal-chondrosarcoma",
    "name": "Mesenchymal Chondrosarcoma",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "SOX9",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Chondrogenic transcription factor; positive in chondroid component."
      },
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Positive in chondrocytes (differentiated component); negative in small cell component."
      },
      {
        "marker": "CD99",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variable in undifferentiated small cell component — can mimic Ewing sarcoma."
      },
      {
        "marker": "NKX2.2",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — distinguishes from Ewing sarcoma (NKX2.2+). Critical when small cell component predominates."
      },
      {
        "marker": "Desmin",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; RMS excluded."
      }
    ],
    "molecular": [
      {
        "alteration": "HEY1-NCOA2",
        "notes": "Molecular: HEY1-NCOA2 fusion in ~80% of cases; t(8;8). Confirms diagnosis, especially useful when chondroid component is absent or minimal on biopsy."
      }
    ]
  },
  {
    "id": "cellular-schwannoma",
    "name": "Schwannoma (including Cellular Variant)",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "SOX10",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Diffuse strong nuclear; most sensitive schwannoma marker. Distinguishes from neurofibroma (patchy SOX10) and MPNST (reduced/lost SOX10)."
      },
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Diffuse strong — characteristic of schwannoma. Focal/patchy in neurofibroma; reduced in MPNST."
      },
      {
        "marker": "CD34",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in schwannoma; positive in neurofibroma (perineurial cells). Key differential."
      },
      {
        "marker": "H3K27me3",
        "role": "retained",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Retained — distinguishes from MPNST (~50% of which show H3K27me3 loss). Critical differential in cellular schwannoma."
      },
      {
        "marker": "Ki-67",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually low (<5%); cellular schwannoma may have higher Ki-67 (~5-10%) — do not misinterpret as sarcoma. Absence of necrosis and retained SOX10/H3K27me3 supports benign."
      }
    ],
    "molecular": [
      {
        "alteration": "NF2 mutations",
        "notes": "Molecular: NF2 gene mutations/inactivation in most schwannomas (sporadic and NF2-associated). No specific IHC surrogate but context of NF2 germline testing is relevant."
      }
    ]
  },
  {
    "id": "neurofibroma",
    "name": "Neurofibroma",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Patchy; only ~70% of cells positive (Schwann cells). Diffuse S100 → schwannoma. Patchy pattern supports neurofibroma."
      },
      {
        "marker": "SOX10",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Patchy nuclear (Schwann cells); similar to S100."
      },
      {
        "marker": "CD34",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Diffuse in spindle (perineurial) cells — key distinguishing feature from schwannoma (CD34–). Favours neurofibroma."
      },
      {
        "marker": "Neurofilament",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Highlights entrapped axons within the tumor — characteristic of neurofibroma (axons absent in schwannoma)."
      },
      {
        "marker": "H3K27me3",
        "role": "retained",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Retained — loss suggests transformation to MPNST."
      }
    ],
    "molecular": [
      {
        "alteration": "NF1 mutations",
        "notes": "Molecular: NF1 mutations in plexiform neurofibromas (NF1 patients) and subset of diffuse neurofibromas. No IHC surrogate; NF1 germline testing clinical."
      }
    ]
  },
  {
    "id": "intimal-sarcoma",
    "name": "Intimal Sarcoma (Large Vessel Sarcoma)",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "MDM2",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Nuclear; reflects 12q13-15 amplification including MDM2, CDK4. Not as specific as for DDLPS — use in context of large vessel location."
      },
      {
        "marker": "CDK4",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Co-amplified with MDM2. Nuclear."
      },
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Non-specific mesenchymal marker."
      },
      {
        "marker": "AE1/AE3",
        "role": "variable",
        "sensitivity": "~20%",
        "specificity": "—",
        "notes": "Focal in subset."
      },
      {
        "marker": "CD31 / ERG",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually negative despite vascular location — distinguishes from angiosarcoma."
      }
    ]
  },
  {
    "id": "glioblastoma-idh-wt",
    "name": "Glioblastoma, IDH Wild-Type (WHO Grade 4)",
    "category": "CNS",
    "markers": [
      {
        "marker": "GFAP",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Glial marker; positive but may be reduced in high-grade areas."
      },
      {
        "marker": "OLIG2",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Glial marker; diffuse nuclear in most GBMs."
      },
      {
        "marker": "IDH1 R132H",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — defines IDH wild-type GBM. True IDH-wt GBMs have same poor prognosis even at lower histologic grade (molecular grade 4)."
      },
      {
        "marker": "H3 K27me3",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Variable; loss of H3K27me3 in diffuse midline glioma (H3 K27M mutant) is a distinct entity."
      },
      {
        "marker": "Ki-67",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "High proliferation index; typically >20%."
      },
      {
        "marker": "p53",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Variable; TP53 mutations in subset."
      }
    ],
    "molecular": [
      {
        "alteration": "EGFR amplification / TERT / CDKN2A",
        "notes": "Molecular: EGFR amplification (~40%), TERT promoter mutation (~80%), CDKN2A deletion (~80%), PTEN loss (~40%) define IDH-wt GBM. Required for WHO 2021 grade 4 classification even in lower-grade histology."
      }
    ]
  },
  {
    "id": "diffuse-midline-glioma",
    "name": "Diffuse Midline Glioma, H3 K27M-Mutant (WHO Grade 4)",
    "category": "CNS",
    "markers": [
      {
        "marker": "H3 K27M (IHC)",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "high",
        "notes": "Mutation-specific antibody detects K27M substitution in H3.3 (H3F3A) or H3.1/3.2 (HIST1H3B/C). Pathognomonic when positive in midline location."
      },
      {
        "marker": "H3K27me3",
        "role": "loss",
        "sensitivity": "~95%",
        "specificity": "high",
        "notes": "Global loss of H3K27 trimethylation is the functional consequence of K27M mutation. Loss + midline location = diagnostic."
      },
      {
        "marker": "GFAP",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Glial marker; usually positive."
      },
      {
        "marker": "OLIG2",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Glial lineage."
      },
      {
        "marker": "IDH1 R132H",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; IDH mutation and H3 K27M are mutually exclusive."
      },
      {
        "marker": "Ki-67",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Variable but typically intermediate to high; WHO Grade 4 by definition regardless of mitotic activity."
      }
    ],
    "molecular": [
      {
        "alteration": "H3.3 K27M mutation (H3F3A) or H3.1/H3.2 K27M (HIST1H3B/C)",
        "notes": "~100% by definition (required for WHO 2021 diagnosis). H3 K27M IHC is highly sensitive (~95%) and specific. H3.3 K27M (H3F3A) is the most common; associated with pontine/thalamic/spinal locations. Prognosis very poor (median <2 years)."
      }
    ]
  },
  {
    "id": "pilocytic-astrocytoma",
    "name": "Pilocytic Astrocytoma (WHO Grade 1)",
    "category": "CNS",
    "markers": [
      {
        "marker": "GFAP",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse strong; biphasic areas equally positive."
      },
      {
        "marker": "OLIG2",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Nuclear glial marker."
      },
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Diffuse; non-specific glial marker."
      },
      {
        "marker": "IDH1 R132H",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — IDH wild-type. Key: pilocytic astrocytoma is IDH-wt but has favorable prognosis (unlike IDH-wt GBM)."
      }
    ],
    "molecular": [
      {
        "alteration": "KIAA1549-BRAF fusion",
        "notes": "Molecular: KIAA1549-BRAF tandem duplication (7q34) in >70% of infratentorial cases. Most common in cerebellum. BRAF V600E mutations (~15%) occur more in supratentorial locations. Relevant for BRAF-targeted therapy."
      }
    ]
  },
  {
    "id": "ampullary-carcinoma",
    "name": "Ampullary Carcinoma",
    "category": "Gastrointestinal",
    "markers": [
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Usually positive regardless of subtype."
      },
      {
        "marker": "CDX2",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Positive in intestinal-type (~80%); usually negative in pancreatobiliary-type (~30%). Subtype affects prognosis."
      },
      {
        "marker": "CK20",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "More often positive in intestinal-type."
      },
      {
        "marker": "MUC1",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Positive in pancreatobiliary subtype; negative in intestinal subtype."
      },
      {
        "marker": "MUC2",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Positive in intestinal subtype (goblet cell mucin)."
      },
      {
        "marker": "DPC4/SMAD4",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Retained in most ampullary carcinomas; loss suggests pancreatobiliary subtype."
      }
    ]
  },
  {
    "id": "solid-pseudopapillary-neoplasm",
    "name": "Solid Pseudopapillary Neoplasm of Pancreas (SPN)",
    "category": "Gastrointestinal",
    "markers": [
      {
        "marker": "β-catenin (nuclear)",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "high",
        "notes": "Nuclear accumulation due to CTNNB1 mutation; highly characteristic and nearly pathognomonic in this morphologic context. Most specific IHC marker."
      },
      {
        "marker": "CD10",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Perinuclear dot-like pattern; very characteristic but not entirely specific."
      },
      {
        "marker": "PR",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive; ER always negative. Hormonal receptor expression reflects young female predilection."
      },
      {
        "marker": "LEF1",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "moderate",
        "notes": "Nuclear; specific marker for SPN vs. other pancreatic neoplasms. Reflects WNT pathway activation."
      },
      {
        "marker": "TFE3",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Positive in subset; not specific (also positive in ASPS and TFE3-fused tumors)."
      },
      {
        "marker": "Synaptophysin",
        "role": "positive",
        "sensitivity": "~65%",
        "specificity": "—",
        "notes": "Focal; NE differentiation."
      },
      {
        "marker": "Chromogranin A",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Always negative — key distinction from PanNET (CHR+)."
      },
      {
        "marker": "DPC4/SMAD4",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Retained — helps distinguish from pancreatic ductal adenocarcinoma."
      }
    ],
    "molecular": [
      {
        "alteration": "CTNNB1 mutations",
        "notes": "Molecular: CTNNB1 exon 3 mutations in virtually all cases. Mutually exclusive with KRAS, TP53, SMAD4 mutations seen in PDAC."
      }
    ]
  },
  {
    "id": "ovarian-small-cell-hypercalcemic",
    "name": "Small Cell Carcinoma of Ovary, Hypercalcemic Type (SCCOHT)",
    "category": "Gynaecologic",
    "markers": [
      {
        "marker": "BRG1/SMARCA4",
        "role": "loss",
        "sensitivity": "~98%",
        "specificity": "high",
        "notes": "Loss of nuclear BRG1/SMARCA4 expression is defining. Virtually all SCCOHT show loss; confirms diagnosis in young woman with ovarian small cell tumor."
      },
      {
        "marker": "WT1",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — distinguishes from ovarian serous CA (WT1+) and mesothelioma."
      },
      {
        "marker": "ER / PR",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually negative; helps exclude endometrioid carcinoma."
      },
      {
        "marker": "AE1/AE3",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variable CK expression; can be negative despite carcinoma."
      },
      {
        "marker": "EMA",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Variable; less reliable than BRG1 loss."
      },
      {
        "marker": "CD10",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Variable."
      }
    ],
    "molecular": [
      {
        "alteration": "SMARCA4 mutations",
        "notes": "Molecular: Biallelic SMARCA4 inactivating mutations in virtually all cases. Germline in ~35% (SCCOHT syndrome). Aggressive tumor; targeted therapy with EZH2 inhibitors under investigation."
      }
    ]
  },
  {
    "id": "low-grade-endometrial-stromal-sarcoma",
    "name": "Low-Grade Endometrial Stromal Sarcoma (LGESS)",
    "category": "Gynaecologic",
    "markers": [
      {
        "marker": "CD10",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Most sensitive marker; diffuse strong. Not specific — also positive in other uterine tumors."
      },
      {
        "marker": "ER",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "ER/PR positive; resembles proliferative endometrial stroma."
      },
      {
        "marker": "PR",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Usually ER/PR co-positive."
      },
      {
        "marker": "h-caldesmon",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative (rare +) — key distinction from leiomyoma/leiomyosarcoma (caldesmon+). Most specific negative marker."
      },
      {
        "marker": "SMA",
        "role": "negative",
        "sensitivity": "~20%",
        "specificity": "—",
        "notes": "Usually negative (rare focal); diffuse SMA → smooth muscle tumor."
      },
      {
        "marker": "BCOR",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; BCOR+ → high-grade ESS with BCOR alteration."
      }
    ],
    "molecular": [
      {
        "alteration": "JAZF1-SUZ12 fusion",
        "notes": "Molecular: JAZF1-SUZ12 t(7;17) in ~50%; JAZF1-PHF1, MEAF6-PHF1, and other fusions in others. Confirms low-grade ESS. High-grade ESS has distinct fusions (YWHAE-NUTM2 or BCOR alterations)."
      }
    ]
  },
  {
    "id": "high-grade-endometrial-stromal-sarcoma",
    "name": "High-Grade Endometrial Stromal Sarcoma (HGESS)",
    "category": "Gynaecologic",
    "markers": [
      {
        "marker": "BCOR",
        "role": "positive",
        "sensitivity": "~100%",
        "specificity": "high",
        "notes": "Nuclear; highly sensitive for BCOR-altered HGESS. Also positive in LGESS at lower levels. Strong diffuse positivity suggests BCOR alteration."
      },
      {
        "marker": "Cyclin D1",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Strong diffuse in both YWHAE-rearranged and BCOR-altered HGESS."
      },
      {
        "marker": "CD10",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variable and less than in LGESS."
      },
      {
        "marker": "ER / PR",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually negative — key distinction from LGESS (ER/PR+)."
      },
      {
        "marker": "h-caldesmon",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; distinguishes from myxoid leiomyosarcoma (main morphologic mimic)."
      }
    ],
    "molecular": [
      {
        "alteration": "YWHAE-NUTM2 fusion",
        "notes": "Molecular: YWHAE-NUTM2 (FAM22) fusion t(10;17) in ~50% of HGESS; BCOR ITD or BCOR-ZC3H7B fusion in others. Both subtypes are high-grade with aggressive behavior."
      }
    ]
  },
  {
    "id": "trichoepithelioma",
    "name": "Trichoepithelioma / Trichoblastoma",
    "category": "Skin",
    "markers": [
      {
        "marker": "CK20",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Scattered Merkel cells positive — key distinguishing feature from BCC (no Merkel cells in BCC). Most useful differential marker."
      },
      {
        "marker": "BCL2",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Peripheral pattern; only in outer (basaloid) cells. BCC has diffuse strong BCL2 — helps differentiate."
      },
      {
        "marker": "CD10",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "In the stroma rather than tumor cells; BCC has CD10 in tumor cells."
      },
      {
        "marker": "Ber-EP4",
        "role": "negative",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Usually negative or only focal; BCC is strongly Ber-EP4+. Most reliable marker for BCC vs. trichoepithelioma."
      },
      {
        "marker": "CK19",
        "role": "positive",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Infundibulocystic differentiation marker; positive in trichoepithelioma, negative in BCC."
      }
    ]
  },
  {
    "id": "poroma-hidradenoma",
    "name": "Poroma / Hidroacanthoma / Hidradenoma",
    "category": "Skin",
    "markers": [
      {
        "marker": "AE1/AE3",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Positive; confirms epithelial nature."
      },
      {
        "marker": "EMA",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive in glandular component."
      },
      {
        "marker": "CEA",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Eccrine marker; positive in luminal cells of ductal component."
      },
      {
        "marker": "p63",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Basaloid cells positive; helpful in confirming adnexal origin."
      },
      {
        "marker": "GATA3",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Sweat gland tumors often GATA3+; apocrine differentiation marker."
      }
    ],
    "molecular": [
      {
        "alteration": "YAP1-NUTM1 / CRTC1-MAML2",
        "notes": "Molecular: Clear cell hidradenoma harbours CRTC1-MAML2 fusion in ~50% (same as MEC). Poromas have various gene fusions including YAP1-NUTM1 in malignant variants."
      }
    ]
  },
  {
    "id": "microcystic-adnexal-carcinoma",
    "name": "Microcystic Adnexal Carcinoma (MAC)",
    "category": "Skin",
    "markers": [
      {
        "marker": "AE1/AE3",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Epithelial marker; diffuse."
      },
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive in luminal/ductal cells."
      },
      {
        "marker": "p63",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Strong in basal/myoepithelial component."
      },
      {
        "marker": "SMA",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Peripheral myoepithelial cells; confirms biphasic adnexal nature."
      },
      {
        "marker": "CEA",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Eccrine marker; positive in ductal component."
      },
      {
        "marker": "Ber-EP4",
        "role": "negative",
        "sensitivity": "~10%",
        "specificity": "—",
        "notes": "Usually negative — distinguishes from BCC (strongly Ber-EP4+)."
      },
      {
        "marker": "AR",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; distinguishes from sebaceous carcinoma."
      }
    ]
  },
  {
    "id": "adamantinoma",
    "name": "Adamantinoma of Long Bones",
    "category": "Bone",
    "markers": [
      {
        "marker": "AE1/AE3",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Epithelial component strongly positive; co-expression of CK and vimentin in a bone tumor is very characteristic of adamantinoma."
      },
      {
        "marker": "CK14",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Strong expression; supports squamoid/basal epithelial differentiation."
      },
      {
        "marker": "CK19",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive; confirms epithelial nature."
      },
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Co-expressed with keratins; helps confirm diagnosis."
      },
      {
        "marker": "p63",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Basal/squamoid cells positive."
      },
      {
        "marker": "S100",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; nerve sheath origin excluded."
      },
      {
        "marker": "NKX2.2",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; Ewing sarcoma excluded (a common differential)."
      }
    ]
  },
  {
    "id": "chordoma-dediff",
    "name": "Dedifferentiated Chordoma",
    "category": "Bone",
    "markers": [
      {
        "marker": "Brachyury",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "May be retained in differentiated (conventional chordoma) component; lost in dedifferentiated sarcoma component."
      },
      {
        "marker": "AE1/AE3",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Retained in conventional chordoma component; may be lost in dedifferentiated component."
      },
      {
        "marker": "INI1/SMARCB1",
        "role": "loss",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Loss in subset of conventional chordomas (pediatric/poorly-differentiated chordoma); INI1 loss-associated chordomas are aggressive."
      },
      {
        "marker": "S100",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "In conventional component; lost in dedifferentiated."
      },
      {
        "marker": "MDM2",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Can be expressed in dedifferentiated component; does not imply LPS in this context."
      }
    ]
  },
  {
    "id": "thyroid-papillary-molecular",
    "name": "Papillary Thyroid Carcinoma — Molecular Subtypes",
    "category": "Thyroid",
    "markers": [
      {
        "marker": "BRAF V600E (IHC)",
        "role": "variable",
        "sensitivity": "~50-70%",
        "specificity": "high",
        "notes": "IHC surrogate for BRAF V600E mutation. Present in ~50-70% of PTC (highest in tall cell variant). Predicts RAI refractoriness. Dabrafenib+trametinib approved for BRAF V600E+ ATC."
      },
      {
        "marker": "ALK (IHC)",
        "role": "variable",
        "sensitivity": "~5-15%",
        "specificity": "—",
        "notes": "IHC surrogate for ALK fusions. Positive in 5-15% of PTC (highest in tall cell variant). Same as in lung adenoCA — crizotinib/alectinib activity."
      },
      {
        "marker": "TTF-1",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Confirms thyroid follicular epithelial origin."
      },
      {
        "marker": "PAX8",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Confirms thyroid/renal/Müllerian origin."
      },
      {
        "marker": "Thyroglobulin",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "~95%",
        "notes": "Follicular differentiation marker."
      }
    ],
    "molecular": [
      {
        "alteration": "RET fusion",
        "notes": "Molecular: RET-PTC rearrangements in ~20% (highest in post-radiation and pediatric PTC). RET fusions targetable with selpercatinib/pralsetinib."
      },
      {
        "alteration": "NTRK fusions",
        "notes": "Molecular: NTRK1 or NTRK3 fusions in 5-10% of PTC (enriched in radiation-induced). TRK inhibitors (larotrectinib, entrectinib) approved."
      }
    ]
  },
  {
    "id": "thyroid-follicular-molecular",
    "name": "Follicular Thyroid Carcinoma — Molecular",
    "category": "Thyroid",
    "markers": [
      {
        "marker": "TTF-1",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Follicular epithelial marker."
      },
      {
        "marker": "PAX8",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Sensitive marker."
      },
      {
        "marker": "Thyroglobulin",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Usually retained in well-differentiated follicular carcinoma."
      },
      {
        "marker": "HBME-1",
        "role": "variable",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Favours malignancy over adenoma but not definitive alone."
      },
      {
        "marker": "Galectin-3",
        "role": "variable",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Positive favours malignancy."
      }
    ],
    "molecular": [
      {
        "alteration": "PAX8-PPARγ fusion",
        "notes": "Molecular: PAX8-PPARγ1 t(2;3) in ~30-40% of follicular carcinoma; also in follicular adenomas — not a diagnostic tool alone. Not specific for carcinoma."
      },
      {
        "alteration": "RAS mutations",
        "notes": "Molecular: NRAS/HRAS/KRAS mutations in ~40-50% of follicular carcinomas (and adenomas). Present in encapsulated follicular variant of PTC and NIFTP. TERT promoter mutations predict aggressive behavior."
      }
    ]
  },
  {
    "id": "lung-adeno-molecular",
    "name": "Lung Adenocarcinoma — Molecular Subtypes (Driver Mutations)",
    "category": "Lung",
    "markers": [
      {
        "marker": "TTF-1",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Confirms lung adenoCA lineage. Clone 8G7G3/1 preferred for specificity."
      },
      {
        "marker": "ALK (D5F3 IHC)",
        "role": "variable",
        "sensitivity": "~5%",
        "specificity": "high",
        "notes": "IHC is a companion diagnostic (D5F3 clone/Ventana assay). Strong diffuse cytoplasmic positivity = ALK+ (~5%). Reflects EML4-ALK fusion. Targeted: crizotinib, alectinib (2nd gen preferred)."
      },
      {
        "marker": "ROS1 (IHC)",
        "role": "variable",
        "sensitivity": "~1%",
        "specificity": "—",
        "notes": "IHC sensitive but not entirely specific; all positives require FISH or molecular confirmation. Reflects ROS1 rearrangements (~1%). Targeted: crizotinib, entrectinib."
      },
      {
        "marker": "BRAF V600E (IHC)",
        "role": "variable",
        "sensitivity": "~3-5%",
        "specificity": "high",
        "notes": "Mutation-specific IHC. Reflects BRAF V600E mutation (~3-5% of lung adenoCA). Associated with sarcomatoid differentiation. Dabrafenib+trametinib approved."
      }
    ],
    "molecular": [
      {
        "alteration": "EGFR",
        "notes": "Molecular: EGFR activating mutations (exon 19 del, L858R) in 15% (Western) to 30% (Asian). Targeted: osimertinib (3rd gen). T790M resistance mutation → osimertinib."
      },
      {
        "alteration": "KRAS",
        "notes": "Molecular: KRAS mutations (most common in Western) in ~30%. KRAS G12C → sotorasib/adagrasib."
      },
      {
        "alteration": "MET exon 14 skipping",
        "notes": "Molecular: MET exon 14 skipping mutations in ~3-5%, associated with sarcomatoid histology. Targeted: crizotinib, capmatinib, tepotinib."
      }
    ]
  },
  {
    "id": "cup",
    "name": "Carcinoma of Unknown Primary (CUP) — Initial Workup",
    "category": "Unknown Primary",
    "markers": [
      {
        "marker": "CK7 + CK20",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Step 1. CK7–/CK20+: colorectal (add CDX2/SATB2). CK7+/CK20–: lung, breast, GYN, thyroid, pancreas, biliary. CK7+/CK20+: upper GI, pancreas, biliary, urothelial. CK7–/CK20–: HCC, RCC, prostate, NE cells."
      },
      {
        "marker": "TTF-1",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Step 2. Positive → lung adenoCA (add Napsin A) or thyroid (add thyroglobulin/PAX8). NOT specific: 8G7G3/1 clone preferred."
      },
      {
        "marker": "Napsin-A",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Positive → lung adenoCA or papillary/clear cell RCC or GYN clear cell CA."
      },
      {
        "marker": "CDX2",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Positive → intestinal origin (colorectal most common; also stomach, small bowel, pancreas). Add SATB2 for colorectal specificity."
      },
      {
        "marker": "SATB2",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Highly specific for colorectal origin when positive."
      },
      {
        "marker": "PAX8",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Positive → renal, thyroid, or Müllerian (ovary, endometrium, cervix) origin."
      },
      {
        "marker": "PSA / NKX3.1",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Positive in male with CK7–/CK20– → prostate adenocarcinoma."
      },
      {
        "marker": "GATA3",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Positive → breast or urothelial (check clinical context). Also positive in lung SqCC and salivary gland tumours."
      },
      {
        "marker": "p40",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Positive → squamous cell carcinoma of any site."
      },
      {
        "marker": "SOX10 / S100",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Positive → melanoma or nerve sheath tumour."
      },
      {
        "marker": "CD20 / CD3",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Positive → lymphoma (B-cell or T-cell). Add CD45 first."
      },
      {
        "marker": "Synaptophysin + Chromogranin A + Ki-67",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "NE markers positive → NET. Grade with Ki-67. Add TTF-1 (lung/thyroid), ISL1/PAX8 (pancreatic), CDX2 (ileal) for site."
      },
      {
        "marker": "WT1",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Positive → ovarian serous CA or mesothelioma. Add PAX8 (Müllerian+) vs calretinin (mesothelial+)."
      },
      {
        "marker": "Inhibin / Calretinin",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Positive → sex cord-stromal tumour or adrenocortical carcinoma."
      }
    ]
  },
  {
    "id": "mit-translocation-rcc",
    "name": "MiT Family Translocation RCC (TFE3/TFEB-Rearranged RCC)",
    "category": "Renal",
    "markers": [
      {
        "marker": "TFE3",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "moderate",
        "notes": "Nuclear; positive in TFE3-rearranged RCC. Also positive in ASPS and PEComa — context required. Strong diffuse nuclear staining (unlike weak background)."
      },
      {
        "marker": "TFEB",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "moderate",
        "notes": "Nuclear; positive in TFEB-rearranged RCC (MALAT1-TFEB t(6;11)). Use alongside TFE3 to cover both subtypes."
      },
      {
        "marker": "PAX8",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Confirms renal origin."
      },
      {
        "marker": "Cathepsin K",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive in MiT family RCC, especially MALAT1-TFEB type; also in ASPS and PEComa."
      },
      {
        "marker": "CAIX",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative (unlike clear cell RCC, which is diffuse CAIX+)."
      }
    ],
    "molecular": [
      {
        "alteration": "ASPSCR1-TFE3 t(X;17) or PRCC-TFE3 t(X;1)",
        "notes": "Most common TFE3 fusions in RCC. TFE3 FISH or RNA sequencing confirms rearrangement. Young patients, papillary/clear cell morphology."
      },
      {
        "alteration": "MALAT1-TFEB t(6;11)",
        "notes": "TFEB-rearranged RCC; TFEB IHC positive. Cathepsin K strongly positive. Biphasic appearance with small cells around larger cells."
      }
    ]
  },
  {
    "id": "angiomyolipoma",
    "name": "Angiomyolipoma (AML) / Epithelioid Angiomyolipoma",
    "category": "Renal",
    "markers": [
      {
        "marker": "HMB-45",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Most sensitive melanocytic marker in AML; marks the epithelioid and smooth muscle components. Classic AML: HMB-45+ smooth muscle and epithelioid cells."
      },
      {
        "marker": "Melan-A",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive in epithelioid component."
      },
      {
        "marker": "Cathepsin K",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Highly sensitive for AML including epithelioid variant."
      },
      {
        "marker": "SMA",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Smooth muscle component; co-expression of SMA + melanocytic markers is characteristic of PEComa family."
      },
      {
        "marker": "SOX10",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; helps exclude melanoma."
      }
    ],
    "molecular": [
      {
        "alteration": "TSC1 or TSC2 biallelic inactivation",
        "notes": ">90% of AML; germline TSC1/TSC2 mutations = tuberous sclerosis complex (bilateral AML, cortical tubers). Sporadic AML usually somatic. Epithelioid AML is malignant variant. mTOR inhibitors (everolimus) active."
      }
    ]
  },
  {
    "id": "metanephric-adenoma",
    "name": "Metanephric Adenoma",
    "category": "Renal",
    "markers": [
      {
        "marker": "WT1 (N-terminal)",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Nuclear; reflects embryonic metanephric origin. Positive in most cases."
      },
      {
        "marker": "CD57",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "NK-1/CD57 positive in most metanephric adenomas — a useful distinguishing marker from papillary RCC."
      },
      {
        "marker": "AMACR/P504S",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; papillary RCC is strongly AMACR+ — key differential."
      },
      {
        "marker": "CK7",
        "role": "negative",
        "sensitivity": "~5%",
        "specificity": "—",
        "notes": "Usually negative; papillary RCC is CK7+ — helpful distinguishing feature."
      }
    ],
    "molecular": [
      {
        "alteration": "BRAF V600E",
        "notes": "~90% of metanephric adenomas; BRAF V600E IHC (VE1 clone) is positive and confirms the diagnosis. Essentially pathognomonic in this context. Distinguishes from papillary RCC (BRAF V600E rare)."
      }
    ]
  },
  {
    "id": "malignant-rhabdoid-kidney",
    "name": "Malignant Rhabdoid Tumor of the Kidney",
    "category": "Pediatric",
    "markers": [
      {
        "marker": "INI1/SMARCB1",
        "role": "loss",
        "sensitivity": "~95%",
        "specificity": "high",
        "notes": "Loss of nuclear INI1 expression is defining. Highly aggressive, young children. Germline SMARCB1 = rhabdoid tumor predisposition syndrome 1. Distinguish from Wilms tumor (INI1 retained)."
      },
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse in rhabdoid cells."
      },
      {
        "marker": "AE1/AE3",
        "role": "variable",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Variable CK expression."
      },
      {
        "marker": "EMA",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Focal in subset."
      }
    ],
    "molecular": [
      {
        "alteration": "SMARCB1 (INI1) biallelic inactivation",
        "notes": ">70% biallelic SMARCB1 loss by deletion/mutation. Germline in ~35% (rhabdoid tumor predisposition syndrome). Minority have SMARCA4 loss instead (INI1-retained, BRG1-deficient)."
      }
    ]
  },
  {
    "id": "congenital-mesoblastic-nephroma",
    "name": "Congenital Mesoblastic Nephroma (Cellular Type)",
    "category": "Pediatric",
    "markers": [
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse; mesenchymal spindle cell tumor."
      },
      {
        "marker": "SMA",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive in most cellular CMN; reflects myofibroblastic/smooth muscle differentiation."
      },
      {
        "marker": "Desmin",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Focal in subset."
      },
      {
        "marker": "AE1/AE3",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; carcinoma excluded. Wilms tumor has positive CK."
      }
    ],
    "molecular": [
      {
        "alteration": "ETV6-NTRK3 fusion t(12;15)",
        "notes": "~90% of cellular CMN. Same fusion as infantile fibrosarcoma — these are biologically related entities. Also identical to secretory carcinoma of breast and salivary gland. NTRK inhibitors (larotrectinib) potentially active."
      }
    ]
  },
  {
    "id": "clear-cell-sarcoma-kidney",
    "name": "Clear Cell Sarcoma of the Kidney (CCSK)",
    "category": "Pediatric",
    "markers": [
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Diffuse; non-specific mesenchymal marker."
      },
      {
        "marker": "Cyclin D1",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Nuclear; reflects YWHAE-NUTM2 fusion or BCOR alteration downstream effects."
      },
      {
        "marker": "BCOR",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "moderate",
        "notes": "Nuclear; positive in BCOR-altered CCSK (~10%); also positive in BCOR-rearranged sarcoma of soft tissue."
      },
      {
        "marker": "AE1/AE3",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; Wilms tumor can be focally CK+."
      },
      {
        "marker": "WT1",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; WT1+ → Wilms tumor (key differential)."
      }
    ],
    "molecular": [
      {
        "alteration": "YWHAE-NUTM2 fusion t(10;17)",
        "notes": "~80% of CCSK. Same fusion as high-grade endometrial stromal sarcoma. Confirmed by FISH or NGS."
      },
      {
        "alteration": "BCOR ITD",
        "notes": "~10% of CCSK; BCOR internal tandem duplication. BCOR IHC is positive. Also seen in BCOR-rearranged sarcoma of soft tissue and high-grade ESS."
      }
    ]
  },
  {
    "id": "infantile-fibrosarcoma",
    "name": "Infantile Fibrosarcoma (Congenital Fibrosarcoma)",
    "category": "Pediatric",
    "markers": [
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse; non-specific spindle cell marker."
      },
      {
        "marker": "SMA",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Focal in subset."
      },
      {
        "marker": "AE1/AE3",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; carcinoma excluded."
      },
      {
        "marker": "S100",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; MPNST excluded."
      }
    ],
    "molecular": [
      {
        "alteration": "ETV6-NTRK3 fusion t(12;15)",
        "notes": "~90% of infantile fibrosarcoma. Same fusion as cellular congenital mesoblastic nephroma, secretory carcinoma of breast and salivary gland. NTRK inhibitors (larotrectinib, entrectinib) are active — important clinical implication."
      }
    ]
  },
  {
    "id": "secretory-breast-carcinoma",
    "name": "Secretory Carcinoma of the Breast",
    "category": "Breast",
    "markers": [
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse strong; shared with secretory carcinoma of salivary gland."
      },
      {
        "marker": "SOX10",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Diffuse nuclear; confirms secretory/intercalated duct origin."
      },
      {
        "marker": "Mammaglobin",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Positive; overlaps with other breast carcinomas."
      },
      {
        "marker": "GCDFP-15",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variable; apocrine-type marker."
      },
      {
        "marker": "ER / PR",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Triple-negative (ER–/PR–/HER2–) in most cases. Despite triple-negative status, indolent course compared to TNBC."
      },
      {
        "marker": "HER2",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "HER2 negative (triple-negative profile)."
      }
    ],
    "molecular": [
      {
        "alteration": "ETV6-NTRK3 fusion t(12;15)",
        "notes": ">90% of secretory breast carcinoma. ETV6 FISH break-apart is sensitive and specific for this entity among breast tumors. NTRK inhibitors (larotrectinib) active. Same fusion as secretory salivary gland carcinoma, infantile fibrosarcoma, and cellular CMN."
      }
    ]
  },
  {
    "id": "fibrolamellar-hcc",
    "name": "Fibrolamellar Hepatocellular Carcinoma (FL-HCC)",
    "category": "Gastrointestinal",
    "markers": [
      {
        "marker": "Arginase-1",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Hepatocellular lineage marker; positive in most FL-HCC."
      },
      {
        "marker": "HepPar1",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Hepatocellular marker; positive in FL-HCC."
      },
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive in FL-HCC (unlike conventional HCC which is CK7–); bile duct-like differentiation."
      },
      {
        "marker": "CK19",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Focal in some cases."
      },
      {
        "marker": "CD68",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive in pale bodies (intracytoplasmic); characteristic of FL-HCC."
      },
      {
        "marker": "AFP",
        "role": "negative",
        "sensitivity": "~10%",
        "specificity": "—",
        "notes": "Usually negative (serum AFP not elevated in FL-HCC — distinguishes from conventional HCC)."
      }
    ],
    "molecular": [
      {
        "alteration": "DNAJB1-PRKACA fusion (19p13.12 intrachromosomal deletion)",
        "notes": ">90% of FL-HCC. Detectable by FISH (PRKACA break-apart), RNA sequencing, or genomic DNA sequencing. Specific for FL-HCC — distinguishes from conventional HCC. Young patients without cirrhosis or hepatitis."
      }
    ]
  },
  {
    "id": "ocular-uveal-melanoma",
    "name": "Ocular (Uveal) Melanoma",
    "category": "Melanoma",
    "markers": [
      {
        "marker": "SOX10",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Melanocytic lineage; positive in uveal melanoma."
      },
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Melanocytic lineage."
      },
      {
        "marker": "HMB-45",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive; shared with cutaneous melanoma."
      },
      {
        "marker": "Melan-A",
        "role": "positive",
        "sensitivity": "~75%",
        "specificity": "—",
        "notes": "Positive in most."
      },
      {
        "marker": "BRAF V600E (IHC)",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; BRAF V600E is essentially absent in uveal melanoma (unlike cutaneous melanoma where it is ~50%)."
      }
    ],
    "molecular": [
      {
        "alteration": "GNAQ mutations",
        "notes": "~45% of uveal melanoma; codon 209 (Q209L most common). Mutually exclusive with GNA11."
      },
      {
        "alteration": "GNA11 mutations",
        "notes": "~40% of uveal melanoma; codon 209 mutations. GNAQ+GNA11 together account for ~80-85% of uveal melanoma. MEK inhibitors show modest activity."
      },
      {
        "alteration": "BAP1 inactivation",
        "notes": "~47% of metastatic uveal melanoma; germline BAP1 = BAP1 tumor predisposition syndrome. Strongly associated with metastatic disease. BAP1 IHC loss is a surrogate."
      },
      {
        "alteration": "SF3B1 mutations",
        "notes": "~22% of uveal melanoma; better prognosis, late metastases."
      }
    ]
  },
  {
    "id": "angiocentric-glioma",
    "name": "Angiocentric Glioma (WHO Grade 1)",
    "category": "CNS",
    "markers": [
      {
        "marker": "GFAP",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Glial marker; diffuse."
      },
      {
        "marker": "EMA",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Dot-like perinuclear EMA — characteristic of ependymal-type differentiation in angiocentric glioma."
      },
      {
        "marker": "MYB (IHC)",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "IHC surrogate for MYB rearrangements. Not routinely available but emerging."
      },
      {
        "marker": "OLIG2",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive; glial lineage."
      },
      {
        "marker": "IDH1 R132H",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative; IDH-wild-type by definition. Important to distinguish from diffuse glioma."
      }
    ],
    "molecular": [
      {
        "alteration": "MYB-QKI fusion (6q23 rearrangement)",
        "notes": "~100% of angiocentric glioma; MYB-QKI is the most common fusion. WHO 2021 defines this as a distinct entity. Excellent prognosis with surgical resection."
      }
    ]
  },
  {
    "id": "pilocytic-astrocytoma-molecular",
    "name": "Pilocytic Astrocytoma — BRAF-Fused (WHO Grade 1)",
    "category": "CNS",
    "markers": [
      {
        "marker": "GFAP",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse glial marker."
      },
      {
        "marker": "IDH1 R132H",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "IDH wild-type; favorable prognosis despite IDH-wt status."
      },
      {
        "marker": "BRAF V600E (IHC)",
        "role": "variable",
        "sensitivity": "~15%",
        "specificity": "—",
        "notes": "Positive in ~15% (supratentorial PA more likely). KIAA1549-BRAF fusion is NOT detected by V600E IHC."
      }
    ],
    "molecular": [
      {
        "alteration": "KIAA1549-BRAF tandem duplication 7q34",
        "notes": ">70% of infratentorial pilocytic astrocytoma (cerebellum). Tandem duplication, not point mutation — not detected by V600E IHC or sequencing panels targeting only exon 15. FISH or RNA sequencing required. Also seen in ganglioglioma, PXA, and epithelioid GBM."
      },
      {
        "alteration": "BRAF V600E",
        "notes": "~15% of pilocytic astrocytoma; more common in supratentorial location. Detectable by V600E IHC. BRAF+MEK inhibitors potentially active."
      }
    ]
  }
]
