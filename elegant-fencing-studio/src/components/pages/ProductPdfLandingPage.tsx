import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import SiteLayout from '@/components/SiteLayout';
import StructuredData from '@/components/StructuredData';
import ProductHeroSlider from '@/components/pages/CoatingMaterialsHeroSlider';
import ProductPdfActionButtons from '@/components/pages/ProductPdfActionButtons';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { ProductSeoPage } from '@/lib/seo';
import { buildBreadcrumbSchema, buildFaqSchema, buildProductSchema } from '@/lib/seo';
import { getPdfProductContent, type PdfProductContent } from '@/lib/pdfProductContent';

type ProductPdfLandingPageProps = {
  product: ProductSeoPage;
};

type SeoFaq = {
  question: string;
  answer: string;
};

type GccCountry = {
  label: string;
  href: string;
  regionalNeed: string;
};

type ProductRegionalProfile = {
  regionalIntro: string;
  procurementNote: string;
  countryAngle: string;
  projectFit: string;
};

const gccCountries: GccCountry[] = [
  {
    label: 'UAE',
    href: '/countries/uae',
    regionalNeed: 'Dubai, Abu Dhabi, Sharjah and other UAE emirates where heat, dust, coastal exposure and fast project timelines often influence product selection',
  },
  {
    label: 'Bahrain',
    href: '/countries/bahrain',
    regionalNeed: 'Bahrain coastal, commercial and industrial sites where corrosion protection and clean finishing are important for long service life',
  },
  {
    label: 'Qatar',
    href: '/countries/qatar',
    regionalNeed: 'Qatar infrastructure, commercial, logistics and perimeter projects that require consistent product quality and project-specific specifications',
  },
  {
    label: 'Kuwait',
    href: '/countries/kuwait',
    regionalNeed: 'Kuwait outdoor, industrial and boundary applications where heat, dust and open-site exposure should be considered during specification',
  },
  {
    label: 'Saudi Arabia',
    href: '/countries/saudi-arabia',
    regionalNeed: 'Saudi Arabia construction, industrial, infrastructure and security projects that commonly require scalable supply and finish options',
  },
  {
    label: 'Iraq',
    href: '/countries/iraq',
    regionalNeed: 'Iraq utility, commercial, boundary and industrial projects where durable perimeter materials and practical installation compatibility matter',
  },
  {
    label: 'Oman',
    href: '/countries/oman',
    regionalNeed: 'Oman coastal, residential, commercial and infrastructure applications where weather resistance and appearance may both be required',
  },
  {
    label: 'Jordan',
    href: '/countries/jordan',
    regionalNeed: 'Jordan residential, commercial, industrial and public-area fencing works that require clear specifications and dependable finish options',
  },
];

