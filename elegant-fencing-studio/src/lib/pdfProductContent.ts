export type PdfProductOption = {
  title: string;
  description?: string;
  bullets?: string[];
};

export type PdfProductTableRow = { label: string; value: string };

export type PdfProductExtraSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: PdfProductTableRow[];
};

export type PdfProductContent = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string[];
  imageSlides: Array<{ src: string; alt: string }>;
  optionsTitle?: string;
  options?: PdfProductOption[];
  specs: PdfProductTableRow[];
  keyFeatures: string[];
  applications: string[];
  extraSections?: PdfProductExtraSection[];
};

const img = (slug: string, count: number, folder = slug) =>
  Array.from({ length: count }, (_, index) => ({
    src: `/products/pdf-mapped/${folder}/${slug}-${String(index + 1).padStart(2, '0')}.webp`,
    alt: `${slug.replace(/-/g, ' ')} PDF image ${index + 1}`,
  }));

export const pdfProductSlugs = [
  'fence-posts-gi-ms-pvc',
  'panel-post-system',
  'high-security-gate-systems',
  'post-and-railing-system',
  'pvc-decorative-fence',
  'pvc-privacy-fence',
  'rectangle-mesh-fence',
  'fasteners-bolts',
  'anti-climb-358-fence',
  'temporary-fence-panels',
  'barbed-wire',
  'razor-wire',
  'base-plates',
  'fence-accessories',
  'colors-and-coating-options',
  'coating-materials',
  'gabion-wall-and-fencing',
  'clamps-and-connectors',
  'gate-hinges-and-locks',
] as const;

