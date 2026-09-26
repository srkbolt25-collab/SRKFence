export type BlogPost = {
  slug: string;
  image: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  excerpt: string;
  category: string;
  readTime: string;
  quickAnswer: string;
  sections: { heading: string; body: string[] }[];
  checklist: string[];
  faqs: { q: string; a: string }[];
  nextStep: string;
  reviewer: string;
  updated: string;
  dateModified: string;
};

export const blogPosts: BlogPost[] = [
  {
    "slug": "how-to-choose-gi-metal-decking-sheets",
    "image": "/products/gi-decking-sheet.jpg",
    "title": "GI Metal Decking Sheets: How to Choose Profile, Thickness and Span",
    "metaTitle": "GI Metal Decking Guide UAE: Profile, Thickness & Span",
    "metaDescription": "Choose GI metal decking sheets by profile, thickness, span, coating and slab design. UAE buyer guide for 45/150 and 75/305 decking RFQs.",
    "primaryKeyword": "GI metal decking sheets",
    "secondaryKeywords": [
      "GI decking sheets UAE",
      "galvanized steel decking",
      "metal decking sheet",
      "composite floor deck",
      "45/150 decking",
      "75/305 decking",
      "decking sheet thickness",
      "decking sheet RFQ"
    ],
    "excerpt": "A practical buyer guide to GI decking profiles, thickness, span, coating, shear-stud coordination and RFQ details for UAE and GCC projects.",
    "category": "Decking & Composite Floors",
    "readTime": "8 min read",
    "quickAnswer": "Choose GI metal decking sheets from the approved floor design, not from price or profile name alone. Confirm deck profile, base-metal thickness, coating, span and support layout, concrete slab requirement, shear-stud coordination, sheet lengths and delivery sequence. For engineered floors, the structural drawing and approved load tables should control the final selection.",
    "sections": [
      {
        "heading": "Start with the floor system, not the sheet catalogue",
        "body": [
          "GI metal decking is part of a floor or roof assembly, so the first question is what the deck must do in the finished structure. On a composite floor, the profiled steel deck can act as permanent formwork during the concrete pour and may also participate in the composite slab system after the concrete has cured. That means the profile, thickness, support spacing, concrete depth and attachment arrangement have to be considered together rather than as separate purchasing decisions.",
          "For UAE contractors and procurement teams, the most useful starting document is the structural drawing or BOQ. It should identify the deck type or profile, support direction, span or beam spacing, slab information and any connection requirements. If the design calls for SRK Steel's [[GI Decking Sheet - 45/150 and 75/305|/products/gi-decking-sheet]], send the exact profile reference shown on the drawing rather than asking for a generic 'decking sheet'.",
          "Steel deck design guidance also treats allowable span and load as design questions tied to deck properties and construction loading. That is why a supplier quotation should not be used as a substitute for structural design approval. The project's engineer or approved manufacturer load data should remain the controlling reference for span, shoring and load capacity."
        ]
      },
      {
        "heading": "1. Confirm the decking profile and rib geometry",
        "body": [
          "Deck profile affects how the sheet sits on the supporting steel, how concrete is placed around the ribs and how the finished floor system is detailed. Two profiles can look broadly similar while having different rib depth, pitch and side-lap geometry, so a verbal description is not enough for a controlled RFQ.",
          "SRK Steel lists 45/150 and 75/305 GI decking sheet profiles. Treat those as profile identifiers to be matched to the project drawing. Do not assume that one profile is automatically 'stronger' or suitable for a longer span simply because it is deeper; thickness, steel grade, support spacing, construction loads, slab configuration and attachment all influence performance.",
          "When replacing an already specified deck with an alternative profile, send the consultant or structural engineer the proposed technical data before ordering. A dimensionally similar sheet is not automatically an approved structural substitute."
        ]
      },
      {
        "heading": "2. Specify thickness clearly and avoid gauge ambiguity",
        "body": [
          "Thickness is one of the first commercial variables buyers compare, but it is also one of the easiest places for quotations to become non-comparable. State the required base-metal thickness in millimetres where the project documents allow it, and make clear whether the stated value includes or excludes coating. If a drawing uses gauge terminology, include the corresponding project specification rather than relying on an assumed conversion.",
          "A thinner sheet can reduce unit weight and price, but selection should be based on the approved floor design and handling requirements. During erection and concrete placement, the deck must perform under temporary construction conditions as well as in the final slab system. The structural designer or approved deck tables should determine whether the proposed thickness is suitable.",
          "For procurement comparison, place profile, thickness, coating and sheet length on the same line item. That makes it much easier to identify a quotation that has changed one technical variable while appearing to offer the same product."
        ]
      },
      {
        "heading": "3. Review span, support spacing and temporary construction loads",
        "body": [
          "Span is not a catalogue preference. It is the distance the deck must bridge between supports under the conditions defined by the design. During construction, wet concrete, workers, equipment and local point loads can govern the temporary condition before the slab gains strength. The Steel Deck Institute, for example, treats allowable spans and construction loading through design standards and load tables rather than a single universal rule.",
          "Before sending an RFQ, record the beam or joist spacing from the drawing and identify whether temporary shoring is part of the design. If the required span is close to a published limit, the engineer should review the condition rather than asking the supplier to 'increase the gauge' informally.",
          "Projects using decking in [[commercial construction|/applications/commercial-construction]] or [[industrial warehouses|/applications/industrial-warehouses]] often have different bay layouts, pour sequences and access constraints. Sharing the actual support plan lets the supplier understand the commercial scope even though structural approval remains with the project design team."
        ]
      },
      {
        "heading": "4. Confirm galvanized coating and exposure requirements",
        "body": [
          "Galvanized coating protects the steel surface, but the required coating level should come from the project specification and service environment. Do not write only 'GI finish' if the consultant has stated a coating mass, material standard or corrosion category. Put the requirement into the RFQ exactly as written so all bidders price the same finish.",
          "Exposure also matters during storage and construction. Deck bundles that remain outdoors before installation should be stored and covered in a way that avoids trapped moisture and contamination. On coastal or high-humidity projects, the consultant may have additional requirements for material, coating or handling; those should be resolved before purchase, not after delivery.",
          "If the floor package also includes coated sheets, purlins or roofing products, the [[Galvanized Steel category|/categories/galvanized-steel]] can be used to coordinate related product enquiries without mixing their specifications into the decking line item."
        ]
      },
      {
        "heading": "5. Coordinate decking with shear studs, concrete and openings",
        "body": [
          "A metal deck package rarely ends with the sheet itself. Composite floor systems may also involve [[shear studs|/products/shear-studs]], edge trims, pour stops, reinforcement, openings and penetration details. The parties responsible for each item should be clear in the BOQ and quotation.",
          "Where shear studs are specified, provide the stud diameter and height, welding or installation responsibility, quantity and drawing reference. Do not assume that the stud schedule can be derived from deck area alone. Stud spacing and location are structural-design items.",
          "Large openings, service penetrations and changes in deck direction should be identified before material is released. A late opening can affect sheet layout, trimming and support details. The steel deck should therefore be coordinated with MEP and structural drawings before final cutting lengths are confirmed."
        ]
      },
      {
        "heading": "6. Plan sheet lengths, laps, handling and delivery sequence",
        "body": [
          "Sheet length affects site handling, transport, lifting and the number of joints. Ordering every sheet at one standard length can create unnecessary cutting or handling problems if the structural bays differ. A deck layout or cutting schedule is useful on larger floors because it connects quantities to actual zones.",
          "For multi-level projects, ask whether bundles need floor-by-floor identification or phased delivery. A lower material rate can lose its advantage quickly if bundles arrive in the wrong sequence and have to be moved repeatedly on site.",
          "Delivery planning is especially important for active UAE projects with restricted unloading windows, tower-crane schedules or limited laydown space. Include delivery city, site access notes, preferred bundle weight where relevant and programme dates in the RFQ."
        ]
      },
      {
        "heading": "Common mistakes when buying GI decking sheets",
        "body": [
          "The most common error is treating decking as ordinary corrugated sheet. Other mistakes include comparing quotations with different thicknesses, omitting coating requirements, ordering before the support layout is frozen, assuming the supplier will design the span, and forgetting shear studs or edge details until the main sheet order is already placed.",
          "Another frequent problem is sending only the total floor area. Square metres are useful for early budgeting, but they do not define profile, thickness, sheet lengths, span or cutting sequence. For a firm project quotation, attach the latest drawing or BOQ revision and identify any information that is still provisional.",
          "If the deck selection is part of a broader roof or secondary-steel package, our [[C Purlins vs Z Purlins guide|/blogs/c-purlins-vs-z-purlins]] explains a similar principle: the project geometry and engineer's design should drive the section choice, not a generic product preference."
        ]
      },
      {
        "heading": "What to include in a GI decking sheet RFQ",
        "body": [
          "A useful RFQ should state the project location, deck profile, base-metal thickness, galvanized coating or material specification, sheet lengths, quantity, support spacing or drawing reference, slab/deck system notes, shear-stud requirement, certificate or submittal requirement, delivery sequence and target date.",
          "If the design is still developing, label provisional quantities clearly. SRK Steel can review commercial product availability and RFQ completeness, while the consultant or structural designer remains responsible for approving the structural deck system.",
          "For a broader procurement template, use the [[Steel RFQ Checklist for Contractors|/blogs/steel-rfq-checklist-for-contractors]] before issuing the enquiry."
        ]
      }
    ],
    "checklist": [
      "Approved deck profile / drawing reference",
      "Base-metal thickness",
      "Galvanized coating or material specification",
      "Support spacing / span information",
      "Sheet length and quantity by zone",
      "Shear studs and edge accessories",
      "Certificates or submittals required",
      "Delivery city, sequence and programme"
    ],
    "faqs": [
      {
        "q": "What is the difference between GI decking sheet and ordinary corrugated roofing sheet?",
        "a": "GI decking sheet is a profiled structural or formwork component used in floor or roof assemblies. Ordinary corrugated roofing sheet is primarily a weather-cladding product. They should not be substituted for each other unless the project designer has approved the exact system."
      },
      {
        "q": "Is a thicker GI decking sheet always better?",
        "a": "No. Thickness should match the approved profile, span, loading and construction condition. Increasing thickness may change weight and cost but does not replace structural design or consultant approval."
      },
      {
        "q": "Can I request decking sheet pricing only by square metre?",
        "a": "You can use area for early budgeting, but a firm RFQ should also include profile, thickness, coating, sheet lengths, quantity breakdown, drawing reference and delivery requirements."
      },
      {
        "q": "Do GI decking sheets need shear studs?",
        "a": "Only where the structural system and drawings require them. Shear-stud size, quantity and spacing must follow the approved structural design rather than being assumed from deck area."
      },
      {
        "q": "What should I send SRK Steel for a decking quotation?",
        "a": "Send the latest drawing or BOQ, profile, thickness, coating requirement, sheet lengths, quantity, shear-stud details if applicable, project location and delivery programme."
      }
    ],
    "nextStep": "Planning a decking package in the UAE, GCC or selected Middle East markets? Send SRK Steel the structural drawing, BOQ, deck profile, thickness, lengths, quantity and delivery sequence through the [[RFQ page|/contact]] so the commercial requirement can be reviewed without guessing at the project design.",
    "reviewer": "Reviewed by SRK Steel Team",
    "updated": "Updated 28 August 2026",
    "dateModified": "2026-08-28"
  },
  {
    "slug": "c-purlins-vs-z-purlins",
    "image": "/products/c-purlins.jpg",
    "title": "C Purlins vs Z Purlins: Which Profile Fits Your Roof or Wall System?",
    "metaTitle": "C Purlins vs Z Purlins: UAE Roof & Wall Guide",
    "metaDescription": "Compare C purlins vs Z purlins for roof and wall systems. Learn how span layout, lapping, section size, thickness, punching and coating affect selection.",
    "primaryKeyword": "C purlins vs Z purlins",
    "secondaryKeywords": [
      "C purlin",
      "Z purlin",
      "galvanized purlins",
      "roof purlins",
      "wall girts",
      "purlin supplier in UAE",
      "cold-formed purlins",
      "C and Z purlin sizes"
    ],
    "excerpt": "A project-focused comparison of C and Z purlins covering span layout, lapping, section geometry, punching, coating, delivery and RFQ checks.",
    "category": "Purlins & Roofing",
    "readTime": "8 min read",
    "quickAnswer": "C purlins are often used where a straightforward channel section and simple-span or wall-girt arrangement fits the structural design. Z purlins are commonly selected for multi-bay roof runs because their geometry can suit lapped continuity at supports. Final selection must follow the engineer's span, load, connection, bracing and cladding design.",
    "sections": [
      {
        "heading": "The difference is structural geometry, not just the letter shape",
        "body": [
          "C and Z sections are cold-formed purlins used as secondary steel members to support roof or wall cladding and transfer those loads into the primary frame. They can look like interchangeable light-gauge sections in a supplier catalogue, but their geometry changes how they connect, lap and behave in a building system.",
          "A [[C purlin|/products/c-purlins]] has both flanges facing the same direction. A [[Z purlin|/products/z-purlins]] has flanges facing opposite directions. That simple geometric difference is why Z sections can often be nested and lapped more naturally over supports in continuous multi-bay arrangements, while C sections are frequently used as discrete members, wall girts or simpler framing elements.",
          "Neither profile should be chosen from a rule of thumb alone. Roof slope, bay spacing, wind uplift, dead load, cladding restraint, bridging, connection details and section properties all influence the engineer's design."
        ]
      },
      {
        "heading": "When C purlins make practical sense",
        "body": [
          "C purlins can be a practical choice where the design uses individual members between supports, straightforward cleat connections or wall-girt arrangements. Their channel shape is easy to identify on drawings and can suit warehouses, sheds, canopies, wall support and other secondary-framing applications.",
          "For procurement, the word 'C purlin' is still not enough. C and Z purlin sizes are defined by web depth, flange width, lip size where applicable, base-metal thickness and length. If the section is punched, include the controlled hole schedule rather than asking the supplier to infer it from a sketch.",
          "C purlins are part of a system. The designer should also confirm bridging, sag rods or restraints where required, cleats, fasteners and the way roof or wall sheeting restrains the member."
        ]
      },
      {
        "heading": "Why Z purlins are common on multi-bay roofs",
        "body": [
          "Z purlins are often used in roof systems that benefit from lapped or continuous runs across internal supports. Because the flanges face opposite directions, adjacent Z sections can be arranged to overlap more readily at a rafter or frame line. The resulting continuity can influence structural efficiency, but the lap length and connection must be designed rather than guessed.",
          "Do not assume that 'Z means long span' without checking the section schedule. A shallow or thin Z section can be unsuitable for a particular load just as a heavier C section may be acceptable in another layout. The structural calculation and approved purlin schedule should define the actual section.",
          "On [[industrial warehouse|/applications/industrial-warehouses]] projects, Z purlins are frequently coordinated with roof sheeting, insulated panels and primary portal frames. The procurement team should keep the purlin schedule aligned with the latest structural and cladding drawings."
        ]
      },
      {
        "heading": "Span, load and bracing should decide before price",
        "body": [
          "Galvanized purlins are common in roof and wall systems because the sections sit behind cladding and may face humidity, condensation or construction exposure. The required coating should be stated by the project specification. Avoid broad RFQ language such as 'galvanized standard finish' if the consultant has specified a coating mass or material standard.",
          "For this reason, a supplier should not convert a C section to a Z section, or vice versa, simply to reduce price without design approval. Any proposed alternative needs the engineer to review section properties, span arrangement, lap details, connections and serviceability requirements.",
          "When comparing bids, confirm that each supplier has priced the same section dimensions and steel thickness. A small change in thickness or flange/lip dimensions can materially change weight and performance."
        ]
      },
      {
        "heading": "Galvanized finish, coating and environment",
        "body": [
          "Many purlin systems use galvanized steel because the sections sit behind roof or wall cladding and may face humidity, condensation or construction exposure. The required coating should be stated by the project specification. Avoid broad RFQ language such as 'galvanized standard finish' if the consultant has specified a coating mass or material standard.",
          "For roof and wall packages, coordinate the purlin finish with the complete [[Roofing & Cladding application|/applications/roofing-cladding]]. Coastal or corrosive environments may require project-specific material or coating decisions, and those decisions should be made by the consultant before the order is released.",
          "If the buyer is comparing a galvanized section with a painted or other finish, make the finish and any surface-preparation responsibility visible in the quotation so commercial comparisons remain like-for-like."
        ]
      },
      {
        "heading": "Punching and connection details are procurement-critical",
        "body": [
          "Purlins are often delivered with pre-punched holes for cleats, laps, bridging or other connections. Pre-punching can save site time, but it also means a wrong hole schedule can affect a large quantity of material at once.",
          "The RFQ should include the latest approved purlin schedule and identify hole diameter, edge distances, pitch, lap holes and any different patterns for end bays or special zones. Revision control matters: if the structural drawing changes after production, site drilling can erase the benefit of factory punching.",
          "Where purlins interface with [[corrugated roofing sheets|/products/corrugated-roofing-sheet]] or [[roof insulated panels|/products/roof-insulated-panels]], keep the fastener and cladding layout coordinated with the structural schedule rather than treating the packages as unrelated orders."
        ]
      },
      {
        "heading": "C vs Z purlins: a practical procurement decision sequence",
        "body": [
          "First, use the structural drawing to identify whether the project requires C or Z sections. Second, check section depth, flange, lip, thickness and length. Third, confirm whether Z sections are lapped and obtain the lap/connection detail. Fourth, verify punching and bracing schedules. Fifth, check coating and any material standard. Finally, reconcile quantity and delivery sequence with the roof erection programme.",
          "If the designer has not selected a section yet, provide the span layout, roof system and project criteria to the structural engineer rather than asking the supplier for an unapproved substitution. Suppliers can support commercial availability and fabrication details, but design responsibility needs to remain clear.",
          "This sequence also makes quotations easier to compare because every bidder is pricing the same technical basis."
        ]
      },
      {
        "heading": "Common mistakes to avoid",
        "body": [
          "Typical errors include ordering only by section depth, ignoring base-metal thickness, assuming every Z purlin uses the same lap, sending an old punching schedule, mixing roof and wall quantities, and comparing a galvanized quotation with an uncoated or differently coated alternative.",
          "Another mistake is treating purlins as isolated steel. Their performance depends on how they connect to the primary frame and interact with cladding, restraints and bridging. Procurement should therefore follow the approved building system rather than a generic product description.",
          "If you are buying the roof as a broader package, the [[GI decking sheet guide|/blogs/how-to-choose-gi-metal-decking-sheets]] and product catalogue can help separate floor-deck, roof-cladding and secondary-steel requirements before RFQs are issued."
        ]
      },
      {
        "heading": "Roof purlins and wall girts are related but not identical uses",
        "body": [
          "A section that works as a roof purlin is not automatically the correct wall girt. Roof members can be governed by gravity and wind uplift, while wall girts primarily support cladding under wind pressure and suction. Connection orientation, restraint and serviceability can therefore differ even when the same C or Z family appears on both schedules.",
          "Keep roof and wall quantities separated in the take-off and identify each by grid line or elevation. This makes it easier to check that punching, section orientation and lengths match the correct part of the building. It also prevents a site team from using a wall member in a roof bay simply because the section label looks familiar.",
          "If the cladding package changes after structural approval, ask the engineer to review any effect on purlin or girt restraint. Secondary steel and cladding work together as a system, so late substitutions should not be treated as independent purchasing changes."
        ]
      },
      {
        "heading": "A practical UAE warehouse example",
        "body": [
          "Consider a warehouse with repeated portal-frame bays, roof insulated panels and wall cladding. The roof design may use lapped Z purlins through the internal bays, while C sections are used at selected end conditions or as wall girts. A purchase order that says only 'purlins for warehouse' would not preserve that distinction.",
          "A better RFQ attaches the structural purlin schedule, separates roof and wall members, lists section dimensions and thickness, and identifies punched-hole patterns and lap details. Delivery can then be bundled by bay or elevation so the erection team receives the right members in sequence.",
          "This is the kind of project context that improves both quotation quality and site execution without asking the supplier to redesign the structure."
        ]
      },
      {
        "heading": "What to include in a C or Z purlin RFQ",
        "body": [
          "Send the profile type, web/flange/lip dimensions, base-metal thickness, material or coating requirement, cut lengths, punching schedule, lap details for Z sections where applicable, quantity by length, drawings, delivery location and required dates.",
          "For phased warehouse erection, include the bay or zone sequence so bundles can be identified in a useful order. If the requirement is part of a larger galvanized package, reference the [[Galvanized Steel range|/categories/galvanized-steel]] but keep each product line technically separate.",
          "Use the [[RFQ checklist|/blogs/steel-rfq-checklist-for-contractors]] if you want a consistent format for comparing multiple steel suppliers."
        ]
      }
    ],
    "checklist": [
      "C or Z profile from approved drawing",
      "Web, flange and lip dimensions",
      "Base-metal thickness",
      "Length and quantity breakdown",
      "Punching / hole schedule",
      "Z-purlin lap detail where applicable",
      "Coating / material standard",
      "Bracing, cleat and delivery-zone references"
    ],
    "faqs": [
      {
        "q": "What is the main difference between C purlins and Z purlins?",
        "a": "The flange orientation is different. C purlin flanges face the same direction, while Z purlin flanges face opposite directions. This affects connection and lapping options, but final structural selection depends on the engineered roof or wall system."
      },
      {
        "q": "Are Z purlins always better for long spans?",
        "a": "No. Z sections are often used in continuous or lapped multi-bay systems, but allowable span depends on section properties, thickness, loads, restraint, connections and the engineer's design."
      },
      {
        "q": "Can C and Z purlins be substituted for each other?",
        "a": "Not without design approval. A substitution can change section properties, connection details, lap behaviour and bracing requirements."
      },
      {
        "q": "What dimensions should I include in a purlin RFQ?",
        "a": "Include web depth, flange width, lip size where applicable, base-metal thickness, cut length, hole pattern, finish and quantity, together with the latest drawing."
      },
      {
        "q": "Should purlins be ordered with pre-punched holes?",
        "a": "They can be when the approved connection schedule is stable. Factory punching can reduce site work, but only if the hole pattern and drawing revision are controlled before production."
      }
    ],
    "nextStep": "Need C or Z purlins for a UAE or GCC roof package? Send SRK Steel the purlin schedule, section dimensions, thickness, lengths, punching and lap details through the [[RFQ page|/contact]]. The team can review the commercial scope against the documents you provide.",
    "reviewer": "Reviewed by SRK Steel Team",
    "updated": "Updated 28 August 2026",
    "dateModified": "2026-08-28"
  },
  {
    "slug": "strut-channel-buying-guide",
    "image": "/products/strut-track.jpg",
    "title": "Strut Channel Buying Guide for MEP, HVAC, Cable Tray and Pipe Supports",
    "metaTitle": "Strut Channel Guide UAE: MEP Sizes, Loads & Finishes",
    "metaDescription": "Buy strut channel for MEP support by size, thickness, span, load, finish and accessories. UAE guide for slotted/plain channel and support frames.",
    "primaryKeyword": "strut channel buying guide",
    "secondaryKeywords": [
      "MEP strut channel",
      "strut channel UAE",
      "galvanized strut channel",
      "slotted strut channel",
      "41 x 41 strut channel",
      "41 x 21 strut channel",
      "pipe support channel",
      "cable tray support"
    ],
    "excerpt": "How to specify strut channel by profile, thickness, load, span, finish and accessory package for MEP support systems.",
    "category": "MEP Support Systems",
    "readTime": "8 min read",
    "quickAnswer": "Choose strut channel from the support load, span, orientation, installation environment and connection system—not from channel width alone. Confirm profile size, steel thickness, slotted or plain configuration, finish, length, support spacing, brackets, channel nuts, rods and clamps. For loaded supports, use engineer-approved or manufacturer load data for the exact channel configuration.",
    "sections": [
      {
        "heading": "A strut channel is part of a support system, not a standalone rail",
        "body": [
          "Strut channel is widely used to build modular supports for pipes, cable trays, ducts, HVAC services and light equipment. An MEP strut channel system combines the steel channel with compatible nuts, brackets, threaded rods and clamps to create adjustable support frames without fabricating every support from scratch.",
          "That flexibility can also create weak RFQs. A request for '41 x 41 strut, 500 pieces' does not explain thickness, slots, finish, length, load, support span or accessories. Two quotations can therefore look comparable while describing different channel systems.",
          "SRK Steel's [[Strut & Track|/products/strut-track]] range covers plain or slotted strut and accessories in pre-galvanized or hot-dip galvanized steel, subject to the project requirement. The project engineer or approved support-system data should still control the load-bearing selection."
        ]
      },
      {
        "heading": "1. Define what the support is carrying",
        "body": [
          "Common market enquiries refer to profiles such as 41 x 41 strut channel or 41 x 21 strut channel, but the outside dimensions do not determine capacity on their own. Steel thickness, slot pattern, loading direction, unsupported span and connection detail all change how the channel performs.",
          "The support geometry is just as important. A short wall bracket, a trapeze frame suspended from rods and a floor-mounted equipment frame can use the same nominal channel size but load it in very different ways.",
          "On [[MEP & Support Systems|/applications/mep-support-systems]] projects, the mechanical or electrical support drawing should identify the intended arrangement. If it does not, ask the engineer to define the support basis before converting a material take-off into a purchase order."
        ]
      },
      {
        "heading": "2. Channel size is only one part of capacity",
        "body": [
          "A slotted strut channel can speed up adjustment and alignment because bolts or channel fittings can be positioned along the slot pattern. Plain strut may suit applications where slots are not required or where the approved system uses different connection methods.",
          "Published load tables normally apply to a specific section, thickness, span and load type. A uniformly distributed load is not the same as a point load, and a figure for one orientation should not be applied to another. For critical supports, use data that matches the exact product or obtain engineering approval rather than extrapolating from a similar channel.",
          "From a purchasing standpoint, place size and thickness together in the BOQ. This prevents a lower-thickness quotation from being compared only on the headline channel dimensions."
        ]
      },
      {
        "heading": "3. Slotted or plain strut? Decide from the connection plan",
        "body": [
          "A galvanized strut channel finish should match the project environment and specification. Pre-galvanized steel is commonly used for many indoor and protected support applications, while hot-dip galvanized finishes may be specified where the support has greater exposure. The project documents should define the required material and coating rather than leaving the supplier to choose by habit.",
          "The correct option should follow the support detail. If slotted channel is specified, include the slot pattern or product reference if it matters to the connection. Do not assume that every bracket, spring nut or fitting is compatible with every channel profile.",
          "For mixed MEP packages, provide the accessory schedule with the channel. Ordering strut first and fittings later can create compatibility or quantity problems during installation."
        ]
      },
      {
        "heading": "4. Pre-galvanized vs hot-dip galvanized finish",
        "body": [
          "Finish should match the project environment and specification. Pre-galvanized steel is commonly used for many indoor and protected support applications, while hot-dip galvanized finishes may be specified where the support has greater exposure. The project documents should define the required material and coating rather than leaving the supplier to choose by habit.",
          "Where channels are cut on site, the project may also have requirements for treating cut edges or damaged coating. Clarify that responsibility in the installation method statement instead of assuming the original coating alone resolves every exposed area.",
          "For outdoor, coastal or aggressive environments, confirm the corrosion-protection strategy with the consultant. 'Galvanized' is a family of finishes, not a complete exposure specification."
        ]
      },
      {
        "heading": "5. Support span and deflection matter before ultimate strength",
        "body": [
          "A support can be technically far from failure and still deflect enough to be unacceptable for the service it carries. That is why support spacing and deflection limits belong in the selection process, not just a final strength figure.",
          "When reading a load table, match the exact channel, span, load type and orientation. If a support is near a tabulated limit or carries a life-safety service, ask the engineer or system supplier to review it. Adding an intermediate support can sometimes be more practical than simply increasing channel thickness, but that is a design decision.",
          "Do not copy a support spacing from another project because the same channel can behave differently with different loads, rod positions, brackets or service layouts."
        ]
      },
      {
        "heading": "6. Buy the accessory package as a coordinated system",
        "body": [
          "A typical strut support may need channel nuts, spring nuts, brackets, beam clamps, pipe clamps, threaded rods, washers, base plates and anchors. Each connection needs to fit the channel geometry and the approved detail.",
          "For procurement, build a support take-off rather than a channel-only quantity. A complete line-by-line schedule reduces the risk of arriving on site with hundreds of metres of strut but not enough fittings to assemble the frames.",
          "Where supports also use [[GI Pipe|/products/gi-pipe]] or other steel elements, separate the pipe or fabricated member specification from the strut accessory schedule so responsibilities remain clear."
        ]
      },
      {
        "heading": "7. Installation environment changes the RFQ",
        "body": [
          "Ceiling voids, plant rooms, rooftops, shafts and external service corridors can all impose different access and exposure conditions. Long channel lengths may be efficient in an open warehouse but awkward to move through a completed fitout area.",
          "Tell the supplier whether the project needs standard lengths, project cut lengths, phased delivery or labelled bundles. On large commercial projects, delivery sequencing can be as important as unit price because MEP supports are installed zone by zone.",
          "If strut is part of an interior partition or fitout package, coordinate it with the [[Dry Wall Partition Systems guide|/blogs/drywall-partition-system-buying-guide]] rather than assuming the two framing systems have the same gauge, function or accessories."
        ]
      },
      {
        "heading": "Common strut-channel buying mistakes",
        "body": [
          "The recurring mistakes are ordering by 41 x 41 size alone, ignoring thickness, mixing pre-galvanized and hot-dip galvanized quotations, using a load table for the wrong span or orientation, forgetting accessories, and changing support spacing on site without engineering review.",
          "Another problem is using the word 'heavy duty' without a defined load. A technical RFQ should state the supported service, design load or drawing reference and required finish. Marketing labels are not a substitute for load data.",
          "Keep approved drawings, load tables and accessory data with the submittal package so site teams can verify that the delivered channel system matches the one that was reviewed."
        ]
      },
      {
        "heading": "Anchors, rods and connection interfaces need their own checks",
        "body": [
          "The channel itself may be correctly selected while the support still fails to match the design because the anchor, threaded rod, beam clamp or bracket is different from the approved detail. Each connection transfers load through a specific interface, so accessory selection should be based on the support drawing and substrate.",
          "For concrete anchors, check the specified anchor type, diameter, embedment, edge distance and substrate assumptions through the project-approved system. For beam clamps or structural-steel attachments, confirm whether drilling or welding is allowed. These are engineering and method-statement decisions, not catalogue substitutions.",
          "Procurement should therefore keep the channel and critical connection components within one controlled support schedule, even when they are supplied by different vendors."
        ]
      },
      {
        "heading": "A practical MEP trapeze-support example",
        "body": [
          "Take a trapeze support carrying two pipes and a cable tray. The RFQ should not stop at '41 x 41 slotted strut'. It should identify the support width, rod positions, service loads or approved drawing, channel thickness and finish, threaded-rod size, nuts, brackets, pipe clamps and the anchor or upper attachment detail.",
          "If a second supplier quotes a thinner channel with fewer accessories, the headline price may be lower but the scope is not equivalent. A support-by-support schedule makes those differences visible before purchase.",
          "For repetitive supports, ask the site or BIM team to issue a typical support detail and quantity by type. That is usually more reliable than estimating accessories as a percentage of channel length."
        ]
      },
      {
        "heading": "What to include in a strut channel RFQ",
        "body": [
          "State channel size, base-metal thickness, slotted or plain configuration, finish, length, quantity, support application, span or drawing reference, accessory list, certificate/submittal needs, delivery city and programme.",
          "For engineered supports, attach the approved support drawing and identify any specified manufacturer or performance requirement. If alternatives are permitted, state that clearly and keep final acceptance subject to project approval.",
          "For a consistent procurement package across products, use the [[Steel RFQ Checklist for Contractors|/blogs/steel-rfq-checklist-for-contractors]] before sending your enquiry to [[SRK Steel|/contact]]."
        ]
      }
    ],
    "checklist": [
      "Channel profile size",
      "Base-metal thickness",
      "Slotted or plain configuration",
      "Pre-galvanized / HDG finish requirement",
      "Support load and span / drawing reference",
      "Channel length and quantity",
      "Nuts, brackets, rods, clamps and anchors",
      "Delivery zone and installation programme"
    ],
    "faqs": [
      {
        "q": "Is 41 x 41 mm strut channel suitable for every MEP support?",
        "a": "No. It is a common profile size, but suitability depends on thickness, span, load type, orientation, connections and project criteria. Use the exact load data or engineer-approved support detail."
      },
      {
        "q": "What is the difference between slotted and plain strut channel?",
        "a": "Slotted channel provides repeated fixing positions for compatible fittings, while plain channel has no slot pattern. The support drawing and accessory system should determine which is required."
      },
      {
        "q": "Should I use pre-galvanized or hot-dip galvanized strut?",
        "a": "Use the finish stated by the project specification and exposure environment. Do not substitute one galvanized finish for another without approval."
      },
      {
        "q": "Can strut channel load capacity be judged from thickness alone?",
        "a": "No. Section geometry, span, loading direction, point versus distributed load, orientation and connection details also affect capacity and deflection."
      },
      {
        "q": "What accessories should be included with a strut RFQ?",
        "a": "Depending on the support, include channel nuts, brackets, threaded rods, clamps, washers, base plates, anchors and any beam or pipe connection fittings shown on the approved detail."
      }
    ],
    "nextStep": "Building an MEP support package? Send SRK Steel the channel profile, thickness, finish, support drawings, accessory schedule, quantity and delivery programme through the [[RFQ page|/contact]] so the quotation can be based on the actual support system.",
    "reviewer": "Reviewed by SRK Steel Team",
    "updated": "Updated 28 August 2026",
    "dateModified": "2026-08-28"
  },
  {
    "slug": "stainless-steel-coil-sheet-wire-selection-guide",
    "image": "/products/ss-coil.jpg",
    "title": "Stainless Steel Coil, Sheet, Slit Coil and Wire: A Buyer Selection Guide",
    "metaTitle": "Stainless Steel Coil, Sheet & Wire Guide UAE",
    "metaDescription": "Specify stainless steel coil, sheet, slit coil and wire by grade, thickness, width, finish, processing, packing and certificates for UAE projects.",
    "primaryKeyword": "stainless steel coil, sheet and wire selection guide",
    "secondaryKeywords": [
      "stainless steel coil UAE",
      "stainless steel sheet UAE",
      "stainless steel wire",
      "SS slitted coil",
      "stainless steel grades",
      "stainless steel finishes",
      "304 stainless steel",
      "316 stainless steel"
    ],
    "excerpt": "How to specify stainless steel coil, plain sheet, slit coil and wire by grade, dimensions, finish, processing and RFQ requirements.",
    "category": "Stainless Steel",
    "readTime": "8 min read",
    "quickAnswer": "Start by defining the stainless product form—coil, plain sheet, slit coil or wire—then state the exact grade or standard, thickness or wire diameter, width or sheet size, surface finish, quantity, processing, packing and certificate requirements. Grade and finish are separate decisions, and any substitution should be approved against the project's service environment and fabrication process.",
    "sections": [
      {
        "heading": "Do not buy 'stainless steel' as one generic material",
        "body": [
          "This stainless steel coil, sheet and wire selection guide starts with a simple point: a request that says only 'stainless steel, 2 mm' leaves major decisions unresolved. Stainless steel is supplied in different product forms, grades, finishes and dimensions, and those details affect fabrication, appearance, corrosion performance, price and availability.",
          "SRK Steel's current stainless range includes [[SS Coil|/products/ss-coil]], [[SS Plain Sheet|/products/ss-plain-sheet]], [[SS Slitted Coil|/products/ss-slitted-coil]] and [[SS Wire|/products/ss-wire]]. Each form needs a different RFQ because the downstream process and packing are different.",
          "The first procurement step is therefore to identify what the fabricator actually needs to receive, not just the final material family shown on an architectural or mechanical note."
        ]
      },
      {
        "heading": "1. Choose the product form from the next manufacturing step",
        "body": [
          "Use coil when the buyer or processor needs continuous width for roll forming, cutting or repeated production. Use plain sheet when the fabrication process starts from fixed sheet dimensions. Use slit coil when a narrow strip is needed for forming or component production. Use wire when the requirement is defined by diameter and coil or spool format.",
          "Common market discussions often compare stainless steel grades such as 304 stainless steel and 316 stainless steel, but the project drawing, client specification, service environment and fabrication requirement should decide the actual designation. If the BOQ states 304, 316, 316L or another grade, quote that exact requirement instead of writing only 'SS'.",
          "For [[fabrication workshop|/applications/fabrication-workshops]] buyers, describing the next operation often helps resolve RFQ ambiguity faster than adding another generic sentence about the final application."
        ]
      },
      {
        "heading": "2. Grade is a service requirement, not a marketing label",
        "body": [
          "Stainless steel finishes are separate from grade. Two sheets of the same stainless grade can look and behave very differently at the surface. Mill finish, brushed or directional finishes, polished appearances and protective-film requirements should therefore be stated independently from grade.",
          "A higher-priced grade is not automatically 'better' for every application. Corrosion exposure, welding, temperature, hygiene, appearance and regulatory requirements all matter. The buyer should ask the consultant or end user to approve any alternative rather than treating grade substitution as a commercial decision.",
          "SRK Steel should be asked to confirm availability against the specified grade; the website should not be read as a promise that every grade, finish or dimension is stocked at all times."
        ]
      },
      {
        "heading": "3. Surface finish must be specified separately from grade",
        "body": [
          "Two sheets of the same stainless grade can look and behave very differently at the surface. Mill finish, brushed or directional finishes, polished appearances and protective-film requirements should therefore be stated independently from grade.",
          "Visible cladding or interior panels may need grain direction, consistent appearance and protective film to reduce handling damage. Industrial components may prioritise tolerance, cleanliness or process compatibility instead. The RFQ should describe the required finish using the project terminology rather than a vague phrase such as 'good finish'.",
          "If sheets will be laser cut or formed, ask the fabricator whether film type or finish direction affects processing. This is especially relevant on architectural work where mismatched grain direction becomes visible after installation."
        ]
      },
      {
        "heading": "4. Thickness, width and tolerance need a controlling dimension",
        "body": [
          "For coil and sheet, state nominal thickness, width and sheet length where relevant. For slit coil, identify parent thickness and the required slit width. For wire, state diameter and any tolerance or condition required by the project or manufacturing process.",
          "Where tolerance is critical, cite the controlling standard or drawing rather than assuming a supplier's standard tolerance will match the component. A small variation can matter in precision forming, welding fixtures or tight architectural joints even if it is irrelevant in a less sensitive fabrication.",
          "Quantity should also be expressed in a useful unit: sheets, coils, kilograms, tonnes, wire coils or spools. Mixing units across quotations makes commercial comparison harder."
        ]
      },
      {
        "heading": "5. Edge, slitting and cut-to-length requirements",
        "body": [
          "Slit coil enquiries should identify strip width, quantity, coil weight preference if relevant, and any edge or packing requirement. Plain sheet buyers should state whether standard sheet sizes are acceptable or whether cut-to-length / cut-to-size support is required.",
          "If edge condition matters to forming, welding or handling, make it explicit. Do not assume that every slitting line or cutting process produces the same edge characteristic.",
          "For a mixed coil and sheet order, separate processing instructions by line item. This prevents a note intended for one item from being applied to the entire purchase order."
        ]
      },
      {
        "heading": "6. Packing and surface protection can be part of product quality",
        "body": [
          "Stainless material can arrive technically compliant and still be difficult to use if it is scratched, wet, mixed by finish or poorly identified. Packaging should therefore match the product form and the buyer's handling process.",
          "For sheets, ask how bundles are protected and labelled. For coil, clarify coil orientation, handling expectations and weight limits where the receiving equipment imposes them. For wire, state coil or spool format if the production line requires a particular arrangement.",
          "On visible-finish work, protective film and handling instructions may be just as important as the nominal stainless grade. Include them before pricing so they are not treated as an afterthought."
        ]
      },
      {
        "heading": "7. Certificates and traceability should be requested before order",
        "body": [
          "If the project requires material certificates, heat or batch traceability, inspection documents or consultant submittals, include that requirement in the RFQ. Asking for documentation after material has been processed or dispatched can create avoidable delays.",
          "Use the exact certificate language stated by the project when possible. 'Certificate required' is less useful than identifying the document or standard the consultant expects.",
          "The [[Stainless Steel category|/categories/stainless-steel]] can be used to navigate the available product forms, while the specific purchase order should remain tied to the approved grade, finish, dimensions and documentation."
        ]
      },
      {
        "heading": "Common stainless-steel procurement mistakes",
        "body": [
          "Common mistakes include specifying grade but not finish, specifying thickness but not tolerance, ordering slit coil without width or packing details, assuming 304 and 316 are interchangeable, and using a sample appearance as the only finish definition.",
          "Another error is allowing different bidders to make different assumptions about film, certificates, cut sizes or coil weight. That creates a false price comparison. Issue the same technical RFQ to every supplier and record deviations separately.",
          "For broader project procurement, the [[Steel RFQ Checklist|/blogs/steel-rfq-checklist-for-contractors]] shows how to control grades, dimensions, finishes, drawings and delivery terms across mixed steel packages."
        ]
      },
      {
        "heading": "Service environment and fabrication method should be reviewed together",
        "body": [
          "Stainless selection is often discussed only as a corrosion question, but fabrication can be equally important. Welding, forming, deep drawing, polishing, food-contact use, chloride exposure or high-temperature service can all affect the grade, condition or finish that the designer specifies.",
          "If the project environment is coastal, chemically exposed or hygiene-sensitive, send that context with the specification rather than asking the supplier to recommend a grade from price alone. The final material choice should remain with the responsible designer or end user.",
          "For welded fabrication, also confirm whether the drawing controls low-carbon variants, filler materials, post-weld treatment or surface restoration. Those requirements sit outside a simple sheet or coil price and should be coordinated before production."
        ]
      },
      {
        "heading": "A practical comparison: same grade, different buying requirement",
        "body": [
          "Two buyers may both request the same stainless grade but need very different products. A cladding fabricator may want protected sheet with controlled finish and grain direction; a roll-former may need coil with a defined width and coil weight; a mesh producer may need wire by diameter and spool format.",
          "If all three requests are reduced to 'SS grade X', the supplier has to make assumptions that affect price and usability. Product form, dimensions, surface, processing and packing create the commercial specification around the grade.",
          "This is why the best stainless RFQs describe what will happen to the material after delivery, while still keeping the project grade and approval requirements fixed."
        ]
      },
      {
        "heading": "What to include in a stainless steel RFQ",
        "body": [
          "State product form, exact grade or standard, thickness or wire diameter, width and length where applicable, finish, protective film, tolerance if controlled, edge or slitting requirement, quantity, certificates, processing notes, packing, delivery city and target date.",
          "If equivalents are permitted, say so explicitly and state who must approve them. If they are not permitted, mark the grade and finish as fixed requirements.",
          "For UAE, GCC and selected Middle East project enquiries, send the complete requirement through the [[SRK Steel contact page|/contact]] rather than requesting a generic stainless-steel price."
        ]
      }
    ],
    "checklist": [
      "Product form: coil, sheet, slit coil or wire",
      "Exact grade / material standard",
      "Thickness or wire diameter",
      "Width, sheet length or slit width",
      "Surface finish and grain direction if relevant",
      "Protective film / edge / processing requirements",
      "Certificates and traceability",
      "Quantity, packing, delivery city and programme"
    ],
    "faqs": [
      {
        "q": "Is stainless steel grade the same as surface finish?",
        "a": "No. Grade defines the alloy specification, while finish describes the surface condition or appearance. Both should be stated separately in an RFQ."
      },
      {
        "q": "Can 304 and 316 stainless steel be substituted for each other?",
        "a": "Only with project approval. They have different alloy compositions and service suitability, so the specified grade should follow the drawing, environment and client requirements."
      },
      {
        "q": "What information is needed for stainless steel slit coil?",
        "a": "Provide grade, parent thickness, slit width, finish, quantity, coil or packing preference, edge requirement where important, certificates and delivery location."
      },
      {
        "q": "Should protective film be included in a stainless sheet RFQ?",
        "a": "Yes when surface appearance matters or the project specification requires it. State film or protection requirements before pricing rather than assuming they are standard."
      },
      {
        "q": "What certificates should I request for stainless steel?",
        "a": "Request the exact inspection or material documentation required by the project specification. Include the requirement in the RFQ so availability and traceability can be reviewed before order."
      }
    ],
    "nextStep": "Need stainless steel coil, sheet, slit coil or wire? Send SRK Steel the grade, dimensions, finish, processing, certificates, quantity and delivery requirements through the [[RFQ page|/contact]] so the quotation is based on a controlled specification.",
    "reviewer": "Reviewed by SRK Steel Team",
    "updated": "Updated 28 August 2026",
    "dateModified": "2026-08-28"
  },
  {
    "slug": "drywall-partition-system-buying-guide",
    "image": "/products/drywall-partition-systems.jpg",
    "title": "Drywall Partition System Buying Guide: GI Studs, Tracks and Framing",
    "metaTitle": "Drywall Partition Guide UAE: GI Studs & Tracks",
    "metaDescription": "Specify drywall framing by stud/track profile, thickness, wall height, spacing, board system, fire/acoustic requirement and accessories.",
    "primaryKeyword": "drywall partition system buying guide",
    "secondaryKeywords": [
      "GI studs and tracks",
      "metal stud partition",
      "drywall framing",
      "galvanized studs and tracks",
      "partition track",
      "fitout steel framing",
      "drywall partition UAE",
      "fire-rated drywall"
    ],
    "excerpt": "A buyer guide to GI studs, tracks and drywall framing, including wall height, spacing, board system, acoustic/fire requirements and RFQ checks.",
    "category": "Interior Fitout",
    "readTime": "7 min read",
    "quickAnswer": "Buy drywall GI studs and tracks as part of an approved wall or ceiling assembly. Confirm profile type, section size, steel thickness, stud spacing, wall height, board layers, insulation, deflection-head detail, fire/acoustic requirement and accessories. Fire resistance and sound performance belong to the complete tested assembly, not to the metal framing alone.",
    "sections": [
      {
        "heading": "A drywall partition is a system, not just studs and tracks",
        "body": [
          "A metal stud partition looks simple because the main components are light GI studs and tracks. In a finished partition, however, performance comes from the complete assembly: drywall framing profile, stud spacing, board type and layers, insulation, fixings, joints, head detail and interfaces with floors, ceilings and services.",
          "SRK Steel's [[Dry Wall Partition Systems|/products/drywall-partition-systems]] range includes galvanized studs, tracks, channels, furring and accessories for fitout and interior framing enquiries. The project architect, consultant or approved system specification should define the wall build-up and performance requirement.",
          "For procurement, the safest approach is to buy against a wall type or partition schedule rather than a generic request for 'drywall metal'."
        ]
      },
      {
        "heading": "1. Start with wall height and partition type",
        "body": [
          "Wall height is a major framing input because taller partitions can require different stud sizes, thicknesses, spacing or bracing. A low office divider and a full-height corridor wall should not automatically use the same profile simply because both are gypsum partitions.",
          "Record each wall type separately. Note whether it is full height, stops at a suspended ceiling, forms a shaft or service enclosure, or supports fixtures. If the wall has doors, glazing, heavy wall-mounted items or large service penetrations, those details can affect framing around the opening.",
          "On [[Interior Fitout|/applications/interior-fitout]] projects, a partition schedule or marked-up plan usually gives the clearest quantity basis and helps avoid mixing different wall types in one line item."
        ]
      },
      {
        "heading": "2. Profile size and steel thickness must follow the assembly",
        "body": [
          "Stud width, flange geometry and steel thickness influence stiffness and compatibility with tracks and accessories. Do not compare quotations only by nominal stud width if one supplier has priced a different thickness or profile family.",
          "If the approved system identifies a specific stud or track designation, use that reference in the RFQ. Where the BOQ states gauge, include the underlying project specification because gauge terminology can vary by market and product system.",
          "Tracks should be compatible with the studs they receive, but the head, base and jamb details may not all be identical. Door openings and deflection heads can require specific tracks or reinforcement details."
        ]
      },
      {
        "heading": "3. Stud spacing is a design and board-system decision",
        "body": [
          "Fire-rated drywall performance belongs to the tested or assessed wall assembly. A 'fire-rated stud' on its own does not create a fire-rated wall. Fire resistance depends on board type and thickness, number of layers, stud profile, spacing, insulation, screw pattern, joints and perimeter detailing.",
          "Services, tile finishes, heavy fixtures or multiple board layers can also influence the wall design. If site teams change stud spacing to accommodate MEP runs or reduce waste, the change should be checked against the approved system.",
          "Quantity take-offs should therefore use the partition schedule and spacing shown on the drawings. A simple total square-metre figure does not define enough framing information for a controlled order."
        ]
      },
      {
        "heading": "4. Fire rating belongs to the tested wall assembly",
        "body": [
          "A 'fire-rated stud' on its own does not create a fire-rated wall. Fire resistance depends on the tested or assessed assembly, including board type and thickness, number of layers, stud profile, spacing, insulation, screw pattern, joints and perimeter detailing.",
          "If the project requires a fire rating, include the exact approved wall system or consultant specification in the submittal and RFQ. Do not replace stud thickness, spacing or board configuration without confirming that the system remains compliant.",
          "Procurement should also make clear whether fire-stopping at penetrations and perimeter joints belongs to the drywall package or another specialist."
        ]
      },
      {
        "heading": "5. Acoustic performance also depends on the complete build-up",
        "body": [
          "Sound performance is influenced by board layers, cavity depth, insulation, stud arrangement, rigid connections and sealing—not by the steel profile alone. Gypsum-industry guidance commonly treats air space, insulation and decoupling as part of acoustic control.",
          "If an STC or other acoustic target appears in the specification, send the complete approved wall type rather than asking for an 'acoustic stud'. The framing must be compatible with the tested or designed assembly used to achieve the target.",
          "This is especially relevant in offices, meeting rooms, healthcare, hospitality and education fitouts where adjacent room use can drive wall performance."
        ]
      },
      {
        "heading": "6. Deflection heads and structural movement need coordination",
        "body": [
          "Partitions that meet the underside of a slab or structure may need a head detail that allows building movement without loading the non-loadbearing wall. The exact detail depends on the project system and structural movement criteria.",
          "If a deflection track or special head arrangement is shown, include it as a separate component in the RFQ. Do not substitute ordinary floor track simply because the section width looks similar.",
          "Coordinate head tracks with fire stopping, acoustic seals and MEP penetrations before closing the wall. Late changes at the head can affect both performance and material quantities."
        ]
      },
      {
        "heading": "7. Accessories and openings should be quantified with the framing",
        "body": [
          "A partition package can include studs, floor/ceiling tracks, furring channels, channels, clips, connectors and other accessories. Door jambs, glazing openings and service penetrations may need additional framing or local reinforcement specified by the system designer.",
          "If support channels or MEP frames are also required, keep them separate from the drywall schedule. Our [[Strut Channel Buying Guide|/blogs/strut-channel-buying-guide]] explains why MEP strut should be selected by load and support detail rather than treated as interchangeable partition framing.",
          "For large fitout projects, identify material by floor or zone so deliveries can follow installation sequence and reduce double handling."
        ]
      },
      {
        "heading": "Common drywall framing procurement mistakes",
        "body": [
          "Typical mistakes include ordering studs and tracks from wall area alone, mixing different steel thicknesses between quotations, changing stud spacing without approval, treating fire/acoustic performance as a property of the metal stud, and forgetting deflection tracks or opening reinforcement.",
          "Another risk is buying before the partition schedule and door schedule are coordinated. Changes to wall height, door openings or service zones can materially affect framing quantities.",
          "Use controlled wall-type references in the BOQ and keep consultant-approved system data with the material submittal. That creates a clearer basis for technical review and price comparison."
        ]
      },
      {
        "heading": "Partition framing and ceiling framing should not be mixed casually",
        "body": [
          "Drywall packages can include wall studs and tracks as well as ceiling channels, furring and suspension components. They may all be light galvanized profiles, but they perform different functions and are not automatically interchangeable.",
          "Separate wall and ceiling materials in the take-off. For ceilings, include the approved framing layout, suspension spacing, hanger details and board system. For partitions, use the wall type, height, stud spacing and head detail. This makes material control much clearer on a multi-zone fitout.",
          "Where a ceiling also carries MEP services, confirm which supports belong to the ceiling system and which require independent MEP support. Overloading light framing with services that were never part of the approved assembly can create performance and coordination problems."
        ]
      },
      {
        "heading": "A practical fitout example: one floor, four wall types",
        "body": [
          "Imagine an office floor with standard partitions, meeting-room acoustic walls, corridor fire-rated walls and glazed-door openings. Buying one stud and track combination for the whole floor may look efficient, but the approved wall types can require different framing, board layers, insulation or head details.",
          "A better procurement schedule lists each wall type separately, shows linear metres or area, identifies stud/track profile and thickness, and notes the relevant board and performance system. Door and glazing openings are counted with their local framing requirements instead of being treated as simple deductions from wall area.",
          "This wall-type approach also improves delivery planning because material can be labelled by zone and installation sequence rather than arriving as one undifferentiated pile of profiles."
        ]
      },
      {
        "heading": "What to include in a drywall partition framing RFQ",
        "body": [
          "State project location, wall type reference, stud and track profile, steel thickness, lengths, stud spacing, wall height, board-system notes, fire/acoustic requirement where applicable, deflection-head detail, accessories, quantity and delivery programme.",
          "Attach the partition plan, wall schedule and relevant details for doors, glazing or special heads. If a system is still under consultant review, identify provisional quantities rather than presenting them as approved construction information.",
          "For broader commercial and fitout packages, review the [[Commercial Construction application|/applications/commercial-construction]] and send the final RFQ through [[SRK Steel|/contact]]."
        ]
      }
    ],
    "checklist": [
      "Partition / wall-type reference",
      "Stud and track profile sizes",
      "Steel thickness / approved gauge",
      "Wall height and stud spacing",
      "Board layers and insulation notes",
      "Fire / acoustic system requirement",
      "Deflection head and opening details",
      "Accessories, quantities, delivery floor/zone"
    ],
    "faqs": [
      {
        "q": "Does thicker metal stud automatically give a better drywall partition?",
        "a": "Not automatically. Stud thickness, profile, spacing and wall height must work with the approved partition assembly and required performance."
      },
      {
        "q": "Can a drywall stud or track have a fire rating by itself?",
        "a": "No. Fire resistance applies to the complete tested or assessed wall assembly, including boards, framing, insulation, fixings, joints and perimeter details."
      },
      {
        "q": "What determines stud spacing in a drywall wall?",
        "a": "The approved wall system, wall height, board configuration, loading and project details determine stud spacing. It should not be changed solely for material savings."
      },
      {
        "q": "What is a deflection track used for?",
        "a": "It can be part of a head detail that accommodates structural movement above a non-loadbearing partition. Use the project-approved detail rather than substituting ordinary track."
      },
      {
        "q": "What drawings should I send for a drywall framing quotation?",
        "a": "Send the partition plan, wall-type schedule, wall heights, stud/track details, door and glazing openings, special head details, quantities and relevant fire/acoustic notes."
      }
    ],
    "nextStep": "Planning an interior fitout or commercial partition package? Send SRK Steel the partition schedule, wall heights, framing profiles, thicknesses, accessories and delivery zones through the [[RFQ page|/contact]] so the quotation follows the actual wall types.",
    "reviewer": "Reviewed by SRK Steel Team",
    "updated": "Updated 28 August 2026",
    "dateModified": "2026-08-28"
  },
  {
    "slug": "steel-rfq-checklist-for-contractors",
    "image": "/banners/products-banner.webp",
    "title": "Steel RFQ Checklist for Contractors and Procurement Teams",
    "metaTitle": "Steel RFQ Checklist UAE: Grades, Coatings & Delivery",
    "metaDescription": "Use this steel RFQ checklist for UAE projects. Define product, grade, dimensions, coating, quantity, drawings, certificates, packing and delivery scope.",
    "primaryKeyword": "steel RFQ checklist",
    "secondaryKeywords": [
      "steel quotation request",
      "steel supplier RFQ UAE",
      "steel procurement checklist",
      "steel BOQ",
      "material grade specification",
      "mill certificate",
      "steel delivery in UAE",
      "steel supplier quotation"
    ],
    "excerpt": "A practical steel RFQ checklist covering product definition, grades, dimensions, coatings, drawings, certificates, quantity, packing and delivery.",
    "category": "Procurement & RFQ",
    "readTime": "8 min read",
    "quickAnswer": "A strong steel RFQ gives every bidder the same technical and commercial basis: product form, grade or standard, dimensions, thickness, finish or coating, quantity, drawings/BOQ revision, certificates, processing, packing, delivery location and required date. Separate mandatory requirements from acceptable alternatives and record supplier deviations before comparing price.",
    "sections": [
      {
        "heading": "A low price is useful only when the quotation is technically comparable",
        "body": [
          "A steel quotation request often starts with a short email: 'Please quote best price for attached BOQ.' The problem is that the steel BOQ may leave grade, finish, tolerance, cutting, certification or delivery assumptions open. Each supplier fills those gaps differently, so the procurement team ends up comparing several different scopes under one product description.",
          "A controlled steel procurement checklist solves that problem by giving every bidder the same information and asking deviations to be stated clearly. The goal is not to create paperwork for its own sake. It is to make technical compliance visible before commercial ranking.",
          "SRK Steel supplies products across [[mild steel|/categories/mild-steel-products]], [[stainless steel|/categories/stainless-steel]], [[galvanized steel|/categories/galvanized-steel]] and [[aluminium|/categories/aluminium]]. The RFQ details differ by product, but the procurement logic is the same."
        ]
      },
      {
        "heading": "1. Name the exact product form",
        "body": [
          "Start with a specific product: MS plate, GI coil, C purlin, stainless sheet, aluminium coil, strut channel or another defined item. Avoid family-only descriptions such as 'steel material' or 'GI item'.",
          "Product form matters because dimensions and processing are described differently. Coil needs thickness, width and coil quantity; plate needs thickness, width and length; purlins need section geometry and punching; wire needs diameter and coil/spool format.",
          "If you are unsure which product form matches the drawing, separate the technical clarification from the commercial RFQ rather than asking bidders to make different assumptions."
        ]
      },
      {
        "heading": "2. State material grade and the controlling standard",
        "body": [
          "Where the project specifies a material grade, include the exact designation and standard. Do not shorten a detailed requirement to 'MS', 'SS' or 'GI' if the drawing or specification is more precise.",
          "If equivalent grades are permitted, define who has authority to approve them and whether equivalence needs a technical submittal. If alternatives are not allowed, mark the grade as mandatory.",
          "This discipline is especially important when comparing stainless, structural steel or coated products, where superficially similar materials can have different mechanical, chemical or corrosion properties."
        ]
      },
      {
        "heading": "3. Dimensions need thickness, size and tolerance where relevant",
        "body": [
          "A dimensionally complete RFQ should state thickness, width, length, diameter, section size or other controlling dimensions for the specific product. For fabricated or cut items, include the finished dimensions and a drawing if geometry is not standard.",
          "Where tolerances matter to manufacturing or installation, cite them explicitly. A supplier's normal commercial tolerance may be acceptable for one application and unsuitable for another.",
          "Use consistent units across the BOQ. Mixing millimetres, inches, kilograms and tonnes without clear conversion rules increases the chance of estimating or order-entry errors."
        ]
      },
      {
        "heading": "4. Finish and coating must be measurable, not descriptive",
        "body": [
          "Terms such as 'corrosion resistant', 'outdoor finish' or 'good galvanized coating' are not controlled specifications. If the project defines zinc coating, paint system, surface finish, protective film or another treatment, put the actual requirement into the RFQ.",
          "For stainless steel, grade and surface finish should be separate lines of information. For galvanized products, identify the coating requirement or standard where specified. For painted/coated products, include colour and coating system if controlled by the project.",
          "This is how you prevent a lower-priced quotation from winning because it has silently priced a lighter or different finish."
        ]
      },
      {
        "heading": "5. Attach the latest drawing, BOQ and revision",
        "body": [
          "Drawings are valuable when product geometry, hole patterns, cuts, laps, openings or interfaces cannot be defined reliably in text. The drawing should have a visible revision and date so every bidder knows which document controls.",
          "If a 3D model, DXF/DWG or fabrication file is required for processing, identify which file is for quotation and which becomes production-controlled after approval. Procurement should not assume a preliminary model is automatically fabrication authority.",
          "For profile-driven products such as [[GI decking sheets|/blogs/how-to-choose-gi-metal-decking-sheets]] and [[C/Z purlins|/blogs/c-purlins-vs-z-purlins]], the drawing is often the quickest way to remove ambiguity around profile and connection details."
        ]
      },
      {
        "heading": "6. Quantity should be broken down in a way the supplier can price and pack",
        "body": [
          "If a mill certificate, material test report, compliance document, sample, mock-up or consultant submittal is required, tell suppliers before they quote. Documentation can affect sourcing, lead time and the material that is eligible for the project.",
          "For phased projects, show release quantities or forecast batches if they affect procurement. Suppliers can then review availability and delivery sequence rather than treating the entire project as one immediate shipment.",
          "If quantity is preliminary, label it as budgetary. A budget enquiry and a purchase-ready RFQ should not be presented as the same level of commitment."
        ]
      },
      {
        "heading": "7. Certificates, inspections and submittals belong in the price request",
        "body": [
          "If material certificates, test reports, compliance documents, samples, mock-ups or consultant submittals are required, tell suppliers before they quote. Documentation can affect sourcing, lead time and the material that is eligible for the project.",
          "Use the exact document name or project specification where possible. 'All certificates required' can be too vague for a supplier to price responsibly.",
          "Also define any inspection hold point or approval that must occur before cutting, coating or dispatch. This prevents commercial pressure from overtaking the technical approval sequence."
        ]
      },
      {
        "heading": "8. Processing and fabrication scope must be explicit",
        "body": [
          "Steel supply may include cutting, slitting, punching, drilling, bending or other processing. Put each operation into the line item and identify who provides the final cutting list or fabrication drawing.",
          "Do not compare raw stock from one supplier with processed material from another as though the unit rates are directly comparable. Make inclusions visible.",
          "For MEP supports, for example, our [[Strut Channel Buying Guide|/blogs/strut-channel-buying-guide]] shows why channel, accessories and support details should be scoped together rather than buying only a length of steel."
        ]
      },
      {
        "heading": "9. Packing and delivery can change the real project cost",
        "body": [
          "State delivery city, site access restrictions, unloading responsibility, preferred bundle or coil limits where relevant, labelling needs and required delivery date. For exports or cross-border supply, packing and documentation requirements should be confirmed separately.",
          "On a multi-floor or multi-zone site, ask whether bundles need identification by area. Correct sequencing can reduce crane time and internal rehandling.",
          "A lower ex-works price may not be the lowest delivered project cost if the quotation excludes transport, special packing or multiple planned deliveries."
        ]
      },
      {
        "heading": "10. Separate mandatory requirements from preferences",
        "body": [
          "A clear RFQ distinguishes 'must comply' requirements from items where alternatives are acceptable. This gives suppliers room to offer commercially useful options without weakening the technical basis of the main quotation.",
          "Ask every bidder to list deviations, exclusions and assumptions. A simple compliance table with 'Comply / Deviation / Not stated' can reveal differences before price comparison begins.",
          "If an alternative could save time or cost, route it through the project's approval process rather than changing the purchase basis informally."
        ]
      },
      {
        "heading": "A practical example: why identical tonnage does not mean identical quotation",
        "body": [
          "Imagine two suppliers both quote ten tonnes of galvanized secondary steel. Supplier A prices the specified thickness, coating, punching and labelled delivery by roof zone. Supplier B prices unpunched standard lengths with a different coating and one bulk delivery. The tonnage is the same; the scope is not.",
          "A disciplined RFQ makes those differences obvious before commercial evaluation. It also reduces late claims because cutting, coating, certificates and delivery responsibilities are recorded before the purchase order.",
          "That is the procurement value of detail: fewer assumptions, cleaner comparisons and a clearer handover to the site team."
        ]
      },
      {
        "heading": "Use a bid-comparison matrix before commercial ranking",
        "body": [
          "Once quotations arrive, create a simple matrix with the RFQ line items on the left and each supplier across the top. Check product, grade, dimensions, coating, processing, certificates, quantity, delivery, exclusions and validity before comparing totals.",
          "Mark each technical line as compliant, deviation or not stated. Resolve 'not stated' items before treating the quotation as equivalent. This prevents a low number from receiving commercial preference simply because a technical requirement was omitted from the offer.",
          "Keep approved alternatives in a separate column so the team can see both the specified-base price and any value-engineering option without mixing the two scopes."
        ]
      },
      {
        "heading": "Final RFQ review before you send",
        "body": [
          "Check that the product name, grade, dimensions, thickness, finish/coating, quantity, drawing revision, processing, certificates, packing, delivery location and required date are present. Confirm whether installation is included or material supply only.",
          "Then give every shortlisted supplier the same controlled package. If a clarification changes the scope, issue it to all bidders rather than updating only one conversation.",
          "When the requirement is ready, use the [[SRK Steel RFQ page|/contact]] and attach the relevant drawings or BOQ so the sales team can review the project on the same basis you intend to purchase it."
        ]
      }
    ],
    "checklist": [
      "Exact product form",
      "Grade / material standard",
      "Dimensions, thickness and tolerance",
      "Finish / coating / colour",
      "Quantity by usable unit",
      "Latest drawing / BOQ revision",
      "Cutting, slitting, punching or fabrication scope",
      "Certificates / inspections / submittals",
      "Packing and labelling",
      "Delivery location, programme and unloading scope"
    ],
    "faqs": [
      {
        "q": "What are the minimum details for a steel RFQ?",
        "a": "At minimum, provide product type, grade or material, dimensions, thickness, finish/coating, quantity, delivery location and required date. Add drawings, processing and certificates where the project requires them."
      },
      {
        "q": "Should every steel supplier receive the same RFQ?",
        "a": "Yes. A controlled package makes technical and commercial differences easier to identify and reduces hidden assumptions between bidders."
      },
      {
        "q": "When should drawings be attached to a steel quotation request?",
        "a": "Attach drawings when geometry, hole patterns, cuts, profiles, fabrication, tolerances or interfaces cannot be defined reliably in a short line-item description."
      },
      {
        "q": "How should supplier alternatives be handled?",
        "a": "Keep the specified requirement as the base quotation and ask suppliers to state alternatives separately. Any substitution should follow the project's technical approval process."
      },
      {
        "q": "Why include delivery and packing details in an RFQ?",
        "a": "Transport, bundle size, labelling, phased delivery and unloading responsibility can affect project cost and site handling even when the material unit rate is unchanged."
      }
    ],
    "nextStep": "Ready to issue a steel RFQ? Send SRK Steel the controlled BOQ, drawings, grade, dimensions, finish, quantity, processing, certificate and delivery requirements through the [[contact page|/contact]]. Clear inputs make it easier to return a clear commercial response.",
    "reviewer": "Reviewed by SRK Steel Team",
    "updated": "Updated 28 August 2026",
    "dateModified": "2026-08-28"
  }
];

export const getBlogPost = (slug: string) => blogPosts.find((post) => post.slug === slug);