const productRegionalProfiles: Record<string, ProductRegionalProfile> = {
  'fence-posts-gi-ms-pvc': {
    regionalIntro:
      'For GCC fencing projects, Fence Posts (G.I. / M.S. / PVC) should be selected according to the fence type, post profile, finish and installation method required on site. The product specifications highlight G.I., M.S. and PVC post options, making this page suitable for buyers comparing structural post choices for chain-link, welded mesh, privacy, decorative and security fencing.',
    procurementNote:
      'For quotation review, share the required material, profile, length, finish, colour, accessories and whether posts will be embedded or surface mounted.',
    countryAngle: 'post material, coating and installation method can be matched to local climate, fence type and site layout',
    projectFit: 'chain-link, welded mesh, privacy, decorative, boundary and security fencing projects',
  },
  'panel-post-system': {
    regionalIntro:
      'For GCC projects that need a complete modular fence line, Panel & Post System content should focus on welded mesh panels, supporting posts, secure fixing accessories and long-term outdoor performance. It is useful for buyers who want a ready framework rather than separate panel and post items.',
    procurementNote:
      'Share panel height, width, mesh configuration, post type, fixing method, coating and colour requirements so the system can be reviewed as a complete package.',
    countryAngle: 'panel configuration, post type and fixing method can be adjusted for perimeter layout, visibility and security requirement',
    projectFit: 'residential compounds, commercial properties, warehouses, schools, parks, sports facilities and infrastructure boundaries',
  },
  'high-security-gate-systems': {
    regionalIntro:
      'High-Security Gate Systems should be positioned for GCC sites where controlled access, heavy-duty construction and integration with perimeter fencing are important. The product specifications cover swing gates, sliding gates, single-leaf and double-leaf configurations with hinges, locks, posts and access-control compatibility.',
    procurementNote:
      'For accurate review, provide gate opening width, height, operation type, infill type, locking requirement, automation requirement and finish specification.',
    countryAngle: 'gate configuration, frame strength and locking arrangement can be selected around access control, vehicle movement and perimeter security needs',
    projectFit: 'industrial facilities, warehouses, airports, data centers, utility sites, government areas and restricted-access projects',
  },
  'post-and-railing-system': {
    regionalIntro:
      'The Chain-Link Fence Post & Rail System is relevant for GCC perimeter projects where the chain-link mesh needs additional support from vertical posts and top/bottom rails. The product specifications focus on framework stability, rail support, clamps, caps and fixing accessories.',
    procurementNote:
      'Share post diameter, railing size, finish, rail layout, accessory list and installation method to prepare a proper project quotation.',
    countryAngle: 'post, rail and accessory selection can be matched to chain-link height, mesh tension and perimeter layout',
    projectFit: 'industrial perimeters, commercial properties, construction sites, sports areas and residential or commercial boundaries',
  },
  'pvc-decorative-fence': {
    regionalIntro:
      'PVC Decorative Fence pages should target GCC buyers looking for attractive, low-maintenance fencing for villas, gardens, landscaped areas and commercial frontages. The product specifications include picket, rail, privacy, semi-privacy and decorative style options.',
    procurementNote:
      'For enquiries, share the required style, colour, height, width, privacy level and project area so the decorative layout can be reviewed.',
    countryAngle: 'style, colour and privacy level can be aligned with architecture, landscape design and outdoor exposure',
    projectFit: 'villas, gardens, parks, pool areas, patios, commercial properties and decorative screening applications',
  },
  'pvc-privacy-fence': {
    regionalIntro:
      'PVC Privacy Fence should be written for GCC residential, villa, garden and commercial buyers who need solid visual screening with a clean finish. The product specifications focus on privacy panels, PVC posts, rails, post caps and colour/profile options.',
    procurementNote:
      'Share the required privacy height, panel profile, colour, width, post layout and fixing/accessory requirements for quotation review.',
    countryAngle: 'panel profile, colour and height can be selected according to privacy requirement, property design and outdoor weather exposure',
    projectFit: 'residential properties, villas, gardens, pool areas, patios, commercial boundaries and landscape privacy enclosures',
  },
  'rectangle-mesh-fence': {
    regionalIntro:
      'Rectangle Mesh Fence should support GCC searches for welded wire fencing with clear visibility, clean appearance and perimeter security. The product specifications keep sizes flexible by project requirement and focus on wire diameter, mesh opening, panel height, posts and coating options.',
    procurementNote:
      'For RFQs, provide wire diameter, mesh opening, panel height/width, post type, coating, colour and project application.',
    countryAngle: 'wire diameter, mesh opening, panel size and coating can be selected around security level, visibility and outdoor exposure',
    projectFit: 'residential, commercial, industrial, school, park, sports, airport and infrastructure fencing projects',
  },
  'fasteners-bolts': {
    regionalIntro:
      'Fasteners / Bolts content should support GCC procurement teams ordering fixing components for chain-link fences, welded mesh fences, fence posts, rails, clamps, brackets and gates. The product specifications cover bolts, nuts, washers, screws, materials and finishes.',
    procurementNote:
      'Share bolt type, size, material, grade, finish, washer/nut requirement and application area for accurate matching.',
    countryAngle: 'material, finish and thread/size selection can be aligned with outdoor use, fence hardware and structural fixing requirement',
    projectFit: 'posts, rails, clamps, brackets, fence panels, gates, security fencing and perimeter fencing assemblies',
  },
  'anti-climb-358-fence': {
    regionalIntro:
      'Anti-Climb 358 Security Fence content should be tailored for GCC high-security perimeter projects that require tight mesh openings, visibility and anti-tamper fixing options. The product specifications highlight 358 welded mesh, security posts, fixings and optional security accessories.',
    procurementNote:
      'Share panel height, mesh configuration, post type, fixing system, coating, colour and any required security toppings or gates.',
    countryAngle: 'panel height, fixing system, coating and compatible security accessories can be reviewed around high-security perimeter requirements',
    projectFit: 'airports, utilities, industrial plants, data centers, government sites, transport infrastructure and logistics facilities',
  },
  'temporary-fence-panels': {
    regionalIntro:
      'Temporary Fence Panels content should focus on GCC sites that need portable, reusable and quickly installed fencing. The product specifications cover welded mesh, chain-link temporary fence, G.I. hoarding, ECO PVC fence, concrete bases and temporary connections.',
    procurementNote:
      'Share fence type, panel size, mesh opening, wire diameter, base requirement, coating and project duration for quotation review.',
    countryAngle: 'panel type, base support and connection method can be selected for temporary site control, relocation and outdoor durability',
    projectFit: 'construction sites, road works, events, restricted areas, storage yards, crowd management and temporary security perimeters',
  },
  'barbed-wire': {
    regionalIntro:
      'Barbed Wire (GI / PVC) should target GCC boundary and perimeter projects that require an added deterrent above or along existing fencing. The product specifications cover GI and PVC-coated options, barb spacing, 2-point/4-point configuration, coils and installation positions.',
    procurementNote:
      'For quotations, share material, finish, barb configuration, coil/roll quantity, colour and the fence or wall where it will be used.',
    countryAngle: 'GI or PVC-coated finish, barb configuration and installation position can be selected around deterrent level and outdoor exposure',
    projectFit: 'industrial boundaries, warehouses, agricultural properties, construction sites, utility areas, perimeter walls and security compounds',
  },
  'razor-wire': {
    regionalIntro:
      'Razor Wire content should focus on GCC high-security boundary projects where a strong perimeter deterrent is required. The product specifications cover G.I. and S.S. materials, 50 cm, 75 cm and 100 cm coil sizes, blade profile and fence/wall/gate installation options.',
    procurementNote:
      'Share material, coil diameter, quantity, blade profile requirement, installation location and project security level for review.',
    countryAngle: 'material, coil diameter and installation arrangement can be matched to perimeter security level and exposure conditions',
    projectFit: 'industrial facilities, data centers, airports, utilities, restricted-access sites, boundary walls and high-security fencing',
  },
  'base-plates': {
    regionalIntro:
      'Base Plates content should support GCC buyers specifying secure post-to-ground fixing for fence posts, gate posts, railing posts and steel structures. The product specifications include square, round, socket, U-bracket, gusseted and custom base plate options.',
    procurementNote:
      'Share post/tube size, base plate shape, thickness, hole pattern, socket diameter, anchor type and finish requirement.',
    countryAngle: 'plate shape, hole pattern, thickness and finish can be matched to post type, load requirement and installation surface',
    projectFit: 'chain-link fencing, welded mesh fencing, gate posts, railing systems, steel gates and perimeter fencing projects',
  },
  'fence-accessories': {
    regionalIntro:
      'Fence Accessories content should serve GCC project teams looking for the supporting hardware needed to assemble and maintain chain-link and welded mesh fence systems. The product specifications cover posts, rails, clamps, tension bars, post caps, bolts, nuts, washers and other fixing accessories.',
    procurementNote:
      'For RFQs, share the fence type, accessory list, finish, quantity, colour and any required drawings or fixing details.',
    countryAngle: 'accessory selection can be matched to chain-link or welded mesh systems, fixing method and required finish consistency',
    projectFit: 'new fence installation, maintenance, repairs, industrial fencing, sports areas, agricultural boundaries and infrastructure projects',
  },
  'colors-and-coating-options': {
    regionalIntro:
      'Colors & Coating Options content should help GCC buyers compare finish systems such as electro galvanized, hot-dip galvanized, PVC coated and powder coated surfaces. The product specifications explain where each option is best suited, including indoor, outdoor, security, decorative and architectural applications.',
    procurementNote:
      'Share the product type, exposure condition, preferred coating, colour/RAL requirement, thickness expectation and project application.',
    countryAngle: 'coating and colour selection can be matched to corrosion protection, appearance, UV exposure and project environment',
    projectFit: 'chain-link, welded mesh, security fencing, decorative fencing, gates, commercial projects and outdoor boundary systems',
  },
  'coating-materials': {
    regionalIntro:
      'Coating Materials content should target GCC buyers sourcing protective coating solutions for fencing products and steel components. The product specifications include PVC coating, PE coating, powder coating, zinc coating, hot-dip galvanizing and green powder coating.',
    procurementNote:
      'For quotation, share coating type, product being coated, colour, thickness, finish, application method and project exposure conditions.',
    countryAngle: 'coating type, thickness, finish and colour can be selected around corrosion resistance, weather exposure and appearance requirements',
    projectFit: 'chain-link fences, welded mesh, fence wires, steel pipes, fence posts, gates, railings and steel structures',
  },
  'gabion-wall-and-fencing': {
    regionalIntro:
      'Gabion Wall & Fencing content should be written for GCC projects requiring retaining support, boundary walls, natural stone appearance or fencing above a gabion base. The product specifications cover welded or woven gabion mesh, galvanized/PVC finish, stone filling and optional fencing above the gabion.',
    procurementNote:
      'Share gabion dimensions, mesh type, wire diameter, mesh opening, stone filling requirement, finish and whether fencing is required above the gabion wall.',
    countryAngle: 'gabion mesh, stone filling, finish and fencing-above-gabion options can be matched to retaining, boundary or landscape requirements',
    projectFit: 'retaining walls, boundary walls, landscape projects, roads, commercial developments, residential projects and erosion-control areas',
  },
  'clamps-and-connectors': {
    regionalIntro:
      'Clamps & Connectors content should support GCC buyers ordering connection hardware for chain-link and welded mesh fence assembly. The product specifications cover post clamps, rail clamps, U-bolt clamps, saddle clamps, corner/T/cross connectors, brackets and customized connectors.',
    procurementNote:
      'Share connection type, compatible post/rail profile, hole pattern, finish, size, thickness and fastener requirements.',
    countryAngle: 'connector type, compatible post/rail size and finish can be matched to mechanical fixing and fence system layout',
    projectFit: 'post-to-mesh, post-to-rail, rail-to-rail, panel-to-post, corner and T-connection applications',
  },
  'gate-hinges-and-locks': {
    regionalIntro:
      'Gate Hinges content should target GCC projects where smooth gate movement, secure gate alignment and durable hardware are required for fence gates. The product specifications cover butt hinges, heavy-duty hinges, weld-on hinges, adjustable hinges, T-hinges, strap hinges, pivot hinges and spring hinges.',
    procurementNote:
      'Share hinge type, gate weight/size, material, mounting method, pin type, finish and adjustment requirement for proper review.',
    countryAngle: 'hinge design, mounting method, load capacity and finish can be matched to gate type and outdoor service requirement',
    projectFit: 'chain-link gates, welded mesh gates, security gates, industrial gates, compound gates, garden gates and commercial entrances',
  },
};

