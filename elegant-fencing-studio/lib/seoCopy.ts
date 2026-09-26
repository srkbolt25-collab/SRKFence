import type { Application, CategoryInfo, Country, Product } from './data';
import { countries, products } from './data';
import { getProductKeywordProfile } from './keywordSeo';

const countryNotes: Record<string, { intro: string; logistics: string; sectors: string[]; compliance: string }> = {
  uae: {
    intro: 'UAE buyers often work on fast-moving projects in Dubai, Abu Dhabi, Sharjah and other Emirates, so a clear product list, grade, size and delivery timeline are important before quotation.',
    logistics: 'For UAE enquiries, share site location, unloading limitations, required delivery window and whether material certificates, packing, cutting or punching support should be discussed.',
    compliance: 'UAE project teams often ask for specification clarity, certificate discussion where applicable and documentation that matches drawing or BOQ language.',
    sectors: ['commercial construction', 'warehouses', 'fitout', 'MEP supports', 'roofing and cladding', 'fabrication'],
  },
  bahrain: {
    intro: 'Bahrain steel enquiries commonly come from construction, industrial maintenance, fabrication and fitout projects where product availability and packing details need to be confirmed early.',
    logistics: 'For Bahrain enquiries, include delivery city, packing preference, required delivery timeline and whether products are being ordered as one package or phased supply.',
    compliance: 'Bahrain buyers should mention the required grade, finish, coating, tolerances and any consultant-approved alternatives before procurement review.',
    sectors: ['industrial maintenance', 'commercial construction', 'roofing and cladding', 'fabrication', 'MEP supports'],
  },
  qatar: {
    intro: 'Qatar projects frequently compare galvanized profiles, stainless steel material, MEP support channels, decking sheets and coated products for Doha, Lusail and project zone requirements.',
    logistics: 'For Qatar enquiries, share product quantities, delivery city, packing expectations, project timeline and any inspection or certificate requirements mentioned in the BOQ.',
    compliance: 'Qatar buyers should clarify coating, finish and project approval requirements, especially for roofing, cladding, MEP and fitout packages.',
    sectors: ['infrastructure', 'commercial construction', 'fitout', 'MEP supports', 'roofing and cladding'],
  },
  kuwait: {
    intro: 'Kuwait RFQs usually require grade, thickness, finish, quantity and delivery city confirmation at the first stage so procurement teams can compare products correctly.',
    logistics: 'For Kuwait, include project city, product sizes, coating or finish, packing preference and whether the shipment relates to a new build, maintenance job or fabrication requirement.',
    compliance: 'Kuwait enquiries benefit from clear specification tables and drawing references, especially for sheets, coils, profiles and support systems.',
    sectors: ['industrial projects', 'fabrication', 'maintenance', 'commercial construction', 'roofing and cladding'],
  },
  'saudi-arabia': {
    intro: 'Saudi Arabia projects may involve larger quantities, phased delivery planning and drawing review for Riyadh, Jeddah, Dammam and Eastern Province requirements.',
    logistics: 'For Saudi Arabia enquiries, send quantity breakdowns, phased delivery expectations, packing details and whether approved alternatives may be considered.',
    compliance: 'Saudi project buyers should mention consultant requirements, certificate needs and whether the product must match a specific BOQ or drawing note.',
    sectors: ['large construction', 'industrial facilities', 'infrastructure', 'warehouses', 'fabrication'],
  },
  iraq: {
    intro: 'Iraq procurement teams often need product sizes, packing details, quantity breakdown and delivery coordination reviewed together for construction, oil and gas support and fabrication work.',
    logistics: 'For Iraq enquiries, share the product list, packaging needs, destination city, delivery plan, quantity breakdown and required supporting documents.',
    compliance: 'Iraq buyers should clearly mention the use case, grade, coating or finish and any material certificate expectations before quotation review.',
    sectors: ['oil and gas support', 'industrial projects', 'fabrication', 'construction', 'maintenance'],
  },
  oman: {
    intro: 'Oman buyers often need finish, exposure condition, grade and delivery city confirmed before procurement, especially for Muscat, Sohar, Salalah and coastal or industrial locations.',
    logistics: 'For Oman, mention whether the project is inland, coastal or industrial, and share coating, finish, packing and delivery city details with the RFQ.',
    compliance: 'Oman enquiries should include exposure condition and finish expectations for roofing, cladding, aluminium, galvanized or stainless products.',
    sectors: ['roofing and cladding', 'industrial zones', 'marine-adjacent work', 'fabrication', 'MEP supports'],
  },
  jordan: {
    intro: 'Jordan buyers usually need product matching by grade, size, finish, quantity and delivery location before final confirmation for Amman, Zarqa, Aqaba and project locations.',
    logistics: 'For Jordan enquiries, include delivery city, product list, size range, finish, quantity and any drawings or BOQ references available.',
    compliance: 'Jordan procurement teams should mention approved grades, drawing notes and whether equivalent profiles or alternative finishes can be reviewed.',
    sectors: ['commercial construction', 'fitout', 'fabrication', 'MEP supports', 'roofing and cladding'],
  },
};

const countryCategoryAngles: Record<string, Record<string, string>> = {
  uae: {
    'Mild Steel Products': 'UAE mild-steel enquiries often combine structural sections, sheet or plate material and fabrication requirements, so drawings, cut lengths and delivery sequencing should be clear before pricing.',
    'Stainless Steel': 'UAE stainless-steel RFQs can involve visible fitout, cladding and industrial fabrication, making grade, finish, protective film and fabrication route important commercial inputs.',
    'Galvanized Steel': 'UAE galvanized-steel enquiries frequently connect roofing, cladding, MEP support and fabrication items, so coating, profile, processing route and site delivery should be reviewed as one scope.',
    'Aluminium': 'UAE aluminium enquiries often relate to panels, cladding, roofing accessories and fabrication, where alloy/temper, finish, colour or protective film can be as important as thickness.',
  },
  bahrain: {
    'Mild Steel Products': 'Bahrain mild-steel procurement commonly supports fabrication, industrial maintenance and construction work, where exact section dimensions, cutting scope, packing and phased requirements should be identified early.',
    'Stainless Steel': 'Bahrain stainless-steel enquiries benefit from clear grade and finish selection for fabrication, maintenance and visible project work, with packing and surface protection stated before dispatch planning.',
    'Galvanized Steel': 'Bahrain galvanized-steel RFQs may combine roofing, cladding, support profiles and maintenance items, so coating, profile geometry, quantity split and packing need to be aligned with the project scope.',
    'Aluminium': 'Bahrain aluminium requirements for fabrication and finishing work should identify alloy/temper, surface condition, coated or plain form and packing expectations before commercial comparison.',
  },
  qatar: {
    'Mild Steel Products': 'Qatar mild-steel enquiries for infrastructure, commercial construction and support work are clearer when structural/fabrication drawings, exact section or plate dimensions and project-zone delivery details are supplied together.',
    'Stainless Steel': 'Qatar stainless-steel RFQs for fitout, architectural and industrial packages should separate grade, finish, dimensions and appearance requirements so technically different materials are not compared as one item.',
    'Galvanized Steel': 'Qatar galvanized-steel procurement often interfaces with roofing, cladding, MEP supports and project approvals, making coating, profile, consultant documentation and delivery zone especially useful in the RFQ.',
    'Aluminium': 'Qatar aluminium enquiries for cladding, panels and fitout should state alloy/temper, finish or colour system, dimensions and project approval requirements rather than relying on a generic aluminium description.',
  },
  kuwait: {
    'Mild Steel Products': 'Kuwait mild-steel RFQs frequently support industrial maintenance, workshop fabrication and commercial work, so size, grade, cutting/processing needs and delivery city should be resolved at enquiry stage.',
    'Stainless Steel': 'Kuwait stainless-steel procurement should identify corrosion/appearance duty, grade, finish and fabrication form, especially where workshop processing or maintenance replacement needs affect the material choice.',
    'Galvanized Steel': 'Kuwait galvanized-steel requirements for fabrication, roofing and maintenance should distinguish base dimensions from coating or finish and include any workshop handling or processing limitations.',
    'Aluminium': 'Kuwait aluminium enquiries for fabrication and building work should confirm alloy/temper, dimensions, surface protection and processing route, plus packing suitable for the planned handling method.',
  },
  'saudi-arabia': {
    'Mild Steel Products': 'Saudi Arabia mild-steel packages can involve larger quantities, structural/fabrication schedules and phased releases, so section/plate specifications and delivery stages should be separated clearly in the RFQ.',
    'Stainless Steel': 'Saudi Arabia stainless-steel enquiries may combine architectural, industrial and fabrication requirements; grade, finish, dimensions, quantity releases and approval documents should therefore be controlled from the start.',
    'Galvanized Steel': 'Saudi Arabia galvanized-steel procurement can span roofing, cladding, secondary steel and support systems, making coating/profile details, larger quantity planning and phased delivery information commercially important.',
    'Aluminium': 'Saudi Arabia aluminium RFQs for cladding, panels and fabrication should connect alloy/temper and finish with project approvals, quantity stages and delivery planning instead of treating all coil or sheet as equivalent.',
  },
  iraq: {
    'Mild Steel Products': 'Iraq mild-steel enquiries for construction, industrial support and fabrication benefit from a clear item-by-item quantity split, packing requirement and destination plan alongside the technical dimensions.',
    'Stainless Steel': 'Iraq stainless-steel RFQs should combine grade, finish and fabrication form with packing, supporting documents and destination requirements, particularly where material will move through multiple handling stages.',
    'Galvanized Steel': 'Iraq galvanized-steel procurement should state coating/profile requirements together with quantity breakdown, packing and destination so the material and logistics scope are reviewed as one supply package.',
    'Aluminium': 'Iraq aluminium enquiries for fabrication and project work should specify alloy/temper, finish, dimensions, packing and destination, with any protective-film or coated-surface requirements stated before quotation.',
  },
  oman: {
    'Mild Steel Products': 'Oman mild-steel enquiries for industrial zones, fabrication and building work should identify grade, exact dimensions, finish and project-defined exposure requirements where they affect downstream protection.',
    'Stainless Steel': 'Oman stainless-steel selection can be sensitive to the project-defined corrosion environment, so grade, finish, fabrication route and any exposure criteria should be supplied rather than inferred from location alone.',
    'Galvanized Steel': 'Oman galvanized-steel RFQs for roofing, cladding and industrial work should connect coating/finish requirements with the project-defined exposure condition, profile geometry and delivery location.',
    'Aluminium': 'Oman aluminium enquiries for cladding and fabrication should identify alloy/temper, coating or finish, protective film and any project-defined exposure requirement together with the delivery city.',
  },
  jordan: {
    'Mild Steel Products': 'Jordan mild-steel procurement for fabrication and commercial projects is easier to compare when exact sizes, grades, processing needs and approved-equivalent rules are stated with the delivery destination.',
    'Stainless Steel': 'Jordan stainless-steel RFQs should distinguish grade, finish, dimensions and fabrication use, while any proposed equivalent remains subject to the project or fabricator approval process.',
    'Galvanized Steel': 'Jordan galvanized-steel enquiries for roofing, fabrication and support work should state coating, profile or form, processing needs and whether approved alternatives may be reviewed.',
    'Aluminium': 'Jordan aluminium procurement for fabrication, cladding and finishing work should state alloy/temper, finish or colour, dimensions and approved-equivalent rules with the required delivery location.',
  },
};

