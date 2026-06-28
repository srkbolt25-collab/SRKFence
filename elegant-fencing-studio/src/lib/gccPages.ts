import type { FaqItem, LinkItem, ProductSeoPage, CountryPage } from '@/lib/seo';
import { countryPages, productSeoPages } from '@/lib/seo';

export type GccProductPage = {
  slug: string;
  name: string;
  primaryBase: string;
  shortName: string;
  category: string;
  image: string;
  productHref: string;
  summary: string;
  specs: Array<{ label: string; value: string }>;
  applications: string[];
  benefits: string[];
  quoteChecklist: string[];
  relatedProductSlugs: string[];
};

export type GccApplicationPage = {
  slug: string;
  name: string;
  primaryBase: string;
  image: string;
  summary: string;
  riskProfile: string;
  recommendedProductSlugs: string[];
  projectRequirements: string[];
  buyerQuestions: FaqItem[];
};

function product(slug: string) {
  return productSeoPages.find((item) => item.slug === slug);
}

const fallbackImage = '/Applicationsnew/high-security-boundary-fencing-contractors-gcc.png';

export const gccProductPages: GccProductPage[] = [
  {
    slug: 'chain-link-fence',
    name: 'Chain Link Fence',
    shortName: 'chain link fence',
    primaryBase: 'chain link fence supplier',
    category: 'Wire Fencing',
    image: product('chain-link-fence')?.image || '/applicartion/heavy-duty-chain-link-fence-gcc-supplier.webp',
    productHref: '/products/chain-link-fence',
    summary:
      'Chain link fencing is a practical boundary and perimeter system for open sites that need visibility, airflow, controlled access and economical long-run coverage. It is commonly requested for construction boundaries, warehouses, farms, schools, sports areas, commercial compounds and industrial yards.',
    specs: [
      { label: 'Common height range', value: '1.2m to 3.0m with custom project heights available' },
      { label: 'Mesh opening', value: 'Commonly 50 x 50mm or 75 x 75mm diamond mesh' },
      { label: 'Wire options', value: 'GI wire or PVC coated galvanized wire based on exposure and finish requirement' },
      { label: 'Accessories', value: 'Posts, top rail, tension wire, tie wire, gates, clamps and fittings' },
    ],
    applications: ['Construction sites', 'Warehouses', 'Farms', 'Schools', 'Sports facilities', 'Industrial yards'],
    benefits: ['Economical perimeter coverage', 'Good visibility for supervision', 'Flexible heights and mesh options', 'Suitable for large boundary lengths'],
    quoteChecklist: ['Fence running meters', 'Required height', 'Mesh opening', 'Wire diameter', 'GI or PVC coating', 'Post and gate requirement'],
    relatedProductSlugs: ['gi-chain-link-fence', 'pvc-coated-chain-link-fence', 'barbed-wire', 'fence-accessories'],
  },
  {
    slug: 'welded-mesh-fence',
    name: 'Welded Mesh Fence',
    shortName: 'welded mesh fence',
    primaryBase: 'welded mesh fence supplier',
    category: 'Mesh Fencing',
    image: product('welded-mesh-fence')?.image || '/Applicationsnew/galvanized-welded-wire-mesh-fence-uae.png',
    productHref: '/products/welded-mesh-fence',
    summary:
      'Welded mesh fencing uses rigid welded wire panels to create a clean, strong and professional perimeter. It is suitable for commercial properties, warehouses, industrial sites, schools, parks, residential compounds and security boundaries where a more structured panel system is preferred.',
    specs: [
      { label: 'Panel type', value: 'Welded wire mesh panels with vertical and horizontal wires' },
      { label: 'Finish', value: 'Galvanized, PVC coated or powder coated by project requirement' },
      { label: 'Post system', value: 'Square, round or custom steel posts with clamps and connectors' },
      { label: 'Security options', value: 'Can be combined with gates, toppings and access-control requirements' },
    ],
    applications: ['Warehouses', 'Industrial facilities', 'Schools', 'Parks', 'Commercial properties', 'Data centers'],
    benefits: ['Neat appearance', 'Rigid panel construction', 'Good visibility', 'Suitable for security upgrades'],
    quoteChecklist: ['Panel height', 'Panel width', 'Wire diameter', 'Mesh opening', 'Coating', 'Post type', 'Gate schedule'],
    relatedProductSlugs: ['anti-climb-358-fence', 'steel-metal-fencing', 'fence-accessories', 'chain-link-fence'],
  },
  {
    slug: 'anti-climb-358-fence',
    name: 'Anti-Climb 358 Fence',
    shortName: 'anti-climb 358 fence',
    primaryBase: 'anti climb 358 fence supplier',
    category: 'High Security Fencing',
    image: product('anti-climb-358-fence')?.image || '/Applicationsnew/razor-barbed-wire-fence-high-security-gcc.png',
    productHref: '/products/anti-climb-358-fence',
    summary:
      'Anti-climb 358 fencing is selected for sites that need high-security perimeter control, clear visibility and resistance to climbing. The narrow mesh pattern helps reduce footholds and supports security applications such as data centers, utilities, warehouses, oil and gas facilities, borders and restricted compounds.',
    specs: [
      { label: 'Security profile', value: 'Narrow mesh openings designed to limit climbing and cutting access' },
      { label: 'Common use', value: 'Critical infrastructure, logistics yards, utilities and high-risk perimeters' },
      { label: 'Finish', value: 'Galvanized, powder coated or PVC coated depending on exposure' },
      { label: 'Optional additions', value: 'Razor wire, barbed wire, anti-climb toppings, secure gates and access control' },
    ],
    applications: ['Data centers', 'Oil and gas sites', 'Warehouses', 'Border security', 'Utilities', 'Industrial compounds'],
    benefits: ['High security deterrence', 'Strong visibility for CCTV', 'Professional perimeter finish', 'Suitable for critical assets'],
    quoteChecklist: ['Security level', 'Fence height', 'Panel specification', 'Post spacing', 'Coating', 'Gate/access-control details'],
    relatedProductSlugs: ['welded-mesh-fence', 'razor-wire', 'barbed-wire', 'fence-accessories'],
  },
  {
    slug: 'temporary-fence-panels',
    name: 'Temporary Fence Panels',
    shortName: 'temporary fence panels',
    primaryBase: 'temporary fence supplier',
    category: 'Temporary Fencing',
    image: product('temporary-fence-panels')?.image || '/applicartion/construction-site-temporary-fence-gcc.webp',
    productHref: '/products/temporary-fence-panels',
    summary:
      'Temporary fence panels are used for construction sites, events, road works, short-term site control, restricted access zones and project mobilization. They allow fast installation, relocation and removal while helping contractors manage site safety and public separation.',
    specs: [
      { label: 'System type', value: 'Portable panels with feet, clamps and optional bracing' },
      { label: 'Common use', value: 'Construction, maintenance, events, road works and restricted project zones' },
      { label: 'Installation', value: 'Designed for short-term deployment and easy relocation' },
      { label: 'Options', value: 'Mesh panels, hoarding panels, gates, shade/privacy screen and stabilizers' },
    ],
    applications: ['Construction sites', 'Events', 'Road works', 'Industrial maintenance', 'Temporary storage yards'],
    benefits: ['Fast site setup', 'Reusable panels', 'Supports safety control', 'Suitable for changing project layouts'],
    quoteChecklist: ['Site perimeter length', 'Panel height', 'Rental or supply', 'Access gates', 'Wind/privacy screen', 'Project duration'],
    relatedProductSlugs: ['eco-pvc-hoarding-fence', 'barbed-wire', 'chain-link-fence', 'fence-accessories'],
  },
  {
    slug: 'pvc-fence',
    name: 'PVC Fence',
    shortName: 'PVC fence',
    primaryBase: 'PVC fence supplier',
    category: 'PVC Fencing',
    image: product('pvc-coated-chain-link-fence')?.image || '/applicartion/eco-pvc-coated-fence-uae-supplier.webp',
    productHref: '/products/pvc-coated-chain-link-fence',
    summary:
      'PVC fencing is used where buyers need a cleaner visual finish, weather resistance, privacy or color-coated perimeter fencing. Depending on the project, SRK Fence can support PVC coated chain link fencing, PVC privacy fencing, decorative PVC fencing and PVC hoarding-style solutions.',
    specs: [
      { label: 'Product options', value: 'PVC coated chain link, privacy panels, decorative fencing and hoarding solutions' },
      { label: 'Finish', value: 'PVC coating or PVC panel finish with project-specific color options' },
      { label: 'Common use', value: 'Residential, commercial, schools, parks, construction hoarding and boundary fencing' },
      { label: 'Accessories', value: 'Posts, caps, clamps, gates and fixing accessories' },
    ],
    applications: ['Residential communities', 'Commercial properties', 'Schools', 'Parks', 'Construction sites', 'Privacy boundaries'],
    benefits: ['Cleaner appearance', 'Weather-resistant finish', 'Privacy options', 'Suitable for visual-sensitive areas'],
    quoteChecklist: ['Fence type', 'Privacy requirement', 'Height', 'Length', 'Color', 'Post type', 'Gate requirement'],
    relatedProductSlugs: ['pvc-coated-chain-link-fence', 'eco-pvc-hoarding-fence', 'chain-link-fence', 'fence-accessories'],
  },
  {
    slug: 'pvc-hoarding-fence',
    name: 'PVC Hoarding Fence',
    shortName: 'PVC hoarding fence',
    primaryBase: 'PVC hoarding fence supplier',
    category: 'Construction Hoarding',
    image: product('eco-pvc-hoarding-fence')?.image || '/applicartion/temporary-fence-hoarding-uae-construction-site.webp',
    productHref: '/products/eco-pvc-hoarding-fence',
    summary:
      'PVC hoarding fence is used for construction site boundaries, project screening, public safety separation and clean-looking temporary site perimeters. It is suitable for developers and contractors that need a neat hoarding system around active work areas.',
    specs: [
      { label: 'Use case', value: 'Construction site hoarding, project boundary screening and temporary visual barriers' },
      { label: 'Material options', value: 'PVC or PVC-style hoarding panels with steel post/support options' },
      { label: 'Project options', value: 'Branding, access gates, length-based supply and installation scope' },
      { label: 'Suitability', value: 'Urban construction sites, commercial developments and public-facing project areas' },
    ],
    applications: ['Construction sites', 'Commercial developments', 'Road works', 'Urban projects', 'Temporary project boundaries'],
    benefits: ['Professional site appearance', 'Supports public safety', 'Can hide active works', 'Suitable for branding and clean perimeters'],
    quoteChecklist: ['Project length', 'Panel height', 'Site photos', 'Gate locations', 'Wind exposure', 'Branding need', 'Installation scope'],
    relatedProductSlugs: ['temporary-fence-panels', 'pvc-coated-chain-link-fence', 'steel-metal-fencing', 'fence-accessories'],
  },
  {
    slug: 'barbed-wire',
    name: 'Barbed Wire',
    shortName: 'barbed wire',
    primaryBase: 'barbed wire supplier',
    category: 'Security Wire',
    image: product('barbed-wire')?.image || '/Whyusnew/barbed-wire-fencing-security-gcc-middle-east.png',
    productHref: '/products/barbed-wire',
    summary:
      'Barbed wire is used as a cost-effective deterrent for farms, industrial boundaries, construction sites, utility perimeters and general security fencing. It is often installed with chain link fencing, steel posts or boundary walls where additional access deterrence is needed.',
    specs: [
      { label: 'Material', value: 'Galvanized steel or coated options depending on project exposure' },
      { label: 'Application', value: 'Boundary topping, farm fencing, construction sites and industrial perimeters' },
      { label: 'Installation', value: 'Can be used with posts, brackets, chain link fence or boundary walls' },
      { label: 'Supply scope', value: 'Rolls, posts, brackets and fastening accessories by requirement' },
    ],
    applications: ['Farms', 'Industrial boundaries', 'Construction sites', 'Utility compounds', 'General security perimeters'],
    benefits: ['Economical deterrence', 'Compatible with many fence systems', 'Useful for large perimeters', 'Simple security upgrade'],
    quoteChecklist: ['Roll quantity', 'Wire type', 'Perimeter length', 'Fence/wall mounting', 'Post spacing', 'Delivery city'],
    relatedProductSlugs: ['chain-link-fence', 'razor-wire', 'temporary-fence-panels', 'fence-accessories'],
  },
  {
    slug: 'razor-wire',
    name: 'Razor Wire',
    shortName: 'razor wire',
    primaryBase: 'razor wire supplier',
    category: 'High Security Wire',
    image: product('razor-wire')?.image || '/Applicationsnew/razor-barbed-wire-fence-high-security-gcc.png',
    productHref: '/products/razor-wire',
    summary:
      'Razor wire is used for high-security deterrence on sensitive perimeters, industrial sites, utilities, data centers, oil and gas facilities, warehouses and border-security projects. It is commonly used as a topping with anti-climb fencing, welded mesh, walls or steel perimeter systems.',
    specs: [
      { label: 'Product type', value: 'Concertina razor wire, flat wrap or project-specific security wire options' },
      { label: 'Use case', value: 'High-security perimeters, restricted areas and critical infrastructure' },
      { label: 'Mounting', value: 'Fence topping, wall topping, brackets or integrated perimeter systems' },
      { label: 'Supply support', value: 'Roll quantities, brackets, posts and related installation accessories' },
    ],
    applications: ['Data centers', 'Oil and gas sites', 'Warehouses', 'Industrial compounds', 'Border and utility perimeters'],
    benefits: ['High deterrence', 'Suitable for restricted areas', 'Works with mesh and wall systems', 'Supports critical infrastructure security'],
    quoteChecklist: ['Perimeter length', 'Razor wire type', 'Mounting method', 'Security level', 'Fence/wall details', 'Delivery city'],
    relatedProductSlugs: ['anti-climb-358-fence', 'welded-mesh-fence', 'barbed-wire', 'fence-accessories'],
  },
];

