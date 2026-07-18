import Image from "next/image";

const competencies = [
  "EMV L3 Certification — MasterCard, VISA, AMEX, Discover, JCB, UnionPay",
  "Quality Assurance (QA) & Software Testing",
  "POS and Payment Switch End-to-End Testing",
  "Team Management",
  "ISO 8583 and EMV Standards",
  "Web and Mobile Application QA Testing",
];

const certifications = [
  { name: "ISTQB® Certified Tester Advanced Level Test Manager (CTAL-TM)", date: "Feb 2024" },
  { name: "ISTQB® Foundation Level (CTFL)", date: "Sep 2023" },
  { name: "Master Class on EMV Standards — MVL Co", date: "Feb 2023" },
];

const experience = [
  {
    role: "Certification Manager (EMV L3 and Acquirer Integration)",
    org: "Valor Paytech, Chennai",
    dates: "Nov 2024 – Present",
    bullets: [
      "Certification Manager managing multiple EMV L3 Acquirer Certifications with processors including TSYS (Sierra), Fiserv (Omaha, North), EPX, Elavon, Worldpay, and Postillion for the Valor Gateway.",
      "Involved in L3 Certification Testing for MasterCard, VISA, AMEX, Discover, UnionPay, and JCB card schemes.",
      "Lead and manage a QA/certification team of 5 engineers; provide training aligned with industry standards.",
      "Conduct ISO 8583 log reviews, utilize UL BTT, ICC TMat, and EMV transaction log reviews to identify issues.",
      "Collaborate with the Development Team to debug issues in terminal software.",
      "Additional role as POS and Payment Switch QA/Software Tester; responsible for creating test scripts, test cases, and executing test methodologies.",
      "Report defects using TestLink; collaborate with cross-functional teams and external partners for certification processes.",
      "Participate in Agile ceremonies (Stand-ups, Backlog Refinement, Sprint Planning, Retrospectives).",
      "Conduct periodic compliance audits and manage activities through project sign-off.",
    ],
  },
  {
    role: "Senior Test Engineer",
    org: "Valor Paytech, Chennai",
    dates: "Oct 2021 – Oct 2024",
    bullets: [
      "UI Payment Portal and POS Terminal QA/Test Engineer for the Valor Paytech Gateway — an Omnichannel Fintech Solution.",
      "Provided quality metrics updates and communicated production deficiencies.",
      "Conducted QA inspections and trained team members on testing procedures.",
      "Participated in Agile ceremonies and reported defects via TestLink.",
    ],
  },
  {
    role: "Test Engineer",
    org: "ISO Access Private Limited, Chennai",
    dates: "Jul 2019 – Oct 2020",
    bullets: [
      "UI Payment Portal and POS Terminal QA/Test Engineer for ISO Access (later rebranded as Valor Paytech).",
      "Worked in an Agile development environment; contributed to L3 MSR and EMV Product Certification.",
      "Provided quality updates and reported issues via bug tracking tools.",
    ],
  },
  {
    role: "Account Manager (Business Development Manager)",
    org: "Safexpress Private Limited, Chennai",
    dates: "Sep 2018 – Mar 2019",
    bullets: [
      "Managed key accounts and acted as BDM for India's leading logistics provider — Safexpress Pvt. Ltd.",
      "Resolved issues related to accounting, billing, and service delivery to maintain client satisfaction.",
      "Handled prestigious clients including Renault-Nissan, Tata Chemicals, SEW Eurodrive, Subros Ltd, Wittur Elevators, and OBO Bettermann.",
      "Achieved strong sales performance and developed in-depth knowledge of Booking, Networking, Supply Chain, and Logistics Operations.",
    ],
  },
];

const education = [
  { degree: "M.C.A. (Master of Computer Applications)", school: "University of Madras, Chennai", date: "May 2017" },
  { degree: "B.Sc. (Physics)", school: "New College, Chennai", date: "July 2013" },
];

const cardNumberGroups = [
  { x: 34, digits: "1234" },
  { x: 74, digits: "5678" },
  { x: 114, digits: "9012" },
  { x: 154, digits: "3456" },
];