function productNames(slugs: string[]) {
  return slugs.map((slug) => products.find((product) => product.slug === slug)?.name).filter(Boolean).join(', ');
}

const productDecisionNotes: Record<string, string> = {
  'ms-hollow-sections': 'Confirm whether the drawing calls for square, rectangular or round hollow section, then match outside size, wall thickness and length. For fabricated frames, also flag cutting, welding, drilling or downstream coating requirements before material is ordered.',
  'ms-beams': 'Use the exact beam designation or drawing dimensions rather than only a generic beam name. Check section depth, flange/web dimensions, length, grade and whether the requirement includes cutting, holes, plates or connection preparation.',
  'ms-channels': 'Confirm the channel designation, web depth, flange size, thickness or weight series, length and intended support duty. Structural channels and lighter framing channels should not be treated as interchangeable without checking the drawing.',
  'ms-bars': 'State the required bar form and dimensions clearly because flat, round, square and other bar forms are purchased differently. Include cross-section size, length, grade, quantity and any cutting or machining allowance.',
  'ms-angles': 'Specify equal or unequal angle, leg dimensions, thickness, length and grade. If angles form frames, supports or bracing, include hole, cutting and finish requirements so fabrication assumptions are not made during quotation.',
  'hr-coils-ms': 'For hot-rolled coil, confirm thickness, width, grade, coil weight or tonnage, edge condition and downstream use. Surface condition and dimensional tolerance should be checked against the fabrication or processing requirement rather than assumed from the product name.',
  'cr-coils-ms': 'For cold-rolled coil, confirm thickness, width, grade, finish or surface expectation, coil weight and processing route. Tighter appearance or forming requirements should be stated explicitly because they can affect the suitable material condition.',
  'ms-sheets': 'Confirm sheet thickness, width, length, grade and whether standard sheets or cut-to-size pieces are required. Add flatness, surface, cutting, bending or fabrication notes when the sheet will become a finished component.',
  'ms-plates': 'Plate RFQs should identify thickness, plate size, grade, quantity and cutting profile. For base plates, brackets or machine parts, attach a drawing when holes, slots, bevels or shaped cutting are part of the requirement.',
  'mild-steel-gratings': 'Grating selection depends on panel size, load duty, bearing-bar arrangement, cross-bar spacing and finish. If serration, banding, clips, cut-outs or galvanizing are required, include them with the layout or drawing.',
  'decking-sheets-ms': 'Match deck profile, thickness, sheet length, support spacing and slab design to the structural drawing. Where composite action is intended, coordinate stud layout, bearing condition, overlaps and concrete design requirements with the project engineer.',
  'ms-shear-studs': 'Confirm stud diameter, overall height, quantity and the deck/slab system they belong to. Welding method, ferrule requirements and installation sequencing should follow the approved structural detail rather than a generic stud specification.',
  'ss-coil': 'State the exact stainless grade, thickness, width, finish, coil weight and intended process. Grade, surface finish and corrosion environment are separate decisions; do not assume a visually similar stainless coil is technically equivalent.',
  'ss-wire': 'Wire enquiries should include diameter, stainless grade, surface condition, coil or spool format and intended forming or mesh use. If tensile, temper, straightness or finish requirements appear on the drawing, include them in the RFQ.',
  'ss-plain-sheet': 'Confirm stainless grade, thickness, sheet size and surface finish, especially for visible architectural or food/industrial fabrication work. Protective film, grain direction, cutting and edge condition should be stated where appearance matters.',
  'ss-slitted-coil': 'Specify parent thickness, stainless grade, slit width, finish, coil weight and packing expectation. Narrow-strip work should also identify edge quality and whether the strip will be roll-formed, stamped, bent or welded downstream.',
  'gi-coil': 'The coating requirement is central to this product: confirm zinc coating mass within the project-specified range, substrate thickness, width, grade and coil quantity. Also state whether surface treatment, spangle appearance, oiling or passivation is controlled by the specification.',
  'ppgi-coil': 'Pre-painted coil RFQs should identify base metal/coating, thickness, width, colour reference, paint system and finish expectation. Where the project controls gloss, topcoat/backcoat or exposure class, include those values instead of requesting colour alone.',
  'aluzinc-coil': 'Confirm substrate thickness, width, coating requirement, finish and end use. Aluzinc is commonly selected for corrosion-resistant sheet applications, so exposure conditions and any downstream painting or forming should be included in the selection review.',
  'pvdf-coils': 'PVDF-coated coil selection should be driven by the approved colour, coating system, substrate, thickness, width and exterior exposure requirement. Architectural work may also control gloss, colour tolerance and protective film, so these should be checked before procurement.',
  'gi-plain-sheet': 'Specify sheet thickness, width, length, zinc coating requirement, grade and quantity. For fabricated panels or covers, add cutting, bending, protective surface and appearance requirements rather than relying on a generic GI sheet description.',
  'gi-slitted-coils': 'Confirm galvanized parent thickness, slit width, coating requirement, coil weight and packing. If the strip will feed a roll-forming or stamping line, identify edge quality, coil ID/OD or handling constraints where the production process requires them.',
  'ppgi-slitted-coils': 'For pre-painted slit strip, specify colour, coating system, thickness, slit width, coil weight and edge/packing requirements. The downstream forming process should be mentioned because tight bends can affect coating and width-selection decisions.',
  'ppgi-plain-sheet': 'State thickness, sheet size, colour reference, coating system and finish. For visible cladding or panels, confirm film protection, colour consistency and cutting/bending needs before ordering.',
  'roof-insulated-panels': 'Roof sandwich-panel RFQs should identify panel thickness, external/internal skin material and thickness, insulation core requirement, roof profile, joint detail, length and quantity. Fire, thermal, acoustic and span requirements must follow the project specification.',
  'wall-insulated-panels': 'Wall sandwich panels should be selected by panel thickness, skin material/finish, core requirement, joint profile, orientation, length and façade detail. Include fire, thermal, acoustic and hygiene requirements when they are specified for the building envelope.',
  'corrugated-roofing-sheet': 'Match profile pitch/depth, sheet thickness, coating or colour, length, side/end lap and support spacing to the roof drawing. Roof slope, exposure and fastener system should be considered together rather than choosing sheet thickness in isolation.',
  'corrugated-wall-sheet': 'Wall cladding sheets should be specified by profile, thickness, coating/colour, length, orientation and support spacing. Corner, base, head and opening flashings should be coordinated with the same profile and finish.',
  'corrugated-fence-sheet-panel': 'Fence-sheet selection depends on profile, thickness, coating/colour, panel length, post spacing and wind exposure. Add top/bottom trims, overlap, fastener and framing details if the fencing package includes them.',
  'corrugated-curve': 'Curved corrugated sheets require the base profile plus the required radius, arc length, sheet length, thickness and coating/colour. The curve must match the supporting frame, so a drawing or radius schedule is preferable to a verbal description.',
  'corrugated-ridge': 'Ridge pieces should match the roof-sheet profile, roof angle, cover width, length, coating and colour. Confirm overlap and fixing detail with the roof system so the ridge is not quoted as a generic folded strip.',
  'gutter-and-flashing': 'Gutters and flashings are drawing-led items: confirm developed width, thickness, bend geometry, length, material/coating and colour. Downpipe outlets, stop ends, laps and corner pieces should be listed when they form part of the package.',
  'gi-decking-sheet': 'For 45/150 or 75/305 decking, confirm the exact profile, sheet thickness, length, support spacing, coating and quantity from the structural drawing. Composite-slab work should also coordinate shear studs, bearing, overlaps and concrete design notes.',
  'shear-studs': 'Confirm stud diameter, height, quantity and the decking/slab detail they connect to. Welding and installation requirements should be checked against the approved structural drawing and the selected deck profile.',
  'c-purlins': 'C purlin RFQs should include section depth, flange, lip, thickness, length, hole schedule and finish. They are commonly used for straightforward roof or wall support runs, but final spacing and load suitability must follow structural design.',
  'z-purlins': 'Z purlins should be specified by section depth, flange, lip, thickness, length, lap length, punching and finish. Lapped or continuous-span arrangements depend on the structural design, so the lap and hole schedule should come from approved drawings.',
  'drywall-partition-systems': 'Drywall framing selection depends on stud/track width, gauge or thickness, length, stud spacing, wall height and board system. Fire, acoustic, deflection-head and service-opening requirements can change the framing package, so include the partition detail.',
  'strut-track': 'Strut/support channel RFQs should identify channel size, thickness, slot pattern, finish, length and accessory list. Load, span, fixing method and indoor/outdoor exposure should be reviewed with the support detail instead of selecting by channel size alone.',
  'gi-pipe': 'Confirm nominal/outer diameter, wall thickness or schedule, length, galvanizing requirement, end condition and quantity. If the pipe is threaded, grooved, welded or used in a support/fabrication assembly, state that process in the RFQ.',
  'aluminium-coil': 'Aluminium coil enquiries should identify alloy/temper, thickness, width, finish, coil weight and intended forming or cladding use. Protective film, anodizing/painting downstream and surface appearance should be included where relevant.',
  'aluminium-plain-sheet': 'Specify alloy/temper, thickness, sheet size, finish and quantity. For visible panels or fabrication, include protective film, grain/brush direction, cutting and bending requirements when appearance or forming is controlled.',
  'pre-painted-aluminium-coils': 'Pre-painted aluminium coil should be specified by alloy/temper, thickness, width, colour reference, coating system and finish. Exterior cladding work may also control gloss, colour tolerance and protective film.',
  'pfmb-psmr-aluminium-alloy-3003-h14-coils': 'For 3003-H14 coated aluminium coil, confirm the exact coating/film requirement stated by the project, substrate thickness, width, coil weight and end use. Where PSMR/PFMB protection is specified, include the required film/coating detail rather than assuming a standard treatment.',
};

