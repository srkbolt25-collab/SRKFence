import type { Application, CategoryInfo, Product } from './data';

export const SALES_PHONE = '+971 58 660 0183';

type ProductKeywordProfile = {
  primary: string;
  secondary: string[];
  title: string;
  description: string;
  content: string;
};

const productKeywordProfiles: Record<string, ProductKeywordProfile> = {
  'ms-hollow-sections': {
    primary: 'MS Hollow Sections Supplier',
    secondary: ['RHS sections', 'SHS sections', 'mild steel hollow sections'],
    title: 'MS Hollow Sections Supplier | RHS & SHS Sections',
    description: 'MS hollow sections for frames and fabrication, including RHS and SHS sections. Review section size, wall thickness and length for project RFQs.',
    content: 'The range covers mild steel hollow sections including RHS and SHS profiles for frames, supports, fabrication packages and general engineering work.',
  },
  'ms-beams': {
    primary: 'MS Beams Supplier',
    secondary: ['I beams', 'H beams', 'structural steel beams'],
    title: 'MS Beams Supplier | I & H Structural Beams',
    description: 'MS beams for structural frames and support work, including I beams and H beams. Compare beam size, grade, length and cutting requirements for RFQs.',
    content: 'MS beams include structural I beam and H beam options used for frames, platforms, supports and industrial construction packages.',
  },
  'ms-channels': {
    primary: 'MS Channels Supplier',
    secondary: ['C channels', 'U channels', 'mild steel channels'],
    title: 'MS Channels Supplier | C & U Steel Channels',
    description: 'MS channels for bracing, support frames and fabrication, including C channels and U channels. Review size, thickness, length and quantity for RFQs.',
    content: 'Mild steel C channels and U channels are commonly specified for support frames, bracing, platforms and fabrication assemblies.',
  },
  'ms-bars': {
    primary: 'MS Bars Supplier',
    secondary: ['round bars', 'flat bars', 'square bars'],
    title: 'MS Bars Supplier | Round, Flat & Square Bars',
    description: 'MS bars for fabrication and engineering, including round bars, flat bars and square bars. Review size, grade, length and quantity for project RFQs.',
    content: 'MS bars are available for round bar, flat bar and square bar requirements used in fabrication, machining, brackets, supports and general engineering.',
  },
  'ms-angles': {
    primary: 'MS Angles Supplier',
    secondary: ['equal angles', 'unequal angles', 'mild steel angles'],
    title: 'MS Angles Supplier | Equal & Unequal Angles',
    description: 'MS angles for frames, racks, bracing and fabrication. Compare equal and unequal steel angles by leg size, thickness, length and finish for RFQs.',
    content: 'Mild steel angles include equal-angle and unequal-angle profiles for bracing, frames, racks, edge supports and fabrication work.',
  },
  'hr-coils-ms': {
    primary: 'HR Coils Supplier',
    secondary: ['hot rolled steel coil', 'HR steel coil', 'mild steel coil'],
    title: 'HR Coils Supplier | Hot Rolled Steel Coil',
    description: 'HR coils for processing and fabrication. Review hot rolled steel coil thickness, width, grade, coil weight and tonnage for project RFQs.',
    content: 'Hot rolled steel coils are suited to processing, cutting, forming and fabrication where an HR mild steel coil specification is required.',
  },
  'cr-coils-ms': {
    primary: 'CR Coils Supplier',
    secondary: ['cold rolled steel coil', 'CR steel coil', 'cold rolled sheet coil'],
    title: 'CR Coils Supplier | Cold Rolled Steel Coil',
    description: 'CR coils for forming and precision sheet applications. Compare cold rolled steel coil thickness, width, surface requirement and quantity for RFQs.',
    content: 'Cold rolled steel coils are selected where smoother surface quality, closer thickness control or forming performance is important.',
  },
  'ms-sheets': {
    primary: 'MS Sheets Supplier',
    secondary: ['mild steel sheet', 'steel sheets', 'fabrication sheet'],
    title: 'MS Sheets Supplier | Mild Steel Sheets',
    description: 'MS sheets for fabrication, panels and general construction. Review mild steel sheet thickness, size, grade and cut-to-size requirements for RFQs.',
    content: 'Mild steel sheets are widely used for panels, covers, trays, enclosures, fabrication work and general construction requirements.',
  },
  'ms-plates': {
    primary: 'MS Plates Supplier',
    secondary: ['mild steel plates', 'steel plate', 'structural plates'],
    title: 'MS Plates Supplier | Mild Steel Plates',
    description: 'MS plates for base plates, structural parts and heavy fabrication. Compare mild steel plate thickness, size, grade and cutting requirements.',
    content: 'Mild steel plates are commonly specified for base plates, brackets, structural parts, machine bases and heavy-duty fabrication.',
  },
  'mild-steel-gratings': {
    primary: 'Mild Steel Gratings Supplier',
    secondary: ['steel grating panels', 'walkway grating', 'industrial grating'],
    title: 'Mild Steel Gratings Supplier | Steel Grating',
    description: 'Mild steel gratings for walkways, platforms and drainage covers. Review steel grating panel size, load requirement, finish and quantity for RFQs.',
    content: 'Steel grating panels are used for industrial walkways, platforms, maintenance areas, drainage covers and open-grid flooring applications.',
  },
  'decking-sheets-ms': {
    primary: 'MS Decking Sheets Supplier',
    secondary: ['metal decking sheets', 'composite deck sheets', 'MS deck profile'],
    title: 'MS Decking Sheets Supplier | Metal Deck',
    description: 'MS decking sheets for composite flooring and mezzanines. Compare metal deck profile, thickness, length and drawing requirements for project RFQs.',
    content: 'MS decking sheets and metal deck profiles are used in composite slabs, mezzanine flooring and drawing-based deck applications.',
  },
  'ms-shear-studs': {
    primary: 'MS Shear Studs Supplier',
    secondary: ['shear connectors', 'deck shear studs', 'stud welding'],
    title: 'MS Shear Studs Supplier | Deck Shear Studs',
    description: 'MS shear studs for composite deck and structural connections. Review stud diameter, length, welding method and quantity before sending an RFQ.',
    content: 'Deck shear studs act as shear connectors in composite slab and structural deck systems where stud size and welding requirements follow the project design.',
  },
  'ss-coil': {
    primary: 'SS Coil Supplier',
    secondary: ['stainless steel coil', 'SS coils', 'stainless coil'],
    title: 'SS Coil Supplier | Stainless Steel Coil',
    description: 'SS coils for fabrication, cladding and processing. Compare stainless steel coil grade, thickness, width, finish and coil quantity for RFQs.',
    content: 'Stainless steel coils are selected by grade, thickness, width and surface finish for fabrication, cladding, forming and industrial processing.',
  },
  'ss-wire': {
    primary: 'SS Wire Supplier',
    secondary: ['stainless steel wire', 'SS wire coil', 'stainless wire'],
    title: 'SS Wire Supplier | Stainless Steel Wire',
    description: 'SS wire for fabrication, mesh, tying and forming. Review stainless steel wire grade, diameter, finish, coil form and quantity for project RFQs.',
    content: 'Stainless steel wire is used for fabrication, mesh, tying, forming and industrial applications where grade, diameter and finish matter.',
  },
  'ss-plain-sheet': {
    primary: 'SS Plain Sheet Supplier',
    secondary: ['stainless steel sheet', 'SS sheet', 'stainless plain sheet'],
    title: 'SS Plain Sheet Supplier | Stainless Sheet',
    description: 'SS plain sheets for fabrication, cladding and finishing. Compare stainless steel sheet grade, thickness, size and finish for project RFQs.',
    content: 'Stainless steel plain sheets are specified by grade, thickness, sheet size and finish for fabrication, cladding and architectural applications.',
  },
  'ss-slitted-coil': {
    primary: 'SS Slitted Coil Supplier',
    secondary: ['stainless slit coil', 'SS slit coil', 'stainless steel strips'],
    title: 'SS Slitted Coil Supplier | Stainless Strips',
    description: 'SS slitted coils for strip processing and fabrication. Review stainless slit coil grade, strip width, thickness, finish and quantity for RFQs.',
    content: 'Stainless steel slit coils provide narrow strip widths for processing, fabrication and formed components where width tolerance and finish are important.',
  },
  'gi-coil': {
    primary: 'GI Coil Supplier in UAE',
    secondary: [
      'galvanized steel coil supplier UAE',
      'galvanized steel coil UAE',
      'hot dip galvanized steel coil',
      'GI coil Z60 Z275',
      'ASTM A653 galvanized coil',
      'GI coil specifications',
    ],
    title: 'GI Coil Supplier in UAE | Galvanized Steel Coil',
    description: 'GI coil supplier in UAE for galvanized steel coils. Compare grade, thickness, width, zinc coating Z60–Z275, standards, documentation and delivery.',
    content: 'SRK Steel supplies GI coil for UAE project enquiries, with sourcing reviewed against steel grade, base-metal thickness, width, zinc coating requirement, surface condition, documentation, quantity and delivery rather than price alone.'
  },
  'ppgi-coil': {
    primary: 'PPGI Coil Supplier',
    secondary: ['pre-painted galvanized coil', 'colour coated steel coil', 'PPGI steel coil'],
    title: 'PPGI Coil Supplier | Pre-Painted GI Coil',
    description: 'PPGI coils for roofing, cladding and coated fabrication. Compare pre-painted galvanized coil colour, coating, thickness, width and quantity.',
    content: 'Pre-painted galvanized steel coils combine a zinc-coated steel substrate with colour coating for roofing, cladding, panels and fabricated products.',
  },
  'aluzinc-coil': {
    primary: 'Aluzinc Coil Supplier',
    secondary: ['aluminium-zinc coil', 'Aluzinc steel coil', 'AZ coated coil'],
    title: 'Aluzinc Coil Supplier | Aluminium-Zinc Coil',
    description: 'Aluzinc coils for roofing, cladding and fabrication. Review aluminium-zinc coated coil thickness, width, coating requirement and quantity for RFQs.',
    content: 'Aluzinc steel coil uses an aluminium-zinc metallic coating and is selected for roofing, cladding and fabrication based on coating, thickness and exposure conditions.',
  },
  'pvdf-coils': {
    primary: 'PVDF Coils Supplier',
    secondary: ['PVDF coated coil', 'colour coated steel coil', 'architectural coated coil'],
    title: 'PVDF Coils Supplier | PVDF Coated Steel',
    description: 'PVDF coated coils for architectural cladding and premium colour-coated applications. Compare colour, coating system, thickness and width for RFQs.',
    content: 'PVDF coated steel coils are suited to architectural cladding and colour-coated applications where coating durability and finish consistency are important.',
  },
  'gi-plain-sheet': {
    primary: 'GI Plain Sheet Supplier',
    secondary: ['galvanized steel sheet', 'GI sheet', 'zinc coated sheet'],
    title: 'GI Plain Sheet Supplier | Galvanized Sheet',
    description: 'GI plain sheets for fabrication, ducting and cladding. Compare galvanized steel sheet thickness, size, zinc coating and quantity for RFQs.',
    content: 'Galvanized steel plain sheets are used for fabrication, ducting, panels and cladding where sheet thickness and zinc coating specification matter.',
  },
  'gi-slitted-coils': {
    primary: 'GI Slitted Coils Supplier',
    secondary: ['galvanized slit coils', 'GI steel strips', 'zinc coated strip'],
    title: 'GI Slitted Coils Supplier | Galvanized Strips',
    description: 'GI slitted coils for strip processing and fabrication. Review galvanized strip width, thickness, zinc coating, coil weight and quantity for RFQs.',
    content: 'Galvanized slit coils provide zinc-coated steel strips for roll forming, fabrication and component production where strip width and coating are specified.',
  },
  'ppgi-slitted-coils': {
    primary: 'PPGI Slitted Coils Supplier',
    secondary: ['pre-painted slit coils', 'colour coated steel strips', 'PPGI strips'],
    title: 'PPGI Slitted Coils Supplier | Coated Strips',
    description: 'PPGI slitted coils for coloured strip processing and fabrication. Compare strip width, thickness, coating, colour and quantity for RFQs.',
    content: 'Pre-painted galvanized slit coils provide colour-coated steel strips for roll forming, trims, accessories and fabricated components.',
  },
  'ppgi-plain-sheet': {
    primary: 'PPGI Plain Sheet Supplier',
    secondary: ['pre-painted galvanized sheet', 'colour coated steel sheet', 'PPGI sheet'],
    title: 'PPGI Plain Sheet Supplier | Coated Steel Sheet',
    description: 'PPGI plain sheets for panels, cladding and fabrication. Compare pre-painted galvanized sheet colour, coating, thickness and sheet size for RFQs.',
    content: 'Pre-painted galvanized plain sheets are colour-coated steel sheets used for panels, cladding, covers and fabrication requirements.',
  },
  'roof-insulated-panels': {
    primary: 'Roof Insulated Panels Supplier',
    secondary: ['GI roof sandwich panels', 'PPGI insulated roof panels', 'sandwich roof panels'],
    title: 'Roof Insulated Panels Supplier | GI/PPGI Panels',
    description: 'Roof insulated panels with GI or PPGI skins for industrial roofing. Compare sandwich panel thickness, profile, insulation core and finish for RFQs.',
    content: 'GI and PPGI sandwich roof panels combine profiled steel skins with an insulation core for industrial roofing and temperature-control applications.',
  },
  'wall-insulated-panels': {
    primary: 'Wall Insulated Panels Supplier',
    secondary: ['sandwich wall panels', 'insulated steel wall panels', 'PPGI wall panels'],
    title: 'Wall Insulated Panels Supplier | Sandwich Panels',
    description: 'Insulated wall panels for industrial cladding and enclosures. Compare sandwich wall panel thickness, insulation core, steel skin and finish for RFQs.',
    content: 'Insulated steel wall panels use interlocking sandwich-panel construction for industrial cladding, enclosures and temperature-controlled spaces.',
  },
  'corrugated-roofing-sheet': {
    primary: 'Corrugated Roofing Sheet Supplier',
    secondary: ['GI roofing sheets', 'galvanized corrugated sheets', 'metal roofing sheets'],
    title: 'Corrugated Roofing Sheet Supplier | GI Roofing',
    description: 'Corrugated roofing sheets for industrial and commercial roofs. Compare GI metal roofing sheet profile, thickness, coating, length and quantity for RFQs.',
    content: 'GI corrugated roofing sheets are profiled metal roofing panels selected by corrugation profile, thickness, coating, sheet length and roof application.',
  },
  'corrugated-wall-sheet': {
    primary: 'Corrugated Wall Sheet Supplier',
    secondary: ['corrugated wall cladding', 'GI wall sheets', 'metal cladding sheets'],
    title: 'Corrugated Wall Sheet Supplier | GI Cladding',
    description: 'Corrugated wall sheets for industrial cladding and enclosures. Compare GI wall cladding profile, thickness, coating, length and colour for RFQs.',
    content: 'Corrugated wall cladding sheets are used on warehouses, factories and industrial enclosures where profile, coating, length and finish must match the project.',
  },
  'corrugated-fence-sheet-panel': {
    primary: 'Corrugated Fence Sheet Supplier',
    secondary: ['GI fence panels', 'corrugated fencing sheets', 'temporary fence panels'],
    title: 'Corrugated Fence Sheet Supplier | GI Fence Panels',
    description: 'Corrugated fence sheets for site hoarding and perimeter fencing. Compare GI fence panel profile, thickness, coating, length and colour for RFQs.',
    content: 'GI corrugated fence panels are used for perimeter fencing, temporary hoarding and site barriers where sheet profile, thickness and coating are important.',
  },
  'corrugated-curve': {
    primary: 'Corrugated Curve Supplier',
    secondary: ['curved roofing sheets', 'curved corrugated panels', 'arched roof sheets'],
    title: 'Corrugated Curve Supplier | Curved Roofing',
    description: 'Corrugated curved sheets for arched roofs and canopies. Review curved roofing sheet profile, radius, thickness, coating and length for project RFQs.',
    content: 'Curved corrugated roofing sheets are formed to a project radius for canopies, arched roofs and curved cladding applications.',
  },
  'corrugated-ridge': {
    primary: 'Corrugated Ridge Supplier',
    secondary: ['roof ridge caps', 'corrugated ridge flashing', 'metal ridge cover'],
    title: 'Corrugated Ridge Supplier | Roof Ridge Caps',
    description: 'Corrugated ridge caps for closing metal roof apexes. Compare ridge profile, angle, thickness, coating, length and matching roofing sheet for RFQs.',
    content: 'Metal roof ridge caps close and weatherproof the roof apex and should match the corrugated roofing profile, coating, angle and installation detail.',
  },
  'gutter-and-flashing': {
    primary: 'Gutter and Flashing Supplier',
    secondary: ['roof gutters', 'metal flashing', 'GI flashing'],
    title: 'Gutter and Flashing Supplier | Roof Accessories',
    description: 'Roof gutters and GI flashing for roof edges, drainage and weatherproofing. Review profile, thickness, coating, dimensions and lengths for RFQs.',
    content: 'GI roof gutters and metal flashing are formed accessories used for drainage, roof-edge protection, transitions and weatherproofing details.',
  },
  'gi-decking-sheet': {
    primary: 'GI Decking Sheet Supplier',
    secondary: ['45/150 decking sheet', '75/305 decking sheet', 'metal deck sheet'],
    title: 'GI Decking Sheet Supplier | 45/150 & 75/305',
    description: 'GI decking sheets in 45/150 and 75/305 profiles for composite slabs. Compare metal deck profile, thickness, length and coating for RFQs.',
    content: 'GI metal decking sheets include 45/150 and 75/305 profiles for composite slab and mezzanine applications where deck geometry and thickness follow drawings.',
  },
  'shear-studs': {
    primary: 'Shear Studs Supplier',
    secondary: ['shear connectors', 'deck shear studs', 'headed studs'],
    title: 'Shear Studs Supplier | Deck Shear Connectors',
    description: 'Shear studs for composite slab and metal decking systems. Review headed stud diameter, length, welding method and quantity for project RFQs.',
    content: 'Headed shear studs act as shear connectors between steel beams and composite concrete slabs in metal decking systems.',
  },
  'c-purlins': {
    primary: 'C Purlins Supplier',
    secondary: ['galvanized C purlins', 'C channel purlins', 'roof purlins'],
    title: 'C Purlins Supplier | Galvanized C Purlins',
    description: 'C purlins for roof and wall support systems. Compare galvanized C purlin section depth, flange, lip, thickness, punching and finish for RFQs.',
    content: 'Galvanized C purlins are cold-formed roof and wall support members selected by section depth, flange, lip, thickness, punching and finish.',
  },
  'z-purlins': {
    primary: 'Z Purlins Supplier',
    secondary: ['galvanized Z purlins', 'Z section purlins', 'roof purlins'],
    title: 'Z Purlins Supplier | Galvanized Z Purlins',
    description: 'Z purlins for roof and wall support systems. Compare galvanized Z purlin section size, thickness, overlap, punching, length and finish for RFQs.',
    content: 'Galvanized Z purlins are cold-formed structural support profiles used in roofing and wall systems, especially where lapped continuity is required.',
  },
  'drywall-partition-systems': {
    primary: 'Drywall Partition Systems Supplier',
    secondary: ['GI studs and tracks', 'drywall metal framing', 'partition profiles'],
    title: 'Drywall Partition Systems Supplier | GI Stud & Track',
    description: 'Drywall partition systems with GI studs and tracks for interior framing. Compare profile size, gauge, length and accessories for project RFQs.',
    content: 'GI drywall studs and tracks form lightweight partition framing systems for interior fitout, ceilings and wall assemblies.',
  },
  'strut-track': {
    primary: 'Strut & Track Supplier',
    secondary: ['strut channels', 'support channels', 'MEP strut systems'],
    title: 'Strut & Track Supplier | MEP Strut Channels',
    description: 'Strut channels and tracks for MEP support systems. Compare channel size, thickness, slot pattern, finish and accessory requirements for RFQs.',
    content: 'Strut channels and track systems provide modular support for MEP services, cable trays, pipes and equipment where load and finish requirements matter.',
  },
  'gi-pipe': {
    primary: 'GI Pipe Supplier',
    secondary: ['galvanized steel pipe', 'GI tubes', 'galvanized pipe'],
    title: 'GI Pipe Supplier | Galvanized Steel Pipe',
    description: 'GI pipes for construction, MEP and fabrication work. Compare galvanized steel pipe diameter, thickness, length, coating and quantity for RFQs.',
    content: 'Galvanized steel pipes and GI tubes are used for construction, MEP support and fabrication where diameter, wall thickness, length and coating must be confirmed.',
  },
  'aluminium-coil': {
    primary: 'Aluminium Coil Supplier',
    secondary: ['aluminium coils', 'aluminium sheet coil', 'roofing aluminium coil'],
    title: 'Aluminium Coil Supplier | Aluminium Sheet Coil',
    description: 'Aluminium coils for roofing, cladding and fabrication. Compare aluminium coil alloy, temper, thickness, width, finish and quantity for project RFQs.',
    content: 'Aluminium coils are selected by alloy, temper, thickness, width and finish for roofing accessories, cladding, panels and fabrication work.',
  },
  'aluminium-plain-sheet': {
    primary: 'Aluminium Plain Sheet Supplier',
    secondary: ['aluminium sheet', 'plain aluminium sheets', 'aluminium plate sheet'],
    title: 'Aluminium Plain Sheet Supplier | Aluminium Sheet',
    description: 'Aluminium plain sheets for panels, cladding and fabrication. Compare aluminium sheet alloy, temper, thickness, size and finish for project RFQs.',
    content: 'Plain aluminium sheets are lightweight fabrication and cladding materials selected by alloy, temper, thickness, sheet size and finish.',
  },
  'pre-painted-aluminium-coils': {
    primary: 'Pre-painted Aluminium Coils Supplier',
    secondary: ['colour coated aluminium coil', 'prepainted aluminium coil', 'coated aluminium'],
    title: 'Pre-Painted Aluminium Coils Supplier | Coated Coil',
    description: 'Pre-painted aluminium coils for cladding, panels and roofing accessories. Compare colour-coated coil alloy, thickness, width, paint finish and quantity.',
    content: 'Colour-coated aluminium coils combine lightweight aluminium with a pre-applied paint finish for cladding, panels, trims and roofing accessories.',
  },
  'pfmb-psmr-aluminium-alloy-3003-h14-coils': {
    primary: 'PFMB/PSMR Aluminium 3003-H14 Coils',
    secondary: ['3003-H14 aluminium coil', 'PSMR 75 micron coating', 'coated aluminium coil'],
    title: 'PFMB/PSMR 3003-H14 Aluminium Coils',
    description: '3003-H14 aluminium coils with PFMB/PSMR coating for cladding and fabrication. Review alloy, temper, 75-micron coating, thickness and width for RFQs.',
    content: 'PFMB/PSMR aluminium alloy 3003-H14 coils are specified for coated sheet, cladding and fabrication where alloy temper and coating thickness must be confirmed.',
  },
};

