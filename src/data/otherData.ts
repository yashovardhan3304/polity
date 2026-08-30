export interface Comparison {
  concept: string;
  aName: string;
  aContent: string;
  bName: string;
  bContent: string;
  examTrap: string;
}

export interface ExamTrap {
  id: string;
  title: string;
  text: string;
  explanation: string;
  articleLink?: string;
}

export interface Judgment {
  name: string;
  principle: string;
  related: string;
  summary: string;
  sourceUrl: string;
}

export interface CurrentPolityItem {
  id: string;
  title: string;
  date: string;
  description: string;
  examSignificance: string;
  sourceName: string;
  sourceUrl: string;
}

export const comparisonsData: Comparison[] = [
  {
    concept: "Writ Jurisdiction Scope",
    aName: "Article 32 (Supreme Court)",
    aContent: "Can only issue writs for the enforcement of Fundamental Rights (Part III). Territorially applies throughout India. The right to approach SC under Art 32 is itself a Fundamental Right.",
    bName: "Article 226 (High Court)",
    bContent: "Can issue writs for the enforcement of Fundamental Rights AND for 'any other purpose' (ordinary legal rights). Territorially restricted to the state. Approach to HC is a constitutional right, not a FR.",
    examTrap: "High Court's writ jurisdiction is wider in scope, but Supreme Court cannot refuse to hear a writ petition because Article 32 is a Fundamental Right itself, whereas Article 226 is discretionary."
  },
  {
    concept: "Core Directives vs Rights",
    aName: "Fundamental Rights (Part III)",
    aContent: "Justiciable (enforceable by courts). Negative injunctions (tells state what not to do). Promotes political democracy. Applies to individuals.",
    bName: "DPSP (Part IV)",
    bContent: "Non-justiciable (courts cannot enforce). Positive instructions (tells state what to do). Promotes social and economic democracy. Applies to society collectively.",
    examTrap: "In case of conflict, Fundamental Rights generally prevail, but laws giving effect to Articles 39(b) and 39(c) have primacy over Articles 14 and 19 (affirmed in Minerva Mills)."
  },
  {
    concept: "Executive Powers",
    aName: "President of India",
    aContent: "No constitutional discretionary power, only situational discretion (e.g. choosing PM when no majority, dissolving Lok Sabha if govt loses confidence). Advice of Cabinet is strictly binding.",
    bName: "State Governor",
    bContent: "Has both constitutional discretionary power (e.g. reservation of bill for President, recommendation of President's Rule) and situational discretion. Advice of council is generally binding except in discretionary areas.",
    examTrap: "The Governor has wider constitutional discretionary power than the President. Under Article 163, the Governor's decision on what is discretionary is final."
  },
  {
    concept: "Parliamentary Chambers",
    aName: "Lok Sabha (House of the People)",
    aContent: "Directly elected by the people. Normal term is 5 years. Has primary power over money bills and budget. Ministers are collectively responsible only here.",
    bName: "Rajya Sabha (Council of States)",
    bContent: "Indirectly elected by State Legislatures. Permanent body (members serve 6 years). Equal power in ordinary bills and constitutional amendments. Represents federal interests.",
    examTrap: "A Money Bill cannot be introduced or amended/rejected by the Rajya Sabha (it can only make recommendations within 14 days, failing which the bill passes in its original Lok Sabha form)."
  },
  {
    concept: "Financial Legislative Bills",
    aName: "Money Bill (Article 110)",
    aContent: "Contains ONLY matters specified in Article 110. Requires prior recommendation of the President. Can only be introduced in Lok Sabha. Certified by Speaker.",
    bName: "Ordinary Bill / Financial Bill",
    bContent: "Ordinary Bill deals with non-financial matters. Financial Bill (I) deals with Art 110 matters + other matters. Financial Bill (II) deals with expenditure from Consolidated Fund.",
    examTrap: "Every Money Bill is a Financial Bill, but not every Financial Bill is a Money Bill. Financial Bill (I) behaves like a Money Bill in introduction, but allows joint sitting."
  },
  {
    concept: "Emergency Declarations",
    aName: "National Emergency (Art 352)",
    aContent: "Declared due to War, External Aggression, or Armed Rebellion. Requires written Cabinet approval. Approved by special majority of both houses. Maximum period is indefinite (requires approval every 6 months).",
    bName: "President's Rule (Art 356)",
    bContent: "Declared due to breakdown of constitutional machinery in a State. Recommended by Governor or otherwise. Approved by simple majority. Maximum period is 3 years (approved every 6 months).",
    examTrap: "National Emergency suspends federalism (centre can legislate on state list directly). President's Rule suspends the state executive/legislature while federal structures remain intact elsewhere."
  },
  {
    concept: "Institutional Origin",
    aName: "Constitutional Body",
    aContent: "Established directly by provisions of the Constitution of India (e.g., ECI under Art 324, UPSC under Art 315, CAG under Art 148, Finance Commission under Art 280).",
    bName: "Statutory Body",
    bContent: "Created by an Act of Parliament or State Legislature. Examples: National Human Rights Commission (NHRC), SEBI, NGT, UIDAI.",
    examTrap: "NITI Aayog is NEITHER a constitutional nor a statutory body; it is a non-constitutional, non-statutory body created by an executive resolution of the Union Cabinet."
  },
  {
    concept: "Financial Guardians",
    aName: "Comptroller & Auditor General (Art 148)",
    aContent: "Audits accounts of the Union, States, and UTs. Guardian of the public purse. Reports submitted to President/Governor. Appointed for 6 years / 65 years age.",
    bName: "Finance Commission (Art 280)",
    bContent: "Recommends distribution of financial resources (taxes, grants-in-aid) between Center and States. Quasi-judicial advisory body. Appointed every 5 years.",
    examTrap: "CAG performs audit functions AFTER expenditure is done. Finance Commission recommends financial allocation principles BEFORE funds are distributed."
  },
  {
    concept: "Regulatory Commissions",
    aName: "Election Commission (Art 324)",
    aContent: "Supervises elections to Parliament, State Legislatures, offices of President and Vice President. Does not handle local bodies.",
    bName: "UPSC (Art 315)",
    bContent: "Conducts examinations for appointments to services of the Union. Advises on disciplinary matters of civil servants. Advisory recommendations.",
    examTrap: "Elections to Municipalities and Panchayats are handled by State Election Commissions (Art 243K), which are completely independent of the Election Commission of India."
  }
];