const categoryDecisionGuidance: Record<string, { paragraphs: string[]; buyingPoints: string[] }> = {
  'Mild Steel Products': {
    paragraphs: [
      'Mild steel procurement is usually driven by section geometry, grade, thickness or weight series, length and fabrication scope. Structural profiles, sheets, plates, coils, gratings, decking and studs should be quoted from their own drawing or BOQ references rather than grouped under one generic MS description.',
      'For beams, channels, angles and hollow sections, identify the exact section designation and any cutting, holes, welding or coating. For sheets, plates and coils, thickness, width/size, grade, surface condition and downstream processing are more useful than a simple tonnage request.',
      'Packages for warehouses and fabrication work often combine primary sections, secondary supports, plates and sheet material. Sending the full item list together helps check dimensional compatibility, processing requirements and delivery sequencing before quotation.',
      'Where the project allows alternatives, state whether equivalent grades or nearby dimensions may be reviewed. Substitutions should remain subject to the project engineer or consultant rather than being assumed by the supplier.',
    ],
    buyingPoints: ['Exact section/profile or sheet/plate dimensions', 'Grade and thickness/weight series', 'Length, cutting, holes or fabrication scope', 'Surface/finish or downstream coating requirement', 'Quantity, drawings/BOQ and delivery sequence'],
  },
  'Stainless Steel': {
    paragraphs: [
      'Stainless steel selection starts with grade and corrosion/appearance requirement, then thickness or diameter, size, finish and fabrication route. Coil, wire, plain sheet and slit strip should not be treated as interchangeable forms even when the alloy grade is the same.',
      'Visible architectural work may require a controlled surface finish, protective film and grain direction, while industrial fabrication may prioritise grade, weldability, dimensional tolerance and corrosion environment. Put these requirements in the RFQ instead of requesting only “SS material”.',
      'For coils and slit coils, include width, coil weight, edge and packing requirements. For sheets, include sheet size and finish. For wire, include diameter, coil/spool form and any temper or forming requirement shown in the specification.',
      'If a project proposes a grade substitution, obtain technical approval first. Stainless grades can look similar while performing differently in corrosion, forming and welding conditions.',
    ],
    buyingPoints: ['Exact stainless grade', 'Thickness/diameter and width/size', 'Surface finish and protective film if required', 'Coil, sheet, slit or wire form', 'Fabrication environment, quantity and delivery location'],
  },
  'Galvanized Steel': {
    paragraphs: [
      'Galvanized and coated-steel products should be selected by base thickness plus coating/paint system, profile geometry and project exposure. GI, PPGI, Aluzinc, insulated panels, corrugated sheets, decking, purlins, drywall profiles, strut systems and GI pipe each need different RFQ details.',
      'For coils and sheets, include coating mass or paint system where specified, width/size and processing route. For profiled sheets and decking, add profile, length, laps and support spacing. For purlins and strut, add section dimensions, holes/slots and finish.',
      'Roofing and cladding packages should be coordinated as a system: sheets, ridges, curves, gutters, flashings, purlins and fastener details need compatible profiles and finishes. Insulated panels also require core, skin and joint information from the envelope specification.',
      'Coating requirements should follow the drawing, BOQ and exposure condition. A thicker substrate does not automatically compensate for an incorrect coating or paint specification.',
    ],
    buyingPoints: ['Base thickness and coating/paint requirement', 'Profile/section dimensions and length', 'Colour/finish where applicable', 'Laps, holes, accessories or joint details', 'Drawing/BOQ, quantity and site exposure'],
  },
  'Aluminium': {
    paragraphs: [
      'Aluminium procurement should identify alloy and temper before thickness, width/size and finish. Plain, pre-painted and protected/coated aluminium products can have similar dimensions but different forming, appearance and exterior-performance requirements.',
      'For coil-based fabrication, include coil width/weight, surface protection and downstream forming. For plain sheet, include sheet size, finish, protective film and cutting/bending. For pre-painted material, add colour reference and coating-system requirements from the façade or roofing specification.',
      'Architectural cladding and panel work may control flatness, colour consistency, gloss and film protection in addition to alloy and thickness. These appearance requirements should be stated before pricing when they are project-critical.',
      'If an equivalent alloy, temper or coating is proposed, confirm that the consultant or fabricator accepts the substitution before procurement.',
    ],
    buyingPoints: ['Alloy and temper', 'Thickness, width or sheet size', 'Finish, coating or colour reference', 'Protective film and forming/cutting needs', 'Quantity, application and delivery location'],
  },
};

function productDecisionNote(product: Product) {
  return productDecisionNotes[product.slug] || `Confirm the exact ${product.name} dimensions, material/grade, thickness, finish, quantity and processing requirements shown on the drawing or BOQ before ordering.`;
}

export function productUseAnswer(product: Product) {
  return `${product.name} is commonly used for ${product.applications.join(', ').toLowerCase()}. For procurement, confirm the exact dimensions, grade/material, thickness, finish or coating, quantity and drawing/BOQ reference. The product should be selected against its real site or fabrication duty rather than by name alone.`;
}

export function productBuyerGuide(product: Product) {
  const specSummary = product.specs.map((spec) => `${spec.label}: ${spec.value}`).join('; ');
  return [
    productDecisionNote(product),
    `The current catalogue checkpoints for ${product.name} are ${specSummary}. Use these as an RFQ checklist and replace any generic wording with the exact values shown on the project drawing, consultant specification or fabrication schedule.`,
    `Typical applications on this page are ${product.applications.join(', ').toLowerCase()}. Site exposure, structural/support duty, appearance, installation method and downstream fabrication can change the correct grade, coating, finish or accessory requirement, so the application should be stated with the material request.`,
    `For regional procurement, add delivery country and city, quantity, packing, timeline, certificate/document requirements and any cutting, punching, slitting or special handling. If an equivalent grade, coating or size may be considered, state that clearly and keep final acceptance subject to the project specification or consultant approval.`,
  ];
}

export function productSelectionChecks(product: Product) {
  const specChecks = product.specs.slice(0, 3).map((spec) => `${spec.label}: ${spec.value}`);
  return [
    ...specChecks,
    `Application check: confirm suitability for ${product.applications.join(', ').toLowerCase()} against the project drawing and site condition.`,
    'Approval check: any equivalent grade, size, coating or finish should remain subject to project/consultant acceptance.',
  ];
}

export function mainProductFaqs(product: Product) {
  return [
    {
      q: `What should I check before selecting ${product.name}?`,
      a: productDecisionNote(product),
    },
    {
      q: `How can I request an RFQ for ${product.name}?`,
      a: `Send the product name, exact size/profile, grade or material, thickness, finish/coating, quantity, drawing or BOQ reference and delivery location. Add any cutting, punching, packing, slitting, colour or certificate requirement that applies to the project.`,
    },
    {
      q: `Which projects use ${product.name}?`,
      a: `${product.name} is commonly requested for ${product.applications.join(', ').toLowerCase()}. Final suitability depends on the drawing, site condition, finish/coating requirement and consultant or project specification.`,
    },
    {
      q: `Can SRK Steel review regional enquiries for ${product.name}?`,
      a: `Yes. SRK Steel reviews UAE, GCC and selected Middle East enquiries for ${product.name}, including Bahrain, Qatar, Kuwait, Saudi Arabia, Iraq, Oman and Jordan. Share the delivery city, packing expectation and required timeline with the RFQ.`,
    },
    {
      q: `What information helps avoid quotation delays for ${product.name}?`,
      a: `A clear RFQ with exact dimensions, grade/material, finish or coating, quantity, delivery location, drawings and any certificate or processing requirement reduces back-and-forth clarification.`,
    },
  ];
}

export type ProductAuthorityProfile = {
  eyebrow: string;
  heading: string;
  answer: string;
  paragraphs: string[];
  rfqChecks: string[];
  comparisonRows: string[][];
  standardsNote: string;
};

function rfqDetailsFor(product: Product) {
  return product.specs.find((spec) => /RFQ details/i.test(spec.label))?.value
    || product.specs.map((spec) => spec.label).join(', ');
}

function specWhyItMatters(label: string) {
  const key = label.toLowerCase();
  if (key.includes('material') || key.includes('grade')) return 'Defines the material or grade basis that the quotation must match.';
  if (key.includes('supply') || key.includes('profile') || key.includes('form')) return 'Defines the product form, profile or supply configuration required for the job.';
  if (key.includes('use') || key.includes('application')) return 'Connects the product specification with the real fabrication, installation or project duty.';
  if (key.includes('rfq')) return 'Prevents incomplete or non-comparable quotations by stating the purchase-ready inputs.';
  if (key.includes('thickness') || key.includes('size') || key.includes('width') || key.includes('length')) return 'Controls dimensional compatibility with drawings, processing equipment and installation requirements.';
  if (key.includes('finish') || key.includes('coating')) return 'Controls appearance, corrosion protection or downstream processing requirements where specified.';
  return 'Helps buyers compare quotations against the same technical and commercial requirement.';
}

export function productAuthorityProfile(product: Product): ProductAuthorityProfile {
  const category = categoryDecisionGuidance[product.category];
  const rfqDetails = rfqDetailsFor(product);
  const comparisonRows = product.specs.map((spec) => [spec.label, specWhyItMatters(spec.label), spec.value]);
  comparisonRows.push(
    ['Quantity & release plan', 'Affects sourcing, packing, commercial terms and delivery planning.', 'State total quantity and any phased or partial-delivery requirement.'],
    ['Documentation', 'Project acceptance may depend on the correct material documents.', 'State certificate, traceability or project-document requirements before quotation.'],
    ['Delivery', 'Destination and receiving conditions affect packing and logistics.', 'State country, city/site, receiving constraints and required delivery window.'],
  );
  const buyingPoints = category?.buyingPoints || ['Exact dimensions/profile', 'Grade/material', 'Finish/coating', 'Quantity', 'Drawing/BOQ and delivery location'];
  return {
    eyebrow: `${product.name} Procurement Guide`,
    heading: `How to Specify ${product.name} Before Requesting a Quote`,
    answer: `A purchase-ready ${product.name} enquiry should state ${rfqDetails}. Add the intended application, drawing or BOQ reference, required documents and delivery location so quotations can be compared on the same technical and commercial basis.`,
    paragraphs: [
      productDecisionNote(product),
      category?.paragraphs?.[0] || `${product.name} should be selected against the actual project or fabrication duty, not only by product name.`,
      `SRK Steel supplies and sources ${product.name} against project enquiries, with review based on the stated specification, quantity, processing or accessory requirements, documentation and delivery scope.`,
      `Where a drawing, consultant specification or approved material schedule names a grade, standard, coating, finish or tolerance, use that exact requirement in the RFQ. Proposed equivalents should remain subject to the project approval process.`,
    ],
    rfqChecks: [
      ...buyingPoints.slice(0, 5),
      `Product-specific RFQ details: ${rfqDetails}.`,
    ],
    comparisonRows,
    standardsNote: `Use the exact standard, grade, coating, finish and revision named by the project when one is specified for ${product.name}. SRK Steel can review sourcing options against the stated requirement, but final compliance, supporting documents and any proposed equivalent should be confirmed for the live enquiry before order placement.`,
  };
}

