import type { Metadata } from 'next';

export const siteUrl = 'https://www.srkfencing.com';
export const companyName = 'SRK Fence';
export const companyLegalName = 'SRK FENCE Industries';
export const primaryPhone = '+971586600183';
export const secondaryPhone = '+971522160874';
export const primaryEmail = 'info@srkfencing.com';
export const salesEmail = 'Sales@srkmetals.com';

export const entityDescription =
  'SRK Fence is a Dubai-based fencing supplier, contractor, and installation company providing chain link fencing, welded mesh fencing, steel fencing, PVC fencing, anti-climb fencing, temporary fencing, barbed wire, razor wire, gate systems, fence posts, accessories, and custom perimeter security solutions across UAE, GCC, and Middle East.';

export const marketsServed = [
  'United Arab Emirates',
  'Bahrain',
  'Qatar',
  'Kuwait',
  'Saudi Arabia',
  'Iraq',
  'Oman',
  'Jordan',
];

export type FaqItem = {
  question: string;
  answer: string;
};

export type LinkItem = {
  label: string;
  href: string;
};

export type StaticSeoProfile = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
  image?: string;
  intent: string;
};

export type ProductSeoPage = {
  slug: string;
  name: string;
  category: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  shortDescription: string;
  intro: string;
  image: string;
  specs: Array<{ label: string; value: string }>;
  applications: LinkItem[];
  internalLinks: LinkItem[];
  faqs: FaqItem[];
  rfqPrompt: string;
};

