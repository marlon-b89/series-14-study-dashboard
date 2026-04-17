// Chapter 10 – General Supervision
window.CHAPTER_10 = {
  id: 10,
  title: "General Supervision",
  subtitle: "Supervisory structures, registration forms, investment adviser regulation, and continuing education requirements for broker-dealers",
  sections: [
    {
      name: "Written Supervisory Procedures & Business Continuity",
      rules: [
        {
          id: "wsp-finra-3110",
          name: "FINRA Rule 3110 – Written Supervisory Procedures (WSP)",
          category: "FINRA Rule",
          language: "All policies and procedures used to supervise a firm must be codified in a written supervisory procedures (WSP) manual. The manual must cover the scope and nature of the firm's business activities and methods of operation, and must specify the detailed responsibilities of all supervisors and the review procedures they are required to follow.",
          concept: "The WSP is the backbone of a broker-dealer's compliance infrastructure. It must be detailed enough that a designated supervisor can implement the plan and detect and prevent violations. Amendments must be made within a reasonable time after changes occur in rules or regulations.",
          parameters: [
            "A copy of the WSP must be kept in each office or location where supervisory activities are conducted",
            "Must explain the method by which completed supervisory reviews are documented",
            "Must include titles, registration status, and location of supervisory personnel and their responsibilities",
            "Record of names of supervisory personnel and effective dates must be maintained for three years, two of which in an easily accessible location",
            "Amendments must be made within a reasonable time after changes in rules or regulations",
            "Member broker-dealer must make available a current copy of the FINRA manual to customers upon request; may be maintained in electronic format",
            "No requirement to interpret the rules for customers or to send a copy to clients"
          ],
          exceptions: [],
          examTip: "The WSP record retention is 3 years total, 2 years in an easily accessible location — the same retention pattern as Form U5. On the exam, remember the WSP must be in each office where supervisory activities are conducted, not just at headquarters."
        },
        {
          id: "bcp-finra-4370",
          name: "FINRA Rule 4370 – Business Continuity Plan (BCP)",
          category: "FINRA Rule",
          language: "Broker-dealers must establish a written business continuity plan that identifies procedures to be followed in the event of an emergency or significant business disruption. The plan must be reviewed annually.",
          concept: "Ensures firms can meet customer obligations and maintain regulatory communications if an emergency disrupts normal operations. FINRA requires firms to designate two emergency contact persons and provide their information to FINRA electronically.",
          parameters: [
            "Plan must address: data backup and recovery, financial and operational assessments, alternative communications between customers and the firm, alternative communications between the firm and its employees, alternative physical location of employees, regulatory reporting, and communications with regulators",
            "Must be reviewed annually in light of any changes in the firm's business structure, general operations, or location",
            "Must designate two emergency contact persons provided to FINRA",
            "At least one emergency contact must be a member of senior management and a registered principal",
            "If the second contact is not a registered principal, she must be a member of senior management with knowledge of the firm's business operations",
            "Both emergency contact persons must be associated persons of the member firm",
            "For a sole proprietorship with no other associated persons, the second contact may be a registered or non-registered person at another firm (e.g., attorney, accountant, or clearing firm contact)"
          ],
          exceptions: [],
          examTip: "BCP requires TWO emergency contacts — at least one must be both a senior manager AND a registered principal. A small (sole-proprietor) firm can use an outside attorney or accountant as the second contact."
        }
      ]
    },
    {
      name: "Supervision of Business Locations",
      rules: [
        {
          id: "osj-definition",
          name: "Office of Supervisory Jurisdiction (OSJ)",
          category: "FINRA Rule",
          language: "A member firm must appoint a principal to supervise the activities of any location defined as an office of supervisory jurisdiction. An OSJ includes any location at which one or more of the following activities occur: market making and/or order execution; structuring of public offerings or private placements; maintaining custody of customers' funds and/or securities; final acceptance (approval) of new accounts; review and endorsement of customer orders; final approval of retail communication; or responsibility for supervising other branch offices.",
          concept: "An OSJ is a location that performs high-level supervisory or control functions. A general securities principal must be on the premises. OSJs must be inspected annually by a principal.",
          parameters: [
            "An OSJ must have a general securities principal on premises",
            "The principal's responsibilities include approval and review of accounts, transactions, correspondence, retail communication, and response to customer complaints",
            "A General Securities Principal cannot approve options-related communications or options accounts — that requires a Registered Options Principal (ROP)",
            "A General Securities Principal cannot be responsible for financial reporting to regulators — that is the FINOP's role",
            "FINRA assumes a principal will generally not supervise more than one OSJ",
            "If one principal supervises multiple OSJs, the firm must document the factors justifying the structure in the WSP (no FINRA pre-approval required)",
            "OSJs must be inspected annually"
          ],
          exceptions: [
            "Firms may designate one principal for multiple OSJs if they document the justification and consider experience, capacity, proximity, and nature of activities at each location"
          ],
          examTip: "Memorize the seven OSJ triggers — especially 'final acceptance of new accounts' and 'responsibility for supervising other branch offices.' A regular branch office that does NOT do any of these seven things is a non-OSJ branch."
        },
        {
          id: "branch-office-registration",
          name: "Branch Office Registration and Form BR",
          category: "FINRA Rule",
          language: "A branch office of a broker-dealer is considered to be where one or more of the firm's associated personnel regularly conduct the business of effecting transactions in, or inducing or attempting to induce the purchase or sale of any security, or any location represented as such.",
          concept: "Branch offices are locations regularly used for securities business. Form BR is used to notify FINRA of the status of a branch. Amendments must be filed promptly (typically within 30 days).",
          parameters: [
            "Form BR amendments must be filed promptly when information becomes inaccurate or incomplete — typically within 30 days",
            "A non-OSJ branch may be supervised by a principal OR a competent registered representative",
            "A branch office may be housed at a movable location (boat, recreational vehicle, mobile home)",
            "Non-OSJ branch that supervises other locations: inspected annually",
            "Non-OSJ branch with no supervisory functions: inspected every three years",
            "Non-branch location: reviewed periodically based on nature, volume, and personnel",
            "Offices that are sublet to other broker-dealers are not considered branch offices"
          ],
          exceptions: [
            "Non-branch locations (not required to register): non-sales offices not held out to public; locations used occasionally by appointment only; floor of an exchange; temporary BCP backup office; location used primarily for non-securities business with fewer than 25 securities transactions per year; representative's primary residence if not used as public office; temporary location used for securities business for fewer than 30 business days per calendar year"
          ],
          examTip: "Key non-branch tests: fewer than 25 securities transactions per year, or used fewer than 30 business days per year (excluding primary residence). A primary residence used only by one family member and not meeting with customers is also exempt from branch registration."
        },
        {
          id: "rsl-residential-supervisory-location",
          name: "Residential Supervisory Location (RSL)",
          category: "FINRA Rule",
          language: "A residential supervisory location (RSL) is defined as a private residence that is used by an associated person (AP) and designated with the responsibility of conducting supervisory activities. This location is not required to be registered as a supervisory branch office or as an office of supervisory jurisdiction.",
          concept: "Created by FINRA after COVID-19 hybrid work arrangements became common. An RSL allows a supervisor's home to serve as a supervisory location without triggering annual inspection requirements, subject to specific conditions.",
          parameters: [
            "RSL is not required to be inspected annually — subject to a regular periodic schedule (generally at least every three years)",
            "If a private residence meets the definition of a supervisory branch or OSJ, it must be inspected annually",
            "Only the AP and other residents may conduct business at the RSL",
            "The RSL cannot be held out to the public as an office",
            "The AP cannot meet with customers at the RSL",
            "Customer funds or securities cannot be handled at the RSL",
            "The AP must be assigned to a designated branch office and use that address on all business cards and communications",
            "Firm ineligible for RSL if: designated as a 'restricted firm,' subject to the taping rule, going through a continuing membership review, has certain net capital compliance issues, is suspended, has been a member fewer than 12 months, or was found to have violated internal inspection rules in the past three years",
            "Location ineligible if: supervisor has fewer than one year of direct supervisory experience with the firm or an affiliate, AP functions as a principal without passing the appropriate principal exam, AP is subject to mandatory heightened supervisory plan, or AP answered 'yes' to certain felony/misdemeanor questions on Form U4 in the past three years"
          ],
          exceptions: [],
          examTip: "RSLs are the post-COVID hybrid work answer to home offices. The big distinction: RSLs are inspected every 3 years (not annually), unless the activity there would qualify it as a supervisory branch. A firm subject to the taping rule CANNOT have RSLs."
        }
      ]
    },
    {
      name: "Registration of Representatives and Principals",
      rules: [
        {
          id: "form-u4",
          name: "Form U4 – Uniform Application for Securities Industry Registration",
          category: "SEC Form",
          language: "The application for an individual's registration is Form U4 — the Uniform Application for Securities Industry Registration or Transfer. Form U4 is filed with and reviewed by FINRA's Central Registration Depository (CRD).",
          concept: "The primary registration form for individual securities professionals. It captures personal data, employment history, and disclosure questions about legal, regulatory, and financial events. A yes answer to key questions triggers a Disclosure Reporting Page (DRP).",
          parameters: [
            "Must be reviewed by the member firm within 30 calendar days after the form is filed with FINRA",
            "Firm must search reasonably available public records to verify accuracy and completeness",
            "Disclosures required: criminal legal proceedings, regulatory disciplinary actions, civil judicial actions, customer complaints, terminations, and financial events (bankruptcies, liens or unsatisfied judgments, bonding denials, compromises with creditors)",
            "Unsatisfied judgments or tax liens against RRs must be disclosed to FINRA within 30 days",
            "If a statutory disqualification is discovered, FINRA must be notified within 10 days (not the usual 30)",
            "Felony convictions — regardless of when they occurred — must always be disclosed on Form U4",
            "Foreclosure of primary residence is NOT a reportable event on Form U4",
            "A failed drug test is NOT reportable to FINRA on Form U4",
            "Outside business activities (employment as owner, director, trustee, or agent) must be disclosed; excludes a spouse's outside business activities and passive rental income",
            "Non-investment related activities for charities, civic, or religious organizations are not required to be disclosed"
          ],
          exceptions: [
            "A person who has been arrested but not yet charged with a crime is not required to report the arrest on Form U4, though most firms require internal notification"
          ],
          examTip: "U4 is filed when hiring; update is required within 30 days for most changes but within 10 days for statutory disqualification. Felonies must ALWAYS be disclosed regardless of age; only felonies within the last 10 years can trigger statutory disqualification."
        },
        {
          id: "statutory-disqualification",
          name: "Statutory Disqualification (SD)",
          category: "FINRA Rule",
          language: "Statutory disqualification is a denial of an application for registration based solely on past transgressions. A broker-dealer cannot employ — in any capacity — an individual who is subject to statutory disqualification unless FINRA gives that person permission to accept a position in the industry.",
          concept: "Certain events automatically bar a person from the industry unless FINRA grants special permission through an Eligibility Proceeding (MC400 application). The ban covers all positions, including clerical or ministerial roles.",
          parameters: [
            "Grounds for statutory disqualification: being expelled or suspended from an SRO; having registration denied, suspended, or revoked by the SEC, CFTC, or foreign regulator; violating or assisting in violations of securities/commodities law or MSRB rules; failing as a supervisor to reasonably supervise a violating subordinate; being convicted of a felony or investment-related misdemeanor within the last 10 years",
            "Felony conviction must have occurred within the last 10 years to trigger SD, but all felony convictions must always be disclosed on Form U4",
            "If an SD is discovered, FINRA must be notified within 10 business days — firm must either file Form U5 (terminate) or file an MC400 Eligibility Proceeding application within 10 business days with FINRA's Department of Member Regulation",
            "The NAC evaluates the application and may approve or deny; even if approved by NAC, SEC must also review and approve",
            "If permitted, firm must institute heightened supervisory procedures specific to the SD"
          ],
          exceptions: [
            "Failure to supervise does not result in SD if: (1) there was a supervisory system in place reasonably expected to detect the violation, and (2) the supervisor reasonably discharged supervisory duties under that system"
          ],
          examTip: "SD triggers a 10-day notification to FINRA (not the usual 30-day standard). Pardon of a felony removes the punishment but NOT the conviction — the conviction must still be disclosed on Form U4."
        },
        {
          id: "form-u5",
          name: "Form U5 – Uniform Termination Notice",
          category: "SEC Form",
          language: "After a registered person resigns or is terminated from a member firm, the firm is required to notify FINRA within 30 days on Form U5 — the Uniform Termination Notice for Securities Industry Registration. The firm must also provide the individual with a copy of the form.",
          concept: "Form U5 is the companion to Form U4 — used at termination. It must include the reason the person left and must be updated if certain answers change within 30 days following termination. Firms hiring previously registered persons must review the latest U5 within 60 days.",
          parameters: [
            "Must be filed within 30 days of termination",
            "Must include reason the RR left the firm",
            "Must be updated if answers to certain questions change within 30 days following termination",
            "Firm must maintain both initial filings and any updates for at least three years (easily accessible for first two years)",
            "When hiring a previously registered person, the member firm must obtain and review the latest Form U5 within 60 days of the date the person files an application for registration",
            "Unless enrolled in the MQP, an individual who resigns or is terminated must requalify by exam within a two-year period if they wish to return as a registered representative"
          ],
          exceptions: [],
          examTip: "U5 deadline = 30 days (same as most U4 updates). The firm must give a copy to the departing RR. When reviewing a new hire's old U5, the window is 60 days — double the 30-day U4 review window."
        },
        {
          id: "form-u6",
          name: "Form U6 – Uniform Disciplinary Action Reporting Form",
          category: "SEC Form",
          language: "Regulators, states, and/or jurisdictions use Form U6 to report disciplinary actions against an RR or firm. FINRA also uses Form U6 to report final arbitration awards against RRs and firms.",
          concept: "Form U6 is the regulator-filed disciplinary reporting form. Unlike U4 (individual files) and U5 (firm files at termination), U6 is filed by regulators. The information feeds into the CRD and may be available through FINRA's BrokerCheck.",
          parameters: [
            "Filed by regulators, states, or jurisdictions to report disciplinary actions",
            "FINRA uses it to report final arbitration awards against RRs and firms",
            "Information feeds into the Central Registration Depository (CRD)",
            "Certain information available to the public through BrokerCheck"
          ],
          exceptions: [],
          examTip: "U4 = individual files (registration); U5 = firm files (termination, 30 days); U6 = REGULATOR files (disciplinary actions and arbitration awards). This three-form distinction is a common exam question."
        },
        {
          id: "fingerprinting-sea-17f-2",
          name: "SEA Rule 17f-2 – Fingerprinting Requirements",
          category: "SEC Rule",
          language: "Any employee of a broker-dealer must be fingerprinted who: is engaged in the sale of securities; regularly comes in contact with money or securities; has access to the keeping, handling, or processing of securities or the records of original entry of the broker-dealer; or has supervisory responsibility over persons engaged in any of the previously listed activities.",
          concept: "Fingerprinting is a background-check tool for broker-dealer employees who handle securities, money, or records. Cards (or substitute records) must be retained for 3 years after termination.",
          parameters: [
            "Hard copies of processed fingerprint cards must be retained at the firm's principal office for three years after a person's termination",
            "When submitting Form U4 for examination registration, a fingerprint card is required",
            "Foreign nationals applying to become registered must file a fingerprint card",
            "After three successive good faith attempts with illegible electronic fingerprints, firms are not required to submit a fourth card; FINRA requests an FBI name-based search (Name Check) instead",
            "To add a direct owner/executive officer on Form BD, the individual must register via Form U4 or a Page 2 U4; Page 2 U4 requires fingerprinting but no examination"
          ],
          exceptions: [
            "If securities sold don't have a certificate (e.g., variable annuity, mutual fund), the fingerprinting requirement may be waived for appropriate persons"
          ],
          examTip: "Three bad fingerprint cards = no fourth try; FINRA does a name-based FBI search instead. Keep processed cards for 3 years post-termination at the principal office."
        },
        {
          id: "brokercheck-investor-education",
          name: "BrokerCheck and Investor Education Disclosure",
          category: "FINRA Rule",
          language: "FINRA's Investor Education and Protection Rule requires member firms, at least once every calendar year, to provide to each customer in writing: FINRA Regulation's Public Disclosure Program (BrokerCheck) hotline number; FINRA website address; and a statement as to the availability of an investor brochure describing BrokerCheck.",
          concept: "BrokerCheck is FINRA's public disclosure system for RR and firm disciplinary history. Firms must notify customers annually of its availability. Information is available for persons currently registered or registered within the last 10 years.",
          parameters: [
            "Member firms must provide BrokerCheck information to each customer at least once per calendar year in writing",
            "BrokerCheck covers individuals currently registered or registered within the last 10 years",
            "Includes: current employer and 10 years of employment history, legal and regulatory charges, pending and resolved arbitrations and civil proceedings, customer complaints involving $5,000 or more in compensatory damages filed within the last 24 months, formal investigations, and relevant terminations",
            "Settlements of $10,000 or more in arbitration, civil proceeding, or complaint are disclosed",
            "A currently registered person who disagrees with BrokerCheck information must file an amended Form U4",
            "A non-currently-registered person (within 10 years) must submit a Broker Comment Request Form",
            "Expungement (permanent removal from CRD) is allowed only if: the claim is factually impossible or clearly erroneous; the registered person was not involved; or the claim or information is false"
          ],
          exceptions: [
            "Members that don't carry customer accounts and don't hold customer funds or securities are exempt from the annual BrokerCheck notification requirement"
          ],
          examTip: "BrokerCheck covers the last 10 years. Firms must notify customers annually. Expungement is very narrow — only three grounds, all requiring the information to be demonstrably wrong or fabricated."
        }
      ]
    },
    {
      name: "Supervisor Qualifications and Oversight Requirements",
      rules: [
        {
          id: "failure-to-supervise",
          name: "Failure to Supervise — SEC Exchange Act",
          category: "Federal Law",
          language: "The Exchange Act gives the SEC the power to sanction broker-dealers or associated persons who have 'failed reasonably to supervise, with a view to preventing violations [of federal securities laws], another person who commits such a violation, if such person is subject to his supervision.'",
          concept: "Failure-to-supervise is one of the most serious compliance charges. It can be brought by the SEC, FINRA, or other SROs against both the firm and individual supervisors who fail to prevent or detect violations.",
          parameters: [
            "A person will not be deemed to have failed to supervise if: (1) there are established supervisory procedures and a system for applying those procedures that would be reasonably expected to prevent and detect violations, and (2) the supervisor has reasonably discharged duties under that system and has no reason to believe the system is not operating properly",
            "Red flags must be responded to and cannot be ignored — ignoring them is the shortest path to a failure-to-supervise charge",
            "When a red flag is discovered, a supervisor must: (1) investigate, (2) document the investigation, and (3) pursue the investigation to a conclusion",
            "Hiring an RR with a demonstrated pattern of unauthorized transactions without close monitoring has been viewed as failure to supervise"
          ],
          exceptions: [],
          examTip: "The safe harbor from failure-to-supervise requires TWO elements: (1) an adequate supervisory system, AND (2) the supervisor actually followed it. Having a great WSP but ignoring it does not provide protection."
        },
        {
          id: "principal-qualifications",
          name: "Principal Registration Requirements",
          category: "FINRA Rule",
          language: "An individual who is an officer, general partner, manager of an OSJ, or a director who is actively engaged in the securities business of the member firm must also register with FINRA as a principal.",
          concept: "Supervisors must pass appropriate principal-level exams based on the type of business they supervise. An employee may function as a principal before passing the exam if they have been a registered representative for 18 months within the prior five years — they then have 120 days to pass the appropriate exam.",
          parameters: [
            "Series 24 – General Securities Principal: supervises investment banking or securities business for corporate securities, DPPs, investment company products/variable contracts; supervises Series 7 registered persons",
            "Series 4 – Registered Options Principal (ROP): supervises options trading, options compliance, and review/approval of options communications",
            "Series 9/10 – General Securities Sales Supervisor: supervises sales activities in corporate, municipal, and options securities; branch office managers and regional sales managers",
            "Series 14 – Compliance Official: day-to-day compliance activities or supervising 10 or more compliance personnel",
            "Series 16 – Supervisory Analyst: preparation and approval of research reports",
            "Series 26 – Investment Company/Variable Contracts Limited Principal: supervises sale of mutual funds, closed-end funds, variable annuities, and variable life insurance",
            "Series 27 – FINOP: supervises broker-dealer financial responsibility and recordkeeping functions",
            "Series 53 – Municipal Securities Principal: supervises Municipal Securities Representatives and sale of municipal bonds and municipal fund securities",
            "Grace period: if an employee has been an RR for 18 months within the prior 5 years, she has 120 days to pass the principal exam before it's required",
            "An assistant vice president is NOT considered an officer and is not required to register as a principal unless training other principals or RRs"
          ],
          exceptions: [],
          examTip: "Required principal category is based on the TYPE of product being supervised, not just the rep's registration. A Series 7 rep who only sells mutual funds can be supervised by a Series 26 (not necessarily a Series 24)."
        },
        {
          id: "annual-compliance-meeting",
          name: "Annual Compliance Meeting (ACM)",
          category: "FINRA Rule",
          language: "All registered persons must participate in an annual compliance review. This review may be an individual meeting with each representative or a group meeting. In either case, the meeting must include a discussion of compliance issues that are relevant to the business of the representatives involved.",
          concept: "The ACM ensures every registered person receives annual compliance training. Emphasis must be on regulation and compliance, not product knowledge. Participation must be documented.",
          parameters: [
            "Must be conducted at least once each year for all registered persons",
            "Content must focus on compliance issues relevant to the representatives' business — regulation and compliance, not product knowledge",
            "Participation must be documented",
            "May be held face-to-face, via interactive web technology (real-time), or via prerecorded (on-demand) format",
            "For prerecorded meetings, attendees must be able to ask questions and have them answered in a timely manner"
          ],
          exceptions: [],
          examTip: "The ACM is annual, not periodic. It must cover compliance and regulation — product training alone doesn't satisfy it. Documentation is mandatory."
        },
        {
          id: "producing-managers",
          name: "Producing Managers — Supervision of Supervisors",
          category: "FINRA Rule",
          language: "FINRA generally prohibits any employee of the firm who performs a supervisory function from supervising his own activities and reporting to, or having his compensation or continued employment determined by, a person he is supervising.",
          concept: "A producing branch manager (who also services accounts) cannot supervise his own sales activity. All supervisory personnel who don't report to the branch manager may supervise the producing manager's activities.",
          parameters: [
            "Written procedures must prohibit supervisory employees (branch managers) from supervising their own activities",
            "A supervisor cannot report to, or have compensation determined by, a person he is supervising",
            "If this structure is unavoidable, the firm must document the factors used to make this determination and how the person will be properly supervised",
            "Compliance director is typically the best person to supervise a CEO's sales activities since the compliance director doesn't report to the CEO",
            "Exception: firm's most senior executive officer, members of the BOD or management committee, or a single-person broker-dealer"
          ],
          exceptions: [
            "Exception applies when the structure is unavoidable due to the member's size or a supervisor's position (e.g., CEO is a sole proprietor)"
          ],
          examTip: "Producing managers cannot self-supervise. The compliance director (who doesn't report to the CEO) is the preferred supervisor for a CEO who also manages accounts. If unavoidable, document the structure."
        },
        {
          id: "finra-rule-3130",
          name: "FINRA Rule 3130 – Annual CEO Certification",
          category: "FINRA Rule",
          language: "FINRA Rule 3130 requires each member firm to designate and identify to FINRA at least one principal to serve as Chief Compliance Officer (CCO). The firm's CEO (or equivalent officer) must certify annually that the firm has processes to establish, maintain, and review compliance policies and supervisory procedures, modify them as business and regulatory conditions change, and periodically test their effectiveness.",
          concept: "FINRA Rule 3130 imposes top-level accountability for compliance. The CEO's annual certification represents personal attestation that the firm's compliance processes are sound. The CCO is identified on Schedule A of Form BD.",
          parameters: [
            "Each firm must designate at least one CCO and specifically identify the CCO to FINRA on Schedule A of Form BD",
            "CEO (or equivalent) must annually certify the firm has processes to: (a) establish, maintain, and review compliance policies; (b) modify policies as changes occur; (c) periodically test effectiveness",
            "CEO must conduct at least one meeting with the CCO within the preceding 12 months",
            "Certification must be completed annually, no later than the anniversary date of the previous year's certification",
            "A report evidencing the compliance processes must be reviewed by the CEO, CCO, and other officers; the final report must be submitted to the board of directors and audit committee at their next scheduled meeting or within 45 days of certification"
          ],
          exceptions: [],
          examTip: "Rule 3130 = CEO annual certification + at least one CEO-CCO meeting per year. Do not confuse with FINRA Rule 3120 (Supervisory Control System — also annual), which requires senior officer certification of the supervisory control policies."
        },
        {
          id: "taping-rule-3170",
          name: "FINRA Rule 3170 – Taping Rule",
          category: "FINRA Rule",
          language: "Under the Taping Rule, a broker-dealer must use special written procedures and begin the taping of conversations between its registered personnel and customers for a period of three years if it employs a specified concentration of personnel from disciplined firms.",
          concept: "The taping rule applies when a firm hires a high percentage of personnel from expelled or revoked firms. Taping of all customer-representative conversations is mandatory for three years from the triggering date.",
          parameters: [
            "Disciplined firms are defined as those that have had their registration revoked or have been expelled by an SRO",
            "Taping Rule triggered if: 5-9 RRs and 40%+ are from disciplined firms in the past 3 years; 10-19 RRs and 4 or more are from disciplined firms in the past 3 years; 20+ RRs and 20%+ are from disciplined firms in the past 3 years",
            "Upon FINRA notification, the firm has 60 days to establish procedures and begin taping",
            "Firm must create procedures for reviewing, retaining, and classifying recordings",
            "A quarterly report must be sent to FINRA",
            "Taping period is three years",
            "Firms subject to the taping rule are NOT eligible to have Residential Supervisory Locations (RSLs)"
          ],
          exceptions: [
            "One-time opportunity: a firm subject to the taping rule may reduce staffing levels below the threshold to avoid triggering the rule; employees terminated due to the staffing reduction cannot be rehired by the same firm for 180 days"
          ],
          examTip: "Taping thresholds: 40% / 4 RRs / 20% depending on firm size. Once triggered, 60 days to comply and tape for 3 years. Subject to the taping rule? No RSLs allowed. The one-time escape: cut headcount, but wait 180 days to rehire those employees."
        }
      ]
    },
    {
      name: "Registration Forms for Firms and Advisers",
      rules: [
        {
          id: "form-bd",
          name: "Form BD – Broker-Dealer Registration",
          category: "SEC Form",
          language: "Form BD (Uniform Application for Broker-Dealer Registration) is used to register a broker-dealer with the SEC, SROs, and jurisdictions. Each member firm is required to designate and specifically identify to FINRA on Schedule A of Form BD one or more principals to serve as chief compliance officer.",
          concept: "Form BD is the firm-level equivalent of Form U4. It registers the broker-dealer and identifies key principals. Adding a direct owner or executive officer requires a Form U4 or Page 2 U4.",
          parameters: [
            "Used to register the broker-dealer with the SEC, SROs, and jurisdictions",
            "Schedule A lists the CCO(s) designated under Rule 3130",
            "To add a direct owner/executive officer, the individual must register via Form U4 or Page 2 U4",
            "Page 2 U4 registers the individual without requiring an examination, but fingerprinting is required"
          ],
          exceptions: [],
          examTip: "Form BD = firm registration; Form U4 = individual registration. Schedule A of Form BD identifies the CCO. An executive owner who doesn't take exams still must be registered via Page 2 U4 (fingerprints required)."
        },
        {
          id: "form-adv",
          name: "Form ADV – Investment Adviser Registration",
          category: "SEC Form",
          language: "Investment advisers that are not excluded or exempt from registration are required to register at the state or federal level by filing Form ADV with the appropriate regulator. The adviser files these forms electronically through the Investment Adviser Registration Depository (IARD) system, which is operated by FINRA.",
          concept: "Form ADV is the investment adviser's counterpart to Form BD. Part 1 contains business/disciplinary information for regulators. Part 2A is the client-facing firm brochure. Part 2B contains brochure supplements for supervised persons handling client accounts.",
          parameters: [
            "Form ADV Part 1A: completed by all advisers (state or federal); contains business structure, employee info, types of clients, disciplinary events, custody arrangements, number and size of accounts",
            "Form ADV Part 1B: completed only by state-registered advisers; must be forwarded to respective state administrator",
            "Form ADV Part 2A (Firm Brochure): plain English format; must disclose all actual and potential conflicts of interest, fees, methods of analysis, disciplinary information, code of ethics, soft-dollar arrangements, financial conditions that could impair ability to meet commitments",
            "Form ADV Part 2B: brochure supplements disclosing information about specific supervised persons handling client accounts",
            "State-registered adviser: brochure must be offered to client at least 48 hours prior to signing the contract; if not provided on time, client has 5 days to cancel without penalty",
            "Federal covered adviser: brochure must be delivered prior to or at the time the client opens the account; no 48-hour rule under federal law",
            "Annual update: adviser must give all existing clients an updated brochure or summary of material changes, plus an offer to provide the full brochure, within 120 days after the end of the adviser's fiscal year",
            "Part 1 information (not required to be disclosed to public) is made publicly available through the Investment Adviser Public Disclosure (IAPD) website"
          ],
          exceptions: [
            "Soft-dollar arrangements: adviser may receive research reports, software, and seminars; adviser may NOT receive reimbursements for travel, furniture, or equipment"
          ],
          examTip: "48-hour rule = state-registered advisers only. Federal covered advisers deliver the brochure at or before account opening. Annual update must reach clients within 120 days of fiscal year end. Soft-dollars: research and analysis tools are OK; office furniture is not."
        }
      ]
    },
    {
      name: "Continuing Education",
      rules: [
        {
          id: "regulatory-element-ce",
          name: "Regulatory Element – Continuing Education (FINRA Rule 1240)",
          category: "FINRA Rule",
          language: "RRs are required to participate in Regulatory Element training on an annual basis for each registration that they hold. The content of the Regulatory Element CE requirement is written by the Securities Industry/Regulatory Council on Continuing Education and is delivered via the CE Online Program.",
          concept: "The Regulatory Element provides annual regulatory, compliance, and ethics training to all registered persons. Missing the December 31 deadline renders registration inactive, prohibiting all regulated activities and compensation.",
          parameters: [
            "Must be completed by December 31 of the calendar year following the year in which the person became registered, and by December 31 of every year thereafter",
            "Failure to complete results in inactive registration — prohibited from performing any activity or receiving any compensation requiring securities registration",
            "Content is role-specific: different material for each representative or principal registration category held",
            "Individuals holding both representative and principal registrations have two separate requirements",
            "A significant disciplinary action (statutory disqualification, suspension, fine of $5,000 or more, or CE re-entry order) affects the timing of the Regulatory Element",
            "Delivered via FINRA's CE Online Program — may be completed from home or office computer"
          ],
          exceptions: [
            "Both Regulatory and Firm Elements are deferred during active military duty"
          ],
          examTip: "Deadline is December 31 — miss it and registration becomes INACTIVE immediately. Note that individuals who hold BOTH a rep and a principal registration have TWO separate Regulatory Element obligations."
        },
        {
          id: "firm-element-ce",
          name: "Firm Element – Continuing Education (FINRA Rule 1240)",
          category: "FINRA Rule",
          language: "Any registered person who has direct contact with customers in the conduct of a member firm's securities sales, trading, or investment banking activities, and her immediate supervisors, is considered a covered person with regard to the Firm Element of continuing education.",
          concept: "The Firm Element is employer-designed annual training. The firm must analyze and prioritize training needs, develop a written training plan, and maintain records. It does not need to be submitted to regulators unless requested.",
          parameters: [
            "Must be conducted at least once per year for covered persons",
            "Firm must analyze and prioritize training needs and develop a written training plan based on that needs analysis",
            "Program must enhance securities knowledge, skill sets, and professionalism of covered persons",
            "Training must cover: general investment features and associated risks; suitability and sales practice considerations; and applicable regulatory requirements",
            "Broker-dealer must maintain records documenting the content and completion of the program",
            "Firm Element plan not required to be submitted for regulatory review unless requested"
          ],
          exceptions: [],
          examTip: "Firm Element = employer-designed; Regulatory Element = regulator-designed. Both are annual. Firm Element targets covered persons (those with direct customer contact) and their immediate supervisors. Records must be maintained but no routine regulatory submission."
        },
        {
          id: "mqp-maintaining-qualifications",
          name: "Maintaining Qualifications Program (MQP)",
          category: "FINRA Rule",
          language: "Under FINRA's Maintaining Qualifications Program (MQP), individuals who terminate any of their representative or principal registrations are able to maintain their qualifications by completing their annual CE requirement. Individuals who pay a $100 annual fee are given a maximum of five years to reregister without requalifying by exam.",
          concept: "The MQP allows registered individuals who leave the industry to keep their qualifications active for up to five years by continuing annual CE. Without MQP, departure leads to a two-year window before re-examination is required.",
          parameters: [
            "$100 annual fee to participate",
            "Maximum five years to reregister without requalifying by exam",
            "Eligibility conditions: must have been registered in the terminated category for at least one year immediately prior to termination; must elect to participate within two years from the date of termination; must complete all CE requirements by their due dates; cannot have been CE Inactive for two consecutive years; cannot be subject to statutory disqualification"
          ],
          exceptions: [],
          examTip: "Without MQP: 2 years to re-register before exam requalification is required. With MQP: up to 5 years. The MQP election must be made within 2 years of termination. Cost is $100/year."
        }
      ]
    }
  ]
};
