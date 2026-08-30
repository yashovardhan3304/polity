export interface Lesson {
  topic: string;
  overview: string;
  importantArticles: string[];
  coreNotes: string[];
  constitutionalContext: string;
  examples: string[];
  examFocus: string;
  commonTraps: string[];
  memoryTrick: string;
  relatedArticles: string[];
  quickRevision: string[];
  practiceQuestions: string[];
  officialSources: string[];
}

export interface Chapter {
  name: string;
  icon: string;
  topics: string[];
}

export const chaptersData: Chapter[] = [
  {
    name: "Constitution & Making",
    icon: "📜",
    topics: [
      "Historical Background",
      "Constituent Assembly",
      "Preamble",
      "Salient Features",
      "Schedules",
      "Citizenship",
      "Amendments",
      "Basic Structure"
    ]
  },
  {
    name: "Rights, DPSP & Duties",
    icon: "⚖️",
    topics: [
      "Fundamental Rights",
      "DPSP",
      "Fundamental Duties",
      "Writs",
      "Article 32",
      "Article 226",
      "Article 300A",
      "Judicial Review"
    ]
  },
  {
    name: "Union Executive",
    icon: "👤",
    topics: [
      "President",
      "Vice-President",
      "Prime Minister",
      "Council of Ministers",
      "Attorney General",
      "Ordinance Power"
    ]
  },
  {
    name: "Parliament",
    icon: "🏛️",
    topics: [
      "Lok Sabha",
      "Rajya Sabha",
      "Money Bill",
      "Ordinary Bill",
      "Joint Sitting",
      "Committees",
      "Budget",
      "Privileges"
    ]
  },
  {
    name: "Judiciary",
    icon: "⚖️",
    topics: [
      "Supreme Court",
      "High Courts",
      "Jurisdiction",
      "Judicial Independence",
      "Landmark Cases"
    ]
  },
  {
    name: "State Government",
    icon: "🏢",
    topics: [
      "Governor",
      "Chief Minister",
      "State Legislature",
      "State Council of Ministers",
      "High Court",
      "Advocate General"
    ]
  },
  {
    name: "Federalism & Emergency",
    icon: "🔗",
    topics: [
      "Legislative Relations",
      "Administrative Relations",
      "Financial Relations",
      "Inter-State Council",
      "GST Council",
      "Emergency"
    ]
  },
  {
    name: "Elections, Bodies & Local Government",
    icon: "🗳️",
    topics: [
      "Election Commission",
      "UPSC",
      "Finance Commission",
      "CAG",
      "73rd Amendment",
      "74th Amendment"
    ]
  }
];

// Helper to generate a default lesson in case something is requested but not hardcoded
// However, we hardcode lessons below for the core topics to ensure rich educational content.
export const generateFallbackLesson = (topicName: string): Lesson => {
  return {
    topic: topicName,
    overview: `Detailed overview of ${topicName}. This forms an essential part of the Indian Polity syllabus, outlining the institutional framework, constitutional provisions, and administrative processes.`,
    importantArticles: ["Article 12-35", "Article 36-51", "Article 324"],
    coreNotes: [
      `Constitutional basis: Deals with key elements governing the administrative or executive rules for ${topicName}.`,
      "Power allocation: Specifies how authority is shared or implemented under constitutional guidelines.",
      "Institutional check and balance: Outlines how the judiciary, legislature, and executive review this domain."
    ],
    constitutionalContext: `Under the federal structure of India, ${topicName} ensures constitutional checks and balances to preserve the democratic values of the nation.`,
    examples: [
      "Procedural standards outlined by legislative mandates.",
      "Supreme Court clarifications in landmark disputes."
    ],
    examFocus: `Understanding the direct constitutional article links, appointment/legislative procedures, and recent judicial observations relating to ${topicName}.`,
    commonTraps: [
      `Confusing statutory requirements with constitutional rights regarding ${topicName}.`,
      "Forgetting exceptions and executive caveats."
    ],
    memoryTrick: `Mnemonic: Focus on chronological developments and numerical article associations.`,
    relatedArticles: ["14", "19", "21"],
    quickRevision: [
      `Remember the key article numbers for ${topicName}.`,
      "Verify the role of the President or Governor in this context.",
      "Recall if this is justiciable or advisory."
    ],
    practiceQuestions: [
      `Explain the constitutional position of ${topicName}.`,
      `Discuss the recent debates surrounding ${topicName} in cooperative federalism.`
    ],
    officialSources: [
      "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf",
      "https://www.sci.gov.in/constitution/"
    ]
  };
};