const gccCountryMarketCopy: Record<string, Record<string, string>> = {
  "fence-posts-gi-ms-pvc": {
    "UAE": "UAE buyers can specify G.I. posts for exposed chain-link and welded mesh runs, while PVC or coated post finishes suit villa boundaries, gardens and coastal projects where appearance matters.",
    "Bahrain": "For Bahrain, galvanized or PVC-finished posts help support fence lines in coastal environments, especially where caps, clamps and rail accessories must match the selected system.",
    "Qatar": "Qatar projects can use round, square or rectangular posts for compound fencing, sports areas and logistics sites where profile consistency and neat installation are important.",
    "Kuwait": "In Kuwait, post thickness, finish and embedded or surface-mounted installation should be selected around open-site exposure, fence height and long outdoor service.",
    "Saudi Arabia": "Saudi Arabia enquiries often need scalable post supply for industrial, infrastructure and boundary projects, with G.I., M.S. or PVC posts matched to the fence type and BOQ.",
    "Iraq": "Iraq projects can use these posts for practical perimeter upgrades where chain-link, welded mesh, privacy or security fencing needs durable structural support.",
    "Oman": "Oman sites can choose galvanized or PVC post finishes for coastal towns, residential boundaries and commercial perimeters where weather resistance and clean presentation are both useful.",
    "Jordan": "Jordan buyers can specify custom post profiles, lengths and finishes for residential, agricultural, commercial and institutional boundaries that need reliable fixing accessories."
  },
  "panel-post-system": {
    "UAE": "In the UAE, panel and post systems suit ready perimeter lines for compounds, schools, warehouses and commercial plots where fast installation and a clean welded mesh look are needed.",
    "Bahrain": "Bahrain projects can use modular welded panels with matching posts and clamps for coastal commercial sites that need a tidy boundary with durable coated finishes.",
    "Qatar": "Qatar buyers can specify panel height, mesh configuration and post fixing method for infrastructure, sports and logistics fencing where uniform appearance matters across long runs.",
    "Kuwait": "For Kuwait, hot-dip galvanized, PVC coated or powder coated panel systems can be reviewed for outdoor boundaries exposed to dust, heat and open site conditions.",
    "Saudi Arabia": "Saudi Arabia developments can use panel and post systems for large boundary packages where welded mesh panels, posts and anti-tamper fixings need to be supplied as one system.",
    "Iraq": "Iraq enquiries can use this system for warehouses, utilities and service facilities where stable posts, secure brackets and clear visibility are preferred over closed fencing.",
    "Oman": "Oman projects can specify the system for parks, residential communities and commercial fronts where corrosion protection and a neat modular finish are important.",
    "Jordan": "Jordan buyers can use panel and post fencing for schools, public spaces, compounds and industrial boundaries with post installation selected as concrete foundation or base plate."
  },
  "high-security-gate-systems": {
    "UAE": "UAE projects can match swing or sliding high-security gates with perimeter fencing for warehouses, utilities and controlled vehicle entrances in Dubai, Abu Dhabi and Sharjah.",
    "Bahrain": "Bahrain sites can use heavy-duty gate frames, hinges and locking systems for industrial yards and commercial compounds where coastal durability is a key concern.",
    "Qatar": "Qatar buyers can review single-leaf, double-leaf or sliding gate configurations for logistics, infrastructure and restricted access areas that need controlled movement.",
    "Kuwait": "For Kuwait, gate finish, post section and hinge/locking selection should be planned around heat exposure, frequent use and the required vehicle opening width.",
    "Saudi Arabia": "Saudi Arabia projects often need larger gate packages for industrial zones, utilities and infrastructure sites, with manual or automated operation selected from the project scope.",
    "Iraq": "Iraq enquiries can specify robust gates for secure yards, warehouses and service facilities where heavy-duty posts and reliable locks are more important than decorative detailing.",
    "Oman": "Oman sites can use high-security gates for coastal industrial premises, service yards and restricted entrances with corrosion-protective finish options.",
    "Jordan": "Jordan buyers can review gate size, infill type, lock system and finish for compounds, institutions and commercial facilities that need controlled perimeter access."
  },
  "post-and-railing-system": {
    "UAE": "UAE chain-link projects can use top and bottom rails to keep mesh tension neat across long perimeter runs, especially around compounds, sports areas and commercial sites.",
    "Bahrain": "Bahrain buyers can specify G.I. or PVC-coated post-and-rail frameworks where coastal exposure calls for durable rails, caps, clamps and matching accessories.",
    "Qatar": "Qatar projects can use this system for chain-link fencing at infrastructure, storage and recreation sites where rail alignment and mesh stability need to be consistent.",
    "Kuwait": "For Kuwait, rail support can help maintain chain-link shape on open boundaries exposed to wind, dust and regular site activity.",
    "Saudi Arabia": "Saudi Arabia enquiries can use post-and-rail systems for large industrial or construction perimeters where chain-link mesh requires a stronger supporting framework.",
    "Iraq": "Iraq sites can choose this framework for utility, warehouse and temporary-to-permanent boundaries where compatible clamps and rails simplify maintenance.",
    "Oman": "Oman projects can specify PVC-coated green or black rails for outdoor chain-link fencing where appearance and weather resistance both matter.",
    "Jordan": "Jordan buyers can review post spacing, rail diameter, finish and accessories for residential, sports, industrial and commercial chain-link fence lines."
  },
  "pvc-decorative-fence": {
    "UAE": "UAE villa, garden and pool projects can use PVC decorative fencing where a lighter visual boundary and low-maintenance finish are preferred over metal fencing.",
    "Bahrain": "Bahrain properties can use PVC picket, rail or semi-privacy styles for landscaped areas where moisture resistance and easy cleaning are valuable.",
    "Qatar": "Qatar buyers can select decorative PVC styles for parks, villas and commercial frontages where a clean architectural look is required.",
    "Kuwait": "For Kuwait, colour choice, fence height and privacy level should be reviewed for residential and outdoor leisure areas exposed to sun and dust.",
    "Saudi Arabia": "Saudi Arabia residential communities and commercial landscapes can specify PVC decorative profiles where uniform appearance and low maintenance are priorities.",
    "Iraq": "Iraq enquiries can use PVC decorative fence for gardens, villas and boundary screening where a non-corrosive material and simple upkeep are required.",
    "Oman": "Oman coastal and landscaped properties can use PVC decorative styles for patios, parks and villa boundaries that need a clean finish without regular painting.",
    "Jordan": "Jordan buyers can select picket, rail, lattice or semi-privacy configurations for residential gardens, parks and public-area decorative screening."
  },
  "pvc-privacy-fence": {
    "UAE": "UAE villas, pool areas and patios can use PVC privacy panels for solid visual screening with a smooth finish and low maintenance.",
    "Bahrain": "Bahrain buyers can specify PVC privacy fencing for coastal residential plots where rot, moisture and corrosion resistance are useful advantages.",
    "Qatar": "Qatar projects can use solid PVC panels around villas, compounds and leisure spaces where privacy and a modern appearance are required.",
    "Kuwait": "For Kuwait, panel height, colour and post layout should be matched to privacy needs and outdoor exposure across residential or commercial boundaries.",
    "Saudi Arabia": "Saudi Arabia residential communities, gardens and pool zones can specify PVC privacy fencing where visual screening and easy upkeep are key requirements.",
    "Iraq": "Iraq enquiries can use PVC privacy systems for properties that need a continuous barrier without the corrosion concerns of exposed metal panels.",
    "Oman": "Oman sites can choose PVC privacy panels for coastal homes, patios and landscaped areas where weather resistance and a clean look are both needed.",
    "Jordan": "Jordan buyers can review panel profile, height, colour and fixing details for villas, gardens, recreational facilities and landscape privacy enclosures."
  },
  "rectangle-mesh-fence": {
    "UAE": "UAE projects can use rectangle mesh fencing for schools, parks, compounds and commercial sites where visibility, security and a tidy welded panel finish are required.",
    "Bahrain": "Bahrain buyers can select coated rectangular mesh panels for coastal boundaries that need corrosion protection without blocking site visibility.",
    "Qatar": "Qatar infrastructure, sport and logistics sites can specify mesh opening, wire diameter and panel height according to the required strength and visibility.",
    "Kuwait": "For Kuwait, galvanized, PVC-coated or powder-coated rectangle mesh can be reviewed for outdoor sites exposed to heat, dust and open perimeter conditions.",
    "Saudi Arabia": "Saudi Arabia enquiries can use rectangle mesh fence for large residential, commercial and industrial boundaries where consistent panel dimensions are important.",
    "Iraq": "Iraq projects can use welded rectangle mesh for practical security perimeters around warehouses, utility areas and commercial compounds.",
    "Oman": "Oman sites can specify rectangle mesh fencing for parks, residential communities and infrastructure projects that need airflow, visibility and weather resistance.",
    "Jordan": "Jordan buyers can select post type, coating and colour for rectangle mesh fencing at schools, public areas, sports facilities and commercial boundaries."
  },
  "fasteners-bolts": {
    "UAE": "UAE contractors can source fence bolts, nuts, washers and screws for chain-link, welded mesh, posts, clamps and gate assemblies on fast-moving site work.",
    "Bahrain": "Bahrain projects can specify galvanized or stainless fasteners where coastal moisture makes corrosion resistance important for fence hardware.",
    "Qatar": "Qatar buyers can match bolt type, thread, washer and finish with fence panels, brackets and gate hardware for consistent installation quality.",
    "Kuwait": "For Kuwait, fastener material and finish should be selected for outdoor exposure, heavy-duty fixing and repeated maintenance access.",
    "Saudi Arabia": "Saudi Arabia projects often require fastener packages for large fencing BOQs, including bolts, nuts, washers and self-drilling screws in project-specified grades.",
    "Iraq": "Iraq enquiries can use these fasteners for fence repairs, new perimeters and gate installations where practical availability and durable finishes matter.",
    "Oman": "Oman buyers can specify galvanized, zinc plated or stainless options for fence and gate fixings used in coastal or outdoor sites.",
    "Jordan": "Jordan projects can review bolt size, grade, thread and finish for posts, rails, clamps, brackets, panels and perimeter gate assemblies."
  },
  "anti-climb-358-fence": {
    "UAE": "UAE high-security sites can use 358 anti-climb fencing for utilities, data centers, airports and compounds where visibility and anti-tamper fixing are important.",
    "Bahrain": "Bahrain buyers can specify 358 welded mesh with protective coatings for coastal security perimeters that need a strong barrier and clear CCTV visibility.",
    "Qatar": "Qatar infrastructure and restricted-access projects can review panel height, security posts and fixing systems for anti-climb perimeter control.",
    "Kuwait": "For Kuwait, 358 mesh fencing can be selected where a tight mesh opening, durable coating and outdoor weather performance are required.",
    "Saudi Arabia": "Saudi Arabia industrial, utility and government projects can use anti-climb 358 systems for long secure perimeters with optional security toppings.",
    "Iraq": "Iraq enquiries can specify 358 fencing for utility yards, warehouses and restricted compounds where anti-cut and anti-tamper properties are priority.",
    "Oman": "Oman sites can use coated 358 panels for ports, service yards and secure perimeters that require visibility and weather resistance.",
    "Jordan": "Jordan buyers can select mesh configuration, colour, post type and security fixings for correctional, utility, commercial or institutional perimeters."
  },
  "temporary-fence-panels": {
    "UAE": "UAE contractors can use temporary fence panels for construction sites, events and restricted areas where panels must be installed, moved and reused quickly.",
    "Bahrain": "Bahrain projects can specify temporary fencing with concrete bases for short-term site control in commercial, roadwork and event environments.",
    "Qatar": "Qatar buyers can select welded mesh, chain-link, G.I. hoarding or ECO PVC temporary fence depending on project visibility and enclosure needs.",
    "Kuwait": "For Kuwait, freestanding temporary systems should be reviewed with base support, panel connection and coating suited to open outdoor sites.",
    "Saudi Arabia": "Saudi Arabia construction and infrastructure packages can use reusable temporary panels for phased site boundaries, material yards and access control.",
    "Iraq": "Iraq enquiries can use temporary fence panels for work zones, storage areas and restricted sites where quick relocation is needed.",
    "Oman": "Oman projects can specify temporary panels for events, road works and coastal construction sites where portable fencing and durable finish are useful.",
    "Jordan": "Jordan buyers can review panel size, mesh opening, base type and clamps for temporary security around construction, festivals and public works."
  },
  "barbed-wire": {
    "UAE": "UAE industrial yards and boundary walls can use GI or PVC-coated barbed wire as an added deterrent above chain-link or welded mesh fencing.",
    "Bahrain": "Bahrain buyers can specify PVC-coated green or galvanized barbed wire where coastal exposure and visual match with existing fencing matter.",
    "Qatar": "Qatar projects can select barb spacing, roll quantity and 2-point or 4-point configuration for utility, storage and perimeter applications.",
    "Kuwait": "For Kuwait, finish and barb configuration should be selected around outdoor exposure, fence height and the deterrent level required on site.",
    "Saudi Arabia": "Saudi Arabia farms, industrial plots and security perimeters can use barbed wire in bulk rolls for long boundary lines and fence-top applications.",
    "Iraq": "Iraq enquiries can use barbed wire for warehouses, agricultural land, construction sites and utility boundaries where practical perimeter deterrence is needed.",
    "Oman": "Oman sites can choose GI or PVC barbed wire for boundary walls, security arms and chain-link fences in coastal or inland conditions.",
    "Jordan": "Jordan buyers can review roll packing, material, colour and installation position for agricultural, commercial and perimeter wall applications."
  },
  "razor-wire": {
    "UAE": "UAE high-security sites can use G.I. or S.S. razor wire above fences, walls and gates where a stronger perimeter deterrent is required.",
    "Bahrain": "Bahrain buyers can specify material and coil diameter with corrosion resistance in mind for coastal industrial or restricted-access sites.",
    "Qatar": "Qatar projects can select 50 cm, 75 cm or 100 cm concertina coils for utilities, logistics areas and secure infrastructure boundaries.",
    "Kuwait": "For Kuwait, coil size, blade profile and installation arrangement should be matched to security level and outdoor exposure.",
    "Saudi Arabia": "Saudi Arabia industrial, utility and government perimeters can use razor wire with security arms or fence-top installations for added protection.",
    "Iraq": "Iraq enquiries can use razor wire for restricted yards, boundary walls and high-security fencing where durable material and clear coil sizing are needed.",
    "Oman": "Oman sites can review G.I. or stainless steel razor wire for coastal security applications where corrosion performance is important.",
    "Jordan": "Jordan buyers can specify coil diameter, material and installation location for secure compounds, utilities and perimeter wall upgrades."
  },
  "base-plates": {
    "UAE": "UAE projects can use base plates for bolt-down fence posts, gate posts and railing posts where surface-mounted installation is preferred over embedding.",
    "Bahrain": "Bahrain buyers can select galvanized or green powder-coated base plates for coastal fence and gate posts that need secure anchoring.",
    "Qatar": "Qatar sites can specify square, round, socket or custom base plates for modular fence lines, gates and steel support structures.",
    "Kuwait": "For Kuwait, plate thickness, bolt-hole pattern and finish should be reviewed for heat-exposed outdoor posts and heavy-duty boundary work.",
    "Saudi Arabia": "Saudi Arabia infrastructure and industrial projects can use custom base plates for long fence runs, gate supports and steel structure fixing.",
    "Iraq": "Iraq enquiries can use base plates for retrofit post installation, gate posts and railing systems where bolted fixing is practical.",
    "Oman": "Oman projects can choose galvanized or hot-dip galvanized plates for coastal commercial and residential fencing with reliable anchor fixing.",
    "Jordan": "Jordan buyers can review shape, thickness, socket diameter and hole pattern for fence posts, gate posts and perimeter railing supports."
  },
  "gate-hinges-and-locks": {
    "UAE": "UAE gate projects can use heavy-duty, weld-on or adjustable hinges for chain-link, welded mesh and steel gates that need smooth daily operation.",
    "Bahrain": "Bahrain buyers can select G.I., SS 304 or coated hinges for coastal gates where corrosion resistance and reliable pin movement matter.",
    "Qatar": "Qatar sites can match hinge type, mounting method and load capacity to pedestrian gates, compound gates and industrial access points.",
    "Kuwait": "For Kuwait, hinge finish, pin type and adjustment requirement should be selected around gate size, outdoor exposure and usage frequency.",
    "Saudi Arabia": "Saudi Arabia industrial and commercial projects can review heavy-duty hinges for wider gates, security gates and compound entrances.",
    "Iraq": "Iraq enquiries can use robust hinges for welded mesh, chain-link and steel gates where simple maintenance and strong construction are needed.",
    "Oman": "Oman coastal projects can specify stainless or galvanized hinge options for garden, compound and industrial gates exposed to weather.",
    "Jordan": "Jordan buyers can review weld-on, bolt-on, adjustable and strap hinge options for security, industrial, compound and garden gates."
  },
  "fence-accessories": {
    "UAE": "UAE contractors can source matching posts, rails, clamps, caps, bolts and fixing accessories for chain-link and welded mesh installations from one product group.",
    "Bahrain": "Bahrain buyers can specify G.I. or PVC-coated accessories for coastal fence lines where clamps and fixings need to match the main fence finish.",
    "Qatar": "Qatar projects can organise accessory packages for panels, posts, rails and mesh fixing so installation teams receive compatible components.",
    "Kuwait": "For Kuwait, accessory finish and sizing should be matched to outdoor exposure, fence type and maintenance requirements.",
    "Saudi Arabia": "Saudi Arabia fencing packages can include posts, rails, fasteners, tension bars and caps for large commercial, industrial and infrastructure BOQs.",
    "Iraq": "Iraq enquiries can use fence accessories for new installations and repairs where practical component matching is important.",
    "Oman": "Oman sites can choose galvanized or PVC-coated accessories for chain-link and welded mesh fencing in residential, coastal and commercial environments.",
    "Jordan": "Jordan buyers can review accessory groups such as clamps, brackets, mesh fixing items, fasteners and finishing components for complete fence assembly."
  },
  "coating-materials": {
    "UAE": "UAE buyers can review PVC, PE, powder coating, zinc coating and hot-dip galvanizing for fencing products exposed to heat, dust and coastal conditions.",
    "Bahrain": "Bahrain projects can prioritise galvanizing, PVC coating or powder coating where coastal corrosion protection and a neat finish are required.",
    "Qatar": "Qatar suppliers and contractors can select coating type, thickness, colour and finish for fence wires, posts, pipes, gates and steel structures.",
    "Kuwait": "For Kuwait, coating selection should consider outdoor heat, open-site exposure and whether the product needs smooth, gloss, matt or coloured finish.",
    "Saudi Arabia": "Saudi Arabia projects can specify coating materials for bulk fencing and steel components where long outdoor service and project colour requirements matter.",
    "Iraq": "Iraq enquiries can use protective coating options to improve corrosion resistance on fence wires, welded mesh, posts and gates used in exposed areas.",
    "Oman": "Oman coastal sites can review galvanizing, PVC or powder coating to protect steel components while maintaining the required appearance.",
    "Jordan": "Jordan buyers can select coating type, colour and application method for industrial, commercial and residential fencing components."
  },
  "colors-and-coating-options": {
    "UAE": "UAE buyers can compare EG, HDG/G.I., PVC coated and powder coated finishes before selecting colours for security, decorative or commercial fencing.",
    "Bahrain": "Bahrain projects can focus on HDG, PVC coated or powder coated options where corrosion protection and a professional appearance are important.",
    "Qatar": "Qatar contractors can choose coating and colour based on whether the fence is for indoor light-duty use, outdoor boundary work or architectural presentation.",
    "Kuwait": "For Kuwait, coating choice should consider outdoor heat, dust, UV exposure and the required colour such as green, black, white, grey, blue or custom RAL.",
    "Saudi Arabia": "Saudi Arabia projects can specify coating systems for large fencing packages where corrosion protection, uniform colour and long service life are priorities.",
    "Iraq": "Iraq enquiries can compare galvanizing, PVC coating and powder coating for boundary, industrial and security fencing used in exposed conditions.",
    "Oman": "Oman coastal and landscape projects can use this section to select corrosion protection and colour finish for fencing, gates and decorative boundaries.",
    "Jordan": "Jordan buyers can review coating comparison, available colours and typical applications before finalising finish requirements for project fencing."
  },
  "gabion-wall-and-fencing": {
    "UAE": "UAE landscape, retaining and boundary projects can use gabion walls with optional fencing above for natural appearance plus perimeter security.",
    "Bahrain": "Bahrain buyers can review galvanized or PVC-coated gabion mesh for coastal retaining walls, boundary walls and architectural stone-filled features.",
    "Qatar": "Qatar projects can specify welded or woven gabion mesh, stone filling and fence-above-gabion options for infrastructure and landscape works.",
    "Kuwait": "For Kuwait, wire diameter, mesh opening, coating and stone selection should be reviewed for outdoor retaining or boundary applications.",
    "Saudi Arabia": "Saudi Arabia developments can use gabion wall and fencing systems for roads, industrial boundaries, landscape zones and slope control requirements.",
    "Iraq": "Iraq enquiries can use gabions for retaining support, boundary walls and security fencing bases where robust stone-filled construction is practical.",
    "Oman": "Oman sites can combine gabions with steel fencing for coastal roads, resorts, landscapes and boundary applications with a natural finish.",
    "Jordan": "Jordan buyers can review gabion dimensions, mesh type and fencing options for retaining walls, public areas, residential projects and erosion-control works."
  },
  "clamps-and-connectors": {
    "UAE": "UAE installation teams can use clamps and connectors for post-to-mesh, post-to-rail and panel-to-post fixing in chain-link and welded mesh projects.",
    "Bahrain": "Bahrain buyers can select galvanized, powder-coated or PVC-coated connectors to match coastal fence systems and maintain consistent finishing.",
    "Qatar": "Qatar projects can organise rail clamps, U-bolts, saddle clamps and brackets according to post profile, rail size and panel layout.",
    "Kuwait": "For Kuwait, connector thickness, hole pattern and finish should be reviewed for outdoor mechanical fixing and long-term maintenance.",
    "Saudi Arabia": "Saudi Arabia large fencing packages can require assorted clamps and connectors for corners, T-joints, rails and mesh fixing across long perimeters.",
    "Iraq": "Iraq enquiries can use standard or customized connectors for repairs, fence extensions and new chain-link or welded mesh installations.",
    "Oman": "Oman projects can match green, black or galvanized connectors with the selected fence finish for coastal, residential and commercial sites.",
    "Jordan": "Jordan buyers can review post, rail, panel and corner connector options for stable fence assembly on industrial, agricultural and public-area projects."
  }
};