export const gccApplicationPages: GccApplicationPage[] = [
  {
    slug: 'construction-site-fencing',
    name: 'Construction Site Fencing',
    primaryBase: 'construction site fencing',
    image: '/applicartion/construction-site-temporary-fence-gcc.webp',
    summary:
      'Construction site fencing helps contractors control access, separate the public from active work zones, protect materials and create a safer project boundary. The right system depends on site duration, public exposure, wind exposure, privacy requirements and gate access.',
    riskProfile: 'Construction projects usually need fast deployment, visible boundaries, stable panels, access gates, hoarding options and clear RFQ documentation for length, height and installation scope.',
    recommendedProductSlugs: ['temporary-fence-panels', 'pvc-hoarding-fence', 'chain-link-fence', 'barbed-wire'],
    projectRequirements: ['Site perimeter length', 'Project duration', 'Panel or hoarding height', 'Gate locations', 'Wind/privacy screen', 'Installation and removal scope'],
    buyerQuestions: [
      { question: 'What fence is used for construction sites?', answer: 'Temporary fence panels and PVC hoarding are commonly used for construction sites. Chain link fence may be used for longer-term project boundaries.' },
      { question: 'What details are needed for a construction fencing quote?', answer: 'Share running meters, height, gate points, project duration, site location, installation requirement and any hoarding or branding requirement.' },
    ],
  },
  {
    slug: 'warehouse-fencing',
    name: 'Warehouse Fencing',
    primaryBase: 'warehouse security fencing',
    image: '/Applicationsnew/high-security-boundary-fencing-contractors-gcc.png',
    summary:
      'Warehouse fencing protects inventory, loading areas, staff movement zones, yards and vehicle access points. Buyers usually need a practical balance between visibility, security level, vehicle gates, corrosion resistance and access-control planning.',
    riskProfile: 'Warehouse and logistics sites need fencing that supports daily operations, truck movement, controlled entry points and security visibility without slowing the site workflow.',
    recommendedProductSlugs: ['chain-link-fence', 'welded-mesh-fence', 'anti-climb-358-fence', 'steel-metal-fencing'],
    projectRequirements: ['Boundary length', 'Loading zone layout', 'Vehicle gates', 'Security level', 'Coating requirement', 'Access-control integration'],
    buyerQuestions: [
      { question: 'What is the best fencing for warehouse security?', answer: 'Chain link, welded mesh, anti-climb 358 fencing and steel fencing can all suit warehouse security depending on the risk level and visibility requirement.' },
      { question: 'Can warehouse fencing include gates?', answer: 'Yes, warehouse fencing can include pedestrian gates, vehicle gates, sliding gates, posts, locks and related accessories.' },
    ],
  },
  {
    slug: 'oil-gas-fencing',
    name: 'Oil & Gas Fencing',
    primaryBase: 'oil and gas security fencing',
    image: '/Applicationsnew/oil.jpeg',
    summary:
      'Oil and gas fencing is designed for refineries, gas plants, tank farms, utility areas, pipeline support facilities and other restricted energy-sector locations. These projects often need corrosion-resistant materials, high-security mesh, controlled gates and deterrent toppings.',
    riskProfile: 'Energy-sector sites typically require stronger perimeter deterrence, controlled access, high visibility for patrol/CCTV, corrosion resistance and documentation-led RFQ reviews.',
    recommendedProductSlugs: ['anti-climb-358-fence', 'welded-mesh-fence', 'razor-wire', 'steel-metal-fencing'],
    projectRequirements: ['Security classification', 'Perimeter length', 'Fence height', 'Coating system', 'Gate schedule', 'Site drawings and specification'],
    buyerQuestions: [
      { question: 'What fencing is used for oil and gas facilities?', answer: 'Anti-climb fencing, welded mesh fencing, steel fencing, razor wire and controlled gate systems are commonly reviewed for oil and gas perimeter security.' },
      { question: 'Why is coating important for oil and gas fencing?', answer: 'Coating helps protect steel fencing systems from outdoor exposure, humidity, dust and industrial environments.' },
    ],
  },
  {
    slug: 'data-center-security-fencing',
    name: 'Data Center Security Fencing',
    primaryBase: 'data center security fencing',
    image: '/Applicationsnew/data-center-security-fencing-concertina-barbed-wire-gcc.png',
    summary:
      'Data center security fencing protects critical IT infrastructure with a secure perimeter, clear visibility, controlled entry points and intrusion-deterrent design. Anti-climb mesh and high-security gates are commonly reviewed for these projects.',
    riskProfile: 'Data centers require high visibility, anti-climb characteristics, secure gate planning, perimeter zoning and compatibility with CCTV and access-control systems.',
    recommendedProductSlugs: ['anti-climb-358-fence', 'welded-mesh-fence', 'razor-wire', 'fence-accessories'],
    projectRequirements: ['Security level', 'Perimeter zoning', 'Fence height', 'Gate and access-control details', 'Camera visibility needs', 'Specification documents'],
    buyerQuestions: [
      { question: 'What fence is best for data center security?', answer: 'Anti-climb 358 fencing, welded mesh fencing, razor wire and high-security gates are often selected for data center perimeters.' },
      { question: 'Why use anti-climb fencing for data centers?', answer: 'Anti-climb mesh has narrow openings that reduce climbing and cutting access while maintaining visibility for security monitoring.' },
    ],
  },
  {
    slug: 'industrial-fencing',
    name: 'Industrial Fencing',
    primaryBase: 'industrial fencing',
    image: '/applicartion/industrial-fencing-solutions-uae-ksa-qatar.webp',
    summary:
      'Industrial fencing supports factories, workshops, production plants, storage yards and utility areas by creating durable boundaries and access-controlled perimeters. It should be selected by site exposure, security risk, traffic movement and maintenance needs.',
    riskProfile: 'Industrial sites need durable materials, predictable gate placement, corrosion-resistant finishes and practical layouts for staff, trucks and equipment movement.',
    recommendedProductSlugs: ['welded-mesh-fence', 'chain-link-fence', 'steel-metal-fencing', 'anti-climb-358-fence'],
    projectRequirements: ['Facility layout', 'Fence height', 'Access points', 'Material/coating', 'Security level', 'Installation phasing'],
    buyerQuestions: [
      { question: 'What fencing is used for industrial sites?', answer: 'Welded mesh, chain link, steel fencing and anti-climb fencing are common industrial options depending on risk level and site layout.' },
      { question: 'Can industrial fencing be customized?', answer: 'Yes, height, panel type, coating, posts, gates and accessories can be specified based on project requirements.' },
    ],
  },
  {
    slug: 'farm-fencing',
    name: 'Farm Fencing',
    primaryBase: 'farm fencing',
    image: '/Applicationsnew/marine-grade-fencing-ss316l-uae.png',
    summary:
      'Farm fencing and animal enclosure fencing is used to define boundaries, manage livestock areas, protect agricultural zones and control vehicle or visitor access. Product choice depends on animal type, terrain, length, gate placement and maintenance preference.',
    riskProfile: 'Agricultural sites need practical fencing with strong posts, durable wire, suitable height, easy gate access and reasonable long-run cost.',
    recommendedProductSlugs: ['chain-link-fence', 'barbed-wire', 'gi-chain-link-fence', 'fence-accessories'],
    projectRequirements: ['Boundary length', 'Animal type', 'Fence height', 'Post spacing', 'Gate locations', 'Terrain and ground conditions'],
    buyerQuestions: [
      { question: 'What fencing is used for farms?', answer: 'Chain link fencing, GI chain link fencing and barbed wire are commonly used for farms and animal enclosures.' },
      { question: 'What should be included in a farm fence RFQ?', answer: 'Include boundary length, animal type, required height, preferred wire/mesh, gate positions, site location and installation requirement.' },
    ],
  },
  {
    slug: 'boundary-security-fencing',
    name: 'Boundary Security Fencing',
    primaryBase: 'boundary security fencing',
    image: '/Applicationsnew/powder-coated-wire-mesh-fence-uae.png',
    summary:
      'Boundary security fencing is used for commercial compounds, infrastructure sites, warehouses, utilities and restricted areas where perimeter definition and deterrence are important. The recommended system depends on threat level, visibility, access control and site exposure.',
    riskProfile: 'Security boundaries need product selection based on intrusion risk, visibility, deterrent topping requirements, controlled entry points and long-term coating performance.',
    recommendedProductSlugs: ['anti-climb-358-fence', 'welded-mesh-fence', 'razor-wire', 'barbed-wire'],
    projectRequirements: ['Threat level', 'Fence height', 'Perimeter length', 'Gate schedule', 'Topping requirement', 'CCTV/access-control compatibility'],
    buyerQuestions: [
      { question: 'What is boundary security fencing?', answer: 'Boundary security fencing protects property lines, restricted areas and industrial perimeters using fencing systems selected by security level and site risk.' },
      { question: 'Which products are recommended for high-security boundaries?', answer: 'Anti-climb 358 fencing, welded mesh fencing, razor wire, barbed wire and secure gate systems are common high-security options.' },
    ],
  },
];

