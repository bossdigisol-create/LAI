// Service content. Each entry powers its service page, the services hub, navigation,
// sitemap and structured data, so edits here update the whole site.
// Display order is set by `serviceOrder` and `homeServiceOrder` at the bottom of the file.

const serviceEntries = [
  {
    slug: "ai-governance-strategy",
    icon: "shield",
    title: "AI Governance & Strategy",
    shortTitle: "AI Governance",
    topic: "AI governance",
    seoTitle: "Healthcare AI Governance & Strategy Consulting",
    metaDescription:
      "Clinician-led AI governance for hospitals and health systems: governance councils, policy, risk and bias assessment, clinical validation and AI literacy training.",
    eyebrow: "AI governance & strategy",
    headline: "Healthcare AI governance, grounded in clinical reality.",
    summary:
      "Decide which AI belongs in your organization, set the rules for using it safely and give clinicians a real voice in every decision.",
    intro:
      "Most health systems already use AI, often in more places than leadership realizes. We help you take stock of what is in use, decide what should be, and build the structures that keep every tool safe, fair and accountable long after go-live.",
    challenge: {
      heading: "Adoption is moving faster than oversight",
      body: [
        "Ambient documentation, sepsis prediction, inbox triage, imaging prioritization, revenue cycle automation. AI now reaches almost every corner of a hospital, and it often arrives through a vendor update rather than a deliberate decision. Few organizations can say with confidence which models are running, who approved them and how they perform for their own patients.",
        "Good governance does not slow innovation down. It gives leaders a clear way to say yes to the right tools, set the conditions for using them and catch problems before patients feel them. It also has to include the people who use these tools every shift. Nurses are the largest part of the clinical workforce, yet they are often missing from the committees that approve the technology they are asked to adopt.",
      ],
      stat: true,
    },
    included: [
      {
        title: "AI governance council design",
        body: "Charter, membership, decision rights and an intake process for an AI oversight body, with clinical, nursing, informatics, compliance, legal, equity and patient safety voices at the table.",
      },
      {
        title: "Policy, standards and compliance",
        body: "Acceptable-use, procurement and transparency policies aligned with recognized frameworks, including the NIST AI Risk Management Framework and the Joint Commission and CHAI guidance on responsible AI use.",
      },
      {
        title: "Risk, bias and safety assessments",
        body: "Structured reviews of tools in use or under consideration: intended use, training data, performance across patient groups, failure modes and what happens in the workflow when the model is wrong.",
      },
      {
        title: "Clinical validation frameworks",
        body: "Local validation and monitoring plans that test whether a model works in your population and your workflows, not only in a vendor study, with clear thresholds for intervention, retraining or retirement.",
      },
      {
        title: "AI literacy for staff and leadership",
        body: "Practical education for boards, executives, managers and frontline clinicians on how these tools work, where they fail and how to question their output.",
      },
    ],
    approach: [
      { title: "Inventory", body: "Map the AI already in use, including embedded EHR features and vendor add-ons, and who owns each one." },
      { title: "Prioritize", body: "Rank use cases by clinical value, risk and readiness so investment follows strategy rather than sales cycles." },
      { title: "Govern", body: "Stand up the council, policies and intake workflow, then run the first reviews together." },
      { title: "Monitor", body: "Track performance, equity and safety signals so oversight continues after go-live." },
    ],
    outcomes: [
      "A documented answer to “who approved this tool, and why?”",
      "A repeatable intake and review process for vendors and internal teams",
      "Monitoring that surfaces drift, bias and safety signals early",
      "Leaders and clinicians who understand what AI can and cannot do",
    ],
    audience: [
      "Chief executive and operating officers",
      "Chief nursing and nursing informatics officers",
      "Chief medical and medical information officers",
      "Quality, patient safety and compliance leaders",
      "Boards and governance committees",
    ],
    frameworks: [
      "NIST AI Risk Management Framework",
      "Joint Commission and CHAI guidance on responsible AI use",
      "ONC HTI-1 decision support transparency requirements",
    ],
    faqs: [
      {
        q: "Do we need AI governance if we only use AI built by our vendors?",
        a: "Yes. Most AI in hospitals arrives inside vendor products, including EHR features that may be switched on by default. Governance gives you a consistent way to evaluate those tools, decide how they are configured and monitor how they perform locally, regardless of who built them.",
      },
      {
        q: "How does this relate to the Joint Commission’s responsible AI guidance?",
        a: "In 2025 the Joint Commission and the Coalition for Health AI (CHAI) published guidance on the responsible use of AI in healthcare, and in June 2026 the Joint Commission introduced a voluntary certification built on it. The certification looks at governance, data management, risk and bias reduction, safety monitoring and validation, and transparency, education and training. We use that guidance, alongside the NIST AI Risk Management Framework, as a reference point when we design your program.",
      },
      {
        q: "Who should sit on an AI governance council?",
        a: "At a minimum: clinical and nursing leadership, informatics, IT and security, compliance and legal, quality and patient safety, and someone accountable for health equity. Frontline clinicians and patient representatives make the group far more effective. We help you size the council to your organization so it can make decisions without becoming a bottleneck.",
      },
      {
        q: "Where do we start if we have nothing formal in place?",
        a: "With an inventory. Knowing which AI tools are already in use, where they sit in the workflow and who owns them is the foundation for every policy and review process that follows. From there we agree on scope and priorities with you before building anything further.",
      },
    ],
    related: ["healthcare-ai-innovation", "ai-translation-change-management", "clinical-analytics-informatics"],
  },
  {
    slug: "healthcare-ai-innovation",
    icon: "spark",
    title: "Healthcare AI Innovation",
    shortTitle: "AI Innovation",
    topic: "healthcare AI",
    seoTitle: "Healthcare AI Implementation & Clinical Integration",
    metaDescription:
      "Bring AI into clinical care without breaking workflows: AI roadmaps, clinical decision support optimization, equity reviews, rapid pilots and human-AI collaboration models.",
    eyebrow: "Healthcare AI innovation",
    headline: "Healthcare AI that works at the bedside, with clinicians in charge.",
    summary:
      "Move from promising pilot to dependable practice with AI that fits real workflows and keeps clinicians in control of decisions.",
    intro:
      "AI should make care safer, faster and more human. We help you choose the right problems, design the workflow before the tool, test it honestly and scale only what earns its place at the bedside.",
    challenge: {
      heading: "Too many pilots never become practice",
      body: [
        "Healthcare is full of AI pilots that impressed in a demonstration and quietly stalled on the unit. The model performed well on the vendor’s data and poorly on yours. The alert fired at the wrong moment in the workflow. Or nobody owned the tool once the project team moved on.",
        "Successful implementation starts with the clinical problem, not the product. It needs an honest baseline, a workflow designed around the people doing the work and a plan for what clinicians should do when the tool is wrong. That is where a clinician’s perspective changes the outcome.",
      ],
    },
    included: [
      {
        title: "AI integration strategy and roadmap",
        body: "A prioritized portfolio of use cases matched to your clinical goals, data readiness and capacity for change, with sequencing, owners and success measures.",
      },
      {
        title: "Clinical decision support optimization",
        body: "Review and redesign of alerts, advisories and predictive tools to cut noise, reduce alert fatigue and deliver the right information at the right step of the workflow.",
      },
      {
        title: "Equity-centered technology evaluation",
        body: "Bias detection and mitigation reviews that examine how tools perform across patient populations before deployment and after go-live.",
      },
      {
        title: "Innovation labs and rapid pilots",
        body: "Small, well-designed pilots with defined hypotheses, baselines and stopping criteria, so you learn quickly and scale on evidence.",
      },
      {
        title: "Human-AI collaboration models",
        body: "Role definitions, escalation paths and documentation practices that keep clinicians as the decision-makers and make accountability clear.",
      },
    ],
    approach: [
      { title: "Define the problem", body: "Start from a clinical or operational pain point with a measurable baseline." },
      { title: "Design the workflow", body: "Map who sees what, when, and what they are expected to do with it." },
      { title: "Pilot honestly", body: "Test in a controlled setting with clear success and stopping criteria." },
      { title: "Scale or stop", body: "Expand what works, retire what does not and record why." },
    ],
    outcomes: [
      "A use-case portfolio tied to measurable clinical goals",
      "Decision support that clinicians act on rather than override",
      "Evidence of how each tool performs for your patient population",
      "Clear accountability whenever AI informs a clinical decision",
    ],
    audience: [
      "Chief nursing, medical and digital officers",
      "Clinical informatics and innovation teams",
      "Service line and unit leaders",
      "Health technology companies preparing for clinical deployment",
    ],
    frameworks: [
      "Pre-defined success and stopping criteria",
      "Local validation before scale",
      "Subgroup performance and bias review",
    ],
    faqs: [
      {
        q: "Are you affiliated with an AI vendor?",
        a: "No. We are not a technology vendor and do not resell software. Our recommendations are shaped by your clinical needs and the evidence, which lets us give you a straight answer about whether a tool is worth adopting.",
      },
      {
        q: "Can you help us evaluate ambient documentation or generative AI tools?",
        a: "Yes. We help you define what success looks like before you sign, design a fair pilot, and measure documentation quality, clinician experience and workflow impact alongside time saved.",
      },
      {
        q: "We are a health technology company. Can you help us?",
        a: "Yes. Through our health tech and start-up advisory work, we help product teams understand clinical workflows, design credible validation studies and prepare for the questions health system buyers and governance committees will ask.",
      },
    ],
    related: ["ai-translation-change-management", "health-tech-advisory", "ai-governance-strategy"],
    // Shows the "For healthcare companies" section near the bottom of the page.
    healthTechBand: true,
  },
  {
    slug: "clinical-analytics-informatics",
    icon: "chart",
    title: "Clinical Analytics & Informatics",
    shortTitle: "Analytics & Informatics",
    topic: "clinical analytics and informatics",
    seoTitle: "Clinical Analytics & Informatics Consulting",
    metaDescription:
      "Turn clinical data into decisions: data storytelling, quality and throughput analytics, informatics strategy, KPI frameworks and EHR optimization led by clinicians.",
    eyebrow: "Clinical analytics & informatics",
    headline: "Clinical analytics and informatics that turn data into decisions.",
    summary:
      "Make sense of clinical, operational and workflow data so leaders can see what is working, what is not and what to do next.",
    intro:
      "Most organizations are not short of data. They are short of insight they can act on. We help you measure what matters for patients, present it so leaders and frontline teams understand it, and connect the EHR to the way care is actually delivered.",
    challenge: {
      heading: "More dashboards, less clarity",
      body: [
        "Hospitals generate enormous amounts of data, yet leaders still struggle to answer basic questions. Why did length of stay rise on one unit? Are we recognizing deterioration earlier? Which documentation requirements add value and which only add clicks? Reports multiply, definitions drift and frontline teams stop trusting the numbers.",
        "Good clinical analytics starts with the question, uses definitions clinicians recognize and ends with a decision. Good informatics makes the right action the easy one inside the EHR. We bring both disciplines together with the clinical judgment to know which signals matter.",
      ],
    },
    included: [
      {
        title: "Clinical data storytelling and visualization",
        body: "Dashboards and briefings designed for the people who use them, from board reports to unit huddle boards, built around the decisions each audience has to make.",
      },
      {
        title: "Quality, safety and throughput analytics",
        body: "Analysis of falls, pressure injuries, sepsis, readmissions, length of stay and emergency department flow, with root-cause insight rather than surface trends.",
      },
      {
        title: "Informatics strategy and implementation",
        body: "A roadmap for clinical informatics capability, governance of EHR changes and support for the teams who build and maintain clinical systems.",
      },
      {
        title: "KPI and outcomes framework development",
        body: "Balanced measure sets with clear definitions, data sources, owners and targets that connect operational performance to patient outcomes.",
      },
      {
        title: "EHR optimization and workflow alignment",
        body: "Less documentation burden, fewer redundant clicks, and order sets and flowsheets aligned with current practice, so the EHR supports clinical work instead of interrupting it.",
      },
    ],
    approach: [
      { title: "Clarify the decision", body: "Agree on the questions leaders need answered and who acts on the answers." },
      { title: "Audit the data", body: "Check definitions, sources and quality before building anything." },
      { title: "Build and test", body: "Prototype measures and views with the people who will use them." },
      { title: "Embed", body: "Fold insight into existing meetings, huddles and governance so it drives action." },
    ],
    outcomes: [
      "A measure set that leaders and clinicians trust",
      "Reporting that leads to decisions rather than more reports",
      "Lower documentation burden and cleaner EHR workflows",
      "Earlier detection of quality and safety issues",
    ],
    audience: [
      "Chief nursing informatics and medical information officers",
      "Quality and performance improvement teams",
      "Nursing and operational leaders",
      "Analytics and data science teams",
    ],
    frameworks: [
      "Decision-first measure design",
      "Shared, documented metric definitions",
      "Documentation burden reduction",
    ],
    faqs: [
      {
        q: "Do you build dashboards or advise on them?",
        a: "Both. We can design and prototype measures and visualizations with your team, or advise your analytics group on definitions, design and adoption. Either way, the goal is a tool that people actually use.",
      },
      {
        q: "Which EHR platforms do you work with?",
        a: "Our work focuses on clinical workflow, measurement and governance, which apply across platforms. We partner with your internal analysts and EHR teams, who know your build best.",
      },
      {
        q: "Can you help us reduce documentation burden?",
        a: "Yes. We review documentation requirements against regulatory need and clinical value, identify redundancy and help you prioritize the changes that give the most time back to clinicians.",
      },
    ],
    related: ["ai-governance-strategy", "workforce-optimization", "research-strategy-evidence-translation"],
  },
  {
    slug: "workforce-optimization",
    icon: "users",
    title: "Workforce Optimization",
    shortTitle: "Workforce Optimization",
    topic: "workforce optimization",
    seoTitle: "Nursing Workforce Optimization & Staffing Strategy",
    metaDescription:
      "Build a sustainable nursing workforce: staffing and workload strategy, well-being programs, role redesign, care model innovation and retention, led by nurse leaders.",
    eyebrow: "Workforce optimization",
    headline: "Nursing workforce strategy that supports the people who power care.",
    summary:
      "Build staffing models, roles and support systems that improve performance and protect the well-being of the clinicians who deliver care.",
    intro:
      "Your workforce is your most valuable asset and one of your hardest operational problems. We help you match staffing to real patient needs, redesign roles and care models, and create the conditions that make experienced nurses want to stay.",
    challenge: {
      heading: "Staffing is a design problem, not only a hiring problem",
      body: [
        "Vacancies, turnover, agency spending and burnout feed one another. Many organizations respond by recruiting harder, only to lose new hires to the same conditions that drove others out: unpredictable workloads, rigid schedules, thin support for new graduates and too much time spent on tasks that do not need a nurse.",
        "Sustainable workforce strategy looks at how the work itself is designed: who does what, how acuity is measured, how teams are supported on the hardest shifts and where technology can remove work instead of adding it. We bring experience across different services to help design workforce strategies that fit your needs.",
      ],
    },
    included: [
      {
        title: "Nurse staffing and workload strategy",
        body: "Staffing models grounded in acuity and workload data, not only ratios and budgets, with practical guidance on float pools, flexible scheduling and surge plans.",
      },
      {
        title: "Workforce well-being and support systems",
        body: "Programs that address burnout, moral distress and fatigue, from peer support and recovery practices to manager training and early-warning measures.",
      },
      {
        title: "Role redesign and advanced practice strategy",
        body: "Clear scopes for registered nurses, licensed practical nurses, assistive personnel and advanced practice providers, so every role works to the top of its license and skill.",
      },
      {
        title: "Care model innovation",
        body: "Team-based, virtual and hybrid nursing models designed and tested with frontline staff, including where automation can safely take work off their plates.",
      },
      {
        title: "Talent retention and leadership development",
        body: "Onboarding, preceptorship, transition-to-practice and career pathways that keep new graduates and experienced nurses engaged.",
      },
    ],
    approach: [
      { title: "Diagnose", body: "Analyze turnover, vacancy, overtime, agency use and workload alongside staff feedback." },
      { title: "Co-design", body: "Build solutions with the frontline staff and managers who will live with them." },
      { title: "Pilot", body: "Test new models on selected units with clear measures of success." },
      { title: "Scale and sustain", body: "Roll out what works and track retention, engagement and quality over time." },
    ],
    outcomes: [
      "Staffing plans that reflect real patient acuity and workload",
      "A credible path to less reliance on premium and agency labor",
      "Better retention of new graduates and experienced nurses",
      "Teams that feel supported on the hardest shifts",
    ],
    audience: [
      "Chief nursing officers and nurse executives",
      "Directors and nurse managers",
      "Human resources and workforce planning leaders",
      "Finance and operations partners",
    ],
    frameworks: [
      "Acuity- and workload-based staffing",
      "Frontline co-design",
      "Retention and engagement measurement",
    ],
    faqs: [
      {
        q: "Do you recommend specific nurse-to-patient ratios?",
        a: "We look beyond fixed ratios to acuity, workload, skill mix and the support available on each unit, while staying within any ratios required by your state or organization.",
      },
      {
        q: "Can technology really reduce nursing workload?",
        a: "Sometimes. Ambient documentation, virtual nursing and smarter scheduling can remove work, but poorly implemented tools often add it. We help you evaluate where technology will genuinely give time back.",
      },
      {
        q: "How do you involve frontline staff?",
        a: "Directly. Staff interviews, unit observation and co-design sessions are central to our process, because models built without frontline input rarely survive a real shift.",
      },
    ],
    related: ["ai-translation-change-management", "clinical-analytics-informatics", "healthcare-ai-innovation"],
  },
  {
    slug: "research-strategy-evidence-translation",
    icon: "book",
    title: "Research Strategy & Evidence Translation",
    shortTitle: "Research & Evidence",
    topic: "research strategy",
    seoTitle: "Nursing Research Strategy & Evidence Translation",
    metaDescription:
      "Turn evidence into bedside impact: research program design and mentorship, evidence synthesis, grant writing and publication support, and academic-practice partnerships.",
    eyebrow: "Research strategy & evidence translation",
    headline: "Nursing research strategy that turns evidence into clinical impact.",
    summary:
      "Build the structures that move evidence off the page and into measurable improvements at the bedside.",
    intro:
      "Evidence only matters when it changes practice. We help health systems and academic partners design research programs, translate findings into workflows, secure funding and publish work that moves the field forward.",
    challenge: {
      heading: "The gap between knowing and doing",
      body: [
        "Proven practices still take too long to reach routine care, and many promising clinical questions are never studied at all. Nurses who want to pursue research or evidence-based practice projects often lack protected time, methodological support or a clear path from idea to approval.",
        "A learning health system closes that gap on purpose. It gives clinicians the infrastructure to ask good questions, the methods to answer them rigorously and the partnerships to turn answers into practice. Our founder’s experience as an NIH-funded nurse scientist covers that whole journey, from study design to peer review.",
      ],
    },
    included: [
      {
        title: "Research program design and mentorship",
        body: "Infrastructure for nursing research and evidence-based practice, including governance, review pathways and mentorship for clinicians who are new to inquiry.",
      },
      {
        title: "Evidence synthesis and translation",
        body: "Rapid and systematic reviews that answer practical questions, translated into protocols, education and workflow changes.",
      },
      {
        title: "Grant writing and publication support",
        body: "Help finding funding opportunities, shaping aims, strengthening proposals and preparing manuscripts for peer-reviewed journals.",
      },
      {
        title: "Clinical inquiry and innovation initiatives",
        body: "Programs that turn frontline questions into structured projects, from quality improvement to formal research.",
      },
      {
        title: "Academic partnership development",
        body: "Partnerships between health systems and universities that share expertise, data and talent for mutual benefit.",
      },
    ],
    approach: [
      { title: "Assess capacity", body: "Review current research activity, infrastructure, support and priorities." },
      { title: "Focus the agenda", body: "Align research and evidence-based practice priorities with strategic goals." },
      { title: "Build infrastructure", body: "Establish processes, mentorship and partnerships that make inquiry sustainable." },
      { title: "Translate and share", body: "Move findings into practice and disseminate them through presentations and publications." },
    ],
    outcomes: [
      "A focused research agenda tied to organizational priorities",
      "More clinicians engaged in inquiry and evidence-based practice",
      "Stronger grant applications and publication output",
      "Evidence that reaches the bedside sooner",
    ],
    audience: [
      "Nursing research and evidence-based practice councils",
      "Chief nursing officers and nurse scientists",
      "Academic medical centers and schools of nursing",
      "Professional practice and recognition program leaders",
    ],
    frameworks: ["Research, QI and EBP distinctions", "Grant and manuscript development", "Academic-practice partnerships"],
    faqs: [
      {
        q: "Can you help us strengthen our nursing research program?",
        a: "Yes. We assess your current structure and help you build the councils, review pathways, mentorship and partnerships that make research and evidence-based practice sustainable.",
      },
      {
        q: "Do you help with grant applications?",
        a: "Yes. We help refine aims and approach, strengthen the narrative and align proposals with funder priorities. Final submissions remain with your investigators and institution.",
      },
      {
        q: "What is the difference between research, quality improvement and evidence-based practice?",
        a: "Research generates new, generalizable knowledge. Quality improvement improves a local process. Evidence-based practice applies existing evidence to care. Knowing which you are doing determines the methods, approvals and claims you can make, and we help teams get that right from the start.",
      },
    ],
    related: ["clinical-analytics-informatics", "workforce-optimization", "ai-governance-strategy"],
  },
  {
    slug: "health-tech-advisory",
    icon: "cpu",
    title: "Health Tech & Start-up Advisory",
    shortTitle: "Health Tech Advisory",
    topic: "health tech advisory",
    seoTitle: "Healthcare Start-up & Health Tech Consulting",
    metaDescription:
      "Clinician-led consulting for healthcare tech start-ups, health tech and healthcare-related companies: a clinical lens on your product, operational expertise and growth strategy.",
    eyebrow: "Health tech & start-up advisory",
    headline: "A clinical lens, operational expertise and growth strategy for healthcare companies.",
    summary:
      "Help for start-ups and companies building for healthcare to fit clinical workflows, earn health system trust and grow.",
    intro:
      "Building for healthcare means earning the trust of clinicians, operators and health system buyers. We help healthcare tech start-ups, established health tech companies and other healthcare-related businesses see their product through a clinical lens, understand how hospitals actually run and build a credible strategy for growth.",
    challenge: {
      heading: "Strong products still stall without clinical and operational fit",
      body: [
        "Many healthcare products are built by talented technical and commercial teams with limited time inside hospitals. The result is familiar: a product that solves a real problem but does not fit the workflow, a pilot that never converts or a sales cycle that stalls when a governance committee asks questions the team cannot yet answer.",
        "Health systems buy differently from other customers. Clinical leaders, nursing, informatics, IT, compliance and finance all have a say, and each wants evidence that a product is safe, usable and worth the change it asks of their staff. A clinician who has worked at the bedside, in nursing leadership and in healthcare technology can help you anticipate those questions and build the answers into your product and strategy.",
      ],
    },
    included: [
      {
        title: "Clinical lens on product and workflow",
        body: "Review of your product, roadmap and user experience against real clinical workflows, so it fits the way nurses, physicians and care teams actually work.",
      },
      {
        title: "Clinical validation and evidence strategy",
        body: "Pilots, outcome measures and validation studies designed to produce evidence that clinical leaders and governance committees trust.",
      },
      {
        title: "Operational and implementation readiness",
        body: "Implementation playbooks, training approaches and change management plans that help customers go live smoothly and keep using the product.",
      },
      {
        title: "Go-to-market and growth strategy",
        body: "Positioning, buyer mapping and messaging for hospitals, health systems and academic medical centers, grounded in how clinical and executive leaders make decisions.",
      },
      {
        title: "Health system review preparation",
        body: "Preparation for procurement, AI governance and security reviews, including the questions about safety, bias, transparency and workflow impact you will be asked.",
      },
    ],
    approach: [
      { title: "Understand", body: "Learn your product, market, customers and growth goals." },
      { title: "Assess fit", body: "Evaluate clinical, workflow and operational fit with the settings you sell into." },
      { title: "Shape the strategy", body: "Agree priorities for product, evidence and go-to-market, with clear owners and measures." },
      { title: "Advise and support", body: "Stay alongside your team through pilots, customer conversations and growth decisions." },
    ],
    outcomes: [
      "A product that fits real clinical workflows",
      "Evidence and messaging that resonate with health system buyers",
      "Pilots designed to become lasting customer relationships",
      "A team ready for clinical, governance and procurement questions",
    ],
    audience: [
      "Healthcare tech start-ups and founders",
      "Established health tech and digital health companies",
      "Healthcare-related companies entering the provider market",
      "Product, clinical and commercial leadership teams",
    ],
    frameworks: ["Clinical workflow review", "Evidence and validation planning", "Health system buyer mapping"],
    faqs: [
      {
        q: "What kinds of companies do you work with?",
        a: "Healthcare tech start-ups, established health tech and digital health companies, and other healthcare-related businesses that sell to or partner with hospitals, health systems and academic medical centers.",
      },
      {
        q: "Can you serve as an ongoing clinical advisor to our company?",
        a: "Yes. Many companies engage us for ongoing advisory support, from product and roadmap reviews to preparing for customer conversations. Engagements are scoped to your stage and goals.",
      },
      {
        q: "Do you help design clinical validation studies?",
        a: "Yes. We help you define the clinical question, choose meaningful outcome measures and design pilots or studies that hold up to scrutiny from clinical leaders and governance committees.",
      },
      {
        q: "Will you recommend our product to the health systems you advise?",
        a: "No. We keep our advice to health systems independent and do not resell or endorse products. Our value to your company comes from clinical and operational insight, not introductions.",
      },
    ],
    related: ["healthcare-ai-innovation", "ai-translation-change-management", "clinical-analytics-informatics"],
  },
  {
    slug: "ai-translation-change-management",
    icon: "compass",
    title: "AI Translation & Change Management",
    shortTitle: "AI Translation & Change",
    topic: "AI translation and change management",
    seoTitle: "Healthcare AI Translation & Change Management Consulting",
    metaDescription:
      "Bridge clinical and technical teams and lead AI adoption that lasts: clinical requirements translation, AI readiness, change management, training and adoption measurement, led by clinicians.",
    eyebrow: "AI translation & change management",
    headline: "Translating AI between the bedside and the build, and leading the change that follows.",
    summary:
      "Connect clinical, technical and executive teams around AI, then guide your people through the change so new tools are understood, trusted and used.",
    intro:
      "Healthcare and technology teams often speak different languages, even when they want the same outcome. We translate clinical needs into technical requirements and technical capabilities into clinical terms, then design and lead the change management that turns a new AI tool into everyday practice.",
    challenge: {
      heading: "Most AI efforts stall in translation, not in technology",
      body: [
        "Engineers know how to build a model. Clinicians know what a busy shift actually looks like. Executives know the budget, the risks and the strategic priorities. When those groups are not connected, requirements get lost, tools arrive that do not fit the workflow and frontline staff are left to work around them.",
        "Even a well-designed tool fails if people do not understand it, trust it or see why it matters to their patients. Adoption is a people challenge as much as a technical one. It needs clear communication, training built for real shifts, visible clinical champions and a plan for the concerns staff will raise. That is where a clinician who has worked in both healthcare and technology makes the difference.",
      ],
    },
    included: [
      {
        title: "Clinical-to-technical translation",
        body: "Clinical needs, workflows and safety considerations turned into requirements engineering and product teams can build against, and technical capabilities and limits explained in terms clinicians recognize.",
      },
      {
        title: "AI readiness and stakeholder alignment",
        body: "An assessment of workflow, data, staff and leadership readiness, with clinical, technical and executive stakeholders aligned on goals, roles and success measures before go-live.",
      },
      {
        title: "Change management strategy and execution",
        body: "A change plan built for clinical environments: communication, champion networks, feedback loops and a clear response to the concerns frontline staff raise.",
      },
      {
        title: "Training and education for clinical teams",
        body: "Practical, role-based education that explains what the tool does, where it can be wrong and what clinicians are expected to do with its output.",
      },
      {
        title: "Adoption measurement and sustainment",
        body: "Measures of use, workflow impact and staff experience after go-live, with adjustments made early so adoption holds once the project team moves on.",
      },
    ],
    approach: [
      { title: "Listen and translate", body: "Understand the clinical problem, the technology and each stakeholder’s goals, in their own language." },
      { title: "Align and prepare", body: "Agree on requirements, roles and measures, and assess readiness across workflow, data and people." },
      { title: "Lead the change", body: "Communicate, train and support teams through go-live, with clinical champions alongside them." },
      { title: "Measure and sustain", body: "Track adoption and impact, address barriers early and hand over the tools to keep improving." },
    ],
    outcomes: [
      "Requirements that clinical and technical teams both understand",
      "Stakeholders aligned on goals, roles and success measures",
      "Clinicians who understand, trust and use new AI tools",
      "Adoption that lasts after the project team moves on",
    ],
    audience: [
      "Chief nursing, medical and digital officers",
      "Clinical informatics and IT leaders",
      "Product and engineering teams building for healthcare",
      "Operational and frontline leaders preparing for go-live",
    ],
    frameworks: [
      "Clinical requirements translation",
      "Readiness and stakeholder alignment",
      "Clinician-centered change management",
    ],
    faqs: [
      {
        q: "What does “AI translation” mean?",
        a: "It means bridging the gap between the people who build technology and the people who use it in care. We turn clinical needs into requirements technical teams can act on, and explain what a tool can and cannot do in terms clinicians and executives understand.",
      },
      {
        q: "Why does AI need its own change management?",
        a: "AI changes how clinicians make decisions, not only which buttons they click. Staff need to understand how a tool reaches its output, when to question it and who is accountable. Change management built around those questions makes adoption faster and safer.",
      },
      {
        q: "Can you work with our vendor or internal build team?",
        a: "Yes. We regularly sit between clinical teams and the vendor, product or engineering team, helping each side understand the other so the tool that goes live fits the way care is actually delivered.",
      },
      {
        q: "Is this only for health systems?",
        a: "No. Healthcare technology companies also use this work to translate clinical workflows into product requirements and to support their customers through implementation and adoption.",
      },
    ],
    related: ["healthcare-ai-innovation", "health-tech-advisory", "workforce-optimization"],
    healthTechBand: true,
  },
];

// Order used by the services page, navigation, footer and sitemap.
const serviceOrder = [
  "healthcare-ai-innovation",
  "health-tech-advisory",
  "ai-translation-change-management",
  "clinical-analytics-informatics",
  "workforce-optimization",
  "research-strategy-evidence-translation",
  "ai-governance-strategy",
];

// The home page "What we do" section leads with health tech advisory.
const homeServiceOrder = [
  "health-tech-advisory",
  "healthcare-ai-innovation",
  "ai-translation-change-management",
  "clinical-analytics-informatics",
  "workforce-optimization",
  "research-strategy-evidence-translation",
  "ai-governance-strategy",
];

export const services = serviceOrder.map((slug) => serviceEntries.find((s) => s.slug === slug));
export const homeServices = homeServiceOrder.map(getService);

// Speaking is a top-level page but appears alongside the services in grids and menus.
export const speakingCard = {
  slug: "speaking",
  href: "/speaking",
  icon: "mic",
  title: "Speaking Engagements & Keynotes",
  shortTitle: "Speaking & Keynotes",
  summary:
    "Evidence-based keynotes and workshops on responsible AI, nursing leadership and the future of care, tailored to your audience.",
};

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}

export function serviceHref(slug) {
  return `/services/${slug}`;
}