export function productAuthorityFaqs(product: Product) {
  const rfqDetails = rfqDetailsFor(product);
  return [
    {
      q: `How should I compare ${product.name} quotations?`,
      a: `Compare like-for-like specification points first, including ${rfqDetails}. Then compare quantity basis, processing or accessories, documents, packing and delivery scope. A lower price is not directly comparable when the technical or logistics basis is different.`,
    },
    {
      q: `What standards or certificates should I request for ${product.name}?`,
      a: `Use the exact standard, grade, certificate or material-document requirement stated by the project, consultant, drawing or approved schedule. Do not assume a standard is mandatory only because it is commonly associated with the product; include the project-controlled requirement in the RFQ.`,
    },
  ];
}

export function productFaqs(product: Product) {
  return [
    {
      q: `How can I request an RFQ for ${product.name}?`,
      a: `Send the product name, size, grade or material, thickness, finish, quantity, drawing or BOQ reference and delivery location. Add any cutting, punching, packing, slitting, coating or certificate requirement if it applies to your project.`,
    },
    {
      q: `Which projects use ${product.name}?`,
      a: `${product.name} is commonly requested for ${product.applications.join(', ').toLowerCase()}. Final suitability depends on the drawing, site condition, finish requirement and consultant or project specification.`,
    },
    {
      q: `Can SRK Steel help with GCC enquiries for ${product.name}?`,
      a: `Yes. SRK Steel reviews UAE and GCC enquiries for ${product.name}, including requirements from Bahrain, Qatar, Kuwait, Saudi Arabia, Iraq, Oman and Jordan. Share delivery city and packaging expectations with the RFQ.`,
    },
    {
      q: `What information helps avoid quotation delays for ${product.name}?`,
      a: `A clear RFQ with size, thickness, grade, finish, quantity, delivery location, drawings and any certificate or processing requirement helps reduce back-and-forth clarification.`,
    },
  ];
}

export function categoryGuide(category: CategoryInfo) {
  const categoryProducts = products.filter((product) => product.category === category.name);
  const names = categoryProducts.map((product) => product.name).join(', ');
  const specific = categoryDecisionGuidance[category.name];
  return {
    answer: `${category.name} includes ${names || 'steel products'}. Buyers should identify the exact product form first, then confirm dimensions, grade/material, thickness, finish/coating, quantity, drawing or BOQ reference and delivery location before requesting a quotation.`,
    paragraphs: specific?.paragraphs || [
      `${category.name} should be reviewed as a product family rather than a single generic item. Exact dimensions, grade, thickness, finish and accessory requirements should follow the project drawing and end use.`,
      `Send the complete item list where several related products are required so compatibility, processing and delivery sequencing can be reviewed together.`,
      `Use individual product pages for product-specific specification checkpoints and application pages when the material is being selected by project use.`,
      `For regional enquiries, add delivery city, timeline, packing, certificate needs and any processing requirement shown in the BOQ or drawing.`,
    ],
    buyingPoints: specific?.buyingPoints || [
      'Confirm exact product/profile and dimensions.',
      'Mention grade/material, thickness and finish/coating.',
      'Share quantity, delivery city and timeline.',
      'Attach BOQ, project specification or drawings.',
      'List accessories and processing requirements.',
    ],
  };
}

export function categoryFaqs(category: CategoryInfo) {
  return [
    {
      q: `What should I include in a ${category.name} RFQ?`,
      a: `Include product name, exact dimensions/profile, grade or material, thickness, length/width, finish or coating, quantity, drawing or BOQ reference and delivery location. Add accessory, processing, packing or certificate needs when required.`,
    },
    {
      q: `Does SRK Steel review ${category.name} enquiries for regional projects?`,
      a: `Yes. SRK Steel reviews ${category.name} enquiries across UAE, GCC and selected Middle East markets including Bahrain, Qatar, Kuwait, Saudi Arabia, Iraq, Oman and Jordan.`,
    },
    {
      q: `How do I compare products within ${category.name}?`,
      a: `Open the individual product pages in this category to compare applications, specification checkpoints, related products and RFQ requirements. Use the application pages when selecting products by project use rather than product name.`,
    },
    {
      q: `Can a category RFQ include multiple related products?`,
      a: `Yes. Many project requirements include several related steel items. Sending the complete package together helps review dimensions, finishes, accessories, processing needs and delivery sequencing more clearly.`,
    },
  ];
}

export function countryGuide(country: Country) {
  const note = countryNotes[country.slug] || countryNotes.uae;
  return {
    answer: `SRK Steel reviews ${country.name} enquiries for mild steel, stainless steel, galvanized steel and aluminium products, including coils, sheets, purlins, decking sheets, insulated panels, corrugated sheets, strut systems and fabrication materials. Send the product list, grade, size, finish, quantity, drawings or BOQ notes and delivery city for a clearer response.`,
    paragraphs: [
      note.intro,
      `The product range is useful for ${note.sectors.join(', ').toLowerCase()}. Buyers can compare product pages first, then send a focused RFQ with drawings, BOQ notes, product sizes, grades and quantities when available.`,
      note.logistics,
      note.compliance,
      `Country pages are connected with product pages and application pages so search engines and buyers can understand what SRK Steel supplies for ${country.name}, which products are commonly requested and what information should be included in a project enquiry.`,
    ],
    industries: note.sectors,
  };
}

export function countryFaqs(country: Country) {
  return [
    {
      q: `Does SRK Steel supply steel products to ${country.name}?`,
      a: `SRK Steel reviews ${country.name} enquiries for mild steel products, stainless steel coils/sheets/wire, galvanized steel coils/sheets/panels/profiles, purlins, GI decking sheets, strut and track, drywall partition systems, GI pipe and aluminium coils/sheets.`,
    },
    {
      q: `What details are required for a ${country.name} steel RFQ?`,
      a: `Share product name, size, grade, thickness, finish, quantity, project city, drawings or BOQ notes and required delivery timeline. For coated, stainless or aluminium products, mention coating, surface finish and exposure condition where relevant.`,
    },
    {
      q: `Can SRK Steel help choose products by application for ${country.name}?`,
      a: `Yes. Application pages show common product combinations for warehouses, fitout, MEP support, roofing, cladding and fabrication so buyers can prepare a more complete enquiry.`,
    },
    {
      q: `Are product photos updated on ${country.name} pages too?`,
      a: `Yes. Country pages use the same product data and image paths as the main product catalogue, so updated product images appear consistently across the website.`,
    },
  ];
}

export function applicationGuide(application: Application) {
  const names = productNames(application.recommendedProducts);
  return {
    answer: `${application.title} work commonly involves ${names}. Final selection depends on drawings, load or support requirements, installation environment, finish, quantity and delivery schedule.`,
    paragraphs: [
      `${application.title} projects usually require a group of products rather than one item. Review the drawing and site scope first, then shortlist the product sizes, finish options and accessories needed for installation.`,
      `When sending an RFQ, include project type, location, drawing or BOQ notes, product sizes, quantities, finish requirement and delivery location. For support or framing work, add accessory lists and installation environment where possible.`,
      `SRK Steel links application pages with related products and country pages so buyers can prepare enquiries based on actual site use, not only by product name.`,
      `Application-led guidance connects a project requirement with commonly used products, such as purlins for roofing or strut channels for MEP support, so buyers can prepare a more complete RFQ.`,
    ],
  };
}

export function applicationFaqs(application: Application) {
  const names = productNames(application.recommendedProducts);
  return [
    {
      q: `Which products are usually required for ${application.title}?`,
      a: `Common products include ${names}. The final list should follow the drawing, site condition, finish requirement and project specification.`,
    },
    {
      q: `What information should I send for a ${application.title} RFQ?`,
      a: `Share ${application.requirements.join(', ')}, plus drawings, BOQ notes, product quantities, finish requirement and delivery location.`,
    },
    {
      q: `Can SRK Steel review ${application.title} enquiries across GCC?`,
      a: `Yes. SRK Steel reviews UAE and GCC project enquiries and helps buyers connect the application with suitable product categories and specification details.`,
    },
    {
      q: `Why choose products by application instead of only by name?`,
      a: `Application context helps identify related items, accessories, finish requirements and product alternatives that may not be obvious from a product name alone.`,
    },
  ];
}

export type CountryProductSeoOverride = {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  h1: string;
  heroParagraphs: string[];
  answer: string;
  scopeHeading: string;
  guide: string[];
  procurementFocus: string;
  rfqBoxCopy: string;
  rfqChecks: string[];
  faqHeading: string;
  faqs: { q: string; a: string }[];
  relatedHeading: string;
};