export const examTrapsData: ExamTrap[] = [
  {
    id: "TRAP 01",
    title: "The Right to Property Illusion",
    text: "Right to Property is not a Fundamental Right; Article 300A provides constitutional protection.",
    explanation: "The 44th Constitutional Amendment Act, 1978 deleted Article 19(1)(f) and Article 31, removing property from the list of Fundamental Rights. It is now a constitutional right under Article 300A in Part XII. The critical trap is: You can no longer approach the Supreme Court directly under Article 32 for property disputes, though you can petition the High Court under Article 226.",
    articleLink: "300A"
  },
  {
    id: "TRAP 02",
    title: "Writ Power Scope Limits",
    text: "Article 32 and Article 226 are not interchangeable.",
    explanation: "A common exam question tests whether the Supreme Court's writ jurisdiction is broader. It is NOT. The High Court's writ jurisdiction under Article 226 is wider because it covers both Fundamental Rights and ordinary legal/administrative violations. Article 32 is restricted ONLY to Fundamental Rights. However, Article 32 is itself a Fundamental Right, meaning the Supreme Court cannot arbitrarily refuse to entertain it, whereas Article 226 is discretionary for High Courts.",
    articleLink: "226"
  },
  {
    id: "TRAP 03",
    title: "Article 19 Citizen Exclusivity",
    text: "Article 19 freedoms are for citizens and are subject to constitutional restrictions.",
    explanation: "Fundamental Rights under Article 19 (speech, assembly, association, movement, residence, profession) are guaranteed exclusively to Citizens of India. Foreign nationals, tourists, and foreign corporations cannot claim these rights. Furthermore, these rights are NOT absolute; they are subject to 'reasonable restrictions' detailed in Articles 19(2) through 19(6).",
    articleLink: "19"
  },
  {
    id: "TRAP 04",
    title: "The 'All Rights to Everyone' Myth",
    text: "Not every Fundamental Right is citizen-only.",
    explanation: "Aspirants often confuse which rights are for citizens only and which are for all. The rights exclusive to citizens are: Articles 15, 16, 19, 29, and 30. All other Fundamental Rights (Articles 14, 20, 21, 21A, 22, 23, 24, 25, 26, 27, and 28) are available to all persons, whether citizens or foreigners (except enemy aliens).",
    articleLink: "14"
  },
  {
    id: "TRAP 05",
    title: "The Financial Bill vs Money Bill Trap",
    text: "Money Bill is not the same as every financial bill.",
    explanation: "While all Money Bills are Financial Bills, not all Financial Bills are Money Bills. A Money Bill (Article 110) contains ONLY matters listed in Article 110. A Financial Bill (I) contains elements of Article 110 but also other legislative matters (Article 117(1)). A Financial Bill (II) deals with expenditure from the Consolidated Fund (Article 117(3)). Joint sitting is allowed for Financial Bills (I) & (II) but NOT for Money Bills.",
    articleLink: "110"
  },
  {
    id: "TRAP 06",
    title: "Federal Body Jurisdictions",
    text: "Article 324 = Election Commission; Article 280 = Finance Commission.",
    explanation: "A common matching trap in objective exams. The Election Commission of India (Art 324) handles parliamentary and assembly elections, while local self-government elections are handled by State Election Commissions (under 243K & 243ZA). The Finance Commission (Art 280) advises on tax devolution, whereas the GST Council (Art 279A) makes binding decisions on GST rates.",
    articleLink: "324"
  },
  {
    id: "TRAP 07",
    title: "Constitutional Amendment Assent",
    text: "The President cannot veto or return a Constitutional Amendment Bill.",
    explanation: "For ordinary bills, the President can use a suspensive veto. However, for a Constitutional Amendment Bill passed under Article 368, the President MUST give his assent (made mandatory by the 24th Amendment Act, 1971). There is no provision for returning the bill for reconsideration or withholding assent.",
    articleLink: "368"
  },
  {
    id: "TRAP 08",
    title: "National Emergency Suspension",
    text: "Articles 20 and 21 can never be suspended.",
    explanation: "Under Article 359, the President can suspend the right to move courts for enforcement of Fundamental Rights during a National Emergency. However, the 44th Amendment Act, 1978 restricted this power, declaring that the right to enforcement of Articles 20 (protection in respect of conviction) and 21 (right to life and liberty) CANNOT be suspended under any circumstances.",
    articleLink: "21"
  }
];

