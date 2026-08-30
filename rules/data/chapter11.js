// Chapter 11 – Business Conduct Rules
window.CHAPTER_11 = {
  id: 11,
  title: "Business Conduct Rules",
  subtitle: "FINRA membership rules, compensation practices, prohibited activities, conduct standards for employees, and MSRB political contribution rules",
  sections: [
    {
      name: "FINRA Membership and Non-Member Relations",
      rules: [
        {
          id: "finra-membership-application",
          name: "FINRA New Member Application Process",
          category: "FINRA Rule",
          language: "After receiving a broker-dealer membership application through the FINRA Gateway system, FINRA must review and process it within 180 calendar days. If the filing is deemed substantially complete, FINRA staff has 30 days to complete its review and determine whether more information is needed. The applicant then has 60 calendar days to fully respond to FINRA's initial request.",
          concept: "The new member application process has defined time windows: FINRA reviews completeness first and triggers a 30-day staff review if substantially complete, then allows 60 days for applicant response. Membership termination requires written notice and full payment of FINRA debts.",
          parameters: [
            "Total review period: 180 calendar days",
            "Deficiency notice: applicant given 5 days to correct a deficient application",
            "If substantially complete: FINRA staff has 30 days to review and request additional information",
            "Applicant has 60 calendar days to fully respond to FINRA's initial request",
            "After 15 days written notice, a firm failing to pay required fees or assessments may have its membership suspended or cancelled",
            "Membership termination must be in writing and does not take effect until all debts payable to FINRA are satisfied"
          ],
          exceptions: [],
          examTip: "Key timing: 5 days to fix a deficient application, 30 days for FINRA to complete initial review, 60 days for applicant to respond to information requests, 180 days total. Termination requires written notice AND payment of all FINRA debts."
        },
        {
          id: "non-member-dealer-rule",
          name: "Dealing with Non-Members — FINRA Rule",
          category: "FINRA Rule",
          language: "Only members are permitted to transact business with each other on a preferential basis as it relates to investment banking activities, transactions in over-the-counter securities, and the distribution of new issues and investment company shares to the public. A FINRA member must treat a non-member in the same manner that it deals with members of the public. FINRA members are generally prohibited from paying any form of compensation (including referral fees) to non-members.",
          concept: "Non-FINRA members cannot receive price concessions or discounts from members. Members must treat non-members like public customers. This rule substantially limits the economic benefit of operating outside FINRA membership.",
          parameters: [
            "Non-members cannot receive price concessions, discounts, or other preferential treatment from members",
            "Members may NOT pay referral fees or any other compensation to non-members",
            "Exception: foreign finders may refer non-U.S. clients to U.S. firms for a fee if: customers receive a descriptive document disclosing the compensation, the transaction confirmation indicates a referral fee is being paid, and the foreign finder does not participate in asset allocation or market timing",
            "Foreign broker-dealers ineligible for FINRA membership are not subject to these restrictions — a member granting concessions to a foreign broker-dealer must receive assurance that the foreign firm will abide by FINRA rules if it subsequently sells the security within the U.S.",
            "A suspended firm becomes a non-member as of the effective date of the expulsion and remains so until suspension ends",
            "FINRA membership is automatically terminated if the SEC revokes a member's registration due to suspension or expulsion from a national securities exchange",
            "Restrictions do NOT apply to transactions involving exempt securities (U.S. government and municipal securities) or to transactions executed on exchanges"
          ],
          exceptions: [
            "A FINRA member that is ALSO a member of an exchange may pay a commission to the exchange member to execute a transaction even if the exchange member is not a FINRA member",
            "A broker-dealer that is a member of both FINRA and an exchange that is suspended from FINRA may continue to conduct business on the exchange without interruption",
            "An RR subject to a sanction may sell traditional insurance products and similar non-FINRA-regulated activities"
          ],
          examTip: "Non-members = public customers for pricing purposes. The foreign finder exception is the only way a non-member can be paid a referral fee — and even then, the finder cannot give investment advice or do asset allocation."
        },
        {
          id: "chaperone-rule-15a6",
          name: "SEC Rule 15a-6 – Chaperone Rule",
          category: "SEC Rule",
          language: "Under SEC Rule 15a-6, in instances where an associated person of a foreign broker-dealer is permitted to transact business in the U.S., the person must be accompanied by a registered representative of a U.S. broker-dealer. Any transaction that is executed must be booked by the U.S. broker-dealer. This exemption is only available if the customer is a major U.S. institutional investor.",
          concept: "Rule 15a-6 allows a non-registered foreign research analyst to visit a U.S. institutional investor if accompanied by a FINRA registered person (chaperoned). All transactions must be booked through the U.S. broker-dealer.",
          parameters: [
            "Foreign broker-dealer representative must be accompanied by a FINRA-registered representative at all times",
            "Any transaction executed must be booked by the U.S. broker-dealer",
            "Exemption is available only if the customer is a major U.S. institutional investor"
          ],
          exceptions: [],
          examTip: "Rule 15a-6 = the chaperone rule. Foreign analysts can meet with U.S. institutional investors but only if accompanied by a registered U.S. rep — and all trades must be booked through the U.S. broker-dealer."
        },
        {
          id: "retiring-representatives",
          name: "Continuing Commissions for Retiring Representatives",
          category: "FINRA Rule",
          language: "Broker-dealers are permitted to pay continuing commissions to retiring registered representatives after they cease to be associated with the firm if two conditions are met: (1) there is a bona fide written contract entered into in good faith while the individual was still registered, and (2) the arrangement complies with all applicable federal securities laws, SEC rules, and regulations.",
          concept: "Firms may pay residual commissions to retired reps, but only under a written contract that prohibits the retiree from soliciting new accounts or servicing the accounts generating the commissions.",
          parameters: [
            "A bona fide written contract must have been entered into while the representative was still registered with the firm",
            "The contract must explicitly prohibit the retiring representative from soliciting new business, opening new accounts, or servicing the accounts generating the payments",
            "Payments may be derived from accounts of continuing customers regardless of whether customer funds are added to those accounts during the retirement period",
            "A retiring representative is defined as one who retires and leaves the securities industry entirely, including those who retire due to total disability",
            "In the event of the retiring representative's death, the designated beneficiary (or the representative's estate if no beneficiary is named) may receive the continuing commission payments"
          ],
          exceptions: [],
          examTip: "Retiring rep commissions are permitted only if there is a pre-existing written contract that BARS the retiree from soliciting new business. Death transfers the payment right to the named beneficiary or estate."
        }
      ]
    },
    {
      name: "Compensation, Gifts, and Prohibited Practices",
      rules: [
        {
          id: "gifts-rule-finra-3220",
          name: "FINRA Rule 3220 – Gifts and Gratuities ($100 Limit)",
          category: "FINRA Rule",
          language: "FINRA member firms and their associated persons cannot provide gifts that exceed $100 per year to any person, principal, proprietor, employee, agent, or representative of another firm if the payment or gratuity is in relation to the business of the recipient's employer.",
          concept: "The $100 annual limit on gifts is designed to prevent associated persons from acting contrary to the interests of their employer and clients through excessive gratuities. Gifts are valued at the greater of cost or market value at the time given.",
          parameters: [
            "$100 per person per year maximum (aggregate)",
            "Applies to gifts given in relation to the business of the recipient's employer",
            "Each firm may use either fiscal or calendar year for aggregation",
            "Gifts to a group are valued pro rata per individual (e.g., $200 basket to four people = $50 each)",
            "Gifts are valued at the greater of cost or market value at the time given",
            "Written records of all gifts and compensation must be retained by the giving member firm",
            "Does NOT apply to gifts made by a firm to its own employees or between co-workers"
          ],
          exceptions: [
            "Excluded from the $100 limit: personal gifts for special occasions (weddings, birth of a child); de minimis gifts (pens, notepads, modest desk ornaments) well below $100 in value; promotional gifts displaying a firm's logo with nominal value (umbrellas, tote bags, shirts) that are well below $100; commemorative/decorative items recognizing a business transaction or relationship (Lucite plaques)",
            "Business entertainment: excluded if (1) not so frequent as to raise a question of impropriety, and (2) the member or its associated persons host the clients and guests (i.e., they accompany — providing tickets alone is a gift, not entertainment)",
            "Tickets are valued at the greater of cost or face value",
            "Transportation and lodging expenses incidental to a hosted business entertainment event are also excluded",
            "A firm may pay an employee of another firm for services rendered if there is a written agreement stipulating the nature of employment, amount of compensation, and written consent of the recipient's employer"
          ],
          examTip: "The $100 limit is per person per year. Sending unaccompanied tickets = a gift (counts toward $100). Attending with the client = business entertainment (excluded). Lucite deal-tombstones and logo pens are excluded. Remember: value gifts at the GREATER of cost or market value."
        },
        {
          id: "churning-excessive-trading",
          name: "Churning — Excessive Trading",
          category: "FINRA Rule",
          language: "Churning is defined as excessive trading, typically for the purpose of generating additional compensation. There are no specific standards as to how much trading is too much; trading activity is viewed in light of the customer's investment objectives and financial situation.",
          concept: "Churning violates both suitability and anti-fraud principles. The customer does not need to suffer a loss for a violation to occur. Even discretionary authority does not permit excessive trading — all trading must be suitable as to type, size, and frequency.",
          parameters: [
            "No specific turnover ratio or number of trades constitutes a per se violation — evaluated in context of client objectives",
            "A client does not need to have lost money for churning to be a violation",
            "Applies equally to discretionary accounts — discretion does not permit excessive trading",
            "All trading must be suitable as to type, size, and frequency"
          ],
          exceptions: [],
          examTip: "Churning is contextual — no magic turnover ratio. Two key traps: (1) a customer profit doesn't excuse excessive trading, and (2) having discretion does NOT permit churning — all trades in discretionary accounts must still be suitable and not excessive."
        },
        {
          id: "sharing-in-accounts",
          name: "Sharing in Profits and Losses in Customer Accounts",
          category: "FINRA Rule",
          language: "Employees of FINRA members cannot share in profits or losses in a customer's account unless the employee has made a financial contribution to the account and shares in the profits or losses in direct proportion to the employee's financial contribution. The written authorization of the employee's member firm must be obtained prior to engaging in this activity.",
          concept: "An RR may only share in a customer account if they have put their own money in and share proportionally to their investment. Written firm approval is required in advance.",
          parameters: [
            "Employee must make a financial contribution to the customer's account",
            "Sharing in profits/losses must be in direct proportion to the employee's financial contribution",
            "Written authorization from the member firm must be obtained PRIOR to engaging in this activity"
          ],
          exceptions: [
            "Immediate family members: sharing arrangements with immediate family members may be permitted without proportional contribution requirements (check specific firm procedures)"
          ],
          examTip: "An RR can share in an account only if they contributed their own capital and only proportionally to that capital. Firm pre-approval in writing is mandatory. This is distinct from discretionary accounts — sharing requires co-investment."
        },
        {
          id: "splitting-commissions",
          name: "Splitting Commissions — Prohibition with Non-Registered Persons",
          category: "FINRA Rule",
          language: "A registered representative cannot offer to split commissions with a non-registered person. Also, an RR cannot offer to rebate commissions to a customer for previous transactions.",
          concept: "Commissions can only be shared with other properly registered persons. Rebating commissions to customers for past transactions is also prohibited.",
          parameters: [
            "Commission splitting with non-registered persons is prohibited",
            "Rebating commissions to customers for previous transactions is prohibited",
            "For state law purposes: splitting commissions requires each RR involved to have proper state registrations"
          ],
          exceptions: [],
          examTip: "Two separate prohibitions: (1) can't split commissions with non-registered persons, and (2) can't rebate commissions to customers. For state law, each RR sharing a split must be registered in the relevant state."
        },
        {
          id: "prohibited-practices-fraud",
          name: "Prohibited and Fraudulent Practices",
          category: "FINRA Rule",
          language: "FINRA rules prohibit a broad range of manipulative and deceptive practices including forgery, guaranteeing against losses, parking, failure to follow customer instructions, use of stockholder information for solicitation, failure to protect client confidentiality, undue influence on third parties, transactions executed at artificial levels, and commingling of customer and firm funds.",
          concept: "A comprehensive list of per se rule violations that go beyond suitability into outright fraud and breach of fiduciary-like duties. Many of these violations can also result in criminal prosecution.",
          parameters: [
            "Forgery: signing another person's name without authorization, including 'technical forgery' by a well-meaning RR acting on assumed authorization",
            "Guarantees: employees cannot guarantee against losses in customer accounts or reimburse a customer for losses in any way",
            "Parking: temporarily holding a position for a customer to avoid regulatory filing or net capital requirements",
            "Failure to follow customer instructions: even if the agent believes the instructions are not in the client's best interest, the agent cannot ignore them",
            "Use of stockholder information: a firm acting as trustee cannot use shareholder information for solicitation unless the corporation directs it to do so",
            "Confidentiality: client information cannot be released to third parties (including spouses, attorneys, accountants) without written consent of the account owner; exceptions exist when legally required by SEC, IRS, etc.",
            "Undue influence: firms cannot compensate third parties to make favorable comments about securities the firm is advertising or recommending",
            "Transactions at artificial levels: adjusting prices post-execution (other than on an 'as of' basis to correct an error) to alter a portfolio manager's realized profit or loss is prohibited",
            "Commingling of funds: customer securities must be kept separate from firm securities and identified to show each customer's individual ownership interest, even for street-name securities",
            "Misrepresentation of SIPC or FINRA membership: firms may disclose membership, but may not imply SIPC membership protects against market losses or that FINRA membership denotes endorsement or approval"
          ],
          exceptions: [
            "Confidentiality obligations do not apply when the firm is legally required to disclose to parties such as the SEC or IRS"
          ],
          examTip: "Technical forgery is a trap: even a well-meaning RR who signs a client's name on a document (believing they had permission) commits forgery. Guaranteeing against losses and commingling funds are absolute prohibitions with no carve-outs."
        }
      ]
    },
    {
      name: "Personal Activities of Employees",
      rules: [
        {
          id: "outside-business-activities-finra-3270",
          name: "FINRA Rule 3270 – Outside Business Activities (OBAs)",
          category: "FINRA Rule",
          language: "Registered representatives who are employed at FINRA member firms must provide written notice to their employing broker-dealer before participating in any business activities which are outside the scope of their normal relationship with the firm.",
          concept: "The OBA rule guards against conflicts of interest and ensures supervisors know what other business activities their RRs are engaged in. Even part-time employment must be reported. The disclosure appears under 'Other Business' on Form U4.",
          parameters: [
            "Written notice to the employing broker-dealer required BEFORE participating in outside business activities",
            "Even part-time employment must be reported",
            "Obtaining a real estate or insurance license must be reported",
            "Investment-related board positions must be reported",
            "Non-investment-related activities for charities, civic, or religious organizations are NOT required to be reported",
            "A spouse's outside business activities are NOT required to be reported by the RR",
            "Passive rental income is NOT reportable; however, active involvement in rental property management IS reportable",
            "Reported on Form U4 under 'Other Business'"
          ],
          exceptions: [],
          examTip: "OBA notice is BEFORE participation, not after. Key non-reportable items: spouse's OBAs, passive rental income, and pure non-investment charity work. Active rental management IS reportable. Even part-time jobs must be disclosed."
        },
        {
          id: "private-securities-transactions-finra-3280",
          name: "FINRA Rule 3280 – Private Securities Transactions ('Selling Away')",
          category: "FINRA Rule",
          language: "Private securities transactions are those that are executed outside of the regular scope of an associated person's employment with a member firm. An associated person who engages in these types of transactions must provide written notice to his employing member firm. If the firm is not made aware of such activities, this practice may be referred to as 'selling away.'",
          concept: "Any transaction outside the scope of regular employment must be disclosed to the firm. If compensation is involved, the firm must approve or disapprove in writing and, if approved, must record the transaction on the firm's books. Notification is required regardless of whether compensation is received.",
          parameters: [
            "Notification to employer required regardless of whether compensation will be received",
            "Covered transactions include: participation in traditional public offerings, private placements, and arranging loans",
            "If compensation will be received: the firm must provide written determination as to whether it approves; if approved, transactions must be recorded on the member's books",
            "If NO compensation will be received: the firm must provide written acknowledgment of receipt and may require the person to adhere to specific conditions"
          ],
          exceptions: [],
          examTip: "Selling away = private securities transactions without firm knowledge. The key distinction on exams: compensated vs. uncompensated. If compensated and approved, the firm MUST book the trades. Both require written notice — compensation level changes what the firm must do in response."
        },
        {
          id: "accounts-at-other-firms",
          name: "Accounts at Other Broker-Dealers — Employee Account Rules",
          category: "FINRA Rule",
          language: "Member firms are required to monitor the personal accounts that their employees (both clerical and registered persons) open or establish with a firm other than the one at which they're employed. Before opening an outside account, the employee must obtain prior written consent from their own firm and provide written notification to the executing firm of their association with another member firm.",
          concept: "Dual monitoring prevents employees from using outside accounts to circumvent supervision. The executing firm must provide duplicate confirmations and statements to the employing firm on request.",
          parameters: [
            "Employee must obtain prior written consent from their own firm before opening an outside account",
            "Employee must notify the executing firm in writing of their association with another broker-dealer",
            "The executing firm must send duplicate confirmations, statements, or other transactional information to the employing broker-dealer upon written request",
            "Applies to accounts where the employee has a beneficial interest, including accounts for: the employee's spouse; dependent children residing in the same household; related persons over whose account the employee has control; and any other individual over whose account the employee has control and to whose financial support the employee materially contributes",
            "Previously opened accounts: employee must obtain written consent from their employer within 30 days of beginning employment",
            "The executing firm is NOT required to obtain the employing firm's approval prior to the entry of each order once the account is open"
          ],
          exceptions: [
            "Requirements do not apply to accounts limited to transactions involving: redeemable investment company securities (mutual funds), unit investment trusts, variable contracts, or 529 plans"
          ],
          examTip: "Prior consent required before opening the outside account. Existing accounts: get employer consent within 30 days of starting work. Duplicate confirmations go to the employing firm only upon written request. Mutual fund-only accounts are exempt."
        },
        {
          id: "borrowing-lending-finra-3240",
          name: "FINRA Rule 3240 – Borrowing and Lending with Customers",
          category: "FINRA Rule",
          language: "Registered individuals cannot borrow money from, or lend money to, a customer unless certain conditions are met. These conditions include implementing written procedures permitting such activity and satisfying at least one of five specified provisions.",
          concept: "Borrowing and lending between an RR and a customer is presumptively prohibited. It is only allowed under narrow circumstances that reduce the conflict of interest. Provisions 3, 4, and 5 require firm pre-approval in writing.",
          parameters: [
            "Requires written firm procedures permitting the activity to be in place",
            "Must satisfy at least one of five provisions: (1) the customer and RR are immediate family members; (2) the customer is a financial institution regularly engaged in extending credit; (3) both parties are registered with the same firm; (4) loan is based on a personal relationship independent of the customer-broker relationship; (5) loan is based on a business relationship independent of the customer-broker relationship",
            "For provisions 3, 4, or 5: registered person must notify the firm prior to entering the arrangement, and the firm must pre-approve in writing",
            "Firm must maintain written pre-approvals for at least three years after the arrangement terminates or at least three years after the registered person terminates from the firm"
          ],
          exceptions: [],
          examTip: "Five permissible borrowing/lending provisions — the immediate family and bank/financial institution provisions do NOT require firm pre-approval. Provisions 3, 4, and 5 DO require prior firm written approval. Retention is 3 years from end of arrangement or termination, whichever is later."
        }
      ]
    },
    {
      name: "Complaints, Arbitration, and Disciplinary Procedures",
      rules: [
        {
          id: "customer-complaints-finra",
          name: "Customer Complaints — FINRA Requirements",
          category: "FINRA Rule",
          language: "FINRA defines a complaint as any written statement of a customer or any person acting on behalf of a customer alleging a grievance involving the activities of those persons under the control of the member in connection with the solicitation or execution of any transaction or the disposition of securities or funds of that customer.",
          concept: "Member firms must maintain a complaint file at each OSJ and report certain complaints to FINRA within 30 days. Quarterly statistical reports are due even if no complaints were received that trigger individual reporting.",
          parameters: [
            "Must maintain a separate file of all written complaints (including email and text messages) at each OSJ for four years",
            "Complaints must be forwarded to a principal for review and initialed by the principal",
            "File must contain a description of actions taken by the member, if any",
            "Response to a written complaint may be in written or oral form",
            "Even if no complaints have been received, an empty complaint file must be maintained",
            "Certain events must be reported promptly to FINRA but no later than 30 calendar days after the firm learns of them, including: written customer complaints involving theft, misappropriation of funds or securities, or forgery; violations of securities law; denial of registration or disciplinary actions; being named as a defendant in regulatory proceedings; indictments or convictions for specified offenses; civil litigation or arbitration resulting in an award of more than $15,000 (associated persons) or $25,000 (firms); firm actions against an associated person resulting in suspension, termination, withholding of commissions, or fines exceeding $2,500",
            "Quarterly statistical/summary reports of all customer complaints are due on the 15th of the month following the end of the calendar quarter; no report is due if no complaints were received"
          ],
          exceptions: [],
          examTip: "Complaints file: 4 years at each OSJ. Individual event reporting to FINRA: 30 days. Thresholds: $15,000 for RR-related awards, $25,000 for firm-related awards, $2,500 for firm actions against an RR. Quarterly stats: due by the 15th of the following month."
        },
        {
          id: "customer-complaints-msrb",
          name: "Customer Complaints — MSRB Requirements",
          category: "MSRB Rule",
          language: "According to MSRB rules, a complaint is any written statement alleging a grievance involving the activities of the municipal securities firm or any associated persons of the firm with respect to any matter involving a customer's account. All written complaints must be reviewed, initialed, and promptly attended to by a Municipal Securities Principal or a Municipal Securities Sales Principal.",
          concept: "MSRB complaint files must be maintained for six years in electronic format using MSRB-specified product and problem codes. MSRB firms must promptly report certain complaints (involving theft, misappropriation, or forgery) to appropriate regulatory authorities.",
          parameters: [
            "Must be reviewed, initialed, and promptly attended to by a Municipal Securities Principal or Municipal Securities Sales Principal",
            "Record must include: complainant's name, address, and account number; date complaint was received; date of the activity giving rise to the complaint; name of each associated person identified; description of the nature of the complaint and action taken",
            "Records must be kept for six years in electronic format using MSRB-specified product and problem codes",
            "Firms must promptly report complaints alleging theft, misappropriation of funds and/or securities, or forgery to appropriate regulatory authorities"
          ],
          exceptions: [],
          examTip: "MSRB complaint retention = 6 years (contrast with FINRA's 4 years). MSRB requires electronic format with specific MSRB product and problem codes. FINRA complaints are kept at each OSJ; MSRB complaint records must include the account number and specific dates."
        },
        {
          id: "code-of-procedure",
          name: "Code of Procedure — FINRA Disciplinary Process",
          category: "FINRA Rule",
          language: "The Code of Procedure describes FINRA's disciplinary process. These rules cover disciplinary actions by FINRA against member firms and their associated persons. Disciplinary actions may be taken by FINRA for violations of FINRA rules, violations of SEC rules, or failure to pay dues or assessments.",
          concept: "The Code of Procedure is the formal disciplinary mechanism: FINRA files complaint, respondent responds within 25 days, hearing panel decides, appeals go to the NAC and then the SEC. The Code of Arbitration handles member-vs-member and member-vs-customer disputes, not rule violations.",
          parameters: [
            "Respondent must file a response within 25 days of receiving the complaint; failure triggers a second notice; failure to answer the second notice within 14 days can be treated as an admission",
            "Hearing Panel: Hearing Officer (FINRA attorney) plus two panelists from member firms; Hearing Officer must provide 28 days notice of the hearing",
            "Panel must render a written decision within 60 days after accepting final evidence",
            "Sanctions available: censure, fine, suspension (definite or until conditions met), expulsion/membership cancellation, bar from association with any member firm, or any other fitting sanction",
            "A suspended or barred RR cannot be associated in any capacity, including clerical or ministerial",
            "Most sanctions are effective 30 days after the respondent receives notice of the final action; a bar or expulsion is effective when the decision is served",
            "Appeal: respondent has 25 days to appeal to the National Adjudicatory Council (NAC); Department of Enforcement has the same right of appeal if the Panel rules in the respondent's favor",
            "NAC can affirm, modify, reverse, increase, or reduce any sanction; respondent may then appeal to the SEC; further appeal to federal court is possible",
            "AWC (Acceptance, Waiver, and Consent): respondent accepts the violation finding, consents to sanctions, waives the right to appeal; if rejected by respondent, normal process applies",
            "Minor Rule Violations: fine of up to $2,500 and/or censure if respondent consents; covered violations include: failure to have advertising approved by a principal; failure to maintain advertising files; failure to file advertisements timely; failure to file timely short position reports; books and records violations; failure to submit trading data"
          ],
          exceptions: [],
          examTip: "Code of Procedure = FINRA disciplinary actions (FINRA vs. firm or RR). Code of Arbitration = disputes between members, or members and customers. AWC waives the right to appeal — if the respondent rejects it, the normal hearing proceeds. Minor rule violations: max $2,500 fine."
        },
        {
          id: "code-of-arbitration",
          name: "Code of Arbitration",
          category: "FINRA Rule",
          language: "The Code of Arbitration requires that disputes between members and other members, or between members and any clearing corporation, be settled by arbitration. Arbitration is also required in disputes between member firms and persons associated with a member. Arbitration is required if a public customer WISHES to arbitrate a dispute with a member; however, the member cannot bring a public customer to arbitration unless the customer agrees.",
          concept: "Binding arbitration is mandatory for industry disputes and for customer disputes when the customer elects it. The statute of limitations is six years. Simplified arbitration applies to disputes not exceeding $50,000.",
          parameters: [
            "Mandatory for: member vs. member; member vs. clearing corporation; member vs. associated persons",
            "Customer-initiated: required if the customer wishes to arbitrate; the member cannot force a customer into arbitration unless the customer agreed (e.g., via a predispute arbitration clause)",
            "Statute of limitations: six years from the occurrence giving rise to the dispute",
            "If a customer is involved, a majority of arbitrators must be public arbitrators (not affiliated with the securities industry) unless parties agree otherwise",
            "Customer has the right to reject any arbitrator on a peremptory basis and may make unlimited challenges for cause",
            "Simplified arbitration applies to disputes not exceeding $50,000: single arbitrator decides based on written evidence unless a hearing is demanded",
            "Awards must be paid within 30 days of determination",
            "Predispute arbitration clauses: must be highlighted, must be preceded by specific disclosures, and a copy must be given to the customer with acknowledgment of receipt",
            "Exception: statutory discrimination and sexual harassment claims are only arbitrated if parties agree to arbitrate, either before or after the dispute"
          ],
          exceptions: [
            "Arbitration does NOT apply to disputes between a member firm and FINRA",
            "Statutory discrimination or sexual harassment claims are NOT required to be arbitrated — only arbitrated if mutually agreed"
          ],
          examTip: "Arbitration is binding and final — no appeal (unlike Code of Procedure). SOL = 6 years. Simplified arbitration = disputes under $50,000. Predispute arbitration clauses in new account forms must be highlighted. Sexual harassment claims cannot be forced into arbitration."
        }
      ]
    },
    {
      name: "MSRB Political Contributions (Rule G-37)",
      rules: [
        {
          id: "msrb-g37-political-contributions",
          name: "MSRB Rule G-37 – Political Contributions / Pay-to-Play",
          category: "MSRB Rule",
          language: "Municipal securities firms are prohibited from engaging in specified municipal securities business with issuers for two years if certain political contributions are made to officials of those issuers. The rule targets the practice of 'pay-to-play,' whereby municipal securities dealers make political contributions to gain favor with politicians who may direct underwriting business in return.",
          concept: "Rule G-37 severs the connection between political contributions and the awarding of municipal securities business. It applies to the firm, its Municipal Finance Professionals (MFPs), and PACs controlled by the firm or MFPs. A $250 per election exception exists for MFPs who can vote for the candidate.",
          parameters: [
            "Two-year ban on municipal securities business triggered by contributions from: the municipal securities firm; any MFP; any PAC controlled by the firm or an MFP",
            "Municipal securities business subject to ban: negotiated primary offerings (NOT competitive underwritings); private placements of municipal securities; financial advisory work related to a primary offering; remarketing agent roles related to a primary offering",
            "MFP (Municipal Finance Professional) definition: associated person primarily engaged in municipal securities representative activities (underwriting, trading, sales to institutional clients, advisory/consulting services, research, investment advice); any associated person who solicits any municipal securities business; direct supervisors of these persons; members of the executive or management committee of the dealer",
            "Retail salespersons who only sell municipal bonds to individual natural persons are NOT considered MFPs",
            "MFP status continues for one year following the activity that initially gave rise to the designation",
            "Two-year look-back: a contribution made by an individual up to two years before becoming an MFP will subject the firm to the ban; for executive/management committee members, the look-back is only six months",
            "Exception: MFP may contribute up to $250 per election to an official for whom the MFP is entitled to vote without triggering the ban",
            "The $250 per election exception applies to each separate election (primary and general are separate elections)",
            "If ban is triggered: applies from the date of the contribution for two years; if the MFP moves to a new firm, the new firm is also subject to the remaining ban if the individual remains an MFP",
            "Joint checking account contributions: split evenly between account holders for purposes of the $250 limit",
            "A spouse's contribution from a personal (non-joint) account is not attributed to the MFP and has no contribution limit under this rule",
            "Solicitation of contributions by MFPs or firms is prohibited; coordinating (bundling) contributions is also prohibited; no $250 allowance for solicitation violations"
          ],
          exceptions: [
            "Competitive underwritings are excluded from the definition of municipal securities business for ban purposes",
            "Automatic exemption: dealers may execute up to two automatic exemptions per 12 months for MFP contributions of $250 or less if: discovered within 4 months of the contribution, and the contributor obtains a full return of the contribution within 60 calendar days of discovery; dealer may not use more than one automatic exemption for the same MFP; not available for firm, dealer-controlled PAC, or MFP-controlled PAC contributions",
            "Application for exemption available from appropriate regulatory authority for inadvertent or innocent violations; ignorance of the rule is NOT a factor in granting exemptions"
          ],
          examTip: "G-37 = 2-year ban for contributions over $250 (or without voting rights). The $250 safe harbor applies per election (primary AND general each get $250). Competitive bid underwritings are NOT banned business. Look-back is 2 years for MFPs generally, 6 months for executive/management committee members. Spousal contributions from separate accounts don't count against the MFP."
        },
        {
          id: "msrb-g37-form-and-records",
          name: "MSRB Rule G-37 – Disclosure and Recordkeeping Requirements",
          category: "MSRB Rule",
          language: "Political contributions (other than those made under the $250 exception) must be disclosed to the MSRB by municipal securities firms on Form G-37, which is filed on a quarterly basis. These records must be kept for six years.",
          concept: "Form G-37 is the quarterly disclosure report for political contributions. It covers contributions by the firm, MFPs, PACs controlled by the firm or MFPs, and non-MFP executive officers. The data is made publicly available by the MSRB.",
          parameters: [
            "Form G-37 must be submitted quarterly if: reportable political contributions or payments to political parties were made; the dealer engaged in municipal securities business during the reporting period; or the dealer used consultants during the period",
            "Deadline: last day of the month following the end of each calendar quarter",
            "Two copies of each Form G-37 must be sent to the Board",
            "Contributions by non-MFP executive officers must be disclosed (do NOT trigger the two-year ban but are still reportable)",
            "Contributions of $250 or less where the contributor is entitled to vote are NOT required to be reported on Form G-37",
            "Firms that don't engage in municipal securities business for consecutive calendar quarters may file Form G-37(x) to suspend the quarterly filing obligation; if the dealer thereafter engages in municipal securities business, it must again begin filing Form G-37",
            "Records must be retained for six years",
            "Records must include: names, titles, and addresses of all MFPs and executive officers; states in which the firm intends to conduct municipal business; lists of issuers with whom the firm did business in the current year and the two preceding calendar years; amounts, dates, and identities of all contributors; copies of filed Forms G-37 with proof of mailing"
          ],
          exceptions: [],
          examTip: "Form G-37 is filed quarterly (due last day of the following month). Records kept 6 years. Non-MFP executive officer contributions are reported but don't trigger the ban. G-37(x) allows inactive dealers to skip filing until they re-engage in muni business."
        },
        {
          id: "msrb-g38-solicitation",
          name: "MSRB Rule G-38 – Solicitation of Municipal Securities Business",
          category: "MSRB Rule",
          language: "A broker, dealer, or municipal securities dealer cannot agree to pay, either directly or indirectly, any person who is not affiliated with the firm for soliciting municipal securities business on behalf of the firm.",
          concept: "Rule G-38 prohibits the use of outside, non-affiliated consultants or third parties to solicit municipal securities business for compensation. Affiliated persons (partners, directors, officers, employees, registered persons, or controlled companies) are permitted to solicit.",
          parameters: [
            "Firms may not pay non-affiliated persons for soliciting municipal securities business",
            "Solicitation: any direct or indirect communication with an issuer for the purpose of obtaining or maintaining municipal securities business",
            "Affiliated person: partner, director, officer, employee, or registered person of the member firm; in the case of a bank dealer, any person with similar status; also includes companies that directly control, are controlled by, or are under common control with the municipal securities firm",
            "Municipal securities business under G-38: negotiated primary offering purchases; offer or sale of a primary offering on behalf of any issuer (public or private placement); financial or advisory services to an issuer in a primary offering"
          ],
          exceptions: [],
          examTip: "G-38 = no paying non-affiliated third parties to solicit muni business. Affiliated persons (employees, controlled companies) CAN be paid. Competitive bid allocations are excluded from the definition of municipal securities business under G-38 (same as G-37)."
        }
      ]
    },
    {
      name: "MSRB Investor Protection and Market Conduct Rules",
      rules: [
        {
          id: "msrb-g10-investor-education",
          name: "MSRB Rule G-10 – Investor and Municipal Advisory Client Education and Protection",
          category: "MSRB Rule",
          language: "Once every calendar year, municipal securities firms are required to provide each customer with the following information in either written or electronic form: (1) a statement that they are registered with the SEC and the MSRB; (2) the website address for the MSRB; and (3) a statement as to the availability of an Investor Brochure for customers posted on the MSRB website describing the protections afforded by MSRB rules and how to file a complaint.",
          concept: "Rule G-10 is the MSRB analog to FINRA's BrokerCheck investor education requirement. Annual disclosure to customers of the MSRB's resources and investor protection brochure.",
          parameters: [
            "Annual disclosure to each customer: MSRB and SEC registration statement, MSRB website address, and availability of the MSRB Investor Brochure",
            "May be provided in written or electronic form",
            "Investor Brochure covers: protections under MSRB rules and how to file a complaint with an appropriate regulatory authority"
          ],
          exceptions: [],
          examTip: "G-10 is annual (like FINRA's BrokerCheck notice). Three required items: registration statement, MSRB website, and availability of the Investor Brochure. Compare: FINRA requires disclosure of BrokerCheck hotline, FINRA website, and brochure availability."
        },
        {
          id: "mediation-finra",
          name: "FINRA Mediation",
          category: "FINRA Rule",
          language: "Mediation is an informal process in which two parties to a dispute attempt to reach a settlement without resorting to arbitration or litigation. A mediator is a neutral person who facilitates discussions and helps the parties reach an agreement; the mediator does not impose a settlement.",
          concept: "Mediation is voluntary and can run concurrently with arbitration. Unlike arbitration, either party may withdraw at any time, the mediator cannot impose a settlement, and the proceedings are entirely private and confidential. Mediation can begin after arbitration starts, as long as the arbitrator has not yet made a final decision.",
          parameters: [
            "Mediator is neutral and knowledgeable about the securities industry",
            "Mediator's fee is split by the parties unless they agree otherwise",
            "Either party may withdraw at any time (in writing)",
            "Mediation discussions are confidential; the mediator will not reveal caucus discussions to the other side without authorization",
            "Process ends when: parties reach a written settlement; mediator declares an impasse; or either party or the mediator withdraws in writing",
            "Mediation and arbitration can run concurrently",
            "Mediation can start after arbitration begins as long as the arbitrator has not made a final decision"
          ],
          exceptions: [],
          examTip: "Key mediation vs. arbitration distinctions: (1) mediator facilitates but cannot impose; arbitrator decides; (2) either party can withdraw from mediation; no unilateral withdrawal from arbitration; (3) mediation settlement is private/confidential; arbitration decisions are public; (4) mediation is faster and cheaper than arbitration."
        }
      ]
    }
  ]
};