export const productSeoPages: ProductSeoPage[] = [
  {
    slug: 'chain-link-fence',
    name: 'Chain Link Fence',
    category: 'Wire Fencing',
    primaryKeyword: 'chain link fence supplier in Dubai',
    secondaryKeywords: ['chain link fence UAE', 'GI chain link fence', 'PVC coated chain link fence', 'boundary fence Dubai'],
    metaTitle: 'Chain Link Fence Supplier in Dubai UAE | SRK Fence',
    metaDescription:
      'SRK Fence supplies chain link fencing in Dubai and UAE for boundaries, warehouses, farms, schools, sports areas, construction sites and industrial projects.',
    h1: 'Chain Link Fence Supplier in Dubai',
    shortDescription:
      'Durable GI and PVC coated chain link fencing for boundaries, construction sites, warehouses, farms, schools and industrial perimeters.',
    intro:
      'SRK Fence supplies chain link fencing for Dubai, UAE and GCC projects that need a practical, visible and cost-effective boundary system. Chain link fence is suitable for open perimeters where airflow and visibility matter, while galvanized and PVC coated options help the fence withstand heat, dust, humidity and coastal exposure. Buyers can request custom height, mesh opening, wire diameter, coating, post type, gate requirement and installation support.',
    image: '/applicartion/heavy-duty-chain-link-fence-gcc-supplier.webp',
    specs: [
      { label: 'Typical height', value: '1.2m to 3.0m, custom heights available' },
      { label: 'Mesh opening', value: 'Commonly 50 x 50mm or 75 x 75mm diamond mesh' },
      { label: 'Wire diameter', value: '2.5mm to 4.0mm depending on security level' },
      { label: 'Material', value: 'Galvanized steel wire or PVC coated galvanized wire' },
      { label: 'Posts and gates', value: 'Round or square steel posts with pedestrian and vehicle gate options' },
    ],
    applications: [
      { label: 'Warehouse Fencing', href: '/applications/warehouses-logistic-centers' },
      { label: 'Farm Fencing', href: '/applications/farms-animal-enclosures' },
      { label: 'Construction Site Fencing', href: '/applications/boundary-security-fencing' },
      { label: 'Boundary Security Fencing', href: '/applications/boundary-security-fencing' },
    ],
    internalLinks: [
      { label: 'GI Chain Link Fence', href: '/products/gi-chain-link-fence' },
      { label: 'PVC Coated Chain Link Fence', href: '/products/pvc-coated-chain-link-fence' },
      { label: 'Fencing Supplier in UAE', href: '/countries/uae' },
      { label: 'Request a Quote', href: '/contact' },
    ],
    faqs: [
      {
        question: 'What is chain link fencing used for?',
        answer:
          'Chain link fencing is used for boundary protection, farms, construction sites, warehouses, schools, parks, sports areas, residential properties and industrial perimeter security.',
      },
      {
        question: 'Can SRK Fence supply galvanized and PVC coated chain link fence?',
        answer:
          'Yes, SRK Fence can supply galvanized chain link fencing and PVC coated chain link fencing with project-specific height, mesh opening, wire diameter, posts and gate options.',
      },
      {
        question: 'What details are needed for a chain link fence quote?',
        answer:
          'Share the fence length, height, mesh opening, wire diameter, coating requirement, post type, gate requirement, delivery location, installation requirement and project drawings if available.',
      },
    ],
    rfqPrompt:
      'Need a chain link fencing quotation? Share fence length, height, mesh size, wire diameter, coating, posts, gates, delivery city and installation requirement for a tailored quote.',
  },
  {
    slug: 'gi-chain-link-fence',
    name: 'GI Chain Link Fence',
    category: 'Wire Fencing',
    primaryKeyword: 'GI chain link fence supplier UAE',
    secondaryKeywords: ['galvanized chain link fence', 'GI fencing Dubai', 'chain link mesh fence UAE'],
    metaTitle: 'GI Chain Link Fence Supplier UAE | Galvanized Chain Link Fence',
    metaDescription:
      'Galvanized GI chain link fence supplier in UAE for boundary fencing, farms, schools, warehouses, sports areas and industrial perimeters.',
    h1: 'GI Chain Link Fence Supplier UAE',
    shortDescription:
      'Galvanized chain link mesh fencing for durable, economical and low-maintenance boundary protection across UAE and GCC projects.',
    intro:
      'GI chain link fence is a galvanized steel mesh fence used where long service life, open visibility and economical perimeter coverage are important. SRK Fence supplies GI chain link fencing for UAE and GCC projects with options for roll length, mesh opening, wire diameter, top rails, tension wire, posts and gates. It is commonly selected for construction boundaries, farms, schools, sports areas, warehouses and general industrial fencing.',
    image: '/Whyusnew/chain-link-fence-supplier-uae-saudi-gcc.png',
    specs: [
      { label: 'Finish', value: 'Hot dip galvanized or electro galvanized wire' },
      { label: 'Mesh opening', value: '50 x 50mm, 60 x 60mm, 75 x 75mm or project-specific' },
      { label: 'Roll length', value: 'Typical 15m, 20m or 30m rolls' },
      { label: 'Wire diameter', value: '2.5mm to 4.0mm common project range' },
      { label: 'Accessories', value: 'Tension wire, tie wire, posts, clamps, gates and fittings' },
    ],
    applications: [
      { label: 'Farms & Animal Enclosures', href: '/applications/farms-animal-enclosures' },
      { label: 'Warehouses & Logistic Centers', href: '/applications/warehouses-logistic-centers' },
      { label: 'Schools & Public Parks', href: '/applications/schools-public-parks' },
    ],
    internalLinks: [
      { label: 'Chain Link Fence', href: '/products/chain-link-fence' },
      { label: 'PVC Coated Chain Link Fence', href: '/products/pvc-coated-chain-link-fence' },
      { label: 'Fence Accessories', href: '/products/fence-accessories' },
    ],
    faqs: [
      {
        question: 'What is GI chain link fence?',
        answer:
          'GI chain link fence is a galvanized steel wire mesh fence with a diamond pattern. It is used for economical boundary protection and general perimeter security.',
      },
      {
        question: 'Is GI chain link fence suitable for outdoor UAE projects?',
        answer:
          'Yes, galvanized wire improves corrosion resistance for outdoor projects. For coastal or higher-corrosion sites, buyers can also consider PVC coated galvanized chain link fence.',
      },
      {
        question: 'Can GI chain link fencing be supplied with gates?',
        answer:
          'Yes, SRK Fence can support pedestrian gates, vehicle gates, posts, clamps, tension wire and related fence accessories as part of the project requirement.',
      },
    ],
    rfqPrompt:
      'Request a GI chain link fence quote with fence length, height, mesh opening, wire diameter, galvanizing requirement, posts, gates and delivery location.',
  },
  {
    slug: 'pvc-coated-chain-link-fence',
    name: 'PVC Coated Chain Link Fence',
    category: 'Wire Fencing',
    primaryKeyword: 'PVC coated chain link fence UAE',
    secondaryKeywords: ['green PVC chain link fence', 'coated chain link fence Dubai', 'weather resistant chain link fence'],
    metaTitle: 'PVC Coated Chain Link Fence UAE | SRK Fence',
    metaDescription:
      'PVC coated chain link fence supplier in UAE for weather-resistant boundaries, sports areas, residential perimeters, farms and commercial fencing.',
    h1: 'PVC Coated Chain Link Fence UAE',
    shortDescription:
      'Weather-resistant PVC coated chain link fencing for projects that need durability, visibility and a cleaner finished appearance.',
    intro:
      'PVC coated chain link fencing combines a galvanized steel core with an outer PVC coating for improved visual finish and weather resistance. It is commonly used for residential boundaries, schools, parks, sports areas, farms and commercial perimeters where a green or custom color coating is preferred. SRK Fence can supply PVC coated chain link fence with project-specific mesh opening, wire diameter, roll length, post system and gate options.',
    image: '/applicartion/eco-pvc-coated-fence-uae-supplier.webp',
    specs: [
      { label: 'Core wire', value: 'Galvanized steel wire with PVC coating' },
      { label: 'Colors', value: 'Green common; custom colors by project requirement' },
      { label: 'Height', value: '1.2m to 3.0m typical range' },
      { label: 'Mesh opening', value: '50 x 50mm or project-specific diamond mesh' },
      { label: 'Use environment', value: 'Residential, commercial, sport, park, farm and light industrial perimeters' },
    ],
    applications: [
      { label: 'Residential Fencing', href: '/applications/residential-fencing' },
      { label: 'Commercial Fencing', href: '/applications/commercial-industrial' },
      { label: 'Schools & Public Parks', href: '/applications/schools-public-parks' },
      { label: 'Farm Fencing', href: '/applications/farms-animal-enclosures' },
    ],
    internalLinks: [
      { label: 'Chain Link Fence', href: '/products/chain-link-fence' },
      { label: 'GI Chain Link Fence', href: '/products/gi-chain-link-fence' },
      { label: 'PVC Hoarding Fence', href: '/products/eco-pvc-hoarding-fence' },
    ],
    faqs: [
      {
        question: 'Why choose PVC coated chain link fence?',
        answer:
          'PVC coated chain link fence offers the open visibility of chain link mesh with a coated finish that improves appearance and helps protect the wire in outdoor conditions.',
      },
      {
        question: 'Where is PVC coated chain link fence used?',
        answer:
          'It is used for homes, schools, parks, sports facilities, farms, commercial compounds and light industrial perimeters where a durable coated fence is preferred.',
      },
      {
        question: 'Can the PVC coating color be customized?',
        answer:
          'Green is common, but color options can be reviewed based on project quantity, specification and timeline.',
      },
    ],
    rfqPrompt:
      'Request a PVC coated chain link quote with height, length, coating color, mesh opening, wire diameter, post type, gate requirement and location.',
  },
  {
    slug: 'welded-mesh-fence',
    name: 'Welded Mesh Fence',
    category: 'Welded Mesh Fencing',
    primaryKeyword: 'welded mesh fence supplier UAE',
    secondaryKeywords: ['welded mesh fencing Dubai', 'steel mesh fencing', 'industrial mesh fencing'],
    metaTitle: 'Welded Mesh Fence Supplier UAE | Industrial Mesh Fencing',
    metaDescription:
      'SRK Fence supplies welded mesh fencing in UAE for commercial, industrial, warehouse, school, park and perimeter security projects.',
    h1: 'Welded Mesh Fence Supplier UAE',
    shortDescription:
      'Rigid welded mesh fencing for strong, clean and scalable perimeter security across commercial and industrial projects.',
    intro:
      'Welded mesh fence uses steel wires welded at each intersection to create a rigid panel system. It is selected for projects that need stronger panel stability than roll mesh, clean visibility and reliable perimeter control. SRK Fence supplies welded mesh fencing for UAE and GCC projects including warehouses, schools, commercial sites, industrial facilities and infrastructure perimeters, with options for height, panel width, wire diameter, coating, posts and gates.',
    image: '/applicartion/galvanized-welded-wire-mesh-fence-uae.webp',
    specs: [
      { label: 'Panel height', value: '1.2m to 3.0m typical range' },
      { label: 'Mesh pattern', value: 'Rectangular or square welded mesh openings' },
      { label: 'Wire diameter', value: '3mm to 6mm common project range' },
      { label: 'Finish', value: 'Galvanized, powder coated or PVC coated options' },
      { label: 'Post system', value: 'Square or profile posts with clamps and gate options' },
    ],
    applications: [
      { label: 'Commercial & Industrial', href: '/applications/commercial-industrial' },
      { label: 'Warehouse Fencing', href: '/applications/warehouses-logistic-centers' },
      { label: 'Data Center Fencing', href: '/applications/data-centers' },
      { label: 'Schools & Public Parks', href: '/applications/schools-public-parks' },
    ],
    internalLinks: [
      { label: 'Anti-Climb 358 Fence', href: '/products/anti-climb-358-fence' },
      { label: 'Steel & Metal Fencing', href: '/products/steel-metal-fencing' },
      { label: 'Security Fencing in Saudi Arabia', href: '/countries/saudi-arabia' },
    ],
    faqs: [
      {
        question: 'What is welded mesh fencing?',
        answer:
          'Welded mesh fencing is a rigid fence panel system made from steel wires welded at each intersection. It provides a strong, neat and visible perimeter barrier.',
      },
      {
        question: 'Is welded mesh stronger than chain link fence?',
        answer:
          'Welded mesh panels are more rigid than chain link mesh, while chain link is more flexible and economical for long boundaries. The best choice depends on the site and security requirement.',
      },
      {
        question: 'Can welded mesh fence be powder coated?',
        answer:
          'Yes, welded mesh panels can be galvanized, powder coated or PVC coated depending on the required finish, exposure and project budget.',
      },
    ],
    rfqPrompt:
      'For a welded mesh fence quote, share panel height, fence length, mesh opening, wire diameter, coating, post type, gates, delivery location and installation requirement.',
  },
  {
    slug: 'anti-climb-358-fence',
    name: 'Anti-Climb 358 Fence',
    category: 'High Security Fencing',
    primaryKeyword: 'anti climb fence supplier UAE',
    secondaryKeywords: ['358 security fence UAE', 'anti climb mesh fencing', 'high security fence Dubai'],
    metaTitle: 'Anti-Climb 358 Fence Supplier UAE | High Security Fencing',
    metaDescription:
      'Anti-climb 358 fencing supplier in UAE for data centers, oil and gas, warehouses, critical infrastructure and high-security perimeters.',
    h1: 'Anti-Climb 358 Fence Supplier UAE',
    shortDescription:
      'High-security 358 welded mesh fencing designed to reduce climbing, cutting and unauthorized access for sensitive sites.',
    intro:
      'Anti-climb 358 fence is a high-security welded mesh system with narrow openings that make climbing and cutting more difficult. SRK Fence supplies anti-climb fencing for data centers, oil and gas facilities, warehouses, industrial compounds, infrastructure projects and border-security perimeters. The system can be specified with anti-climb mesh panels, secure posts, tamper-resistant fixings, toppings, gates and integration-ready security options.',
    image: '/Applicationsnew/high-security-boundary-fencing-contractors-gcc.png',
    specs: [
      { label: 'Mesh opening', value: '358 style narrow aperture mesh, commonly 76.2 x 12.7mm' },
      { label: 'Wire diameter', value: 'Commonly 4mm horizontal and vertical wire' },
      { label: 'Height', value: '2.4m to 3.6m typical high-security range' },
      { label: 'Security options', value: 'Razor wire, barbed wire, secure gates and access control support' },
      { label: 'Finish', value: 'Galvanized and powder coated options' },
    ],
    applications: [
      { label: 'Data Center Fencing', href: '/applications/data-centers' },
      { label: 'Oil & Gas Fencing', href: '/applications/oil-gas-sector' },
      { label: 'Warehouse Fencing', href: '/applications/warehouses-logistic-centers' },
      { label: 'Border Fencing', href: '/applications/country-border-fencing' },
    ],
    internalLinks: [
      { label: 'Welded Mesh Fence', href: '/products/welded-mesh-fence' },
      { label: 'Razor Wire', href: '/products/razor-wire' },
      { label: 'Fencing Supplier in Qatar', href: '/countries/qatar' },
      { label: 'Fencing Supplier in Saudi Arabia', href: '/countries/saudi-arabia' },
    ],
    faqs: [
      {
        question: 'What is anti-climb 358 fencing?',
        answer:
          'Anti-climb 358 fencing is a high-security welded mesh system with narrow openings designed to reduce climbing, cutting and unauthorized access.',
      },
      {
        question: 'Where should anti-climb fencing be used?',
        answer:
          'It is suitable for data centers, warehouses, oil and gas facilities, utilities, airports, government sites, industrial compounds and other high-security perimeters.',
      },
      {
        question: 'Can anti-climb 358 fence include razor wire?',
        answer:
          'Yes, anti-climb 358 fencing can be specified with razor wire, barbed wire, secure gates, toppings and access control provisions depending on site risk.',
      },
    ],
    rfqPrompt:
      'Request an anti-climb fencing quotation with height, perimeter length, security level, mesh specification, coating, gates, toppings, delivery city and installation requirement.',
  },
  {
    slug: 'temporary-fence-panels',
    name: 'Temporary Fence Panels',
    category: 'Temporary Fencing',
    primaryKeyword: 'temporary fence supplier UAE',
    secondaryKeywords: ['construction site fencing Dubai', 'portable fence panels', 'temporary fencing panels UAE'],
    metaTitle: 'Temporary Fence Supplier UAE | Construction Site Fencing Dubai',
    metaDescription:
      'Temporary fence panels for construction sites, events, road works and restricted areas in Dubai, UAE and GCC project locations.',
    h1: 'Temporary Fence Supplier UAE',
    shortDescription:
      'Portable temporary fencing panels for construction sites, events, road works, restricted areas and short-term site safety control.',
    intro:
      'Temporary fence panels are used to secure short-term worksites, construction boundaries, road works, events and restricted areas. SRK Fence supplies temporary fencing options for Dubai, UAE and GCC projects where fast deployment, clear boundaries, safety and easy relocation are important. Temporary fencing can be configured with panel systems, bases, clamps, bracing, gates, privacy screening and project branding where required.',
    image: '/applicartion/temporary-fence-hoarding-uae-construction-site.webp',
    specs: [
      { label: 'Panel type', value: 'Portable welded mesh or temporary panel systems' },
      { label: 'Height', value: 'Commonly 1.8m to 2.4m' },
      { label: 'Accessories', value: 'Bases, clamps, braces, gates and screening options' },
      { label: 'Use cases', value: 'Construction sites, events, road works and restricted zones' },
      { label: 'Installation', value: 'Supply-only or support for project setup by requirement' },
    ],
    applications: [
      { label: 'Construction Site Fencing', href: '/applications/boundary-security-fencing' },
      { label: 'Commercial & Industrial', href: '/applications/commercial-industrial' },
      { label: 'Warehouse Fencing', href: '/applications/warehouses-logistic-centers' },
    ],
    internalLinks: [
      { label: 'PVC Hoarding Fence', href: '/products/eco-pvc-hoarding-fence' },
      { label: 'Barbed Wire', href: '/products/barbed-wire' },
      { label: 'Fencing Supplier in Kuwait', href: '/countries/kuwait' },
    ],
    faqs: [
      {
        question: 'What is temporary fencing used for?',
        answer:
          'Temporary fencing is used for construction sites, events, road works, restricted areas, short-term projects and site safety control.',
      },
      {
        question: 'Can temporary fence panels be moved between sites?',
        answer:
          'Yes, temporary fencing is designed for fast setup, removal and relocation when panels, bases and clamps are specified correctly.',
      },
      {
        question: 'What details are needed for a temporary fence quote?',
        answer:
          'Share the site location, total length, height, required duration, gate requirements, screening needs, delivery timeline and installation requirement.',
      },
    ],
    rfqPrompt:
      'Request a temporary fencing quote with site length, height, project duration, gates, bases, bracing, screening, delivery city and setup requirement.',
  },
  {
    slug: 'eco-pvc-hoarding-fence',
    name: 'ECO PVC Hoarding Fence',
    category: 'ECO / PVC Fencing',
    primaryKeyword: 'PVC hoarding fence Dubai',
    secondaryKeywords: ['construction hoarding fence UAE', 'site hoarding fence', 'eco PVC hoarding'],
    metaTitle: 'PVC Hoarding Fence Dubai | ECO Site Hoarding UAE',
    metaDescription:
      'ECO PVC hoarding fence supplier in Dubai and UAE for construction site boundaries, visual screening, safety control and branded project hoarding.',
    h1: 'PVC Hoarding Fence Dubai',
    shortDescription:
      'Clean, weather-resistant PVC hoarding for construction sites that need safety, privacy, visual screening and a professional site boundary.',
    intro:
      'ECO PVC hoarding fence provides a clean site boundary for construction projects, temporary works and development sites. It is useful where visual screening, safety, branding and weather resistance are priorities. SRK Fence can support PVC hoarding requirements for Dubai and UAE projects with panel sizing, post systems, access gates and site-specific layouts based on drawings or measured running meters.',
    image: '/SRK FENCE Banners2.webp',
    specs: [
      { label: 'Panel type', value: 'PVC hoarding panels for temporary or semi-permanent site enclosure' },
      { label: 'Applications', value: 'Construction sites, project hoarding, privacy screening and site safety' },
      { label: 'Options', value: 'Custom height, access gates, branding support and post layouts' },
      { label: 'Finish', value: 'Clean visual finish with weather-resistant PVC material' },
      { label: 'RFQ basis', value: 'Running meter, height, site layout, gates and installation scope' },
    ],
    applications: [
      { label: 'Construction Site Fencing', href: '/applications/boundary-security-fencing' },
      { label: 'Commercial & Industrial', href: '/applications/commercial-industrial' },
    ],
    internalLinks: [
      { label: 'Temporary Fence Panels', href: '/products/temporary-fence-panels' },
      { label: 'PVC Coated Chain Link Fence', href: '/products/pvc-coated-chain-link-fence' },
      { label: 'Request a Quote', href: '/contact' },
    ],
    faqs: [
      {
        question: 'What is PVC hoarding fence used for?',
        answer:
          'PVC hoarding fence is used for construction site boundaries, visual screening, safety control, temporary project enclosure and branded site hoarding.',
      },
      {
        question: 'Is PVC hoarding suitable for Dubai construction sites?',
        answer:
          'Yes, PVC hoarding is commonly used where a clean, weather-resistant and professional-looking site boundary is required.',
      },
      {
        question: 'Can PVC hoarding include gates?',
        answer:
          'Yes, pedestrian or vehicle access gates can be considered based on the site layout, traffic flow and project requirements.',
      },
    ],
    rfqPrompt:
      'For PVC hoarding pricing, share running meter, height, site drawings, gate requirements, branding needs, installation location and project timeline.',
  },
  {
    slug: 'barbed-wire',
    name: 'Barbed Wire',
    category: 'Security Wire',
    primaryKeyword: 'barbed wire supplier UAE',
    secondaryKeywords: ['galvanized barbed wire', 'security barbed wire', 'farm fencing wire UAE'],
    metaTitle: 'Barbed Wire Supplier UAE | Galvanized Security Barbed Wire',
    metaDescription:
      'SRK Fence supplies galvanized barbed wire in UAE for farms, boundaries, industrial sites and perimeter security projects.',
    h1: 'Barbed Wire Supplier UAE',
    shortDescription:
      'Galvanized barbed wire for farms, boundaries, security toppings and economical perimeter deterrence across UAE and GCC projects.',
    intro:
      'Barbed wire is a cost-effective security wire used for boundary deterrence, farm fencing, industrial perimeters and fence toppings. SRK Fence supplies galvanized barbed wire for UAE and GCC projects where buyers need economical perimeter reinforcement. It can be used with chain link fencing, posts, farm fencing and selected security applications depending on local requirements and project specifications.',
    image: '/Whyusnew/barbed-wire-fencing-security-gcc-middle-east.png',
    specs: [
      { label: 'Material', value: 'Galvanized steel barbed wire' },
      { label: 'Use', value: 'Boundary deterrence, farm fencing and fence topping' },
      { label: 'Packaging', value: 'Coils by project requirement' },
      { label: 'Compatibility', value: 'Can be used with chain link fence, posts and support arms' },
      { label: 'Options', value: 'Wire gauge, barb spacing and coil length by availability' },
    ],
    applications: [
      { label: 'Farm Fencing', href: '/applications/farms-animal-enclosures' },
      { label: 'Boundary Security Fencing', href: '/applications/boundary-security-fencing' },
      { label: 'Oil & Gas Fencing', href: '/applications/oil-gas-sector' },
    ],
    internalLinks: [
      { label: 'Razor Wire', href: '/products/razor-wire' },
      { label: 'Chain Link Fence', href: '/products/chain-link-fence' },
      { label: 'Fencing Supplier in Iraq', href: '/countries/iraq' },
    ],
    faqs: [
      {
        question: 'What is barbed wire used for?',
        answer:
          'Barbed wire is used for farm fencing, boundary deterrence, fence toppings, industrial perimeters and economical perimeter reinforcement.',
      },
      {
        question: 'What is the difference between barbed wire and razor wire?',
        answer:
          'Barbed wire uses sharp barbs along twisted wire, while razor wire uses sharp metal tape profiles and is typically selected for higher-security perimeters.',
      },
      {
        question: 'Can SRK Fence supply barbed wire with chain link fencing?',
        answer:
          'Yes, barbed wire can be quoted with chain link fencing, posts, support arms, gates and related fence accessories based on the project requirement.',
      },
    ],
    rfqPrompt:
      'Request a barbed wire quote with coil quantity, wire gauge, barb spacing if specified, delivery city and whether it will be supplied with posts or fencing.',
  },
  {
    slug: 'razor-wire',
    name: 'Razor Wire',
    category: 'Security Wire',
    primaryKeyword: 'razor wire supplier UAE',
    secondaryKeywords: ['concertina razor wire', 'razor tape fencing', 'perimeter security wire UAE'],
    metaTitle: 'Razor Wire Supplier UAE | Concertina Razor Wire',
    metaDescription:
      'Razor wire and concertina razor wire supplier in UAE for high-security perimeter fencing, industrial sites and critical infrastructure.',
    h1: 'Razor Wire Supplier UAE',
    shortDescription:
      'Concertina razor wire and razor tape for high-security fence toppings, boundary reinforcement and perimeter deterrence.',
    intro:
      'Razor wire is used where a stronger perimeter deterrent is needed than standard barbed wire. SRK Fence supplies razor wire and concertina razor wire for UAE and GCC projects including industrial facilities, warehouses, utilities, oil and gas sites, data centers and high-security perimeters. Razor wire can be specified with anti-climb fence, welded mesh fence, chain link fence and secure posts based on site risk and project drawings.',
    image: '/applicartion/razor-barbed-wire-fence-high-security-gcc.webp',
    specs: [
      { label: 'Type', value: 'Concertina razor wire and razor tape options' },
      { label: 'Use', value: 'High-security toppings, boundary reinforcement and perimeter deterrence' },
      { label: 'Compatibility', value: 'Anti-climb, welded mesh and chain link fence systems' },
      { label: 'Packaging', value: 'Coils by diameter and project quantity' },
      { label: 'Project support', value: 'Supply with posts, arms, gates and fencing by requirement' },
    ],
    applications: [
      { label: 'Data Center Fencing', href: '/applications/data-centers' },
      { label: 'Oil & Gas Fencing', href: '/applications/oil-gas-sector' },
      { label: 'Boundary Security Fencing', href: '/applications/boundary-security-fencing' },
      { label: 'Border Fencing', href: '/applications/country-border-fencing' },
    ],
    internalLinks: [
      { label: 'Anti-Climb 358 Fence', href: '/products/anti-climb-358-fence' },
      { label: 'Barbed Wire', href: '/products/barbed-wire' },
      { label: 'Fencing Supplier in Iraq', href: '/countries/iraq' },
    ],
    faqs: [
      {
        question: 'Where is razor wire used?',
        answer:
          'Razor wire is used for high-security perimeters, fence toppings, industrial sites, utilities, warehouses, data centers, oil and gas sites and border-security applications.',
      },
      {
        question: 'Is razor wire the same as barbed wire?',
        answer:
          'No. Razor wire uses sharp metal tape profiles and is usually selected for higher-security deterrence, while barbed wire uses sharp barbs on twisted wire.',
      },
      {
        question: 'Can razor wire be added to anti-climb fencing?',
        answer:
          'Yes, razor wire can be used with anti-climb fencing when the site risk assessment and project specification require an additional topping deterrent.',
      },
    ],
    rfqPrompt:
      'Request a razor wire quote with coil diameter, quantity, fence type, security requirement, delivery city, installation need and drawings if available.',
  },
  {
    slug: 'steel-metal-fencing',
    name: 'Steel & Metal Fencing',
    category: 'Steel & Metal Fencing',
    primaryKeyword: 'steel fencing supplier UAE',
    secondaryKeywords: ['metal fence Dubai', 'galvanized steel fencing', 'industrial steel fence'],
    metaTitle: 'Steel Fencing Supplier UAE | Metal Fence Dubai',
    metaDescription:
      'Steel and metal fencing supplier in UAE for residential, commercial, industrial, warehouse and perimeter security projects.',
    h1: 'Steel Fencing Supplier UAE',
    shortDescription:
      'Galvanized and coated steel fencing systems for durable residential, commercial, industrial and security perimeters.',
    intro:
      'Steel and metal fencing is selected when strength, durability and clean perimeter definition are priorities. SRK Fence supplies steel fencing systems for Dubai, UAE and GCC projects including residential boundaries, commercial properties, warehouses, factories, schools and industrial perimeters. Project options can include galvanized steel, powder coating, custom heights, panels, posts, decorative elements, gates and installation support.',
    image: '/Whyusnew/corrugated-metal-fence-panel-gcc.png',
    specs: [
      { label: 'Material', value: 'Steel, galvanized steel and coated metal options' },
      { label: 'Finish', value: 'Galvanized, powder coated or project-specific finish' },
      { label: 'Heights', value: 'Custom heights based on security and design requirement' },
      { label: 'Applications', value: 'Residential, commercial, industrial and infrastructure perimeters' },
      { label: 'Gate options', value: 'Pedestrian, swing, sliding and vehicle access gates by project' },
    ],
    applications: [
      { label: 'Commercial & Industrial', href: '/applications/commercial-industrial' },
      { label: 'Residential Fencing', href: '/applications/residential-fencing' },
      { label: 'Warehouse Fencing', href: '/applications/warehouses-logistic-centers' },
    ],
    internalLinks: [
      { label: 'Welded Mesh Fence', href: '/products/welded-mesh-fence' },
      { label: 'Fence Accessories', href: '/products/fence-accessories' },
      { label: 'Fencing Supplier in Oman', href: '/countries/oman' },
    ],
    faqs: [
      {
        question: 'Where is steel fencing used?',
        answer:
          'Steel fencing is used for residential boundaries, commercial compounds, industrial facilities, warehouses, schools, infrastructure sites and security perimeters.',
      },
      {
        question: 'Can steel fencing be galvanized or powder coated?',
        answer:
          'Yes, steel fencing can be specified with galvanized or powder coated finishes depending on exposure, design preference and corrosion-resistance requirement.',
      },
      {
        question: 'Can SRK Fence support custom metal fence designs?',
        answer:
          'Yes, SRK Fence can review custom heights, panel styles, posts, gates, coatings and project-specific specifications for steel and metal fencing requirements.',
      },
    ],
    rfqPrompt:
      'Request a steel fencing quote with drawings, fence length, height, finish, post and gate requirements, delivery location and installation scope.',
  },
  {
    slug: 'fence-accessories',
    name: 'Fence Accessories',
    category: 'Fence Accessories',
    primaryKeyword: 'fence accessories supplier UAE',
    secondaryKeywords: ['posts', 'clamps', 'connectors', 'hinges', 'locks', 'base plates', 'fencing accessories'],
    metaTitle: 'Fence Accessories Supplier UAE | Posts, Clamps, Gates & Fittings',
    metaDescription:
      'Fence accessories supplier in UAE for posts, clamps, connectors, hinges, locks, base plates, gates and fencing installation components.',
    h1: 'Fence Accessories Supplier UAE',
    shortDescription:
      'Posts, clamps, connectors, hinges, locks, base plates, gates and related accessories for fencing supply and installation projects.',
    intro:
      'Fence accessories are critical for a complete and durable fencing system. SRK Fence can support accessory requirements for chain link fence, welded mesh fence, steel fencing, temporary fencing, PVC hoarding and high-security systems. Buyers can request posts, clamps, connectors, hinges, locks, base plates, support arms, gates, tension wire, fixings and project-specific fittings along with the main fence package.',
    image: '/image.png',
    specs: [
      { label: 'Accessory types', value: 'Posts, clamps, connectors, hinges, locks, base plates and fixings' },
      { label: 'Gate support', value: 'Pedestrian and vehicle gate fittings by project requirement' },
      { label: 'Fence compatibility', value: 'Chain link, welded mesh, steel, temporary and high-security systems' },
      { label: 'Finish options', value: 'Galvanized or coated accessories by specification' },
      { label: 'RFQ basis', value: 'Accessory list, quantities, drawings and fence system type' },
    ],
    applications: [
      { label: 'Commercial & Industrial', href: '/applications/commercial-industrial' },
      { label: 'Boundary Security Fencing', href: '/applications/boundary-security-fencing' },
      { label: 'Construction Site Fencing', href: '/applications/boundary-security-fencing' },
    ],
    internalLinks: [
      { label: 'Chain Link Fence', href: '/products/chain-link-fence' },
      { label: 'Welded Mesh Fence', href: '/products/welded-mesh-fence' },
      { label: 'Steel & Metal Fencing', href: '/products/steel-metal-fencing' },
    ],
    faqs: [
      {
        question: 'What fence accessories does SRK Fence supply?',
        answer:
          'SRK Fence can support posts, clamps, connectors, hinges, locks, base plates, support arms, gates, tension wire, fixings and related fencing components.',
      },
      {
        question: 'Can accessories be supplied with a full fence package?',
        answer:
          'Yes, accessories can be quoted with the main fence system so the buyer receives a complete package for supply or installation.',
      },
      {
        question: 'What information is needed for accessory pricing?',
        answer:
          'Share the fence type, accessory list, quantities, finish requirement, drawings if available and delivery location.',
      },
    ],
    rfqPrompt:
      'Request fence accessory pricing with fence type, accessory list, quantities, coating, gate details, drawings and delivery city.',
  },
];