export const judgmentsData: Judgment[] = [
  {
    name: "Kesavananda Bharati v. State of Kerala (1973)",
    principle: "Basic Structure Doctrine",
    related: "Article 368",
    summary: "A landmark 13-judge bench ruled that while Parliament has wide powers to amend any part of the Constitution (including Fundamental Rights) under Article 368, it cannot alter, destroy or damage the 'Basic Structure' or core identity of the Constitution (e.g. democracy, secularism, federalism, judicial review).",
    sourceUrl: "https://www.sci.gov.in/landmark-judgment-summaries/"
  },
  {
    name: "Maneka Gandhi v. Union of India (1978)",
    principle: "Golden Triangle & Due Process",
    related: "Article 21",
    summary: "Transformed Article 21 interpretation. The court ruled that the 'Procedure Established by Law' under Article 21 must be 'just, fair and reasonable' (effectively reading American 'Due Process' into India). Established that Articles 14, 19, and 21 are not separate silos but form a connected 'Golden Triangle'.",
    sourceUrl: "https://www.sci.gov.in/landmark-judgment-summaries/"
  },
  {
    name: "Minerva Mills v. Union of India (1980)",
    principle: "Balance of FR & DPSP",
    related: "Article 368",
    summary: "Struck down clauses of the 42nd Amendment that gave unlimited amending power to Parliament. Re-established that Judicial Review is part of the Basic Structure. Ruled that the Constitution is founded on the bed-rock of the balance between Fundamental Rights (Part III) and Directive Principles (Part IV).",
    sourceUrl: "https://www.sci.gov.in/landmark-judgment-summaries/"
  },
  {
    name: "S.R. Bommai v. Union of India (1994)",
    principle: "Federalism & Art 356 Guidelines",
    related: "Article 356",
    summary: "Declared Federalism and Secularism as part of the Basic Structure. Placed strict guidelines on the misuse of Article 356 (President's Rule). Ruled that the state assembly cannot be dissolved until Parliament approves the proclamation, and the majority of a government must be tested on the floor of the House.",
    sourceUrl: "https://www.sci.gov.in/landmark-judgment-summaries/"
  },
  {
    name: "K.S. Puttaswamy v. Union of India (2017)",
    principle: "Right to Privacy",
    related: "Article 21",
    summary: "A unanimous 9-judge bench ruled that the Right to Privacy is a Fundamental Right guaranteed under Article 21 (Life and Personal Liberty) and Part III of the Constitution. Overruled previous judgments in Kharak Singh and M.P. Sharma.",
    sourceUrl: "https://www.sci.gov.in/landmark-judgment-summaries/"
  },
  {
    name: "Indra Sawhney v. Union of India (1992)",
    principle: "50% Reservation Cap & Creamy Layer",
    related: "Article 16",
    summary: "Known as the Mandal Case. Upheld 27% reservation for Other Backward Classes (OBCs) subject to the exclusion of the 'Creamy Layer'. Ruled that total reservation should not exceed 50% in a year unless in exceptional circumstances, and reservation in promotions is not permissible (later bypassed by amendments).",
    sourceUrl: "https://www.sci.gov.in/landmark-judgment-summaries/"
  }
];