const uaeProductTitleOverrides: Record<string, string> = {
  'ms-hollow-sections': 'MS Hollow Sections Supplier UAE | RHS & SHS',
  'wall-insulated-panels': 'Wall Insulated Panels Supplier UAE | Sandwich Panels',
  'corrugated-fence-sheet-panel': 'Corrugated Fence Sheet Supplier UAE | GI Panels',
  'drywall-partition-systems': 'Drywall Systems Supplier UAE | GI Stud & Track',
  'pre-painted-aluminium-coils': 'Pre-Painted Aluminium Coil Supplier UAE | Coated Coil',
};

function productPrimaryInUae(primary: string, product: Product) {
  if (/\bUAE\b/i.test(primary)) return primary;
  if (/Supplier$/i.test(primary)) return primary.replace(/Supplier$/i, 'Supplier in UAE');
  return `${product.name} Supplier in UAE`;
}

function productTitleInUae(title: string, product: Product) {
  if (uaeProductTitleOverrides[product.slug]) return uaeProductTitleOverrides[product.slug];
  if (/\bUAE\b/i.test(title)) return title;
  if (/Supplier/i.test(title)) return title.replace(/ Supplier/i, ' Supplier UAE');
  return `${title} UAE`;
}

export function getProductKeywordProfile(product: Product): ProductKeywordProfile {
  const base = productKeywordProfiles[product.slug] || {
    primary: `${product.name} Supplier`,
    secondary: [product.name, product.category],
    title: `${product.name} Supplier`,
    description: `${product.short} Review specification, quantity and RFQ details for project supply enquiries.`,
    content: product.intro,
  };
  const primary = productPrimaryInUae(base.primary, product);
  const localizedSecondary = base.secondary.slice(0, 3).map((keyword) => /\bUAE\b/i.test(keyword) ? keyword : `${keyword} UAE`);
  return {
    ...base,
    primary,
    title: productTitleInUae(base.title, product),
    secondary: Array.from(new Set([primary, `${product.name} supplier UAE`, ...base.secondary, ...localizedSecondary])),
  };
}