const giCoilCountrySeo: Record<string, CountryProductSeoOverride> = {
  uae: {
    metaTitle: 'GI Coil Supplier in UAE | Galvanized Steel Coil',
    metaDescription: 'GI coil supplier in UAE for galvanized steel coil RFQs. Compare thickness, width, zinc coating Z60–Z275, grade, documents and UAE delivery.',
    keywords: ['GI coil supplier in UAE', 'galvanized steel coil UAE', 'hot dip galvanized steel coil UAE', 'GI coil Z60 Z275 UAE', 'ASTM A653 galvanized coil UAE', 'roofing GI coil UAE'],
    eyebrow: 'UAE GI Coil Supply',
    h1: 'GI Coil Supplier in UAE',
    heroParagraphs: [
      'SRK Steel reviews UAE GI coil requirements for roofing, cladding, profiling, fabrication and sheet-processing work. Enquiries are matched against grade, base-metal thickness, width, zinc coating requirement, quantity and documentation rather than a generic coil description.',
      'For Dubai, Abu Dhabi, Sharjah and other Emirates, include the delivery location, required timeline, coil-weight or handling limits where relevant, and any material-document requirement so the quotation can be compared on a like-for-like basis.',
    ],
    answer: 'For a UAE GI coil RFQ, specify the steel grade, base-metal thickness, coil width, required zinc coating, quantity or coil-weight preference, documentation requirement and delivery Emirate. This helps distinguish a true project match from a quotation that only matches the words “GI coil”.',
    scopeHeading: 'GI Coil for UAE Roofing, Cladding & Fabrication',
    guide: [
      'UAE buyers frequently need GI coil as input material for profiled roofing and wall sheets, cladding components, fabrication and general sheet processing. The correct quotation therefore depends on what the coil will become after delivery, not only on total tonnage.',
      'When the project specification states a zinc coating such as Z60, Z120, Z180 or Z275, copy that requirement into the RFQ together with the base-metal thickness and width. Do not compare quotations where coating or thickness basis differs.',
      'For active UAE sites, state whether the material is for direct project use, workshop processing or profiling. Add the delivery Emirate, receiving constraints and expected delivery window so packing and dispatch requirements can be discussed before order confirmation.',
      'If the BOQ or consultant specification names a standard, grade, certificate or approved-equivalent rule, include it with the enquiry. SRK Steel supplies and sources against the stated requirement; it should not be assumed that one generic GI coil specification suits every UAE project.',
    ],
    procurementFocus: 'Fast specification confirmation, coating/thickness comparison, documentation and delivery coordination across UAE project locations.',
    rfqBoxCopy: 'Send the UAE delivery Emirate plus grade, thickness, width, zinc coating, quantity, coil-weight preference and document requirements.',
    rfqChecks: ['State zinc coating separately from base-metal thickness.', 'Mention Dubai, Abu Dhabi, Sharjah or the exact delivery location and receiving constraints.', 'Attach the relevant BOQ/specification page when a grade, standard or certificate is mandatory.', 'Confirm whether the coil will be slit, profiled, formed or used as supplied.'],
    faqHeading: 'GI Coil FAQs for UAE Buyers',
    faqs: [
      { q: 'What should a UAE buyer include in a GI coil RFQ?', a: 'Include steel grade, base-metal thickness, width, required zinc coating, quantity, preferred coil weight if relevant, documentation needs, intended use and delivery Emirate. Attach the BOQ or specification when the project controls a standard, grade or coating designation.' },
      { q: 'Can I request Z60 to Z275 GI coil for a UAE project?', a: 'SRK Steel reviews enquiries across the 60gsm to 275gsm range subject to the exact project specification and availability. State the coating requirement exactly as specified and compare quotations only when thickness, width, grade and coating basis are equivalent.' },
      { q: 'Is ASTM A653 relevant to GI coil enquiries in the UAE?', a: 'ASTM A653/A653M is a common reference for hot-dip zinc-coated steel sheet, but the applicable standard must come from the project or approved material specification. Include the required grade and coating designation instead of relying on the standard name alone.' },
      { q: 'How does SRK Steel review GI coil enquiries for UAE projects?', a: 'SRK Steel reviews GI coil enquiries as a supplier and sourcing partner against the requested grade, base-metal thickness, width, zinc coating, quantity, documentation and delivery requirement.' },
    ],
    relatedHeading: 'Related Galvanized Steel Products for UAE Projects',
  },
  bahrain: {
    metaTitle: 'Galvanized Steel Coil Supplier Bahrain | GI Coil',
    metaDescription: 'Galvanized steel coil and GI coil supply for Bahrain RFQs. Specify thickness, width, zinc coating, grade, packing, documents and delivery location.',
    keywords: ['galvanized steel coil supplier Bahrain', 'GI coil Bahrain', 'zinc coated steel coil Bahrain', 'GI coil for roofing Bahrain', 'galvanized coil Bahrain RFQ'],
    eyebrow: 'Bahrain Galvanized Coil Supply',
    h1: 'Galvanized Steel Coil Supplier for Bahrain',
    heroParagraphs: [
      'For Bahrain enquiries, SRK Steel reviews GI coil requirements by grade, thickness, width, zinc coating, quantity and end use. This is especially useful where coil will be profiled, formed or fabricated after receipt rather than purchased as a generic stock item.',
      'Buyers in Manama, Riffa, Sitra and other project areas should include the final delivery location, packing expectations and any certificate or consultant-document requirement with the RFQ so commercial and technical comparisons stay aligned.',
    ],
    answer: 'A Bahrain GI coil enquiry is clearer when it identifies the required coating, base-metal thickness, width, grade, quantity, packing and delivery location. For roofing or profiling work, also state the downstream application because it can affect the acceptable coil specification.',
    scopeHeading: 'Galvanized Steel Coil for Bahrain Project Procurement',
    guide: [
      'Bahrain GI coil demand can come from roofing, cladding, fabrication and maintenance packages where the coil is processed into another component. State the final application so the RFQ can be checked against the correct material requirement.',
      'Zinc coating and steel thickness are separate specification points. If the project calls for a particular coating mass or designation, include it exactly as written and avoid treating a heavier coating as interchangeable with a different substrate thickness.',
      'For delivery into Bahrain, add destination area, quantity split and packing expectations at the quotation stage. This is more useful than sending only a total tonnage because handling and release requirements can differ by project.',
      'Where drawings or consultant submittals control grade, standard or material documents, send those references with the RFQ. Any proposed equivalent should remain subject to project approval rather than being assumed by the supplier.',
    ],
    procurementFocus: 'Grade/coating confirmation, packing clarity, documentation and Bahrain delivery scope.',
    rfqBoxCopy: 'Send grade, thickness, width, zinc coating, quantity, packing requirement and Bahrain delivery location with the enquiry.',
    rfqChecks: ['Identify the end use: roofing, profiling, cladding or fabrication.', 'Separate zinc coating requirement from steel thickness.', 'State packing and delivery area in Bahrain before quotation.', 'Attach specification or certificate requirements when project-controlled.'],
    faqHeading: 'GI Coil FAQs for Bahrain Procurement',
    faqs: [
      { q: 'What details are needed to quote GI coil for Bahrain?', a: 'Share grade, base-metal thickness, width, zinc coating, quantity, intended use, packing requirement, delivery area and any required material documents. A drawing or specification reference is useful when the project controls the grade or coating.' },
      { q: 'Can GI coil be supplied for Bahrain roofing and cladding work?', a: 'SRK Steel reviews GI coil enquiries for roofing, cladding, profiling and fabrication requirements. Final suitability depends on the specified thickness, coating, grade, downstream profile and project approval requirements.' },
      { q: 'How should Bahrain buyers compare galvanized coil quotations?', a: 'Compare the same base-metal thickness, width, grade, zinc coating, coil quantity or weight, packing, documents and delivery scope. Prices are not directly comparable when the coating or material basis differs.' },
      { q: 'Can Bahrain GI coil RFQs include packing and material-document requirements?', a: 'Yes. Add packing, certificate or material-document requirements at enquiry stage together with the destination and quantity so the supply scope is clear before price comparison.' },
    ],
    relatedHeading: 'Related Coated Steel Products for Bahrain',
  },
  qatar: {
    metaTitle: 'GI Coil Supplier Qatar | Zinc-Coated Steel Coil',
    metaDescription: 'GI coil supplier for Qatar project RFQs. Review galvanized coil grade, thickness, width, zinc coating, documentation, profiling use and Doha delivery.',
    keywords: ['GI coil supplier Qatar', 'galvanized steel coil Qatar', 'zinc coated steel coil Qatar', 'GI coil Doha', 'roofing coil Qatar', 'GI coil specification Qatar'],
    eyebrow: 'Qatar GI Coil Procurement',
    h1: 'GI Coil Supplier for Qatar Projects',
    heroParagraphs: [
      'SRK Steel supports Qatar GI coil enquiries where buyers need a clear match between the galvanized coil specification and its intended use in roofing, cladding, profiling or fabrication. Grade, thickness, width and zinc coating should be stated separately.',
      'For Doha, Al Rayyan, Lusail and other project zones, include the delivery point, required documentation and any consultant-approved material criteria so the enquiry can be reviewed as a project requirement rather than a generic price request.',
    ],
    answer: 'For Qatar projects, GI coil should be requested with exact grade, thickness, width, coating and end-use information. If the coil will be profiled into roofing or wall sheets, include the intended profile or fabrication route plus the project delivery location and document requirement.',
    scopeHeading: 'GI Coil for Qatar Roofing, Profiling & Fabrication RFQs',
    guide: [
      'Qatar project teams may use GI coil as feedstock for roofing, cladding and fabricated sheet products. Stating the downstream use helps procurement teams avoid comparing coils that differ in coating, forming suitability or documentation.',
      'If a consultant specification names a coating designation, grade or standard, carry that wording into the RFQ. Zinc coating should not be inferred from the term “galvanized” alone when a controlled coating mass is required.',
      'For coil intended for profiling or fabrication, include width, base-metal thickness and any coil-weight limitation imposed by processing equipment. These details can be as important as the total quantity.',
      'Qatar delivery enquiries should identify the receiving city or project zone and any document package expected with the material. Equivalent material should only be considered where the project permits substitution.',
    ],
    procurementFocus: 'Project-spec matching, profiling requirements, document review and Qatar delivery location.',
    rfqBoxCopy: 'Send the Qatar project location, grade, thickness, width, zinc coating, quantity and profiling or fabrication requirement.',
    rfqChecks: ['Include consultant/BOQ coating language where available.', 'State coil width and any processing-equipment coil-weight limit.', 'Mention whether the material will be profiled into roofing or wall sheets.', 'Identify Doha or the exact Qatar delivery/project zone.'],
    faqHeading: 'GI Coil FAQs for Qatar Projects',
    faqs: [
      { q: 'What information should a Qatar GI coil RFQ contain?', a: 'State grade, base-metal thickness, width, zinc coating, quantity, end use, required material documents and delivery location. For profiling work, add the intended profile or processing requirement and any coil-weight restriction.' },
      { q: 'Why does the zinc coating need to be specified separately?', a: 'GI coil thickness and zinc coating describe different parts of the requirement. A quotation with the correct thickness but a different coating may not match the project specification, so both should be stated and compared separately.' },
      { q: 'Can SRK Steel review GI coil enquiries for Doha and Lusail?', a: 'Yes. SRK Steel reviews Qatar enquiries and asks buyers to include the exact delivery location, project specification, quantity and documentation requirement so suitable supply options can be assessed.' },
      { q: 'Can Qatar GI coil RFQs include consultant document requirements?', a: 'Yes. If the consultant or project requires a particular certificate, standard reference or material submittal, include it before quotation so sourcing can be reviewed against that requirement.' },
    ],
    relatedHeading: 'Related Roofing & Coated Steel Products for Qatar',
  },
  kuwait: {
    metaTitle: 'GI Coil Supplier Kuwait | Galvanized Steel Coil',
    metaDescription: 'GI coil supply for Kuwait roofing and fabrication RFQs. Compare galvanized steel coil thickness, width, zinc coating, grade, packing and delivery.',
    keywords: ['GI coil supplier Kuwait', 'galvanized steel coil Kuwait', 'galvanized coil supplier Kuwait', 'roofing GI coil Kuwait', 'zinc coated coil Kuwait'],
    eyebrow: 'Kuwait GI Coil Supply',
    h1: 'Galvanized GI Coil Supplier in Kuwait',
    heroParagraphs: [
      'Kuwait GI coil enquiries are reviewed around the actual material requirement: grade, base-metal thickness, coil width, zinc coating, quantity and downstream use. This matters for fabrication and roofing packages where a small specification difference can affect processing or acceptance.',
      'For Kuwait City, Shuwaikh, Ahmadi and surrounding project areas, include packing, delivery point, timeline and document requirements with the RFQ so supply scope is clear before commercial comparison.',
    ],
    answer: 'A useful Kuwait GI coil RFQ identifies thickness, width, grade, zinc coating, quantity, packing and destination. If the coil will be formed or profiled, add the processing use and any equipment-related coil size or weight limits.',
    scopeHeading: 'GI Coil for Kuwait Roofing & Fabrication Requirements',
    guide: [
      'GI coil for Kuwait projects may be purchased for workshop fabrication, profiling, roofing and cladding components. State the intended use so the enquiry can be reviewed against a practical supply specification rather than only a product name.',
      'Coating mass, base-metal thickness and steel grade should be listed as separate line items. This makes supplier quotations easier to compare and reduces the risk of accepting a lower-priced but technically different coil.',
      'If material will be processed in a workshop, include required width, coil weight preference and any slitting or forming considerations. For site delivery, add the exact Kuwait destination, quantity split and receiving timeline.',
      'Certificate or standard requirements should come from the approved project documentation. Where an equivalent is permitted, state that in the enquiry and keep final material acceptance subject to the project approval process.',
    ],
    procurementFocus: 'Thickness/coating comparison, workshop processing needs, packing and Kuwait delivery planning.',
    rfqBoxCopy: 'Send grade, thickness, width, coating, quantity, packing and exact Kuwait delivery location.',
    rfqChecks: ['State workshop processing or profiling needs.', 'Compare base-metal thickness and zinc coating separately.', 'Add coil-weight preference where handling equipment imposes a limit.', 'Include packing, delivery point and document requirements.'],
    faqHeading: 'GI Coil FAQs for Kuwait Buyers',
    faqs: [
      { q: 'How do I request galvanized GI coil for Kuwait?', a: 'Send grade, base-metal thickness, width, required zinc coating, quantity, end use, packing, delivery location and documentation requirement. Include any coil-weight or processing limitation that affects workshop handling.' },
      { q: 'Can GI coil be quoted for Kuwait fabrication workshops?', a: 'Yes. For fabrication enquiries, add the intended forming, profiling or sheet-processing use along with width, thickness, grade and coating so the supply requirement can be reviewed correctly.' },
      { q: 'What makes two Kuwait GI coil quotes comparable?', a: 'The quotes should match on grade, base-metal thickness, width, zinc coating, quantity or coil weight, packing, documents and delivery scope. Differences in any of these can change both technical suitability and price.' },
      { q: 'Can a Kuwait GI coil RFQ include coil-weight limits?', a: 'Yes. If workshop cranes, decoilers or profiling equipment impose a coil-weight limit, state the acceptable range with width, thickness and quantity so unsuitable coil configurations are not compared.' },
    ],
    relatedHeading: 'Related Galvanized Steel Products for Kuwait',
  },
  'saudi-arabia': {
    metaTitle: 'GI Coil Supplier Saudi Arabia | Galvanized Coil',
    metaDescription: 'GI coil supply for Saudi Arabia projects. Specify galvanized coil grade, thickness, width, zinc coating, phased quantity, documents and delivery city.',
    keywords: ['GI coil supplier Saudi Arabia', 'galvanized steel coil Saudi Arabia', 'GI coil Riyadh', 'GI coil Dammam', 'zinc coated steel coil Saudi Arabia', 'roofing coil Saudi Arabia'],
    eyebrow: 'Saudi Arabia GI Coil Procurement',
    h1: 'GI Coil Supplier for Saudi Arabia',
    heroParagraphs: [
      'For Saudi Arabia projects, SRK Steel reviews GI coil requirements against the project specification, quantity profile and delivery plan. Grade, base-metal thickness, width and zinc coating should be confirmed before comparing commercial offers.',
      'Riyadh, Jeddah, Dammam and Eastern Province enquiries can include phased quantities or project release schedules where relevant. Sharing that information early helps the RFQ reflect actual procurement timing instead of a single undifferentiated tonnage figure.',
    ],
    answer: 'Saudi Arabia GI coil procurement is clearer when the RFQ combines the technical specification with the commercial release plan: grade, thickness, width, coating, coil quantity or weight, documents, delivery city and any phased delivery requirement.',
    scopeHeading: 'GI Coil Procurement for Saudi Arabia Projects',
    guide: [
      'Saudi project enquiries can range from individual fabrication requirements to larger roofing and cladding packages. The RFQ should identify whether the coil is for profiling, fabrication, sheet processing or direct project use so technical and commercial review starts from the same scope.',
      'For larger quantities, break the requirement into total tonnage plus expected release schedule if the project will not receive all material at once. This gives a more realistic basis for sourcing, packing and delivery discussions.',
      'List the required zinc coating, base-metal thickness, width and grade separately. If coil weight matters to profiling or handling equipment, state the acceptable range rather than leaving it open.',
      'Where project documents require a named standard, certificate package or approved mill/material source, include that requirement at enquiry stage. Any alternate material should remain subject to the client, consultant or project approval process.',
    ],
    procurementFocus: 'Specification control, larger or phased quantities, coil handling limits, documentation and Saudi delivery planning.',
    rfqBoxCopy: 'Send grade, thickness, width, coating, total quantity, phased release requirement if any, documents and Saudi delivery city.',
    rfqChecks: ['Separate total quantity from phased release quantities where relevant.', 'State Riyadh, Jeddah, Dammam or exact project delivery city.', 'Include coil-weight limits for profiling or handling equipment.', 'Attach standard, certificate and approval requirements before quotation.'],
    faqHeading: 'GI Coil FAQs for Saudi Arabia Procurement',
    faqs: [
      { q: 'What should be included in a Saudi Arabia GI coil RFQ?', a: 'Include grade, base-metal thickness, width, zinc coating, total quantity, coil-weight requirement if applicable, documentation, intended use and delivery city. For phased projects, add the expected release schedule.' },
      { q: 'Can GI coil quotations be prepared for phased Saudi project quantities?', a: 'Yes, the enquiry can identify total quantity and planned release stages. Actual availability and delivery commitments should be confirmed during quotation and order review.' },
      { q: 'Which GI coil details matter for roofing and profiling in Saudi Arabia?', a: 'Width, base-metal thickness, grade, zinc coating, coil weight and downstream profile or forming use should be stated. Project-specific standards and approvals remain controlling.' },
      { q: 'Can Saudi GI coil RFQs allow approved equivalent material?', a: 'Yes, but only when the project permits alternatives. State the approved-equivalent rule in the enquiry and keep final acceptance subject to the client, consultant or project approval process.' },
    ],
    relatedHeading: 'Related Roofing & Galvanized Steel Products for Saudi Arabia',
  },
  iraq: {
    metaTitle: 'GI Coil Supply for Iraq | Galvanized Steel Coil',
    metaDescription: 'GI coil supply for Iraq project RFQs. Specify galvanized coil thickness, width, zinc coating, grade, quantity split, packing, documents and destination.',
    keywords: ['GI coil Iraq', 'galvanized steel coil Iraq', 'GI coil supplier Iraq', 'zinc coated coil Iraq', 'roofing GI coil Iraq', 'galvanized coil Basra'],
    eyebrow: 'Iraq GI Coil Project Supply',
    h1: 'GI Coil Supply for Iraq Projects',
    heroParagraphs: [
      'Iraq GI coil enquiries are reviewed by specification and destination, with grade, base-metal thickness, width, zinc coating and quantity stated clearly. This is important where material is being procured for fabrication, roofing or industrial support work.',
      'For Baghdad, Basra, Erbil and other project locations, include quantity breakdown, packing expectations, delivery destination and required documents so the enquiry can be evaluated as a complete supply package.',
    ],
    answer: 'For Iraq GI coil procurement, combine the material specification with practical supply details: grade, thickness, width, coating, total quantity, quantity split if applicable, packing, documentation and final destination.',
    scopeHeading: 'Galvanized Steel Coil for Iraq Fabrication & Project RFQs',
    guide: [
      'GI coil can form part of roofing, cladding, fabrication and industrial project packages in Iraq. The enquiry should say what the material will be used for, especially when downstream profiling or forming determines the acceptable coil size.',
      'State coating and thickness independently. If the project requires a particular zinc coating or standard, copy that requirement into the RFQ instead of relying on a generic “galvanized coil” description.',
      'For multi-item or multi-release requirements, provide quantity breakdown and packing expectations together with the destination city. This helps distinguish project logistics needs from the technical coil specification.',
      'Material certificates or other documents should be listed before quotation where they are required for project acceptance. Any grade, coating or standard substitution should only be considered where the project allows it.',
    ],
    procurementFocus: 'Specification matching, quantity breakdown, packing, document requirements and Iraq destination planning.',
    rfqBoxCopy: 'Send grade, thickness, width, coating, quantity split, packing, documents and Iraq destination.',
    rfqChecks: ['Break down quantities by release or destination when needed.', 'State coating designation and base-metal thickness separately.', 'Include packing expectations for the planned movement and handling.', 'Attach certificate/standard requirements where project-controlled.'],
    faqHeading: 'GI Coil FAQs for Iraq Project Buyers',
    faqs: [
      { q: 'What information helps quote GI coil for Iraq?', a: 'Provide grade, base-metal thickness, width, zinc coating, total quantity, quantity breakdown if relevant, intended use, packing, documents and destination such as Baghdad, Basra or Erbil.' },
      { q: 'Can SRK Steel review GI coil for Iraq roofing or fabrication requirements?', a: 'Yes. SRK Steel reviews regional GI coil enquiries for roofing, cladding, profiling and fabrication. The final supply option depends on the stated grade, thickness, coating, quantity and project requirements.' },
      { q: 'Why should packing be included in an Iraq GI coil RFQ?', a: 'Packing is part of the supply scope and can affect handling and delivery planning. Stating it with quantity and destination helps ensure commercial comparisons cover the same requirement.' },
      { q: 'Can an Iraq GI coil enquiry be split by release or destination?', a: 'Yes. Share the total quantity together with release quantities or destination breakdown where applicable. This helps review packing and delivery scope without changing the underlying material specification.' },
    ],
    relatedHeading: 'Related Galvanized & Fabrication Products for Iraq',
  },
  oman: {
    metaTitle: 'GI Coil Supplier Oman | Roofing & Cladding Coil',
    metaDescription: 'GI coil supplier for Oman roofing, cladding and fabrication RFQs. Compare grade, thickness, width, zinc coating, exposure needs and delivery city.',
    keywords: ['GI coil supplier Oman', 'galvanized steel coil Oman', 'GI coil Muscat', 'GI coil Sohar', 'roofing coil Oman', 'zinc coated steel coil Oman'],
    eyebrow: 'Oman GI Coil Supply',
    h1: 'GI Coil Supplier for Oman',
    heroParagraphs: [
      'Oman GI coil enquiries are reviewed with attention to the end use, coating requirement and project environment. For roofing, cladding or fabricated sheet work, state the grade, base-metal thickness, width, zinc coating and any exposure-related requirement shown in the specification.',
      'For Muscat, Sohar, Salalah and other project areas, include delivery location, quantity, processing use and documentation requirements so the material enquiry can be checked against the full project scope.',
    ],
    answer: 'For an Oman GI coil RFQ, specify grade, thickness, width, zinc coating, quantity, end use and delivery city. Where the project has a controlled exposure or corrosion specification, include that requirement rather than assuming a generic galvanized coating is sufficient.',
    scopeHeading: 'GI Coil for Oman Roofing, Cladding & Fabrication',
    guide: [
      'Oman roofing and cladding enquiries should connect the GI coil specification with the final roof, wall or fabricated component. This helps determine whether coating, width or processing requirements need closer review before quotation.',
      'If the project specification addresses environmental exposure, coating mass or surface treatment, include that language in the RFQ. The appropriate requirement should come from the project specification rather than a generic assumption about location.',
      'For profiling or workshop processing, state coil width, base-metal thickness and any coil-weight limitation. For project delivery, add the destination city, receiving timeline and any material-document requirement.',
      'Equivalent grades or coatings should only be proposed where substitutions are allowed and should remain subject to consultant or project approval. SRK Steel focuses on supply and sourcing against the stated requirement rather than claiming a single standard coil fits every application.',
    ],
    procurementFocus: 'Application/exposure specification, coating selection, profiling requirements, documentation and Oman delivery city.',
    rfqBoxCopy: 'Send grade, thickness, width, zinc coating, end use, exposure requirement if specified, quantity and Oman delivery city.',
    rfqChecks: ['Include any project-defined exposure or corrosion requirement.', 'State coating mass/designation separately from thickness.', 'Add profiling width and coil-weight limitations where relevant.', 'Identify Muscat, Sohar, Salalah or the exact delivery location.'],
    faqHeading: 'GI Coil FAQs for Oman Projects',
    faqs: [
      { q: 'What should an Oman GI coil RFQ include?', a: 'Include grade, base-metal thickness, width, zinc coating, quantity, intended application, project-defined exposure requirement if any, documentation and delivery city.' },
      { q: 'Is a higher zinc coating always required for Oman GI coil?', a: 'Not automatically. The required coating should follow the project specification, exposure condition and approved material criteria. Buyers should state the specified coating instead of choosing only by geography.' },
      { q: 'Can GI coil be reviewed for Muscat, Sohar or Salalah projects?', a: 'Yes. SRK Steel reviews Oman enquiries and asks for the exact destination plus specification, quantity and document requirements so suitable supply options can be evaluated.' },
      { q: 'Can Oman GI coil RFQs include project-specific coating or exposure criteria?', a: 'Yes. Include the exact project-defined coating, surface-treatment or exposure requirement with the enquiry. The specification should control the material choice rather than a generic assumption based on location.' },
    ],
    relatedHeading: 'Related Roofing & Cladding Steel Products for Oman',
  },
  jordan: {
    metaTitle: 'Galvanized Steel Coil Supplier Jordan | GI Coil',
    metaDescription: 'Galvanized steel coil and GI coil supply for Jordan RFQs. Specify grade, thickness, width, zinc coating, quantity, processing use, documents and delivery.',
    keywords: ['galvanized steel coil supplier Jordan', 'GI coil Jordan', 'GI coil supplier Jordan', 'zinc coated steel coil Jordan', 'roofing coil Jordan', 'GI coil Amman'],
    eyebrow: 'Jordan Galvanized Coil Supply',
    h1: 'Galvanized Steel Coil Supplier for Jordan',
    heroParagraphs: [
      'Jordan GI coil enquiries are reviewed by grade, thickness, width, zinc coating, quantity and application. Buyers using the material for fabrication or profiling should state the downstream process so the coil requirement is not reduced to a generic price-per-tonne comparison.',
      'For Amman, Zarqa, Aqaba and other project locations, add the delivery destination, processing needs and any consultant or material-document requirements with the RFQ.',
    ],
    answer: 'A Jordan galvanized steel coil RFQ should state the grade, base-metal thickness, width, zinc coating, quantity, processing use, documentation and delivery destination. This makes it easier to compare offers on the same technical basis.',
    scopeHeading: 'Galvanized Steel Coil for Jordan Fabrication & Roofing RFQs',
    guide: [
      'Jordan buyers may request GI coil for fabrication, roofing, cladding or formed sheet components. State the intended use and processing route so width, thickness and coating can be reviewed against the actual requirement.',
      'A zinc coating designation should be treated as its own specification point. If the BOQ or drawing defines the coating, grade or standard, include that reference in the enquiry rather than requesting simply “GI coil”.',
      'For workshop processing, add any width or coil-weight limits. For project supply, include destination, required delivery timing and whether quantity will be taken in one release or split across stages.',
      'Material documentation and substitution rules should be clear before pricing. If equivalent material is allowed, note the approval process so the quotation can separate compliant options from unapproved alternatives.',
    ],
    procurementFocus: 'Application matching, processing limits, coating/grade clarity, documentation and Jordan delivery planning.',
    rfqBoxCopy: 'Send grade, thickness, width, zinc coating, quantity, processing use, documents and Jordan delivery location.',
    rfqChecks: ['State whether the coil is for roofing, profiling or general fabrication.', 'List grade, thickness and zinc coating as separate requirements.', 'Add workshop coil-width/weight limits where applicable.', 'Include Amman, Zarqa, Aqaba or exact delivery destination and document needs.'],
    faqHeading: 'GI Coil FAQs for Jordan Buyers',
    faqs: [
      { q: 'What details are required for a Jordan GI coil quotation?', a: 'Share grade, base-metal thickness, width, zinc coating, quantity, intended processing or application, required documents and delivery location. Add any coil-weight limit or staged quantity plan when relevant.' },
      { q: 'Can SRK Steel review GI coil for Jordan fabrication and roofing?', a: 'Yes. SRK Steel reviews Jordan project enquiries for galvanized coil used in fabrication, profiling, roofing and cladding, subject to the exact specification and availability.' },
      { q: 'Should a Jordan RFQ include the zinc coating designation?', a: 'Yes, when the project specifies one. The coating requirement should be stated separately from the base-metal thickness so quotations can be compared accurately.' },
      { q: 'Can Jordan GI coil enquiries include staged quantities or workshop limits?', a: 'Yes. State staged quantities, required delivery timing and any workshop coil-width or coil-weight limits so the supply option can be reviewed against both processing and project needs.' },
    ],
    relatedHeading: 'Related Galvanized Steel Products for Jordan',
  },
};

