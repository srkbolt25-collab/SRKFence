import type { Metadata } from 'next';

export const siteUrl = 'https://www.srkfencing.com';
export const companyName = 'SRK Fence';
export const companyLegalName = 'SRK FENCE Industries';
export const primaryPhone = '+971522160874';
export const secondaryPhone = '+971528489775';
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
  galleryImages?: Array<{ src: string; alt: string; caption: string }>;
  specs: Array<{ label: string; value: string }>;
  applications: LinkItem[];
  internalLinks: LinkItem[];
  faqs: FaqItem[];
  rfqPrompt: string;
};

const baseProductSeoPages: ProductSeoPage[] = [
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

const pdfMappedProductPageUpdates: Array<Pick<ProductSeoPage, 'slug'> & Partial<Omit<ProductSeoPage, 'slug'>>> = [
  {
    slug: 'anti-climb-358-fence',
    image: "/products/pdf-mapped/anti-climb-358-fence/anti-climb-358-fence-01.webp",
    galleryImages: [
      { src: "/products/pdf-mapped/anti-climb-358-fence/anti-climb-358-fence-01.webp", alt: "Anti-climb 358 security fence details and specification", caption: "Anti-climb 358 security fence details and specification" },
      { src: "/products/pdf-mapped/anti-climb-358-fence/anti-climb-358-fence-02.webp", alt: "Anti-climb welded mesh fence installation examples", caption: "Anti-climb welded mesh fence installation examples" }
    ],
  },
  {
    slug: 'barbed-wire',
    image: "/products/pdf-mapped/barbed-wire/barbed-wire-01.webp",
    galleryImages: [
      { src: "/products/pdf-mapped/barbed-wire/barbed-wire-01.webp", alt: "G.I. and PVC coated barbed wire details", caption: "G.I. and PVC coated barbed wire details" },
      { src: "/products/pdf-mapped/barbed-wire/barbed-wire-02.webp", alt: "G.I. and PVC barbed wire application examples", caption: "G.I. and PVC barbed wire application examples" }
    ],
  },
  {
    slug: 'razor-wire',
    image: "/products/pdf-mapped/razor-wire/razor-wire-01.webp",
    galleryImages: [
      { src: "/products/pdf-mapped/razor-wire/razor-wire-01.webp", alt: "Razor wire product details and material options", caption: "Razor wire product details and material options" },
      { src: "/products/pdf-mapped/razor-wire/razor-wire-02.webp", alt: "Razor wire coils and diameter options", caption: "Razor wire coils and diameter options" }
    ],
  },
  {
    slug: 'temporary-fence-panels',
    image: "/products/pdf-mapped/temporary-fence-panels/temporary-fence-panels-01.webp",
    galleryImages: [
      { src: "/products/pdf-mapped/temporary-fence-panels/temporary-fence-panels-01.webp", alt: "Temporary fence panel system overview", caption: "Temporary fence panel system overview" },
      { src: "/products/pdf-mapped/temporary-fence-panels/temporary-fence-panels-02.webp", alt: "Temporary fence panels product details", caption: "Temporary fence panels product details" },
      { src: "/products/pdf-mapped/temporary-fence-panels/temporary-fence-panels-03.webp", alt: "Temporary fencing applications and finish options", caption: "Temporary fencing applications and finish options" }
    ],
  },
  {
    slug: 'fence-accessories',
    image: "/products/pdf-mapped/fence-accessories/fence-accessories-01.webp",
    galleryImages: [
      { src: "/products/pdf-mapped/fence-accessories/fence-accessories-01.webp", alt: "Fence accessories range for G.I. and PVC coated systems", caption: "Fence accessories range for G.I. and PVC coated systems" },
      { src: "/products/pdf-mapped/fence-accessories/fence-accessories-02.webp", alt: "Fence accessory components and post cap options", caption: "Fence accessory components and post cap options" }
    ],
  },
];

const pdfMappedAdditionalProductPages: ProductSeoPage[] = [
  {
    slug: "fence-posts-gi-ms-pvc",
    name: "G.I., M.S. and PVC Fence Posts",
    category: "Fence Posts",
    primaryKeyword: "GI MS PVC fence posts supplier UAE",
    secondaryKeywords: ["fence posts supplier in Dubai", "GI fence post", "MS fence post", "PVC fence post", "fence post installation UAE"],
    metaTitle: "G.I., M.S. & PVC Fence Posts Supplier UAE | SRK Fence",
    metaDescription: "SRK Fence supplies G.I., M.S. and PVC fence posts in UAE for chain link, welded mesh, security, residential and commercial fencing systems.",
    h1: "G.I., M.S. and PVC Fence Posts Supplier in UAE",
    shortDescription: "Fence post options in G.I., M.S. and PVC coated finishes for strong, corrosion-resistant and project-specific fencing systems.",
    intro: "Fence posts provide the main structural support for chain-link fence, welded mesh fence, PVC fence, perimeter security systems and gate lines. SRK Fence supplies G.I., M.S. and PVC fence posts for UAE and GCC projects with round, square, Y-arm, base-plate and custom post options selected according to fence height, coating, wind exposure, gates and installation method.",
    image: "/products/pdf-mapped/fence-posts-gi-ms-pvc/fence-posts-gi-ms-pvc-01.webp",
    galleryImages: [
      { src: "/products/pdf-mapped/fence-posts-gi-ms-pvc/fence-posts-gi-ms-pvc-01.webp", alt: "Fence posts overview: G.I., M.S. and PVC post options", caption: "Fence posts overview: G.I., M.S. and PVC post options" },
      { src: "/products/pdf-mapped/fence-posts-gi-ms-pvc/fence-posts-gi-ms-pvc-02.webp", alt: "G.I., M.S. and PVC fence post comparison graphic", caption: "G.I., M.S. and PVC fence post comparison graphic" },
      { src: "/products/pdf-mapped/fence-posts-gi-ms-pvc/fence-posts-gi-ms-pvc-03.webp", alt: "G.I. galvanized fence post options", caption: "G.I. galvanized fence post options" },
      { src: "/products/pdf-mapped/fence-posts-gi-ms-pvc/fence-posts-gi-ms-pvc-04.webp", alt: "M.S. mild steel fence post options", caption: "M.S. mild steel fence post options" },
      { src: "/products/pdf-mapped/fence-posts-gi-ms-pvc/fence-posts-gi-ms-pvc-05.webp", alt: "PVC coated fence post options", caption: "PVC coated fence post options" }
    ],
    specs: [
      { label: "Product options", value: "G.I. hot-dip galvanized, M.S. mild steel, PVC coated and powder coated posts" },
      { label: "Post profiles", value: "Round posts, square posts, Y-arm posts and project-specific profiles" },
      { label: "Finish options", value: "Hot-dip galvanized, powder coated, PVC coated or painted finish" },
      { label: "Applications", value: "Chain-link fence, welded mesh fence, PVC fence, perimeter fence and security fencing" },
      { label: "Customization", value: "Height, thickness, hole positions, brackets and base plates as per project requirement" },
    ],
    applications: [
      { label: "Boundary Security Fencing", href: "/applications/boundary-security-fencing" },
      { label: "Commercial & Industrial", href: "/applications/commercial-industrial" },
      { label: "Schools & Public Parks", href: "/applications/schools-public-parks" },
      { label: "Warehouses & Logistic Centers", href: "/applications/warehouses-logistic-centers" },
    ],
    internalLinks: [
      { label: "Panel & Post System", href: "/products/panel-post-system" },
      { label: "Clamps and Connectors", href: "/products/clamps-and-connectors" },
      { label: "Fence Accessories", href: "/products/fence-accessories" },
      { label: "UAE", href: "/countries/uae" },
    ],
    faqs: [
      {
        question: "What are G.I., M.S. and PVC fence posts used for?",
        answer: "They are used to support chain-link fencing, welded mesh fencing, PVC fencing, gate systems and perimeter security lines.",
      },
      {
        question: "Which fence post finish should I choose?",
        answer: "G.I. posts are selected for galvanized corrosion resistance, M.S. posts are selected for strength and coated finishes, and PVC coated posts are selected for a cleaner visual finish and added surface protection.",
      },
      {
        question: "What details are needed for a fence post quotation?",
        answer: "Share fence type, height, running metres, post spacing, coating, gate requirement, base plate or embedded installation and delivery location.",
      },
    ],
    rfqPrompt: "For a fence post quotation, share the post type, fence height, length, coating, post spacing, accessories, gate requirement and delivery or installation location.",
  },
  {
    slug: "panel-post-system",
    name: "Panel & Post System",
    category: "Panel Fencing",
    primaryKeyword: "panel and post system supplier UAE",
    secondaryKeywords: ["panel post fencing Dubai", "welded mesh panel post system", "modular fencing system UAE"],
    metaTitle: "Panel & Post System Supplier UAE | SRK Fence",
    metaDescription: "SRK Fence supplies panel and post systems in UAE for welded mesh, chain-link, G.I. hoarding and PVC coated fencing applications.",
    h1: "Panel & Post System Supplier in UAE",
    shortDescription: "Complete modular panel and post fencing systems with posts, panels, clamps, base plates and fixing accessories.",
    intro: "Panel and post systems combine rigid fence panels with compatible posts, base plates, clips, clamps and gates to create a stable perimeter solution. They are used for commercial, industrial, infrastructure, school, warehouse and residential projects where quick assembly, neat appearance and strong panel-to-post connection matter.",
    image: "/products/pdf-mapped/panel-post-system/panel-post-system-01.webp",
    galleryImages: [
      { src: "/products/pdf-mapped/panel-post-system/panel-post-system-01.webp", alt: "Panel and post system overview", caption: "Panel and post system overview" },
      { src: "/products/pdf-mapped/panel-post-system/panel-post-system-02.webp", alt: "Panel and post installation and component details", caption: "Panel and post installation and component details" }
    ],
    specs: [
      { label: "System type", value: "Welded mesh, chain-link, G.I. hoarding and PVC coated panel options" },
      { label: "Post options", value: "Square, round or profile posts with base plate, embedded or wall-mount options" },
      { label: "Finish", value: "G.I., hot-dip galvanized, PVC coated, powder coated or custom finish" },
      { label: "Components", value: "Fence panels, posts, post caps, clamps, base plates, bolts and nuts" },
      { label: "Customization", value: "Panel height, width, wire size, color, coating and gate openings" },
    ],
    applications: [
      { label: "Commercial & Industrial", href: "/applications/commercial-industrial" },
      { label: "Warehouses & Logistic Centers", href: "/applications/warehouses-logistic-centers" },
      { label: "Boundary Security Fencing", href: "/applications/boundary-security-fencing" },
      { label: "Schools & Public Parks", href: "/applications/schools-public-parks" },
    ],
    internalLinks: [
      { label: "Fence Posts", href: "/products/fence-posts-gi-ms-pvc" },
      { label: "Rectangle Mesh Fence", href: "/products/rectangle-mesh-fence" },
      { label: "Fence Accessories", href: "/products/fence-accessories" },
      { label: 'Available in UAE', href: '/countries/uae' },
      { label: 'Available in Bahrain', href: '/countries/bahrain' },
      { label: 'Available in Qatar', href: '/countries/qatar' },
    ],
    faqs: [
      {
        question: "What is a panel and post fencing system?",
        answer: "It is a modular fence system made from panels, posts and fixing accessories designed to create a stable perimeter.",
      },
      {
        question: "Can the panel and post system be customized?",
        answer: "Yes, panel height, post profile, coating, color, base plate, gate openings and accessories can be customized to project requirements.",
      },
      {
        question: "Where is a panel and post system used?",
        answer: "It is used for factories, warehouses, public areas, residential compounds, infrastructure and commercial boundaries.",
      },
    ],
    rfqPrompt: "Send panel height, fence length, mesh or panel type, post type, coating, color, gate locations and installation scope for a panel and post system quote.",
  },
  {
    slug: "high-security-gate-systems",
    name: "High-Security Gate Systems",
    category: "Gate Systems",
    primaryKeyword: "high security gate systems UAE",
    secondaryKeywords: ["security gate supplier Dubai", "industrial sliding gate UAE", "fence swing gate supplier"],
    metaTitle: "High-Security Gate Systems UAE | SRK Fence",
    metaDescription: "SRK Fence supplies high-security swing gates, sliding gates and controlled access gate systems for industrial, commercial and security perimeters in UAE.",
    h1: "High-Security Gate Systems Supplier in UAE",
    shortDescription: "Swing and sliding gate systems for controlled access, heavy-duty construction and secure perimeter entry points.",
    intro: "High-security gate systems help control vehicle and pedestrian access at industrial facilities, warehouses, commercial complexes, infrastructure perimeters and restricted zones. SRK Fence supports swing gates, sliding gates, compatible posts, hinges, drop bolts, locks, automation-ready designs and security accessories based on project specification.",
    image: "/products/pdf-mapped/high-security-gate-systems/high-security-gate-systems-01.webp",
    galleryImages: [
      { src: "/products/pdf-mapped/high-security-gate-systems/high-security-gate-systems-01.webp", alt: "High-security gate system overview", caption: "High-security gate system overview" },
      { src: "/products/pdf-mapped/high-security-gate-systems/high-security-gate-systems-02.webp", alt: "High-security gate system installation options", caption: "High-security gate system installation options" }
    ],
    specs: [
      { label: "Gate types", value: "Swing gates, sliding gates, pedestrian gates and vehicle gates" },
      { label: "Compatibility", value: "Chain-link fence, welded mesh fence, panel and post systems and wall-top security" },
      { label: "Finish", value: "Hot-dip galvanized, powder coated, PVC coated or painted finish" },
      { label: "Hardware", value: "Hinges, locks, handles, drop rods, latches, rollers and brackets" },
      { label: "Options", value: "Manual or automated gate provisions as per project requirement" },
    ],
    applications: [
      { label: "Commercial & Industrial", href: "/applications/commercial-industrial" },
      { label: "Warehouses & Logistic Centers", href: "/applications/warehouses-logistic-centers" },
      { label: "Data Centers", href: "/applications/data-centers" },
      { label: "Oil & Gas Sector", href: "/applications/oil-gas-sector" },
    ],
    internalLinks: [
      { label: "Gate Hinges", href: "/products/gate-hinges" },
      { label: "Fence Accessories", href: "/products/fence-accessories" },
      { label: "Panel & Post System", href: "/products/panel-post-system" },
      { label: 'Available in UAE', href: '/countries/uae' },
      { label: 'Available in Bahrain', href: '/countries/bahrain' },
      { label: 'Available in Qatar', href: '/countries/qatar' },
    ],
    faqs: [
      {
        question: "What types of high-security gates are available?",
        answer: "SRK Fence can support swing gates, sliding gates, pedestrian gates and vehicle access gates depending on site layout.",
      },
      {
        question: "Can gates be supplied with fence systems?",
        answer: "Yes, gates can be integrated with chain-link, welded mesh, panel and post and high-security fence systems.",
      },
      {
        question: "What details are required for a gate quote?",
        answer: "Share gate opening width, height, type, manual or automation requirement, fence system, finish, lock hardware and site location.",
      },
    ],
    rfqPrompt: "For a high-security gate quote, share gate width, height, swing or sliding type, finish, hardware, access-control requirement and drawings if available.",
  },
  {
    slug: "base-plates",
    name: "Base Plates",
    category: "Fence Accessories",
    primaryKeyword: "fence base plates supplier UAE",
    secondaryKeywords: ["post base plate Dubai", "galvanized base plate", "powder coated base plate"],
    metaTitle: "Fence Base Plates Supplier UAE | SRK Fence",
    metaDescription: "SRK Fence supplies G.I., hot-dip galvanized, M.S. and powder coated base plates for fence posts, gates, railings and panel systems.",
    h1: "Fence Base Plates Supplier in UAE",
    shortDescription: "Strong base plates for secure post mounting in G.I., hot-dip galvanized, M.S. and powder coated finishes.",
    intro: "Base plates are used to fix fence posts, gates, railings and support sections to concrete, steel, masonry or other prepared surfaces. SRK Fence supplies base plate options for round posts, square posts, angled supports and custom fixing arrangements, with finish selection based on exposure and project requirement.",
    image: "/products/pdf-mapped/base-plates/base-plates-01.webp",
    galleryImages: [
      { src: "/products/pdf-mapped/base-plates/base-plates-01.webp", alt: "Base plates product range and finish options", caption: "Base plates product range and finish options" },
      { src: "/products/pdf-mapped/base-plates/base-plates-02.webp", alt: "Base plate and mounting detail options", caption: "Base plate and mounting detail options" }
    ],
    specs: [
      { label: "Finish options", value: "G.I. galvanized, hot-dip galvanized, M.S. mild steel and powder coated green" },
      { label: "Post compatibility", value: "Round posts, square posts, plate posts and custom post sections" },
      { label: "Use case", value: "Fence post mounting, gate posts, railings and support brackets" },
      { label: "Installation", value: "Bolt-down, weld-on or project-specific fixing method" },
      { label: "Customization", value: "Plate size, thickness, hole pattern, post sleeve and gusset design" },
    ],
    applications: [
      { label: "Boundary Security Fencing", href: "/applications/boundary-security-fencing" },
      { label: "Commercial & Industrial", href: "/applications/commercial-industrial" },
      { label: "Warehouses & Logistic Centers", href: "/applications/warehouses-logistic-centers" },
    ],
    internalLinks: [
      { label: "Fence Posts", href: "/products/fence-posts-gi-ms-pvc" },
      { label: "Panel & Post System", href: "/products/panel-post-system" },
      { label: "Fasteners / Bolts", href: "/products/fasteners-bolts" },
      { label: 'Available in UAE', href: '/countries/uae' },
      { label: 'Available in Bahrain', href: '/countries/bahrain' },
      { label: 'Available in Qatar', href: '/countries/qatar' },
    ],
    faqs: [
      {
        question: "What are fence base plates used for?",
        answer: "Base plates are used to mount fence posts, gate posts and railing supports to prepared surfaces.",
      },
      {
        question: "Can base plates be customized?",
        answer: "Yes, plate size, thickness, holes, post sleeve and finish can be customized by requirement.",
      },
      {
        question: "Which finish is suitable for outdoor base plates?",
        answer: "G.I., hot-dip galvanized or powder coated finishes are commonly reviewed for outdoor projects.",
      },
    ],
    rfqPrompt: "Share post size, base plate type, plate thickness, hole pattern, finish, quantity and mounting surface for a base plate quote.",
  },
  {
    slug: "gate-hinges",
    name: "Gate Hinges",
    category: "Gate Hardware",
    primaryKeyword: "fence gate hinges supplier UAE",
    secondaryKeywords: ["gate hinge Dubai", "heavy duty gate hinge", "spring loaded gate hinge"],
    metaTitle: "Fence Gate Hinges Supplier UAE | SRK Fence",
    metaDescription: "SRK Fence supplies heavy-duty, adjustable, spring-loaded and weld-on gate hinges for secure fence gates and industrial access points.",
    h1: "Fence Gate Hinges Supplier in UAE",
    shortDescription: "Heavy-duty gate hinge options for swing gates, chain-link gates, welded mesh gates and secure fence access points.",
    intro: "Gate hinges are critical hardware components that allow fence gates to open, close and align correctly. SRK Fence supplies hinge options for chain-link gates, welded mesh gates, security gates and industrial access points, including heavy-duty, adjustable, spring-loaded and weld-on hinge designs.",
    image: "/products/pdf-mapped/gate-hinges/gate-hinges-01.webp",
    galleryImages: [
      { src: "/products/pdf-mapped/gate-hinges/gate-hinges-01.webp", alt: "Fence gate hinges overview and hinge types", caption: "Fence gate hinges overview and hinge types" }
    ],
    specs: [
      { label: "Hinge types", value: "Heavy-duty, adjustable, spring-loaded and weld-on gate hinges" },
      { label: "Material", value: "Galvanized steel, M.S. and coated options by requirement" },
      { label: "Compatibility", value: "Chain-link gates, welded mesh gates, panel gates and security gates" },
      { label: "Applications", value: "Top and bottom hinges for pedestrian and vehicle gate systems" },
      { label: "Options", value: "Custom hole spacing, pin sizes, mounting plates and coating finishes" },
    ],
    applications: [
      { label: "Commercial & Industrial", href: "/applications/commercial-industrial" },
      { label: "Warehouses & Logistic Centers", href: "/applications/warehouses-logistic-centers" },
      { label: "Boundary Security Fencing", href: "/applications/boundary-security-fencing" },
    ],
    internalLinks: [
      { label: "High-Security Gate Systems", href: "/products/high-security-gate-systems" },
      { label: "Fence Accessories", href: "/products/fence-accessories" },
      { label: "Fasteners / Bolts", href: "/products/fasteners-bolts" },
      { label: 'Available in UAE', href: '/countries/uae' },
      { label: 'Available in Bahrain', href: '/countries/bahrain' },
      { label: 'Available in Qatar', href: '/countries/qatar' },
    ],
    faqs: [
      {
        question: "What gate hinges does SRK Fence supply?",
        answer: "SRK Fence can supply heavy-duty, adjustable, spring-loaded and weld-on hinges for fence gates.",
      },
      {
        question: "Are gate hinges available in galvanized finish?",
        answer: "Yes, galvanized and coated hinge options can be reviewed based on project requirement.",
      },
      {
        question: "What details are needed for gate hinges?",
        answer: "Share gate size, weight, post type, hinge type, finish and quantity.",
      },
    ],
    rfqPrompt: "For gate hinge pricing, share gate dimensions, gate weight, post type, hinge style, finish and project quantity.",
  },
  {
    slug: "post-and-railing-system",
    name: "Post & Rail System",
    category: "Chain-Link Accessories",
    primaryKeyword: "chain link fence post and rail system UAE",
    secondaryKeywords: ["post rail system Dubai", "chain link top rail", "fence rail system supplier"],
    metaTitle: "Post & Rail System UAE | Chain-Link Fence Posts & Rails",
    metaDescription: "SRK Fence supplies post and rail systems for chain-link fencing with G.I., PVC coated and powder coated options for UAE projects.",
    h1: "Post & Rail System for Chain-Link Fencing",
    shortDescription: "Fence posts, top rails, clamps and support rails for durable chain-link perimeter systems.",
    intro: "A chain-link fence post and rail system uses vertical posts, top rails, clamps and connectors to provide structure and alignment for chain-link mesh. The system can be supplied in G.I. finish, PVC coated or powder coated finishes depending on project exposure, visual requirement and installation method.",
    image: "/products/pdf-mapped/post-and-railing-system/post-and-railing-system-01.webp",
    galleryImages: [
      { src: "/products/pdf-mapped/post-and-railing-system/post-and-railing-system-01.webp", alt: "Post and rail chain-link fencing installation examples", caption: "Post and rail chain-link fencing installation examples" },
      { src: "/products/pdf-mapped/post-and-railing-system/post-and-railing-system-02.webp", alt: "G.I. finish and PVC coated post-and-rail comparison", caption: "G.I. finish and PVC coated post-and-rail comparison" }
    ],
    specs: [
      { label: "System components", value: "Posts, top rails, tension bars, U-bolts, band clamps and fixing accessories" },
      { label: "Finish options", value: "G.I. galvanized, PVC coated green and powder coated black or custom colors" },
      { label: "Installation", value: "Embedded, bolt-down or project-specific mounting" },
      { label: "Use case", value: "Chain-link fence lines, wall-top fencing and perimeter security" },
      { label: "Customization", value: "Post diameter, rail diameter, height, bracket type and finish" },
    ],
    applications: [
      { label: "Boundary Security Fencing", href: "/applications/boundary-security-fencing" },
      { label: "Commercial & Industrial", href: "/applications/commercial-industrial" },
      { label: "Farms & Animal Enclosures", href: "/applications/farms-animal-enclosures" },
    ],
    internalLinks: [
      { label: "Chain Link Fence", href: "/products/chain-link-fence" },
      { label: "G.I. Chain Link Fence", href: "/products/gi-chain-link-fence" },
      { label: "Clamps and Connectors", href: "/products/clamps-and-connectors" },
      { label: 'Available in UAE', href: '/countries/uae' },
      { label: 'Available in Bahrain', href: '/countries/bahrain' },
      { label: 'Available in Qatar', href: '/countries/qatar' },
    ],
    faqs: [
      {
        question: "What is a post and rail system?",
        answer: "It is a structural support system for chain-link fencing that uses posts, rails and fixing accessories.",
      },
      {
        question: "Can post and rail systems be PVC coated?",
        answer: "Yes, G.I., PVC coated and powder coated finishes can be reviewed.",
      },
      {
        question: "What details are required for post and rail quotation?",
        answer: "Share fence length, height, post spacing, rail diameter, coating and gate requirement.",
      },
    ],
    rfqPrompt: "Request a post and rail quote with fence length, height, post profile, rail size, coating, clamps and delivery location.",
  },
  {
    slug: "pvc-decorative-fence",
    name: "PVC Decorative Fence",
    category: "PVC Fencing",
    primaryKeyword: "PVC decorative fence supplier UAE",
    secondaryKeywords: ["decorative PVC fence Dubai", "PVC picket fence UAE", "PVC fence installation"],
    metaTitle: "PVC Decorative Fence Supplier UAE | SRK Fence",
    metaDescription: "SRK Fence supplies PVC decorative fencing in UAE for villas, gardens, parks, pool areas, boundary walls and residential privacy applications.",
    h1: "PVC Decorative Fence Supplier in UAE",
    shortDescription: "Stylish, durable and low-maintenance PVC decorative fences with multiple panel styles, colors and height options.",
    intro: "PVC decorative fencing is used where buyers need a clean, lightweight, corrosion-resistant and low-maintenance visual boundary. SRK Fence supports decorative, picket, rail, privacy and semi-privacy PVC fence panel options for residential, commercial, garden, pool and boundary applications.",
    image: "/products/pdf-mapped/pvc-decorative-fence/pvc-decorative-fence-01.webp",
    galleryImages: [
      { src: "/products/pdf-mapped/pvc-decorative-fence/pvc-decorative-fence-01.webp", alt: "PVC decorative fence details and style options", caption: "PVC decorative fence details and style options" },
      { src: "/products/pdf-mapped/pvc-decorative-fence/pvc-decorative-fence-02.webp", alt: "PVC decorative fence applications and components", caption: "PVC decorative fence applications and components" },
      { src: "/products/pdf-mapped/pvc-decorative-fence/pvc-decorative-fence-03.webp", alt: "PVC decorative fence landscape application", caption: "PVC decorative fence landscape application" }
    ],
    specs: [
      { label: "Material", value: "High-quality PVC / virgin vinyl style material by requirement" },
      { label: "Fence types", value: "Decorative, picket, rail, privacy and semi-privacy options" },
      { label: "Common heights", value: "1200mm, 1500mm, 1800mm and 2000mm or custom" },
      { label: "Colors", value: "White, beige, clay, grey, taupe, dark grey and custom colors" },
      { label: "Components", value: "PVC panel, PVC post, top and bottom rails, caps, brackets and fixings" },
    ],
    applications: [
      { label: "Residential Fencing", href: "/applications/residential-fencing" },
      { label: "Schools & Public Parks", href: "/applications/schools-public-parks" },
      { label: "Commercial & Industrial", href: "/applications/commercial-industrial" },
    ],
    internalLinks: [
      { label: "PVC Privacy Fence", href: "/products/pvc-privacy-fence" },
      { label: "PVC Coated Chain Link Fence", href: "/products/pvc-coated-chain-link-fence" },
      { label: "Fence Posts", href: "/products/fence-posts-gi-ms-pvc" },
      { label: 'Available in UAE', href: '/countries/uae' },
      { label: 'Available in Bahrain', href: '/countries/bahrain' },
      { label: 'Available in Qatar', href: '/countries/qatar' },
    ],
    faqs: [
      {
        question: "Where is PVC decorative fence used?",
        answer: "It is used for villas, gardens, parks, pool areas, boundary walls and residential or commercial decorative screening.",
      },
      {
        question: "Is PVC decorative fence low maintenance?",
        answer: "Yes, PVC fence is generally selected for clean appearance, weather resistance and low maintenance compared with painted metal or timber-style systems.",
      },
      {
        question: "Can PVC decorative fence be customized?",
        answer: "Panel style, color, height, rails, posts and accessories can be reviewed by project requirement.",
      },
    ],
    rfqPrompt: "For PVC decorative fence pricing, share fence length, height, panel style, color, post type, gates and installation location.",
  },
  {
    slug: "pvc-privacy-fence",
    name: "PVC Privacy Fence",
    category: "PVC Fencing",
    primaryKeyword: "PVC privacy fence supplier UAE",
    secondaryKeywords: ["privacy fence Dubai", "PVC villa fence UAE", "PVC privacy panels"],
    metaTitle: "PVC Privacy Fence Supplier UAE | SRK Fence",
    metaDescription: "SRK Fence supplies PVC privacy fence systems for villas, pools, gardens, residential boundaries and commercial screening projects in UAE.",
    h1: "PVC Privacy Fence Supplier in UAE",
    shortDescription: "PVC privacy fencing for clean visual screening, low maintenance, multiple colors and residential or commercial boundaries.",
    intro: "PVC privacy fencing creates a solid visual boundary for villas, gardens, pool areas, patios and commercial screening projects. SRK Fence can review panel heights, post styles, color options, rail details and component supply for privacy-focused fence applications.",
    image: "/products/pdf-mapped/pvc-privacy-fence/pvc-privacy-fence-01.webp",
    galleryImages: [
      { src: "/products/pdf-mapped/pvc-privacy-fence/pvc-privacy-fence-01.webp", alt: "PVC privacy fence overview and color options", caption: "PVC privacy fence overview and color options" },
      { src: "/products/pdf-mapped/pvc-privacy-fence/pvc-privacy-fence-02.webp", alt: "PVC privacy fence installation and applications", caption: "PVC privacy fence installation and applications" }
    ],
    specs: [
      { label: "System components", value: "PVC posts, privacy panels, top and bottom rails, caps, brackets and fixings" },
      { label: "Finish", value: "Smooth, clean and low-maintenance PVC finish" },
      { label: "Color options", value: "White, beige, grey, brown, black and custom colors where available" },
      { label: "Applications", value: "Villas, gardens, pool areas, patios, residential boundaries and commercial screening" },
      { label: "Customization", value: "Panel height, panel style, color and gate arrangement" },
    ],
    applications: [
      { label: "Residential Fencing", href: "/applications/residential-fencing" },
      { label: "Commercial & Industrial", href: "/applications/commercial-industrial" },
      { label: "Schools & Public Parks", href: "/applications/schools-public-parks" },
    ],
    internalLinks: [
      { label: "PVC Decorative Fence", href: "/products/pvc-decorative-fence" },
      { label: "PVC Fence Posts", href: "/products/fence-posts-gi-ms-pvc" },
      { label: "PVC Coated Chain Link Fence", href: "/products/pvc-coated-chain-link-fence" },
      { label: 'Available in UAE', href: '/countries/uae' },
      { label: 'Available in Bahrain', href: '/countries/bahrain' },
      { label: 'Available in Qatar', href: '/countries/qatar' },
    ],
    faqs: [
      {
        question: "What is PVC privacy fence used for?",
        answer: "PVC privacy fence is used to create visual screening and clean boundary separation for residential and commercial spaces.",
      },
      {
        question: "What colors are available?",
        answer: "Common color options include white, beige, grey, brown and black, with custom colors reviewed by project requirement.",
      },
      {
        question: "Can PVC privacy fence be supplied with posts and rails?",
        answer: "Yes, systems can include posts, panels, rails, caps, brackets and fixings.",
      },
    ],
    rfqPrompt: "Share fence length, height, color, panel type, gate requirement and delivery or installation location for a PVC privacy fence quote.",
  },
  {
    slug: "fasteners-bolts",
    name: "Fasteners / Bolts",
    category: "Fence Accessories",
    primaryKeyword: "fence fasteners bolts supplier UAE",
    secondaryKeywords: ["fence bolts Dubai", "stainless steel fasteners UAE", "hex bolts nuts washers fence"],
    metaTitle: "Fence Fasteners & Bolts Supplier UAE | SRK Fence",
    metaDescription: "SRK Fence supplies fasteners, bolts, nuts, washers, anchors, U-bolts and threaded rods for fence systems, gates and accessories.",
    h1: "Fence Fasteners and Bolts Supplier in UAE",
    shortDescription: "Fasteners, bolts, nuts, washers, anchors and fixing hardware for secure fencing and gate installation.",
    intro: "Fence fasteners and bolts are used to assemble posts, panels, clamps, base plates, gates, hinges and accessories. SRK Fence supports project-specific fastening hardware including hex bolts, nuts, washers, anchors, U-bolts, carriage bolts, machine screws, self-drilling screws and threaded rods.",
    image: "/products/pdf-mapped/fasteners-bolts/fasteners-bolts-01.webp",
    galleryImages: [
      { src: "/products/pdf-mapped/fasteners-bolts/fasteners-bolts-01.webp", alt: "Fasteners and bolts product range", caption: "Fasteners and bolts product range" },
      { src: "/products/pdf-mapped/fasteners-bolts/fasteners-bolts-02.webp", alt: "Fence fastener and bolt options", caption: "Fence fastener and bolt options" }
    ],
    specs: [
      { label: "Types", value: "Hex bolts, nuts, washers, U-bolts, carriage bolts, anchors, threaded rods and screws" },
      { label: "Use case", value: "Fence posts, gate hardware, base plates, clamps, connectors and panels" },
      { label: "Finish", value: "Galvanized, stainless steel or coated options by exposure requirement" },
      { label: "Compatibility", value: "Chain-link, welded mesh, panel post systems, gates and accessories" },
      { label: "Customization", value: "Size, length, thread, coating and pack quantity" },
    ],
    applications: [
      { label: "Commercial & Industrial", href: "/applications/commercial-industrial" },
      { label: "Boundary Security Fencing", href: "/applications/boundary-security-fencing" },
      { label: "Warehouses & Logistic Centers", href: "/applications/warehouses-logistic-centers" },
    ],
    internalLinks: [
      { label: "Fence Accessories", href: "/products/fence-accessories" },
      { label: "Base Plates", href: "/products/base-plates" },
      { label: "Gate Hinges", href: "/products/gate-hinges" },
      { label: 'Available in UAE', href: '/countries/uae' },
      { label: 'Available in Bahrain', href: '/countries/bahrain' },
      { label: 'Available in Qatar', href: '/countries/qatar' },
    ],
    faqs: [
      {
        question: "Which fasteners are used in fence systems?",
        answer: "Fence systems commonly use bolts, nuts, washers, anchors, U-bolts, self-drilling screws and threaded rods.",
      },
      {
        question: "Can fasteners be supplied in galvanized finish?",
        answer: "Yes, galvanized and stainless steel options can be reviewed depending on site exposure.",
      },
      {
        question: "What information is needed for a fastener quote?",
        answer: "Share fastener type, size, finish, quantity and application area.",
      },
    ],
    rfqPrompt: "For fasteners and bolts, share item type, size, finish, quantity, application and delivery location.",
  },
  {
    slug: "coating-materials",
    name: "Coating Materials",
    category: "Coating & Finish",
    primaryKeyword: "fence coating materials supplier UAE",
    secondaryKeywords: ["PVC coating material", "powder coating fence Dubai", "galvanized coating materials"],
    metaTitle: "Fence Coating Materials UAE | SRK Fence",
    metaDescription: "SRK Fence supports coating material requirements for PVC coating, PE coating, powder coating, galvanizing, primer, thinner, cleaner and touch-up paint.",
    h1: "Fence Coating Materials Supplier in UAE",
    shortDescription: "Protective coating materials and finishing support for fencing, posts, panels, wires and accessories.",
    intro: "Coating materials help protect fence systems against weather, corrosion and handling wear. SRK Fence can review protective coating requirements including PVC coating, PE coating, powder coating, zinc coating, galvanizing, primer, touch-up paint, thinner, cleaner and packaging requirements based on project specification.",
    image: "/products/pdf-mapped/coating-materials/coating-materials-01.webp",
    galleryImages: [
      { src: "/products/pdf-mapped/coating-materials/coating-materials-01.webp", alt: "Coating materials, touch-up and finishing support", caption: "Coating materials, touch-up and finishing support" },
      { src: "/products/pdf-mapped/coating-materials/coating-materials-02.webp", alt: "Different coatings for long-lasting protection", caption: "Different coatings for long-lasting protection" },
      { src: "/products/pdf-mapped/coating-materials/coating-materials-03.webp", alt: "Coating process and component materials", caption: "Coating process and component materials" }
    ],
    specs: [
      { label: "Coating options", value: "PVC coating, PE coating, powder coating, zinc coating and galvanizing" },
      { label: "Support items", value: "Primer, touch-up paint, thinner, cleaner and packaging materials" },
      { label: "Applications", value: "Chain-link fence, welded mesh fence, fence posts, wires, panels and accessories" },
      { label: "Purpose", value: "Improved appearance, corrosion resistance and longer service life" },
      { label: "Customization", value: "Color, coating type, project quantity and packaging" },
    ],
    applications: [
      { label: "Commercial & Industrial", href: "/applications/commercial-industrial" },
      { label: "Boundary Security Fencing", href: "/applications/boundary-security-fencing" },
      { label: "Oil & Gas Sector", href: "/applications/oil-gas-sector" },
    ],
    internalLinks: [
      { label: "Colors & Coating Options", href: "/products/color-and-coating-options" },
      { label: "Fence Posts", href: "/products/fence-posts-gi-ms-pvc" },
      { label: "Panel & Post System", href: "/products/panel-post-system" },
      { label: 'Available in UAE', href: '/countries/uae' },
      { label: 'Available in Bahrain', href: '/countries/bahrain' },
      { label: 'Available in Qatar', href: '/countries/qatar' },
    ],
    faqs: [
      {
        question: "Why are coating materials important for fencing?",
        answer: "Coatings help protect steel fencing products from corrosion and improve appearance in outdoor environments.",
      },
      {
        question: "Which coating options are available?",
        answer: "PVC coating, PE coating, powder coating, zinc coating and galvanizing can be reviewed by project requirement.",
      },
      {
        question: "Can SRK Fence support custom coating colors?",
        answer: "Yes, custom colors can be reviewed depending on product type, quantity and coating process.",
      },
    ],
    rfqPrompt: "Share coating type, product application, color, quantity, finish requirement and packaging need for coating material support.",
  },
  {
    slug: "color-and-coating-options",
    name: "Color & Coating Options",
    category: "Coating & Finish",
    primaryKeyword: "fence color coating options UAE",
    secondaryKeywords: ["galvanized fence coating", "PVC coated fence colors", "powder coated fencing UAE"],
    metaTitle: "Fence Color & Coating Options UAE | SRK Fence",
    metaDescription: "Compare galvanized, PVC coated, powder coated and custom color options for SRK Fence products in UAE and GCC projects.",
    h1: "Fence Color and Coating Options",
    shortDescription: "Visible comparison of galvanized, PVC coated, powder coated and custom color finishes for fence systems.",
    intro: "Color and coating selection affects service life, appearance and maintenance planning for fence systems. SRK Fence can review galvanized, PVC coated, powder coated and custom RAL-style color finishes depending on the material, application, exposure and buyer requirements.",
    image: "/products/pdf-mapped/color-and-coating-options/color-and-coating-options-01.webp",
    galleryImages: [
      { src: "/products/pdf-mapped/color-and-coating-options/color-and-coating-options-01.webp", alt: "Color and coating options overview", caption: "Color and coating options overview" },
      { src: "/products/pdf-mapped/color-and-coating-options/color-and-coating-options-02.webp", alt: "Fence coating and color swatches", caption: "Fence coating and color swatches" }
    ],
    specs: [
      { label: "Finish options", value: "Galvanized G.I., PVC coated, powder coated and G.I. powder coated options" },
      { label: "Color options", value: "Dark green, black, grey, white, blue, red, beige, ivory, brown and sandstone" },
      { label: "Use case", value: "Fence and gate systems, posts, mesh panels, chain-link and accessories" },
      { label: "Selection factors", value: "Site exposure, corrosion protection, visual finish and project budget" },
      { label: "Customization", value: "Custom colors and coating thickness by project requirement" },
    ],
    applications: [
      { label: "Commercial & Industrial", href: "/applications/commercial-industrial" },
      { label: "Residential Fencing", href: "/applications/residential-fencing" },
      { label: "Schools & Public Parks", href: "/applications/schools-public-parks" },
    ],
    internalLinks: [
      { label: "Coating Materials", href: "/products/coating-materials" },
      { label: "PVC Coated Chain Link Fence", href: "/products/pvc-coated-chain-link-fence" },
      { label: "Fence Posts", href: "/products/fence-posts-gi-ms-pvc" },
      { label: 'Available in UAE', href: '/countries/uae' },
      { label: 'Available in Bahrain', href: '/countries/bahrain' },
      { label: 'Available in Qatar', href: '/countries/qatar' },
    ],
    faqs: [
      {
        question: "Which fence coating is best for outdoor use?",
        answer: "The best coating depends on exposure. Galvanizing provides corrosion resistance, while PVC and powder coating add finish options and visual appeal.",
      },
      {
        question: "Can fence colors be customized?",
        answer: "Yes, color options can be reviewed depending on product type, quantity and coating process.",
      },
      {
        question: "Are coating options shown visibly on the page?",
        answer: "Yes, the page includes visible color and coating images rather than hidden SEO text.",
      },
    ],
    rfqPrompt: "For coating options, share product type, color, finish requirement, exposure condition, quantity and site location.",
  },
  {
    slug: "rectangle-mesh-fence",
    name: "Rectangle Mesh Fence",
    category: "Welded Mesh Fencing",
    primaryKeyword: "rectangle mesh fence supplier UAE",
    secondaryKeywords: ["rectangular mesh fence Dubai", "welded rectangle mesh", "mesh panel fence UAE"],
    metaTitle: "Rectangle Mesh Fence Supplier UAE | SRK Fence",
    metaDescription: "SRK Fence supplies rectangle mesh fence systems for boundary fencing, commercial projects, industrial sites and perimeter security in UAE.",
    h1: "Rectangle Mesh Fence Supplier in UAE",
    shortDescription: "Rectangular welded mesh fencing for strong, durable and corrosion-resistant perimeter protection.",
    intro: "Rectangle mesh fence is a welded wire fencing system that uses rectangular openings to create a rigid, clean and durable boundary. It is commonly used for commercial, industrial, institutional, sports, boundary and security applications where visibility and panel stability are needed.",
    image: "/products/pdf-mapped/rectangle-mesh-fence/rectangle-mesh-fence-01.webp",
    galleryImages: [
      { src: "/products/pdf-mapped/rectangle-mesh-fence/rectangle-mesh-fence-01.webp", alt: "Rectangle mesh fence system and component views", caption: "Rectangle mesh fence system and component views" },
      { src: "/products/pdf-mapped/rectangle-mesh-fence/rectangle-mesh-fence-02.webp", alt: "Rectangle mesh fence installation examples", caption: "Rectangle mesh fence installation examples" }
    ],
    specs: [
      { label: "Mesh type", value: "Rectangular welded mesh panel or roll-based system by requirement" },
      { label: "Finish", value: "Hot-dip galvanized, PVC coated, powder coated or custom coating" },
      { label: "Post options", value: "Square, round or profile posts with base plates and clamps" },
      { label: "Applications", value: "Boundary fencing, industrial fencing, sports facilities and commercial perimeters" },
      { label: "Customization", value: "Mesh opening, wire diameter, panel height, color and post system" },
    ],
    applications: [
      { label: "Commercial & Industrial", href: "/applications/commercial-industrial" },
      { label: "Schools & Public Parks", href: "/applications/schools-public-parks" },
      { label: "Boundary Security Fencing", href: "/applications/boundary-security-fencing" },
    ],
    internalLinks: [
      { label: "Welded Mesh Fence", href: "/products/welded-mesh-fence" },
      { label: "Panel & Post System", href: "/products/panel-post-system" },
      { label: "Fence Accessories", href: "/products/fence-accessories" },
      { label: 'Available in UAE', href: '/countries/uae' },
      { label: 'Available in Bahrain', href: '/countries/bahrain' },
      { label: 'Available in Qatar', href: '/countries/qatar' },
    ],
    faqs: [
      {
        question: "What is rectangle mesh fence?",
        answer: "Rectangle mesh fence is a welded mesh system with rectangular openings used for durable boundary and perimeter applications.",
      },
      {
        question: "Can rectangle mesh be coated?",
        answer: "Yes, galvanized, PVC coated and powder coated options can be reviewed.",
      },
      {
        question: "Where is rectangle mesh fence used?",
        answer: "It is used for factories, schools, parks, commercial sites, residential boundaries and general perimeter fencing.",
      },
    ],
    rfqPrompt: "Share fence length, height, mesh opening, wire diameter, coating, post type and gate requirement for rectangle mesh fence pricing.",
  },
  {
    slug: "gabion-wall",
    name: "Gabion Wall & Fencing",
    category: "Gabion Systems",
    primaryKeyword: "gabion wall supplier UAE",
    secondaryKeywords: ["gabion fencing UAE", "stone gabion wall Dubai", "gabion retaining wall"],
    metaTitle: "Gabion Wall & Fencing Supplier UAE | SRK Fence",
    metaDescription: "SRK Fence supplies gabion wall and fencing solutions for retaining, landscape, boundary and security applications in UAE and GCC projects.",
    h1: "Gabion Wall and Fencing Supplier in UAE",
    shortDescription: "Gabion wall systems for durable retaining, landscape, boundary and integrated fence applications.",
    intro: "Gabion wall and fencing systems use wire mesh baskets filled with stone to create robust retaining walls, landscape boundaries and architectural perimeter features. SRK Fence can review gabion wall layouts with welded mesh, chain-link, security fence or gate integration depending on the project requirement.",
    image: "/products/pdf-mapped/gabion-wall/gabion-wall-01.webp",
    galleryImages: [
      { src: "/products/pdf-mapped/gabion-wall/gabion-wall-01.webp", alt: "Gabion wall and fencing overview", caption: "Gabion wall and fencing overview" },
      { src: "/products/pdf-mapped/gabion-wall/gabion-wall-02.webp", alt: "Gabion wall landscape and boundary applications", caption: "Gabion wall landscape and boundary applications" }
    ],
    specs: [
      { label: "System type", value: "Wire mesh gabion baskets filled with stone or project-selected aggregate" },
      { label: "Applications", value: "Retaining walls, boundary walls, landscape features and security fence bases" },
      { label: "Fence integration", value: "Welded mesh, chain-link, panel systems or gate sections above gabion wall" },
      { label: "Finish", value: "Galvanized or PVC coated mesh options based on exposure" },
      { label: "Customization", value: "Basket size, mesh type, stone selection, wall height and fence integration" },
    ],
    applications: [
      { label: "Residential Fencing", href: "/applications/residential-fencing" },
      { label: "Commercial & Industrial", href: "/applications/commercial-industrial" },
      { label: "Boundary Security Fencing", href: "/applications/boundary-security-fencing" },
    ],
    internalLinks: [
      { label: "Welded Mesh Fence", href: "/products/welded-mesh-fence" },
      { label: "Panel & Post System", href: "/products/panel-post-system" },
      { label: "Fence Accessories", href: "/products/fence-accessories" },
      { label: 'Available in UAE', href: '/countries/uae' },
      { label: 'Available in Bahrain', href: '/countries/bahrain' },
      { label: 'Available in Qatar', href: '/countries/qatar' },
    ],
    faqs: [
      {
        question: "What is a gabion wall?",
        answer: "A gabion wall is made from wire mesh baskets filled with stone to form a durable retaining or boundary structure.",
      },
      {
        question: "Can fencing be added above a gabion wall?",
        answer: "Yes, welded mesh, chain-link or security fencing can be integrated above a gabion wall if the structure is designed accordingly.",
      },
      {
        question: "What details are required for a gabion wall quote?",
        answer: "Share wall length, height, basket size, mesh finish, stone requirement, fence integration and site location.",
      },
    ],
    rfqPrompt: "For gabion wall pricing, share length, height, basket size, stone requirement, mesh finish, fence integration and project location.",
  },
  {
    slug: "clamps-and-connectors",
    name: "Clamps & Connectors",
    category: "Fence Accessories",
    primaryKeyword: "fence clamps connectors supplier UAE",
    secondaryKeywords: ["chain link clamps Dubai", "welded fence connectors", "fence fixing accessories"],
    metaTitle: "Fence Clamps & Connectors Supplier UAE | SRK Fence",
    metaDescription: "SRK Fence supplies clamps and connectors for chain-link fence, welded mesh fence, posts, rails, gates and panel systems in UAE.",
    h1: "Fence Clamps and Connectors Supplier in UAE",
    shortDescription: "Powder coated and galvanized clamps, connectors and fixing accessories for chain-link and welded fence systems.",
    intro: "Clamps and connectors are used to secure fence posts, rails, mesh panels, brackets, gate hardware and accessories. SRK Fence supplies clamp and connector options for chain-link, welded mesh, panel and post systems, G.I. finishes and powder coated applications.",
    image: "/products/pdf-mapped/clamps-and-connectors/clamps-and-connectors-01.webp",
    galleryImages: [
      { src: "/products/pdf-mapped/clamps-and-connectors/clamps-and-connectors-01.webp", alt: "Clamps and connectors overview", caption: "Clamps and connectors overview" },
      { src: "/products/pdf-mapped/clamps-and-connectors/clamps-and-connectors-02.webp", alt: "Powder coated and galvanized clamps and connectors", caption: "Powder coated and galvanized clamps and connectors" }
    ],
    specs: [
      { label: "Types", value: "Rail clamps, band clamps, U-bolt clamps, saddle clamps, brackets and connector plates" },
      { label: "Finish options", value: "M.S. galvanized, powder coated green and custom coatings by requirement" },
      { label: "Compatibility", value: "Chain-link fencing, welded mesh fencing, posts, rails and gate systems" },
      { label: "Use case", value: "Panel fixing, rail fixing, post connection and accessory mounting" },
      { label: "Customization", value: "Size, hole pattern, coating, bolt compatibility and quantity" },
    ],
    applications: [
      { label: "Boundary Security Fencing", href: "/applications/boundary-security-fencing" },
      { label: "Commercial & Industrial", href: "/applications/commercial-industrial" },
      { label: "Warehouses & Logistic Centers", href: "/applications/warehouses-logistic-centers" },
    ],
    internalLinks: [
      { label: "Fence Accessories", href: "/products/fence-accessories" },
      { label: "Fence Posts", href: "/products/fence-posts-gi-ms-pvc" },
      { label: "Fasteners / Bolts", href: "/products/fasteners-bolts" },
      { label: 'Available in UAE', href: '/countries/uae' },
      { label: 'Available in Bahrain', href: '/countries/bahrain' },
      { label: 'Available in Qatar', href: '/countries/qatar' },
    ],
    faqs: [
      {
        question: "What are fence clamps and connectors used for?",
        answer: "They are used to secure posts, rails, panels, mesh, brackets and gate hardware in fence systems.",
      },
      {
        question: "Are clamps available in powder coated finish?",
        answer: "Yes, powder coated green and galvanized finishes can be reviewed based on requirement.",
      },
      {
        question: "What details are needed for clamp quotation?",
        answer: "Share clamp type, post or rail size, coating, bolt requirement and quantity.",
      },
    ],
    rfqPrompt: "For clamps and connectors, share item type, post or rail size, finish, bolt requirement, quantity and delivery location.",
  },
];


const mergedPdfProductUpdates = new Map(pdfMappedProductPageUpdates.map((product) => [product.slug, product]));

export const productSeoPages: ProductSeoPage[] = [
  ...baseProductSeoPages.map((product) => ({ ...product, ...(mergedPdfProductUpdates.get(product.slug) || {}) })),
  ...pdfMappedAdditionalProductPages,
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
    whySource: ['Dubai and Sharjah based support', 'Wide fencing product range', 'RFQ support for custom specifications', 'Supply and installation coordination', 'GCC project experience'],
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
    buyerIntent: 'Importer and project supply for fencing products.',
    intro:
      'SRK Fence supplies fencing products and perimeter security solutions from UAE for Bahrain projects that need reliable product sourcing, specification support and RFQ response. The Bahrain page focuses on construction, commercial, school, industrial, farm and security fencing buyers looking for chain link fence, welded mesh fence, PVC fencing, temporary fencing, barbed wire, razor wire, gates and accessories for project delivery.',
    products: ['Chain link fence', 'Welded mesh fence', 'PVC coated fencing', 'Temporary fence panels', 'Barbed wire', 'Razor wire', 'Fence posts', 'Gates and accessories'],
    applications: ['Construction projects', 'Industrial sites', 'Commercial properties', 'Schools', 'Warehouses', 'Farms', 'Security boundaries'],
    whySource: ['UAE-based regional sourcing', 'Product and accessory package support', 'RFQ support for project quantities', 'Custom height and coating options', 'GCC delivery coordination'],
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
          'Common Bahrain RFQs include chain link fence, welded mesh fence, PVC coated fencing, temporary fence panels, barbed wire, razor wire and fence accessories.',
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
    buyerIntent: 'Construction, infrastructure, warehouse, oil and gas and Doha project supply.',
    intro:
      'SRK Fence supports Qatar and Doha buyers with fencing products for construction sites, warehouses, logistics yards, commercial properties, oil and gas facilities, infrastructure works and high-security perimeters. From UAE, SRK Fence can help project teams compare chain link, welded mesh, anti-climb, temporary, PVC, barbed wire and razor wire options based on security level, coating, height, length and delivery requirements.',
    products: ['Chain link fence', 'Welded mesh fence', 'Anti-climb 358 fence', 'Temporary fence panels', 'PVC hoarding', 'Barbed wire', 'Razor wire', 'Gates and accessories'],
    applications: ['Doha construction sites', 'Warehouses', 'Oil and gas facilities', 'Industrial yards', 'Commercial compounds', 'Data centers', 'Infrastructure projects'],
    whySource: ['Dubai/UAE product range', 'High-security and construction fencing focus', 'Specification-led RFQ support', 'Custom coating and height options', 'Regional GCC project supply'],
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
          'Yes, SRK Fence can support RFQs for Doha construction, warehouse, commercial, infrastructure and security fencing projects with product and specification guidance.',
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
    buyerIntent: 'Industrial, security, temporary fencing and construction project supply.',
    intro:
      'SRK Fence supplies fencing systems from UAE for Kuwait projects that require construction site control, industrial boundaries, temporary fencing, warehouse security and perimeter protection. Buyers can request chain link fencing, welded mesh fencing, anti-climb fencing, temporary fence panels, PVC hoarding, barbed wire, razor wire, gates and fence accessories with project-specific heights, coatings and quantities.',
    products: ['Temporary fence panels', 'PVC hoarding', 'Chain link fence', 'Welded mesh fence', 'Anti-climb fence', 'Barbed wire', 'Razor wire', 'Fence accessories'],
    applications: ['Construction sites', 'Industrial facilities', 'Warehouses', 'Oil and gas support sites', 'Commercial compounds', 'Security perimeters'],
    whySource: ['Strong temporary and industrial fencing range', 'RFQ support for project drawings', 'Custom specification and coating options', 'UAE to Kuwait supply capability', 'Fencing accessories and gates support'],
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
    buyerIntent: 'Large-scale infrastructure, oil and gas, industrial and high-security project supply.',
    intro:
      'SRK Fence supports Saudi Arabia and KSA project buyers with fencing products for infrastructure, oil and gas, warehouses, logistics, construction, industrial and high-security perimeter requirements. From UAE, SRK Fence can help project teams source chain link, welded mesh, anti-climb 358 fence, temporary fencing, steel fencing, barbed wire, razor wire, gates and accessories based on drawings, BOQ and site security requirements.',
    products: ['Anti-climb 358 fence', 'Welded mesh fence', 'Chain link fence', 'Steel fencing', 'Temporary fencing', 'Barbed wire', 'Razor wire', 'Gate systems and accessories'],
    applications: ['Infrastructure projects', 'Oil and gas facilities', 'Warehouses', 'Industrial cities', 'Construction sites', 'Data centers', 'Security perimeters'],
    whySource: ['High-security product capability', 'UAE-based GCC supply support', 'RFQ support for BOQs and drawings', 'Custom heights, coatings and gates', 'Project-focused quotation process'],
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
    buyerIntent: 'Security, oil and gas, construction and perimeter protection project supply.',
    intro:
      'SRK Fence supplies fencing products from UAE for Iraq projects where security, perimeter protection, oil and gas facilities, construction boundaries and industrial compounds are priorities. Buyers can request chain link fence, welded mesh fence, anti-climb fence, steel fencing, barbed wire, razor wire, gates, posts and accessories with project-specific security levels, heights, coatings and delivery requirements.',
    products: ['Barbed wire', 'Razor wire', 'Chain link fence', 'Anti-climb fence', 'Welded mesh fence', 'Steel fencing', 'Gates and accessories'],
    applications: ['Oil and gas facilities', 'Security perimeters', 'Construction sites', 'Industrial yards', 'Warehouses', 'Infrastructure boundaries'],
    whySource: ['Strong security wire and perimeter range', 'UAE sourcing for regional projects', 'RFQ support for custom specifications', 'High-security fence options', 'Project package support with accessories'],
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
        question: 'What details are needed for an Iraq fencing RFQ?',
        answer:
          'Share product type, fence length, height, mesh size, wire diameter, coating, security level, delivery city, timeline and drawings or BOQ if available.',
      },
    ],
  },
  {
    slug: 'oman',
    country: 'Oman',
    primaryKeyword: 'fencing supplier in Oman',
    secondaryKeywords: ['fence supplier Oman', 'chain link fence Oman', 'security fencing Oman'],
    buyerIntent: 'Construction, industrial, marine, warehouse and farm project supply.',
    intro:
      'SRK Fence supports Oman fencing buyers with chain link, welded mesh, steel, PVC, temporary, anti-climb, barbed wire and razor wire products for construction, industrial, warehouse, farm, commercial and coastal projects. From UAE, SRK Fence can help buyers review coating, material and installation requirements for sites in Muscat, Sohar, Salalah and other project locations.',
    products: ['Chain link fence', 'Welded mesh fence', 'Steel fencing', 'PVC coated fencing', 'Temporary fencing', 'Barbed wire', 'Razor wire', 'Gates and accessories'],
    applications: ['Construction sites', 'Industrial facilities', 'Warehouses', 'Farms', 'Marine and coastal sites', 'Commercial compounds', 'Security perimeters'],
    whySource: ['Regional UAE supply support', 'Coating guidance for coastal exposure', 'Farm and industrial fencing range', 'Custom RFQ support', 'Fencing accessories and gate options'],
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
    buyerIntent: 'Industrial, commercial, construction and perimeter fencing project supply.',
    intro:
      'SRK Fence supplies fencing products from UAE for Jordan projects that need industrial boundaries, commercial fencing, construction site control, warehouse security and perimeter protection. Buyers can request chain link fencing, welded mesh fencing, anti-climb fencing, temporary fencing, steel fencing, barbed wire, razor wire, gates and accessories with project-specific dimensions, coating and delivery requirements.',
    products: ['Chain link fence', 'Welded mesh fence', 'Anti-climb fence', 'Temporary fence panels', 'Steel fencing', 'Barbed wire', 'Razor wire', 'Gates and accessories'],
    applications: ['Industrial sites', 'Commercial properties', 'Warehouses', 'Construction projects', 'Schools', 'Farms', 'Security perimeters'],
    whySource: ['UAE regional sourcing support', 'Industrial and commercial product range', 'RFQ support for custom specifications', 'Accessory and gate package support', 'Project-focused quotation workflow'],
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
    title: 'Why Choose SRK Fence | UAE Fencing Supplier, Contractor & Installation Partner',
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

export function buildSeoMetadata(profile: StaticSeoProfile): Metadata {
  const keywords = dedupeKeywords(profile.keywords);
  const image = profile.image || '/SRK FENCE Banners.webp';

  return {
    title: profile.title,
    description: profile.description,
    keywords,
    alternates: {
      canonical: profile.path,
    },
    openGraph: {
      type: 'website',
      url: profile.path,
      title: profile.title,
      description: profile.description,
      siteName: companyName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${companyName} - ${profile.title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: profile.title,
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
