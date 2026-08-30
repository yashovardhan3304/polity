export interface Article {
  number: string;
  title: string;
  category: string;
  explanation: string;
  importance: 'Basic' | 'Medium' | 'High' | 'Critical';
  examTrap?: string;
  relatedArticles: string[];
  relatedTopic: string;
  sourceUrl: string;
}

export const articlesData: Article[] = [
  {
    number: "12",
    title: "Definition of State",
    category: "Part III: Fundamental Rights",
    explanation: "Defines 'the State' for the application of Fundamental Rights. Includes the Government and Parliament of India, Government and Legislature of States, all local authorities (like municipalities, panchayats), and other statutory/non-statutory authorities (LIC, ONGC, SAIL, etc.) operating within India or under the control of the Government of India.",
    importance: "High",
    examTrap: "Commonly tested on whether private bodies acting as state instruments fall under Article 12. Yes, if they perform public duties or have deep state control.",
    relatedArticles: ["13", "36"],
    relatedTopic: "Fundamental Rights",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "13",
    title: "Laws Inconsistent with or in Derogation of Fundamental Rights",
    category: "Part III: Fundamental Rights",
    explanation: "Provides the foundation for Judicial Review in India. Declares that all laws (pre-constitutional or post-constitutional, including ordinances, bylaws, rules, regulations, and customs) that violate Fundamental Rights shall be void to the extent of their inconsistency. It also states that a Constitutional Amendment is not a 'law' under this Article (re-established by Article 368 actions).",
    importance: "Critical",
    examTrap: "Under Kesavananda Bharati, while constitutional amendments aren't ordinary 'laws', they can still be struck down if they violate the 'Basic Structure' of the Constitution.",
    relatedArticles: ["32", "226", "368"],
    relatedTopic: "Historical Background",
    sourceUrl: "https://www.sci.gov.in/landmark-judgment-summaries/"
  },
  {
    number: "14",
    title: "Equality Before Law & Equal Protection of the Laws",
    category: "Part III: Fundamental Rights",
    explanation: "Guarantees two concepts: 'Equality before law' (British origin: no one is above the law, absence of special privileges) and 'Equal protection of the laws' (US origin: like should be treated alike, allows reasonable classification based on intelligible differentia). Applies to both citizens and foreigners (legal persons too).",
    importance: "Critical",
    examTrap: "It does not prohibit classification. It prohibits class legislation. Classifications must be reasonable and not arbitrary.",
    relatedArticles: ["15", "16", "21"],
    relatedTopic: "Fundamental Rights",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "15",
    title: "Prohibition of Discrimination on Certain Grounds",
    category: "Part III: Fundamental Rights",
    explanation: "Prohibits the State from discriminating against any citizen on grounds ONLY of religion, race, caste, sex, place of birth, or any of them. Allows special provisions for women, children, socially and educationally backward classes (SEBCs), SCs, STs, and Economically Weaker Sections (EWS).",
    importance: "High",
    examTrap: "The word 'ONLY' is critical. Discrimination on other grounds (e.g., residence for state jobs, unless Parliament provides otherwise) is not barred by Article 15.",
    relatedArticles: ["16", "29"],
    relatedTopic: "Fundamental Rights",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "16",
    title: "Equality of Opportunity in Public Employment",
    category: "Part III: Fundamental Rights",
    explanation: "Guarantees equality of opportunity for all citizens in matters of public employment. Prohibits discrimination on grounds of religion, race, caste, sex, descent, place of birth, residence, or any of them. Allows reservation for backward classes not adequately represented in state services, and EWS.",
    importance: "High",
    examTrap: "Residence can be a requirement for employment in certain states, but ONLY if Parliament passes a law to that effect (not the State Legislature itself).",
    relatedArticles: ["15", "335"],
    relatedTopic: "Fundamental Rights",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "17",
    title: "Abolition of Untouchability",
    category: "Part III: Fundamental Rights",
    explanation: "Abolishes 'Untouchability' and forbids its practice in any form. The enforcement of any disability arising out of 'Untouchability' is an offence punishable in accordance with law. This is an absolute right (no exceptions).",
    importance: "High",
    examTrap: "The term 'Untouchability' is NOT defined in either the Constitution or any Act of Parliament. It refers to historical social practices, not physical contact quarantine.",
    relatedArticles: ["35"],
    relatedTopic: "Fundamental Rights",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "18",
    title: "Abolition of Titles",
    category: "Part III: Fundamental Rights",
    explanation: "Prohibits the State from conferring any title (except military or academic distinctions). No citizen of India can accept any title from any foreign State. Prevents noble titles (Rai Bahadur, Maharaja, etc.) to maintain democratic equality.",
    importance: "Medium",
    examTrap: "National awards like Bharat Ratna, Padma Vibhushan, and Padma Shri are decorations, not 'titles' under Article 18. However, they cannot be used as prefixes or suffixes to the recipient's name.",
    relatedArticles: ["14"],
    relatedTopic: "Fundamental Rights",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "19",
    title: "Protection of Certain Rights Regarding Freedom of Speech, etc.",
    category: "Part III: Fundamental Rights",
    explanation: "Guarantees 6 democratic freedoms to citizens: (a) speech and expression, (b) peaceful assembly without arms, (c) forming associations, unions or cooperative societies, (d) moving freely throughout India, (e) residing and settling in any part of India, and (g) practicing any profession/trade. These are subject to 'reasonable restrictions' on grounds like sovereignty, public order, and morality.",
    importance: "Critical",
    examTrap: "These freedoms are guaranteed ONLY to citizens (and shareholders of companies), NOT to foreigners or foreign corporations. Also, right to strike is NOT a fundamental right under 19(1)(c).",
    relatedArticles: ["21", "22", "358"],
    relatedTopic: "Fundamental Rights",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "21",
    title: "Protection of Life and Personal Liberty",
    category: "Part III: Fundamental Rights",
    explanation: "Declares that no person shall be deprived of his life or personal liberty except according to 'procedure established by law'. Expanded by the Supreme Court (Maneka Gandhi case) to imply 'due process of law' (i.e. procedure must be fair, just, and reasonable). Incorporates right to privacy, clean environment, livelihood, speedy trial, etc.",
    importance: "Critical",
    examTrap: "Applies to both citizens and non-citizens. Cannot be suspended even during a National Emergency under Article 352 (via 44th Amendment).",
    relatedArticles: ["20", "21A", "359"],
    relatedTopic: "Fundamental Rights",
    sourceUrl: "https://www.sci.gov.in/constitution/"
  },
  {
    number: "21A",
    title: "Right to Education",
    category: "Part III: Fundamental Rights",
    explanation: "Mandates the State to provide free and compulsory education to all children of the age of six to fourteen years in such manner as the State may determine. Added by the 86th Constitutional Amendment Act, 2002.",
    importance: "Critical",
    examTrap: "Applies ONLY to children aged 6 to 14. Does not guarantee free higher or professional education.",
    relatedArticles: ["45", "51A"],
    relatedTopic: "Fundamental Rights",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "22",
    title: "Protection Against Arrest and Detention in Certain Cases",
    category: "Part III: Fundamental Rights",
    explanation: "Grants rights to persons arrested: to be informed of grounds of arrest, consult/be defended by a legal practitioner of choice, and be produced before a magistrate within 24 hours. Also governs Preventive Detention (which can exceed 3 months only on Advisory Board approval).",
    importance: "High",
    examTrap: "These protections do NOT apply to enemy aliens or to persons arrested/detained under preventive detention laws.",
    relatedArticles: ["21"],
    relatedTopic: "Fundamental Rights",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "32",
    title: "Remedies for Enforcement of Rights (Right to Constitutional Remedies)",
    category: "Part III: Fundamental Rights",
    explanation: "Guarantees the right to move the Supreme Court by appropriate proceedings for the enforcement of Fundamental Rights. Empowers the Supreme Court to issue writs (Habeas Corpus, Mandamus, Prohibition, Quo Warranto, Certiorari). Dr. B.R. Ambedkar called it the 'Heart and Soul' of the Constitution. It is part of the Basic Structure.",
    importance: "Critical",
    examTrap: "Can only be invoked for violations of Fundamental Rights (Part III), not for ordinary legal or constitutional rights like Article 300A.",
    relatedArticles: ["13", "226"],
    relatedTopic: "Writs",
    sourceUrl: "https://www.sci.gov.in/constitution/"
  },
  {
    number: "36",
    title: "Definition of State (DPSP)",
    category: "Part IV: Directive Principles of State Policy",
    explanation: "States that in Part IV, unless the context otherwise requires, 'the State' has the same meaning as in Part III (Article 12). Therefore, all executive and legislative organs of the Union, States, and local bodies are expected to implement these policies.",
    importance: "Medium",
    examTrap: "DPSPs are directives to the 'State' as defined here, but they are non-justiciable. You cannot file a lawsuit for their non-implementation.",
    relatedArticles: ["12", "37"],
    relatedTopic: "DPSP",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "37",
    title: "Application of the Principles Contained in Part IV",
    category: "Part IV: Directive Principles of State Policy",
    explanation: "Declares that the Directive Principles are non-justiciable (not enforceable by any court). However, it explicitly states that these principles are 'fundamental in the governance of the country' and it shall be the duty of the State to apply these principles in making laws.",
    importance: "High",
    examTrap: "Courts cannot enforce DPSPs directly, but they frequently use them to interpret the scope of Fundamental Rights and test the reasonableness of laws.",
    relatedArticles: ["32", "226"],
    relatedTopic: "DPSP",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "39",
    title: "Certain Principles of Policy to be Followed by the State",
    category: "Part IV: Directive Principles of State Policy",
    explanation: "Directs the State to secure: adequate means of livelihood for all; equitable distribution of material resources to subserve common good (39b); prevention of concentration of wealth (39c); equal pay for equal work; health protection of workers/children. Note: 39(b) and 39(c) are given primacy over Articles 14 and 19 under Article 31C.",
    importance: "High",
    examTrap: "Article 31C (which shields laws implementing 39b/c from Articles 14 and 19) is a major constitutional battleground, upheld by Supreme Court as basic structure but restricted from ousting judicial review.",
    relatedArticles: ["14", "19", "31C"],
    relatedTopic: "DPSP",
    sourceUrl: "https://www.sci.gov.in/landmark-judgment-summaries/"
  },
  {
    number: "51A",
    title: "Fundamental Duties",
    category: "Part IVA: Fundamental Duties",
    explanation: "Lists the 11 Fundamental Duties of citizens (originally 10, added by 42nd Amendment, 1976 on Swaran Singh Committee recommendation; 11th added by 86th Amendment, 2002). Examples: respecting the Constitution/Flag, protecting environment, safeguarding public property, providing education to children aged 6-14.",
    importance: "Critical",
    examTrap: "Like DPSPs, these are non-justiciable. They apply ONLY to citizens, not to foreigners. They can be enforced by Parliament enacting specific statutes (e.g. Wildlife Protection Act).",
    relatedArticles: ["21A", "45"],
    relatedTopic: "Fundamental Duties",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "52",
    title: "The President of India",
    category: "Part V: The Union (Executive)",
    explanation: "Simply states: 'There shall be a President of India.' He is the head of the Indian State, first citizen of India, and symbol of unity, integrity, and solidarity of the nation.",
    importance: "Basic",
    examTrap: "The President is the executive head, but acts only on the aid and advice of the Council of Ministers (Article 74).",
    relatedArticles: ["53", "74"],
    relatedTopic: "President",
    sourceUrl: "https://www.sci.gov.in/constitution/"
  },
  {
    number: "63",
    title: "The Vice-President of India",
    category: "Part V: The Union (Executive)",
    explanation: "States: 'There shall be a Vice-President of India.' He acts as the ex-officio Chairman of the Rajya Sabha (Council of States) and discharges President's functions during vacancies.",
    importance: "Basic",
    examTrap: "While acting as President or discharging their duties, the VP does NOT perform the duties of the Chairman of Rajya Sabha and is not entitled to the salary of the Chairman.",
    relatedArticles: ["64", "65", "97"],
    relatedTopic: "Vice-President",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "74",
    title: "Council of Ministers to Aid and Advice President",
    category: "Part V: The Union (Executive)",
    explanation: "Establishes a Council of Ministers with the Prime Minister at the head to aid and advise the President who shall, in the exercise of his functions, act in accordance with such advice. The President may require the Council to reconsider advice, but MUST act on the reconsidered advice (added by 44th Amendment). Advice tendered by Ministers cannot be inquired into by any court.",
    importance: "Critical",
    examTrap: "The 'binding' nature of the advice of the Cabinet was made explicit by the 42nd Amendment, and slightly modified (reconsideration once) by the 44th Amendment.",
    relatedArticles: ["75", "163"],
    relatedTopic: "Council of Ministers",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "75",
    title: "Other Provisions as to Ministers",
    category: "Part V: The Union (Executive)",
    explanation: "PM is appointed by the President; other ministers are appointed by the President on PM's advice. Ministers hold office during pleasure of the President. The Council of Ministers is collectively responsible to the House of the People (Lok Sabha). Total ministers cannot exceed 15% of Lok Sabha strength (91st Amendment).",
    importance: "Critical",
    examTrap: "Collective responsibility is ONLY to the Lok Sabha (House of the People), NOT to the Parliament as a whole or the Rajya Sabha.",
    relatedArticles: ["74", "164"],
    relatedTopic: "Prime Minister",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "76",
    title: "Attorney General for India",
    category: "Part V: The Union (Executive)",
    explanation: "Appointed by the President (must be qualified to be a Supreme Court Judge). Gives legal advice to the Government of India. Holds office during the pleasure of the President. Has the right of audience in all courts in India and right to speak/participate in Parliamentary proceedings without voting rights.",
    importance: "High",
    examTrap: "He is NOT a full-time government servant, is not debarred from private legal practice (unless against the Govt), and is not a member of the Central Cabinet.",
    relatedArticles: ["88", "165"],
    relatedTopic: "Attorney General",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "79",
    title: "Constitution of Parliament",
    category: "Part V: The Union (Parliament)",
    explanation: "Defines Parliament as consisting of: The President, the Council of States (Rajya Sabha), and the House of the People (Lok Sabha).",
    importance: "Basic",
    examTrap: "Though the President is NOT a member of either House, he is an integral part of Parliament because no Bill can become law without his assent.",
    relatedArticles: ["80", "81", "111"],
    relatedTopic: "Parliament",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "80",
    title: "Composition of the Council of States (Rajya Sabha)",
    category: "Part V: The Union (Parliament)",
    explanation: "Rajya Sabha consists of a maximum of 250 members: 12 nominated by the President (from literature, science, art, and social service) and 238 representatives of States and Union Territories. It is a permanent body not subject to dissolution; one-third of members retire every second year.",
    importance: "High",
    examTrap: "Nomination grounds are Art, Science, Literature, and Social Service. 'Cooperative movement' is NOT a ground for Rajya Sabha nominations (though it is for State Legislative Councils).",
    relatedArticles: ["81", "171"],
    relatedTopic: "Rajya Sabha",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "81",
    title: "Composition of the House of the People (Lok Sabha)",
    category: "Part V: The Union (Parliament)",
    explanation: "Defines Lok Sabha composition (max 550 members: reps of states and UTs elected by direct universal adult suffrage). Normal term is 5 years unless dissolved earlier by the President.",
    importance: "High",
    examTrap: "Anglo-Indian nominated seats (formerly 2 seats under Article 331) have been discontinued by the 104th Constitutional Amendment Act, 2019.",
    relatedArticles: ["80", "83"],
    relatedTopic: "Lok Sabha",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "110",
    title: "Definition of 'Money Bill'",
    category: "Part V: The Union (Parliament)",
    explanation: "A Bill is a Money Bill if it contains ONLY provisions dealing with tax imposition, abolition, regulation; government borrowing; custody of Consolidated/Contingency Funds; audit, etc. If any question arises whether a Bill is a Money Bill or not, the decision of the Speaker of Lok Sabha is final.",
    importance: "Critical",
    examTrap: "A Bill does not become a Money Bill simply because it involves government revenue. Fees, fines, or municipal taxes do not make it a Money Bill. The Speaker's decision is final and cannot be questioned in Parliament or generally in court (unless blatantly malafide).",
    relatedArticles: ["109", "117"],
    relatedTopic: "Money Bill",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "112",
    title: "Annual Financial Statement (Budget)",
    category: "Part V: The Union (Parliament)",
    explanation: "Requires the President to lay before both Houses of Parliament an 'Annual Financial Statement' showing estimated receipts and expenditure of the Government of India for the financial year. Distinguishes between expenditure charged upon Consolidated Fund (not voted) and other expenditure (voted).",
    importance: "Critical",
    examTrap: "The word 'Budget' is nowhere mentioned in the Constitution of India; it is formally termed the 'Annual Financial Statement'.",
    relatedArticles: ["113", "114", "266"],
    relatedTopic: "Budget",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "123",
    title: "Power of President to Promulgate Ordinances",
    category: "Part V: The Union (Parliamentary Powers)",
    explanation: "Empowers the President to promulgate ordinances during recess of Parliament if he is satisfied circumstances exist requiring immediate action. An Ordinance has the same force as an Act, but must be laid before both Houses and ceases to operate 6 weeks from reassembly of Parliament, or earlier if disapproved.",
    importance: "Critical",
    examTrap: "Maximum life of an ordinance is 6 months and 6 weeks (as maximum gap between Parliamentary sessions is 6 months, and it expires 6 weeks after reassembly). It cannot be used to amend the Constitution.",
    relatedArticles: ["213"],
    relatedTopic: "Ordinance Power",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "124",
    title: "Establishment and Constitution of Supreme Court",
    category: "Part V: The Union (Judiciary)",
    explanation: "Establishes the Supreme Court of India. Judges are appointed by the President (collegium system evolved through Judge's cases). Removal of a judge requires a special majority in both Houses of Parliament on grounds of proved misbehaviour or incapacity.",
    importance: "Critical",
    examTrap: "The Constitution does NOT specify a minimum age for appointment as a Supreme Court judge. It only specifies qualifications (5 years High Court Judge, 10 years Advocate, or distinguished jurist).",
    relatedArticles: ["125", "217"],
    relatedTopic: "Supreme Court",
    sourceUrl: "https://www.sci.gov.in/constitution/"
  },
  {
    number: "136",
    title: "Special Leave to Appeal by the Supreme Court (SLP)",
    category: "Part V: The Union (Judiciary)",
    explanation: "Empowers the Supreme Court, in its discretion, to grant special leave to appeal from any judgment, decree, determination, sentence or order in any cause or matter passed by any court or tribunal in India. This is a plenary and discretionary power.",
    importance: "High",
    examTrap: "SLP can be filed against any court or tribunal in India, EXCEPT any court or tribunal constituted by or under any law relating to the Armed Forces (military tribunals).",
    relatedArticles: ["131", "132", "133", "134"],
    relatedTopic: "Jurisdiction",
    sourceUrl: "https://www.sci.gov.in/constitution/"
  },
  {
    number: "141",
    title: "Law Declared by Supreme Court to be Binding on All Courts",
    category: "Part V: The Union (Judiciary)",
    explanation: "Declares that the law declared by the Supreme Court shall be binding on all courts within the territory of India. This cements judicial precedent and unitary judicial authority.",
    importance: "High",
    examTrap: "Supreme Court rulings are binding on all other courts in India, but the Supreme Court is NOT bound by its own previous decisions and can overrule them.",
    relatedArticles: ["142"],
    relatedTopic: "Jurisdiction",
    sourceUrl: "https://www.sci.gov.in/constitution/"
  },
  {
    number: "142",
    title: "Enforcement of Decrees and Orders of Supreme Court (Complete Justice)",
    category: "Part V: The Union (Judiciary)",
    explanation: "Empowers the Supreme Court to pass such decree or make such order as is necessary for doing 'complete justice' in any cause or matter pending before it. Such orders are enforceable throughout the territory of India.",
    importance: "Critical",
    examTrap: "This is an extraordinary power. While it allows SC to bypass procedural laws to deliver justice, the court has ruled it cannot be used to violate substantive statutory provisions.",
    relatedArticles: ["141"],
    relatedTopic: "Jurisdiction",
    sourceUrl: "https://www.sci.gov.in/constitution/"
  },
  {
    number: "148",
    title: "Comptroller and Auditor-General of India (CAG)",
    category: "Part V: The Union (Audit)",
    explanation: "Establishes the CAG of India, appointed by the President. He audits all receipts and expenditure of the Union Govt and State Govts. He is the guardian of the public purse. Secured tenure identical to an SC judge. Cannot hold any office under the Union/State after retirement.",
    importance: "Critical",
    examTrap: "Unlike the British CAG, the Indian CAG is only an Auditor-General, not a Comptroller. He has no control over the withdrawal of money from the treasury; his audit starts after the money is spent.",
    relatedArticles: ["149", "150", "151"],
    relatedTopic: "CAG",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "153",
    title: "Governors of States",
    category: "Part VI: The States (Executive)",
    explanation: "States: 'There shall be a Governor for each State.' A 1956 amendment allows appointment of the same person as Governor for two or more States.",
    importance: "Basic",
    examTrap: "Unlike the US Governor who is elected, the Indian Governor is appointed by the President and acts as both the constitutional head of the State and an agent of the Central Government.",
    relatedArticles: ["154", "155", "156"],
    relatedTopic: "Governor",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "154",
    title: "Executive Power of State",
    category: "Part VI: The States (Executive)",
    explanation: "Vests the executive power of the State in the Governor, to be exercised by him either directly or through officers subordinate to him in accordance with the Constitution.",
    importance: "Medium",
    examTrap: "While executive actions are taken in the Governor's name, the real executive power lies with the Chief Minister-led Council of Ministers.",
    relatedArticles: ["153", "163"],
    relatedTopic: "Governor",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "163",
    title: "Council of Ministers to Aid and Advice Governor",
    category: "Part VI: The States (Executive)",
    explanation: "Establishes a Council of Ministers with Chief Minister at the head to aid and advise the Governor, EXCEPT in matters where he is required to act in his discretion. If any question arises whether a matter falls in the Governor's discretion, the Governor's decision is final and cannot be questioned.",
    importance: "Critical",
    examTrap: "The Governor has much wider constitutional discretionary powers than the President of India (e.g., under Articles 356, 200, or scheduled areas administration).",
    relatedArticles: ["74", "164", "200"],
    relatedTopic: "State Council of Ministers",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "168",
    title: "Constitution of Legislatures in States",
    category: "Part VI: The States (Legislature)",
    explanation: "Provides that for every State there shall be a Legislature consisting of the Governor, and: in some states, two Houses (Legislative Assembly and Legislative Council); in other states, one House (Legislative Assembly).",
    importance: "Medium",
    examTrap: "Only a few states have bicameral legislatures (currently 6: UP, Bihar, Maharashtra, Karnataka, Andhra Pradesh, Telangana).",
    relatedArticles: ["169", "170", "171"],
    relatedTopic: "State Legislature",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "213",
    title: "Power of Governor to Promulgate Ordinances",
    category: "Part VI: The States (Legislative Powers)",
    explanation: "Empowers the Governor to promulgate ordinances during recess of the State Legislature, if satisfied that circumstances require immediate action. Operates under similar limits to Article 123.",
    importance: "High",
    examTrap: "The Governor cannot promulgate certain ordinances without prior instructions from the President of India (e.g. bills requiring Presidential assent).",
    relatedArticles: ["123", "200"],
    relatedTopic: "Ordinance Power",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "226",
    title: "Power of High Courts to Issue Certain Writs",
    category: "Part VI: The States (Judiciary)",
    explanation: "Empowers High Courts to issue writs (Habeas Corpus, Mandamus, Prohibition, Quo Warranto, Certiorari) for the enforcement of Fundamental Rights AND for any other purpose (i.e. ordinary legal rights). This is a constitutional right but not a fundamental right itself.",
    importance: "Critical",
    examTrap: "The writ jurisdiction of a High Court is broader than the Supreme Court's (since HC can issue writs for legal rights, whereas SC can only issue writs for FRs under Article 32). However, Article 32 is a Fundamental Right itself, whereas Article 226 is not.",
    relatedArticles: ["32", "227"],
    relatedTopic: "Writs",
    sourceUrl: "https://www.sci.gov.in/constitution/"
  },
  {
    number: "243B",
    title: "Constitution of Panchayats",
    category: "Part IX: The Panchayats",
    explanation: "Mandates the constitution of Panchayats in every State at the village, intermediate, and district levels. States with a population not exceeding 20 lakhs may choose not to constitute Panchayats at the intermediate level.",
    importance: "High",
    examTrap: "The intermediate level panchayat (Panchayat Samiti) is optional ONLY for states with population below 20 lakhs.",
    relatedArticles: ["243A", "243C", "243G"],
    relatedTopic: "73rd Amendment",
    sourceUrl: "https://panchayat.gov.in/en/constitutional-provision/"
  },
  {
    number: "243Q",
    title: "Constitution of Municipalities",
    category: "Part IXA: The Municipalities",
    explanation: "Mandates three types of urban local bodies: Nagar Panchayats (transition areas), Municipal Councils (smaller urban areas), and Municipal Corporations (larger urban areas). Added by the 74th Amendment Act, 1992.",
    importance: "High",
    examTrap: "Classification of an area as transitional, smaller urban, or larger urban is designated by the Governor of the State by public notification, taking into account population, density, revenue, etc.",
    relatedArticles: ["243P", "243R", "243W"],
    relatedTopic: "74th Amendment",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "280",
    title: "Finance Commission",
    category: "Part XII: Finance, Property, Contracts and Suits",
    explanation: "Requires the President to constitute a Finance Commission every fifth year (or earlier). Consists of a Chairman and 4 other members. Recommends: distribution of net tax proceeds between Union and States, principles governing grants-in-aid, and measures to augment state consolidated funds for local bodies.",
    importance: "Critical",
    examTrap: "The recommendations of the Finance Commission are advisory only and NOT binding on the Government of India.",
    relatedArticles: ["281"],
    relatedTopic: "Finance Commission",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "300A",
    title: "Persons Not to be Deprived of Property Save by Authority of Law",
    category: "Part XII: Finance, Property, Contracts and Suits",
    explanation: "Declares that no person shall be deprived of his property save by authority of law. This was inserted by the 44th Constitutional Amendment Act, 1978, which abolished the Fundamental Right to Property (formerly under Article 19(1)(f) and Article 31) and reclassified it as a constitutional/legal right.",
    importance: "Critical",
    examTrap: "Right to Property is still a CONSTITUTIONAL right (and a human right as ruled by SC), but it is no longer a FUNDAMENTAL right. Therefore, a citizen cannot file a petition directly under Article 32 to the Supreme Court for its violation (they must go to High Court under Article 226).",
    relatedArticles: ["19", "31", "32", "226"],
    relatedTopic: "Article 300A",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "324",
    title: "Superintendence, Direction and Control of Elections",
    category: "Part XV: Elections",
    explanation: "Vests the superintendence, direction, and control of all elections to Parliament, State Legislatures, and offices of President and Vice-President in the Election Commission of India. Establishes the independence of the Chief Election Commissioner (CEC) who cannot be removed except in a manner like an SC judge.",
    importance: "Critical",
    examTrap: "The Election Commission of India does NOT conduct elections to Panchayats and Municipalities. Local body elections are conducted by the respective State Election Commission (SEC) under Articles 243K and 243ZA.",
    relatedArticles: ["325", "326", "243K"],
    relatedTopic: "Election Commission",
    sourceUrl: "https://www.eci.gov.in/961-constitutional-provisions"
  },
  {
    number: "343",
    title: "Official Language of the Union",
    category: "Part XVII: Official Language",
    explanation: "States that the official language of the Union shall be Hindi in Devanagari script. However, the use of English for official purposes was allowed to continue for 15 years (extended indefinitely by Parliament through the Official Languages Act, 1963).",
    importance: "Medium",
    examTrap: "India has NO 'national language'. Hindi is the 'official language' of the Union. English is an associate official language.",
    relatedArticles: ["344", "345", "351"],
    relatedTopic: "Schedules",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "352",
    title: "Proclamation of Emergency (National Emergency)",
    category: "Part XVIII: Emergency Provisions",
    explanation: "Allows the President to declare a National Emergency if satisfied that a grave emergency exists whereby the security of India or any part thereof is threatened by war, external aggression, or armed rebellion. Requires written recommendation of the Union Cabinet (ministers of cabinet rank). Subject to parliamentary approval within one month by special majority.",
    importance: "Critical",
    examTrap: "Written advice from the Cabinet (PM + other Cabinet ministers) is mandatory. Proclamation can be made for a part of India, not just the whole country. Internal disturbance is no longer a ground (changed to 'armed rebellion' by 44th Amendment).",
    relatedArticles: ["353", "356", "358", "359"],
    relatedTopic: "Emergency",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "356",
    title: "Provisions in Case of Failure of Constitutional Machinery in States",
    category: "Part XVIII: Emergency Provisions",
    explanation: "Commonly known as President's Rule or State Emergency. Empowers the President, on receipt of a report from the Governor of a State or otherwise, to assume to himself all or any of the functions of the Government of the State if satisfied the state government cannot be carried on in accordance with the Constitution.",
    importance: "Critical",
    examTrap: "Under the S.R. Bommai judgment, the proclamation is subject to judicial review, and the State Assembly cannot be dissolved until Parliament approves the proclamation (it can only be suspended initially).",
    relatedArticles: ["352", "357", "365"],
    relatedTopic: "Emergency",
    sourceUrl: "https://www.sci.gov.in/landmark-judgment-summaries/"
  },
  {
    number: "360",
    title: "Provisions as to Financial Emergency",
    category: "Part XVIII: Emergency Provisions",
    explanation: "Allows the President to declare a Financial Emergency if satisfied that a situation has arisen whereby the financial stability or credit of India or any part of its territory is threatened. During its operation, President can direct reduction of salaries of all state/central public servants, including SC/HC judges.",
    importance: "Critical",
    examTrap: "A Financial Emergency has NEVER been declared in India so far (even during the 1991 economic crisis).",
    relatedArticles: ["352", "356"],
    relatedTopic: "Emergency",
    sourceUrl: "https://www.legislative.gov.in/static/uploads/2025/07/88cca69e868e50b217f855be2fb8bdba.pdf"
  },
  {
    number: "368",
    title: "Power of Parliament to Amend the Constitution and Procedure",
    category: "Part XX: Amendment of the Constitution",
    explanation: "Grants Parliament power to amend the Constitution by way of addition, variation or repeal. Specifies procedure: introduction in either House, passage by special majority (majority of total membership + 2/3rd of members present and voting). Amendments affecting federal matters also require ratification by half the State Legislatures. President MUST give assent.",
    importance: "Critical",
    examTrap: "A joint sitting of Parliament is NOT allowed for Constitutional Amendment Bills. The President has no veto power over constitutional amendment bills (he must give assent, made mandatory by 24th Amendment, 1971). Also, cannot amend the 'Basic Structure' (Kesavananda Bharati case).",
    relatedArticles: ["13", "368"],
    relatedTopic: "Amendments",
    sourceUrl: "https://www.sci.gov.in/landmark-judgment-summaries/"
  }
];
