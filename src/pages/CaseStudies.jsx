import ImagePlaceholder from '../components/ImagePlaceholder'
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

      {/* Case Studies List */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="case-studies-list">

            {/* Case Study 1 — image left, content right */}
            <div className="case-study">
              <div className="case-study-image-col">
                <ImagePlaceholder
                  icon="fa-solid fa-gears"
                  label="ERPNext Automation Interface"
                  hint="Screenshot of ERPNext with AI automation panel, or multi-agent workflow diagram (800×600px)"
                  className="case-study-img-placeholder"
                />
              </div>
              <div className="case-study-content-col">
                <span className="case-study-category">Workflow Automation</span>
                <h2 className="case-study-title">Automating ERPNext with Agentic AI</h2>
                <div className="case-study-section">
                  <p className="case-study-section-label">The Challenge</p>
                  <p className="case-study-section-text">
                    A manufacturing company was spending 200+ hours per month on manual data entry —
                    purchase order creation, vendor validation, and inventory reconciliation — all done
                    by hand inside ERPNext.
                  </p>
                </div>
                <div className="case-study-section">
                  <p className="case-study-section-label">The Solution</p>
                  <p className="case-study-section-text">
                    Built a multi-agent AI system using LangGraph that monitors email inboxes, extracts
                    PO details from unstructured text, validates entries against the vendor database, and
                    auto-creates purchase orders in ERPNext via API — all without human intervention.
                  </p>
                </div>
                <div className="case-study-section">
                  <p className="case-study-section-label">The Outcome</p>
                  <p className="case-study-section-text">
                    85% reduction in manual data entry. 3-day PO cycle time cut to under 4 hours.
                    Zero data entry errors since deployment.
                  </p>
                </div>
                <ul className="case-study-tech-list">
                  {['LangGraph', 'Claude Sonnet', 'ERPNext API', 'Python', 'FastAPI', 'Docker'].map((t) => (
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
                  <p className="case-study-section-label">The Challenge</p>
                  <p className="case-study-section-text">
                    A major bank's support team was overwhelmed with repetitive internal queries about
                    policies, products, and procedures. Average resolution time per query was 45 minutes
                    — mostly spent searching documents.
                  </p>
                </div>
                <div className="case-study-section">
                  <p className="case-study-section-label">The Solution</p>
                  <p className="case-study-section-text">
                    Built an enterprise-grade RAG system on Azure using GPT-4 Mini, Azure AI Search,
                    and Databricks for scalable document ingestion. Integrated seamlessly with existing
                    banking workflows and enforced GDPR compliance throughout.
                  </p>
                </div>
                <div className="case-study-section">
                  <p className="case-study-section-label">The Outcome</p>
                  <p className="case-study-section-text">
                    65% improvement in query resolution efficiency. 90% reduction in escalations to
                    senior staff. Full GDPR compliance maintained throughout.
                  </p>
                </div>
                <ul className="case-study-tech-list">
                  {['Azure AI Search', 'GPT-4 Mini', 'LangChain', 'Databricks', 'FastAPI', 'Azure Cloud'].map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="case-study-image-col">
                <ImagePlaceholder
                  icon="fa-solid fa-comments"
                  label="Chatbot Interface Screenshot"
                  hint="Screenshot of the chatbot UI showing a conversation, or Azure AI Search architecture diagram (800×600px)"
                  className="case-study-img-placeholder"
                />
              </div>
            </div>

            {/* Case Study 3 — image left, content right */}
            <div className="case-study">
              <div className="case-study-image-col">
                <ImagePlaceholder
                  icon="fa-solid fa-microphone-lines"
                  label="Voice Interface / Query Results"
                  hint="Screenshot of the voice interface showing a query and result, or system architecture diagram (800×600px)"
                  className="case-study-img-placeholder"
                />
              </div>
              <div className="case-study-content-col">
                <span className="case-study-category">Voice AI</span>
                <h2 className="case-study-title">Voice-Enabled Multilingual SQL Assistant for Government</h2>
                <div className="case-study-section">
                  <p className="case-study-section-label">The Challenge</p>
                  <p className="case-study-section-text">
                    A government institution needed non-technical staff to query complex operational
                    databases in both Urdu and English — without any SQL knowledge and without relying
                    on IT to pull reports.
                  </p>
                </div>
                <div className="case-study-section">
                  <p className="case-study-section-label">The Solution</p>
                  <p className="case-study-section-text">
                    Designed an Agentic Text-to-SQL system using Claude Sonnet with bilingual voice
                    input (Facebook MMS for Urdu TTS), LangGraph orchestration, and ClickHouse as the
                    analytical backend. Handles both formal Urdu and Roman Urdu input. Deployed via
                    Docker and FastAPI.
                  </p>
                </div>
                <div className="case-study-section">
                  <p className="case-study-section-label">The Outcome</p>
                  <p className="case-study-section-text">
                    40% reduction in operational costs. Non-technical staff now query databases
                    independently. Zero IT dependency for routine reporting.
                  </p>
                </div>
                <ul className="case-study-tech-list">
                  {['Claude Sonnet', 'LangGraph', 'ClickHouse', 'Facebook MMS', 'FastAPI', 'Docker'].map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Have a similar challenge?"
        title={<>Let's Build Your<br />Business Case for AI.</>}
        description="Every project starts with a conversation. Tell me what's slowing your team down and I'll tell you what's possible — and how fast we can get there."
      />
    </>
  )
}