export type CountryPage = {
  slug: string;
  country: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  buyerIntent: string;
  intro: string;
  products: string[];
  applications: string[];
  whySource: string[];
  faqs: FaqItem[];
  cities: string[];
};

export const countryPages: CountryPage[] = [
  {
    slug: 'uae',
    country: 'UAE',
    primaryKeyword: 'fencing supplier in UAE',
    secondaryKeywords: ['fencing supplier Dubai', 'fence contractor UAE', 'security fencing UAE', 'chain link fence UAE'],
    buyerIntent: 'local fencing supply, installation support, project quotation and urgent site requirements.',
    intro:
      'SRK Fence supplies and installs fencing systems for contractors, consultants, facility managers and project owners across Dubai, Abu Dhabi, Sharjah and the wider UAE. Our range includes chain link fencing, welded mesh fencing, anti-climb fencing, PVC fencing, temporary fencing, barbed wire, razor wire, gates and accessories for residential, commercial, industrial and high-security projects.',
    products: ['Chain link fence', 'Welded mesh fence', 'Anti-climb 358 fence', 'PVC fencing', 'Temporary fence panels', 'Barbed wire', 'Razor wire', 'Gates and accessories'],
    applications: ['Construction sites', 'Warehouses', 'Industrial facilities', 'Schools', 'Farms', 'Commercial properties', 'Residential communities', 'Security perimeters'],
    whySource: ['Dubai and Sharjah based support', 'Wide fencing product range', 'Clear quotation support for custom specifications', 'Supply and installation coordination', 'GCC project experience'],
    cities: ['Dubai', 'Sharjah', 'Abu Dhabi', 'Ajman', 'Ras Al Khaimah', 'Fujairah'],
    faqs: [
      {
        question: 'Who is a fencing supplier in UAE?',
        answer:
          'SRK Fence is a UAE-based fencing supplier and contractor supporting chain link, welded mesh, PVC, temporary, anti-climb, barbed wire, razor wire, gates and accessories.',
      },
      {
        question: 'Does SRK Fence provide fence installation in UAE?',
        answer:
          'Yes, SRK Fence supports supply and installation requirements for residential, commercial, industrial, construction, warehouse and security fencing projects in UAE.',
      },
      {
        question: 'What details are needed for a UAE fencing quote?',
        answer:
          'Share fence length, height, mesh size, wire diameter, coating, delivery emirate, installation requirement, gates, timeline and project drawings if available.',
      },
    ],
  },
  {
    slug: 'bahrain',
    country: 'Bahrain',
    primaryKeyword: 'fencing supplier in Bahrain',
    secondaryKeywords: ['fence supplier Bahrain', 'chain link fence Bahrain', 'security fencing Bahrain', 'PVC fence Bahrain'],
    buyerIntent: 'importers, contractors and project teams looking for practical fencing supply from the UAE.',
    intro:
      'SRK Fence supplies fencing products and perimeter security solutions from the UAE for projects in Bahrain. Contractors and procurement teams can request chain link fence, welded mesh fence, PVC fencing, temporary fencing, barbed wire, razor wire, gates and accessories for construction, commercial, school, industrial, farm and security requirements.',
    products: ['Chain link fence', 'Welded mesh fence', 'PVC coated fencing', 'Temporary fence panels', 'Barbed wire', 'Razor wire', 'Fence posts', 'Gates and accessories'],
    applications: ['Construction projects', 'Industrial sites', 'Commercial properties', 'Schools', 'Warehouses', 'Farms', 'Security boundaries'],
    whySource: ['UAE-based regional sourcing', 'Product and accessory package support', 'Quotation support for project quantities', 'Custom height and coating options', 'GCC delivery coordination'],
    cities: ['Manama', 'Riffa', 'Muharraq', 'Sitra', 'Hamad Town'],
    faqs: [
      {
        question: 'Does SRK Fence supply fencing to Bahrain?',
        answer:
          'Yes, SRK Fence supplies fencing products and project solutions from UAE to Bahrain, including chain link, welded mesh, PVC fencing, barbed wire, razor wire, gates and accessories.',
      },
      {
        question: 'What fencing products are commonly requested for Bahrain?',
        answer:
          'Common Bahrain quote requests include chain link fence, welded mesh fence, PVC coated fencing, temporary fence panels, barbed wire, razor wire and fence accessories.',
      },
      {
        question: 'How do I request a fencing quotation for Bahrain?',
        answer:
          'Share fence length, height, mesh size, wire diameter, coating requirement, delivery city, timeline and installation or supply-only requirement.',
      },
    ],
  },
  {
    slug: 'qatar',
    country: 'Qatar',
    primaryKeyword: 'fencing supplier in Qatar',
    secondaryKeywords: ['fencing supplier Doha', 'fence contractor Doha', 'chain link fence Qatar', 'security fencing Qatar'],
    buyerIntent: 'construction, infrastructure, warehouse, oil and gas and Doha-based project requirements.',
    intro:
      'SRK Fence supplies fencing products from the UAE for projects in Qatar and Doha, including construction sites, warehouses, logistics yards, commercial properties, oil and gas facilities, infrastructure works and high-security perimeters. Project teams can compare chain link, welded mesh, anti-climb, temporary, PVC, barbed wire and razor wire options based on security level, coating, height, length and delivery requirements.',
    products: ['Chain link fence', 'Welded mesh fence', 'Anti-climb 358 fence', 'Temporary fence panels', 'PVC hoarding', 'Barbed wire', 'Razor wire', 'Gates and accessories'],
    applications: ['Doha construction sites', 'Warehouses', 'Oil and gas facilities', 'Industrial yards', 'Commercial compounds', 'Data centers', 'Infrastructure projects'],
    whySource: ['Dubai/UAE product range', 'High-security and construction fencing focus', 'Specification-led quotation support', 'Custom coating and height options', 'Regional GCC project supply'],
    cities: ['Doha', 'Al Rayyan', 'Al Wakrah', 'Lusail', 'Mesaieed', 'Ras Laffan'],
    faqs: [
      {
        question: 'Does SRK Fence supply fencing to Qatar?',
        answer:
          'Yes, SRK Fence supplies fencing products and project solutions from UAE to Qatar, including chain link, welded mesh, anti-climb, PVC fencing, temporary fencing, barbed wire, razor wire, gates and accessories.',
      },
      {
        question: 'Does SRK Fence support fencing projects in Doha?',
        answer:
          'Yes, SRK Fence can support quote requests for Doha construction, warehouse, commercial, infrastructure and security fencing projects with product and specification guidance.',
      },
      {
        question: 'What fence is best for Qatar construction sites?',
        answer:
          'Temporary fence panels and PVC hoarding are common for construction sites, while chain link or welded mesh may be selected for longer-term boundaries.',
      },
    ],
  },
  {
    slug: 'kuwait',
    country: 'Kuwait',
    primaryKeyword: 'fencing supplier in Kuwait',
    secondaryKeywords: ['fence supplier Kuwait', 'temporary fencing Kuwait', 'security fencing Kuwait', 'industrial fencing Kuwait'],
    buyerIntent: 'industrial, security, temporary fencing and construction-site requirements.',
    intro:
      'SRK Fence supplies fencing systems from the UAE for Kuwait projects that need construction site control, industrial boundaries, temporary fencing, warehouse security and perimeter protection. Available options include chain link fencing, welded mesh fencing, anti-climb fencing, temporary fence panels, PVC hoarding, barbed wire, razor wire, gates and fence accessories with project-specific heights, coatings and quantities.',
    products: ['Temporary fence panels', 'PVC hoarding', 'Chain link fence', 'Welded mesh fence', 'Anti-climb fence', 'Barbed wire', 'Razor wire', 'Fence accessories'],
    applications: ['Construction sites', 'Industrial facilities', 'Warehouses', 'Oil and gas support sites', 'Commercial compounds', 'Security perimeters'],
    whySource: ['Strong temporary and industrial fencing range', 'Quotation support for drawings and BOQs', 'Custom specification and coating options', 'UAE to Kuwait supply capability', 'Fencing accessories and gates support'],
    cities: ['Kuwait City', 'Ahmadi', 'Hawally', 'Farwaniya', 'Jahra'],
    faqs: [
      {
        question: 'Does SRK Fence supply fencing to Kuwait?',
        answer:
          'Yes, SRK Fence supplies fencing products from UAE to Kuwait for construction, industrial, warehouse, commercial and security projects.',
      },
      {
        question: 'What temporary fencing options are available for Kuwait?',
        answer:
          'Temporary fence panels, PVC hoarding, gates, bases, clamps and bracing options can be reviewed based on project length, height, duration and site layout.',
      },
      {
        question: 'Can SRK Fence quote industrial fencing for Kuwait?',
        answer:
          'Yes, SRK Fence can quote chain link, welded mesh, anti-climb, steel fencing, barbed wire, razor wire and accessories for industrial fencing projects.',
      },
    ],
  },
  {
    slug: 'saudi-arabia',
    country: 'Saudi Arabia',
    primaryKeyword: 'fencing supplier in Saudi Arabia',
    secondaryKeywords: ['fence supplier KSA', 'security fencing Saudi Arabia', 'perimeter fencing KSA'],
    buyerIntent: 'large infrastructure, oil and gas, industrial and high-security perimeter projects.',
    intro:
      'SRK Fence supplies fencing products from the UAE for Saudi Arabia and KSA projects, including infrastructure, oil and gas, warehouses, logistics, construction, industrial sites and high-security perimeters. Project teams can source chain link, welded mesh, anti-climb 358 fence, temporary fencing, steel fencing, barbed wire, razor wire, gates and accessories based on drawings, BOQ and site security requirements.',
    products: ['Anti-climb 358 fence', 'Welded mesh fence', 'Chain link fence', 'Steel fencing', 'Temporary fencing', 'Barbed wire', 'Razor wire', 'Gate systems and accessories'],
    applications: ['Infrastructure projects', 'Oil and gas facilities', 'Warehouses', 'Industrial cities', 'Construction sites', 'Data centers', 'Security perimeters'],
    whySource: ['High-security product capability', 'UAE-based GCC supply support', 'Quotation support for BOQs and drawings', 'Custom heights, coatings and gates', 'Project-focused quotation process'],
    cities: ['Riyadh', 'Jeddah', 'Dammam', 'Khobar', 'Jubail', 'Neom'],
    faqs: [
      {
        question: 'Does SRK Fence supply fencing to Saudi Arabia?',
        answer:
          'Yes, SRK Fence supplies fencing products and project solutions from UAE to Saudi Arabia, including chain link, welded mesh, anti-climb, steel fencing, temporary fencing, barbed wire, razor wire, gates and accessories.',
      },
      {
        question: 'What security fencing is suitable for KSA projects?',
        answer:
          'Anti-climb 358 fencing, welded mesh fencing, steel fencing and razor wire are common options for higher-security industrial, infrastructure and oil and gas perimeters.',
      },
      {
        question: 'Can SRK Fence quote from BOQ or drawings?',
        answer:
          'Yes, SRK Fence can review drawings, BOQ details, fence length, height, coating, mesh and gate requirements to prepare a project quotation.',
      },
    ],
  },
  {
    slug: 'iraq',
    country: 'Iraq',
    primaryKeyword: 'fencing supplier in Iraq',
    secondaryKeywords: ['fence supplier Iraq', 'barbed wire Iraq', 'razor wire Iraq', 'perimeter fencing Iraq'],
    buyerIntent: 'security, oil and gas, construction and perimeter-protection projects.',
    intro:
      'SRK Fence supplies fencing products from the UAE for Iraq projects where security, perimeter protection, oil and gas facilities, construction boundaries and industrial compounds are priorities. Project teams can request chain link fence, welded mesh fence, anti-climb fence, steel fencing, barbed wire, razor wire, gates, posts and accessories with project-specific security levels, heights, coatings and delivery requirements.',
    products: ['Barbed wire', 'Razor wire', 'Chain link fence', 'Anti-climb fence', 'Welded mesh fence', 'Steel fencing', 'Gates and accessories'],
    applications: ['Oil and gas facilities', 'Security perimeters', 'Construction sites', 'Industrial yards', 'Warehouses', 'Infrastructure boundaries'],
    whySource: ['Strong security wire and perimeter range', 'UAE sourcing for regional projects', 'Clear quotation support for custom specifications', 'High-security fence options', 'Project package support with accessories'],
    cities: ['Baghdad', 'Basra', 'Erbil', 'Mosul', 'Najaf', 'Kirkuk'],
    faqs: [
      {
        question: 'Does SRK Fence supply fencing to Iraq?',
        answer:
          'Yes, SRK Fence supplies fencing products and project solutions from UAE to Iraq, including chain link, welded mesh, anti-climb, barbed wire, razor wire, gates and accessories.',
      },
      {
        question: 'Can SRK Fence quote barbed wire and razor wire for Iraq?',
        answer:
          'Yes, SRK Fence can quote barbed wire, razor wire, support arms, posts and compatible fencing systems for Iraq perimeter security requirements.',
      },
      {
        question: 'What details are needed for an Iraq fencing quote?',
        answer:
          'Share product type, fence length, height, mesh size, wire diameter, coating, security level, delivery city, timeline and drawings or a BOQ if available.',
      },
    ],
  },
  {
    slug: 'oman',
    country: 'Oman',
    primaryKeyword: 'fencing supplier in Oman',
    secondaryKeywords: ['fence supplier Oman', 'chain link fence Oman', 'security fencing Oman'],
    buyerIntent: 'construction, industrial, marine, warehouse and farm fencing projects.',
    intro:
      'SRK Fence supplies chain link, welded mesh, steel, PVC, temporary, anti-climb, barbed wire and razor wire fencing products from the UAE for Oman projects. These systems can be specified for construction, industrial, warehouse, farm, commercial and coastal sites in Muscat, Sohar, Salalah and other project locations.',
    products: ['Chain link fence', 'Welded mesh fence', 'Steel fencing', 'PVC coated fencing', 'Temporary fencing', 'Barbed wire', 'Razor wire', 'Gates and accessories'],
    applications: ['Construction sites', 'Industrial facilities', 'Warehouses', 'Farms', 'Marine and coastal sites', 'Commercial compounds', 'Security perimeters'],
    whySource: ['Regional UAE supply support', 'Coating guidance for coastal exposure', 'Farm and industrial fencing range', 'Custom quotation support', 'Fencing accessories and gate options'],
    cities: ['Muscat', 'Sohar', 'Salalah', 'Nizwa', 'Duqm', 'Sur'],
    faqs: [
      {
        question: 'Does SRK Fence supply fencing to Oman?',
        answer:
          'Yes, SRK Fence supplies fencing products and project solutions from UAE to Oman, including chain link, welded mesh, steel, PVC, temporary fencing, barbed wire, razor wire, gates and accessories.',
      },
      {
        question: 'What fencing is suitable for Oman farm projects?',
        answer:
          'Chain link fencing and barbed wire are common for farms and animal enclosures, with height, mesh and post specifications selected based on the animal and site.',
      },
      {
        question: 'Can SRK Fence support coastal fencing requirements?',
        answer:
          'Yes, coating and material options can be reviewed for coastal or higher-corrosion environments based on the site exposure and budget.',
      },
    ],
  },
  {
    slug: 'jordan',
    country: 'Jordan',
    primaryKeyword: 'fencing supplier in Jordan',
    secondaryKeywords: ['fence supplier Jordan', 'industrial fencing Jordan', 'perimeter fencing Jordan'],
    buyerIntent: 'industrial, commercial, construction and perimeter fencing projects.',
    intro:
      'SRK Fence supplies fencing products from the UAE for Jordan projects that need industrial boundaries, commercial fencing, construction site control, warehouse security and perimeter protection. Available options include chain link fencing, welded mesh fencing, anti-climb fencing, temporary fencing, steel fencing, barbed wire, razor wire, gates and accessories with project-specific dimensions, coating and delivery requirements.',
    products: ['Chain link fence', 'Welded mesh fence', 'Anti-climb fence', 'Temporary fence panels', 'Steel fencing', 'Barbed wire', 'Razor wire', 'Gates and accessories'],
    applications: ['Industrial sites', 'Commercial properties', 'Warehouses', 'Construction projects', 'Schools', 'Farms', 'Security perimeters'],
    whySource: ['UAE regional sourcing support', 'Industrial and commercial product range', 'Clear quotation support for custom specifications', 'Accessory and gate package support', 'Project-focused quotation workflow'],
    cities: ['Amman', 'Zarqa', 'Irbid', 'Aqaba', 'Mafraq'],
    faqs: [
      {
        question: 'Does SRK Fence supply fencing to Jordan?',
        answer:
          'Yes, SRK Fence supplies fencing products and project solutions from UAE to Jordan, including chain link, welded mesh, anti-climb, temporary fencing, barbed wire, razor wire, gates and accessories.',
      },
      {
        question: 'What fencing products are suitable for Jordan industrial sites?',
        answer:
          'Welded mesh fence, chain link fence, steel fencing, anti-climb fence, barbed wire and razor wire can be considered depending on the site security requirement.',
      },
      {
        question: 'How can I request a Jordan fencing quotation?',
        answer:
          'Share fence length, height, mesh size, wire diameter, coating, delivery city, installation requirement, gates, timeline and drawings or BOQ.',
      },
    ],
  },
];