function CardDecor() {
  return (
    <div className="chip-decor card-flip" aria-hidden="true">
      <div className="card-flip-inner">
        <svg className="card-face card-face-front" viewBox="0 0 300 190" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect className="chip-ring" x="10" y="10" width="280" height="170" rx="16" stroke="#2dd4a7" strokeWidth="1.2" />
          <rect className="chip-core" x="34" y="34" width="54" height="42" rx="6" stroke="#2dd4a7" strokeWidth="1.2" />
          <line className="chip-core" x1="61" y1="34" x2="61" y2="76" stroke="#2dd4a7" strokeWidth="1" />
          <line className="chip-core" x1="34" y1="55" x2="88" y2="55" stroke="#2dd4a7" strokeWidth="1" />
          <circle cx="238" cy="42" r="16" stroke="#2dd4a7" strokeOpacity="0.4" strokeWidth="1.2" />
          <circle cx="256" cy="42" r="16" stroke="#2dd4a7" strokeOpacity="0.4" strokeWidth="1.2" />
          <g className="chip-core" transform="translate(150,30) rotate(45)">
            <path d="M -3 9 A 5 5 0 0 1 3 9" stroke="#2dd4a7" strokeWidth="1.3" strokeLinecap="round" fill="none" />
            <path d="M -7.5 13.5 A 10.6 10.6 0 0 1 7.5 13.5" stroke="#2dd4a7" strokeWidth="1.3" strokeLinecap="round" fill="none" strokeOpacity="0.65" />
            <path d="M -12 18 A 17 17 0 0 1 12 18" stroke="#2dd4a7" strokeWidth="1.3" strokeLinecap="round" fill="none" strokeOpacity="0.4" />
          </g>
          {cardNumberGroups.map((g, i) => (
            <text
              key={g.x}
              className="chip-core"
              x={g.x}
              y="150"
              fontSize="13"
              fontWeight="600"
              letterSpacing="1.5"
              fontFamily="ui-monospace, monospace"
              fill="#2dd4a7"
              style={{ animationDelay: `${i * 0.25}s` }}
            >
              {g.digits}
            </text>
          ))}
          <text x="34" y="166" fontSize="6" letterSpacing="0.5" fontFamily="ui-monospace, monospace" fill="#2dd4a7" fillOpacity="0.6">VALID THRU</text>
          <text x="34" y="177" fontSize="11" fontWeight="600" letterSpacing="1" fontFamily="ui-monospace, monospace" fill="#2dd4a7">12/99</text>
          <text x="266" y="166" textAnchor="end" fontSize="6" letterSpacing="0.5" fontFamily="ui-monospace, monospace" fill="#2dd4a7" fillOpacity="0.6">CARD HOLDER</text>
          <text x="266" y="177" textAnchor="end" fontSize="10" fontWeight="600" letterSpacing="1" fontFamily="ui-monospace, monospace" fill="#2dd4a7">MUZAMIL IDROOS</text>
        </svg>

        <svg className="card-face card-face-back" viewBox="0 0 300 190" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect className="chip-ring" x="10" y="10" width="280" height="170" rx="16" stroke="#2dd4a7" strokeWidth="1.2" />
          <rect x="10" y="28" width="280" height="30" fill="#111417" />
          <rect x="24" y="72" width="200" height="20" rx="2" fill="#e8e5da" />
          <text x="32" y="85" fontSize="7" fontStyle="italic" fontFamily="Georgia, serif" fill="#555">Authorized Signature</text>
          <rect x="188" y="72" width="36" height="20" rx="2" fill="#f2f9f7" stroke="#333" strokeWidth="0.6" />
          <text x="206" y="86" textAnchor="middle" fontSize="9" fontStyle="italic" fontWeight="700" fontFamily="Georgia, serif" fill="#1a1a1a">482</text>
          <text x="24" y="105" fontSize="5.5" letterSpacing="0.4" fontFamily="ui-monospace, monospace" fill="#2dd4a7" fillOpacity="0.6">CVV</text>
          <circle cx="248" cy="140" r="12" stroke="#2dd4a7" strokeOpacity="0.35" strokeWidth="1" />
          <circle cx="262" cy="140" r="12" stroke="#2dd4a7" strokeOpacity="0.35" strokeWidth="1" />
          <text x="24" y="160" fontSize="5.5" letterSpacing="0.3" fontFamily="ui-monospace, monospace" fill="#2dd4a7" fillOpacity="0.5">
            THIS CARD IS PROPERTY OF THE ISSUING BANK
          </text>
          <text x="24" y="171" fontSize="5.5" letterSpacing="0.3" fontFamily="ui-monospace, monospace" fill="#2dd4a7" fillOpacity="0.5">
            IF FOUND, PLEASE RETURN TO NEAREST BRANCH
          </text>
        </svg>
      </div>
    </div>
  );
}

const posKeypadKeys = [
  { x: 62, y: 95, label: "1" },
  { x: 88, y: 95, label: "2" },
  { x: 114, y: 95, label: "3", pressOrder: 4 },
  { x: 62, y: 108, label: "4" },
  { x: 88, y: 108, label: "5" },
  { x: 114, y: 108, label: "6" },
  { x: 62, y: 121, label: "7", pressOrder: 2 },
  { x: 88, y: 121, label: "8" },
  { x: 114, y: 121, label: "9", pressOrder: 3 },
  { x: 62, y: 134, label: "*" },
  { x: 88, y: 134, label: "0", pressOrder: 1 },
  { x: 114, y: 134, label: "#" },
];

