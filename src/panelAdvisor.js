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
  },

  // ── Breast special subtypes ──────────────────────────────────────────────
  {
    "id": "breast-metaplastic-carcinoma",
    "name": "Metaplastic Carcinoma of the Breast",
    "category": "Breast",
    "markers": [
      {
        "marker": "ER",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": ">90% triple-negative. Rare focal ER positivity possible in LGASC subtype."
      },
      {
        "marker": "PR",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Essentially always negative."
      },
      {
        "marker": "HER2",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually negative/non-amplified."
      },
      {
        "marker": "p63",
        "role": "positive",
        "sensitivity": "~77%",
        "specificity": "—",
        "notes": "Squamous and spindle cell components. p63 positivity is key evidence of epithelial/myoepithelial lineage when keratins are focal."
      },
      {
        "marker": "CK5/6",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "High-MW keratins support basal/squamous lineage. Use with p63 and AE1/AE3 to confirm epithelial nature of spindle cell areas."
      },
      {
        "marker": "AE1/AE3",
        "role": "positive",
        "sensitivity": "~75%",
        "specificity": "—",
        "notes": "May be focally positive in spindle cell areas — careful sampling required. MNF116 comparable sensitivity."
      },
      {
        "marker": "CK14",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Another high-MW keratin; supports basal phenotype."
      },
      {
        "marker": "SMA",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Positive in myoepithelial/spindle areas. CD10 and maspin also variably positive."
      },
      {
        "marker": "CD34",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative (100%) — useful to exclude SFT, DFSP, and other CD34+ spindle cell tumours."
      },
      {
        "marker": "SOX10",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Positive in spindle cell and myoepithelial components; also positive in melanoma and MPNST."
      }
    ],
    "molecular": [
      {
        "alteration": "TP53 mutation",
        "notes": "Common across all high-grade subtypes. Basal-like or claudin-low transcriptomic profile."
      },
      {
        "alteration": "PIK3CA / PTEN loss",
        "notes": "PI3K pathway activation (~30–50%). Targetable with PI3K inhibitors in clinical trials."
      },
      {
        "alteration": "EGFR overexpression",
        "notes": "Common in squamous and spindle subtypes. Not a reliable IHC diagnostic marker but relevant for therapy."
      }
    ]
  },
  {
    "id": "breast-mucinous-carcinoma",
    "name": "Mucinous (Colloid) Carcinoma of the Breast",
    "category": "Breast",
    "markers": [
      {
        "marker": "ER",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Strongly and diffusely positive. Low-grade nuclear features typical."
      },
      {
        "marker": "PR",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Usually positive."
      },
      {
        "marker": "HER2",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Rarely amplified."
      },
      {
        "marker": "Synaptophysin",
        "role": "variable",
        "sensitivity": "~25%",
        "specificity": "—",
        "notes": "Neuroendocrine differentiation in a subset (mucinous B subtype). Chromogranin also variably positive. If strongly NE, consider neuroendocrine mucinous variant."
      },
      {
        "marker": "MUC2",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Secreted mucin; highlights the extracellular mucin pool. Not widely used in practice but confirms mucinous secretion."
      },
      {
        "marker": "E-cadherin",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Retained (ductal phenotype). Helps exclude lobular carcinoma with secondary mucin accumulation."
      },
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse positive. Standard breast carcinoma profile."
      },
      {
        "marker": "CK20",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative. CK20 positivity would raise concern for metastatic mucinous carcinoma from GI/appendix (check CDX2)."
      },
      {
        "marker": "CDX2",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in primary breast mucinous carcinoma. CDX2+ favours GI metastasis (esp. appendiceal)."
      }
    ]
  },
  {
    "id": "breast-micropapillary-carcinoma",
    "name": "Invasive Micropapillary Carcinoma of the Breast",
    "category": "Breast",
    "markers": [
      {
        "marker": "EMA / MUC1",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Shows reversed (inside-out) polarity — stains the outer surface of tumour clusters facing the stroma. This inverted EMA pattern is pathognomonic."
      },
      {
        "marker": "ER",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Usually ER+. HER2 amplification occurs in ~30%."
      },
      {
        "marker": "HER2",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Amplified in ~30% — higher rate than invasive NST. Assess per standard protocol."
      },
      {
        "marker": "E-cadherin",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Retained; excludes lobular phenotype."
      },
      {
        "marker": "D2-40 (Podoplanin)",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Highlights extensive lymphovascular invasion (LVI), which is characteristic and clinically significant in this subtype."
      }
    ]
  },
  {
    "id": "breast-apocrine-carcinoma",
    "name": "Apocrine Carcinoma of the Breast",
    "category": "Breast",
    "markers": [
      {
        "marker": "AR (Androgen Receptor)",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Strongly and diffusely positive. AR positivity in ER-negative breast carcinoma is a strong pointer to apocrine phenotype."
      },
      {
        "marker": "ER",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative by definition (>90% apocrine morphology with ER−/PR−). ER positivity excludes pure apocrine classification."
      },
      {
        "marker": "PR",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative."
      },
      {
        "marker": "HER2",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Amplified in ~50% of LAR (luminal androgen receptor) subtype. Always assess HER2 in apocrine carcinoma."
      },
      {
        "marker": "GCDFP-15",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Gross cystic disease fluid protein-15; classic apocrine marker. Also positive in Paget disease and salivary duct carcinoma."
      },
      {
        "marker": "CK5/6",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative (despite triple-negative phenotype). Helps distinguish from metaplastic/basal-like carcinoma."
      },
      {
        "marker": "GATA3",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Usually positive; confirms breast lineage."
      }
    ]
  },
  {
    "id": "breast-phyllodes-tumour",
    "name": "Phyllodes Tumour of the Breast",
    "category": "Breast",
    "markers": [
      {
        "marker": "CD34",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Positive in stromal component of benign/borderline phyllodes. CD34 expression decreases with increasing grade — often lost in malignant phyllodes."
      },
      {
        "marker": "Ki-67",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Proliferation index in stroma correlates with grade. Benign: low; borderline: intermediate; malignant: high (>10 mitoses/10 HPF + high Ki-67)."
      },
      {
        "marker": "SMA",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Variable in stromal cells. Helpful to confirm myofibroblastic differentiation in spindle cell areas."
      },
      {
        "marker": "Desmin",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in pure phyllodes stroma. Positivity in heterologous malignant element (rhabdomyosarcomatous differentiation)."
      },
      {
        "marker": "p53",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Aberrant p53 expression increases with grade. Malignant phyllodes may show diffuse strong positivity."
      },
      {
        "marker": "Epithelial markers (AE1/AE3, CK7)",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in stroma; positive in epithelial component. Useful to confirm biphasic nature and exclude sarcoma or metaplastic carcinoma."
      }
    ],
    "molecular": [
      {
        "alteration": "MED12 mutation",
        "notes": "Present in ~60–70% of fibroadenomas and phyllodes tumours. Not grade-specific."
      },
      {
        "alteration": "TERT promoter mutation",
        "notes": "Increases with grade: rare in benign, ~30% borderline, ~60% malignant. Strong predictor of malignant behaviour."
      },
      {
        "alteration": "RARA / FLNA / SETD2 mutations",
        "notes": "Associated with borderline and malignant phyllodes. SETD2 loss can show loss of H3K36me3 by IHC."
      }
    ]
  },
  {
    "id": "breast-paget-disease",
    "name": "Paget Disease of the Nipple",
    "category": "Breast",
    "markers": [
      {
        "marker": "HER2",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Strongly overexpressed (3+) in virtually all cases. HER2 IHC is the single most useful marker. The underlying DCIS/invasive carcinoma is also typically HER2+."
      },
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Highlights Paget cells within squamous epithelium. Key to distinguish from Toker cells (CK7+ but HER2−) and melanoma."
      },
      {
        "marker": "CAM5.2",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Low-MW keratin; marks Paget cells. Use with CK7 for confirmation."
      },
      {
        "marker": "GCDFP-15",
        "role": "positive",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Apocrine differentiation marker; positive in a subset."
      },
      {
        "marker": "S100",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — critical to distinguish from pagetoid melanoma in situ (S100+, HMB45+, HER2−)."
      },
      {
        "marker": "HMB45 / Melan-A",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — excludes melanocytic lesion."
      },
      {
        "marker": "ER",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Often negative in Paget cells themselves even when underlying carcinoma is ER+."
      }
    ]
  },

  // ── Haematopoietic / Lymphoid ────────────────────────────────────────────
  {
    "id": "lymphoma-mzl",
    "name": "Marginal Zone Lymphoma (MALT / Splenic / Nodal)",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD20",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Strongly positive. Mature B-cell marker."
      },
      {
        "marker": "CD5",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — key to distinguish from CLL/SLL and MCL. Rare CD5+ MZL exists but is uncommon."
      },
      {
        "marker": "CD10",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — distinguishes from follicular lymphoma and DLBCL GCB."
      },
      {
        "marker": "BCL2",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Usually positive but not by translocation (unlike FL). BCL2 t(14;18) negative."
      },
      {
        "marker": "BCL6",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in marginal zone cells (may be positive in admixed reactive follicles)."
      },
      {
        "marker": "CD23",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — helps exclude CLL/SLL (CD23+). Follicular dendritic cell meshworks may retain CD23 in residual follicles."
      },
      {
        "marker": "Cyclin D1",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — excludes MCL."
      },
      {
        "marker": "IgD",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in most MZL (positive in MCL and mantle zone B-cells)."
      },
      {
        "marker": "CD43",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Aberrant coexpression in ~50% of MALT lymphomas. Helpful when positive (mature B-cell with CD43 co-expression is abnormal)."
      },
      {
        "marker": "IRTA1 / MNDA",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "high",
        "notes": "IRTA1 (CD307a) and MNDA are relatively specific for MZL among mature B-cell lymphomas. Useful adjuncts to confirm MZL phenotype."
      },
      {
        "marker": "κ/λ light chain (ISH)",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Light chain restriction confirms clonality. In situ hybridisation on FFPE preferred. MALT may have plasmacytic differentiation with cytoplasmic Ig."
      }
    ],
    "molecular": [
      {
        "alteration": "t(11;18)(q21;q21) API2::MALT1",
        "notes": "Most common translocation in gastric and pulmonary MALT lymphoma (~20–40%). Associated with H. pylori-independent disease; predicts poor response to antibiotic eradication."
      },
      {
        "alteration": "t(14;18)(q32;q21) IGH::MALT1",
        "notes": "Ocular adnexa and liver MALT lymphoma. MALT1 rearrangement (different breakpoint from BCL2)."
      },
      {
        "alteration": "t(3;14)(p14;q32) FOXP1::IGH",
        "notes": "Thyroid and ocular MALT; associated with more aggressive behaviour."
      },
      {
        "alteration": "del(7q) — splenic MZL",
        "notes": "Deletion of 7q is characteristic of splenic MZL (~40%). Not seen in MALT or nodal MZL."
      }
    ]
  },
  {
    "id": "lymphoma-hgbl",
    "name": "High-Grade B-Cell Lymphoma (HGBL, Double-Hit / Triple-Hit)",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD20",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Strong B-cell marker. Rare CD20-dim or negative cases."
      },
      {
        "marker": "BCL2",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Strongly positive by protein expression in most HGBL. Reflects BCL2 gene rearrangement and/or amplification. IHC alone does not confirm rearrangement — FISH required."
      },
      {
        "marker": "BCL6",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive (GCB phenotype). BCL6 rearrangement in ~30% of DLBCL and may co-occur with MYC in triple-hit."
      },
      {
        "marker": "MYC (IHC)",
        "role": "positive",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "MYC protein >40% by IHC is a screen for MYC rearrangement/amplification. IHC is not a substitute for FISH — MYC IHC has poor specificity; confirm with FISH if suspected HGBL."
      },
      {
        "marker": "CD10",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "GCB subtype marker. HGBL-with-MYC-and-BCL2 is almost always GCB."
      },
      {
        "marker": "Ki-67",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Very high proliferation index, typically >90%. Near 100% in Burkitt-like morphology cases."
      },
      {
        "marker": "TdT",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — excludes B-ALL/LBL. Critical when blastic morphology present."
      },
      {
        "marker": "MUM1 / IRF4",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually negative (GCB phenotype). Positive MUM1 would suggest ABC/non-GCB DLBCL rather than HGBL."
      }
    ],
    "molecular": [
      {
        "alteration": "MYC rearrangement (FISH)",
        "notes": "Required for HGBL diagnosis. Partners: IGH (50%), non-IG loci. MYC rearrangement alone = DLBCL or Burkitt; concurrent BCL2/BCL6 rearrangement = HGBL."
      },
      {
        "alteration": "BCL2 rearrangement + MYC — double-hit",
        "notes": "~5–10% of large B-cell lymphomas. Highly aggressive; standard R-CHOP inferior — clinical trials prefer DA-EPOCH-R or similar intensified regimens."
      },
      {
        "alteration": "BCL6 rearrangement + MYC (± BCL2) — triple-hit",
        "notes": "Rarest subtype. Worse prognosis than double-hit."
      }
    ]
  },
  {
    "id": "lymphoma-nlpbl",
    "name": "Nodular Lymphocyte-Predominant B-Cell Lymphoma (NLPBL)",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD20",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Strongly positive in LP (lymphocyte-predominant / 'popcorn') cells. Key difference from classical Hodgkin Reed-Sternberg cells (CD20−/dim)."
      },
      {
        "marker": "CD45 (LCA)",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Strongly positive in LP cells — unlike RS cells in cHL which are CD45−."
      },
      {
        "marker": "OCT2",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Strongly positive with BOB1. OCT2+/BOB1+ co-expression distinguishes NLPBL from cHL (where one or both are usually lost)."
      },
      {
        "marker": "BOB1",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Strongly positive. See OCT2 note."
      },
      {
        "marker": "CD30",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in LP cells — critical distinction from cHL (CD30+) and ALCL (CD30+). Rare weak focal CD30 possible in NLPBL transformation."
      },
      {
        "marker": "CD15",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative. CD15+ in RS cells of cHL."
      },
      {
        "marker": "EBV (EBER ISH)",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in LP cells — unlike EBV+ cHL subtypes (mixed cellularity, lymphocyte depleted). EBV− supports NLPBL."
      },
      {
        "marker": "PD-L1",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "LP cells negative. Background reactive T-cells may express PD-1, and are often CD57+/PD-1+ rosetting around LP cells — a diagnostic clue."
      },
      {
        "marker": "CD57 (background T-cells)",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "CD57+ T-cells form rosettes around LP cells — a characteristic low-power finding helpful in diagnosis."
      }
    ],
    "molecular": [
      {
        "alteration": "BCL6 rearrangement",
        "notes": "~50% of cases. Common partner: IGH. Not diagnostic on its own."
      },
      {
        "alteration": "TNFRSF14 / SGK1 / JUNB mutations",
        "notes": "Recurrently mutated in NLPBL. TNFRSF14 mutation also seen in some FL cases — highlights biologic relationship."
      }
    ]
  },
  {
    "id": "lymphoma-t-all",
    "name": "T-Lymphoblastic Leukaemia / Lymphoma (T-ALL / ETP-ALL)",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "TdT",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Nuclear TdT is the hallmark of lymphoblastic neoplasms. Positive in both T-ALL and B-ALL; absent in mature T-cell lymphomas."
      },
      {
        "marker": "CD3 (cytoplasmic)",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "high",
        "notes": "Cytoplasmic CD3 (cCD3) is the most specific T-lineage marker at precursor stage — surface CD3 may be negative. Use anti-CD3 clone that detects cytoplasmic epsilon chain (e.g. polyclonal or CD3ε)."
      },
      {
        "marker": "CD7",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Earliest T-cell antigen to be expressed. Nearly always positive."
      },
      {
        "marker": "CD2",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Variable; expressed at early cortical thymic stage."
      },
      {
        "marker": "CD5",
        "role": "positive",
        "sensitivity": "~75%",
        "specificity": "—",
        "notes": "Variable positivity."
      },
      {
        "marker": "CD1a",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Positive in cortical (common) T-ALL; negative in early T-precursor (ETP) and mature subtypes."
      },
      {
        "marker": "CD4 / CD8",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Double-positive (CD4+/CD8+) in cortical T-ALL. Double-negative in ETP-ALL and pro-T phenotype."
      },
      {
        "marker": "CD34",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Positive in immature/ETP-ALL. ETP-ALL: CD34+, CD117+, weak/absent CD1a and CD8."
      },
      {
        "marker": "CD117 (c-KIT)",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Characteristic of ETP-ALL along with myeloid marker co-expression (CD13, CD33, CD11b). ETP-ALL is defined by stem cell/myeloid immunophenotype with T-lineage commitment (cCD3+)."
      },
      {
        "marker": "MPO",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative. Positivity would indicate AML or mixed phenotype acute leukaemia (MPAL)."
      }
    ],
    "molecular": [
      {
        "alteration": "NOTCH1 mutation",
        "notes": ">60% of T-ALL. Activating mutations in HD or PEST domain. Better prognosis in some studies; gamma-secretase inhibitors investigational."
      },
      {
        "alteration": "ETP-ALL: FLT3, NRAS/KRAS, DNMT3A mutations",
        "notes": "ETP-ALL has myeloid-like mutation profile. FLT3-ITD present in ~20%; potentially targetable. High-risk disease with standard protocols."
      },
      {
        "alteration": "TLX1 / TLX3 / TAL1 / LMO2 overexpression",
        "notes": "Transcription factor dysregulation defines molecular subtypes. TLX1+ has better prognosis; TAL1/LMO2 co-activation common in cortical T-ALL."
      }
    ]
  },
  {
    "id": "lymphoma-lch",
    "name": "Langerhans Cell Histiocytosis (LCH)",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD1a",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "high",
        "notes": "Strongly and diffusely positive. Best diagnostic marker — strongly positive membranous staining."
      },
      {
        "marker": "CD207 (Langerin)",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "high",
        "notes": "Highly specific for Langerhans cells. Reflects Birbeck granule protein. More specific than CD1a (positive in Langerhans cells only, not other histiocytes)."
      },
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "low",
        "notes": "Strongly positive. Non-specific (also positive in melanoma, nerve sheath tumours, etc.) but confirms histiocytic/dendritic lineage."
      },
      {
        "marker": "CD68",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variably positive. Not specific for LCH — present in most histiocytic lesions."
      },
      {
        "marker": "BRAF V600E (IHC)",
        "role": "variable",
        "sensitivity": "~55%",
        "specificity": "high",
        "notes": "Positive IHC (clone VE1) in ~55% of LCH. Corresponds to BRAF V600E mutation; supports targeted therapy eligibility (vemurafenib/dabrafenib). BRAF IHC negative does not exclude LCH."
      },
      {
        "marker": "CD45 (LCA)",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive, confirming haematopoietic origin."
      }
    ],
    "molecular": [
      {
        "alteration": "BRAF V600E mutation",
        "notes": "~55% of LCH. Defines 'ERK pathway disease'. BRAF inhibitors (vemurafenib, dabrafenib) effective in BRAF V600E+ high-risk/refractory LCH."
      },
      {
        "alteration": "MAP2K1 (MEK1) mutation",
        "notes": "~20% of BRAF-wildtype LCH. Alternative ERK pathway activation. MEK inhibitors (trametinib) potentially active."
      },
      {
        "alteration": "ARAF / RAF1 / NRAS mutations",
        "notes": "Less frequent MAPK pathway alterations in BRAF/MAP2K1-wildtype cases. LCH is now considered a clonal neoplasm of myeloid origin."
      }
    ]
  },
  {
    "id": "lymphoma-erdheim-chester",
    "name": "Erdheim-Chester Disease (ECD)",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD68",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Strongly positive in foamy histiocytes. CD68 (PGM1 and KP1 clones) mark histiocytic lineage."
      },
      {
        "marker": "CD163",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive; marks M2-like histiocytes. More specific than CD68 for non-Langerhans histiocytes."
      },
      {
        "marker": "CD1a",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — critical distinction from LCH. CD1a negativity confirms non-Langerhans histiocytosis."
      },
      {
        "marker": "CD207 (Langerin)",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — further excludes LCH."
      },
      {
        "marker": "S100",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Typically negative (unlike LCH which is strongly S100+). Occasional weak focal positivity possible."
      },
      {
        "marker": "BRAF V600E (IHC)",
        "role": "positive",
        "sensitivity": "~55%",
        "specificity": "high",
        "notes": "Positive in ~55% of ECD (same rate as LCH). Supports BRAF V600E mutation and targeted therapy eligibility. ECD and LCH share the same MAPK pathway driver landscape."
      },
      {
        "marker": "Fascin",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in ECD (positive in follicular dendritic cell sarcoma and interdigitating dendritic cell sarcoma)."
      }
    ],
    "molecular": [
      {
        "alteration": "BRAF V600E mutation",
        "notes": "~55% of ECD. Vemurafenib/dabrafenib approved for BRAF V600E+ ECD (FDA 2017). BRAF V600E testing is mandatory in all ECD cases."
      },
      {
        "alteration": "MAP2K1 / NRAS / KRAS / PIK3CA mutations",
        "notes": "Alternative MAPK/PI3K pathway mutations in BRAF-wildtype ECD. MEK inhibitors (cobimetinib, trametinib) active in BRAF-wildtype MAPK-mutant ECD."
      }
    ]
  },
  {
    "id": "lymphoma-rosai-dorfman",
    "name": "Rosai-Dorfman Disease (RDD)",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Strongly and diffusely positive in large histiocytes — key diagnostic marker. Highlights the characteristic emperipolesis (lymphocytes within histiocyte cytoplasm)."
      },
      {
        "marker": "CD68",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Strongly positive. Confirms histiocytic lineage."
      },
      {
        "marker": "CD163",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive; M2-type histiocyte marker."
      },
      {
        "marker": "CD1a",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — distinguishes from LCH. S100+/CD1a− is the classic RDD profile."
      },
      {
        "marker": "CD207 (Langerin)",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative."
      },
      {
        "marker": "Cyclin D1",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in RDD histiocytes — useful to exclude nodular sclerosing fibrous patterns seen in some spindle cell lesions."
      }
    ],
    "molecular": [
      {
        "alteration": "SLC29A3 / KRAS / MAP2K1 mutations (IgG4-related / MAPK RDD)",
        "notes": "SLC29A3 mutations in familial H syndrome/Faisalabad histiocytosis. Sporadic RDD may have KRAS or MAP2K1 mutations (~20%). These are not diagnostic IHC markers but confirm clonal neoplastic nature."
      },
      {
        "alteration": "ALK rearrangement (rare)",
        "notes": "ALK+ RDD has been reported. ALK IHC should be tested if atypical morphology."
      }
    ]
  },
  {
    "id": "lymphoma-fdcs",
    "name": "Follicular Dendritic Cell Sarcoma (FDCS)",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD21",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "high",
        "notes": "Strongly positive — the single most specific marker. CD21 marks follicular dendritic cells in germinal centres. Membranous and cytoplasmic pattern."
      },
      {
        "marker": "CD23",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive. Use with CD21 and CD35 as a panel."
      },
      {
        "marker": "CD35",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Complement receptor 1; marks FDCs. Combine CD21+CD23+CD35 for maximum sensitivity."
      },
      {
        "marker": "Clusterin",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Positive in FDCS; useful adjunct, especially in poorly differentiated cases where CD21/CD35 may be weak."
      },
      {
        "marker": "CXCL13",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Positive in FDC meshworks and FDCS."
      },
      {
        "marker": "D2-40",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Variable positivity; may cause confusion with lymphatic/vascular tumours."
      },
      {
        "marker": "S100",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Focally positive in a minority — if strong diffuse S100 present, favour interdigitating dendritic cell sarcoma instead."
      },
      {
        "marker": "EBV (EBER ISH)",
        "role": "variable",
        "sensitivity": "~15%",
        "specificity": "—",
        "notes": "Positive in ~15% of FDCS, particularly the inflammatory pseudotumour-like variant (inflammatory FDCS, often EBV+)."
      },
      {
        "marker": "Cytokeratins",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — excludes carcinoma. Can be a pitfall in spindled carcinomas."
      }
    ],
    "molecular": [
      {
        "alteration": "CDKN2A deletion / TP53 mutation",
        "notes": "Common in FDCS. No recurrent pathognomonic translocation."
      },
      {
        "alteration": "EBV association (inflammatory variant)",
        "notes": "The inflammatory pseudotumour-like variant of FDCS is consistently EBV+ and occurs predominantly in the liver and spleen."
      }
    ]
  },
  {
    "id": "lymphoma-histiocytic-sarcoma",
    "name": "Histiocytic Sarcoma",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD68",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Strongly positive — required for diagnosis. KP1 and PGM1 clones both useful."
      },
      {
        "marker": "CD163",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Strongly positive; more specific for monocyte/macrophage lineage than CD68."
      },
      {
        "marker": "Lysozyme",
        "role": "positive",
        "sensitivity": "~75%",
        "specificity": "—",
        "notes": "Classic histiocytic marker. Supports macrophage lineage."
      },
      {
        "marker": "S100",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Focally positive in a minority. Strong diffuse S100 favours interdigitating dendritic cell sarcoma."
      },
      {
        "marker": "CD1a",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — excludes LCH."
      },
      {
        "marker": "CD21 / CD23 / CD35",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — excludes FDCS."
      },
      {
        "marker": "CD20 / CD3 / CD30",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative for B, T, and NK-cell lineage markers. Lineage exclusion is essential. CD30 may be focally positive — does not indicate ALCL if other T-cell markers absent."
      },
      {
        "marker": "MPO",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — excludes AML with monocytic differentiation (which can mimic histiocytic sarcoma morphologically)."
      }
    ],
    "molecular": [
      {
        "alteration": "BRAF V600E mutation",
        "notes": "Present in ~30% of histiocytic sarcoma — targetable. IHC (VE1 clone) as screen."
      },
      {
        "alteration": "CDKN2A deletion / MAP2K1 / TP53 mutations",
        "notes": "Common secondary alterations. Some histiocytic sarcomas arise by transdifferentiation from follicular lymphoma (IGH::BCL2 detectable)."
      }
    ]
  },
  {
    "id": "lymphoma-mastocytosis",
    "name": "Systemic Mastocytosis",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD117 (c-KIT)",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Strongly and diffusely positive in mast cells. CD117 is the most sensitive marker. Neoplastic mast cells often form compact aggregates — unlike normal scattered tissue mast cells."
      },
      {
        "marker": "Tryptase",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "high",
        "notes": "Mast cell-specific serine protease. Highly specific; marks mast cells in tissue and is elevated in serum. Required criterion for mast cell aggregate detection."
      },
      {
        "marker": "CD25",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "high",
        "notes": "Aberrant CD25 expression on neoplastic mast cells is a minor WHO diagnostic criterion for systemic mastocytosis. Normal tissue mast cells are CD25−."
      },
      {
        "marker": "CD2",
        "role": "variable",
        "sensitivity": "~75%",
        "specificity": "—",
        "notes": "Aberrant CD2 (T-cell antigen) on mast cells is another WHO minor criterion. Use with CD25 — co-expression strongly supports SM diagnosis."
      },
      {
        "marker": "CD30",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Positive in a subset, especially advanced SM. CD30+ mastocytosis associated with aggressive variants. Not a diagnostic criterion."
      },
      {
        "marker": "CD45",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive, confirming haematopoietic lineage."
      }
    ],
    "molecular": [
      {
        "alteration": "KIT D816V point mutation",
        "notes": "Present in >95% of systemic mastocytosis. The WHO major criterion for SM. Resistant to imatinib; sensitive to avapritinib (BLU-285) — FDA-approved for advanced SM."
      },
      {
        "alteration": "TET2 / SRSF2 / ASXL1 mutations",
        "notes": "'Triple-positive' (KIT D816V + TET2 + SRSF2/ASXL1) confers highest risk of progression to aggressive SM / mast cell leukaemia."
      }
    ]
  },
  {
    "id": "lymphoma-apl",
    "name": "Acute Promyelocytic Leukaemia (APL) — PML::RARA",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "MPO",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Intensely and diffusely positive — strongest MPO of any AML subtype. Reflects abundant azurophilic granules and Auer rods."
      },
      {
        "marker": "CD33",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Strongly positive. Pan-myeloid marker."
      },
      {
        "marker": "CD13",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Positive, often with heterogeneous intensity."
      },
      {
        "marker": "HLA-DR",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Characteristically negative — unusual for AML. HLA-DR negativity with CD33/CD13 positivity and strong MPO in an AML is a strong clue to APL."
      },
      {
        "marker": "CD34",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Typically negative (unlike most AML). Hypogranular (M3v) variant may show dimly positive CD34."
      },
      {
        "marker": "CD117 (c-KIT)",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variable CD117 expression."
      },
      {
        "marker": "PML (nuclear body pattern)",
        "role": "screen",
        "sensitivity": "~90%",
        "specificity": "high",
        "notes": "Anti-PML IHC shows disrupted nuclear dot pattern (microgranular/diffuse) in PML::RARA+ APL vs. intact nuclear dots in normal cells/other AML. Rapid screening tool on bone marrow trephine pending cytogenetics."
      }
    ],
    "molecular": [
      {
        "alteration": "t(15;17)(q24;q21) PML::RARA",
        "notes": "Defining translocation present in ~98% of APL. Confirmed by RT-PCR or FISH. Drives differentiation block. ATRA + arsenic trioxide targets PML::RARA for degradation — highly curative (OS >90%)."
      },
      {
        "alteration": "Variant RARA fusions (ZBTB16, NPM1, STAT5B, others)",
        "notes": "~2% of APL-like disease. ZBTB16::RARA may not respond to ATRA. Always confirm RARA involvement by FISH in morphological APL."
      }
    ]
  },

  // ── Gynaecologic (additional subtypes) ──────────────────────────────────
  {
    "id": "gynae-carcinosarcoma",
    "name": "Uterine Carcinosarcoma (MMMT)",
    "category": "Gynaecologic",
    "markers": [
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Marks carcinomatous epithelial component. Sarcomatous component may lose keratins."
      },
      {
        "marker": "PAX8",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive in epithelial component, confirming Müllerian lineage. May be focally retained in sarcomatous component."
      },
      {
        "marker": "ER",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Variable in epithelial component depending on carcinoma type (serous-like = ER−; endometrioid-like = ER+)."
      },
      {
        "marker": "p53",
        "role": "variable",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Aberrant p53 (strong diffuse or null) in majority, reflecting p53 mutation — most MMMT behave like high-grade serous. Concordant p53 in both components supports monoclonal (carcinomatous) origin."
      },
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Highlights mesenchymal/sarcomatous component. Dual keratin+/vimentin+ areas indicate spindled carcinoma."
      },
      {
        "marker": "Desmin / SMA",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Positive in homologous sarcomatous component (leiomyosarcoma-like areas). Heterologous elements: rhabdomyoblasts (desmin/myogenin+), chondrosarcoma (S100+)."
      },
      {
        "marker": "MLH1 / PMS2 / MSH2 / MSH6",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "MMR IHC recommended in all uterine carcinosarcomas — ~15–20% show MMR deficiency. MLH1 loss usually due to promoter hypermethylation."
      }
    ],
    "molecular": [
      {
        "alteration": "TP53 mutation",
        "notes": "Most common mutation (~90%) — supports clonal origin from carcinoma (not true carcinosarcoma). Uterine MMMT is now classified as a dedifferentiated/metaplastic carcinoma."
      },
      {
        "alteration": "POLE mutation (ultra-mutated)",
        "notes": "~5% of MMMT. Excellent prognosis (as with POLE-mutated endometrial carcinoma). Check POLE exonuclease domain mutations."
      }
    ]
  },
  {
    "id": "gynae-undifferentiated-endometrial-carcinoma",
    "name": "Undifferentiated / Dedifferentiated Endometrial Carcinoma",
    "category": "Gynaecologic",
    "markers": [
      {
        "marker": "PAX8",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Retained in most cases, confirming Müllerian lineage. May be lost in deeply undifferentiated areas."
      },
      {
        "marker": "SMARCA4 (BRG1)",
        "role": "loss",
        "sensitivity": "~30%",
        "specificity": "high",
        "notes": "Loss of SMARCA4 expression in a subset (SMARCA4-deficient undifferentiated carcinoma). Clinically aggressive; associated with young women and hypercalcaemia (overlap with SCCOHT)."
      },
      {
        "marker": "SMARCB1 (INI1)",
        "role": "loss",
        "sensitivity": "~20%",
        "specificity": "high",
        "notes": "Loss of SMARCB1/INI1 in a subset. SWI/SNF complex deficiency is a unifying theme — test both SMARCA4 and SMARCB1."
      },
      {
        "marker": "ER",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in undifferentiated component. Retained ER in the low-grade endometrioid component of dedifferentiated carcinoma."
      },
      {
        "marker": "E-cadherin",
        "role": "loss",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Loss of E-cadherin in undifferentiated component (not diagnostic alone but characteristic). Intact in the well-differentiated component of dedifferentiated carcinoma."
      },
      {
        "marker": "CK7 / EMA",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Reduced or focal expression in undifferentiated component — epithelial markers are often weak/lost. This is a diagnostic pitfall (can mimic lymphoma or sarcoma)."
      },
      {
        "marker": "CD45 / lymphoid markers",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — excludes lymphoma, which is in the differential when keratins are lost."
      },
      {
        "marker": "MLH1 / PMS2 / MSH2 / MSH6",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "~50–60% show MMR deficiency. MLH1 loss most common. Screen all cases."
      }
    ],
    "molecular": [
      {
        "alteration": "SMARCA4 or SMARCB1 loss (SWI/SNF complex)",
        "notes": "Subgroup-defining. Clinically aggressive; no targeted therapy approved. Overlap with ovarian SCCOHT (SMARCA4) and rhabdoid tumours (SMARCB1)."
      },
      {
        "alteration": "MLH1 promoter hypermethylation (MSI-H)",
        "notes": "~50% of undifferentiated endometrial carcinomas. MSI-H supports pembrolizumab eligibility."
      }
    ]
  },
  {
    "id": "ovarian-lgsc",
    "name": "Ovarian Low-Grade Serous Carcinoma (LGSC)",
    "category": "Gynaecologic",
    "markers": [
      {
        "marker": "WT1",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Strongly positive. Shared with HGSC — does not distinguish LG from HG serous. Confirms serous Müllerian lineage."
      },
      {
        "marker": "ER",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive; more consistently positive than HGSC. ER positivity supports LGSC in the differential with borderline serous tumour."
      },
      {
        "marker": "p53",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Wildtype (heterogeneous, low-level) staining — key distinction from HGSC. HGSC shows aberrant p53 (diffuse strong or null) in ~96%. Wildtype p53 in a serous carcinoma strongly supports LGSC."
      },
      {
        "marker": "PAX8",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive; confirms Müllerian lineage."
      },
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Diffuse positive."
      },
      {
        "marker": "Ki-67",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Low proliferation index (<10% typical) — helps differentiate from HGSC (usually >50%). Not diagnostic alone."
      },
      {
        "marker": "HER2",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Not amplified. Unlike HGSC which may have HER2 amplification."
      }
    ],
    "molecular": [
      {
        "alteration": "KRAS or BRAF V600E mutation",
        "notes": "~50–60% of LGSC. KRAS (most common) or BRAF mutations drive the indolent low-grade biology. BRAF inhibitors may have activity. MEK inhibitor binimetinib has shown activity in KRAS/BRAF-mutated LGSC."
      },
      {
        "alteration": "NRAS mutation",
        "notes": "~10% of LGSC, mutually exclusive with KRAS/BRAF."
      }
    ]
  },
  {
    "id": "ovarian-mucinous-carcinoma",
    "name": "Ovarian Mucinous Carcinoma",
    "category": "Gynaecologic",
    "markers": [
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Positive. CK7+/CK20 variable pattern."
      },
      {
        "marker": "CK20",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variable — may be CK7+/CK20+ mimicking colorectal or appendiceal primary. Context critical."
      },
      {
        "marker": "CDX2",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Focally positive in a minority. Strong diffuse CDX2 favours metastatic appendiceal/colorectal primary."
      },
      {
        "marker": "PAX8",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative or only focally positive — unlike other ovarian carcinoma types. PAX8 negativity in an ovarian carcinoma is a clue to mucinous type or metastasis from GI/pancreatic tract."
      },
      {
        "marker": "WT1",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — serous marker. WT1 positivity argues against mucinous primary."
      },
      {
        "marker": "DPC4 / SMAD4",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Retained in primary ovarian mucinous carcinoma. Loss (~55%) strongly suggests pancreatic origin."
      },
      {
        "marker": "HER2",
        "role": "variable",
        "sensitivity": "~18%",
        "specificity": "—",
        "notes": "Amplified in ~18% of primary ovarian mucinous carcinoma — assess by standard IHC/ISH. Potential therapeutic target."
      },
      {
        "marker": "CA125 / MUC16",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually negative (unlike serous carcinoma). Serum CA125 often not elevated in mucinous ovarian carcinoma."
      }
    ],
    "molecular": [
      {
        "alteration": "KRAS mutation",
        "notes": "~75% of ovarian mucinous carcinomas. Also present in borderline mucinous tumours — part of the adenoma-carcinoma sequence in mucinous lineage."
      },
      {
        "alteration": "HER2 amplification",
        "notes": "~18% — potentially targetable. Higher rate in high-grade mucinous carcinoma."
      }
    ]
  },
  {
    "id": "ovarian-endometrioid-carcinoma",
    "name": "Ovarian Endometrioid Carcinoma",
    "category": "Gynaecologic",
    "markers": [
      {
        "marker": "ER",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive — shared with endometrial primary. Cannot distinguish ovarian from endometrial endometrioid by IHC alone; clinical correlation and imaging required."
      },
      {
        "marker": "PR",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Usually positive."
      },
      {
        "marker": "PAX8",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive; confirms Müllerian origin."
      },
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Diffuse positive."
      },
      {
        "marker": "WT1",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Typically negative — distinguishes from serous carcinoma (WT1+). A small subset (~15%) may be focally WT1+."
      },
      {
        "marker": "p53",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Wildtype in low-grade; may be aberrant in high-grade (grade 3) endometrioid — overlap with HGSC increases at grade 3."
      },
      {
        "marker": "ARID1A",
        "role": "loss",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Loss of ARID1A expression in ~40% (IHC for ARID1A protein, clone EPR1323Y). ARID1A loss is also common in endometriosis-associated clear cell carcinoma."
      },
      {
        "marker": "MLH1 / PMS2 / MSH2 / MSH6",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "~10–15% show MMR deficiency. MLH1 loss most common. Screen for Lynch syndrome implications."
      }
    ],
    "molecular": [
      {
        "alteration": "CTNNB1 (β-catenin) mutation / nuclear accumulation",
        "notes": "~50% of ovarian endometrioid carcinoma. Nuclear β-catenin IHC (clone 14) confirms exon 3 mutation. Associated with squamous morule formation."
      },
      {
        "alteration": "ARID1A mutation",
        "notes": "~40%. Also associated with synchronous/metachronous endometriosis. May co-occur with PI3K pathway mutations."
      },
      {
        "alteration": "PIK3CA / PTEN mutations",
        "notes": "Common (~30%). Overlapping mutation landscape with endometrial endometrioid carcinoma."
      }
    ]
  },
  {
    "id": "cervical-nec",
    "name": "Neuroendocrine Carcinoma of the Cervix",
    "category": "Gynaecologic",
    "markers": [
      {
        "marker": "Synaptophysin",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Strongly positive — primary NE marker. Use with chromogranin A."
      },
      {
        "marker": "Chromogranin A",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Positive; may be focal."
      },
      {
        "marker": "CD56",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive. Less specific than Syn/CgA."
      },
      {
        "marker": "TTF-1",
        "role": "positive",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Positive in ~50% of cervical SCNEC — does NOT indicate pulmonary origin. TTF-1 is NOT site-specific for small cell NEC outside the lung context."
      },
      {
        "marker": "p16",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse block-positive p16 — reflects high-risk HPV (usually HPV18) integration. Virtually all cervical NEC are HPV-associated."
      },
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Focal to moderate positivity; confirms epithelial/carcinomatous nature."
      },
      {
        "marker": "Ki-67",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Very high, typically >80% — distinguishes NEC from well-differentiated NET (Ki-67 <20%)."
      }
    ],
    "molecular": [
      {
        "alteration": "High-risk HPV (predominantly HPV18)",
        "notes": "~95% HPV-associated, mostly HPV18 (unlike squamous cell carcinoma which is predominantly HPV16). HPV18 is associated with glandular and NE differentiation of cervix."
      },
      {
        "alteration": "RB1 deletion / TP53 mutation",
        "notes": "Common secondary alterations, as in pulmonary SCLC. RB1 loss by IHC (absent nuclear staining) supports NEC over poorly differentiated squamous carcinoma."
      }
    ]
  },
  {
    "id": "vulvar-scc",
    "name": "Vulvar Squamous Cell Carcinoma",
    "category": "Gynaecologic",
    "markers": [
      {
        "marker": "p16",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Two distinct pathways: HPV-associated (p16 diffuse block-positive, ~30%) arising from uVIN/HSIL, and HPV-independent (p16 negative/patchy, ~70%) arising from dVIN/lichen sclerosus. p16 guides aetiology, not just diagnosis."
      },
      {
        "marker": "p53",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Aberrant p53 (diffuse strong or null) in HPV-independent pathway (~70%). Wildtype p53 in HPV-associated disease. Aberrant p53 in a vulvar SCC strongly suggests HPV-independent origin with dVIN precursor."
      },
      {
        "marker": "p40",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Confirms squamous lineage. Use with p63 — both positive in SCC."
      },
      {
        "marker": "CK5/6",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Supports squamous differentiation."
      },
      {
        "marker": "Ki-67",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "High proliferation in invasive component. Used to assess depth of invasion at the tumour–stroma interface."
      }
    ],
    "molecular": [
      {
        "alteration": "High-risk HPV (predominantly HPV16) — HPV pathway",
        "notes": "~30% of vulvar SCC. Arises from uVIN (HSIL). Better prognosis than HPV-independent SCC. p16 block-positive IHC correlates with HPV status."
      },
      {
        "alteration": "TP53 mutation — HPV-independent pathway",
        "notes": "~70% of vulvar SCC. Arises from dVIN in background of lichen sclerosus. More aggressive; higher recurrence rate. p53 aberrant IHC is a surrogate."
      }
    ]
  },
  {
    "id": "gynae-undifferentiated-uterine-sarcoma",
    "name": "Undifferentiated Uterine Sarcoma",
    "category": "Gynaecologic",
    "markers": [
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive; mesenchymal marker. Not specific."
      },
      {
        "marker": "CD10",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Focal CD10 may be present — does not confirm LG-ESS (which should also show hormone receptor positivity and low grade). UUS is CD10 variable with high-grade features and absent hormone receptor expression."
      },
      {
        "marker": "ER / PR",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative or only very focal — distinguishes from LG-ESS (ER+/PR+) and HG-ESS (focal ER/PR possible). Absence of hormone receptors with high-grade morphology supports UUS."
      },
      {
        "marker": "Cyclin D1",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — helps exclude HG-ESS with YWHAE::NUTM2 rearrangement (Cyclin D1 overexpressed)."
      },
      {
        "marker": "SMARCA4 (BRG1)",
        "role": "loss",
        "sensitivity": "~20%",
        "specificity": "—",
        "notes": "Loss in a subset of UUS — SMARCA4-deficient uterine sarcomas have distinct clinicopathologic features. Test if standard markers inconclusive."
      },
      {
        "marker": "Keratins (AE1/AE3, CK7)",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — excludes sarcomatoid/dedifferentiated carcinoma and carcinosarcoma."
      },
      {
        "marker": "Desmin / SMA",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — excludes leiomyosarcoma."
      },
      {
        "marker": "p53",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Aberrant p53 in a subset. High-grade, p53-aberrant, keratin-negative uterine tumours are in the differential with carcinosarcoma."
      }
    ]
  },
  {
    "id": "ovarian-brenner-malignant",
    "name": "Malignant Brenner Tumour",
    "category": "Gynaecologic",
    "markers": [
      {
        "marker": "GATA3",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Strongly positive — urothelial marker. Key diagnostic marker shared with urothelial carcinoma."
      },
      {
        "marker": "p63",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Positive in transitional/urothelial nests."
      },
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse positive."
      },
      {
        "marker": "CK20",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Variable. CK7+/CK20 variable pattern similar to urothelial carcinoma."
      },
      {
        "marker": "Uroplakin III",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "high",
        "notes": "Variable; when positive confirms urothelial-type differentiation."
      },
      {
        "marker": "WT1",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — distinguishes from serous carcinoma (WT1+)."
      },
      {
        "marker": "PAX8",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variable positivity — less useful here than in other ovarian carcinoma types."
      }
    ],
    "molecular": [
      {
        "alteration": "CDKN2A deletion / PIK3CA mutation",
        "notes": "Recurrent alterations in malignant Brenner. CDKN2A (p16) loss detectable by IHC. No recurrent translocation or highly specific molecular marker."
      }
    ]
  },

  // ── Gastrointestinal (additional) ────────────────────────────────────────
  {
    "id": "oesophageal-adenocarcinoma",
    "name": "Oesophageal / OGJ Adenocarcinoma",
    "category": "Gastrointestinal",
    "markers": [
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive. Glandular carcinoma of Barrett's origin."
      },
      {
        "marker": "CK20",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Variable; can be CK7+/CK20+ in Barrett's-type adenocarcinoma."
      },
      {
        "marker": "CDX2",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Focally positive in Barrett's-associated adenocarcinoma reflecting intestinal metaplasia origin. Strong diffuse CDX2 favours gastric or intestinal primary."
      },
      {
        "marker": "HER2",
        "role": "variable",
        "sensitivity": "~20%",
        "specificity": "—",
        "notes": "Amplified in ~20% of gastro-oesophageal adenocarcinoma. Mandatory assessment (ToGA criteria) — trastuzumab indicated for HER2 3+ or ISH-amplified tumours. Score using gastric HER2 guidelines."
      },
      {
        "marker": "PD-L1 (CPS)",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Combined Positive Score (CPS) ≥1 required for pembrolizumab (KEYNOTE-590); CPS ≥10 for nivolumab (CheckMate 649). Use 22C3 clone for CPS scoring."
      },
      {
        "marker": "MLH1 / PMS2 / MSH2 / MSH6",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "MMR IHC screen — dMMR/MSI-H identifies patients eligible for pembrolizumab. ~5% of OGJ adenocarcinomas."
      },
      {
        "marker": "EBER (ISH)",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "EBV-associated gastric/OGJ carcinoma (~5–9%) — excellent immunotherapy response, associated with MLH1 promoter methylation and PIK3CA mutations."
      }
    ],
    "molecular": [
      {
        "alteration": "HER2 amplification",
        "notes": "~20% of cases. Trastuzumab + chemotherapy is standard first-line for HER2+ oesophagogastric adenocarcinoma (ToGA trial)."
      },
      {
        "alteration": "FGFR2 amplification",
        "notes": "~5%. Targetable with bemarituzumab (anti-FGFR2b). Enriched in CIN-type tumours."
      },
      {
        "alteration": "KRAS / PIK3CA / TP53 mutations",
        "notes": "Common molecular alterations. KRAS G12C targetable with sotorasib in selected cases."
      }
    ]
  },
  {
    "id": "anal-scc",
    "name": "Anal Squamous Cell Carcinoma",
    "category": "Gastrointestinal",
    "markers": [
      {
        "marker": "p16",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffuse block-positive in virtually all anal SCC — reflects high-risk HPV (predominantly HPV16) integration. p16 is a surrogate for HPV-driven carcinogenesis."
      },
      {
        "marker": "p40 / p63",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Confirms squamous lineage. p40 preferred — more specific than p63."
      },
      {
        "marker": "CK5/6",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive; squamous marker."
      },
      {
        "marker": "PD-L1 (CPS)",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "PD-L1 CPS used for pembrolizumab in recurrent/metastatic anal SCC (KEYNOTE-158 — CPS ≥10 enriches response)."
      },
      {
        "marker": "CDX2 / CK20",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — confirms squamous rather than glandular (anal adenocarcinoma or rectal primary)."
      }
    ],
    "molecular": [
      {
        "alteration": "High-risk HPV (predominantly HPV16)",
        "notes": "~90–95% HPV16+. Near-universal HPV association distinguishes anal SCC from perianal skin SCC (which is HPV-independent in ~50%)."
      },
      {
        "alteration": "PIK3CA mutation",
        "notes": "~30% of anal SCC. PIK3CA amplification also common."
      }
    ]
  },
  {
    "id": "appendix-goblet-cell-adenocarcinoma",
    "name": "Goblet Cell Adenocarcinoma of the Appendix",
    "category": "Gastrointestinal",
    "markers": [
      {
        "marker": "Synaptophysin",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive in goblet/NE cells. Reflects dual glandular–neuroendocrine phenotype."
      },
      {
        "marker": "Chromogranin A",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variably positive — less consistent than synaptophysin in GCA."
      },
      {
        "marker": "CDX2",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Strongly positive — intestinal differentiation. Key marker."
      },
      {
        "marker": "CK20",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive; typical CK7−/CK20+ lower GI pattern."
      },
      {
        "marker": "CK7",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Typically negative (unlike mucinous adenocarcinoma of other GI sites which may be CK7+)."
      },
      {
        "marker": "MUC2",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Strongly positive — goblet cell mucin. Typical intestinal mucin profile."
      },
      {
        "marker": "PAX8",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — excludes ovarian/Müllerian origin, which is critical as GCA can present with peritoneal spread mimicking ovarian carcinoma."
      },
      {
        "marker": "WT1",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — further excludes serous ovarian carcinoma."
      }
    ],
    "molecular": [
      {
        "alteration": "TP53 mutation",
        "notes": "More common in high-grade (Grade C / Tang classification) GCA. Associated with signet ring cell transformation and worse prognosis."
      },
      {
        "alteration": "KRAS mutation",
        "notes": "Present in ~30% of GCA. Unlike conventional appendiceal carcinoid/NET which are KRAS-wildtype."
      }
    ]
  },
  {
    "id": "gi-nec",
    "name": "Gastrointestinal Neuroendocrine Carcinoma (SCNEC / LCNEC)",
    "category": "Gastrointestinal",
    "markers": [
      {
        "marker": "Synaptophysin",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "The most sensitive NE marker. Diffusely positive in both SCNEC and LCNEC."
      },
      {
        "marker": "Chromogranin A",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Less consistently positive than synaptophysin in high-grade NEC (unlike well-differentiated NET where CgA is usually strong)."
      },
      {
        "marker": "CD56",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Positive in most GI NEC."
      },
      {
        "marker": "Ki-67",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "By definition >20% (NEC). In practice usually >55%, often >80%. Ki-67 <55% in a morphologically high-grade NE tumour should prompt consideration of well-differentiated G3 NET (different biology and management)."
      },
      {
        "marker": "CK7 / CK20",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Variable; may retain site-specific CK pattern. Colorectal NEC: CK20+ / CK7−; oesophageal/gastric NEC: CK7+."
      },
      {
        "marker": "p53",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Aberrant p53 in a subset. Helps distinguish poorly differentiated NEC from G3 NET (which usually shows wildtype p53 and DAXX/ATRX loss)."
      },
      {
        "marker": "RB1",
        "role": "loss",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "RB1 protein loss (absent nuclear staining) in SCNEC (~70%) — similar to pulmonary SCLC. Retained RB in a high-grade NE tumour favours G3 NET over NEC."
      },
      {
        "marker": "DAXX / ATRX",
        "role": "retained",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Retained in GI NEC. Loss of DAXX or ATRX is characteristic of well-differentiated G3 PanNET — finding loss should prompt reclassification away from NEC."
      }
    ],
    "molecular": [
      {
        "alteration": "TP53 + RB1 co-mutation",
        "notes": "The classic NEC signature (~50–70%). Associated with small cell morphology and extremely aggressive behaviour."
      },
      {
        "alteration": "KRAS / BRAF / PIK3CA mutation",
        "notes": "Recurrent in colorectal and pancreatic NEC. May arise via MiNEN (mixed NE–non-NE) pathway from pre-existing adenoma."
      }
    ]
  },
  {
    "id": "pancreatoblastoma",
    "name": "Pancreatoblastoma",
    "category": "Gastrointestinal",
    "markers": [
      {
        "marker": "AFP (Alpha-fetoprotein)",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Positive in a significant subset; serum AFP elevated in most paediatric cases. Useful both diagnostically and as a tumour marker for follow-up."
      },
      {
        "marker": "Trypsin / BCL10",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "BCL10 (nuclear) is an acinar cell marker and useful in diagnosing pancreatoblastoma and acinar cell carcinoma. Trypsin and chymotrypsin confirm acinar differentiation."
      },
      {
        "marker": "Synaptophysin / Chromogranin",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Focal NE differentiation is common in the NE component. Pancreatoblastoma is triphasic: acinar + NE + ductal elements."
      },
      {
        "marker": "β-catenin (nuclear)",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Nuclear β-catenin accumulation in squamoid corpuscles is a characteristic feature of pancreatoblastoma. Helps distinguish from acinar cell carcinoma (which lacks squamoid corpuscles)."
      },
      {
        "marker": "CK7 / CK19",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Positive in ductal component."
      },
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Positive in stromal component."
      }
    ],
    "molecular": [
      {
        "alteration": "CTNNB1 (β-catenin) activating mutation / APC loss",
        "notes": "Wnt pathway activation (~80%). Nuclear β-catenin IHC is surrogate. Sporadic and Beckwith-Wiedemann syndrome-associated cases both show Wnt activation."
      },
      {
        "alteration": "11p15 LOH / IGF2 overexpression",
        "notes": "Associated with Beckwith-Wiedemann syndrome (~10% of cases). IGF2 is the likely driver in BWS-related pancreatoblastoma."
      }
    ]
  },
  {
    "id": "hcc-cca-combined",
    "name": "Combined Hepatocellular-Cholangiocarcinoma (cHCC-CCA)",
    "category": "Gastrointestinal",
    "markers": [
      {
        "marker": "HepPar-1 (Hepatocyte antigen)",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Positive in HCC component. Focally positive in combined tumour — may be absent in dedifferentiated areas."
      },
      {
        "marker": "Arginase-1",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "high",
        "notes": "More specific than HepPar-1 for hepatocellular differentiation. Positive in HCC component; negative in CCA component."
      },
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive in CCA/biliary component. Can be focally positive in HCC too — context matters."
      },
      {
        "marker": "CK19",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Biliary/ductal marker; positive in CCA component. CK19 positivity in what appears to be pure HCC should raise suspicion of combined tumour or intermediate stem cell carcinoma."
      },
      {
        "marker": "Glypican-3 (GPC3)",
        "role": "positive",
        "sensitivity": "~75%",
        "specificity": "—",
        "notes": "Positive in HCC component. Negative in normal hepatocytes and CCA."
      },
      {
        "marker": "EpCAM (CD326)",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Positive — marks hepatic progenitor/stem cell phenotype. EpCAM+ combined HCC-CCA is thought to arise from hepatic progenitor cells."
      },
      {
        "marker": "AFP",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Positive in HCC component; negative in CCA component."
      },
      {
        "marker": "MOC31 / Claudin-4",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive in CCA component. MOC31 and Claudin-4 are useful to confirm adenocarcinoma (biliary) component."
      }
    ],
    "molecular": [
      {
        "alteration": "TP53 / TERT promoter / CTNNB1 mutations",
        "notes": "Shared with conventional HCC. Combined tumours carry molecular features of both HCC and CCA lineages."
      },
      {
        "alteration": "FGFR2 fusion / IDH1 mutation",
        "notes": "Rare in combined tumour; present in CCA-dominant component. FGFR2 fusions targetable with pemigatinib/infigratinib."
      }
    ]
  },
  {
    "id": "gastric-net",
    "name": "Gastric Neuroendocrine Tumour (Types I–III)",
    "category": "Gastrointestinal",
    "markers": [
      {
        "marker": "Synaptophysin",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Diffusely positive in all gastric NETs. Primary NE marker."
      },
      {
        "marker": "Chromogranin A",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive; serum CgA elevated in Type I/II, moderate in Type III."
      },
      {
        "marker": "Ki-67",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Grade classification: G1 <3%, G2 3–20%, G3 >20%. Type I/II gastric NETs are usually G1–G2; Type III can be G1–G3."
      },
      {
        "marker": "Histamine / Vesicular monoamine transporter 2 (VMAT2)",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "high",
        "notes": "ECL-cell (enterochromaffin-like) marker — VMAT2 positivity confirms ECL-cell origin, characteristic of Type I and II gastric NETs. Not routinely available in all labs."
      },
      {
        "marker": "Gastrin (serum / IHC in gastrin-producing cells)",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Elevated serum gastrin in Type I (chronic atrophic gastritis) and Type II (MEN1/ZES). Type III (sporadic, no hypergastrinaemia) has normal serum gastrin. Context: hypergastrinaemia → ECL-cell hyperplasia → Type I/II."
      },
      {
        "marker": "Somatostatin receptor 2 (SSTR2)",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive in well-differentiated gastric NETs. SSTR2 IHC predicts response to octreotide/lanreotide and suitability for PRRT (Lu-177 DOTATATE)."
      }
    ],
    "molecular": [
      {
        "alteration": "Type I: Autoimmune gastric atrophy / H. pylori",
        "notes": "Most common (70–80%). Benign behaviour; parietal cell loss → hypochlorhydria → hypergastrinaemia → ECL hyperplasia → NET. Small, multifocal, body/fundus."
      },
      {
        "alteration": "Type II: MEN1 mutation + ZES (gastrinoma)",
        "notes": "~5% of gastric NETs. MEN1 germline mutation. Hypergastrinaemia from duodenal/pancreatic gastrinoma. Intermediate risk."
      },
      {
        "alteration": "Type III: Sporadic (no hypergastrinaemia)",
        "notes": "~20%. Often large, solitary, antrally located. Higher malignant potential; metastatic in ~50%. No hypergastrinaemia. Managed as conventional NET."
      }
    ]
  },

  // ── CNS (additional) ─────────────────────────────────────────────────────
  {
    "id": "cns-pcnsl",
    "name": "Primary CNS Lymphoma (PCNSL)",
    "category": "CNS",
    "markers": [
      {
        "marker": "CD20",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Strongly positive — virtually all PCNSL are DLBCL of B-cell origin. CD20 IHC is the first line on brain biopsy."
      },
      {
        "marker": "CD79a / PAX5",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "B-cell markers; useful when CD20 is dim or negative (e.g. prior rituximab treatment)."
      },
      {
        "marker": "MUM1 / IRF4",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Strongly positive — ABC/non-GCB phenotype in ~90% of PCNSL (unlike systemic DLBCL which is ~40% ABC). MUM1+ is a consistent feature."
      },
      {
        "marker": "BCL6",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Positive in GC-marker; present in most PCNSL despite the non-GCB phenotype by Hans algorithm."
      },
      {
        "marker": "CD10",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in ~90% of PCNSL. CD10 positivity in a CNS lymphoma should prompt systemic work-up for secondary CNS involvement from systemic GCB DLBCL."
      },
      {
        "marker": "Ki-67",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Very high, typically >80%. Reflects aggressive biology."
      },
      {
        "marker": "GFAP",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — excludes glial tumour. Perivascular pattern of PCNSL with reactive astrocytes may be GFAP+ in background — do not confuse."
      },
      {
        "marker": "EBV (EBER ISH)",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Positive in immunocompromised patients (AIDS, post-transplant). EBV+ PCNSL = distinct entity from EBV− PCNSL in immunocompetent patients."
      }
    ],
    "molecular": [
      {
        "alteration": "MYD88 L265P mutation",
        "notes": "Present in ~70–80% of PCNSL. Diagnostic value — highly recurrent in PCNSL. Can be detected on CSF cell-free DNA. Activates NF-κB/TLR pathway."
      },
      {
        "alteration": "CD79B mutation",
        "notes": "~30–40% of PCNSL. Cooperates with MYD88 L265P in BCR/NF-κB signalling. BTK inhibitors (ibrutinib) active in MYD88/CD79B co-mutated PCNSL."
      },
      {
        "alteration": "9p24.1 amplification (PD-L1/PD-L2)",
        "notes": "Less common than in PMBL but present in a subset. Associated with immune evasion."
      }
    ]
  },

  // ── Endocrine (additional) ───────────────────────────────────────────────
  {
    "id": "pitnet",
    "name": "Pituitary Neuroendocrine Tumour (PitNET)",
    "category": "Endocrine",
    "markers": [
      {
        "marker": "Synaptophysin",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Diffusely positive — confirms NE lineage. Not site-specific."
      },
      {
        "marker": "Chromogranin A",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Positive in most PitNETs."
      },
      {
        "marker": "Pit-1",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Pit-1 lineage transcription factor: positive in GH, PRL, and TSH-secreting tumours. Pit-1 IHC determines tumour lineage — essential for WHO 2022 classification."
      },
      {
        "marker": "T-Pit (TBX19)",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "T-Pit lineage: positive in ACTH-secreting tumours (Cushing's disease, Nelson's). T-Pit IHC confirms corticotroph differentiation."
      },
      {
        "marker": "SF-1",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "SF-1 lineage: positive in gonadotroph tumours (FSH/LH). Most common PitNET in adults — often clinically non-functioning."
      },
      {
        "marker": "GH (Growth hormone)",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Positive in somatotroph PitNET. Sparsely granulated (CK18 paranuclear dot+) vs densely granulated variants have different behaviour."
      },
      {
        "marker": "ACTH",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Positive in corticotroph PitNET (Cushing's disease). Crooke's cell adenoma (T-Pit+, ACTH+) has hyaline cytoplasm; more aggressive."
      },
      {
        "marker": "PRL (Prolactin)",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Positive in lactotroph PitNET (prolactinoma). Most common in women; managed medically with dopamine agonists."
      },
      {
        "marker": "CK18 (paranuclear dot)",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Sparsely granulated somatotroph tumours show CK18 paranuclear dot ('ring') pattern — distinct from densely granulated. Sparsely granulated are more aggressive and less responsive to somatostatin analogues."
      },
      {
        "marker": "Ki-67",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Ki-67 ≥3% designates 'high proliferative index' — an aggressive behaviour marker in PitNETs. No formal grading system."
      }
    ],
    "molecular": [
      {
        "alteration": "MEN1 mutation (germline)",
        "notes": "~3% of PitNETs are MEN1-associated. Usually macroadenomas; check for familial MEN1."
      },
      {
        "alteration": "AIP mutation (germline)",
        "notes": "~10–15% of young-onset (<30 yr) or familial isolated pituitary adenoma (FIPA). GH-secreting PitNETs predominantly. Less responsive to somatostatin analogues."
      },
      {
        "alteration": "USP8 mutation (somatic)",
        "notes": "~40–60% of Cushing's disease (corticotroph PitNET). Activates EGFR signalling. More common in women."
      }
    ]
  },
  {
    "id": "craniopharyngioma",
    "name": "Craniopharyngioma",
    "category": "Endocrine",
    "markers": [
      {
        "marker": "β-catenin (nuclear)",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Nuclear β-catenin accumulation in adamantinomatous craniopharyngioma (ACP) — one of the most specific IHC findings in CNS tumour pathology. Reflects CTNNB1 exon 3 mutation. Papillary craniopharyngioma (PCP) shows membranous (normal) β-catenin pattern."
      },
      {
        "marker": "BRAF V600E (IHC)",
        "role": "variable",
        "sensitivity": "~90%",
        "specificity": "high",
        "notes": "Positive in papillary craniopharyngioma (PCP) — essentially 100% harbour BRAF V600E mutation. VE1 clone IHC highly sensitive. Negative in adamantinomatous type. BRAF/MEK inhibitors active in recurrent PCP."
      },
      {
        "marker": "CK (AE1/AE3, CK5/6)",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Epithelial keratins positive — confirms epithelial nature. Adamantinomatous: squamous epithelium with wet keratin; papillary: mature squamous lining."
      },
      {
        "marker": "EMA",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Variably positive in PCP."
      },
      {
        "marker": "GFAP",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in neoplastic epithelium (positive in reactive gliosis in adjacent brain)."
      }
    ],
    "molecular": [
      {
        "alteration": "CTNNB1 exon 3 mutation — adamantinomatous type",
        "notes": "~95% of ACP. Activates Wnt pathway; nuclear β-catenin IHC is surrogate. Occurs in children and young adults (bimodal age distribution)."
      },
      {
        "alteration": "BRAF V600E — papillary type",
        "notes": "~95–100% of PCP. Predominantly adults. Combination BRAF+MEK inhibition (dabrafenib+trametinib) shows high response rates in recurrent PCP."
      }
    ]
  },
  {
    "id": "parathyroid-carcinoma",
    "name": "Parathyroid Carcinoma",
    "category": "Endocrine",
    "markers": [
      {
        "marker": "Parafibromin (CDC73 / HRPT2)",
        "role": "loss",
        "sensitivity": "~70%",
        "specificity": "high",
        "notes": "Loss of parafibromin nuclear expression is the most specific IHC marker for parathyroid carcinoma. Retained in adenoma (diffuse nuclear staining). Loss reflects CDC73/HRPT2 mutation — germline in hyperparathyroidism-jaw tumour (HPT-JT) syndrome."
      },
      {
        "marker": "PGP9.5",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Positive in parathyroid carcinoma; negative/weak in adenoma. Useful adjunct to parafibromin."
      },
      {
        "marker": "Rb (Retinoblastoma protein)",
        "role": "loss",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Loss of Rb nuclear expression in a subset of parathyroid carcinoma. Retained in most adenomas."
      },
      {
        "marker": "Ki-67",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Higher than adenoma, but overlap exists. Ki-67 >5% supports carcinoma but is not diagnostic alone."
      },
      {
        "marker": "PTH (Parathyroid hormone)",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive — confirms parathyroid origin. Not discriminatory between adenoma and carcinoma."
      },
      {
        "marker": "GATA3",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive — useful to confirm parathyroid lineage (alongside PTH). Also positive in breast, urothelial, and thymic tumours."
      },
      {
        "marker": "CK (low-MW)",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Focally positive. Carcinoma tends to show stronger keratin staining than adenoma."
      }
    ],
    "molecular": [
      {
        "alteration": "CDC73 / HRPT2 mutation (somatic or germline)",
        "notes": "~70% of parathyroid carcinoma — germline in HPT-JT syndrome. Loss-of-function → parafibromin loss by IHC. Germline testing indicated in all parathyroid carcinoma patients."
      },
      {
        "alteration": "CCND1 (Cyclin D1) overexpression",
        "notes": "Common in parathyroid adenoma (not specific for carcinoma). Inversion of 11q13 → CCND1 overexpression in adenoma."
      }
    ]
  },

  // ── Lung / Thymus (additional) ────────────────────────────────────────────
  {
    "id": "lung-sarcomatoid-carcinoma",
    "name": "Pulmonary Sarcomatoid Carcinoma",
    "category": "Lung",
    "markers": [
      {
        "marker": "Keratins (AE1/AE3, MNF116)",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "May be focal or weak in spindle cell areas — extensive sampling required. Keratin positivity is essential to confirm carcinomatous nature. CAM5.2 and CK7 may be more sensitive than HMWCK in pleomorphic areas."
      },
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Strongly positive in sarcomatoid component — not specific but confirms mesenchymal-like phenotype."
      },
      {
        "marker": "TTF-1",
        "role": "variable",
        "sensitivity": "~25%",
        "specificity": "—",
        "notes": "Positive in a minority (~25%) — focal in carcinomatous areas. TTF-1+ favours pulmonary primary over metastatic sarcoma."
      },
      {
        "marker": "Napsin-A",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Usually negative. Rare focal positivity."
      },
      {
        "marker": "p40 / p63",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Positive in spindle cell / squamous components. Pleomorphic carcinoma may show focal p63/p40."
      },
      {
        "marker": "CD34",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in sarcomatoid carcinoma — helps exclude SFT (CD34+) and DFSP (CD34+)."
      },
      {
        "marker": "PD-L1 (TPS)",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "High PD-L1 TPS (≥50%) enriched in sarcomatoid carcinoma — these tumours respond well to immune checkpoint inhibitors."
      }
    ],
    "molecular": [
      {
        "alteration": "MET exon 14 skipping mutation",
        "notes": "~20–30% of pulmonary sarcomatoid carcinoma — highest rate of MET ex14 skip of any lung carcinoma subtype. Targetable with capmatinib or tepotinib."
      },
      {
        "alteration": "KRAS mutation",
        "notes": "~20%. Common in pleomorphic carcinoma component."
      },
      {
        "alteration": "BRAF V600E",
        "notes": "~5%. Targetable."
      }
    ]
  },
  {
    "id": "thymus-thymoma",
    "name": "Thymoma (WHO Types A, AB, B1, B2, B3)",
    "category": "Thymus",
    "markers": [
      {
        "marker": "p63",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Positive in thymic epithelial cells across all thymoma types. Key marker to identify the epithelial component among abundant TdT+ T-lymphocytes."
      },
      {
        "marker": "CK (AE1/AE3, CK5/6, CK19)",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Keratins highlight thymic epithelial cells. CK5/6 and CK19 are particularly useful in lymphocyte-rich types (B1/B2) where epithelial cells are sparse."
      },
      {
        "marker": "TdT",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Positive in cortical (immature) T-lymphocytes that populate B1, B2, and B3 thymomas. The proportion of TdT+ lymphocytes decreases from B1→B3. In type A thymoma, TdT+ lymphocytes are sparse or absent."
      },
      {
        "marker": "CD5 (on epithelial cells)",
        "role": "positive",
        "sensitivity": "~75%",
        "specificity": "—",
        "notes": "CD5 on thymic epithelial cells — positive in most thymomas (not lymphocytes). Thymic carcinoma is also CD5+ on tumour cells. Distinguishes thymic from other mediastinal tumours."
      },
      {
        "marker": "CD117 (c-KIT)",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Positive in thymic carcinoma (~80%); variably positive in B3 thymoma (~20%). Helps distinguish thymic carcinoma from B3 thymoma."
      },
      {
        "marker": "PAX8",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in thymoma and thymic carcinoma — important to exclude ectopic parathyroid, GCT, and other PAX8+ tumours in the anterior mediastinum."
      },
      {
        "marker": "GLUT-1",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Positive in A and AB thymoma; negative in B-types. Useful for classification within the A/AB spectrum."
      }
    ],
    "molecular": [
      {
        "alteration": "GTF2I mutation (type A/AB thymoma)",
        "notes": "~80% of type A and AB thymoma. L424H hotspot. Largely specific to thymoma. Associated with myasthenia gravis."
      },
      {
        "alteration": "CDKN2A deletion / TP53 mutation",
        "notes": "More common in B3 thymoma and thymic carcinoma — associated with aggressive behaviour."
      }
    ]
  },

  // ── Male Genital (additional) ─────────────────────────────────────────────
  {
    "id": "prostate-nec",
    "name": "Prostate Small Cell / Neuroendocrine Carcinoma",
    "category": "Prostate",
    "markers": [
      {
        "marker": "Synaptophysin",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Strongly positive. Primary NE marker."
      },
      {
        "marker": "Chromogranin A",
        "role": "positive",
        "sensitivity": "~75%",
        "specificity": "—",
        "notes": "Positive in most cases."
      },
      {
        "marker": "CD56",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive."
      },
      {
        "marker": "PSA",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative or only very focal — key distinction from conventional acinar adenocarcinoma (PSA+). Loss of PSA expression with NE markers = prostatic NEC until proven otherwise."
      },
      {
        "marker": "NKX3.1",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in NEC component. NKX3.1 is a prostate lineage marker; loss alongside NE differentiation marks treatment-emergent NEC."
      },
      {
        "marker": "AR (Androgen Receptor)",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative or only focally positive — reflects androgen independence. This is the key clinical issue: AR-negative NEC does not respond to androgen deprivation therapy."
      },
      {
        "marker": "TTF-1",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Positive in ~50% of prostatic SCNEC — does NOT indicate pulmonary primary. Same caveat as cervical NEC: TTF-1 is NOT site-specific in extrapulmonary SCNEC."
      },
      {
        "marker": "Rb (Retinoblastoma protein)",
        "role": "loss",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "RB1 loss common in treatment-emergent NEC of prostate (t-SCNEC). Rb loss by IHC correlates with RB1 deletion."
      }
    ],
    "molecular": [
      {
        "alteration": "RB1 deletion + TP53 mutation",
        "notes": "~70% of treatment-emergent prostatic SCNEC. These alterations often present in the original adenocarcinoma in small clonal populations that expand under ADT/enzalutamide pressure."
      },
      {
        "alteration": "AURKA / MYCN amplification",
        "notes": "~40% of prostatic NEC. MYCN drives NE transdifferentiation. Aurora A kinase inhibitors (alisertib) investigated."
      },
      {
        "alteration": "AR gene locus alterations",
        "notes": "AR splice variants or AR loss in treatment-emergent NEC. AR-V7 splice variant can be detected in circulating tumour cells."
      }
    ]
  },
  {
    "id": "penile-scc",
    "name": "Penile Squamous Cell Carcinoma",
    "category": "Prostate",
    "markers": [
      {
        "marker": "p16",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Two aetiological pathways: HPV-associated (~30–50%, p16 diffuse block-positive) arising from penile HSIL (uPIN); and HPV-independent (~50–70%, p16 negative/patchy) arising from lichen sclerosus/dVIN. p16 IHC guides aetiology."
      },
      {
        "marker": "p53",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Aberrant p53 in HPV-independent pathway (~70% of HPV-negative penile SCC). Wildtype p53 in HPV-associated disease. Pattern mirrors vulvar SCC."
      },
      {
        "marker": "p40 / p63",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Confirms squamous lineage. p40 preferred."
      },
      {
        "marker": "CK5/6",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Supports squamous differentiation."
      }
    ],
    "molecular": [
      {
        "alteration": "High-risk HPV (HPV16/18) — HPV pathway",
        "notes": "~30–50% of penile SCC, predominantly warty and basaloid subtypes. p16 block-positive IHC correlates strongly with HPV status."
      },
      {
        "alteration": "TP53 / CDKN2A mutations — HPV-independent",
        "notes": "Keratinising usual-type SCC. Arise on background of lichen sclerosus/differentiated intraepithelial neoplasia. More aggressive clinical course."
      },
      {
        "alteration": "PIK3CA / HRAS mutations",
        "notes": "Recurrent in both HPV+ and HPV− subtypes. No approved targeted therapy; studied in clinical trials."
      }
    ]
  },

  // ── Skin (additional) ─────────────────────────────────────────────────────
  {
    "id": "skin-mycosis-fungoides",
    "name": "Mycosis Fungoides / Sézary Syndrome",
    "category": "Skin",
    "markers": [
      {
        "marker": "CD3",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Positive T-cell marker in epidermotropic lymphocytes. Pan-T-cell marker."
      },
      {
        "marker": "CD4",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Positive — helper T-cell phenotype in most MF/SS. CD4+ epidermotropic infiltrate is characteristic."
      },
      {
        "marker": "CD8",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in classic MF/SS (CD4+/CD8− ratio inverted). CD8+ MF is a rare variant with better prognosis."
      },
      {
        "marker": "CD7",
        "role": "loss",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Loss of CD7 expression in neoplastic T-cells is a characteristic pan-T-cell marker loss. CD7 loss in CD4+ T-cells in an epidermotropic infiltrate supports MF over inflammatory dermatosis."
      },
      {
        "marker": "CD5",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Retained in most MF. CD5 loss (like CD7 loss) can occur as part of aberrant T-cell phenotype."
      },
      {
        "marker": "CD20 / CD30",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "CD20 negative (B-cell marker). CD30 negative in classic MF — CD30+ large cell transformation of MF is a distinct aggressive entity (treat differently)."
      },
      {
        "marker": "PD-1 (CD279)",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Positive in neoplastic T-cells in MF/SS. PD-1 is also expressed on TFH cells — check in context."
      },
      {
        "marker": "TCR (clonal) — by PCR",
        "role": "screen",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "T-cell receptor gene rearrangement clonality by PCR on skin biopsy strongly supports diagnosis when morphology is equivocal. Not IHC — requires molecular testing."
      }
    ],
    "molecular": [
      {
        "alteration": "CDKN2A / TP53 deletion or mutation",
        "notes": "Common in advanced/transformed MF. Associated with large cell transformation."
      },
      {
        "alteration": "JAK / STAT pathway mutations (STAT3, STAT5B, JAK1/2/3)",
        "notes": "Recurrent in SS (~40%) and advanced MF. STAT3/5 phosphorylation detectable by IHC. JAK inhibitors (ruxolitinib) active in SS."
      }
    ]
  },
  {
    "id": "skin-kaposi-sarcoma",
    "name": "Kaposi Sarcoma",
    "category": "Skin",
    "markers": [
      {
        "marker": "HHV-8 LANA-1 (Latent Nuclear Antigen-1)",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "high",
        "notes": "Nuclear dot pattern — the most specific marker. Positive in virtually 100% of KS regardless of clinical type (classic/endemic/epidemic/iatrogenic). Essential for diagnosis."
      },
      {
        "marker": "CD31",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Endothelial marker — strongly positive. Best endothelial marker for KS."
      },
      {
        "marker": "CD34",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive — endothelial/vascular marker."
      },
      {
        "marker": "ERG",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Nuclear endothelial transcription factor; strongly positive."
      },
      {
        "marker": "D2-40 (Podoplanin)",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Lymphatic endothelial marker — KS has lymphatic-endothelial differentiation. D2-40 positivity distinguishes KS from haemangiosarcoma (D2-40 variable/negative)."
      },
      {
        "marker": "LYVE-1 / Prox-1",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Lymphatic markers. Confirm lymphovascular origin of KS."
      },
      {
        "marker": "SMA / Desmin",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — helps exclude smooth muscle/pericytic tumours."
      }
    ],
    "molecular": [
      {
        "alteration": "HHV-8 (Human Herpesvirus 8 / KSHV) infection",
        "notes": "Necessary but not sufficient cause of KS. All four clinical types (classic, endemic, epidemic/AIDS-related, iatrogenic) are HHV-8+. LANA-1 IHC reflects HHV-8 latent infection."
      },
      {
        "alteration": "HIV co-infection (epidemic KS)",
        "notes": "HIV-induced immunosuppression dramatically increases KS risk. Antiretroviral therapy (ART) is the cornerstone of epidemic KS treatment."
      }
    ]
  },
  {
    "id": "skin-spitz-tumour",
    "name": "Spitz Tumour (Spitz Naevus / Atypical Spitz Tumour / Spitzoid Melanoma)",
    "category": "Skin",
    "markers": [
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Strongly positive — melanocytic lineage. Not discriminatory within the Spitz spectrum."
      },
      {
        "marker": "HMB45",
        "role": "variable",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive in junctional component; may show 'maturation' gradient (decreasing positivity with depth) in benign Spitz naevus — like conventional naevus. Loss of maturation (persistent deep HMB45) favours malignant behaviour."
      },
      {
        "marker": "Melan-A / MART-1",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive throughout."
      },
      {
        "marker": "Ki-67",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Low Ki-67 favours benign; high proliferation (>10%) in deep dermis raises concern for malignancy. However, Spitz naevi can have moderately high Ki-67."
      },
      {
        "marker": "ALK",
        "role": "variable",
        "sensitivity": "~20%",
        "specificity": "high",
        "notes": "Positive in ALK-rearranged Spitz tumours (~20% of atypical Spitz tumours). Cytoplasmic/granular pattern. ALK rearrangement (DCTN1::ALK, others) is a defining molecular event in this subset."
      },
      {
        "marker": "p16",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Retained in benign Spitz naevus; loss of p16 (CDKN2A homozygous deletion) in atypical Spitz tumour/Spitzoid melanoma. p16 loss is a marker of malignant potential."
      },
      {
        "marker": "BAP1 (nuclear)",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "BAP1-deficient Spitzoid tumour — loss of BAP1 nuclear expression in epithelioid melanocytes. Often associated with germline BAP1 mutation and predisposition to uveal melanoma and mesothelioma."
      }
    ],
    "molecular": [
      {
        "alteration": "HRAS mutation (Q61)",
        "notes": "~20% of Spitz naevi. Mutually exclusive with BRAF/NRAS. Copy number gain of 11p in some HRAS-mutant Spitz tumours. Not targetable but diagnostic."
      },
      {
        "alteration": "Kinase fusions (ALK, RET, ROS1, NTRK1/3, MET, BRAF)",
        "notes": "Recurrently fused in atypical Spitz tumours (~70% of ALK-rearranged, others). These are biologically distinct from BRAF/NRAS-mutant conventional melanoma. Fusion partners vary (DCTN1::ALK, CLIP1::RET, etc.)."
      },
      {
        "alteration": "CDKN2A (p16) homozygous deletion",
        "notes": "Absent p16 IHC + FISH-confirmed deletion predicts malignant potential. Combined with histologic features guides management."
      }
    ]
  },

  // ── Mesothelioma (additional) ─────────────────────────────────────────────
  {
    "id": "mesothelioma-sarcomatoid",
    "name": "Sarcomatoid / Biphasic Mesothelioma",
    "category": "Mesothelioma",
    "markers": [
      {
        "marker": "Keratins (AE1/AE3, CAM5.2)",
        "role": "positive",
        "sensitivity": "~75%",
        "specificity": "—",
        "notes": "May be focal or weak in sarcomatoid areas — diffuse keratin positivity in epithelioid component. Focal keratin in a pleural spindle cell tumour is a key clue to sarcomatoid mesothelioma."
      },
      {
        "marker": "CK5/6",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variable in sarcomatoid component; more consistently positive in epithelioid areas of biphasic mesothelioma."
      },
      {
        "marker": "BAP1 (nuclear)",
        "role": "loss",
        "sensitivity": "~60%",
        "specificity": "high",
        "notes": "Loss of BAP1 nuclear expression confirms malignant mesothelioma (vs reactive mesothelial proliferation). Sensitivity varies by histotype: ~60–70% epithelioid, ~30–40% sarcomatoid, ~50% biphasic. BAP1 loss = malignant; retained BAP1 does NOT exclude mesothelioma."
      },
      {
        "marker": "MTAP",
        "role": "loss",
        "sensitivity": "~65%",
        "specificity": "high",
        "notes": "Surrogate for CDKN2A (9p21) homozygous deletion — detectable by IHC (~93% concordance with FISH). Sensitivity varies by histotype: ~70–80% sarcomatoid, ~30–40% epithelioid. Complementary to BAP1 — sarcomatoid mesothelioma tends to lose MTAP while retaining BAP1, and vice versa for epithelioid. Use both markers together; a positive result with either confirms malignancy."
      },
      {
        "marker": "p16 (CDKN2A) FISH",
        "role": "loss",
        "sensitivity": "~70%",
        "specificity": "high",
        "notes": "Homozygous deletion of 9p21 by FISH is a validated diagnostic criterion for mesothelioma. More common in sarcomatoid (~80%) than epithelioid (~40%) type. FISH is the gold standard when IHC is equivocal."
      },
      {
        "marker": "Calretinin",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Positive in epithelioid component of biphasic mesothelioma; often lost in sarcomatoid areas."
      },
      {
        "marker": "WT1",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variable; less sensitive in sarcomatoid than epithelioid type."
      },
      {
        "marker": "D2-40",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Positive in epithelioid and some biphasic; reduced in sarcomatoid."
      },
      {
        "marker": "CD34",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — important to exclude SFT (CD34+), which is a critical differential in pleural spindle cell tumours."
      },
      {
        "marker": "STAT6 (nuclear)",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — excludes SFT (nuclear STAT6 is pathognomonic for NAB2::STAT6 fusion in SFT)."
      }
    ],
    "molecular": [
      {
        "alteration": "BAP1 mutation / loss",
        "notes": "~60% of mesothelioma. Germline BAP1 mutation (BAP1 tumour predisposition syndrome) associated with mesothelioma, uveal melanoma, RCC, and cutaneous melanocytic tumours."
      },
      {
        "alteration": "CDKN2A homozygous deletion (9p21)",
        "notes": "~70% of sarcomatoid and ~40% of epithelioid mesothelioma. Detected by FISH or MTAP IHC. Associated with shorter survival."
      },
      {
        "alteration": "NF2 mutation",
        "notes": "~40% of mesothelioma. Inactivation of Merlin (NF2 tumour suppressor). No approved targeted therapy currently."
      }
    ]
  },

  // ── Bone (additional) ────────────────────────────────────────────────────
  {
    "id": "bone-dedifferentiated-chondrosarcoma",
    "name": "Dedifferentiated Chondrosarcoma",
    "category": "Bone",
    "markers": [
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive in the low-grade cartilaginous (well-differentiated) component. The dedifferentiated component may be S100-negative."
      },
      {
        "marker": "SOX9",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Nuclear SOX9 in chondroid component — chondrogenic transcription factor. More sensitive than S100 for cartilaginous areas."
      },
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Positive in dedifferentiated (high-grade) component — non-specific mesenchymal marker."
      },
      {
        "marker": "IDH1 R132H (IHC)",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "high",
        "notes": "Positive in ~50% of central chondrosarcoma (IDH1 R132H-specific clone). IDH1/2 mutations are common in low-grade central chondrosarcoma and retained in the dedifferentiated component. IHC tests only R132H — IDH2 and non-R132H IDH1 require sequencing."
      },
      {
        "marker": "Keratins",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — excludes chondroblastic osteosarcoma with epithelial differentiation and metastatic carcinoma."
      },
      {
        "marker": "MDM2 / CDK4",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — important to exclude dedifferentiated liposarcoma (MDM2+/CDK4+) and atypical lipomatous tumour. MDM2/CDK4 negativity supports chondrosarcoma."
      }
    ],
    "molecular": [
      {
        "alteration": "IDH1 / IDH2 mutation",
        "notes": "~50% of central dedifferentiated chondrosarcoma. IDH mutations arise in the low-grade precursor and are retained in the dedifferentiated component — shared mutation confirms clonality of the biphasic tumour."
      },
      {
        "alteration": "TP53 / RB1 mutation",
        "notes": "Acquired in the dedifferentiated component as secondary alterations driving high-grade transformation."
      },
      {
        "alteration": "IDH inhibitors (ivosidenib/enasidenib)",
        "notes": "Investigated in IDH-mutant chondrosarcoma. Modest activity in early trials; ongoing studies."
      }
    ]
  },
  {
    "id": "bone-fibrous-dysplasia",
    "name": "Fibrous Dysplasia",
    "category": "Bone",
    "markers": [
      {
        "marker": "GNAS (IHC — not routinely available)",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "GNAS R201 mutations detectable by allele-specific IHC in some labs (anti-Gsα clone). Not widely available — molecular testing (PCR/sequencing) is standard for GNAS confirmation."
      },
      {
        "marker": "S100",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in fibrous stroma — helpful to exclude low-grade chondrosarcoma in difficult cases."
      },
      {
        "marker": "SOX9",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in fibrous dysplasia stroma. SOX9 positivity would favour chondroid differentiation."
      },
      {
        "marker": "SMA",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Focal SMA in spindle stromal cells — myofibroblastic component."
      },
      {
        "marker": "Ki-67",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Low proliferation index — helps distinguish from low-grade osteosarcoma (which may have higher Ki-67 and atypical mitoses)."
      }
    ],
    "molecular": [
      {
        "alteration": "GNAS R201C / R201H somatic mutation",
        "notes": "Present in ~95% of fibrous dysplasia (monostotic and polyostotic). Activating Gsα mutation → constitutive cAMP signalling. Postzygotic somatic mutation — not heritable. In McCune-Albright syndrome (polyostotic FD + café-au-lait spots + endocrinopathies), GNAS mutation detectable in multiple tissues."
      }
    ]
  },

  // ── Myeloid Neoplasms ────────────────────────────────────────────────────
  {
    "id": "myeloid-mds",
    "name": "Myelodysplastic Syndrome (MDS)",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD34",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Highlights blasts in bone marrow trephine. Normal BM: <5% CD34+ blasts. MDS-IB1: 5–9%; MDS-IB2: 10–19%. Cluster formation of CD34+ cells is abnormal (even if count is low)."
      },
      {
        "marker": "CD117 (c-KIT)",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Marks blasts and mast cells. Use with CD34 to enumerate blasts. CD34−/CD117+ blasts suggest basophilic or myelomonocytic differentiation."
      },
      {
        "marker": "MPO",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Variable in dysplastic myeloid cells. Abnormal MPO localisation (Auer rods, aberrant granulation) supports myelodysplasia."
      },
      {
        "marker": "CD71 / Glycophorin A",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Erythroid markers for assessment of erythroid dysplasia. Megaloblastic or multinucleated erythroblasts highlight the dysplastic erythroid lineage."
      },
      {
        "marker": "CD42b / CD61",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Megakaryocyte markers. Hypolobated, micromegakaryocytes (CD41/CD61+) are classic dysmegakaryopoiesis — best highlighted by immunostaining."
      },
      {
        "marker": "p53",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Aberrant/strong p53 in ≥1% of cells suggests TP53 mutation. Biallelic TP53 loss (p53 null pattern or >50% strong positivity) corresponds to MDS-biTP53 — poor prognosis; distinct WHO 2022 category."
      }
    ],
    "molecular": [
      {
        "alteration": "SF3B1 mutation",
        "notes": "~25% of MDS. Defines MDS-SF3B1 (ring sideroblasts ≥15% or ≥5% with SF3B1 mutation). Better prognosis. Luspatercept responsive."
      },
      {
        "alteration": "TP53 biallelic loss",
        "notes": "~5–10% of MDS. MDS-biTP53: very poor prognosis; hypomethylating agents have limited efficacy. p53 IHC ≥50% strong nuclear staining = surrogate for biallelic loss."
      },
      {
        "alteration": "TET2 / DNMT3A / ASXL1 mutations",
        "notes": "Common in MDS (and clonal haematopoiesis of indeterminate potential — CHIP). Not disease-defining alone; interpreted in clinical/morphological context."
      }
    ]
  },
  {
    "id": "myeloid-aml",
    "name": "AML with Defining Genetic Abnormalities",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD34",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Positive in most AML subtypes. CD34 negative in APL (separate entry), AML with monocytic differentiation, and some AML with CEBPA mutation. Blast enumeration in marrow trephine."
      },
      {
        "marker": "MPO",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "high",
        "notes": "Myeloperoxidase confirms myeloid lineage. ≥3% MPO+ blasts = myeloid lineage by ICC criteria. Cytochemical MPO is equivalent."
      },
      {
        "marker": "CD117 (c-KIT)",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Pan-myeloid progenitor marker. Positive in most AML."
      },
      {
        "marker": "CD33",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Pan-myeloid; target for gemtuzumab ozogamicin (anti-CD33 ADC) in CD33+ AML."
      },
      {
        "marker": "CD13",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Myeloid marker."
      },
      {
        "marker": "CD14 / CD64",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Monocytic markers — positive in AML-M4/M5 (monocytic differentiation). CD64 is the most sensitive monocytic marker."
      },
      {
        "marker": "NPM1 (cytoplasmic aberrant)",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Cytoplasmic NPM1 IHC (normally nuclear) detects NPM1 mutation (~30% of AML) — most common AML mutation. NPM1 mutant AML: usually CD34−, favourable prognosis when FLT3-ITD low/absent."
      },
      {
        "marker": "TdT",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in most AML — positive TdT raises concern for mixed phenotype acute leukaemia (MPAL) or blast crisis of CML."
      }
    ],
    "molecular": [
      {
        "alteration": "NPM1 mutation",
        "notes": "~30% of AML. Favourable prognosis (without FLT3-ITD). NPM1 mutations drive aberrant cytoplasmic localisation detectable by IHC. Venetoclax + azacitidine highly active."
      },
      {
        "alteration": "FLT3-ITD / TKD mutation",
        "notes": "~25–30% of AML. FLT3-ITD: adverse prognosis. Midostaurin (CPX-351) added to induction; gilteritinib for relapsed/refractory FLT3+ AML."
      },
      {
        "alteration": "CEBPA biallelic mutation",
        "notes": "~7% of AML. Favourable prognosis — defines AML with CEBPA biallelic mutation (WHO 2022)."
      },
      {
        "alteration": "RUNX1::RUNX1T1 t(8;21) / CBFB::MYH11 inv(16)",
        "notes": "Core binding factor (CBF) AML. Favourable prognosis; high CR rates with standard induction. Detect by FISH or RT-PCR."
      },
      {
        "alteration": "IDH1 / IDH2 mutation",
        "notes": "~15–20% of AML. Targetable: ivosidenib (IDH1) and enasidenib (IDH2) approved for relapsed/refractory IDH-mutant AML."
      }
    ]
  },
  {
    "id": "myeloid-cml",
    "name": "Chronic Myeloid Leukaemia (CML) — BCR::ABL1",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD34",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Increased CD34+ blasts in accelerated phase (10–19%) and blast crisis (≥20%). In chronic phase, CD34+ blasts are rare (<5%). Blast lineage in blast crisis determines immunophenotype."
      },
      {
        "marker": "MPO / CD33 / CD13",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Myeloid blast crisis: MPO+, CD33+, CD13+. Lymphoid blast crisis (TdT+, CD19/CD10+) occurs in ~25% — important distinction as it affects treatment (add lymphoid-directed therapy)."
      },
      {
        "marker": "TdT",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Positive in lymphoid blast crisis (~25% of CML blast crisis). TdT+ blasts + BCR::ABL1 = Ph+ ALL or CML in lymphoid blast crisis — clinical context distinguishes."
      },
      {
        "marker": "Basophil markers",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Peripheral blood basophilia (absolute basophil count ≥ 0.2×10⁹/L) is a characteristic feature of CML chronic phase. Not an IHC marker but a diagnostic clue."
      }
    ],
    "molecular": [
      {
        "alteration": "t(9;22)(q34;q11) BCR::ABL1 — Philadelphia chromosome",
        "notes": "Present in >99% of CML. Detectable by karyotype, FISH, or RT-PCR. BCR::ABL1 quantitative PCR (IS%) monitors TKI response and defines deep molecular response (MR4, MR4.5)."
      },
      {
        "alteration": "ABL1 kinase domain mutations (T315I, etc.)",
        "notes": "Acquired resistance to TKIs. T315I (gatekeeper) is resistant to all first/second-generation TKIs — sensitive to ponatinib and asciminib. BCR::ABL1 domain sequencing at TKI failure is mandatory."
      },
      {
        "alteration": "ASXL1 / IKZF1 / CDKN2A mutations",
        "notes": "Additional mutations acquired in accelerated phase/blast crisis. IKZF1 deletion associates with lymphoid blast crisis and adverse prognosis."
      }
    ]
  },
  {
    "id": "myeloid-mpn",
    "name": "Myeloproliferative Neoplasms (PV / ET / PMF) — JAK2/CALR/MPL",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD34 (bone marrow trephine)",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Identifies blast percentage — disease progression to blast phase (≥20% CD34+ blasts = blast phase MPN/AML). In pre-fibrotic PMF, CD34+ blasts are rare."
      },
      {
        "marker": "CD61 / CD41 (megakaryocytes)",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "CD61/CD41 staining of megakaryocytes highlights dysmorphic features: ET megakaryocytes are large with hyperlobated 'stag-horn' nuclei; PMF megakaryocytes are small/hypolobated with cloud-like nuclei. Essential for diagnosis and subtype classification."
      },
      {
        "marker": "Reticulin stain (MF grading)",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Not IHC but essential: reticulin fibrosis graded MF-0 to MF-3. MF-1 = early/prefibrotic PMF; MF-2/3 = overt fibrotic PMF. Distinguishes prefibrotic PMF (MF-0/1) from ET (MF-0)."
      },
      {
        "marker": "Tryptase",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Mast cell marker. Increased mast cells in PMF — particularly in fibrotic phase. Tryptase highlights mast cell aggregates distinct from CD34+ blasts."
      }
    ],
    "molecular": [
      {
        "alteration": "JAK2 V617F mutation",
        "notes": "PV: ~99%; ET: ~55%; PMF: ~65%. The founding mutation — drives constitutive JAK-STAT signalling. Ruxolitinib (JAK1/2 inhibitor) approved for PV and intermediate/high-risk PMF."
      },
      {
        "alteration": "CALR exon 9 insertion/deletion",
        "notes": "ET: ~25%; PMF: ~25%. In JAK2-wildtype MPN. Type 1 CALR (52bp del) more common in PMF and associated with lower thrombosis risk; Type 2 CALR (5bp ins) more common in ET."
      },
      {
        "alteration": "MPL W515L/K mutation",
        "notes": "ET: ~5%; PMF: ~8%. TPO receptor mutation — activates JAK-STAT. In triple-negative (JAK2/CALR/MPL-wildtype) MPN, exclude reactive conditions and consider NGS."
      },
      {
        "alteration": "JAK2 exon 12 mutation",
        "notes": "PV-specific — present in JAK2 V617F-negative PV (~3%). Drives erythrocytosis only (unlike V617F which also causes thrombocytosis)."
      }
    ]
  },

  // ── Intestinal T-Cell Lymphomas ────────────────────────────────────────────
  {
    "id": "lymphoma-eatl",
    "name": "Enteropathy-Associated T-Cell Lymphoma (EATL) / MEITL",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD3",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Positive cytoplasmic CD3 in both EATL and MEITL. T-lineage confirmed."
      },
      {
        "marker": "CD7",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive in both types — uncommon loss in intestinal T-cell lymphomas."
      },
      {
        "marker": "CD8",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "EATL: usually CD4−/CD8−. MEITL: usually CD8+ (strong, uniform). CD8 expression helps distinguish the two types."
      },
      {
        "marker": "CD4",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in both EATL and MEITL."
      },
      {
        "marker": "CD56",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "MEITL: CD56 strongly positive (~80%) — key differentiating feature from EATL (CD56 usually negative/weak). CD56 positivity in an intestinal T-cell lymphoma favours MEITL."
      },
      {
        "marker": "TCRβ / TCRγδ",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "EATL: αβ T-cell lineage (TCRβF1+). MEITL: γδ T-cell lineage (TCRγδ+, TCRβF1−) in ~30–50%. Use both TCRβF1 and anti-γδ TCR."
      },
      {
        "marker": "CD103",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Intraepithelial lymphocyte marker — positive in both types. Confirms mucosal/intraepithelial phenotype."
      },
      {
        "marker": "CD30",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Variably positive in EATL; usually negative in MEITL."
      },
      {
        "marker": "MYC IHC / MATK (Hematopoietic cell kinase)",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "high",
        "notes": "MATK (CSK homologous kinase) is strongly expressed in MEITL — a useful specific marker. MYC overexpression also common in MEITL."
      }
    ],
    "molecular": [
      {
        "alteration": "EATL: JAK1 / STAT3 mutations; 9q31.3 gains",
        "notes": "EATL (previously type I) is associated with coeliac disease and HLA-DQ2/DQ8. JAK-STAT pathway mutations (~90%) are targetable. Aggressive — 5-year OS ~20%."
      },
      {
        "alteration": "MEITL: SETD2 / TP53 / JAK-STAT mutations; 8q24 (MYC) gains",
        "notes": "MEITL (previously type II) is not coeliac-associated. SETD2 loss (H3K36me3 loss by IHC) in ~90%. Extremely aggressive — 5-year OS <5%."
      }
    ]
  },

  // ── Testicular Sex Cord-Stromal ───────────────────────────────────────────
  {
    "id": "testis-leydig-sertoli",
    "name": "Leydig Cell Tumour / Sertoli Cell Tumour",
    "category": "Germ Cell",
    "markers": [
      {
        "marker": "Inhibin-α",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "high",
        "notes": "The most sensitive and specific marker for sex cord-stromal tumours. Strongly positive in Leydig and Sertoli cell tumours. Negative in germ cell tumours and carcinomas — key panel anchor."
      },
      {
        "marker": "Calretinin",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Positive in Leydig and Sertoli cell tumours. Use with Inhibin."
      },
      {
        "marker": "SF-1 (NR5A1)",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "high",
        "notes": "Steroidogenic factor 1 — nuclear transcription factor in sex cord-stromal tumours. More sensitive than inhibin in some series. Strong nuclear staining."
      },
      {
        "marker": "MART-1 / Melan-A",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive in steroidogenic (Leydig) cells — reflects steroidogenic pathway. Important caveat: also positive in melanoma and adrenocortical tumours. Interpret with inhibin and SF-1."
      },
      {
        "marker": "CD56",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Variably positive."
      },
      {
        "marker": "SALL4",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — essential to exclude germ cell tumour (SALL4 is strongly positive in nearly all GCTs)."
      },
      {
        "marker": "OCT3/4",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — excludes seminoma and embryonal carcinoma."
      },
      {
        "marker": "AE1/AE3 (keratins)",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Sertoli cell tumours may be focally keratin-positive (especially large cell calcifying Sertoli cell tumour). Leydig cell tumours are usually keratin-negative."
      }
    ],
    "molecular": [
      {
        "alteration": "CTNNB1 (β-catenin) mutation — Sertoli cell tumour",
        "notes": "Nuclear β-catenin in ~30% of Sertoli cell tumours. Large cell calcifying Sertoli cell tumour is associated with Peutz-Jeghers (STK11) and Carney complex (PRKAR1A)."
      },
      {
        "alteration": "DICER1 mutation",
        "notes": "Sertoli-Leydig cell tumours of the ovary (Sertoli-Leydig) — >60% have DICER1 somatic mutations; ~10% germline (DICER1 syndrome). Less data for pure testicular Sertoli cell tumours."
      }
    ]
  },

  // ── Paediatric / Retinal ─────────────────────────────────────────────────
  {
    "id": "retinoblastoma",
    "name": "Retinoblastoma",
    "category": "Pediatric",
    "markers": [
      {
        "marker": "Synaptophysin",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive — reflects neuronal/photoreceptor differentiation. Consistent neuroendocrine marker."
      },
      {
        "marker": "NSE (Neuron-specific enolase)",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Positive; confirms neuronal lineage."
      },
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive in basophilic tumour cells."
      },
      {
        "marker": "Rb protein (RB1)",
        "role": "loss",
        "sensitivity": "~95%",
        "specificity": "high",
        "notes": "Loss of Rb nuclear expression — pathognomonic. Absent nuclear Rb staining in tumour cells (with positive internal controls in stromal cells) confirms RB1 biallelic inactivation. Required for definitive molecular diagnosis on enucleation specimen."
      },
      {
        "marker": "p53",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Variable — p53 mutations can occur as secondary alterations in treatment-resistant disease."
      },
      {
        "marker": "Rosette architecture (H&E) / Photoreceptor markers",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Flexner-Wintersteiner rosettes (photoreceptor differentiation) and Homer-Wright rosettes (neuroblastic differentiation) are histomorphologic features. Cone arrestin and recoverin IHC highlight photoreceptor differentiation."
      }
    ],
    "molecular": [
      {
        "alteration": "RB1 biallelic inactivation",
        "notes": "~95% of retinoblastoma. Heritable (germline, ~40%) or somatic (non-heritable, ~60%). Germline RB1 mutation: risk of bilateral/multifocal Rb, osteosarcoma, and other malignancies. Germline testing is mandatory."
      },
      {
        "alteration": "MYCN amplification (RB1-wildtype Rb)",
        "notes": "~2% of retinoblastoma — MYCN amplification in absence of RB1 mutation. Characteristically unilateral, non-heritable, diffuse infiltrating pattern. Highly aggressive."
      }
    ]
  },
  {
    "id": "germ-cell-immature-teratoma",
    "name": "Immature Teratoma (Ovarian / Testicular)",
    "category": "Germ Cell",
    "markers": [
      {
        "marker": "SALL4",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Positive in primitive immature neuroepithelial component — confirms GCT lineage. Less consistently positive than in other GCTs."
      },
      {
        "marker": "SOX2",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Strongly positive in immature neuroectodermal (neural tube-like) tubules — the key component used for grading. Sox2 highlights immature neural tissue within the teratoma."
      },
      {
        "marker": "GFAP",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Positive in glial/astrocytic differentiation within immature neural areas."
      },
      {
        "marker": "Synaptophysin / NSE",
        "role": "positive",
        "sensitivity": "~75%",
        "specificity": "—",
        "notes": "Neuronal markers in immature neural component."
      },
      {
        "marker": "OCT3/4",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in mature and immature teratoma elements. OCT3/4 positivity would indicate a concurrent germ cell tumour component (seminoma, embryonal carcinoma)."
      },
      {
        "marker": "AFP",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Focal AFP in yolk sac-like elements (Schiller-Duval bodies) if present. Significant serum AFP elevation raises concern for admixed yolk sac tumour component."
      },
      {
        "marker": "CK7 / CK5/6 / Thyroglobulin",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Site-specific markers positive in mature somatic elements (squamous: CK5/6; glandular: CK7; thyroid tissue: thyroglobulin). Used to characterise components, not for diagnosis per se."
      }
    ],
    "molecular": [
      {
        "alteration": "Isochromosome 12p [i(12p)]",
        "notes": "Present in gonadal (testicular) immature teratoma — same as other testicular GCTs. Absent in ovarian immature teratoma (ovarian GCTs lack i(12p)). Can distinguish gonadal vs extragonadal/ovarian origin."
      },
      {
        "alteration": "Grading (fraction of immature neural tissue)",
        "notes": "Graded 1–3 by proportion of immature neuroepithelium per low-power field. Grade 3 (>3 low-power fields) associated with higher recurrence risk. SOX2 IHC quantifies immature neural component more objectively than H&E alone."
      }
    ]
  },

  // ── Head & Neck — additional WHO 5th edition entities ─────────────────────
  {
    "id": "sinonasal-itac",
    "name": "Sinonasal Intestinal-Type Adenocarcinoma (ITAC)",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "CDX2",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Strongly and diffusely positive — intestinal transcription factor. The most sensitive marker for ITAC. Also positive in metastatic colorectal carcinoma; site correlation is essential."
      },
      {
        "marker": "CK20",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Positive. CK7−/CK20+ pattern (colonic subtype) or CK7+/CK20+ (papillary subtype). Profile mirrors colorectal carcinoma — IHC cannot distinguish ITAC from metastatic CRC."
      },
      {
        "marker": "CK7",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variable by subtype: papillary ITAC tends to be CK7+/CK20+; colonic ITAC tends to be CK7−/CK20+."
      },
      {
        "marker": "Villin",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Brush border protein; positive in intestinal differentiation. Supports enteric phenotype alongside CDX2."
      },
      {
        "marker": "MUC2",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Goblet cell mucin; positive in mucinous and mixed subtypes."
      },
      {
        "marker": "TTF-1",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — helps exclude metastatic lung adenocarcinoma and thyroid carcinoma."
      },
      {
        "marker": "PAX8",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — excludes thyroid, renal, and Müllerian primaries."
      },
      {
        "marker": "p53",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Aberrant p53 in high-grade subtypes. Papillary ITAC (low-grade) may show wildtype pattern."
      }
    ],
    "molecular": [
      {
        "alteration": "KRAS / BRAF mutations",
        "notes": "KRAS mutation in ~30%; BRAF V600E in ~10% of ITAC — same landscape as colorectal carcinoma. Supports the intestinal metaplasia–adenoma–carcinoma pathway."
      },
      {
        "alteration": "Occupational exposure: wood dust / leather dust",
        "notes": "Strong occupational association. Hardwood dust (furniture makers) is the strongest known carcinogen for sinonasal adenocarcinoma. Classified as IARC Group 1. Not detectable by IHC but essential clinical context."
      }
    ]
  },
  {
    "id": "sinonasal-smarca4-deficient",
    "name": "SMARCA4-Deficient Sinonasal Carcinoma",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "SMARCA4 (BRG1)",
        "role": "loss",
        "sensitivity": "~99%",
        "specificity": "high",
        "notes": "Loss of SMARCA4/BRG1 nuclear expression defines this entity. Absent nuclear staining in tumour cells with retained staining in internal controls (endothelium, lymphocytes). Clone EPNCIR111A or equivalent."
      },
      {
        "marker": "SMARCB1 (INI1)",
        "role": "retained",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Retained SMARCB1 is key — distinguishes SMARCA4-deficient carcinoma from SMARCB1-deficient carcinoma (separate entity). Both are SWI/SNF complex-deficient but via different subunits."
      },
      {
        "marker": "SOX2",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Frequently overexpressed — reflects dedifferentiated/stem-like phenotype."
      },
      {
        "marker": "CD34",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Focal CD34 positivity in a subset — unusual for carcinoma and can cause diagnostic confusion with sarcoma or SFT."
      },
      {
        "marker": "CK (AE1/AE3)",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Focal keratin positivity confirms carcinomatous lineage; may be weak or negative in poorly differentiated areas."
      },
      {
        "marker": "p40 / p63",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Typically negative — lacks squamous differentiation. Distinguishes from SMARCB1-deficient basaloid SCC (which may be p40 variable)."
      },
      {
        "marker": "Synaptophysin / CD56",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Focal NE marker expression in a subset — can mimic NEC. Ki-67 and context help distinguish."
      }
    ],
    "molecular": [
      {
        "alteration": "SMARCA4 biallelic inactivation",
        "notes": "Mutation (truncating or missense) + LOH or homozygous deletion. Very aggressive — median survival <12 months. No approved targeted therapy; clinical trials exploring EZH2 inhibitors (synthetic lethality with SWI/SNF loss)."
      }
    ]
  },
  {
    "id": "sinonasal-hmsc",
    "name": "HPV-Related Multiphenotypic Sinonasal Carcinoma (HMSC)",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "p16",
        "role": "positive",
        "sensitivity": "~100%",
        "specificity": "—",
        "notes": "Diffuse block-positive — reflects high-risk HPV (predominantly HPV33, not HPV16 as in oropharynx). p16 positivity is required for diagnosis."
      },
      {
        "marker": "HPV ISH (high-risk)",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "high",
        "notes": "RNA ISH or DNA ISH confirms transcriptionally active HPV. HPV33 is the predominant type — distinguish from HPV16-driven oropharyngeal SCC."
      },
      {
        "marker": "p63 / p40",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Positive in squamous and myoepithelial components. The multiphenotypic nature — squamous + glandular + myoepithelial differentiation in one tumour — is the defining feature."
      },
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Positive in myoepithelial areas."
      },
      {
        "marker": "SMA",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variably positive in myoepithelial component."
      },
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive in glandular/ductal areas."
      },
      {
        "marker": "GFAP",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Focal GFAP in myoepithelial component — an unusual feature that raises suspicion for HMSC in an HPV+ sinonasal tumour."
      }
    ],
    "molecular": [
      {
        "alteration": "High-risk HPV — predominantly HPV33",
        "notes": "HPV33 predominates in HMSC (vs HPV16 in oropharyngeal SCC). Indolent behaviour despite histologic complexity and locally aggressive appearance. Regional metastasis occurs but distant metastasis is rare. HPV typing has clinical relevance."
      }
    ]
  },
  {
    "id": "sinonasal-teratocarcinosarcoma",
    "name": "Sinonasal Teratocarcinosarcoma",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "AFP (Alpha-fetoprotein)",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Positive in fetal-type clear cell glandular component. AFP expression is a hallmark of the teratoid elements. Serum AFP may be elevated."
      },
      {
        "marker": "Synaptophysin / Chromogranin",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive in neuroepithelial / primitive neuroectodermal component."
      },
      {
        "marker": "GFAP",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Positive in glial (astrocytic) elements — key component of the teratoid areas."
      },
      {
        "marker": "CK (AE1/AE3, CK7)",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive in epithelial (carcinomatous) component — squamoid, glandular, or fetal-type clear cells."
      },
      {
        "marker": "Desmin / SMA / Myogenin",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Positive in rhabdomyoblastic or smooth muscle (sarcomatous) elements."
      },
      {
        "marker": "S100 / SOX10",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Positive in cartilaginous or neural elements."
      },
      {
        "marker": "OCT3/4 / SALL4",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — distinguishes from true GCT/germinoma. Teratocarcinosarcoma is not a gonadal-type GCT and lacks stem cell/GCT markers."
      }
    ],
    "molecular": [
      {
        "alteration": "SMARCA4 alteration (subset)",
        "notes": "A subset of sinonasal teratocarcinosarcomas harbour SMARCA4 mutations. Highly aggressive — median survival ~18 months. Wide local excision + adjuvant therapy; no standard protocol."
      }
    ]
  },
  {
    "id": "salivary-carcinoma-ex-pa",
    "name": "Carcinoma ex Pleomorphic Adenoma (Salivary Gland)",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "Ki-67",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Elevated in malignant component vs low in benign PA (usually <5%). Ki-67 >10% in a PA-like tumour is a red flag for malignant transformation. Spatial heterogeneity — sample both PA and carcinomatous areas."
      },
      {
        "marker": "p53",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Aberrant p53 (strong diffuse or null) in malignant component. PA itself usually shows wildtype p53. Concordant p53 aberrancy supports malignant transformation."
      },
      {
        "marker": "HER2",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "HER2 amplification in ~30% when malignant component is salivary duct carcinoma-type (the most common carcinoma ex PA). Mandatory HER2 IHC/ISH — trastuzumab-based therapy applicable."
      },
      {
        "marker": "AR (Androgen Receptor)",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Positive in SDC-type malignant component. AR+ in carcinoma ex PA with SDC features."
      },
      {
        "marker": "GATA3",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Positive in SDC-type component."
      },
      {
        "marker": "S100 / SMA / GFAP",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Retained in the residual benign PA component (myoepithelial + stromal elements). Identifying these areas confirms the PA background — necessary for diagnosis."
      },
      {
        "marker": "p63 / CK5/6",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Positive in squamous component if malignant component is adenosquamous or epidermoid type."
      }
    ],
    "molecular": [
      {
        "alteration": "PLAG1 or HMGA2 rearrangement (PA background)",
        "notes": "PA typically carries PLAG1::CTNNB1 or HMGA2 rearrangements — detectable by FISH. Carcinoma ex PA retains these in the PA component and acquires additional somatic mutations in the malignant component."
      },
      {
        "alteration": "ERBB2 amplification / TP53 mutation (malignant component)",
        "notes": "Acquired in the malignant transformation step. TP53 mutation is the most common driver of malignant transformation. HER2 amplification enriched in SDC-type malignant component."
      }
    ]
  },
  {
    "id": "salivary-microsecretory-adenocarcinoma",
    "name": "Microsecretory Adenocarcinoma (Salivary Gland)",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Strongly and diffusely positive in tumour cells. Combined S100+/SOX10+ is the most characteristic IHC profile."
      },
      {
        "marker": "SOX10",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Strongly positive — reflects neural crest/myoepithelial lineage affinity."
      },
      {
        "marker": "DOG1",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive — an unusual finding in a salivary carcinoma (DOG1 typically marks GIST and acinic cell carcinoma). DOG1 positivity in an S100+/SOX10+ salivary tumour with microcystic architecture should prompt consideration of microsecretory adenocarcinoma."
      },
      {
        "marker": "Mammoglobin",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Focal/variable positivity."
      },
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive in ductal/luminal cells."
      },
      {
        "marker": "p63 / p40",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — no myoepithelial layer around acini (unlike secretory carcinoma and acinic cell carcinoma). Absence of myoepithelial cells is a key diagnostic feature."
      },
      {
        "marker": "GATA3",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — helps distinguish from secretory carcinoma (GATA3+ in subset) and salivary duct carcinoma."
      }
    ],
    "molecular": [
      {
        "alteration": "MEF2C::SS18 fusion",
        "notes": "Defining molecular event, detectable by RNA sequencing or FISH. Present in ~90% of microsecretory adenocarcinoma. The fusion is unique to this entity — its identification confirms the diagnosis. Indolent behaviour; rarely metastasises."
      }
    ]
  },
  {
    "id": "salivary-sclerosing-microcystic-adenocarcinoma",
    "name": "Sclerosing Microcystic Adenocarcinoma (Salivary Gland)",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffusely positive in ductal elements."
      },
      {
        "marker": "S100",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variably positive."
      },
      {
        "marker": "SOX10",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variably positive."
      },
      {
        "marker": "p63",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Focal p63 in outer abluminal cells — minimal myoepithelial layer. Much less than in pleomorphic adenoma or myoepithelioma."
      },
      {
        "marker": "CEA",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Positive in luminal cells. Distinguishes from benign sclerosing lesions."
      },
      {
        "marker": "Ki-67",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Low proliferation index — consistent with indolent low-grade behaviour."
      }
    ],
    "molecular": [
      {
        "alteration": "No defining recurrent fusion identified to date",
        "notes": "New entity in WHO 5th edition (2022). No pathognomonic molecular marker yet. Diagnosis is based on morphology (syringoma-like infiltrative microcystic pattern in a sclerotic stroma) plus IHC profile. Indolent behaviour; perineural invasion common despite low grade."
      }
    ]
  },
  {
    "id": "oral-scc",
    "name": "Oral Cavity Squamous Cell Carcinoma (HPV-independent)",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "p40",
        "role": "positive",
        "sensitivity": "~98%",
        "specificity": "—",
        "notes": "Confirms squamous lineage. Preferred over p63 for specificity."
      },
      {
        "marker": "CK5/6",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive; squamous marker."
      },
      {
        "marker": "p16",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative or non-block patchy — the defining contrast with HPV-associated oropharyngeal SCC. The oral cavity (floor of mouth, anterior tongue, buccal mucosa, gingiva, hard palate) is predominantly a HPV-independent site. Block-positive p16 in oral SCC does NOT carry the same prognostic significance as in oropharyngeal SCC."
      },
      {
        "marker": "p53",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Aberrant p53 in ~50% — reflects TP53 mutation, characteristic of alcohol/tobacco-driven carcinogenesis."
      },
      {
        "marker": "PD-L1 (CPS)",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "PD-L1 CPS ≥1 required for pembrolizumab in recurrent/metastatic oral SCC (KEYNOTE-048). Use 22C3 clone."
      }
    ],
    "molecular": [
      {
        "alteration": "TP53 mutation",
        "notes": "~60–70% of oral SCC. The most common mutation; associated with tobacco/alcohol exposure. HPV+ oral SCC (minority, ~15–25%) tends to be TP53 wildtype."
      },
      {
        "alteration": "CDKN2A / PIK3CA / HRAS mutations",
        "notes": "Common co-alterations. HRAS mutations are enriched in oral SCC compared to oropharyngeal SCC. No approved targeted therapies for these mutations currently."
      },
      {
        "alteration": "Copy number alterations: 3q26 (PIK3CA/SOX2) amplification",
        "notes": "Recurrent amplification in oral SCC. 3q amplification is a hallmark of tobacco-related head and neck SCC."
      }
    ]
  },
  {
    "id": "laryngeal-scc",
    "name": "Laryngeal Squamous Cell Carcinoma",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "p40",
        "role": "positive",
        "sensitivity": "~98%",
        "specificity": "—",
        "notes": "Confirms squamous lineage. Essential when tumour is poorly differentiated or shows unusual morphology."
      },
      {
        "marker": "CK5/6",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive; squamous marker."
      },
      {
        "marker": "p16",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "HPV is present in only ~5% of laryngeal SCC (much lower than oropharynx ~70%). p16 is therefore a poor surrogate for HPV at this site — a p16-positive laryngeal SCC does NOT have the same favourable prognosis as p16-positive oropharyngeal SCC. HPV testing by ISH is necessary if HPV status is clinically relevant."
      },
      {
        "marker": "p53",
        "role": "variable",
        "sensitivity": "~55%",
        "specificity": "—",
        "notes": "Aberrant p53 in a majority — reflects TP53 mutation from tobacco carcinogenesis. More common in glottic and supraglottic SCC."
      },
      {
        "marker": "PD-L1 (CPS / TPS)",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "PD-L1 assessment for immunotherapy eligibility in recurrent/metastatic disease (pembrolizumab, nivolumab)."
      }
    ],
    "molecular": [
      {
        "alteration": "TP53 mutation",
        "notes": "~50–60% of laryngeal SCC. Tobacco-related carcinogenesis. Glottic SCC (vocal cord) is the most common subtype and has the best prognosis due to early hoarseness presentation."
      },
      {
        "alteration": "CDKN2A deletion / PIK3CA mutation",
        "notes": "Common co-alterations. Similar landscape to other tobacco-associated HNSCC."
      },
      {
        "alteration": "FGFR3 mutation (subset)",
        "notes": "Enriched in laryngeal SCC compared to oropharyngeal. FGFR-targeted therapy under investigation."
      }
    ]
  },
  {
    "id": "hn-mucosal-melanoma",
    "name": "Mucosal Melanoma (Head and Neck)",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Strongly positive — most sensitive melanocytic marker. Essential first-line marker."
      },
      {
        "marker": "SOX10",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Nuclear positive; more specific than S100 for melanocytic lineage. Particularly useful in desmoplastic or spindled variants."
      },
      {
        "marker": "HMB45",
        "role": "variable",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Variable — less consistently positive in mucosal melanoma than in cutaneous melanoma. Negative HMB45 does not exclude the diagnosis."
      },
      {
        "marker": "Melan-A / MART-1",
        "role": "variable",
        "sensitivity": "~65%",
        "specificity": "—",
        "notes": "Variable; may be lost in poorly differentiated or desmoplastic areas."
      },
      {
        "marker": "EBER (ISH)",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — not EBV-associated. Distinguishes from EBV-associated undifferentiated nasopharyngeal carcinoma in the nasopharyngeal location."
      },
      {
        "marker": "CK (AE1/AE3)",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — critical to exclude poorly differentiated carcinoma or NPC. Pitfall: rare focal keratin positivity in melanoma (do not rely on single marker)."
      },
      {
        "marker": "KIT (CD117)",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Positive by IHC in ~50% of mucosal melanoma, but KIT mutation is present in only ~15–20%. IHC overexpression does not predict mutation — sequencing required for imatinib eligibility."
      },
      {
        "marker": "BRAF V600E (IHC)",
        "role": "variable",
        "sensitivity": "~10%",
        "specificity": "—",
        "notes": "Positive in only ~10–15% of mucosal melanoma — much lower than cutaneous (~50%). Do not assume BRAF V600E positivity. BRAF IHC is useful as a screen; confirm with sequencing."
      }
    ],
    "molecular": [
      {
        "alteration": "KIT mutation (exons 9, 11, 13, 17)",
        "notes": "~15–20% of mucosal melanoma. Imatinib and other KIT inhibitors show activity specifically in KIT-mutant mucosal melanoma (not KIT-amplified without mutation). Mutation sequencing is mandatory — IHC positivity alone is insufficient."
      },
      {
        "alteration": "NRAS mutation",
        "notes": "~20% of mucosal melanoma — higher rate than in cutaneous melanoma (~15%). MEK inhibitors (trametinib) under investigation."
      },
      {
        "alteration": "BRAF V600E mutation",
        "notes": "~10–15% — much lower than cutaneous (~50%). When present, BRAF/MEK inhibitors (dabrafenib + trametinib) are applicable. Always test for BRAF in mucosal melanoma despite lower prevalence."
      },
      {
        "alteration": "SF3B1 mutation",
        "notes": "~10% of mucosal melanoma; more common in uveal and mucosal subtypes than cutaneous. No approved targeted therapy."
      }
    ]
  },
  {
    "id": "hn-paraganglioma",
    "name": "Head and Neck Paraganglioma",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "Synaptophysin",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Strongly positive in chief cells — primary NE marker. Zellballen architecture (nests of chief cells surrounded by sustentacular cells) is characteristic."
      },
      {
        "marker": "Chromogranin A",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive in chief cells. Serum CgA may be elevated in functional/secretory tumours."
      },
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Positive in sustentacular (supporting) cells at the periphery of zellballen — the classic 'sustentacular cell pattern'. S100+ sustentacular cells are reduced or absent in malignant paraganglioma."
      },
      {
        "marker": "SDHB (IHC)",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Loss of SDHB cytoplasmic granular staining indicates SDHx mutation (any subunit — SDHA, SDHB, SDHC, or SDHD) — not just SDHB specifically. SDHB IHC is used as a pan-SDH deficiency screen. ~30–40% of head and neck paraganglioma are SDHx-mutant (higher than adrenal pheo). Loss requires germline testing."
      },
      {
        "marker": "SDHA (IHC)",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Loss of SDHA specifically indicates SDHA mutation (SDHB IHC is retained in SDHA-mutant tumours). Use both SDHB and SDHA IHC: SDHB loss + SDHA retained → SDHB/C/D mutation; SDHB loss + SDHA loss → SDHA mutation."
      },
      {
        "marker": "GATA3",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Strongly positive in chief cells — a useful marker to confirm paraganglioma phenotype, especially in metastatic deposits."
      },
      {
        "marker": "Tyrosine hydroxylase",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Catecholamine synthesis enzyme; marks catecholamine-producing cells. Positive in adrenergic tumours."
      },
      {
        "marker": "CK (AE1/AE3)",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — critical to distinguish from medullary thyroid carcinoma (CK+, calcitonin+, CEA+) and neuroendocrine carcinoma (CK+)."
      }
    ],
    "molecular": [
      {
        "alteration": "SDHx mutations (SDHB, SDHC, SDHD, SDHA)",
        "notes": "~30–40% of head and neck paraganglioma have germline SDHx mutation — much higher than adrenal pheochromocytoma (~10–15%). SDHD and SDHC are enriched in H&N location. Germline testing is recommended in all H&N paraganglioma patients. SDHx-mutant paragangliomas have higher metastatic risk."
      },
      {
        "alteration": "VHL / RET / NF1 mutations",
        "notes": "Less common in H&N location than adrenal pheochromocytoma. RET mutations (MEN2) and VHL mutations are associated with bilateral/multifocal disease."
      }
    ]
  },
  {
    "id": "nasopharynx-lgnppa",
    "name": "Low-Grade Nasopharyngeal Papillary Adenocarcinoma (LGNPPA)",
    "category": "Head & Neck",
    "markers": [
      {
        "marker": "TTF-1",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive — a key diagnostic marker and a major diagnostic pitfall. TTF-1 positivity in a nasopharyngeal papillary tumour raises concern for metastatic thyroid carcinoma or lung adenocarcinoma. LGNPPA is TTF-1+ but thyroglobulin-negative and EBER-negative, distinguishing it from both mimics."
      },
      {
        "marker": "CK7",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffusely positive."
      },
      {
        "marker": "EBER (ISH)",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — essential distinction from nasopharyngeal carcinoma (EBV+). EBV negativity is a required diagnostic feature of LGNPPA."
      },
      {
        "marker": "Thyroglobulin",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — distinguishes from metastatic papillary thyroid carcinoma (TTF-1+ and thyroglobulin+). This is the most important differential to exclude."
      },
      {
        "marker": "PAX8",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Variably positive. PAX8+/thyroglobulin− is compatible with LGNPPA but also with metastatic renal cell carcinoma or Müllerian primary — correlate with imaging."
      },
      {
        "marker": "Napsin-A",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — helps exclude metastatic lung adenocarcinoma (TTF-1+/Napsin-A+)."
      },
      {
        "marker": "p63 / p40",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — excludes squamous differentiation and NPC."
      }
    ],
    "molecular": [
      {
        "alteration": "No defining recurrent alteration identified",
        "notes": "Rare entity. BRAF V600E rarely reported. The diagnosis is based on location, morphology (papillary architecture, psammoma bodies), and IHC profile. Indolent behaviour — local excision usually curative."
      }
    ]
  },

  // ── Soft tissue — additional WHO 5th edition entities ─────────────────────
  {
    "id": "sarcoma-infantile-fibrosarcoma",
    "name": "Infantile Fibrosarcoma (Congenital Fibrosarcoma)",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "Pan-TRK (IHC)",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "high",
        "notes": "Cytoplasmic staining with pan-TRK antibody (clone EPR17341) is a reliable surrogate for ETV6::NTRK3 fusion. Positive IHC mandates confirmatory FISH or RNA sequencing. Negative pan-TRK does not exclude the diagnosis — test for NTRK3 by other methods if clinical suspicion is high."
      },
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffusely positive — non-specific mesenchymal marker."
      },
      {
        "marker": "SMA",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Focal SMA in a minority. Not a reliable diagnostic marker."
      },
      {
        "marker": "Desmin",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — excludes rhabdomyosarcoma."
      },
      {
        "marker": "S100",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — excludes MPNST and nerve sheath tumours."
      },
      {
        "marker": "CD34",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — excludes SFT and DFSP."
      },
      {
        "marker": "Ki-67",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "High proliferation index — consistent with aggressive morphology but paradoxically excellent prognosis in infants."
      }
    ],
    "molecular": [
      {
        "alteration": "ETV6::NTRK3 fusion — t(12;15)(p13;q25)",
        "notes": "Present in ~90% of infantile fibrosarcoma. Pan-TRK IHC is the screening tool; confirm with FISH or RNA sequencing. Larotrectinib and entrectinib (NTRK inhibitors) are FDA-approved and produce high response rates, transforming management — many patients avoid amputation."
      },
      {
        "alteration": "NTRK3 other fusions (non-ETV6 partners)",
        "notes": "~5% of cases. Pan-TRK IHC may still be positive. RNA sequencing captures all NTRK fusions."
      }
    ]
  },
  {
    "id": "sarcoma-spindle-cell-rms",
    "name": "Spindle Cell / Sclerosing Rhabdomyosarcoma (MYOD1-mutant)",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "Desmin",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive — skeletal muscle lineage marker. Most sensitive muscle marker in RMS."
      },
      {
        "marker": "MyoD1",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Nuclear positivity confirms myogenic differentiation. MyoD1 IHC detects the protein, not the mutation — MYOD1 L122R mutation requires sequencing."
      },
      {
        "marker": "Myogenin",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Focal/variable — less consistently positive than in alveolar RMS (where Myogenin is diffuse strong). Focal Myogenin in a spindle cell sarcoma should prompt MYOD1 sequencing."
      },
      {
        "marker": "SMA",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Focal SMA in a subset — does not exclude RMS."
      },
      {
        "marker": "S100",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — excludes MPNST and spindle cell melanoma."
      },
      {
        "marker": "CK (AE1/AE3)",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — excludes spindle cell carcinoma and synovial sarcoma."
      }
    ],
    "molecular": [
      {
        "alteration": "MYOD1 L122R hotspot mutation",
        "notes": "Defines the most aggressive adult-type spindle cell / sclerosing RMS. Associated with PIK3CA co-mutation. Very poor prognosis — does not respond well to standard RMS chemotherapy. Distinct from congenital spindle cell RMS (VGLL2/NCOA2 rearrangements, better prognosis) and TFCP2-rearranged intraosseous variant."
      },
      {
        "alteration": "VGLL2 / NCOA2 / CITED2 rearrangements — congenital variant",
        "notes": "Congenital spindle cell RMS in infants/neonates. Better prognosis than MYOD1-mutant type. Distinct molecular subtype — not MYOD1-mutant."
      }
    ]
  },
  {
    "id": "sarcoma-pleomorphic-rms",
    "name": "Pleomorphic Rhabdomyosarcoma",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "Desmin",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive — muscle lineage. Most sensitive marker. Extent of positivity varies; confirm with Myogenin or MyoD1."
      },
      {
        "marker": "Myogenin",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "high",
        "notes": "Focal positivity — less diffuse than alveolar RMS. Even focal Myogenin nuclear positivity in a pleomorphic sarcoma is highly specific for RMS lineage. Distinguishes pleomorphic RMS from UPS/MFH."
      },
      {
        "marker": "MyoD1",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variable nuclear positivity. Use alongside Myogenin."
      },
      {
        "marker": "SMA",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Focal SMA can occur — does not exclude the diagnosis."
      },
      {
        "marker": "CK (AE1/AE3)",
        "role": "variable",
        "sensitivity": "~20%",
        "specificity": "—",
        "notes": "Focal keratin positivity in ~20% — a potential diagnostic pitfall. Can mimic sarcomatoid carcinoma. Confirm muscle lineage with Myogenin/MyoD1."
      },
      {
        "marker": "S100",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — excludes melanoma and MPNST in the differential."
      }
    ],
    "molecular": [
      {
        "alteration": "Complex karyotype — no characteristic fusion",
        "notes": "Adult-onset; typically extremity location. No PAX3/7::FOXO1 fusion (unlike ARMS). Complex genomic alterations including TP53, RB1. Very aggressive — poor prognosis despite multimodal therapy."
      }
    ]
  },
  {
    "id": "sarcoma-melanotic-nerve-sheath",
    "name": "Malignant Melanotic Nerve Sheath Tumour",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Strongly and diffusely positive — shared with schwannoma. S100 alone cannot distinguish from conventional schwannoma."
      },
      {
        "marker": "HMB45",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "high",
        "notes": "Positive — the key distinguishing marker from conventional schwannoma (HMB45−). HMB45 positivity in a nerve sheath tumour = malignant melanotic nerve sheath tumour until proven otherwise."
      },
      {
        "marker": "Melan-A / MART-1",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Positive in most cases."
      },
      {
        "marker": "SOX10",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Strongly positive — shared with schwannoma and MPNST."
      },
      {
        "marker": "PRKAR1A",
        "role": "loss",
        "sensitivity": "~50%",
        "specificity": "high",
        "notes": "Loss of PRKAR1A nuclear expression in ~50% of cases — associated with Carney complex (germline PRKAR1A mutation). PRKAR1A loss is a marker of Carney complex-related disease and warrants germline testing."
      },
      {
        "marker": "Collagen IV / Laminin (pericellular)",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Pericellular basement membrane deposits — shared with schwannoma. Confirms nerve sheath origin (not melanoma, which lacks pericellular BM)."
      },
      {
        "marker": "CD34",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — excludes SFT."
      }
    ],
    "molecular": [
      {
        "alteration": "PRKAR1A mutation (germline in Carney complex)",
        "notes": "~50% are Carney complex-associated (multiple endocrine neoplasia + cardiac myxoma + skin pigmentation + PPNAD). Germline testing indicated in all patients. Sporadic cases lack PRKAR1A mutation."
      },
      {
        "alteration": "GNAQ / GNA11 mutations (subset)",
        "notes": "Some cases harbour GNAQ or GNA11 mutations — overlap with uveal melanoma signalling pathway."
      }
    ]
  },
  {
    "id": "sarcoma-kaposiform-he",
    "name": "Kaposiform Haemangioendothelioma (KHE)",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "CD31",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Strongly positive endothelial marker."
      },
      {
        "marker": "CD34",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive; endothelial marker."
      },
      {
        "marker": "D2-40 (Podoplanin)",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive — lymphatic endothelial differentiation. Both blood vascular (CD34+) and lymphatic (D2-40+) markers are co-expressed — a characteristic mixed phenotype."
      },
      {
        "marker": "GLUT1",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — the critical distinction from infantile haemangioma (GLUT1 strongly positive). GLUT1 negativity in a paediatric vascular lesion excludes infantile haemangioma and supports KHE."
      },
      {
        "marker": "WT1",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — infantile haemangioma is WT1+. Further supports distinction."
      },
      {
        "marker": "HHV-8 (LANA-1)",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — excludes Kaposi sarcoma (LANA-1+). Morphological overlap in spindled areas makes this distinction essential."
      },
      {
        "marker": "SMA",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variable pericyte/myofibroblastic component."
      }
    ],
    "molecular": [
      {
        "alteration": "GNA14 / PIK3CA mutations (subset)",
        "notes": "Somatic activating mutations in the PI3K/AKT pathway identified in a subset. mTOR inhibitors (sirolimus) are the standard treatment for KHE — particularly for Kasabach-Merritt phenomenon (consumptive thrombocytopenia, a life-threatening complication occurring in ~70% of KHE)."
      }
    ]
  },
  {
    "id": "sarcoma-lipoblastoma",
    "name": "Lipoblastoma",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Positive in lipoblasts and mature lipocytes. Shared with myxoid liposarcoma."
      },
      {
        "marker": "CD34",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive in stromal cells of the myxoid areas."
      },
      {
        "marker": "MDM2 / CDK4",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — the most important distinction from ALT/well-differentiated liposarcoma (MDM2+/CDK4+ amplified). MDM2/CDK4 negativity confirms lipoblastoma over ALT when morphology is ambiguous."
      },
      {
        "marker": "PLAG1 (IHC)",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "high",
        "notes": "Nuclear PLAG1 overexpression detectable by IHC — surrogate for PLAG1 gene rearrangement. Useful when FISH is not available."
      },
      {
        "marker": "Ki-67",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Low proliferation index in mature areas, higher in immature myxoid zones."
      }
    ],
    "molecular": [
      {
        "alteration": "PLAG1 rearrangement (8q12)",
        "notes": "Present in ~70% of lipoblastoma. Translocation partners include HAS2, RAD51L1, CHCHD7. Virtually all patients are under 3 years of age — age is itself a diagnostic criterion. PLAG1 FISH confirms the diagnosis. Excellent prognosis with excision; may recur locally."
      },
      {
        "alteration": "HMGA2 rearrangement (12q14) — PLAG1-negative subset",
        "notes": "~15% of lipoblastoma. Mutually exclusive with PLAG1 rearrangement. HMGA2 IHC may show nuclear overexpression."
      }
    ]
  },
  {
    "id": "sarcoma-aggressive-angiomyxoma",
    "name": "Aggressive Angiomyxoma",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "ER (Oestrogen Receptor)",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Strongly positive — the most characteristic and clinically useful marker. ER positivity in a hypocellular myxoid pelvic/perineal tumour is a strong pointer to aggressive angiomyxoma."
      },
      {
        "marker": "PR (Progesterone Receptor)",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive. The ER+/PR+ profile reflects hormone-responsive stromal differentiation and is the rationale for GnRH agonist therapy in recurrent disease."
      },
      {
        "marker": "HMGA2",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Nuclear HMGA2 overexpression — surrogate for HMGA2 rearrangement. Distinguishes aggressive angiomyxoma from other pelvic myxoid lesions."
      },
      {
        "marker": "Desmin",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Focal positivity in perivascular spindle cells."
      },
      {
        "marker": "SMA",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Focal SMA in perivascular cells."
      },
      {
        "marker": "CD34",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Variable stromal CD34."
      },
      {
        "marker": "S100",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — excludes myxoid nerve sheath tumours."
      }
    ],
    "molecular": [
      {
        "alteration": "HMGA2 rearrangement (12q14)",
        "notes": "Present in ~70% of aggressive angiomyxoma. Same locus as lipoblastoma and some uterine leiomyomas. HMGA2 FISH confirms rearrangement. Recurs locally in ~30–70% — not a truly benign tumour despite name."
      },
      {
        "alteration": "GnRH agonist responsiveness",
        "notes": "ER+/PR+ status makes aggressive angiomyxoma hormonally sensitive. GnRH agonists (leuprolide) can shrink tumour preoperatively or manage inoperable recurrence. Not an IHC finding but directly informed by ER/PR results."
      }
    ]
  },
  {
    "id": "sarcoma-myxoid-pleomorphic-liposarcoma",
    "name": "Myxoid Pleomorphic Liposarcoma (MPLPS)",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "S100",
        "role": "variable",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Variably positive in lipoblastic areas."
      },
      {
        "marker": "MDM2 / CDK4",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative by IHC and FISH — distinguishes from ALT/dedifferentiated liposarcoma (MDM2 amplified). MDM2/CDK4 negativity is required for this diagnosis."
      },
      {
        "marker": "DDIT3 (CHOP) rearrangement (FISH)",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "FISH for DDIT3 (12q13) rearrangement is negative — no FUS/EWSR1::DDIT3 fusion, which is the defining event in conventional myxoid liposarcoma. DDIT3 amplification (without fusion) is the molecular event in MPLPS."
      },
      {
        "marker": "Ki-67",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "High — reflects aggressive behaviour. Often >30%."
      },
      {
        "marker": "p53",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Aberrant p53 expression in a subset — TP53 mutation is a common secondary alteration."
      }
    ],
    "molecular": [
      {
        "alteration": "DDIT3 amplification — not FUS/EWSR1::DDIT3 fusion",
        "notes": "New entity in WHO 5th edition (2022). Predominantly young patients (<40 yr), mediastinal/retroperitoneal/limb location. DDIT3 amplification (without translocation partner) by FISH distinguishes from myxoid LPS. Very aggressive — poor prognosis, high distant metastasis rate. Morphology: myxoid stroma + lipoblasts + high-grade pleomorphic areas."
      }
    ]
  },

  // ── Bone — additional WHO 5th edition entities ────────────────────────────
  {
    "id": "bone-low-grade-central-osteosarcoma",
    "name": "Low-Grade Central Osteosarcoma",
    "category": "Bone",
    "markers": [
      {
        "marker": "MDM2",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "high",
        "notes": "Nuclear MDM2 overexpression — reflects 12q13-15 amplification (same amplicon as ALT/dedifferentiated liposarcoma). MDM2 IHC positivity is the most important diagnostic marker and excludes fibrous dysplasia. Confirm amplification by FISH."
      },
      {
        "marker": "CDK4",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Nuclear CDK4 — co-amplified with MDM2 at 12q13-15. MDM2+/CDK4+ co-expression strongly supports LGCOS (and ALT/DDLS); fibrous dysplasia is MDM2−/CDK4−."
      },
      {
        "marker": "SATB2",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Nuclear SATB2 in osteoblastic matrix-producing cells — confirms osteogenic differentiation. Absent in fibrous dysplasia stromal cells."
      },
      {
        "marker": "S100",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — no chondroid differentiation."
      },
      {
        "marker": "Ki-67",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Low — consistent with low-grade behaviour, but overlap with fibrous dysplasia. Ki-67 alone does not distinguish LGCOS from FD."
      }
    ],
    "molecular": [
      {
        "alteration": "MDM2 + CDK4 co-amplification (12q13-15)",
        "notes": "Present in ~90% of LGCOS. FISH demonstrates high-level amplification. This is the same amplicon as ALT/WDLS — shared biology explaining the morphological overlap with sclerosing/fibrous liposarcoma. Dedifferentiation to high-grade osteosarcoma occurs in ~15–30% with recurrence."
      }
    ]
  },
  {
    "id": "bone-clear-cell-chondrosarcoma",
    "name": "Clear Cell Chondrosarcoma",
    "category": "Bone",
    "markers": [
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Positive — chondrogenic lineage."
      },
      {
        "marker": "SOX9",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Nuclear SOX9 — chondrogenic transcription factor."
      },
      {
        "marker": "IDH1 R132H (IHC)",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative by IHC — clear cell chondrosarcoma is IDH1/2 wildtype. IDH1 R132H positivity argues strongly against clear cell chondrosarcoma and favours conventional central chondrosarcoma. Note: IHC only tests R132H; IDH2 requires sequencing."
      },
      {
        "marker": "CD68",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Positive in the osteoclast-like giant cells (reactive) — a characteristic feature. CD68+ giant cells in an epiphyseal chondrogenic tumour are a clue to this entity."
      },
      {
        "marker": "SATB2",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Focal SATB2 in areas with reactive woven bone formation — osteoblastic activity around tumour cells."
      }
    ],
    "molecular": [
      {
        "alteration": "IDH1/IDH2 wildtype",
        "notes": "Clear cell chondrosarcoma lacks IDH mutations (unlike central conventional chondrosarcoma, ~50% IDH1/2-mutant). Exclusively epiphyseal location, low-grade nuclear features, late metastasis. Wide excision is curative in most cases; ~15% metastasise to lung late."
      }
    ]
  },
  {
    "id": "bone-aneurysmal-bone-cyst",
    "name": "Aneurysmal Bone Cyst (ABC)",
    "category": "Bone",
    "markers": [
      {
        "marker": "H3.3 G34W (IHC)",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — critical distinction from giant cell tumour of bone (GCT), which is H3.3 G34W-positive in ~90%. H3.3 G34W IHC (clone RM193) is the single most important marker: positive = GCT; negative = ABC (or other GCT mimic). Both contain osteoclast-like giant cells on H&E."
      },
      {
        "marker": "CD68",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Positive in osteoclast-like giant cells (reactive macrophage/osteoclast lineage). Non-specific — present in GCT, ABC, and telangiectatic osteosarcoma."
      },
      {
        "marker": "SMA",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Positive in mononuclear stromal cells — myofibroblastic phenotype."
      },
      {
        "marker": "MDM2 / CDK4",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — excludes low-grade central osteosarcoma (MDM2+/CDK4+ amplified), which can radiologically and histologically mimic ABC/benign fibrous lesion."
      },
      {
        "marker": "p63",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Nuclear p63 in mononuclear stromal cells — a useful marker for the neoplastic cell population in ABC (unlike osteoclast-like giant cells which are reactive). Also positive in GCT stromal cells."
      }
    ],
    "molecular": [
      {
        "alteration": "USP6 rearrangement (17p13) — FISH",
        "notes": "Present in ~70% of primary ABC. Translocation fuses USP6 to various promoter partners (CDH11, ZNF9, COL1A1, THRAP3). USP6 FISH confirms primary ABC and excludes secondary ABC (which can occur in GCT, chondroblastoma, osteoblastoma, FD — secondary ABC is USP6 wildtype)."
      }
    ]
  },
  {
    "id": "sarcoma-ewsr1-non-ets",
    "name": "Round Cell Sarcoma with EWSR1–Non-ETS Fusions",
    "category": "Sarcoma",
    "markers": [
      {
        "marker": "CD99",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Variable — unlike Ewing sarcoma (CD99 diffuse membranous in >95%), this entity shows inconsistent CD99 expression. Negative or weak CD99 in a round cell sarcoma does not exclude EWSR1-non-ETS sarcoma."
      },
      {
        "marker": "NKX2.2",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — NKX2.2 is highly sensitive and specific for Ewing sarcoma with EWSR1::FLI1 or ETV1/4 fusions (~90%). NKX2.2 negativity in a CD99+ round cell sarcoma supports a non-Ewing EWSR1 fusion."
      },
      {
        "marker": "Vimentin",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Diffuse positive — non-specific mesenchymal marker."
      },
      {
        "marker": "CK (focal)",
        "role": "variable",
        "sensitivity": "~20%",
        "specificity": "—",
        "notes": "Focal keratin may be present in EWSR1::PATZ1 fusion cases — a pitfall mimicking poorly differentiated carcinoma or synovial sarcoma."
      },
      {
        "marker": "S100",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Focal S100 in EWSR1::PATZ1 subset — can mimic melanoma or MPNST."
      },
      {
        "marker": "SOX10",
        "role": "variable",
        "sensitivity": "~20%",
        "specificity": "—",
        "notes": "Variable; present in EWSR1::PATZ1 subset."
      }
    ],
    "molecular": [
      {
        "alteration": "EWSR1::PATZ1 fusion (most common)",
        "notes": "EWSR1::PATZ1 is the most common non-ETS EWSR1 fusion. Thoracic/abdominal location, young adults. Distinct morphology: round to spindle cells, S100 focal+, CK focal+. Prognosis: intermediate."
      },
      {
        "alteration": "EWSR1::SP3 / EWSR1::ZSF1 / other non-ETS partners",
        "notes": "Rare. RNA sequencing is the only reliable method to fully characterize EWSR1 fusion partners — standard EWSR1 FISH detects rearrangement but cannot identify the partner. Partner identification has diagnostic and potential therapeutic implications."
      }
    ]
  },

  // ── Haematolymphoid — additional WHO 5th edition entities ─────────────────
  {
    "id": "lymphoma-lpl-waldenstrom",
    "name": "Lymphoplasmacytic Lymphoma / Waldenström Macroglobulinaemia",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD20",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Positive in lymphoid component. May be dim in plasmacytic areas."
      },
      {
        "marker": "CD138",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Positive in plasmacytic component. Less confluent than plasma cell myeloma — scattered CD138+ cells in a CD20+ B-cell background."
      },
      {
        "marker": "MUM1 / IRF4",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive in plasmacytic cells."
      },
      {
        "marker": "IgM",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "IgM surface and cytoplasmic expression — reflects the IgM paraprotein that defines Waldenström macroglobulinaemia. Serum IgM >30 g/L with bone marrow involvement = WM."
      },
      {
        "marker": "CD5",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — distinguishes from CLL/SLL (CD5+) and a subset of MCL (CD5+)."
      },
      {
        "marker": "CD10",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — excludes follicular lymphoma."
      },
      {
        "marker": "Cyclin D1",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — excludes MCL."
      },
      {
        "marker": "κ/λ light chain (ISH)",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Light chain restriction confirms clonality. Cytoplasmic Ig in plasmacytic cells."
      }
    ],
    "molecular": [
      {
        "alteration": "MYD88 L265P mutation",
        "notes": ">90% of LPL/WM — the most disease-defining mutation in haematology. Activates NF-κB and JAK-STAT. BTK inhibitors (ibrutinib, zanubrutinib) highly active in MYD88-mutant WM."
      },
      {
        "alteration": "CXCR4 mutation (WHIM-type)",
        "notes": "~30% of WM. Co-occurs with MYD88 L265P; associated with more aggressive disease and reduced BTK inhibitor response. CXCR4 mutations are truncating (WHIM-like) frameshift or nonsense."
      }
    ]
  },
  {
    "id": "lymphoma-plasmablastic",
    "name": "Plasmablastic Lymphoma",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD20",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — one of the few aggressive B-cell lymphomas that is CD20-negative. This is the most important diagnostic pitfall: plasmablastic lymphoma can be missed if CD20 is the only B-cell marker used."
      },
      {
        "marker": "CD45 (LCA)",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative or dim — consistent with plasmablastic/plasma cell differentiation."
      },
      {
        "marker": "CD138",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive — plasma cell marker. Use CD138 alongside MUM1 in any large cell lymphoma to detect plasmablastic differentiation."
      },
      {
        "marker": "MUM1 / IRF4",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Strongly positive — late B-cell/plasma cell differentiation."
      },
      {
        "marker": "CD38",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive in plasma cell component."
      },
      {
        "marker": "EBV (EBER ISH)",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Positive in ~70% — EBER ISH is essential. EBV association is highest in HIV-positive patients. EBV-negative plasmablastic lymphoma tends to occur in elderly immunocompetent patients."
      },
      {
        "marker": "HHV-8 (LANA-1)",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — distinguishes from primary effusion lymphoma (HHV-8+) and KSHV/HHV-8-positive DLBCL."
      },
      {
        "marker": "MYC (IHC)",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "MYC protein overexpression is common — MYC rearrangement/amplification in ~50%. Ki-67 typically >90%."
      },
      {
        "marker": "PAX5",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative or very dim — B-cell transcription factor lost with plasmablastic differentiation. PAX5 negativity in a large cell neoplasm should prompt plasma cell marker workup."
      }
    ],
    "molecular": [
      {
        "alteration": "MYC rearrangement (~50%) / EBV infection",
        "notes": "Very aggressive; median survival <1 year. Standard chemotherapy responses are poor. Anti-CD38 (daratumumab) active given CD38 expression. Bortezomib studied in small series."
      }
    ]
  },
  {
    "id": "lymphoma-alk-positive-lbcl",
    "name": "ALK-Positive Large B-Cell Lymphoma",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "ALK",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "high",
        "notes": "Positive with granular cytoplasmic pattern — reflects CLTC::ALK fusion (clathrin heavy chain). This cytoplasmic-only pattern differs from ALCL where ALK shows nuclear + cytoplasmic staining (NPM::ALK). The granular cytoplasmic ALK pattern in a B-lineage tumour is essentially diagnostic."
      },
      {
        "marker": "CD20",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative (~95%) — loss of pan-B markers. This is the pitfall: ALK+ LBCL is a B-cell lymphoma but lacks most B-cell markers."
      },
      {
        "marker": "CD79a / PAX5",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — further loss of B-cell markers with plasmablastic differentiation."
      },
      {
        "marker": "CD138",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Positive in plasma cell-like cells."
      },
      {
        "marker": "EMA",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive — shared with ALCL (EMA+/ALK+) but different lineage."
      },
      {
        "marker": "CD30",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — the critical distinction from ALK+ ALCL (CD30 strongly positive). ALK+ LBCL is CD30−/EMA+/CD138 variable; ALK+ ALCL is CD30+/EMA variable/CD138−."
      },
      {
        "marker": "CD3 / CD45",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — excludes T/NK-cell origin (ALCL is CD3 variable, CD45+)."
      },
      {
        "marker": "MUM1 / IRF4",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Strongly positive — plasmablastic immunophenotype."
      }
    ],
    "molecular": [
      {
        "alteration": "CLTC::ALK fusion (t(2;17))",
        "notes": "Most common (~60%). Other partners: NPM1, SEC31A. All result in constitutive ALK kinase activation. ALK inhibitors (crizotinib, alectinib) show activity in case reports and small series. Prognosis is poor with standard chemotherapy."
      }
    ]
  },
  {
    "id": "lymphoma-pel",
    "name": "Primary Effusion Lymphoma (PEL)",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "HHV-8 / KSHV (LANA-1 IHC)",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "high",
        "notes": "Nuclear dot LANA-1 positivity is required for diagnosis. PEL is defined by HHV-8/KSHV infection — LANA-1 IHC on effusion cell block or tissue is the confirmatory test."
      },
      {
        "marker": "EBV (EBER ISH)",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive in ~80% of PEL — EBV co-infection is common. EBV-positive PEL tends to have worse prognosis."
      },
      {
        "marker": "CD20",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — no mass lesion, no CD20 expression. Rituximab is therefore not used."
      },
      {
        "marker": "PAX5",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — B-cell transcription factor lost."
      },
      {
        "marker": "CD45 (LCA)",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive — haematopoietic marker retained (unlike some plasmablastic lymphomas)."
      },
      {
        "marker": "CD30",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variable. CD30 co-expression can cause confusion with ALCL."
      },
      {
        "marker": "CD138",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variable plasma cell marker expression."
      },
      {
        "marker": "MUM1 / IRF4",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive — terminal B-cell/plasma cell programme."
      }
    ],
    "molecular": [
      {
        "alteration": "HHV-8/KSHV infection — required",
        "notes": "PEL occurs almost exclusively in immunocompromised patients (HIV, solid organ transplant). Presents as malignant effusion (pleural, pericardial, peritoneal) without solid mass. Extracavitary PEL (solid mass + effusion) is a variant. Prognosis dismal — median survival <6 months."
      }
    ]
  },
  {
    "id": "lymphoma-intravascular-lbcl",
    "name": "Intravascular Large B-Cell Lymphoma",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD20",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Strongly positive in large B-cells confined to vessel lumina. The intravascular distribution is the pathognomonic finding — IHC highlights the cells within CD31/CD34-positive vessels."
      },
      {
        "marker": "MUM1 / IRF4",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Positive — ABC/non-GCB phenotype predominates (~90% of cases). GCB subtype is rare."
      },
      {
        "marker": "BCL2",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive."
      },
      {
        "marker": "CD5",
        "role": "variable",
        "sensitivity": "~38%",
        "specificity": "—",
        "notes": "Aberrant CD5 co-expression in ~38% of intravascular LBCL — a much higher rate than conventional DLBCL (~5%). CD5+ IVLBCL has a distinct biology."
      },
      {
        "marker": "CD10",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in most (~80%) — ABC phenotype."
      },
      {
        "marker": "CD31 / CD34 (endothelial)",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Marks the vessel walls containing tumour cells — use endothelial markers to demonstrate the intravascular distribution and confirm cells are within vessels, not perivascular."
      },
      {
        "marker": "Ki-67",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Very high proliferation index."
      }
    ],
    "molecular": [
      {
        "alteration": "MYD88 L265P mutation (~30%)",
        "notes": "Shared with PCNSL — consistent with ABC/non-GCB phenotype. CD29/CD54 adhesion molecule loss on tumour cells is the proposed mechanism for intravascular entrapment (cannot migrate to lymph nodes)."
      }
    ]
  },
  {
    "id": "lymphoma-thrlbcl",
    "name": "T-Cell/Histiocyte-Rich Large B-Cell Lymphoma (THRLBCL)",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD20 (large B-cells)",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Large neoplastic B-cells are CD20+, but they are scattered and rare (<10% of cellularity). The diagnostic challenge: CD20+ cells are easily missed on H&E; IHC reveals them against the reactive T-cell/histiocyte background."
      },
      {
        "marker": "CD3 (background T-cells)",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Abundant CD3+ T-cells dominate the background. CD4+ T-cells predominate."
      },
      {
        "marker": "CD68 (background histiocytes)",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "CD68+ histiocytes are admixed — hence 'histiocyte-rich'."
      },
      {
        "marker": "CD30",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative in large B-cells — distinguishes from cHL (RS cells CD30+) and NLPBL (LP cells CD30−/CD20+). THRLBCL: CD20+ large cells, CD30−; cHL: CD30+ RS cells, CD20−/dim; NLPBL: CD20+, CD30−, rosetting CD57+ T-cells."
      },
      {
        "marker": "CD15",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — excludes cHL (RS cells CD15+)."
      },
      {
        "marker": "EBV (EBER ISH)",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Positive in large B-cells in ~30% — EBV+ THRLBCL has distinct biology. Always perform EBER ISH."
      },
      {
        "marker": "OCT2 / BOB1",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Co-expression of OCT2 and BOB1 in large B-cells — same as NLPBL. Unlike cHL where OCT2 or BOB1 is typically lost."
      },
      {
        "marker": "CD57 (background T-cells)",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "CD57+ T-cell rosettes absent or rare — present in NLPBL (diagnostic feature). Absence of CD57 rosettes argues against NLPBL and supports THRLBCL."
      }
    ],
    "molecular": [
      {
        "alteration": "GNA13 / BCL6 / SOCS1 mutations",
        "notes": "Shares some molecular features with NLPBL, supporting a pathogenetic relationship. THRLBCL can arise by transformation of NLPBL — always correlate with clinical history."
      }
    ]
  },
  {
    "id": "lymphoma-atll",
    "name": "Adult T-Cell Leukaemia/Lymphoma (ATLL)",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD3",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Positive T-cell marker."
      },
      {
        "marker": "CD4",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Positive — helper T-cell phenotype."
      },
      {
        "marker": "CD25 (IL-2Rα)",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "high",
        "notes": "Strongly and diffusely positive — the most characteristic IHC finding. CD25 is aberrantly and markedly overexpressed (Tax protein from HTLV-1 drives CD25 expression). Markedly elevated soluble CD25 in serum is a diagnostic feature."
      },
      {
        "marker": "CD7",
        "role": "loss",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "CD7 loss — characteristic pan-T marker loss. CD3+/CD4+/CD25++/CD7− in the correct clinical context strongly suggests ATLL."
      },
      {
        "marker": "FoxP3",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Positive — regulatory T-cell phenotype. Reflects Tax-driven FoxP3 expression. ATLL cells show a Treg-like immunophenotype."
      },
      {
        "marker": "CCR4",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Positive — homing chemokine receptor. Mogamulizumab (anti-CCR4 monoclonal antibody) is approved for relapsed/refractory ATLL."
      },
      {
        "marker": "CD8",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in vast majority (~95%)."
      },
      {
        "marker": "CD30",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Variable — in lymphoma-type ATLL, CD30+ can be seen."
      }
    ],
    "molecular": [
      {
        "alteration": "HTLV-1 proviral integration — required",
        "notes": "HTLV-1 seropositivity is required for diagnosis. Clonal HTLV-1 integration in tumour cells confirmed by Southern blot or PCR. Endemic in Japan, Caribbean, South America, Africa. Four clinical subtypes: smouldering, chronic, lymphoma-type, acute — markedly different prognosis."
      },
      {
        "alteration": "CCR4 mutation / TP53 / CDKN2A deletions",
        "notes": "CCR4 somatic mutations in ~30%. Mogamulizumab targets CCR4. TP53 and CDKN2A alterations associated with aggressive behaviour."
      }
    ]
  },
  {
    "id": "lymphoma-sptcl",
    "name": "Subcutaneous Panniculitis-Like T-Cell Lymphoma (SPTCL)",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "CD8",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Positive — cytotoxic T-cell phenotype. CD8+ in essentially all αβ SPTCL."
      },
      {
        "marker": "βF1 (TCRβ chain)",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "high",
        "notes": "Required for SPTCL diagnosis — confirms αβ T-cell lineage. βF1+/CD56− defines αβ SPTCL. If βF1− and CD56+, reclassify as primary cutaneous gamma-delta T-cell lymphoma (γδ-CTCL) — a completely different, far more aggressive entity."
      },
      {
        "marker": "TIA-1",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Cytotoxic granule protein — positive in virtually all SPTCL."
      },
      {
        "marker": "Granzyme B",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Positive — cytotoxic T-cell effector molecules."
      },
      {
        "marker": "CD56",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — the single most important marker to test alongside βF1. CD56 positivity = γδ phenotype and reclassification to γδ-CTCL (much worse prognosis, 5-year OS ~11% vs ~80% for SPTCL)."
      },
      {
        "marker": "CD4",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative."
      },
      {
        "marker": "CD3",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Positive T-cell marker."
      }
    ],
    "molecular": [
      {
        "alteration": "αβ T-cell receptor clonal rearrangement",
        "notes": "TCR gene rearrangement confirms clonality. Associated with autoimmune diseases (~25%) — particularly lupus. Haemophagocytic lymphohistiocytosis (HLH) occurs in ~17%; fatal if untreated. Cyclosporine is highly effective for SPTCL — unlike most T-cell lymphomas."
      }
    ]
  },
  {
    "id": "lymphoma-myeloid-sarcoma",
    "name": "Myeloid Sarcoma",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "MPO",
        "role": "positive",
        "sensitivity": "~75%",
        "specificity": "high",
        "notes": "Positive in myeloid differentiation. The most specific myeloid marker — MPO in an extramedullary mass is a red flag for myeloid sarcoma."
      },
      {
        "marker": "CD117 (c-KIT)",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Positive in myeloid progenitor cells."
      },
      {
        "marker": "CD33",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Pan-myeloid marker."
      },
      {
        "marker": "CD43",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive in myeloid cells. Also positive in T-cell lymphomas — interpret in context."
      },
      {
        "marker": "CD34",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variable — reflects blast percentage and differentiation state."
      },
      {
        "marker": "Lysozyme",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Positive in monocytic and myeloid differentiation."
      },
      {
        "marker": "CD64 / CD14",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Positive in monocytic differentiation (myelomonocytic/monocytic myeloid sarcoma). CD64 is the most sensitive monocytic marker."
      },
      {
        "marker": "CD20 / CD3",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — lineage exclusion essential. Myeloid sarcoma can closely mimic lymphoma on H&E."
      },
      {
        "marker": "TdT",
        "role": "variable",
        "sensitivity": "~15%",
        "specificity": "—",
        "notes": "Positive in blastic/immature subtypes. TdT+ myeloid sarcoma may indicate blast phase of CML or AML with very immature phenotype."
      }
    ],
    "molecular": [
      {
        "alteration": "Associated leukaemia genetics (NPM1, FLT3, KMT2A, CBF fusions)",
        "notes": "Myeloid sarcoma may be de novo or precede/accompany AML or MDS/MPN. The underlying genetic aberration determines prognosis and treatment. Full AML cytogenetics/molecular panel required on the sarcoma tissue (FISH for common translocations)."
      }
    ]
  },
  {
    "id": "lymphoma-mpal",
    "name": "Mixed-Phenotype Acute Leukaemia (MPAL)",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "TdT",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive — precursor marker in most MPAL. Nuclear TdT confirms immaturity."
      },
      {
        "marker": "MPO",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "high",
        "notes": "Required for myeloid lineage assignment in MPAL. ≥3% MPO+ blasts (by ICC or cytochemistry) = myeloid lineage. Co-expression of MPO with B or T lineage markers = MPAL."
      },
      {
        "marker": "CD19 / CD10 / CD79a / cCD22",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "B-lineage assignment: CD19 strong+, OR CD19 dim with ≥1 of CD10, CD79a, or cCD22. All must be confirmed by flow cytometry — IHC alone is insufficient for strict WHO MPAL criteria."
      },
      {
        "marker": "cCD3",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "T-lineage assignment requires cCD3 (cytoplasmic CD3ε) — not surface CD3 alone. cCD3+ + MPO+ = T/myeloid MPAL."
      },
      {
        "marker": "CD34",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Variable blast marker."
      },
      {
        "marker": "CD33 / CD13",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Myeloid co-expression in B/myeloid MPAL."
      }
    ],
    "molecular": [
      {
        "alteration": "BCR::ABL1 fusion (Ph+ MPAL)",
        "notes": "~25% of adult MPAL. Philadelphia chromosome confers very poor prognosis without TKI-based therapy. Ph+ MPAL is treated differently from Ph− MPAL — TKI addition mandatory."
      },
      {
        "alteration": "KMT2A rearrangement",
        "notes": "~20% of MPAL. Infant MPAL is enriched for KMT2A rearrangements. High-risk disease."
      }
    ]
  },
  {
    "id": "lymphoma-pdgfra-myeloid",
    "name": "Myeloid/Lymphoid Neoplasm with PDGFRA Rearrangement",
    "category": "Lymphoma",
    "markers": [
      {
        "marker": "MPO",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive in myeloid cells. Peripheral eosinophilia is the cardinal feature — markedly elevated eosinophil count in blood and marrow."
      },
      {
        "marker": "Tryptase",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Increased mast cells in marrow — a characteristic associated finding. Tryptase highlights mast cell clusters."
      },
      {
        "marker": "CD25 (mast cells)",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Aberrant CD25 on mast cells — same pattern as systemic mastocytosis. However, KIT D816V is absent (unlike SM); the driver is PDGFRA."
      },
      {
        "marker": "CD117 (mast cells)",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Strongly positive in mast cells."
      },
      {
        "marker": "BCR::ABL1 (FISH/PCR)",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — must exclude CML in all cases of myeloid neoplasm with eosinophilia. BCR::ABL1 negativity plus CHIC2 deletion by FISH confirms PDGFRA rearrangement."
      },
      {
        "marker": "CHIC2 deletion (FISH, 4q12)",
        "role": "screen",
        "sensitivity": "~90%",
        "specificity": "high",
        "notes": "CHIC2 deletion by FISH detects FIP1L1::PDGFRA (cryptic deletion on chromosome 4q12 not visible by standard karyotype). The defining molecular event — imatinib produces complete molecular remission in virtually all FIP1L1::PDGFRA-positive cases."
      }
    ],
    "molecular": [
      {
        "alteration": "FIP1L1::PDGFRA — cryptic del(4)(q12)",
        "notes": "Present in ~90% of PDGFRA-rearranged cases. Sensitive to imatinib at low doses (100–400 mg/day) — complete haematological and molecular remission in >95%. This is one of the most imatinib-sensitive neoplasms known. Diagnose before empirical steroid treatment obliterates eosinophilia."
      }
    ]
  },

  // ── CNS — additional WHO 5th edition entities ─────────────────────────────
  {
    "id": "cns-pxa",
    "name": "Pleomorphic Xanthoastrocytoma (PXA)",
    "category": "CNS",
    "markers": [
      {
        "marker": "GFAP",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Strongly positive — astrocytic marker."
      },
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Positive."
      },
      {
        "marker": "CD34",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "high",
        "notes": "Diffuse cytoplasmic CD34 in tumour cells — a characteristic and diagnostically useful finding. Perivascular CD34+ dendritic processes are particularly striking. CD34 positivity in an astrocytic tumour strongly suggests PXA or ganglioglioma."
      },
      {
        "marker": "BRAF V600E (IHC, VE1 clone)",
        "role": "variable",
        "sensitivity": "~65%",
        "specificity": "high",
        "notes": "Positive in ~65% of PXA — one of the highest rates of BRAF V600E among CNS tumours. BRAF V600E IHC screen; confirm with molecular testing. Anaplastic PXA (grade 3) retains BRAF V600E but acquires CDKN2A/B deletion."
      },
      {
        "marker": "Neurofilament (NF)",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Focal positivity in some tumour cells — reflects neuronal differentiation in a subset. NF+ cells in a glial tumour support PXA."
      },
      {
        "marker": "OLIG2",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Variable; may be reduced compared to diffuse gliomas."
      },
      {
        "marker": "IDH1 R132H",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — PXA is IDH wildtype. IDH mutation argues against PXA and favours IDH-mutant astrocytoma."
      },
      {
        "marker": "Ki-67",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Low in grade 2 (<5%). Anaplastic PXA (grade 3): ≥5 mitoses/10 HPF and/or necrosis. Ki-67 >10% with necrosis = grade 3."
      }
    ],
    "molecular": [
      {
        "alteration": "BRAF V600E mutation",
        "notes": "~65% of PXA. Dabrafenib + trametinib (BRAF+MEK inhibition) shows high response rates in recurrent BRAF V600E-mutant PXA. Anaplastic PXA + BRAF V600E + CDKN2A/B deletion = most aggressive subset."
      },
      {
        "alteration": "CDKN2A / CDKN2B homozygous deletion",
        "notes": "Marks anaplastic transformation (grade 3). p16 IHC loss is surrogate. CDKN2A deletion plus BRAF V600E = worse prognosis."
      }
    ]
  },
  {
    "id": "cns-ganglioglioma",
    "name": "Ganglioglioma",
    "category": "CNS",
    "markers": [
      {
        "marker": "CD34",
        "role": "positive",
        "sensitivity": "~75%",
        "specificity": "high",
        "notes": "Strongly positive in tumour cells — characteristic perineuronal and 'starburst' dendritic pattern. CD34 positivity in a slow-growing temporal lobe tumour in a young patient with epilepsy is highly characteristic of ganglioglioma."
      },
      {
        "marker": "Synaptophysin",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Positive in ganglion cells (large, dysmorphic mature neurons). Confirms neuronal differentiation within the tumour."
      },
      {
        "marker": "NeuN",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Nuclear NeuN in mature ganglion cell component. Absent in reactive neurons — NeuN in lesional cells confirms ganglionic neoplasm."
      },
      {
        "marker": "GFAP",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive in the glial (astrocytic) component."
      },
      {
        "marker": "BRAF V600E (IHC, VE1 clone)",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "high",
        "notes": "Positive in ~60% of ganglioglioma — same frequency as PXA. Shared BRAF V600E biology with PXA, DNET, and papillary craniopharyngioma. BRAF inhibitors active in recurrent BRAF V600E-mutant ganglioglioma."
      },
      {
        "marker": "IDH1 R132H",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — ganglioglioma is IDH wildtype. IDH mutation essentially excludes ganglioglioma and favours IDH-mutant astrocytoma with ganglionic cells."
      },
      {
        "marker": "Ki-67",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Low (<1–2%) in grade 1. Anaplastic ganglioglioma (grade 3): necrosis, brisk mitoses in glial component."
      }
    ],
    "molecular": [
      {
        "alteration": "BRAF V600E mutation (~60%)",
        "notes": "Most common alteration. BRAF fusion (KIAA1549::BRAF) in ~10% — same as pilocytic astrocytoma. CDK6/CDKN2A alterations in anaplastic cases."
      }
    ]
  },
  {
    "id": "cns-haemangioblastoma",
    "name": "Haemangioblastoma",
    "category": "CNS",
    "markers": [
      {
        "marker": "Inhibin-α",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "high",
        "notes": "Strongly positive in stromal cells — the most specific marker for haemangioblastoma. Inhibin-α positivity in a highly vascular CNS/spinal tumour with foamy stromal cells is pathognomonic."
      },
      {
        "marker": "CAIX (Carbonic anhydrase IX)",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Strongly positive in stromal cells — reflects VHL pathway inactivation → HIF stabilisation → CAIX upregulation. Shared with clear cell RCC (both VHL-pathway tumours) — hence the morphological similarity."
      },
      {
        "marker": "GLUT1 (stromal cells)",
        "role": "positive",
        "sensitivity": "~70%",
        "specificity": "—",
        "notes": "Positive in stromal cells. Note: GLUT1 is also positive in erythrocytes and normal blood-brain barrier endothelium — interpret carefully."
      },
      {
        "marker": "CD34 (endothelium)",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Highlights the rich vascular network. Neoplastic stromal cells are CD34-negative — only reactive endothelium is CD34+."
      },
      {
        "marker": "PAX8",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "PAX8 positivity in haemangioblastoma is a significant pitfall — can be misinterpreted as metastatic clear cell RCC (also PAX8+/CAIX+). EMA and CD10 help distinguish: RCC is EMA+/CD10+; haemangioblastoma is EMA−/CD10−."
      },
      {
        "marker": "EMA",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative in stromal cells — critical distinction from metastatic RCC (EMA+)."
      },
      {
        "marker": "GFAP / S100",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in stromal cells — confirms non-glial origin."
      }
    ],
    "molecular": [
      {
        "alteration": "VHL mutation / deletion (germline or somatic)",
        "notes": "~30% of haemangioblastoma are VHL-associated (von Hippel-Lindau syndrome). Germline VHL testing indicated in all patients with multiple/spinal/non-cerebellar haemangioblastoma. Somatic VHL loss in sporadic cases. Belzutifan (HIF-2α inhibitor) approved for VHL-associated haemangioblastoma."
      }
    ]
  },
  {
    "id": "cns-choroid-plexus-carcinoma",
    "name": "Choroid Plexus Carcinoma (CPC)",
    "category": "CNS",
    "markers": [
      {
        "marker": "CK (AE1/AE3, CK7)",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive — confirms epithelial nature. Choroid plexus carcinoma can be diffusely CK+ and mimic metastatic carcinoma."
      },
      {
        "marker": "Transthyretin (TTR / prealbumin)",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "high",
        "notes": "Focally positive or absent in CPC (vs strongly positive in choroid plexus papilloma, ~95%). TTR loss in a choroid plexus tumour supports malignant transformation. The most specific marker for choroid plexus lineage."
      },
      {
        "marker": "SMARCB1 (INI1)",
        "role": "loss",
        "sensitivity": "~50%",
        "specificity": "high",
        "notes": "Loss of SMARCB1 nuclear expression in ~50% of CPC — identifies SWI/SNF-deficient CPC subset. Retained in papilloma. SMARCB1 loss in a lateral ventricle tumour in a child must distinguish CPC from AT/RT (both SMARCB1-deficient)."
      },
      {
        "marker": "p53",
        "role": "variable",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Aberrant p53 expression — TP53 mutation is nearly universal in CPC. Retained p53 in CPP. Aberrant p53 supports malignancy."
      },
      {
        "marker": "Ki-67",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "High (>10%) in CPC; WHO criteria: >5 mitoses/10 HPF distinguishes CPC from atypical CPP (2–4 mitoses). Ki-67 grade: CPP <2%, atypical CPP 2–10%, CPC >10%."
      },
      {
        "marker": "EMA",
        "role": "positive",
        "sensitivity": "~80%",
        "specificity": "—",
        "notes": "Positive; epithelial marker."
      },
      {
        "marker": "GFAP",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative or focally positive — not a glial tumour."
      }
    ],
    "molecular": [
      {
        "alteration": "TP53 mutation — Li-Fraumeni syndrome",
        "notes": "~50% of CPC patients carry germline TP53 mutation (Li-Fraumeni syndrome). TP53 germline testing is recommended in all children with CPC. SMARCB1 loss is a secondary molecular event in ~50%."
      }
    ]
  },
  {
    "id": "cns-etmr",
    "name": "Embryonal Tumour with Multilayered Rosettes (ETMR)",
    "category": "CNS",
    "markers": [
      {
        "marker": "LIN28A",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "high",
        "notes": "Strongly and diffusely positive — the pathognomonic IHC marker for ETMR. LIN28A (clone 9E1) is an RNA-binding protein encoded within the C19MC amplicon; its overexpression directly reflects amplification. No other primary CNS tumour shows this diffuse LIN28A positivity pattern."
      },
      {
        "marker": "SMARCB1 (INI1)",
        "role": "retained",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Retained — critical distinction from AT/RT (SMARCB1 loss). LIN28A+/SMARCB1 retained = ETMR. LIN28A−/SMARCB1 lost = AT/RT."
      },
      {
        "marker": "Synaptophysin",
        "role": "variable",
        "sensitivity": "~60%",
        "specificity": "—",
        "notes": "Variable neuronal differentiation."
      },
      {
        "marker": "GFAP",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Focal glial differentiation in a minority."
      },
      {
        "marker": "Ki-67",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Very high — typically >80%."
      }
    ],
    "molecular": [
      {
        "alteration": "C19MC amplification (chromosome 19q13.41 miRNA cluster)",
        "notes": "Defining alteration in ~90% of ETMR. Amplification of the C19MC miRNA cluster drives LIN28A overexpression. FISH for C19MC or methylation profiling confirms the diagnosis. Grade 4 embryonal tumour of infants; prognosis extremely poor despite multimodal therapy."
      }
    ]
  },
  {
    "id": "cns-central-neurocytoma",
    "name": "Central Neurocytoma",
    "category": "CNS",
    "markers": [
      {
        "marker": "NeuN",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "high",
        "notes": "Nuclear NeuN is the single most useful marker — confirms neuronal differentiation. NeuN positivity in an intraventricular tumour with oligodendroglioma-like morphology is essentially diagnostic of central neurocytoma."
      },
      {
        "marker": "Synaptophysin",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Diffusely positive in neuropil and around the tumour cells."
      },
      {
        "marker": "GFAP",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative or only focally positive in reactive astrocytes. Significant GFAP expression in tumour cells suggests 'atypical neurocytoma' with glial component — associated with higher recurrence risk."
      },
      {
        "marker": "IDH1 R132H",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — central neurocytoma is IDH wildtype. IDH mutation + 1p/19q codeletion = oligodendroglioma (the main differential)."
      },
      {
        "marker": "OLIG2",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — further distinguishes from oligodendroglioma (OLIG2+)."
      },
      {
        "marker": "Ki-67",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Low (<2%) in typical cases. Ki-67 >2% or >3% is used to define 'atypical neurocytoma' with higher recurrence risk."
      }
    ],
    "molecular": [
      {
        "alteration": "FGFR1::TACC1 or other FGFR1 alterations (subset)",
        "notes": "FGFR1 alterations in a subset. No IDH mutation, no 1p/19q codeletion, no TERT promoter mutation — these distinguish it from oligodendroglioma. Excellent prognosis for WHO grade 2; gross total resection is curative in most cases."
      }
    ]
  },
  {
    "id": "cns-h3-g34-glioma",
    "name": "Diffuse Hemispheric Glioma, H3 G34-Mutant",
    "category": "CNS",
    "markers": [
      {
        "marker": "H3.3 G34R/V (IHC, clone RM193)",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "high",
        "notes": "Positive — same clone (RM193) used for H3 K27-altered glioma but detecting a different mutation. G34R (most common) and G34V give cytoplasmic staining. Confirms H3F3A exon 1 mutation. Exclusively cerebral hemisphere."
      },
      {
        "marker": "ATRX",
        "role": "loss",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Loss of ATRX nuclear expression — characteristic co-alteration. ATRX loss + H3 G34 mutation is a highly specific combination."
      },
      {
        "marker": "p53",
        "role": "variable",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Aberrant p53 in ~90% — TP53 mutation is a near-universal co-alteration."
      },
      {
        "marker": "GFAP",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive — astrocytic phenotype."
      },
      {
        "marker": "IDH1 R132H",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — H3 G34 mutant gliomas are IDH wildtype."
      },
      {
        "marker": "H3K27me3 (trimethylation)",
        "role": "retained",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Retained H3K27me3 — distinguishes from H3 K27-altered gliomas (which show H3K27me3 loss). H3 G34 mutation causes global reduction of H3K36me3 (not K27me3)."
      },
      {
        "marker": "OLIG2",
        "role": "variable",
        "sensitivity": "~50%",
        "specificity": "—",
        "notes": "Variable; may be reduced."
      }
    ],
    "molecular": [
      {
        "alteration": "H3F3A p.G34R or p.G34V mutation",
        "notes": "New entity in WHO 5th ed (2021). Exclusively cerebral hemisphere, young adults (median ~15–20 yr). All grade 4. EGFR amplification common (~30%). Distinct from H3 K27-altered (midline) and IDH-mutant astrocytoma. Poor prognosis — median OS ~15 months."
      }
    ]
  },
  {
    "id": "cns-meningeal-melanocytoma",
    "name": "Meningeal Melanocytoma",
    "category": "CNS",
    "markers": [
      {
        "marker": "HMB45",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive — melanocytic differentiation."
      },
      {
        "marker": "Melan-A / MART-1",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Positive."
      },
      {
        "marker": "S100",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Strongly positive."
      },
      {
        "marker": "SOX10",
        "role": "positive",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Positive."
      },
      {
        "marker": "BAP1 (nuclear)",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Loss of BAP1 nuclear expression in ~50% — associated with germline BAP1 mutation (BAP1 tumour predisposition syndrome). BAP1 loss correlates with higher grade (melanoma) and systemic BAP1-related tumour risk (uveal melanoma, mesothelioma, RCC, cutaneous melanoma)."
      },
      {
        "marker": "Ki-67",
        "role": "screen",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Grade 1 (melanocytoma): Ki-67 <1–2%, no necrosis. Grade 2 (intermediate): Ki-67 2–4% and/or minimal necrosis. Melanoma: Ki-67 >4%, necrosis, brain invasion — no strict cutoff but overall context."
      },
      {
        "marker": "CK (AE1/AE3)",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — excludes meningeal carcinoma."
      },
      {
        "marker": "EMA",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative — excludes meningioma."
      }
    ],
    "molecular": [
      {
        "alteration": "GNAQ / GNA11 mutation",
        "notes": "~90% of meningeal melanocytic tumours carry GNAQ or GNA11 mutations — shared with uveal melanoma and blue naevus. These are not the same as BRAF V600E-driven cutaneous melanoma. MEK inhibitor activity reported in small series."
      },
      {
        "alteration": "BAP1 mutation (germline or somatic)",
        "notes": "Somatic BAP1 loss drives higher-grade behaviour. Germline BAP1 testing indicated when BAP1 IHC shows loss."
      }
    ]
  },
  {
    "id": "cns-germinoma",
    "name": "CNS Germinoma",
    "category": "CNS",
    "markers": [
      {
        "marker": "OCT3/4 (POU5F1)",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "high",
        "notes": "Nuclear positivity — the most sensitive and specific marker. Required in the diagnostic panel. Positive in all germ cell tumours (germinoma, EC, YST, choriocarcinoma) but strongest and most consistent in germinoma."
      },
      {
        "marker": "SALL4",
        "role": "positive",
        "sensitivity": "~99%",
        "specificity": "—",
        "notes": "Strongly positive — pan-GCT marker."
      },
      {
        "marker": "CD117 (c-KIT)",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Membranous positivity in tumour cells — characteristic of germinoma (shared with testicular seminoma). CD117 in a CNS tumour should prompt GCT workup."
      },
      {
        "marker": "PLAP (Placental alkaline phosphatase)",
        "role": "positive",
        "sensitivity": "~85%",
        "specificity": "—",
        "notes": "Membranous/cytoplasmic positivity — classic germinoma marker."
      },
      {
        "marker": "CD30",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — distinguishes from embryonal carcinoma (CD30+ in GCT context)."
      },
      {
        "marker": "AFP",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "high",
        "notes": "Negative — distinguishes from yolk sac tumour. Elevated serum AFP points to YST component."
      },
      {
        "marker": "β-hCG",
        "role": "variable",
        "sensitivity": "~15%",
        "specificity": "—",
        "notes": "Focal β-hCG in syncytiotrophoblastic giant cells (present in ~15% of germinoma) — does not exclude germinoma diagnosis. Markedly elevated serum β-hCG points to choriocarcinoma component."
      },
      {
        "marker": "CK (AE1/AE3)",
        "role": "negative",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Negative in germinoma cells. Positive in embryonal carcinoma, YST, and trophoblastic cells."
      }
    ],
    "molecular": [
      {
        "alteration": "KIT / KRAS / NRAS mutations",
        "notes": "Somatic mutations in KIT (~25%), KRAS, and NRAS. No defining translocation. CNS germinoma is highly radiosensitive — craniospinal irradiation ± chemotherapy achieves >90% long-term survival. IHC diagnosis sufficient for treatment planning if CSF markers (AFP, β-hCG) and MRI are concordant."
      }
    ]
  },
  {
    "id": "cns-pineoblastoma",
    "name": "Pineoblastoma",
    "category": "CNS",
    "markers": [
      {
        "marker": "Synaptophysin",
        "role": "positive",
        "sensitivity": "~90%",
        "specificity": "—",
        "notes": "Positive — neuroendocrine/neuronal differentiation."
      },
      {
        "marker": "NeuN",
        "role": "variable",
        "sensitivity": "~40%",
        "specificity": "—",
        "notes": "Variable — some mature neuronal differentiation."
      },
      {
        "marker": "LIN28A",
        "role": "variable",
        "sensitivity": "~20%",
        "specificity": "—",
        "notes": "Positive in the C19MC-amplified molecular subset of pineoblastoma (~20%). LIN28A+ pineoblastoma shares molecular features with ETMR and has a distinct biology."
      },
      {
        "marker": "SMARCB1 (INI1)",
        "role": "retained",
        "sensitivity": "~95%",
        "specificity": "—",
        "notes": "Retained in most pineoblastoma — distinguishes from AT/RT (SMARCB1 loss). Rare SMARCB1-deficient pineoblastoma exists but is much less common."
      },
      {
        "marker": "Photoreceptor markers (Recoverin, Arrestin)",
        "role": "variable",
        "sensitivity": "~30%",
        "specificity": "—",
        "notes": "Variable photoreceptor differentiation — reflects pineal gland origin."
      },
      {
        "marker": "Ki-67",
        "role": "positive",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "High — typically >20-30%. Grade 4 embryonal tumour."
      },
      {
        "marker": "RB1 (Retinoblastoma protein)",
        "role": "variable",
        "sensitivity": "—",
        "specificity": "—",
        "notes": "Loss of Rb in a subset — pineoblastoma syndrome: bilateral retinoblastoma + pineoblastoma ('trilateral retinoblastoma') in germline RB1 mutation carriers. Rb IHC should be performed in all pineoblastoma patients."
      }
    ],
    "molecular": [
      {
        "alteration": "DROSHA / DICER1 mutations (most common molecular subtypes)",
        "notes": "Four molecular subgroups: (1) DROSHA/DGCR8 mutant; (2) DICER1 mutant (associated with DICER1 syndrome); (3) C19MC-amplified (LIN28A+); (4) MIR17HG-amplified. Subgroup 2 (DICER1-mutant) has better prognosis. Germline DICER1 testing recommended."
      },
      {
        "alteration": "RB1 mutation — pineoblastoma syndrome",
        "notes": "Germline RB1 carriers at high risk of pineoblastoma (trilateral retinoblastoma). Surveillance MRI recommended in all bilateral retinoblastoma patients."
      }
    ]
  }
]