export const currentPolityData: CurrentPolityItem[] = [
  {
    id: "curr-01",
    title: "GST Council: Devolution Decisions",
    date: "2026-06-15",
    description: "The GST Council held its 55th meeting, refining the rate structures on luxury items and standardizing exemptions. The Council discussed the long-term compensation mechanism for state revenues.",
    examSignificance: "Tests understanding of Article 279A, its voting composition (1/3 weight to Union, 2/3 weight to States, 3/4 majority required for decisions), and cooperative federalism dynamics.",
    sourceName: "GST Council Official",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    id: "curr-02",
    title: "Supreme Court Clarifies Election Commissioner Appointments",
    date: "2025-11-20",
    description: "The Supreme Court examined the implementation of the Chief Election Commissioner and other Election Commissioners (Appointment, Conditions of Service and Term of Office) Act. The judgment verified the independence of the selection panel.",
    examSignificance: "Connects to Article 324. Highlights the evolution of appointment mechanisms (Selection Committee consisting of PM, a Union Cabinet Minister, and Leader of Opposition/Largest Party in Lok Sabha).",
    sourceName: "Supreme Court of India",
    sourceUrl: "https://www.sci.gov.in/constitution/"
  },
  {
    id: "curr-03",
    title: "State Bills Reservation and Governors' Discretion",
    date: "2026-03-05",
    description: "In a series of judgments, the Supreme Court ruled that a Governor cannot sit indefinitely on bills passed by the State Legislature. If the Governor returns a bill and the House passes it again, the Governor must take action.",
    examSignificance: "Tests understanding of Article 200 (options available to Governor when a bill is presented: assent, withhold, return, or reserve for President) and Article 201.",
    sourceName: "Supreme Court Judgment Summaries",
    sourceUrl: "https://www.sci.gov.in/landmark-judgment-summaries/"
  },
  {
    id: "curr-04",
    title: "Delimitation Commission and Seat Allocation",
    date: "2026-08-10",
    description: "Government representatives confirmed preparations for the next Census which will lay the groundwork for the future Delimitation Commission to adjust Parliamentary constituencies.",
    examSignificance: "Directly relates to Article 82 (Delimitation of constituencies after each census) and Article 170. Vital for upcoming exams due to constitutional freezes (84th Amendment froze seat numbers until first census after 2026).",
    sourceName: "Legislative Department",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  }
];

export const sourceLibraryData = [
  {
    name: "Legislative Department — Constitution of India",
    url: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf",
    use: "Current constitutional Articles, Parts and Schedules"
  },
  {
    name: "Supreme Court of India — Constitution",
    url: "https://www.sci.gov.in/constitution/",
    use: "Constitutional overview and institutional framework"
  },
  {
    name: "Supreme Court — Landmark Judgment Summaries",
    url: "https://www.sci.gov.in/landmark-judgment-summaries/",
    use: "Landmark constitutional cases"
  },
  {
    name: "UPSC — Previous Question Papers",
    url: "https://www.upsc.gov.in/examinations/previous-question-papers",
    use: "Official PYQ repository"
  },
  {
    name: "UPSC Archives",
    url: "https://www.upsc.gov.in/examinations/previous-question-papers/archives",
    use: "Older official question papers"
  },
  {
    name: "Election Commission of India — Constitutional Provisions",
    url: "https://www.eci.gov.in/961-constitutional-provisions",
    use: "Election-related constitutional provisions"
  },
  {
    name: "Ministry of Panchayati Raj",
    url: "https://panchayat.gov.in/en/constitutional-provision/",
    use: "Panchayats and local government"
  }
];