const productSearchNameOverrides: Record<string, string> = {
  'ms-hollow-sections': 'MS Hollow Sections',
  'mild-steel-gratings': 'MS Gratings',
  'roof-insulated-panels': 'Roof Insulated Panels',
  'wall-insulated-panels': 'Wall Insulated Panels',
  'corrugated-fence-sheet-panel': 'Corrugated Fence Panels',
  'drywall-partition-systems': 'Drywall Systems',
  'pre-painted-aluminium-coils': 'Pre-Painted Aluminium Coil',
  'pfmb-psmr-aluminium-alloy-3003-h14-coils': 'PFMB/PSMR 3003-H14 Aluminium Coils',
};

function productSearchName(product: Product) {
  return productSearchNameOverrides[product.slug] || product.name;
}

function clipMeta(text: string, max = 155) {
  if (text.length <= max) return text;
  const clipped = text.slice(0, max - 1);
  const clean = clipped.slice(0, Math.max(clipped.lastIndexOf(' '), max - 18)).replace(/[,:;\s]+$/, '').replace(/\b(and|or|with|plus|add|review|state|specify)$/i, '').replace(/[,:;\s]+$/, '');
  return `${clean}.`;
}

function countryMetaTitle(product: Product, country: Country) {
  const profile = getProductKeywordProfile(product);
  const name = productSearchName(product);
  const secondary = profile.title.split('|')[1]?.trim() || product.category.replace(' Products', '');
  const candidateByCountry: Record<string, string> = {
    uae: profile.title,
    bahrain: `${name} Supplier Bahrain | ${secondary}`,
    qatar: `${name} Supplier Qatar | ${secondary}`,
    kuwait: `${name} Supplier Kuwait | ${secondary}`,
    'saudi-arabia': `${name} Supplier Saudi Arabia | ${secondary}`,
    iraq: `${name} Supply Iraq | ${secondary}`,
    oman: `${name} Supplier Oman | ${secondary}`,
    jordan: `${name} Supplier Jordan | ${secondary}`,
  };
  let title = candidateByCountry[country.slug] || `${name} Supplier ${country.name} | ${secondary}`;
  if (title.length > 53) title = `${name} Supplier ${country.name}`;
  if (title.length > 53) title = `${name} ${country.name}`;
  return title;
}