export const arabicKeywordBlocks = [
  { english: 'fencing supplier', arabic: 'مورد سياج' },
  { english: 'fence company', arabic: 'شركة سياج' },
  { english: 'fencing contractor', arabic: 'مقاول سياج' },
  { english: 'chain link fence', arabic: 'سياج شبك' },
  { english: 'welded mesh fence', arabic: 'سياج شبك ملحوم' },
  { english: 'security fencing', arabic: 'سياج أمني' },
  { english: 'perimeter fencing', arabic: 'سياج محيطي' },
  { english: 'PVC fence', arabic: 'سياج PVC' },
  { english: 'temporary fence', arabic: 'سياج مؤقت' },
  { english: 'barbed wire', arabic: 'سلك شائك' },
  { english: 'razor wire', arabic: 'سلك شائك حلزوني' },
  { english: 'fence installation', arabic: 'تركيب سياج' },
];

export const homepageFaqs: FaqItem[] = [
  {
    question: 'Who is a fencing supplier in Dubai, UAE?',
    answer:
      'SRK Fence is a Dubai-based fencing supplier and contractor providing chain link fencing, welded mesh fencing, PVC fencing, steel fencing, anti-climb fencing, temporary fencing, barbed wire, razor wire, gates and custom perimeter security solutions.',
  },
  {
    question: 'Does SRK Fence provide fence installation?',
    answer:
      'Yes, SRK Fence supports fencing supply and installation for residential, commercial, industrial, construction, infrastructure and security projects.',
  },
  {
    question: 'Which markets does SRK Fence serve?',
    answer:
      'SRK Fence supports buyers across UAE, Bahrain, Qatar, Kuwait, Saudi Arabia, Iraq, Oman, Jordan, GCC and Middle East project markets.',
  },
];