function PosTxnDecor() {
  return (
    <svg className="pos-txn-decor" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect className="chip-ring" x="50" y="30" width="100" height="140" rx="10" stroke="#2dd4a7" strokeWidth="1.2" />
      <rect className="chip-core" x="62" y="44" width="76" height="46" rx="4" fill="#2dd4a7" fillOpacity="0.06" stroke="#2dd4a7" strokeWidth="1.2" />
      {posKeypadKeys.map((k) => (
        <g key={`${k.x}-${k.y}`}>
          <rect
            className={k.pressOrder ? `key-press key-press-${k.pressOrder}` : undefined}
            x={k.x}
            y={k.y}
            width="22"
            height="13"
            rx="2"
            fill="#2dd4a7"
            fillOpacity="0"
            stroke="#2dd4a7"
            strokeOpacity="0.45"
            strokeWidth="0.8"
          />
          <text x={k.x + 11} y={k.y + 9.5} textAnchor="middle" fontSize="6.5" fontFamily="ui-monospace, monospace" fill="#2dd4a7" fillOpacity="0.75">
            {k.label}
          </text>
        </g>
      ))}
      <rect x="76" y="150" width="48" height="6" rx="3" stroke="#2dd4a7" strokeOpacity="0.6" strokeWidth="1" />

      <g className="pos-step pos-step-1">
        <text x="100" y="58" textAnchor="middle" fontSize="6" letterSpacing="1" fontFamily="ui-monospace, monospace" fill="#2dd4a7">AMOUNT DUE</text>
        <text x="100" y="76" textAnchor="middle" fontSize="13" fontWeight="700" fontFamily="ui-monospace, monospace" fill="#2dd4a7">$10.00</text>
      </g>
      <g className="pos-step pos-step-2">
        <text x="100" y="58" textAnchor="middle" fontSize="6" letterSpacing="1" fontFamily="ui-monospace, monospace" fill="#2dd4a7">ENTER PIN</text>
        <text x="100" y="77" textAnchor="middle" fontSize="13" fontWeight="700" letterSpacing="4" fontFamily="ui-monospace, monospace" fill="#2dd4a7">****</text>
      </g>
      <g className="pos-step pos-step-3">
        <circle cx="76" cy="68" r="7" stroke="#34d399" strokeWidth="1.6" fill="none" />
        <path d="M72.5 68 L75 70.5 L80 64.5" stroke="#34d399" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <text x="112" y="71" textAnchor="middle" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace" fill="#34d399">APPROVED</text>
      </g>

      <line x1="70" y1="30" x2="130" y2="30" stroke="#2dd4a7" strokeOpacity="0.5" strokeWidth="1" />
      <g className="pos-receipt">
        <rect x="80" y="4" width="40" height="26" fill="#f2f9f7" />
        <line x1="86" y1="11" x2="114" y2="11" stroke="#0b2545" strokeOpacity="0.4" strokeWidth="1" />
        <line x1="86" y1="17" x2="114" y2="17" stroke="#0b2545" strokeOpacity="0.4" strokeWidth="1" />
        <line x1="86" y1="23" x2="106" y2="23" stroke="#0b2545" strokeOpacity="0.4" strokeWidth="1" />
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <div className="status-strip">
        <div className="wrap">

          <span>STATUS: <b>APPROVED</b></span>
          <span>ROLE: <b>QA &amp; EMV CERT. MANAGER</b></span>
          <span>LOCATION: <b>CHENNAI, IN</b></span>
        </div>
      </div>

      <header className="hero">
        <CardDecor />
        <PosTxnDecor />
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-main">
              <div className="hero-top">
                <span className="badge-approved">
                  <span className="dot" aria-hidden="true" />
                  TXN APPROVED
                </span>
              </div>
              <h1 className="hero-name">Muzamil Idroos</h1>
              <p className="hero-title">QA and EMV Certification Manager</p>
              <p className="hero-sub">
                Specialized in POS and Payment Switch Testing and EMV Level 3
                Acquirer Integration.
              </p>
              <div className="hero-contact">
                <a href="tel:+919042900550">+91&nbsp;9042900550</a>
                <span className="sep">/</span>
                <a href="https://linkedin.com/in/muzamilidroos" target="_blank" rel="noopener noreferrer">linkedin.com/in/muzamilidroos</a>
                <span className="sep">/</span>
                <span>Chennai, India</span>
              </div>
            </div>

            <div className="hero-photo-frame">
              <span className="corner tl" aria-hidden="true" />
              <span className="corner tr" aria-hidden="true" />
              <span className="corner bl" aria-hidden="true" />
              <span className="corner br" aria-hidden="true" />
              <Image
                src="/profile.jpg"
                alt="Portrait of Muzamil Idroos"
                width={220}
                height={220}
                priority
              />
              <div className="photo-caption">ID · MI&#8209;EMV</div>
            </div>
          </div>
        </div>
      </header>

      <section className="section" id="about">
        <div className="wrap">
          <div className="step-row">
            <span className="step-eyebrow">STEP 01 — SELECT</span>
            <div className="step-rule" />
          </div>
          <h2 className="step-title" style={{ marginBottom: 18 }}>About</h2>
          <p className="lede">
            ISTQB® CTFL and CTAL-TM certified Certification Manager and QA leader
            with 7+ years of experience in EMV Level 3 Certification, Software
            Quality Assurance, and Project Management within the U.S. Payment
            &amp; Banking domain.
          </p>
          <ul className="check-list">
            <li>Expertise in Manual Testing, Functional Testing, QA process ownership, ISO 8583 validation, and Level 3 EMV Testing &amp; Certification for POS terminals (Newland Technologies, Castles Technologies).</li>
            <li>Proficient in QA testing for Android and iOS mobile applications.</li>
            <li>Skilled in reviewing User Stories, developing Test Scripts, and using Requirements Traceability Matrix (RTM).</li>
            <li>Experienced in the complete Software Testing Life Cycle (STLC): Requirement Analysis, Test Design, Test Execution, Defect Tracking, Debugging, and Status Reporting.</li>
            <li>Strong knowledge of Agile (Scrum) and Waterfall QA methodologies; hands-on with TestLink and other bug tracking tools.</li>
          </ul>
        </div>
      </section>

      <section className="section on-ink" id="competencies">
        <div className="wrap">
          <div className="step-row">
            <span className="step-eyebrow">STEP 02 — GET PROCESSING OPTIONS</span>
            <div className="step-rule" />
          </div>
          <h2 className="step-title" style={{ marginBottom: 18 }}>Core Competencies</h2>
          <div className="tag-grid">
            {competencies.map((c) => (
              <span className="tag" key={c}>{c}</span>
            ))}
          </div>

          <div className="subgroup-label">Tools</div>
          <p className="tools-line">
            <b>EMV Certification:</b> UL BTT, ICC TMat &nbsp;·&nbsp;
            <b>Test Management / QA:</b> TestLink &nbsp;·&nbsp;
            <b>API Testing:</b> Postman
          </p>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="wrap">
          <div className="step-row">
            <span className="step-eyebrow">STEP 03 — READ RECORD</span>
            <div className="step-rule" />
          </div>
          <h2 className="step-title" style={{ marginBottom: 18 }}>Work Experience</h2>
          <div className="log">
            {experience.map((job) => (
              <div className="log-entry" key={job.role + job.dates}>
                <div className="log-head">
                  <span className="log-role">{job.role}</span>
                  <span className="log-leader" />
                  <span className="log-dates">{job.dates}</span>
                </div>
                <p className="log-org">{job.org}</p>
                <ul className="log-bullets">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section on-ink" id="certifications">
        <div className="wrap">
          <div className="step-row">
            <span className="step-eyebrow">STEP 04 — GENERATE AC</span>
            <div className="step-rule" />
          </div>
          <h2 className="step-title" style={{ marginBottom: 18 }}>Professional Certifications</h2>
          <div className="cert-grid">
            {certifications.map((c) => (
              <div className="cert-card" key={c.name}>
                <p className="name">{c.name}</p>
                <p className="meta">{c.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="education">
        <div className="wrap">
          <div className="step-row">
            <span className="step-eyebrow">STEP 05 — EXTERNAL AUTHENTICATE</span>
            <div className="step-rule" />
          </div>
          <h2 className="step-title" style={{ marginBottom: 18 }}>Education</h2>
          {education.map((e) => (
            <div className="edu-item" key={e.degree}>
              <div>
                <div>{e.degree}</div>
                <div className="school">{e.school}</div>
              </div>
              <div className="date">{e.date}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="more">
        <div className="wrap">
          <div className="step-row">
            <span className="step-eyebrow">STEP 06 — ADDITIONAL DATA</span>
            <div className="step-rule" />
          </div>
          <h2 className="step-title" style={{ marginBottom: 18 }}>Coming Next</h2>
          <div className="pending-box">
            <div className="line"><span>PAYMENTS INSIGHTS &amp; CASE NOTES</span><span className="flag">PENDING</span></div>
            <div className="line"><span>QA FRAMEWORKS &amp; CERTIFICATION WRITE-UPS</span><span className="flag">PENDING</span></div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          <span>© {new Date().getFullYear()} Muzamil Idroos</span>
          <a href="https://linkedin.com/in/muzamilidroos" target="_blank" rel="noopener noreferrer">linkedin.com/in/muzamilidroos</a>
        </div>
      </footer>
    </main>
  );
}