function compactRfqForMeta(product: Product) {
  const parts = rfqDetailsFor(product).split(',').map((part) => part.trim()).filter(Boolean);
  const technical = parts.filter((part) => !/(quantity|delivery|city|location|tonnage|coil weight|project city|project location)/i.test(part));
  const selected = (technical.length >= 2 ? technical : parts).slice(0, 3);
  return selected.join(', ');
}

function countryMetaDescription(product: Product, country: Country) {
  const name = productSearchName(product);
  const details = compactRfqForMeta(product);
  const descriptions: Record<string, string> = {
    uae: `${name} supplier in UAE. Compare ${details}, quantity, documents and delivery for project RFQs.`,
    bahrain: `${name} supply for Bahrain projects. Specify ${details}, quantity, packing, documents and delivery location.`,
    qatar: `${name} for Qatar project RFQs. Review ${details}, quantity, approval documents, packing and delivery zone.`,
    kuwait: `Kuwait ${name} enquiries. Compare ${details}, quantity, processing needs, documents and delivery point.`,
    'saudi-arabia': `${name} supply for Saudi Arabia projects. State ${details}, quantity or release stages, documents and delivery city.`,
    iraq: `Iraq project RFQs for ${name}. Specify ${details}, quantity breakdown, packing, documents and destination.`,
    oman: `${name} for Oman projects. Review ${details}, quantity, project-defined finish/exposure needs, documents and delivery city.`,
    jordan: `Jordan ${name} supply enquiries. State ${details}, quantity, approved-equivalent rules, documents and delivery location.`,
  };
  return clipMeta(descriptions[country.slug] || `${name} supplier for ${country.name} projects. Review ${details}, quantity, documents and delivery location.`);
}