export const productByApplicationRows = [
  { application: 'Data Centers', products: 'Anti-Climb 358 Fence, Welded Mesh Fence, Razor Wire, High-Security Gates' },
  { application: 'Warehouses', products: 'Chain Link Fence, Welded Mesh Fence, Panel and Post Systems, Gate Systems' },
  { application: 'Construction Sites', products: 'Temporary Fence Panels, PVC Hoarding Fence, Barbed Wire' },
  { application: 'Farms', products: 'Chain Link Fence, Barbed Wire, Farm Fencing, Animal Enclosures' },
  { application: 'Oil & Gas', products: 'Anti-Climb Fence, Razor Wire, Steel Fencing, Security Gates' },
  { application: 'Residential', products: 'PVC Privacy Fence, Decorative PVC Fence, Steel Fence' },
];

export const comparisonTopics: LinkItem[] = [
  { label: 'Chain Link Fence vs Welded Mesh Fence', href: '/blog/chain-link-vs-welded-mesh-fence' },
  { label: 'PVC Coated vs Galvanized Chain Link Fence', href: '/blog/pvc-coated-vs-galvanized-chain-link-fence' },
  { label: 'Barbed Wire vs Razor Wire', href: '/blog/barbed-wire-vs-razor-wire' },
  { label: 'Anti-Climb 358 Fence vs Standard Mesh Fence', href: '/blog/difference-between-358-and-welded-mesh' },
];