export const pdfProductContents: Record<string, PdfProductContent> = {
  'fence-posts-gi-ms-pvc': {
    slug: 'fence-posts-gi-ms-pvc',
    title: 'Fence Posts (G.I. / M.S. / PVC)',
    category: 'Fence Posts',
    shortDescription: 'Fence Posts provide the main structural support for fencing systems, ensuring stability, strength, and secure installation.',
    description: [
      'Fence Posts provide the main structural support for fencing systems, ensuring stability, strength, and secure installation of chain-link, welded mesh, privacy, decorative, and other fence types.',
      'We offer fence posts in G.I. (Galvanized Steel), M.S. (Mild Steel), and PVC options to suit different project requirements. Posts are available in various profiles, finishes, colors, and configurations and can be supplied with compatible caps, clamps, brackets, rails, and fixing accessories.',
    ],
    imageSlides: img('fence-posts-gi-ms-pvc', 5),
    optionsTitle: 'Material & Finish Options',
    options: [
      { title: 'G.I. Fence Posts', description: 'Hot-Dip Galvanized for excellent corrosion resistance and long-term outdoor performance.' },
      { title: 'M.S. Fence Posts', description: 'Mild Steel with options for Powder Coated, PVC Coated, or painted finishes.' },
      { title: 'PVC Fence Posts', description: 'Smooth, durable PVC finish with multiple color options for decorative, privacy, garden, and boundary applications.' },
    ],
    specs: [
      { label: 'Material', value: 'G.I. / M.S. / PVC' },
      { label: 'Profile', value: 'Round / Square / Rectangular / Customized' },
      { label: 'G.I. Finish', value: 'Hot-Dip Galvanized' },
      { label: 'M.S. Finish', value: 'Powder Coated / PVC Coated / Painted' },
      { label: 'PVC Finish', value: 'Smooth PVC / PVC Coated' },
      { label: 'Color', value: 'G.I. / Green / Black / White / Custom' },
      { label: 'Applications', value: 'Chain-Link / Welded Mesh / Privacy / Decorative / Security' },
      { label: 'Accessories', value: 'Caps / Clamps / Brackets / Rails / Fixings' },
      { label: 'Installation', value: 'Embedded / Surface Mounted' },
      { label: 'Customization', value: 'Profile, Thickness, Length, Color & Finish' },
    ],
    keyFeatures: ['Strong and durable construction', 'G.I., M.S. and PVC options', 'Multiple coating and finish options', 'Green, black, white and custom colors', 'Round, square and rectangular profiles', 'Suitable for Chain-Link & Welded Mesh Fencing', 'Corrosion-resistant options available', 'Low-maintenance solutions', 'Compatible with rails, clamps and fixing accessories', 'Customized profiles and specifications available'],
    applications: ['Chain-Link Fencing', 'Welded Mesh Fencing', 'Perimeter Fencing', 'Security Fencing', 'Privacy Fencing', 'Decorative Fencing', 'Residential & Commercial Boundaries', 'Industrial Facilities', 'Agricultural Fencing', 'Sports & Recreational Areas', 'Landscaping & Garden Fencing'],
  },

  'panel-post-system': {
    slug: 'panel-post-system',
    title: 'Panel & Post System',
    category: 'Panel & Post System',
    shortDescription: 'Panel & Post System is a complete modular fencing solution combining rigid welded mesh panels, supporting posts, and fixing accessories.',
    description: [
      'Panel & Post System is a complete modular fencing solution combining rigid welded mesh panels, supporting posts, and fixing accessories to create a strong, stable, and professional perimeter fence.',
      'The system is designed for efficient installation, reliable performance, excellent visibility, and long-term durability. Its modular construction makes it suitable for a wide range of residential, commercial, industrial, infrastructure, and security applications.',
    ],
    imageSlides: img('panel-post-system', 2),
    optionsTitle: 'Panel Variations',
    options: [
      { title: 'Standard welded mesh panels' }, { title: '3D V-bending panels' }, { title: 'High-security welded panels' }, { title: 'Decorative welded panels' }, { title: 'Custom panel configurations' },
    ],
    specs: [
      { label: 'System Type', value: 'Welded Mesh Panel & Post System' }, { label: 'Panel Type', value: 'Rigid Welded Mesh' }, { label: 'Wire Diameter', value: 'As per project requirement' }, { label: 'Mesh Opening', value: 'Various configurations available' }, { label: 'Panel Height', value: 'Various heights available' }, { label: 'Panel Width', value: 'Various widths available' }, { label: 'Post Type', value: 'Square / Rectangular / Round' }, { label: 'Post Installation', value: 'Concrete Foundation / Base Plate' }, { label: 'Panel Fixing', value: 'Clamps / Brackets / Security Fixings' }, { label: 'Surface Finish', value: 'Hot-Dip Galvanized / PVC Coated / Powder Coated' }, { label: 'Colors', value: 'Green / Black / Grey / White / Custom RAL' },
    ],
    keyFeatures: ['Rigid welded mesh panel construction', 'Strong and durable supporting posts', 'Modular panel and post design', 'Secure panel-to-post connection', 'Quick and efficient installation', 'Excellent visibility through the fence', 'Low maintenance', 'Suitable for permanent fencing applications', 'Multiple coating and color options', 'Compatible with different gate systems and security accessories'],
    applications: ['Residential compounds', 'Commercial properties', 'Industrial facilities', 'Warehouses & logistics areas', 'Schools & institutions', 'Parks & recreational areas', 'Sports facilities', 'Construction and infrastructure projects', 'Perimeter security', 'Utility and service facilities'],
    extraSections: [
      { title: 'Post & Fixing Options', bullets: ['Square posts', 'Rectangular posts', 'Round posts', 'Concrete-embedded posts', 'Base-plate posts', 'Panel clamps', 'Fixing brackets', 'Security / anti-tamper fixings'] },
      { title: 'Coating Options', paragraphs: ['Hot-Dip Galvanized (G.I.) provides excellent corrosion protection and is suitable for long-term outdoor applications.', 'PVC Coated provides an additional protective layer with an attractive colored finish.', 'Powder Coated provides a durable decorative finish and is available in a wide range of RAL colors.'] },
      { title: 'Available Colors', bullets: ['Green', 'Black', 'Grey', 'White', 'Blue', 'Custom RAL Colors'] },
      { title: 'Benefits', paragraphs: ['Strong Construction • Modular Design • Easy Installation • Secure Fixing • Corrosion Resistant • Weather Resistant • Excellent Visibility • Low Maintenance • Long Service Life'] },
    ],
  },

  'high-security-gate-systems': {
    slug: 'high-security-gate-systems',
    title: 'High-Security Gate Systems',
    category: 'High-Security Gate Systems',
    shortDescription: 'High-Security Gate Systems are designed to provide controlled and secure access to protected areas.',
    description: ['High-Security Gate Systems are designed to provide controlled and secure access to protected areas while maintaining the strength and durability required for demanding applications.', 'Our gate systems can be configured to complement high-security perimeter fencing and can incorporate robust gate frames, heavy-duty posts, secure hinges, locking mechanisms, and anti-tamper fixing systems. Gate configurations can be selected according to the required opening width, security level, access requirements, and project conditions.'],
    imageSlides: img('high-security-gate-systems', 2),
    optionsTitle: 'Gate Configurations',
    options: [
      { title: 'Double Leaf Gates', description: 'Suitable for wider vehicle and equipment access points, with two gate leaves opening from a central meeting point.' },
      { title: 'Single Leaf Gates', description: 'Suitable for smaller access openings and pedestrian or controlled-access applications.' },
      { title: 'Sliding Gates', description: 'Designed for locations where swing clearance is limited or where a controlled sliding access system is preferred.' },
    ],
    specs: [
      { label: 'Gate Type', value: 'Swing Gate / Sliding Gate' }, { label: 'Configuration', value: 'Single Leaf / Double Leaf' }, { label: 'Gate Width', value: 'As per project requirement' }, { label: 'Gate Height', value: 'As per project requirement' }, { label: 'Frame', value: 'Heavy-Duty Steel Section' }, { label: 'Gate Posts', value: 'Steel CHS / RHS / SHS' }, { label: 'Infill', value: 'Welded Mesh / 358 Mesh / Chain Link / Security Mesh' }, { label: 'Hinges', value: 'Heavy-Duty Hinges' }, { label: 'Locking System', value: 'Mechanical / Security Lock / Access-Control Compatible' }, { label: 'Operation', value: 'Manual / Automated' }, { label: 'Finish', value: 'Hot-Dip Galvanized / Powder Coated / PVC Coated where applicable' }, { label: 'Color', value: 'Green / Black / Grey / White / Custom RAL' },
    ],
    keyFeatures: ['Heavy-duty gate construction', 'Designed for high-security perimeter applications', 'Robust gate frames and supporting posts', 'Secure hinges and fixing systems', 'Anti-tamper options available', 'Manual or automated operation options', 'Single-leaf and double-leaf configurations', 'Sliding and swing gate options', 'Compatible with high-security fencing systems', 'Custom configurations available'],
    applications: ['Industrial facilities', 'Warehouses & logistics facilities', 'Airports & infrastructure', 'Data centers', 'Utility & power facilities', 'Government facilities', 'Security compounds', 'Commercial properties', 'Construction sites', 'Restricted-access areas'],
    extraSections: [
      { title: 'Security Options', bullets: ['Anti-tamper fixings', 'Heavy-duty hinges', 'Security locks', 'Drop bolts', 'Ground stops', 'Access-control preparation', 'Automated gate operators', 'Security fencing integration', 'Razor or concertina wire integration where required'] },
      { title: 'Coating Options', paragraphs: ['Hot-Dip Galvanized (G.I.) provides strong corrosion protection for outdoor and demanding environments.', 'Powder Coated provides a durable decorative finish with a wide range of RAL colors.', 'PVC Coated is available where compatible with the selected gate/fence system, providing additional weather protection and a colored finish.'] },
      { title: 'Available Colors', bullets: ['Green', 'Black', 'Grey', 'White', 'Blue', 'Custom RAL Colors'] },
      { title: 'Benefits', paragraphs: ['High Security • Heavy Duty • Controlled Access • Anti-Tamper Options • Durable Construction • Corrosion Protection • Customizable • Manual or Automated Operation'] },
    ],
  },

  'base-plates': {
    slug: 'base-plates', title: 'BASE PLATES', category: 'Base Plates',
    shortDescription: 'SRK Base Plates are strong and durable mounting components for secure post and structure connections.',
    description: ['SRK Base Plates are strong and durable mounting components designed to provide a secure connection between fence posts, gate posts, railing posts and supporting structures. Available in G.I., Hot-Dipped G.I., M.S. and green powder-coated finishes, they are suitable for a wide range of chain-link, welded mesh, steel fencing and gate applications.'],
    imageSlides: img('base-plates', 2),
    specs: [{ label: 'Product', value: 'Base Plates / Post Base Plates' }, { label: 'Application', value: 'Fence Posts, Gate Posts, Railing Posts & Steel Structures' }, { label: 'Types', value: 'Square Base Plates, Round Base Plates, Socket Base Plates, U-Brackets, Gusseted Base Plates & Custom Designs' }, { label: 'Material Options', value: 'G.I., Hot-Dipped G.I., M.S.' }, { label: 'Finish Options', value: 'Galvanized / Hot-Dip Galvanized / Green Powder Coated' }, { label: 'Shape', value: 'Square, Round, Rectangular & Custom' }, { label: 'Post Compatibility', value: 'Round & Square Posts / Tubes' }, { label: 'Mounting', value: 'Anchor Bolt / Chemical Anchor / Bolted Fixing' }, { label: 'Bolt Holes', value: 'Available in various hole patterns and diameters' }, { label: 'Thickness', value: 'Available as per post size and load requirement' }, { label: 'Dimensions', value: 'Various sizes available' }, { label: 'Welding', value: 'Continuous / Reinforced welding as required' }, { label: 'Customization', value: 'Size, thickness, hole pattern, socket diameter and finish as per requirement' }],
    keyFeatures: ['Heavy-duty and durable construction', 'Provides secure post-to-ground fixing', 'Suitable for round and square fence posts', 'Available in G.I., Hot-Dipped G.I., M.S. and green powder-coated', 'Excellent corrosion and weather resistance', 'Multiple hole patterns and configurations', 'Suitable for bolt-down and anchored installations', 'Custom sizes available for specific project requirements'],
    applications: ['Chain-Link Fencing', 'Welded Mesh Fencing', 'Fence Posts', 'Gate Posts', 'Security Fencing', 'Steel Gates', 'Railing Systems', 'Perimeter Fencing', 'Industrial Fencing', 'Commercial & Residential Fencing'],
  },

  'gate-hinges-and-locks': {
    slug: 'gate-hinges-and-locks', title: 'GATE HINGES', category: 'Gate Hinges',
    shortDescription: 'SRK Gate Hinges are robust and reliable hardware components for smooth and secure gate operation.',
    description: ['SRK Gate Hinges are robust and reliable hardware components designed for the smooth and secure operation of chain-link fence gates, welded mesh gates, steel gates and other fencing systems. Available in G.I., SS 304 and green powder-coated finishes, our gate hinges can be supplied in different designs and sizes to suit light, medium and heavy-duty applications.'],
    imageSlides: [{ src: '/products/pdf-mapped/gate-hinges/gate-hinges-01.webp', alt: 'gate hinges PDF image 1' }],
    specs: [{ label: 'Product', value: 'Gate Hinges' }, { label: 'Application', value: 'Chain-Link Gates, Welded Mesh Gates, Steel Gates & Fencing Systems' }, { label: 'Types', value: 'Butt Hinges, Heavy-Duty Hinges, Weld-On Hinges, Adjustable Hinges, T-Hinges, Strap Hinges, Pivot Hinges, Spring Hinges & More' }, { label: 'Material Options', value: 'G.I., Stainless Steel 304, M.S.' }, { label: 'Finish Options', value: 'Hot-Dip Galvanized / Zinc Coated / Green Powder Coated / SS Finish' }, { label: 'Construction', value: 'Heavy-Duty Steel / Stainless Steel Construction' }, { label: 'Sizes', value: 'Various sizes available as per gate weight and application' }, { label: 'Mounting', value: 'Weld-On / Bolt-On / Plate-Mounted options' }, { label: 'Adjustment', value: 'Fixed or Adjustable designs available' }, { label: 'Pin Type', value: 'Fixed / Removable / Adjustable as per hinge type' }, { label: 'Load Capacity', value: 'Available according to gate size and weight' }, { label: 'Customization', value: 'Size, material, finish and configuration as per requirement' }],
    keyFeatures: ['Strong and durable construction', 'Designed for smooth gate movement', 'Suitable for light to heavy-duty gates', 'G.I., SS 304 and green powder-coated options', 'Excellent corrosion and weather resistance', 'Weld-on and bolt-on options available', 'Adjustable designs available for accurate gate alignment', 'Suitable for both chain-link and welded mesh fencing systems'],
    applications: ['Chain-Link Fence Gates', 'Welded Mesh Gates', 'Security Gates', 'Industrial Gates', 'Perimeter Fencing', 'Compound Gates', 'Garden Gates', 'Commercial & Residential Fencing'],
  },

  'post-and-railing-system': {
    slug: 'post-and-railing-system', title: 'Post & Rail System', category: 'Post & Rail System',
    shortDescription: 'The Chain-Link Fence Post & Rail System provides a strong, stable, and durable framework for chain-link fencing.',
    description: ['The Chain-Link Fence Post & Rail System provides a strong, stable, and durable framework for chain-link fencing. The system consists of vertical fence posts supported by top and bottom horizontal rails, providing additional stability and maintaining the shape and tension of the chain-link mesh.', 'The system is available in Hot-Dip Galvanized (G.I.) and PVC-coated finishes, offering reliable protection for outdoor and perimeter fencing applications.'],
    imageSlides: img('post-and-railing-system', 2),
    optionsTitle: 'System Components',
    options: [{ title: 'Fence Posts' }, { title: 'Top Railing' }, { title: 'Bottom Railing' }, { title: 'Post Caps' }, { title: 'Rail Clamps' }, { title: 'Rail Ends' }, { title: 'U-Bolt Clamps' }, { title: 'Band Clamps' }, { title: 'Tension Bars' }, { title: 'Other required fixing accessories' }],
    specs: [{ label: 'System Type', value: 'Chain-Link Fence Post & Rail System' }, { label: 'Fence Posts', value: 'Steel / G.I. / PVC Coated' }, { label: 'Top Railing', value: 'Steel / G.I. / PVC Coated' }, { label: 'Bottom Railing', value: 'Steel / G.I. / PVC Coated' }, { label: 'Post Profile', value: 'Round / Customized' }, { label: 'Finish', value: 'Hot-Dip Galvanized / PVC Coated' }, { label: 'PVC Colors', value: 'Green / Black / Custom' }, { label: 'Accessories', value: 'Clamps / Caps / Rail Ends / Tension Bars / U-Bolts' }, { label: 'Installation', value: 'Embedded / Suitable Mounting System' }, { label: 'Customization', value: 'Diameter, Thickness, Length, Spacing & Finish' }],
    keyFeatures: ['Strong and durable framework', 'Provides additional mesh stability', 'Top and bottom rail support', 'Corrosion-resistant coating options', 'Suitable for outdoor applications', 'Easy assembly and installation', 'Wide range of compatible accessories', 'Suitable for different chain-link fencing requirements', 'Customizable according to project requirements'],
    applications: ['Perimeter Fencing', 'Industrial Facilities', 'Commercial Properties', 'Warehouses & Storage Areas', 'Construction Sites', 'Sports & Recreational Areas', 'Infrastructure Projects', 'Security Fencing', 'Residential & Commercial Boundaries'],
    extraSections: [{ title: 'Coating & Finish Options', bullets: ['Hot-Dip Galvanized (G.I.)', 'PVC Coated – Green', 'PVC Coated – Black', 'Other colors available upon request'] }, { title: 'System Configuration', paragraphs: ['Fence Post + Top Railing + Bottom Railing + Chain-Link Mesh + Accessories'] }, { title: 'Available Accessories', bullets: ['Post Caps', 'Rail Ends', 'Rail Clamps', 'U-Bolt Clamps', 'Band Clamps', 'Tension Bars', 'Connecting & Fixing Accessories'] }],
  },

  'pvc-decorative-fence': {
    slug: 'pvc-decorative-fence', title: 'PVC Decorative Fence', category: 'PVC Decorative Fence',
    shortDescription: 'PVC Decorative Fence is a stylish, durable, and low-maintenance fencing solution.',
    description: ['PVC Decorative Fence is a stylish, durable, and low-maintenance fencing solution designed to enhance the appearance of residential, commercial, and landscaped properties.', 'Available in a variety of picket, rail, privacy, semi-privacy, and decorative styles, PVC fencing provides flexibility in both appearance and privacy. The system can be supplied in different colors and configurations to complement the surrounding architecture and landscape.'],
    imageSlides: img('pvc-decorative-fence', 3),
    optionsTitle: 'Fence Styles',
    options: [{ title: 'Picket Fence' }, { title: '2-Rail Fence' }, { title: '3-Rail Fence' }, { title: '4-Rail Fence' }, { title: 'Closed Picket Privacy Fence' }, { title: 'Open Picket Privacy Fence' }, { title: 'Privacy Fence with Lattice' }, { title: 'Semi-Privacy Fence' }],
    specs: [{ label: 'Material', value: 'PVC' }, { label: 'Fence Type', value: 'Picket / Rail / Privacy / Semi-Privacy / Decorative' }, { label: 'Fence Style', value: 'Open / Closed / Lattice / Picket' }, { label: 'Color', value: 'White / Beige / Grey / Taupe / Dark Grey / Custom' }, { label: 'Posts', value: 'PVC Posts' }, { label: 'Rails', value: 'PVC Top & Bottom Rails' }, { label: 'Finish', value: 'Smooth / Textured Options' }, { label: 'Installation', value: 'Post & Rail / Post & Panel System' }, { label: 'Customization', value: 'Height, Width, Style & Color' }],
    keyFeatures: ['Attractive decorative appearance', 'Durable PVC construction', 'Low maintenance', 'Weather and moisture resistant', 'No regular painting required', 'Easy to clean', 'Lightweight and easy to install', 'Multiple styles and colors', 'Different privacy levels available', 'Suitable for residential and commercial applications'],
    applications: ['Villas & Residential Properties', 'Gardens & Landscapes', 'Parks & Recreational Areas', 'Pool Areas', 'Patios & Outdoor Spaces', 'Commercial Properties', 'Boundary Fencing', 'Decorative Screening', 'Privacy Enclosures'],
    extraSections: [{ title: 'Color Options', bullets: ['White', 'Beige / Cream', 'Grey', 'Taupe', 'Dark Grey', 'Brown / Wood-look options', 'Custom colors upon request'] }],
  },

  'pvc-privacy-fence': {
    slug: 'pvc-privacy-fence', title: 'PVC Privacy Fence', category: 'PVC Privacy Fence',
    shortDescription: 'PVC Privacy Fence is a durable, low-maintenance fencing solution for excellent privacy and finished appearance.',
    description: ['PVC Privacy Fence is a durable, low-maintenance fencing solution designed to provide excellent privacy and an attractive finished appearance for residential, commercial, and landscaped areas.', 'Manufactured from high-quality PVC, the solid privacy panels provide a continuous barrier while offering resistance to weather, moisture, rot, and corrosion. The system is designed for easy installation and can be supplied in a range of colors and profiles to complement different architectural and landscaping requirements.'],
    imageSlides: img('pvc-privacy-fence', 2),
    optionsTitle: 'Available Options',
    options: [{ title: 'Different panel profiles' }, { title: 'Different panel heights' }, { title: 'Multiple colors and finishes' }, { title: 'Decorative post cap options' }, { title: 'Customized panel and post arrangements' }, { title: 'Suitable accessories and fixing systems' }],
    specs: [{ label: 'Material', value: 'PVC' }, { label: 'Fence Type', value: 'Solid Privacy Panel' }, { label: 'Panel Profile', value: 'Privacy / Interlocking Panel' }, { label: 'Posts', value: 'PVC Posts' }, { label: 'Rails', value: 'Top & Bottom Support Rails' }, { label: 'Finish', value: 'Smooth / Textured Options' }, { label: 'Colors', value: 'White / Beige / Grey / Taupe / Charcoal / Custom' }, { label: 'Installation', value: 'Post & Panel System' }, { label: 'Customization', value: 'Panel Design, Height, Width & Color' }],
    keyFeatures: ['High Privacy – Solid panels provide excellent visual screening', 'Weather Resistant – Suitable for outdoor applications', 'Low Maintenance – Easy to clean and maintain', 'Durable & Long Lasting', 'Rot & Corrosion Resistant', 'Attractive & Modern Appearance', 'Easy Installation', 'Multiple Color Options', 'Customizable Design Options'],
    applications: ['Residential Properties', 'Villas & Gardens', 'Pool Areas', 'Patios & Outdoor Spaces', 'Commercial Properties', 'Recreational Facilities', 'Boundary Screening', 'Privacy Enclosures', 'Landscape Projects'],
    extraSections: [{ title: 'Color Options', bullets: ['White', 'Beige / Cream', 'Grey', 'Taupe', 'Charcoal / Dark Grey', 'Custom Colors – Available upon request'] }, { title: 'System Components', paragraphs: ['PVC Privacy Panel + PVC Posts + Top & Bottom Rails + Post Caps + Fixings'] }],
  },

  'anti-climb-358-fence': {
    slug: 'anti-climb-358-fence', title: 'Anti Climb 358 Security Fence', category: 'Anti Climb 358 Security Fence',
    shortDescription: 'Anti-Climb 358 Security Fence is a high-security welded mesh fencing system with closely spaced mesh openings.',
    description: ['Anti-Climb 358 Security Fence is a high-security welded mesh fencing system designed to provide a strong physical barrier while maintaining excellent visibility. The closely spaced mesh openings make the panel extremely difficult to climb or penetrate with conventional tools, making it suitable for applications where high levels of perimeter security are required.', 'The rigid welded construction provides excellent strength and stability, while the protective coating options provide long-term resistance against corrosion and outdoor weather conditions.'],
    imageSlides: img('anti-climb-358-fence', 2),
    optionsTitle: 'Security Features',
    options: [{ title: 'Anti-Climb Design', description: 'The narrow mesh opening provides very limited foothold and handhold space, making climbing extremely difficult.' }, { title: 'Anti-Cut Protection', description: 'The closely spaced welded wires make it difficult to insert conventional cutting tools into the mesh.' }, { title: 'Anti-Tamper Fixings', description: 'Special security bolts and fixing systems can be used to reduce unauthorized removal of panels.' }, { title: 'High Visibility', description: 'Despite its high-security construction, the fine mesh allows security personnel and CCTV systems to maintain clear visibility across the perimeter.' }],
    specs: [{ label: 'Fence Type', value: '358 Anti-Climb Welded Mesh' }, { label: 'Mesh Configuration', value: 'Closely spaced welded wires' }, { label: 'Mesh Opening', value: '76.2 × 12.7 mm (358 configuration)' }, { label: 'Wire Diameter', value: 'Typically 4.0 mm, subject to project requirement' }, { label: 'Panel Height', value: 'Various heights available' }, { label: 'Panel Width', value: 'Various widths available' }, { label: 'Post Type', value: 'Square / Rectangular / Special Security Posts' }, { label: 'Fixing System', value: 'Security bolts / Anti-tamper fixing system' }, { label: 'Base Installation', value: 'Concrete foundation / Base plate system' }, { label: 'Surface Finish', value: 'Hot-Dip Galvanized / PVC Coated / Powder Coated' }, { label: 'Color', value: 'Green / Black / Grey / Custom RAL' }],
    keyFeatures: ['High-security anti-climb welded mesh design', 'Extremely small mesh openings', 'Difficult to climb and penetrate', 'Rigid welded panel construction', 'High resistance to cutting and tampering', 'Excellent visibility through the fence', 'Suitable for demanding security applications', 'Durable and low-maintenance', 'Available with galvanized and protective coating systems', 'Can be supplied with security toppings and accessories'],
    applications: ['Airports & aviation facilities', 'Power stations & utility facilities', 'Industrial plants', 'Data centers', 'Government & defense facilities', 'Prisons & correctional facilities', 'Railway & transportation infrastructure', 'Warehouses & logistics facilities', 'Commercial compounds', 'High-security perimeter protection'],
    extraSections: [{ title: 'Coating Options', paragraphs: ['Hot-Dip Galvanized provides a durable zinc coating for enhanced corrosion protection and long-term outdoor performance.', 'PVC Coated provides an additional protective layer over the galvanized steel and is available in various colors, with green being a popular choice for perimeter fencing.', 'Powder Coated provides a durable decorative finish with a wide range of RAL colors for projects requiring a specific architectural appearance.'] }, { title: 'Available Colors', bullets: ['Green', 'Black', 'Grey', 'White', 'Blue', 'Custom RAL Colors'] }, { title: 'Compatible Security Accessories', bullets: ['Barbed wire', 'Razor wire', 'Security arms', 'Electric fencing systems', 'Anti-climb toppings', 'Security gates', 'CCTV integration supports', 'Concertina wire systems'] }, { title: 'Benefits', paragraphs: ['High Security • Anti-Climb • Anti-Cut • Rigid Construction • Excellent Visibility • Corrosion Resistant • Weather Resistant • Long Service Life • Low Maintenance'] }],
  },

  'barbed-wire': {
    slug: 'barbed-wire', title: 'Barbed Wire (GI / PVC)', category: 'Barbed Wire',
    shortDescription: 'Barbed Wire is a practical perimeter-security solution designed to provide an additional physical barrier.',
    description: ['Barbed Wire is a practical perimeter-security solution designed to provide an additional physical barrier and discourage unauthorized access. Manufactured from steel wire with sharp barbs positioned at regular intervals, it can be installed along boundary fences, walls, gates, and security perimeters.', 'SRK offers Galvanized (GI) and PVC-Coated Barbed Wire options to provide different levels of corrosion protection, durability, and appearance according to project requirements.'],
    imageSlides: img('barbed-wire', 2),
    optionsTitle: 'Material Options',
    options: [{ title: 'GI Barbed Wire', description: 'Hot-Dip Galvanized (GI) barbed wire provides a durable zinc coating that protects the steel against corrosion and makes it suitable for outdoor perimeter-security applications.' }, { title: 'PVC-Coated Barbed Wire', description: 'PVC-Coated Barbed Wire combines a galvanized steel core with a protective PVC layer, providing additional weather and corrosion resistance together with a colored finish. Common color: Green.' }],
    specs: [{ label: 'Wire Type', value: 'Barbed Steel Wire' }, { label: 'Material', value: 'Galvanized Steel / PVC-Coated Steel' }, { label: 'Core Wire', value: 'As per project requirement' }, { label: 'Barb Wire', value: 'As per project requirement' }, { label: 'Barb Spacing', value: 'Various options available' }, { label: 'Barb Configuration', value: '2-point / 4-point' }, { label: 'Finish', value: 'Hot-Dip Galvanized / PVC Coated' }, { label: 'Color', value: 'GI / Green / Black / Other colors subject to requirement' }, { label: 'Packing', value: 'Coils / Rolls' }, { label: 'Installation', value: 'Fence Posts / Security Arms / Walls / Gates' }],
    keyFeatures: ['Strong steel wire construction', 'Sharp, uniformly formed barbs', 'Effective perimeter deterrent', 'Suitable for new and existing fence systems', 'GI and PVC-coated options available', 'Suitable for outdoor applications', 'Low maintenance', 'Easy to install', 'Can be used with chain-link and other security fencing systems', 'Custom specifications available according to project requirements'],
    applications: ['Boundary fencing', 'Industrial facilities', 'Warehouses & logistics areas', 'Agricultural properties', 'Construction sites', 'Utility & infrastructure facilities', 'Commercial properties', 'Security compounds', 'Perimeter walls', 'Temporary and permanent fencing'],
    extraSections: [{ title: 'Coating Options', paragraphs: ['Hot-Dip Galvanized provides reliable corrosion protection and is suitable for outdoor and industrial environments.', 'PVC Coated provides an additional protective layer and an attractive colored finish, particularly suitable where appearance and additional weather protection are required.'] }, { title: 'Available Colors', paragraphs: ['GI / Metallic • Green • Black • Other Colors Subject to Requirement'] }, { title: 'Installation Options', bullets: ['On chain-link fence posts', 'On welded mesh fence posts', 'On security fence extensions', 'On boundary walls', 'Above gates', 'On angled security arms', 'Along industrial and commercial perimeters'] }, { title: 'Benefits', paragraphs: ['Perimeter Security • Effective Deterrent • Durable • Corrosion Resistant • Weather Resistant • Low Maintenance • Easy Installation • Suitable for Multiple Fence Systems'] }],
  },

  'razor-wire': {
    slug: 'razor-wire', title: 'Razor Wire', category: 'Razor Wire',
    shortDescription: 'Razor Wire is a high-security perimeter protection solution designed as an effective physical deterrent.',
    description: ['Razor Wire is a high-security perimeter protection solution designed to provide an effective physical deterrent against unauthorized access. Manufactured from high-strength steel with sharp razor-edged blades, it can be installed above fences, walls, gates, and other perimeter-security systems.', 'SRK Razor Wire is available in Galvanized Iron (G.I.) and Stainless Steel (S.S.), with different coil diameters to suit varying security and installation requirements.'],
    imageSlides: img('razor-wire', 2),
    optionsTitle: 'Material Options',
    options: [{ title: 'G.I. Razor Wire', description: 'Galvanized steel construction providing effective corrosion protection and a cost-effective solution for outdoor perimeter security.' }, { title: 'S.S. Razor Wire', description: 'Stainless steel construction offering enhanced corrosion resistance and suitability for demanding or corrosive environments.' }],
    specs: [{ label: 'Product Type', value: 'Razor Wire / Concertina Razor Wire' }, { label: 'Material', value: 'G.I. / S.S.' }, { label: 'Coil Diameter', value: '50 cm / 75 cm / 100 cm' }, { label: 'Blade Profile', value: 'Various profiles available' }, { label: 'Finish – G.I.', value: 'Galvanized' }, { label: 'Finish – S.S.', value: 'Stainless Steel' }, { label: 'Installation', value: 'Security Fence / Wall / Gate / Security Arms' }, { label: 'Application', value: 'High-Security Perimeter Protection' }],
    keyFeatures: ['High-security perimeter deterrent', 'Sharp razor-edged blade profile', 'Strong and durable construction', 'Suitable for outdoor security applications', 'Available in G.I. and S.S.', 'Multiple coil diameters available', 'Can be installed on fences, walls, gates, and security arms', 'Suitable for industrial and high-security applications', 'Low maintenance'],
    applications: ['Industrial facilities', 'Warehouses & logistics areas', 'Data centers', 'Power & utility facilities', 'Airports & infrastructure', 'Government & restricted-access facilities', 'Security compounds', 'Boundary walls', 'High-security fencing', 'Construction and temporary security fencing'],
    extraSections: [{ title: 'Available Coil Sizes', paragraphs: ['50 cm • 75 cm • 100 cm', 'The coil diameter can be selected according to the required level of perimeter protection and installation configuration.'] }, { title: 'Installation Options', bullets: ['On top of anti-climb fencing', 'On chain-link fencing', 'On welded mesh fencing', 'On security fence extensions', 'Along boundary walls', 'Around gates and restricted-access areas', 'On angled security arms'] }, { title: 'Benefits', paragraphs: ['High Security • Strong Deterrent • Durable Construction • Corrosion Resistant • Multiple Materials • Multiple Coil Sizes • Suitable for High-Security Applications'] }],
  },

  'temporary-fence-panels': {
    slug: 'temporary-fence-panels', title: 'Temporary Fence Panels', category: 'Temporary Fence Panels',
    shortDescription: 'Temporary Fence Panels provide a flexible, portable, and reusable fencing solution.',
    description: ['Temporary Fence Panels provide a flexible, portable, and reusable fencing solution for construction sites, events, infrastructure projects, restricted areas, and temporary site enclosures.', 'Our temporary fencing systems are available in Welded Mesh, Chain-Link Mesh, G.I. Hoarding, and ECO PVC Fence, with different coating and finish options to suit project requirements.', 'Panels can be supplied with precast concrete bases for quick installation, dismantling, and relocation without permanent foundations.'],
    imageSlides: img('temporary-fence-panels', 3),
    optionsTitle: 'Available Fence Options',
    options: [{ title: 'Welded Mesh Temporary Fence' }, { title: 'Chain-Link Temporary Fence' }, { title: 'G.I. Hoarding' }, { title: 'ECO PVC Fence' }],
    specs: [{ label: 'Fence Type', value: 'Welded Mesh / Chain-Link / G.I. Hoarding / ECO PVC Fence' }, { label: 'Material', value: 'Steel / PVC' }, { label: 'Coating', value: 'Hot-Dip G.I. / PVC Coated / Powder Coated' }, { label: 'Support', value: 'Precast Concrete Base' }, { label: 'Connection', value: 'Fence Clamps / Couplers' }, { label: 'Installation', value: 'Freestanding / Temporary' }, { label: 'Customization', value: 'Panel Size, Mesh Opening, Wire Diameter & Finish' }],
    keyFeatures: ['Portable and reusable', 'Quick installation and dismantling', 'Freestanding system with concrete bases', 'Durable and suitable for outdoor use', 'Multiple fencing options', 'Easy to relocate and store', 'Customizable to project requirements'],
    applications: ['Construction & Building Sites', 'Road & Infrastructure Projects', 'Events & Festivals', 'Temporary Site Enclosures', 'Restricted Areas', 'Storage & Material Yards', 'Crowd Management', 'Temporary Security Perimeters'],
    extraSections: [{ title: 'Coating & Finish Options', bullets: ['Hot-Dip Galvanized (G.I.)', 'PVC Coated', 'Powder Coated'] }],
  },

  'fence-accessories': {
    slug: 'fence-accessories', title: 'Fence Accessories', category: 'Fence Accessories',
    shortDescription: 'Fence Accessories include essential components and fixing hardware for Chain-Link and Welded Mesh Fence Systems.',
    description: ['Our range of Fence Accessories includes essential components and fixing hardware required for the installation, assembly, and maintenance of Chain-Link and Welded Mesh Fence Systems.', 'Available in G.I. (Galvanized) and PVC-coated finishes, our accessories are designed to provide reliable connections, secure fixing, and a clean finished appearance. A wide range of clamps, brackets, fasteners, washers, posts, pipes, and other components can be supplied according to project requirements.'],
    imageSlides: img('fence-accessories', 2),
    optionsTitle: 'Available Accessories',
    options: ['Fence Posts', 'Top & Bottom Rails', 'Rail Clamps', 'Band Clamps', 'U-Bolt Clamps', 'Saddle Clamps', 'Tension Bars', 'Rail Ends', 'Post Caps', 'Fence Post Hinges', 'Connecting Clamps', 'Pipe & Tube Components', 'Binding Wire', 'Bolts & Nuts', 'Flat Washers', 'Spring Washers', 'Hex Nuts', 'Self-Drilling Screws', 'Carriage Bolts', 'Coach Screws', 'Eye Bolts', 'J-Bolts', 'Threaded Rods', 'Wing Nuts', 'Other Fixing Accessories'].map(title => ({ title })),
    specs: [{ label: 'Application', value: 'Chain-Link & Welded Mesh Fencing' }, { label: 'Material', value: 'Steel / G.I.' }, { label: 'Finish', value: 'Galvanized / PVC Coated' }, { label: 'PVC Colors', value: 'Green / Black / Custom' }, { label: 'Components', value: 'Clamps / Brackets / Rails / Posts / Fasteners' }, { label: 'Fasteners', value: 'Bolts, Nuts, Washers, Screws & Threaded Components' }, { label: 'Accessories', value: 'Caps, Hinges, Tension Bars, Rail Ends & Clamps' }, { label: 'Customization', value: 'Size, Profile, Finish & Coating' }],
    keyFeatures: ['Strong and durable construction', 'Corrosion-resistant finish options', 'Suitable for outdoor applications', 'Compatible with Chain-Link & Welded Mesh Fencing', 'Secure and reliable fixing', 'Easy installation', 'Wide range of components available', 'Matching G.I. and PVC-coated accessories', 'Suitable for new installations and maintenance'],
    applications: ['Chain-Link Fence Systems', 'Welded Mesh Fence Systems', 'Security Fencing', 'Industrial Fencing', 'Commercial Properties', 'Construction Sites', 'Sports & Recreational Areas', 'Agricultural & Boundary Fencing', 'Infrastructure Projects'],
    extraSections: [{ title: 'Finish Options', bullets: ['G.I. / Galvanized', 'PVC Coated – Green', 'PVC Coated – Black', 'Other finishes/colors upon request'] }, { title: 'Main Accessory Groups', paragraphs: ['Posts & Pipes: Fence posts, support pipes, top rails, bottom rails and connecting pipe components.', 'Clamps & Brackets: Rail clamps, band clamps, U-bolt clamps, saddle clamps and other connection hardware.', 'Mesh Fixing Accessories: Tension bars, binding wire, tensioning components and mesh fixing hardware.', 'Fasteners: Bolts, nuts, flat washers, spring washers, screws, carriage bolts, coach screws, eye bolts, J-bolts and threaded rods.', 'Finishing Accessories: Post caps, rail ends, hinges and other components for a clean and secure installation.'] }, { title: 'Coating Options', paragraphs: ['G.I. / Galvanized: Suitable for durable corrosion protection and outdoor applications.', 'PVC Coated: Available in green and black, providing additional protection together with a finished appearance.'] }],
  },

  'fasteners-bolts': {
    slug: 'fasteners-bolts', title: 'Fasteners / Bolts', category: 'Fasteners / Bolts',
    shortDescription: 'SRK Fence fasteners/Bolts are high-quality fastening components for secure fencing installation.',
    description: ['SRK Fence fasteners/Bolts are high-quality fastening components designed for secure and reliable installation of chain-link fences, welded mesh fences, fence posts, rails, clamps, brackets, gates, and other fencing accessories. Available in multiple materials and finishes to suit different environmental and project requirements.'],
    imageSlides: img('fasteners-bolts', 2),
    specs: [{ label: 'Product', value: 'Fence Nuts & Bolts / Fasteners' }, { label: 'Application', value: 'Chain-Link Fence, Welded Mesh Fence, Fence Posts, Rails & Gates' }, { label: 'Types', value: 'Hex Bolts, Carriage Bolts, Flange Bolts, U-Bolts, Machine Screws, Self-Drilling Screws & More' }, { label: 'Materials', value: 'M.S., G.I., Stainless Steel' }, { label: 'Finishes', value: 'Galvanized / Zinc Plated / Powder Coated / Stainless Steel' }, { label: 'Grades', value: 'Available as per project requirement' }, { label: 'Sizes', value: 'Various sizes available' }, { label: 'Nuts', value: 'Hex Nuts, Flange Nuts, Nyloc Nuts & Lock Nuts' }, { label: 'Washers', value: 'Flat Washers, Spring Washers & Lock Washers' }, { label: 'Thread', value: 'Metric / As per requirement' }, { label: 'Application Type', value: 'Outdoor & Heavy-Duty Fencing' }, { label: 'Customization', value: 'Size, material, finish and grade as per requirement' }],
    keyFeatures: ['Strong and reliable fastening', 'Suitable for outdoor fencing applications', 'Corrosion-resistant options available', 'Multiple sizes and configurations', 'Available in G.I., M.S., Powder Coated and Stainless Steel', 'Suitable for chain-link and welded mesh fencing systems', 'Ideal for posts, rails, clamps, brackets and fence panels'],
    applications: ['Chain-Link Fencing', 'Welded Mesh Fencing', 'Fence Posts', 'Top & Bottom Rails', 'Fence Clamps', 'Gates', 'Security Fencing', 'Perimeter Fencing', 'Construction Fencing'],
  },

  'coating-materials': {
    slug: 'coating-materials', title: 'COATING MATERIALS', category: 'Coating Materials',
    shortDescription: 'SRK Coating Materials offer protective coating solutions for fencing products and steel components.',
    description: ['SRK Coating Materials offer a range of protective coating solutions designed to enhance the durability, corrosion resistance and appearance of fencing products and steel components. These coatings are suitable for chain-link fences, welded mesh, fence wires, steel pipes, fence posts, gates and other metal structures, providing protection against outdoor and environmental conditions.'],
    imageSlides: img('coating-materials', 3),
    optionsTitle: 'Available Coating Options',
    options: [{ title: 'PVC Coating', description: 'Flexible protective coating providing corrosion resistance, weather protection and a smooth finish.' }, { title: 'PE Coating', description: 'Polyethylene coating offering good adhesion, weather resistance and a durable protective layer.' }, { title: 'Powder Coating (Polyester)', description: 'Electrostatic powder coating with excellent durability, attractive finish and good resistance to weather and corrosion.' }, { title: 'Zinc Coating / Galvanizing', description: 'Zinc protective coating designed to protect steel against rust and corrosion.' }, { title: 'Hot-Dip Galvanizing', description: 'Immersion-based zinc coating providing a thicker and highly durable protective layer for demanding outdoor applications.' }, { title: 'Green Powder Coating', description: 'Green polyester powder coating providing a durable, attractive finish with additional protection against corrosion and weathering.' }],
    specs: [{ label: 'Product', value: 'Protective Coating Materials' }, { label: 'Applications', value: 'Chain-Link Fence, Welded Mesh, Fence Wires, Pipes, Posts, Gates & Steel Structures' }, { label: 'PVC Coating', value: 'Available in various thicknesses and colours as per requirement' }, { label: 'PE Coating', value: 'Available in various thicknesses and colours as per requirement' }, { label: 'Powder Coating', value: 'Polyester powder coating, available in multiple colours' }, { label: 'Zinc Coating', value: 'Galvanized finish for corrosion protection' }, { label: 'Hot-Dip Galvanizing', value: 'Heavy-duty zinc coating for enhanced outdoor protection' }, { label: 'Green Powder Coating', value: 'Green finish, with custom colours available' }, { label: 'Colours', value: 'Green, Black, Silver and other colours as required' }, { label: 'Finish', value: 'Smooth / Gloss / Matt depending on coating type' }, { label: 'Application Method', value: 'PVC/PE Extrusion, Powder Coating, Electrostatic Coating or Galvanizing as applicable' }, { label: 'Customization', value: 'Coating type, colour, thickness and finish can be provided as per project requirement' }],
    keyFeatures: ['Excellent corrosion and rust protection', 'UV and weather resistance', 'Durable and long-lasting finish', 'Strong adhesion to metal surfaces', 'Available in multiple colours and finishes', 'Suitable for indoor and outdoor applications', 'Helps extend the service life of fencing products', 'Suitable for various industrial, commercial and residential projects'],
    applications: ['Chain-Link Fencing', 'Welded Mesh Fencing', 'Fence Wires', 'Fence Posts', 'Steel Pipes', 'Gates', 'Security Fencing', 'Perimeter Fencing', 'Industrial Fencing', 'Sports Fencing', 'Railings', 'Steel Structures'],
  },

  'colors-and-coating-options': {
    slug: 'colors-and-coating-options', title: 'Colors & Coating Options', category: 'Colors & Coating Options',
    shortDescription: 'Durable surface protection for enhanced corrosion resistance, longer service life, and a professional finish.',
    description: ['Durable surface protection for enhanced corrosion resistance, longer service life, and a professional finish.', 'We offer multiple coating solutions to suit different environments, applications, durability requirements, and aesthetic preferences.'],
    imageSlides: [{ src: '/products/pdf-mapped/color-and-coating-options/color-and-coating-options-01.webp', alt: 'colors and coating options PDF image 1' }, { src: '/products/pdf-mapped/color-and-coating-options/color-and-coating-options-02.webp', alt: 'colors and coating options PDF image 2' }],
    optionsTitle: 'Coating Options',
    options: [{ title: 'Electro Galvanized (EG)', description: 'Zinc coating applied through an electroplating process, providing a smooth and uniform finish with good corrosion protection. Best suited for indoor applications, light-duty fencing, and controlled environments.' }, { title: 'Hot-Dip Galvanized (HDG / G.I.)', description: 'Steel is immersed in molten zinc to create a durable protective coating with excellent resistance against corrosion and weather exposure. Best suited for outdoor fencing, industrial projects, boundary fencing, and demanding environments.' }, { title: 'PVC Coated', description: 'Galvanized steel wire is coated with a protective PVC layer, providing additional corrosion resistance, weather protection, and an attractive colored finish. Available in Green, Black and other colors subject to requirement. Best suited for security fencing, residential fencing, sports facilities, landscaping, and coastal/outdoor applications.' }, { title: 'Powder Coated', description: 'A dry powder coating is electrostatically applied and cured to create a durable, uniform and attractive surface. Best suited for architectural fencing, decorative fencing, gates, commercial projects, and applications where appearance is important.' }],
    specs: [{ label: 'Wire Diameter', value: '1.8 mm – 6.0 mm*' }, { label: 'Mesh Opening', value: 'Available in various sizes as per requirement' }, { label: 'Coating Options', value: 'Electro Galvanized / Hot-Dip Galvanized / PVC Coated / Powder Coated' }, { label: 'Zinc Coating', value: 'Available as per required specification' }, { label: 'PVC Coating', value: 'Available in various thicknesses and colors' }, { label: 'Powder Coating', value: 'Available in a wide range of RAL colors' }, { label: 'Colors', value: 'Green / Black / White / Grey / Blue / Custom' }, { label: 'Material', value: 'Galvanized Steel / PVC Coated Steel / As specified' }, { label: 'Finish', value: 'Smooth / Uniform / Colored' }, { label: 'Note', value: '*Exact specifications depend on the product type and project requirement.' }],
    keyFeatures: ['Excellent corrosion resistance', 'Long service life', 'Weather-resistant options', 'UV-resistant PVC coating options', 'Wide range of colors', 'Smooth and uniform finish', 'Low maintenance', 'Suitable for residential, commercial and industrial applications'],
    applications: ['Indoor applications', 'Light-duty fencing', 'Controlled environments', 'Outdoor fencing', 'Industrial projects', 'Boundary fencing', 'Security fencing', 'Residential fencing', 'Sports facilities', 'Landscaping', 'Coastal/outdoor applications', 'Architectural fencing', 'Decorative fencing', 'Gates', 'Commercial projects'],
    extraSections: [{ title: 'Available Colors', paragraphs: ['Green • Black • White • Grey • Blue • Custom RAL Colors', 'For PVC and powder-coated products, colors can be selected according to project requirements and availability.'] }, { title: 'Coating Comparison', table: [{ label: 'Electro Galvanized', value: 'Corrosion Protection: Good • Appearance: Bright / Smooth • Typical Application: Indoor & light-duty' }, { label: 'Hot-Dip Galvanized', value: 'Corrosion Protection: Excellent • Appearance: Zinc / Metallic • Typical Application: Outdoor & heavy-duty' }, { label: 'PVC Coated', value: 'Corrosion Protection: Excellent • Appearance: Colored • Typical Application: Outdoor, security & decorative' }, { label: 'Powder Coated', value: 'Corrosion Protection: Very Good • Appearance: Premium colored finish • Typical Application: Architectural & decorative' }] }],
  },

  'rectangle-mesh-fence': {
    slug: 'rectangle-mesh-fence', title: 'Rectangle Mesh Fence', category: 'Rectangle Mesh Fence',
    shortDescription: 'SRK Rectangle Mesh Fence is a strong and durable welded wire fencing system.',
    description: ['SRK Rectangle Mesh Fence is a strong and durable welded wire fencing system designed to provide a reliable combination of security, visibility, durability, and clean appearance. The rectangular welded mesh structure provides a rigid and stable fence panel suitable for residential, commercial, industrial, sports, and infrastructure applications.', 'The fence can be supplied with different wire diameters, mesh openings, panel heights, widths, and protective coatings according to project requirements.'],
    imageSlides: img('rectangle-mesh-fence', 2),
    specs: [{ label: 'Material', value: 'High-quality low-carbon steel wire' }, { label: 'Mesh Type', value: 'Welded rectangular mesh' }, { label: 'Wire Diameter', value: 'As per project requirement' }, { label: 'Mesh Opening', value: 'Various rectangular openings available' }, { label: 'Panel Width', value: 'Available as per project requirement' }, { label: 'Panel Height', value: 'Available as per project requirement' }, { label: 'Posts', value: 'Square / rectangular / round posts' }, { label: 'Coating', value: 'Hot-Dip Galvanized / PVC Coated / Powder Coated' }, { label: 'Colors', value: 'Green, Black, White, Grey, Blue & Custom RAL' }, { label: 'Finish', value: 'Galvanized / PVC Coated / Powder Coated' }],
    keyFeatures: ['High-strength welded steel mesh construction', 'Excellent perimeter security', 'Open design for clear visibility', 'Long service life', 'Corrosion and weather-resistant coating options', 'Low maintenance', 'Suitable for outdoor applications', 'Available in PVC-coated and powder-coated finishes', 'Compatible with different post and fixing systems'],
    applications: ['Perimeter fencing', 'Industrial facilities', 'Commercial properties', 'Residential areas', 'Schools & universities', 'Parks & playgrounds', 'Sports facilities', 'Airports and infrastructure', 'Security compounds'],
    extraSections: [{ title: 'Coating Options', paragraphs: ['Hot-Dip Galvanized (HDG) – Excellent corrosion protection for outdoor and industrial applications.', 'PVC Coated – Additional protection with an attractive colored finish, particularly suitable for outdoor fencing.', 'Powder Coated – Durable decorative finish available in a wide range of RAL colors.'] }, { title: 'Available Colors', bullets: ['Green', 'Black', 'White', 'Grey', 'Blue', 'Custom RAL Colors'] }, { title: 'Key Benefits', paragraphs: ['Strong & Secure • Corrosion Resistant • Weather Resistant • Long Service Life • Excellent Visibility • Low Maintenance • Easy Installation'] }],
  },

  'gabion-wall-and-fencing': {
    slug: 'gabion-wall-and-fencing', title: 'Gabion Wall & Fencing', category: 'Gabion Wall & Fencing',
    shortDescription: 'Gabion Wall & Fencing is a durable and versatile fencing and retaining solution.',
    description: ['Gabion Wall & Fencing is a durable and versatile fencing and retaining solution made from high-strength wire mesh baskets filled with natural or selected stone. The gabion structure combines structural stability, security, durability, and an attractive natural appearance, making it suitable for both functional and architectural applications.', 'Gabion walls can be used as standalone retaining or boundary walls, or combined with steel fencing installed above the gabion structure to provide additional height and security.'],
    imageSlides: [{ src: '/products/pdf-mapped/gabion-wall/gabion-wall-01.webp', alt: 'gabion wall PDF image 1' }, { src: '/products/pdf-mapped/gabion-wall/gabion-wall-02.webp', alt: 'gabion wall PDF image 2' }],
    optionsTitle: 'Gabion Mesh Options',
    options: [{ title: 'Welded Gabion Mesh', description: 'Rigid welded panels provide a clean, uniform appearance and excellent dimensional stability.' }, { title: 'Woven Gabion Mesh', description: 'Flexible woven wire mesh is suitable for applications where flexibility and structural adaptability are required.' }],
    specs: [{ label: 'Gabion Type', value: 'Welded Mesh / Woven Mesh' }, { label: 'Mesh Material', value: 'Galvanized Steel Wire' }, { label: 'Mesh Finish', value: 'Galvanized / PVC Coated' }, { label: 'Gabion Shape', value: 'Rectangular / Custom' }, { label: 'Stone Filling', value: 'Natural Stone / Project-Specified Stone' }, { label: 'Gabion Dimensions', value: 'Custom sizes available' }, { label: 'Wire Diameter', value: 'As per project requirement' }, { label: 'Mesh Opening', value: 'As per project requirement' }, { label: 'Fencing Above Gabion', value: 'Welded Mesh / Chain Link / Security Fence' }, { label: 'Fence Finish', value: 'Hot-Dip Galvanized / PVC Coated / Powder Coated' }, { label: 'Fence Color', value: 'Green / Black / Grey / White / Custom RAL' }],
    keyFeatures: ['Strong welded or woven wire mesh construction', 'Excellent structural stability', 'Suitable for retaining and boundary applications', 'High resistance to outdoor weather conditions', 'Long service life with suitable corrosion protection', 'Natural stone-filled appearance', 'Can be combined with steel fencing', 'Low maintenance', 'Suitable for landscaping and architectural applications', 'Custom configurations available according to project requirements'],
    applications: ['Retaining walls', 'Boundary walls', 'Perimeter security', 'Landscape projects', 'Roads and infrastructure', 'Commercial developments', 'Residential projects', 'Parks and public areas', 'Industrial facilities', 'Slope and erosion control', 'Security fencing with gabion base'],
    extraSections: [{ title: 'Coating Options', paragraphs: ['Hot-Dip Galvanized provides enhanced corrosion resistance and is suitable for demanding outdoor environments.', 'PVC Coated: A protective PVC layer provides additional corrosion and weather resistance while giving the gabion a finished appearance.'] }, { title: 'Fencing Options', bullets: ['Chain Link Fencing', 'Welded Mesh Fencing', '3D V-Bending Welded Fence', 'High-Security Fencing', 'Decorative / Architectural Fencing'] }, { title: 'Available Colors', bullets: ['Green', 'Black', 'Grey', 'White', 'Blue', 'Custom RAL Colors'] }, { title: 'Benefits', paragraphs: ['Strong & Stable • Natural Appearance • Corrosion Resistant • Weather Resistant • Long Service Life • Low Maintenance • Security & Privacy • Landscaping Friendly'] }],
  },

  'clamps-and-connectors': {
    slug: 'clamps-and-connectors', title: 'Clamps & Connectors', category: 'Clamps & Connectors',
    shortDescription: 'Clamps & Connectors are essential components for secure assembly and connection of Chain-Link and Welded Mesh Fence Systems.',
    description: ['Clamps & Connectors are essential components used for the secure assembly and connection of Chain-Link and Welded Mesh Fence Systems. They provide strong connections between fence posts, rails, mesh panels, and supporting structures while ensuring a stable and durable installation.', 'We offer a wide range of clamps, connectors, brackets, U-bolts, saddle clamps, rail clamps, and joining accessories in different sizes and configurations.', 'Available in M.S. / Galvanized and Powder-Coated finishes, with green and other colors available according to project requirements.'],
    imageSlides: img('clamps-and-connectors', 2),
    optionsTitle: 'Available Types',
    options: ['Post Clamps', 'Rail Clamps', 'U-Bolt Clamps', 'Saddle Clamps', 'Band Clamps', 'Corner Clamps', 'T-Clamps', 'Cross Connectors', 'Panel Connectors', 'Mesh Fixing Clamps', 'Rail-to-Post Connectors', 'Pipe-to-Pipe Connectors', 'Joining Clamps', 'Brackets & Fixing Plates', 'Customized Connectors'].map(title => ({ title })),
    specs: [{ label: 'Application', value: 'Chain-Link & Welded Mesh Fencing' }, { label: 'Material', value: 'M.S. / Steel / G.I.' }, { label: 'Finish', value: 'Galvanized / Powder Coated / PVC Coated' }, { label: 'Colors', value: 'G.I. / Green / Black / Custom' }, { label: 'Types', value: 'U-Bolt / Saddle / Band / Rail / T / Corner / Cross' }, { label: 'Compatible Posts', value: 'Round / Square / Rectangular' }, { label: 'Compatible Rails', value: 'Top Rail / Bottom Rail / Intermediate Rail' }, { label: 'Fasteners', value: 'Bolts / Nuts / Washers' }, { label: 'Installation', value: 'Mechanical Fixing' }, { label: 'Customization', value: 'Size, Profile, Thickness, Hole Pattern & Finish' }],
    keyFeatures: ['Strong and secure connections', 'Suitable for Chain-Link & Welded Mesh Fencing', 'Durable steel construction', 'Galvanized corrosion-resistant options', 'Powder-coated color options', 'Easy installation and maintenance', 'Multiple connection configurations', 'Suitable for round and square posts', 'Available in different sizes', 'Customized designs available'],
    applications: ['Chain-Link Fence Systems', 'Welded Mesh Fence Systems', 'Perimeter Fencing', 'Security Fencing', 'Industrial Fencing', 'Commercial Properties', 'Sports & Recreational Areas', 'Construction Sites', 'Agricultural Fencing', 'Infrastructure Projects'],
    extraSections: [{ title: 'Material & Finish Options', bullets: ['M.S. / Galvanized', 'Powder Coated', 'PVC Coated', 'Green Powder Coating', 'Black Powder Coating', 'Other colors upon request'] }, { title: 'Main Connection Applications', paragraphs: ['Post-to-Mesh: Used to securely attach chain-link or welded mesh to fence posts.', 'Post-to-Rail: Connects top, bottom, or intermediate rails to supporting posts.', 'Rail-to-Rail: Used for joining horizontal rails and extending the fence framework.', 'Panel-to-Post: Suitable for fixing welded mesh panels securely to posts.', 'Corner & T-Connections: Used at corners, intersections, and changes in fence direction.'] }, { title: 'Available Finishes', paragraphs: ['G.I. / Galvanized provides corrosion resistance and is suitable for outdoor fencing applications.', 'M.S. / Powder Coated provides a durable colored finish, with green and black being common options.', 'PVC Coated can be matched with PVC-coated fencing components for a uniform appearance.'] }],
  },
};

export const isPdfProductSlug = (slug: string) => pdfProductSlugs.includes(slug as (typeof pdfProductSlugs)[number]);

export const getPdfProductContent = (slug: string) => pdfProductContents[slug];