function countryProductKeywords(product: Product, country: Country) {
  const profile = getProductKeywordProfile(product);
  const name = productSearchName(product);
  const base = profile.secondary
    .filter((keyword) => !/\bUAE\b/i.test(keyword))
    .filter((keyword) => keyword.toLowerCase() !== profile.primary.toLowerCase())
    .slice(0, 3);
  return Array.from(new Set([
    `${name} supplier ${country.name}`,
    `${product.name} ${country.name}`,
    ...base.map((keyword) => `${keyword} ${country.name}`),
    `${product.category} supplier ${country.name}`,
  ]));
}

function countryH1(product: Product, country: Country) {
  const variants: Record<string, string> = {
    uae: `${product.name} Supplier in UAE`,
    bahrain: `${product.name} Supplier for Bahrain Projects`,
    qatar: `${product.name} Supply for Qatar`,
    kuwait: `${product.name} Supplier in Kuwait`,
    'saudi-arabia': `${product.name} Supplier for Saudi Arabia`,
    iraq: `${product.name} Supply for Iraq Projects`,
    oman: `${product.name} Supplier for Oman`,
    jordan: `${product.name} Supplier for Jordan`,
  };
  return variants[country.slug] || `${product.name} Supplier for ${country.name}`;
}

function generatedCountryProductSeo(product: Product, country: Country): CountryProductSeoOverride {
  const note = countryNotes[country.slug] || countryNotes.uae;
  const marketAngle = countryCategoryAngles[country.slug]?.[product.category]
    || `${country.name} buyers should connect the ${product.category.toLowerCase()} specification with application, quantity, documents and delivery context.`;
  const decision = productDecisionNote(product);
  const rfq = rfqDetailsFor(product);
  const apps = product.applications.join(', ').toLowerCase();
  const featureContext = `For ${product.name}, practical buying checks include ${product.features.slice(0, 3).join(', ').toLowerCase()}. Read those product-specific points together with the drawing/BOQ, quantity, processing scope and delivery plan.`;
  const primaryApplication = product.applications[0] || 'project work';
  const heroByCountry: Record<string, string[]> = {
    uae: [
      `${marketAngle} ${product.name} is commonly reviewed for ${apps}; the RFQ should therefore connect the material specification with its real processing or site duty.`,
      `${decision} For UAE delivery, also state the Emirate/site, receiving constraints, required timeline and any project-document requirement.`,
    ],
    bahrain: [
      `${product.name} enquiries for Bahrain should start with the exact purchase specification rather than a generic product description. ${marketAngle}`,
      `${decision} Add packing preference, destination, quantity split and whether the requirement is one delivery or phased supply.`,
    ],
    qatar: [
      `${marketAngle} For ${product.name}, include the drawing or BOQ reference where approval, profile, finish or dimensional requirements are project-controlled.`,
      `${decision} Qatar RFQs should also identify the project zone/city, inspection or document needs, packing and expected delivery window.`,
    ],
    kuwait: [
      `Kuwait procurement teams comparing ${product.name} should separate technical specification from workshop or site logistics. ${marketAngle}`,
      `${decision} Include the exact Kuwait delivery point, processing or handling limits, packing and required material documents with the enquiry.`,
    ],
    'saudi-arabia': [
      `${marketAngle} ${product.name} requirements can be reviewed as a total quantity plus release stages when the project will not receive all material at once.`,
      `${decision} Add Saudi delivery city, phased quantities if relevant, handling/processing requirements and consultant or project-document conditions.`,
    ],
    iraq: [
      `${product.name} supply enquiries for Iraq should combine the material specification with the movement and packing plan. ${marketAngle}`,
      `${decision} State destination, quantity breakdown, packing, supporting documents and any processing requirement so the quotation reflects the complete scope.`,
    ],
    oman: [
      `${marketAngle} For ${product.name}, any project-defined exposure, corrosion, finish or coating criterion should be included explicitly rather than inferred from geography.`,
      `${decision} Add Muscat, Sohar, Salalah or the exact delivery location, quantity, processing route and document requirements.`,
    ],
    jordan: [
      `${marketAngle} ${product.name} quotations are easier to compare when the approved specification and any equivalent-material rule are stated before pricing.`,
      `${decision} Add Amman, Zarqa, Aqaba or the exact destination, processing needs, quantity and project-document requirements.`,
    ],
  };

  const guideByCountry: Record<string, string[]> = {
    uae: [marketAngle, featureContext, decision, `${note.logistics} SRK Steel reviews the enquiry as a supplier/sourcing requirement against the stated specification, quantity, documents and delivery scope.`],
    bahrain: [featureContext, marketAngle, `For ${product.name}, the purchase-ready details are ${rfq}.`, `${note.logistics} ${note.compliance} ${decision}`],
    qatar: [marketAngle, featureContext, note.compliance, `${decision} For ${product.name}, include ${rfq} plus Qatar project zone, packing and document requirements so commercial offers are technically comparable.`],
    kuwait: [featureContext, marketAngle, decision, `Workshop or site handling should be included where it changes the acceptable ${product.name} size, form, packing or release plan. ${note.logistics} ${note.compliance}`],
    'saudi-arabia': [marketAngle, featureContext, `Break larger ${product.name} requirements into total quantity and phased releases when that reflects the project procurement plan.`, `${decision} ${note.logistics} ${note.compliance}`],
    iraq: [featureContext, marketAngle, `For ${product.name}, combine ${rfq} with quantity breakdown and packing so technical and logistics review happen together.`, `${note.logistics} ${decision} ${note.compliance}`],
    oman: [marketAngle, featureContext, `Project-defined exposure criteria should control any coating, finish or material selection relevant to ${product.name}; location alone should not be used as a substitute for the specification.`, `${decision} ${note.logistics} ${note.compliance}`],
    jordan: [featureContext, marketAngle, `State whether approved equivalents may be considered for ${product.name}; any substitution should remain subject to the project or fabricator approval process.`, `${decision} ${note.logistics} ${note.compliance}`],
  };

  const deliveryCheckByCountry: Record<string, string> = {
    uae: 'State the delivery Emirate/site, receiving constraints and required delivery window.',
    bahrain: 'Include Bahrain destination, packing preference and one-off versus phased supply.',
    qatar: 'Add Qatar project zone/city plus inspection, packing and document requirements.',
    kuwait: 'State Kuwait delivery point and any workshop handling or processing limitation.',
    'saudi-arabia': 'Separate total quantity from phased Saudi release quantities where relevant.',
    iraq: 'Include Iraq destination, quantity breakdown, packing and supporting documents.',
    oman: 'State the exact Oman location and any project-defined exposure or finish criteria.',
    jordan: 'Include Jordan destination and whether approved equivalents may be reviewed.',
  };
  const specChecks = product.specs.slice(0, 3).map((spec) => `${spec.label}: ${spec.value}`);

  return {
    metaTitle: countryMetaTitle(product, country),
    metaDescription: countryMetaDescription(product, country),
    keywords: countryProductKeywords(product, country),
    eyebrow: `${country.name} ${product.category.replace(' Products', '')} Procurement`,
    h1: countryH1(product, country),
    heroParagraphs: heroByCountry[country.slug] || [marketAngle, `${decision} ${note.logistics}`],
    answer: `For a purchase-ready ${country.name} ${product.name} RFQ, state ${rfq}. Add the intended application, drawing or BOQ reference, required documents, quantity basis and exact delivery location so offers can be checked on the same scope.`,
    scopeHeading: `${product.name} for ${country.name} ${product.applications[0] || 'Project'} Requirements`,
    guide: guideByCountry[country.slug] || [marketAngle, decision, note.logistics, note.compliance],
    procurementFocus: `${country.buyerFocus} For ${product.name}, the key product-specific inputs are ${rfq}.`,
    rfqBoxCopy: `Send ${rfq}, plus quantity, documents and the exact ${country.name} delivery location.`,
    rfqChecks: [...specChecks, deliveryCheckByCountry[country.slug] || `State exact ${country.name} delivery city/site and timeline.`],
    faqHeading: `${product.name} Procurement FAQs for ${country.name}`,
    faqs: [
      { q: `What should a ${country.name} buyer include in a ${product.name} RFQ?`, a: `Include ${rfq}, plus quantity, intended application, drawings or BOQ notes, document requirements and the exact ${country.name} delivery location.` },
      { q: `How should ${product.name} be specified for ${primaryApplication.toLowerCase()} in ${country.name}?`, a: `${decision} The final selection should also match the ${primaryApplication.toLowerCase()} drawing, site condition, installation or processing method and project approval requirements.` },
      { q: `Which ${product.name} details help avoid a mismatched quotation in ${country.name}?`, a: `${featureContext} If an alternate grade, size, profile, coating or finish is proposed, keep acceptance subject to the project or consultant approval process.` },
      { q: `What delivery information matters for ${product.name} in ${country.name}?`, a: deliveryCheckByCountry[country.slug] || `State the exact destination, required delivery window, packing expectations and any site receiving constraints.` },
    ],
    relatedHeading: `Related ${product.category.replace(' Products', '')} Products for ${country.name}`,
  };
}

export function getCountryProductSeo(product: Product, country: Country): CountryProductSeoOverride {
  if (product.slug === 'gi-coil' && giCoilCountrySeo[country.slug]) return giCoilCountrySeo[country.slug];
  return generatedCountryProductSeo(product, country);
}

export function countryProductGuide(product: Product, country: Country) {
  const note = countryNotes[country.slug] || countryNotes.uae;
  return [
    `${product.name} enquiries for ${country.name} should include product specification and delivery context together. Confirm size, grade or material, thickness, length, finish, quantity and whether drawings, BOQ notes or certificate requirements apply.`,
    `This product is commonly used for ${product.applications.join(', ').toLowerCase()}. If it is part of a larger package, include related items from the same category so the full requirement can be reviewed together.`,
    note.logistics,
    note.compliance,
    `The ${country.name} page uses the same product photo, description and product data as the main ${product.name} page. This keeps product information consistent across the catalogue, category pages and country-specific pages.`,
  ];
}

export function countryApplicationGuide(application: Application, country: Country) {
  const names = productNames(application.recommendedProducts);
  const note = countryNotes[country.slug] || countryNotes.uae;
  return [
    `${application.title} projects in ${country.name} may require ${names}. The exact mix depends on drawings, installation method, finish requirements, site conditions and delivery schedule.`,
    `Procurement teams should share project location, scope of work, BOQ references, product sizes, grade, coating or finish, thickness and quantity. For support systems or framing work, accessory lists and installation environment are also useful.`,
    note.logistics,
    note.compliance,
  ];
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}

export function countryNames() {
  return countries.map((country) => country.name).join(', ');
}