export const applicationSeoContent: Record<
  string,
  {
    primaryKeyword: string;
    question: string;
    answer: string;
    recommendedProducts: LinkItem[];
    faqs: FaqItem[];
  }
> = {
  'residential-fencing': {
    primaryKeyword: 'residential fencing Dubai',
    question: 'What fencing is best for residential properties in Dubai?',
    answer:
      'Residential fencing in Dubai should balance privacy, appearance, durability and access control. PVC fencing, decorative steel fencing, coated chain link fencing and gate systems are common options depending on the property style, boundary length and security requirement.',
    recommendedProducts: [
      { label: 'PVC Coated Chain Link Fence', href: '/products/pvc-coated-chain-link-fence' },
      { label: 'Steel & Metal Fencing', href: '/products/steel-metal-fencing' },
      { label: 'Fence Accessories', href: '/products/fence-accessories' },
    ],
    faqs: [
      {
        question: 'Does SRK Fence provide residential fencing in Dubai?',
        answer:
          'Yes, SRK Fence supports residential fencing requirements including boundary fencing, privacy fencing, coated chain link, steel fencing and gate options.',
      },
      {
        question: 'What should I include in a residential fence RFQ?',
        answer:
          'Include boundary length, height, preferred material, privacy requirement, gates, site location, installation requirement and any drawings or photos.',
      },
    ],
  },
  'commercial-industrial': {
    primaryKeyword: 'industrial fencing UAE',
    question: 'What fencing is recommended for commercial and industrial sites?',
    answer:
      'Commercial and industrial sites usually need durable fencing with controlled access, corrosion-resistant coating and clear perimeter definition. Welded mesh, chain link, steel fencing, anti-climb panels and gate systems are selected based on risk level and site operations.',
    recommendedProducts: [
      { label: 'Welded Mesh Fence', href: '/products/welded-mesh-fence' },
      { label: 'Chain Link Fence', href: '/products/chain-link-fence' },
      { label: 'Anti-Climb 358 Fence', href: '/products/anti-climb-358-fence' },
      { label: 'Steel & Metal Fencing', href: '/products/steel-metal-fencing' },
    ],
    faqs: [
      {
        question: 'Can SRK Fence quote industrial fencing in UAE?',
        answer:
          'Yes, SRK Fence can quote industrial fencing systems including welded mesh, chain link, anti-climb, steel fencing, gates and accessories.',
      },
      {
        question: 'Which security level should an industrial site choose?',
        answer:
          'Standard sites may use chain link or welded mesh, while higher-risk sites may use anti-climb mesh, steel fencing, razor wire and controlled gate access.',
      },
    ],
  },
  'oil-gas-sector': {
    primaryKeyword: 'oil and gas security fencing UAE',
    question: 'What fencing is used for oil and gas facilities?',
    answer:
      'Oil and gas sites often require high-security perimeter fencing, corrosion-resistant finishes, controlled gates and deterrent toppings. Anti-climb fencing, welded mesh, steel fencing and razor wire are commonly reviewed for these facilities.',
    recommendedProducts: [
      { label: 'Anti-Climb 358 Fence', href: '/products/anti-climb-358-fence' },
      { label: 'Razor Wire', href: '/products/razor-wire' },
      { label: 'Steel & Metal Fencing', href: '/products/steel-metal-fencing' },
      { label: 'Fence Accessories', href: '/products/fence-accessories' },
    ],
    faqs: [
      {
        question: 'Does SRK Fence supply fencing for oil and gas projects?',
        answer:
          'Yes, SRK Fence supports oil and gas fencing RFQs with anti-climb fencing, welded mesh, steel fencing, razor wire, gates and accessories.',
      },
      {
        question: 'What details are required for oil and gas fencing quotations?',
        answer:
          'Share perimeter length, height, security level, coating requirement, gate schedule, drawings, site location and installation or supply-only scope.',
      },
    ],
  },
  'data-centers': {
    primaryKeyword: 'data center security fencing UAE',
    question: 'What is the best fencing for data center security?',
    answer:
      'Data center perimeter security commonly uses anti-climb 358 fencing, welded mesh panels, secure posts, controlled gates, surveillance-ready layouts and deterrent toppings such as razor wire where the site risk requires it.',
    recommendedProducts: [
      { label: 'Anti-Climb 358 Fence', href: '/products/anti-climb-358-fence' },
      { label: 'Welded Mesh Fence', href: '/products/welded-mesh-fence' },
      { label: 'Razor Wire', href: '/products/razor-wire' },
      { label: 'Fence Accessories', href: '/products/fence-accessories' },
    ],
    faqs: [
      {
        question: 'Does SRK Fence supply data center fencing?',
        answer:
          'Yes, SRK Fence supports data center security fencing requirements with anti-climb mesh, welded mesh, gates, razor wire and accessories.',
      },
      {
        question: 'Why use anti-climb fencing for data centers?',
        answer:
          'Anti-climb fencing has narrow mesh openings designed to reduce climbing and cutting, making it suitable for sensitive and high-security perimeters.',
      },
    ],
  },
  'warehouses-logistic-centers': {
    primaryKeyword: 'warehouse security fencing UAE',
    question: 'What fence is best for warehouse security?',
    answer:
      'Warehouse security fencing should protect inventory, control access and remain practical for logistics flow. Chain link, welded mesh, steel fencing, panel and post systems and gate systems are common options depending on risk level.',
    recommendedProducts: [
      { label: 'Chain Link Fence', href: '/products/chain-link-fence' },
      { label: 'Welded Mesh Fence', href: '/products/welded-mesh-fence' },
      { label: 'Anti-Climb 358 Fence', href: '/products/anti-climb-358-fence' },
      { label: 'Steel & Metal Fencing', href: '/products/steel-metal-fencing' },
    ],
    faqs: [
      {
        question: 'Can SRK Fence supply warehouse fencing in UAE?',
        answer:
          'Yes, SRK Fence supplies warehouse fencing including chain link, welded mesh, steel fencing, gates, accessories and high-security options.',
      },
      {
        question: 'What should warehouse fencing include?',
        answer:
          'A warehouse RFQ should include perimeter length, height, access gates, vehicle entry points, coating, security level and installation requirement.',
      },
    ],
  },
  'farms-animal-enclosures': {
    primaryKeyword: 'farm fencing UAE',
    question: 'What fencing is used for farms and animal enclosures?',
    answer:
      'Farm fencing commonly uses chain link fence, barbed wire and animal enclosure fencing selected by animal type, boundary length, height, terrain and access needs. Gate placement and post spacing are important for practical farm use.',
    recommendedProducts: [
      { label: 'Chain Link Fence', href: '/products/chain-link-fence' },
      { label: 'Barbed Wire', href: '/products/barbed-wire' },
      { label: 'GI Chain Link Fence', href: '/products/gi-chain-link-fence' },
    ],
    faqs: [
      {
        question: 'Does SRK Fence supply farm fencing in UAE and GCC?',
        answer:
          'Yes, SRK Fence can support farm fencing RFQs with chain link, GI chain link, barbed wire, posts, gates and accessories.',
      },
      {
        question: 'What details are needed for farm fencing?',
        answer:
          'Share boundary length, animal type, required height, wire or mesh preference, gate locations, site location and installation requirement.',
      },
    ],
  },
  'boundary-security-fencing': {
    primaryKeyword: 'security fencing Dubai',
    question: 'What is security fencing used for?',
    answer:
      'Security fencing is used to protect boundaries, assets, restricted areas, industrial compounds and critical infrastructure. Depending on risk level, it may use welded mesh, anti-climb panels, steel fencing, barbed wire, razor wire, secure gates and access control.',
    recommendedProducts: [
      { label: 'Anti-Climb 358 Fence', href: '/products/anti-climb-358-fence' },
      { label: 'Welded Mesh Fence', href: '/products/welded-mesh-fence' },
      { label: 'Razor Wire', href: '/products/razor-wire' },
      { label: 'Barbed Wire', href: '/products/barbed-wire' },
    ],
    faqs: [
      {
        question: 'What security levels can SRK Fence support?',
        answer:
          'SRK Fence can support standard, medium-security and high-security perimeter needs using chain link, welded mesh, anti-climb, steel fencing and deterrent wire options.',
      },
      {
        question: 'Can security fencing include gates and accessories?',
        answer:
          'Yes, security fencing can include posts, clamps, toppings, pedestrian gates, vehicle gates and accessories based on project specifications.',
      },
    ],
  },
  'country-border-fencing': {
    primaryKeyword: 'border fencing solutions',
    question: 'What fencing is used for border security?',
    answer:
      'Border fencing solutions are designed for large-scale perimeter protection and may combine anti-climb fencing, welded mesh, razor wire, steel posts, security gates and surveillance-ready layouts based on the required security level.',
    recommendedProducts: [
      { label: 'Anti-Climb 358 Fence', href: '/products/anti-climb-358-fence' },
      { label: 'Razor Wire', href: '/products/razor-wire' },
      { label: 'Welded Mesh Fence', href: '/products/welded-mesh-fence' },
      { label: 'Fence Accessories', href: '/products/fence-accessories' },
    ],
    faqs: [
      {
        question: 'Does SRK Fence support border fencing solutions?',
        answer:
          'Yes, SRK Fence can support RFQs for large-scale border and high-security fencing products, including anti-climb, welded mesh, razor wire, gates and accessories.',
      },
      {
        question: 'What information is needed for border fencing RFQs?',
        answer:
          'Share project length, height, terrain notes, security level, material specification, gates, coating, drawings and delivery or installation requirements.',
      },
    ],
  },
};