type CategoryKeywordProfile = {
  primary: string;
  secondary: string[];
  title: string;
  description: string;
  content: string;
};

const categoryKeywordProfiles: Record<string, CategoryKeywordProfile> = {
  'mild-steel-products': {
    primary: 'Mild Steel Products Supplier UAE',
    secondary: ['MS steel supplier', 'MS beams and channels', 'mild steel sheets and plates'],
    title: 'Mild Steel Products Supplier UAE | MS Steel',
    description: `Mild steel supplier for MS beams, channels, bars, angles, sheets, plates, coils and gratings. Call ${SALES_PHONE} for UAE/GCC RFQs.`,
    content: 'The mild steel range covers MS beams, channels, hollow sections, bars, angles, HR/CR coils, sheets, plates, gratings, decking sheets and shear studs for structural and fabrication work.',
  },
  'stainless-steel': {
    primary: 'Stainless Steel Supplier UAE',
    secondary: ['SS coil supplier', 'stainless steel sheets', 'SS wire supplier'],
    title: 'Stainless Steel Supplier UAE | SS Coils & Sheets',
    description: `Stainless steel supplier for SS coils, wire, plain sheets and slitted coils for fabrication and cladding. Call ${SALES_PHONE} for UAE/GCC RFQs.`,
    content: 'The stainless steel range includes SS coils, stainless steel wire, plain sheets and slitted coils for fabrication, cladding, forming and industrial processing.',
  },
  'galvanized-steel': {
    primary: 'Galvanized Steel Supplier UAE',
    secondary: ['GI steel supplier', 'PPGI coil supplier', 'GI sheets and purlins'],
    title: 'Galvanized Steel Supplier UAE | GI & PPGI',
    description: `GI and galvanized steel supplier for coils, PPGI, sheets, purlins, decking, panels and roofing products. Call ${SALES_PHONE} for UAE/GCC RFQs.`,
    content: 'The galvanized steel range covers GI coils, PPGI coils, GI sheets, purlins, decking sheets, insulated panels, corrugated roofing, drywall systems, strut channels and GI pipes.',
  },
  'aluminium': {
    primary: 'Aluminium Supplier UAE',
    secondary: ['aluminium coil supplier', 'aluminium sheet supplier', 'pre-painted aluminium coils'],
    title: 'Aluminium Supplier UAE | Coils & Sheets',
    description: `Aluminium supplier for coils, plain sheets, pre-painted coils and 3003-H14 coated coils for cladding and fabrication. Call ${SALES_PHONE} for RFQs.`,
    content: 'The aluminium range includes aluminium coils, plain sheets, pre-painted aluminium coils and PFMB/PSMR 3003-H14 coated coils for lightweight cladding, panels and fabrication.',
  },
};