export function countryNameForKeyword(country: CountryPage) {
  if (country.country === 'UAE') return 'UAE';
  if (country.country === 'Saudi Arabia') return 'Saudi Arabia';
  return country.country;
}

export function getPriorityProductBySlug(slug: string) {
  return gccProductPages.find((item) => item.slug === slug);
}

export function getPriorityApplicationBySlug(slug: string) {
  return gccApplicationPages.find((item) => item.slug === slug);
}

export function getCountryProductPage(countrySlug: string, pageSlug: string) {
  const country = countryPages.find((item) => item.slug === countrySlug);
  const productPage = getPriorityProductBySlug(pageSlug);
  if (!country || !productPage) return null;
  return { country, productPage };
}

export function getCountryApplicationPage(countrySlug: string, pageSlug: string) {
  const country = countryPages.find((item) => item.slug === countrySlug);
  const applicationPage = getPriorityApplicationBySlug(pageSlug);
  if (!country || !applicationPage) return null;
  return { country, applicationPage };
}

export function getGccSegmentPage(countrySlug: string, pageSlug: string) {
  return getCountryProductPage(countrySlug, pageSlug) || getCountryApplicationPage(countrySlug, pageSlug);
}

export function getCountryProductUrl(countrySlug: string, productSlug: string) {
  return `/countries/${countrySlug}/${productSlug}`;
}