export const coreMoneyKeywords = [
  'fencing supplier in Dubai',
  'fencing supplier UAE',
  'fence contractor Dubai',
  'fence contractor UAE',
  'security fencing UAE',
  'chain link fence supplier Dubai',
  'welded mesh fence supplier UAE',
  'PVC fence supplier Dubai',
  'anti climb fence supplier UAE',
  'temporary fence supplier UAE',
  'barbed wire supplier UAE',
  'razor wire supplier UAE',
  'steel fencing supplier UAE',
  'fence accessories supplier UAE',
];

export const rfqKeywords = [
  'fencing RFQ UAE',
  'fence quotation Dubai',
  'custom fencing quotation UAE',
  'fence installation quote UAE',
  'fencing supplier RFQ',
  'fence project specification',
];

export const applicationKeywordProfiles: Record<string, { secondaryKeywords: string[]; buyerIntent: string }> = {
  'residential-fencing': {
    secondaryKeywords: ['home fencing UAE', 'privacy fencing Dubai', 'villa fencing Dubai', 'PVC fence Dubai', 'residential security fence'],
    buyerIntent: 'Residential buyers comparing privacy, security, gate access and visual finish.',
  },
  'commercial-industrial': {
    secondaryKeywords: ['commercial fencing Dubai', 'fence contractor Dubai', 'warehouse fencing UAE', 'factory fencing UAE', 'industrial perimeter fence'],
    buyerIntent: 'Commercial and industrial buyers requesting durable perimeter systems and gate access.',
  },
  'oil-gas-sector': {
    secondaryKeywords: ['refinery fencing UAE', 'energy facility security', 'razor wire UAE', 'anti climb fence for oil and gas', 'industrial security fencing'],
    buyerIntent: 'Oil, gas and utility buyers requiring high-security perimeter protection and corrosion-resistant options.',
  },
  'data-centers': {
    secondaryKeywords: ['anti climb 358 fence', 'high security fence Dubai', 'critical infrastructure fencing', 'data center perimeter security', 'welded mesh security fence'],
    buyerIntent: 'Critical infrastructure buyers comparing anti-climb mesh, secure gates and deterrent toppings.',
  },
  'schools-public-parks': {
    secondaryKeywords: ['school fencing UAE', 'playground fencing Dubai', 'park fencing UAE', 'child safe fencing', 'sports area fencing'],
    buyerIntent: 'School and public-space buyers seeking safe, visible and durable fencing.',
  },
  'farms-animal-enclosures': {
    secondaryKeywords: ['livestock fencing UAE', 'animal enclosure fencing', 'barbed wire UAE', 'farm chain link fence', 'agricultural fencing UAE'],
    buyerIntent: 'Farm buyers planning boundary length, animal containment, gate locations and durable posts.',
  },
  'boundary-security-fencing': {
    secondaryKeywords: ['perimeter fencing UAE', 'boundary fence Dubai', 'high security fencing', 'anti climb security fence', 'razor wire fencing'],
    buyerIntent: 'Security buyers selecting perimeter systems by site risk and access-control requirements.',
  },
  'warehouses-logistic-centers': {
    secondaryKeywords: ['warehouse fencing Dubai', 'logistics fencing UAE', 'chain link fence warehouse', 'welded mesh warehouse fence', 'warehouse gate systems'],
    buyerIntent: 'Warehouse and logistics buyers protecting inventory, loading zones and vehicle access points.',
  },
  'country-border-fencing': {
    secondaryKeywords: ['country border fencing', 'anti climb fence', 'razor wire fencing', 'large scale perimeter fencing', 'security gates'],
    buyerIntent: 'Large-scale and government buyers comparing high-security perimeter and border fencing options.',
  },
};

export const blogKeywordProfiles: Record<string, string[]> = {
  'how-to-choose-the-right-fence': ['how to choose fence', 'fence selection guide', 'best fence for property', 'fence materials comparison', 'fence buying guide'],
  'ppgi-vs-pvc-fencing-which-is-better': ['PPGI vs PVC fencing', 'PVC fencing comparison', 'galvanized iron vs PVC', 'fence material comparison'],
  'fence-height-rules-in-uae': ['UAE fence height rules', 'fence regulations UAE', 'Dubai fence height', 'Abu Dhabi fence regulations'],
  'best-fencing-for-data-centers': ['data center fencing', 'data center security', 'critical infrastructure fencing', 'anti climb 358 fence'],
  'difference-between-358-and-welded-mesh': ['358 mesh vs welded mesh', 'prison mesh fencing', 'welded mesh comparison', 'anti-climb mesh'],
  'chain-link-vs-welded-mesh-fence': ['chain link vs welded mesh fence', 'chain link fence UAE', 'welded mesh fence UAE', 'fencing comparison'],
  'pvc-coated-vs-galvanized-chain-link-fence': ['PVC coated vs galvanized fence', 'PVC coated chain link fence', 'GI chain link fence', 'galvanized chain link fence'],
  'best-fencing-for-construction-sites-in-dubai': ['construction site fencing Dubai', 'temporary fence supplier UAE', 'PVC hoarding fence Dubai', 'site boundary fence'],
  'warehouse-security-fencing-guide': ['warehouse security fencing UAE', 'warehouse fencing Dubai', 'chain link fence warehouse', 'welded mesh warehouse fence'],
  'barbed-wire-vs-razor-wire': ['barbed wire vs razor wire', 'barbed wire supplier UAE', 'razor wire supplier UAE', 'perimeter security wire'],
  'how-to-prepare-a-fencing-rfq': ['fencing RFQ template', 'fence quotation UAE', 'fencing supplier RFQ', 'fence project specification'],
};

export const staticSeoProfiles = {
  home: {
    title: 'Fencing Supplier in Dubai UAE | Chain Link, Welded Mesh & Security Fencing',
    description:
      'SRK Fence is a Dubai-based fencing supplier and contractor for chain link fence, welded mesh fence, PVC fence, anti-climb fence, temporary fencing, barbed wire, razor wire, gates and perimeter security projects across UAE and GCC.',
    path: '/',
    keywords: [...coreMoneyKeywords, 'perimeter fencing UAE', 'fence installation Dubai', 'fencing company UAE'],
    image: '/SRK FENCE Banners.webp',
    intent: 'Homepage for fencing supplier, contractor, product discovery and RFQ conversion.',
  },
  products: {
    title: 'Fencing Products UAE | Chain Link, Welded Mesh, PVC, Anti-Climb & Security Wire',
    description:
      'Explore SRK Fence products including chain link fence, GI chain link, PVC coated chain link, welded mesh fence, anti-climb 358 fence, temporary fence panels, PVC hoarding, barbed wire, razor wire, steel fencing and accessories.',
    path: '/products',
    keywords: [
      ...coreMoneyKeywords,
      ...productSeoPages.flatMap((product) => [product.primaryKeyword, ...product.secondaryKeywords]),
    ],
    image: '/SRK FENCE Banners2.webp',
    intent: 'Product category page for buyers comparing fencing systems and requesting RFQs.',
  },
  countries: {
    title: 'GCC Fencing Supplier | UAE, Qatar, Saudi Arabia, Oman, Kuwait & Middle East',
    description:
      'SRK Fence supplies chain link, welded mesh, anti-climb, PVC, temporary fencing, barbed wire, razor wire, gates and accessories across UAE, Bahrain, Qatar, Kuwait, Saudi Arabia, Iraq, Oman and Jordan.',
    path: '/countries',
    keywords: countryPages.flatMap((country) => [country.primaryKeyword, ...country.secondaryKeywords]),
    image: '/Whyusnew/chain-link-fence-supplier-uae-saudi-gcc.png',
    intent: 'Country hub for GCC and Middle East fencing supplier searches.',
  },
  applications: {
    title: 'Fencing Applications UAE | Industrial, Warehouse, Data Center, Farm & Construction',
    description:
      'Find fencing by application: residential fencing, industrial fencing, warehouse security fencing, data center security fencing, oil and gas fencing, construction site fencing, farm fencing and border fencing.',
    path: '/applications',
    keywords: [
      ...Object.values(applicationSeoContent).map((item) => item.primaryKeyword),
      ...Object.values(applicationKeywordProfiles).flatMap((item) => item.secondaryKeywords),
    ],
    image: '/Applicationsnew/high-security-boundary-fencing-contractors-gcc.png',
    intent: 'Application hub for use-case based fencing searches and answer-first RFQ journeys.',
  },
  blog: {
    title: 'Fencing Blog and Guides UAE | Chain Link, Welded Mesh, RFQ & Security Guides',
    description:
      'Read SRK Fence guides on chain link vs welded mesh, PVC coated vs galvanized chain link, construction site fencing, warehouse security fencing, barbed wire vs razor wire and fencing RFQs.',
    path: '/blog',
    keywords: Object.values(blogKeywordProfiles).flat(),
    image: '/SRK FENCE Banners.webp',
    intent: 'Educational content hub supporting product, application and country pages.',
  },
  projects: {
    title: 'Fencing Projects UAE | Security Fence, Warehouse, Data Center & Commercial Work',
    description:
      'View SRK Fence project examples for security fencing, chain link fencing, welded mesh fencing, data centers, warehouses, construction sites, commercial facilities and perimeter protection.',
    path: '/projects',
    keywords: ['fencing projects UAE', 'security fencing projects Dubai', 'warehouse fencing UAE', 'data center fencing UAE', 'commercial fencing Dubai'],
    image: '/SRK FENCE Banners.webp',
    intent: 'Project proof page for buyers validating experience before RFQ.',
  },
  contact: {
    title: 'Request a Fencing Quote in Dubai UAE | SRK Fence RFQ',
    description:
      'Contact SRK Fence for chain link fence, welded mesh fence, PVC fence, anti-climb fence, temporary fencing, barbed wire, razor wire, gates, accessories and installation quotations in UAE and GCC.',
    path: '/contact',
    keywords: [...rfqKeywords, 'fencing supplier in Dubai', 'fence contractor UAE', 'chain link fence quote UAE'],
    image: '/SRK FENCE Banners2.webp',
    intent: 'RFQ and contact page for quote-ready fencing buyers.',
  },
  whyUs: {
    title: 'UAE Fencing Supplier, Contractor & Installation Partner',
    description:
      'Choose SRK Fence for UAE and GCC fencing projects: chain link, welded mesh, PVC, anti-climb, temporary fencing, barbed wire, razor wire, gates, accessories, RFQ support and installation guidance.',
    path: '/why-us',
    keywords: ['why choose SRK Fence', 'UAE fencing supplier', 'fence contractor UAE', 'Dubai fencing company', 'perimeter security supplier UAE', ...coreMoneyKeywords],
    image: '/Whyusnew/welded-mesh-fence-uae-gcc-industrial.png',
    intent: 'Trust and capability page for supplier evaluation and procurement confidence.',
  },
  rfq: {
    title: 'Fencing RFQ Form UAE | Chain Link, Welded Mesh, PVC & Security Fence Quote',
    description:
      'Submit a fencing RFQ with project type, fence height, running meters, mesh opening, wire diameter, material coating, posts, gates, installation scope, timeline and drawings.',
    path: '/rfq',
    keywords: [...rfqKeywords, 'chain link fence quote UAE', 'welded mesh fence quote UAE', 'temporary fence quote Dubai'],
    image: '/SRK FENCE Banners2.webp',
    intent: 'Detailed quotation form for fence project specifications and procurement.',
  },
} satisfies Record<string, StaticSeoProfile>;

