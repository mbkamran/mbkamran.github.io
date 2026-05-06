import CTASection from '../components/CTASection'

export default function CaseStudies() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <span className="page-header-eyebrow">Real Work. Real Results.</span>
          <h1 className="page-header-title">Case Studies</h1>
          <p className="page-header-subtitle">
            A selection of AI automation projects — each one built to solve a specific business problem
            and measured by its impact on cost, time, and productivity.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="case-studies-list">

            {/* Case Study 1 — image left, content right */}
            <div className="case-study">
              <div className="case-study-image-col">
                <img src="/assets/images/erpnext-reporting.png" alt="ERPNext custom reporting interface" className="case-study-img-placeholder" />
              </div>
              <div className="case-study-content-col">
                <span className="case-study-category">Workflow Automation</span>
                <h2 className="case-study-title">Automated Custom Reporting Inside ERPNext</h2>
                <div className="case-study-section">
                  <p className="case-study-section-label">The Real Problem</p>
                  <p className="case-study-section-text">
                    A distribution company ran operations entirely on ERPNext but relied on Excel for
                    any meaningful analysis. Every custom report — stock aging by warehouse, payables
                    vs. cash position, cross-module sales summaries — required IT to write SQL (Query
                    Report) or Python (Script Report) and deploy it. New requests took 3–5 days.
                    Recurring reports were built by hand each week. Business decisions were routinely
                    made on data that was already a week old.
                  </p>
                </div>
                <div className="case-study-section">
                  <p className="case-study-section-label">The Solution</p>
                  <p className="case-study-section-text">
                    We built an automated reporting layer on top of ERPNext that generates and registers
                    custom reports natively. Business users describe what they need in plain language;
                    the system constructs the appropriate Query Report (SQL) or Script Report (Python),
                    validates it against the live ERPNext DocType schema, and registers it directly in
                    the reporting module — with full filter support, just like a built-in report.
                    Recurring reports run on a schedule and are delivered automatically.
                  </p>
                </div>
                <div className="case-study-section">
                  <p className="case-study-section-label">The Outcome</p>
                  <p className="case-study-section-text">
                    Developer time for report requests dropped from 15+ hours a week to near zero.
                    Report turnaround went from 3–5 days to same-day. 40+ custom reports now run
                    automatically across Sales, Inventory, and Finance modules.
                  </p>
                </div>
                <blockquote className="cs-lesson">
                  ERPNext's reporting module is powerful but requires technical knowledge to extend.
                  Most companies end up running two parallel systems — standard reports in ERPNext,
                  custom analysis in Excel. The gap between them is where automation pays for itself
                  fastest.
                </blockquote>
                <ul className="case-study-tech-list">
                  {['LangGraph', 'Claude Sonnet', 'ERPNext API', 'Frappe Framework', 'Python', 'Docker'].map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Case Study 2 — content left, image right */}
            <div className="case-study">
              <div className="case-study-content-col">
                <span className="case-study-category">Enterprise RAG</span>
                <h2 className="case-study-title">Knowledge-Retrieval Chatbot for a Big Four Bank</h2>
                <div className="case-study-section">
                  <p className="case-study-section-label">The Real Problem</p>
                  <p className="case-study-section-text">
                    A major bank's support team handled hundreds of daily queries about policies,
                    products, and procedures — knowledge scattered across documents that no one had
                    time to search properly. Average resolution time was 45 minutes, mostly spent
                    looking things up. The bank had already tried a basic FAQ bot. It failed because
                    it couldn't synthesise answers that required information from multiple documents.
                  </p>
                </div>
                <div className="case-study-section">
                  <p className="case-study-section-label">The Solution</p>
                  <p className="case-study-section-text">
                    We built an enterprise RAG system on Azure that ingests the bank's entire document
                    library and returns answers grounded in specific source documents — not generated
                    from model memory. The critical decision was metadata filtering: staff query by
                    document category, date range, and product line to get precisely relevant content.
                    All outputs use banking-compliant prompt engineering to prevent hallucination.
                  </p>
                </div>
                <div className="case-study-section">
                  <p className="case-study-section-label">The Outcome</p>
                  <p className="case-study-section-text">
                    65% improvement in query resolution efficiency. Resolution time dropped from
                    45 minutes to 3 minutes. 2,000+ daily queries now handled automatically.
                  </p>
                </div>
                <blockquote className="cs-lesson">
                  Most RAG systems fail not because the AI is wrong, but because the retrieval is
                  imprecise. The real engineering work is in the indexing strategy — metadata,
                  chunking, and filtering — not the model itself.
                </blockquote>
                <ul className="case-study-tech-list">
                  {['Azure AI Search', 'GPT-4 Mini', 'LangChain', 'Databricks', 'FastAPI', 'Azure Cloud'].map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="case-study-image-col">
                <img src="/assets/images/banking-rag-chatbot.png" alt="Banking RAG chatbot interface" className="case-study-img-placeholder" />
              </div>
            </div>

            {/* Case Study 3 — image left, content right */}
            <div className="case-study">
              <div className="case-study-image-col">
                <img src="/assets/images/voice-sql-government.png" alt="Voice-enabled multilingual SQL assistant" className="case-study-img-placeholder" />
              </div>
              <div className="case-study-content-col">
                <span className="case-study-category">Voice AI</span>
                <h2 className="case-study-title">Voice-Enabled Multilingual SQL Assistant for Government</h2>
                <div className="case-study-section">
                  <p className="case-study-section-label">The Real Problem</p>
                  <p className="case-study-section-text">
                    A government institution had rich operational data — but non-technical staff had no
                    way to access it independently. Every report required routing through IT: write SQL,
                    run it, format the output, return it hours later. Decisions were routinely made on
                    stale data. The added constraint: most staff communicated in Urdu and Roman Urdu,
                    making any English-only solution dead on arrival.
                  </p>
                </div>
                <div className="case-study-section">
                  <p className="case-study-section-label">The Solution</p>
                  <p className="case-study-section-text">
                    We built an agentic Text-to-SQL system with voice input accepting queries in Urdu,
                    Roman Urdu, and English. Staff speak their question; the system translates it into
                    SQL, queries ClickHouse, and returns a plain-language answer with the underlying
                    data. The IT intermediary is fully removed from routine reporting.
                  </p>
                </div>
                <div className="case-study-section">
                  <p className="case-study-section-label">The Outcome</p>
                  <p className="case-study-section-text">
                    40% reduction in operational costs. Zero IT dependency for routine reports.
                    Non-technical staff now query the database independently in 3 languages.
                  </p>
                </div>
                <blockquote className="cs-lesson">
                  A system that only accepts English implicitly excludes most of your staff. In many
                  contexts, multilingual support isn't a nice-to-have — it's the difference between
                  a tool that gets used and one that doesn't.
                </blockquote>
                <ul className="case-study-tech-list">
                  {['Claude Sonnet', 'LangGraph', 'ClickHouse', 'Facebook MMS', 'FastAPI', 'Docker'].map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Case Study 4 — content left, image right */}
            <div className="case-study">
              <div className="case-study-content-col">
                <span className="case-study-category">Computer Vision · Edge AI</span>
                <h2 className="case-study-title">Gesture-Controlled Game Without VR Hardware</h2>
                <div className="case-study-section">
                  <p className="case-study-section-label">The Real Problem</p>
                  <p className="case-study-section-text">
                    A gaming company had built a motion-based game but the hardware requirement was
                    killing adoption. Players needed a VR headset or physical controller — a
                    friction-heavy setup with a real cost barrier. The goal was natural interaction:
                    a player stands in front of their phone, moves their body, the game responds.
                    The challenge was that existing off-the-shelf pose detection tools were too slow
                    for real-time gameplay or too inaccurate at the angles players actually stood at.
                  </p>
                </div>
                <div className="case-study-section">
                  <p className="case-study-section-label">The Solution</p>
                  <p className="case-study-section-text">
                    We trained a custom computer vision model on a synthetic dataset built specifically
                    for the angles and lighting conditions of real gameplay scenarios. The model detects
                    a player's full-body position and predicts 3D coordinates in real time using
                    nothing but a standard monocular phone camera. The model runs on-device via ONNX —
                    no server round-trip, no depth sensor, no additional hardware — fast enough for
                    interactive gameplay at 30 frames per second.
                  </p>
                </div>
                <div className="case-study-section">
                  <p className="case-study-section-label">The Outcome</p>
                  <p className="case-study-section-text">
                    30fps real-time inference on-device. 90% pose detection accuracy. Zero additional
                    hardware required — any smartphone camera is sufficient.
                  </p>
                </div>
                <blockquote className="cs-lesson">
                  The assumption that computer vision requires specialised hardware is increasingly
                  false. The real work isn't in the model — it's in building a training dataset that
                  reflects how your users actually behave in the real world, not in controlled lab
                  conditions.
                </blockquote>
                <ul className="case-study-tech-list">
                  {['YOLO11n', 'ONNX', 'Mediapipe', 'Python', 'Unity / C#', 'OpenCV', 'Synthetic Data'].map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="case-study-image-col">
                <img src="/assets/images/gesture-game.png" alt="Gesture-controlled game without VR hardware" className="case-study-img-placeholder" />
              </div>
            </div>


            {/* Case Study 5 — image left, content right */}
            <div className="case-study">
              <div className="case-study-image-col">
                <img src="/assets/images/invoice-extraction.png" alt="Automated invoice and contract data extraction" className="case-study-img-placeholder" />
              </div>
              <div className="case-study-content-col">
                <span className="case-study-category">Document Intelligence</span>
                <h2 className="case-study-title">Automated Invoice &amp; Contract Data Extraction</h2>
                <div className="case-study-section">
                  <p className="case-study-section-label">The Real Problem</p>
                  <p className="case-study-section-text">
                    Finance and legal teams spend significant time manually reading and re-entering
                    data from invoices, contracts, and supplier documents. The documents arrive in
                    inconsistent formats — PDFs, scans, email attachments — and standard OCR tools
                    don't reliably handle extraction across layouts. Errors compound: a missed clause
                    or a wrongly keyed invoice amount creates downstream problems that take hours to
                    untangle.
                  </p>
                </div>
                <div className="case-study-section">
                  <p className="case-study-section-label">The Solution</p>
                  <p className="case-study-section-text">
                    An agentic document pipeline that ingests from any source, uses a vision-capable
                    language model to extract structured fields (amounts, dates, party names, clauses),
                    validates against business rules, and pushes clean records directly into the target
                    system. Human review is reserved only for flagged edge cases. The system improves
                    extraction accuracy as it encounters more document layouts over time.
                  </p>
                </div>
                <div className="case-study-section">
                  <p className="case-study-section-label">The Outcome</p>
                  <p className="case-study-section-text">
                    80% reduction in document processing time. Error rate dropped from ~5% manual
                    entry to near zero. Finance and legal teams now handle 3× the document volume
                    with the same headcount.
                  </p>
                </div>
                <blockquote className="cs-lesson">
                  This is one of the highest-ROI applications of AI in operations. The time saved per
                  document is small, but at hundreds or thousands of documents per month, the
                  compounding effect is significant. The key is designing the confidence threshold and
                  human escalation logic correctly — over-automating creates errors, under-automating
                  defeats the purpose.
                </blockquote>
                <ul className="case-study-tech-list">
                  {['GPT-4o Vision', 'LangGraph', 'FastAPI', 'Azure', 'Python', 'Docker'].map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Case Study 6 — content left, image right */}
            <div className="case-study" style={{ borderBottom: 'none' }}>
              <div className="case-study-content-col">
                <span className="case-study-category">Customer Support Automation</span>
                <h2 className="case-study-title">AI-Powered First-Line Support for SaaS &amp; E-commerce</h2>
                <div className="case-study-section">
                  <p className="case-study-section-label">The Real Problem</p>
                  <p className="case-study-section-text">
                    Growing SaaS and e-commerce companies hit a support wall: ticket volume scales
                    with customers, but hiring support agents scales with cost. The first 80% of
                    tickets are repetitive — order status, refund requests, account access, how-to
                    questions — yet they consume the same agent time as genuinely complex issues.
                    Generic chatbots fail here because they can't look up live order data, process a
                    refund, or take action inside the company's own systems.
                  </p>
                </div>
                <div className="case-study-section">
                  <p className="case-study-section-label">The Solution</p>
                  <p className="case-study-section-text">
                    An agentic support system that connects to the company's CRM, order management,
                    and knowledge base via API. It handles the full resolution cycle for routine
                    tickets autonomously — looking up orders, processing eligible refunds, resetting
                    accounts — and escalates to human agents only when judgment is genuinely required.
                    A full audit trail lets support managers review every automated action.
                  </p>
                </div>
                <div className="case-study-section">
                  <p className="case-study-section-label">The Outcome</p>
                  <p className="case-study-section-text">
                    70% of routine tickets resolved autonomously without agent involvement.
                    First-response time dropped from hours to seconds. Support capacity effectively
                    tripled without adding headcount.
                  </p>
                </div>
                <blockquote className="cs-lesson">
                  The difference between a useful support bot and a frustrating one is tool access.
                  A bot that can only answer questions is a glorified FAQ. A bot that can look up an
                  order, check a return policy, and process the refund — that's one that resolves
                  tickets. The engineering challenge is reliable tool use and knowing when not to act
                  autonomously.
                </blockquote>
                <ul className="case-study-tech-list">
                  {['OpenAI Agents SDK', 'LangGraph', 'CRM APIs', 'FastAPI', 'Python', 'Docker'].map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="case-study-image-col">
                <img src="/assets/images/support-automation.png" alt="AI-powered first-line support automation" className="case-study-img-placeholder" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection
        eyebrow="See a pattern you recognise?"
        title={<>The Situation Is Usually<br />More Familiar Than It Looks.</>}
        description="Every one of these started with a team doing something manually that they assumed couldn't be automated. It almost always can."
      />
    </>
  )
}