export const lessonsData: Record<string, Lesson> = {
  "Historical Background": {
    topic: "Historical Background",
    overview: "Covers the evolution of the Indian Constitution, divided into the Company Rule (1773–1858) and the Crown Rule (1858–1947). Key acts shaped administrative, legislative, and executive functions.",
    importantArticles: ["Preamble", "Schedules", "Historical Acts"],
    coreNotes: [
      "Regulating Act of 1773: Laid the foundations of central administration in India. Designated Governor of Bengal as Governor-General of Bengal.",
      "Charter Act of 1833: Made Governor-General of Bengal the Governor-General of India (Lord William Bentinck was first). Deprived Governors of Bombay/Madras of legislative powers.",
      "Government of India Act of 1858: Transferred power from East India Company to the British Crown. Abolished Board of Control and Court of Directors. Created Secretary of State for India.",
      "Indian Councils Act of 1909: Morley-Minto Reforms. Introduced communal representation for Muslims.",
      "Government of India Act of 1919: Montagu-Chelmsford Reforms. Introduced dyarchy at provinces.",
      "Government of India Act of 1935: Provided for establishment of an All-India Federation and provincial autonomy. Abolished dyarchy at provinces, introduced it at the Center."
    ],
    constitutionalContext: "The Indian Constitution inherited many structures directly from the 1935 Act, including the federal scheme, emergency powers, and administrative details.",
    examples: [
      "Bicameralism and direct elections introduced in 1919.",
      "Establishment of Federal Court (precursor of Supreme Court) under the 1935 Act."
    ],
    examFocus: "Focus on communal electorates (1909), division of subjects / dyarchy (1919 vs 1935), and structural features adopted from the 1935 Act.",
    commonTraps: [
      "Dyarchy at provinces was introduced by 1919 Act, whereas dyarchy at Center was proposed by 1935 Act. Do not swap them.",
      "Communal electorate was introduced for Muslims in 1909, and extended to Sikhs, Christians, Anglo-Indians in 1919."
    ],
    memoryTrick: "Mnemonic: 1909 = Morley-Minto (Muslim Electorate); 1919 = Mont-Ford (Dyarchy in Provinces); 1935 = Federal / Autonomy.",
    relatedArticles: ["395"],
    quickRevision: [
      "Company Rule: 1773 to 1858. Crown Rule: 1858 to 1947.",
      "Governor-General of India: 1833 Act. Viceroy: 1858 Act.",
      "Federal Court established in 1937 under the 1935 Act."
    ],
    practiceQuestions: [
      "Analyze the features of the Government of India Act of 1935 that influenced the current Indian Constitution.",
      "Distinguish between the provincial dyarchy of 1919 and federal dyarchy of 1935."
    ],
    officialSources: [
      "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
    ]
  },
  "Fundamental Rights": {
    topic: "Fundamental Rights",
    overview: "Part III covers Articles 12–35. Guarantees rights to individuals to prevent authoritarian rule. Features are derived from the US Bill of Rights. These are justiciable and not absolute.",
    importantArticles: ["14", "19", "21", "21A", "32"],
    coreNotes: [
      "Article 12: Definition of 'State'. Includes central, state governments, legislatures, local bodies, and statutory bodies (LIC, ONGC).",
      "Article 13: Laws inconsistent with Fundamental Rights are void (basis of Judicial Review).",
      "Articles 14–18: Right to Equality. Includes equality before law (Art 14), no discrimination (Art 15), public employment equality (Art 16), abolition of untouchability (Art 17), and titles (Art 18).",
      "Articles 19–22: Right to Freedom. Art 19 guarantees 6 freedoms. Art 20 protects against conviction. Art 21 protects life/personal liberty. Art 21A provides right to education.",
      "Articles 23–24: Right against Exploitation. Prohibits human trafficking/forced labor (Art 23) and child labor (Art 24).",
      "Articles 25–28: Freedom of Religion. Conscience/practice (Art 25), religious affairs (Art 26), tax exemption for religion promotion (Art 27), religious instruction in state schools (Art 28).",
      "Articles 29–30: Cultural and Educational Rights of minorities.",
      "Article 32: Constitutional Remedies (writs). Heart and soul of the Constitution."
    ],
    constitutionalContext: "FRs balance individual liberty with social control. Subject to reasonable restrictions on grounds like sovereignty, security, and public order.",
    examples: [
      "Right to Privacy declared a Fundamental Right under Article 21 (Puttaswamy case).",
      "Right to Education made a FR under Article 21A in 2002."
    ],
    examFocus: "Focus on rights exclusive to citizens (15, 16, 19, 29, 30), writting powers (Art 32 vs 226), and emergency suspensions (Articles 20 & 21 cannot be suspended).",
    commonTraps: [
      "The Right to Property is NOT a Fundamental Right. It is now a constitutional right under Article 300A.",
      "Fundamental Rights are not absolute. They can be restricted reasonably."
    ],
    memoryTrick: "Mnemonic: '12-35 are FRs. Citizens only get 15, 16, 19, 29, 30. Emergency spares 20 and 21.'",
    relatedArticles: ["12", "13", "14", "19", "21", "22", "32", "300A", "226"],
    quickRevision: [
      "Justiciable: Directly enforceable in court.",
      "Suspension: Articles 20 & 21 are protected even during National Emergency.",
      "Abolished: Right to Property deleted by 44th Amendment in 1978."
    ],
    practiceQuestions: [
      "Evaluate the scope of personal liberty under Article 21 post the Maneka Gandhi judgment.",
      "Examine which Fundamental Rights are available to foreign nationals in India."
    ],
    officialSources: [
      "https://www.sci.gov.in/constitution/",
      "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
    ]
  },
  "DPSP": {
    topic: "DPSP",
    overview: "Part IV covers Articles 36–51. Outlines Directive Principles of State Policy. Inspired by the Irish Constitution, they act as guidelines for the State to establish social and economic democracy.",
    importantArticles: ["36", "37", "39", "40", "44", "50"],
    coreNotes: [
      "Article 36: States that definition of State is same as Part III.",
      "Article 37: Declares DPSP non-justiciable but fundamental in governance.",
      "Classified into three styles: Socialistic (e.g., Art 38, 39, 39A, 41, 42, 43, 43A, 47), Gandhian (e.g., Art 40, 43, 43B, 46, 47, 48), and Liberal-Intellectual (e.g., Art 44, 45, 48, 48A, 49, 50, 51).",
      "Article 40: Organization of Village Panchayats.",
      "Article 44: Uniform Civil Code.",
      "Article 50: Separation of Judiciary from Executive.",
      "Article 51: Promotion of international peace and security."
    ],
    constitutionalContext: "DPSPs are non-justiciable, meaning courts cannot enforce them directly. However, they are used to interpret the validity and reasonableness of executive and legislative decisions.",
    examples: [
      "Establishment of Panchayati Raj (73rd Amendment) implemented Article 40.",
      "Maternity Benefit Act implemented Article 42."
    ],
    examFocus: "Classification of DPSPs, amendments (42nd and 44th additions), and the relationship/harmony between FRs and DPSPs (Minerva Mills case).",
    commonTraps: [
      "DPSPs are directives to the State, NOT duties of the citizens. Citizens' duties are in Part IVA.",
      "A Uniform Civil Code (Article 44) is a DPSP, not a Fundamental Right."
    ],
    memoryTrick: "Mnemonic: '36-51 DPSP. Non-justiciable but guides the state. Art 40 = Village, Art 44 = UCC, Art 50 = Separation.'",
    relatedArticles: ["12", "32", "37", "51A"],
    quickRevision: [
      "Non-justiciable: No lawsuit can be filed for non-implementation.",
      "Irish Origin: Borrowed from Ireland, which borrowed from Spain.",
      "Conflict: FRs are superior, but 39(b) and 39(c) override 14 and 19."
    ],
    practiceQuestions: [
      "Discuss the constitutional validity of laws that prioritize Directive Principles over Fundamental Rights.",
      "Trace the implementation of Gandhian principles through Directive Principles since independence."
    ],
    officialSources: [
      "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
    ]
  },
  "President": {
    topic: "President",
    overview: "Part V (Articles 52–62). The President is the executive head of India, acting as the symbol of unity. Performs functions mostly on Cabinet's advice.",
    importantArticles: ["52", "53", "54", "55", "60", "61", "72", "74", "123"],
    coreNotes: [
      "Election (Art 54): Electoral college consists of elected MPs, elected MLAs (states), and elected MLAs of Delhi/Puducherry. Nominated members and MLCs cannot vote.",
      "Impeachment (Art 61): Can be impeached only for 'violation of the Constitution'. The process is quasi-judicial and requires special majority in both Houses.",
      "Executive Powers: All executive action is taken in the President's name. Appoints PM, ministers, Governors, CAG, CEC.",
      "Legislative Powers: Summons/prorogues Parliament, dissolves Lok Sabha, addresses Parliament, promulgates ordinances (Art 123).",
      "Pardoning Power (Art 72): Can grant pardons, reprieves, respites, or remissions of punishment. Wider than Governor's power as it covers court-martial and death sentences."
    ],
    constitutionalContext: "The President is a titular head (de jure) while the Prime Minister is the real executive (de facto). Executive actions require Cabinet approval.",
    examples: [
      "Withholding assent to a bill (veto power).",
      "Promulgating ordinances when Parliament is in recess."
    ],
    examFocus: "Composition of the Electoral College, Impeachment procedure, Pardoning power (Art 72 vs Art 161), and binding advice under Article 74.",
    commonTraps: [
      "Nominated members of Parliament do not vote in the President's election, but they DO participate in their impeachment.",
      "The President has no constitutional discretionary powers; unlike the Governor, who has explicit constitutional discretion."
    ],
    memoryTrick: "Mnemonic: '52 = President. 54 = Electoral College (elected only). 61 = Impeachment (2/3rd total). 72 = Pardon.'",
    relatedArticles: ["52", "61", "72", "74", "123", "153", "161"],
    quickRevision: [
      "Electoral College: Elected MPs + Elected MLAs (including Delhi/Puducherry). No nominated members. No MLCs.",
      "Impeachment: Initiated in either house. Needs 2/3rd of total membership of the house.",
      "Pardons: President can pardon death sentences; Governor cannot."
    ],
    practiceQuestions: [
      "Compare the pardoning powers of the President of India with that of a State Governor.",
      "Explain the constitutional provisions that ensure the President acts as a constitutional head."
    ],
    officialSources: [
      "https://www.sci.gov.in/constitution/",
      "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
    ]
  },
  "Money Bill": {
    topic: "Money Bill",
    overview: "Article 110. Contains only provisions dealing with taxation, government borrowings, and consolidated fund spending. The Speaker decides if a bill is a Money Bill.",
    importantArticles: ["109", "110", "117"],
    coreNotes: [
      "Definition (Art 110): Deals exclusively with tax changes, borrowing regulations, and state audits. Excludes fines or local taxes.",
      "Special Procedure (Art 109): Can only be introduced in the Lok Sabha with the President's prior recommendation.",
      "Rajya Sabha limits: Cannot reject or amend Money Bills. Can only make recommendations and must return the bill in 14 days.",
      "Assent: The President can give assent or withhold it, but cannot return the bill for reconsideration."
    ],
    constitutionalContext: "Money Bills represent the Lok Sabha's financial supremacy, as the house directly represents taxpayers.",
    examples: [
      "Aadhaar Act passed as a Money Bill (challenged in court).",
      "Finance Bills containing tax proposals."
    ],
    examFocus: "Definition under Art 110, Lok Sabha Speaker's final authority, Rajya Sabha's 14-day limit, and Presidential options.",
    commonTraps: [
      "Rajya Sabha cannot reject a Money Bill. If they do nothing for 14 days, it passes anyway.",
      "Not all bills involving money are Money Bills. Fees or local taxes are excluded."
    ],
    memoryTrick: "Mnemonic: '110 is Money. Lok Sabha only. Speaker decides. 14 days for Rajya Sabha.'",
    relatedArticles: ["109", "110", "112", "117"],
    quickRevision: [
      "Introduction: Lok Sabha only, needs President's recommendation.",
      "Speaker's Veto: Certified solely by the Speaker.",
      "No Joint Sitting: Deadlocks are impossible because Lok Sabha prevails."
    ],
    practiceQuestions: [
      "Explain why the Speaker's certification of a Money Bill is a powerful constitutional tool.",
      "Analyze the difference between a Money Bill and a Financial Bill."
    ],
    officialSources: [
      "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
    ]
  },
  "Supreme Court": {
    topic: "Supreme Court",
    overview: "Article 124. The highest judicial forum and final interpreter of the Constitution. Led by the Chief Justice of India.",
    importantArticles: ["124", "131", "136", "141", "142", "143"],
    coreNotes: [
      "Establishment (Art 124): Judges appointed by the President. Removed only by a special majority in Parliament.",
      "Original Jurisdiction (Art 131): Resolves disputes between Center and States, or between States.",
      "Writ Jurisdiction (Art 32): Enforces Fundamental Rights.",
      "Appellate Jurisdiction (Art 132-136): Hears appeals from High Courts.",
      "Advisory Jurisdiction (Art 143): President seeks legal opinions from the court.",
      "Complete Justice (Art 142): Directs actions to ensure justice where laws are silent."
    ],
    constitutionalContext: "Maintains judicial independence from executive or legislative interference.",
    examples: [
      "Kesavananda Bharati case establishing basic structure.",
      "Inter-state water disputes under original jurisdiction."
    ],
    examFocus: "Appointment criteria, removal process, original jurisdiction limits, and Article 142 applications.",
    commonTraps: [
      "No minimum age is specified for appointing Supreme Court judges.",
      "The advisory opinion of the court is not binding on the President."
    ],
    memoryTrick: "Mnemonic: '124 SC setup. 131 Original. 136 Special Leave. 142 Complete Justice. 143 Advisory.'",
    relatedArticles: ["32", "124", "131", "136", "141", "142", "143", "226"],
    quickRevision: [
      "Removal: Needs 2/3rd present and voting + majority of total membership.",
      "Precedent: Decisions bind all courts (Art 141).",
      "Qualifications: HC Judge for 5 years, HC Advocate for 10 years, or distinguished jurist."
    ],
    practiceQuestions: [
      "Discuss the scope of Article 142 and its impact on the separation of powers.",
      "Examine how the collegium system secures judicial independence."
    ],
    officialSources: [
      "https://www.sci.gov.in/constitution/",
      "https://www.sci.gov.in/landmark-judgment-summaries/"
    ]
  },
  "Governor": {
    topic: "Governor",
    overview: "Part VI (Articles 153–162). The constitutional head of a State and agent of the Central Government. Appointed by the President.",
    importantArticles: ["153", "154", "155", "156", "161", "163", "200", "213"],
    coreNotes: [
      "Appointment (Art 155): Appointed by the President and serves during the President's pleasure.",
      "Discretionary Powers: Much wider than the President's, especially in bill reservations (Art 200) or reporting state machinery breakdowns (Art 356).",
      "Pardoning Power (Art 161): Can pardon state-level offenses, but cannot pardon death sentences or court-martial rulings.",
      "Ordinance Power (Art 213): Can issue state ordinances when the legislature is in recess."
    ],
    constitutionalContext: "Acts as a bridge between the federal Center and the state governments, which occasionally creates political friction.",
    examples: [
      "Reserving state bills for the President's assent.",
      "Inviting a Chief Minister to form a government during hung assemblies."
    ],
    examFocus: "Discretionary powers under Art 163, pardoning comparison (Art 72 vs 161), and bill reservation rules under Art 200.",
    commonTraps: [
      "The Governor does not have a secure tenure. They can be removed by the President at any time without reason.",
      "Governors cannot pardon death sentences, though they can suspend or commute them."
    ],
    memoryTrick: "Mnemonic: '153 Governor. Appointed under 155. Pleasure of President. Art 161 is Pardon. Art 200 is Bills.'",
    relatedArticles: ["72", "153", "161", "163", "200", "213", "356"],
    quickRevision: [
      "Tenure: Serves during the pleasure of the President.",
      "Discretion: Decisions on discretionary matters cannot be questioned in court.",
      "Ordinances: Valid for 6 weeks after state assembly reassembly."
    ],
    practiceQuestions: [
      "Critically analyze the role of the Governor as an agent of the Center.",
      "Compare the legislative veto powers of the President and the Governor."
    ],
    officialSources: [
      "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
    ]
  },
  "Emergency": {
    topic: "Emergency",
    overview: "Part XVIII (Articles 352–360). Outlines emergency provisions. Suspends federal rules to safeguard national unity during crises.",
    importantArticles: ["352", "356", "358", "359", "360"],
    coreNotes: [
      "National Emergency (Art 352): Declared for war, aggression, or armed rebellion. Needs written Cabinet advice and approval by special majority in 1 month.",
      "President's Rule (Art 356): Imposed when state machinery breaks down. Approved by simple majority within 2 months.",
      "Financial Emergency (Art 360): Imposed when credit/financial stability is threatened. Never declared in India.",
      "Rights Suspension: Art 358 automatically suspends Art 19. Art 359 allows the President to suspend other rights, except Articles 20 and 21."
    ],
    constitutionalContext: "Temporarily converts the federal system into a unitary one.",
    examples: [
      "The 1975 emergency (internal disturbance).",
      "Frequent impositions of President's Rule in states."
    ],
    examFocus: "Approval timelines (1 month for Art 352 vs 2 months for Art 356/360), majorities, and rights suspension scope.",
    commonTraps: [
      "Cabinet recommendation must be written. The PM alone cannot declare an emergency.",
      "Articles 20 and 21 can never be suspended, even during a National Emergency."
    ],
    memoryTrick: "Mnemonic: '352 National (+4) = 356 State (+4) = 360 Financial. Art 352 needs special majority. Art 356 needs simple majority.'",
    relatedArticles: ["19", "20", "21", "352", "356", "358", "359", "360"],
    quickRevision: [
      "Approval: 1 month for Art 352 (special majority); 2 months for Art 356/360 (simple majority).",
      "Maximum Duration: 352 (indefinite, reviewed every 6 months); 356 (max 3 years); 360 (indefinite).",
      "Right to Property: Protected under 300A, not impacted by emergency."
    ],
    practiceQuestions: [
      "Analyze the impact of the 44th Constitutional Amendment on emergency provisions.",
      "Discuss the judicial review guidelines on President's Rule set by the S.R. Bommai case."
    ],
    officialSources: [
      "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf",
      "https://www.sci.gov.in/landmark-judgment-summaries/"
    ]
  },
  "73rd Amendment": {
    topic: "73rd Amendment",
    overview: "Introduced Part IX and the 11th Schedule. Constitutionalized rural local governments (Panchayats).",
    importantArticles: ["243B", "243G", "243K", "243I"],
    coreNotes: [
      "Gram Sabha: The base body consisting of all registered village voters.",
      "Three-Tier System: Gram Panchayat (village), Panchayat Samiti (block), and Zilla Parishad (district). Block tier is optional for states with less than 20 lakh residents.",
      "Elections (Art 243K): Managed by the State Election Commission. All seats filled by direct election.",
      "Reservations: 1/3rd of seats reserved for women. SC/ST seats reserved in proportion to population.",
      "Finance Commission (Art 243I): Formed by the Governor every 5 years to review panchayat finances."
    ],
    constitutionalContext: "Decentralizes power to implement local-level democracy.",
    examples: [
      "Panchayat elections conducted by state bodies.",
      "State devolution of 29 subjects listed in the 11th Schedule."
    ],
    examFocus: "Three-tier exceptions, State Election Commission independence, and financial devolution reviews.",
    commonTraps: [
      "Panchayat elections are NOT conducted by the Election Commission of India. They are managed by the State Election Commission.",
      "Women's reservation is 1/3rd of the total seats, not 50% (though some states have voluntarily raised it to 50%)."
    ],
    memoryTrick: "Mnemonic: '73rd is Panchayat. 11th Schedule with 29 items. Art 243I is Finance (Income). Art 243K is Elections (Kondut).' ",
    relatedArticles: ["40", "243B", "243G", "243I", "243K", "280"],
    quickRevision: [
      "Gram Sabha: Foundation of the system.",
      "Tenure: Fixed 5 years. Elections must occur within 6 months of dissolution.",
      "Disqualification age: Minimum age to contest is 21 years (not 25)."
    ],
    practiceQuestions: [
      "Examine the challenges in financial devolution to rural local bodies.",
      "Critically evaluate the impact of women reservations in Panchayati Raj institutions."
    ],
    officialSources: [
      "https://panchayat.gov.in/en/constitutional-provision/"
    ]
  },
  "Preamble": {
    topic: "Preamble",
    overview: "The Preamble serves as the preface or introduction to the Constitution of India. It summarizes the aims, objectives, and basic philosophy of the Indian state, based on the 'Objectives Resolution' drafted by Jawaharlal Nehru.",
    importantArticles: ["Preamble"],
    coreNotes: [
      "Source of Authority: The Constitution derives its authority directly from 'We, the People of India'.",
      "Nature of State: Declares India to be a Sovereign, Socialist, Secular, Democratic, Republic. The words 'Socialist', 'Secular', and 'Integrity' were added by the 42nd Amendment in 1976.",
      "Objectives: Secures Justice (social, economic, political), Liberty (thought, expression, belief, faith, worship), Equality (status, opportunity), and Fraternity (assuring dignity of individual and unity/integrity of nation).",
      "Adoption Date: Formally adopted by the Constituent Assembly on November 26, 1949."
    ],
    constitutionalContext: "The Supreme Court clarified its legal status through landmark cases: Berubari Union (1960) ruled it is NOT a part of the Constitution, but Kesavananda Bharati (1973) reversed this, declaring it IS a part and can be amended under Article 368 without altering the Basic Structure.",
    examples: [
      "The 42nd Amendment Act of 1976 is the only amendment to have modified the Preamble.",
      "LIC of India case (1995) again upheld that the Preamble is an integral part of the Constitution."
    ],
    examFocus: "Order of keywords: Sovereign, Socialist, Secular, Democratic, Republic. Non-justiciability. Rulings of Berubari and Kesavananda.",
    commonTraps: [
      "The Preamble is non-justiciable (not directly enforceable in courts). However, it is highly useful to courts in interpreting ambiguous provisions.",
      "It is neither a source of power to the legislature nor a limitation on its powers."
    ],
    memoryTrick: "Mnemonic: S-S-S-D-R (Sovereign, Socialist, Secular, Democratic, Republic). 'Socialist' comes before 'Secular' alphabetically.",
    relatedArticles: ["368", "395"],
    quickRevision: [
      "Adoption: November 26, 1949. Commencement: January 26, 1950.",
      "Morley-Minto and other British acts did not contain preambles of this format.",
      "42nd Amendment (1976) added Socialist, Secular, Integrity."
    ],
    practiceQuestions: [
      "Analyze whether the Preamble can be considered the key to the minds of the makers of the Indian Constitution.",
      "Discuss the significance of the terms 'Secular' and 'Socialist' in light of the Indian federal structure."
    ],
    officialSources: [
      "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
    ]
  },
  "Basic Structure": {
    topic: "Basic Structure",
    overview: "The Basic Structure is a judicial doctrine propounded by the Supreme Court of India in 1973. It establishes that while Parliament has wide powers to amend the Constitution under Article 368, it cannot alter or destroy its essential core.",
    importantArticles: ["368", "13", "32"],
    coreNotes: [
      "Origin: Developed in response to a conflict between Parliament's amending powers and judicial review of fundamental rights (especially property rights).",
      "Evolution Cases: Shankari Prasad (1951) & Sajjan Singh (1965) allowed amendments of FRs. Golaknath (1967) stated FRs cannot be amended. Kesavananda Bharati (1973) compromised: amendments allowed but cannot alter Basic Structure.",
      "Key Elements: Includes supremacy of the Constitution, sovereign, democratic, republic nature, separation of powers, federalism, judicial review, rule of law, and secularism.",
      "Additions: Various elements (like free and fair elections, right to equality, independence of judiciary) have been declared basic structure components in subsequent judgments."
    ],
    constitutionalContext: "This doctrine protects the Constitution from being subverted by a temporary parliamentary majority. It acts as a safety valve for Indian democracy.",
    examples: [
      "In Indira Nehru Gandhi case (1975), the SC struck down the 39th Amendment (exclusion of PM election from judicial review) as a violation of basic structure.",
      "In Minerva Mills case (1980), the SC struck down clauses of the 42nd Amendment that sought to give Parliament unlimited amending power."
    ],
    examFocus: "Sequence of cases (Shankari Prasad -> Golaknath -> Kesavananda -> Minerva Mills -> Waman Rao). Core elements of basic structure.",
    commonTraps: [
      "The phrase 'Basic Structure' is NOT mentioned anywhere in the text of the Constitution of India. It is entirely a judicial innovation.",
      "Judicial review itself is part of the basic structure, meaning Parliament cannot abolish the Supreme Court's review powers."
    ],
    memoryTrick: "Mnemonic: S-G-K-M (Shankari, Golaknath, Kesavananda, Minerva). 'Some Giants Keep Moving'."
    ,
    relatedArticles: ["13", "32", "226", "368"],
    quickRevision: [
      "Propounded: April 24, 1973, by a 7:6 majority in Kesavananda Bharati.",
      "Goal: Protects the identity and core philosophy of the Constitution.",
      "List: Non-exhaustive; determined by courts on a case-by-case basis."
    ],
    practiceQuestions: [
      "Critically evaluate the Basic Structure doctrine as a limitation on Parliament's constituent power.",
      "Discuss the significance of the Minerva Mills judgment in maintaining the balance between Fundamental Rights and DPSPs."
    ],
    officialSources: [
      "https://www.sci.gov.in/landmark-judgment-summaries/"
    ]
  },
  "Amendments": {
    topic: "Amendments",
    overview: "Article 368 in Part XX governs Parliament's power to amend the Constitution. It provides three paths of amendments (Simple, Special, and Special Majority with State Ratification) to keep the Constitution a living document.",
    importantArticles: ["368"],
    coreNotes: [
      "Initiation: A bill can be introduced in EITHER House of Parliament by a minister or a private member. It does NOT require prior presidential approval.",
      "Voting Majorities: Must be passed in each House by a special majority: (a) majority of total membership of the House, and (b) 2/3rd of members present and voting.",
      "No Joint Sitting: If there is a deadlock, there is no provision for a joint sitting. The bill dies if not passed separately.",
      "State Ratification: If the amendment affects federal provisions (like election of President, Supreme Court/High Court power, distribution of legislative powers), it also requires ratification by legislatures of half of the states by a simple majority.",
      "President's Assent: The President MUST give assent to a Constitutional Amendment Bill. They cannot withhold assent or return it for reconsideration (established by 24th Amendment, 1971)."
    ],
    constitutionalContext: "Strikes a balance between rigidity (like the US Constitution) and flexibility (like the British Constitution) to ensure stability and adaptability.",
    examples: [
      "The 86th Amendment Act, 2002 made education a Fundamental Right (Art 21A).",
      "The 101st Amendment Act, 2016 introduced the Goods and Services Tax (GST) system."
    ],
    examFocus: "Introduction rules (no private member limits, no President recommendation). No joint sittings. Mandatory Presidential assent. State ratification conditions.",
    commonTraps: [
      "Amendments by a simple majority (such as changing state boundaries, creating legislative councils, or changing official languages) are NOT deemed to be amendments under Article 368.",
      "A Constitutional Amendment Bill cannot be introduced in State Legislatures; only in the Union Parliament."
    ],
    memoryTrick: "Mnemonic: '368 is Union-only. Special majority in both. Presidential assent is a MUST.'",
    relatedArticles: ["2", "3", "4", "368"],
    quickRevision: [
      "Joint Sitting: Never allowed for Article 368 bills.",
      "President: Must sign the bill (24th Amendment, 1971).",
      "State approval: Simple majority in half of the state legislatures."
    ],
    practiceQuestions: [
      "Explain the procedure for amending the Indian Constitution under Article 368. Highlight the federal provisions that require state ratification.",
      "Discuss why joint sittings are not permitted for Constitutional Amendment Bills."
    ],
    officialSources: [
      "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
    ]
  },
  "Fundamental Duties": {
    topic: "Fundamental Duties",
    overview: "Part IVA (Article 51A) outlines the 11 Fundamental Duties of Indian citizens. Borrowed from the USSR Constitution, they serve as moral obligations reminding citizens of their social duties.",
    importantArticles: ["51A"],
    coreNotes: [
      "Origin: The original Constitution did not contain Fundamental Duties. They were added during the Emergency on the recommendation of the Swaran Singh Committee.",
      "42nd Amendment, 1976: Introduced Part IVA containing Article 51A with 10 duties.",
      "86th Amendment, 2002: Added the 11th duty (duty of a parent/guardian to provide education opportunities to their child aged 6-14 years).",
      "Non-Justiciability: Like DPSPs, they are non-justiciable. However, Parliament can enforce them through statutory laws (e.g., Wildlife Protection Act, Prevention of Insults to National Honour Act)."
    ],
    constitutionalContext: "Balances individual rights with collective responsibilities. Applicable ONLY to Indian citizens, not to foreigners.",
    examples: [
      "Respecting the National Flag and National Anthem.",
      "Safeguarding public property and abjuring violence."
    ],
    examFocus: "Swaran Singh Committee recommendations (rejected ones: duty to pay tax, penalty for non-compliance). Number of duties (10 in 1976, 11 in 2002). Justiciability and applicability.",
    commonTraps: [
      "Fundamental Duties apply ONLY to citizens, whereas some Fundamental Rights apply to all individuals.",
      "Paying taxes is NOT a Fundamental Duty, although it was recommended by the Swaran Singh Committee."
    ],
    memoryTrick: "Mnemonic: '51A has 11 duties. A = Anthem (respect), B = Bapu (noble ideals), C = Core Sovereignty, D = Defense... K = Knowledge/Kids education.'",
    relatedArticles: ["51A", "32", "226"],
    quickRevision: [
      "Added by: 42nd Amendment (1976) on Swaran Singh's recommendation.",
      "Modified by: 86th Amendment (2002) adding the education duty.",
      "Applicability: Citizens only. Non-justiciable."
    ],
    practiceQuestions: [
      "Evaluate the significance of Fundamental Duties in Indian democracy. Are they merely moral precepts?",
      "Discuss the recommendations of the Verma Committee (1999) regarding the legal provisions for enforcing Fundamental Duties."
    ],
    officialSources: [
      "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
    ]
  },
  "Writs": {
    topic: "Writs",
    overview: "Writs are formal written orders issued by the Supreme Court (Article 32) and High Courts (Article 226) to enforce Fundamental Rights and legal rights. They are the primary tools for securing judicial remedies in India.",
    importantArticles: ["32", "226"],
    coreNotes: [
      "Types of Writs: There are 5 types of writs in Indian jurisprudence: Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo Warranto.",
      "Habeas Corpus: 'To have the body of'. Issued against illegal detention. Can be issued against public AND private entities.",
      "Mandamus: 'We command'. Directs a public official to perform a duty they have failed to do. Cannot be issued against President, Governors, or private bodies.",
      "Prohibition: 'To forbid'. Issued by a higher court to a lower court to prevent it from exceeding its jurisdiction. Preventive only.",
      "Certiorari: 'To be certified'. Issued to quash a lower court's order. Preventive and curative.",
      "Quo Warranto: 'By what authority'. Inquires into the legality of a claim to a public office. Can be filed by any interested person (no locus standi limitation)."
    ],
    constitutionalContext: "Article 32 is itself a Fundamental Right, meaning the Supreme Court cannot refuse writ petitions. Article 226 is a constitutional right, making the High Court's writ power discretionary but broader in scope.",
    examples: [
      "Filing a Habeas Corpus petition to produce a missing person detained by police.",
      "Filing a Quo Warranto writ challenging the qualification of a public university vice-chancellor appointment."
    ],
    examFocus: "Comparison between Article 32 (SC) and Article 226 (HC). Details of each writ (who it can be issued against). Locus standi rules (relaxed for Habeas Corpus and Quo Warranto).",
    commonTraps: [
      "High Court writ jurisdiction (Article 226) is wider because it covers ordinary legal rights, whereas the Supreme Court (Article 32) only covers Part III.",
      "Mandamus cannot be issued against private bodies, the President, or State Governors."
    ],
    memoryTrick: "Mnemonic: 'Habeas = Detained body. Mandamus = Perform duty. Prohibition = Stop before judgment. Certiorari = Quash after judgment. Quo Warranto = Show authority.'",
    relatedArticles: ["32", "136", "226"],
    quickRevision: [
      "Habeas Corpus: Applies to both public and private entities.",
      "SC (Art 32): Writ petition is a Fundamental Right; cannot be refused.",
      "HC (Art 226): Discretionary, covers rights beyond Part III."
    ],
    practiceQuestions: [
      "Compare and contrast the writ jurisdictions of the Supreme Court under Article 32 and High Courts under Article 226.",
      "Explain the distinction between the writs of Prohibition and Certiorari."
    ],
    officialSources: [
      "https://www.sci.gov.in/constitution/",
      "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
    ]
  },
  "Judicial Review": {
    topic: "Judicial Review",
    overview: "Judicial Review is the power of the judiciary to examine the constitutionality of legislative enactments and executive orders of both Central and State Governments. If they violate the Constitution, they are declared void.",
    importantArticles: ["13", "32", "131", "136", "226", "246"],
    coreNotes: [
      "Basis: Grounded in Article 13 (laws inconsistent with FRs are void) and Article 32/226 (remedial powers). Also supported by federal subject distribution (Article 246).",
      "Scope: Governed by the principle of 'Procedure Established by Law' (Art 21) which has expanded to incorporate elements of 'Due Process of Law' (fairness, justice, and non-arbitrariness) since the Maneka Gandhi case (1978).",
      "Basic Structure: In the Kesavananda Bharati and L. Chandra Kumar cases, the SC declared Judicial Review an essential part of the Basic Structure.",
      "Ninth Schedule: Added by the 1st Amendment (1951) to protect land reform laws. However, in the I.R. Coelho case (2007), the SC ruled that laws placed in the 9th Schedule after April 24, 1973 are subject to judicial review if they violate Part III rights."
    ],
    constitutionalContext: "Maintains constitutional supremacy, federal balance (dividing powers between Center and States), and protects fundamental rights of citizens.",
    examples: [
      "Striking down the National Judicial Appointments Commission (NJAC) Act (99th Amendment) as unconstitutional in 2015.",
      "Striking down Section 66A of the IT Act (Shreya Singhal v. Union of India) for violating Article 19(1)(a)."
    ],
    examFocus: "Constitutional sources of judicial review. Ninth Schedule rulings (I.R. Coelho case). Shift from 'Procedure Established by Law' to 'Due Process of Law'.",
    commonTraps: [
      "The term 'Judicial Review' is NOT explicitly defined or mentioned in any Article of the Indian Constitution, although the power is clearly present in various Articles.",
      "Laws in the Ninth Schedule are NOT completely immune; they can be reviewed if added after April 24, 1973."
    ],
    memoryTrick: "Mnemonic: 'Review checks balance. Not written in text, but active in Article 13, 32, and 226.'",
    relatedArticles: ["13", "32", "131", "141", "226", "246"],
    quickRevision: [
      "Ninth Schedule: Reviewed post-1973 (I.R. Coelho judgment).",
      "NJAC: Declared void under judicial review.",
      "Due Process: Added via judicial interpretation of Article 21."
    ],
    practiceQuestions: [
      "Trace the shift from 'Procedure Established by Law' to 'Due Process of Law' in Indian constitutional jurisprudence.",
      "Analyze the significance of the I.R. Coelho judgment concerning the Ninth Schedule of the Indian Constitution."
    ],
    officialSources: [
      "https://www.sci.gov.in/constitution/",
      "https://www.sci.gov.in/landmark-judgment-summaries/"
    ]
  }
};