export function dedupeKeywords(keywords: Array<string | undefined | null | false>) {
  return Array.from(
    new Set(
      keywords
        .filter((keyword): keyword is string => Boolean(keyword))
        .map((keyword) => keyword.trim())
        .filter(Boolean),
    ),
  );
}

function normalizeProductBaseKeyword(product: ProductSeoPage) {
  return product.primaryKeyword
    .replace(/\s+in Dubai$/i, '')
    .replace(/\s+Dubai$/i, '')
    .replace(/\s+UAE$/i, '')
    .trim();
}

export function getProductKeywordSet(product: ProductSeoPage) {
  const baseKeyword = normalizeProductBaseKeyword(product);
  const countryKeywords = countryPages.slice(0, 8).map((country) => {
    const countryTerm = country.country === 'UAE' ? 'UAE' : country.country;
    return `${baseKeyword} ${countryTerm}`;
  });

  return dedupeKeywords([
    product.primaryKeyword,
    ...product.secondaryKeywords,
    ...countryKeywords,
    `${product.name} supplier UAE`,
    `${product.name} Dubai`,
    `${product.name} installation UAE`,
    `${product.name} quotation`,
    product.category,
  ]);
}

export function getCountryKeywordSet(country: CountryPage) {
  return dedupeKeywords([
    country.primaryKeyword,
    ...country.secondaryKeywords,
    ...country.products.map((product) => `${product} ${country.country}`),
    ...country.cities.slice(0, 4).map((city) => `fencing supplier ${city}`),
    `fence contractor ${country.country}`,
    `security fencing ${country.country}`,
    `perimeter fencing ${country.country}`,
  ]);
}

export function getApplicationKeywordSet(slug: string) {
  const content = applicationSeoContent[slug];
  const profile = applicationKeywordProfiles[slug];

  return dedupeKeywords([
    content?.primaryKeyword,
    ...(profile?.secondaryKeywords ?? []),
    ...(content?.recommendedProducts.map((product) => product.label) ?? []),
  ]);
}

export function getBlogKeywordSet(slug: string, fallbackKeywords: string[] = []) {
  return dedupeKeywords([...(blogKeywordProfiles[slug] ?? []), ...fallbackKeywords]);
}


function cleanSeoTitle(title: string) {
  return title
    // Remove any existing brand suffix so Next.js never outputs "SRK Fence | SRK Fence".
    .replace(/\s*[|—-]\s*SRK\s*FENCE\s*$/i, '')
    .replace(/\s*[|—-]\s*SRK\s*Fence\s*$/i, '')
    // If a title starts with the brand, replace that first brand mention with a buyer keyword.
    .replace(/^SRK\s*Fence\s*[|—-]\s*/i, 'UAE Fencing Supplier | ')
    .replace(/\s+/g, ' ')
    .trim();
}

function withBrandSuffix(title: string) {
  const cleanTitle = cleanSeoTitle(title);
  return /\|\s*SRK\s*Fence$/i.test(cleanTitle) ? cleanTitle : `${cleanTitle} | SRK Fence`;
}

export function buildSeoMetadata(profile: StaticSeoProfile): Metadata {
  const keywords = dedupeKeywords(profile.keywords);
  const image = profile.image || '/SRK FENCE Banners.webp';
  const displayTitle = withBrandSuffix(profile.title);

  return {
    title: displayTitle,
    description: profile.description,
    keywords,
    alternates: {
      canonical: profile.path,
    },
    openGraph: {
      type: 'website',
      url: profile.path,
      title: displayTitle,
      description: profile.description,
      siteName: companyName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${companyName} - ${displayTitle}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: displayTitle,
      description: profile.description,
      images: [image],
    },
    other: {
      'geo.region': 'AE-SH',
      'geo.placename': 'Dubai, Sharjah, United Arab Emirates',
      'business:contact_data:country_name': 'United Arab Emirates',
      'ai-search-intent': profile.intent,
      'answer-engine-topic': keywords.slice(0, 8).join(', '),
    },
  };
}

export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path;
  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

export function normalizeSlug(slug = '') {
  try {
    return decodeURIComponent(slug).toLowerCase();
  } catch {
    return slug.toLowerCase();
  }
}

export function getProductSeoBySlug(slug: string) {
  const normalized = normalizeSlug(slug);
  return productSeoPages.find((product) => product.slug === normalized);
}

export function getCountryBySlug(slug: string) {
  const normalized = normalizeSlug(slug);
  return countryPages.find((country) => country.slug === normalized);
}

export function buildOrganizationSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: companyName,
    legalName: companyLegalName,
    url: siteUrl,
    logo: absoluteUrl('/new_whitelogog.png'),
    description: entityDescription,
    telephone: primaryPhone,
    email: primaryEmail,
    sameAs: [
      'https://www.facebook.com/srkmetals',
      'https://www.linkedin.com/company/srk-metals-uae/',
      'https://www.instagram.com/srkmetals23/',
      'https://www.youtube.com/@SRKMetals',
    ],
    areaServed: marketsServed,
    knowsAbout: dedupeKeywords([
      ...coreMoneyKeywords,
      ...productSeoPages.map((product) => product.name),
      ...Object.values(applicationSeoContent).map((item) => item.primaryKeyword),
    ]),
  };
}

export function buildLocalBusinessSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#localbusiness`,
    name: companyName,
    image: absoluteUrl('/SRK FENCE Banners.webp'),
    url: siteUrl,
    telephone: primaryPhone,
    email: primaryEmail,
    description: entityDescription,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sharjah Publication City, E311, opposite Al Zahia, Muwaileh Commercial',
      addressLocality: 'Sharjah',
      addressCountry: 'AE',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    areaServed: marketsServed,
    keywords: coreMoneyKeywords.join(', '),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: primaryPhone,
        contactType: 'sales',
        areaServed: marketsServed,
        availableLanguage: ['English', 'Arabic'],
      },
    ],
  };
}

export function buildWebsiteSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: companyName,
    url: siteUrl,
    keywords: coreMoneyKeywords.join(', '),
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/products?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function buildBreadcrumbSchema(items: LinkItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };
}

export function buildFaqSchema(faqs: FaqItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildProductSchema(product: ProductSeoPage): Record<string, unknown> {
  const keywords = getProductKeywordSet(product);

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: absoluteUrl(product.image),
    description: product.shortDescription,
    brand: {
      '@type': 'Brand',
      name: companyName,
    },
    category: product.category,
    keywords: keywords.join(', '),
    additionalProperty: product.specs.map((spec) => ({
      '@type': 'PropertyValue',
      name: spec.label,
      value: spec.value,
    })),
    offers: {
      '@type': 'Offer',
      url: absoluteUrl(`/products/${product.slug}`),
      priceCurrency: 'AED',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'AED',
        description: 'Custom quotation based on project specification',
      },
    },
  };
}

export function buildServiceSchema(
  name: string,
  description: string,
  url: string,
  areaServed = marketsServed,
  keywords: string[] = [],
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: companyName,
      url: siteUrl,
    },
    areaServed,
    url: absoluteUrl(url),
    serviceType: 'Fencing supply, contracting and installation',
    keywords: dedupeKeywords([name, ...keywords]).join(', '),
  };
}

export function buildItemListSchema(name: string, items: LinkItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      url: absoluteUrl(item.href),
    })),
  };
}

export function buildWebPageSchema(
  name: string,
  description: string,
  url: string,
  keywords: string[] = [],
): Record<string, unknown> {
  const keywordSet = dedupeKeywords(keywords);

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: absoluteUrl(url),
    isPartOf: {
      '@type': 'WebSite',
      name: companyName,
      url: siteUrl,
    },
    about: keywordSet.slice(0, 10).map((keyword) => ({
      '@type': 'Thing',
      name: keyword,
    })),
    keywords: keywordSet.join(', '),
  };
}