function getProductProfile(pdfContent: PdfProductContent): ProductRegionalProfile {
  return productRegionalProfiles[pdfContent.slug] || {
    regionalIntro:
      `${pdfContent.title} can be reviewed for GCC projects using the product description, available options, specifications, key features and applications from the product specifications.`,
    procurementNote:
      'For quotation review, share the project location, quantity, required finish, technical specification and site exposure details.',
    countryAngle: 'specifications and finish options can be matched to project application and site condition',
    projectFit: pdfContent.applications.slice(0, 6).join(', ') || 'fencing and perimeter applications',
  };
}

function getOptionSummary(pdfContent: PdfProductContent) {
  if (pdfContent.options && pdfContent.options.length > 0) {
    return pdfContent.options.map((option) => option.title).slice(0, 6).join(', ');
  }

  const finishSpec = pdfContent.specs.find((spec) => /finish|coating|material|type/i.test(spec.label));
  return finishSpec ? `${finishSpec.label}: ${finishSpec.value}` : 'options can be selected as per project requirement';
}

function getCustomizationText(pdfContent: PdfProductContent) {
  const customization = pdfContent.specs.find((spec) => /custom/i.test(spec.label));
  if (customization) return customization.value;

  const sizeOrHeight = pdfContent.specs.find((spec) => /size|height|width|diameter|opening|color|colour|finish/i.test(spec.label));
  if (sizeOrHeight) return `${sizeOrHeight.label}, ${sizeOrHeight.value}`;

  return 'project requirement, site condition, quantity and required finish';
}

