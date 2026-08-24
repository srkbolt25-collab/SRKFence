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
  imageGallery?: Array<{ src: string; alt: string; caption: string }>;
  materialOptions?: Array<{ title: string; description: string; bullets: string[] }>;
  keyFeatures?: string[];
  rfqChecklist?: string[];
  availableMarkets?: LinkItem[];
  buyerQuestions?: FaqItem[];
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
    slug: 'fence-posts-gi-ms-pvc',
    name: 'Fence Posts (G.I. / M.S. / PVC)',
    category: 'Fence Accessories & Post Systems',
    primaryKeyword: 'fence posts supplier in Dubai UAE',
    secondaryKeywords: [
      'GI fence posts UAE',
      'MS fence posts Dubai',
      'PVC fence posts supplier UAE',
      'galvanized fence posts Dubai',
      'round square rectangular fence posts',
      'chain link fence posts UAE',
      'welded mesh fence posts UAE',
      'fence post installation Dubai',
    ],
    metaTitle: 'Fence Posts Supplier in Dubai UAE | GI, MS & PVC Posts',
    metaDescription:
      'SRK Fence supplies G.I., M.S. and PVC fence posts in Dubai and UAE for chain-link, welded mesh, privacy, decorative, perimeter and security fencing projects across GCC markets.',
    h1: 'Fence Posts Supplier in Dubai UAE',
    shortDescription:
      'G.I., M.S. and PVC fence posts for chain-link, welded mesh, privacy, decorative, perimeter and security fencing systems with custom profiles, colors, caps, clamps, brackets, rails and fixing accessories.',
    intro:
      'Fence posts are the main structural support of a fencing system. They hold the fence line, carry the mesh or panels, support gates and keep the installation stable over time. SRK Fence supplies G.I. fence posts, M.S. fence posts and PVC fence posts for Dubai, UAE and GCC projects with round, square, rectangular and customized profiles. Posts can be supplied with suitable caps, clamps, brackets, rails, fixings and installation options based on the fence type, site exposure and buyer specification.',
    image: '/products/fence-posts/fence-posts-gi-ms-pvc-supplier-uae.webp',
    imageGallery: [
      {
        src: '/products/fence-posts/gi-fence-post-supplier-dubai-uae.webp',
        alt: 'Hot-dip galvanized G.I. fence posts for chain link and welded mesh fencing in UAE',
        caption: 'G.I. fence posts for corrosion-resistant outdoor fencing',
      },
      {
        src: '/products/fence-posts/ms-fence-post-supplier-dubai-uae.webp',
        alt: 'M.S. fence posts with powder coated and PVC coated finish for Dubai UAE projects',
        caption: 'M.S. fence posts with powder coated, PVC coated or painted finishes',
      },
      {
        src: '/products/fence-posts/pvc-fence-post-supplier-dubai-uae.webp',
        alt: 'PVC fence posts for privacy, decorative, garden and boundary fencing in UAE',
        caption: 'PVC fence posts for decorative, privacy, garden and boundary applications',
      },
    ],
    specs: [
      { label: 'Material options', value: 'G.I. galvanized steel, M.S. mild steel and PVC fence post options' },
      { label: 'Profile options', value: 'Round, square, rectangular and project-specific customized profiles' },
      { label: 'G.I. finish', value: 'Hot-dip galvanized finish for corrosion resistance and outdoor performance' },
      { label: 'M.S. finish', value: 'Powder coated, PVC coated or painted mild steel finish options' },
      { label: 'PVC finish', value: 'Smooth PVC or PVC coated finish with multiple color options' },
      { label: 'Color options', value: 'G.I. silver, green, black, white and custom colors by project requirement' },
      { label: 'Accessories', value: 'Compatible caps, clamps, brackets, rails and fixing accessories' },
      { label: 'Installation', value: 'Embedded or surface-mounted installation based on site condition' },
      { label: 'Customization', value: 'Profile, thickness, length, color and finish can be reviewed for the project' },
    ],
    materialOptions: [
      {
        title: 'G.I. Fence Posts',
        description: 'Hot-dip galvanized fence posts for long-term outdoor performance where corrosion resistance is a priority.',
        bullets: ['Galvanized finish', 'Round or square profiles', 'Suitable for chain-link and welded mesh fencing'],
      },
      {
        title: 'M.S. Fence Posts',
        description: 'Mild steel posts for fabricated fencing systems, available with powder coated, PVC coated or painted finishes.',
        bullets: ['Strong mild steel construction', 'Finish and color options', 'Suitable for security and perimeter fencing'],
      },
      {
        title: 'PVC Fence Posts',
        description: 'Smooth PVC finish posts for decorative, privacy, garden, residential and boundary fencing applications.',
        bullets: ['Smooth low-maintenance finish', 'Green, black, white or custom colors', 'Suitable for privacy and decorative fencing'],
      },
    ],
    applications: [
      { label: 'Chain-Link Fencing', href: '/products/chain-link-fence' },
      { label: 'Welded Mesh Fencing', href: '/products/welded-mesh-fence' },
      { label: 'Perimeter Fencing', href: '/applications/boundary-security-fencing' },
      { label: 'Security Fencing', href: '/products/anti-climb-358-fence' },
      { label: 'Privacy Fencing', href: '/applications/residential-fencing' },
      { label: 'Decorative Fencing', href: '/applications/residential-fencing' },
      { label: 'Industrial Facilities', href: '/applications/commercial-industrial' },
      { label: 'Sports & Recreational Areas', href: '/applications/schools-public-parks' },
    ],
    internalLinks: [
      { label: 'Chain Link Fence', href: '/products/chain-link-fence' },
      { label: 'GI Chain Link Fence', href: '/products/gi-chain-link-fence' },
      { label: 'PVC Coated Chain Link Fence', href: '/products/pvc-coated-chain-link-fence' },
      { label: 'Welded Mesh Fence', href: '/products/welded-mesh-fence' },
      { label: 'Anti-Climb 358 Fence', href: '/products/anti-climb-358-fence' },
      { label: 'Request a Fence Post Quote', href: '/contact' },
    ],
    rfqChecklist: [
      'Fence type: chain-link, welded mesh, PVC, privacy, decorative or security fencing',
      'Post material: G.I., M.S. or PVC',
      'Post profile: round, square, rectangular or custom profile',
      'Required height, length, thickness and finish',
      'Color requirement: G.I., green, black, white or custom color',
      'Accessories: caps, clamps, brackets, rails, fixings and gates',
      'Installation type: embedded or surface mounted',
      'Project location, drawings, BOQ and delivery timeline',
    ],
    availableMarkets: [
      { label: 'UAE', href: '/countries/uae' },
      { label: 'Bahrain', href: '/countries/bahrain' },
      { label: 'Qatar', href: '/countries/qatar' },
      { label: 'Kuwait', href: '/countries/kuwait' },
      { label: 'Saudi Arabia', href: '/countries/saudi-arabia' },
      { label: 'Iraq', href: '/countries/iraq' },
      { label: 'Oman', href: '/countries/oman' },
      { label: 'Jordan', href: '/countries/jordan' },
    ],
    faqs: [
      {
        question: 'What are fence posts used for?',
        answer:
          'Fence posts provide the main structural support for fencing systems. They help keep chain-link, welded mesh, privacy, decorative, perimeter and security fencing stable and securely installed.',
      },
      {
        question: 'Which fence post material should I choose: G.I., M.S. or PVC?',
        answer:
          'Choose G.I. fence posts for corrosion-resistant outdoor performance, M.S. fence posts for strong fabricated or coated steel fencing systems, and PVC fence posts for decorative, privacy, garden and low-maintenance boundary applications.',
      },
      {
        question: 'Can SRK Fence supply round, square and rectangular fence posts?',
        answer:
          'Yes, SRK Fence can supply round, square, rectangular and customized fence post profiles based on the fence type, required height, finish, installation method and project specification.',
      },
      {
        question: 'What accessories can be supplied with fence posts?',
        answer:
          'Fence posts can be supplied with compatible caps, clamps, brackets, rails, fixings and gate-related accessories depending on the fencing system and site requirement.',
      },
      {
        question: 'What information is needed for a fence post quotation?',
        answer:
          'Share the fence type, post material, post profile, required height, length, thickness, color, finish, accessories, installation type, delivery location and drawings or BOQ if available.',
      },
    ],
    buyerQuestions: [
      {
        question: 'Are fence posts available for GCC projects?',
        answer:
          'Yes. SRK Fence supplies G.I., M.S. and PVC fence posts for UAE, Bahrain, Qatar, Kuwait, Saudi Arabia, Iraq, Oman and Jordan project enquiries from its Dubai/UAE base.',
      },
      {
        question: 'Can one post type work for every fence?',
        answer:
          'Not always. Chain-link, welded mesh, PVC, privacy, decorative and security fencing may require different post profiles, fixing accessories, foundations and gate support. The post should match the fence system and site condition.',
      },
    ],
    rfqPrompt:
      'Request a fence post quotation with material, profile, height, length, thickness, color, finish, accessories, installation type, delivery country and project drawings or BOQ for accurate review.',
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
    slug: 'gabion-wall-and-fencing',
    name: 'Gabion Wall & Fencing',
    category: 'Gabion Wall & Boundary Systems',
    primaryKeyword: 'gabion wall and fencing supplier in UAE',
    secondaryKeywords: [
      'gabion wall supplier UAE',
      'gabion fencing Dubai',
      'stone filled gabion wall UAE',
      'welded gabion mesh supplier Dubai',
      'gabion retaining wall UAE',
      'gabion boundary wall UAE',
      'gabion wall with fence Dubai',
      'PVC coated gabion mesh UAE',
    ],
    metaTitle: 'Gabion Wall & Fencing Supplier UAE | SRK Fence',
    metaDescription:
      'SRK Fence supplies gabion wall and fencing systems in UAE for retaining walls, boundary walls, landscaping, perimeter security and architectural projects.',
    h1: 'Gabion Wall & Fencing Supplier in UAE',
    shortDescription:
      'Durable stone-filled gabion wall and fencing systems for retaining walls, boundary walls, landscape projects, perimeter security and architectural applications.',
    intro:
      'Gabion Wall & Fencing is a durable and versatile fencing and retaining solution made from high-strength wire mesh baskets filled with natural or selected stone. The gabion structure combines structural stability, security, durability and an attractive natural appearance for both functional and architectural applications. Gabion walls can be used as standalone retaining or boundary walls, or combined with steel fencing installed above the gabion structure to provide additional height and security.',
    image: '/products/gabion-wall-and-fencing/gabion-wall-and-fencing-overview.webp',
    imageGallery: [
      {
        src: '/products/gabion-wall-and-fencing/gabion-wall-and-fencing-overview.webp',
        alt: 'Gabion wall and fencing supplier in UAE for retaining walls and boundary projects',
        caption: 'Gabion wall and fencing systems for retaining, boundary and landscape applications',
      },
      {
        src: '/products/gabion-wall-and-fencing/gabion-wall-and-fencing-applications.webp',
        alt: 'Gabion wall applications with stone filled mesh baskets and boundary fencing',
        caption: 'Stone-filled gabion wall applications for landscaping, boundaries and perimeter projects',
      },
    ],
    specs: [
      { label: 'Gabion type', value: 'Welded mesh / Woven mesh' },
      { label: 'Mesh material', value: 'Galvanized steel wire' },
      { label: 'Mesh finish', value: 'Galvanized / PVC coated' },
      { label: 'Gabion shape', value: 'Rectangular / Custom' },
      { label: 'Stone filling', value: 'Natural stone / Project-specified stone' },
      { label: 'Gabion dimensions', value: 'Custom sizes available' },
      { label: 'Wire diameter', value: 'As per project requirement' },
      { label: 'Mesh opening', value: 'As per project requirement' },
      { label: 'Fencing above gabion', value: 'Welded mesh / Chain link / Security fence' },
      { label: 'Fence finish', value: 'Hot-dip galvanized / PVC coated / Powder coated' },
      { label: 'Fence color', value: 'Green / Black / Grey / White / Custom RAL' },
    ],
    materialOptions: [
      {
        title: 'Welded Gabion Mesh',
        description:
          'Rigid welded gabion mesh panels for clean appearance, dimensional stability and strong gabion wall construction.',
        bullets: [
          'Suitable for retaining walls and boundary walls',
          'Provides a uniform and architectural appearance',
          'Can be supplied in custom sizes as per project requirement',
          'Compatible with galvanized or PVC coated mesh finishes',
        ],
      },
      {
        title: 'Woven Gabion Mesh',
        description:
          'Flexible woven wire mesh gabion option for applications where adaptability and site-specific forming are required.',
        bullets: [
          'Flexible mesh construction for adaptable site conditions',
          'Suitable for landscape and erosion-control applications',
          'Available with corrosion-protection coating options',
          'Can use natural or project-specified stone filling',
        ],
      },
      {
        title: 'Gabion Wall + Fence System',
        description:
          'Gabion wall combined with chain link, welded mesh, 3D V-bending, high-security or decorative fencing above the gabion base.',
        bullets: [
          'Useful for additional boundary height and security',
          'Compatible with chain link and welded mesh fencing',
          'Fence finish options include HDG, PVC coated and powder coated',
          'Available colors include green, black, grey, white, blue and custom RAL colors',
        ],
      },
    ],
    applications: [
      { label: 'Retaining Walls', href: '/applications/boundary-security-fencing' },
      { label: 'Boundary Walls', href: '/applications/boundary-security-fencing' },
      { label: 'Perimeter Security', href: '/applications/security-fencing' },
      { label: 'Landscape Projects', href: '/applications/residential-villa-fencing' },
      { label: 'Roads & Infrastructure', href: '/applications/government-infrastructure' },
      { label: 'Commercial Developments', href: '/applications/commercial-building-fencing' },
    ],
    internalLinks: [
      { label: 'Welded Mesh Fence', href: '/products/welded-mesh-fence' },
      { label: 'Chain Link Fence', href: '/products/chain-link-fence' },
      { label: '3D V-Bending Welded Fence', href: '/products/3d-v-bending-welded-fence' },
      { label: 'Anti-Climb 358 Fence', href: '/products/anti-climb-358-fence' },
      { label: 'Colors & Coating Options', href: '/products/colors-and-coating-options' },
      { label: 'Request a Quote', href: '/contact' },
    ],
    keyFeatures: [
      'Strong welded or woven wire mesh construction',
      'Excellent structural stability',
      'Suitable for retaining and boundary applications',
      'High resistance to outdoor weather conditions',
      'Long service life with suitable corrosion protection',
      'Natural stone-filled appearance',
      'Can be combined with steel fencing',
      'Low maintenance',
      'Suitable for landscaping and architectural applications',
      'Custom configurations available according to project requirements',
    ],
    rfqChecklist: [
      'Project type: retaining wall, boundary wall, landscape wall, perimeter security or gabion with fence above',
      'Required gabion height, length, width and layout drawing if available',
      'Mesh type preference: welded mesh or woven mesh',
      'Mesh finish requirement: galvanized or PVC coated',
      'Stone filling requirement: natural stone or project-specified stone',
      'Fence above gabion: chain link, welded mesh, 3D V-bending, high-security or decorative fence',
      'Fence finish and color requirement: HDG, PVC coated, powder coated or custom RAL',
      'Delivery city, project location and installation support requirement',
    ],
    faqs: [
      {
        question: 'What is a gabion wall and fencing system?',
        answer:
          'A gabion wall and fencing system uses high-strength wire mesh baskets filled with natural or selected stone. It can be used as a retaining wall, boundary wall, landscape wall or as a gabion base combined with steel fencing above.',
      },
      {
        question: 'Can gabion walls be combined with fence systems?',
        answer:
          'Yes, gabion walls can be combined with chain link fencing, welded mesh fencing, 3D V-bending welded fence, high-security fencing or decorative architectural fencing depending on the required height, security level and appearance.',
      },
      {
        question: 'Which gabion mesh and finish options are available?',
        answer:
          'Gabion mesh options include welded gabion mesh and woven gabion mesh. Finish options include galvanized and PVC coated mesh, with fence-above-gabion finishes such as hot-dip galvanized, PVC coated and powder coated.',
      },
      {
        question: 'What details are needed for a gabion wall quotation?',
        answer:
          'Share the wall length, height, width, mesh type, mesh finish, stone filling requirement, fence-above-gabion requirement, color, delivery city, installation requirement and drawings if available.',
      },
    ],
    rfqPrompt:
      'Request gabion wall and fencing pricing with wall dimensions, mesh type, mesh finish, stone filling, fence-above-gabion requirement, color, quantity, delivery city and installation support requirement.',
    availableMarkets: [
      { label: 'UAE', href: '/countries/uae' },
      { label: 'Bahrain', href: '/countries/bahrain' },
      { label: 'Qatar', href: '/countries/qatar' },
      { label: 'Kuwait', href: '/countries/kuwait' },
      { label: 'Saudi Arabia', href: '/countries/saudi-arabia' },
      { label: 'Iraq', href: '/countries/iraq' },
      { label: 'Oman', href: '/countries/oman' },
      { label: 'Jordan', href: '/countries/jordan' },
    ],
  },
  {
    slug: 'clamps-and-connectors',
    name: 'Clamps & Connectors',
    category: 'Fence Accessories & Connection Hardware',
    primaryKeyword: 'clamps and connectors supplier in Dubai UAE',
    secondaryKeywords: [
      'fence clamps supplier UAE',
      'chain link fence clamps Dubai',
      'welded mesh fence connectors UAE',
      'powder coated fence clamps Dubai',
      'galvanized clamps and connectors UAE',
      'U bolt clamps supplier Dubai',
      'saddle clamps for fencing UAE',
      'rail clamps and post connectors UAE',
    ],
    metaTitle: 'Clamps & Connectors Supplier in Dubai UAE | SRK Fence',
    metaDescription:
      'SRK Fence supplies clamps and connectors in Dubai UAE for chain-link fence, welded mesh fence, posts, rails, panels and fencing support structures.',
    h1: 'Clamps & Connectors Supplier in Dubai UAE',
    shortDescription:
      'Fence clamps, connectors, brackets, U-bolts, saddle clamps, rail clamps and joining accessories for secure chain-link and welded mesh fence assembly.',
    intro:
      'Clamps & Connectors are essential components used for the secure assembly and connection of chain-link and welded mesh fence systems. They provide strong connections between fence posts, rails, mesh panels and supporting structures while helping create a stable and durable fence installation. SRK Fence supplies post clamps, rail clamps, U-bolt clamps, saddle clamps, band clamps, corner clamps, T-clamps, cross connectors, panel connectors, mesh fixing clamps, rail-to-post connectors, pipe-to-pipe connectors, joining clamps, brackets, fixing plates and customized connectors in M.S. / galvanized, powder-coated and PVC-coated finishes.',
    image: '/products/clamps-and-connectors/clamps-and-connectors-overview.webp',
    imageGallery: [
      {
        src: '/products/clamps-and-connectors/clamps-and-connectors-overview.webp',
        alt: 'Clamps and connectors supplier in Dubai UAE for chain link and welded mesh fence systems',
        caption: 'Powder-coated and galvanized clamps and connectors for chain-link and welded fence systems',
      },
      {
        src: '/products/clamps-and-connectors/clamps-and-connectors-application.webp',
        alt: 'Fence clamps and connectors installed on chain link and welded mesh fence posts',
        caption: 'Application views showing post-to-mesh and post-to-rail connection hardware',
      },
    ],
    specs: [
      { label: 'Application', value: 'Chain-link and welded mesh fencing' },
      { label: 'Material', value: 'M.S. / Steel / G.I.' },
      { label: 'Finish', value: 'Galvanized / Powder Coated / PVC Coated' },
      { label: 'Colors', value: 'G.I. / Green / Black / Custom' },
      { label: 'Types', value: 'U-Bolt / Saddle / Band / Rail / T / Corner / Cross' },
      { label: 'Compatible posts', value: 'Round / Square / Rectangular' },
      { label: 'Compatible rails', value: 'Top rail / Bottom rail / Intermediate rail' },
      { label: 'Fasteners', value: 'Bolts / Nuts / Washers' },
      { label: 'Installation', value: 'Mechanical fixing' },
      { label: 'Customization', value: 'Size, profile, thickness, hole pattern and finish' },
    ],
    materialOptions: [
      {
        title: 'M.S. / Galvanized Clamps',
        description:
          'Galvanized and M.S. clamp options for outdoor fence systems where corrosion resistance, strength and reliable mechanical fixing are required.',
        bullets: [
          'Suitable for chain-link and welded mesh fencing',
          'Available in post, rail, U-bolt, saddle and band clamp styles',
          'Compatible with round, square and rectangular posts',
          'Used for strong post-to-mesh, post-to-rail and rail-to-rail connections',
        ],
      },
      {
        title: 'Powder-Coated Connectors',
        description:
          'Powder-coated connectors and brackets for fence systems that need a durable colored finish, with green and black common project options.',
        bullets: [
          'Green and black powder-coated finish options',
          'Durable colored finish for matched fence systems',
          'Suitable for commercial, perimeter and security fencing',
          'Custom colors can be reviewed as per project requirement',
        ],
      },
      {
        title: 'Custom Fixing Accessories',
        description:
          'Project-specific connectors, brackets, fixing plates and joining clamps for fence layouts, special post sizes and custom connection requirements.',
        bullets: [
          'Corner, T, cross, panel and joining connector options',
          'Custom size, profile, thickness and hole pattern support',
          'Compatible with bolts, nuts and washers',
          'Useful for intersections, direction changes and framework extension',
        ],
      },
    ],
    applications: [
      { label: 'Chain-Link Fence Systems', href: '/products/chain-link-fence' },
      { label: 'Welded Mesh Fence Systems', href: '/products/welded-mesh-fence' },
      { label: 'Fence Posts', href: '/products/fence-posts-gi-ms-pvc' },
      { label: 'Fence Accessories', href: '/products/fence-accessories' },
      { label: 'Security Fencing', href: '/applications/security-fencing' },
      { label: 'Perimeter Fencing', href: '/applications/boundary-security-fencing' },
    ],
    internalLinks: [
      { label: 'Fence Accessories', href: '/products/fence-accessories' },
      { label: 'Fence Posts', href: '/products/fence-posts-gi-ms-pvc' },
      { label: 'Base Plates', href: '/products/base-plates' },
      { label: 'Gate Hinges & Locks', href: '/products/gate-hinges-and-locks' },
      { label: 'Colors & Coating Options', href: '/products/colors-and-coating-options' },
      { label: 'Request a Quote', href: '/contact' },
    ],
    keyFeatures: [
      'Strong and secure connections',
      'Suitable for chain-link and welded mesh fencing',
      'Durable steel construction',
      'Galvanized corrosion-resistant options',
      'Powder-coated color options',
      'Easy installation and maintenance',
      'Multiple connection configurations',
      'Suitable for round and square posts',
      'Available in different sizes',
      'Customized designs available',
    ],
    rfqChecklist: [
      'Fence system type: chain-link, welded mesh, panel system or custom framework',
      'Connection requirement: post-to-mesh, post-to-rail, rail-to-rail, panel-to-post, corner or T-connection',
      'Post and rail profile: round, square or rectangular',
      'Required clamp or connector type: U-bolt, saddle, band, rail, T, corner, cross or bracket',
      'Material and finish requirement: M.S., G.I., galvanized, powder coated, PVC coated, green or black',
      'Hole pattern, bolt size, thickness or drawing if available',
      'Quantity, delivery city and project location',
    ],
    faqs: [
      {
        question: 'What are clamps and connectors used for in fencing?',
        answer:
          'Clamps and connectors are used to securely connect fence posts, rails, mesh panels and supporting structures in chain-link and welded mesh fence systems.',
      },
      {
        question: 'Which clamp and connector types are available?',
        answer:
          'Available types include post clamps, rail clamps, U-bolt clamps, saddle clamps, band clamps, corner clamps, T-clamps, cross connectors, panel connectors, mesh fixing clamps, rail-to-post connectors, pipe-to-pipe connectors, joining clamps, brackets and fixing plates.',
      },
      {
        question: 'Which finishes are available for fence clamps and connectors?',
        answer:
          'Clamps and connectors can be supplied in M.S. / galvanized, powder-coated, PVC-coated, green powder-coated, black powder-coated and other colors upon request.',
      },
    ],
    rfqPrompt:
      'Request clamps and connectors pricing with fence type, connection type, post/rail profile, material, finish, hole pattern, bolt requirement, quantity and delivery city.',
    availableMarkets: [
      { label: 'UAE', href: '/countries/uae' },
      { label: 'Bahrain', href: '/countries/bahrain' },
      { label: 'Qatar', href: '/countries/qatar' },
      { label: 'Kuwait', href: '/countries/kuwait' },
      { label: 'Saudi Arabia', href: '/countries/saudi-arabia' },
      { label: 'Iraq', href: '/countries/iraq' },
      { label: 'Oman', href: '/countries/oman' },
      { label: 'Jordan', href: '/countries/jordan' },
    ],
  },
  {
    slug: 'gate-hinges-and-locks',
    name: 'Gate Hinges & Locks',
    category: 'Gate Hardware & Fence Accessories',
    primaryKeyword: 'gate hinges and locks supplier in Dubai UAE',
    secondaryKeywords: [
      'gate hinges supplier UAE',
      'fence gate hinges Dubai',
      'GI gate hinges UAE',
      'SS 304 gate hinges Dubai',
      'green powder coated gate hinges UAE',
      'weld on gate hinges supplier',
      'bolt on gate hinges UAE',
      'heavy duty gate hinges Dubai',
    ],
    metaTitle: 'Gate Hinges & Locks Supplier in Dubai UAE | SRK Fence',
    metaDescription:
      'SRK Fence supplies gate hinges and gate hardware in Dubai UAE for chain-link gates, welded mesh gates, steel gates and fencing systems.',
    h1: 'Gate Hinges & Locks Supplier in Dubai UAE',
    shortDescription:
      'Robust gate hinges and related gate hardware for chain-link fence gates, welded mesh gates, steel gates and fencing systems, available in G.I., SS 304, M.S. and green powder-coated finishes.',
    intro:
      'SRK Gate Hinges are robust and reliable hardware components designed for the smooth and secure operation of chain-link fence gates, welded mesh gates, steel gates and other fencing systems. Gate hinges can be supplied in G.I., Stainless Steel 304, M.S. and green powder-coated finishes, with different designs and sizes selected for light, medium and heavy-duty applications.',
    image: '/products/gate-hinges-and-locks/gate-hinges-and-locks-overview.webp',
    imageGallery: [
      {
        src: '/products/gate-hinges-and-locks/gate-hinges-and-locks-overview.webp',
        alt: 'Gate hinges and locks supplier in Dubai UAE for chain link welded mesh and steel fence gates',
        caption: 'Gate hinges, lock hardware and accessories for fencing gate systems',
      },
    ],
    specs: [
      { label: 'Product', value: 'Gate hinges and related gate hardware' },
      { label: 'Application', value: 'Chain-link gates, welded mesh gates, steel gates and fencing systems' },
      { label: 'Types', value: 'Butt hinges, heavy-duty hinges, weld-on hinges, adjustable hinges, T-hinges, strap hinges, pivot hinges, spring hinges and more' },
      { label: 'Material options', value: 'G.I., Stainless Steel 304 and M.S.' },
      { label: 'Finish options', value: 'Hot-dip galvanized, zinc coated, green powder coated and SS finish' },
      { label: 'Construction', value: 'Heavy-duty steel or stainless steel construction' },
      { label: 'Sizes', value: 'Various sizes available as per gate weight and application' },
      { label: 'Mounting', value: 'Weld-on, bolt-on and plate-mounted options' },
      { label: 'Adjustment', value: 'Fixed or adjustable designs available' },
      { label: 'Pin type', value: 'Fixed, removable or adjustable as per hinge type' },
      { label: 'Load capacity', value: 'Available according to gate size and weight' },
      { label: 'Customization', value: 'Size, material, finish and configuration as per requirement' },
    ],
    materialOptions: [
      {
        title: 'G.I. / Zinc Coated Hinges',
        description:
          'Galvanized and zinc coated gate hinges for outdoor fence gate systems where corrosion protection and reliable operation are required.',
        bullets: [
          'Suitable for chain-link and welded mesh gate systems',
          'Hot-dip galvanized or zinc coated finish options',
          'Available in weld-on, bolt-on and plate-mounted designs',
          'Good option for perimeter and security gate projects',
        ],
      },
      {
        title: 'SS 304 / M.S. Gate Hinges',
        description:
          'Stainless Steel 304 and M.S. hinge options for steel gates and fencing systems with project-specific strength, finish and size requirements.',
        bullets: [
          'Heavy-duty steel or stainless steel construction',
          'Suitable for light, medium and heavy-duty gates',
          'Available in fixed or adjustable designs',
          'Size and load selection based on gate weight',
        ],
      },
      {
        title: 'Powder Coated Gate Hardware',
        description:
          'Green powder-coated hinge and gate hardware options for fence systems that need corrosion protection with a matching professional finish.',
        bullets: [
          'Green powder-coated finish option',
          'Weather-resistant finish for outdoor fencing systems',
          'Suitable for chain-link, welded mesh and steel gates',
          'Custom configuration available as per requirement',
        ],
      },
    ],
    applications: [
      { label: 'Chain-Link Fence Gates', href: '/products/chain-link-fence' },
      { label: 'Welded Mesh Gates', href: '/products/welded-mesh-fence' },
      { label: 'High-Security Gate Systems', href: '/products/high-security-gate-systems' },
      { label: 'Steel Gates', href: '/products/steel-metal-fencing' },
      { label: 'Perimeter Fencing', href: '/applications/boundary-security-fencing' },
      { label: 'Fence Accessories', href: '/products/fence-accessories' },
    ],
    internalLinks: [
      { label: 'High-Security Gate Systems', href: '/products/high-security-gate-systems' },
      { label: 'Fence Accessories', href: '/products/fence-accessories' },
      { label: 'Base Plates', href: '/products/base-plates' },
      { label: 'Clamps & Connectors', href: '/products/clamps-and-connectors' },
      { label: 'Request a Quote', href: '/contact' },
    ],
    keyFeatures: [
      'Strong and durable construction',
      'Designed for smooth gate movement',
      'Suitable for light to heavy-duty gates',
      'G.I., SS 304 and green powder-coated options',
      'Excellent corrosion and weather resistance',
      'Weld-on and bolt-on options available',
      'Adjustable designs available for accurate gate alignment',
      'Suitable for both chain-link and welded mesh fencing systems',
    ],
    rfqChecklist: [
      'Gate type: chain-link, welded mesh, steel gate or custom gate',
      'Gate size, approximate weight and single/double leaf requirement',
      'Required hinge type: butt, heavy-duty, weld-on, adjustable, pivot or spring hinge',
      'Material and finish requirement: G.I., SS 304, M.S., zinc coated or powder coated',
      'Mounting requirement: weld-on, bolt-on or plate-mounted',
      'Quantity, delivery city and project location',
      'Drawings or photos if available',
    ],
    faqs: [
      {
        question: 'What types of gate hinges can SRK Fence supply?',
        answer:
          'SRK Fence can supply butt hinges, heavy-duty hinges, weld-on hinges, adjustable hinges, T-hinges, strap hinges, pivot hinges, spring hinges and project-specific hinge designs.',
      },
      {
        question: 'Which finishes are available for fence gate hinges?',
        answer:
          'Gate hinges can be supplied in hot-dip galvanized, zinc coated, green powder coated and stainless steel finish options depending on application and project requirement.',
      },
      {
        question: 'What information is needed for gate hinge pricing?',
        answer:
          'Share the gate type, gate size, approximate gate weight, hinge type, mounting method, material, finish, quantity and delivery location so the correct hinge configuration can be reviewed.',
      },
    ],
    rfqPrompt:
      'Request gate hinge and lock hardware pricing with gate type, gate size, approximate weight, hinge type, finish, mounting method, quantity and delivery city.',
    availableMarkets: [
      { label: 'UAE', href: '/countries/uae' },
      { label: 'Bahrain', href: '/countries/bahrain' },
      { label: 'Qatar', href: '/countries/qatar' },
      { label: 'Kuwait', href: '/countries/kuwait' },
      { label: 'Saudi Arabia', href: '/countries/saudi-arabia' },
      { label: 'Iraq', href: '/countries/iraq' },
      { label: 'Oman', href: '/countries/oman' },
      { label: 'Jordan', href: '/countries/jordan' },
    ],
  },
  {
    slug: 'base-plates',
    name: 'Base Plates',
    category: 'Fence Accessories & Mounting Systems',
    primaryKeyword: 'base plates supplier in Dubai UAE',
    secondaryKeywords: [
      'fence base plates UAE',
      'post base plates Dubai',
      'GI base plates supplier UAE',
      'MS base plates Dubai',
      'powder coated base plates UAE',
      'fence post base plates GCC',
      'gate post base plates supplier UAE',
      'custom base plates Dubai',
    ],
    metaTitle: 'Base Plates Supplier in Dubai UAE | SRK Fence',
    metaDescription:
      'SRK Fence supplies base plates and post base plates in Dubai UAE for fence posts, gate posts, railing posts, steel structures and custom mounting requirements.',
    h1: 'Base Plates Supplier in Dubai UAE',
    shortDescription:
      'Strong and durable base plates for fence posts, gate posts, railing posts and steel structures, available in G.I., hot-dipped G.I., M.S. and green powder-coated finishes.',
    intro:
      'SRK Base Plates are strong and durable mounting components designed to provide a secure connection between fence posts, gate posts, railing posts and supporting structures. Available in G.I., hot-dipped G.I., M.S. and green powder-coated finishes, they are suitable for chain-link fencing, welded mesh fencing, steel fencing, gate systems, railing systems and perimeter projects across Dubai, UAE and GCC markets.',
    image: '/products/base-plates/base-plates-overview.webp',
    imageGallery: [
      {
        src: '/products/base-plates/base-plates-overview.webp',
        alt: 'Base plates supplier in Dubai UAE with GI MS hot dipped galvanized and green powder coated options',
        caption: 'Base plate range with G.I., hot-dipped G.I., M.S. and green powder-coated finish options',
      },
      {
        src: '/products/base-plates/base-plate-mounting-details.webp',
        alt: 'Fence post base plate mounting details for galvanized and powder coated base plates',
        caption: 'Base plate mounting and post connection detail options for fence and gate systems',
      },
    ],
    specs: [
      { label: 'Product', value: 'Base plates / post base plates' },
      { label: 'Application', value: 'Fence posts, gate posts, railing posts and steel structures' },
      { label: 'Types', value: 'Square base plates, round base plates, socket base plates, U-brackets, gusseted base plates and custom designs' },
      { label: 'Material options', value: 'G.I., hot-dipped G.I. and M.S.' },
      { label: 'Finish options', value: 'Galvanized, hot-dip galvanized and green powder coated' },
      { label: 'Shape', value: 'Square, round, rectangular and custom' },
      { label: 'Post compatibility', value: 'Round and square posts / tubes' },
      { label: 'Mounting', value: 'Anchor bolt, chemical anchor or bolted fixing' },
      { label: 'Bolt holes', value: 'Available in various hole patterns and diameters' },
      { label: 'Thickness', value: 'Available as per post size and load requirement' },
      { label: 'Dimensions', value: 'Various sizes available' },
      { label: 'Welding', value: 'Continuous / reinforced welding as required' },
      { label: 'Customization', value: 'Size, thickness, hole pattern, socket diameter and finish as per requirement' },
    ],
    materialOptions: [
      {
        title: 'G.I. / Hot-Dipped G.I. Base Plates',
        description:
          'Galvanized and hot-dip galvanized base plates for outdoor fencing and post mounting where corrosion resistance and long service life are important.',
        bullets: [
          'Suitable for fence posts and gate posts',
          'Strong zinc-based protection for outdoor use',
          'Available for round and square post compatibility',
          'Good option for chain-link and welded mesh fencing',
        ],
      },
      {
        title: 'M.S. Base Plates',
        description:
          'Mild steel base plates for heavy-duty fence, gate, railing and steel structure applications, with finish selection based on project requirement.',
        bullets: [
          'Heavy-duty and durable construction',
          'Suitable for steel fencing and gate applications',
          'Can be supplied in square, round and custom shapes',
          'Custom thickness and hole pattern options available',
        ],
      },
      {
        title: 'Powder Coated Base Plates',
        description:
          'Green powder-coated base plates for projects that need durable finish protection with a clean, professional appearance.',
        bullets: [
          'Corrosion and weather-resistant finish',
          'Clean green finish for matching fence systems',
          'Suitable for bolt-down and anchored installations',
          'Custom sizes and configurations available',
        ],
      },
    ],
    applications: [
      { label: 'Chain-Link Fencing', href: '/products/chain-link-fence' },
      { label: 'Welded Mesh Fencing', href: '/products/welded-mesh-fence' },
      { label: 'Fence Posts', href: '/products/fence-posts-gi-ms-pvc' },
      { label: 'Gate Systems', href: '/products/high-security-gate-systems' },
      { label: 'Fence Accessories', href: '/products/fence-accessories' },
      { label: 'Perimeter Fencing', href: '/applications/boundary-security-fencing' },
    ],
    internalLinks: [
      { label: 'Fence Posts', href: '/products/fence-posts-gi-ms-pvc' },
      { label: 'Fence Accessories', href: '/products/fence-accessories' },
      { label: 'Clamps and Connectors', href: '/products/fence-accessories' },
      { label: 'Colors & Coating Options', href: '/products/colors-and-coating-options' },
      { label: 'Request a Quote', href: '/contact' },
    ],
    rfqChecklist: [
      'Base plate type: square, round, socket, U-bracket, gusseted or custom design',
      'Post type and size: round post, square post or tube size',
      'Material requirement: G.I., hot-dipped G.I. or M.S.',
      'Finish requirement: galvanized, hot-dip galvanized or powder coated',
      'Plate thickness, dimensions, socket diameter and hole pattern',
      'Quantity, delivery city and installation or supply-only requirement',
    ],
    availableMarkets: [
      { label: 'UAE', href: '/countries/uae' },
      { label: 'Bahrain', href: '/countries/bahrain' },
      { label: 'Qatar', href: '/countries/qatar' },
      { label: 'Kuwait', href: '/countries/kuwait' },
      { label: 'Saudi Arabia', href: '/countries/saudi-arabia' },
      { label: 'Iraq', href: '/countries/iraq' },
      { label: 'Oman', href: '/countries/oman' },
      { label: 'Jordan', href: '/countries/jordan' },
    ],
    faqs: [
      {
        question: 'What are base plates used for in fencing projects?',
        answer:
          'Base plates are mounting components used to connect fence posts, gate posts, railing posts and supporting structures securely to the ground or another structure.',
      },
      {
        question: 'Which base plate finishes are available?',
        answer:
          'SRK Fence can supply base plates in G.I., hot-dipped G.I., M.S. and green powder-coated finishes depending on the project requirement.',
      },
      {
        question: 'Can base plates be customized?',
        answer:
          'Yes, base plates can be customized by size, thickness, hole pattern, socket diameter, shape and finish based on post size and load requirement.',
      },
      {
        question: 'Are base plates suitable for round and square posts?',
        answer:
          'Yes, base plates can be supplied for both round and square posts or tubes, with multiple hole patterns and mounting options.',
      },
    ],
    buyerQuestions: [
      {
        question: 'What details should be shared for a base plate quotation?',
        answer:
          'Share base plate type, post size, material, finish, hole pattern, thickness, quantity, delivery city and whether the requirement is supply-only or installation support.',
      },
      {
        question: 'Can SRK Fence supply base plates with fence posts and accessories?',
        answer:
          'Yes, base plates can be quoted with fence posts, caps, clamps, brackets, rails, fixings and other related fencing accessories as a complete package.',
      },
    ],
    rfqPrompt:
      'Request base plate pricing with plate type, post size, material, finish, thickness, dimensions, hole pattern, quantity, delivery city and installation requirement.',
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
  {
    slug: 'coating-materials',
    name: 'Coating Materials',
    category: 'Coating Materials & Protective Finishes',
    primaryKeyword: 'coating materials supplier in Dubai UAE',
    secondaryKeywords: [
      'PVC coating materials UAE',
      'PE coating materials Dubai',
      'powder coating materials for fencing UAE',
      'zinc coating galvanizing UAE',
      'hot dip galvanizing coating for fences',
      'green powder coating fence materials',
      'protective coating materials for steel fencing GCC',
      'fence coating materials supplier UAE',
    ],
    metaTitle: 'Coating Materials Supplier in Dubai UAE | SRK Fence',
    metaDescription:
      'SRK Fence supplies PVC, PE, powder coating, zinc coating and hot-dip galvanizing coating materials for chain-link, welded mesh, posts, gates and steel structures.',
    h1: 'Coating Materials Supplier in Dubai UAE',
    shortDescription:
      'Protective coating materials for fencing products and steel components, designed to improve durability, corrosion resistance, weather protection and appearance.',
    intro:
      'SRK Coating Materials offer a range of protective coating solutions designed to enhance the durability, corrosion resistance and appearance of fencing products and steel components. These coatings are suitable for chain-link fences, welded mesh, fence wires, steel pipes, fence posts, gates and other metal structures, providing protection against outdoor and environmental conditions.',
    image: '/products/coating-materials/coating-materials-overview.webp',
    imageGallery: [
      {
        src: '/products/coating-materials/coating-materials-overview.webp',
        alt: 'Coating materials supplier in Dubai UAE for PVC PE powder zinc and galvanized fence finishes',
        caption: 'Coating materials overview for fencing wires, posts, pipes, gates and steel structures',
      },
      {
        src: '/products/coating-materials/coating-materials-options.webp',
        alt: 'PVC PE powder coating zinc galvanizing primer touch up paint thinner cleaner and packaging options',
        caption: 'PVC coating, PE coating, powder coating, zinc galvanizing, primer, touch-up paint and support materials',
      },
      {
        src: '/products/coating-materials/different-coatings-protection.webp',
        alt: 'Different coatings for strong protection and long lasting fencing performance',
        caption: 'Coating comparison for PVC, PE, powder coating, zinc coating, hot-dip galvanized and green powder coated finishes',
      },
    ],
    specs: [
      { label: 'Product', value: 'Protective coating materials' },
      { label: 'Applications', value: 'Chain-link fence, welded mesh, fence wires, pipes, posts, gates and steel structures' },
      { label: 'PVC coating', value: 'Available in various thicknesses and colours as per requirement' },
      { label: 'PE coating', value: 'Available in various thicknesses and colours as per requirement' },
      { label: 'Powder coating', value: 'Polyester powder coating, available in multiple colours' },
      { label: 'Zinc coating', value: 'Galvanized finish for corrosion protection' },
      { label: 'Hot-dip galvanizing', value: 'Heavy-duty zinc coating for enhanced outdoor protection' },
      { label: 'Green powder coating', value: 'Green finish, with custom colours available' },
      { label: 'Colours', value: 'Green, black, silver and other colours as required' },
      { label: 'Finish', value: 'Smooth, gloss or matt depending on coating type' },
      { label: 'Application method', value: 'PVC/PE extrusion, powder coating, electrostatic coating or galvanizing as applicable' },
      { label: 'Customization', value: 'Coating type, colour, thickness and finish can be provided as per project requirement' },
    ],
    materialOptions: [
      {
        title: 'PVC Coating',
        description:
          'Flexible protective coating providing corrosion resistance, weather protection and a smooth finish for fencing products and steel components.',
        bullets: [
          'Available in various thicknesses and colours',
          'Suitable for chain-link fence, welded mesh and fence wires',
          'Helps improve outdoor protection and appearance',
        ],
      },
      {
        title: 'PE Coating',
        description:
          'Polyethylene coating offering good adhesion, weather resistance and a durable protective layer for project-specific fencing requirements.',
        bullets: [
          'Available in different thicknesses and colours',
          'Good adhesion and weather-resistant performance',
          'Useful for protective fencing and metal component finishes',
        ],
      },
      {
        title: 'Powder Coating (Polyester)',
        description:
          'Electrostatic powder coating with excellent durability, attractive finish and good resistance to weather and corrosion.',
        bullets: [
          'Polyester powder coating for premium finish',
          'Available in multiple colours',
          'Suitable for posts, gates, panels and visible steel components',
        ],
      },
      {
        title: 'Zinc Coating / Galvanizing',
        description:
          'Zinc protective coating designed to protect steel against rust and corrosion for galvanized fence and metal components.',
        bullets: [
          'Galvanized finish for corrosion protection',
          'Suitable for steel pipes, posts and fence structures',
          'Common option for durable metallic finish requirements',
        ],
      },
      {
        title: 'Hot-Dip Galvanizing',
        description:
          'Immersion-based zinc coating providing a thicker and highly durable protective layer for demanding outdoor applications.',
        bullets: [
          'Heavy-duty zinc coating for enhanced outdoor protection',
          'Suitable for demanding environmental conditions',
          'Helps extend service life of fencing products',
        ],
      },
      {
        title: 'Green Powder Coating',
        description:
          'Green polyester powder coating providing a durable, attractive finish with additional protection against corrosion and weathering.',
        bullets: [
          'Green finish with custom colours available',
          'Designed for attractive and durable fence systems',
          'Suitable for fencing products, posts, gates and accessories',
        ],
      },
    ],
    keyFeatures: [
      'Excellent corrosion and rust protection',
      'UV and weather resistance',
      'Durable and long-lasting finish',
      'Strong adhesion to metal surfaces',
      'Available in multiple colours and finishes',
      'Suitable for indoor and outdoor applications',
      'Helps extend the service life of fencing products',
      'Suitable for industrial, commercial and residential projects',
    ],
    applications: [
      { label: 'Chain-Link Fencing', href: '/products/chain-link-fence' },
      { label: 'Welded Mesh Fencing', href: '/products/welded-mesh-fence' },
      { label: 'Fence Wires', href: '/products/barbed-wire' },
      { label: 'Fence Posts', href: '/products/fence-posts-gi-ms-pvc' },
      { label: 'Gates', href: '/products/high-security-gate-systems' },
      { label: 'Security & Perimeter Fencing', href: '/applications/boundary-security-fencing' },
      { label: 'Sports Fencing', href: '/applications/sports-court-fencing' },
      { label: 'Steel Structures', href: '/products/steel-metal-fencing' },
    ],
    internalLinks: [
      { label: 'Colors & Coating Options', href: '/products/colors-and-coating-options' },
      { label: 'Fence Posts', href: '/products/fence-posts-gi-ms-pvc' },
      { label: 'Chain Link Fence', href: '/products/chain-link-fence' },
      { label: 'Welded Mesh Fence', href: '/products/welded-mesh-fence' },
      { label: 'Base Plates', href: '/products/base-plates' },
      { label: 'Request a Quote', href: '/contact' },
    ],
    rfqChecklist: [
      'Coating type: PVC, PE, powder coating, zinc coating, hot-dip galvanizing or green powder coating',
      'Product type: chain-link fence, welded mesh, wire, pipe, post, gate or steel structure',
      'Required colour, finish and thickness',
      'Indoor, outdoor, coastal or industrial exposure conditions',
      'Quantity, project location and delivery country',
      'Any required drawings, BOQ or finish specification',
    ],
    availableMarkets: [
      { label: 'UAE', href: '/countries/uae' },
      { label: 'Bahrain', href: '/countries/bahrain' },
      { label: 'Qatar', href: '/countries/qatar' },
      { label: 'Kuwait', href: '/countries/kuwait' },
      { label: 'Saudi Arabia', href: '/countries/saudi-arabia' },
      { label: 'Iraq', href: '/countries/iraq' },
      { label: 'Oman', href: '/countries/oman' },
      { label: 'Jordan', href: '/countries/jordan' },
    ],
    faqs: [
      {
        question: 'What coating materials does SRK Fence offer?',
        answer:
          'SRK Fence offers protective coating solutions including PVC coating, PE coating, polyester powder coating, zinc coating / galvanizing, hot-dip galvanizing and green powder coating for fencing products and steel components.',
      },
      {
        question: 'Where are coating materials used in fencing projects?',
        answer:
          'Coating materials are used for chain-link fences, welded mesh, fence wires, steel pipes, fence posts, gates and other metal structures to improve durability, corrosion resistance and appearance.',
      },
      {
        question: 'Can coating thickness and colour be customized?',
        answer:
          'Yes, coating type, colour, thickness and finish can be provided as per project requirement, depending on the product type and available coating process.',
      },
    ],
    buyerQuestions: [
      {
        question: 'Which coating is suitable for demanding outdoor fencing?',
        answer:
          'For demanding outdoor applications, hot-dip galvanizing, zinc coating, PVC coating and powder coating can be reviewed based on the product type, exposure level, required appearance and project specification.',
      },
      {
        question: 'What details should be shared for a coating materials quotation?',
        answer:
          'Share the product type, coating requirement, colour, thickness, finish, quantity, exposure conditions, delivery country and any BOQ or drawing details.',
      },
    ],
    rfqPrompt:
      'Request coating materials pricing with product type, coating type, colour, thickness, finish requirement, quantity, project exposure and delivery country.',
  },
  {
    slug: 'colors-and-coating-options',
    name: 'Colors & Coating Options',
    category: 'Coating & Finish Options',
    primaryKeyword: 'colors and coating options for fencing UAE',
    secondaryKeywords: [
      'fence coating options UAE',
      'galvanized fence coating UAE',
      'PVC coated fence colors UAE',
      'powder coated fence colors UAE',
      'hot dip galvanized fencing Dubai',
      'custom RAL fence colors UAE',
      'corrosion resistant fence coating GCC',
    ],
    metaTitle: 'Colors & Coating Options for Fencing UAE | SRK Fence',
    metaDescription:
      'SRK Fence offers electro galvanized, hot-dip galvanized, PVC coated and powder coated fencing finishes with green, black, white, grey, blue and custom colors.',
    h1: 'Colors & Coating Options for Fencing in UAE & GCC',
    shortDescription:
      'Durable surface protection and color finishes for chain-link, welded mesh, gates, posts and fencing systems, including electro galvanized, hot-dip galvanized, PVC coated and powder coated options.',
    intro:
      'Colors and coating options help fencing systems achieve the right balance of corrosion resistance, service life, project appearance and site suitability. SRK Fence supplies coating and finish options for UAE and GCC fencing projects, including electro galvanized, hot-dip galvanized, PVC coated and powder coated systems. The final coating can be selected based on product type, outdoor exposure, coastal conditions, security requirement, architectural appearance and required color finish.',
    image: '/products/colors-and-coating-options/colors-and-coating-options-overview.webp',
    imageGallery: [
      {
        src: '/products/colors-and-coating-options/colors-and-coating-options-overview.webp',
        alt: 'Colors and coating options for galvanized PVC coated and powder coated fencing in UAE',
        caption: 'Overview of galvanized, PVC coated, powder coated and custom color fencing finishes',
      },
      {
        src: '/products/colors-and-coating-options/fence-color-and-coating-options-srk-fencing.webp',
        alt: 'Fence color and coating options with galvanized PVC coated powder coated and custom colors',
        caption: 'Coating comparison and color swatches for fencing, gates and post systems',
      },
    ],
    specs: [
      { label: 'Wire diameter', value: '1.8 mm to 6.0 mm, depending on product type and project requirement' },
      { label: 'Mesh opening', value: 'Available in various sizes as per fencing system and specification' },
      { label: 'Coating options', value: 'Electro galvanized, hot-dip galvanized, PVC coated and powder coated' },
      { label: 'Zinc coating', value: 'Available as per required specification' },
      { label: 'PVC coating', value: 'Available in various thicknesses and colors' },
      { label: 'Powder coating', value: 'Available in a wide range of RAL colors' },
      { label: 'Colors', value: 'Green, black, white, grey, blue and custom colors' },
      { label: 'Material', value: 'Galvanized steel, PVC coated steel or as specified' },
      { label: 'Finish', value: 'Smooth, uniform and colored finish options' },
    ],
    materialOptions: [
      {
        title: 'Hot-Dip Galvanized / G.I.',
        description:
          'Steel is immersed in molten zinc to create a durable protective coating with strong resistance against corrosion and weather exposure.',
        bullets: [
          'Excellent corrosion protection',
          'Zinc / metallic appearance',
          'Best for outdoor fencing, industrial projects and boundary fencing',
        ],
      },
      {
        title: 'PVC Coated',
        description:
          'Galvanized steel wire is coated with a protective PVC layer for additional corrosion resistance, weather protection and an attractive colored finish.',
        bullets: [
          'Available in green, black and other project colors',
          'UV and weather-resistant options',
          'Best for security, residential, sports, landscaping and coastal/outdoor applications',
        ],
      },
      {
        title: 'Powder Coated',
        description:
          'A dry powder coating is electrostatically applied and cured to create a durable, uniform and premium colored surface.',
        bullets: [
          'Wide range of RAL color options',
          'Smooth and professional finish',
          'Best for architectural fencing, decorative fencing, gates and commercial projects',
        ],
      },
    ],
    applications: [
      { label: 'Security Fencing', href: '/applications/boundary-security-fencing' },
      { label: 'Residential Fencing', href: '/applications/residential-villa-fencing' },
      { label: 'Sports Facilities', href: '/applications/sports-court-fencing' },
      { label: 'Commercial Projects', href: '/applications/commercial-industrial' },
      { label: 'Industrial Projects', href: '/applications/commercial-industrial' },
      { label: 'Coastal & Outdoor Fencing', href: '/countries/uae' },
    ],
    internalLinks: [
      { label: 'Chain Link Fence', href: '/products/chain-link-fence' },
      { label: 'Welded Mesh Fence', href: '/products/welded-mesh-fence' },
      { label: 'Fence Posts', href: '/products/fence-posts-gi-ms-pvc' },
      { label: 'Fence Accessories', href: '/products/fence-accessories' },
      { label: 'Request a Quote', href: '/contact' },
    ],
    availableMarkets: [
      { label: 'UAE', href: '/countries/uae' },
      { label: 'Bahrain', href: '/countries/bahrain' },
      { label: 'Qatar', href: '/countries/qatar' },
      { label: 'Kuwait', href: '/countries/kuwait' },
      { label: 'Saudi Arabia', href: '/countries/saudi-arabia' },
      { label: 'Iraq', href: '/countries/iraq' },
      { label: 'Oman', href: '/countries/oman' },
      { label: 'Jordan', href: '/countries/jordan' },
    ],
    rfqChecklist: [
      'Fence or product type',
      'Required coating option',
      'Preferred color or RAL shade',
      'Wire diameter or section size',
      'Mesh opening or panel style',
      'Indoor, outdoor or coastal exposure',
      'Quantity, running meters or BOQ',
      'Delivery country and project location',
    ],
    faqs: [
      {
        question: 'What coating options are available for SRK Fence products?',
        answer:
          'Available coating options include electro galvanized, hot-dip galvanized, PVC coated and powder coated finishes, depending on the fencing product and project requirement.',
      },
      {
        question: 'Which coating is suitable for outdoor and heavy-duty fencing?',
        answer:
          'Hot-dip galvanized and PVC coated options are commonly selected for outdoor fencing, boundary fencing, industrial projects and demanding environments where corrosion resistance is important.',
      },
      {
        question: 'Can fencing products be supplied in custom colors?',
        answer:
          'Yes, PVC coated and powder coated products can be reviewed in green, black, white, grey, blue and custom RAL colors according to project requirement and availability.',
      },
    ],
    buyerQuestions: [
      {
        question: 'What is the difference between galvanized, PVC coated and powder coated fencing?',
        answer:
          'Galvanized finishes focus on zinc-based corrosion protection, PVC coating adds a protective colored layer over galvanized steel, and powder coating provides a durable premium colored finish for appearance-led fencing, gates and commercial projects.',
      },
      {
        question: 'What details are needed to quote coating and color options?',
        answer:
          'Share the fence product type, wire diameter or profile size, mesh opening, coating requirement, preferred color, site exposure, quantity, delivery country and any BOQ or drawings.',
      },
    ],
    rfqPrompt:
      'Request coating and color option pricing with product type, required finish, preferred color, wire diameter or profile size, quantity, delivery country and project exposure details.',
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



const gccAvailableMarkets: LinkItem[] = [
  { label: 'UAE', href: '/countries/uae' },
  { label: 'Bahrain', href: '/countries/bahrain' },
  { label: 'Qatar', href: '/countries/qatar' },
  { label: 'Kuwait', href: '/countries/kuwait' },
  { label: 'Saudi Arabia', href: '/countries/saudi-arabia' },
  { label: 'Iraq', href: '/countries/iraq' },
  { label: 'Oman', href: '/countries/oman' },
  { label: 'Jordan', href: '/countries/jordan' },
];

const productSeoPageEnhancements: Record<string, Partial<ProductSeoPage>> = {
  'fence-posts-gi-ms-pvc': {
    keyFeatures: [
      'Strong support for chain-link, welded mesh, gates and boundary fencing systems',
      'Available in G.I., M.S. and PVC finish options',
      'Suitable for outdoor, industrial, commercial and residential projects',
      'Compatible with caps, clamps, brackets, rails and fixing accessories',
      'Round, square, rectangular and customized profile options',
      'Embedded and surface-mounted installation options',
      'Weather-resistant finish choices for long service life',
      'Custom sizes and colours available as per project requirement',
    ],
    availableMarkets: gccAvailableMarkets,
  },
  'anti-climb-358-fence': {
    image: '/products/pdf-mapped/anti-climb-358-fence/anti-climb-358-fence-01.webp',
    imageGallery: [
      { src: '/products/pdf-mapped/anti-climb-358-fence/anti-climb-358-fence-01.webp', alt: 'Anti climb 358 security fence system for high security perimeter projects', caption: 'Anti-climb 358 mesh fence system for high-security perimeter protection' },
      { src: '/products/pdf-mapped/anti-climb-358-fence/anti-climb-358-fence-02.webp', alt: 'Anti climb fence mesh options posts coating and security fencing details', caption: 'Mesh, posts, coating and accessory details for anti-climb fencing' },
    ],
    materialOptions: [
      { title: '358 Mesh Panel', description: 'Tight aperture welded mesh panel designed to make climbing and cutting difficult while maintaining visibility.', bullets: ['High-security mesh configuration', 'Suitable for critical perimeter zones', 'Clean visible boundary appearance'] },
      { title: 'Post & Fixing System', description: 'Compatible post and fixing arrangements for stable perimeter security installations.', bullets: ['Steel post support', 'Secure clamp and fixing options', 'Custom height requirements supported'] },
      { title: 'Coating Options', description: 'Galvanized and coated finish options help improve outdoor corrosion resistance and visual finish.', bullets: ['Galvanized steel options', 'Powder or PVC coated finish choices', 'Colours can be aligned to project specification'] },
    ],
    keyFeatures: [
      'Anti-climb mesh design for high-security areas',
      'High visibility for surveillance and perimeter monitoring',
      'Strong welded mesh construction',
      'Suitable for airports, utilities, industrial sites and secure facilities',
      'Compatible with gates and access-control areas',
      'Galvanized and coated finish options',
      'Custom heights and project-specific configurations',
      'Low-maintenance perimeter security solution',
    ],
    availableMarkets: gccAvailableMarkets,
  },
  'temporary-fence-panels': {
    image: '/products/pdf-mapped/temporary-fence-panels/temporary-fence-panels-01.webp',
    imageGallery: [
      { src: '/products/pdf-mapped/temporary-fence-panels/temporary-fence-panels-01.webp', alt: 'Temporary fence panels for construction events and movable site boundaries', caption: 'Temporary fence panels for construction and short-term site security' },
      { src: '/products/pdf-mapped/temporary-fence-panels/temporary-fence-panels-02.webp', alt: 'Temporary fencing panels base support clamps and portable fence details', caption: 'Portable panel, base and clamp support options' },
      { src: '/products/pdf-mapped/temporary-fence-panels/temporary-fence-panels-03.webp', alt: 'Temporary fencing system for event industrial and project boundaries', caption: 'Temporary fencing system for project, event and industrial boundaries' },
    ],
    materialOptions: [
      { title: 'Temporary Mesh Panels', description: 'Portable mesh panels for movable boundary and site-control requirements.', bullets: ['Quick project boundary setup', 'Reusable panel system', 'Suitable for construction and events'] },
      { title: 'Bases & Clamps', description: 'Support bases and connecting clamps help align and stabilize temporary fencing runs.', bullets: ['Portable base support', 'Panel-to-panel clamp options', 'Practical for short-term deployment'] },
      { title: 'Coated Finish', description: 'Galvanized or coated finishes can be selected for outdoor project requirements.', bullets: ['Galvanized finish options', 'Coated finish choices', 'Custom project specification support'] },
    ],
    keyFeatures: [
      'Portable and reusable fencing system',
      'Suitable for temporary construction and event boundaries',
      'Fast site separation and crowd-control support',
      'Panel, base and clamp system options',
      'Easy relocation for changing site layouts',
      'Outdoor finish options available',
      'Project-specific heights and sizes can be reviewed',
      'Suitable for supply and installation discussions',
    ],
    availableMarkets: gccAvailableMarkets,
  },
  'barbed-wire': {
    image: '/products/pdf-mapped/barbed-wire/barbed-wire-01.webp',
    imageGallery: [
      { src: '/products/pdf-mapped/barbed-wire/barbed-wire-01.webp', alt: 'Barbed wire fencing roll for agricultural industrial and boundary fencing', caption: 'Barbed wire rolls for boundary, agricultural and industrial fencing' },
      { src: '/products/pdf-mapped/barbed-wire/barbed-wire-02.webp', alt: 'Galvanized and PVC coated barbed wire fencing options', caption: 'Galvanized and coated barbed wire finish options' },
    ],
    materialOptions: [
      { title: 'G.I. Barbed Wire', description: 'Galvanized barbed wire for boundary fencing and outdoor perimeter applications.', bullets: ['Galvanized steel wire', 'Outdoor boundary use', 'Compatible with fence posts and brackets'] },
      { title: 'PVC Coated Barbed Wire', description: 'PVC coated barbed wire option for added visual finish and corrosion resistance.', bullets: ['Green and custom colour options', 'Protective coated finish', 'Suitable for boundary and agricultural fencing'] },
      { title: 'Custom Roll Requirements', description: 'Roll length, wire diameter and spacing can be discussed based on project requirement.', bullets: ['Custom roll quantity', 'Project-specific wire size', 'Delivery support across GCC'] },
    ],
    keyFeatures: [
      'Boundary security and livestock fencing support',
      'Galvanized and PVC coated options available',
      'Suitable for farms, open plots and industrial boundaries',
      'Can be used with chain-link or post fencing systems',
      'Custom roll quantity and wire specification support',
      'Weather-resistant finish choices',
      'Cost-effective perimeter deterrent component',
      'Suitable for UAE and GCC project supply',
    ],
    availableMarkets: gccAvailableMarkets,
  },
  'razor-wire': {
    image: '/products/pdf-mapped/razor-wire/razor-wire-01.webp',
    imageGallery: [
      { src: '/products/pdf-mapped/razor-wire/razor-wire-01.webp', alt: 'Razor wire coil for high security perimeter fencing', caption: 'Razor wire coil for high-security perimeter fencing' },
      { src: '/products/pdf-mapped/razor-wire/razor-wire-02.webp', alt: 'Concertina razor wire coil options for fence top security', caption: 'Concertina coil options for fence-top and boundary security' },
    ],
    materialOptions: [
      { title: 'Concertina Coil', description: 'Razor wire coil configuration for high-security boundary and fence-top applications.', bullets: ['Fence-top perimeter use', 'Coil format options', 'Suitable for secure sites'] },
      { title: 'Galvanized Finish', description: 'Galvanized finish options help improve corrosion resistance for outdoor exposure.', bullets: ['Outdoor perimeter application', 'Corrosion protection', 'Project-specific supply quantities'] },
      { title: 'Security Fence Integration', description: 'Can be reviewed with chain-link, welded mesh, anti-climb and boundary fencing systems.', bullets: ['Compatible with security fencing', 'Suitable for industrial boundaries', 'RFQ support by site length and coil quantity'] },
    ],
    keyFeatures: [
      'High-security perimeter deterrent component',
      'Concertina coil format options',
      'Suitable for fence-top and boundary security use',
      'Can be paired with chain-link and welded mesh fencing',
      'Galvanized finish options available',
      'Project-specific coil quantity support',
      'Suitable for industrial and high-risk perimeters',
      'Available for UAE and GCC supply requests',
    ],
    availableMarkets: gccAvailableMarkets,
  },
  'base-plates': {
    keyFeatures: [
      'Strong mounting support for fence, gate and railing posts',
      'Available in G.I., hot-dip G.I., M.S. and green powder-coated options',
      'Round, square and custom plate shapes can be reviewed',
      'Bolt-hole and thickness options based on project requirement',
      'Suitable for chain-link, welded mesh, steel fencing and gates',
      'Custom welding and fabrication support available',
      'Stable surface-mounted post installation support',
      'Outdoor finish options for long-term use',
    ],
    availableMarkets: gccAvailableMarkets,
  },
  'fence-accessories': {
    image: '/products/pdf-mapped/fence-accessories/fence-accessories-01.webp',
    imageGallery: [
      { src: '/products/pdf-mapped/fence-accessories/fence-accessories-01.webp', alt: 'Fence accessories clamps caps brackets tension wire and fixing components', caption: 'Fence accessories for posts, rails, mesh fixing, gates and boundary systems' },
      { src: '/products/pdf-mapped/fence-accessories/fence-accessories-02.webp', alt: 'Fence accessories galvanized powder coated and PVC coated hardware options', caption: 'Galvanized, powder coated and PVC coated accessory options' },
    ],
    materialOptions: [
      { title: 'Post & Rail Accessories', description: 'Caps, brackets, clamps and rail supports for fence post and rail systems.', bullets: ['Post caps and brackets', 'Rail supports', 'Custom accessory requirements'] },
      { title: 'Mesh Fixing Accessories', description: 'Tension wire, tie wire, clips and mesh fixing parts for chain-link and welded mesh fencing.', bullets: ['Mesh fixing support', 'Tension and tie components', 'Suitable for repair and installation'] },
      { title: 'Gate Hardware Support', description: 'Hinges, latches and gate hardware options can be matched to fencing systems.', bullets: ['Gate accessory options', 'Galvanized and coated finishes', 'Project-based selection'] },
    ],
    keyFeatures: [
      'Complete accessory support for fence installation and repair',
      'Suitable for chain-link, welded mesh and steel fencing systems',
      'Galvanized, powder coated and PVC coated finish options',
      'Compatible with posts, rails, gates and mesh fixing details',
      'Custom accessory selection based on drawings and BOQ',
      'Supports supply-only and project installation discussions',
      'Useful for replacement and new fence projects',
      'Available across UAE and GCC markets',
    ],
    availableMarkets: gccAvailableMarkets,
  },
  'colors-and-coating-options': {
    keyFeatures: [
      'Electro galvanized, hot-dip galvanized, PVC coated and powder coated options',
      'Improves corrosion resistance and service life of fencing products',
      'Multiple colour choices including green, black, white, grey, blue and custom colours',
      'Suitable for chain-link, welded mesh, posts, gates and accessories',
      'Smooth professional finish for visible fence systems',
      'Weather and UV resistance depending on coating type',
      'Low-maintenance finish choices for outdoor applications',
      'Specification support for industrial, commercial and residential projects',
    ],
    availableMarkets: gccAvailableMarkets,
  },
  'chain-link-fence': { availableMarkets: gccAvailableMarkets },
  'gi-chain-link-fence': { availableMarkets: gccAvailableMarkets },
  'pvc-coated-chain-link-fence': { availableMarkets: gccAvailableMarkets },
  'welded-mesh-fence': { availableMarkets: gccAvailableMarkets },
  'steel-metal-fencing': { availableMarkets: gccAvailableMarkets },
};

for (const product of productSeoPages) {
  const enhancement = productSeoPageEnhancements[product.slug];
  if (enhancement) {
    Object.assign(product, enhancement);
  }
}

productSeoPages.push(
  {
    slug: 'panel-post-system',
    name: 'Panel & Post System',
    category: 'Fence Panels & Posts',
    primaryKeyword: 'panel and post fence system supplier in Dubai UAE',
    secondaryKeywords: ['panel post fencing UAE', 'steel panel and post fence Dubai', 'boundary panel fence GCC', 'fence panel post system supplier'],
    metaTitle: 'Panel & Post System Supplier in Dubai UAE | SRK Fence',
    metaDescription: 'SRK Fence supplies panel and post fencing systems for commercial, industrial, residential and perimeter projects across Dubai, UAE and GCC.',
    h1: 'Panel & Post System Supplier in Dubai UAE',
    shortDescription: 'Panel and post fencing systems for neat, strong and durable boundary fencing across commercial, industrial and residential projects.',
    intro: 'SRK Panel & Post System is a structured fencing solution using fence panels fixed to compatible steel posts. It is suitable for boundary fencing, commercial premises, residential communities, warehouses, schools, parks and industrial areas where a clean appearance, stable structure and project-specific coating are required.',
    image: '/products/pdf-mapped/panel-post-system/panel-post-system-01.webp',
    imageGallery: [
      { src: '/products/pdf-mapped/panel-post-system/panel-post-system-01.webp', alt: 'Panel and post fencing system for boundary and security projects', caption: 'Panel and post fencing system overview' },
      { src: '/products/pdf-mapped/panel-post-system/panel-post-system-02.webp', alt: 'Panel post fence details coating posts and installation options', caption: 'Panel, post, coating and fixing details' },
    ],
    specs: [
      { label: 'Product', value: 'Panel & Post System' },
      { label: 'Applications', value: 'Commercial boundaries, industrial sites, schools, parks, residential communities and perimeter fencing' },
      { label: 'Panel type', value: 'Welded mesh, steel panel or project-specified fence panel options' },
      { label: 'Post type', value: 'Steel posts with matching fixing and clamp options' },
      { label: 'Finish options', value: 'Galvanized, powder coated, PVC coated or project-specified finish' },
      { label: 'Colour options', value: 'Green, black, grey, white or custom colours as required' },
      { label: 'Customization', value: 'Panel size, post size, height, colour, coating and accessory requirements can be reviewed' },
    ],
    materialOptions: [
      { title: 'Fence Panels', description: 'Panel options for clean boundary and perimeter fencing applications.', bullets: ['Welded mesh or steel panel choices', 'Custom height and width support', 'Suitable for visible boundary lines'] },
      { title: 'Post System', description: 'Compatible posts designed to support fence panels and maintain system alignment.', bullets: ['Steel post support', 'Surface or embedded fixing discussion', 'Compatible with clamps and brackets'] },
      { title: 'Coating & Colour', description: 'Finish options selected according to exposure, appearance and project specification.', bullets: ['Galvanized and coated options', 'Green, black, grey and custom colours', 'Outdoor durability support'] },
    ],
    keyFeatures: ['Clean panel-and-post appearance', 'Strong and stable boundary fencing system', 'Suitable for commercial, industrial and residential projects', 'Custom height and coating options', 'Compatible with gates and accessories', 'Low-maintenance outdoor finish choices', 'Project-specific dimensions available', 'UAE and GCC supply support'],
    applications: [
      { label: 'Boundary Security Fencing', href: '/applications/boundary-security-fencing' },
      { label: 'Residential Communities', href: '/applications/residential-villa-fencing' },
      { label: 'Schools & Parks', href: '/applications/school-playground-fencing' },
      { label: 'Industrial Sites', href: '/applications/warehouses-logistic-centers' },
    ],
    internalLinks: [
      { label: 'Fence Posts', href: '/products/fence-posts-gi-ms-pvc' },
      { label: 'Base Plates', href: '/products/base-plates' },
      { label: 'Colors & Coating Options', href: '/products/colors-and-coating-options' },
      { label: 'Request a Quote', href: '/contact' },
    ],
    faqs: [
      { question: 'Where is a panel and post system used?', answer: 'Panel and post systems are used for commercial boundaries, industrial sites, residential communities, schools, parks and perimeter fencing projects.' },
      { question: 'Can panel size and coating be customized?', answer: 'Yes, panel size, post size, height, colour, coating and accessories can be reviewed based on project requirements.' },
      { question: 'What details are needed for quotation?', answer: 'Share fence length, height, panel type, post type, coating, colour, gate requirement, drawings and delivery location.' },
    ],
    rfqPrompt: 'Request panel and post system pricing with fence height, running meters, panel type, post size, coating, colour, gate details and delivery location.',
    availableMarkets: gccAvailableMarkets,
  },
  {
    slug: 'high-security-gate-systems',
    name: 'High-Security Gate Systems',
    category: 'Gate Systems',
    primaryKeyword: 'high security gate systems supplier in Dubai UAE',
    secondaryKeywords: ['sliding gate system UAE', 'swing gate system Dubai', 'industrial security gates GCC', 'fence gate supplier UAE'],
    metaTitle: 'High-Security Gate Systems Supplier in Dubai UAE | SRK Fence',
    metaDescription: 'SRK Fence supplies high-security gate systems for industrial sites, utilities, warehouses, perimeter fencing and controlled access projects in UAE and GCC.',
    h1: 'High-Security Gate Systems Supplier in Dubai UAE',
    shortDescription: 'High-security gate systems for controlled access, industrial perimeters, boundary fencing and secure project entrances.',
    intro: 'SRK High-Security Gate Systems are designed for secure entry and exit points in perimeter fencing projects. Gate options can be reviewed for industrial sites, warehouses, utilities, commercial premises, boundary fencing and high-security access areas where strength, reliable operation and finish quality matter.',
    image: '/products/pdf-mapped/high-security-gate-systems/high-security-gate-systems-01.webp',
    imageGallery: [
      { src: '/products/pdf-mapped/high-security-gate-systems/high-security-gate-systems-01.webp', alt: 'High security gate systems for perimeter fencing and access control', caption: 'High-security gate system overview' },
      { src: '/products/pdf-mapped/high-security-gate-systems/high-security-gate-systems-02.webp', alt: 'Sliding swing and industrial gate system details for fencing projects', caption: 'Gate configuration, frame, panel and finish details' },
    ],
    specs: [
      { label: 'Product', value: 'High-Security Gate Systems' },
      { label: 'Gate options', value: 'Sliding gates, swing gates, pedestrian gates and project-specified gate systems' },
      { label: 'Applications', value: 'Industrial sites, warehouses, utilities, commercial properties, boundary fencing and controlled access areas' },
      { label: 'Frame material', value: 'Steel frame and fence-compatible infill options' },
      { label: 'Finish options', value: 'Galvanized, powder coated, PVC coated or custom finish' },
      { label: 'Customization', value: 'Size, opening type, infill, posts, hinges, locking, colour and project specification can be reviewed' },
    ],
    materialOptions: [
      { title: 'Sliding Gate', description: 'Sliding gate configuration for vehicle access areas and industrial entrances.', bullets: ['Suitable for wide openings', 'Compatible with perimeter fencing', 'Project-specific size support'] },
      { title: 'Swing Gate', description: 'Swing gate options for pedestrian, vehicle and site access-control points.', bullets: ['Single or double leaf discussion', 'Steel frame options', 'Fence-compatible infill choices'] },
      { title: 'Gate Hardware & Finish', description: 'Hardware and coating options can be matched to the gate duty and exposure conditions.', bullets: ['Hinges, locking and support posts', 'Galvanized and coated finishes', 'Custom colour options'] },
    ],
    keyFeatures: ['Designed for controlled access areas', 'Sliding and swing gate options', 'Suitable for industrial and high-security sites', 'Fence-compatible infill choices', 'Steel frame construction', 'Custom size and finish support', 'Compatible with posts and hardware', 'UAE and GCC project support'],
    applications: [
      { label: 'Industrial Site Security', href: '/applications/warehouses-logistic-centers' },
      { label: 'Boundary Security Fencing', href: '/applications/boundary-security-fencing' },
      { label: 'Utilities & Infrastructure', href: '/applications/critical-infrastructure-fencing' },
      { label: 'Commercial Properties', href: '/applications/commercial-fencing' },
    ],
    internalLinks: [
      { label: 'Gate Hinges and Locks', href: '/products/gate-hinges-and-locks' },
      { label: 'Fence Posts', href: '/products/fence-posts-gi-ms-pvc' },
      { label: 'Base Plates', href: '/products/base-plates' },
      { label: 'Request a Quote', href: '/contact' },
    ],
    faqs: [
      { question: 'What types of gate systems are available?', answer: 'Sliding, swing, pedestrian and project-specified gate systems can be reviewed based on opening size and application.' },
      { question: 'Can the gate finish match the fence?', answer: 'Yes, galvanized, powder coated, PVC coated and custom colours can be discussed to match the fencing system.' },
      { question: 'What information is needed for gate RFQ?', answer: 'Share opening width, height, gate type, infill, posts, finish, hardware and site location for quotation.' },
    ],
    rfqPrompt: 'Request high-security gate pricing with opening size, gate type, infill, frame, posts, coating, hardware and delivery location.',
    availableMarkets: gccAvailableMarkets,
  },
  {
    slug: 'post-and-railing-system',
    name: 'Post & Railing System',
    category: 'Fence Posts & Rail Systems',
    primaryKeyword: 'post and railing system supplier in Dubai UAE',
    secondaryKeywords: ['post rail fence UAE', 'railing fencing system Dubai', 'steel post rail system GCC', 'boundary railing fence supplier'],
    metaTitle: 'Post & Railing System Supplier in Dubai UAE | SRK Fence',
    metaDescription: 'SRK Fence supplies post and railing systems for boundaries, walkways, parks, commercial projects and perimeter fencing across UAE and GCC.',
    h1: 'Post & Railing System Supplier in Dubai UAE',
    shortDescription: 'Post and railing systems for boundaries, walkways, parks, commercial areas and organized perimeter fencing projects.',
    intro: 'SRK Post & Railing System provides a neat rail-based fencing solution for projects requiring strong posts, horizontal rails and clean boundary lines. It can be used for commercial properties, parks, walkways, residential communities, public areas and industrial support zones.',
    image: '/products/pdf-mapped/post-and-railing-system/post-and-railing-system-01.webp',
    imageGallery: [
      { src: '/products/pdf-mapped/post-and-railing-system/post-and-railing-system-01.webp', alt: 'Post and railing system for boundary fencing and walkways', caption: 'Post and railing system overview' },
      { src: '/products/pdf-mapped/post-and-railing-system/post-and-railing-system-02.webp', alt: 'Steel post rail fencing components and finish options', caption: 'Post, rail, fixing and finish options' },
    ],
    specs: [
      { label: 'Product', value: 'Post & Railing System' },
      { label: 'Applications', value: 'Boundaries, parks, walkways, commercial projects, residential communities and industrial areas' },
      { label: 'Components', value: 'Steel posts, rails, brackets, base plates and fixing accessories' },
      { label: 'Finish options', value: 'Galvanized, powder coated, painted or custom finish' },
      { label: 'Colour options', value: 'Green, black, grey, white and custom colours' },
      { label: 'Customization', value: 'Height, rail spacing, post size, colour, finish and fixing details can be reviewed' },
    ],
    materialOptions: [
      { title: 'Steel Posts', description: 'Post options for stable rail support and boundary line formation.', bullets: ['Round or square post discussion', 'Embedded or surface fixing support', 'Custom height options'] },
      { title: 'Horizontal Rails', description: 'Rail components for clean, organized boundary appearance.', bullets: ['Rail spacing options', 'Suitable for parks and walkways', 'Compatible with brackets and accessories'] },
      { title: 'Finish Options', description: 'Finish can be selected based on appearance and exposure requirement.', bullets: ['Galvanized or powder coated', 'Custom colours available', 'Outdoor durability support'] },
    ],
    keyFeatures: ['Clean post-and-rail appearance', 'Suitable for public, commercial and residential areas', 'Custom height and rail spacing support', 'Strong steel post system', 'Compatible with base plates and brackets', 'Multiple finish and colour options', 'Low-maintenance outdoor use', 'UAE and GCC quotation support'],
    applications: [
      { label: 'Parks & Public Areas', href: '/applications/parks-public-areas' },
      { label: 'Residential Communities', href: '/applications/residential-villa-fencing' },
      { label: 'Commercial Fencing', href: '/applications/commercial-fencing' },
      { label: 'Boundary Fencing', href: '/applications/boundary-security-fencing' },
    ],
    internalLinks: [
      { label: 'Fence Posts', href: '/products/fence-posts-gi-ms-pvc' },
      { label: 'Base Plates', href: '/products/base-plates' },
      { label: 'Clamps and Connectors', href: '/products/clamps-and-connectors' },
      { label: 'Request a Quote', href: '/contact' },
    ],
    faqs: [
      { question: 'Where is a post and railing system used?', answer: 'It is used for boundaries, parks, walkways, commercial areas, residential communities and organized perimeter projects.' },
      { question: 'Can height and rail spacing be customized?', answer: 'Yes, height, rail spacing, post size, finish and colour can be reviewed based on project requirements.' },
      { question: 'What is needed for quotation?', answer: 'Share total length, height, post type, rail spacing, finish, colour, fixing type and delivery location.' },
    ],
    rfqPrompt: 'Request post and railing system pricing with length, height, post size, rail spacing, finish, colour and location.',
    availableMarkets: gccAvailableMarkets,
  },
  {
    slug: 'pvc-decorative-fence',
    name: 'PVC Decorative Fence',
    category: 'PVC Fencing',
    primaryKeyword: 'PVC decorative fence supplier in Dubai UAE',
    secondaryKeywords: ['decorative PVC fence UAE', 'PVC garden fence Dubai', 'vinyl decorative fencing GCC', 'white PVC fence supplier'],
    metaTitle: 'PVC Decorative Fence Supplier in Dubai UAE | SRK Fence',
    metaDescription: 'SRK Fence supplies PVC decorative fencing for villas, gardens, patios, landscapes and residential boundary projects across UAE and GCC.',
    h1: 'PVC Decorative Fence Supplier in Dubai UAE',
    shortDescription: 'Decorative PVC fencing for villas, gardens, patios, landscapes, outdoor spaces and residential boundary projects.',
    intro: 'SRK PVC Decorative Fence is designed for projects that need an attractive, lightweight and low-maintenance boundary solution. It is suitable for villas, gardens, patios, landscapes, outdoor seating areas, parks and residential communities where clean aesthetics and easy upkeep are important.',
    image: '/products/pdf-mapped/pvc-decorative-fence/pvc-decorative-fence-01.webp',
    imageGallery: [
      { src: '/products/pdf-mapped/pvc-decorative-fence/pvc-decorative-fence-01.webp', alt: 'PVC decorative fence styles for villas gardens and landscapes', caption: 'PVC decorative fence style options' },
      { src: '/products/pdf-mapped/pvc-decorative-fence/pvc-decorative-fence-02.webp', alt: 'Decorative PVC fence panels for outdoor and garden boundaries', caption: 'Decorative PVC panels for garden and boundary use' },
      { src: '/products/pdf-mapped/pvc-decorative-fence/pvc-decorative-fence-03.webp', alt: 'PVC fence colours styles and residential applications', caption: 'PVC fence colours, layouts and residential applications' },
    ],
    specs: [
      { label: 'Product', value: 'PVC Decorative Fence' },
      { label: 'Applications', value: 'Villas, gardens, patios, landscapes, parks, outdoor seating areas and residential communities' },
      { label: 'Material', value: 'PVC / vinyl fencing material' },
      { label: 'Style options', value: 'Decorative panel, picket, privacy-style and project-specified layouts' },
      { label: 'Colours', value: 'White and project-specified colour options' },
      { label: 'Customization', value: 'Height, panel style, colour, post layout and project dimensions can be reviewed' },
    ],
    materialOptions: [
      { title: 'Decorative Panels', description: 'Attractive PVC panel styles for gardens and visible boundaries.', bullets: ['Clean decorative appearance', 'Suitable for villas and landscapes', 'Custom style discussion'] },
      { title: 'PVC Posts & Rails', description: 'Matching PVC post and rail components for neat system installation.', bullets: ['Coordinated post layout', 'Lightweight system', 'Low-maintenance material'] },
      { title: 'Colour & Style', description: 'Colour and design can be selected to suit landscape and project requirements.', bullets: ['White and custom colour options', 'Multiple style choices', 'Residential-friendly finish'] },
    ],
    keyFeatures: ['Decorative residential appearance', 'Low-maintenance PVC material', 'Suitable for villas, gardens and patios', 'Lightweight and clean finish', 'Multiple style options', 'Custom height and layout support', 'Weather-friendly outdoor use', 'UAE and GCC supply support'],
    applications: [
      { label: 'Villa Fencing', href: '/applications/residential-villa-fencing' },
      { label: 'Garden Fencing', href: '/applications/landscape-garden-fencing' },
      { label: 'Parks & Outdoor Areas', href: '/applications/parks-public-areas' },
      { label: 'Residential Communities', href: '/applications/residential-villa-fencing' },
    ],
    internalLinks: [
      { label: 'PVC Privacy Fence', href: '/products/pvc-privacy-fence' },
      { label: 'PVC Coated Chain Link Fence', href: '/products/pvc-coated-chain-link-fence' },
      { label: 'Colors & Coating Options', href: '/products/colors-and-coating-options' },
      { label: 'Request a Quote', href: '/contact' },
    ],
    faqs: [
      { question: 'Where is PVC decorative fencing used?', answer: 'PVC decorative fencing is used for villas, gardens, patios, landscapes, parks and residential boundary projects.' },
      { question: 'Can PVC fence style and height be customized?', answer: 'Yes, panel style, height, colour, post layout and project dimensions can be reviewed.' },
      { question: 'What details are required for RFQ?', answer: 'Share total length, height, style preference, colour, site photos or drawings and delivery location.' },
    ],
    rfqPrompt: 'Request PVC decorative fence pricing with total length, height, style, colour, post layout and delivery location.',
    availableMarkets: gccAvailableMarkets,
  },
  {
    slug: 'pvc-privacy-fence',
    name: 'PVC Privacy Fence',
    category: 'PVC Fencing',
    primaryKeyword: 'PVC privacy fence supplier in Dubai UAE',
    secondaryKeywords: ['PVC privacy panels UAE', 'vinyl privacy fence Dubai', 'villa privacy fence GCC', 'garden privacy fence supplier'],
    metaTitle: 'PVC Privacy Fence Supplier in Dubai UAE | SRK Fence',
    metaDescription: 'SRK Fence supplies PVC privacy fencing for villas, gardens, patios, pools, residential boundaries and outdoor spaces across UAE and GCC.',
    h1: 'PVC Privacy Fence Supplier in Dubai UAE',
    shortDescription: 'PVC privacy fencing for villas, gardens, patios, pools, residential boundaries and outdoor spaces requiring visual screening.',
    intro: 'SRK PVC Privacy Fence is suitable for residential and outdoor spaces where privacy, clean appearance and low maintenance are required. It can be used around villas, gardens, patios, pools, outdoor seating areas and residential boundary walls.',
    image: '/products/pdf-mapped/pvc-privacy-fence/pvc-privacy-fence-01.webp',
    imageGallery: [
      { src: '/products/pdf-mapped/pvc-privacy-fence/pvc-privacy-fence-01.webp', alt: 'PVC privacy fence panels for villas gardens patios and outdoor spaces', caption: 'PVC privacy fence panel options' },
      { src: '/products/pdf-mapped/pvc-privacy-fence/pvc-privacy-fence-02.webp', alt: 'PVC privacy fence styles colours and residential applications', caption: 'Privacy fence styles, colours and residential applications' },
    ],
    specs: [
      { label: 'Product', value: 'PVC Privacy Fence' },
      { label: 'Applications', value: 'Villas, gardens, patios, pools, outdoor spaces and residential boundaries' },
      { label: 'Material', value: 'PVC / vinyl privacy fencing material' },
      { label: 'Panel type', value: 'Privacy panels and project-specified designs' },
      { label: 'Colours', value: 'White and project-specified colour options' },
      { label: 'Customization', value: 'Height, panel style, colour, post layout and project dimensions can be reviewed' },
    ],
    materialOptions: [
      { title: 'Privacy Panels', description: 'PVC panels designed for visual screening and clean residential boundaries.', bullets: ['Privacy-focused panel layouts', 'Suitable for villas and patios', 'Clean low-maintenance finish'] },
      { title: 'Post & Rail System', description: 'Matching posts and rails support panel alignment and installation.', bullets: ['Coordinated system look', 'Custom layout support', 'Residential boundary use'] },
      { title: 'Style & Colour', description: 'Panel style and colour can be selected according to exterior design requirements.', bullets: ['White and custom colour options', 'Multiple panel styles', 'Project-specific dimensions'] },
    ],
    keyFeatures: ['Privacy-focused fencing system', 'Low-maintenance PVC material', 'Suitable for villas, gardens, patios and pools', 'Clean visual screening', 'Custom height and panel style support', 'Outdoor-friendly finish', 'Residential and community use', 'UAE and GCC supply support'],
    applications: [
      { label: 'Villa Fencing', href: '/applications/residential-villa-fencing' },
      { label: 'Garden & Landscape Fencing', href: '/applications/landscape-garden-fencing' },
      { label: 'Residential Communities', href: '/applications/residential-villa-fencing' },
      { label: 'Outdoor Privacy Areas', href: '/applications/residential-villa-fencing' },
    ],
    internalLinks: [
      { label: 'PVC Decorative Fence', href: '/products/pvc-decorative-fence' },
      { label: 'PVC Coated Chain Link Fence', href: '/products/pvc-coated-chain-link-fence' },
      { label: 'Fence Posts', href: '/products/fence-posts-gi-ms-pvc' },
      { label: 'Request a Quote', href: '/contact' },
    ],
    faqs: [
      { question: 'Where is PVC privacy fencing used?', answer: 'PVC privacy fencing is used for villas, gardens, patios, pools, residential boundaries and outdoor spaces requiring visual screening.' },
      { question: 'Can the height and design be customized?', answer: 'Yes, height, panel design, colour and post layout can be reviewed as per project requirement.' },
      { question: 'What details are needed for quotation?', answer: 'Share length, height, panel design, colour, site photos or drawings and delivery location.' },
    ],
    rfqPrompt: 'Request PVC privacy fence pricing with length, height, panel style, colour, post layout and delivery location.',
    availableMarkets: gccAvailableMarkets,
  },
  {
    slug: 'rectangle-mesh-fence',
    name: 'Rectangle Mesh Fence',
    category: 'Welded Mesh Fencing',
    primaryKeyword: 'rectangle mesh fence supplier in Dubai UAE',
    secondaryKeywords: ['rectangular mesh fence UAE', 'welded rectangle mesh Dubai', 'boundary mesh fence GCC', 'steel mesh panel supplier'],
    metaTitle: 'Rectangle Mesh Fence Supplier in Dubai UAE | SRK Fence',
    metaDescription: 'SRK Fence supplies rectangle mesh fencing for boundaries, industrial sites, residential areas, schools and commercial projects across UAE and GCC.',
    h1: 'Rectangle Mesh Fence Supplier in Dubai UAE',
    shortDescription: 'Rectangle mesh fencing for boundaries, industrial sites, residential communities, schools, parks and commercial perimeter projects.',
    intro: 'SRK Rectangle Mesh Fence is a welded mesh fencing option designed for visible boundary separation, stable perimeter lines and clean appearance. It can be used for industrial sites, commercial premises, residential communities, schools, parks and general boundary fencing.',
    image: '/products/pdf-mapped/rectangle-mesh-fence/rectangle-mesh-fence-01.webp',
    imageGallery: [
      { src: '/products/pdf-mapped/rectangle-mesh-fence/rectangle-mesh-fence-01.webp', alt: 'Rectangle mesh fence panels for boundary and perimeter fencing', caption: 'Rectangle mesh fence panel overview' },
      { src: '/products/pdf-mapped/rectangle-mesh-fence/rectangle-mesh-fence-02.webp', alt: 'Rectangular welded mesh fence coating and installation details', caption: 'Mesh, coating and fixing details for rectangle mesh fencing' },
    ],
    specs: [
      { label: 'Product', value: 'Rectangle Mesh Fence' },
      { label: 'Applications', value: 'Boundaries, industrial sites, residential communities, schools, parks and commercial perimeters' },
      { label: 'Mesh type', value: 'Rectangular welded mesh panel or project-specified mesh opening' },
      { label: 'Material', value: 'Steel wire / welded mesh panel options' },
      { label: 'Finish options', value: 'Galvanized, powder coated, PVC coated or project-specified finish' },
      { label: 'Customization', value: 'Mesh opening, wire diameter, panel size, post type, colour and coating can be reviewed' },
    ],
    materialOptions: [
      { title: 'Rectangular Mesh Panels', description: 'Welded mesh panel option with rectangular openings for boundary fencing.', bullets: ['Clean mesh pattern', 'Visible perimeter line', 'Custom panel size discussion'] },
      { title: 'Post & Fixing System', description: 'Compatible posts and fixing accessories for stable installation.', bullets: ['Post and clamp support', 'Fence height options', 'Gate compatibility'] },
      { title: 'Coated Finish', description: 'Finish options selected according to corrosion resistance and appearance needs.', bullets: ['Galvanized or coated finish', 'Custom colours available', 'Outdoor durability support'] },
    ],
    keyFeatures: ['Rectangular welded mesh appearance', 'Suitable for boundary and perimeter fencing', 'Custom mesh opening and panel size support', 'Galvanized and coated finish options', 'Compatible with posts and gates', 'Useful for industrial, commercial and residential projects', 'Clean visibility and airflow', 'UAE and GCC quotation support'],
    applications: [
      { label: 'Boundary Fencing', href: '/applications/boundary-security-fencing' },
      { label: 'Industrial Sites', href: '/applications/warehouses-logistic-centers' },
      { label: 'Schools & Parks', href: '/applications/school-playground-fencing' },
      { label: 'Residential Communities', href: '/applications/residential-villa-fencing' },
    ],
    internalLinks: [
      { label: 'Welded Mesh Fence', href: '/products/welded-mesh-fence' },
      { label: 'Fence Posts', href: '/products/fence-posts-gi-ms-pvc' },
      { label: 'Colors & Coating Options', href: '/products/colors-and-coating-options' },
      { label: 'Request a Quote', href: '/contact' },
    ],
    faqs: [
      { question: 'Where is rectangle mesh fencing used?', answer: 'Rectangle mesh fencing is used for boundaries, industrial sites, residential communities, schools, parks and commercial perimeters.' },
      { question: 'Can the mesh opening and panel size be customized?', answer: 'Yes, mesh opening, wire diameter, panel size, post type, colour and finish can be reviewed.' },
      { question: 'What details should be shared for RFQ?', answer: 'Share length, height, mesh opening, wire diameter, panel size, post type, coating, colour and delivery location.' },
    ],
    rfqPrompt: 'Request rectangle mesh fence pricing with running meters, height, mesh opening, wire diameter, panel size, coating and location.',
    availableMarkets: gccAvailableMarkets,
  },
  {
    slug: 'fasteners-bolts',
    name: 'Fasteners & Bolts',
    category: 'Fence Accessories',
    primaryKeyword: 'fasteners and bolts supplier in Dubai UAE',
    secondaryKeywords: ['fence bolts UAE', 'galvanized fasteners Dubai', 'fencing nuts bolts GCC', 'steel fasteners supplier UAE'],
    metaTitle: 'Fasteners & Bolts Supplier in Dubai UAE | SRK Fence',
    metaDescription: 'SRK Fence supplies fasteners, bolts, nuts, washers and fixing hardware for fence posts, gates, panels and accessories across UAE and GCC.',
    h1: 'Fasteners & Bolts Supplier in Dubai UAE',
    shortDescription: 'Fasteners, bolts, nuts, washers and fixing hardware for fence posts, gates, panels, clamps and accessories.',
    intro: 'SRK Fasteners & Bolts support fencing projects that require reliable fixing hardware for posts, panels, gates, clamps, brackets, base plates and accessories. Options can be reviewed based on material, finish, size, quantity and project exposure conditions.',
    image: '/products/pdf-mapped/fasteners-bolts/fasteners-bolts-01.webp',
    imageGallery: [
      { src: '/products/pdf-mapped/fasteners-bolts/fasteners-bolts-01.webp', alt: 'Fasteners bolts nuts washers and fixing hardware for fencing projects', caption: 'Fasteners, bolts, nuts and washers for fencing systems' },
      { src: '/products/pdf-mapped/fasteners-bolts/fasteners-bolts-02.webp', alt: 'Galvanized and coated fence fasteners and bolts options', caption: 'Galvanized and coated fixing hardware options' },
    ],
    specs: [
      { label: 'Product', value: 'Fasteners & Bolts' },
      { label: 'Applications', value: 'Fence posts, panels, gates, base plates, clamps, brackets and accessories' },
      { label: 'Types', value: 'Bolts, nuts, washers, anchors, screws and project-specified fasteners' },
      { label: 'Material options', value: 'M.S., G.I., stainless steel or project-specified material options' },
      { label: 'Finish options', value: 'Galvanized, zinc plated, powder coated or custom finish' },
      { label: 'Customization', value: 'Size, thread, length, finish, grade, quantity and packing can be reviewed' },
    ],
    materialOptions: [
      { title: 'Bolts & Nuts', description: 'Bolt and nut options for connecting fence components and hardware.', bullets: ['Multiple sizes and lengths', 'Suitable for posts and brackets', 'Project quantity support'] },
      { title: 'Washers & Anchors', description: 'Washers and anchor fixing options for base plates and surface-mounted hardware.', bullets: ['Base plate fixing support', 'Anchor options', 'Installation hardware supply'] },
      { title: 'Finish Options', description: 'Finish and material can be selected according to corrosion resistance and site exposure.', bullets: ['G.I. and stainless options', 'Zinc plated or coated finishes', 'Custom project specification'] },
    ],
    keyFeatures: ['Fixing hardware for fencing systems', 'Suitable for posts, panels, gates and base plates', 'Bolts, nuts, washers and anchors available', 'Galvanized, zinc plated and coated options', 'Custom size and quantity support', 'Useful for installation and repair projects', 'Compatible with clamps and accessories', 'UAE and GCC supply support'],
    applications: [
      { label: 'Fence Accessories', href: '/products/fence-accessories' },
      { label: 'Base Plates', href: '/products/base-plates' },
      { label: 'Gate Systems', href: '/products/high-security-gate-systems' },
      { label: 'Panel & Post Systems', href: '/products/panel-post-system' },
    ],
    internalLinks: [
      { label: 'Fence Accessories', href: '/products/fence-accessories' },
      { label: 'Base Plates', href: '/products/base-plates' },
      { label: 'Clamps and Connectors', href: '/products/clamps-and-connectors' },
      { label: 'Request a Quote', href: '/contact' },
    ],
    faqs: [
      { question: 'Where are fasteners and bolts used in fencing?', answer: 'They are used for fence posts, panels, gates, base plates, clamps, brackets and accessory fixing.' },
      { question: 'Can fastener size and finish be customized?', answer: 'Yes, size, thread, length, finish, grade, quantity and packing can be reviewed as per requirement.' },
      { question: 'What information is required for RFQ?', answer: 'Share fastener type, size, material, finish, grade, quantity, application and delivery location.' },
    ],
    rfqPrompt: 'Request fasteners and bolts pricing with type, size, material, finish, grade, quantity and delivery location.',
    availableMarkets: gccAvailableMarkets,
  }
);

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
  const aliases: Record<string, string> = {
    'anti-climb-358-security-fence': 'anti-climb-358-fence',
    'gate-hinges': 'gate-hinges-and-locks',
    'post-and-rail-system': 'post-and-railing-system',
    'gabion-wall': 'gabion-wall-and-fencing',
    'color-and-coating-options': 'colors-and-coating-options',
    'fasteners': 'fasteners-bolts',
    'bolts': 'fasteners-bolts',
  };
  const canonicalSlug = aliases[normalized] || normalized;
  return productSeoPages.find((product) => product.slug === canonicalSlug);
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