export function getCountryApplicationUrl(countrySlug: string, applicationSlug: string) {
  return `/countries/${countrySlug}/${applicationSlug}`;
}

export function getAllGccLandingPaths() {
  return [
    ...countryPages.map((country) => `/countries/${country.slug}`),
    ...countryPages.flatMap((country) => gccProductPages.map((item) => getCountryProductUrl(country.slug, item.slug))),
    ...countryPages.flatMap((country) => gccApplicationPages.map((item) => getCountryApplicationUrl(country.slug, item.slug))),
  ];
}

export function getRelatedProductLinks(productPage: GccProductPage): LinkItem[] {
  return productPage.relatedProductSlugs.map((slug) => {
    const product = productSeoPages.find((item) => item.slug === slug);
    const matrixProduct = gccProductPages.find((item) => item.slug === slug);
    return {
      label: product?.name || matrixProduct?.name || slug.replace(/-/g, ' '),
      href: product?.slug ? `/products/${product.slug}` : matrixProduct?.productHref || '/products',
    };
  });
}

export function getApplicationProductLinks(applicationPage: GccApplicationPage): LinkItem[] {
  return applicationPage.recommendedProductSlugs.map((slug) => {
    const productPage = gccProductPages.find((item) => item.slug === slug);
    const productSeo = productSeoPages.find((item) => item.slug === slug);
    return {
      label: productPage?.name || productSeo?.name || slug.replace(/-/g, ' '),
      href: productPage?.productHref || (productSeo ? `/products/${productSeo.slug}` : '/products'),
    };
  });
}

export function getCountryProductKeywords(country: CountryPage, page: GccProductPage) {
  const market = countryNameForKeyword(country);
  return [
    `${page.primaryBase} ${market}`,
    `${page.shortName} ${market}`,
    `${page.shortName} supplier ${market}`,
    `${page.shortName} quotation ${market}`,
    ...country.cities.slice(0, 3).map((city) => `${page.shortName} ${city}`),
  ];
}

export function getCountryApplicationKeywords(country: CountryPage, page: GccApplicationPage) {
  const market = countryNameForKeyword(country);
  return [
    `${page.primaryBase} ${market}`,
    `${page.name} ${market}`,
    `${page.name} supplier ${market}`,
    `${page.name} contractor ${market}`,
    ...country.cities.slice(0, 3).map((city) => `${page.primaryBase} ${city}`),
  ];
}

export function getCountryPageBanner(country: CountryPage, preferredImage?: string) {
  return preferredImage || fallbackImage;
}
