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

const chipLeads = [
  { x1: 40, y1: 70, x2: 10, y2: 70 },
  { x1: 40, y1: 100, x2: 4, y2: 100 },
  { x1: 40, y1: 130, x2: 10, y2: 130 },
  { x1: 160, y1: 70, x2: 190, y2: 70 },
  { x1: 160, y1: 100, x2: 196, y2: 100 },
  { x1: 160, y1: 130, x2: 190, y2: 130 },
  { x1: 70, y1: 40, x2: 70, y2: 10 },
  { x1: 130, y1: 40, x2: 130, y2: 10 },
  { x1: 70, y1: 160, x2: 70, y2: 190 },
  { x1: 130, y1: 160, x2: 130, y2: 190 },
];

function ChipDecor() {
  return (
    <svg className="chip-decor" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect className="chip-ring" x="40" y="40" width="120" height="120" rx="14" stroke="#2dd4a7" strokeWidth="1.2" />
      <rect className="chip-core" x="62" y="62" width="76" height="76" rx="8" stroke="#2dd4a7" strokeWidth="1.2" />
      {chipLeads.map((l, i) => (
        <line
          key={i}
          className="chip-lead"
          x1={l.x1}
          y1={l.y1}
          x2={l.x2}
          y2={l.y2}
          stroke="#2dd4a7"
          strokeWidth="1.2"
          style={{ animationDelay: `${(i % 5) * 0.22}s` }}
        />
      ))}
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
        <ChipDecor />
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
                <a href="mailto:muzamilidroos@gmail.com">muzamilidroos@gmail.com</a>
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
          <a href="mailto:muzamilidroos@gmail.com">muzamilidroos@gmail.com</a>
        </div>
      </footer>
    </main>
  );
}