function buildSeoFaqs(pdfContent: PdfProductContent): SeoFaq[] {
  const productName = pdfContent.title;
  const applications = pdfContent.applications.slice(0, 5).join(', ');
  const options = getOptionSummary(pdfContent);
  const customization = getCustomizationText(pdfContent);
  const profile = getProductProfile(pdfContent);

  return [
    {
      question: `What is ${productName} used for?`,
      answer: `${productName} is used for ${applications || profile.projectFit}. The product details, applications and specifications shown on this page follow the product specifications.`,
    },
    {
      question: `Which options are available for ${productName}?`,
      answer: `Available options include ${options}. Final selection can be reviewed based on project application, finish requirement, site exposure and the technical specifications listed on this page.`,
    },
    {
      question: `Can ${productName} be customized for project requirements?`,
      answer: `Yes. Customization can be reviewed for ${customization}, depending on the product type and listed specification range.`,
    },
    {
      question: `Can SRK Fence support ${productName} enquiries across GCC countries?`,
      answer: `Yes. ${profile.procurementNote} SRK Fence can review enquiries for UAE, Bahrain, Qatar, Kuwait, Saudi Arabia, Iraq, Oman and Jordan.`,
    },
  ];
}

function buildGccMarketText(pdfContent: PdfProductContent, country: GccCountry) {
  const customCopy = gccCountryMarketCopy[pdfContent.slug]?.[country.label];
  if (customCopy) return customCopy;

  const profile = getProductProfile(pdfContent);
  return `${country.label} enquiries for ${pdfContent.title} can be reviewed using the product options, specifications, finishes and applications listed above. ${profile.procurementNote}`;
}

