// Chapter 8 – Customer Accounts
window.CHAPTER_8 = {
  id: 8,
  title: "Customer Accounts",
  subtitle: "New account opening, suitability, Reg BI, AML/USA PATRIOT Act, penny stock rules, account types, and options account requirements",
  sections: [
    {
      name: "Telemarketing and Cold-Calling Rules",
      rules: [
        {
          id: "telephone-consumer-protection-act",
          name: "Telephone Consumer Protection Act of 1991",
          category: "Federal Law",
          language: "The federal Telephone Consumer Protection Act of 1991 governs telephone solicitations by broker-dealers. Provisions have been incorporated into SRO rules and restrict calling hours, require identification disclosures, mandate do-not-call list maintenance, prohibit abusive calling behavior, and prohibit prerecorded messages without prior written permission.",
          concept: "Federal law that protects consumers from high-pressure cold-calling tactics. Core rule: calls only between 8:00 a.m. and 9:00 p.m. local time of the person called, unless prior consent exists.",
          parameters: [
            "Telephone solicitations may be placed only between 8:00 a.m. and 9:00 p.m. local time of the person being called, unless prior consent has been given",
            "Applies to both wired and wireless telephone numbers",
            "Callers must provide their name, entity on whose behalf the call is made, a phone number or address where the entity can be reached, and disclosure that the purpose of the call is to solicit the purchase of securities or related services",
            "Do-not-call requests must be honored and the person placed on the list within a reasonable period not exceeding 30 days from the date of the request",
            "Firms must train registered personnel on proper use of the do-not-call list and create a written policy describing how the list will be maintained",
            "Broker-dealer must ensure its outbound telephone number is not blocked by the recipient's caller ID service",
            "Using prerecorded messages is prohibited unless the broker-dealer has received the caller's prior written permission",
            "Registered representatives cannot make calls that harass or abuse the person being called (threatening language, profanity, continuously ringing a phone, or repeatedly engaging someone to annoy or harass)",
            "Member firms are prohibited from calling persons on the National Do Not Call Registry of the FTC; firms must update their list by contacting the FTC"
          ],
          exceptions: [
            "Time-of-day and disclosure requirements do not apply to clients with whom the member firm has an established business relationship, as long as the purpose is to maintain or service an existing account",
            "An established business relationship exists if: within the preceding 18 months the person transacted, held a position, had account activity, or the firm was broker-dealer of record; OR within the previous 3 months the person contacted the firm to inquire about a product or service",
            "A person on the National Do Not Call Registry may be called if she has given prior written consent (with the telephone number to be called stated in the agreement) or if a personal relationship exists between the RR and the person (family, friends, or acquaintances)"
          ],
          examTip: "Remember '8 to 9': calls only 8:00 a.m. to 9:00 p.m. local time. Do-not-call list update deadline is 30 days. The established-business-relationship lookback is 18 months for transactions/account activity and 3 months for inquiries."
        },
        {
          id: "stockholder-list-prohibition",
          name: "Prohibition on Use of Stockholder Lists for Solicitation",
          category: "FINRA Rule",
          language: "SRO rules do not allow the use of stockholder information for solicitation purposes by a corporation's trustee unless the member firm is specifically directed to do so by, and for the benefit of, the corporation.",
          concept: "An RR is generally prohibited from using a shareholder list as a source for cold calling.",
          parameters: [
            "Use of shareholder lists for cold-calling purposes is prohibited",
            "Exception: member firm is specifically directed by, and for the benefit of, the corporation"
          ],
          exceptions: [],
          examTip: "Shareholder lists = off-limits for cold calling unless the corporation itself directs the firm to use them for the corporation's benefit."
        }
      ]
    },
    {
      name: "Penny Stock Regulations",
      rules: [
        {
          id: "penny-stock-definition",
          name: "Penny Stock Definition",
          category: "SEC Rule",
          language: "A penny stock is generally defined as stock that trades for lower than $5.00 per share. Exchange-traded stocks (NMS securities listed on NYSE, NYSE American, or Nasdaq), investment company securities, OCC-listed puts and calls, and securities with an inside bid price of at least $5.00 per share are NOT considered penny stocks.",
          concept: "The SEC defines penny stocks as low-priced OTC equities quoted on the Pink Limited Market, trading below $5.00. Certain higher-quality or exchange-listed securities are carved out of the definition.",
          parameters: [
            "Penny stock: stock trading below $5.00 per share, quoted on the Pink Limited Market",
            "NOT a penny stock: exchange-listed stocks (NMS securities — NYSE, NYSE American, or Nasdaq)",
            "NOT a penny stock: investment company securities",
            "NOT a penny stock: OCC-listed puts and calls",
            "NOT a penny stock: securities with an inside bid price of at least $5.00 per share",
            "NOT a penny stock: securities whose issuer has net tangible assets exceeding $2 million (if in continuous operation for at least three years) or net tangible assets exceeding $5 million (if in continuous operation for less than three years) or average revenue of at least $6 million for the last three years",
            "Penny stocks cannot be purchased on margin"
          ],
          exceptions: [
            "Any security listed on Nasdaq or a national exchange is exempt from the penny stock definition regardless of its price",
            "Penny stocks can be sold short if they satisfy the borrow rule under Regulation SHO"
          ],
          examTip: "Key threshold: below $5.00 per share on the Pink Market. Exchange-listed = never a penny stock. Penny stocks cannot be bought on margin but can be sold short under Reg SHO."
        },
        {
          id: "penny-stock-disclosure-rules",
          name: "Penny Stock Disclosure Rules (SEC Rules 15g-1 through 15g-6)",
          category: "SEC Rule",
          language: "SEC Rules 15g-1 through 15g-6 require customers to be provided with specific information if broker-dealers execute penny stock transactions for them. Prior to executing any transaction, the broker-dealer must provide a Risk Disclosure Document on penny stocks containing language specified by the SEC. For each transaction, the broker-dealer must also disclose the current quote and the compensation the broker-dealer and registered representative will receive.",
          concept: "Mandatory pre-transaction and per-transaction disclosures for penny stock dealings, plus a monthly account statement obligation if a customer holds penny stocks.",
          parameters: [
            "Broker-dealer must provide a Risk Disclosure Document before executing any penny stock transaction",
            "For each penny stock transaction: broker-dealer must disclose the current quote for the security",
            "For each penny stock transaction: broker-dealer must disclose the compensation the broker-dealer AND the registered representative will receive",
            "If a broker-dealer has sold a security that qualifies as a penny stock as of the last trading day of any month, a monthly statement must be provided to the customer as long as the security is held",
            "Monthly statement must include the identity and number of shares of each penny stock held and the estimated market value to the extent it can be determined"
          ],
          exceptions: [
            "Transactions with institutional accredited investors (non-individual accredited investors as defined in Regulation D) are exempt from both the disclosure rules and the sales practice requirements",
            "Private placement transactions are exempt",
            "Transactions with the issuer, officers, directors, general partners, or 5%+ owners are exempt",
            "Transactions not recommended by the broker-dealer are exempt",
            "Transactions by a broker-dealer whose commissions and markups from penny stocks do not exceed 5% of its total commissions and markups are exempt"
          ],
          examTip: "Two layers of disclosure: (1) pre-transaction Risk Disclosure Document and (2) per-transaction quote + compensation disclosure. Monthly statements are also required while the customer holds penny stock."
        },
        {
          id: "penny-stock-cold-call-rule",
          name: "SEC Rule 15g-9 — Penny Stock Cold Call Rule",
          category: "SEC Rule",
          language: "SEC Rule 15g-9 places certain conditions on the way broker-dealers solicit penny stock transactions from customers. Prior to the purchase of a penny stock by a customer, the broker-dealer must approve the customer's account for penny stock transactions and obtain from the customer a written agreement to the transaction indicating the identity and quantity of penny stock to be purchased.",
          concept: "The Cold Call Rule for penny stocks requires account approval for suitability before a penny stock purchase, plus a written customer agreement identifying the specific security and quantity.",
          parameters: [
            "Broker-dealer must determine that the customer is suitable for penny stock transactions based on the customer's financial situation and investment objectives",
            "Broker-dealer must deliver a written statement to the customer regarding the suitability determination",
            "Broker-dealer must obtain from the customer a manually signed and dated copy of the suitability statement",
            "A written customer agreement identifying the specific penny stock and quantity must be obtained before the transaction"
          ],
          exceptions: [
            "All exemptions under Rules 15g-1 through 15g-6 apply",
            "Additional exemption for established customers: a customer for whom the broker-dealer (or clearing firm) carries an account AND who has executed a securities transaction or made a deposit of funds or securities more than one year previously, OR has made three purchases of penny stocks from three different issuers on three separate days",
            "Established customers are NOT exempt from the penny stock disclosure rules (Rules 15g-1 through 15g-6) — only from the sales practice requirements of 15g-9"
          ],
          examTip: "Rule 15g-9 (Cold Call Rule) requires both a suitability determination AND a signed written agreement per transaction. Established customer status (1+ year account or 3 prior purchases from 3 issuers) exempts from 15g-9 sales practices but NOT from the disclosure rules."
        }
      ]
    },
    {
      name: "New Account Documentation and KYC",
      rules: [
        {
          id: "finra-rule-4512",
          name: "FINRA Rule 4512 — Customer Account Information",
          category: "FINRA Rule",
          language: "FINRA Rule 4512 requires member firms to make reasonable efforts to obtain, verify, and update specified essential information about each customer when opening and maintaining accounts. Required information includes customer name, residence, whether the customer is of legal age, the name of the responsible RR(s), and prior to settlement of the initial transaction: taxpayer ID number, occupation, employer name and address, and whether the customer is associated with another member firm.",
          concept: "The foundational new account documentation rule — what every RR must collect before entering the first order and before the first settlement date.",
          parameters: [
            "Must obtain BEFORE entering the initial order: customer name and residence (P.O. box cannot be used to open an account), signature of the approving principal, and whether the customer is of legal age",
            "Name of the RR responsible for the account; if multiple RRs, a record of the scope of responsibility (not required for institutional accounts)",
            "Must obtain prior to settlement of the initial transaction: taxpayer ID number (SSN), occupation and employer name and address, whether the customer is associated with another member firm",
            "Institutional account: bank, savings and loan, insurance company, registered investment company, registered investment adviser, or any person with total assets of at least $50 million",
            "If customer is a business or organization, obtain names of individuals authorized to transact for the account",
            "Account records must be maintained for 6 years from the date of last update or account closure",
            "Account record or documentation must be sent to the customer within 30 days of opening the account or with the client's next statement",
            "Periodic updates must be sent at least every 36 months",
            "If a customer provides updated information, a revised account record must be sent within 30 days of notification or at the time of the next statement",
            "If an address change is requested, notification must be sent to both the previous address and the responsible registered personnel within 30 days"
          ],
          exceptions: [
            "The requirement to obtain TIN, occupation, and employer information does not apply to institutional accounts or accounts where transactions are only in non-recommended investment company shares (mutual funds)"
          ],
          examTip: "Memorize the two-tier timing: certain info (name, residence, age, principal signature) is needed BEFORE the first order; TIN, occupation, employer, and broker-dealer affiliation are needed BEFORE settlement. Record updates are sent within 30 days of change and at least every 36 months."
        },
        {
          id: "sec-rule-17a-3",
          name: "SEC Rule 17a-3 — Customer Account Records",
          category: "SEC Rule",
          language: "SEC Rule 17a-3 requires broker-dealers to maintain the following records for each customer or owner of an account: name, address, date of birth, employment status and occupation, investment objective(s), tax ID number, whether the customer is associated with a broker-dealer, and annual income and net worth (excluding principal residence).",
          concept: "SEC recordkeeping standard for customer accounts — runs alongside FINRA Rule 4512. A reasonable effort to obtain all of this information must be made prior to opening the account.",
          parameters: [
            "Required records: name, address, date of birth, employment status/occupation, investment objective(s), tax ID number, association with a broker-dealer, annual income and net worth (excluding primary residence)",
            "A reasonable effort to obtain all information must be made prior to opening the account"
          ],
          exceptions: [
            "Information regarding a customer's educational background is not required to be collected"
          ],
          examTip: "SEC Rule 17a-3 is the recordkeeping backbone; FINRA 4512 is the conduct rule. Both overlap significantly. Note: educational background is NOT required."
        },
        {
          id: "trusted-contact-person",
          name: "Trusted Contact Person (Rule 4512(a)(1)(F))",
          category: "FINRA Rule",
          language: "A trusted contact person must be age 18 or older and is essential in assisting the firm in protecting the customer's account and its assets and responding to possible financial exploitation. This person is not given the authority to execute transactions or make decisions in the account.",
          concept: "A protective measure — particularly for elderly or vulnerable clients — allowing the firm to contact a designated third party about possible financial exploitation or account concerns.",
          parameters: [
            "Trusted contact person must be age 18 or older",
            "Firm should make a reasonable effort to obtain the trusted contact's name and contact information (mailing address, phone number, and email address) when opening or updating an account",
            "Trusted contact information is not required to open the account",
            "The trusted contact has no authority to execute transactions or make account decisions",
            "Does not apply to institutional accounts"
          ],
          exceptions: [],
          examTip: "Trusted contact = protective contact only, NOT trading authority. Obtaining the trusted contact's information is a reasonable effort obligation, not a hard requirement to open an account. This rule specifically targets elder financial exploitation."
        },
        {
          id: "account-record-signatures",
          name: "Account Documentation Signature Requirements",
          category: "FINRA Rule",
          language: "Industry rules require the approving principal to sign the new account form. Customer signatures are not required for cash accounts but are required for margin accounts and options accounts. Discretionary accounts require a manual (not electronic) signature from each person authorized to exercise discretion.",
          concept: "Clarifies which signatures are mandatory: principal approval is always required, customers must sign only for margin and options, and discretionary authority requires a wet (manual) signature.",
          parameters: [
            "Approving principal must sign the new account form",
            "Customer signature is NOT required to open a cash account",
            "Customer signature IS required for margin account documentation",
            "Customer signature IS required for options account documentation",
            "Manual (physical) signature is required from each person authorized to exercise discretion in a discretionary account",
            "All other required signatures may be provided electronically"
          ],
          exceptions: [],
          examTip: "Cash account = no customer signature required. Margin or options = customer must sign. Discretionary authority = manual signature only (cannot be electronic)."
        }
      ]
    },
    {
      name: "Suitability and Regulation Best Interest",
      rules: [
        {
          id: "finra-rule-2111",
          name: "FINRA Rule 2111 — Suitability",
          category: "FINRA Rule",
          language: "Broker-dealers and their registered persons must have a reasonable basis for recommending a transaction or investment strategy. These recommendations must be based on information obtained from the customer and used to identify the customer's investment profile. Three suitability obligations apply: (1) Reasonable basis obligation — suitable for at least some investors; (2) Customer-specific obligation — suitable for the particular customer; (3) Quantitative obligation — a series of recommendations is not excessive.",
          concept: "The foundational suitability standard for retail customers. Requires understanding the customer's full investment profile before recommending any security or strategy.",
          parameters: [
            "Customer investment profile includes: age, other investments, financial situation and needs, tax status, investment objectives and experience, investment time horizon, liquidity needs, risk tolerance, and any other information obtained from the customer",
            "Reasonable basis obligation: member must have a reasonable basis to believe a recommendation is suitable for at least some investors",
            "Customer-specific obligation: recommendation must be suitable for this particular customer based on the investment profile",
            "Quantitative obligation: a series of recommended transactions must not be excessive in view of the customer's profile (applicable to churning)",
            "For institutional customers: firms are exempt from the customer-specific obligation if the institution can independently evaluate investment risks and affirmatively states it is exercising independent judgment; the reasonable basis and quantitative obligations still apply",
            "Institutional account: bank, savings and loan, insurance company, registered investment company, registered investment adviser, or any person with total assets of at least $50 million"
          ],
          exceptions: [
            "Suitability obligations may be reduced for institutional customers who affirmatively state they are exercising independent investment judgment"
          ],
          examTip: "The three suitability obligations: (1) Reasonable Basis, (2) Customer-Specific, (3) Quantitative. Institutional customers get a pass on customer-specific suitability if they affirm independent judgment — but the other two obligations still apply."
        },
        {
          id: "reg-bi",
          name: "Regulation Best Interest (Reg BI)",
          category: "Regulation",
          language: "Regulation Best Interest, adopted by the SEC in June 2019, requires broker-dealers to act in the best interest of retail customers when making recommendations of securities transactions or investment strategies. Four obligations must be met: (1) Disclosure; (2) Care; (3) Conflicts of interest; (4) Compliance.",
          concept: "Reg BI elevates the broker-dealer standard from 'suitable' to 'best interest' for retail customers. It supplements FINRA's suitability rules and imposes specific written policies and procedures obligations.",
          parameters: [
            "Retail customer: a natural person, or this person's non-professional legal representative, who receives a recommendation from a broker-dealer and uses it primarily for personal, family, or household purposes",
            "Disclosure obligation: provide required disclosures about the recommendation and the firm-customer relationship before or at the time of the recommendation",
            "Care obligation: exercise reasonable diligence, care, and skill in making recommendations",
            "Conflicts of interest obligation: establish, maintain, and enforce written policies and procedures reasonably designed to address conflicts of interest",
            "Compliance obligation: establish, maintain, and enforce written policies and procedures reasonably designed to achieve compliance with Reg BI",
            "Reg BI applies beyond securities recommendations — it also covers recommendations to roll over a 401(k) into an IRA or recommendations about the type of account to open",
            "Reg BI effectively bans sales contests, quotas, bonuses, and non-cash compensation tied to sales of specific securities within a limited period",
            "Compensation based on total sales, asset growth, accumulation, or customer satisfaction remains permitted",
            "Broker-dealer that is not also a registered investment adviser may not use the title 'adviser' or 'advisor'"
          ],
          exceptions: [
            "Professional legal representatives and other fiduciaries are not considered retail customers",
            "For a natural person with assets exceeding $50 million, Reg BI applies (while FINRA suitability applies to institutional investors such as banks, IAs, and investment companies)",
            "Training and education meetings are permitted if attendance is not based on selling certain products within a limited period"
          ],
          examTip: "Mnemonic for Reg BI's four obligations: D-C-C-C (Disclosure, Care, Conflicts, Compliance). Reg BI is for retail customers only; institutional customers (other than natural persons with $50M+) stay under FINRA suitability. Broker-dealers cannot call themselves 'advisers' unless also registered as RIAs."
        },
        {
          id: "form-crs",
          name: "Form CRS — Client Relationship Summary",
          category: "SEC Form",
          language: "The Client Relationship Summary (Form CRS) must be provided to retail customers. It must be no longer than two pages and include: services offered by the firm, fees, costs, conflicts of interest, and standard of conduct associated with those relationships and services; whether the firm or its financial professionals currently have reportable legal or disciplinary history; and how to obtain additional information about the firm.",
          concept: "A mandatory, plain-English disclosure document that summarizes the nature of the customer-firm relationship for retail investors. Filed with CRD (broker-dealers) or IARD as Part 3 of Form ADV (investment advisers).",
          parameters: [
            "Must be no longer than two pages",
            "New retail investors must receive Form CRS by no later than the time they open a brokerage account, place an order, or receive a new recommendation for an account type, transaction, or investment strategy",
            "Broker-dealers must file Form CRS with the Central Registration Depository (CRD)",
            "Registered investment advisers must file Form CRS with the Investment Adviser Registration Depository (IARD) as Part 3 of Form ADV",
            "Contents: services offered, fees, costs, conflicts of interest, standard of conduct, reportable legal/disciplinary history, and how to get more information"
          ],
          exceptions: [],
          examTip: "Form CRS is 2 pages max and goes to retail customers only. BDs file with CRD; RIAs file with IARD (as Form ADV Part 3). Delivery must be at or before account opening, order placement, or new recommendation — whichever comes first."
        },
        {
          id: "churning",
          name: "Churning (Excessive Trading)",
          category: "FINRA Rule",
          language: "Churning is defined as excessive trading based on the client's stated objective. In discretionary accounts, the most important element when investigating allegations of excessive trading is to examine the investment objectives of the customer, followed by the number and size of transactions. Frequency of trading matters, not whether the client lost money.",
          concept: "An RR who excessively trades a customer's account to generate commissions violates suitability and anti-fraud rules. The key measure is whether the trading is excessive relative to the customer's stated investment objectives.",
          parameters: [
            "Churning = excessive trading in view of the client's stated investment objectives",
            "Frequency of trading is the primary indicator, not whether the client lost money",
            "In discretionary accounts: each discretionary order must be approved by a principal on the day of the trade",
            "Discretionary accounts must be reviewed frequently to ensure transactions are not excessive in size or frequency given the financial resources and character of the account"
          ],
          exceptions: [
            "Frequent trading may be appropriate for an account of a day trader but inappropriate for other investors"
          ],
          examTip: "Churning is measured by frequency relative to investment objectives — NOT by whether money was lost. If an exam question asks the most important element in investigating churning, the answer is investment objectives."
        }
      ]
    },
    {
      name: "Account Types and Ownership",
      rules: [
        {
          id: "joint-accounts",
          name: "Joint Accounts",
          category: "FINRA Rule",
          language: "Joint accounts have more than one owner of record. In most cases, any joint owner may initiate activity in the account. When signatures are required, all owners are normally required to sign. New account information should be obtained about each account owner. The most common forms are Joint Tenancy with Right of Survivorship (JTWROS) and Tenancy in Common (TEN COM).",
          concept: "Multiple-owner accounts with different survivorship rules depending on the form of ownership chosen.",
          parameters: [
            "JTWROS: if one tenant dies, the account passes to the remaining tenants without probate",
            "TEN COM: a deceased owner's interest passes to her estate (subject to probate)",
            "Tenants by Entirety (TEN ENT) and Life Tenancy (LIFE TEN) are also available forms",
            "Transfer on Death (TOD): permits account owners to designate beneficiaries; avoids probate but assets remain subject to estate taxes; delivery of a death certificate is typically sufficient to transfer",
            "When signatures are required, all joint owners must normally sign",
            "New account information must be obtained about each owner (e.g., broker-dealer affiliation question asked of each joint owner)"
          ],
          exceptions: [],
          examTip: "JTWROS = survivorship goes to co-owners (no probate). TEN COM = survivorship goes to deceased's estate (probate). TOD avoids probate but NOT estate taxes — a common trap distinction."
        },
        {
          id: "ugma-utma",
          name: "UGMA/UTMA — Accounts for Minors",
          category: "Federal Law",
          language: "Under the Uniform Gifts to Minors Act (UGMA), an irrevocable gift of cash or securities is given to a minor by an adult donor. Only one custodian and one minor per account. The custodian has fiduciary duties under the Uniform Prudent Investor Act (UPIA). The account is opened in the minor's Social Security number and the minor pays taxes on income generated.",
          concept: "UGMA/UTMA custodial accounts allow adults to hold assets for the benefit of minors. Gifts are irrevocable. The minor owns the assets when they reach the age of majority.",
          parameters: [
            "Only one custodian and one minor per account",
            "Gift is irrevocable once made",
            "Account opened under the minor's Social Security number; the minor pays taxes on income",
            "The donor and custodian may be the same person",
            "No limitation on the amount of the gift, but the donor may owe gift tax on amounts exceeding the annual gift tax exclusion (currently $19,000 per year)",
            "Under the UGMA, another minor cannot be the donor; UTMA permits this",
            "UTMA allows holding stock in street name; UGMA does not",
            "Permissible custodian activities: reinvesting dividends/interest within a reasonable period, exercising or liquidating rights and warrants, conservative options strategies (e.g., covered call writing), purchasing new issues and mutual fund shares",
            "Prohibited: margin accounts; uncovered option strategies; commodity futures",
            "Custodianship terminates when the minor reaches the age of majority; assets transfer to the beneficiary's individual name",
            "Evidence of appointment of incumbency must be dated no more than 60 days prior to presentation and must be recertified if older"
          ],
          exceptions: [
            "A custodian may receive a fee for managing the custodial account ONLY if the custodian is not the donor of the assets"
          ],
          examTip: "Key UGMA/UTMA distinctions: (1) one custodian, one minor per account; (2) no margin, no uncovered options; (3) minor's SSN used and minor pays taxes; (4) UTMA allows street name, UGMA does not. Custodians can be the donor but cannot charge a fee if they are."
        },
        {
          id: "fiduciary-accounts",
          name: "Fiduciary Accounts and the Uniform Prudent Investor Act",
          category: "Federal Law",
          language: "A fiduciary is a person who acts on behalf of and for the benefit of another person. Examples include executors, administrators, trustees, guardians, receivers in bankruptcy, and committees or conservators for incompetents. The Uniform Prudent Investor Act (UPIA) governs fiduciary investment decisions, focusing on managing risk relative to the person's objectives and risk tolerance, not the complete avoidance of risk.",
          concept: "Fiduciaries must act in the best interest of the beneficiary under the prudent investor standard. Documentation of authority is typically required.",
          parameters: [
            "Fiduciaries include: executors/administrators of estates, trustees, guardians, receivers in bankruptcy, committees/conservators for incompetents",
            "Fiduciaries are typically required to provide documentation of their authority",
            "UPIA focuses on managing risk appropriate to the beneficiary's objectives and risk tolerance — not the complete avoidance of risk",
            "Corporate accounts require a corporate resolution passed by the board of directors naming authorized person(s); if opening an options or margin account, a copy of the corporation's charter must also be obtained",
            "Partnership accounts require information about each partner (name, address, citizenship, TIN) and a copy of the partnership agreement specifying who is authorized to transact"
          ],
          exceptions: [],
          examTip: "The UPIA standard is risk management, not risk elimination. Corporate accounts require a board resolution; margin/options accounts also require the corporate charter. Partnership accounts require the partnership agreement."
        },
        {
          id: "discretionary-accounts",
          name: "Discretionary Accounts and Trading Authorizations",
          category: "FINRA Rule",
          language: "A trading authorization is a power of attorney (POA) which allows an authorized person to trade the account. A full trading authorization permits placing orders AND withdrawing money and securities. A limited trading authorization permits placing orders only, not withdrawals. Discretionary accounts require written authorization signed by the account owner, obtained in advance, and acceptance in writing by a principal.",
          concept: "Rules governing who may trade on behalf of another person and under what conditions. Prevents unauthorized discretionary trading.",
          parameters: [
            "Full trading authorization: permits buying/selling AND withdrawing money and securities",
            "Limited trading authorization: permits placing orders only, no withdrawals",
            "Firm must receive written trading authorization signed by the account owner before permitting an authorized person to trade",
            "Firm must also obtain the signature of each authorized person and the date trading authority was granted",
            "Durable POA remains in effect if the account owner is declared mentally incompetent or incapacitated; non-durable POA becomes null and void",
            "A principal must accept discretionary authorization in writing before it becomes effective",
            "Each discretionary order must be approved promptly (on the day of the trade) by a principal",
            "Discretionary accounts must be reviewed frequently to ensure transactions are not excessive in size or frequency",
            "If a member firm wants to place its own stock (IPO) into a discretionary customer account, prior written consent from the customer is required",
            "Death of account owner: power of attorney is automatically terminated"
          ],
          exceptions: [
            "Time/Price Exception (Not-Held Order): if the customer specifies the security (asset), the action (buy/sell), and the amount (shares), RR discretion limited to time and/or price of execution is NOT considered discretionary — written authorization is not required; such orders are limited to the same trading day"
          ],
          examTip: "Not-held (time/price) orders = NOT discretionary as long as the customer specifies the three A's: Asset, Action, Amount. If the period extends beyond one day, written instructions are required. POA is automatically terminated at the owner's death."
        },
        {
          id: "day-trading-accounts",
          name: "Day-Trading Account Disclosure Requirements",
          category: "FINRA Rule",
          language: "Special requirements apply to broker-dealers that promote the use of day-trading strategies by non-institutional customers. If a firm is promoting day trading, it must provide a risk disclosure statement prior to opening an account and either approve the account for day trading or obtain a written agreement that the customer does not intend to use the account for day trading.",
          concept: "Firms that affirmatively promote day-trading strategies face additional disclosure and account-approval obligations for non-institutional customers.",
          parameters: [
            "Day-trading strategy: characterized by regular transmission of intraday orders to effect both purchase and sale transactions in the same security, including one or more round-trip transactions in a single day",
            "Promoting day trading: through advertising, training seminars, or direct outreach programs about benefits of day trading, rapid-fire trading, or momentum trading; also if a principal or official is aware that RRs are promoting day trading",
            "Required when promoting: (1) provide a risk disclosure statement on day trading before opening an account for a non-institutional customer; (2) either approve the account for day-trading or obtain written agreement that the customer doesn't intend to day trade",
            "Firm cannot rely on the written statement if it knows the customer intends to day trade",
            "If the firm later discovers the customer is day trading, the account must be approved for day trading as soon as feasible, but no later than 10 days after discovery"
          ],
          exceptions: [
            "Not considered promoting day trading by: promoting efficient execution or lower costs based on multiple trades; providing general investment research; having a website with general financial information or that allows multiple intraday entries"
          ],
          examTip: "A firm is considered to promote day trading if a principal or official KNOWS an RR is promoting it. The 10-day deadline applies when the firm discovers a customer is day trading despite the written statement."
        }
      ]
    },
    {
      name: "Anti-Money Laundering and USA PATRIOT Act",
      rules: [
        {
          id: "usa-patriot-act-aml",
          name: "USA PATRIOT Act — AML Compliance Programs",
          category: "Federal Law",
          language: "The USA PATRIOT Act, signed into law in response to the September 11, 2001 attacks, requires all broker-dealers to establish AML Compliance Programs that include: (1) policies and procedures reasonably expected to detect and report suspicious transactions; (2) designation of a compliance officer responsible for the AML program; (3) an ongoing employee training program; and (4) an independent audit function to test AML program effectiveness.",
          concept: "Mandatory AML compliance framework for all broker-dealers. Focuses on detecting and deterring money laundering through placement, layering, and integration of illegal funds.",
          parameters: [
            "Three stages of money laundering: (1) Placement — illegal cash enters the brokerage business; (2) Layering — transactions executed in several layers to avoid detection (e.g., structuring — multiple deposits each under $10,000); (3) Integration — proceeds put back into commerce appearing legitimate",
            "AML program must be in writing and approved by a member of senior management",
            "Compliance officer designated to manage the AML program — no requirement this person be FINRA registered",
            "AML program testing required annually (on a calendar-year basis); more frequent if circumstances warrant",
            "Independent testing required every two years if the member: does not execute transactions for customers, does not hold customer accounts, and does not act as an introducing broker"
          ],
          exceptions: [],
          examTip: "Three stages of money laundering: Placement, Layering (structuring), Integration. AML programs must be written and approved by senior management. Testing is annual for most firms; biennial for firms that only do proprietary trading or trade only with other broker-dealers."
        },
        {
          id: "bank-secrecy-act-ctr",
          name: "Bank Secrecy Act — Currency Transaction Reports (BCTRs)",
          category: "Federal Law",
          language: "Broker-dealers are required to file Bank Secrecy Act Currency Transaction Reports (BCTRs, formerly FinCEN Form 104) for all cash transactions by a single customer during one business day that exceed $10,000. The definition of currency includes both cash and coins. The reporting requirement is triggered when multiple smaller transactions in a single day aggregate to more than $10,000.",
          concept: "Mandatory reporting of large cash transactions to detect and deter money laundering.",
          parameters: [
            "BCTR required when a single customer's cash transactions exceed $10,000 in a single business day",
            "Includes cash, coins, and traveler's checks",
            "Aggregation rule: multiple transactions in one day at different branches or times that total more than $10,000 in aggregate trigger the BCTR filing",
            "Structuring (depositing amounts just below $10,000 to evade the reporting threshold) is itself a violation",
            "CMIR (Report of International Transportation of Currency or Monetary Instruments) must be filed when a person physically transports, sends, or receives cash or monetary instruments in aggregate amounts exceeding $10,000 into or out of the United States",
            "Wire transfers of $3,000 or more require firms to collect information about the transmitter and recipient; identity of non-established customers must be verified"
          ],
          exceptions: [],
          examTip: "BCTR threshold = $10,000 per customer per day (aggregate). Structuring = breaking up transactions to stay below the threshold — it's a red flag AND a violation. CMIR covers cross-border physical transport of $10,000+."
        },
        {
          id: "sar-filing",
          name: "Suspicious Activity Reports (SARs)",
          category: "Federal Law",
          language: "Broker-dealers are required to file Suspicious Activity Reports (SARs) whenever a transaction or group of transactions equals or exceeds $5,000 and the firm suspects: (1) the client is violating federal criminal laws; (2) the transaction involves funds from illegal activity; (3) the transaction is designed to evade reporting requirements; or (4) the transaction has no apparent business purpose and no reasonable explanation can be found.",
          concept: "Mandatory reporting of suspicious transactions at the $5,000 threshold. SAR filings are strictly confidential — the subject of the SAR may not be informed.",
          parameters: [
            "SAR threshold: transaction(s) equal or exceed $5,000",
            "SAR must be filed if the firm suspects: violation of federal criminal laws; funds related to illegal activity; transaction structured to evade reporting; or transaction with no apparent legitimate purpose",
            "SAR filing is confidential; information may only be disclosed to federal law enforcement or securities regulators",
            "Under no circumstances may an RR inform the subject of an SAR that the report has been filed",
            "RRs and firms may be held liable even if they were only willfully blind to the activity (actual knowledge not required)"
          ],
          exceptions: [],
          examTip: "SAR = $5,000 threshold; BCTR = $10,000 threshold. SAR filings are confidential — you CANNOT tell the customer. Criminal penalty for facilitating money laundering: up to 20 years in prison + fines of $500,000 per transaction or twice the amount involved, whichever is greater."
        },
        {
          id: "customer-identification-program",
          name: "Customer Identification Program (CIP)",
          category: "Federal Law",
          language: "Broker-dealers must create customer identification procedures and use reasonable measures to verify the identity of any person who wants to open an account. At minimum, the following information must be obtained: name, date of birth (for individuals), address (residential/street for individuals; principal place of business or local office for others), and an identification number (TIN, passport number for non-U.S. citizens, alien ID card number, etc.).",
          concept: "The know-your-customer identity verification program mandated by the USA PATRIOT Act. Must be performed before or within a reasonable period after account opening.",
          parameters: [
            "Required information: name, date of birth (individual only), residential address (or principal place of business for non-individuals), identification number (TIN, passport, alien ID)",
            "Verification must occur within a reasonable period either before or after account opening or the first transaction",
            "Documentary methods (government-issued ID) or non-documentary methods may be used to verify identity",
            "Records of verification methods must be maintained for five years following the closing of the account",
            "Firm must determine whether the person is listed on a known or suspected terrorist or affiliated organization list"
          ],
          exceptions: [
            "Taxpayer ID exception: if a person has applied for but not yet received a TIN, the broker-dealer may forgo collecting it, but must retain a copy of the person's application for the number"
          ],
          examTip: "CIP = 4 required data points: name, DOB, address, ID number. Records must be kept 5 years after account closure. If no TIN yet, retain the application. Date of birth is only collected for individual (not business) accounts."
        },
        {
          id: "ofac-sdn-list",
          name: "OFAC — Specially Designated Nationals and Blocked Persons List (SDN List)",
          category: "Federal Law",
          language: "Firms and their representatives must ensure they are not doing business with any person on the Specially Designated Nationals and Blocked Persons List (SDN List) maintained by the Treasury Department Office of Foreign Assets Control (OFAC). If a firm discovers a client is on the SDN List, all transactions must be blocked immediately and federal law enforcement must be informed within 10 business days.",
          concept: "OFAC prohibits business with sanctioned individuals, terrorists, and pariah nations (currently Iran and North Korea) listed on the SDN List.",
          parameters: [
            "SDN List maintained by OFAC identifies known and suspected terrorists, other criminals, and sanctioned nations (currently Iran and North Korea)",
            "All business with persons or entities on the SDN List is prohibited",
            "If a client is identified as being on the SDN List, the firm must block all transactions immediately",
            "Federal law enforcement must be notified within 10 business days of discovering the match",
            "Broker-dealers must exercise special due diligence when opening private banking accounts for foreign nationals",
            "Broker-dealers are prohibited from maintaining correspondent accounts for foreign shell banks (banks with no physical presence in any country)"
          ],
          exceptions: [],
          examTip: "OFAC SDN match = block immediately + notify federal law enforcement within 10 business days. No-physical-presence foreign shell banks = prohibited correspondent accounts."
        }
      ]
    },
    {
      name: "Account Statements, Confirmations, and Miscellaneous Rules",
      rules: [
        {
          id: "trade-confirmations",
          name: "Trade Confirmations (SEC Rule 10b-10)",
          category: "SEC Rule",
          language: "The SEC requires broker-dealers to provide customers with a detailed confirmation of each purchase or sale. The confirmation must be given or sent at or before the completion of the transaction (generally the settlement date). Required contents include: identity and price of the security, number of shares/units or principal amount, date and time of execution, capacity in which the broker-dealer acted, dollar price and yield on debt securities, whether a security is callable, and the settlement date.",
          concept: "Mandatory post-trade disclosure document providing customers with material details about each transaction.",
          parameters: [
            "Must be sent at or before the completion (settlement) of the transaction",
            "Required contents: identity and price of security; number of shares/units or principal amount; date and time of execution (or statement that time will be provided on request); capacity (agent for customer, agent for another person, cross, or principal for own account); dollar price and yield for debt securities; whether callable; settlement date",
            "Even for discretionary accounts, confirmations must be sent to the customer",
            "Confirms may be sent to an investment adviser or other third party only if the customer provides written consent"
          ],
          exceptions: [],
          examTip: "Trade confirms must be sent at or before settlement — not just after. For discretionary accounts, the customer STILL receives a confirmation (can be redirected to a third party only with written consent)."
        },
        {
          id: "account-statements",
          name: "Account Statements",
          category: "FINRA Rule",
          language: "Broker-dealers are required to provide customers with a statement of account at least quarterly. The typical practice is to provide statements monthly for any account in which activity has occurred. The account statement must contain: a description of all security positions, all money balances, all account activity since the last statement, and all open orders (GTC orders).",
          concept: "Minimum quarterly statement requirements to keep customers informed of their account status.",
          parameters: [
            "Minimum frequency: at least quarterly",
            "Typical practice: monthly for accounts with any activity",
            "Required contents: all security positions, all money balances, all account activity since the last statement, and all open (GTC) orders",
            "Account activity includes: purchases, sales, interest credits/debits, charges/credits, dividend payments, transfer activity, securities receipts/deliveries, and journal entries"
          ],
          exceptions: [],
          examTip: "Account statements = minimum quarterly. The most frequently tested element is the inclusion of open GTC orders in the statement. Monthly statements for accounts with activity is industry practice, not a regulatory minimum."
        },
        {
          id: "negative-consent-letters",
          name: "Negative Consent Letters — Bulk Account Transfers",
          category: "FINRA Rule",
          language: "A negative consent letter notifies customers that there has been some underlying change in the business of the entity. If the client does not respond within a specific period, the client is deemed to have consented. FINRA allows negative response letters only for bulk account transfers in specified circumstances, such as a firm merger or acquisition, clearing arrangement changes, or firm financial difficulties.",
          concept: "Allows bulk transfer of customer accounts in corporate restructuring situations without requiring affirmative consent from each customer.",
          parameters: [
            "Permitted for: merger or acquisition of a broker-dealer, entry into a clearing arrangement, firm out of business/clearing firm transferring accounts, firm experiencing financial/operational difficulties, financial institution terminating a networking arrangement with a broker-dealer",
            "Allows bulk transfer of customer accounts",
            "Cannot be used for transfer of individual customer accounts — those require prior written consent and transfer instructions"
          ],
          exceptions: [
            "Negative consent letters cannot be used for individual account transfers — those require affirmative written consent"
          ],
          examTip: "Negative consent = bulk transfer only (e.g., mergers, clearing changes). Individual account transfers always require affirmative written consent from the customer."
        }
      ]
    },
    {
      name: "Options Account Approval",
      rules: [
        {
          id: "options-account-approval",
          name: "Options Account Approval — Registered Options Principal (ROP)",
          category: "FINRA Rule",
          language: "For an options account to be opened, a Registered Options Principal (ROP) must approve the account based on information obtained from the customer. At or prior to account approval, the client must be given an options disclosure document (ODD) titled 'Characteristics and Risks of Standardized Options.' The customer must sign the Options Account Agreement and return it to the brokerage firm within 15 days of account approval.",
          concept: "A separate, specific approval process is required for options trading — a general securities account approval is insufficient. The ROP verifies suitability and approves the account before any option orders are accepted.",
          parameters: [
            "ROP must approve the options account based on the customer's background, financial information, and necessary exchange agreements",
            "ODD (Characteristics and Risks of Standardized Options) must be provided at or prior to account approval",
            "If approved for uncovered options writing, a Special Written Statement for Uncovered Option Writers must also be provided",
            "Customer must sign the Options Account Agreement and return it within 15 days of account approval",
            "If the signed form is not returned within 15 days, only liquidating (closing) transactions are permitted — no new positions",
            "ROP approval is required by no later than the time an initial option order is accepted",
            "For branch office accounts: a branch manager who is not an ROP may approve the account initially, but the ROP must approve within 10 business days",
            "Each type of options transaction (uncovered writing, index options, foreign currency options) requires specific separate approval",
            "Discretionary option accounts require prior written customer authorization AND acceptance in writing by an ROP or Sales Supervisor (Series 9/10), reviewed by a designated ROP",
            "Discretionary option orders must be identified as discretionary when entered and approved/initialed by the ROP on the day of entry"
          ],
          exceptions: [
            "Existing securities account approval does NOT satisfy options account approval — specific approval is always required"
          ],
          examTip: "Options account approval is a completely separate process — having a general brokerage account means nothing. ODD must be delivered AT or BEFORE approval. 15-day deadline to return signed Options Account Agreement; after that, only closing trades. Branch manager can conditionally approve, but ROP must confirm within 10 business days."
        },
        {
          id: "options-suitability",
          name: "Options Suitability and Uncovered Writing Standards",
          category: "FINRA Rule",
          language: "Every member firm, ROP, and registered representative who recommends option transactions to a customer must have reasonable grounds for believing that the recommendation is not unsuitable for the customer based on her specific investment objectives and financial means. Recommending the sale of uncovered options is considered unsuitable unless the customer has sufficient knowledge and experience to evaluate the risks and the financial capability to carry uncovered positions.",
          concept: "Enhanced suitability standard for options — the rule says recommendations must not be 'unsuitable' rather than must be 'suitable.' Uncovered writing has the highest suitability bar.",
          parameters: [
            "Rule standard: recommendations must not be unsuitable (lower bar than affirmative suitability)",
            "Uncovered writing is considered unsuitable unless: customer has sufficient knowledge and experience to evaluate the risks, AND has the financial capability to carry uncovered positions in adverse market conditions",
            "Firms engaging in uncovered short option transactions must develop special written procedures including: suitability standards for uncovered writers, written ROP approval procedures, standards for minimum net equity for approval and maintenance of uncovered accounts, and delivery of the FINRA-approved Risk Disclosure Document at or before the initial uncovered short transaction",
            "IRA accounts: no margin permitted, so credit spreads and uncovered options are prohibited; covered calls and protective puts are generally acceptable",
            "Uneconomic trades must not be recommended: a transaction in which the customer cannot make a profit (e.g., commissions exceed arbitrage gain, or a debit spread where the debit equals or exceeds the spread width)"
          ],
          exceptions: [
            "IRAs may not use margin — prohibits credit spreads and uncovered option writing in retirement accounts"
          ],
          examTip: "Remember: options suitability says 'not unsuitable' — a subtle but testable distinction. Uncovered writing is the most restricted type. IRAs: covered calls and protective puts are OK; uncovered writing and credit spreads are not (because they require margin)."
        }
      ]
    }
  ]
};
