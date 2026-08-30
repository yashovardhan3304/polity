export interface MCQ {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // 0-based index
  explanation: string;
  difficulty: 'Basic' | 'Exam' | 'Advanced';
  examType: 'SSC-style' | 'UPSC statement-based' | 'General competitive exams';
  topic: string;
  article?: string;
  examTrap?: string;
}

export const mcqsData: MCQ[] = [
  {
    "id": "q-01",
    "question": "Consider the following statements regarding the Preamble to the Constitution of India:\n1. The Preamble is a source of power to the legislature and acts as a prohibition upon the powers of the legislature.\n2. It was amended for the first and only time by the 42nd Constitutional Amendment Act, 1976.\n3. It is justiciable in a court of law, meaning its provisions are directly enforceable.\nWhich of the statements given above is/are correct?",
    "options": [
      "2 only",
      "1 and 2 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statement 1 is incorrect: The Preamble is neither a source of power to the legislature nor a prohibition upon the powers of the legislature. Statement 2 is correct: It was amended only once, in 1976, which added three new words: Socialist, Secular, and Integrity. Statement 3 is incorrect: The Preamble is non-justiciable, meaning its provisions are not enforceable in a court of law.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Preamble",
    "examTrap": "Aspirants often confuse justiciability of the Preamble with its status as a part of the Constitution. It is a part of the Constitution (Kesavananda Bharati) but is NOT justiciable."
  },
  {
    "id": "q-02",
    "question": "Which of the following acts introduced the system of dyarchy at the provincial level in British India?",
    "options": [
      "Indian Councils Act, 1909",
      "Government of India Act, 1919",
      "Government of India Act, 1935",
      "Indian Independence Act, 1947"
    ],
    "correctAnswer": 1,
    "explanation": "The Government of India Act, 1919 (Montagu-Chelmsford Reforms) introduced 'dyarchy' (dual rule) at the provincial level by dividing provincial subjects into 'Transferred' and 'Reserved' subjects. The Government of India Act, 1935 abolished dyarchy at the provinces and introduced it at the Center.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Historical Background",
    "examTrap": "Do not confuse dyarchy at the provincial level (1919) with dyarchy at the federal level (1935), or dyarchy with bicameralism."
  },
  {
    "id": "q-03",
    "question": "Consider the following statements with reference to the Right to Equality guaranteed under Part III of the Indian Constitution:\n1. 'Equality before Law' is a positive concept of American origin.\n2. 'Equal Protection of the Laws' is a negative concept of British origin.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 only",
      "2 only",
      "Both 1 and 2",
      "Neither 1 nor 2"
    ],
    "correctAnswer": 3,
    "explanation": "Both statements are reversed. 'Equality before Law' is a negative concept of British origin (meaning no individual has special privileges). 'Equal Protection of the Laws' is a positive concept of American origin (meaning like should be treated alike under similar circumstances). Thus, both statements 1 and 2 are incorrect.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Fundamental Rights",
    "article": "14",
    "examTrap": "Watch out for swapped definitions of British/US origins and positive/negative conceptualizations."
  },
  {
    "id": "q-04",
    "question": "Which of the following Fundamental Rights is available ONLY to Indian citizens?",
    "options": [
      "Equality before law (Article 14)",
      "Protection of life and personal liberty (Article 21)",
      "Prohibition of discrimination on grounds of religion, race, caste, sex or place of birth (Article 15)",
      "Freedom of conscience and free profession, practice and propagation of religion (Article 25)"
    ],
    "correctAnswer": 2,
    "explanation": "Fundamental Rights exclusively available to citizens are Articles 15, 16, 19, 29, and 30. Articles 14, 20, 21, 21A, 22, 23, 24, 25, 26, 27, and 28 are available to both citizens and foreign nationals (except enemy aliens).",
    "difficulty": "Basic",
    "examType": "General competitive exams",
    "topic": "Fundamental Rights",
    "article": "15",
    "examTrap": "Remember the code: 15, 16, 19, 29, 30 are citizen-only rights."
  },
  {
    "id": "q-05",
    "question": "Consider the following statements regarding the writ of Habeas Corpus:\n1. It can be issued against both public authorities and private individuals.\n2. It cannot be issued if the detention is in accordance with a lawful procedure.\n3. The Supreme Court and High Courts have co-extensive territorial power in issuing this writ.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1 and 2 are correct. Habeas Corpus ('to have the body of') is the only writ that can be issued against both public entities and private persons. It is not issued if detention is legal. Statement 3 is incorrect: The Supreme Court can issue writs throughout India but only for Fundamental Rights (Art 32). High Courts can issue writs only in their state but for any legal right (Art 226). Hence, their jurisdictions are not co-extensive.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Writs",
    "article": "32",
    "examTrap": "Do not assume all writs apply to private individuals. ONLY Habeas Corpus applies to private individuals. Mandamus, Certiorari, etc., apply only to public/judicial bodies."
  },
  {
    "id": "q-06",
    "question": "The concept of 'Basic Structure' of the Indian Constitution was propounded by the Supreme Court in which case?",
    "options": [
      "Golaknath case (1967)",
      "Kesavananda Bharati case (1973)",
      "Minerva Mills case (1980)",
      "Sankari Prasad case (1951)"
    ],
    "correctAnswer": 1,
    "explanation": "The Supreme Court propounded the 'Basic Structure' doctrine in the Kesavananda Bharati v. State of Kerala case (1973). It ruled that while Parliament can amend any part of the Constitution, including Fundamental Rights, under Article 368, it cannot alter or destroy the core elements that form the 'Basic Structure'.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Basic Structure",
    "article": "368",
    "examTrap": "Golaknath case preceded Kesavananda and ruled that FRs cannot be amended at all, which was overruled by Kesavananda via the Basic Structure compromise."
  },
  {
    "id": "q-07",
    "question": "Consider the following statements regarding the Directive Principles of State Policy (DPSPs):\n1. The DPSP are non-justiciable in court but fundamental in the governance of the country.\n2. The 42nd Amendment Act added new directives including securing opportunities for healthy development of children and equal justice/free legal aid.\n3. Implementation of DPSP can be enforced by citizens through Article 32.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 only",
      "1 and 2 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 1,
    "explanation": "Statements 1 and 2 are correct. Under Article 37, DPSPs are non-justiciable but fundamental. The 42nd Amendment added four new DPSPs: Article 39(f) (children), 39A (free legal aid), 43A (workers participation), and 48A (environment). Statement 3 is incorrect: DPSPs are non-justiciable and cannot be enforced under Article 32.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "DPSP",
    "article": "37",
    "examTrap": "Do not confuse the moral and governance value of DPSPs with their legal enforceability. They cannot be enforced by court order."
  },
  {
    "id": "q-08",
    "question": "By which Constitutional Amendment Act was the Right to Property removed from the list of Fundamental Rights?",
    "options": [
      "24th Amendment Act, 1971",
      "42nd Amendment Act, 1976",
      "44th Amendment Act, 1978",
      "86th Amendment Act, 2002"
    ],
    "correctAnswer": 2,
    "explanation": "The 44th Constitutional Amendment Act, 1978 deleted the Right to Property as a Fundamental Right (Article 19(1)(f) and Article 31) and made it a legal/constitutional right under Article 300A in Part XII of the Constitution.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Article 300A",
    "article": "300A",
    "examTrap": "It was NOT the 42nd Amendment (often chosen due to its size) but the 44th Amendment in 1978 (enacted by the Janata Party government) that restored several balances."
  },
  {
    "id": "q-09",
    "question": "Consider the following statements regarding the election of the President of India:\n1. Nominated members of both Houses of Parliament do not participate in the election.\n2. Elected members of the Legislative Assemblies of Union Territories of Delhi and Puducherry participate in the electoral college.\n3. The election is held in accordance with the system of proportional representation by means of a single transferable vote.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All statements are correct. The electoral college for the President (Article 54) consists of: (a) elected members of both Houses of Parliament (no nominated members), (b) elected members of State Legislative Assemblies (no nominated members, no MLCs), and (c) elected members of Legislative Assemblies of Delhi and Puducherry (added by 70th Amendment). The election uses proportional representation with a single transferable vote (Article 55).",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "President",
    "article": "54",
    "examTrap": "State Legislative Council (MLC) members, whether elected or nominated, have NO vote in the presidential election."
  },
  {
    "id": "q-10",
    "question": "Under the Constitution of India, the Council of Ministers is collectively responsible to which body?",
    "options": [
      "The Parliament",
      "The President of India",
      "The House of the People (Lok Sabha)",
      "The Prime Minister"
    ],
    "correctAnswer": 2,
    "explanation": "According to Article 75(3), the Council of Ministers is collectively responsible to the House of the People (Lok Sabha). This means they can stay in office only as long as they enjoy the confidence of the majority in Lok Sabha.",
    "difficulty": "Basic",
    "examType": "General competitive exams",
    "topic": "Council of Ministers",
    "article": "75",
    "examTrap": "Watch out for 'Parliament' as an option. The collective responsibility is specifically to the Lok Sabha, not to the Rajya Sabha or Parliament as a whole."
  },
  {
    "id": "q-11",
    "question": "Consider the following statements regarding the Attorney General of India:\n1. He must be a person qualified to be appointed as a judge of the Supreme Court.\n2. He has the right to speak and take part in proceedings of both Houses of Parliament without the right to vote.\n3. He is considered a full-time government servant and is debarred from private legal practice.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "2 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1 and 2 are correct. The AG (Article 76) is appointed by the President, must have SC judge qualifications, and can take part in parliamentary debates without voting rights. Statement 3 is incorrect: The AG is NOT a full-time government counsel, is not a government servant, and is NOT debarred from private legal practice (though he cannot represent parties against the Government of India or defend accused in criminal cases without government permission).",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Attorney General",
    "article": "76",
    "examTrap": "Do not assume the AG is a public servant subject to civil service rules. He holds office during the pleasure of the President."
  },
  {
    "id": "q-12",
    "question": "With reference to the Speaker of Lok Sabha, consider the following statements:\n1. The Speaker has the final authority to decide whether a bill is a Money Bill or not.\n2. The Speaker votes in the first instance on any matter in the House.\n3. The Speaker does not vacate office upon the dissolution of the Lok Sabha.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 2,
    "explanation": "Statements 1 and 3 are correct. The Speaker's decision on Money Bills is final (Article 110). When Lok Sabha is dissolved, the Speaker does not vacate office immediately; he continues until the first meeting of the newly elected Lok Sabha. Statement 2 is incorrect: The Speaker does NOT vote in the first instance, but exercises a casting vote in the case of an equality of votes (tie) under Article 100.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Lok Sabha",
    "article": "110",
    "examTrap": "The Speaker votes ONLY to break a tie (casting vote), never in the first instance."
  },
  {
    "id": "q-13",
    "question": "What is the maximum period within which the Rajya Sabha must return a Money Bill to the Lok Sabha with or without recommendations?",
    "options": [
      "14 days",
      "30 days",
      "6 weeks",
      "6 months"
    ],
    "correctAnswer": 0,
    "explanation": "Under Article 109, Rajya Sabha has restricted powers over Money Bills. It must return a Money Bill to Lok Sabha within 14 days. If it does not return it within 14 days, the Bill is deemed to have been passed by both Houses in the form in which it was passed by Lok Sabha.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Money Bill",
    "article": "110",
    "examTrap": "Do not confuse the 14-day limit for Money Bills with the 6-week limit for ordinances or 6-month limit for ordinary bills."
  },
  {
    "id": "q-14",
    "question": "Consider the following statements regarding the Ordinance-making power of the President under Article 123:\n1. An ordinance can be promulgated only when both Houses of Parliament are not in session.\n2. The President can promulgate an ordinance even if he is not personally satisfied that emergency action is required.\n3. An ordinance must be approved by Parliament within six weeks of its reassembly.\nWhich of the statements given above is/are correct?",
    "options": [
      "3 only",
      "1 and 3 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statement 1 is incorrect: An ordinance can be promulgated when EITHER of the two Houses is not in session (since a law requires passage by both). Statement 2 is incorrect: Personal satisfaction of the President (acting on Cabinet advice) regarding immediate necessity is mandatory. Statement 3 is correct: The ordinance must be approved by Parliament within 6 weeks from its reassembly, otherwise it ceases to operate.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Ordinance Power",
    "article": "123",
    "examTrap": "An ordinance can be issued when only ONE house is in session. A common trap is assuming both houses must be in recess."
  },
  {
    "id": "q-15",
    "question": "Which of the following jurisdictions of the Supreme Court of India allows it to resolve disputes between the Center and States?",
    "options": [
      "Advisory Jurisdiction (Article 143)",
      "Appellate Jurisdiction (Article 132-136)",
      "Original Jurisdiction (Article 131)",
      "Writ Jurisdiction (Article 32)"
    ],
    "correctAnswer": 2,
    "explanation": "Under Article 131, the Supreme Court has exclusive Original Jurisdiction to settle federal disputes: between the Government of India and one or more States; or between two or more States.",
    "difficulty": "Basic",
    "examType": "General competitive exams",
    "topic": "Jurisdiction",
    "article": "124",
    "examTrap": "Federal disputes cannot be taken to any High Court or other tribunal. They must go directly and exclusively to the Supreme Court under Article 131."
  },
  {
    "id": "q-16",
    "question": "Consider the following statements regarding the office of the Comptroller and Auditor General (CAG) of India:\n1. The CAG is appointed by the President and holds office during the pleasure of the President.\n2. Upon retirement, the CAG is eligible for further office under either the Government of India or any State Government.\n3. The administrative expenses of the CAG's office are charged upon the Consolidated Fund of India.\nWhich of the statements given above is/are correct?",
    "options": [
      "3 only",
      "1 and 3 only",
      "1 and 2 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statement 1 is incorrect: CAG is appointed by the President but does NOT hold office during pleasure; he can be removed only in a manner similar to a Supreme Court judge. Statement 2 is incorrect: The CAG is ineligible for further office under the Center or any State after retirement (to maintain independence). Statement 3 is correct: The salaries and administrative expenses of the CAG's office are charged upon the Consolidated Fund of India (not voted).",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "CAG",
    "article": "148",
    "examTrap": "Even though appointed by the President, the CAG has a secured tenure (6 years or 65 years age) and does not serve 'at the pleasure' of the President."
  },
  {
    "id": "q-17",
    "question": "Which of the following Constitutional Articles governs the Ordinance-making power of the Governor of a State?",
    "options": [
      "Article 123",
      "Article 163",
      "Article 213",
      "Article 226"
    ],
    "correctAnswer": 2,
    "explanation": "Article 213 empowers the Governor to promulgate ordinances during the recess of the State Legislature, under similar conditions and timelines to the President's power under Article 123.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Ordinance Power",
    "article": "213",
    "examTrap": "A simple digit swap: President's ordinance is 1-2-3 (Article 123); Governor's ordinance is 2-1-3 (Article 213)."
  },
  {
    "id": "q-18",
    "question": "Consider the following statements regarding the amendment of the Constitution of India under Article 368:\n1. A Constitutional Amendment Bill can be initiated only in the Lok Sabha.\n2. The Bill does not require the prior recommendation of the President.\n3. In case of disagreement between the two Houses, the President can summon a joint sitting.\nWhich of the statements given above is/are correct?",
    "options": [
      "2 only",
      "1 and 2 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statement 1 is incorrect: A Constitutional Amendment Bill can be introduced in EITHER House of Parliament. Statement 2 is correct: It does not require prior presidential recommendation. Statement 3 is incorrect: There is no provision for a joint sitting under Article 368 if a disagreement occurs; the bill must be passed by each House separately by special majority.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Amendments",
    "article": "368",
    "examTrap": "While ordinary bills and financial bills allow joint sittings to break deadlocks, Constitutional Amendment Bills and Money Bills do NOT allow joint sittings."
  },
  {
    "id": "q-19",
    "question": "The 73rd Constitutional Amendment Act, 1992 added which Part and Schedule to the Constitution of India?",
    "options": [
      "Part IX and 11th Schedule",
      "Part IXA and 12th Schedule",
      "Part IXB and 11th Schedule",
      "Part X and 10th Schedule"
    ],
    "correctAnswer": 0,
    "explanation": "The 73rd Constitutional Amendment Act, 1992 introduced Part IX (The Panchayats) and the 11th Schedule (containing 29 functional items for Panchayats) to the Constitution of India. The 74th Amendment introduced Part IXA and the 12th Schedule for Municipalities.",
    "difficulty": "Basic",
    "examType": "General competitive exams",
    "topic": "73rd Amendment",
    "article": "243B",
    "examTrap": "Verify matching 73rd with 11th Schedule (Panchayats) and 74th with 12th Schedule (Municipalities)."
  },
  {
    "id": "q-20",
    "question": "Consider the following statements regarding the Finance Commission of India:\n1. It is a statutory body constituted by the President of India every fifth year.\n2. The recommendations made by the Finance Commission are advisory and not binding on the Government.\n3. It recommends the principles governing grants-in-aid of revenues to the States.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 1,
    "explanation": "Statement 1 is incorrect: The Finance Commission is a CONSTITUTIONAL body under Article 280 (not a statutory body). Statements 2 and 3 are correct: The commission consists of a chairman and 4 members. Its recommendations are purely advisory and recommend the principles of grants-in-aid and tax sharing.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Finance Commission",
    "article": "280",
    "examTrap": "Be careful with terms. The Finance Commission is a constitutional body (Art 280), whereas the National Development Council or NHRC are statutory/extra-constitutional."
  },
  {
    "id": "q-21",
    "question": "Under the Indian Constitution, which emergency is popularly known as 'President's Rule'?",
    "options": [
      "National Emergency under Article 352",
      "State Emergency under Article 356",
      "Financial Emergency under Article 360",
      "Administrative Emergency under Article 365"
    ],
    "correctAnswer": 1,
    "explanation": "Article 356 provides for President's Rule (also called State Emergency or Constitutional Emergency) in case of the breakdown of constitutional machinery in a State.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Emergency",
    "article": "356",
    "examTrap": "Article 365 is not an emergency itself, but states that if a State fails to comply with Union directions, it triggers a breakdown of machinery under Article 356."
  },
  {
    "id": "q-22",
    "question": "Consider the following statements with reference to the National Emergency declared under Article 352:\n1. It can be declared only on the written recommendation of the Prime Minister alone.\n2. A proclamation of emergency must be approved by both Houses of Parliament within one month from its issue.\n3. During its operation, the term of the Lok Sabha can be extended by Parliament for one year at a time.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 1,
    "explanation": "Statement 1 is incorrect: The President can declare emergency ONLY on the written advice of the entire Union Cabinet (PM + cabinet rank ministers), not the PM alone (added by 44th Amendment). Statements 2 and 3 are correct: The approval must be within one month by special majority. Lok Sabha's term can be extended for 1 year at a time during its operation.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Emergency",
    "article": "352",
    "examTrap": "The written recommendation must come from the Cabinet, not the Prime Minister alone. This was inserted to prevent repeating the 1975 declaration."
  },
  {
    "id": "q-23",
    "question": "Which of the following statements about the Supreme Court of India's Advisory Jurisdiction (Article 143) is correct?",
    "options": [
      "The Supreme Court is bound to give advice on any pre-constitutional treaty dispute referred to it.",
      "The opinion expressed by the Supreme Court is binding on the President.",
      "Only the Prime Minister can seek the advice of the Supreme Court.",
      "The Supreme Court can advise on private civil disputes."
    ],
    "correctAnswer": 0,
    "explanation": "Under Article 143, the President can refer two categories of questions to the Supreme Court: (1) questions of law/fact of public importance (SC may refuse advice), and (2) disputes arising out of pre-constitutional treaties/agreements (SC MUST give advice). The President is NOT bound by the advice.",
    "difficulty": "Advanced",
    "examType": "General competitive exams",
    "topic": "Jurisdiction",
    "article": "124",
    "examTrap": "The Supreme Court's advisory opinion is not a judicial decree; hence it is not binding on the President or the government."
  },
  {
    "id": "q-24",
    "question": "Under the 74th Amendment Act, municipal bodies are constituted in transitional areas (from rural to urban) under what name?",
    "options": [
      "Nagar Panchayat",
      "Municipal Council",
      "Municipal Corporation",
      "Town Area Committee"
    ],
    "correctAnswer": 0,
    "explanation": "According to Article 243Q, a Nagar Panchayat is constituted for a transitional area (an area in transition from a rural area to an urban area). Municipal Council is for smaller urban areas and Municipal Corporation is for larger urban areas.",
    "difficulty": "Basic",
    "examType": "General competitive exams",
    "topic": "74th Amendment",
    "article": "243Q",
    "examTrap": "Watch the classification matching: Transitional = Nagar Panchayat; Small Urban = Municipal Council; Large Urban = Municipal Corporation."
  },
  {
    "id": "q-25",
    "question": "Consider the following statements regarding the State Legislative Council (Vidhan Parishad):\n1. The creation or abolition of a Legislative Council requires a constitutional amendment under Article 368.\n2. The total number of members in the Council cannot exceed one-third of the total members in the Assembly.\n3. The minimum strength of a Legislative Council is fixed at 40 members.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 1,
    "explanation": "Statement 1 is incorrect: Under Article 169, Parliament can abolish or create a Legislative Council if the State Assembly passes a resolution by special majority. However, this act of Parliament is NOT deemed an amendment under Article 368 (passed by simple majority). Statements 2 and 3 are correct: The max strength is 1/3rd of the Assembly, and minimum is 40.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "State Legislature",
    "article": "168",
    "examTrap": "Abolition/creation of the Council (Art 169) is a constitutional modification, but is explicitly NOT considered an amendment under Article 368."
  },
  {
    "id": "q-26",
    "question": "Which Constitutional Amendment reduced the voting age in India from 21 years to 18 years for Lok Sabha and Assembly elections?",
    "options": [
      "42nd Amendment Act, 1976",
      "44th Amendment Act, 1978",
      "61st Amendment Act, 1989",
      "86th Amendment Act, 2002"
    ],
    "correctAnswer": 2,
    "explanation": "The 61st Constitutional Amendment Act, 1989 amended Article 326 to reduce the voting age from 21 to 18 years for elections to the Lok Sabha and State Legislative Assemblies.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Election Commission",
    "article": "324",
    "examTrap": "Frequently asked direct facts in competitive exams. Remember: 61st Amendment (1989)."
  },
  {
    "id": "q-27",
    "question": "Consider the following statements regarding the joint sitting of both Houses of Parliament:\n1. It is presided over by the President of India.\n2. It can be summoned for resolving deadlocks on Constitutional Amendment Bills.\n3. A joint sitting is governed by the Rules of Procedure of the Lok Sabha, not Rajya Sabha.\nWhich of the statements given above is/are correct?",
    "options": [
      "3 only",
      "1 and 2 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statement 1 is incorrect: The joint sitting is presided over by the Speaker of Lok Sabha (if absent, Deputy Speaker; if absent, Deputy Chairman of Rajya Sabha). The President summons it but does not preside. Statement 2 is incorrect: Joint sittings are only allowed for Ordinary Bills and Financial Bills, not for Money Bills or Constitutional Amendment Bills. Statement 3 is correct: It is conducted under the Lok Sabha rules of procedure.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Joint Sitting",
    "article": "79",
    "examTrap": "If the Speaker and Deputy Speaker of Lok Sabha are absent, who presides? The Deputy Chairman of Rajya Sabha. The Chairman of Rajya Sabha (VP) NEVER presides over a joint sitting."
  },
  {
    "id": "q-28",
    "question": "Which of the following is/are federal features of the Indian Constitution?\n1. Written Constitution\n2. Single Citizenship\n3. Integrated Judiciary\n4. Bicameralism\nSelect the correct answer using the codes below:",
    "options": [
      "1 and 4 only",
      "1, 3 and 4 only",
      "2 and 3 only",
      "1, 2, 3 and 4"
    ],
    "correctAnswer": 0,
    "explanation": "Federal features of the Indian Constitution include: dual polity, written constitution, division of powers, supremacy of the Constitution, rigidity of the Constitution, independent judiciary, and bicameralism. Unitary or non-federal features include: strong Center, single Constitution, single citizenship, flexibility of Constitution, integrated judiciary, appointment of Governor by Center, all-India services, and emergency provisions. Therefore, 1 and 4 are federal, whereas 2 and 3 are unitary.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Salient Features",
    "examTrap": "Integrated Judiciary is a unitary feature, whereas Independent Judiciary is a federal feature. Aspirants frequently confuse these two."
  },
  {
    "id": "q-29",
    "question": "The power to decide an election petition in India is vested in which body?",
    "options": [
      "The Election Commission of India",
      "The Parliament",
      "The High Courts and Supreme Court",
      "The President of India"
    ],
    "correctAnswer": 2,
    "explanation": "The power to decide an election petition (disputing election of an MP or MLA) lies with the High Courts in the first instance, with appeal to the Supreme Court. The Election Commission does not decide election petitions.",
    "difficulty": "Basic",
    "examType": "General competitive exams",
    "topic": "Election Commission",
    "article": "324",
    "examTrap": "While ECI handles election operations, disputes challenging the validity of an election (Election Petitions) are resolved by the judiciary (High Courts)."
  },
  {
    "id": "q-30",
    "question": "Under the Indian Constitution, the basic structure cannot be amended. Which of the following is NOT part of the basic structure?",
    "options": [
      "Rule of law",
      "Judicial review",
      "Free and fair elections",
      "Right to Property"
    ],
    "correctAnswer": 3,
    "explanation": "Rule of law, Judicial review, and Free and fair elections are recognized by various Supreme Court judgments as part of the Basic Structure. The Right to Property is NOT part of the basic structure; it was removed from Fundamental Rights and is an ordinary constitutional right under Article 300A.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Basic Structure",
    "article": "300A",
    "examTrap": "Since property was removed from Part III, it lost any basic structure protection and is fully subject to state legal regulation."
  },
  {
    "id": "q-31",
    "question": "Which of the following is correct regarding Article 356 (President's Rule)?",
    "options": [
      "It can be extended indefinitely if approved by Parliament every six months.",
      "The state legislative assembly is automatically dissolved upon the proclamation.",
      "It can be imposed if a state fails to comply with directives given by the Union.",
      "It requires a special majority of Parliament for approval."
    ],
    "correctAnswer": 2,
    "explanation": "Under Article 365, if a state fails to comply with or give effect to directions from the Union, it is lawful for the President to hold that a breakdown of constitutional machinery has occurred, triggering Article 356. Extensions are capped at 3 years max. Assembly is suspended initially, not dissolved. Simple majority is required.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Emergency",
    "article": "356",
    "examTrap": "Do not forget the link between Article 365 (administrative directions) and Article 356 (President's Rule)."
  },
  {
    "id": "q-32",
    "question": "Under Article 19, the right to form associations includes which of the following?",
    "options": [
      "Right to form cooperative societies",
      "Right to obtain government recognition for a union",
      "Right to strike",
      "Right to declare lock-outs"
    ],
    "correctAnswer": 0,
    "explanation": "The right to form associations, unions, or cooperative societies is guaranteed under Article 19(1)(c). Cooperative societies were added by the 97th Constitutional Amendment Act, 2011. However, the Supreme Court has ruled that the right to strike, lock-out, or obtain automatic government recognition is NOT a fundamental right.",
    "difficulty": "Advanced",
    "examType": "General competitive exams",
    "topic": "Fundamental Rights",
    "article": "19",
    "examTrap": "A trade union has the fundamental right to exist, but it does NOT have a fundamental right to strike. That is a statutory right governed by labor laws."
  },
  {
    "id": "q-33",
    "question": "With reference to the Ordinance-making power of the Governor of a State under Article 213, consider the following statements:\n1. The Governor can promulgate ordinances only when both Houses of the State Legislature (if bicameral) are not in session.\n2. The Governor cannot make an ordinance without instructions from the President in certain cases where a bill would have required the President's prior recommendation.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 only",
      "2 only",
      "Both 1 and 2",
      "Neither 1 nor 2"
    ],
    "correctAnswer": 1,
    "explanation": "Statement 1 is incorrect: Similar to the President, the Governor can issue an ordinance when EITHER of the two houses is not in session (for bicameral legislatures). Statement 2 is correct: The Governor requires prior instructions from the President under three conditions: (a) if a bill containing the same provisions would have required President's prior sanction, (b) if he would have deemed it necessary to reserve a similar bill, or (c) if an Act of state legislature would have been invalid without President's assent.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Ordinance Power",
    "article": "213",
    "examTrap": "Remember the instructions caveat: The Governor does not have absolute ordinance power; under Article 213, they must obtain Presidential instructions in specific federal scenarios."
  },
  {
    "id": "q-34",
    "question": "Compare the writ jurisdiction of the Supreme Court (Article 32) and High Courts (Article 226):\n1. High Courts can issue writs for both fundamental rights and ordinary legal rights, whereas the Supreme Court issues writs only for fundamental rights.\n2. Approaching the High Court under Article 226 is itself a Fundamental Right, whereas approaching the Supreme Court under Article 32 is a discretionary remedy.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 only",
      "2 only",
      "Both 1 and 2",
      "Neither 1 nor 2"
    ],
    "correctAnswer": 0,
    "explanation": "Statement 1 is correct: Article 226 has a wider scope because High Courts can issue writs for Part III and ordinary legal rights. Statement 2 is incorrect and reversed: Approaching the Supreme Court under Article 32 is itself a Fundamental Right (guaranteed remedy), whereas approaching the High Court under Article 226 is a discretionary constitutional right, not a fundamental right.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Writs",
    "article": "32",
    "examTrap": "High Court's writ power is broader in scope, but the Supreme Court's writ power is more secure because the SC cannot refuse to hear an Art 32 petition since it is itself a FR."
  },
  {
    "id": "q-35",
    "question": "Which of the following recommendations of the Swaran Singh Committee (1976) was/were REJECTED by Parliament while enacting the 42nd Constitutional Amendment Act?",
    "options": [
      "Duty to pay taxes",
      "Penalty or punishment for non-compliance with duties",
      "No law imposing such penalty shall be called in question in any court on ground of violation of FRs",
      "All of the above"
    ],
    "correctAnswer": 3,
    "explanation": "All three of these recommendations made by the Swaran Singh Committee were rejected by the Congress government and not included in the 42nd Amendment: (1) Parliament may provide penalty/punishment for failure to perform duties, (2) No law imposing such penalty shall be challenged in court, and (3) Duty to pay taxes should be a fundamental duty.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Fundamental Duties",
    "article": "51A",
    "examTrap": "A common exam trap is assuming all committee recommendations were adopted. Pay tax, punishment, and court immunity were explicitly rejected."
  },
  {
    "id": "q-36",
    "question": "Arrange the following landmark Supreme Court cases in chronological order of their judgments:\n1. Minerva Mills v. Union of India\n2. Golaknath v. State of Punjab\n3. Kesavananda Bharati v. State of Kerala\n4. Shankari Prasad v. Union of India\nSelect the correct sequence:",
    "options": [
      "4 - 2 - 3 - 1",
      "4 - 3 - 2 - 1",
      "2 - 4 - 3 - 1",
      "4 - 2 - 1 - 3"
    ],
    "correctAnswer": 0,
    "explanation": "The correct chronological order is: (1) Shankari Prasad case: 1951, (2) Golaknath case: 1967, (3) Kesavananda Bharati case: 1973 (Basic Structure propounded), and (4) Minerva Mills case: 1980 (Judicial review re-asserted).",
    "difficulty": "Exam",
    "examType": "SSC-style",
    "topic": "Basic Structure",
    "article": "368",
    "examTrap": "Easy to swap Golaknath (1967) and Kesavananda (1973) since both dealt with fundamental rights limitations. Golaknath came first."
  },
  {
    "id": "q-37",
    "question": "Consider the following statements regarding Financial Emergency under Article 360:\n1. Once approved by both Houses of Parliament, the Financial Emergency continues indefinitely till it is revoked.\n2. A simple majority is required in Parliament to approve the proclamation.\n3. The President can issue directions for the reduction of salaries of judges of the Supreme Court and High Courts during its operation.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All statements are correct: (1) Unlike National Emergency, there is no maximum period prescribed for its operation, and no periodic parliamentary approval is required. (2) It requires a simple majority for approval. (3) During its operation, the President can direct salary reductions for all central/state employees, including SC and HC judges.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Emergency",
    "article": "360",
    "examTrap": "Normally, judges' salaries cannot be reduced to their disadvantage during their tenure. Financial Emergency (Art 360) is the ONLY exception to this rule."
  },
  {
    "id": "q-38",
    "question": "Under the 73rd Constitutional Amendment Act, 1992, which of the following is/are compulsory provisions for all States?\n1. Establishment of a Gram Sabha in a village or group of villages.\n2. Direct elections to all seats in panchayats at all three levels.\n3. Granting voting rights to MPs and MLAs in panchayats.\nSelect the correct answer using the codes below:",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Provisions 1 and 2 are compulsory (mandatory) under the 73rd Amendment. Provision 3 (granting voting rights to MPs/MLAs in intermediate or district panchayats) is a voluntary provision; it is up to the state legislatures to decide.",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "73rd Amendment",
    "article": "243B",
    "examTrap": "States do not have discretion on Gram Sabha setup, direct elections, or women's reservations. They do have discretion on MP voting rights, OBC reservations, and tax devolution."
  },
  {
    "id": "q-39",
    "question": "Which of the following statements is correct regarding the creation or abolition of a State Legislative Council under Article 169?",
    "options": [
      "It requires a resolution passed by the State Legislative Assembly by a simple majority, followed by parliamentary approval.",
      "It requires a resolution passed by the State Legislative Assembly by a special majority, followed by an Act of Parliament passed by a simple majority.",
      "It requires a constitutional amendment bill passed by Parliament by a special majority under Article 368.",
      "The Governor holds the final authority to create or abolish the Council."
    ],
    "correctAnswer": 1,
    "explanation": "Under Article 169, the State Legislative Assembly must pass a resolution by a special majority (majority of total strength + 2/3rd of members present and voting). Parliament can then create or abolish the Council by an ordinary law (simple majority). This law is NOT deemed an amendment under Article 368.",
    "difficulty": "Exam",
    "examType": "SSC-style",
    "topic": "State Legislature",
    "article": "168",
    "examTrap": "While the state assembly needs a special majority to initiate, Parliament only needs a simple majority to enact. No Article 368 process is triggered."
  },
  {
    "id": "q-40",
    "question": "Consider the following statements regarding the Attorney General of India (Article 76):\n1. The Attorney General enjoys all the privileges and immunities that are available to a Member of Parliament.\n2. The Constitution fixes the term of office of the Attorney General at six years or until the age of 65 years.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 only",
      "2 only",
      "Both 1 and 2",
      "Neither 1 nor 2"
    ],
    "correctAnswer": 0,
    "explanation": "Statement 1 is correct: Under Article 88, the AG has the right to speak/take part in Parliament and enjoys all parliamentary privileges and immunities. Statement 2 is incorrect: The Constitution does NOT fix the term of office of the AG. He holds office during the pleasure of the President and receives remuneration determined by the President.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Attorney General",
    "article": "76",
    "examTrap": "Unlike other constitutional officers (like CAG, EC, UPSC Chairman) who have fixed 6-year/65-year terms, the AG has no fixed term and serves purely at the pleasure of the President."
  },
  {
    "id": "q-41",
    "question": "In which of the following cases did the Supreme Court first rule that the Preamble is a part of the Constitution and can be amended under Article 368?",
    "options": [
      "Berubari Union case (1960)",
      "Golaknath case (1967)",
      "Kesavananda Bharati case (1973)",
      "Minerva Mills case (1980)"
    ],
    "correctAnswer": 2,
    "explanation": "In the Kesavananda Bharati case (1973), the Supreme Court held that the Preamble is a part of the Constitution, overruling its previous 1960 Berubari Union decision. The court ruled it can be amended under Article 368 as long as the Basic Structure is not destroyed.",
    "difficulty": "Basic",
    "examType": "General competitive exams",
    "topic": "Preamble",
    "article": "368",
    "examTrap": "The Berubari case (1960) ruled that the Preamble is NOT a part of the Constitution, whereas Kesavananda (1973) reversed this. Make sure you don't confuse the two."
  },
  {
    "id": "q-42",
    "question": "Consider the following statements regarding Financial Bills and Money Bills:\n1. All Money Bills are Financial Bills, but not all Financial Bills are Money Bills.\n2. A Financial Bill (I) containing Article 117(1) provisions can be introduced in either House of Parliament.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 only",
      "2 only",
      "Both 1 and 2",
      "Neither 1 nor 2"
    ],
    "correctAnswer": 0,
    "explanation": "Statement 1 is correct: Money Bills (Art 110) are a specific subset of Financial Bills. Statement 2 is incorrect: A Financial Bill (I) under Article 117(1) shares two features with a Money Bill: (a) it can be introduced ONLY in the Lok Sabha (not Rajya Sabha), and (b) it requires the President's recommendation. (Unlike a Money Bill, however, it can be amended or rejected by the Rajya Sabha).",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Money Bill",
    "article": "110",
    "examTrap": "Financial Bill (I) must be introduced in Lok Sabha only, just like a Money Bill. A common mistake is thinking only Money Bills are restricted to Lok Sabha."
  },
  {
    "id": "q-43",
    "question": "Which of the following British enactments designated the Governor of Bengal as the 'Governor-General of Bengal' and provided for the establishment of a Supreme Court at Fort William, Calcutta?",
    "options": [
      "Regulating Act of 1773",
      "Pitt's India Act of 1784",
      "Charter Act of 1833",
      "Charter Act of 1853"
    ],
    "correctAnswer": 0,
    "explanation": "The Regulating Act of 1773 designated the Governor of Bengal as the 'Governor-General of Bengal' (Lord Warren Hastings being the first) and created an Executive Council of four members to assist him. It also provided for the establishment of a Supreme Court at Calcutta (1774) comprising one Chief Justice (Sir Elijah Impey) and three other judges.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Historical Background",
    "examTrap": "Do not confuse the Supreme Court established under the Regulating Act of 1773 at Calcutta with the Federal Court established under the Government of India Act 1935 or the present Supreme Court established in 1950."
  },
  {
    "id": "q-44",
    "question": "Consider the following statements regarding the Pitt's India Act of 1784:\n1. It distinguished between the commercial and political functions of the East India Company.\n2. It established a Board of Control to manage political affairs while allowing the Court of Directors to manage commercial affairs.\n3. The Company's territories in India were for the first time called the 'British possessions in India'.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All three statements are correct regarding the Pitt's India Act of 1784:\n1. It separated the commercial and political functions of the Company.\n2. It instituted a system of 'Double Government' by creating a 6-member Board of Control to manage civil, military, and revenue affairs, while the Court of Directors retained commercial oversight.\n3. It placed the Company's administration under the direct control of the British Government and for the first time officially termed the Company's territories as 'British possessions in India'.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Historical Background",
    "examTrap": "Candidates often confuse the system of 'Double Government' introduced by Pitt's India Act 1784 (Board of Control + Court of Directors) with 'Dyarchy' in the provinces introduced by the Government of India Act 1919."
  },
  {
    "id": "q-45",
    "question": "With reference to the Charter Act of 1833, consider the following statements:\n1. It designated the Governor-General of Bengal as the Governor-General of India and vested in him all civil and military powers.\n2. It completely ended the commercial activities of the East India Company, making it a purely administrative body.\n3. A fourth member (Law Member) was added to the Governor-General's Council with full voting rights on executive decisions.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1 and 2 are correct. Lord William Bentinck was the first Governor-General of India. The Act completely ended the commercial monopoly of the East India Company (including tea and trade with China, which were partially preserved in the Charter Act of 1813), making it purely an administrative body.\nStatement 3 is incorrect because Lord Macaulay was added as the fourth member (Law Member) without executive voting rights; he was only entitled to sit and vote during legislative deliberations.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Historical Background",
    "examTrap": "The Law Member (Lord Macaulay) added by the Charter Act of 1833 was only an extraordinary/temporary member for legislative purposes and did NOT have full executive voting rights."
  },
  {
    "id": "q-46",
    "question": "Consider the following statements regarding the Charter Act of 1853:\n1. It separated, for the first time, the legislative and executive functions of the Governor-General's Council.\n2. It introduced local representation in the Indian (Central) Legislative Council.\n3. It introduced an open competition system for the selection and recruitment of civil servants, throwing it open to Indians.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All three statements are correct:\n1. The Charter Act of 1853 separated the legislative and executive functions of the Governor-General's Council by establishing a separate 6-member Indian (Central) Legislative Council (often called the mini-Parliament).\n2. It introduced local representation for the first time in the Central Legislative Council: 4 out of 6 new legislative members were appointed by the local governments of Madras, Bombay, Bengal, and Agra.\n3. It introduced open competition for civil services (the Macaulay Committee was appointed in 1854 to implement this scheme).",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Historical Background",
    "examTrap": "The Charter Act of 1833 attempted to introduce open competition for civil services, but it was negated by opposition from the Court of Directors. It was successfully enacted only by the Charter Act of 1853."
  },
  {
    "id": "q-47",
    "question": "The Government of India Act 1858 transferred the governance of India from the East India Company to the British Crown. Who was appointed as the first Viceroy of India under this Act?",
    "options": [
      "Lord Dalhousie",
      "Lord Canning",
      "Lord Ripon",
      "Lord Curzon"
    ],
    "correctAnswer": 1,
    "explanation": "Lord Canning became the first Viceroy of India under the Government of India Act 1858 ('Act for the Better Government of India'). The Act abolished the Board of Control and Court of Directors, ending the system of Double Government, and created the office of Secretary of State for India, who was a member of the British Cabinet assisted by a 15-member Council of India.",
    "difficulty": "Basic",
    "examType": "General competitive exams",
    "topic": "Historical Background",
    "examTrap": "Lord Canning was the last Governor-General of India under Company Rule and the first Viceroy of India under Crown Rule."
  },
  {
    "id": "q-48",
    "question": "Which of the following features were introduced by the Indian Councils Act of 1861?\n1. Association of Indians with the law-making process as non-official members.\n2. Statutory recognition to the 'Portfolio System' introduced by Lord Canning.\n3. Power to the Viceroy to issue ordinances without the concurrence of the Legislative Council during an emergency.\n4. Introduction of direct elections for non-official seats.\nSelect the correct answer using the code given below:",
    "options": [
      "1, 2 and 3 only",
      "2, 3 and 4 only",
      "1, 3 and 4 only",
      "1, 2, 3 and 4"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1, 2, and 3 are correct. The Indian Councils Act 1861:\n1. Nominated 3 non-official Indian members to the Viceroy's legislative council (Raja of Benaras, Maharaja of Patiala, and Sir Dinkar Rao).\n2. Recognized the Portfolio System initiated by Lord Canning in 1859.\n3. Empowered the Viceroy to issue ordinances with a 6-month validity during an emergency.\nStatement 4 is incorrect because direct elections were introduced much later by the Government of India Act 1919.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Historical Background",
    "examTrap": "Direct elections were NOT introduced by the 1861 Act. The 1861 Act relied purely on nomination of non-official members by the Viceroy."
  },
  {
    "id": "q-49",
    "question": "Who among the following was the first Indian to be appointed as a member of the Viceroy's Executive Council under the provisions of the Indian Councils Act 1909?",
    "options": [
      "Satyendra Prasad Sinha",
      "Rash Behari Ghosh",
      "Tej Bahadur Sapru",
      "Dadabhai Naoroji"
    ],
    "correctAnswer": 0,
    "explanation": "Lord Satyendra Prasad Sinha became the first Indian to join the Viceroy's Executive Council. He was appointed as the Law Member under the Indian Councils Act of 1909 (Morley-Minto Reforms), which also introduced separate communal electorates for Muslims.",
    "difficulty": "Exam",
    "examType": "SSC-style",
    "topic": "Historical Background",
    "examTrap": "Do not confuse nomination as a non-official member to the Legislative Council (1861) with appointment to the Viceroy's Executive Council (1909)."
  },
  {
    "id": "q-50",
    "question": "Consider the following statements regarding the Government of India Act 1919 (Montagu-Chelmsford Reforms):\n1. It introduced 'Dyarchy' at the Centre while granting complete autonomy to the provinces.\n2. It divided provincial subjects into 'Transferred' and 'Reserved' subjects.\n3. It introduced bicameralism and direct elections in the country for the first time.\n4. It provided for the establishment of a Public Service Commission, which was set up in 1926.\nWhich of the statements given above are correct?",
    "options": [
      "1, 2 and 3 only",
      "2, 3 and 4 only",
      "1, 3 and 4 only",
      "1, 2, 3 and 4"
    ],
    "correctAnswer": 1,
    "explanation": "Statements 2, 3, and 4 are correct.\nStatement 1 is incorrect because the 1919 Act introduced Dyarchy in the PROVINCES (not at the Centre). Transferred subjects were administered by the Governor with ministers responsible to the Legislative Council, while Reserved subjects were administered by the Governor and his Executive Council without legislative responsibility. Dyarchy at the Centre was proposed by the 1935 Act.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Historical Background",
    "examTrap": "Dyarchy in PROVINCES was introduced by the 1919 Act; Dyarchy at the CENTRE was provided by the 1935 Act."
  },
  {
    "id": "q-51",
    "question": "Which of the following features were provided by the Government of India Act of 1935?\n1. Establishment of an All-India Federation consisting of provinces and princely states as units.\n2. Abolition of Dyarchy in the provinces and introduction of 'Provincial Autonomy'.\n3. Adoption of Dyarchy at the Centre.\n4. Establishment of a Federal Court which began functioning in 1937.\nSelect the correct answer using the code given below:",
    "options": [
      "1, 2 and 4 only",
      "2, 3 and 4 only",
      "1 and 3 only",
      "1, 2, 3 and 4"
    ],
    "correctAnswer": 3,
    "explanation": "All four statements are correct:\n1. It provided for an All-India Federation (which never materialized as princely states did not join).\n2. It abolished Dyarchy in provinces and introduced Provincial Autonomy in 1937.\n3. It provided for the adoption of Dyarchy at the Centre (federal subjects divided into reserved and transferred, though this also never came into operation).\n4. It provided for the establishment of a Federal Court (set up in 1937 in Delhi with Sir Maurice Gwyer as first Chief Justice).",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Historical Background",
    "examTrap": "Even though the All-India Federation and Dyarchy at the Centre never came into effect in practice, the Government of India Act 1935 legally provided for both."
  },
  {
    "id": "q-52",
    "question": "Under the Indian Independence Act of 1947, which of the following changes took place?\n1. The office of the Secretary of State for India was abolished.\n2. The British Crown ceased to be the Emperor of India.\n3. The Constituent Assembly became a sovereign legislative body.\nSelect the correct answer using the code given below:",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All three statements are correct under the Indian Independence Act of 1947:\n1. It abolished the office of the Secretary of State for India and transferred his functions to the Secretary of State for Commonwealth Affairs.\n2. It dropped the title of 'Emperor of India' from the royal style and titles of the King of England.\n3. The Constituent Assembly of India became a fully sovereign body empowered to abrogate or alter any British law applicable to India.",
    "difficulty": "Basic",
    "examType": "General competitive exams",
    "topic": "Historical Background",
    "examTrap": "The Indian Independence Act abolished the office of the Secretary of State for India, but the office of Governor-General continued for the interim dominion period until India adopted its Constitution."
  },
  {
    "id": "q-53",
    "question": "With reference to the composition and formation of the Constituent Assembly of India, consider the following statements:\n1. The Constituent Assembly was constituted in November 1946 under the scheme formulated by the Cabinet Mission Plan.\n2. Its members were elected directly by the people of India on the basis of universal adult franchise.\n3. Seats allocated to each British province were divided among Muslims, Sikhs, and General communities in proportion to their population.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 3 only",
      "1 and 2 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1 and 3 are correct.\nStatement 2 is incorrect because the Constituent Assembly was a partly elected and partly nominated body. The members from British Provinces were elected indirectly by the provincial legislative assemblies using proportional representation by single transferable vote (franchise was limited by property, tax, and education), while representatives of Princely States were nominated by their rulers.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Constituent Assembly",
    "examTrap": "The Constituent Assembly was NOT elected directly on universal adult suffrage. It was elected indirectly by provincial assemblies elected under the restricted franchise of the 1935 Act."
  },
  {
    "id": "q-54",
    "question": "Who was appointed as the Constitutional Advisor (Legal Advisor) to the Constituent Assembly during the framing of the Indian Constitution?",
    "options": [
      "Sir B.N. Rau",
      "Dr. B.R. Ambedkar",
      "K.M. Munshi",
      "Alladi Krishnaswamy Iyer"
    ],
    "correctAnswer": 0,
    "explanation": "Sir Benegal Narsing Rau (B.N. Rau) was appointed as the Constitutional Advisor to the Constituent Assembly. He prepared the original initial draft of the Constitution after analyzing global constitutional models, which was subsequently examined and refined by the Drafting Committee chaired by Dr. B.R. Ambedkar.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Constituent Assembly",
    "examTrap": "Do not confuse the Constitutional Advisor (Sir B.N. Rau) with the Chairman of the Drafting Committee (Dr. B.R. Ambedkar) or the Chief Draftsman (S.N. Mukherjee)."
  },
  {
    "id": "q-55",
    "question": "Consider the following statements regarding the 'Objectives Resolution':\n1. It was moved in the Constituent Assembly by Jawaharlal Nehru on December 13, 1946.\n2. It was adopted unanimously by the Assembly on January 22, 1947.\n3. Its modified version forms the Preamble of the present Constitution of India.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All three statements are correct. Jawaharlal Nehru introduced the historic 'Objectives Resolution' on December 13, 1946, which laid down the philosophical fundamentals and guiding principles of the constitutional structure. It was unanimously adopted by the Constituent Assembly on January 22, 1947, and its modified version became the Preamble of the Constitution of India.",
    "difficulty": "Basic",
    "examType": "General competitive exams",
    "topic": "Constituent Assembly",
    "examTrap": "The Objectives Resolution was moved on Dec 13, 1946, but was adopted on Jan 22, 1947 (not on the same day)."
  },
  {
    "id": "q-56",
    "question": "Match the following Committees of the Constituent Assembly with their respective Chairpersons:\n1. Union Constitution Committee — Jawaharlal Nehru\n2. Provincial Constitution Committee — Sardar Vallabhbhai Patel\n3. Steering Committee — Dr. Rajendra Prasad\n4. Fundamental Rights Sub-Committee — J.B. Kripalani\nWhich of the pairs given above are correctly matched?",
    "options": [
      "1, 2 and 3 only",
      "2, 3 and 4 only",
      "1, 3 and 4 only",
      "1, 2, 3 and 4"
    ],
    "correctAnswer": 3,
    "explanation": "All four pairs are correctly matched:\n- Union Constitution Committee & Union Powers Committee: Jawaharlal Nehru\n- Provincial Constitution Committee & Advisory Committee on Fundamental Rights, Minorities and Tribal Areas: Sardar Vallabhbhai Patel\n- Steering Committee & Rules of Procedure Committee: Dr. Rajendra Prasad\n- Fundamental Rights Sub-Committee: J.B. Kripalani (while Minorities Sub-Committee was chaired by H.C. Mukherjee).",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Constituent Assembly",
    "examTrap": "Sardar Patel chaired the main Advisory Committee on Fundamental Rights and Minorities, but the Fundamental Rights Sub-Committee was chaired by J.B. Kripalani, and the Minorities Sub-Committee was chaired by H.C. Mukherjee."
  },
  {
    "id": "q-57",
    "question": "Consider the following statements regarding the Drafting Committee of the Constituent Assembly:\n1. It was set up on August 29, 1947, and comprised seven members.\n2. Dr. B.R. Ambedkar was elected as its Chairman.\n3. N. Madhava Rau replaced B.L. Mitter due to ill-health, and T.T. Krishnamachari replaced D.P. Khaitan upon his death.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All three statements are correct:\n1. The Drafting Committee was appointed on August 29, 1947, consisting of 7 members.\n2. The 7 members were: Dr. B.R. Ambedkar (Chairman), N. Gopalaswamy Ayyangar, Alladi Krishnaswamy Iyer, Dr. K.M. Munshi, Syed Mohammad Saadulla, N. Madhava Rau (who replaced B.L. Mitter), and T.T. Krishnamachari (who replaced D.P. Khaitan upon his death in 1948).\n3. It published its initial draft in February 1948 and completed its mandate in less than six months.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Constituent Assembly",
    "examTrap": "Only one member of the Drafting Committee was an original member of the Indian National Congress from the outset (K.M. Munshi); T.T. Krishnamachari joined the Congress later."
  },
  {
    "id": "q-58",
    "question": "With reference to the dual functions performed by the Constituent Assembly of India after the Indian Independence Act 1947, consider the following statements:\n1. When the Assembly met as the Constitution-making body, it was chaired by Dr. Rajendra Prasad.\n2. When the Assembly met as the legislative body (Dominion Legislature), it was chaired by G.V. Mavalankar.\n3. Provisions relating to citizenship, elections, provisional parliament, and temporary articles came into force on November 26, 1949, itself.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All three statements are correct:\n1 & 2. Under the Indian Independence Act 1947, the Constituent Assembly became the first Parliament of India. It performed two separate functions on separate days: as a constitution-making body chaired by Dr. Rajendra Prasad and as the Dominion Legislature chaired by G.V. Mavalankar.\n3. Articles 5, 6, 7, 8, 9 (Citizenship), 60 (Oath by President), 324 (Election Commission), 366, 367, 379, 380, 388, 391, 392, and 393 came into force immediately on November 26, 1949, via Article 394.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Constituent Assembly",
    "examTrap": "Candidates often assume the entire Constitution came into force on January 26, 1950. In fact, 15+ articles (including Articles 5-9 on citizenship and Article 324 on elections) were enforced immediately on November 26, 1949."
  },
  {
    "id": "q-59",
    "question": "Who among the following was the chief calligrapher who handwritten the original Constitution of India in flowing italic style?",
    "options": [
      "Prem Behari Narain Raizada",
      "Nandalal Bose",
      "Beohar Rammanohar Sinha",
      "Vasant Krishan Vaidya"
    ],
    "correctAnswer": 0,
    "explanation": "Prem Behari Narain Raizada was the calligrapher of the original Constitution of India. The original manuscript was handwritten by him in a flowing italic style with a calligraphy pen. The artists of Shantiniketan, including Beohar Rammanohar Sinha and Nandalal Bose, beautified and illuminated the borders. Vasant Krishan Vaidya did the calligraphy for the Hindi version.",
    "difficulty": "Exam",
    "examType": "SSC-style",
    "topic": "Constituent Assembly",
    "examTrap": "Prem Behari Narain Raizada calligraphed the English original; Nandalal Bose and Beohar Rammanohar Sinha were the artists who decorated it; Vasant Krishan Vaidya calligraphed the Hindi version."
  },
  {
    "id": "q-60",
    "question": "Consider the following statements regarding the Preamble of the Indian Constitution:\n1. The terms 'Socialist', 'Secular', and 'Integrity' were added to the Preamble by the 42nd Constitutional Amendment Act, 1976.\n2. The ideals of Justice (Social, Economic, and Political) were inspired by the Russian Revolution (1917).\n3. The ideals of Liberty, Equality, and Fraternity were taken from the French Revolution (1789–1799).\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All three statements are correct:\n1. The 42nd Amendment (1976) added three words: 'Socialist', 'Secular', and 'and Integrity' (modifying 'unity of the Nation' to 'unity and integrity of the Nation').\n2. The ideal of Justice—social, economic, and political—was drawn from the Russian Revolution (1917).\n3. The ideals of Liberty, Equality, and Fraternity were inspired by the French Revolution (1789–1799).",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Preamble",
    "examTrap": "Check the exact wording: the 42nd Amendment added 'Socialist', 'Secular', and 'and Integrity' (not just 'Integrity' alone or 'Democratic')."
  },
  {
    "id": "q-61",
    "question": "What is the correct sequential order of words describing the nature of the Indian State as mentioned in the Preamble to the Constitution of India?",
    "options": [
      "Sovereign, Socialist, Secular, Democratic, Republic",
      "Sovereign, Democratic, Socialist, Secular, Republic",
      "Sovereign, Secular, Socialist, Democratic, Republic",
      "Socialist, Secular, Sovereign, Democratic, Republic"
    ],
    "correctAnswer": 0,
    "explanation": "The Preamble declares India to be a 'SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC'. This exact sequence is vital and frequently tested.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Preamble",
    "examTrap": "Socialist comes before Secular. Remember the sequence: Sovereign -> Socialist -> Secular -> Democratic -> Republic."
  },
  {
    "id": "q-62",
    "question": "With reference to the legal status of the Preamble and landmark Supreme Court judgments, consider the following statements:\n1. In the Berubari Union case (1960), the Supreme Court held that the Preamble is not a part of the Constitution.\n2. In the Kesavananda Bharati case (1973), the Supreme Court rejected the earlier opinion and held that the Preamble is an integral part of the Constitution.\n3. In the LIC of India case (1995), the Supreme Court reaffirmed that the Preamble is an integral part of the Constitution.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All three statements are correct:\n1. In the Berubari Union case (1960), SC held that the Preamble is a key to open the minds of the makers, but it is NOT a part of the Constitution.\n2. In the Kesavananda Bharati case (1973), SC overruled Berubari and held that the Preamble IS an integral part of the Constitution and can be amended under Article 368 subject to the Basic Structure.\n3. In the LIC of India case (1995), the SC once again held that the Preamble is an integral part of the Constitution.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Preamble",
    "examTrap": "While the Preamble is part of the Constitution (since 1973), it is neither a source of power to the legislature nor a prohibition upon legislative powers, and it is non-justiciable."
  },
  {
    "id": "q-63",
    "question": "Which of the following statements is/are correct regarding the legal enforceability and role of the Preamble in Indian constitutional jurisprudence?\n1. It is non-justiciable and cannot be enforced directly in courts of law.\n2. It acts as an interpretive aid when constitutional provisions are ambiguous.\n3. It can override the express substantive provisions of the Constitution.\nSelect the correct answer using the code given below:",
    "options": [
      "1 only",
      "1 and 2 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 1,
    "explanation": "Statements 1 and 2 are correct. The Preamble is non-justiciable (its provisions are not enforceable in courts of law), meaning no mandamus can issue purely on the Preamble. However, the Supreme Court has repeatedly held that where constitutional text is ambiguous or capable of two meanings, the Preamble serves as a guiding light for interpretation.\nStatement 3 is incorrect because the Preamble cannot override clear, express constitutional provisions.",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "Preamble",
    "examTrap": "The Preamble is part of the Constitution, but it is NON-JUSTICIABLE. Do not confuse 'being part of the Constitution' with 'being directly enforceable in court'."
  },
  {
    "id": "q-64",
    "question": "Which of the following pairs of borrowed constitutional features and their source countries are correctly matched?\n1. Directive Principles of State Policy — Irish Constitution\n2. Judicial Review and Fundamental Rights — United States Constitution\n3. Rule of Law and Cabinet System — British Constitution\n4. Nomination of members to Rajya Sabha — Canadian Constitution\nSelect the correct answer using the code given below:",
    "options": [
      "1, 2 and 3 only",
      "2, 3 and 4 only",
      "1, 3 and 4 only",
      "1, 2, 3 and 4"
    ],
    "correctAnswer": 0,
    "explanation": "Pairs 1, 2, and 3 are correctly matched.\nPair 4 is incorrectly matched: Nomination of 12 members to the Rajya Sabha by the President is borrowed from the Irish Constitution (not Canada). Canada provided a federation with a strong Centre, vesting residuary powers in the Centre, appointment of state governors by the Centre, and advisory jurisdiction of the Supreme Court.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Salient Features",
    "examTrap": "Nomination of Rajya Sabha members was borrowed from Ireland, whereas the method of election of Rajya Sabha members was borrowed from South Africa."
  },
  {
    "id": "q-65",
    "question": "Consider the following borrowed features of the Indian Constitution:\n1. Concurrent List and Joint Sitting of the two Houses of Parliament\n2. Procedure established by Law\n3. Suspension of Fundamental Rights during Emergency\n4. Procedure for Amendment of the Constitution\nFrom which countries respectively were these features borrowed?",
    "options": [
      "1-Australia, 2-Japan, 3-Germany (Weimar), 4-South Africa",
      "1-Canada, 2-USA, 3-Germany (Weimar), 4-Ireland",
      "1-Australia, 2-UK, 3-USSR, 4-South Africa",
      "1-USA, 2-Japan, 3-South Africa, 4-Germany (Weimar)"
    ],
    "correctAnswer": 0,
    "explanation": "- Concurrent List & Joint Sitting: Australian Constitution\n- Procedure established by law: Japanese Constitution\n- Suspension of Fundamental Rights during Emergency: Weimar Constitution of Germany\n- Procedure for amendment of the Constitution: South African Constitution",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "Salient Features",
    "examTrap": "'Procedure established by law' comes from Japan (Article 21), whereas 'Due process of law' is an American concept."
  },
  {
    "id": "q-66",
    "question": "Which of the following features of the Indian Constitution are regarded as 'Unitary' or 'Non-Federal' features?\n1. Single Constitution and Single Citizenship\n2. All-India Services (IAS, IPS, IFoS)\n3. Appointment of State Governors by the President\n4. Emergency Provisions\n5. Independent Judiciary\nSelect the correct answer using the code given below:",
    "options": [
      "1, 2, 3 and 4 only",
      "1, 2, 3, 4 and 5",
      "2, 3 and 4 only",
      "1, 4 and 5 only"
    ],
    "correctAnswer": 0,
    "explanation": "Unitary (non-federal) features include: Single Constitution, Single Citizenship, All-India Services, Appointment of Governor by Centre, and Emergency Provisions.\nHowever, an 'Independent Judiciary' is universally recognized as a Federal feature, designed to impartially resolve disputes between the Centre and States and uphold the supremacy of the written Constitution.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Salient Features",
    "examTrap": "An integrated judiciary structure tilts unitary, but an *Independent judiciary* is a core federal feature safeguarding the division of powers."
  },
  {
    "id": "q-67",
    "question": "With reference to the synthesis of Parliamentary Sovereignty and Judicial Supremacy in India, consider the following statements:\n1. The Indian Constitution adopts the British doctrine of absolute parliamentary sovereignty.\n2. The scope of judicial review in India was originally narrower than that of the US Supreme Court due to the adoption of 'procedure established by law' in Article 21.\n3. The Supreme Court of India can declare parliamentary laws unconstitutional through judicial review, while Parliament can amend constitutional provisions through its constituent power.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 1,
    "explanation": "Statements 2 and 3 are correct.\nStatement 1 is incorrect because India rejected the absolute parliamentary sovereignty of the UK (where Parliament can make or unmake any law without judicial interference). In India, Parliament is constrained by a written Constitution, federalism, Fundamental Rights, and Judicial Review.\nStatement 2 is correct because the US Constitution provides for 'due process of law' giving wide substantive review powers, whereas India explicitly adopted 'procedure established by law' in Article 21 (though post-Maneka Gandhi, SC reads substantive fairness into it).\nStatement 3 is correct as it captures the synthesis described by constitutional jurists.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Salient Features",
    "article": "21",
    "examTrap": "The Indian Parliament is NOT a sovereign body like the British Parliament; it functions within the constitutional boundaries set by a written constitution and judicial review."
  },
  {
    "id": "q-68",
    "question": "Consider the following statements regarding the Schedules to the Constitution of India:\n1. The Second Schedule contains provisions relating to the emoluments, allowances, and privileges of the President, Governors, Speaker, Judges, and CAG.\n2. The Fourth Schedule deals with the allocation of seats in the Rajya Sabha to the States and Union Territories.\n3. Seats in the Rajya Sabha are allocated to States solely on the basis of equal representation, similar to the US Senate.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1 and 2 are correct.\nStatement 3 is incorrect because seats in the Rajya Sabha are allocated on the basis of the population of each state (ranging from 31 seats for Uttar Pradesh to 1 seat for smaller states like Sikkim, Goa, Mizoram, etc.), unlike the US Senate where every state has equal representation (2 senators each) regardless of population.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Schedules",
    "article": "4",
    "examTrap": "Unlike the US Senate (equal representation of 2 seats per state), the Indian Rajya Sabha allocates seats based on population as per the Fourth Schedule."
  },
  {
    "id": "q-69",
    "question": "With reference to the Fifth and Sixth Schedules of the Indian Constitution, consider the following statements:\n1. The Fifth Schedule applies to the administration and control of Scheduled Areas in all states except Assam, Meghalaya, Tripura, and Mizoram.\n2. Under the Fifth Schedule, a Tribes Advisory Council (TAC) must be established in each state having Scheduled Areas.\n3. The Sixth Schedule provides for Autonomous District Councils (ADCs) with legislative, judicial, and executive powers in Assam, Meghalaya, Tripura, and Mizoram.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All three statements are correct:\n1. Article 244(1) / Fifth Schedule deals with Scheduled Areas in states other than the 4 north-eastern states (AMTM).\n2. A Tribes Advisory Council (TAC) consisting of up to 20 members (three-fourths of whom are ST MLAs of the state) is mandatory in Fifth Schedule states.\n3. Article 244(2) / Sixth Schedule applies specifically to the 4 states of Assam, Meghalaya, Tripura, and Mizoram, granting extensive self-governance powers to Autonomous District Councils (ADCs).",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Schedules",
    "article": "244",
    "examTrap": "Remember the mnemonic 'AMTM' (Assam, Meghalaya, Tripura, Mizoram) for the 6th Schedule. Manipur, Nagaland, and Arunachal Pradesh are NOT included under the 6th Schedule."
  },
  {
    "id": "q-70",
    "question": "Which of the following subjects were transferred from the State List to the Concurrent List by the 42nd Constitutional Amendment Act, 1976?\n1. Education\n2. Forests\n3. Protection of wild animals and birds\n4. Weights and measures\n5. Administration of justice (constitution and organization of subordinate courts)\nSelect the correct answer using the code given below:",
    "options": [
      "1, 2 and 3 only",
      "1, 2, 4 and 5 only",
      "2, 3 and 4 only",
      "1, 2, 3, 4 and 5"
    ],
    "correctAnswer": 3,
    "explanation": "The 42nd Constitutional Amendment Act of 1976 transferred five subjects from the State List to the Concurrent List (Seventh Schedule):\n1. Education\n2. Forests\n3. Weights and measures\n4. Protection of wild animals and birds\n5. Administration of justice (constitution and organization of all courts except the Supreme Court and the High Courts).",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Schedules",
    "article": "246",
    "examTrap": "All 5 subjects were transferred together in 1976. 'Administration of justice' in the Concurrent List includes subordinate courts, but Supreme Court and High Court constitution remains in the Union List."
  },
  {
    "id": "q-71",
    "question": "How many official languages were originally recognized in the Eighth Schedule of the Constitution of India, and how many are there currently?",
    "options": [
      "Originally 14; Currently 22",
      "Originally 12; Currently 22",
      "Originally 14; Currently 24",
      "Originally 15; Currently 22"
    ],
    "correctAnswer": 0,
    "explanation": "Originally, there were 14 languages in the Eighth Schedule. Currently, there are 22 languages. The additions were:\n- 21st Amendment (1967): Sindhi\n- 71st Amendment (1992): Konkani, Manipuri, Nepali (KMN)\n- 92nd Amendment (2003): Bodo, Dogri, Maithili, Santhali (BDMS)\nNote: English is NOT one of the 22 languages in the Eighth Schedule.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Schedules",
    "article": "344",
    "examTrap": "English and Rajasthani are NOT included in the 22 Eighth Schedule languages, despite Sahitya Akademi recognizing both and English being widely used."
  },
  {
    "id": "q-72",
    "question": "Consider the following statements regarding the Ninth Schedule to the Constitution of India:\n1. The Ninth Schedule was added by the First Constitutional Amendment Act, 1951, to protect agrarian reform laws from judicial review.\n2. In the I.R. Coelho case (2007), the Supreme Court ruled that laws placed in the Ninth Schedule after April 24, 1973, are open to judicial review if they violate the Basic Structure.\n3. Any law included in the Ninth Schedule before April 24, 1973, enjoys immunity from judicial review based on basic structure.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All three statements are correct:\n1. The Ninth Schedule was inserted via the 1st Constitutional Amendment Act (1951) along with Article 31B by the Jawaharlal Nehru government.\n2 & 3. In the landmark I.R. Coelho v. State of Tamil Nadu (2007) judgment, a 9-judge bench ruled that there is no blanket immunity. Laws placed in the 9th Schedule on or after April 24, 1973 (the date of the Kesavananda Bharati verdict) can be challenged if they violate Fundamental Rights (Articles 14, 19, 21) forming part of the basic structure.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Schedules",
    "article": "31B",
    "examTrap": "The cut-off date for 9th Schedule judicial scrutiny is April 24, 1973 (the day Kesavananda Bharati judgment was delivered)."
  },
  {
    "id": "q-73",
    "question": "Which of the following constitutional functionaries do NOT take their oath of office under the Third Schedule of the Indian Constitution?\n1. President of India\n2. Vice-President of India\n3. Governor of a State\n4. Comptroller and Auditor General of India (CAG)\n5. Judges of the Supreme Court\nSelect the correct answer using the code given below:",
    "options": [
      "1, 2 and 3 only",
      "1, 2, 3 and 4 only",
      "4 and 5 only",
      "1, 3 and 5 only"
    ],
    "correctAnswer": 0,
    "explanation": "The Third Schedule contains forms of oaths or affirmations for:\n- Union Ministers\n- Candidates for election to Parliament & Members of Parliament\n- Judges of the Supreme Court\n- CAG of India\n- State Ministers, Candidates for State Legislature & MLAs/MLCs\n- Judges of High Courts.\nHowever, the oaths of the following are NOT in the Third Schedule; they are given in specific separate articles:\n- President: Article 60\n- Vice-President: Article 69\n- Governor: Article 159.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Schedules",
    "article": "60",
    "examTrap": "This is a classic UPSC trap! President (Art 60), Vice-President (Art 69), and Governor (Art 159) have their oaths in their respective substantive Articles, NOT in the Third Schedule."
  },
  {
    "id": "q-74",
    "question": "With reference to the constitutional provisions under Part II of the Indian Constitution, consider the following statements:\n1. Article 9 provides that if any person voluntarily acquires the citizenship of a foreign State, they cease to be a citizen of India.\n2. Article 10 guarantees that every person who is a citizen of India shall continue to be such citizen, subject to the provisions of any law made by Parliament.\n3. Article 11 empowers Parliament to regulate the right of citizenship by law.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All three statements are correct:\n- Article 9: Person voluntarily acquiring citizenship of a foreign State not to be a citizen (prohibits dual citizenship).\n- Article 10: Continuance of the rights of citizenship (subject to laws made by Parliament).\n- Article 11: Parliament to regulate the right of citizenship by law (in exercise of this power, Parliament enacted the Citizenship Act 1955).",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Citizenship",
    "article": "9",
    "examTrap": "The Constitution does not lay down a permanent or comprehensive citizenship code; Articles 5-8 merely determined who became citizens at the commencement of the Constitution (Jan 26, 1950), leaving future regulation entirely to Parliament under Article 11."
  },
  {
    "id": "q-75",
    "question": "Under the Citizenship Act of 1955, in how many ways can Indian citizenship be acquired?",
    "options": [
      "3 ways",
      "4 ways",
      "5 ways",
      "6 ways"
    ],
    "correctAnswer": 2,
    "explanation": "Under the Citizenship Act of 1955, citizenship can be acquired by 5 modes:\n1. By Birth\n2. By Descent\n3. By Registration\n4. By Naturalisation\n5. By Incorporation of Territory (e.g., when Goa, Pondicherry, or Sikkim joined India).",
    "difficulty": "Basic",
    "examType": "General competitive exams",
    "topic": "Citizenship",
    "article": "11",
    "examTrap": "Do not confuse acquisition modes (5 ways: Birth, Descent, Registration, Naturalization, Incorporation) with loss modes (3 ways: Renunciation, Termination, Deprivation)."
  },
  {
    "id": "q-76",
    "question": "Consider the following statements regarding the loss of Indian citizenship under the Citizenship Act of 1955:\n1. By Renunciation: Any citizen of full age and capacity can make a declaration renouncing their Indian citizenship.\n2. By Termination: Citizenship automatically terminates when an Indian citizen voluntarily acquires citizenship of another country.\n3. By Deprivation: It is a compulsory termination by the Central Government on grounds of fraud, disloyalty to the Constitution, or trade with the enemy during war.\n4. Deprivation of citizenship applies equally to all Indian citizens, including citizens by birth.\nWhich of the statements given above are correct?",
    "options": [
      "1, 2 and 3 only",
      "2, 3 and 4 only",
      "1 and 4 only",
      "1, 2, 3 and 4"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1, 2, and 3 are correct.\nStatement 4 is incorrect because Deprivation is an administrative penalty that applies ONLY to citizens who acquired citizenship through registration or naturalisation, or under Article 5(c) (citizenship by domicile). A natural-born citizen (citizen by birth) cannot be deprived of citizenship by government order.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Citizenship",
    "article": "11",
    "examTrap": "A citizen of India by birth CANNOT be deprived of citizenship by compulsory government deprivation under Section 10 of the Citizenship Act 1955."
  },
  {
    "id": "q-77",
    "question": "With reference to the concept of 'Single Citizenship' in India, consider the following statements:\n1. Unlike the USA, which has dual citizenship (federal and state), India provides for a single citizenship across the entire country.\n2. Parliament can prescribe residence within a State or UT as a condition for certain classes of public employment under Article 16(3).\n3. State governments have the independent power to formulate their own citizenship laws for their permanent residents.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 only",
      "1 and 2 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 1,
    "explanation": "Statements 1 and 2 are correct.\nStatement 3 is incorrect because citizenship is exclusively a Union subject (Entry 17 of Union List), and State legislatures have absolutely NO power to legislate on or grant citizenship.\nStatement 2 is correct because under Article 16(3), Parliament (and not state legislatures) can prescribe residence qualifications for employment in a state/UT.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Citizenship",
    "article": "16",
    "examTrap": "Only Parliament can make residence a condition for public employment under Article 16(3); state legislatures cannot do so on their own."
  },
  {
    "id": "q-78",
    "question": "Consider the following statements regarding Overseas Citizen of India (OCI) cardholders:\n1. OCI cardholders enjoy dual citizenship with full political rights in India.\n2. OCI cardholders do NOT have the right to vote in Indian elections.\n3. OCI cardholders cannot hold constitutional posts like President, Vice-President, or Judge of the Supreme Court/High Court.\n4. OCI cardholders are generally not permitted to acquire agricultural or plantation properties in India.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2, 3 and 4 only",
      "1, 3 and 4 only",
      "1, 2, 3 and 4"
    ],
    "correctAnswer": 1,
    "explanation": "Statements 2, 3, and 4 are correct.\nStatement 1 is incorrect because India does NOT permit dual citizenship. OCI is merely an immigration/visa status facilitating lifelong travel and economic/educational benefits. OCI cardholders do not get Indian citizenship, have no voting rights (under Representation of the People Act), cannot contest elections, cannot hold constitutional offices, and cannot purchase agricultural/plantation properties.",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "Citizenship",
    "article": "11",
    "examTrap": "OCI is NOT dual citizenship. It is an overseas registration scheme without political rights."
  },
  {
    "id": "q-79",
    "question": "With reference to the procedure for amending the Constitution under Article 368, consider the following statements:\n1. A Constitutional Amendment Bill can be introduced in either House of Parliament or in State Legislatures.\n2. Prior recommendation of the President is NOT required for the introduction of a Constitutional Amendment Bill.\n3. There is no provision for holding a joint sitting of both Houses of Parliament in case of a deadlock over a Constitutional Amendment Bill.\n4. The President must give his assent to a Constitutional Amendment Bill and cannot withhold assent or return it for reconsideration.\nWhich of the statements given above are correct?",
    "options": [
      "1, 2 and 3 only",
      "2, 3 and 4 only",
      "1, 3 and 4 only",
      "1, 2, 3 and 4"
    ],
    "correctAnswer": 1,
    "explanation": "Statements 2, 3, and 4 are correct.\nStatement 1 is incorrect because a Constitutional Amendment Bill can ONLY be introduced in either House of Parliament (Lok Sabha or Rajya Sabha), NOT in State Legislatures.\nStatement 2 is correct (no prior recommendation of President needed).\nStatement 3 is correct (Article 108 joint sitting applies only to Ordinary and Financial Bills, not to Amendment Bills or Money Bills).\nStatement 4 is correct: The 24th Constitutional Amendment Act 1971 made it obligatory for the President to give assent to a Constitutional Amendment Bill.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Amendments",
    "article": "368",
    "examTrap": "State legislatures CANNOT initiate any Constitutional Amendment Bill; they only have ratification powers for specific federal provisions under Article 368."
  },
  {
    "id": "q-80",
    "question": "Which of the following constitutional provisions can be amended by a Simple Majority of Parliament (outside the scope of Article 368)?\n1. Admission or establishment of new States (Article 2) and formation of new States (Article 3)\n2. Abolition or creation of Legislative Councils in States (Article 169)\n3. Directive Principles of State Policy (Part IV)\n4. Use of official language and quorum in Parliament\n5. Administration of Scheduled Areas (Fifth Schedule) and Tribal Areas (Sixth Schedule)\nSelect the correct answer using the code given below:",
    "options": [
      "1, 2, 4 and 5 only",
      "1, 2 and 3 only",
      "3, 4 and 5 only",
      "1, 2, 3, 4 and 5"
    ],
    "correctAnswer": 0,
    "explanation": "Items 1, 2, 4, and 5 can be amended by a simple majority of Parliament and are explicitly declared by the Constitution as NOT being amendments under Article 368.\nItem 3 (Directive Principles of State Policy) requires a Special Majority of Parliament under Article 368 (majority of total membership + 2/3rd members present and voting). Fundamental Rights also require a Special Majority under Article 368.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Amendments",
    "article": "368",
    "examTrap": "Creation/abolition of legislative councils (Art 169) and altering state boundaries (Art 3) require only a simple majority in Parliament, whereas Fundamental Rights and DPSP require a special majority under Article 368."
  },
  {
    "id": "q-81",
    "question": "Which of the following constitutional amendments require ratification by the legislatures of not less than one-half of the States by simple majority, in addition to a special majority of Parliament?\n1. Any change in the election and manner of election of the President (Articles 54 & 55)\n2. Any change in the representation of States in Parliament (Fourth Schedule)\n3. Any change in the lists in the Seventh Schedule\n4. Any amendment to Article 368 itself\nSelect the correct answer using the code given below:",
    "options": [
      "1 and 3 only",
      "2, 3 and 4 only",
      "1, 2 and 4 only",
      "1, 2, 3 and 4"
    ],
    "correctAnswer": 3,
    "explanation": "All four items require ratification by at least half of the State Legislatures by simple majority (Proviso to Article 368(2)):\n1. Election of the President (Arts 54, 55)\n2. Extent of executive power of Union and States (Arts 73, 162)\n3. Supreme Court and High Courts (Chap IV of Part V, Chap V of Part VI, Art 241)\n4. Distribution of legislative powers between Union and States (7th Schedule)\n5. Representation of States in Parliament\n6. Provisions of Article 368 itself.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Amendments",
    "article": "368",
    "examTrap": "Notice that Article 368 itself requires ratification by half the states to be amended! Also notice that states ratify the bill by a simple majority of the members present and voting."
  },
  {
    "id": "q-82",
    "question": "Consider the following statements regarding the 7th Constitutional Amendment Act, 1956:\n1. It abolished the existing classification of States into Part A, Part B, Part C, and Part D, and reorganized the country into 14 States and 6 Union Territories.\n2. It provided for the appointment of the same person as Governor for two or more States.\n3. It provided for the establishment of a common High Court for two or more States.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All three statements are correct regarding the landmark 7th Constitutional Amendment Act 1956 (enacted to implement the State Reorganisation Act):\n1. It abolished the 4-tier categorization of states (Part A, B, C, D) and created 14 states and 6 UTs.\n2. It amended Article 153 to allow the appointment of the same person as Governor for two or more states.\n3. It amended Articles 230 and 231 to provide for the establishment of a common High Court for two or more states or UTs.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Amendments",
    "article": "153",
    "examTrap": "The 7th Amendment 1956 is one of the most comprehensive early amendments; it reformed the federal map, the institution of Governor, and the High Court jurisdiction."
  },
  {
    "id": "q-83",
    "question": "The 44th Constitutional Amendment Act, 1978, was enacted to reverse several distortions introduced during the Emergency. Which of the following changes were brought about by this amendment?\n1. Substituted 'armed rebellion' for 'internal disturbance' in Article 352.\n2. Made the written recommendation of the Union Cabinet mandatory for the President to declare a National Emergency.\n3. Provided that the Fundamental Rights under Articles 20 and 21 cannot be suspended even during a National Emergency.\n4. Removed the Right to Property from the list of Fundamental Rights and made it a legal right under Article 300A.\nSelect the correct answer using the code given below:",
    "options": [
      "1, 2 and 3 only",
      "2, 3 and 4 only",
      "1, 3 and 4 only",
      "1, 2, 3 and 4"
    ],
    "correctAnswer": 3,
    "explanation": "All four changes were introduced by the 44th Amendment Act 1978:\n1. Replaced 'internal disturbance' with 'armed rebellion' in Article 352.\n2. Required written advice from the Cabinet (Prime Minister and other cabinet-rank ministers) to proclaim emergency.\n3. Provided that Articles 20 (protection in respect of conviction for offenses) and 21 (right to life and personal liberty) cannot be suspended during any emergency under Article 359.\n4. Deleted Article 19(1)(f) and Article 31 (Right to Property) from Part III, inserting Article 300A as a constitutional/legal right in Part XII.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Amendments",
    "article": "352",
    "examTrap": "The 42nd Amendment (1976) introduced emergency distortions; the 44th Amendment (1978) enacted safeguards, including protecting Articles 20 and 21 from suspension."
  },
  {
    "id": "q-84",
    "question": "Match the following recent Constitutional Amendment Acts with their primary subject matter:\n1. 101st Amendment Act, 2016 — Introduction of the Goods and Services Tax (GST)\n2. 102nd Amendment Act, 2018 — Constitutional status to the National Commission for Backward Classes (NCBC)\n3. 103rd Amendment Act, 2019 — 10% Reservation for Economically Weaker Sections (EWS)\n4. 106th Amendment Act, 2023 — 33% reservation for women in Lok Sabha and State Legislative Assemblies\nWhich of the pairs given above are correctly matched?",
    "options": [
      "1 and 2 only",
      "3 and 4 only",
      "1, 2 and 3 only",
      "1, 2, 3 and 4"
    ],
    "correctAnswer": 3,
    "explanation": "All four pairs are correctly matched:\n- 101st Amendment (2016): Introduced GST (Articles 246A, 269A, 279A).\n- 102nd Amendment (2018): Conferred constitutional status on the National Commission for Backward Classes (NCBC) by inserting Article 338B and Article 342A.\n- 103rd Amendment (2019): Provided 10% reservation for Economically Weaker Sections (EWS) by amending Articles 15 and 16 (Articles 15(6) and 16(6)).\n- 106th Amendment (2023, Nari Shakti Vandan Adhiniyam): Provided 1/3rd (33%) reservation for women in Lok Sabha, Delhi Assembly, and State Legislative Assemblies (Articles 239AA, 330A, 332A, 334A).",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Amendments",
    "article": "338B",
    "examTrap": "104th Amendment (2019) extended SC/ST reservation in legislatures for 10 years and ceased nomination of Anglo-Indians; 105th Amendment (2021) restored states' power to identify SEBCs; 106th Amendment (2023) is Women's reservation."
  },
  {
    "id": "q-85",
    "question": "Consider the following landmark Supreme Court cases concerning Parliament's power to amend Fundamental Rights in chronological order:\n1. Shankari Prasad v. Union of India\n2. Golaknath v. State of Punjab\n3. Kesavananda Bharati v. State of Kerala\n4. Sajjan Singh v. State of Rajasthan\nWhat is the correct chronological sequence of the above judgments?",
    "options": [
      "1 — 4 — 2 — 3",
      "1 — 2 — 4 — 3",
      "4 — 1 — 2 — 3",
      "1 — 4 — 3 — 2"
    ],
    "correctAnswer": 0,
    "explanation": "The correct chronological sequence is:\n1. Shankari Prasad v. Union of India (1951): SC held that 'law' in Article 13 does not include constitutional amendments under Article 368; Parliament can amend Fundamental Rights.\n2. Sajjan Singh v. State of Rajasthan (1965): SC reiterated the Shankari Prasad ruling.\n3. Golaknath v. State of Punjab (1967): SC reversed its earlier view, holding that Fundamental Rights have a transcendental position and Parliament cannot curtail or abridge them.\n4. Kesavananda Bharati v. State of Kerala (1973): SC overruled Golaknath, upheld Parliament's power to amend any part of the Constitution including FRs, but ruled that Parliament cannot alter the 'Basic Structure' of the Constitution.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Basic Structure",
    "article": "368",
    "examTrap": "Sajjan Singh (1965) came BEFORE Golaknath (1967). Golaknath was the first time the SC barred Parliament from abridging Fundamental Rights."
  },
  {
    "id": "q-86",
    "question": "With reference to the evolution of the Basic Structure doctrine, consider the following statements:\n1. In the Indira Nehru Gandhi v. Raj Narain case (1975), the Supreme Court struck down Article 329A(4) inserted by the 39th Amendment, holding free and fair elections and rule of law as basic features.\n2. In the Minerva Mills case (1980), the Supreme Court struck down clauses (4) and (5) of Article 368 inserted by the 42nd Amendment, holding that limited amending power is itself a basic feature.\n3. In the Waman Rao case (1981), the Supreme Court clarified that the Basic Structure doctrine applies prospectively to constitutional amendments made after April 24, 1973.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All three statements are correct:\n1. Indira Gandhi v. Raj Narain (1975): SC invalidated Art 329A(4) (which placed election disputes of PM/Speaker beyond judicial review) for violating basic structure (democracy, rule of law, judicial review).\n2. Minerva Mills v. Union of India (1980): SC invalidated Art 368(4) and (5) (which barred judicial review of amendment acts and gave unlimited amending power), ruling that 'a limited amending power is one of the basic features of the Constitution'. SC also held that the harmony between FRs and DPSPs is a basic feature.\n3. Waman Rao v. Union of India (1981): SC settled that the basic structure doctrine applies to all constitutional amendments enacted after April 24, 1973.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Basic Structure",
    "article": "368",
    "examTrap": "The 42nd Amendment tried to make parliamentary amending power unlimited by adding Article 368(4) and (5). The Supreme Court struck those down in the Minerva Mills case (1980)."
  },
  {
    "id": "q-87",
    "question": "Which of the following have been recognized by the Supreme Court of India as elements of the 'Basic Structure' of the Constitution?\n1. Judicial review and effective access to justice\n2. Secular character of the Constitution\n3. Federal character of the Constitution\n4. Balance between Fundamental Rights and Directive Principles\n5. Sovereign, democratic, and republican structure\nSelect the correct answer using the code given below:",
    "options": [
      "1, 2 and 3 only",
      "1, 3, 4 and 5 only",
      "2, 4 and 5 only",
      "1, 2, 3, 4 and 5"
    ],
    "correctAnswer": 3,
    "explanation": "All five elements are established components of the Basic Structure:\n1. Judicial Review (Kesavananda Bharati, Minerva Mills, L. Chandra Kumar)\n2. Secularism (S.R. Bommai case 1994)\n3. Federalism (S.R. Bommai case 1994)\n4. Harmony and balance between Fundamental Rights and DPSPs (Minerva Mills 1980)\n5. Sovereign, democratic, republican structure and Rule of Law (Kesavananda Bharati, Indira Gandhi case).",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Basic Structure",
    "article": "32",
    "examTrap": "The Constitution does NOT define 'Basic Structure' anywhere; it is an entirely judge-made doctrine evolved through constitutional jurisprudence."
  },
  {
    "id": "q-88",
    "question": "With reference to the definition of 'State' under Article 12 of the Indian Constitution, consider the following statements:\n1. It includes the Government and Parliament of India, as well as the Government and Legislature of each of the States.\n2. Statutory and non-statutory authorities like LIC, ONGC, and SAIL fall within the definition of State.\n3. Private bodies or agencies working as an instrument of the State come under the ambit of Article 12.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All three statements are correct under Article 12 and Supreme Court interpretations (e.g., Ajay Hasia and Sukhdev Singh cases). 'State' includes: (1) Central government and Parliament, (2) State governments and legislatures, (3) Local authorities (municipalities, panchayats, district boards), and (4) Other statutory and non-statutory bodies like LIC, ONGC, SAIL, IFC. Furthermore, even private bodies or agencies working as an instrument of the State come under the definition of State under Article 12.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Fundamental Rights",
    "article": "12",
    "examTrap": "Aspirants often think only purely governmental and statutory bodies qualify. Private entities performing public duties as state instrumentalities also fall under Article 12."
  },
  {
    "id": "q-89",
    "question": "Consider the following statements regarding Article 13 and doctrines related to Judicial Review:\n1. The 'Doctrine of Eclipse' applies to pre-constitutional laws that are inconsistent with Fundamental Rights, rendering them dormant but not dead.\n2. The 'Doctrine of Severability' provides that if an unconstitutional provision of a statute can be separated from the valid portion, only the invalid provision is struck down.\n3. Under Article 13(3), the term 'law' includes ordinances, orders, bye-laws, rules, regulations, and customs having the force of law, but excludes constitutional amendments.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All three statements are correct:\n- Statement 1: Under the Doctrine of Eclipse (Bhikaji Narain case), pre-constitutional laws violating FRs are not completely dead from inception (void ab initio); they are merely overshadowed/eclipsed by FRs and can become operative again if the relevant FR is amended.\n- Statement 2: Under the Doctrine of Severability (A.K. Gopalan case), only the invalid or unconstitutional parts of a law are struck down if they can be separated from the rest of the statute.\n- Statement 3: Article 13(3) defines 'law' widely to include ordinances, bye-laws, rules, regulations, notifications, and customs. The Supreme Court in the Kesavananda Bharati case (1973) held that a constitutional amendment is not an ordinary 'law' under Article 13(2), though it can still be challenged on the touchstone of the Basic Structure Doctrine.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Judicial Review",
    "article": "13",
    "examTrap": "Remember that ordinary laws can be struck down under Article 13 for violating Part III, but Constitutional Amendment Acts are evaluated under the Basic Structure Doctrine."
  },
  {
    "id": "q-90",
    "question": "Under Article 14 of the Indian Constitution, the concept of 'Equal Protection of the Laws' is borrowed from which country's constitution?",
    "options": [
      "United Kingdom",
      "United States of America",
      "Canada",
      "Ireland"
    ],
    "correctAnswer": 1,
    "explanation": "'Equal Protection of the Laws' is a positive concept borrowed from Section 1 of the 14th Amendment of the US Constitution. It emphasizes that equals should be treated equally under equal circumstances. On the other hand, 'Equality before Law' is a negative concept of British origin (A.V. Dicey's Rule of Law) denoting the absence of any special privilege in favor of any individual.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Fundamental Rights",
    "article": "14",
    "examTrap": "Do not swap the concepts: 'Equality before Law' is British (negative); 'Equal Protection of the Laws' is American (positive)."
  },
  {
    "id": "q-91",
    "question": "Consider the following statements regarding Article 15 of the Indian Constitution:\n1. Article 15 prohibits discrimination by the State against any citizen on grounds ONLY of religion, race, caste, sex, place of birth or any of them.\n2. The 103rd Constitutional Amendment Act added Article 15(6) to enable the State to make special provisions for the advancement of Economically Weaker Sections (EWS).\n3. The provision of Article 15(2) regarding access to shops, public restaurants, and wells is enforceable against both the State and private individuals.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All statements are correct:\n- Statement 1: Article 15(1) uses the word 'only', meaning discrimination on grounds other than religion, race, caste, sex, or place of birth (e.g., residence or educational qualification) is not prohibited per se.\n- Statement 2: The 103rd Constitutional Amendment Act, 2019 added Article 15(6) and 16(6) to provide up to 10% reservation for Economically Weaker Sections (EWS).\n- Statement 3: Article 15(2) guarantees non-discriminatory access to shops, public restaurants, hotels, and places of public entertainment, and applies against both the State and private individuals.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Fundamental Rights",
    "article": "15",
    "examTrap": "Article 15(1) protects only against State action, whereas Article 15(2) protects citizens against discrimination by both the State and private individuals."
  },
  {
    "id": "q-92",
    "question": "With reference to Article 16 and reservations in public employment, consider the following statements:\n1. Unlike Article 15, Article 16 includes 'descent' and 'residence' among the prohibited grounds of discrimination.\n2. In the Indra Sawhney case (1992), the Supreme Court ruled that the total reserved quota should not exceed 50% except in extraordinary situations.\n3. The 77th Constitutional Amendment Act, 1995 introduced Article 16(4A) to provide reservation in promotions for SCs and STs.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All statements are correct:\n- Statement 1: Article 15 prohibits discrimination on 5 grounds (religion, race, caste, sex, place of birth). Article 16(2) adds 2 more grounds: 'descent' and 'residence' (total 7 grounds).\n- Statement 2: In Indra Sawhney (1992), the Supreme Court upheld 27% reservation for OBCs, excluded the 'creamy layer', and capped total reservation at 50%.\n- Statement 3: The 77th Amendment (1995) added Article 16(4A) permitting reservation in promotions for SCs and STs, which was further modified by the 85th Amendment (2001) for consequential seniority.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Fundamental Rights",
    "article": "16",
    "examTrap": "Remember the two extra grounds in Article 16 that are NOT found in Article 15: 'descent' and 'residence'."
  },
  {
    "id": "q-93",
    "question": "Which of the following statements regarding Article 17 (Abolition of Untouchability) is NOT correct?",
    "options": [
      "The term 'Untouchability' has been clearly defined in the Constitution of India.",
      "Article 17 is an absolute right with no constitutional exceptions.",
      "The right under Article 17 is available against both the State and private individuals.",
      "Parliament enacted the Protection of Civil Rights Act, 1955 to enforce this right."
    ],
    "correctAnswer": 0,
    "explanation": "Statement 0 is incorrect (and hence the correct answer): The term 'Untouchability' is neither defined in the Constitution of India nor in the Protection of Civil Rights Act, 1955. The Mysore High Court clarified that it refers to the historical social disability imposed on certain classes of people by birth, not the physical untouchability of quarantined persons. Article 17 is absolute, has no exceptions, applies against private individuals, and is enforced through the Protection of Civil Rights Act, 1955.",
    "difficulty": "Basic",
    "examType": "General competitive exams",
    "topic": "Fundamental Rights",
    "article": "17",
    "examTrap": "The word 'Untouchability' is NOT defined anywhere in the Constitution or any statute."
  },
  {
    "id": "q-94",
    "question": "In the landmark Balaji Raghavan case (1996), what did the Supreme Court rule regarding National Awards such as Bharat Ratna and Padma awards?",
    "options": [
      "They are titles within the meaning of Article 18(1) and are unconstitutional.",
      "They are valid decorations and do not amount to titles under Article 18(1), provided they are not used as prefixes or suffixes to names.",
      "Only military awards can be conferred, while civilian awards are unconstitutional.",
      "They violate the principle of equality guaranteed under Article 14."
    ],
    "correctAnswer": 1,
    "explanation": "In Balaji Raghavan v. Union of India (1996), the Supreme Court upheld the constitutional validity of National Awards (Bharat Ratna, Padma Vibhushan, Padma Bhushan, Padma Shri). The Court ruled that they do not amount to 'titles' within the meaning of Article 18(1) because equality does not mandate that merit and public service should not be recognized. However, they must NOT be used as prefixes or suffixes to the names of the recipients; if used, the recipient forfeits the award.",
    "difficulty": "Exam",
    "examType": "SSC-style",
    "topic": "Fundamental Rights",
    "article": "18",
    "examTrap": "National awards are valid decorations, but using them as titles (prefix/suffix like 'Padma Shri X') is prohibited and leads to forfeiture."
  },
  {
    "id": "q-95",
    "question": "Consider the following statements regarding the freedoms guaranteed under Article 19(1) of the Indian Constitution:\n1. The right to freedom of speech and expression includes the freedom of the press and the right to remain silent.\n2. 'Public order' was added as a ground for reasonable restriction under Article 19(2) by the 1st Constitutional Amendment Act, 1951.\n3. The right to form associations under Article 19(1)(c) includes the fundamental right to strike and declare lockouts.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1 and 2 are correct. Statement 3 is incorrect:\n- Statement 1: Article 19(1)(a) encompasses freedom of the press (Indian Express Newspapers case) and the right to remain silent (Bijoe Emmanuel case).\n- Statement 2: The 1st Constitutional Amendment Act, 1951 added three grounds of restriction under Article 19(2): 'public order', 'friendly relations with foreign states', and 'incitement to an offence'.\n- Statement 3: The Supreme Court has repeatedly held (e.g., in TK Rangarajan case) that the right to strike is not a fundamental right; it is only a statutory or trade union right.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Fundamental Rights",
    "article": "19",
    "examTrap": "The right to form trade unions is a Fundamental Right (Art 19(1)(c)), but the right to strike is NOT a Fundamental Right."
  },
  {
    "id": "q-96",
    "question": "In Anuradha Bhasin v. Union of India (2020), the Supreme Court of India recognized access to the Internet under which Fundamental Right?",
    "options": [
      "Article 14",
      "Article 19(1)(a) and Article 19(1)(g)",
      "Article 25",
      "Article 32"
    ],
    "correctAnswer": 1,
    "explanation": "In the Anuradha Bhasin case (2020), the Supreme Court ruled that freedom of speech and expression through the medium of the internet is integral to Article 19(1)(a), and the freedom to practice any profession or carry on any trade, business, or occupation over the internet is protected under Article 19(1)(g). Any suspension of internet services must satisfy the test of necessity and proportionality under Article 19(2) and 19(6).",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "Fundamental Rights",
    "article": "19",
    "examTrap": "Internet access is not an independent stand-alone article; it is recognized as a medium through which rights under Article 19(1)(a) and 19(1)(g) are exercised."
  },
  {
    "id": "q-97",
    "question": "Consider the following statements regarding the protections under Article 20 of the Indian Constitution:\n1. Protection against ex-post facto laws (Article 20(1)) is applicable to criminal laws as well as civil liabilities and tax laws.\n2. Protection against double jeopardy (Article 20(2)) is available in proceedings before a court of law or judicial tribunal, but not before departmental or administrative authorities.\n3. In Selvi v. State of Karnataka (2010), the Supreme Court held that involuntary administration of narco-analysis and polygraph tests violates Article 20(3).\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 1,
    "explanation": "Statements 2 and 3 are correct. Statement 1 is incorrect:\n- Statement 1: Protection against ex-post facto laws applies ONLY to criminal laws (penal laws), NOT to civil laws or tax laws. Retrospective taxation or civil liability is constitutionally valid.\n- Statement 2: Protection against double jeopardy (no person shall be prosecuted and punished for the same offence more than once) applies only to judicial prosecution before courts/tribunals, not to administrative or departmental inquiries.\n- Statement 3: In Selvi (2010), the Supreme Court held that compulsory narco-analysis, polygraph, and BEAP tests violate the right against self-incrimination under Article 20(3) and personal liberty under Article 21.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Fundamental Rights",
    "article": "20",
    "examTrap": "Ex-post facto protection is strictly limited to criminal laws. Retrospective taxation or civil liability is constitutionally valid."
  },
  {
    "id": "q-98",
    "question": "Consider the following statements regarding the evolution of Article 21 of the Indian Constitution:\n1. In the A.K. Gopalan case (1950), the Supreme Court adopted a narrow interpretation of Article 21, holding that 'procedure established by law' did not require the law to be just, fair, and reasonable.\n2. In the Maneka Gandhi case (1978), the Supreme Court overruled the Gopalan judgment and introduced the American concept of 'due process of law' into Article 21.\n3. Articles 20 and 21 cannot be suspended even during the operation of a National Emergency under Article 352.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All statements are correct:\n- Statement 1: In A.K. Gopalan (1950), the Court applied a literal interpretation, protecting personal liberty only against arbitrary executive action, not legislative action.\n- Statement 2: In Maneka Gandhi (1978), the Court ruled that the procedure depriving personal liberty must be 'just, fair, and reasonable', effectively reading substantive 'due process' into Article 21.\n- Statement 3: The 44th Constitutional Amendment Act, 1978 amended Article 359 to provide that the right to move any court for the enforcement of the rights conferred by Articles 20 and 21 cannot be suspended during an Emergency.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Fundamental Rights",
    "article": "21",
    "examTrap": "The 44th Amendment specifically insulated Articles 20 and 21 from suspension under Article 359 during any proclamation of National Emergency."
  },
  {
    "id": "q-99",
    "question": "Match the following landmark Supreme Court judgments with the specific rights derived under Article 21:\n1. K.S. Puttaswamy case (2017) - A. Right to Livelihood\n2. Olga Tellis case (1985) - B. Right to Privacy\n3. Common Cause case (2018) - C. Right to die with dignity (Passive Euthanasia)\nWhich of the following is the correct matching pair?",
    "options": [
      "1-B, 2-A, 3-C",
      "1-A, 2-B, 3-C",
      "1-C, 2-A, 3-B",
      "1-B, 2-C, 3-A"
    ],
    "correctAnswer": 0,
    "explanation": "The correct matching is:\n- 1-B: K.S. Puttaswamy v. Union of India (2017) - 9-judge bench unanimously affirmed that Right to Privacy is a Fundamental Right under Article 21.\n- 2-A: Olga Tellis v. Bombay Municipal Corporation (1985) - Right to Livelihood is an essential facet of Right to Life under Article 21.\n- 3-C: Common Cause v. Union of India (2018) - Right to die with dignity encompasses passive euthanasia and living wills.",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "Fundamental Rights",
    "article": "21",
    "examTrap": "Active euthanasia is illegal in India; only passive euthanasia with strict guidelines and advance medical directives (living wills) is permitted."
  },
  {
    "id": "q-100",
    "question": "The Right to Education was inserted as a Fundamental Right under Article 21A by which Constitutional Amendment Act?",
    "options": [
      "42nd Constitutional Amendment Act, 1976",
      "44th Constitutional Amendment Act, 1978",
      "86th Constitutional Amendment Act, 2002",
      "91st Constitutional Amendment Act, 2003"
    ],
    "correctAnswer": 2,
    "explanation": "The 86th Constitutional Amendment Act, 2002 inserted Article 21A into the Constitution, making free and compulsory education for children between the ages of 6 and 14 years a Fundamental Right. It also modified Article 45 in DPSP and added an 11th Fundamental Duty under Article 51A(k).",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Fundamental Rights",
    "article": "21A",
    "examTrap": "The 86th Amendment in 2002 made a tripartite change: added Article 21A (FR), amended Article 45 (DPSP), and added 51A(k) (FD)."
  },
  {
    "id": "q-101",
    "question": "Consider the following statements regarding Article 22 and Preventive Detention in India:\n1. Protection against arrest under Article 22(1) and 22(2) is available to ordinary citizens but NOT to enemy aliens or persons arrested under preventive detention laws.\n2. A person arrested under ordinary criminal law must be produced before the nearest magistrate within 24 hours of arrest, excluding journey time.\n3. Preventive detention of a person cannot exceed three months unless an Advisory Board consisting of persons qualified to be High Court judges reports sufficient cause.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All statements are correct:\n- Statement 1: Under Article 22(3), ordinary procedural safeguards (right to know grounds, consult lawyer, production before magistrate within 24 hours) do not apply to enemy aliens and preventive detainees.\n- Statement 2: Article 22(2) mandates production before a magistrate within 24 hours (excluding transit time).\n- Statement 3: Article 22(4) specifies that preventive detention cannot exceed 3 months without approval from an Advisory Board (although the 44th Amendment proposed reducing it to 2 months, that clause was never brought into force, so 3 months remains the operative constitutional limit).",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Fundamental Rights",
    "article": "22",
    "examTrap": "Although the 44th Amendment reduced detention without Advisory Board approval to 2 months, that specific provision has never been officially notified by the executive, so the operational constitutional period is still 3 months."
  },
  {
    "id": "q-102",
    "question": "Article 23 of the Indian Constitution prohibits 'traffic in human beings and begar'. What exception does Article 23(2) provide to this rule?",
    "options": [
      "Compulsory military service during wartime only",
      "Compulsory service for public purposes without discrimination on grounds only of religion, race, caste or class",
      "Forced labor in prisons for convicted criminals",
      "Mandatory agricultural labor during food emergencies"
    ],
    "correctAnswer": 1,
    "explanation": "Under Article 23(2), nothing in Article 23 prevents the State from imposing compulsory service for public purposes (such as military conscription or social service), provided that in imposing such service, the State does not make any discrimination on grounds ONLY of religion, race, caste or class or any of them. Notice that 'sex' is NOT mentioned among the prohibited grounds in 23(2).",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Fundamental Rights",
    "article": "23",
    "examTrap": "In Article 23(2), the State cannot discriminate on religion, race, caste, or class, but 'sex' is omitted (allowing, for instance, conscription of men only)."
  },
  {
    "id": "q-103",
    "question": "With reference to the Freedom of Religion under Article 25 of the Indian Constitution, consider the following statements:\n1. It guarantees freedom of conscience and the right to freely profess, practice, and propagate religion to all persons (both citizens and foreigners).\n2. The right to propagate religion includes the fundamental right to forcibly convert another person to one's own religion.\n3. The freedom of religion is subject to public order, morality, health, and other provisions of Part III.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "1 and 3 only",
      "3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 1,
    "explanation": "Statements 1 and 3 are correct. Statement 2 is incorrect:\n- Statement 1: Article 25 applies to all persons (citizens as well as non-citizens).\n- Statement 2: In Rev. Stainislaus v. State of MP (1977), the Supreme Court ruled that Article 25 grants the right to transmit or spread one's religion by exposition of its tenets, but does NOT include the right to convert another person by fraud, force, or allurement, as it would impinge on the other person's 'freedom of conscience'.\n- Statement 3: Article 25 explicitly subjects religious rights to public order, morality, health, and other fundamental rights.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Fundamental Rights",
    "article": "25",
    "examTrap": "The right to 'propagate' religion means to explain and disseminate religious beliefs; it does NOT include a right to convert someone forcibly or fraudulently."
  },
  {
    "id": "q-104",
    "question": "To qualify as a 'Religious Denomination' under Article 26 of the Constitution of India, which of the following criteria must be satisfied according to the Supreme Court?",
    "options": [
      "It must be recognized by the Ministry of Minority Affairs.",
      "It must have a collection of individuals with a common system of beliefs, a common organization, and a distinctive name.",
      "It must have existed in India prior to the year 1950.",
      "It must have a minimum following of at least 1% of the national population."
    ],
    "correctAnswer": 1,
    "explanation": "In the Sri Shirur Mutt case (1954), the Supreme Court held that to be recognized as a 'Religious Denomination' under Article 26, three conditions must be satisfied: (1) It must be a collection of individuals who have a system of beliefs (doctrines) which they regard as conducive to their spiritual well-being; (2) A common organization; and (3) Designation by a distinctive name. For instance, the Ramakrishna Mission and Anand Marga are denominations, whereas Aurobindo Society is not.",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "Fundamental Rights",
    "article": "26",
    "examTrap": "Article 25 protects an individual's right to religion, while Article 26 protects collective rights of religious denominations or sections thereof."
  },
  {
    "id": "q-105",
    "question": "Consider the following statements regarding Articles 27 and 28 of the Indian Constitution:\n1. Article 27 prohibits the State from levying any tax where the proceeds are specifically appropriated for the promotion or maintenance of any particular religion.\n2. Article 27 prohibits the levy of a 'fee' to provide secular services or regulation of religious institutions.\n3. In educational institutions wholly maintained out of State funds, no religious instruction can be imparted under Article 28(1).\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "1 and 3 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 1,
    "explanation": "Statements 1 and 3 are correct. Statement 2 is incorrect:\n- Statement 1: Article 27 bars the State from spending public tax money to patronize or promote any particular religion (secular character).\n- Statement 2: Article 27 prohibits only taxes, NOT fees. A fee can be levied on pilgrims or religious trusts to provide safety, sanitation, or administrative regulation (e.g., pilgrim fees).\n- Statement 3: Article 28 classifies institutions into four types. In institutions wholly maintained by the State, religious instruction is completely prohibited.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Fundamental Rights",
    "article": "28",
    "examTrap": "Article 27 prohibits taxes (compulsory exaction for general public revenue) for religious promotion, but does NOT prohibit fees (payment for specific services/regulations)."
  },
  {
    "id": "q-106",
    "question": "Consider the following statements regarding the Cultural and Educational Rights of Minorities under Articles 29 and 30:\n1. Under Article 30(1), the right to establish and administer educational institutions is granted to both religious and linguistic minorities.\n2. The term 'minority' is defined in Article 30 of the Indian Constitution as any community having less than 50% population in the country.\n3. In the T.M.A. Pai Foundation case (2002), the Supreme Court ruled that minority status under Article 30 is determined with reference to the population of the State concerned, not the whole of India.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "1 and 3 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 1,
    "explanation": "Statements 1 and 3 are correct. Statement 2 is incorrect:\n- Statement 1: Article 30(1) guarantees the right to all minorities, whether based on religion or language, to establish and administer educational institutions of their choice.\n- Statement 2: The Constitution does NOT define the term 'minority' anywhere.\n- Statement 3: In T.M.A. Pai Foundation v. State of Karnataka (2002), an 11-judge bench held that since reorganization of States was done on linguistic lines, the unit for determining religious and linguistic minority status is the State, not the whole of India.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Fundamental Rights",
    "article": "30",
    "examTrap": "The word 'Minority' is NOT defined in the Constitution. Moreover, minority status is assessed state-wise, not nationally."
  },
  {
    "id": "q-107",
    "question": "With reference to Article 31C of the Indian Constitution, consider the following statements:\n1. Article 31C was inserted by the 25th Constitutional Amendment Act, 1971 to protect laws implementing Article 39(b) and 39(c) from being challenged under Articles 14 and 19.\n2. In the Kesavananda Bharati case (1973), the Supreme Court struck down the clause of Article 31C that barred judicial review of such laws.\n3. In the Minerva Mills case (1980), the Supreme Court upheld the 42nd Amendment's extension of Article 31C to cover all Directive Principles.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1 and 2 are correct. Statement 3 is incorrect:\n- Statement 1: The 25th Amendment (1971) added Article 31C: no law giving effect to DPSPs under Article 39(b) and 39(c) could be void on grounds of violating Articles 14, 19, or 31.\n- Statement 2: In Kesavananda Bharati (1973), the Supreme Court upheld the first part of Art 31C but struck down the second part ('and no law containing a declaration that it is to give effect to such policy shall be called in question in any court') because judicial review is an essential basic feature.\n- Statement 3: The 42nd Amendment (1976) expanded Article 31C to give supremacy to ALL DPSPs over Articles 14 and 19. In Minerva Mills (1980), the Supreme Court struck down this expansion as unconstitutional, restoring Article 31C only to Article 39(b) and (c).",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Fundamental Rights",
    "article": "31C",
    "examTrap": "Article 31C shields ONLY laws implementing Article 39(b) and 39(c), NOT all DPSPs. Minerva Mills struck down the blanket immunity created by the 42nd Amendment."
  },
  {
    "id": "q-108",
    "question": "Consider the following statements regarding Article 33, 34, and 35 of Part III of the Indian Constitution:\n1. Under Article 33, Parliament has the power to restrict or abrogate the Fundamental Rights of members of the Armed Forces, paramilitary forces, and intelligence agencies.\n2. Under Article 34, martial law can be declared in any area within the territory of India under specific provisions explicitly detailed in the Constitution.\n3. Under Article 35, the power to make laws to give effect to certain specified Fundamental Rights (such as Articles 16(3), 32(3), 33, and 34) rests exclusively with Parliament and not with State Legislatures.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "1 and 3 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 1,
    "explanation": "Statements 1 and 3 are correct. Statement 2 is incorrect:\n- Statement 1: Article 33 empowers Parliament (only Parliament, not state legislatures) to modify FRs for armed forces, police forces, intelligence agencies, etc., to ensure proper discharge of duties and maintenance of discipline.\n- Statement 2: The Constitution mentions 'Martial Law' in Article 34, but it does NOT define Martial Law or specify explicit conditions for its declaration (it is borrowed from English common law).\n- Statement 3: Article 35 ensures uniformity throughout India by vesting the legislative power for prescribing punishments for FR violations (e.g., Art 17, 23) and modifying FRs (Art 16(3), 32(3), 33, 34) exclusively in Parliament.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Fundamental Rights",
    "article": "35",
    "examTrap": "'Martial Law' has no specific definition or detailed grounds in the Constitution; it is distinct from National Emergency (Article 352)."
  },
  {
    "id": "q-109",
    "question": "Which of the following sets of Fundamental Rights is available EXCLUSIVELY to Indian citizens and NOT to foreign nationals?",
    "options": [
      "Articles 14, 20, 21, 25",
      "Articles 15, 16, 19, 29, 30",
      "Articles 19, 20, 21, 21A, 22",
      "Articles 14, 15, 16, 17, 18"
    ],
    "correctAnswer": 1,
    "explanation": "Articles 15, 16, 19, 29, and 30 are available exclusively to citizens of India. All other Fundamental Rights (Articles 14, 20, 21, 21A, 22, 23, 24, 25, 26, 27, 28) are available to all persons (both citizens and foreign nationals, except enemy aliens).",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Fundamental Rights",
    "article": "19",
    "examTrap": "Memorize the five citizen-only articles: 15, 16, 19, 29, and 30."
  },
  {
    "id": "q-110",
    "question": "Which Article of the Constitution declares that the Directive Principles of State Policy are 'fundamental in the governance of the country' and it shall be the duty of the State to apply these principles in making laws?",
    "options": [
      "Article 36",
      "Article 37",
      "Article 38",
      "Article 39"
    ],
    "correctAnswer": 1,
    "explanation": "Article 37 contains two critical principles: (1) The provisions contained in Part IV shall not be enforceable by any court (non-justiciable), and (2) Nevertheless, the principles therein laid down are 'fundamental in the governance of the country' and it shall be the duty of the State to apply them in making laws.",
    "difficulty": "Basic",
    "examType": "General competitive exams",
    "topic": "DPSP",
    "article": "37",
    "examTrap": "While Article 37 makes DPSPs non-justiciable, it also explicitly declares them 'fundamental in the governance of the country'."
  },
  {
    "id": "q-111",
    "question": "Consider the following Directive Principles of State Policy:\n1. To organize village panchayats and endow them with necessary powers (Article 40)\n2. To promote cottage industries on an individual or co-operative basis in rural areas (Article 43)\n3. To secure a Uniform Civil Code for all citizens throughout the territory of India (Article 44)\n4. To prohibit the consumption of intoxicating drinks and of drugs injurious to health (Article 47)\nWhich of the above are based on GANDHIAN ideology?",
    "options": [
      "1, 2 and 3 only",
      "1, 2 and 4 only",
      "2, 3 and 4 only",
      "1, 2, 3 and 4"
    ],
    "correctAnswer": 1,
    "explanation": "Gandhian Principles represent the program of reconstruction enunciated by Mahatma Gandhi during the national movement. They include: Article 40 (Village Panchayats), Article 43 (Cottage Industries), Article 43B (Cooperative societies), Article 46 (Educational and economic interests of SCs, STs, and weaker sections), Article 47 (Prohibition of intoxicating drinks and drugs), and Article 48 (Prohibition of slaughter of cows, calves, and draught cattle). Article 44 (Uniform Civil Code) is a Liberal-Intellectual principle, not a Gandhian principle.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "DPSP",
    "article": "40",
    "examTrap": "Article 44 (UCC) and Article 50 (Separation of Judiciary) belong to the Liberal-Intellectual category, not Gandhian."
  },
  {
    "id": "q-112",
    "question": "With reference to Article 39(b) and Article 39(c) of the Indian Constitution, consider the following statements:\n1. Article 39(b) directs the State to secure that the ownership and control of the material resources of the community are so distributed as best to subserve the common good.\n2. Article 39(c) directs the State to ensure that the operation of the economic system does not result in the concentration of wealth and means of production to the common detriment.\n3. Laws enacted to give effect to Article 39(b) and 39(c) cannot be challenged on the ground of inconsistency with Article 14 or Article 19.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All statements are correct:\n- Statements 1 and 2: These are exact definitions of Socialistic Directives under Article 39(b) (distribution of material resources) and Article 39(c) (prevention of concentration of wealth).\n- Statement 3: Under Article 31C (as upheld in Kesavananda Bharati and Minerva Mills), laws made to implement Article 39(b) and Article 39(c) enjoy constitutional immunity against challenges based on Article 14 (Equality) and Article 19 (Six Freedoms).",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "DPSP",
    "article": "39",
    "examTrap": "Only 39(b) and 39(c) enjoy this unique constitutional priority over Articles 14 and 19 under Article 31C."
  },
  {
    "id": "q-113",
    "question": "Equal justice and free legal aid to the poor was added to the Directive Principles under Article 39A by which Constitutional Amendment?",
    "options": [
      "24th Amendment Act, 1971",
      "42nd Amendment Act, 1976",
      "44th Amendment Act, 1978",
      "73rd Amendment Act, 1992"
    ],
    "correctAnswer": 1,
    "explanation": "The 42nd Constitutional Amendment Act, 1976 added Article 39A to the Constitution, directing the State to provide free legal aid to ensure that opportunities for securing justice are not denied to any citizen by reason of economic or other disabilities. Pursuant to this, Parliament passed the Legal Services Authorities Act, 1987 (establishing NALSA).",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "DPSP",
    "article": "39A",
    "examTrap": "Four new DPSPs were added by the 42nd Amendment: 39(f), 39A, 43A, and 48A."
  },
  {
    "id": "q-114",
    "question": "Consider the following statements regarding the Uniform Civil Code (Article 44):\n1. Article 44 directs the State to endeavor to secure for the citizens a Uniform Civil Code throughout the territory of India.\n2. In the Shah Bano case (1985) and Sarla Mudgal case (1995), the Supreme Court emphasized the need for a Uniform Civil Code.\n3. Goa is the only Indian state that has continuously retained a Portuguese-derived Common Civil Code since its liberation.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All statements are correct:\n- Statement 1: Article 44 is located in Part IV (DPSP) under Liberal-Intellectual principles.\n- Statement 2: In Shah Bano (1985), Sarla Mudgal (1995), and John Vallamattom (2003), the SC reiterated that a UCC would help national integration by removing ideological contradictions.\n- Statement 3: Goa has retained the Portuguese Civil Code of 1867, making it the only state with a uniform family law applying to all religious communities until Uttarakhand passed its UCC Bill in 2024.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "DPSP",
    "article": "44",
    "examTrap": "Goa's civil code originates from the Portuguese Civil Code of 1867, which was continued after Goa's liberation in 1961."
  },
  {
    "id": "q-115",
    "question": "Article 43B, which directs the State to promote voluntary formation, autonomous functioning, democratic control, and professional management of Co-operative Societies, was inserted by which Amendment Act?",
    "options": [
      "86th Amendment Act, 2002",
      "91st Amendment Act, 2003",
      "97th Amendment Act, 2011",
      "103rd Amendment Act, 2019"
    ],
    "correctAnswer": 2,
    "explanation": "The 97th Constitutional Amendment Act, 2011 gave constitutional status and protection to cooperative societies. It made three changes: (1) made the right to form cooperatives a Fundamental Right under Article 19(1)(c), (2) added a new DPSP on promotion of cooperative societies under Article 43B, and (3) added Part IXB (The Co-operative Societies).",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "DPSP",
    "article": "43B",
    "examTrap": "The 97th Amendment affected three areas: Art 19(1)(c) (FR), Art 43B (DPSP), and Part IXB (Articles 243ZH to 243ZT)."
  },
  {
    "id": "q-116",
    "question": "Which Article of the Constitution of India provides for the 'Separation of Judiciary from the Executive in the public services of the State'?",
    "options": [
      "Article 48",
      "Article 49",
      "Article 50",
      "Article 51"
    ],
    "correctAnswer": 2,
    "explanation": "Article 50 directs the State to take steps to separate the judiciary from the executive in the public services of the State. This principle aims to ensure judicial independence and prevent executive interference in judicial administration, implemented across states via the Code of Criminal Procedure, 1973 (CrPC).",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "DPSP",
    "article": "50",
    "examTrap": "Remember the sequence: 48 (Agriculture/Animal Husbandry), 48A (Environment), 49 (Monuments), 50 (Separation of Judiciary), 51 (International Peace)."
  },
  {
    "id": "q-117",
    "question": "Apart from Part IV, certain directives are located in other Parts of the Constitution. Consider the following statements:\n1. Article 350A (Part XVII) directs States to provide adequate facilities for instruction in the mother-tongue at the primary stage of education to children belonging to linguistic minority groups.\n2. Article 351 (Part XVII) directs the Union to promote the spread of the Hindi language and develop it as a medium of expression for all elements of composite culture.\n3. Article 335 (Part XVI) provides that the claims of SCs and STs shall be taken into consideration consistently with the maintenance of efficiency of administration in public appointments.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All statements are correct. These three provisions are known as 'Directives outside Part IV' (Non-Part IV Directives). Like Part IV directives, they are non-justiciable in nature and impose a constitutional duty upon the Union and State governments:\n- Art 350A: Primary instruction in mother tongue for linguistic minorities.\n- Art 351: Duty of the Union to develop and promote the Hindi language.\n- Art 335: Claims of SC/ST to services subject to administrative efficiency.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "DPSP",
    "article": "350A",
    "examTrap": "Candidates often forget that directives to the State exist outside Part IV in Articles 335, 350A, and 351."
  },
  {
    "id": "q-118",
    "question": "Consider the following statements regarding the judicial evolution of the relationship between Fundamental Rights (FRs) and Directive Principles of State Policy (DPSPs):\n1. In the Champakam Dorairajan case (1951), the Supreme Court ruled that in case of any conflict between FRs and DPSPs, the FRs would prevail.\n2. In the Golaknath case (1967), the Supreme Court held that Parliament cannot amend Fundamental Rights even to implement DPSPs.\n3. In the Minerva Mills case (1980), the Supreme Court observed that the Indian Constitution is founded on the bedrock of the balance between Part III and Part IV.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All statements are correct:\n- Statement 1: In Champakam Dorairajan (1951), the Court held DPSPs are subsidiary to FRs; FRs prevail over DPSPs.\n- Statement 2: In Golaknath (1967), the Court held that FRs have a transcendental position and cannot be taken away or abridged to implement DPSPs.\n- Statement 3: In Minerva Mills (1980), Justice Chandrachud famously observed that the Constitution is founded on the bedrock of the balance between Part III and Part IV, and giving absolute primacy to one over the other disturbs the harmony of the Constitution.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "DPSP",
    "article": "37",
    "examTrap": "The harmony and balance between Fundamental Rights and Directive Principles is an essential feature of the 'Basic Structure' of the Constitution (Minerva Mills)."
  },
  {
    "id": "q-119",
    "question": "Which of the following Directives were inserted into Part IV by the 42nd Constitutional Amendment Act, 1976?\n1. To secure opportunities for the healthy development of children (Article 39(f))\n2. To promote equal justice and provide free legal aid to the poor (Article 39A)\n3. To take steps to secure the participation of workers in the management of industries (Article 43A)\n4. To protect and improve the environment and safeguard forests and wildlife (Article 48A)\nSelect the correct answer using the codes below:",
    "options": [
      "1, 2 and 3 only",
      "2, 3 and 4 only",
      "1, 2 and 4 only",
      "1, 2, 3 and 4"
    ],
    "correctAnswer": 3,
    "explanation": "All four provisions were added by the 42nd Constitutional Amendment Act, 1976:\n1. Article 39(f): Healthy development of children.\n2. Article 39A: Equal justice and free legal aid.\n3. Article 43A: Participation of workers in management of industries.\n4. Article 48A: Protection and improvement of environment and safeguarding of forests and wildlife.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "DPSP",
    "article": "48A",
    "examTrap": "44th Amendment added only Article 38(2) (minimizing inequalities in income and status), while 42nd Amendment added four articles: 39(f), 39A, 43A, and 48A."
  },
  {
    "id": "q-120",
    "question": "Consider the following statements regarding the Swaran Singh Committee (1976) and Fundamental Duties:\n1. The Committee recommended the inclusion of a separate chapter on Fundamental Duties in the Constitution.\n2. It recommended that Parliament may provide for penalty or punishment for non-compliance with any of the duties.\n3. It recommended that the duty to pay taxes should also be incorporated as a Fundamental Duty.\n4. All recommendations made by the Swaran Singh Committee were accepted and enacted under the 42nd Constitutional Amendment Act.\nWhich of the statements given above are correct?",
    "options": [
      "1, 2 and 3 only",
      "1, 3 and 4 only",
      "2, 3 and 4 only",
      "1, 2, 3 and 4"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1, 2, and 3 are correct; Statement 4 is incorrect:\n- The Swaran Singh Committee recommended 8 duties, including the duty to pay taxes, and suggested that Parliament should impose punishments/penalties for refusal to observe duties, and that such penal laws should not be challenged in court.\n- However, the Congress government did not accept the recommendations regarding: (a) duty to pay taxes, (b) penal provisions/punishment, and (c) immunity of duty enforcement laws from judicial review. Thus, not all recommendations were accepted.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Fundamental Duties",
    "article": "51A",
    "examTrap": "Swaran Singh recommended 8 duties, but the 42nd Amendment enacted 10 duties, rejecting the proposals on taxes, penalties, and court immunity."
  },
  {
    "id": "q-121",
    "question": "With reference to the Verma Committee on Fundamental Duties of Citizens (1999), consider the following statements:\n1. The Committee identified the existence of legal provisions for the implementation of several Fundamental Duties.\n2. It noted that the Prevention of Insults to National Honour Act, 1971 implements the duty under Article 51A(a).\n3. It noted that the Protection of Civil Rights Act, 1955 implements the duty to renounce practices derogatory to the dignity of women under Article 51A(e).\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1 and 2 are correct. Statement 3 is incorrect:\n- Statement 1: The Justice J.S. Verma Committee (1999) identified existing statutory laws enforcing duties.\n- Statement 2: The Prevention of Insults to National Honour Act (1971) prevents disrespect to the National Flag, Anthem, and Constitution (Art 51A(a)).\n- Statement 3 is incorrect: The Protection of Civil Rights Act, 1955 provides punishments for offences related to caste and religion (untouchability), whereas laws punishing practices derogatory to women include IPC Section 509, Dowry Prohibition Act, and Indecent Representation of Women Act.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Fundamental Duties",
    "article": "51A",
    "examTrap": "Protection of Civil Rights Act, 1955 enforces Article 17 and caste-based discrimination, not gender-based offenses."
  },
  {
    "id": "q-122",
    "question": "The 11th Fundamental Duty, which requires a parent or guardian to provide opportunities for education to their child between the age of six and fourteen years (Article 51A(k)), was added by which Constitutional Amendment?",
    "options": [
      "42nd Amendment Act, 1976",
      "44th Amendment Act, 1978",
      "86th Amendment Act, 2002",
      "91st Amendment Act, 2003"
    ],
    "correctAnswer": 2,
    "explanation": "The 86th Constitutional Amendment Act, 2002 added the 11th Fundamental Duty under Article 51A(k): 'who is a parent or guardian to provide opportunities for education to his child or, as the case may be, ward between the age of six and fourteen years.'",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Fundamental Duties",
    "article": "51A",
    "examTrap": "The 42nd Amendment added 10 duties in 1976; the 11th duty was added in 2002 by the 86th Amendment."
  },
  {
    "id": "q-123",
    "question": "Consider the following statements regarding the writ of Habeas Corpus:\n1. It literally means 'to have the body of' and is invoked to secure the release of a person unlawfully detained.\n2. It can be issued against both public authorities and private individuals.\n3. The writ can be issued even if the detention is ordered by a competent court in execution of a judicial sentence.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1 and 2 are correct. Statement 3 is incorrect:\n- Statement 1: Habeas Corpus is a Latin term meaning 'to have the body of', issued to produce a detained person before the court.\n- Statement 2: It is the only writ that can be issued against both public authorities and private individuals.\n- Statement 3 is incorrect: Habeas Corpus cannot be issued when: (a) detention is lawful, (b) proceeding is for contempt of legislature or court, (c) detention is by a competent court of law, or (d) detention is outside the territorial jurisdiction of the court.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Writs",
    "article": "32",
    "examTrap": "If detention is by order of a competent court or within lawful criminal process, Habeas Corpus cannot be issued."
  },
  {
    "id": "q-124",
    "question": "With reference to the writ of Mandamus, consider the following statements:\n1. It is a command issued to a public official or public body asking them to perform an official duty that they have failed or refused to perform.\n2. It can be issued to enforce a purely private contract or private duty.\n3. It cannot be issued against the President of India or State Governors for the exercise and performance of the powers and duties of their office.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "1 and 3 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 1,
    "explanation": "Statements 1 and 3 are correct. Statement 2 is incorrect:\n- Statement 1: Mandamus ('we command') is issued to compel performance of a mandatory statutory or public duty.\n- Statement 2 is incorrect: Mandamus cannot be issued against private individuals, private bodies, or to enforce purely contractual obligations.\n- Statement 3 is correct: Mandamus cannot be issued against: (a) the President or State Governors (under Article 361 immunity), (b) against the Chief Justice of a High Court acting in judicial capacity, (c) against a private individual/body, or (d) when the duty is purely discretionary.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Writs",
    "article": "32",
    "examTrap": "Mandamus does not lie against the President or Governors, nor does it lie to enforce non-statutory private contracts or discretionary powers."
  },
  {
    "id": "q-125",
    "question": "What is the key distinction between the writs of 'Prohibition' and 'Certiorari'?",
    "options": [
      "Prohibition is issued against administrative bodies, while Certiorari is issued against legislative bodies.",
      "Prohibition is only preventive (issued while proceedings are pending), whereas Certiorari is both preventive and curative (issued to quash an order already passed).",
      "Prohibition is issued by lower courts to higher courts, while Certiorari is issued by higher courts to lower courts.",
      "Prohibition applies to private individuals, while Certiorari applies only to public officials."
    ],
    "correctAnswer": 1,
    "explanation": "Prohibition and Certiorari are both issued against judicial and quasi-judicial bodies. The difference is in their stage and effect:\n- Prohibition is purely preventive: it is issued while the case is still pending before a lower court/tribunal to prevent it from exceeding jurisdiction.\n- Certiorari is both preventive and curative: it is issued after the lower court/tribunal has passed an order without or in excess of jurisdiction, to quash the illegal order and transfer proceedings.",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "Writs",
    "article": "32",
    "examTrap": "Prohibition = during proceedings (preventive only); Certiorari = after order is passed or during proceedings (curative + preventive)."
  },
  {
    "id": "q-126",
    "question": "Which of the following writs can be sought by any citizen, even if he or she is not personally aggrieved (relaxation of locus standi)?",
    "options": [
      "Mandamus",
      "Certiorari",
      "Quo Warranto",
      "Prohibition"
    ],
    "correctAnswer": 2,
    "explanation": "Quo Warranto ('by what authority or warrant') is issued to prevent illegal usurpation of a substantive public office created by statute or Constitution. Unlike other writs where only an aggrieved person has locus standi, a writ petition for Quo Warranto can be filed by any interested citizen, even if their personal fundamental right has not been directly infringed.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Writs",
    "article": "32",
    "examTrap": "Quo Warranto and Public Interest Litigation (PIL) do not require traditional strict locus standi."
  },
  {
    "id": "q-127",
    "question": "Consider the following statements comparing the writ jurisdiction of the Supreme Court under Article 32 and High Courts under Article 226:\n1. The writ jurisdiction of the Supreme Court is narrower in subject scope than that of the High Courts.\n2. The Supreme Court cannot refuse to grant remedy under Article 32 because Article 32 is itself a Fundamental Right.\n3. The remedy under Article 226 is a discretionary remedy, and a High Court may refuse to exercise its writ jurisdiction if an adequate alternative legal remedy exists.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All statements are correct:\n- Statement 1: SC can issue writs ONLY for enforcement of Fundamental Rights (narrower scope), whereas HC can issue writs for FRs as well as 'for any other purpose' (ordinary legal rights).\n- Statement 2: Article 32 is itself part of Part III; the SC is the guarantor and protector of FRs and cannot decline an Article 32 petition.\n- Statement 3: Article 226 is not in Part III; it is a discretionary constitutional power, and High Courts generally decline writs if an effective alternative statutory remedy is available.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Writs",
    "article": "32",
    "examTrap": "While the High Court's writ power is broader in scope (covers legal rights too), the Supreme Court's jurisdiction is more binding because Article 32 is a Fundamental Right in itself."
  },
  {
    "id": "q-128",
    "question": "Which Constitutional Amendment Act amended Article 226 to allow a High Court to issue writs to any government or authority located OUTSIDE its territorial jurisdiction, provided the cause of action arises wholly or in part within its territory?",
    "options": [
      "7th Amendment Act, 1956",
      "15th Amendment Act, 1963",
      "24th Amendment Act, 1971",
      "42nd Amendment Act, 1976"
    ],
    "correctAnswer": 1,
    "explanation": "Originally, High Courts could only issue writs to authorities located within their territorial limits. The 15th Constitutional Amendment Act, 1963 introduced clause (2) to Article 226, enabling a High Court to issue writs to any government, authority, or person located outside its territorial jurisdiction, provided the 'cause of action' arises, wholly or in part, within the territorial jurisdiction of that High Court.",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "Article 226",
    "article": "226",
    "examTrap": "The 'cause of action' territorial extension for High Court writ jurisdiction was introduced by the 15th Amendment Act, 1963."
  },
  {
    "id": "q-129",
    "question": "Following the 44th Constitutional Amendment Act, 1978, what is the present status of the Right to Property in India?",
    "options": [
      "It is a Fundamental Right under Part III.",
      "It is neither a constitutional right nor a statutory right.",
      "It is a Legal and Constitutional Right under Article 300A in Part XII.",
      "It is a Directive Principle of State Policy under Part IV."
    ],
    "correctAnswer": 2,
    "explanation": "The 44th Amendment Act, 1978 abolished the Right to Property as a Fundamental Right by omitting Article 19(1)(f) and Article 31. It inserted a new Article 300A in Chapter IV of Part XII, titled 'Right to Property', which states: 'No person shall be deprived of his property save by authority of law.' Thus, it is a constitutional/legal right, but not a Fundamental Right.",
    "difficulty": "Basic",
    "examType": "General competitive exams",
    "topic": "Article 300A",
    "article": "300A",
    "examTrap": "It is NOT in Part III (Fundamental Rights) and NOT in Part IV (DPSP); it is in Part XII (Finance, Property, Contracts and Suits) under Article 300A."
  },
  {
    "id": "q-130",
    "question": "With reference to the Right to Property after the 44th Amendment Act, 1978, consider the following statements:\n1. An aggrieved person cannot directly approach the Supreme Court under Article 32 for the violation of Article 300A.\n2. There is no constitutional guarantee of market compensation for state acquisition of private property except in cases of property of a minority educational institution (Article 30(1A)) and land under personal cultivation within the statutory ceiling limit (Article 31A(1)).\n3. The Supreme Court in Vidya Devi (2020) and Kolkata Municipal Corporation (2024) held that the right to property is also a recognized human right under Article 300A.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All statements are correct:\n- Statement 1: Since Article 300A is not in Part III, an Article 32 petition does not lie for its violation; one must approach the High Court under Article 226 or file a civil suit.\n- Statement 2: The Constitution provides for mandatory market compensation only in two specific cases: (a) acquisition of property of a minority educational institution (Article 30(1A), inserted by 44th Amendment), and (b) acquisition of land under personal cultivation within the statutory ceiling limit (second proviso to Article 31A(1), inserted by 17th Amendment).\n- Statement 3: The SC has held that the right to property is not just a constitutional/statutory right but also a facet of human rights.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Article 300A",
    "article": "300A",
    "examTrap": "The two exceptions where market value compensation is still constitutionally guaranteed are minority educational institutions (Art 30(1A)) and personal cultivation land within ceiling limits (Art 31A)."
  },
  {
    "id": "q-131",
    "question": "Consider the following statements regarding the scope of Judicial Review in India:\n1. The concept of Judicial Review originated and developed in the United States of America under the landmark case Marbury v. Madison (1803).\n2. The Indian Constitution explicitly uses the phrase 'Judicial Review' in Article 13 and Article 32.\n3. In India, the scope of judicial review was originally narrower than in the USA because the Indian Constitution adopted 'procedure established by law' rather than 'due process of law'.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "1 and 3 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 1,
    "explanation": "Statements 1 and 3 are correct; Statement 2 is incorrect:\n- Statement 1: Judicial review was propounded by Chief Justice John Marshall of the US Supreme Court in Marbury v. Madison (1803).\n- Statement 2: The phrase 'Judicial Review' is NOT explicitly used anywhere in the text of the Indian Constitution, though the power is clearly conferred through Articles 13, 32, 131-136, 143, 226, 245, etc.\n- Statement 3: The scope in India was originally narrower than in the US because the US Constitution provides for 'due process of law' (giving broad leeway to judge legislative reasonableness), whereas India adopted 'procedure established by law', although Maneka Gandhi expanded Article 21 substantially.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Judicial Review",
    "article": "13",
    "examTrap": "The term 'Judicial Review' is nowhere mentioned in the text of the Constitution of India, just like the terms 'Budget' or 'Cabinet' (originally)."
  },
  {
    "id": "q-132",
    "question": "Consider the following statements regarding the Ninth Schedule and the landmark I.R. Coelho case (2007):\n1. The Ninth Schedule was added to the Constitution by the 1st Constitutional Amendment Act, 1951 to protect land reform laws from judicial review.\n2. In the I.R. Coelho case (2007), a 9-judge bench ruled that all laws placed in the Ninth Schedule after April 24, 1973 are open to judicial review.\n3. Laws placed in the Ninth Schedule can be challenged if they violate Fundamental Rights that form part of the Basic Structure of the Constitution.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All statements are correct:\n- Statement 1: The 1st Amendment (1951) added Article 31B and the Ninth Schedule to insulate agrarian reform laws from judicial review.\n- Statement 2: In I.R. Coelho v. State of Tamil Nadu (2007), a unanimous 9-judge bench held that there can be no blanket immunity. Laws added to the Ninth Schedule after 24 April 1973 (the date of Kesavananda Bharati judgment) do not enjoy absolute protection.\n- Statement 3: Such laws can be challenged and invalidated if they violate the Basic Structure doctrine, especially the Golden Triangle of Articles 14, 19, and 21.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Judicial Review",
    "article": "31B",
    "examTrap": "The cutoff date for judicial review of Ninth Schedule laws is April 24, 1973 (the date of the Kesavananda judgment). Laws inserted prior to this date cannot be challenged on Basic Structure grounds."
  },
  {
    "id": "q-133",
    "question": "With reference to the election of the President of India, consider the following statements:\n1. The electoral college consists of the elected members of both Houses of Parliament and the elected members of the Legislative Assemblies of the States and Union Territories with Assemblies.\n2. Nominated members of either House of Parliament and State Legislative Assemblies do not participate in the Presidential election.\n3. Members of the State Legislative Councils (Vidhan Parishad) participate in the Presidential election if they are directly elected.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statement 1 is correct: Under Article 54, the Electoral College for the Presidential election consists of elected members of Lok Sabha, Rajya Sabha, and elected members of State Legislative Assemblies (including Delhi, Puducherry, and Jammu & Kashmir with assemblies).\nStatement 2 is correct: Nominated members of Parliament and State Legislative Assemblies do not have voting rights in the Presidential election.\nStatement 3 is incorrect: Members of Legislative Councils (MLCs)—whether elected or nominated—do not participate in the election of the President under any circumstances.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "President",
    "article": "54",
    "examTrap": "Examiners often confuse candidates by implying that directly/indirectly elected MLCs have voting rights in presidential polls; MLCs are completely excluded."
  },
  {
    "id": "q-134",
    "question": "Consider the following statements regarding the calculation of the value of votes in the Presidential election of India:\n1. The value of the vote of an MLA depends upon the total population of the state and the total number of elected members in the state assembly.\n2. The population of the states for calculating vote value is determined based on the latest published Census figures (2011 Census).\n3. The value of the vote of an MP is determined by dividing the total value of votes of all MLAs of all States by the total number of elected MPs in both Houses.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "1 and 3 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 1,
    "explanation": "Statement 1 is correct: Under Article 55, Vote Value of an MLA = (Total State Population / Total Elected MLAs) × (1/1000).\nStatement 2 is incorrect: By the 84th Constitutional Amendment Act 2001 (which extended the freeze introduced by the 42nd Amendment), the population for the purpose of the Presidential election is still fixed according to the 1971 Census until the first census taken after 2026.\nStatement 3 is correct: Vote Value of an MP = (Total Value of Votes of all MLAs of all States) / (Total Number of Elected MPs of Lok Sabha and Rajya Sabha).",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "President",
    "article": "55",
    "examTrap": "Students often assume current population/2011 Census is used for vote calculation, but the 1971 census remains the constitutional benchmark until after 2026."
  },
  {
    "id": "q-135",
    "question": "All doubts and disputes arising out of or in connection with the election of the President or Vice-President of India are inquired into and decided exclusively by which of the following authorities?",
    "options": [
      "The Election Commission of India",
      "A Special Parliamentary Tribunal",
      "The Supreme Court of India",
      "The High Court of Delhi"
    ],
    "correctAnswer": 2,
    "explanation": "According to Article 71 of the Constitution, all doubts and disputes arising out of or in connection with the election of a President or Vice-President shall be inquired into and decided by the Supreme Court whose decision shall be final. An election petition challenging the election can be filed only in the Supreme Court by a candidate or 20 electors.",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "President",
    "article": "71",
    "examTrap": "Do not confuse election disputes of MPs/MLAs (handled first by High Courts and Election Commission) with Presidential/Vice-Presidential election disputes (exclusive original jurisdiction of Supreme Court)."
  },
  {
    "id": "q-136",
    "question": "With reference to the impeachment of the President of India under Article 61, consider the following statements:\n1. An impeachment charge can be initiated in either House of Parliament.\n2. The resolution must be signed by at least one-fourth of the total members of the House that framed the charges and 14 days' advance notice must be given.\n3. The resolution must be passed by a majority of two-thirds of the members present and voting in each House.\n4. Nominated members of Parliament participate in the impeachment, but members of State Legislative Assemblies do not.\nWhich of the statements given above are correct?",
    "options": [
      "1, 2 and 4 only",
      "1 and 3 only",
      "2, 3 and 4 only",
      "1, 2, 3 and 4"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1, 2, and 4 are correct.\nStatement 3 is incorrect: The impeachment resolution must be passed by a majority of not less than two-thirds of the TOTAL membership of the House (the highest majority requirement under the Indian Constitution), not merely members present and voting.\nNominated MPs take part in impeachment even though they don't vote in election, while elected MLAs vote in election but have no role in impeachment.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "President",
    "article": "61",
    "examTrap": "The majority required under Article 61 is 2/3rd of the TOTAL membership of the House, NOT 'present and voting'."
  },
  {
    "id": "q-137",
    "question": "Which of the following is NOT a constitutional qualification for a person to be eligible for election as the President of India under Article 58?",
    "options": [
      "He must be a citizen of India",
      "He must have completed the age of 35 years",
      "He must be qualified for election as a member of the Rajya Sabha",
      "He must not hold any office of profit under the Government of India or any State Government"
    ],
    "correctAnswer": 2,
    "explanation": "Under Article 58, the candidate must be qualified for election as a member of the House of the People (Lok Sabha), NOT the Rajya Sabha. Qualification for Rajya Sabha is required for the Vice-President (Article 66).",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "President",
    "article": "58",
    "examTrap": "President must be qualified for Lok Sabha; Vice-President must be qualified for Rajya Sabha."
  },
  {
    "id": "q-138",
    "question": "According to Article 56 of the Constitution, what happens if the five-year term of the President of India expires before a successor enters upon office?",
    "options": [
      "The Chief Justice of India automatically assumes office as acting President",
      "The Vice-President immediately takes over as acting President",
      "The President continues to hold office, notwithstanding the expiration of his term, until his successor enters upon his office",
      "The Prime Minister exercises presidential duties until a new President is sworn in"
    ],
    "correctAnswer": 2,
    "explanation": "Under Article 56(1)(c), the President shall, notwithstanding the expiration of his term, continue to hold office until his successor enters upon his office. This prevents an interregnum in the office of the Head of State. The Vice-President acts as President only in cases of death, resignation, removal, or illness/absence, not when the regular term expires and election delay occurs.",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "President",
    "article": "56"
  },
  {
    "id": "q-139",
    "question": "With reference to the pardoning powers under the Indian Constitution, consider the following statements:\n1. The President can grant pardon in cases where the punishment or sentence is by a Court Martial, whereas the Governor cannot.\n2. Both the President and the Governor have concurrent powers to pardon, commute, and remit a sentence of death.\n3. The pardoning power of the President under Article 72 is subject to limited judicial review.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 only",
      "1 and 3 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 1,
    "explanation": "Statement 1 is correct: Under Article 72, the President is the sole authority empowered to grant pardons in sentences inflicted by Court Martial (military courts). Governors have no such power under Article 161.\nStatement 2 is incorrect: Only the President has the power to completely 'pardon' a death sentence. While a Governor can suspend, remit, or commute a death sentence, the power of full pardon for death sentences lies exclusively with the President.\nStatement 3 is correct: The Supreme Court (in Kehar Singh and Epuru Sudhakar cases) ruled that the President's pardoning power is subject to limited judicial review on grounds of arbitrariness, mala fide, or non-application of mind.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "President",
    "article": "72",
    "examTrap": "Governor cannot 'pardon' a death sentence, though the Governor can suspend, remit, or commute it."
  },
  {
    "id": "q-140",
    "question": "Which of the following correctly describes 'Respite' under the pardoning power of the President (Article 72)?",
    "options": [
      "Substituting one form of punishment with a lighter form",
      "Reducing the period of sentence without changing its character",
      "Awarding a lesser sentence in place of one originally awarded due to a special fact (such as pregnancy or physical disability)",
      "Staying the execution of a sentence (especially of death) for a temporary period"
    ],
    "correctAnswer": 2,
    "explanation": "Definitions under Article 72:\n- Commutation: Substituting one form of punishment with a lighter form (e.g. death to life imprisonment).\n- Remission: Reducing the amount of sentence without changing its character (e.g. 10 years rigorous imprisonment to 5 years rigorous imprisonment).\n- Respite: Awarding a lesser sentence due to a special fact like pregnancy or physical disability of a convict.\n- Reprieve: A temporary stay of execution of a sentence to enable the convict to seek pardon or commutation.",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "President",
    "article": "72"
  },
  {
    "id": "q-141",
    "question": "In the landmark judgment of Epuru Sudhakar v. Government of Andhra Pradesh (2006), what did the Supreme Court hold regarding the clemency powers under Articles 72 and 161?",
    "options": [
      "Clemency decisions are political questions and completely immune from judicial review",
      "The pardoning power is subject to judicial review if exercised on grounds of caste, religion, political loyalty, or extraneous considerations",
      "The President must grant a personal oral hearing to the convict before deciding a mercy petition",
      "The advice tendered by the Council of Ministers on mercy petitions can be investigated by a trial court"
    ],
    "correctAnswer": 1,
    "explanation": "In Epuru Sudhakar (2006), the Supreme Court held that the pardoning power of the President and Governor is subject to judicial review. If the order was passed without application of mind, is mala fide, based on extraneous/irrelevant considerations (such as caste, religion, or political loyalty), or suffers from arbitrariness, the court can intervene.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "President",
    "article": "72"
  },
  {
    "id": "q-142",
    "question": "With reference to the Veto powers of the President of India, consider the following statements:\n1. The President has Suspensive Veto, Pocket Veto, and Absolute Veto, but does not possess Qualified Veto.\n2. The President can use Suspensive Veto in respect of Money Bills by returning them for reconsideration.\n3. The 24th Constitutional Amendment Act 1971 made it obligatory for the President to give assent to Constitutional Amendment Bills.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "1 and 3 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 1,
    "explanation": "Statement 1 is correct: The Indian President possesses Absolute Veto, Suspensive Veto, and Pocket Veto. 'Qualified Veto' (which can be overridden by a higher legislative majority) exists in the US Constitution, not in India.\nStatement 2 is incorrect: The President cannot return a Money Bill for reconsideration (no Suspensive Veto on Money Bills under Article 111).\nStatement 3 is correct: The 24th Amendment Act 1971 amended Article 368 to make presidential assent mandatory for Constitutional Amendment Bills ('shall give his assent').",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "President",
    "article": "111",
    "examTrap": "President cannot return a Money Bill for reconsideration; he must either give assent or withhold assent."
  },
  {
    "id": "q-143",
    "question": "In 1986, President Giani Zail Singh exercised 'Pocket Veto' in respect of which of the following controversial Bills?",
    "options": [
      "The Dowry Prohibition (Amendment) Bill",
      "The Indian Post Office (Amendment) Bill",
      "The PEPSU Appropriation Bill",
      "The Prevention of Terrorism Bill"
    ],
    "correctAnswer": 1,
    "explanation": "In 1986, President Giani Zail Singh used the pocket veto with respect to the Indian Post Office (Amendment) Bill passed by the Rajiv Gandhi government, which sought to impose restrictions on the freedom of the press and allow intercepting personal postal communications. The President kept the bill pending without taking any action.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "President",
    "article": "111"
  },
  {
    "id": "q-144",
    "question": "Prior recommendation or previous sanction of the President of India is mandatory for the introduction of which of the following bills in Parliament?\n1. A bill involving expenditure from the Consolidated Fund of India under Article 117(3)\n2. A bill for the formation of new States or alteration of areas, boundaries, or names of existing States under Article 3\n3. A bill providing for any of the matters specified in Article 110 (Money Bill)\n4. A Constitutional Amendment Bill under Article 368\nSelect the correct answer using the code given below:",
    "options": [
      "1, 2 and 3 only",
      "2, 3 and 4 only",
      "2 and 3 only",
      "1, 2, 3 and 4"
    ],
    "correctAnswer": 0,
    "explanation": "Bills requiring prior recommendation of the President include:\n- Money Bills (Article 117(1))\n- Financial Bills involving expenditure from CFI (Article 117(3))\n- Bills under Article 3 (reorganizing state boundaries, names, areas)\n- State bills imposing trade restrictions (Article 304(b))\nConstitutional Amendment Bills under Article 368 do NOT require prior recommendation of the President.",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "President",
    "article": "117"
  },
  {
    "id": "q-145",
    "question": "With reference to the election of the Vice-President of India, consider the following statements:\n1. The electoral college consists of elected as well as nominated members of both Houses of Parliament.\n2. Members of the State Legislative Assemblies do not participate in the election of the Vice-President.\n3. The election is held in accordance with the system of proportional representation by means of the single transferable vote and voting is by secret ballot.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All three statements are correct under Article 66:\n1. The Vice-Presidential electoral college consists of all members of both Houses of Parliament (both elected and nominated).\n2. Unlike the Presidential electoral college, State Legislative Assemblies have no role whatsoever in the Vice-President's election.\n3. The election is conducted via proportional representation by means of single transferable vote with secret balloting.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Vice-President",
    "article": "66"
  },
  {
    "id": "q-146",
    "question": "Consider the following statements regarding the removal of the Vice-President of India under Article 67(b):\n1. A resolution for removal can be initiated only in the Rajya Sabha and requires at least 14 days' advance notice.\n2. The resolution must be passed by the Rajya Sabha by an effective majority (majority of all the then members of the Council).\n3. The resolution must be agreed to by the Lok Sabha by a special majority of two-thirds of members present and voting.\n4. No formal grounds for the removal of the Vice-President are mentioned in the Constitution.\nWhich of the statements given above are correct?",
    "options": [
      "1, 2 and 4 only",
      "1, 2 and 3 only",
      "2, 3 and 4 only",
      "1, 3 and 4 only"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1, 2, and 4 are correct:\n- A removal resolution can be initiated only in Rajya Sabha after giving 14 days notice (Art 67(b)).\n- It must be passed by Rajya Sabha by an 'effective majority' (majority of all the then members).\n- No grounds for removal are specified in the Constitution.\nStatement 3 is incorrect: The Lok Sabha needs to agree only by a SIMPLE majority (majority of members present and voting), not a special majority.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Vice-President",
    "article": "67",
    "examTrap": "In the Lok Sabha, the removal resolution for the Vice-President requires only a simple majority, not a 2/3rd special majority."
  },
  {
    "id": "q-147",
    "question": "The Vice-President of India is the ex-officio Chairman of the Council of States (Rajya Sabha). In which capacity does he draw his regular monthly salary and allowances?",
    "options": [
      "As the Vice-President of India",
      "As the Chairman of the Rajya Sabha",
      "As a Member of Parliament",
      "As a Constitutional Advisor to the President"
    ],
    "correctAnswer": 1,
    "explanation": "Under Article 97 and the Second Schedule, the Vice-President does not receive any salary as Vice-President. He draws his regular salary in his capacity as the ex-officio Chairman of the Rajya Sabha. However, when acting as President under Article 65, he receives the salary and allowances entitled to the President.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Vice-President",
    "article": "97"
  },
  {
    "id": "q-148",
    "question": "When the Vice-President acts as President or discharges the functions of the President under Article 65 of the Constitution:\n1. He does not perform the duties of the office of Chairman of the Council of States.\n2. He is not entitled to any salary or allowance payable to the Chairman of the Council of States.\n3. The maximum period for which he can act as President due to a vacancy caused by death, resignation, or removal is 6 months.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All three statements are correct under Articles 65 and 62:\n1 & 2. Under Article 65(2) and 65(3), when acting as President, the Vice-President shall not perform duties of Chairman of Rajya Sabha and is not entitled to the salary of Chairman, but receives President's emoluments.\n3. Under Article 62(2), an election to fill a vacancy caused by death, resignation, or removal must be held within 6 months, meaning the Vice-President can act as President for a maximum period of 6 months.",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "Vice-President",
    "article": "65"
  },
  {
    "id": "q-149",
    "question": "Regarding the appointment of the Prime Minister of India under Article 75, which of the following statements is constitutionally accurate?",
    "options": [
      "The Constitution requires the President to appoint only a person who has already proved his majority on the floor of the Lok Sabha",
      "The President appoints the Prime Minister, and other Ministers are appointed by the President on the advice of the Prime Minister",
      "The Prime Minister must be a member of the Lok Sabha at the time of appointment",
      "The President's discretionary selection of the Prime Minister can never be subjected to a floor test"
    ],
    "correctAnswer": 1,
    "explanation": "Article 75(1) simply states: 'The Prime Minister shall be appointed by the President and the other Ministers shall be appointed by the President on the advice of the Prime Minister.' In 1997, the Supreme Court ruled that a person who is not a member of either House can be appointed as PM for six months. In 1980, the Delhi High Court affirmed that the President may first appoint a PM and then ask him to prove majority on the floor within a reasonable period.",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "Prime Minister",
    "article": "75"
  },
  {
    "id": "q-150",
    "question": "With reference to the constitutional duties of the Prime Minister under Article 78, consider the following statements:\n1. To communicate to the President all decisions of the Council of Ministers relating to the administration of the affairs of the Union and proposals for legislation.\n2. To furnish such information relating to the administration of the affairs of the Union and proposals for legislation as the President may call for.\n3. If the President so requires, to submit for the consideration of the Council of Ministers any matter on which a decision has been taken by a Minister but which has not been considered by the Council.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "Article 78 explicitly enumerates these three duties of the Prime Minister:\n(a) To communicate to the President all decisions of the Council of Ministers relating to the administration of Union affairs and legislative proposals.\n(b) To furnish information called for by the President.\n(c) If the President requires, to submit for the consideration of the Council of Ministers any matter on which a decision was taken by an individual minister without collective consideration.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Prime Minister",
    "article": "78"
  },
  {
    "id": "q-151",
    "question": "Who among the following Prime Ministers of India was a member of the Rajya Sabha at the time of assuming the office of Prime Minister?",
    "options": [
      "Lal Bahadur Shastri",
      "Indira Gandhi",
      "Charan Singh",
      "Morarji Desai"
    ],
    "correctAnswer": 1,
    "explanation": "Indira Gandhi was a member of the Rajya Sabha when she first became Prime Minister in 1966. Other Prime Ministers who were Rajya Sabha members when appointed include H.D. Deve Gowda (1996), I.K. Gujral (1997), and Dr. Manmohan Singh (2004 and 2009).",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Prime Minister"
  },
  {
    "id": "q-152",
    "question": "What is the constitutional effect of the resignation or sudden death of an incumbent Prime Minister?",
    "options": [
      "The senior-most Cabinet Minister automatically becomes the permanent Prime Minister",
      "The Council of Ministers continues to function under the Deputy Prime Minister",
      "The Council of Ministers automatically stands dissolved / collapses",
      "The President assumes direct legislative powers under Article 356"
    ],
    "correctAnswer": 2,
    "explanation": "The Prime Minister is the keystone of the Cabinet arch. Since the Council of Ministers is formed on the advice of the Prime Minister, the death or resignation of the Prime Minister automatically dissolves the Council of Ministers. In contrast, the resignation or death of any other Minister merely creates a vacancy which the Prime Minister may or may not fill.",
    "difficulty": "Basic",
    "examType": "General competitive exams",
    "topic": "Prime Minister"
  },
  {
    "id": "q-153",
    "question": "With reference to Article 74 of the Constitution of India, consider the following statements:\n1. There shall be a Council of Ministers with the Prime Minister at the head to aid and advise the President, who shall act in accordance with such advice.\n2. The President may require the Council of Ministers to reconsider such advice, but must act in accordance with the advice tendered after such reconsideration.\n3. The nature of advice tendered by Ministers to the President shall not be inquired into in any court.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All three statements are correct:\n- Statement 1: 42nd Amendment 1976 made the advice of the Council of Ministers explicitly binding on the President (Article 74(1)).\n- Statement 2: 44th Amendment 1978 introduced a proviso allowing the President to return advice once for reconsideration; but after reconsideration, the advice is binding.\n- Statement 3: Article 74(2) bars courts from inquiring into the question whether any, and if so what, advice was tendered by Ministers to the President (though underlying materials are reviewable as per SR Bommai case).",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Council of Ministers",
    "article": "74"
  },
  {
    "id": "q-154",
    "question": "Consider the following statements regarding the principle of 'Collective Responsibility' enshrined in Article 75(3) of the Indian Constitution:\n1. The Council of Ministers is collectively responsible to Parliament as a whole, including both the Lok Sabha and the Rajya Sabha.\n2. When a No-Confidence Motion is passed in the Lok Sabha, all ministers including those from the Rajya Sabha must resign.\n3. Cabinet solidarity requires that a minister who disagrees with a Cabinet decision must either defend it publicly or resign from the Ministry.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 1,
    "explanation": "Statement 1 is incorrect: Under Article 75(3), the Council of Ministers is collectively responsible specifically to the 'House of the People' (Lok Sabha), NOT to Parliament as a whole (Rajya Sabha cannot pass a No-Confidence Motion).\nStatement 2 is correct: A vote of no-confidence passed by Lok Sabha obliges the entire Council of Ministers to resign, including ministers who are members of Rajya Sabha.\nStatement 3 is correct: Collective responsibility implies cabinet solidarity—ministers sink or swim together. If a minister disagrees with a cabinet policy, he/she must accept joint responsibility or resign (e.g. Dr. B.R. Ambedkar resigned over the Hindu Code Bill).",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Council of Ministers",
    "article": "75",
    "examTrap": "Article 75(3) specifies responsibility to the 'House of the People' (Lok Sabha), NOT Parliament or Rajya Sabha."
  },
  {
    "id": "q-155",
    "question": "Under Article 75(2) of the Indian Constitution, the Ministers hold office during the pleasure of the President. What does 'pleasure of the President' signify in constitutional practice?",
    "options": [
      "The President can dismiss any Minister at his personal discretion without consulting the Prime Minister",
      "A Minister can be dismissed by the President only on the advice of the Prime Minister",
      "The Ministers can be removed only through an impeachment motion passed by Parliament",
      "The Ministers enjoy a fixed five-year tenure and cannot be removed before that"
    ],
    "correctAnswer": 1,
    "explanation": "Article 75(2) embodies the principle of 'individual responsibility'. Although legally ministers hold office during the pleasure of the President, the President exercises this power only on the advice of the Prime Minister. If the Prime Minister loses confidence in a minister, he can ask the minister to resign or advise the President to dismiss him.",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "Council of Ministers",
    "article": "75"
  },
  {
    "id": "q-156",
    "question": "Which Constitutional Amendment Act capped the total number of Ministers, including the Prime Minister, in the Central Council of Ministers at 15% of the total strength of the Lok Sabha?",
    "options": [
      "86th Constitutional Amendment Act, 2002",
      "91st Constitutional Amendment Act, 2003",
      "97th Constitutional Amendment Act, 2011",
      "102nd Constitutional Amendment Act, 2018"
    ],
    "correctAnswer": 1,
    "explanation": "The 91st Constitutional Amendment Act, 2003 inserted Clause (1A) in Article 75, providing that the total number of Ministers, including the Prime Minister, in the Council of Ministers shall not exceed 15 percent of the total number of members of the House of the People (Lok Sabha).",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Council of Ministers",
    "article": "75"
  },
  {
    "id": "q-157",
    "question": "With reference to the distinction between the 'Council of Ministers' and the 'Cabinet', consider the following statements:\n1. The word 'Cabinet' was not present in the original text of the Constitution and was inserted by the 44th Constitutional Amendment Act, 1978.\n2. The Cabinet is a smaller inner body consisting only of Cabinet Ministers, whereas the Council of Ministers includes Cabinet Ministers, Ministers of State, and Deputy Ministers.\n3. The Council of Ministers meets frequently as a collective body to deliberate government policy, while the Cabinet rarely meets.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statement 1 is correct: The word 'Cabinet' was inserted into the Constitution by the 44th Amendment Act 1978 under Article 352(3) defining it as the council consisting of the PM and other ministers of cabinet rank.\nStatement 2 is correct: Council of Ministers is a wider constitutional body (60-70 ministers) with three categories: Cabinet Ministers, Ministers of State (Independent/Attached), and Deputy Ministers. Cabinet is a compact core body (15-20 members).\nStatement 3 is incorrect: In practice, it is the Cabinet that meets regularly (usually weekly) to formulate policy and take decisions; the full Council of Ministers rarely meets as a deliberative body.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Council of Ministers",
    "article": "352",
    "examTrap": "The full Council of Ministers rarely meets; it is the Cabinet that meets regularly to manage executive governance."
  },
  {
    "id": "q-158",
    "question": "Which of the following bodies is an informal extra-constitutional advisory group consisting of the Prime Minister and a few influential colleagues/friends to take crucial policy decisions?",
    "options": [
      "Shadow Cabinet",
      "Kitchen Cabinet (Inner Cabinet)",
      "National Development Council",
      "Cabinet Secretariat"
    ],
    "correctAnswer": 1,
    "explanation": "The 'Kitchen Cabinet' (or Inner Cabinet) is an informal, extra-constitutional body consisting of the Prime Minister and two to four influential colleagues/friends/advisors in whom the PM places particular trust to deliberate on critical issues. The 'Shadow Cabinet' is a British institution where the opposition party forms an alternative cabinet to scrutinize counterpart government departments.",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "Council of Ministers"
  },
  {
    "id": "q-159",
    "question": "Under Article 76 of the Constitution, what is the mandatory qualification required for a person to be appointed as the Attorney General for India by the President?",
    "options": [
      "Must be an advocate of the High Court for at least 15 years",
      "Must be qualified to be appointed as a Judge of the Supreme Court",
      "Must have served as a Judge of a High Court for at least 10 years",
      "Must be a senior member of the Law Commission of India"
    ],
    "correctAnswer": 1,
    "explanation": "Article 76(1) states that the President shall appoint a person who is qualified to be appointed a Judge of the Supreme Court to be Attorney General for India (i.e. citizen of India, either 5 years as High Court judge, 10 years as High Court advocate, or an eminent jurist in President's opinion).",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Attorney General",
    "article": "76"
  },
  {
    "id": "q-160",
    "question": "Consider the following statements regarding the tenure and removal of the Attorney General for India:\n1. The Constitution of India fixes a tenure of 5 years for the Attorney General.\n2. The procedure and grounds for the removal of the Attorney General are identical to those of a Supreme Court Judge.\n3. The Attorney General holds office during the pleasure of the President and receives remuneration determined by the President.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 1,
    "explanation": "Statements 1 and 2 are incorrect: The Constitution does not fix the term of office of the Attorney General, nor does it lay down the procedure or grounds for removal. He holds office during the pleasure of the President (Article 76(4)).\nStatement 3 is correct: Article 76(4) states: 'The Attorney-General shall hold office during the pleasure of the President, and shall receive such remuneration as the President may determine.' By convention, he resigns when the government (Council of Ministers) changes or resigns.",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "Attorney General",
    "article": "76",
    "examTrap": "The Constitution does not specify any fixed term or impeachment procedure for the Attorney General; he serves purely during presidential pleasure."
  },
  {
    "id": "q-161",
    "question": "With reference to the rights and privileges of the Attorney General for India under Article 88 and Article 76, consider the following statements:\n1. He has the right of audience in all courts in the territory of India.\n2. He has the right to speak and take part in the proceedings of both Houses of Parliament or any joint sitting.\n3. He has the right to vote when taking part in the proceedings of any parliamentary committee of which he is named a member.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1 and 2 are correct: Under Article 76(3), the AG has right of audience in all courts in India. Under Article 88, he has the right to speak and participate in both Houses, joint sittings, and parliamentary committees of which he is named a member.\nStatement 3 is incorrect: Article 88 explicitly specifies that the Attorney General shall NOT by virtue of this article be entitled to vote.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Attorney General",
    "article": "88",
    "examTrap": "Under Article 88, the Attorney General can speak and participate in Parliament/committees, but has NO right to vote."
  },
  {
    "id": "q-162",
    "question": "Consider the following statements regarding the official status and limitations of the Attorney General for India:\n1. The Attorney General is not a full-time government servant and is not debarred from private legal practice.\n2. The Attorney General cannot advise or hold a brief against the Government of India.\n3. The Attorney General is an ex-officio member of the Central Cabinet.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "2 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1 and 2 are correct: The Attorney General is not a full-time government counsel, does not fall into the category of government servants, and is not debarred from private legal practice. However, he cannot advise or defend parties against the Union of India, nor defend accused persons in criminal prosecutions without government permission.\nStatement 3 is incorrect: The Attorney General is not a member of the Central Cabinet. The separate Law Minister in the Cabinet looks after legal matters at government level.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Attorney General",
    "article": "76"
  },
  {
    "id": "q-163",
    "question": "Which of the following law officers is/are mentioned in the text of the Constitution of India under Article 76?\n1. Attorney General for India\n2. Solicitor General of India\n3. Additional Solicitor General of India\nSelect the correct answer using the code given below:",
    "options": [
      "1 only",
      "1 and 2 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Only the office of the Attorney General for India is created by the Constitution under Article 76. The Solicitor General of India and Additional Solicitors General are statutory/executive posts created by Law Officers (Conditions of Service) Rules to assist the Attorney General, and are NOT mentioned in the Constitution.",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "Attorney General",
    "article": "76",
    "examTrap": "Neither Solicitor General nor Additional Solicitor General is a constitutional office; only the Attorney General is established by Article 76."
  },
  {
    "id": "q-164",
    "question": "With reference to the Ordinance-making power of the President under Article 123 of the Constitution, consider the following statements:\n1. The President can promulgate an ordinance only when both Houses of Parliament are not in session.\n2. An ordinance can be promulgated if either of the two Houses of Parliament is not in session.\n3. The President's satisfaction regarding the necessity of immediate action can be questioned in a court of law on grounds of mala fide.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 3 only",
      "2 and 3 only",
      "1 and 2 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 1,
    "explanation": "Statement 1 is incorrect and Statement 2 is correct: A law can only be enacted by Parliament when both Houses pass it. Therefore, an ordinance can be issued when BOTH Houses are not in session OR when EITHER of the two Houses is not in session.\nStatement 3 is correct: In R.C. Cooper (1970) and Krishna Kumar Singh (2017), the Supreme Court clarified that the satisfaction of the President under Article 123 is subject to judicial review if it is shown to be an abuse of power, mala fide, or colourable exercise of authority.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Ordinance Power",
    "article": "123",
    "examTrap": "An ordinance can be issued even if ONE House is in session, because a bill requires assent of both Houses."
  },
  {
    "id": "q-165",
    "question": "What is the maximum potential lifespan of an Ordinance promulgated by the President under Article 123 without being approved by Parliament?",
    "options": [
      "6 weeks",
      "6 months",
      "6 months and 6 weeks",
      "1 year"
    ],
    "correctAnswer": 2,
    "explanation": "Under Article 85, the maximum gap between two sessions of Parliament cannot exceed six months. Under Article 123(2), an ordinance ceases to operate at the expiration of six weeks from the reassembly of Parliament. Thus, the maximum potential lifespan of an ordinance without parliamentary approval is 6 months + 6 weeks.",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "Ordinance Power",
    "article": "123"
  },
  {
    "id": "q-166",
    "question": "Consider the following statements regarding the constitutional limitations on the Ordinance-making power of the President:\n1. The legislative power to issue an ordinance is co-extensive with the law-making powers of Parliament.\n2. An ordinance cannot abridge or take away any of the Fundamental Rights guaranteed in Part III of the Constitution.\n3. The President can amend the Constitution of India through an ordinance during a national emergency.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1 and 2 are correct: An ordinance has the same force and effect as an Act of Parliament (Article 123(2)) and is subject to the same constitutional limitations; therefore, it cannot violate Part III Fundamental Rights (Article 13(2) defines 'law' to include ordinances).\nStatement 3 is incorrect: An ordinance CANNOT be used to amend the Constitution under Article 368 under any circumstances.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Ordinance Power",
    "article": "123",
    "examTrap": "The Constitution can only be amended under Article 368 by Parliament; it can never be amended via an Ordinance."
  },
  {
    "id": "q-167",
    "question": "In the landmark case of D.C. Wadhwa v. State of Bihar (1987), what major constitutional principle regarding ordinances was laid down by the Supreme Court?",
    "options": [
      "Ordinances cannot be promulgated during the pendency of a General Election",
      "Repeated re-promulgation of ordinances without placing them before the legislature is a fraud on the Constitution and unconstitutional",
      "Ordinances can only deal with fiscal matters and tax collection",
      "The Governor cannot issue ordinances without prior sanction of the President"
    ],
    "correctAnswer": 1,
    "explanation": "In D.C. Wadhwa v. State of Bihar (1987), the Supreme Court held that the mechanical and repeated re-promulgation of ordinances by the executive without placing them before the legislature to be enacted into law constitutes a subversion of the democratic process and a 'fraud on the Constitution'. This was reaffirmed in Krishna Kumar Singh v. State of Bihar (2017).",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Ordinance Power",
    "article": "123"
  },
  {
    "id": "q-168",
    "question": "Which Constitutional Amendment Act discontinued the provision for nomination of two Anglo-Indian members to the Lok Sabha by the President under Article 331?",
    "options": [
      "101st Constitutional Amendment Act, 2016",
      "103rd Constitutional Amendment Act, 2019",
      "104th Constitutional Amendment Act, 2019",
      "105th Constitutional Amendment Act, 2021"
    ],
    "correctAnswer": 2,
    "explanation": "The 104th Constitutional Amendment Act, 2019 extended the reservation of seats for SCs and STs in the Lok Sabha and State Assemblies for another ten years (up to 2030), while discontinuing/ending the provision for nominated Anglo-Indian seats in Lok Sabha (Article 331) and State Assemblies (Article 333).",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Lok Sabha",
    "article": "331"
  },
  {
    "id": "q-169",
    "question": "With reference to the delimitation of parliamentary constituencies in India, consider the following statements:\n1. The 42nd Constitutional Amendment Act 1976 froze the total number of seats in the Lok Sabha based on the 1971 census.\n2. The 84th Constitutional Amendment Act 2001 extended the freeze on the total number of seats allocated to each State until the first census after 2026.\n3. The 87th Constitutional Amendment Act 2003 permitted the rationalization and delimitation of territorial constituencies within states on the basis of the 2001 census figures without altering the state-wise total seats.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All three statements are correct:\n- 42nd Amendment (1976) froze total seats allocated to States at 1971 census levels until year 2000.\n- 84th Amendment (2001) extended this embargo for another 25 years (up to year 2026).\n- 87th Amendment (2003) provided for delimitation of intra-state constituencies based on the 2001 Census without changing the total number of seats allocated to each state.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Lok Sabha",
    "article": "81"
  },
  {
    "id": "q-170",
    "question": "Consider the following statements regarding the office of the Speaker of the Lok Sabha under Article 93 and 94:\n1. The Speaker is elected by the Lok Sabha from amongst its members on a date fixed by the President.\n2. The Speaker remains in office until immediately before the first meeting of the new Lok Sabha after dissolution.\n3. If the Speaker intends to resign, the letter of resignation must be addressed to the President of India.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "2 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1 and 2 are correct: The Speaker is elected by Lok Sabha members from amongst themselves, and the election date is fixed by the President. Under Article 94, whenever the Lok Sabha is dissolved, the Speaker does not vacate his office until immediately before the first meeting of the new Lok Sabha.\nStatement 3 is incorrect: Under Article 94(b), the Speaker resigns by writing under his hand addressed to the Deputy Speaker (NOT to the President).",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Lok Sabha",
    "article": "94",
    "examTrap": "The Speaker addresses his resignation letter to the Deputy Speaker, NOT to the President."
  },
  {
    "id": "q-171",
    "question": "Which of the following special constitutional powers and duties belong exclusively to the Speaker of the Lok Sabha?\n1. Endorsing and certifying a bill as a Money Bill under Article 110\n2. Presiding over a Joint Sitting of both Houses of Parliament under Article 118\n3. Exercising a casting vote under Article 100 in the first instance on any motion\n4. Deciding questions of disqualification of members of Lok Sabha arising on grounds of defection under the Tenth Schedule\nSelect the correct answer using the code given below:",
    "options": [
      "1, 2 and 4 only",
      "1 and 2 only",
      "2, 3 and 4 only",
      "1, 2, 3 and 4"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1, 2, and 4 are correct powers of the Speaker:\n- Speaker's decision on whether a bill is a Money Bill is final (Article 110(3)).\n- Speaker presides over joint sittings (Article 118(4)).\n- Speaker decides 10th Schedule disqualifications.\nStatement 3 is incorrect: Under Article 100(1), the Speaker does NOT vote in the first instance; he exercises only a casting vote in the case of an equality of votes (tie).",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Lok Sabha",
    "article": "100",
    "examTrap": "The Speaker does not vote in the first instance; he votes only to resolve a tie (casting vote)."
  },
  {
    "id": "q-172",
    "question": "Who appoints the Pro Tem Speaker of the Lok Sabha, and what is the primary constitutional duty of this office?",
    "options": [
      "The outgoing Speaker; to supervise the election of the Prime Minister",
      "The President; to administer the oath of office to newly elected MPs and enable election of the regular Speaker",
      "The Chief Justice of India; to inspect the credentials of newly elected members",
      "The Secretary-General of Lok Sabha; to conduct the first session of Parliament"
    ],
    "correctAnswer": 1,
    "explanation": "As the office of the Speaker becomes vacant immediately before the first meeting of the newly-elected Lok Sabha, the President appoints a senior member of the Lok Sabha as the Speaker Pro Tem (Article 95(1)). The President administers the oath to him. The Speaker Pro Tem administers oaths to all other new MPs and presides over the election of the permanent Speaker.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Lok Sabha",
    "article": "95"
  },
  {
    "id": "q-173",
    "question": "With reference to the effects of the dissolution of the Lok Sabha on pending bills under Article 107 of the Indian Constitution, consider the following statements:\n1. A bill pending in the Lok Sabha lapses.\n2. A bill passed by the Lok Sabha but pending in the Rajya Sabha lapses.\n3. A bill originating and pending in the Rajya Sabha, which has not been passed by the Lok Sabha, does not lapse.\n4. A bill returned by the President for reconsideration of the Houses lapses upon dissolution of the Lok Sabha.\nWhich of the statements given above are correct?",
    "options": [
      "1, 2 and 3 only",
      "1, 2 and 4 only",
      "2, 3 and 4 only",
      "1, 3 and 4 only"
    ],
    "correctAnswer": 0,
    "explanation": "Rules regarding lapsing of bills on dissolution of Lok Sabha (Article 107 & 108):\n- Statement 1 is correct: Bills pending in Lok Sabha lapse.\n- Statement 2 is correct: Bills passed by Lok Sabha and pending in Rajya Sabha lapse.\n- Statement 3 is correct: Bills originating and pending in Rajya Sabha (not passed by LS) DO NOT lapse.\n- Statement 4 is incorrect: A bill returned by the President for reconsideration does NOT lapse; if the bill is passed again by both Houses (or after new LS is constituted), the President must give assent.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Lok Sabha",
    "article": "107",
    "examTrap": "A bill returned by the President for reconsideration does NOT lapse upon the dissolution of Lok Sabha."
  },
  {
    "id": "q-174",
    "question": "Which of the following statements regarding the 'Leader of Opposition' in the Lok Sabha is NOT correct?",
    "options": [
      "The post of Leader of the Opposition was accorded statutory recognition under the Salary and Allowances of Leaders of Opposition in Parliament Act, 1977",
      "The Leader of Opposition enjoys the salary, allowances, and rank equivalent to a Cabinet Minister",
      "The Constitution of India explicitly mandates that the leader of the largest opposition party must have at least 10% seats of the House to be recognized as Leader of Opposition",
      "The 10% quorum rule for recognizing the Leader of Opposition is based on the Speaker's Directions/rules rather than a specific constitutional article"
    ],
    "correctAnswer": 2,
    "explanation": "Option C is NOT correct: The 10% threshold (55 seats in Lok Sabha) is derived from parliamentary conventions/Speaker's Directions and the Salary and Allowances of Leaders of Opposition in Parliament Act, 1977, but it is NOT explicitly mentioned anywhere in the Constitution of India.",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "Lok Sabha"
  },
  {
    "id": "q-175",
    "question": "According to Article 80 of the Constitution, the President of India nominates 12 members to the Council of States (Rajya Sabha) having special knowledge or practical experience in respect of which of the following four fields?",
    "options": [
      "Literature, Science, Art, and Social Service",
      "Literature, Science, Cooperative Societies, and Social Service",
      "Literature, Art, Education, and Science",
      "Art, Science, Economics, and Public Administration"
    ],
    "correctAnswer": 0,
    "explanation": "Under Article 80(3), the 12 nominated members of Rajya Sabha must have special knowledge or practical experience in: Literature, Science, Art, and Social Service. Note: 'Cooperative movement' is a ground for nomination to State Legislative Councils (Article 171), but NOT for the Rajya Sabha.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Rajya Sabha",
    "article": "80",
    "examTrap": "Cooperative movement is included for Governor's nominations to State Legislative Councils under Article 171, but NOT for Rajya Sabha under Article 80."
  },
  {
    "id": "q-176",
    "question": "Compare the federal character of the Indian Council of States (Rajya Sabha) with the United States Senate:\n1. Unlike the US Senate where every State has equal representation (2 senators each), representation of Indian States in the Rajya Sabha is proportional to their population.\n2. The allocation of seats to the States and Union Territories in the Rajya Sabha is contained in the Fourth Schedule of the Constitution.\n3. The election of representatives of States to the Rajya Sabha is conducted by open ballot rather than secret ballot.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All three statements are correct:\n1. In the US Senate, every state gets 2 seats regardless of population (equal federal principle). In India, representation is based on population (e.g. UP has 31 seats, while Sikkim has 1).\n2. The Fourth Schedule details the state-wise allocation of seats in Rajya Sabha.\n3. In 2003, Parliament amended the Representation of the People Act 1951 to introduce 'open ballot' system for Rajya Sabha elections to prevent cross-voting and horse-trading (upheld by Supreme Court in Kuldip Nayar v. Union of India, 2006).",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Rajya Sabha",
    "article": "80"
  },
  {
    "id": "q-177",
    "question": "Which of the following special exclusive powers are vested solely in the Rajya Sabha under the Constitution of India?\n1. Authorizing Parliament to make laws on a matter enumerated in the State List in the national interest under Article 249\n2. Authorizing Parliament to create one or more new All-India Services common to the Union and the States under Article 312\n3. Passing a resolution to initiate the removal of the Vice-President under Article 67\n4. Introducing and passing a Money Bill under Article 109\nSelect the correct answer using the code given below:",
    "options": [
      "1, 2 and 3 only",
      "1 and 2 only",
      "2, 3 and 4 only",
      "1, 2, 3 and 4"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1, 2, and 3 are exclusive special powers of Rajya Sabha:\n- Article 249: RS can pass a resolution by 2/3rd majority of members present and voting enabling Parliament to legislate on State List.\n- Article 312: RS can pass a resolution by 2/3rd majority to create new All-India Services.\n- Article 67: Removal of the Vice-President can be initiated ONLY in the Rajya Sabha.\nStatement 4 is incorrect: Money Bills can ONLY be introduced in the Lok Sabha (Article 109); the Rajya Sabha has very limited power over money bills (cannot amend or reject, can only suggest recommendations within 14 days).",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Rajya Sabha",
    "article": "249",
    "examTrap": "Money Bills can NEVER be introduced in the Rajya Sabha; they can only be introduced in Lok Sabha on President's recommendation."
  },
  {
    "id": "q-178",
    "question": "Under Article 110 of the Constitution of India, which of the following matters is NOT deemed to be included in the definition of a 'Money Bill'?",
    "options": [
      "The imposition, abolition, remission, alteration, or regulation of any tax",
      "The custody of the Consolidated Fund or the Contingency Fund of India, the payment of moneys into or the withdrawal of moneys from any such fund",
      "The imposition of fines or other pecuniary penalties, or the demand or payment of fees for licences or fees for services rendered",
      "The declaration of any expenditure to be expenditure charged on the Consolidated Fund of India"
    ],
    "correctAnswer": 2,
    "explanation": "Article 110(2) of the Constitution explicitly states that a bill shall NOT be deemed to be a Money Bill by reason only that it provides for the imposition of fines or other pecuniary penalties, or for the demand or payment of fees for licences or fees for services rendered, or by reason that it provides for the imposition, abolition, remission, alteration, or regulation of any tax by any local authority or body for local purposes.",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "Money Bill",
    "article": "110",
    "examTrap": "A common trap is assuming that any bill dealing with financial penalties, municipal taxes, or licence fees qualifies as a Money Bill."
  },
  {
    "id": "q-179",
    "question": "Consider the following statements regarding Financial Bills under Article 117 of the Constitution:\n1. A Financial Bill (I) under Article 117(1) can only be introduced in the Lok Sabha on the recommendation of the President.\n2. A Financial Bill (II) under Article 117(3) cannot be passed by either House of Parliament unless the President has recommended to that House the consideration of the bill.\n3. Both Financial Bill (I) and Financial Bill (II) require the prior recommendation of the President before introduction in Parliament.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1 and 2 are correct. Financial Bill (I) contains matters specified in Article 110 plus other ordinary legislative matters; it requires prior recommendation of the President and must originate in Lok Sabha. Financial Bill (II) contains provisions involving expenditure from the Consolidated Fund of India but does not contain any of the matters mentioned in Article 110. It does NOT require prior recommendation for introduction and can be introduced in either House. However, under Article 117(3), it cannot be passed by either House unless the President recommends its consideration. Hence, Statement 3 is incorrect.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Money Bill vs Financial Bills",
    "article": "117",
    "examTrap": "Financial Bill (II) does NOT require prior presidential recommendation for introduction; the recommendation is required only at the stage of consideration/passing."
  },
  {
    "id": "q-180",
    "question": "Consider the following statements regarding the certification and passage of a Money Bill:\n1. The decision of the Speaker of the Lok Sabha on whether a bill is a Money Bill or not is final.\n2. The Speaker endorses a certificate that a bill is a Money Bill when it is transmitted to the Rajya Sabha and when presented to the President for assent.\n3. The President can return a Money Bill to the Parliament for reconsideration with recommendations.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1 and 2 are correct under Article 110(3) and 110(4). The Speaker's decision on whether a bill is a Money Bill is final, and the Speaker signs a certificate to that effect upon transmission to Rajya Sabha and submission to the President. Statement 3 is incorrect because under Article 111, the President can either give assent or withhold assent to a Money Bill, but CANNOT return a Money Bill for reconsideration.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Money Bill",
    "article": "110",
    "examTrap": "Candidates often confuse the President's power to return ordinary bills with money bills. The President cannot return a Money Bill."
  },
  {
    "id": "q-181",
    "question": "Which of the following statements is correct regarding the powers of the Rajya Sabha with respect to a Money Bill?",
    "options": [
      "Rajya Sabha can amend or reject a Money Bill.",
      "Rajya Sabha must return the Money Bill to Lok Sabha within 14 days with or without recommendations.",
      "Lok Sabha is bound by the Constitution to accept all recommendations made by the Rajya Sabha.",
      "If Rajya Sabha rejects the bill, a Joint Sitting is automatically summoned by the President."
    ],
    "correctAnswer": 1,
    "explanation": "Under Article 109, the Rajya Sabha has limited powers regarding Money Bills. It cannot reject or amend a Money Bill; it can only make recommendations. It must return the bill within 14 days. The Lok Sabha may accept or reject all or any of the recommendations. If not returned within 14 days, the bill is deemed to have been passed by both Houses in the form it was passed by Lok Sabha. There is no provision for a joint sitting for a Money Bill.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Money Bill",
    "article": "109",
    "examTrap": "Remember that Rajya Sabha cannot amend or reject a Money Bill; it can only suggest recommendations."
  },
  {
    "id": "q-182",
    "question": "Consider the following statements regarding the legislative procedure for an Ordinary Bill vs a Money Bill:\n1. An Ordinary Bill can be introduced in either House of Parliament, whereas a Money Bill can only be introduced in the Lok Sabha.\n2. A deadlock between the two Houses on an Ordinary Bill can be resolved through a Joint Sitting, but no Joint Sitting is provided for a Money Bill.\n3. An Ordinary Bill requires the prior recommendation of the President before its introduction in all cases.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1 and 2 are correct. An Ordinary Bill can originate in either House and is eligible for a Joint Sitting (Article 108) in case of deadlock. A Money Bill can only originate in Lok Sabha and has no provision for a Joint Sitting. Statement 3 is incorrect because ordinary bills generally do not require prior presidential recommendation, except specific categories like bills altering state boundaries (Article 3) or affecting taxation in which states are interested (Article 274).",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Ordinary Bill",
    "article": "107",
    "examTrap": "Do not assume that all bills require prior presidential recommendation; most ordinary bills can be introduced without prior sanction."
  },
  {
    "id": "q-183",
    "question": "When a Money Bill is presented to the President of India for assent under Article 111, the President:",
    "options": [
      "May give assent, withhold assent, or return the bill for reconsideration",
      "May either give assent or withhold assent, but cannot return the bill for reconsideration",
      "Is bound by the Constitution to give assent without any constitutional power to withhold it",
      "Must refer the bill to the Supreme Court of India for advisory opinion"
    ],
    "correctAnswer": 1,
    "explanation": "Under Article 111 of the Constitution, when a Money Bill is presented to the President, the President may declare either that he assents to the Bill, or that he withholds assent therefrom. The President cannot return a Money Bill to the Houses for reconsideration. In practice, the President rarely withholds assent because a Money Bill is introduced with the President's prior recommendation.",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "Money Bill",
    "article": "111",
    "examTrap": "Although the President normally assents to Money Bills, the constitutional option to withhold assent theoretically exists, whereas returning the bill is strictly prohibited."
  },
  {
    "id": "q-184",
    "question": "A Joint Sitting of both Houses of Parliament under Article 108 of the Constitution CANNOT be convened in which of the following cases?\n1. Disagreement on an Ordinary Bill\n2. Disagreement on a Money Bill\n3. Disagreement on a Constitution Amendment Bill\n4. Disagreement on a Financial Bill (Category I)\nSelect the correct answer using the code below:",
    "options": [
      "2 and 3 only",
      "1 and 4 only",
      "2, 3 and 4 only",
      "3 only"
    ],
    "correctAnswer": 0,
    "explanation": "A Joint Sitting (Article 108) is available for Ordinary Bills and Financial Bills (Category I and II). It is NOT available for:\n1. Money Bills (Article 109 gives Lok Sabha overriding power; RS has only 14 days).\n2. Constitution Amendment Bills (Article 368 requires each House to pass the bill separately by a special majority).",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "Joint Sitting",
    "article": "108",
    "examTrap": "Financial Bills (Categories I and II) CAN have a joint sitting; only Money Bills and Constitutional Amendment Bills are excluded."
  },
  {
    "id": "q-185",
    "question": "Who presides over a Joint Sitting of the two Houses of Parliament in the absence of both the Speaker and the Deputy Speaker of the Lok Sabha?",
    "options": [
      "The Chairman of the Rajya Sabha",
      "The Deputy Chairman of the Rajya Sabha",
      "A senior-most member of the Lok Sabha nominated by the President",
      "The Minister of Parliamentary Affairs"
    ],
    "correctAnswer": 1,
    "explanation": "Under the Joint Sitting Rules framed under Article 118(3), the Speaker of the Lok Sabha presides. In the Speaker's absence, the Deputy Speaker presides. If both are absent, the Deputy Chairman of the Rajya Sabha presides. The Chairman of the Rajya Sabha (the Vice-President of India) NEVER presides over a joint sitting because he/she is not a member of either House of Parliament.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Joint Sitting",
    "article": "118",
    "examTrap": "The Chairman of Rajya Sabha (Vice-President) can NEVER preside over a Joint Sitting because he is not a member of Parliament."
  },
  {
    "id": "q-186",
    "question": "With reference to the Joint Sitting of Parliament under Article 108 of the Constitution, consider the following statements:\n1. If the Lok Sabha is dissolved after the President has notified his intention to summon a joint sitting, the joint sitting does not lapse and can still take place.\n2. At a joint sitting, the bill is passed by a simple majority of the total number of members of both Houses present and voting.\n3. New amendments to the bill cannot be proposed at a joint sitting other than those necessitated by the delay in passage or agreed upon by both Houses.\nWhich of the statements given above are correct?",
    "options": [
      "1, 2 and 3",
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only"
    ],
    "correctAnswer": 0,
    "explanation": "All three statements are correct under Article 108. Statement 1 is true under Article 108(5): dissolution of Lok Sabha does not prevent holding the joint sitting if the presidential notification was issued prior to dissolution. Statement 2 is true: decisions are taken by a simple majority of members present and voting. Statement 3 is true under Article 108(4): no new amendments can be moved other than those relevant to the matters in disagreement or caused by the passage of time.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Joint Sitting",
    "article": "108",
    "examTrap": "Statement 1 is a classic UPSC trap: dissolution does NOT lapse a joint sitting if the President already notified the intention before dissolution."
  },
  {
    "id": "q-187",
    "question": "In the history of the Indian Parliament, Joint Sittings have been convened to pass bills on three occasions. Which of the following bills was NOT passed in a Joint Sitting?",
    "options": [
      "Dowry Prohibition Bill, 1960 (held in 1961)",
      "Banking Service Commission (Repeal) Bill, 1977 (held in 1978)",
      "Prevention of Terrorism Bill, 2002 (POTA)",
      "National Investigation Agency Bill, 2008"
    ],
    "correctAnswer": 3,
    "explanation": "Joint sittings have been held only three times to pass bills in Indian parliamentary history:\n1. Dowry Prohibition Bill, 1961\n2. Banking Service Commission (Repeal) Bill, 1978\n3. Prevention of Terrorism Bill (POTA), 2002.\nThe National Investigation Agency Bill, 2008 was passed by both Houses separately without needing a joint sitting.",
    "difficulty": "Exam",
    "examType": "SSC-style",
    "topic": "Joint Sitting",
    "article": "108",
    "examTrap": "Only 3 bills have ever been passed in joint sittings: Dowry (1961), Banking Service Commission Repeal (1978), and POTA (2002)."
  },
  {
    "id": "q-188",
    "question": "Consider the following statements regarding the procedure of a Joint Sitting of Parliament:\n1. The quorum to constitute a joint sitting is one-tenth of the total number of members of both Houses.\n2. The joint sitting is governed by the Rules of Procedure of Lok Sabha and not of Rajya Sabha.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 only",
      "2 only",
      "Both 1 and 2",
      "Neither 1 nor 2"
    ],
    "correctAnswer": 2,
    "explanation": "Both statements are correct. Under Article 118(3), the President, after consultation with the Chairman of Rajya Sabha and Speaker of Lok Sabha, makes rules for joint sittings. Under these rules, the quorum is one-tenth of the total aggregate membership of both Houses, and the proceedings are regulated by the Rules of Procedure of the Lok Sabha.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Joint Sitting",
    "article": "118",
    "examTrap": "Remember that Lok Sabha rules govern the joint sitting, reflecting the dominance of Lok Sabha in numbers and procedures."
  },
  {
    "id": "q-189",
    "question": "With reference to the Public Accounts Committee (PAC), consider the following statements:\n1. It consists of 22 members (15 from Lok Sabha and 7 from Rajya Sabha) elected annually by proportional representation.\n2. A Minister cannot be elected as a member of the Public Accounts Committee.\n3. The Chairman of the Committee is appointed by the President of India from amongst the members of the opposition party.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1 and 2 are correct. The PAC has 22 members (15 LS + 7 RS) elected annually via PR by STV. A minister is not eligible to be elected. Statement 3 is incorrect because the Chairman of PAC is appointed by the Speaker of the Lok Sabha (not the President). By convention established in 1967, the Chairman is selected from the opposition.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Parliamentary Committees",
    "examTrap": "The Speaker of Lok Sabha appoints the Chairman of the PAC, NOT the President of India."
  },
  {
    "id": "q-190",
    "question": "Which of the following statements is/are correct regarding the Estimates Committee of Parliament?\n1. It is the largest parliamentary committee, consisting of 30 members.\n2. All 30 members are drawn exclusively from the Lok Sabha; Rajya Sabha has no representation.\n3. A Minister can be nominated to the committee by the Speaker.\nSelect the correct answer using the code below:",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1 and 2 are correct. The Estimates Committee originated from the standing financial committee set up in 1921 and was established in post-independence India in 1950 on the recommendation of John Mathai. It consists of 30 members, all from the Lok Sabha. Statement 3 is incorrect because a Minister CANNOT be elected or nominated as a member of the Estimates Committee (or PAC/COPU).",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Parliamentary Committees",
    "examTrap": "Ministers are strictly barred from membership in all three financial committees (PAC, Estimates, and COPU)."
  },
  {
    "id": "q-191",
    "question": "Consider the following statements regarding the Committee on Public Undertakings (COPU):\n1. It was created in 1964 on the recommendation of the Krishna Menon Committee.\n2. It consists of 15 members from Lok Sabha and 7 members from Rajya Sabha.\n3. The Chairman of the Committee can be appointed from either the Lok Sabha or the Rajya Sabha.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1 and 2 are correct. COPU was created in 1964 on the recommendation of the Krishna Menon Committee. It has 22 members (15 from Lok Sabha and 7 from Rajya Sabha). Statement 3 is incorrect because the Chairman of COPU is appointed by the Speaker of Lok Sabha strictly from amongst the members who are drawn from the Lok Sabha. A Rajya Sabha member cannot become the Chairman of COPU.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Parliamentary Committees",
    "examTrap": "Even though Rajya Sabha members serve on COPU, the Chairman must be a Lok Sabha member appointed by the Speaker."
  },
  {
    "id": "q-192",
    "question": "Consider the following statements about Department-related Parliamentary Standing Committees (DRSCs):\n1. There are currently 24 Departmentally Related Standing Committees covering all Union ministries and departments.\n2. Each DRSC consists of 31 members (21 from Lok Sabha and 10 from Rajya Sabha).\n3. A DRSC itself votes on cut motions and demands for grants before reporting to the House.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1 and 2 are correct. There are 24 DRSCs (16 working under Lok Sabha Speaker and 8 under Rajya Sabha Chairman). Each committee has 31 members (21 LS + 10 RS nominated by Speaker and Chairman respectively). Statement 3 is incorrect because DRSCs examine Demands for Grants in detail and submit advisory reports to the Houses, but they do NOT vote on demands or cut motions; voting happens strictly on the floor of the Lok Sabha.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Parliamentary Committees",
    "examTrap": "DRSCs cannot suggest cut motions or vote on demands; their reports are purely advisory and voting happens in the Lok Sabha."
  },
  {
    "id": "q-193",
    "question": "In the Lok Sabha, the Business Advisory Committee, the Rules Committee, and the General Purposes Committee are headed ex-officio by:",
    "options": [
      "The Prime Minister",
      "The Speaker of the Lok Sabha",
      "The Minister of Parliamentary Affairs",
      "The Leader of the Opposition"
    ],
    "correctAnswer": 1,
    "explanation": "The Speaker of the Lok Sabha acts as the ex-officio Chairman of three important parliamentary committees in the Lok Sabha: the Business Advisory Committee, the Rules Committee, and the General Purposes Committee.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Parliamentary Committees",
    "examTrap": "Candidates often guess the Minister of Parliamentary Affairs for the Business Advisory Committee, but it is chaired ex-officio by the Speaker."
  },
  {
    "id": "q-194",
    "question": "Which of the following is NOT a necessary constitutional/procedural characteristic of a 'Parliamentary Committee' in India?",
    "options": [
      "It is appointed or elected by the House or nominated by the Speaker/Chairman",
      "It works under the direction of the Speaker of Lok Sabha or Chairman of Rajya Sabha",
      "It presents its report to the House or to the Speaker/Chairman",
      "It is constituted and administered by the concerned executive Ministry of the Government"
    ],
    "correctAnswer": 3,
    "explanation": "To qualify as a Parliamentary Committee, a committee must: (1) be appointed/elected by the House or nominated by the Speaker/Chairman, (2) work under the direction of the Speaker/Chairman, (3) present its report to the House or Speaker/Chairman, and (4) have a secretariat provided by the Lok Sabha/Rajya Sabha Secretariat. Committees constituted by executive ministries (like Consultative Committees constituted by the Ministry of Parliamentary Affairs) are NOT parliamentary committees in the procedural sense.",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "Parliamentary Committees",
    "examTrap": "Consultative committees attached to ministries are NOT parliamentary committees; their secretariats are provided by executive ministries."
  },
  {
    "id": "q-195",
    "question": "Which constitutional dignitary is famously described as the 'friend, philosopher, and guide' of the Public Accounts Committee (PAC)?",
    "options": [
      "The Attorney General of India",
      "The Comptroller and Auditor General of India (CAG)",
      "The Chairman of the Finance Commission",
      "The Chief Election Commissioner"
    ],
    "correctAnswer": 1,
    "explanation": "The Comptroller and Auditor General of India (CAG) is described as the 'friend, philosopher, and guide' of the Public Accounts Committee. The PAC examines the audit reports of the CAG relating to the appropriation accounts and finance accounts of the Union Government.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Parliamentary Committees",
    "article": "148",
    "examTrap": "CAG assists the PAC during its hearings, interpreting complex technical and financial nuances of audit reports."
  },
  {
    "id": "q-196",
    "question": "Under Article 112 of the Constitution of India, the Union Budget is officially designated as the:",
    "options": [
      "Annual Financial Statement",
      "National Statement of Income and Expenditure",
      "Consolidated Budget of the Union",
      "Union Fiscal and Capital Estimates"
    ],
    "correctAnswer": 0,
    "explanation": "The term 'Budget' is not used anywhere in the Constitution of India. Under Article 112, it is referred to as the 'Annual Financial Statement', which is a statement of the estimated receipts and expenditure of the Government of India for that year.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Budget",
    "article": "112",
    "examTrap": "The word 'Budget' is nowhere mentioned in the text of the Constitution of India."
  },
  {
    "id": "q-197",
    "question": "Consider the following statements regarding 'Expenditure Charged upon the Consolidated Fund of India':\n1. It can be discussed in both Houses of Parliament.\n2. It is not submitted to the vote of Parliament.\n3. The emoluments and allowances of the President and salaries and pensions of Supreme Court judges are charged expenditures.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All three statements are correct under Article 112(3) and 113(1). Expenditure charged on the Consolidated Fund of India is non-votable by Parliament, but it can be discussed by both Houses. It includes emoluments of the President, salaries/pensions of SC judges, pensions of HC judges, debt charges of the Government of India, and salaries/allowances of the Speaker, Deputy Speaker, Chairman, Deputy Chairman, and CAG.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Budget",
    "article": "112",
    "examTrap": "Charged expenditure CAN be discussed in Parliament, but it CANNOT be voted upon."
  },
  {
    "id": "q-198",
    "question": "Match the types of Cut Motions with their specific procedural meanings:\n1. Policy Cut Motion - (A) Reduces the amount of demand by a specified lump sum amount\n2. Economy Cut Motion - (B) Reduces the amount of demand by ₹100 to ventilate a specific grievance\n3. Token Cut Motion - (C) Reduces the amount of the demand to ₹1 to represent disapproval of policy\nWhich of the following is the correct matching?",
    "options": [
      "1-C, 2-A, 3-B",
      "1-A, 2-C, 3-B",
      "1-B, 2-A, 3-C",
      "1-C, 2-B, 3-A"
    ],
    "correctAnswer": 0,
    "explanation": "The three types of cut motions are:\n1. Disapproval of Policy Cut (Policy Cut): Demands reduced to ₹1, showing complete disapproval of policy (1-C).\n2. Economy Cut: Demands reduced by a specified amount to affect economy in expenditure (2-A).\n3. Token Cut: Demands reduced by ₹100 to ventilate a specific grievance within the sphere of responsibility of the Government (3-B).",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "Budget",
    "article": "113",
    "examTrap": "Policy cut reduces to ₹1, Token cut reduces by ₹100, and Economy cut reduces by a specific specified amount."
  },
  {
    "id": "q-199",
    "question": "With reference to the passage of the Union Budget in Parliament, consider the following statements:\n1. Under Article 114, no money can be withdrawn from the Consolidated Fund of India except under appropriation made by law.\n2. The Finance Bill gives legal effect to the government's taxation proposals and must be enacted within 75 days under the Provisional Collection of Taxes Act.\n3. An amendment can be proposed to the Appropriation Bill that alters the destination or amount of any grant voted by Lok Sabha.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1 and 2 are correct. Article 114 mandates that no money shall be withdrawn from the CFI except under Appropriation Act. The Finance Bill enacts tax proposals. Statement 3 is incorrect because under Article 114(2), NO amendment can be proposed to an Appropriation Bill in either House that has the effect of varying the amount or altering the destination of any grant or varying the amount of any charged expenditure.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Budget",
    "article": "114",
    "examTrap": "Article 114(2) strictly bars any amendment to an Appropriation Bill that alters the amount or destination of any grant."
  },
  {
    "id": "q-200",
    "question": "In the context of the parliamentary budget procedure, what does the term 'Guillotine' signify?",
    "options": [
      "Adjournment sine die of the House due to lack of quorum",
      "Putting all remaining and undiscussed Demands for Grants to vote together on the last allotted day",
      "Rejection of the Finance Bill leading to the mandatory resignation of the Prime Minister",
      "The President's emergency power to curtail budgetary allocations during financial distress"
    ],
    "correctAnswer": 1,
    "explanation": "In parliamentary practice, 'Guillotine' refers to the procedure where on the last day of the days allotted for the discussion on Demands for Grants, the Speaker puts all outstanding demands to vote immediately, whether they have been discussed by the House or not, in order to conclude the voting within the scheduled timeframe.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Budget",
    "examTrap": "Guillotine is not a punitive measure; it is a time-management device to pass all outstanding demands for grants."
  },
  {
    "id": "q-201",
    "question": "Consider the following statements regarding special financial grants in Parliament:\n1. A 'Vote on Account' enables the government to incur expenditure for a part of the financial year pending the passage of the Appropriation Bill.\n2. While an Interim Budget presents full estimates of both revenue receipts and expenditures, a Vote on Account deals strictly with expenditures.\n3. An 'Excess Grant' must be voted by the Lok Sabha before the financial year begins.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1 and 2 are correct under Article 116. A Vote on Account is an advance grant for expenditure for a few months (usually 2 months). An Interim Budget includes both revenue and expenditure. Statement 3 is incorrect because an Excess Grant (Article 115) is presented AFTER the financial year has ended when money spent on a service exceeds the amount granted, and it must be examined and approved by the Public Accounts Committee before being voted in Lok Sabha.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Budget",
    "article": "116",
    "examTrap": "Excess grant is voted AFTER the financial year ends and after PAC scrutiny, not before the year begins."
  },
  {
    "id": "q-202",
    "question": "Under Article 105 of the Constitution of India, which of the following is an INDIVIDUAL privilege enjoyed by a Member of Parliament?",
    "options": [
      "Right to publish debates and proceedings and restrain others from publishing them",
      "Right to exclude strangers from secret sittings of the House",
      "Freedom from arrest in civil cases during the session of Parliament and 40 days before and 40 days after the session",
      "Right of the House to regulate its internal affairs and judge the validity of its own proceedings"
    ],
    "correctAnswer": 2,
    "explanation": "Parliamentary privileges are divided into collective and individual privileges. Freedom from arrest in civil cases during the session and 40 days before and after is an individual privilege of an MP under Section 135A of CPC and constitutional conventions. Rights to exclude strangers, publish proceedings, and regulate internal affairs are collective privileges of the House as a whole.",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "Parliamentary Privileges",
    "article": "105",
    "examTrap": "Distinguish between individual privileges (belonging to each MP) and collective privileges (belonging to the House as an institution)."
  },
  {
    "id": "q-203",
    "question": "With reference to Parliamentary Privileges under Article 105 of the Constitution, consider the following statements:\n1. No member of Parliament shall be liable to any proceedings in any court in respect of anything said or any vote given by him in Parliament or any committee thereof.\n2. The freedom of speech inside Parliament is completely absolute and is not subject to any constitutional provisions or parliamentary rules.\n3. The privilege of freedom from arrest extends to criminal charges and preventive detention.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 only",
      "1 and 2 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statement 1 is correct under Article 105(2). Statement 2 is incorrect because freedom of speech in Parliament is subject to the provisions of the Constitution (e.g. Article 121 prohibits discussing conduct of SC/HC judges except during removal) and to the rules and standing orders of Parliament. Statement 3 is incorrect because freedom from arrest is available ONLY in civil cases, and does NOT extend to criminal offences or preventive detention.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Parliamentary Privileges",
    "article": "105",
    "examTrap": "Privilege of freedom from arrest applies ONLY to civil cases, NOT to criminal cases or preventive detention."
  },
  {
    "id": "q-204",
    "question": "Consider the following statements regarding 'Breach of Privilege' and 'Contempt of the House':\n1. A Breach of Privilege occurs when any specific individual or collective privilege of the House or its members is disregarded or attacked.\n2. Contempt of the House is wider in scope than breach of privilege and includes any act that obstructs the House in the performance of its functions, even if no specific privilege is violated.\n3. A non-member cannot be punished by Parliament for contempt of the House.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1 and 2 are correct. Every breach of privilege is a contempt of the House, but every contempt is not necessarily a breach of a specific privilege. Contempt covers any act that offends the dignity of the House or obstructs its functioning. Statement 3 is incorrect because Parliament has the constitutional power to admonish, reprimand, or imprison non-members (citizens, journalists, bureaucrats) for contempt of the House.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Parliamentary Privileges",
    "article": "105",
    "examTrap": "Parliament can punish both members and non-members for contempt of the House."
  },
  {
    "id": "q-205",
    "question": "Which of the following statements is correct regarding the codification of parliamentary privileges in India?",
    "options": [
      "Parliament has codified all privileges comprehensively under a special statute passed in 1976.",
      "Parliamentary privileges have not been codified into a statutory law; they derive from the Constitution, parliamentary conventions, rules of procedure, and judicial precedents.",
      "Privileges are codified exhaustively under the Representation of the People Act, 1951.",
      "The 44th Constitutional Amendment Act codified all parliamentary privileges into the Sixth Schedule."
    ],
    "correctAnswer": 1,
    "explanation": "Parliamentary privileges in India have not been codified into a single comprehensive statute. If codified, they would become subject to Fundamental Rights (Part III) and judicial review under Article 13. They are currently based on constitutional provisions (Article 105 & 194), various statutes (like Section 135A CPC), rules of the Houses, parliamentary precedents, and conventions.",
    "difficulty": "Exam",
    "examType": "SSC-style",
    "topic": "Parliamentary Privileges",
    "article": "105",
    "examTrap": "India has deliberately avoided codifying privileges because codification would make them subordinate to Fundamental Rights."
  },
  {
    "id": "q-206",
    "question": "Under Article 124(3) of the Constitution of India, which of the following is NOT a constitutional qualification for appointment as a Judge of the Supreme Court of India?",
    "options": [
      "He must be a citizen of India.",
      "He has been for at least 5 years a Judge of a High Court (or two or more such courts in succession).",
      "He has been for at least 10 years an advocate of a High Court (or two or more such courts in succession).",
      "He must have completed a minimum age of 45 years."
    ],
    "correctAnswer": 3,
    "explanation": "Under Article 124(3), the qualifications are: (1) Citizen of India, and (2) either a High Court judge for at least 5 years, OR a High Court advocate for at least 10 years, OR a distinguished jurist in the opinion of the President. The Constitution prescribes NO minimum age limit for appointment as a judge of the Supreme Court.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Supreme Court",
    "article": "124",
    "examTrap": "The Constitution specifies a retirement age (65 years for SC) but prescribes NO minimum age for appointment as a judge."
  },
  {
    "id": "q-207",
    "question": "Consider the following statements regarding the removal of a Supreme Court Judge under the Judges (Inquiry) Act, 1968:\n1. A removal motion must be signed by at least 100 members in the Lok Sabha or 50 members in the Rajya Sabha.\n2. The Speaker/Chairman is bound to admit the removal motion once the required number of signatures is presented.\n3. If admitted, a three-member committee consisting of a SC judge/CJI, a High Court Chief Justice, and a distinguished jurist investigates the charges.\n4. The address for removal must be passed by each House of Parliament by a special majority in the same session.\nWhich of the statements given above are correct?",
    "options": [
      "1, 3 and 4 only",
      "1 and 2 only",
      "2, 3 and 4 only",
      "1, 2, 3 and 4"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1, 3, and 4 are correct. Statement 2 is incorrect because the Speaker of Lok Sabha or Chairman of Rajya Sabha has the discretion to admit or refuse to admit the motion (as seen in 2018 when the RS Chairman refused to admit a motion against the CJI). The inquiry committee consists of 3 members: CJI or SC Judge, HC Chief Justice, and a distinguished jurist.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Supreme Court",
    "article": "124",
    "examTrap": "The Presiding Officer has complete discretion to admit or reject a judge removal motion at the introductory stage."
  },
  {
    "id": "q-208",
    "question": "With reference to the Collegium System for the appointment of Supreme Court Judges in India, consider the following statements:\n1. The collegium system was not mentioned in the original Constitution and evolved through judicial interpretations in the Three Judges Cases.\n2. For recommending appointments to the Supreme Court, the collegium consists of the Chief Justice of India (CJI) and four senior-most judges of the Supreme Court.\n3. If two judges in the collegium give an adverse opinion, the CJI cannot send the recommendation to the Government.\nWhich of the statements given above is/are correct?",
    "options": [
      "1, 2 and 3",
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only"
    ],
    "correctAnswer": 0,
    "explanation": "All three statements are correct. The collegium system evolved through the First (1981), Second (1993), and Third (1998) Judges Cases. In the Third Judges Case (1998), the Supreme Court laid down that for SC appointments, the collegium comprises the CJI and 4 senior-most SC judges. It also ruled that if even two judges give an adverse opinion, the CJI shall not send the recommendation to the government.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Supreme Court",
    "article": "124",
    "examTrap": "The SC collegium for appointing SC judges has 5 members (CJI + 4), whereas the HC collegium for HC judge appointments has 3 members (CJI + 2 SC judges at the Union level)."
  },
  {
    "id": "q-209",
    "question": "Consider the following statements regarding Ad-hoc and Retired Judges in the Supreme Court:\n1. Under Article 127, the Chief Justice of India can appoint a High Court judge as an ad-hoc judge of the Supreme Court with the previous consent of the President and consultation with the concerned HC Chief Justice.\n2. Under Article 128, the CJI may request a retired judge of the Supreme Court or High Court to sit and act as a judge of the Supreme Court with the previous consent of the President.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 only",
      "2 only",
      "Both 1 and 2",
      "Neither 1 nor 2"
    ],
    "correctAnswer": 2,
    "explanation": "Both statements are correct. Article 127 allows the CJI to appoint a High Court judge (who is qualified to be a SC judge) as an ad-hoc judge when there is lack of quorum of permanent judges, after previous consent of the President and consultation with the Chief Justice of the High Court. Article 128 allows attendance of retired SC/HC judges with prior consent of the President.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Supreme Court",
    "article": "127",
    "examTrap": "Ad-hoc judges (Art 127) can only be appointed to the Supreme Court, NOT to High Courts (High Courts have Additional/Acting judges under Art 224)."
  },
  {
    "id": "q-210",
    "question": "Under Article 126 of the Constitution of India, who appoints the Acting Chief Justice of India when the office of the CJI is vacant or when the CJI is unable to perform duties?",
    "options": [
      "The outgoing Chief Justice of India",
      "The President of India",
      "The Collegium of the Supreme Court",
      "The Union Minister of Law and Justice"
    ],
    "correctAnswer": 1,
    "explanation": "Under Article 126, when the office of the Chief Justice of India is vacant or when the CJI is by reason of absence or otherwise unable to perform the duties of his office, the duties of the office shall be performed by such one of the other Judges of the Supreme Court as the President may appoint for the purpose.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Supreme Court",
    "article": "126",
    "examTrap": "Acting CJI is appointed by the President, not nominated by the outgoing CJI or chosen by the Collegium."
  },
  {
    "id": "q-211",
    "question": "Which of the following disputes is EXCLUDED from the exclusive original jurisdiction of the Supreme Court of India under Article 131?",
    "options": [
      "A dispute between the Government of India and one or more States",
      "A dispute between the Government of India and any State on one side and one or more other States on the other",
      "An inter-state river water dispute between two State Governments",
      "A dispute between two or more States involving a question on which the existence or extent of a legal right depends"
    ],
    "correctAnswer": 2,
    "explanation": "Under Article 262(2) of the Constitution and the Inter-State River Water Disputes Act, 1956, inter-state water disputes are excluded from the jurisdiction of the Supreme Court under Article 131. Other exclusions from Article 131 include: pre-constitution treaties/agreements, disputes arising under agreements that exclude SC jurisdiction, and ordinary commercial disputes between Centre and States.",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "Supreme Court Jurisdiction",
    "article": "131",
    "examTrap": "Inter-State river water disputes are explicitly barred from Article 131 jurisdiction under Article 262 and adjudicated by tribunals."
  },
  {
    "id": "q-212",
    "question": "With reference to the Advisory Jurisdiction of the Supreme Court under Article 143, consider the following statements:\n1. On any question of law or fact of public importance under Article 143(1), the Supreme Court is bound to give its advisory opinion to the President.\n2. On disputes arising out of pre-constitutional treaties and covenants under Article 143(2), the Supreme Court is bound to tender its opinion.\n3. The advisory opinion tendered by the Supreme Court is not binding on the President or the Union Government.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 1,
    "explanation": "Statements 2 and 3 are correct. Under Article 143(2) (pre-constitutional treaties/agreements), the Supreme Court 'shall' give its opinion (it is mandatory for SC to respond). Statement 1 is incorrect because under Article 143(1) (general question of public importance), the Supreme Court 'may' give or refuse to give its opinion (e.g. SC declined to answer the presidential reference on the Ayodhya dispute in 1994). Statement 3 is correct: the opinion is advisory and not binding.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Supreme Court Jurisdiction",
    "article": "143",
    "examTrap": "Under Article 143(1), the SC may refuse to give an opinion; only under 143(2) (pre-constitutional treaties) is it bound to answer."
  },
  {
    "id": "q-213",
    "question": "Under Article 142 of the Constitution of India, the Supreme Court is empowered to:",
    "options": [
      "Pass any decree or make any order necessary for doing 'complete justice' in any cause or matter pending before it",
      "Declare any State law invalid without issuing notice to the Advocate General of that State",
      "Remove any High Court judge on charges of proved misbehaviour without parliamentary impeachment",
      "Take over the legislative functions of Parliament during a declared National Emergency"
    ],
    "correctAnswer": 0,
    "explanation": "Article 142(1) of the Constitution empowers the Supreme Court to pass any decree or make any order necessary for doing 'complete justice' in any cause or matter pending before it. Any decree so passed is enforceable throughout the territory of India in such manner as prescribed by Parliament.",
    "difficulty": "Exam",
    "examType": "SSC-style",
    "topic": "Supreme Court Jurisdiction",
    "article": "142",
    "examTrap": "Article 142 gives wide equitable powers for 'complete justice' (used in landmark matters like the Union Carbide case and Ayodhya title dispute)."
  },
  {
    "id": "q-214",
    "question": "Consider the following statements regarding the Supreme Court as a 'Court of Record' under Article 129:\n1. The judgments and proceedings of the Supreme Court are recorded for perpetual memory and have evidentiary value that cannot be questioned in any lower court.\n2. The Supreme Court has the power to punish for contempt of itself as well as contempt of High Courts and subordinate courts.\n3. The Constitution defines both 'Civil Contempt' and 'Criminal Contempt' in detail under Article 129.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1 and 2 are correct under Article 129 and judicial rulings (Delhi Judicial Service Association case, 1991). Statement 3 is incorrect because the Constitution does not define 'civil contempt' or 'criminal contempt'; they are defined in the Contempt of Courts Act, 1971 passed by Parliament.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Supreme Court Jurisdiction",
    "article": "129",
    "examTrap": "The Constitution does NOT define civil or criminal contempt; the terms are defined in the Contempt of Courts Act, 1971."
  },
  {
    "id": "q-215",
    "question": "Which of the following statements regarding Special Leave Petitions (SLP) under Article 136 of the Constitution is correct?",
    "options": [
      "An SLP can be granted against any judgment or order passed by any court or tribunal including military tribunals and court martial.",
      "An SLP is a discretionary power of the Supreme Court and cannot be claimed as a matter of right by a litigant.",
      "An SLP can only be filed against final judgments, not against interlocutory or interim orders.",
      "An SLP can only be granted in constitutional and civil matters, not in criminal cases."
    ],
    "correctAnswer": 1,
    "explanation": "Article 136 gives the Supreme Court plenary discretionary power to grant special leave to appeal from any judgment, decree, sentence, or order in any cause or matter passed by any court or tribunal in India. It is discretionary and not an absolute right. Article 136(2) explicitly excludes judgments/orders of any court or tribunal constituted by or under any law relating to the Armed Forces (military tribunals/court martial). It can apply to both final and interlocutory orders across civil, criminal, and tax matters.",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "Supreme Court Jurisdiction",
    "article": "136",
    "examTrap": "Article 136(2) strictly excludes military tribunals/court martial from the scope of Special Leave Petitions."
  },
  {
    "id": "q-216",
    "question": "Consider the following statements comparing the writ jurisdiction of the Supreme Court (Article 32) and High Courts (Article 226):\n1. High Courts can issue writs for the enforcement of Fundamental Rights as well as for 'any other legal purpose', making their writ jurisdiction wider in scope than that of the Supreme Court.\n2. Article 32 is itself a Fundamental Right, meaning the Supreme Court cannot refuse to entertain a writ petition, whereas remedy under Article 226 is discretionary.\n3. The territorial jurisdiction of the Supreme Court for issuing writs is narrower than that of the High Court.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1 and 2 are correct. Under Art 226, HCs can issue writs for FRs and other ordinary legal rights, whereas SC under Art 32 can issue writs ONLY for Fundamental Rights. Art 32 is a fundamental right itself, making SC the guarantor of FRs, while Art 226 is discretionary. Statement 3 is incorrect because SC's territorial writ jurisdiction extends throughout India, while a High Court's jurisdiction is confined to its state territory or where the cause of action arises.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "High Court vs Supreme Court Writs",
    "article": "226",
    "examTrap": "High Court writ jurisdiction is wider in SCOPE (legal rights + FRs), but Supreme Court writ jurisdiction is wider in TERRITORY (all of India)."
  },
  {
    "id": "q-217",
    "question": "Which of the following statements is INCORRECT regarding High Court Judges in India?",
    "options": [
      "A High Court judge holds office until attaining the age of 62 years.",
      "A person who has held a judicial office in India for at least 10 years is qualified for appointment.",
      "A 'distinguished jurist' in the opinion of the President can be appointed as a High Court judge.",
      "A High Court judge submits his/her resignation in writing addressed to the President of India."
    ],
    "correctAnswer": 2,
    "explanation": "Under Article 217(2), the qualifications for a High Court judge are: (a) Citizen of India, (b) held a judicial office in India for at least 10 years, OR (c) been an advocate of a High Court for at least 10 years. Unlike the Supreme Court (Article 124(3)(c)), there is NO provision in the Constitution for appointing a 'distinguished jurist' as a High Court judge.",
    "difficulty": "Exam",
    "examType": "SSC-style",
    "topic": "High Courts",
    "article": "217",
    "examTrap": "The 'distinguished jurist' category exists ONLY for Supreme Court judge appointments, NOT for High Court appointments."
  },
  {
    "id": "q-218",
    "question": "Under Article 222 of the Constitution, who is empowered to transfer a Judge from one High Court to any other High Court?",
    "options": [
      "The Chief Justice of India independently",
      "The President of India, after consultation with the Chief Justice of India",
      "The Governor of the State from which the judge is being transferred",
      "The Union Minister of Law and Justice"
    ],
    "correctAnswer": 1,
    "explanation": "Under Article 222(1), the President of India may, after consultation with the Chief Justice of India, transfer a Judge from one High Court to any other High Court. As established in the Third Judges Case (1998), the CJI must consult a collegium of 4 senior-most SC judges and the Chief Justices of both the High Courts involved.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "High Courts",
    "article": "222",
    "examTrap": "Transfer orders are formally issued by the President, not directly by the Chief Justice of India."
  },
  {
    "id": "q-219",
    "question": "Under which constitutional provision can Parliament by law establish a common High Court for two or more States or for two or more States and a Union Territory?",
    "options": [
      "Article 214",
      "Article 231",
      "Article 241",
      "Article 227"
    ],
    "correctAnswer": 1,
    "explanation": "Article 231 of the Constitution provides that notwithstanding anything contained in Chapter V of Part VI, Parliament may by law establish a common High Court for two or more States or for two or more States and a Union Territory (e.g. Punjab & Haryana High Court, Bombay High Court, Gauhati High Court).",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "High Courts",
    "article": "231",
    "examTrap": "Article 214 says there shall be a HC for each State, but Article 231 empowers Parliament to establish common High Courts."
  },
  {
    "id": "q-220",
    "question": "Match the following landmark judicial appointments cases with their primary rulings:\n1. First Judges Case (SP Gupta, 1981) - (A) Established primacy of CJI and introduced the initial Collegium (CJI + 2 senior judges)\n2. Second Judges Case (SC Advocates-on-Record, 1993) - (B) Struck down the 99th Amendment Act and the NJAC as unconstitutional\n3. Third Judges Case (Special Reference, 1998) - (D) Expanded the SC collegium to CJI and four senior-most judges\n4. Fourth Judges Case (NJAC Case, 2015) - (C) Held that 'consultation' does not mean 'concurrence', giving primacy to the Executive\nWhich of the following is the correct matching?",
    "options": [
      "1-C, 2-A, 3-D, 4-B",
      "1-A, 2-C, 3-B, 4-D",
      "1-C, 2-D, 3-A, 4-B",
      "1-B, 2-A, 3-D, 4-C"
    ],
    "correctAnswer": 0,
    "explanation": "The evolution of the Collegium system:\n1. First Judges Case (1981): SC held 'consultation' does not mean concurrence; executive had final say (1-C).\n2. Second Judges Case (1993): Overruled 1981 ruling; held consultation means concurrence; CJI + 2 senior judges collegium created (2-A).\n3. Third Judges Case (1998): Presidential reference under Art 143; expanded collegium to CJI + 4 senior-most SC judges (3-D).\n4. Fourth Judges Case (2015): SC struck down 99th Constitutional Amendment and NJAC Act, upholding judicial independence as part of Basic Structure (4-B).",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Landmark Cases",
    "article": "124",
    "examTrap": "Second Judges Case introduced CJI + 2; Third Judges Case expanded it to CJI + 4."
  },
  {
    "id": "q-221",
    "question": "In the landmark judgment of Kesavananda Bharati v. State of Kerala (1973), the Supreme Court ruled that:",
    "options": [
      "Parliament has unlimited constituent power to abrogate any provision of the Constitution without any judicial review.",
      "Parliament's amending power under Article 368 is subject to the limitation that it cannot alter, destroy, or damage the 'Basic Structure' of the Constitution.",
      "The Preamble is not a part of the Constitution and cannot be amended under Article 368.",
      "Fundamental Rights in Part III are completely immune from any constitutional amendment whatsoever."
    ],
    "correctAnswer": 1,
    "explanation": "In Kesavananda Bharati (1973) (decided by a 7:6 majority of the largest 13-judge bench), the Supreme Court upheld Parliament's power to amend any part of the Constitution, including Fundamental Rights, but established the 'Basic Structure Doctrine', holding that Article 368 does not enable Parliament to alter or destroy the basic features/structure of the Constitution.",
    "difficulty": "Basic",
    "examType": "General competitive exams",
    "topic": "Landmark Cases",
    "article": "368",
    "examTrap": "Kesavananda Bharati did NOT say Fundamental Rights cannot be amended; it said amendments cannot damage the Basic Structure."
  },
  {
    "id": "q-222",
    "question": "Consider the following statements regarding the landmark judgment in Minerva Mills v. Union of India (1980):\n1. The Supreme Court struck down Section 4 and Section 55 of the 42nd Amendment Act that sought to give unlimited amending power to Parliament and exclude judicial review.\n2. The Court observed that the Indian Constitution is founded on the bedrock of the balance and harmony between Fundamental Rights (Part III) and Directive Principles (Part IV).\n3. Judicial review and limited amending power were affirmed as basic features of the Constitution.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All three statements are correct. In Minerva Mills (1980), the Supreme Court struck down clauses (4) and (5) of Article 368 inserted by the 42nd Amendment, holding that a limited amending power is itself a basic feature. The Court also invalidated the unbridled primacy given to all DPSPs over Articles 14 and 19, famously stating that Parts III and IV are like two wheels of a chariot and the balance between them is a basic structure of the Constitution.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Landmark Cases",
    "article": "368",
    "examTrap": "Minerva Mills clarified that giving blanket superiority to DPSPs over Fundamental Rights destroys the harmonious balance of the Constitution."
  },
  {
    "id": "q-223",
    "question": "With reference to the office of the Governor in India, consider the following statements:\n1. The 7th Constitutional Amendment Act of 1956 facilitated the appointment of the same person as a Governor for two or more States.\n2. The Constitution of India explicitly lays down that the Governor must be an outsider not belonging to the State where he is appointed.\n3. The Governor has no security of tenure and holds office during the pleasure of the President.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "1 and 3 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 1,
    "explanation": "Statement 1 is correct: The 7th Constitutional Amendment Act of 1956 amended Article 153 to allow the appointment of the same person as Governor for two or more states. Statement 2 is incorrect: The requirement that the Governor should be an outsider is a political convention recommended by the Sarkaria Commission, but is NOT explicitly laid down in the Constitution. The Constitution mentions only two qualifications (Articles 157 & 158): citizenship of India and completion of 35 years of age. Statement 3 is correct: Under Article 156(1), the Governor holds office during the pleasure of the President and has no fixed or guaranteed tenure.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Governor",
    "article": "153, 156, 157",
    "examTrap": "Confusing informal conventions (like being an outsider) with mandatory qualifications expressly written in the Constitution."
  },
  {
    "id": "q-224",
    "question": "Consider the following statements regarding the pardoning power of the Governor under Article 161 of the Constitution of India:\n1. The Governor can grant pardons, reprieves, respites, and remissions of punishment for offenses against laws relating to the executive power of the State.\n2. The Governor possesses the constitutional power to pardon a death sentence just like the President of India.\n3. The Governor has no power to pardon or commute sentences passed by a Court Martial.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 only",
      "1 and 3 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 1,
    "explanation": "Statement 1 is correct: Article 161 empowers the Governor to grant pardons, reprieves, respites, and remissions regarding matters to which the executive power of the State extends. Statement 2 is incorrect: The President alone has the power under Article 72 to grant a pardon (complete forgiveness) for a death sentence. The Governor cannot pardon a death sentence, though he can suspend, remit, or commute it. Statement 3 is correct: The Governor has no power regarding sentences awarded by a Court Martial (military court); that power belongs exclusively to the President.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Governor",
    "article": "161",
    "examTrap": "Assuming the Governor has identical pardoning powers to the President; only the President can pardon death sentences and military court convictions."
  },
  {
    "id": "q-225",
    "question": "When a Money Bill passed by the State Legislative Assembly is presented to the Governor under Article 200 of the Constitution, the Governor can:\n1. Give assent to the bill.\n2. Withhold assent to the bill.\n3. Return the bill for reconsideration of the House.\n4. Reserve the bill for the consideration of the President.\nSelect the correct answer using the code given below:",
    "options": [
      "1 and 3 only",
      "1, 2 and 4 only",
      "1, 3 and 4 only",
      "1, 2, 3 and 4"
    ],
    "correctAnswer": 1,
    "explanation": "Under Article 200, when a Money Bill is presented to the Governor, he may give assent, withhold assent, or reserve the bill for the consideration of the President. However, the Governor CANNOT return a Money Bill for reconsideration of the State Legislature because it is introduced in the Assembly only with the Governor's prior recommendation.",
    "difficulty": "Basic",
    "examType": "General competitive exams",
    "topic": "Governor",
    "article": "200",
    "examTrap": "Money Bills can never be returned for reconsideration by either the President or the Governor."
  },
  {
    "id": "q-226",
    "question": "If the Governor reserves a State Bill for the consideration of the President under Article 200 and the President directs the Governor to return it for reconsideration under Article 201, what happens if the State Legislature passes the bill again?",
    "options": [
      "The State Legislature must reconsider it within six months and if passed again, the President is bound to give assent.",
      "The State Legislature must reconsider it within six months and if passed again, the President is not bound to give assent.",
      "The State Legislature must reconsider it within three months and if passed again, the Governor must give assent.",
      "The State Legislature has no constitutional power to reconsider a bill once returned by the President."
    ],
    "correctAnswer": 1,
    "explanation": "Under Article 201, when a reserved bill is returned by the President, the State Legislature must reconsider it within a period of 6 months. If it is passed again by the House(s), it is presented again to the President for his consideration. Crucially, the President is NOT bound to give assent to a State Bill even on its second passage (unlike Union Bills under Article 111 where Presidential assent is mandatory on repassage).",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Governor",
    "article": "201",
    "examTrap": "Believing that the President is bound to give assent to a reconsidered State bill just as he is bound for Union bills under Article 111."
  },
  {
    "id": "q-227",
    "question": "Regarding the ordinance-making power of the Governor under Article 213 of the Constitution, which of the following statements is INCORRECT?",
    "options": [
      "An ordinance can be promulgated only when both Houses of the State Legislature (in bicameral) or the single House (in unicameral) are not in session.",
      "An ordinance ceases to operate six weeks from the reassembly of the State Legislature unless approved earlier.",
      "The Governor can promulgate an ordinance without instructions from the President in all matters enumerated in the State List.",
      "The Governor can withdraw an ordinance at any time."
    ],
    "correctAnswer": 2,
    "explanation": "Option C is incorrect because under the proviso to Article 213(1), the Governor CANNOT promulgate an ordinance without presidential instructions in three cases: (1) if a bill containing the same provisions would have required prior sanction of the President, (2) if he would have deemed it necessary to reserve a bill containing the same provisions for the President, or (3) if an Act of the State Legislature containing the same provisions would have been invalid without the President's assent. All other options are correct.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Governor",
    "article": "213",
    "examTrap": "Assuming the Governor has unfettered ordinance powers over all State List subjects without requiring presidential instructions in specific sensitive cases."
  },
  {
    "id": "q-228",
    "question": "As per the 91st Constitutional Amendment Act, 2003, what is the ceiling and minimum floor on the strength of the Council of Ministers (including the Chief Minister) in a State?",
    "options": [
      "It shall not exceed 10% of the total strength of the Legislative Assembly, and not less than 10 members.",
      "It shall not exceed 15% of the total strength of the Legislative Assembly, and not less than 12 members.",
      "It shall not exceed 15% of the total strength of the State Legislature (both Houses combined), and not less than 15 members.",
      "It shall not exceed 20% of the total strength of the Legislative Assembly, and not less than 12 members."
    ],
    "correctAnswer": 1,
    "explanation": "Article 164(1A), inserted by the 91st Constitutional Amendment Act of 2003, provides that the total number of Ministers, including the Chief Minister, in the Council of Ministers in a State shall not exceed 15% of the total number of members of the Legislative Assembly of that State, provided that the number of Ministers, including the Chief Minister, in a State shall not be less than 12.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Chief Minister & State Council of Ministers",
    "article": "164",
    "examTrap": "Percentage is calculated strictly against the Legislative Assembly (Vidhan Sabha), not both Houses combined, and minimum number is 12 (not 10 or 15)."
  },
  {
    "id": "q-229",
    "question": "With reference to Article 163 of the Constitution of India, consider the following statements:\n1. The Council of Ministers with the Chief Minister as the head aids and advises the Governor in the exercise of his functions, except when required to act in his discretion.\n2. If any question arises whether a matter falls within the Governor's constitutional discretion or not, the decision of the Governor in his discretion is final.\n3. The question whether any, and if so what, advice was tendered by Ministers to the Governor can be enquired into by the High Court under Article 226.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 only",
      "1 and 2 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 1,
    "explanation": "Statements 1 and 2 are correct under Articles 163(1) and 163(2). Article 163(2) explicitly states that the decision of the Governor in his discretion is final and its validity cannot be called into question. Statement 3 is incorrect because Article 163(3) expressly bars judicial review of ministerial advice: 'The question whether any, and if so what, advice was tendered by Ministers to the Governor shall not be inquired into in any court.'",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Chief Minister & State Council of Ministers",
    "article": "163",
    "examTrap": "Ministerial advice to the Governor enjoys complete constitutional immunity from judicial enquiry under Article 163(3)."
  },
  {
    "id": "q-230",
    "question": "Consider the following statements regarding the State Council of Ministers under Article 164 of the Constitution:\n1. The Ministers hold office during the pleasure of the Governor.\n2. The Council of Ministers is collectively responsible to the State Legislative Assembly.\n3. A Minister who for any period of six consecutive months is not a member of the Legislature of the State ceases to be a Minister.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All three statements are correct under Article 164 of the Constitution: (1) Article 164(1) provides individual responsibility where Ministers hold office during the pleasure of the Governor; (2) Article 164(2) establishes collective responsibility specifically to the State Legislative Assembly (Vidhan Sabha); (3) Article 164(4) mandates that a non-legislator appointed as Minister must get elected to either House within 6 consecutive months.",
    "difficulty": "Basic",
    "examType": "General competitive exams",
    "topic": "Chief Minister & State Council of Ministers",
    "article": "164",
    "examTrap": "Collective responsibility is exclusively to the Legislative Assembly (Vidhan Sabha), not to the Legislative Council or the entire State Legislature."
  },
  {
    "id": "q-231",
    "question": "Under Article 169 of the Constitution, what is the procedure for the creation or abolition of a Legislative Council in a State?",
    "options": [
      "Parliament passes a law by special majority on a recommendation from the Governor.",
      "State Legislative Assembly passes a resolution by special majority, followed by Parliament passing an ordinary law by simple majority.",
      "State Legislative Assembly passes a resolution by simple majority, followed by Parliament passing a Constitutional Amendment Act under Article 368.",
      "The President issues an executive notification upon recommendation of the Inter-State Council."
    ],
    "correctAnswer": 1,
    "explanation": "Under Article 169, the State Legislative Assembly must pass a resolution by a special majority (majority of total membership of the House and by a majority of not less than two-thirds of the members present and voting). Following this, Parliament can pass a law by a simple majority to abolish or create the Legislative Council. Under Article 169(3), such a law is not deemed to be an amendment of the Constitution for the purposes of Article 368.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "State Legislature",
    "article": "169",
    "examTrap": "The State Assembly requires a special majority, but Parliament acts by a simple majority, and it is NOT an Article 368 constitutional amendment."
  },
  {
    "id": "q-232",
    "question": "Which of the following fractions correctly represents the proportion of members in a State Legislative Council (Vidhan Parishad) elected by electorates consisting of members of municipalities, district boards, and other local authorities?",
    "options": [
      "1/3",
      "1/6",
      "1/12",
      "1/4"
    ],
    "correctAnswer": 0,
    "explanation": "Under Article 171(3)(a), 1/3rd of the total number of members of the Legislative Council are elected by electorates consisting of members of municipalities, district boards, and other local authorities in the State.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "State Legislature",
    "article": "171",
    "examTrap": "Confusing 1/3 (local authorities & MLAs), 1/12 (graduates & teachers), and 1/6 (Governor's nomination)."
  },
  {
    "id": "q-233",
    "question": "In the nomination of members to the Rajya Sabha and State Legislative Council by the President and Governor respectively, which of the following fields is included for the State Legislative Council but NOT for the Rajya Sabha?",
    "options": [
      "Science",
      "Art",
      "Cooperative Movement",
      "Social Service"
    ],
    "correctAnswer": 2,
    "explanation": "Under Article 80(3), the President nominates 12 members to the Rajya Sabha having special knowledge or practical experience in Literature, Science, Art, and Social Service (4 fields). Under Article 171(5), the Governor nominates 1/6th of members to the Legislative Council from Literature, Science, Art, Cooperative Movement, and Social Service (5 fields). 'Cooperative Movement' is present only in the State Legislative Council.",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "State Legislature",
    "article": "80, 171",
    "examTrap": "Cooperative Movement is an eligible field for nomination only for the State Legislative Council, not the Rajya Sabha."
  },
  {
    "id": "q-234",
    "question": "When an ordinary bill passed by the State Legislative Assembly is rejected by the State Legislative Council or kept pending, what is the maximum total period the Legislative Council can delay the passage of the bill?",
    "options": [
      "6 months",
      "4 months",
      "3 months",
      "14 days"
    ],
    "correctAnswer": 1,
    "explanation": "Under Article 197, when an ordinary bill is transmitted to the Legislative Council, it can delay the bill for a maximum of 3 months in the first instance. If the Assembly passes the bill again and transmits it, the Council can delay it for at most 1 month. Thus, the total maximum dilatory power of the Legislative Council over an ordinary bill is 4 months (3 + 1 months). Unlike Parliament, there is no provision for a Joint Sitting in the State Legislature.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "State Legislature",
    "article": "197",
    "examTrap": "The total delay is 4 months (3 months in the first instance + 1 month in the second instance), and there is NO joint sitting mechanism in States."
  },
  {
    "id": "q-235",
    "question": "Consider the following statements regarding the Speaker of the State Legislative Assembly:\n1. The Speaker is elected by the Assembly from among its members.\n2. The Speaker remains in office until immediately before the first meeting of the new Assembly even after the dissolution of the Assembly.\n3. A resolution for the removal of the Speaker requires a special majority of two-thirds of the members present and voting.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1 and 2 are correct under Articles 178 and the second proviso to Article 179. Statement 3 is incorrect because under Article 179(c), the Speaker can be removed by a resolution of the Assembly passed by a majority of all the then members of the Assembly (Effective Majority), not a two-thirds majority.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "State Legislature",
    "article": "178, 179",
    "examTrap": "Removal of the Speaker requires an effective majority (all the then members), not a 2/3 special majority."
  },
  {
    "id": "q-236",
    "question": "Consider the following statements regarding the Advocate General of the State:\n1. To be appointed as Advocate General, a person must be qualified to be appointed as a Judge of a High Court.\n2. The remuneration of the Advocate General is determined by the State Legislature by law.\n3. The Advocate General has the right to speak and take part in the proceedings of both Houses of the State Legislature, but without the right to vote.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "1 and 3 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 1,
    "explanation": "Statement 1 is correct: Article 165(1) requires the person to be qualified to be appointed a Judge of a High Court. Statement 2 is incorrect: Under Article 165(3), the Advocate General receives such remuneration as the Governor may determine (it is not fixed by the State Legislature or the Constitution). Statement 3 is correct: Under Article 177, the Advocate General has the right to speak and participate in the proceedings of the State Legislature or its committees, but has no right to vote.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Advocate General of the State",
    "article": "165, 177",
    "examTrap": "Remuneration of the Advocate General is determined by the Governor, not fixed by the State Legislature."
  },
  {
    "id": "q-237",
    "question": "Which Article of the Constitution of India provides for the constitutional office of the Advocate General for the State?",
    "options": [
      "Article 76",
      "Article 148",
      "Article 165",
      "Article 177"
    ],
    "correctAnswer": 2,
    "explanation": "Article 165 provides for the Advocate General for the State as the highest law officer in the State. Article 76 provides for the Attorney General of India, Article 148 for the Comptroller and Auditor General, and Article 177 deals with the rights of Ministers and Advocate General in the State Legislature.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Advocate General of the State",
    "article": "165",
    "examTrap": "Article 76 is for Union Attorney General; Article 165 is for State Advocate General."
  },
  {
    "id": "q-238",
    "question": "Consider the following statements regarding the legislative relations between the Centre and the States:\n1. Residuary powers of legislation are vested in the Parliament of India under Article 248.\n2. Rajya Sabha can authorize Parliament to legislate on a State List subject in the national interest by passing a resolution supported by not less than two-thirds of the members present and voting under Article 249.\n3. A resolution passed by the Rajya Sabha under Article 249 remains in force indefinitely until repealed.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 only",
      "1 and 2 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 1,
    "explanation": "Statements 1 and 2 are correct under Articles 248 and 249. Statement 3 is incorrect because under Article 249(2), a resolution passed by the Rajya Sabha remains in force for a period not exceeding one year at a time, though it can be renewed any number of times for one year each.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Center-State Relations",
    "article": "248, 249",
    "examTrap": "An Article 249 resolution is valid for a maximum of 1 year at a time, not indefinitely."
  },
  {
    "id": "q-239",
    "question": "In which of the following circumstances can the Parliament of India enact laws on subjects enumerated in the State List?\n1. When Rajya Sabha passes a resolution in the national interest under Article 249.\n2. During the operation of a Proclamation of National Emergency under Article 250.\n3. When the legislatures of two or more States pass resolutions requesting Parliament to enact such a law under Article 252.\n4. For giving effect to international treaties, agreements, or conventions under Article 253.\nSelect the correct answer using the code given below:",
    "options": [
      "1, 2 and 3 only",
      "2, 3 and 4 only",
      "1, 3 and 4 only",
      "1, 2, 3 and 4"
    ],
    "correctAnswer": 3,
    "explanation": "All four circumstances empower Parliament to legislate on State List subjects: (1) Article 249 (Rajya Sabha special resolution in national interest), (2) Article 250 (during National Emergency), (3) Article 252 (consent of two or more State Legislatures), and (4) Article 253 (implementation of international treaties and conventions).",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "Center-State Relations",
    "article": "249, 250, 252, 253",
    "examTrap": "Parliament has five extraordinary powers to legislate on State List: Articles 249, 250, 252, 253, and 356."
  },
  {
    "id": "q-240",
    "question": "When Parliament passes a law on a State List subject under Article 252 upon the request of two or more State Legislatures, which of the following is correct regarding amending or repealing that law?",
    "options": [
      "Any participating State Legislature can amend or repeal it for its own jurisdiction.",
      "Only the Parliament can amend or repeal that law, not the State Legislatures.",
      "It can only be amended with the prior approval of the Supreme Court of India.",
      "The law automatically lapses after two years unless renewed by the State Legislatures."
    ],
    "correctAnswer": 1,
    "explanation": "Under Article 252(2), any Act passed by Parliament under Article 252 can be amended or repealed ONLY by an Act of Parliament passed in like manner, and CANNOT be amended or repealed by an Act of the Legislature of any State. By passing a resolution under Article 252, the States surrender their legislative competence over that subject to Parliament.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Center-State Relations",
    "article": "252",
    "examTrap": "Once States surrender power under Article 252, they lose the right to amend or repeal that law; only Parliament can modify it."
  },
  {
    "id": "q-241",
    "question": "With reference to the Inter-State Council established under Article 263 of the Constitution, consider the following statements:\n1. The Inter-State Council was first established in 1990 by a presidential order on the recommendation of the Sarkaria Commission.\n2. The Prime Minister of India is the Chairman of the Inter-State Council.\n3. The recommendations and advice given by the Inter-State Council are legally binding on both the Union and State Governments.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 only",
      "1 and 2 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 1,
    "explanation": "Statements 1 and 2 are correct: The Inter-State Council was set up in 1990 following Sarkaria Commission recommendations, and the Prime Minister is its Chairman. Statement 3 is incorrect: The Inter-State Council is purely an advisory body; its recommendations and advice are NOT legally binding on the Union or State governments.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Center-State Relations",
    "article": "263",
    "examTrap": "The Inter-State Council's advice is strictly advisory and recommendatory, never binding."
  },
  {
    "id": "q-242",
    "question": "Which Constitutional Amendment Act established the Goods and Services Tax (GST) Council under Article 279A of the Constitution?",
    "options": [
      "99th Constitutional Amendment Act, 2014",
      "100th Constitutional Amendment Act, 2015",
      "101st Constitutional Amendment Act, 2016",
      "102nd Constitutional Amendment Act, 2018"
    ],
    "correctAnswer": 2,
    "explanation": "The 101st Constitutional Amendment Act, 2016 introduced the Goods and Services Tax (GST) regime and inserted Article 279A, which empowered the President to constitute the GST Council.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Center-State Relations",
    "article": "279A",
    "examTrap": "99th was NJAC, 100th was Land Boundary Agreement with Bangladesh, 101st is GST, 102nd is Constitutional status to NCBC."
  },
  {
    "id": "q-243",
    "question": "In the decision-making mechanism of the GST Council under Article 279A of the Constitution:",
    "options": [
      "The Central Government has one-half of the total votes cast, and States have one-half.",
      "The Central Government has one-third of the total votes cast, and all States combined have two-thirds of the total votes cast; decisions require a 3/4th majority.",
      "Every State and the Centre has an equal single vote; decisions require a 2/3rd majority.",
      "The Central Government has two-thirds of the total votes cast, and States have one-third."
    ],
    "correctAnswer": 1,
    "explanation": "Under Article 279A(9), every decision of the GST Council is taken by a majority of not less than three-fourths (75%) of the weighted votes of the members present and voting. The vote of the Central Government has a weightage of one-third (33.33%) of the total votes cast, and the votes of all State Governments combined have a weightage of two-thirds (66.67%) of the total votes cast.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Center-State Relations",
    "article": "279A",
    "examTrap": "The Centre holds 1/3rd (33.3%) weightage while States hold 2/3rds (66.7%), requiring a 75% consensus threshold (effectively giving Centre a veto)."
  },
  {
    "id": "q-244",
    "question": "With reference to the Proclamation of National Emergency under Article 352, consider the following statements:\n1. The 44th Constitutional Amendment Act, 1978 substituted the phrase 'internal disturbance' with 'armed rebellion'.\n2. The President can declare a National Emergency only after receiving a written recommendation from the Union Cabinet.\n3. A proclamation of emergency must be approved by both Houses of Parliament within two months from the date of its issue.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1 and 2 are correct: The 44th Amendment Act replaced 'internal disturbance' with 'armed rebellion' and mandated a written communication from the Union Cabinet (Article 352(3)). Statement 3 is incorrect: The 44th Amendment reduced the parliamentary approval period from two months to ONE month (Article 352(4)).",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Emergency Provisions",
    "article": "352",
    "examTrap": "Approval time limit for National Emergency (Art 352) is 1 month, whereas for President's Rule (Art 356) and Financial Emergency (Art 360) it is 2 months."
  },
  {
    "id": "q-245",
    "question": "Consider the following statements regarding the suspension of Fundamental Rights during a National Emergency:\n1. Under Article 358, the Fundamental Rights under Article 19 are automatically suspended as soon as an emergency is declared on grounds of war, external aggression, or armed rebellion.\n2. Under Article 359, the President by order can suspend the right to move any court for the enforcement of Fundamental Rights except Articles 20 and 21.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 only",
      "2 only",
      "Both 1 and 2",
      "Neither 1 nor 2"
    ],
    "correctAnswer": 1,
    "explanation": "Statement 1 is incorrect: Following the 44th Amendment Act 1978, Article 19 is automatically suspended under Article 358 ONLY when the National Emergency is declared on grounds of 'war' or 'external aggression' (External Emergency), and NOT on the ground of 'armed rebellion' (Internal Emergency). Statement 2 is correct: Under Article 359, the President can suspend enforcement of other Fundamental Rights, but the 44th Amendment specifically prohibited the suspension of the right to move courts for the enforcement of Articles 20 (protection in respect of conviction for offences) and 21 (protection of life and personal liberty).",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Emergency Provisions",
    "article": "358, 359",
    "examTrap": "Article 19 is NOT suspended when National Emergency is declared on the ground of armed rebellion; Articles 20 and 21 can never be suspended under Article 359."
  },
  {
    "id": "q-246",
    "question": "President's Rule can be imposed in a State under Article 356 of the Constitution on which of the following grounds?\n1. Governor's report or otherwise satisfying the President that governance cannot be carried on in accordance with the provisions of the Constitution (Article 356).\n2. Failure of a State to comply with or give effect to any administrative direction given by the Union Executive (Article 365).\n3. Resignation of the Chief Minister without any party being able to command a legislative majority.\nSelect the correct answer using the code given below:",
    "options": [
      "1 only",
      "1 and 2 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All three grounds are valid. Under Article 356, the President can act on a Governor's report or suo motu when constitutional governance breaks down. Under Article 365, failure to comply with Union directions is legally deemed to be a breakdown of constitutional machinery. A hung assembly or resignation of a CM where no ministry can be formed is a classic ground for invoking Article 356.",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "Emergency Provisions",
    "article": "356, 365",
    "examTrap": "Article 365 provides an explicit constitutional basis for invoking Article 356."
  },
  {
    "id": "q-247",
    "question": "What is the maximum period for which President's Rule (Article 356) can be extended in a State under ordinary constitutional provisions beyond one year?",
    "options": [
      "2 years",
      "3 years",
      "5 years",
      "Indefinitely with 6-month parliamentary approvals"
    ],
    "correctAnswer": 1,
    "explanation": "Under Article 356(4) and (5), President's Rule can initially be extended up to 1 year (with 6-month approvals). Beyond 1 year, it can be extended up to a maximum period of 3 years only if a National Emergency is in operation and the Election Commission certifies that general elections to the Assembly cannot be held.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Emergency Provisions",
    "article": "356",
    "examTrap": "3 years is the absolute maximum constitutional ceiling under Article 356 without a specific constitutional amendment."
  },
  {
    "id": "q-248",
    "question": "In the landmark S.R. Bommai v. Union of India (1994) case, the Supreme Court of India laid down which of the following principles regarding Article 356?\n1. The presidential proclamation imposing President's Rule is subject to judicial review.\n2. The State Legislative Assembly should not be dissolved until Parliament approves the presidential proclamation.\n3. Secularism is a basic feature of the Constitution, and anti-secular actions by a State Government can justify the invocation of Article 356.\nSelect the correct answer using the code given below:",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All three statements represent core rulings in the 9-judge bench decision in S.R. Bommai (1994): (1) Proclamation under Article 356 is subject to judicial review on grounds of mala fides or irrelevant grounds; (2) The Assembly can only be suspended initially and must NOT be dissolved until both Houses of Parliament approve the proclamation; (3) Secularism is part of the basic structure, and state governments acting against secularism can be dismissed under Article 356.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Emergency Provisions",
    "article": "356",
    "examTrap": "The State Assembly cannot be dissolved immediately upon the proclamation; it is only suspended until Parliament approves the proclamation."
  },
  {
    "id": "q-249",
    "question": "With reference to Financial Emergency under Article 360 of the Constitution, consider the following statements:\n1. A proclamation of Financial Emergency must be approved by both Houses of Parliament within two months by a simple majority.\n2. Once approved by Parliament, the Financial Emergency continues indefinitely until it is revoked by the President.\n3. During a Financial Emergency, the President can issue directions for the reduction of salaries and allowances of Judges of the Supreme Court and High Courts.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All three statements are correct under Article 360: (1) It must be approved within 2 months by a simple majority; (2) There is no maximum duration and repeated periodic approvals (unlike Article 352) are NOT required; (3) Under Article 360(4)(b), the President can direct the reduction of salaries and allowances of all or any class of persons serving in connection with Union affairs, including Judges of the Supreme Court and High Courts. Financial Emergency has never been declared in India.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Emergency Provisions",
    "article": "360",
    "examTrap": "Financial Emergency does NOT require six-monthly parliamentary renewals; once approved, it continues indefinitely until revoked."
  },
  {
    "id": "q-250",
    "question": "Consider the following statements regarding the Election Commission of India:\n1. The Election Commission is responsible for conducting elections to Parliament, State Legislatures, the offices of President and Vice-President, as well as Panchayats and Municipalities.\n2. The Chief Election Commissioner (CEC) can be removed from office in the same manner and on the same grounds as a Judge of the Supreme Court.\n3. Other Election Commissioners cannot be removed from office except on the recommendation of the Chief Election Commissioner.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 1,
    "explanation": "Statement 1 is incorrect because elections to Panchayats and Municipalities are conducted by State Election Commissions (Articles 243K and 243ZA), NOT the Election Commission of India. Statements 2 and 3 are correct under Article 324(5): The CEC has security of tenure equivalent to a Supreme Court Judge, and other Commissioners can be removed by the President only upon the recommendation of the CEC.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Election Commission",
    "article": "324",
    "examTrap": "Local body elections (Panchayats & Municipalities) are conducted exclusively by State Election Commissions, not ECI."
  },
  {
    "id": "q-251",
    "question": "What is the tenure of the Chief Election Commissioner and other Election Commissioners of India?",
    "options": [
      "5 years or until the age of 65 years, whichever is earlier",
      "6 years or until the age of 65 years, whichever is earlier",
      "6 years or until the age of 62 years, whichever is earlier",
      "5 years or until the age of 62 years, whichever is earlier"
    ],
    "correctAnswer": 1,
    "explanation": "Under the Election Commission (Conditions of Service of Election Commissioners and Transaction of Business) Act, the Chief Election Commissioner and Election Commissioners hold office for a term of 6 years or until they attain the age of 65 years, whichever is earlier.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Election Commission",
    "article": "324",
    "examTrap": "Confusing 6 years/65 years (ECI, UPSC, CAG) with 6 years/62 years (State PSC members)."
  },
  {
    "id": "q-252",
    "question": "Consider the following statements regarding the Union Public Service Commission (UPSC):\n1. The Chairman or members of UPSC are appointed by the President and hold office for a term of 6 years or until the age of 65 years.\n2. The President can remove the Chairman or any member of UPSC for misbehaviour only after the Supreme Court conducts an enquiry and recommends removal.\n3. The advice tendered by the Supreme Court on the enquiry into the misbehaviour of a UPSC member is binding on the President.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All three statements are correct under Articles 316 and 317. Under Article 317(1), the President refers charges of misbehaviour against the UPSC Chairman/member to the Supreme Court. The enquiry report and advice tendered by the Supreme Court are legally binding on the President.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "UPSC",
    "article": "315, 316, 317",
    "examTrap": "The Supreme Court's advice under Article 317 enquiry is binding on the President, unlike advisory jurisdiction under Article 143."
  },
  {
    "id": "q-253",
    "question": "Under Article 319 of the Constitution of India, upon ceasing to hold office, the Chairman of the Union Public Service Commission is:",
    "options": [
      "Eligible for appointment as the Governor of a State or CAG.",
      "Eligible for appointment as the Chairman of a State Public Service Commission.",
      "Ineligible for any further employment either under the Government of India or under the Government of a State.",
      "Eligible for reappointment as Chairman of UPSC for a second term."
    ],
    "correctAnswer": 2,
    "explanation": "Under Article 319(a), the Chairman of the Union Public Service Commission shall be ineligible for further employment either under the Government of India or under the Government of a State. He is also not eligible for reappointment to the same office.",
    "difficulty": "Exam",
    "examType": "General competitive exams",
    "topic": "UPSC",
    "article": "319",
    "examTrap": "The UPSC Chairman is strictly barred from ANY further government employment and cannot be reappointed for a second term."
  },
  {
    "id": "q-254",
    "question": "With reference to the Finance Commission of India under Article 280, consider the following statements:\n1. It is constituted by the President of India every fifth year or at such earlier time as he considers necessary.\n2. It consists of a Chairman and four other members appointed by the President.\n3. The qualifications of the Chairman and members are determined by the Parliament by law.\n4. The recommendations made by the Finance Commission are legally binding on the Union Government.\nWhich of the statements given above are correct?",
    "options": [
      "1, 2 and 3 only",
      "2, 3 and 4 only",
      "1 and 3 only",
      "1, 2, 3 and 4"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1, 2, and 3 are correct under Article 280(1) and 280(2). Statement 4 is incorrect because the recommendations of the Finance Commission under Article 280/281 are purely advisory in nature and not legally binding on the Government, although they carry great moral and conventional weight.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Finance Commission",
    "article": "280, 281",
    "examTrap": "Finance Commission recommendations are advisory and recommendatory, not legally binding."
  },
  {
    "id": "q-255",
    "question": "Consider the following statements regarding the Comptroller and Auditor General of India (CAG):\n1. The CAG is appointed by the President of India by warrant under his hand and seal.\n2. The CAG is eligible for further office under the Government of India or any State Government after retirement.\n3. The administrative expenses of the office of the CAG, including all salaries, allowances, and pensions, are charged upon the Consolidated Fund of India.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 only",
      "1 and 3 only",
      "2 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 1,
    "explanation": "Statements 1 and 3 are correct under Article 148(1) and Article 148(6). Statement 2 is incorrect because Article 148(4) clearly bars the CAG from any further employment under the Government of India or the Government of any State after demitting office.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "CAG",
    "article": "148",
    "examTrap": "CAG cannot hold any post-retirement government employment, ensuring constitutional independence."
  },
  {
    "id": "q-256",
    "question": "Under Article 151 of the Constitution, the audit reports of the Comptroller and Auditor General of India relating to the accounts of the Union are submitted to:",
    "options": [
      "The Public Accounts Committee",
      "The Speaker of the Lok Sabha",
      "The President of India",
      "The Union Finance Minister"
    ],
    "correctAnswer": 2,
    "explanation": "Under Article 151(1), the CAG submits reports relating to Union accounts to the President, who causes them to be laid before each House of Parliament. (The reports are subsequently examined by the Public Accounts Committee). For State accounts, the CAG submits reports to the Governor under Article 151(2).",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "CAG",
    "article": "151",
    "examTrap": "CAG submits reports to the President (not directly to PAC or the Speaker)."
  },
  {
    "id": "q-257",
    "question": "With reference to the 73rd Constitutional Amendment Act, 1992, which of the following provisions is DISCRETIONARY (voluntary) for the State Legislatures to implement?",
    "options": [
      "Establishment of a three-tier system of Panchayats in all States with a population exceeding 20 lakhs.",
      "Reservation of not less than one-third of total seats for women.",
      "Reservation of seats for Other Backward Classes (OBCs) in Panchayats at any level.",
      "Direct elections to all seats in Panchayats at all three levels."
    ],
    "correctAnswer": 2,
    "explanation": "Under Article 243D(6), providing reservation for Backward Classes (OBCs) is a voluntary/discretionary provision left to the discretion of the State Legislature. Compulsory provisions include: direct elections to all seats (Art 243C), 3-tier structure (for states with pop > 20 lakhs, Art 243B), mandatory 1/3rd seats reservation for women (Art 243D(3)), and SC/ST reservations in proportion to population.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Panchayati Raj",
    "article": "243B, 243C, 243D",
    "examTrap": "Reservation for SCs, STs, and women is compulsory, whereas reservation for OBCs is voluntary (discretionary)."
  },
  {
    "id": "q-258",
    "question": "Under Article 243(b) of the Constitution of India, what constitutes a 'Gram Sabha'?",
    "options": [
      "A body consisting of all adult residents living in a village.",
      "A body consisting of persons registered in the electoral rolls relating to a village comprised within the area of Panchayat at the village level.",
      "The elected representatives comprising the Village Panchayat.",
      "A committee of village elders nominated by the District Collector."
    ],
    "correctAnswer": 1,
    "explanation": "Article 243(b) defines 'Gram Sabha' as a body consisting of persons registered in the electoral rolls relating to a village comprised within the area of Panchayat at the village level. It does not mean all residents, but specifically all registered voters in that village.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Panchayati Raj",
    "article": "243",
    "examTrap": "Gram Sabha consists of all registered voters in the electoral rolls, not all adult inhabitants."
  },
  {
    "id": "q-259",
    "question": "Consider the following statements regarding the dissolution of Panchayats under Article 243E of the Constitution:\n1. Every Panchayat shall continue for five years from the date appointed for its first meeting and no longer.\n2. If a Panchayat is dissolved prematurely, elections must be held within six months of dissolution.\n3. A Panchayat reconstituted after premature dissolution serves for a full fresh term of five years.\nWhich of the statements given above is/are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 0,
    "explanation": "Statements 1 and 2 are correct under Articles 243E(1) and 243E(3). Statement 3 is incorrect because under Article 243E(4), a Panchayat reconstituted upon the premature dissolution of a Panchayat continues ONLY for the remainder of the period for which the dissolved Panchayat would have continued, NOT for a fresh 5-year term.",
    "difficulty": "Exam",
    "examType": "UPSC statement-based",
    "topic": "Panchayati Raj",
    "article": "243E",
    "examTrap": "A reconstituted Panchayat survives only for the remainder of the original 5-year term, not a full fresh term."
  },
  {
    "id": "q-260",
    "question": "The State Finance Commission to review the financial position of Panchayats and Municipalities under Articles 243I and 243Y is constituted by:",
    "options": [
      "The President of India every 5 years",
      "The Governor of the State every 5 years",
      "The State Legislative Assembly every 3 years",
      "The Chief Minister of the State every 5 years"
    ],
    "correctAnswer": 1,
    "explanation": "Under Article 243I (for Panchayats) and Article 243Y (for Municipalities), the Governor of a State is mandated to constitute a State Finance Commission at the expiration of every fifth year to review their financial position and make recommendations.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Panchayati Raj",
    "article": "243I, 243Y",
    "examTrap": "State Finance Commission is appointed by the Governor, not the President or State Assembly."
  },
  {
    "id": "q-261",
    "question": "With reference to the District Planning Committee (DPC) under Article 243ZD of the 74th Constitutional Amendment Act, consider the following statements:\n1. A District Planning Committee is constituted at the district level to consolidate draft development plans prepared by Panchayats and Municipalities.\n2. Four-fifths (4/5ths) of the total members of a DPC are elected by and from amongst the elected members of the District Panchayat and Municipalities.\n3. The proportion of elected members from rural and urban areas in the DPC is in proportion to the ratio between the rural and urban population of the district.\nWhich of the statements given above are correct?",
    "options": [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    "correctAnswer": 3,
    "explanation": "All three statements are correct under Article 243ZD: (1) DPC consolidates plans from Panchayats and Municipalities into a draft district development plan; (2) Not less than 4/5ths of the members of the DPC are elected by and from amongst the elected members of the district panchayat and municipalities; (3) Representation of rural and urban components is proportionate to the ratio of rural and urban populations in that district.",
    "difficulty": "Advanced",
    "examType": "UPSC statement-based",
    "topic": "Municipalities",
    "article": "243ZD",
    "examTrap": "In DPC (Article 243ZD), 4/5ths of members are elected, whereas in Metropolitan Planning Committee (Article 243ZE), 2/3rds are elected."
  },
  {
    "id": "q-262",
    "question": "The Twelfth Schedule of the Constitution, added by the 74th Constitutional Amendment Act, 1992, contains how many functional items within the purview of Municipalities?",
    "options": [
      "18 items",
      "29 items",
      "21 items",
      "12 items"
    ],
    "correctAnswer": 0,
    "explanation": "The 12th Schedule (Article 243W) specifies 18 functional items entrusted to Municipalities. In contrast, the 11th Schedule (Article 243G) contains 29 functional items for Panchayati Raj Institutions.",
    "difficulty": "Basic",
    "examType": "SSC-style",
    "topic": "Municipalities",
    "article": "243W",
    "examTrap": "11th Schedule has 29 items (Panchayats); 12th Schedule has 18 items (Municipalities)."
  }
];