function buildGccIntroText(pdfContent: PdfProductContent) {
  return getProductProfile(pdfContent).regionalIntro;
}

function buildGccProcurementText(pdfContent: PdfProductContent) {
  return getProductProfile(pdfContent).procurementNote;
}

export default function ProductPdfLandingPage({ product }: ProductPdfLandingPageProps) {
  const pdfContent = getPdfProductContent(product.slug);

  if (!pdfContent) {
    return null;
  }

  const seoFaqs = buildSeoFaqs(pdfContent);

  return (
    <>
      <StructuredData
        data={[
          buildProductSchema(product),
          buildFaqSchema(seoFaqs),
          buildBreadcrumbSchema([
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: pdfContent.title, href: `/products/${product.slug}` },
          ]),
        ]}
      />
      <SiteLayout>
        <section className="border-b border-border bg-background">
          <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-8">
              <div className="space-y-5 lg:space-y-6">
                <Button asChild variant="ghost" className="px-0 text-muted-foreground hover:text-foreground">
                  <Link href="/products">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Products
                  </Link>
                </Button>
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary sm:mb-3 sm:text-sm sm:tracking-[0.2em]">
                    {pdfContent.category}
                  </p>
                  <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                    {pdfContent.title}
                  </h1>
                </div>
                <div className="lg:hidden">
                  <ProductHeroSlider slides={pdfContent.imageSlides} />
                </div>
                <div className="lg:hidden">
                  <ProductPdfActionButtons productSlug={product.slug} productTitle={pdfContent.title} />
                </div>
                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {pdfContent.shortDescription}
                </p>
                <div className="space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {pdfContent.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="hidden lg:block">
                  <ProductPdfActionButtons productSlug={product.slug} productTitle={pdfContent.title} />
                </div>
              </div>
              <div className="hidden lg:block">
                <ProductHeroSlider slides={pdfContent.imageSlides} />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
            {pdfContent.options && pdfContent.options.length > 0 && (
              <Card className="rounded-lg border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">{pdfContent.optionsTitle || 'Available Options'}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {pdfContent.options.map((option) => (
                      <div key={`${option.title}-${option.description || ''}`} className="rounded-lg border border-border bg-muted/30 p-5">
                        <h2 className="mb-2 text-lg font-bold text-foreground">{option.title}</h2>
                        {option.description && <p className="text-[12px] leading-relaxed text-muted-foreground sm:text-sm">{option.description}</p>}
                        {option.bullets && option.bullets.length > 0 && (
                          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                            {option.bullets.map((bullet) => (
                              <li key={bullet} className="flex gap-2">
                                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary sm:h-4 sm:w-4" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <Card className="rounded-lg border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Details / Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto rounded-md border border-border">
                  <table className="w-full min-w-[720px] text-left text-sm">
                    <tbody className="divide-y divide-border">
                      {pdfContent.specs.map((spec) => (
                        <tr key={`${spec.label}-${spec.value}`} className="align-top">
                          <th className="w-[260px] bg-muted/30 px-4 py-3 font-bold text-foreground">{spec.label}</th>
                          <td className="px-4 py-3 text-muted-foreground">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-8 lg:grid-cols-2">
              {pdfContent.keyFeatures.length > 0 && (
                <Card className="rounded-lg border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl">Key Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      {pdfContent.keyFeatures.map((feature) => (
                        <div key={feature} className="flex min-h-full gap-2 rounded-md bg-muted px-2.5 py-2.5 text-[12px] leading-snug text-muted-foreground sm:gap-3 sm:px-3 sm:py-3 sm:text-sm">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary sm:h-4 sm:w-4" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {pdfContent.applications.length > 0 && (
                <Card className="rounded-lg border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl">Typical Applications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      {pdfContent.applications.map((application) => (
                        <div key={application} className="flex min-h-full items-center gap-2 rounded-md border border-border px-2.5 py-2.5 text-[12px] font-semibold leading-snug text-foreground sm:gap-3 sm:px-3 sm:py-3 sm:text-sm">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary sm:h-4 sm:w-4" />
                          {application}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {pdfContent.extraSections && pdfContent.extraSections.length > 0 && (
              <div className="grid gap-8 lg:grid-cols-2">
                {pdfContent.extraSections.map((section) => (
                  <Card key={section.title} className="rounded-lg border-border">
                    <CardHeader>
                      <CardTitle className="text-2xl">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                      {section.paragraphs?.map((paragraph) => (
                        <p key={paragraph} className="leading-relaxed">{paragraph}</p>
                      ))}
                      {section.bullets && section.bullets.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 sm:gap-3">
                          {section.bullets.map((bullet) => (
                            <div key={bullet} className="flex min-h-full gap-2 rounded-md bg-muted px-2.5 py-2.5 text-[12px] leading-snug text-muted-foreground sm:gap-3 sm:px-3 sm:py-3 sm:text-sm">
                              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary sm:h-4 sm:w-4" />
                              <span>{bullet}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {section.table && section.table.length > 0 && (
                        <div className="overflow-x-auto rounded-md border border-border">
                          <table className="w-full min-w-[620px] text-left text-sm">
                            <tbody className="divide-y divide-border">
                              {section.table.map((row) => (
                                <tr key={`${row.label}-${row.value}`} className="align-top">
                                  <th className="w-[220px] bg-muted/30 px-4 py-3 font-bold text-foreground">{row.label}</th>
                                  <td className="px-4 py-3 text-muted-foreground">{row.value}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="bg-muted/25 py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
            <Card className="rounded-lg border-border bg-background">
              <CardHeader>
                <CardTitle className="text-2xl">Available in GCC Countries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 text-muted-foreground">
                <p className="leading-relaxed">{buildGccIntroText(pdfContent)}</p>
                <p className="leading-relaxed">
                  {buildGccProcurementText(pdfContent)} Add the project country, site location, drawing/BOQ details and expected finish so the enquiry can be checked against the product specifications shown above.
                </p>
                <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-4">
                  {gccCountries.map((country) => (
                    <Link
                      key={country.href}
                      href={country.href}
                      className="rounded-lg border border-border bg-muted/20 p-3 transition hover:border-primary hover:bg-background sm:p-4"
                    >
                      <h2 className="mb-2 text-sm font-bold text-foreground sm:text-base">{country.label}</h2>
                      <p className="text-[12px] leading-relaxed text-muted-foreground sm:text-sm">
                        {buildGccMarketText(pdfContent, country)}
                      </p>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-lg border-border bg-background">
              <CardHeader>
                <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 lg:grid-cols-2">
                  {seoFaqs.map((faq) => (
                    <div key={faq.question} className="rounded-lg border border-border bg-muted/20 p-5">
                      <h2 className="mb-2 text-lg font-bold text-foreground">{faq.question}</h2>
                      <p className="text-[12px] leading-relaxed text-muted-foreground sm:text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
