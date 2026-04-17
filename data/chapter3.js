// Chapter 3 – Equity Research & The Securities Exchange Act of 1934
window.CHAPTER_3 = {
  id: 3,
  title: "Equity Research & The Securities Exchange Act of 1934",
  subtitle: "Research analyst rules (FINRA 2241, Reg AC), Exchange Act of 1934 registration and reporting, insider trading, and anti-manipulation",
  sections: [
    {
      name: "Research Analyst Definitions & Information Barriers",
      rules: [
        {
          id: "finra-2241-definitions",
          name: "FINRA Rule 2241 — Research Analyst & Report Definitions",
          category: "FINRA Rule",
          language: "A research analyst is an associated person who makes recommendations in research reports and public appearances as to whether an equity security should be bought, sold, or held. This definition also includes employees who report to an analyst. A research report is any written or electronic communication that includes an analysis of equity securities of individual companies or industries that provides information on which it is reasonably sufficient to base an investment decision. The report is not required to be labeled a research report and the person who prepares it is not required to have the job title 'research analyst.'",
          concept: "FINRA Rule 2241 governs equity research. Its broad definitions sweep in newsletters and other analytical communications that don't bear the label 'research report,' and treat any employee reporting to an analyst as a research analyst subject to the same rules.",
          parameters: [
            "Research analyst: associated person who makes buy/sell/hold recommendations in reports or public appearances, including employees who report to the analyst",
            "Subject company: the company whose equity securities are the subject of a research report or public appearance",
            "Subject security: an equity security that is the subject of a research report prepared by a member firm",
            "Research report: any written or electronic communication that analyzes equity securities of individual companies or industries providing information sufficient to base an investment decision",
            "A Supervisory Analyst (Series 16 qualified) is responsible for approving research reports and other research-related communications",
            "Firms must create Written Supervisory Procedures (WSP) detailing the regulatory structure and policies covering research"
          ],
          exceptions: [
            "A communication does not need to be labeled a research report to be treated as one under the rules",
            "FINRA Rule 2241 covers equity research; FINRA Rule 2242 covers debt research"
          ],
          examTip: "The broad definition of 'research report' is a frequent trap: a registered rep's detailed newsletter about individual stocks IS a research report even if it has no formal label. Also remember that junior analysts who report to the lead analyst are themselves treated as research analysts."
        },
        {
          id: "ib-research-information-barriers",
          name: "Investment Banking / Research Information Barrier Requirements",
          category: "FINRA Rule",
          language: "A member's investment banking department is restricted from exercising any level of control over its research department, particularly in the preparation of research reports. Review and approval mechanisms whereby a member's investment banking department or any other non-research department has review or veto power over research reports are strictly prohibited. The supervision and approval of reports must be conducted exclusively by supervisory personnel in the research department.",
          concept: "The core structural firewall between investment banking and research. The goal is to prevent investment banking revenue pressures from corrupting analyst recommendations. All supervision of research must stay within the research department.",
          parameters: [
            "Investment banking personnel may NOT have review or veto power over research reports",
            "Supervision and approval of research must be conducted exclusively by research-department supervisory personnel",
            "Oral communications between research and investment banking for fact-verification must be transmitted through legal or compliance personnel, or conducted in the presence of a legal/compliance representative",
            "Written communications between research and investment banking for fact-verification must be routed through (or copied to) legal or compliance",
            "Communications not related to verification or conflict avoidance between research and investment banking are prohibited",
            "Small Firm Exception: firms that averaged 10 or fewer investment banking transactions as manager/co-manager AND generated $5 million or less in gross IB revenues per year over the prior three years are exempt from the gatekeeper/intermediary requirements",
            "Small Firm Exception records of communications must be maintained for three years",
            "The Small Firm Exception does NOT apply to restrictions on communications between the research department and the issuer",
            "For Small Firm Exception purposes, investment banking services does not include municipal securities transactions"
          ],
          exceptions: [
            "Narrow exception: investment banking or non-research personnel may review portions of a report solely for accuracy or conflict avoidance, subject to the legal/compliance routing requirements",
            "Small Firm Exception removes the requirement to have legal/compliance act as intermediary between research and investment banking"
          ],
          examTip: "Remember the Small Firm Exception thresholds: 10 or fewer IB transactions (as manager/co-manager) AND $5 million or less in IB gross revenues, averaged over the prior three years. The exception never eliminates research-to-issuer communication restrictions."
        },
        {
          id: "research-ib-solicitation-prohibition",
          name: "Research Analyst Prohibition on Investment Banking Solicitation",
          category: "FINRA Rule",
          language: "Research analysts are prohibited from participating in the solicitation of investment banking services. Investment banking services include acting as an underwriter or selling group member, acting as a financial adviser in a merger or acquisition, providing venture capital or equity lines of credit, private placements, private investment in public equity (PIPE), or serving as a placement agent for an issuer. Solicitation includes participating in pitch meetings. A research analyst is prohibited from participating in a road show connected with an investment banking service transaction.",
          concept: "Analysts may not be used as sales tools for investment banking. Keeping analysts out of pitch meetings and road shows protects their independence and ensures customers do not perceive them as part of the IB marketing effort.",
          parameters: [
            "Analysts cannot participate in pitch meetings with potential IB clients",
            "Analysts cannot participate in road shows connected with IB service transactions",
            "Three-way communications are prohibited: analyst cannot communicate with a customer about an IB transaction in the presence of IB personnel or issuer personnel",
            "IB personnel cannot directly or indirectly direct an analyst to participate in sales/marketing for an IB transaction or to communicate with customers about an IB transaction",
            "Analyst may communicate with customers about IB transactions if: outside the presence of IB personnel and issuer personnel, and the information is fair, balanced, and not misleading"
          ],
          exceptions: [
            "Emerging Growth Company (EGC) exception: for an EGC's IPO, the prohibition against analysts participating in pitch meetings and joint due diligence meetings does not apply; all other non-IPO solicitation restrictions remain in place"
          ],
          examTip: "The three-way communication prohibition is high-yield: an analyst talking to a customer about an IB deal becomes a violation the moment an IB employee or issuer representative joins the conversation. The analyst must immediately stop. EGC IPO pitch meetings are the only carve-out."
        }
      ]
    },
    {
      name: "Research Report Safe Harbors, Quiet Periods & Disclosures",
      rules: [
        {
          id: "rule-137",
          name: "SEC Rule 137 — Research by Non-Participating Broker-Dealers",
          category: "SEC Rule",
          language: "A broker-dealer that is not a participant in a distribution (meaning it may not receive or have received payment from the issuer, a selling security holder, or another distribution participant) may distribute or publish research reports for securities that are in the registration process. The research report will not constitute an offer as long as no type of consideration (monetary or otherwise) has been received by the broker-dealer from members of the distribution. An exception exists for independent research and the regular subscription price for the research report.",
          concept: "Safe harbor allowing non-syndicate firms to issue research during a securities offering's cooling-off period, provided they have not received any payment related to the offering.",
          parameters: [
            "Broker-dealer must NOT be a participant in the distribution to use Rule 137",
            "Broker-dealer must not have received payment from the issuer, a selling security holder, or any distribution participant",
            "Broker-dealer must publish research reports in the regular course of business",
            "Issuer must not have been, over the prior three years, a blank-check company, a shell company, or an issuer of penny stock"
          ],
          exceptions: [
            "Exception to the no-payment requirement: payment for independent research or the regular subscription price for the research service is permitted"
          ],
          examTip: "Rule 137 = non-participant. Rule 138 = participant, different securities. Rule 139 = participant, same securities (reporting issuer only). Memorize this three-rule sequence because exam questions love asking which rule applies to which scenario."
        },
        {
          id: "rule-138",
          name: "SEC Rule 138 — Non-Equivalent Securities Research",
          category: "SEC Rule",
          language: "If a registration statement has been filed for a non-convertible debt security or a non-convertible preferred stock, a broker-dealer may, even if it is a participant in the distribution, publish or distribute a research report regarding the common stock and convertible securities of the issuer in the normal course of business. Conversely, if the registration statement covers common stock, convertible debt, or convertible preferred stock, a research report may be published or distributed regarding the non-convertible debt or non-convertible preferred stock of the issuer.",
          concept: "A participating broker-dealer can issue research on an issuer's OTHER class of securities (one that is not being registered) without violating the offering rules.",
          parameters: [
            "If the offering is non-convertible debt or preferred: research may be published on common stock or convertible securities",
            "If the offering is common, convertible debt, or convertible preferred: research may be published on non-convertible debt or non-convertible preferred",
            "Research must be in the normal course of business",
            "The key concept: the research must cover a different, non-equivalent class of securities from the one being offered"
          ],
          exceptions: [],
          examTip: "Rule 138 is about covering the OTHER class of security. A firm managing a bond offering can still publish equity research, and a firm managing an IPO can still publish debt research. The test: are the two securities non-equivalent?"
        },
        {
          id: "rule-139",
          name: "SEC Rule 139 — Research Reports (Reporting & WKSI Issuers)",
          category: "SEC Rule",
          language: "If an issuer is subject to the reporting requirements of the Act of 1934 or is a well-known seasoned issuer (WKSI), a broker-dealer may publish or distribute a research report regarding the issuer's securities even if it is a participant in the distribution, as long as certain conditions are met. For issuer-specific reports, the report must be distributed with reasonable regularity in the normal course of coverage and may not represent an initiation of coverage. For industry reports, the report must cover a substantial number of issuers and contain a comprehensive list of currently recommended securities with no greater prominence given to the offering issuer.",
          concept: "Allows participating broker-dealers to continue existing research coverage on SEC-reporting or WKSI issuers during an offering, as long as the research is genuinely part of an ongoing, regular publication pattern.",
          parameters: [
            "Issuer must be an Exchange Act reporting company (Section 13/15(d)) or a WKSI",
            "Issuer-specific reports: must be distributed with reasonable regularity; may not represent initiation of coverage",
            "Industry reports: must cover a substantial number of issuers in the industry; must include a comprehensive list of currently recommended securities; the offering issuer cannot receive greater prominence than others",
            "A research report published in conjunction with a Rule 144A offering by a WKSI is NOT considered an offer for sale",
            "A research report regarding a Regulation S offering is not considered a selling effort and does not conflict with offshore transaction requirements"
          ],
          exceptions: [
            "Rule 139 is NOT available for initiation of coverage — only continuation of existing coverage",
            "Industry reports: if the offering issuer is given greater prominence than others, the safe harbor is lost"
          ],
          examTip: "Rule 139 has TWO sub-tests: issuer-specific (regular coverage, no initiation) and industry-wide (substantial number of issuers, no greater prominence). Exam questions often focus on the 'initiation of coverage' disqualifier — starting new coverage of an IPO client is not protected."
        },
        {
          id: "quiet-periods",
          name: "Research Quiet Period Rules (FINRA Rule 2241)",
          category: "FINRA Rule",
          language: "To delineate investment banking business from research recommendations, participating broker-dealers are prohibited from publishing research reports or making public appearances regarding the subject security during a quiet period following offerings. The length of the quiet period depends on the nature of the transaction and the role of the firm. 'From the date of the offering' is defined as the later of the effective date of the registration or the first date on which a bona fide offering of the securities is made to the public.",
          concept: "Quiet periods prevent analysts from pumping a stock immediately after an offering to benefit their firm's investment banking relationship. The rules vary by IPO vs. secondary offering and by the firm's role.",
          parameters: [
            "IPO quiet period — manager or co-manager: 10 calendar days from the date of the offering",
            "IPO quiet period — all other participating firms (selling group members): 10 calendar days from the date of the offering",
            "Secondary (follow-on) offering quiet period — manager or co-manager: three calendar days from the date of the offering",
            "Secondary (follow-on) offering quiet period — all other participating firms: no restriction",
            "Hot News Exception: significant news or events that make a material impact or material change in a company's financial condition, operations, or earnings (requiring Form 8-K filing) allow research during the quiet period; firm must obtain authorization of its legal and compliance department",
            "Actively traded securities exception for secondary offerings: quiet period does not apply if the issuer's securities are under continuous coverage and are actively traded (ADTV of at least $1 million; public float of at least $150 million)",
            "Unregistered offerings: no quiet period for private placements of 144A securities or Regulation S offshore offerings",
            "Emerging Growth Companies (EGC): three-day and 10-day quiet periods are eliminated entirely"
          ],
          exceptions: [
            "Hot News Exception requires legal/compliance authorization",
            "Secondary offering quiet period does not apply to non-participating firms",
            "No quiet period for unregistered offerings (144A, Regulation S)",
            "EGC quiet periods are eliminated — analysts may publish research immediately after an IPO or secondary"
          ],
          examTip: "For IPOs, both the manager and all other participants face the same 10-day quiet period. For secondary offerings, only the manager faces a restriction (3 days); selling group members have none. The EGC elimination of quiet periods is a JOBS Act provision — always applicable to EGC IPOs."
        },
        {
          id: "emerging-growth-company",
          name: "Emerging Growth Company (EGC) — Research Rule Modifications",
          category: "FINRA Rule",
          language: "FINRA's research rules conform to the requirements of the Jumpstart Our Business Startups (JOBS) Act as they apply to emerging growth companies. An EGC is a company with total annual revenues of less than $1.235 billion (indexed to inflation) during the most recently completed fiscal year. For an EGC's IPO, the prohibition against a research analyst participating in pitch meetings with investment bankers is not applicable. Also, the prohibition from joint due diligence meetings is not applicable if it relates to an IPO. The three-day and 10-day quiet periods that restrict a research analyst's ability to publish a research report or make a public appearance concerning a securities offering have been eliminated for EGCs.",
          concept: "The JOBS Act created special relaxed rules for EGCs to encourage smaller companies to go public. For EGC IPOs specifically, analysts can attend pitch meetings and can publish research immediately after an offering.",
          parameters: [
            "EGC threshold: total annual revenues less than $1.235 billion (indexed to inflation) in the most recently completed fiscal year",
            "EGC IPO exception: analyst participation in pitch meetings with investment bankers is permitted",
            "EGC IPO exception: participation in joint due diligence meetings is permitted",
            "Quiet periods (both 3-day and 10-day) are eliminated for EGC offerings",
            "All other non-IPO solicitation restrictions (road shows, three-way communications) remain in place for EGCs"
          ],
          exceptions: [
            "EGC exceptions apply only to IPO-related activities; non-IPO solicitation restrictions remain fully in force"
          ],
          examTip: "Two EGC research benefits: (1) analyst can attend IB pitch and joint due diligence meetings for EGC IPOs, and (2) no quiet period after the offering. Both apply ONLY to the IPO — for a follow-on by the same EGC, normal solicitation rules apply."
        },
        {
          id: "research-report-disclosures",
          name: "FINRA Rule 2241 — Research Report Disclosure Requirements",
          category: "FINRA Rule",
          language: "Mandatory disclosures must appear on the first page of the research report or refer to the page on which they appear, and must not be written in a reduced typeface. If a member publishes a report on six or more subject companies (a compendium report), the report may clearly and prominently direct the reader to where the required disclosures can be found.",
          concept: "Disclosure requirements ensure that investors have the information needed to assess potential conflicts of interest in a research report. The rules cover analyst holdings, firm ownership, market-making, IB relationships, and compensation.",
          parameters: [
            "Mandatory disclosures: whether the analyst or analyst's household has a financial interest in the subject company's securities (shares, warrants, options)",
            "Mandatory disclosures: whether the firm owns 1% or more of the subject company's outstanding stock (determined as of the end of the month directly preceding publication, allowing a 10-day calculation period; if published less than 10 days from month-end, may use second-most-recent month)",
            "Mandatory disclosures: whether the firm makes a market in the subject security",
            "Mandatory disclosures: any material conflict of interest known to the analyst or member",
            "Mandatory disclosures: whether the firm received IB compensation from the subject company in the preceding 12 months or expects to seek/receive compensation in the following three months",
            "Mandatory disclosures: whether the analyst or analyst's household is an officer, director, or advisory board member of the subject company",
            "Must disclose the percentage of all securities rated in each category (buy, hold, sell)",
            "Must disclose the percentage of subject companies in each rating category that are IB clients within the past 12 months",
            "Must provide a price chart of actual performance for the last three years and the firm's recommendations, including rating/price target changes for securities covered one year or longer",
            "Must provide current market price at the time of the recommendation and possible risks to achieving the price target",
            "If a price target appears, the valuation method used must be disclosed; price targets are optional",
            "Compendium reports (six or more companies): may direct readers to disclosures via hyperlink (electronic) or toll-free number/web address/mailing address (paper)",
            "Acceptable market-making disclosure language: 'We make a market in the security.' (promissory, exaggerated, or flamboyant language is prohibited)"
          ],
          exceptions: [
            "Compendium report (six or more companies): full disclosures need not appear in the body of the report; reader may be clearly directed to where they can be found",
            "Globally branded reports: foreign analysts who are not associated persons need not be U.S.-registered, but their name and non-qualification must be disclosed",
            "Mixed-team reports: a foreign analyst contributing must be U.S.-registered"
          ],
          examTip: "The 1% firm-ownership threshold for disclosure uses month-end data with a 10-day lag. The IB compensation disclosure window is 12 months backward and 3 months forward. Promissory language ('our last pick was up 30%!') is prohibited even if technically true."
        },
        {
          id: "analyst-compensation-rules",
          name: "FINRA Rule 2241 — Analyst Compensation & Compensation Committee",
          category: "FINRA Rule",
          language: "Compensating analysts based on specific investment banking deals or on a percentage basis for investment banking deals is strictly prohibited. Deal-related bonuses are similarly prohibited. Compensation should be based on an analyst's overall contribution to the firm. If an analyst's compensation is in any way based on the member firm's investment banking revenue, this fact must be disclosed in any research reports authored by that analyst. Member firms are required to form a compensation committee to review and approve analyst compensation.",
          concept: "Compensation rules prevent investment banking from indirectly influencing research by tying analyst pay to deal flow. The compensation committee structure insulates that determination from IB pressure.",
          parameters: [
            "Compensation tied to specific IB deals or as a percentage of IB deals is prohibited",
            "Deal-related bonuses are prohibited",
            "If any analyst compensation is based on the firm's overall IB revenue, that must be disclosed in all reports the analyst authors",
            "Compensation committee must review and approve (at least annually) the compensation of analysts primarily responsible for the substance of research reports",
            "Compensation committee must document the basis for each analyst's compensation",
            "Compensation committee must report to the board of directors or, if no BOD, to a senior executive officer",
            "No representative of the investment banking department may be on the compensation committee",
            "Factors for compensation: individual performance, productivity, quality of work, correlation between recommendations and security performance, spectrum of ratings from clients/sales force/external professionals (excluding IB and independent rating services)",
            "Analysts not primarily responsible for the substance of reports (e.g., junior analysts who report to the lead) are exempt from compensation committee review"
          ],
          exceptions: [
            "Junior analysts who merely report to the lead analyst and are not primarily responsible for report substance are exempt from compensation committee review"
          ],
          examTip: "Two key compensation rules: (1) no deal-specific or deal-percentage bonuses ever, and (2) firm-wide IB revenue as a compensation component is permitted but must be disclosed in every report. The compensation committee is prohibited from having any IB representative."
        },
        {
          id: "analyst-personal-trading",
          name: "FINRA Rule 2241 — Analyst Personal Trading Restrictions",
          category: "FINRA Rule",
          language: "A research analyst's household is prohibited from buying or selling any security or any option or derivative of such security in a manner that is inconsistent with her own or her member firm's recommendations as reflected in the most recent research report. Research analysts are prohibited from purchasing or receiving pre-IPO shares of a company in the same sector they cover. Firms are required to create their own policies and procedures to ensure employees covered by this rule do not benefit in their trading from knowledge of the content or timing of a research report before the intended recipients have had a reasonable opportunity to act.",
          concept: "Personal trading rules prevent analysts from front-running their own reports or trading against their published recommendations. Firms must define their own blackout window policies.",
          parameters: [
            "Analyst's household includes any person whose principal address is the same as the analyst's, but NOT an unrelated roommate",
            "RA accounts include: joint accounts with household members, UTMA custodial accounts, accounts where the RA has discretionary authority",
            "Buy recommendation: analyst may buy or hold, cannot sell or sell short",
            "Hold/neutral/market-perform recommendation: analyst who owns must hold; analyst who does not own cannot buy or sell short",
            "Sell recommendation: analyst cannot buy; analyst cannot effect a short sale while maintaining a hold recommendation",
            "Financial hardship: firms may define financial hardship circumstances that permit inconsistent trading to raise funds",
            "Divesting holdings exception: if the firm has a policy prohibiting analysts from holding covered securities, the firm may establish a legal/compliance-approved liquidation plan permitting inconsistent trading",
            "Pre-IPO share prohibition: analysts cannot purchase or receive shares of a company in the same sector they cover prior to its IPO",
            "Personal trading restrictions apply only to securities covered by the research analyst; investing in a mutual fund that holds covered securities is permitted",
            "Persons with ability to influence report content (who can change a report before publication) are also subject to these restrictions; legal/compliance reviewers are NOT (they cannot dictate a rating)"
          ],
          exceptions: [
            "Financial hardship exception: firm-defined; permits inconsistent trading to raise needed funds",
            "Divestiture exception: if firm prohibits analysts from holding covered securities, analyst may sell despite a buy rating under a compliance-approved liquidation plan",
            "Legal and compliance professionals reviewing reports for compliance purposes are NOT subject to personal trading restrictions"
          ],
          examTip: "An analyst with a hold recommendation who OWNS the stock must HOLD it — selling is an inconsistency violation, even though you might think hold means 'it's okay to sell.' Pre-IPO shares in the analyst's own sector are banned entirely, regardless of whether the company will be in their coverage universe."
        }
      ]
    },
    {
      name: "Regulation AC — Analyst Certification",
      rules: [
        {
          id: "regulation-ac",
          name: "Regulation AC — Analyst Certification",
          category: "Regulation",
          language: "Under Regulation AC, a research analyst must make a statement certifying that the views in the research report accurately describe his personal views about the subject issuer's securities, and must include a statement certifying either: (1) none of his compensation is, was, or will be related to his recommendations or views expressed in the research report; or (2) part or all of his compensation is, was, or will be related to his recommendations or views. If (2) is certified, the analyst must provide the source, amount, and purpose of the compensation, and the report must note that the compensation may influence the recommendation.",
          concept: "Regulation AC (Analyst Certification) was adopted to restore investor confidence in research by requiring analysts to personally attest that their views are their own and to disclose compensation conflicts. It covers both written research reports and public appearances.",
          parameters: [
            "Analyst must certify personal views in every research report",
            "Analyst must certify one of two compensation statements: (a) no compensation related to recommendations, or (b) compensation is or may be related to recommendations",
            "If compensation is related, the analyst must disclose source, amount, and purpose",
            "Report must state that compensation-linked views may be influenced by that compensation",
            "Broker-dealers publishing research must maintain records of public appearances by their analysts",
            "Records must be created within 30 days after each calendar quarter in which analysts make public appearances",
            "Records must include: a statement that public appearance views reflected personal views about subject securities; a written statement that no part of compensation is or will be related to public appearance views",
            "If a broker-dealer fails to obtain public appearance certifications, it must notify its designated examining authority (DEA) and for the next 120 days must disclose in any report by that analyst that it did not provide public appearance certifications"
          ],
          exceptions: [
            "If the broker-dealer fails to obtain certifications regarding public appearances, it must notify its DEA — it may still continue publishing research but must add the 120-day disclosure"
          ],
          examTip: "Reg AC has two tracks: (1) written research reports requiring an in-document certification from the analyst, and (2) public appearances requiring quarterly record creation within 30 days after the quarter. Failure to certify public appearances triggers the 120-day disclosure penalty and DEA notification — not automatic suspension."
        },
        {
          id: "public-appearances",
          name: "FINRA Rule 2241 — Public Appearances Definition & Disclosures",
          category: "FINRA Rule",
          language: "A public appearance is defined as any conference call, seminar, or public speaking engagement that is delivered to 15 or more persons, or one or more representatives of the media (radio, TV, or print media interview) in which a research analyst makes a recommendation or offers an opinion concerning an equity security. A television interview is a public appearance regardless of how many people are interviewing the analyst. An internal meeting is not a public speaking engagement.",
          concept: "Public appearance rules extend the research disclosure framework to oral and broadcast media so that the same conflicts disclosed in written reports are also disclosed when analysts speak publicly.",
          parameters: [
            "Threshold: conference call, seminar, or public speaking engagement delivered to 15 or more persons",
            "Any media interview (radio, TV, print) with one or more media representatives qualifies as a public appearance",
            "Television interview: public appearance regardless of audience size or number of interviewers",
            "Internal meetings: NOT public appearances",
            "Disclosures required during public appearances: whether subject company is an IB client; analyst or household financial interest in the subject security; firm ownership of 1% or more; any material conflict of interest; whether analyst or household is an officer, director, or advisory board member of the subject company",
            "Members must develop a procedure for making required disclosures contemporaneous with public appearances (e.g., scripted disclaimers, transcript review)"
          ],
          exceptions: [
            "Internal meetings are not public appearances and are not subject to disclosure requirements"
          ],
          examTip: "The '15 or more persons' threshold applies only to conferences/seminars. A one-on-one TV interview still counts as a public appearance regardless of audience size. Always ask: is the analyst making a recommendation or offering an opinion about an equity security? If yes and the audience meets the threshold, disclosure is required."
        }
      ]
    },
    {
      name: "Securities Exchange Act of 1934 — Registration & Reporting",
      rules: [
        {
          id: "exchange-act-1934-structure",
          name: "Securities Exchange Act of 1934 — Overview & the SEC",
          category: "Federal Law",
          language: "The Securities Exchange Act of 1934 covers many activities in the securities markets, including: regulation of transactions in the secondary market (including antimanipulation rules and regulation of the extension of credit); registration and regulation of broker-dealers; registration and regulation of securities exchanges; oversight of SROs; and registration and regulation of public companies, including regular financial disclosures, proxy rules, and insider reporting. The Exchange Act authorized the creation of the Securities and Exchange Commission (SEC).",
          concept: "The '34 Act is the foundational law for secondary market regulation. While the '33 Act governs new issuances, the '34 Act governs everything that happens after — trading, disclosure, anti-fraud, and the regulatory infrastructure.",
          parameters: [
            "SEC created by the Act: five commissioners appointed by the President with Senate consent; terms of five years; no more than three commissioners from the same political party",
            "Commissioners must engage in the SEC's work full-time and cannot participate in securities transactions during their tenure",
            "U.S. government and municipal securities are exempt from some parts of the Exchange Act (e.g., credit extension restrictions, proxy rules, certain insider reporting)",
            "Foreign internal market exception: transactions executed on a foreign stock exchange floor are not subject to the Exchange Act, even if the order originated in the U.S.; however, solicitation activity that took place in the U.S. in connection with a foreign transaction may be subject to Exchange Act anti-fraud rules",
            "Violations: individuals face maximum fines of $5,000,000 and/or imprisonment up to 20 years per violation; business entities face maximum fines of $25,000,000 per violation",
            "If violators prove they were unaware of the rule violated, a fine (but not imprisonment) may be levied"
          ],
          exceptions: [
            "Foreign internal market exception: execution on a foreign exchange floor takes the transaction outside Exchange Act jurisdiction (though U.S.-side solicitation remains subject to anti-fraud rules)",
            "Exempt securities (U.S. government, municipal) are not subject to credit extension restrictions, proxy solicitation rules, and certain other Exchange Act provisions"
          ],
          examTip: "The SEC has five commissioners with staggered five-year terms, no more than three from one political party. Commissioners cannot trade securities during their tenure. The foreign-market exception is subtle: the ORDER can originate in the U.S. (that's fine), but the EXECUTION must be on the foreign exchange — OTC phone execution between a U.S. and Tokyo dealer is still subject to the Exchange Act."
        },
        {
          id: "section-12k-trading-suspensions",
          name: "Section 12(k) — SEC Emergency Authority & Trading Suspensions",
          category: "Federal Law",
          language: "Section 12(k)(1) of the Securities Exchange Act gives the SEC the authority to suspend trading in any security (other than an exempted security) for a period not exceeding 10 business days, and to suspend all trading on any national securities exchange for a period not exceeding 90 calendar days (the latter cannot take effect if the SEC notifies the President and the President disapproves). Section 12(k) also grants the Commission emergency authority to alter, supplement, suspend, or impose requirements on any matter subject to SEC or SRO regulation, for up to 10 business days including extensions, when necessary to maintain or restore fair and orderly markets or to ensure prompt, accurate, and safe clearance and settlement.",
          concept: "Section 12(k) is the SEC's emergency toolkit for extreme market disruptions. Individual security suspensions are short (10 business days); market-wide suspensions require presidential non-objection and cannot exceed 90 calendar days.",
          parameters: [
            "Individual security suspension: up to 10 business days; does not apply to exempt securities",
            "Market-wide (exchange-wide) suspension: up to 90 calendar days; cannot take effect if the President disapproves after SEC notification",
            "Emergency orders: cannot remain in effect for more than 10 business days including extensions",
            "Emergency: major market disturbance characterized by sudden and excessive securities price fluctuations (or substantial threat thereof), or substantial disruption of the safe or efficient operation of the national clearance and settlement system",
            "Emergency authority requires SEC to determine the order is in the public interest, for the protection of investors, and necessary to maintain fair and orderly markets or ensure safe clearance and settlement"
          ],
          exceptions: [
            "Exempt securities are not subject to individual trading suspensions under Section 12(k)(1)"
          ],
          examTip: "Two suspension timeframes to memorize: individual security = 10 BUSINESS days; market-wide on an exchange = 90 CALENDAR days (presidential veto possible). Emergency orders under the broader 12(k) authority cap at 10 business days including any extensions."
        },
        {
          id: "section-13-reporting",
          name: "Section 13 — Periodic Reporting: Forms 10-K, 10-Q, and 8-K",
          category: "Federal Law",
          language: "Rules 13a-11 and 13a-13 require issuers of securities registered with the SEC (Section 12 securities) to file an annual report on Form 10-K and quarterly reports on Form 10-Q. A publicly traded corporation is required to register with the SEC if it has total assets of more than $10 million held of record by either (1) 2,000 or more persons, or (2) 500 or more persons who are not accredited investors, or if its securities trade on a national securities exchange. Form 8-K must be filed within four business days of a triggering event that could materially affect the issuer's financial condition or share price.",
          concept: "Section 13 periodic reporting is the cornerstone of the SEC's ongoing disclosure system for public companies. These filings keep the investing public informed about issuer condition on an annual, quarterly, and current (event-driven) basis.",
          parameters: [
            "Registration trigger: total assets over $10 million AND either 2,000 or more shareholders of record OR 500 or more non-accredited shareholders of record; OR securities listed on a national securities exchange (NYSE, Nasdaq)",
            "Form 10-K (annual report): filed after the fiscal year end; includes business description, assets, legal proceedings, risk factors, equity market information, director/officer list, and detailed year-end financial results",
            "Form 10-Q (quarterly report): filed after each of the first three fiscal quarters; no 10-Q required for the fourth quarter (results are included in the 10-K)",
            "Form 8-K (current report): filed within four business days of a triggering event; nine sections cover Business/Operations, Financial Information, Securities/Trading, Accountants/Financial Statements, Corporate Governance/Management, Asset-Backed Securities, Regulation FD, Financial Statements/Exhibits, and Other Events",
            "Section 7 of Form 8-K specifically covers Regulation FD disclosures",
            "Rules 13a-11 and 13a-13 do not apply to foreign governments, foreign private issuers, or issuers of ADRs"
          ],
          exceptions: [
            "Rules 13a-11 and 13a-13 (10-K and 10-Q) do not apply to foreign governments, foreign private issuers, and ADR issuers",
            "No 10-Q is required for the fourth fiscal quarter"
          ],
          examTip: "8-K triggers: think 'material surprise' — CEO resignation, restatement, unregistered equity sale, delisting, code of ethics change. The four business day deadline is the default; students often confuse it with five business days (that is the Schedule 13D deadline). 10-Q covers the first three quarters only; Q4 results roll into the 10-K."
        },
        {
          id: "regulation-fd",
          name: "Regulation FD — Fair Disclosure",
          category: "Regulation",
          language: "Regulation FD bars issuers from selectively disclosing material, non-public information to securities professionals (including employees of broker-dealers and investment advisers) or to shareholders if it is reasonably foreseeable that they will trade on the information. If the disclosure was intentional, the company must simultaneously disclose the information to the public. If the disclosure was unintentional, the company has 24 hours to publicly disseminate the information, or until the opening of the next trading day on the NYSE if the disclosure takes place during a weekend or holiday, whichever is later.",
          concept: "Regulation FD levels the playing field between institutional and retail investors by prohibiting issuers from giving Wall Street analysts or large investors a private heads-up on material information before releasing it to the public.",
          parameters: [
            "Applies to disclosures by senior company officials and those who regularly communicate with analysts and investors (e.g., investor relations, public relations)",
            "Rule 100(b)(1) — four categories to whom selective disclosure is prohibited: (1) broker-dealers and associated persons; (2) investment advisers, institutional investment managers and associated persons; (3) investment companies, hedge funds, and affiliated persons; (4) any holder of issuer securities where it is reasonably foreseeable the holder will trade on the information",
            "Intentional selective disclosure: simultaneous public disclosure required",
            "Unintentional selective disclosure: public disclosure required within 24 hours, or by the opening of trading on the NYSE if the disclosure occurred on a weekend or holiday, whichever is later",
            "Permissible methods of public disclosure: Form 8-K filing with the SEC; press release; Internet broadcast reasonably designed to reach a broad spectrum of the investing public",
            "Regulation FD disclosures use Form 8-K Section 7"
          ],
          exceptions: [
            "Rule 100(b)(2) exclusions: communications to a person who owes the issuer a duty of trust or confidence (attorney, investment banker, accountant)",
            "Rule 100(b)(2) exclusions: communications to any person who expressly agrees to maintain the information in confidence",
            "Rule 100(b)(2) exclusions: disclosures to an entity whose primary business is issuing credit ratings, where the information is disclosed solely to develop a credit rating and ratings are publicly available",
            "Normal course of business disclosures to those with a duty of confidentiality (accountants, lawyers, investment bankers) are excluded"
          ],
          examTip: "The intentional vs. unintentional timing distinction is critical: intentional = simultaneous; unintentional = 24 hours (or NYSE next opening if weekend/holiday). The duty-of-confidentiality exclusion covers the company's own lawyers, accountants, and bankers — NOT analysts who promise to keep it confidential but are acting for themselves."
        },
        {
          id: "schedule-13d-13g",
          name: "Section 13(d) — Schedules 13D and 13G (5% Beneficial Ownership)",
          category: "Federal Law",
          language: "Section 13(D) of the Exchange Act requires any person who acquires more than 5% of an issuer's equity securities to notify the issuer, the exchange where the securities are traded, and the SEC within five business days after the acquisition. Schedule 13G is an alternative filed by institutional investors (e.g., mutual fund companies) that have no intention to influence or control the issuer (passive investors). The person filing either form is required promptly to update the schedule to include any material change.",
          concept: "Schedule 13D is the activist ownership disclosure — it flags potential takeover threats to the market. Schedule 13G is the passive-investor equivalent with lighter disclosure. Both are triggered by crossing 5% ownership.",
          parameters: [
            "Trigger: acquisition of more than 5% of an issuer's equity securities",
            "Filing deadline: within five business days after the acquisition",
            "Filed with: the SEC, the issuer, and the exchange where the securities trade",
            "Schedule 13D required disclosures: the security and issuer; identity and background of the filer (individual or group); source and amount of funds (including whether borrowed); purpose of the transaction (including acquisition intent or passive investment rationale); interest in issuer securities (number of shares and percentage); contracts or relationships with respect to issuer securities (e.g., standstill agreements); exhibits (merger agreement, tender offer agreement, joint filing agreement)",
            "Schedule 13G: alternative filing used by passive institutional investors (mutual fund companies, etc.) with no intent to influence or control the issuer",
            "Both forms must be promptly amended to reflect any material change"
          ],
          exceptions: [
            "Passive investors (no intent to influence or control) may file Schedule 13G instead of 13D",
            "Material changes require prompt amendment to either schedule"
          ],
          examTip: "13D = active/aggressive investor (could be a takeover bid); 13G = passive institutional investor. Both are triggered at 5% and must be filed within five business days. The 'purpose of the transaction' section of 13D is what markets watch most closely — it reveals whether the buyer wants control."
        },
        {
          id: "schedule-13f",
          name: "SEC Rule 13f-1 — Schedule 13F (Institutional Investment Manager Reporting)",
          category: "SEC Rule",
          language: "SEC Rule 13f-1 requires quarterly filings when institutional investment managers (such as investment companies, holding companies, and hedge funds) exercise investment discretion over at least $100 million in equity securities. The schedule includes information concerning the securities owned by the filer. This form must be filed regardless of whether the filer is registered with the SEC. The SEC publishes the Official List of Section 13(f) Securities.",
          concept: "Schedule 13F gives the public a window into the holdings of large institutional money managers, creating transparency about who holds significant equity positions in publicly traded companies.",
          parameters: [
            "Trigger: exercise of investment discretion over at least $100 million in equity securities",
            "Filing frequency: quarterly",
            "Applies regardless of whether the institutional investment manager is registered with the SEC",
            "Section 13(f) securities include: exchange-traded stocks (NYSE, AMEX, Nasdaq); equity options; warrants; shares of closed-end investment companies; certain convertible debt securities; shares of exchange-traded funds (ETFs)",
            "NOT Section 13(f) securities: open-end mutual fund shares registered under the Investment Company Act of 1940; Pink Limited Market securities that are not Section 12 reporting companies"
          ],
          exceptions: [
            "Open-end mutual fund (mutual fund) shares are NOT 13(f) securities even if listed",
            "Pink Limited Market securities that are not Section 12 reporting companies are excluded"
          ],
          examTip: "The $100 million threshold is aggregate investment discretion — not a single position. ETFs are 13(f) securities; open-end mutual funds are NOT. Filing is required regardless of whether the manager is SEC-registered — hedge funds that are not registered still must file if they hit $100 million."
        }
      ]
    },
    {
      name: "Section 16 — Insider Ownership Reporting & Short-Swing Profits",
      rules: [
        {
          id: "section-16-insider-definition",
          name: "Section 16 — Insider Definition and Forms 3, 4, and 5",
          category: "Federal Law",
          language: "An insider, for purposes of SEC Rule 16a-1, is a director, officer, or owner of more than 10% of the stock of a corporation. These individuals are required to report to the SEC within 10 days of becoming insiders regarding the amount of the issuer's equity securities they own. They are also required to report any changes in their position no later than the second business day following the change in position. The initial filing when an individual becomes an insider is on Form 3, changes in beneficial ownership are filed on Form 4, and certain annual transactions (such as gifts) are reported on Form 5.",
          concept: "Section 16 disclosure requirements ensure the public knows when corporate insiders are buying and selling their company's stock, deterring the misuse of inside information and creating a paper trail for short-swing profit recovery.",
          parameters: [
            "Insider definition: director, officer, or owner of more than 10% of the issuer's equity securities",
            "Form 3: initial filing when a person becomes an insider; deadline is within 10 days of becoming an insider",
            "Form 4: changes in beneficial ownership; deadline is no later than the second business day following the change",
            "Form 5: annual filing covering certain transactions such as gifts",
            "No requirement to file reports for transactions occurring in an insider's 401(k) account",
            "Insiders cannot sell the stock short (except certain occasions using 'shorting against the box' to ensure timely delivery of securities in legal transfer)"
          ],
          exceptions: [
            "401(k) account transactions do not require Section 16 reporting"
          ],
          examTip: "Form 3 = initial (10 days to file); Form 4 = changes (2 business days to file); Form 5 = annual for gifts and exempt transactions. The insider threshold is MORE THAN 10% — someone who owns exactly 10% is not an insider under Section 16."
        },
        {
          id: "section-16b-short-swing-profits",
          name: "Section 16(b) — Short-Swing Profit Rule",
          category: "Federal Law",
          language: "Insiders are not allowed to make short-swing profits in the stock of the corporation in which they are insiders. Short-swing profits are those earned within six months of purchase. If an insider sells stock at a profit within six months of its acquisition, the corporation may sue for recovery of the profit (disgorgement). This restriction also applies if an insider sells stock held longer than six months and then repurchases it within six months of the sale at a lower price than the previous sale price.",
          concept: "Section 16(b) is a strict-liability rule — it does not require proof that the insider actually possessed inside information. Any profit from a purchase and sale (or sale and purchase) within any six-month window must be returned to the corporation.",
          parameters: [
            "Any purchase-and-sale or sale-and-purchase by an insider within a six-month window creates recoverable short-swing profits",
            "Corporation (not the SEC) has the right to sue the insider for disgorgement of profits",
            "The rule also applies in reverse: insider sells at a high price, then buys back at a lower price within six months — the profit is recoverable",
            "Insiders cannot sell the issuer's stock short",
            "Shorting against the box (short sale against an existing long position) is permitted in limited circumstances to ensure timely delivery in legal transfer situations"
          ],
          exceptions: [
            "Short against the box (limited to ensuring timely delivery in legal transfer) is permissible for insiders",
            "The rule is strict liability — no intent to misuse information is required for liability to attach"
          ],
          examTip: "Section 16(b) is strict liability — intent is irrelevant. The corporation files the suit, not the SEC. The six-month window applies to BOTH directions: buy then sell within 6 months OR sell then buy within 6 months. The 'sell high, buy low' within 6 months reversal is frequently tested."
        }
      ]
    },
    {
      name: "Insider Trading Rules — Rule 10b-5, ITSA, ITSFEA",
      rules: [
        {
          id: "rule-10b-5",
          name: "Rule 10b-5 — Anti-Fraud / Employment of Manipulative Devices",
          category: "SEC Rule",
          language: "As it relates to the purchase or sale of any security, Rule 10b-5 makes it unlawful to: (1) employ any device, scheme, or artifice to defraud; (2) make any untrue statement of a material fact or omit to state a material fact that is necessary in order to make the statements made, in light of the circumstances under which they were made, not misleading; or (3) engage in any act, practice, or course of business that operates as a fraud or deceit upon any person.",
          concept: "Rule 10b-5 is the SEC's broad anti-fraud weapon. While it prohibits many forms of securities fraud, its most prominent application is insider trading — prohibiting trading on material, non-public information obtained through a fiduciary duty or misappropriation.",
          parameters: [
            "Three prohibited acts: (1) device/scheme/artifice to defraud; (2) untrue statement or material omission; (3) any fraudulent act or course of business",
            "Insider trading is a primary application: purchase or sale of securities using material, non-public information about those securities in a fraudulent manner",
            "Fraud typically involves misuse of confidential information by a person with a fiduciary duty (e.g., officer/director) OR misappropriation of confidential information from an employer",
            "Material information: information that has not been released to the financial news media and given a chance to be disseminated; selective disclosure only to broker-dealers, analysts, or shareholders is insufficient",
            "Tippee liability: if a tippee knew or should have known that information was confidential, both tipper and tippee may be liable",
            "Seller liability defense: a seller will not be held liable for an untrue statement or omission upon demonstrating reasonable care and unawareness of the untruth or omission",
            "Trading by a firm based on a large client's potential buying or selling is NOT insider trading — it is the separate prohibited practice of 'trading ahead'",
            "Civil action for manipulation: must be brought within three years of the manipulative activity or within one year of discovery"
          ],
          exceptions: [
            "A seller who used reasonable care and was not aware of the untruthful statement or omission is not liable under Rule 10b-5",
            "Trading ahead (front-running) is a separate violation, not insider trading under 10b-5"
          ],
          examTip: "Rule 10b-5 has three prongs — memorize them. The misappropriation theory (Carpenter case) extends liability beyond corporate fiduciaries to any person who misuses confidential information belonging to their employer. 'Trading ahead' (front-running a client order) is a distinct offense — do not confuse it with insider trading."
        },
        {
          id: "rule-10b5-1-plans",
          name: "Rule 10b5-1 — Insider Trading Safe Harbor Plans",
          category: "SEC Rule",
          language: "Rule 10b5-1 provides an affirmative defense against insider trading charges for insiders who establish a written, binding plan to purchase or sell securities before becoming aware of material, non-public information. The plan must describe the specified amount, price, and date of securities to be purchased or sold, or include a written formula or algorithm for determining these parameters. The plan creator cannot exercise any subsequent influence over how, when, or whether to effect purchases or sales, and the individual who makes purchase/sale decisions must not be aware of the material, non-public information.",
          concept: "10b5-1 plans allow corporate executives to pre-schedule their stock transactions through a binding plan established before they possess inside information, providing a safe harbor against later insider trading allegations.",
          parameters: [
            "Plan must be established in writing before the person becomes aware of material, non-public information",
            "Plan must specify: (a) the amount of securities, price, and date; or (b) a written formula or algorithm for determining amount, price, and date",
            "The plan must instruct another person to execute the purchases or sales",
            "The plan creator cannot exercise any subsequent influence over how, when, or whether to execute trades under the plan",
            "The person executing transactions under the plan must not be aware of material, non-public information at the time of execution"
          ],
          exceptions: [],
          examTip: "A 10b5-1 plan is an AFFIRMATIVE DEFENSE — not a guaranteed immunity. The plan must be put in place before the executive is aware of any inside information. Once established, the executive cannot interfere with its execution. Executives are blacked out (cannot buy or sell) around material events like earnings releases, and the 10b5-1 plan is the permitted workaround."
        },
        {
          id: "itsa-1984",
          name: "Insider Trading Sanctions Act of 1984 (ITSA)",
          category: "Federal Law",
          language: "The Insider Trading Sanctions Act of 1984 (ITSA) was a congressional response to high-profile insider trading cases involving broker-dealer employees. ITSA established civil penalties for insider trading violations of up to three times the amount of gain achieved or loss avoided in the transactions. The SEC may also demand disgorgement of profits.",
          concept: "ITSA created the civil treble-damages penalty for insider trading, making it economically punishing beyond mere disgorgement. The '3x' penalty multiplier is the key exam fact.",
          parameters: [
            "Civil penalty: up to three times (3x) the profit gained or loss avoided from insider trading",
            "SEC may demand disgorgement of profits (the inside trader must give back the profits earned)",
            "Both the 3x civil penalty and disgorgement may be imposed simultaneously"
          ],
          exceptions: [],
          examTip: "ITSA = civil penalty up to 3x profit. ITSFEA = criminal penalties and procedural requirements. Both apply to insider trading, but ITSA's '3x' civil penalty is the most-tested fact. ITSFEA added the broker-dealer obligation to establish written information barrier procedures."
        },
        {
          id: "itsfea-1988",
          name: "Insider Trading and Securities Fraud Enforcement Act of 1988 (ITSFEA)",
          category: "Federal Law",
          language: "The Insider Trading and Securities Fraud Enforcement Act of 1988 (ITSFEA) required broker-dealers to establish, maintain, and enforce written policies and procedures reasonably designed to prevent the misuse of material, non-public information by the broker-dealer or its associated persons. ITSFEA substantially increased criminal penalties for insider trading violations. An individual who purchases or sells a security while in possession of material, non-public information, or communicates such information to another in connection with a transaction, may be liable for trading violations.",
          concept: "ITSFEA operationalized the enforcement infrastructure for insider trading prevention. It placed affirmative compliance obligations on broker-dealers and escalated criminal consequences, making it the compliance backbone of anti-insider trading programs.",
          parameters: [
            "Broker-dealers must establish, maintain, and enforce written policies and procedures to prevent misuse of material, non-public information",
            "Required procedures: system for monitoring employee personal trading and firm proprietary account trading; watch lists and restricted lists; procedures restricting access to confidential information files (information barriers); employee education on insider trading",
            "Restricted list: must be distributed to employees; includes securities employees are prohibited from trading",
            "Watch list: generally known only to selected legal and compliance personnel; securities subject to closer scrutiny",
            "Restricted and watch list must include the contact person who added/removed the security; rationale for the decision is not required",
            "Only firms engaged in investment banking, research, or arbitrage must maintain restricted and watch lists",
            "FINRA supervisory rules require a written report to be filed by a member firm within five business days of any internal investigation if the firm violated insider trading rules or engaged in manipulative practices; must also report completion, internal disciplinary action, and referrals to FINRA/SEC/other SROs",
            "Criminal penalties (individuals): fines up to $5 million and/or imprisonment up to 20 years, per violation",
            "Criminal penalties (corporations/non-natural persons): fines up to $25 million per violation",
            "Criminal prosecution: handled by the Department of Justice (DOJ)"
          ],
          exceptions: [
            "A firm with well-thought-out written procedures that fails to implement them is still subject to SEC penalties — written procedures alone are not sufficient"
          ],
          examTip: "ITSFEA created the two-list system: restricted list (distributed to all employees, absolutely prohibited) and watch list (only compliance knows, subject to heightened scrutiny). The five-business-day FINRA report for internal investigations is a procedural detail tested on the Series 14. Criminal penalties: $5M / 20 years (individuals), $25M (entities), enforced by DOJ."
        },
        {
          id: "whistleblower-program",
          name: "SEC Whistleblower Program",
          category: "Federal Law",
          language: "The Whistleblower Program was created by Congress to provide monetary incentives for individuals to come forward and report possible violations of the federal securities laws to the SEC. Eligible whistleblowers are entitled to a bounty award of between 10% and 30% of the monetary sanctions collected in actions brought by the SEC and/or actions brought by certain other regulatory and law enforcement authorities. The program also prohibits retaliation by employers against employees who provide the SEC with information about possible securities violations.",
          concept: "The whistleblower bounty program creates financial incentives for insiders to report securities fraud. The anti-retaliation provisions protect them from employer reprisals.",
          parameters: [
            "Bounty range: 10% to 30% of monetary sanctions collected by the SEC or other regulatory/law enforcement authorities",
            "Anti-retaliation: employers are prohibited from retaliating against employees who provide information to the SEC about possible securities violations"
          ],
          exceptions: [],
          examTip: "The whistleblower bounty is 10%-30% of the sanctions collected — not the illegal profits. The program also appears in the context of analyst anti-retaliation rules: member firms cannot threaten or retaliate against analysts who publish negative research. Both apply the same anti-retaliation principle."
        }
      ]
    },
    {
      name: "Anti-Manipulation, Tender Offer Rules & Issuer Repurchases",
      rules: [
        {
          id: "manipulation-prohibition",
          name: "Exchange Act — Price Manipulation Prohibition (Wash Sales, Matched Orders, Pools)",
          category: "Federal Law",
          language: "The Securities Exchange Act of 1934 prohibits price manipulation, including wash sales, matched orders, and pool activities designed to raise or depress the prices of securities. A wash sale represents the purchase and sale of securities by an individual without any beneficial change of ownership for the purpose of raising or depressing the price of the security. Matched orders are similar, involving two persons acting in concert to buy and sell a security to raise or depress its price. Pools or syndicates formed for the purpose of raising or lowering the price of a security are also prohibited.",
          concept: "Price manipulation rules prohibit artificial transaction activity designed to create a false appearance of supply, demand, or market activity. They protect the integrity of the price discovery mechanism.",
          parameters: [
            "Wash sale (anti-manipulation context): simultaneous or near-simultaneous buy and sell by the same person with no beneficial change of ownership, creating artificial appearance of trading activity ('painting the tape')",
            "Matched orders: two persons acting in concert to buy and sell the same security to artificially move the price",
            "Pool activities: syndicates formed for the purpose of raising or lowering a security's price are prohibited",
            "Civil action: a person who suffers damages from price manipulation may sue the manipulator for recovery; action must be brought within three years of the manipulative activity or within one year of discovery",
            "These prohibitions are among the additional applications of Rule 10b-5 beyond insider trading"
          ],
          exceptions: [],
          examTip: "Do not confuse the Section 1091 'wash sale' tax rule (selling at a loss and rebuying within 30 days) with the anti-manipulation wash sale under the Exchange Act. They share the name but have entirely different purposes. The Exchange Act wash sale is about artificial price manipulation, not tax losses."
        },
        {
          id: "section-14-tender-offers",
          name: "Section 14 / Regulation 14E — Tender Offer Rules",
          category: "Federal Law",
          language: "According to Section 14 (Proxies) of the Securities Exchange Act of 1934, any person who makes a tender offer and becomes the owner of more than 5% of a company is required to file Schedule TO (tender offer) as soon as feasible on the commencement date. SEC rules under Regulation 14E require that tender offers be conducted in a way that is fair.",
          concept: "The tender offer rules under Section 14 and Regulation 14E protect shareholders by ensuring they receive adequate notice, time to decide, fair pricing, and prompt payment. The Williams Act framework prevents coercive or rushed takeovers.",
          parameters: [
            "Schedule TO filing: required as soon as feasible on the commencement date if the acquirer becomes the owner of more than 5% through the tender",
            "Notification: shareholders must be notified of the tender offer no later than 10 business days from the date the tender is made",
            "Management response: target company management must advise shareholders whether it recommends, declines, has no opinion, or is unable to take a position on the tender offer",
            "Minimum offering period: tender offer must be held open for at least 20 business days from the date announced to security holders",
            "Material changes: if the acquirer increases or decreases the percentage of securities sought, the consideration offered, or the dealer's soliciting fee, the offer must remain open for at least 10 additional business days from the date of notice of change",
            "Extension announcement: public announcement must be made no later than 9:00 a.m. Eastern Time on the next business day after the scheduled expiration date (or exchange opening, whichever is earlier for listed securities); announcement must disclose the approximate number of shares tendered to date",
            "Prompt payment: failure to pay consideration offered or return securities after the offer terminates or is withdrawn is fraudulent; prompt payment generally means no more than three business days from conclusion",
            "Short tendering: it is a manipulative or fraudulent act to tender securities that the person does not own",
            "Investor is considered long (may tender) if: they have title to the stock; have entered an unconditional contract to purchase but not yet received it; or have exercised a call option",
            "Net long position: writing calls with exercise price below the tender price reduces long position by shares represented by the call; long puts are NOT taken into consideration when determining net long position",
            "Partial tender offers: if oversubscribed, each tendering holder may have only a proportionate amount accepted"
          ],
          exceptions: [
            "A person who has made a tender offer for stock may purchase the non-convertible bonds of the same issuer",
            "Call options must be exercised prior to tendering (convertible securities, warrants, and rights do not need to be exercised because they are issued by the subject company)"
          ],
          examTip: "Key tender offer numbers: notification within 10 business days; offer open at least 20 business days; material change keeps offer open at least 10 more business days; prompt payment within 3 business days. Short tendering (tendering shares you do not own) is a fraud. Long puts do NOT reduce net long position when calculating what you can tender."
        },
        {
          id: "rule-14e-3",
          name: "SEC Rule 14e-3 — Insider Trading in Tender Offers",
          category: "SEC Rule",
          language: "Rule 14e-3 prohibits a person from trading while in possession of material, non-public information concerning a tender offer. In addition, a person who acquires material, non-public information concerning a tender offer is prohibited from disclosing this information. A registered person cannot discuss a proposed tender offer with registered persons within her firm who are not involved in the transaction.",
          concept: "Rule 14e-3 is the tender offer-specific insider trading rule, operating alongside Rule 10b-5. It is broader because it does not require proof of a fiduciary duty — possession of material, non-public tender offer information is itself sufficient.",
          parameters: [
            "Prohibits trading on material, non-public information about a tender offer",
            "Prohibits disclosing material, non-public information about a tender offer",
            "Registered person cannot discuss a proposed tender offer with firm colleagues not involved in the transaction",
            "Exception: communication in good faith to officers, directors, employees, or advisers of the party making the tender offer (involved in planning, financing, preparation, or execution)",
            "Exception: communication in good faith to officers, directors, employees, or advisers of the target company (involved in the tender offer's planning, financing, preparation, or execution)"
          ],
          exceptions: [
            "Good faith communication to officers, directors, employees, or advisers of the bidder or target company who are involved in the transaction"
          ],
          examTip: "Rule 14e-3 is stricter than Rule 10b-5 for tender offers: no fiduciary duty is required — mere possession of material, non-public tender offer information triggers the prohibition. This means a random person who overhears a confidential conversation about a tender offer is captured by 14e-3, even if they owe no duty."
        },
        {
          id: "rule-14e-5",
          name: "SEC Rule 14e-5 — Prohibition on Open-Market Purchases During Tender",
          category: "SEC Rule",
          language: "According to SEC Rule 14e-5, a covered person in a tender offer cannot purchase the common stock or convertible securities of the same issuer during the period that the tender is open. A covered person is an issuer or individual making the tender offer, or the investment bank acting as the dealer-manager in the transaction.",
          concept: "Rule 14e-5 prevents tender offerors from buying shares in the open market at lower prices while simultaneously inviting shareholders to tender at the (higher) tender price — a practice that would be unfair to shareholders who have not yet decided to tender.",
          parameters: [
            "Covered persons: the party making the tender offer and the dealer-manager investment bank",
            "Prohibition: covered persons cannot purchase common stock or convertible securities of the subject issuer while the tender is open",
            "A person who has made a tender offer for stock MAY purchase non-convertible bonds of the same issuer",
            "Exemptions: purchases by the dealer-manager or affiliates on an agency basis; purchases on a principal basis if neither dealer-manager nor affiliates are market makers; purchases by an affiliate of the dealer-manager if it maintains information barriers and the purchases are not made to facilitate the tender offer"
          ],
          exceptions: [
            "Purchases on an agency basis by the dealer-manager or affiliates",
            "Principal purchases if the dealer-manager and affiliates are not market makers",
            "Affiliate purchases that maintain information barriers and are not made to facilitate the tender offer",
            "Non-convertible bond purchases by the tender offeror are permitted"
          ],
          examTip: "Rule 14e-5 = no open market purchases of the target's common or convertible securities while the tender is open. The key carve-out for testing: the tender offeror CAN still buy the target's non-convertible bonds. Convertible bonds and preferred stock are captured; straight bonds are not."
        },
        {
          id: "rule-10b-18",
          name: "SEC Rule 10b-18 — Issuer Repurchase Safe Harbor",
          category: "SEC Rule",
          language: "Rule 10b-18 controls how an issuer or affiliate may buy its own stock in the secondary market to prevent manipulation while allowing legitimate buyback programs. If the following conditions are met, the SEC will assume the issuer is not manipulating its own stock price: (1) use one broker-dealer per trading session; (2) avoid purchases at certain times of day; (3) limit the bid or purchase price; and (4) limit the daily volume to 25% of the ADTV for that security.",
          concept: "Rule 10b-18 provides a safe harbor for issuer stock buybacks. Meeting all four conditions (one broker, timing restrictions, price cap, 25% volume limit) protects the issuer from manipulation allegations. The rule does not apply to public tender offers.",
          parameters: [
            "Single broker-dealer: issuer must use only one broker-dealer to place bids/make purchases per trading session (may use a different one during after-hours trading)",
            "Timing restrictions: no purchases that are the first transaction reported that day; no purchases during the last 30 minutes of the normal trading day (reduced to last 10 minutes for actively traded securities)",
            "Price limit: cannot exceed the highest independent bid or last independent transaction price, whichever is higher, for securities in the consolidated or interdealer quotation system with at least two quotations; for other securities, no higher than the highest independent bid from three independent dealers",
            "Volume limit: total daily volume cannot exceed 25% of the ADTV for that security",
            "Block purchase alternative: once per week, in lieu of the 25% daily limit, issuer may effect one block purchase with no other 10b-18 purchases that day; block purchase not included when calculating four-week ADTV",
            "Block purchase definition: purchase price of $200,000 or more; or at least 5,000 shares with a purchase price of at least $50,000; or at least 20 round lots totaling 150% or more of trading volume",
            "Market-wide trading suspension relaxation: after a market-wide trading suspension, the volume limit increases to 100% of ADTV (but price and broker-dealer conditions still apply); applies on the day of resumption or at next day's open if suspension was in effect at scheduled close",
            "Rule does NOT apply to public tender offers (different rules govern those)"
          ],
          exceptions: [
            "Public tender offers are not governed by Rule 10b-18",
            "Post-market-suspension exception: volume limit relaxed to 100% of ADTV when purchasing on the day trading resumes after a market-wide suspension"
          ],
          examTip: "Memorize the four 10b-18 conditions as 'ONE BROKER, TIMING, PRICE, VOLUME': one broker per session; no first or last 30 minutes (10 minutes if actively traded); price no higher than highest independent bid or last transaction; daily volume cap 25% of ADTV. The block purchase alternative (once per week, must be the ONLY purchase that day) is a favorite exam detail."
        }
      ]
    }
  ]
};