export function getCategoryKeywordProfile(category: CategoryInfo): CategoryKeywordProfile {
  return categoryKeywordProfiles[category.slug] || {
    primary: `${category.name} Supplier`,
    secondary: [category.name],
    title: `${category.name} Supplier`,
    description: `${category.description} Call ${SALES_PHONE} for project RFQs.`,
    content: category.description,
  };
}

type ApplicationKeywordProfile = {
  primary: string;
  secondary: string[];
  title: string;
  description: string;
  content: string;
};

const applicationKeywordProfiles: Record<string, ApplicationKeywordProfile> = {
  'industrial-warehouses': {
    primary: 'Warehouse Steel Products',
    secondary: ['warehouse roofing steel', 'purlins and decking sheets', 'industrial steel supply'],
    title: 'Warehouse Steel Products | Purlins & Decking',
    description: 'Warehouse steel products including C/Z purlins, decking sheets, insulated roof panels, beams and support systems for industrial building RFQs.',
    content: 'Industrial warehouse steel packages commonly combine C and Z purlins, metal decking sheets, insulated roof panels, beams, channels and support systems.',
  },
  'commercial-construction': {
    primary: 'Commercial Construction Steel Products',
    secondary: ['metal decking sheets', 'steel sheets', 'partition systems'],
    title: 'Commercial Construction Steel | Decking & Sheets',
    description: 'Commercial construction steel products including decking sheets, structural beams, GI/SS sheets, drywall systems and coated materials for project RFQs.',
    content: 'Commercial construction packages often combine metal decking sheets, structural steel beams, GI and stainless sheets, partition systems and coated products.',
  },
  'interior-fitout': {
    primary: 'Interior Fitout Steel Products',
    secondary: ['drywall studs and tracks', 'GI partition systems', 'stainless and aluminium sheets'],
    title: 'Interior Fitout Steel | Drywall Studs & Tracks',
    description: 'Interior fitout steel products including drywall studs, tracks, GI sheets, stainless sheets and aluminium sheets for partition and finishing RFQs.',
    content: 'Interior fitout steel packages commonly include drywall studs and tracks, GI partition profiles, stainless sheets and aluminium sheets for finishing work.',
  },
  'mep-support-systems': {
    primary: 'MEP Support Steel Products',
    secondary: ['strut channels', 'GI pipes', 'MEP support systems'],
    title: 'MEP Support Steel | Strut Channels & GI Pipes',
    description: 'MEP support steel products including strut channels, tracks, GI pipes and support materials for mechanical, electrical and services installations.',
    content: 'MEP support systems commonly use strut channels, tracks, GI pipes and related steel support materials selected by load, finish and installation environment.',
  },
  'roofing-cladding': {
    primary: 'Roofing and Cladding Steel Products',
    secondary: ['corrugated roofing sheets', 'PPGI coils', 'purlins and insulated panels'],
    title: 'Roofing & Cladding Steel | Sheets, Coils & Purlins',
    description: 'Roofing and cladding steel products including corrugated sheets, PPGI/GI coils, C/Z purlins, insulated panels, gutters and flashing for project RFQs.',
    content: 'Roofing and cladding systems combine corrugated sheets, GI and PPGI coils, purlins, insulated panels, gutters and flashing selected by profile, coating and site exposure.',
  },
  'fabrication-workshops': {
    primary: 'Steel Products for Fabrication',
    secondary: ['mild steel fabrication materials', 'stainless steel sheets and coils', 'aluminium sheets and coils'],
    title: 'Fabrication Steel Products | MS, SS, GI & Aluminium',
    description: 'Steel products for fabrication workshops including MS sections and plates, stainless sheets/coils, GI sheets and aluminium sheets/coils for processing RFQs.',
    content: 'Fabrication workshops use a mixed range of mild steel sections and plates, stainless steel sheets/coils, galvanized sheets and aluminium sheets/coils for processing.',
  },
};

export function getApplicationKeywordProfile(application: Application): ApplicationKeywordProfile {
  return applicationKeywordProfiles[application.slug] || {
    primary: `${application.title} Steel Products`,
    secondary: application.recommendedProducts.slice(0, 3),
    title: `${application.title} Steel Products`,
    description: application.description,
    content: application.description,
  };
}
