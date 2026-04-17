// Chapter 12 – Communications with the Public
window.CHAPTER_12 = {
  id: 12,
  title: "Communications with the Public",
  subtitle: "FINRA rules governing categories, approval, filing, content standards, social media, and special communication types",
  sections: [
    {
      name: "Categories of Communications (FINRA Rule 2210)",
      rules: [
        {
          id: "rule-2210-correspondence",
          name: "FINRA Rule 2210 — Correspondence",
          category: "FINRA Rule",
          language: "Correspondence is defined as written or electronic messages sent by a member firm to 25 or fewer retail investors within any 30-calendar-day period. The 25 or fewer clients may be any type of client — existing or prospective.",
          concept: "The narrowest of the three communication categories. Correspondence covers one-to-one or small-group communications such as letters, e-mails, and text messages sent to no more than 25 retail investors in a 30-day period.",
          parameters: [
            "Written or electronic messages (letters, e-mails, text messages) to 25 or fewer retail investors within any 30-calendar-day period",
            "Recipients may be existing or prospective clients",
            "Not required to be pre-approved by a principal",
            "Not required to be filed with FINRA",
            "Subject to firm supervision, monitoring, and spot-check by FINRA",
            "Firm must educate and train personnel and maintain a record of that training",
            "Records must be retained for three years after last date of use"
          ],
          exceptions: [
            "If an institutional investor forwards correspondence to retail investors, the firm must treat future communications to that institutional investor as retail communication"
          ],
          examTip: "Remember: 25 or fewer retail investors = correspondence. 26 or more retail investors = retail communication. The cutoff is 25 retail investors — institutional investors in the mix do not change the category."
        },
        {
          id: "rule-2210-institutional-communication",
          name: "FINRA Rule 2210 — Institutional Communication",
          category: "FINRA Rule",
          language: "Institutional communication includes any type of written or electronic communication that is distributed or made available only to institutional investors. This category does not include a member firm's internal communication.",
          concept: "Communications directed solely to institutional investors. No principal pre-approval required, but firms must have written review procedures and must ensure the material does not get redistributed to retail investors.",
          parameters: [
            "Distributed or made available ONLY to institutional investors",
            "Institutional investors include: banks, S&Ls, insurance companies, registered investment companies, registered investment advisers, government entities, employee benefit plans with at least 100 participants, broker-dealers and their registered representatives, and individuals or entities with total assets of at least $50 million",
            "Not required to be pre-approved by a principal prior to use",
            "Not required to be filed with FINRA",
            "Subject to spot-check by FINRA",
            "Firm must have written procedures for internal review by a principal",
            "Must include training and surveillance requirements for institutional sales reps",
            "Records (including source of charts/graphs and name of preparer) must be retained for three years after last date of use"
          ],
          exceptions: [
            "If a firm suspects a communication will be redistributed to any person other than an institutional investor, it cannot distribute the communication to that entity",
            "An acceptable method to prevent redistribution is to place a legend on the communication stating: 'for use by institutional investors only'"
          ],
          examTip: "Institutional communications skip pre-approval but still require written supervisory procedures and surveillance — they are not unregulated. If a broker-dealer redistributes institutional material to retail clients, the sending firm must treat future communications to that broker-dealer as retail communication."
        },
        {
          id: "rule-2210-retail-communication",
          name: "FINRA Rule 2210 — Retail Communication",
          category: "FINRA Rule",
          language: "Retail communication is defined as any written or electronic communication that is distributed or made available to more than 25 retail investors within a 30-calendar-day period. A retail investor is any person who does not meet the definition of an institutional investor.",
          concept: "The broadest and most regulated category, encompassing all advertising and sales literature directed to the public. Retail communication generally requires principal pre-approval before use.",
          parameters: [
            "Distributed or made available to more than 25 retail investors within any 30-calendar-day period",
            "Includes TV, radio, billboards, magazines, newspapers, publicly accessible websites, online interactive forums (chat rooms, blogs, social networking sites) where retail investors have access, telemarketing and sales scripts, and independently prepared reprints sent to more than 25 retail investors",
            "Must generally be approved by a qualified principal prior to first use (pre-use approval)",
            "Approval must be obtained before the communication is released to the public or filed with FINRA, whichever comes first",
            "File that contains approved communications must be kept for three years after last date of use, accessible for the first two years",
            "File must contain: copy of communication, dates of first and last use, name of approving principal, and date approval was given",
            "A Registered Options Principal (ROP) must approve retail communications concerning options",
            "A Supervisory Analyst (Series 16) may approve research reports and related communications"
          ],
          exceptions: [
            "No principal pre-approval required if: (1) another firm previously filed the material with FINRA and it has not been materially altered; (2) the communication was posted on an online interactive electronic forum; or (3) the communication does not make a financial or investment recommendation, does not promote the firm's products or services, and is not a research report",
            "The third exception covers most routine communications between registered representatives and customers, as well as market letters"
          ],
          examTip: "The three-category rule: Correspondence (25 or fewer retail), Institutional (institutional only), Retail (26+ retail). Only retail communication requires principal pre-approval as a general rule. When material is delivered to a mix of retail and institutional investors, classify by the number of RETAIL investors."
        },
        {
          id: "rule-2210-combined-communications",
          name: "FINRA Rule 2210 — Combined Communications Classification",
          category: "FINRA Rule",
          language: "When material is delivered to multiple types of investors, the category of communication is determined solely by the number of retail investors receiving the material, regardless of how many institutional investors also receive it.",
          concept: "When the same communication goes to both retail and institutional investors, the retail investor count alone determines the category. Adding institutional investors to a mailing never downgrades the classification.",
          parameters: [
            "Material delivered to 20 retail investors and any number of institutional investors = correspondence (25 or fewer retail)",
            "Material delivered to 30 retail investors and any number of institutional investors = retail communication (more than 25 retail)"
          ],
          exceptions: [],
          examTip: "Institutional investors are never counted in the 25-investor threshold. Adding 1,000 institutional investors to a 20-retail-investor distribution does not make it retail communication — it remains correspondence."
        }
      ]
    },
    {
      name: "Principal Approval and FINRA Filing Requirements",
      rules: [
        {
          id: "rule-2210-pre-filing",
          name: "FINRA Rule 2210 — Pre-Use Filing (10 Business Days Before First Use)",
          category: "FINRA Rule",
          language: "Certain retail communications must be filed with FINRA at least 10 business days prior to their first use. A firm cannot use the material until it is in a form acceptable to FINRA.",
          concept: "Pre-use filing is required for higher-risk or novel retail communications. FINRA reviews the material before it reaches the public.",
          parameters: [
            "For the first year as a FINRA member, a new brokerage firm must file with FINRA all broadly disseminated retail communications at least 10 business days prior to their first use (broadly disseminated = generally accessible websites, print media, or television/radio)",
            "FINRA may require any firm that has departed from Rule 2210 standards to file some or all of its communications 10 business days prior to use; this requirement begins 21 calendar days after the firm receives written notice from FINRA",
            "Registered investment company communications that include rankings or comparisons created by the investment company itself must be filed at least 10 business days prior to use",
            "Security futures communications must be filed at least 10 business days prior to use",
            "Each filing must include: name, title, and CRD number of the approving principal, and date approval was given"
          ],
          exceptions: [],
          examTip: "New member = ALL broadly disseminated retail communications must be pre-filed for the first year. This is the most tested application of the 10-day pre-filing rule. For established firms, pre-filing applies only to specific high-risk categories (investment company self-created rankings, security futures)."
        },
        {
          id: "rule-2210-post-filing",
          name: "FINRA Rule 2210 — Post-Use Filing (Within 10 Business Days of First Use)",
          category: "FINRA Rule",
          language: "Certain retail communications must be filed with FINRA within 10 business days of the date they are first published or used.",
          concept: "Post-use filing applies to a broader list of retail communications involving common retail products such as mutual funds, DPPs, CMOs, and ETNs. The material may be used first, then filed.",
          parameters: [
            "Investment company communications that promote or recommend a specific registered investment company (RIC) or family of RICs, WITHOUT self-created rankings — includes mutual funds, closed-end funds, ETFs, UITs, and variable insurance products",
            "Publicly traded direct participation programs (DPPs)",
            "SEC-registered collateralized mortgage obligations (CMOs)",
            "Any SEC-registered security derived from or based on a single security, basket of securities, index, commodity, debt issuance, or foreign currency — includes publicly offered structured products such as exchange-traded notes (ETNs)",
            "If a draft version or storyboard of a television or video retail communication was previously filed, the final filmed version must also be filed within 10 business days of first use or broadcast"
          ],
          exceptions: [
            "Communications previously filed with FINRA's Advertising Department used without material changes",
            "Communications based on previously filed templates where changes are limited to updating statistical or non-narrative information",
            "Communications that simply identify the member's exchange symbol or identify a security for which the member is a registered market maker or states a specific price",
            "Communications posted on an interactive electronic forum",
            "Press releases made available only to the media",
            "Reprints of articles by unaffiliated, non-commissioned publishers",
            "Correspondence and institutional communication",
            "Tombstone advertisements, SEC-filed prospectuses, and mutual fund profiles",
            "Communications that simply refer to types of investments as part of a listing of the firm's products and services"
          ],
          examTip: "The key distinction: self-created fund rankings require PRE-filing (10 days before); all other fund communications require POST-filing (within 10 days after). Broker-created broadly disseminated free writing prospectuses (FWPs) are NOT exempt — they must be pre-approved and are classified as retail communication."
        }
      ]
    },
    {
      name: "Social Media, Blogs, and Electronic Communications",
      rules: [
        {
          id: "social-media-static-vs-interactive",
          name: "Social Media — Static vs. Interactive Content",
          category: "FINRA Rule",
          language: "Static content is material that is posted to social media for an extended period and is not considered interactive. This falls under the definition of retail communication and, unless an exception applies, must be pre-approved by a principal. Posts by employees on social media are considered interactive content and are therefore subject to review and supervision, but not approval.",
          concept: "FINRA distinguishes between static posts (retail communication — pre-approval required) and interactive posts (subject to supervision but not pre-approval). If interactive content is copied or forwarded to a static area, it becomes retail communication.",
          parameters: [
            "Social media use is generally considered advertising; content standards and pre-approval rules apply",
            "Static content = material posted for an extended period; treated as retail communication; requires principal pre-approval unless an exception applies",
            "Interactive content = posts by employees; subject to supervision and review, but NOT pre-approval",
            "If interactive content is copied or forwarded to a static area, it is treated as retail communication and must be approved by a principal and may need to be filed with FINRA",
            "Personal social media posts by firm employees for non-business-related communication (e.g., charity events) are not advertising and are not subject to FINRA rules",
            "If an employee uses a personal social media site to promote the firm's business or solicit clients, it is subject to FINRA rules",
            "Any social networking site used for business communications is subject to recordkeeping requirements regardless of device used"
          ],
          exceptions: [
            "Retail communications posted on online interactive electronic forums are exempt from FINRA's filing requirement",
            "Interactive content is also exempt from the principal pre-use approval requirement"
          ],
          examTip: "Static = pre-approval required (treated as retail communication). Interactive = supervision required but no pre-approval. The trap: forwarding or copying interactive content to a static area converts it to retail communication subject to approval."
        },
        {
          id: "social-media-hyperlinks-third-party",
          name: "Social Media — Hyperlinks and Third-Party Posts",
          category: "FINRA Rule",
          language: "A broker-dealer's content is considered advertising if the broker-dealer was either involved in the preparation of the content (entangled) or implicitly or explicitly approved or endorsed the content (adopted). Third-party posts appearing on a firm's or employee's social networking pages are not considered advertising unless the firm becomes entangled or has adopted the third-party content.",
          concept: "FINRA's entanglement/adoption doctrine determines when a firm is responsible for third-party content. Paying for, soliciting, or sharing (liking) third-party posts triggers advertising rules.",
          parameters: [
            "A firm may include a hyperlink to independent third-party content on its website",
            "Content becomes advertising by the firm if the firm was entangled (involved in preparation) or adopted (endorsed or implicitly approved) the content",
            "Example of entanglement: firm assists in the preparation of a press release and then posts a hyperlink to it",
            "A hyperlink to a generic article on securities that does not mention specific securities is considered educational material, not advertising",
            "Secondary links (a link from a third-party site to another site) are not considered advertising, provided the content is not entangled or adopted",
            "Third-party posts are not advertising UNLESS the firm solicited, paid for, or shared (liked) the posts",
            "Broker-dealers and their employees are prohibited from posting to a third-party website that they know or have reason to know contains false or misleading content"
          ],
          exceptions: [],
          examTip: "Entanglement = firm helped create the content. Adoption = firm endorsed or approved it. Either one makes the third-party content the firm's advertising. Simply liking a third-party post can be enough to trigger adoption."
        },
        {
          id: "social-media-policies-procedures",
          name: "Social Media — Policies and Procedures Requirements",
          category: "FINRA Rule",
          language: "A securities firm should develop policies and procedures regarding its supervision of social media. Any social networking site used for business communications is subject to recordkeeping requirements regardless of the device used.",
          concept: "Firms must have a written framework addressing social media usage, training, recordkeeping, monitoring, and site approval.",
          parameters: [
            "Policies must address: usage restrictions (which sites are restricted or prohibited), training and education (differences between personal and business communications), recordkeeping and record retention, monitoring and review of content, and approval of permitted social networking sites",
            "Business communications on any social networking site are subject to recordkeeping requirements regardless of the device used (smartphone, tablet, etc.)"
          ],
          exceptions: [],
          examTip: "Firms cannot simply prohibit all social media — they must have policies and procedures in place to govern its use. The device used is irrelevant for recordkeeping purposes."
        }
      ]
    },
    {
      name: "Content Standards for All Communications",
      rules: [
        {
          id: "rule-2210-general-content-standards",
          name: "FINRA Rule 2210(d) — General Content Standards",
          category: "FINRA Rule",
          language: "Communications with the public must be based on principles of fair dealing and good faith, must be fair and balanced, and must provide a sound basis for evaluating the facts in regard to any particular security or type of security, industry, or service. Firms cannot omit any material fact or qualification if the omission would cause the communication to be misleading.",
          concept: "The overarching content standard for all communications: fair, balanced, not misleading, and substantiated. Applies regardless of the delivery medium.",
          parameters: [
            "May not contain false, exaggerated, unwarranted, or misleading statements or claims",
            "May not contain promissory statements or claims (e.g., 'XYZ stock will advance in price')",
            "Must provide balanced treatment of risks and potential benefits",
            "Cannot contain disclaimers or hedge clauses that are misleading or inconsistent with the rest of the material",
            "Must consider the nature of the audience and provide appropriate detail",
            "Cannot predict or project performance or imply that past performance will reoccur",
            "Permitted: a hypothetical illustration of mathematical principles, provided it does not predict or project investment performance",
            "Permitted: an investment analysis tool or a written report produced by an investment analysis tool, provided sufficient disclosures are made",
            "Any comparisons between investments or services must disclose all material differences (investment objectives, costs and expenses, liquidity, safety, guarantees, fluctuation of principal, tax features)"
          ],
          exceptions: [
            "Research reports are exempt from the specific recommendation requirements as long as proper disclosures are made",
            "Prospectuses and fund profiles are not subject to FINRA's content standards since they are subject to SEC standards"
          ],
          examTip: "The prohibition on predictions and projections is absolute for all communications. Hypothetical mathematical illustrations ARE allowed but only if they clearly do not purport to predict actual investment results. 'Will advance' = prohibited. 'Hypothetically, if you earned X% ...' = permitted with proper caveats."
        },
        {
          id: "rule-2210-disclosure-firm-name",
          name: "FINRA Rule 2210 — Disclosure of Firm Name",
          category: "FINRA Rule",
          language: "All retail communications and correspondence must contain the name of the member firm that is sponsoring the material. If the firm has a fictional name or alias by which it is commonly known, that name must also be included.",
          concept: "Investors must always be able to identify which firm is behind a communication. Blind recruiting ads are a narrow exception.",
          parameters: [
            "All retail communications and correspondence must identify the sponsoring member firm",
            "Fictional names or aliases commonly used by the firm must also be included",
            "Blind recruiting ads are exempt from the name requirement, but must be reasonable and cannot exaggerate opportunities or salaries"
          ],
          exceptions: [
            "Blind recruiting ads do not require the firm's name"
          ],
          examTip: "Firm name is always required in customer-facing communications. The only exception is blind recruiting ads — but even those must not exaggerate compensation."
        },
        {
          id: "rule-2210-tax-considerations",
          name: "FINRA Rule 2210 — Tax-Free Income Claims",
          category: "FINRA Rule",
          language: "Any references to tax-free or tax-exempt income must indicate which income taxes apply, unless income is free from all applicable taxes. Communications cannot characterize income or investment returns as tax-free or exempt from income tax when tax liability is merely postponed or deferred.",
          concept: "Prevents misleading claims about tax-free income. Tax-deferred is not the same as tax-free, and firms must be specific about which taxes are avoided.",
          parameters: [
            "Must indicate which income taxes apply when income is not free from ALL applicable taxes",
            "If income from a municipal bond fund is subject to state or local income taxes, this must be stated",
            "Cannot call an investment tax-free when taxes are merely deferred (e.g., cannot say a retirement account investment is not subject to income tax)",
            "Comparative illustration of tax-deferred versus taxable compounding: both computations must use the same investment amounts and gross investment rates of return, which may not exceed 10%",
            "Must use and identify actual federal income tax rates; if state rates are used, must disclose they apply only to investors in that state",
            "Illustration must disclose: the degree of risk in the assumed rate of return (including that the rate is not guaranteed), possible effects of investment losses, extent to which capital gains rates affect taxable returns, ordinary income tax rates on withdrawals from tax-deferred investments, and potential impact of federal or state tax penalties"
          ],
          exceptions: [],
          examTip: "A classic trap: calling a retirement account 'tax-free' is prohibited — it is tax-deferred. The 10% cap on assumed return rates in tax-deferral illustrations is a tested detail."
        },
        {
          id: "rule-2210-testimonials",
          name: "FINRA Rule 2210 — Testimonials",
          category: "FINRA Rule",
          language: "Any retail communication or correspondence that includes a testimonial about the investment advice or investment performance of a member or its products must prominently disclose: (1) that the testimonial may not be representative of the experience of other customers; (2) that the testimonial is not a guarantee of future performance or success; and (3) that the testimonial is a paid testimonial (if more than $100 is paid to the provider).",
          concept: "Testimonials are permitted but must carry three mandatory disclosures to prevent investors from being misled by anecdotal success stories.",
          parameters: [
            "Provider of a testimonial relating to a technical aspect of investing must have the knowledge and experience to form a valid opinion",
            "Three required disclosures: (1) may not be representative of other customers' experience; (2) not a guarantee of future performance or success; (3) is a paid testimonial if more than $100 was paid",
            "All three disclosures must be prominently stated"
          ],
          exceptions: [],
          examTip: "The $100 paid-testimonial threshold is a favorite exam detail. More than $100 = must disclose it is paid. Note there is no prohibition on paid testimonials — only a disclosure requirement."
        },
        {
          id: "rule-2210-recommendations-in-communications",
          name: "FINRA Rule 2210 — Recommendations in Retail Communications",
          category: "FINRA Rule",
          language: "Retail communications that include a recommendation must have a reasonable basis and must include the price at the time of any equity security recommendation, whether the member makes a market or intends to buy or sell the recommended security for its own account, whether the member or any associated person has a financial interest in any security of the issuer, and whether the member was manager or co-manager of any of the issuer's offerings within the last 12 months.",
          concept: "When a recommendation appears in retail communication, specific conflict-of-interest disclosures are required so investors can evaluate the recommendation in context.",
          parameters: [
            "Must have a reasonable basis",
            "Must include the price of the equity security at the time of recommendation",
            "Must disclose whether the member makes a market or intends to buy/sell the security for its own account (acting as principal)",
            "Must disclose whether the member or any associated person directly or materially involved in the preparation of the content has a financial interest in any security of the issuer",
            "Must disclose whether the member was manager or co-manager of any of the issuer's securities offerings within the last 12 months",
            "Must include information supporting the recommendation or an offer to provide such information",
            "Reference to past specific profitable recommendations requires: a list of ALL recommendations for the same security type for the past year (or longer if consecutive periods including the last year are shown), the name of each security, the date and nature of each recommendation, the date and price at time of recommendation, and a prominent cautionary legend warning investors not to assume future recommendations will be profitable"
          ],
          exceptions: [
            "Research reports are exempt from these recommendation requirements as long as proper disclosures are made"
          ],
          examTip: "The 12-month look-back for underwriting relationships and the requirement to list ALL past recommendations (not cherry-picked winners) are the most tested elements. Firms cannot highlight only successful past calls without listing all of them."
        },
        {
          id: "rule-2210-use-of-finra-name",
          name: "FINRA Rule 2210 — Use of FINRA's Name",
          category: "FINRA Rule",
          language: "A firm is permitted to use FINRA's name in communications provided that it neither states nor implies that FINRA or any other SRO endorses or guarantees the firm's business practices, selling methods, the type of security offered, or any specific security. Any reference to FINRA's review is limited to 'Reviewed by FINRA' or 'FINRA Reviewed.'",
          concept: "Firms may reference FINRA membership but cannot imply endorsement. Stating FINRA reviewed a communication is permitted only with the prescribed language.",
          parameters: [
            "May use FINRA's name in any communication — provided it does not imply endorsement or guarantee",
            "In a confirmation for an OTC transaction — may state: 'This transaction has been executed in conformity with the FINRA Uniform Practice Code'",
            "On the firm's website — must include a hyperlink to FINRA's internet address in close proximity to the FINRA membership indication",
            "Reference to FINRA review must be limited to: 'Reviewed by FINRA' or 'FINRA Reviewed'"
          ],
          exceptions: [],
          examTip: "Saying 'FINRA Approved' is prohibited — FINRA reviews but never 'approves' communications. The only permissible language is 'Reviewed by FINRA' or 'FINRA Reviewed.'"
        }
      ]
    },
    {
      name: "Public Appearances and Investment Analysis Tools",
      rules: [
        {
          id: "public-appearances",
          name: "FINRA Rule 2210 — Public Appearances",
          category: "FINRA Rule",
          language: "A public appearance includes any situation in which an employee associated with a broker-dealer participates in a television or radio interview, seminar, or forum, makes a public appearance, or engages in a speaking activity that is unscripted. Although a public appearance itself is not considered a form of communication, an associated person making a public appearance must abide by the same general content standards that apply to all communications.",
          concept: "Live, unscripted appearances are not pre-approvable by nature but still require the same substantive content standards. Scripted materials used in a public appearance are subject to normal communication rules.",
          parameters: [
            "Includes TV or radio interviews, seminars, forums, or unscripted speaking activities",
            "Not subject to pre-approval by a principal or filing with FINRA",
            "If a security is recommended, the associated person must have a reasonable basis and must disclose any financial interest in the security or any derivative of it",
            "Must disclose any material conflict of interest that the firm or associated person knows or has reason to know at the time of the appearance",
            "Scripts, slides, handouts, or other written or electronic materials used for a public appearance are considered communications and must comply with all communication provisions",
            "If a registered representative uses a PowerPoint presentation and the audience consists of more than 25 individual investors, the presentation is considered retail communication",
            "Each firm must establish policies and procedures appropriate to supervise public appearances"
          ],
          exceptions: [
            "Public appearances themselves are not subject to principal pre-approval or FINRA filing due to their spontaneous nature"
          ],
          examTip: "Public appearances are not pre-approved, but the person must still follow content standards and disclose conflicts of interest. A scripted PowerPoint shown to more than 25 retail investors is retail communication and requires pre-approval before use."
        },
        {
          id: "rule-2214-investment-analysis-tools",
          name: "FINRA Rule 2214 — Investment Analysis Tools",
          category: "FINRA Rule",
          language: "An investment analysis tool is defined as an interactive technology tool that produces simulations and statistical analysis to present the likelihood of various investment outcomes if certain investments are made or certain investment strategies or styles are followed. A member offering such a tool to retail investors must provide FINRA's Advertising Regulation Department access to the tool upon request.",
          concept: "Investment analysis tools used with retail investors trigger FINRA filing/access requirements and mandatory disclosures to protect investors from misinterpreting computer-generated projections as guarantees.",
          parameters: [
            "A member offering or intending to offer an investment analysis tool to retail investors must provide FINRA's Advertising Regulation Department access to the tool upon request",
            "If the tool is offered exclusively to institutional investors and related communications qualify as institutional communication, no post-use access or filing requirement applies",
            "If retail communications merely mention the tool as an available service, no disclosures or FINRA filing is required",
            "If retail communications refer to the tool in more detail but do not provide access, required disclosures include: criteria and methodology of the tool and its limitations and key assumptions; the universe of investments considered; how the tool determines which securities to select; whether the tool favors certain securities; the fact that investment results may change over time; and any bias in security selections",
            "Required on-screen disclosure when using the tool: 'IMPORTANT: The projections or other information generated by [name of the investment tool] regarding the likelihood of various investment outcomes are hypothetical in nature, do not reflect actual investment results, and are not guarantees of future results.'",
            "Disclosure must indicate whether the tool favors securities in which the member makes a market, serves as underwriter, or has any other direct or indirect interest"
          ],
          exceptions: [
            "If the tool is offered exclusively to institutional investors and all related communications qualify as institutional communication, the post-use access and filing requirements do not apply"
          ],
          examTip: "The required on-screen disclaimer language is a likely exam target. The key takeaway: investment analysis tool outputs are hypothetical and not guarantees — any communication suggesting otherwise violates this rule."
        }
      ]
    },
    {
      name: "Options Communications (FINRA Rule 2220)",
      rules: [
        {
          id: "rule-2220-options-retail-comm-approval",
          name: "FINRA Rule 2220 — Options Retail Communication Approval",
          category: "FINRA Rule",
          language: "All retail communication concerning options, with the exception of completed options worksheets, must be pre-approved by a Registered Options Principal (ROP). Options correspondence and institutional communication do not require pre-approval by an ROP but are subject to review and general supervision requirements.",
          concept: "Options communications carry heightened pre-approval requirements: only a Registered Options Principal (ROP) — not just any principal — can approve retail options communications. The firm's written supervisory procedures must designate the specific ROP responsible.",
          parameters: [
            "All retail communication concerning options (except completed options worksheets) requires pre-approval by a Registered Options Principal (ROP) before initial use",
            "Options worksheet templates are retail communication and require pre-use approval by an ROP; completed worksheets do not require additional approval",
            "Options correspondence and institutional communications do not require ROP pre-approval but are subject to supervision and review",
            "Retail communication used prior to delivery of an Options Disclosure Document (ODD) must be limited to a general discussion: brief description of options, method of operation of the exchange, how options are priced, and identification of the registered clearing agency",
            "Communications prior to ODD delivery may include advertising designs and attention-getting headlines and photographs, provided they are not misleading",
            "Communications prior to ODD delivery cannot contain recommendations or projections including annualized rates of return",
            "Must include contact information for obtaining a copy of the ODD"
          ],
          exceptions: [
            "Completed options worksheets (as opposed to the template) are not subject to an additional pre-use approval requirement",
            "Retail communications that simply provide a list of services are exempt from filing with an exchange or FINRA"
          ],
          examTip: "ROP approval is required for retail options communications, not just any principal. Options communications before delivery of the ODD must be general only — no recommendations or projections. After ODD delivery, normal content rules apply."
        },
        {
          id: "rule-2220-options-filing",
          name: "FINRA Rule 2220 — Options Communication Filing",
          category: "FINRA Rule",
          language: "In addition to ROP approval, all retail communication used prior to the delivery of an options disclosure document must be submitted for approval to an exchange or FINRA at least 10 calendar days prior to initial use.",
          concept: "Pre-ODD options retail communications must be submitted to an exchange or FINRA at least 10 calendar days before use — a separate and earlier deadline from the general 10-business-day FINRA filing requirement.",
          parameters: [
            "Filing deadline: at least 10 CALENDAR days prior to initial use (not business days)",
            "Submit to exchange or FINRA",
            "If the firm is a member of an exchange (such as the CBOE) and FINRA, no filing is required with FINRA if the firm files with the exchange",
            "Records must be retained for three years and must be made readily available for SRO examination",
            "Records must include: name of the person who approved the material, names of persons who prepared it, and source of any recommendations"
          ],
          exceptions: [
            "If a firm issues sales material only to existing clients (who already have an ODD), no pre-use filing is required since all existing clients have already received an ODD",
            "Material prepared by an exchange or SRO, or material used internally that is not disseminated to the public, is not subject to the rule"
          ],
          examTip: "Note the 10 CALENDAR day requirement for options communications before ODD delivery vs. the general 10-business-day FINRA filing requirement. Calendar days = shorter window. Exchange filing satisfies the FINRA filing requirement if the firm is a member of both."
        },
        {
          id: "rule-2220-options-performance-projections",
          name: "FINRA Rule 2220 — Options Performance and Projections",
          category: "FINRA Rule",
          language: "Projected performance figures (including projected annualized rates of return) for options must not be based on less than 60 days of experience, and must include a statement that past performance is not indicative of future performance. Reference to past performance must be based on recommendations of the member firm — not a particular registered representative — and must include ALL recommendations within at least the preceding 12 months within the particular universe.",
          concept: "Past performance references and projections for options communications have specific substantiation requirements that prevent cherry-picking favorable results.",
          parameters: [
            "Projections must be based on at least 60 days of experience",
            "Must include a statement that past performance is not indicative of future performance",
            "Projections must disclose all relevant costs such as commissions and interest costs",
            "All assumptions must be clearly stated",
            "The condition of the market (generally rising or declining) must be noted",
            "Reference to past performance must cover ALL recommendations within the preceding 12 months within the particular universe (e.g., all call purchase recommendations if referencing call purchase performance)",
            "Past performance references must be based on the member firm's recommendations, not those of a particular registered representative",
            "Customer must be provided, on request, with the date and price of each recommendation covered within that period",
            "If data is summarized, must note the number of recommendations made and the number of advances and declines",
            "Communications containing projections or performance statistics must be accompanied by or preceded by an ODD",
            "Communication must be reviewed and initialed by an ROP prior to use"
          ],
          exceptions: [
            "Past performance references are permitted in sales literature if supporting documentation is provided or made available on request, but are not permitted in advertisements"
          ],
          examTip: "The 60-day minimum experience requirement for options projections and the requirement to include ALL recommendations (not just winners) are heavily tested. An advertisement cannot reference past options performance — only sales literature can, and only with documentation."
        },
        {
          id: "rule-2220-options-risk-disclosure",
          name: "FINRA Rule 2220 — Options Risk Disclosure",
          category: "FINRA Rule",
          language: "Communications with the public must include a warning to the effect that options transactions are not suitable for all investors and that the risks of options trading should be weighed against the potential rewards. Communications cannot contain a statement implying the certainty of a secondary market because of an exchange.",
          concept: "Options communications must provide balanced risk disclosure and must not mislead investors about secondary market liquidity. Both the upside and downside must be presented.",
          parameters: [
            "Must warn that options are not suitable for all investors",
            "Risks must be weighed against potential rewards",
            "Any statement about advantages of options must be balanced by risk statements (e.g., 'an investor has an opportunity to earn profits while limiting risk of loss' must be balanced by a statement that an investor may lose the entire amount committed to options in a relatively short period)",
            "Cannot contain a categorical statement that a buyer and seller will always be able to offset a position on an exchange — trading might be halted, suspended, or otherwise impeded",
            "Qualified statement acceptable: 'The secondary market of an exchange is intended to provide a means of liquidating positions in options'"
          ],
          exceptions: [],
          examTip: "Balance is key in options communications. A positive statement about profit potential must be paired with a risk statement. Implying certainty of secondary market liquidity is prohibited because exchanges can halt trading."
        }
      ]
    },
    {
      name: "Recordkeeping for Communications (SEA Rule 17a-4)",
      rules: [
        {
          id: "sea-rule-17a-4-b-4-comm",
          name: "SEA Rule 17a-4(b)(4) — Recordkeeping for Communications",
          category: "SEC Rule",
          language: "Under SEA Rule 17a-4, broker-dealers must retain all communications received and sent relating to the firm's business. Records of communications are retained for three years, with the first two years in an easily accessible location.",
          concept: "The general retention rule for broker-dealer communications. Three years of retention, with the first two years requiring immediate accessibility.",
          parameters: [
            "Communications relating to the broker-dealer's business must be retained for three years",
            "Records must be kept in an easily accessible place for the first two years",
            "Approved retail communications: file must contain copy of communication, dates of first and last use, name of approving principal, and date of approval",
            "For retail communications not requiring pre-approval: name of person who prepared or distributed the communication must be retained for three years from date of last use",
            "Institutional communication: the communication itself, source(s) of charts/tables/illustrations/graphs, and name of preparer must be kept for three years",
            "Options communications: copies must be retained for three years and made readily available for SRO examination"
          ],
          exceptions: [],
          examTip: "Three years total retention; two years in an easily accessible location — this is the same standard that appears throughout the recordkeeping rules. Do not confuse with the six-year records (blotters, general ledger) under Rule 17a-3."
        }
      ]
    }
  ]
};
