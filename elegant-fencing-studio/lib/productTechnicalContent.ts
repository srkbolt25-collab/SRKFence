export type TechnicalContentBlock =
  | { type: 'heading'; level: 1 | 2 | 3; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; ordered: boolean; items: string[] }
  | { type: 'table'; headerRows: number; rows: string[][] };

export type ProductTechnicalContent = {
  sourceLabel: string;
  blocks: TechnicalContentBlock[];
};

export const productTechnicalContent: Record<string, ProductTechnicalContent> = {
  "gi-coil": {
    "sourceLabel": "SRK Steel page content update",
    "blocks": [
      {
        "type": "table",
        "headerRows": 2,
        "rows": [
          [
            "Supply & Processing Capability",
            "Supply & Processing Capability",
            "Supply & Processing Capability",
            "Supply & Processing Capability"
          ],
          [
            "Description",
            "Galvanized Coil Supply",
            "Cut-to-Length",
            "Slitting"
          ],
          [
            "Type",
            "GALVANIZED STEEL",
            "GALVANIZED STEEL",
            "GALVANIZED STEEL"
          ],
          [
            "Thickness (mm)",
            "0.20–2.50 mm",
            "0.20–5.00 mm",
            "0.20–2.50 mm"
          ],
          [
            "Width (mm)",
            "1,219 mm",
            "1,219–2,000 mm",
            "50–1,219 mm"
          ],
          [
            "Coil ID (mm)",
            "500 mm and 650 mm",
            "–",
            "500 mm and 620 mm"
          ],
          [
            "Coil OD (mm)",
            "1,950 mm max",
            "–",
            "1,950 mm max"
          ],
          [
            "Output Coil Weight (MT)",
            "5 MT max",
            "–",
            "5 MT max"
          ],
          [
            "Zinc Coating (g/m²)",
            "60–275 g/m²",
            "60–275 g/m²",
            "60–275 g/m²"
          ],
          [
            "Length (mm)",
            "–",
            "500–4,000 mm max",
            "–"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Galvanized (GI) Steel Coils & Sheets – Types, Grades, Specifications & Standards"
      },
      {
        "type": "table",
        "headerRows": 1,
        "rows": [
          [
            "Description",
            "Specification"
          ],
          [
            "Product",
            "Galvanized Steel / Hot-Dip Galvanized Steel"
          ],
          [
            "ASTM Standard",
            "ASTM A653/A653M:2023"
          ],
          [
            "ASTM Grades / Classes",
            "CS Type A, CS Type B, CS Type C; FS Type A, FS Type B; SS Grade 33, 37, 40, 50, 80"
          ],
          [
            "EN Standard",
            "EN 10346:2015"
          ],
          [
            "EN Steel Grades",
            "DX51D, DX52D, DX53D, S220GD, S250GD, S280GD, S320GD, S350GD, S450GD, S550GD"
          ],
          [
            "JIS Standard",
            "JIS G 3302:2022"
          ],
          [
            "JIS Standard Status",
            "Referenced edition; supersedes JIS G 3302:2019"
          ],
          [
            "JIS Steel Grades",
            "SGCC, SGCH, SGCD1, SGCD2, SGC340, SGC400, SGC440, SGC490, SGC570"
          ],
          [
            "Product Type",
            "Tension Levelled / Non-Tension Levelled"
          ],
          [
            "Skin Treatment",
            "Skin Passed / Non-Skin Passed"
          ],
          [
            "Surface Finish",
            "Large Spangle / Regular Spangle / Minimized Spangle / Suppressed Spangle"
          ],
          [
            "Surface Treatment",
            "Chromate Passivated (Cr6+ / Cr3+), Non-Chromate Passivated, Oiled, Non-Oiled, No Treatment"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Galvanized (GI) Steel Coils & Sheets: International Standards & Equivalent Grades"
      },
      {
        "type": "table",
        "headerRows": 1,
        "rows": [
          [
            "Classification",
            "ASTM A653/A653M:2023",
            "EN 10346:2015",
            "JIS G 3302:2022"
          ],
          [
            "Commercial Quality",
            "CS Type A, B, C",
            "DX51D",
            "SGCC / SGCH"
          ],
          [
            "Lock Forming Quality",
            "CS",
            "DX51D",
            "SGCD1"
          ],
          [
            "Drawing Quality",
            "FS Type A, B",
            "DX52D",
            "SGCD2"
          ],
          [
            "Deep Drawing Quality",
            "DDS / EDDS",
            "DX53D",
            "SGCD3"
          ],
          [
            "Structural Quality – Lower Grades",
            "SS Grade 33 / 37",
            "S220GD / S250GD / S280GD",
            "SGC340 / SGC400"
          ],
          [
            "Structural Quality – Higher Grades",
            "SS Grade 40 / 50 / 80",
            "S320GD / S350GD / S450GD / S550GD",
            "SGC440 / SGC490 / SGC570"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "GI Galvanized Steel Coils & Sheets – Specifications & International Standards"
      },
      {
        "type": "paragraph",
        "text": "SRK Steel supplies Hot-Dip Galvanized Steel Coils (GI Coils) and Galvanized Steel Sheets manufactured in accordance with leading international standards, including ASTM, JIS and EN specifications. The material is manufactured and quality-controlled to meet agreed mechanical, dimensional and zinc-coating requirements for industrial, construction and fabrication applications."
      },
      {
        "type": "paragraph",
        "text": "GI steel coils and sheets can be supplied in different grades, thicknesses, widths and zinc-coating weights to meet project-specific requirements across the UAE, GCC and selected international markets. Quality inspection and testing are carried out at the manufacturing and processing stage in accordance with the applicable technical specification and agreed customer requirements."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Applicable International Standards for GI Steel Coils & Sheets"
      },
      {
        "type": "paragraph",
        "text": "The following international standards are commonly applicable to Hot-Dip Galvanized Steel Coils and Sheets. The specific standard, steel grade, coating designation and mechanical properties can be selected according to the customer's application and project requirements."
      },
      {
        "type": "table",
        "headerRows": 1,
        "rows": [
          [
            "International Standard",
            "Standard / Specification",
            "Description"
          ],
          [
            "ASTM",
            "ASTM A653/A653M",
            "Standard Specification for Steel Sheet, Zinc-Coated (Galvanized) or Zinc-Iron Alloy-Coated by the Hot-Dip Process"
          ],
          [
            "JIS",
            "JIS G 3302",
            "Hot-Dip Zinc-Coated Steel Sheet and Strip"
          ],
          [
            "EN",
            "EN 10346",
            "Continuously Hot-Dip Coated Steel Flat Products – Technical Delivery Conditions"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "GI Steel Coil Standards & Equivalent Specifications"
      },
      {
        "type": "paragraph",
        "text": "Depending on the application, GI coils and sheets can be supplied to ASTM A653/A653M, JIS G 3302 and EN 10346 requirements, subject to the specified steel grade, mechanical properties, thickness and dimensional tolerances, and zinc-coating requirement."
      },
      {
        "type": "paragraph",
        "text": "Customers can specify requirements such as:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Steel grade and mechanical properties",
          "Coating designation / zinc coating weight",
          "Base metal thickness",
          "Coil or sheet width",
          "Dimensional tolerances",
          "Surface finish",
          "Spangle requirements",
          "Oiling or passivation",
          "Coil weight and packing requirements",
          "Mill Test Certificate (MTC) and inspection documentation"
        ]
      },
      {
        "type": "paragraph",
        "text": "For projects in the UAE, Saudi Arabia, Qatar, Oman, Kuwait and other GCC markets, the applicable galvanized steel specification should be confirmed according to the project drawings, consultant requirements and relevant technical standards."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Quality & Compliance"
      },
      {
        "type": "paragraph",
        "text": "SRK Steel focuses on supplying GI steel coils and sheets that meet agreed requirements for zinc-coating performance, dimensional accuracy and mechanical properties. Material can be supplied with relevant technical documentation and Mill Test Certificates (MTC), subject to the agreed specification and order requirements."
      },
      {
        "type": "paragraph",
        "text": "Hot-Dip Galvanized Steel Coils and Sheets supplied by SRK Steel are suitable for applications including roofing, cladding, ducting, HVAC, fabrication, construction, structural components, fencing, roll forming and general engineering."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "ZINC COATING MASS"
      },
      {
        "type": "table",
        "headerRows": 1,
        "rows": [
          [
            "Coating Type",
            "Coating Designation",
            "Minimum Requirement – Triple-Spot Test Total Both Sides (g/m²)",
            "Minimum Requirement – Single-Spot Test One Side (g/m²)",
            "Minimum Requirement – Single-Spot Test Total Both Sides (g/m²)"
          ],
          [
            "Zinc",
            "Z350",
            "350",
            "120",
            "300"
          ],
          [
            "Zinc",
            "Z275",
            "275",
            "94",
            "235"
          ],
          [
            "Zinc",
            "Z180",
            "180",
            "60",
            "150"
          ],
          [
            "Zinc",
            "Z120",
            "120",
            "36",
            "90"
          ],
          [
            "Zinc",
            "Z90",
            "90",
            "30",
            "75"
          ],
          [
            "Zinc",
            "Z001",
            "No minimum",
            "No minimum",
            "No minimum"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "ASTM A653/A653M-2023 – Specification for Galvanized Steel Coils & Sheets"
      },
      {
        "type": "paragraph",
        "text": "ASTM A653/A653M-2023 is an internationally recognized specification covering steel sheet coated with zinc (galvanized) or zinc-iron alloy (galvannealed) through the continuous hot-dip coating process."
      },
      {
        "type": "paragraph",
        "text": "The standard is published by ASTM International and establishes requirements for the chemical composition, mechanical properties, coating characteristics, dimensions and other technical requirements applicable to hot-dip coated steel sheet."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "ASTM A653/A653M-2023 for GI Steel Coils"
      },
      {
        "type": "paragraph",
        "text": "ASTM A653/A653M is widely referenced for Hot-Dip Galvanized (GI) Steel Coils and Sheets used in construction, roofing, cladding, HVAC, fabrication, automotive, fencing and general engineering applications."
      },
      {
        "type": "paragraph",
        "text": "Depending on the required application, galvanized steel supplied to ASTM A653/A653M can be specified by:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Steel grade",
          "Yield strength",
          "Tensile strength",
          "Elongation",
          "Base metal thickness",
          "Coating designation",
          "Zinc coating requirements",
          "Width and dimensional tolerances",
          "Surface finish",
          "Oiling and chemical treatment requirements"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Galvanized and Galvannealed Steel under ASTM A653/A653M"
      },
      {
        "type": "paragraph",
        "text": "ASTM A653/A653M covers both zinc-coated galvanized steel and zinc-iron alloy-coated galvannealed steel produced using a continuous hot-dip coating process."
      },
      {
        "type": "paragraph",
        "text": "For standard GI galvanized steel coils and sheets, the coating consists primarily of zinc and provides corrosion protection to the underlying steel. Galvannealed products have a zinc-iron alloy coating and are commonly selected where specific forming, painting or fabrication requirements apply."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Applications of ASTM A653 Galvanized Steel"
      },
      {
        "type": "paragraph",
        "text": "Galvanized steel coils and sheets manufactured or supplied to ASTM A653/A653M are commonly used for:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Roofing and wall cladding",
          "HVAC ducting and components",
          "Steel fabrication",
          "Fencing and mesh products",
          "Cable trays and electrical applications",
          "Roll-formed profiles",
          "Structural and construction components",
          "Automotive and industrial components",
          "General engineering applications"
        ]
      },
      {
        "type": "paragraph",
        "text": "For projects in the UAE and GCC markets, the required ASTM A653/A653M grade, coating designation, thickness, width and mechanical properties should be specified according to the project drawings, consultant requirements and application."
      },
      {
        "type": "paragraph",
        "text": "SRK Steel supplies GI galvanized steel coils and sheets according to agreed technical requirements and applicable international standards, with material documentation and Mill Test Certificates (MTC) available where required."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "CHEMICAL COMPOSITION"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Chemical Composition – ASTM A653/A653M"
      },
      {
        "type": "paragraph",
        "text": "Maximum values unless otherwise indicated; values are in mass %."
      },
      {
        "type": "table",
        "headerRows": 1,
        "rows": [
          [
            "Classification",
            "Type / Grade",
            "C",
            "Mn",
            "P",
            "S",
            "Al",
            "Cu",
            "Ni",
            "Cr",
            "Mo",
            "V",
            "Cb (Nb)",
            "Ti",
            "N"
          ],
          [
            "ASTM A653/A653M",
            "CS Type A",
            "0.10",
            "0.60",
            "0.030",
            "0.035",
            "—",
            "0.20",
            "0.20",
            "0.15",
            "0.06",
            "0.008",
            "0.008",
            "0.025",
            "—"
          ],
          [
            "",
            "CS Type B",
            "0.02–0.15",
            "0.60",
            "0.030",
            "0.035",
            "—",
            "0.20",
            "0.20",
            "0.15",
            "0.06",
            "0.008",
            "0.008",
            "0.025",
            "—"
          ],
          [
            "",
            "CS Type C",
            "0.08",
            "0.60",
            "0.100",
            "0.035",
            "—",
            "0.20",
            "0.20",
            "0.15",
            "0.06",
            "0.008",
            "0.008",
            "0.025",
            "—"
          ],
          [
            "",
            "FS Type A",
            "0.10",
            "0.50",
            "0.020",
            "0.035",
            "—",
            "0.20",
            "0.20",
            "0.15",
            "0.06",
            "0.008",
            "0.008",
            "0.025",
            "—"
          ],
          [
            "",
            "FS Type B",
            "0.02–0.10",
            "0.50",
            "0.020",
            "0.030",
            "—",
            "0.20",
            "0.20",
            "0.15",
            "0.06",
            "0.008",
            "0.008",
            "0.025",
            "—"
          ],
          [
            "",
            "DDS",
            "0.06",
            "0.50",
            "0.020",
            "0.025",
            "0.01",
            "0.20",
            "0.20",
            "0.15",
            "0.06",
            "0.008",
            "0.008",
            "0.025",
            "—"
          ],
          [
            "",
            "EDDS",
            "0.02",
            "0.40",
            "0.020",
            "0.020",
            "0.01",
            "0.20",
            "0.20",
            "0.15",
            "0.06",
            "0.10",
            "0.10",
            "0.15",
            "—"
          ],
          [
            "",
            "SS Grade 230 / Grade A / Grade 33",
            "0.20",
            "—",
            "0.04",
            "0.04",
            "—",
            "0.20",
            "0.20",
            "0.15",
            "0.06",
            "0.008",
            "0.008",
            "0.025",
            "—"
          ],
          [
            "",
            "SS Grade 255 / Grade B / Grade 37",
            "0.20",
            "—",
            "0.10",
            "0.04",
            "—",
            "0.20",
            "0.20",
            "0.15",
            "0.06",
            "0.008",
            "0.008",
            "0.025",
            "—"
          ],
          [
            "",
            "SS Grade 275 / Grade C / Grade 40",
            "0.25",
            "—",
            "0.10",
            "0.04",
            "—",
            "0.20",
            "0.20",
            "0.15",
            "0.06",
            "0.008",
            "0.008",
            "0.025",
            "—"
          ],
          [
            "",
            "SS Grade 340 C1 / Grade D / Grade 50",
            "0.25",
            "—",
            "0.20",
            "0.04",
            "—",
            "0.20",
            "0.20",
            "0.15",
            "0.06",
            "0.008",
            "0.008",
            "0.025",
            "—"
          ],
          [
            "",
            "SS Grade 340 C2 / Grade E / Grade 50",
            "0.25",
            "—",
            "0.20",
            "0.04",
            "—",
            "0.20",
            "0.20",
            "0.15",
            "0.06",
            "0.008",
            "0.008",
            "0.025",
            "—"
          ],
          [
            "",
            "SS Grade 340 C3 / Grade F / Grade 50",
            "0.25",
            "—",
            "0.04",
            "0.04",
            "—",
            "0.20",
            "0.20",
            "0.15",
            "0.06",
            "0.008",
            "0.008",
            "0.025",
            "—"
          ],
          [
            "",
            "SS Grade 550 / Grade E / Grade 80",
            "0.20",
            "—",
            "0.04",
            "0.04",
            "—",
            "0.20",
            "0.20",
            "0.15",
            "0.06",
            "0.008",
            "0.015",
            "0.025",
            "—"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "TYPICAL RANGES OF MECHANICAL PROPERTIES"
      },
      {
        "type": "table",
        "headerRows": 1,
        "rows": [
          [
            "Classification",
            "Type",
            "Yield Strength (MPa) Min.\n(MPa) Min.",
            "Tensile Strength (MPa) Min.",
            "Elongation in 50 mm Min. (%)"
          ],
          [
            "ASTM A653",
            "CS type A",
            "170/380",
            "–",
            "≥ 20"
          ],
          [
            "ASTM A653",
            "CS type B",
            "205/380",
            "–",
            "≥ 20"
          ],
          [
            "ASTM A653",
            "CS type C",
            "170/410",
            "–",
            "≥ 15"
          ],
          [
            "ASTM A653",
            "FS type A",
            "170/310",
            "–",
            "≥ 26"
          ],
          [
            "ASTM A653",
            "FS type B",
            "170/310",
            "–",
            "≥ 26"
          ],
          [
            "ASTM A653",
            "DDS",
            "140/240",
            "–",
            "≥ 32"
          ],
          [
            "ASTM A653",
            "EDDS",
            "105/170",
            "–",
            "≥ 40"
          ],
          [
            "ASTM A653",
            "SS-Gr 230/Gr A/ Gr 33",
            "230",
            "310",
            "20"
          ],
          [
            "ASTM A653",
            "SS-Gr 255/Gr B/ Gr 37",
            "255",
            "360",
            "18"
          ],
          [
            "ASTM A653",
            "SS-Gr 275/Gr C/ Gr 40",
            "275",
            "380",
            "16"
          ],
          [
            "ASTM A653",
            "SS-Gr 340 C1/Gr D/ Gr 50",
            "340",
            "450",
            "12"
          ],
          [
            "ASTM A653",
            "SS-Gr 340 C2/Gr E/ Gr 50",
            "340",
            "–",
            "12"
          ],
          [
            "ASTM A653",
            "SS-Gr 340 C3/Gr F/ Gr 50",
            "340",
            "480",
            "12"
          ],
          [
            "ASTM A653",
            "SS-Gr 550/Gr E/ Gr 80",
            "550",
            "570",
            "–"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "EN 10346:2015 – European Standard for Galvanized Steel Coils & Sheets"
      },
      {
        "type": "paragraph",
        "text": "EN 10346:2015 is a European Standard covering continuously hot-dip coated steel flat products, including Hot-Dip Galvanized (GI) Steel Coils and Sheets. The standard specifies technical delivery conditions and requirements for steel products coated with zinc, zinc-iron alloys and other metallic coatings."
      },
      {
        "type": "paragraph",
        "text": "EN 10346:2015 consolidated and replaced several earlier European standards covering continuously hot-dip coated steel products, including EN 10327:2004, EN 10326:2004, EN 10142 and EN 10147."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "EN 10346:2015 for Hot-Dip Galvanized Steel Coils"
      },
      {
        "type": "paragraph",
        "text": "EN 10346 is widely referenced for the specification and supply of galvanized steel coils and sheets used in construction, roofing, cladding, HVAC, fabrication, automotive and general engineering applications."
      },
      {
        "type": "paragraph",
        "text": "The standard addresses important product requirements including:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Steel grade and designation",
          "Chemical composition",
          "Mechanical properties",
          "Yield strength and tensile strength",
          "Elongation",
          "Zinc coating designation",
          "Coating mass and coating characteristics",
          "Surface quality",
          "Dimensional and shape tolerances",
          "Thickness and width requirements",
          "Bending and forming characteristics"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Galvanized Steel Grades Under EN 10346"
      },
      {
        "type": "paragraph",
        "text": "EN 10346 includes different steel grades designed for specific applications and forming requirements. The appropriate grade and coating designation should be selected according to the intended application, forming requirements, corrosion protection requirements and project specifications."
      },
      {
        "type": "paragraph",
        "text": "For GI galvanized steel coils and sheets, customers can specify the required:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Steel grade",
          "Base metal thickness",
          "Coil or sheet width",
          "Zinc coating designation",
          "Surface finish",
          "Mechanical properties",
          "Dimensional tolerances",
          "Coil weight and packing requirements",
          "Mill Test Certificate (MTC)"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "EN 10346 Galvanized Steel for UAE & GCC Applications"
      },
      {
        "type": "paragraph",
        "text": "EN 10346 galvanized steel coils and sheets are suitable for a wide range of applications across the UAE and GCC markets, including roofing and cladding systems, HVAC ducting, steel fabrication, fencing, roll forming, electrical components and construction products."
      },
      {
        "type": "paragraph",
        "text": "For project-specific requirements, the applicable EN 10346 steel grade, coating designation, thickness and dimensional tolerances should be confirmed against the project drawings, consultant specifications and end-use requirements."
      },
      {
        "type": "paragraph",
        "text": "SRK Steel supplies Hot-Dip Galvanized (GI) Steel Coils and Sheets according to agreed technical requirements and applicable international standards, including EN 10346, ASTM A653/A653M and JIS G 3302, with relevant quality documentation and MTC available where required."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "CHEMICAL COMPOSITION"
      },
      {
        "type": "table",
        "headerRows": 2,
        "rows": [
          [
            "Classification",
            "Type",
            "Chemical Composition (mass %, maximum unless otherwise stated)",
            "Chemical Composition (mass %, maximum unless otherwise stated)",
            "Chemical Composition (mass %, maximum unless otherwise stated)",
            "Chemical Composition (mass %, maximum unless otherwise stated)",
            "Chemical Composition (mass %, maximum unless otherwise stated)",
            "Chemical Composition (mass %, maximum unless otherwise stated)"
          ],
          [
            "Classification",
            "Type",
            "C",
            "Si",
            "Mn",
            "P",
            "S",
            "Ti"
          ],
          [
            "EN 10346",
            "DX51D",
            "0.18",
            "0.50",
            "1.20",
            "0.12",
            "0.045",
            "0.30"
          ],
          [
            "EN 10346",
            "DX52D",
            "0.12",
            "0.50",
            "0.60",
            "0.10",
            "0.045",
            "0.30"
          ],
          [
            "EN 10346",
            "DX53D",
            "0.12",
            "0.50",
            "0.60",
            "0.10",
            "0.045",
            "0.30"
          ],
          [
            "EN 10346",
            "S220GD",
            "0.20",
            "0.60",
            "1.70",
            "0.10",
            "0.045",
            "–"
          ],
          [
            "EN 10346",
            "S250GD",
            "0.20",
            "0.60",
            "1.70",
            "0.10",
            "0.045",
            "–"
          ],
          [
            "EN 10346",
            "S280GD",
            "0.20",
            "0.60",
            "1.70",
            "0.10",
            "0.045",
            "–"
          ],
          [
            "EN 10346",
            "S320GD",
            "0.20",
            "0.60",
            "1.70",
            "0.10",
            "0.045",
            "–"
          ],
          [
            "EN 10346",
            "S350GD",
            "0.20",
            "0.60",
            "1.70",
            "0.10",
            "0.045",
            "–"
          ],
          [
            "EN 10346",
            "S550GD",
            "0.20",
            "0.60",
            "1.70",
            "0.10",
            "0.045",
            "–"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "TYPICAL RANGES OF MECHANICAL PROPERTIES"
      },
      {
        "type": "table",
        "headerRows": 1,
        "rows": [
          [
            "Classification",
            "Type",
            "Yield Strength (MPa)\nMPa",
            "Tensile Strength (MPa)\nMPa",
            "Elongation (%)"
          ],
          [
            "EN 10346",
            "DX51D",
            "–",
            "270-500",
            "22"
          ],
          [
            "EN 10346",
            "DX52D",
            "140-300",
            "270-420",
            "26"
          ],
          [
            "EN 10346",
            "DX53D",
            "140-260",
            "270-380",
            "30"
          ],
          [
            "EN 10346",
            "S220GD",
            "220",
            "300",
            "20"
          ],
          [
            "EN 10346",
            "S250GD",
            "250",
            "330",
            "19"
          ],
          [
            "EN 10346",
            "S280GD",
            "280",
            "360",
            "18"
          ],
          [
            "EN 10346",
            "S320GD",
            "320",
            "390",
            "17"
          ],
          [
            "EN 10346",
            "S350GD",
            "350",
            "420",
            "16"
          ],
          [
            "EN 10346",
            "S550GD",
            "550",
            "560",
            "–"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "JIS G 3302:2022 – Japanese Standard for Hot-Dip Galvanized Steel Coils & Sheets"
      },
      {
        "type": "paragraph",
        "text": "JIS G 3302:2022 is the Japanese Industrial Standard covering Hot-Dip Zinc-Coated Steel Sheets and Coils. JIS stands for Japanese Industrial Standards, which establish technical requirements for a wide range of industrial materials, products and processes in Japan."
      },
      {
        "type": "paragraph",
        "text": "The JIS G 3302 standard specifies requirements for hot-dip galvanized steel products, including steel grades, chemical composition, mechanical properties, coating requirements, dimensions, tolerances and other technical characteristics."
      },
      {
        "type": "paragraph",
        "text": "SRK Steel supplies Hot-Dip Galvanized (GI) Steel Coils and Sheets according to agreed technical requirements and applicable international standards, including JIS G 3302, ASTM A653/A653M and EN 10346."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "JIS G 3302 Galvanized Steel Grades"
      },
      {
        "type": "paragraph",
        "text": "JIS G 3302 includes several galvanized steel grades designed for different applications, forming requirements and strength levels. Common grades include:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "SGCC – Commercial Quality galvanized steel",
          "SGCD1 – Drawing Quality galvanized steel",
          "SGCD2 – Drawing Quality galvanized steel",
          "SGCD3 – Drawing Quality galvanized steel",
          "SGC340 – Higher-strength galvanized steel",
          "SGC400 – Higher-strength galvanized steel",
          "SGC440 – Higher-strength galvanized steel",
          "SGC490 – Higher-strength galvanized steel",
          "SGC570 – High-strength galvanized steel"
        ]
      },
      {
        "type": "paragraph",
        "text": "The appropriate grade should be selected according to the required forming characteristics, strength, thickness and end-use application."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Chemical Composition of JIS G 3302 Galvanized Steel"
      },
      {
        "type": "paragraph",
        "text": "The chemical composition requirements vary according to the steel grade. The principal elements controlled include carbon (C), manganese (Mn), phosphorus (P) and sulfur (S)."
      },
      {
        "type": "table",
        "headerRows": 1,
        "rows": [
          [
            "JIS G 3302 Grade",
            "Carbon (C) %",
            "Manganese (Mn) %",
            "Phosphorus (P) %",
            "Sulfur (S) %"
          ],
          [
            "SGCC",
            "≤ 0.12",
            "≤ 0.60",
            "≤ 0.04",
            "≤ 0.04"
          ],
          [
            "SGCD1",
            "≤ 0.12",
            "≤ 0.50",
            "≤ 0.04",
            "≤ 0.04"
          ],
          [
            "SGCD2",
            "≤ 0.10",
            "≤ 0.45",
            "≤ 0.03",
            "≤ 0.03"
          ],
          [
            "SGCD3",
            "≤ 0.08",
            "≤ 0.45",
            "≤ 0.03",
            "≤ 0.03"
          ],
          [
            "SGC340",
            "≤ 0.25",
            "≤ 1.70",
            "≤ 0.10",
            "≤ 0.035"
          ],
          [
            "SGC400",
            "≤ 0.25",
            "≤ 1.70",
            "≤ 0.10",
            "≤ 0.035"
          ],
          [
            "SGC440",
            "≤ 0.25",
            "≤ 1.70",
            "≤ 0.20",
            "≤ 0.035"
          ],
          [
            "SGC490",
            "≤ 0.25",
            "≤ 1.70",
            "≤ 0.20",
            "≤ 0.035"
          ],
          [
            "SGC570",
            "≤ 0.25",
            "≤ 1.70",
            "≤ 0.20",
            "≤ 0.035"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Chemical composition values should be verified against the applicable edition of JIS G 3302 and the specific material certificate before being used as contractual acceptance criteria."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Mechanical Properties of JIS G 3302 Galvanized Steel"
      },
      {
        "type": "paragraph",
        "text": "Mechanical properties vary according to the grade and product thickness. Important parameters include yield strength, tensile strength and elongation."
      },
      {
        "type": "table",
        "headerRows": 1,
        "rows": [
          [
            "Grade",
            "Minimum Yield Strength (MPa)",
            "Minimum Tensile Strength (MPa)",
            "Elongation*"
          ],
          [
            "SGCC",
            "205",
            "270",
            "Grade-dependent"
          ],
          [
            "SGCD1",
            "—",
            "270",
            "Grade- and thickness-dependent"
          ],
          [
            "SGCD2",
            "—",
            "270",
            "Grade- and thickness-dependent"
          ],
          [
            "SGCD3",
            "—",
            "270",
            "Grade- and thickness-dependent"
          ],
          [
            "SGC340",
            "245",
            "340",
            "Thickness-dependent"
          ],
          [
            "SGC400",
            "295",
            "400",
            "Thickness-dependent"
          ],
          [
            "SGC440",
            "335",
            "440",
            "Thickness-dependent"
          ],
          [
            "SGC490",
            "365",
            "490",
            "Thickness-dependent"
          ],
          [
            "SGC570",
            "560",
            "570",
            "Thickness-dependent"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "*Elongation requirements depend on the applicable grade, thickness and test conditions. Refer to the current JIS G 3302 standard and material test certificate for the exact requirement."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Zinc Coating Requirements"
      },
      {
        "type": "paragraph",
        "text": "JIS G 3302 also establishes requirements for the hot-dip zinc coating applied to the steel substrate. Coating designation and coating mass should be specified according to the required corrosion-protection performance and application."
      },
      {
        "type": "paragraph",
        "text": "The galvanized coating provides a protective zinc layer that helps protect the underlying steel from atmospheric corrosion. The required coating designation can be selected based on the intended application and project specification."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Applications of JIS G 3302 GI Steel Coils & Sheets"
      },
      {
        "type": "paragraph",
        "text": "JIS G 3302 galvanized steel is commonly used for applications such as:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Roofing and wall cladding",
          "Construction and building components",
          "HVAC ducting",
          "Steel fabrication",
          "Roll-formed sections",
          "Fencing and mesh products",
          "Automotive components",
          "Electrical and industrial products",
          "General engineering applications"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "JIS G 3302 Galvanized Steel for UAE & GCC Markets"
      },
      {
        "type": "paragraph",
        "text": "For projects in the UAE, Saudi Arabia, Qatar, Oman, Kuwait and other GCC markets, JIS G 3302 galvanized steel can be specified according to the required grade, thickness, width, zinc coating designation, mechanical properties and surface finish."
      },
      {
        "type": "paragraph",
        "text": "SRK Steel supplies GI galvanized steel coils and sheets for construction, fabrication and industrial applications according to customer requirements and applicable international standards. Relevant technical documentation, including Mill Test Certificates (MTC), can be provided where required."
      }
    ]
  },
  "aluzinc-coil": {
    "sourceLabel": "SRK Steel page content update",
    "blocks": [
      {
        "type": "heading",
        "level": 1,
        "text": "Aluzinc Coils & Sheets Supplier in UAE"
      },
      {
        "type": "paragraph",
        "text": "SRK Steel supplies high-quality Aluzinc coils and sheets, also known as Galvalume steel, for roofing, cladding, PEB structures, HVAC systems, industrial buildings, ducting, ceiling systems and general fabrication applications across the UAE and GCC."
      },
      {
        "type": "paragraph",
        "text": "Aluzinc is a continuously hot-dip coated steel product with an aluminum-zinc alloy coating designed to provide a combination of corrosion resistance, heat resistance, durability and surface performance. ASTM A792/A792M covers 55% aluminum-zinc alloy-coated steel sheet manufactured in coils and cut lengths."
      },
      {
        "type": "paragraph",
        "text": "SRK Steel supplies Aluzinc steel coils, cut-to-length sheets and slit coils in different thicknesses, widths, coating masses, steel grades, surface finishes and treatment options according to project and customer requirements."
      },
      {
        "type": "paragraph",
        "text": "Aluzinc products supplied by SRK Steel are suitable for demanding applications in the UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain and other GCC markets, where material durability and environmental exposure are important specification considerations."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "What is Aluzinc Steel?"
      },
      {
        "type": "paragraph",
        "text": "Aluzinc steel is carbon steel coated through a continuous hot-dip process with an aluminum-zinc alloy coating. It is commonly known in the international market as Galvalume steel."
      },
      {
        "type": "paragraph",
        "text": "The aluminum-zinc coating provides a protective metallic layer over the steel substrate. ASTM A792/A792M specifically covers steel sheet with a 55% aluminum-zinc alloy coating and identifies applications requiring corrosion resistance, heat resistance, or both."
      },
      {
        "type": "paragraph",
        "text": "Aluzinc coils are widely used for:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Roofing sheets",
          "Standing seam roofing",
          "Wall cladding",
          "Industrial building envelopes",
          "Pre-engineered buildings (PEB)",
          "Sandwich panels",
          "HVAC ducting",
          "Air-conditioning equipment",
          "Ceiling systems",
          "Garage and warehouse structures",
          "Agricultural buildings",
          "Industrial fabrication",
          "Roll-forming applications",
          "General engineering applications"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Aluzinc Coil & Sheet Supplier in UAE"
      },
      {
        "type": "paragraph",
        "text": "SRK Steel supplies Aluzinc steel coils and sheets in Dubai and across the UAE, supporting contractors, manufacturers, fabricators, roofing companies, PEB companies, HVAC manufacturers, trading companies and industrial customers."
      },
      {
        "type": "paragraph",
        "text": "Our supply program can include:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Aluzinc coils",
          "Aluzinc sheets",
          "Cut-to-length Aluzinc sheets",
          "Slit Aluzinc coils",
          "Roll-forming grade Aluzinc",
          "Roofing-grade Aluzinc",
          "Structural-grade Aluzinc",
          "Commercial-quality Aluzinc",
          "Drawing-quality Aluzinc",
          "High-strength Aluzinc",
          "Custom sizes and specifications"
        ]
      },
      {
        "type": "paragraph",
        "text": "Material availability, dimensions, coating mass and grade can be selected according to the customer's application and purchase specification."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Aluzinc Steel Coil Specifications"
      },
      {
        "type": "paragraph",
        "text": "SRK Steel can supply Aluzinc coils and sheets in a range of thicknesses and widths according to source availability, available processing capability and customer requirements."
      },
      {
        "type": "table",
        "headerRows": 1,
        "rows": [
          [
            "Parameter",
            "Aluzinc Coil",
            "Cut-to-Length Sheet",
            "Slit Coil"
          ],
          [
            "Thickness",
            "0.12–3.80 mm*",
            "0.30–6.00 mm*",
            "0.18–3.80 mm*"
          ],
          [
            "Width",
            "650–1350 mm*",
            "350–2000 mm*",
            "35–1550 mm*"
          ],
          [
            "Coil ID",
            "508 / 610 mm",
            "—",
            "508 / 610 mm"
          ],
          [
            "Maximum Coil OD",
            "Up to 1850 mm*",
            "—",
            "Up to 1850 mm*"
          ],
          [
            "Maximum Coil Weight",
            "Up to 15 MT*",
            "—",
            "Up to 10 MT*"
          ],
          [
            "Coating Mass",
            "30–150 g/m²*",
            "30–150 g/m²*",
            "30–150 g/m²*"
          ],
          [
            "Sheet Length",
            "—",
            "Up to 4000 mm*",
            "—"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "*Subject to source availability, available processing capability, grade, thickness, width and customer specification. Please confirm current availability with SRK Steel before ordering."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Aluzinc Standards & Material Grades"
      },
      {
        "type": "paragraph",
        "text": "SRK Steel can supply Aluzinc products according to internationally recognized specifications, subject to order requirements and availability."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "ASTM A792/A792M"
      },
      {
        "type": "paragraph",
        "text": "ASTM A792/A792M is the principal ASTM specification for 55% aluminum-zinc alloy-coated steel sheet produced by the hot-dip process. The current ASTM listing is A792/A792M-25a."
      },
      {
        "type": "paragraph",
        "text": "Depending on the required application, material may be specified in different steel designations and grades, including:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Commercial Steel",
          "Forming Steel",
          "Drawing Steel",
          "High-Temperature Steel",
          "Structural Steel"
        ]
      },
      {
        "type": "paragraph",
        "text": "The standard includes requirements relating to chemical composition, mechanical properties, coating mass and coating bend performance."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "EN 10346"
      },
      {
        "type": "paragraph",
        "text": "For European requirements, continuously hot-dip coated steel products may be specified under EN 10346, with grades such as:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "DX51D",
          "DX52D",
          "DX53D",
          "S220GD",
          "S250GD",
          "S280GD",
          "S320GD",
          "S350GD",
          "S550GD"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "JIS G3321"
      },
      {
        "type": "paragraph",
        "text": "For projects requiring Japanese Industrial Standards, Aluzinc/Galvalume products may be specified according to JIS G3321, including commonly referenced grades such as:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "SGLCC",
          "SGLCD",
          "SGLC"
        ]
      },
      {
        "type": "paragraph",
        "text": "Material grade and standard should always be confirmed against the project's approved material specification and purchase order."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Comparable Aluzinc International Grades (Legacy Reference Table)"
      },
      {
        "type": "table",
        "headerRows": 1,
        "rows": [
          [
            "Classification",
            "ASTM A792/A792M-10 (2015)",
            "EN 10346:2015",
            "JIS G 3321:2010"
          ],
          [
            "Commercial Quality",
            "CS",
            "DX51D",
            "SGLCC"
          ],
          [
            "Lock Forming Quality",
            "CS",
            "DX51D",
            "SGLCC"
          ],
          [
            "Drawing Quality",
            "FS",
            "DX52D",
            "SGLCD"
          ],
          [
            "Deep Drawing Quality",
            "DS",
            "DX53D",
            "SGLCD"
          ],
          [
            "Structural Quality",
            "GRADE  230-550",
            "S220-S550",
            "SGL 400-570"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Note: This comparison table references earlier editions shown in the column headings. Grade equivalence should be verified against the applicable project specification, the required standard edition and the material certificate rather than assumed solely from grade names."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Aluzinc Coating Options"
      },
      {
        "type": "paragraph",
        "text": "SRK Steel can supply Aluzinc products with different coating masses according to the required specification."
      },
      {
        "type": "paragraph",
        "text": "Typical coating requirements may include:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "AZ30",
          "AZ50",
          "AZ70",
          "AZ100",
          "AZ120",
          "AZ150"
        ]
      },
      {
        "type": "paragraph",
        "text": "The exact coating designation should be confirmed according to the applicable standard and customer requirement."
      },
      {
        "type": "paragraph",
        "text": "AZ coating mass refers to the total coating mass on both sides, unless otherwise specified by the applicable standard."
      },
      {
        "type": "paragraph",
        "text": "For demanding roofing, cladding and industrial applications, the correct combination of steel grade, substrate thickness, coating mass, surface treatment and forming requirements should be selected based on the intended service environment."
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Aluzinc Surface Finishes"
      },
      {
        "type": "paragraph",
        "text": "Depending on specification and availability, Aluzinc steel can be supplied with different surface finishes, including:"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Regular Spangle"
      },
      {
        "type": "paragraph",
        "text": "A visible metallic crystalline pattern formed during the solidification of the coating."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Minimized Spangle"
      },
      {
        "type": "paragraph",
        "text": "A more uniform surface appearance with reduced visible spangle."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Suppressed Spangle"
      },
      {
        "type": "paragraph",
        "text": "A controlled surface appearance designed for applications where a more uniform finish is preferred."
      },
      {
        "type": "paragraph",
        "text": "Surface appearance requirements should be confirmed before ordering, particularly where Aluzinc is intended for exposed architectural or building applications."
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Aluzinc Surface Treatment Options"
      },
      {
        "type": "paragraph",
        "text": "SRK Steel can supply Aluzinc products with different surface-treatment requirements, subject to source and processing availability."
      },
      {
        "type": "paragraph",
        "text": "Options may include:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Chromate passivated",
          "Non-chromate passivated",
          "Oiled",
          "Non-oiled",
          "Anti-fingerprint",
          "Non-anti-fingerprint",
          "No additional treatment"
        ]
      },
      {
        "type": "paragraph",
        "text": "The appropriate treatment depends on whether the material will be stored, roll-formed, painted, laminated, fabricated or used in an exposed application."
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Aluzinc Coil Applications in the GCC"
      },
      {
        "type": "paragraph",
        "text": "Aluzinc is widely used across construction, manufacturing and industrial applications where coated steel is required."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Roofing & Roofing Systems"
      },
      {
        "type": "paragraph",
        "text": "Aluzinc coils are used for manufacturing:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Corrugated roofing sheets",
          "Trapezoidal roofing sheets",
          "Standing seam roofing",
          "Industrial roofing",
          "Warehouse roofing",
          "Commercial building roofing",
          "Agricultural roofing"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Wall Cladding"
      },
      {
        "type": "paragraph",
        "text": "Aluzinc is suitable for wall cladding and building-envelope applications where a durable metallic-coated steel substrate is required."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Pre-Engineered Buildings"
      },
      {
        "type": "paragraph",
        "text": "Aluzinc steel can be used in PEB-related applications including roofing, cladding and roll-formed components."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Sandwich Panels"
      },
      {
        "type": "paragraph",
        "text": "Aluzinc coated steel is widely used as the outer and inner skin of insulated sandwich panels, including systems using:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "PUR insulation",
          "PIR insulation",
          "Rockwool insulation"
        ]
      },
      {
        "type": "paragraph",
        "text": "The final specification should be selected according to the panel design, environment and applicable project requirements."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "HVAC & Ducting"
      },
      {
        "type": "paragraph",
        "text": "Aluzinc steel can be used for selected HVAC and ventilation applications, including:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Air-conditioning ducting",
          "Ventilation systems",
          "HVAC equipment",
          "Industrial ducting",
          "Fabricated ventilation components"
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Industrial & Manufacturing Applications"
      },
      {
        "type": "paragraph",
        "text": "Other applications include:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Industrial enclosures",
          "Electrical cabinets",
          "Fabricated components",
          "Machinery covers",
          "Agricultural equipment",
          "Storage systems",
          "General sheet-metal fabrication"
        ]
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Why Choose Aluzinc Steel?"
      },
      {
        "type": "paragraph",
        "text": "Aluzinc combines a steel substrate with an aluminum-zinc metallic coating to provide a useful balance of strength, corrosion resistance, surface durability and heat resistance."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Corrosion Resistance"
      },
      {
        "type": "paragraph",
        "text": "The aluminum-zinc coating provides protective performance for applications exposed to atmospheric conditions."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Heat Resistance"
      },
      {
        "type": "paragraph",
        "text": "Aluminum-zinc coated steel is suitable for applications where improved heat resistance is required compared with conventional zinc-coated products, subject to the specific service conditions and product specification."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Long-Term Building Performance"
      },
      {
        "type": "paragraph",
        "text": "Aluzinc is commonly selected for roofing, cladding and building-envelope applications where long service life and reduced maintenance are important design considerations."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Excellent for Roll Forming"
      },
      {
        "type": "paragraph",
        "text": "Appropriate Aluzinc grades can be selected for roll-forming and profiling operations used to manufacture roofing and cladding products."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Attractive Metallic Finish"
      },
      {
        "type": "paragraph",
        "text": "The characteristic Aluzinc surface provides a bright metallic appearance suitable for many construction and industrial applications."
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Aluzinc vs Galvanized Steel"
      },
      {
        "type": "paragraph",
        "text": "Aluzinc and galvanized steel are both metallic-coated steel products, but their coating systems are different."
      },
      {
        "type": "table",
        "headerRows": 1,
        "rows": [
          [
            "Feature",
            "Aluzinc Steel",
            "Galvanized Steel"
          ],
          [
            "Main coating",
            "Aluminum-zinc alloy",
            "Zinc"
          ],
          [
            "Common specification",
            "ASTM A792/A792M",
            "ASTM A653/A653M"
          ],
          [
            "Common use",
            "Roofing, cladding, PEB, panels",
            "Construction, fabrication, general applications"
          ],
          [
            "Coating system",
            "Aluminum-zinc alloy",
            "Zinc"
          ],
          [
            "Heat performance",
            "Suitable for applications requiring heat resistance, subject to specification",
            "Application dependent"
          ],
          [
            "Surface",
            "Metallic Al-Zn appearance",
            "Zinc/spangle appearance"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "The correct product depends on the application, environment, fabrication method, design requirements and project specification."
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Aluzinc for UAE & GCC Climate"
      },
      {
        "type": "paragraph",
        "text": "The UAE and wider GCC region present demanding environmental conditions, including high temperatures, strong solar exposure, dust and, in coastal locations, salt-laden atmospheric conditions."
      },
      {
        "type": "paragraph",
        "text": "For this reason, selecting the correct coated steel specification is important."
      },
      {
        "type": "paragraph",
        "text": "When purchasing Aluzinc for GCC projects, customers should consider:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Steel substrate grade",
          "Material thickness",
          "Coating mass",
          "Surface treatment",
          "Forming requirements",
          "Installation environment",
          "Indoor or outdoor exposure",
          "Coastal or inland location",
          "Painting or coating requirements",
          "Storage conditions",
          "Fabrication process"
        ]
      },
      {
        "type": "paragraph",
        "text": "SRK Steel can assist customers in selecting a suitable Aluzinc specification according to the intended application, project requirements and available supply options."
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Aluzinc Coil Supply Across the GCC"
      },
      {
        "type": "paragraph",
        "text": "SRK Steel serves customers throughout the United Arab Emirates and GCC markets."
      },
      {
        "type": "paragraph",
        "text": "We can support supply requirements for:"
      },
      {
        "type": "paragraph",
        "text": "Dubai"
      },
      {
        "type": "paragraph",
        "text": "Abu Dhabi"
      },
      {
        "type": "paragraph",
        "text": "Sharjah"
      },
      {
        "type": "paragraph",
        "text": "Ajman"
      },
      {
        "type": "paragraph",
        "text": "Ras Al Khaimah"
      },
      {
        "type": "paragraph",
        "text": "Fujairah"
      },
      {
        "type": "paragraph",
        "text": "Umm Al Quwain"
      },
      {
        "type": "paragraph",
        "text": "Saudi Arabia"
      },
      {
        "type": "paragraph",
        "text": "Qatar"
      },
      {
        "type": "paragraph",
        "text": "Oman"
      },
      {
        "type": "paragraph",
        "text": "Kuwait"
      },
      {
        "type": "paragraph",
        "text": "Bahrain"
      },
      {
        "type": "paragraph",
        "text": "For larger projects, contractors, manufacturers and distributors, SRK Steel can discuss bulk coil requirements, customized dimensions, delivery schedules and technical documentation."
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Aluzinc Coil Cutting & Slitting"
      },
      {
        "type": "paragraph",
        "text": "In addition to standard Aluzinc coils, SRK Steel can support customised processing requirements, subject to available processing capability, including:"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Cut-to-Length"
      },
      {
        "type": "paragraph",
        "text": "Aluzinc coils can be processed into sheets according to the required lengths, subject to equipment, source and specification limitations."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Slitting"
      },
      {
        "type": "paragraph",
        "text": "Aluzinc coils can be slit into narrower widths for roll forming, fabrication and downstream manufacturing, subject to available processing capability."
      },
      {
        "type": "paragraph",
        "text": "Customized requirements can include:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Coil width",
          "Sheet length",
          "Slit width",
          "Coil weight",
          "Inner diameter",
          "Outer diameter",
          "Packaging",
          "Surface treatment",
          "Grade",
          "Coating mass"
        ]
      },
      {
        "type": "paragraph",
        "text": "Customers should provide their required dimensions and technical specification when requesting a quotation."
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Aluzinc Quality Control & Documentation"
      },
      {
        "type": "paragraph",
        "text": "For project and industrial requirements, documentation can be provided according to the agreed supply specification."
      },
      {
        "type": "paragraph",
        "text": "Depending on the order, documentation may include:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Material Test Certificate (MTC)",
          "Mill Test Certificate",
          "Chemical composition",
          "Mechanical properties",
          "Coating mass information",
          "Dimensional inspection",
          "Thickness verification",
          "Width verification",
          "Surface inspection",
          "Coil identification",
          "Packing list",
          "Certificate of Origin, where applicable"
        ]
      },
      {
        "type": "paragraph",
        "text": "Documentation requirements should be agreed before order confirmation."
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Aluzinc Coil Packaging & Delivery"
      },
      {
        "type": "paragraph",
        "text": "Proper packaging is important during transportation and storage to help protect Aluzinc coils and sheets from mechanical damage and moisture exposure."
      },
      {
        "type": "paragraph",
        "text": "SRK Steel can arrange packaging according to shipment, storage and customer requirements."
      },
      {
        "type": "paragraph",
        "text": "For GCC deliveries, customers should provide:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Required quantity",
          "Coil or sheet requirement",
          "Thickness",
          "Width",
          "Length, if applicable",
          "Grade",
          "Coating mass",
          "Surface treatment",
          "Delivery location",
          "Required delivery date"
        ]
      },
      {
        "type": "paragraph",
        "text": "Our sales team can then recommend the available specification and quotation."
      },
      {
        "type": "heading",
        "level": 1,
        "text": "How to Order Aluzinc Coils from SRK Steel"
      },
      {
        "type": "paragraph",
        "text": "To receive a quotation for Aluzinc coils or sheets, send SRK Steel the following information:"
      },
      {
        "type": "list",
        "ordered": true,
        "items": [
          "Product: Aluzinc Coil / Sheet",
          "Thickness: e.g. 0.50 mm",
          "Width: e.g. 1250 mm",
          "Quantity: MT / KG / coils",
          "Grade: ASTM / EN / JIS or project specification",
          "Coating: AZ requirement",
          "Surface: Regular / Minimized / Suppressed Spangle",
          "Treatment: Passivated / Oiled / Non-oiled / Other",
          "Delivery: UAE / GCC destination",
          "Required documentation: MTC / inspection documents"
        ]
      },
      {
        "type": "paragraph",
        "text": "This information allows our team to provide a more accurate technical and commercial quotation."
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Frequently Asked Questions About Aluzinc"
      },
      {
        "type": "heading",
        "level": 2,
        "text": "What is Aluzinc?"
      },
      {
        "type": "paragraph",
        "text": "Aluzinc is steel coated with an aluminum-zinc alloy through a continuous hot-dip coating process. It is also commonly referred to as Galvalume steel."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "What is the difference between Aluzinc and Galvalume?"
      },
      {
        "type": "paragraph",
        "text": "In commercial steel terminology, Aluzinc and Galvalume are commonly used to describe aluminum-zinc coated steel products. Galvalume is also a well-known commercial name associated with 55% aluminum-zinc coated steel."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "What is ASTM A792?"
      },
      {
        "type": "paragraph",
        "text": "ASTM A792/A792M is the ASTM specification for steel sheet coated with a 55% aluminum-zinc alloy by the hot-dip process. The current ASTM listing is A792/A792M-25a."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Is Aluzinc suitable for roofing?"
      },
      {
        "type": "paragraph",
        "text": "Yes. Aluzinc is widely used for roofing and building-envelope applications because the aluminum-zinc coating provides corrosion and heat-resistance characteristics appropriate to many roofing applications."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "What is AZ100 Aluzinc?"
      },
      {
        "type": "paragraph",
        "text": "AZ100 generally refers to an aluminum-zinc coating mass designation of 100 g/m² total coating mass, subject to the applicable standard and test method."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "What is AZ150?"
      },
      {
        "type": "paragraph",
        "text": "AZ150 generally indicates a total aluminum-zinc coating mass of 150 g/m², subject to the applicable standard."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Can SRK Steel supply Aluzinc coils in Dubai?"
      },
      {
        "type": "paragraph",
        "text": "Yes. SRK Steel supplies Aluzinc coils and sheets for UAE customers, including requirements for Dubai and other Emirates, subject to stock, source availability, processing capability and the agreed specification."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Can Aluzinc be supplied to Saudi Arabia and other GCC countries?"
      },
      {
        "type": "paragraph",
        "text": "Yes. SRK Steel can support GCC requirements for Aluzinc coils and sheets, including Saudi Arabia, Qatar, Oman, Kuwait and Bahrain, subject to commercial and logistics arrangements."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Can Aluzinc coils be slit?"
      },
      {
        "type": "paragraph",
        "text": "Yes. Slitting can be provided according to the required width, coil weight and available processing capability."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Can Aluzinc be cut into sheets?"
      },
      {
        "type": "paragraph",
        "text": "Yes. Cut-to-length Aluzinc sheets can be supplied according to the required dimensions and applicable processing limitations."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "What information is required to quote Aluzinc coils?"
      },
      {
        "type": "paragraph",
        "text": "The most important information is thickness, width, quantity, grade, coating mass, surface treatment, coil/sheet requirement and delivery location."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Does SRK Steel provide MTC for Aluzinc?"
      },
      {
        "type": "paragraph",
        "text": "Material documentation can be provided according to the agreed order and customer/project requirements. MTC requirements should be confirmed at the quotation or order stage."
      },
      {
        "type": "heading",
        "level": 1,
        "text": "Request an Aluzinc Coil & Sheet Quotation"
      },
      {
        "type": "paragraph",
        "text": "Looking for Aluzinc coils, Galvalume steel coils or Aluzinc sheets in UAE or GCC?"
      },
      {
        "type": "paragraph",
        "text": "Contact SRK Steel for technical specifications, availability, bulk quantities and project requirements."
      },
      {
        "type": "paragraph",
        "text": "SRK Steel – Aluzinc Coil & Sheet Supplier in UAE"
      },
      {
        "type": "paragraph",
        "text": "📞 +971 58 660 0183"
      },
      {
        "type": "paragraph",
        "text": "Serving: Dubai | Abu Dhabi | Sharjah | UAE | Saudi Arabia | Qatar | Oman | Kuwait | Bahrain | GCC"
      },
      {
        "type": "paragraph",
        "text": "Ask our team for:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Aluzinc coil quotation",
          "Aluzinc sheet quotation",
          "ASTM A792 material",
          "EN grade Aluzinc",
          "JIS grade Aluzinc",
          "AZ coating requirements",
          "Cut-to-length sheets",
          "Slit coils",
          "Bulk/project supply",
          "MTC and technical documentation"
        ]
      },
      {
        "type": "heading",
        "level": 1,
        "text": "ASTM A792/A792M – 55% Aluminum-Zinc Alloy-Coated Steel"
      },
      {
        "type": "paragraph",
        "text": "ASTM A792/A792M is the ASTM International specification for steel sheet coated with 55% aluminum-zinc alloy by the hot-dip process. The standard covers continuously hot-dip coated steel sheet supplied in coils and cut lengths for applications requiring corrosion resistance, heat resistance, or a combination of both."
      },
      {
        "type": "paragraph",
        "text": "ASTM A792/A792M is widely referenced for Aluzinc, Galvalume and 55% aluminum-zinc coated steel coils and sheets used in roofing, wall cladding, pre-engineered buildings (PEB), sandwich panels, HVAC applications and general industrial fabrication."
      },
      {
        "type": "paragraph",
        "text": "The current ASTM listing is ASTM A792/A792M-25a. Earlier editions, including ASTM A792/A792M-10 (2015), may still appear in older project specifications and technical documents. For new projects, the applicable edition should be confirmed against the customer's purchase specification and project requirements."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "ASTM A792/A792M Aluzinc Steel at a Glance"
      },
      {
        "type": "table",
        "headerRows": 1,
        "rows": [
          [
            "Parameter",
            "Description"
          ],
          [
            "Standard",
            "ASTM A792/A792M"
          ],
          [
            "Product",
            "Steel Sheet, 55% Aluminum-Zinc Alloy-Coated"
          ],
          [
            "Coating Process",
            "Hot-Dip Process"
          ],
          [
            "Common Commercial Names",
            "Aluzinc / Galvalume / 55% Al-Zn Coated Steel"
          ],
          [
            "Product Form",
            "Coils and Cut-to-Length Sheets"
          ],
          [
            "Applications",
            "Roofing, Cladding, PEB, Sandwich Panels, HVAC & Industrial Fabrication"
          ],
          [
            "Quality Categories",
            "Commercial, Forming, Drawing, High-Temperature & Structural applications"
          ],
          [
            "Current ASTM Edition",
            "ASTM A792/A792M-25a (edition referenced in this document)"
          ],
          [
            "Previous Edition",
            "ASTM A792/A792M-10 (2015) – earlier edition"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "What Does ASTM A792/A792M Mean?"
      },
      {
        "type": "paragraph",
        "text": "ASTM A792/A792M specifies requirements for 55% aluminum-zinc alloy-coated steel sheet manufactured using a continuous hot-dip coating process."
      },
      {
        "type": "paragraph",
        "text": "The aluminum-zinc coating provides a metallic protective layer over the steel substrate. Depending on the specified grade and application, Aluzinc steel can provide a combination of corrosion resistance, heat resistance, formability and structural performance."
      },
      {
        "type": "paragraph",
        "text": "The standard is therefore commonly specified for coated steel products used in construction and industrial applications."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Aluzinc Steel According to ASTM A792/A792M"
      },
      {
        "type": "paragraph",
        "text": "SRK Steel can supply Aluzinc steel coils and sheets according to the applicable ASTM specification and customer requirements, subject to grade, thickness, width, coating and availability."
      },
      {
        "type": "paragraph",
        "text": "Typical requirements can include:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Steel grade",
          "Thickness",
          "Width",
          "Coating mass",
          "Coil weight",
          "Mechanical properties",
          "Chemical composition",
          "Surface finish",
          "Surface treatment",
          "Cut-to-length dimensions",
          "Packaging requirements",
          "Material Test Certificate (MTC)"
        ]
      },
      {
        "type": "paragraph",
        "text": "For project-specific requirements, customers should clearly state the required ASTM edition, grade, coating designation and dimensional requirements in the purchase specification."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "ASTM A792 Aluzinc Applications"
      },
      {
        "type": "paragraph",
        "text": "ASTM A792/A792M Aluzinc steel is commonly used for:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Roofing sheets",
          "Roofing coils",
          "Wall cladding",
          "Pre-engineered buildings",
          "Sandwich panels",
          "HVAC ducting",
          "Industrial buildings",
          "Agricultural buildings",
          "Roll-formed profiles",
          "General fabrication",
          "Industrial equipment and components"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "SRK Steel – ASTM A792 Aluzinc Supplier in UAE"
      },
      {
        "type": "paragraph",
        "text": "SRK Steel supplies Aluzinc coils and sheets in the UAE and GCC, supporting roofing manufacturers, PEB companies, sandwich panel manufacturers, fabricators, contractors, distributors and industrial customers."
      },
      {
        "type": "paragraph",
        "text": "For quotations, customers can provide the required thickness, width, grade, coating mass, quantity and delivery location."
      },
      {
        "type": "paragraph",
        "text": "Contact SRK Steel for ASTM A792/A792M Aluzinc coils and sheets in Dubai, Abu Dhabi, Sharjah and across the GCC."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "CHEMICAL COMPOSITION"
      },
      {
        "type": "table",
        "headerRows": 2,
        "rows": [
          [
            "Classification",
            "Type",
            "Chemical Composition (mass %, maximum unless otherwise stated)",
            "Chemical Composition (mass %, maximum unless otherwise stated)",
            "Chemical Composition (mass %, maximum unless otherwise stated)",
            "Chemical Composition (mass %, maximum unless otherwise stated)",
            "Chemical Composition (mass %, maximum unless otherwise stated)",
            "Chemical Composition (mass %, maximum unless otherwise stated)",
            "Chemical Composition (mass %, maximum unless otherwise stated)",
            "Chemical Composition (mass %, maximum unless otherwise stated)",
            "Chemical Composition (mass %, maximum unless otherwise stated)",
            "Chemical Composition (mass %, maximum unless otherwise stated)",
            "Chemical Composition (mass %, maximum unless otherwise stated)",
            "Chemical Composition (mass %, maximum unless otherwise stated)",
            "Chemical Composition (mass %, maximum unless otherwise stated)"
          ],
          [
            "Classification",
            "Type",
            "C",
            "Mn",
            "P",
            "S",
            "Al",
            "Cu",
            "Ni",
            "Cr",
            "Mo",
            "V",
            "Cb",
            "Ti",
            "N"
          ],
          [
            "ASTM A792/A792M",
            "CS type A",
            "0.10",
            "0.60",
            "0.030",
            "0.035",
            "–",
            "0.20",
            "0.20",
            "0.15",
            "0.06",
            "0.008",
            "0.008",
            "0.025",
            "–"
          ],
          [
            "ASTM A792/A792M",
            "CS type B",
            "0.02 -0.15",
            "0.60",
            "0.030",
            "0.035",
            "–",
            "0.20",
            "0.20",
            "0.15",
            "0.06",
            "0.008",
            "0.008",
            "0.025",
            "–"
          ],
          [
            "ASTM A792/A792M",
            "CS type C",
            "0.08",
            "0.60",
            "0.100",
            "0.035",
            "–",
            "0.20",
            "0.20",
            "0.15",
            "0.06",
            "0.008",
            "0.008",
            "0.025",
            "–"
          ],
          [
            "ASTM A792/A792M",
            "FS",
            "0.02-0.10",
            "0.50",
            "0.020",
            "0.030",
            "–",
            "0.20",
            "0.20",
            "0.15",
            "0.06",
            "0.008",
            "0.008",
            "0.025",
            "–"
          ],
          [
            "ASTM A792/A792M",
            "DS",
            "0.06",
            "0.50",
            "0.020",
            "0.025",
            "0.01 min",
            "0.20",
            "0.20",
            "0.15",
            "0.06",
            "0.008",
            "0.008",
            "0.025",
            "–"
          ],
          [
            "ASTM A792/A792M",
            "HTS",
            "0.02 -0.15",
            "0.60",
            "0.040 min",
            "0.035",
            "–",
            "0.20",
            "0.20",
            "0.15",
            "0.06",
            "0.008",
            "0.008",
            "0.025",
            "–"
          ],
          [
            "ASTM A792/A792M",
            "SS-gr 230/Gr A/ Gr 33",
            "0.20",
            "1.15",
            "0.04",
            "0.04",
            "–",
            "0.20",
            "0.20",
            "0.15",
            "0.06",
            "0.008",
            "0.008",
            "0.025",
            "–"
          ],
          [
            "ASTM A792/A792M",
            "SS-gr 255/Gr B/ Gr 37",
            "0.20",
            "1.15",
            "0.10",
            "0.04",
            "–",
            "0.20",
            "0.20",
            "0.15",
            "0.06",
            "0.008",
            "0.008",
            "0.025",
            "–"
          ],
          [
            "ASTM A792/A792M",
            "SS-gr 275/Gr C/ Gr 40",
            "0.25",
            "1.15",
            "0.10",
            "0.04",
            "–",
            "0.20",
            "0.20",
            "0.15",
            "0.06",
            "0.008",
            "0.008",
            "0.025",
            "–"
          ],
          [
            "ASTM A792/A792M",
            "SS-gr 340 C1/Gr D/ Gr 50",
            "0.25",
            "1.15",
            "0.20",
            "0.04",
            "–",
            "0.20",
            "0.20",
            "0.15",
            "0.06",
            "0.008",
            "0.008",
            "0.025",
            "–"
          ],
          [
            "ASTM A792/A792M",
            "SS-gr 340 C2/Gr E/ Gr 50",
            "0.25",
            "1.15",
            "0.20",
            "0.04",
            "–",
            "0.20",
            "0.20",
            "0.15",
            "0.06",
            "0.008",
            "0.008",
            "0.025",
            "–"
          ],
          [
            "ASTM A792/A792M",
            "SS-gr 340 C4/Gr F/ Gr 50",
            "0.25",
            "1.15",
            "0.20",
            "0.04",
            "–",
            "0.20",
            "0.20",
            "0.15",
            "0.06",
            "0.008",
            "0.008",
            "0.025",
            "–"
          ],
          [
            "ASTM A792/A792M",
            "SS-gr 550/Gr E/ Gr 80",
            "0.20",
            "1.15",
            "0.04",
            "0.04",
            "–",
            "0.20",
            "0.20",
            "0.15",
            "0.06",
            "0.008",
            "0.015",
            "0.025",
            "–"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "TYPICAL RANGES OF MECHANICAL PROPERTIES"
      },
      {
        "type": "table",
        "headerRows": 1,
        "rows": [
          [
            "Classification",
            "Type",
            "Yield Strength (MPa)\n(MPa)",
            "Tensile Strength (MPa)",
            "Elongation in 50 mm Min. (%)\n2 in. (50 mm)min, %"
          ],
          [
            "ASTM A792/A792M",
            "CS TYPE A",
            "205/410",
            "–",
            "≥20"
          ],
          [
            "ASTM A792/A792M",
            "CS TYPE B",
            "245/410",
            "–",
            "≥20"
          ],
          [
            "ASTM A792/A792M",
            "CS TYPE C",
            "205/450",
            "–",
            "≥15"
          ],
          [
            "ASTM A792/A792M",
            "FS",
            "170/275",
            "–",
            "≥24"
          ],
          [
            "ASTM A792/A792M",
            "DS",
            "140/240",
            "–",
            "≥30"
          ],
          [
            "ASTM A792/A792M",
            "HTS",
            "205/450",
            "–",
            "≥15"
          ],
          [
            "ASTM A792/A792M",
            "ss-gr 230/Gr A/ Gr 33",
            "230min",
            "310min",
            "20"
          ],
          [
            "ASTM A792/A792M",
            "ss-gr 255/Gr B/ Gr 37",
            "255min",
            "360min",
            "18"
          ],
          [
            "ASTM A792/A792M",
            "ss-gr 275/Gr C/ Gr 40",
            "275min",
            "280min",
            "16"
          ],
          [
            "ASTM A792/A792M",
            "ss-gr 340 C1/Gr D/ Gr 50",
            "340min",
            "450min",
            "12"
          ],
          [
            "ASTM A792/A792M",
            "ss-gr 340 C2/Gr E/ Gr 50",
            "340min",
            "–",
            "12"
          ],
          [
            "ASTM A792/A792M",
            "ss-gr 340 C4/Gr F/ Gr 50",
            "340min",
            "410min",
            "12"
          ],
          [
            "ASTM A792/A792M",
            "ss-gr 550/Gr E",
            "550min",
            "570min",
            "–"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 1,
        "text": "EN 10346:2015 – Aluzinc Steel Coils & Sheets"
      },
      {
        "type": "paragraph",
        "text": "EN 10346:2015 is the European standard for continuously hot-dip coated steel flat products, including Aluzinc (AZ) steel coils and sheets with an aluminium-zinc alloy coating."
      },
      {
        "type": "paragraph",
        "text": "SRK Steel supplies Aluzinc coils and sheets according to applicable EN 10346 requirements, including grades such as DX51D, DX52D, DX53D, S220GD, S250GD, S280GD, S320GD, S350GD and S550GD, subject to customer specifications."
      },
      {
        "type": "paragraph",
        "text": "Aluzinc steel is widely used for roofing, wall cladding, PEB structures, sandwich panels, HVAC systems and industrial fabrication across the UAE and GCC."
      },
      {
        "type": "paragraph",
        "text": "For quotations, specify grade, thickness, width, AZ coating, quantity and delivery location."
      },
      {
        "type": "paragraph",
        "text": "SRK Steel – Aluzinc Coil & Sheet Supplier in UAE & GCC."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "CHEMICAL COMPOSITION"
      },
      {
        "type": "table",
        "headerRows": 2,
        "rows": [
          [
            "Classification",
            "Type",
            "Chemical Composition (mass %, maximum unless otherwise stated)",
            "Chemical Composition (mass %, maximum unless otherwise stated)",
            "Chemical Composition (mass %, maximum unless otherwise stated)",
            "Chemical Composition (mass %, maximum unless otherwise stated)",
            "Chemical Composition (mass %, maximum unless otherwise stated)",
            "Chemical Composition (mass %, maximum unless otherwise stated)"
          ],
          [
            "Classification",
            "Type",
            "C (max)",
            "Si (max)",
            "Mn (max)",
            "P (max)",
            "S (max)",
            "Ti (max)"
          ],
          [
            "EN 10346",
            "DX51D",
            "0.18",
            "0.50",
            "1.20",
            "0.12",
            "0.045",
            "0.30"
          ],
          [
            "EN 10346",
            "DX52D",
            "0.12",
            "0.50",
            "0.60",
            "0.10",
            "0.045",
            "0.30"
          ],
          [
            "EN 10346",
            "DX53D",
            "0.12",
            "0.50",
            "0.60",
            "0.10",
            "0.045",
            "0.30"
          ],
          [
            "EN 10346",
            "S220GD",
            "0.20",
            "0.60",
            "1.70",
            "0.10",
            "0.045",
            "–"
          ],
          [
            "EN 10346",
            "S250GD",
            "0.20",
            "0.60",
            "1.70",
            "0.10",
            "0.045",
            "–"
          ],
          [
            "EN 10346",
            "S280GD",
            "0.20",
            "0.60",
            "1.70",
            "0.10",
            "0.045",
            "–"
          ],
          [
            "EN 10346",
            "S320GD",
            "0.20",
            "0.60",
            "1.70",
            "0.10",
            "0.045",
            "–"
          ],
          [
            "EN 10346",
            "S350GD",
            "0.20",
            "0.60",
            "1.70",
            "0.10",
            "0.045",
            "–"
          ],
          [
            "EN 10346",
            "S550GD",
            "0.20",
            "0.60",
            "1.70",
            "0.10",
            "0.045",
            "–"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "TYPICAL RANGES OF MECHANICAL PROPERTIES"
      },
      {
        "type": "table",
        "headerRows": 2,
        "rows": [
          [
            "Classification",
            "Type",
            "Yield Strength (MPa)\nSTRENGTH\n(MPa)",
            "Tensile Strength (MPa)\nstrength\n(MPa)",
            "Elongation Min. (%)"
          ],
          [
            "Classification",
            "Type",
            "Yield Strength (MPa)\nSTRENGTH\n(MPa)",
            "Tensile Strength (MPa)\nstrength\n(MPa)",
            "Thickness / Elongation Requirement"
          ],
          [
            "EN 10346",
            "DX51D",
            "–",
            "270-500",
            "22"
          ],
          [
            "EN 10346",
            "DX52D",
            "140-300",
            "270-420",
            "26"
          ],
          [
            "EN 10346",
            "DX53D",
            "140-260",
            "270-380",
            "30"
          ],
          [
            "EN 10346",
            "S220GD",
            "220min",
            "300min",
            "20"
          ],
          [
            "EN 10346",
            "S250GD",
            "250min",
            "330min",
            "19"
          ],
          [
            "EN 10346",
            "S280GD",
            "280min",
            "360min",
            "18"
          ],
          [
            "EN 10346",
            "S320GD",
            "320min",
            "390min",
            "17"
          ],
          [
            "EN 10346",
            "S350GD",
            "350min",
            "420min",
            "16"
          ],
          [
            "EN 10346",
            "S550GD",
            "550min",
            "560min",
            "–"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 1,
        "text": "JIS G 3321:2022 – Aluzinc Steel Coils & Sheets"
      },
      {
        "type": "paragraph",
        "text": "JIS G 3321:2022 is the Japanese Industrial Standard for hot-dip 55% aluminium-zinc alloy-coated steel sheet and strip, commonly known as Aluzinc or Galvalume steel."
      },
      {
        "type": "paragraph",
        "text": "SRK Steel supplies Aluzinc steel coils and sheets in UAE and GCC according to applicable JIS G 3321:2022 requirements, with options for different steel grades, thicknesses, widths, coating specifications and surface finishes."
      },
      {
        "type": "paragraph",
        "text": "Aluzinc steel is widely used for roofing sheets, wall cladding, sandwich panels, PEB structures, HVAC applications, industrial buildings and general fabrication."
      },
      {
        "type": "paragraph",
        "text": "SRK Steel – Aluzinc / Galvalume Steel Coil & Sheet Supplier in Dubai, UAE & GCC."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "CHEMICAL COMPOSITION"
      },
      {
        "type": "table",
        "headerRows": 2,
        "rows": [
          [
            "Classification",
            "Type",
            "Chemical Composition (mass %, maximum unless otherwise stated)",
            "Chemical Composition (mass %, maximum unless otherwise stated)",
            "Chemical Composition (mass %, maximum unless otherwise stated)",
            "Chemical Composition (mass %, maximum unless otherwise stated)"
          ],
          [
            "Classification",
            "Type",
            "C (max)",
            "Mn (max)",
            "P (max)",
            "S (max)"
          ],
          [
            "JIS G 3321",
            "SGLCC",
            "0.15",
            "0.80",
            "0.05",
            "0.05"
          ],
          [
            "JIS G 3321",
            "SGLCD",
            "0.10",
            "0.45",
            "0.03",
            "0.03"
          ],
          [
            "JIS G 3321",
            "SGLC400",
            "0.25",
            "1.70",
            "0.20",
            "0.05"
          ],
          [
            "JIS G 3321",
            "SGLC440",
            "0.25",
            "2.00",
            "0.20",
            "0.05"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "TYPICAL RANGES OF MECHANICAL PROPERTIES"
      },
      {
        "type": "table",
        "headerRows": 3,
        "rows": [
          [
            "Classification",
            "Type",
            "Yield Strength Minimum (MPa)\nSTRENGTH\nMinimum(MPa)",
            "Tensile Strength Minimum (MPa)\nSTRENGTH\nMinimum(MPa)",
            "Elongation Min. (%)",
            "Elongation Min. (%)",
            "Elongation Min. (%)",
            "Elongation Min. (%)",
            "Elongation Min. (%)"
          ],
          [
            "Classification",
            "Type",
            "Yield Strength Minimum (MPa)\nSTRENGTH\nMinimum(MPa)",
            "Tensile Strength Minimum (MPa)\nSTRENGTH\nMinimum(MPa)",
            "Thickness Range",
            "Thickness Range",
            "Thickness Range",
            "Thickness Range",
            "Thickness Range"
          ],
          [
            "Classification",
            "Type",
            "Yield Strength Minimum (MPa)\nSTRENGTH\nMinimum(MPa)",
            "Tensile Strength Minimum (MPa)\nSTRENGTH\nMinimum(MPa)",
            "0.25 to\n0.40 mm",
            "0.40 to 0.60 mm",
            "0.6 to 1.00 mm",
            "1.00 to\n1.60 mm",
            "1.60 to\n2.00 mm"
          ],
          [
            "JIS G 3321",
            "SGLCC",
            "205",
            "270",
            "20",
            "21",
            "24",
            "24",
            "25"
          ],
          [
            "JIS G 3321",
            "SGLCD",
            "–",
            "270",
            "25",
            "27",
            "31",
            "32",
            "33"
          ],
          [
            "JIS G 3321",
            "SGLC400",
            "295",
            "400",
            "16",
            "17",
            "18",
            "18",
            "18"
          ],
          [
            "JIS G 3321",
            "SGLC440",
            "335",
            "440",
            "14",
            "15",
            "16",
            "18",
            "18"
          ],
          [
            "JIS G 3321",
            "SGLC490",
            "365",
            "490",
            "12",
            "13",
            "14",
            "16",
            "16"
          ],
          [
            "JIS G 3321",
            "SGLC570",
            "560",
            "570",
            "–",
            "–",
            "–",
            "–",
            ""
          ]
        ]
      }
    ]
  },
  "ppgi-coil": {
    "sourceLabel": "SRK Steel page content update",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "PPGI Specifications & Quality Standards"
      },
      {
        "type": "paragraph",
        "text": "SRK Steel supplies Pre-Painted Galvanized Steel (PPGI) Coils and Sheets manufactured and tested according to applicable international standards and customer specifications."
      },
      {
        "type": "paragraph",
        "text": "Quality inspection can include mechanical, dimensional, metallic-coating and paint-performance tests at the manufacturing or processing stage, depending on the required specification and application."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Typical Quality Tests"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Coating thickness / zinc coating test",
          "Paint coating thickness test",
          "Adhesion test",
          "Pencil hardness test",
          "Impact resistance test",
          "T-bend test",
          "Gloss measurement",
          "Surface finish and appearance inspection",
          "Tensile strength and elongation",
          "Dimensional and thickness inspection"
        ]
      },
      {
        "type": "paragraph",
        "text": "SRK Steel – PPGI Coil & Sheet Supplier in UAE and GCC, supplying pre-painted galvanized steel for roofing, wall cladding, sandwich panels, industrial buildings and general fabrication."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "PPGI Coil Quality & Paint Testing Standards – ASTM Tests"
      },
      {
        "type": "paragraph",
        "text": "PPGI (Pre-Painted Galvanized Steel) coils and sheets are subjected to coating, paint and performance tests to verify colour accuracy, coating thickness, adhesion, flexibility, hardness, gloss, solvent resistance and corrosion resistance. The following ASTM test methods are commonly referenced for quality evaluation of pre-painted galvanized steel products."
      },
      {
        "type": "paragraph",
        "text": "Test-method editions shown in the table should be confirmed against the customer specification, project requirements and the current applicable test standard before contractual use."
      },
      {
        "type": "table",
        "headerRows": 1,
        "rows": [
          [
            "Test / Quality Parameter",
            "ASTM Standard",
            "What It Evaluates"
          ],
          [
            "Colour Difference / Colour Matching",
            "ASTM D2244-16",
            "Measures colour difference and verifies colour consistency of PPGI coating against the specified reference colour."
          ],
          [
            "Salt Spray / Corrosion Resistance",
            "ASTM B117-18",
            "Evaluates the resistance of the painted steel coating to salt spray and accelerated corrosive environments."
          ],
          [
            "Pencil Hardness",
            "ASTM D3363-05(2011)e2",
            "Determines the surface hardness and scratch resistance of the paint coating."
          ],
          [
            "T-Bend Test",
            "ASTM D4145-10(2018)",
            "Evaluates the flexibility and adhesion of the coating when the pre-painted galvanized steel is bent."
          ],
          [
            "Dry Film Thickness (DFT)",
            "ASTM D5796-10(2015)",
            "Measures the thickness of the dry paint/coating film applied to the galvanized steel substrate."
          ],
          [
            "Cross-Hatch Adhesion",
            "ASTM D3359-17",
            "Determines the adhesion of the paint coating to the galvanized steel substrate."
          ],
          [
            "Solvent Resistance",
            "ASTM D5402-19",
            "Evaluates the resistance of the organic coating to solvent exposure and coating degradation."
          ],
          [
            "Specular Gloss",
            "ASTM D523-14(2018)",
            "Measures the gloss level and surface appearance of the PPGI coating."
          ],
          [
            "Mandrel Bend Test",
            "ASTM D522-17",
            "Evaluates coating flexibility, cracking and adhesion after bending around a specified mandrel."
          ],
          [
            "Chalk Resistance",
            "ASTM D4214-07(2015)",
            "Evaluates the tendency of an exterior paint coating to develop chalking after weathering exposure."
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Differences between RMP and PVDF Paints"
      },
      {
        "type": "table",
        "headerRows": 1,
        "rows": [
          [
            "PPGI Coating System – RMP vs PVDF",
            "PPGI Coating System – RMP vs PVDF",
            "PPGI Coating System – RMP vs PVDF"
          ],
          [
            "Property / Test",
            "RMP – Modified Polyester",
            "PVDF – Polyvinylidene Fluoride"
          ],
          [
            "Resin System",
            "Polyester & Melamine",
            "Polyvinylidene Fluoride & Acrylic"
          ],
          [
            "Film Formation",
            "Cross-linking",
            "Fusion"
          ],
          [
            "Peak Metal Temperature (PMT)",
            "224–235°C",
            "249–254°C"
          ],
          [
            "Primer Type & Thickness",
            "Polyurethane / Polyester Primer: 4–6 μm",
            "Polyurethane Primer: 5–7 μm"
          ],
          [
            "Topcoat Thickness",
            "18–20 μm",
            "20–22 μm"
          ],
          [
            "MEK Double Rub",
            "100 D/R – Pass",
            "100 D/R – Pass"
          ],
          [
            "T-Bend",
            "2–3T",
            "0–1T"
          ],
          [
            "Reverse Impact",
            "13 J – No paint removal",
            "13 J – No paint removal"
          ],
          [
            "Cross-Hatch Adhesion",
            "No paint removal",
            "No paint removal"
          ],
          [
            "Pencil Hardness",
            "F minimum",
            "B minimum"
          ],
          [
            "Water Boil Adhesion",
            "Pass",
            "Pass"
          ],
          [
            "",
            "",
            ""
          ],
          [
            "Accelerated Weathering & Corrosion Performance",
            "Accelerated Weathering & Corrosion Performance",
            "Accelerated Weathering & Corrosion Performance"
          ],
          [
            "Performance Test",
            "RMP – Modified Polyester",
            "PVDF – Polyvinylidene Fluoride"
          ],
          [
            "Humidity Resistance – HDG",
            "No blistering, peeling, cracking, significant loss of gloss or softening after 1,000 hours at 100% RH and approximately 38°C",
            "No blistering, peeling, cracking, significant loss of gloss or softening up to 2,000 hours at 100% RH and approximately 38°C"
          ],
          [
            "QUV – UV Exposure",
            "QUV-A: 4 h UV at 75°C + 4 h condensation at 50°C; up to 1,000 UV hours",
            "QUV-B: 4 h UV at 50°C + 4 h condensation at 40°C; up to 1,000 UV hours"
          ],
          [
            "Color Change",
            "≤5 NBS units, as specified",
            "≤5 NBS units, as specified"
          ],
          [
            "Chalking",
            "≤ Rating 2",
            "≤ Rating 2"
          ],
          [
            "Gloss Retention",
            "As specified by applicable test method",
            "As specified by applicable test method"
          ],
          [
            "Blistering / Adhesion Loss",
            "No blistering or adhesion loss after specified exposure",
            "No blistering or adhesion loss after specified exposure"
          ],
          [
            "Salt Spray Resistance – HDG",
            "No blistering after 1,000 hours in 5% neutral salt spray",
            "No blistering after 2,000 hours in 5% neutral salt spray"
          ],
          [
            "",
            "",
            ""
          ],
          [
            "",
            "",
            ""
          ],
          [
            "Chemical Resistance",
            "Chemical Resistance",
            "Chemical Resistance"
          ],
          [
            "Chemical Test",
            "RMP – Modified Polyester",
            "PVDF – Polyvinylidene Fluoride"
          ],
          [
            "10% HCl – 30 min Spot Test",
            "No significant color change or blistering",
            "No significant color change or blistering"
          ],
          [
            "5% NaOH – 30 min Exposure",
            "No significant color change or blistering",
            "No significant color change or blistering"
          ],
          [
            "",
            "",
            ""
          ],
          [
            "",
            "",
            ""
          ],
          [
            "Durability & Chalk Retention",
            "Durability & Chalk Retention",
            "Durability & Chalk Retention"
          ],
          [
            "Property",
            "RMP – Modified Polyester",
            "PVDF – Polyvinylidene Fluoride"
          ],
          [
            "Film Integrity – Reference Period",
            "10 years",
            "20 years"
          ],
          [
            "Chalk Retention – ASTM D4214, Method A",
            "Rating >2",
            "Rating >4"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Standard Colour Range"
      },
      {
        "type": "table",
        "headerRows": 1,
        "rows": [
          [
            "Colour",
            "RAL Code"
          ],
          [
            "Grey White",
            "RAL 9002"
          ],
          [
            "Light Ivory",
            "RAL 1015"
          ],
          [
            "Leaf Green",
            "RAL 6002"
          ],
          [
            "Light Grey",
            "RAL 7035"
          ],
          [
            "Beige",
            "RAL 1001"
          ],
          [
            "Ivory",
            "RAL 1014"
          ],
          [
            "Reseda Green",
            "RAL 6011"
          ],
          [
            "Sky Blue",
            "RAL 5015"
          ],
          [
            "Light Blue",
            "RAL 5012"
          ],
          [
            "Signal Red",
            "RAL 3001"
          ],
          [
            "As per Customer Samples",
            "Custom"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Quality Assurance"
      },
      {
        "type": "table",
        "headerRows": 1,
        "rows": [
          [
            "Test",
            "Range / Specification"
          ],
          [
            "Erichsen Cupping Test",
            "7.0 mm"
          ],
          [
            "T-Bend Test",
            "0T – 4T"
          ],
          [
            "Impact Test",
            "70 kg·cm to 100 kg·cm"
          ],
          [
            "Pencil Hardness",
            "F – H – 2H"
          ],
          [
            "Scratch Resistance",
            "1 to 1.5 kg"
          ],
          [
            "Solvent Resistance (MEK)",
            "100 rubs (Double Rubs)"
          ],
          [
            "Gloss at 60°",
            "20–90%"
          ],
          [
            "Colour Difference from Standard",
            "< 1.0 for lighter colour; < 1.5 for darker colour"
          ],
          [
            "Visual Colour Comparator",
            "At different light sources"
          ],
          [
            "Humidity Resistance",
            "1000 hours"
          ],
          [
            "Salt Spray Test",
            "750 to 1000 hours"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "Quality assurance can include source-mill or processor inspection, dimensional checks, coating and paint test reports, and agreed technical documentation such as MTC/COC records where applicable."
      },
      {
        "type": "paragraph",
        "text": "Note: The grades and tolerances shown are indicative. Special grades and closer tolerances can be discussed case by case and agreed before order confirmation."
      },
      {
        "type": "table",
        "headerRows": 1,
        "rows": [
          [
            "Applications",
            "International Specifications: Euro Norm",
            "International Specifications: American Standards",
            "International Specifications: JIS Standards",
            "Substrate",
            "Coating",
            "Dimension Range (mm)",
            "Indian Specification Standards"
          ],
          [
            "General fabrication",
            "EN 10169",
            "ASTM A 755",
            "JIS - G3312",
            "Galvanized (90 - 275 GSM)\n\nCold rolled / Aluminium",
            "Primer 4-8 micron,\n\nTop Coat 14-30 micron,\n\nBack Coat 5-10 micron",
            "Thickness: 0.25 to 1.20\n\nWidth : 100 to 1350",
            "IS 14246"
          ],
          [
            "Roofing",
            "EN 10169",
            "ASTM A 755",
            "JIS - G3312",
            "Galvanized (90 - 275 GSM)\n\nCold rolled / Aluminium",
            "Primer 4-8 micron,\n\nTop Coat 14-30 micron,\n\nBack Coat 5-10 micron",
            "Thickness: 0.25 to 1.20\n\nWidth : 700 to 1350",
            "IS 14246"
          ],
          [
            "Profiling",
            "EN 10169",
            "ASTM A 755",
            "JIS - G3312",
            "Galvanized (90 - 275 GSM)\n\nCold rolled\n\nY.S-240/340/550 MPa",
            "Zinc coating wt. 90-275 GSM\n\nPrimer 4-8 micron both sides\n\nTop Coat 14-30 micron,\n\nBack Coat 5-10 micron\n\nOptional guard film can be supplied",
            "Thickness: 0.20 to 0.80\n\nCover Width : 1060/1200 (before profiling)\n\n1220/1370\n\nLength: 12000mm Max",
            "IS 14246"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Applications of PPGI & PPGL Coils"
      },
      {
        "type": "paragraph",
        "text": "PPGI (Pre-Painted Galvanized Steel) and PPGL (Pre-Painted Aluzinc/Aluminium-Zinc Steel) coils are widely used across the UAE and GCC for construction, roofing, cladding and industrial manufacturing. Their factory-applied colour coating provides an attractive finish, corrosion protection and consistent surface quality."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Key Applications"
      },
      {
        "type": "paragraph",
        "text": "Roofing & Wall Cladding"
      },
      {
        "type": "paragraph",
        "text": "Sandwich Panel Manufacturing"
      },
      {
        "type": "paragraph",
        "text": "Industrial & Commercial Buildings"
      },
      {
        "type": "paragraph",
        "text": "Cold Rooms & Refrigeration Panels"
      },
      {
        "type": "paragraph",
        "text": "HVAC & Air-Conditioning Equipment"
      },
      {
        "type": "paragraph",
        "text": "Fencing & Metal Panels"
      },
      {
        "type": "paragraph",
        "text": "Garage Doors & Rolling Shutters"
      },
      {
        "type": "paragraph",
        "text": "Ceiling & Interior Partition Systems"
      },
      {
        "type": "paragraph",
        "text": "Steel Furniture & Cabinets"
      },
      {
        "type": "paragraph",
        "text": "Home Appliances & White Goods"
      },
      {
        "type": "paragraph",
        "text": "Agricultural Buildings, Greenhouses & Sheds"
      },
      {
        "type": "paragraph",
        "text": "Architectural & Decorative Cladding"
      },
      {
        "type": "paragraph",
        "text": "PPGI and PPGL coils are available in multiple thicknesses, widths, coating specifications and RAL colours, making them suitable for roll forming, profiling, fabrication and panel manufacturing."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "PPGI & PPGL Coils for GCC Applications"
      },
      {
        "type": "paragraph",
        "text": "Suitable for projects and manufacturing customers across the UAE, Saudi Arabia, Qatar, Oman, Kuwait and Bahrain, with specifications selected according to the application, environmental exposure, coating system and required service performance."
      }
    ]
  },
  "pre-painted-aluminium-coils": {
    "sourceLabel": "SRK Steel page content update",
    "blocks": [
      {
        "type": "heading",
        "level": 2,
        "text": "Prepainted Aluminium Coils (PPAL)"
      },
      {
        "type": "paragraph",
        "text": "Prepainted Aluminium Coils (PPAL) are colour-coated aluminium coils manufactured for roofing, cladding, sandwich panels, ACP, ceilings, gutters and other architectural and industrial applications. PPAL combines the lightweight and corrosion-resistant properties of aluminium with a durable factory-applied paint finish."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "PPAL Coil Specifications"
      },
      {
        "type": "table",
        "headerRows": 1,
        "rows": [
          [
            "Specification",
            "Available Range"
          ],
          [
            "Standard",
            "ASTM B209 / EN / International Standards"
          ],
          [
            "Alloys",
            "1100, 3003, 3004, 3005, 3105, 5005, 5052 and others"
          ],
          [
            "Temper",
            "H14, H16, H24, H26, H46, H48 and as required"
          ],
          [
            "Thickness",
            "0.20–1.20 mm"
          ],
          [
            "Width",
            "Up to 1,350 mm"
          ],
          [
            "Coil ID",
            "508 mm standard; 610 mm optional"
          ],
          [
            "Coil OD",
            "Up to 1,800 mm"
          ],
          [
            "Coating",
            "PE, SMP, PVDF, Epoxy and other systems"
          ],
          [
            "Colours",
            "RAL and customised colours"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "PPAL Coil Applications"
      },
      {
        "type": "paragraph",
        "text": "Prepainted aluminium coils are widely used for:"
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Roofing & wall cladding",
          "Curtain wall systems",
          "Sandwich panels",
          "Aluminium Composite Panels (ACP)",
          "Ceiling systems",
          "Roller shutters",
          "Gutters & rainwater systems",
          "HVAC and architectural applications",
          "Home appliances",
          "Signage and decorative panels"
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "text": "PPAL Paint & Coating Systems"
      },
      {
        "type": "paragraph",
        "text": "Depending on the application, PPAL coils can be supplied with PE (Polyester), SMP, PVDF, Epoxy and high-durability coating systems. PVDF-coated aluminium is commonly selected for demanding exterior architectural applications requiring enhanced colour retention and weather resistance."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Prepainted Aluminium Coil Supplier in UAE"
      },
      {
        "type": "paragraph",
        "text": "PPAL coils can be supplied in customised alloy, temper, thickness, width, coating, colour and coil-weight specifications for customers across the UAE and GCC, including Saudi Arabia, Qatar, Oman, Kuwait and Bahrain."
      },
      {
        "type": "paragraph",
        "text": "SRK Steel supplies prepainted aluminium coils in the UAE and GCC for roofing, cladding, ACP, sandwich panels and architectural applications, with PE, PVDF and other coating systems available subject to the required specification."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Specifications – Prepainted Aluminium Coils (PPAL)"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "PPAL Coil Quality Standards & Testing"
      },
      {
        "type": "paragraph",
        "text": "Prepainted Aluminium Coils (PPAL) are manufactured by continuously coating mill-finish aluminium coils with the specified primer and topcoat system. Factory quality control and coating performance are verified through relevant mechanical, paint and surface tests according to the applicable product specification."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Quality Tests for Prepainted Aluminium Coils"
      },
      {
        "type": "table",
        "headerRows": 1,
        "rows": [
          [
            "Test",
            "Purpose"
          ],
          [
            "Colour",
            "Verifies colour consistency and RAL shade"
          ],
          [
            "Gloss",
            "Checks surface gloss level and finish"
          ],
          [
            "Dry Film Thickness",
            "Measures paint coating thickness"
          ],
          [
            "T-Bend Test",
            "Evaluates coating flexibility during forming"
          ],
          [
            "Mandrel Bend Test",
            "Checks coating performance during bending"
          ],
          [
            "Cross-Hatch Adhesion",
            "Evaluates paint adhesion to the aluminium substrate"
          ],
          [
            "Pencil Hardness",
            "Measures surface hardness and scratch resistance"
          ],
          [
            "Solvent Resistance",
            "Checks coating resistance to solvents"
          ],
          [
            "Salt Spray Test",
            "Evaluates corrosion resistance"
          ],
          [
            "Chalk Resistance",
            "Assesses coating resistance to surface chalking"
          ]
        ]
      },
      {
        "type": "paragraph",
        "text": "PPAL coils can be supplied with PE, SMP, PVDF and other coating systems, with specifications tailored to roofing, cladding, ACP, sandwich panels and architectural applications in the UAE and GCC."
      },
      {
        "type": "heading",
        "level": 2,
        "text": "COATING COMPARISON"
      },
      {
        "type": "paragraph",
        "text": "Prepainted Coil Coating Comparison: PVDF vs HDP vs PUPA vs SMP"
      },
      {
        "type": "table",
        "headerRows": 1,
        "rows": [
          [
            "S.N.",
            "Properties",
            "PVDF",
            "High Durable Polyester (HDP)",
            "PUPA",
            "Silicon Modified Polyester (SMP)"
          ],
          [
            "1",
            "Colour Range",
            "Good Range",
            "Excellent Range",
            "Good Range",
            "Good Range"
          ],
          [
            "2",
            "Durability",
            "Outstanding",
            "Excellent",
            "Excellent",
            "Excellent"
          ],
          [
            "3",
            "Heat Resistance",
            "Good–Excellent",
            "Good",
            "Excellent",
            "Good–Excellent"
          ],
          [
            "4",
            "Abrasion Resistance",
            "Good",
            "Good",
            "Excellent",
            "Good"
          ],
          [
            "5",
            "Gloss Retention",
            "Excellent",
            "Excellent",
            "Good",
            "Good"
          ],
          [
            "6",
            "Cupping / Formability",
            "6 mm",
            "6 mm",
            "6 mm",
            "6 mm"
          ],
          [
            "7",
            "Pencil Hardness",
            "F–HB",
            "H",
            "H",
            "H"
          ],
          [
            "8",
            "Cross-Hatch Adhesion",
            "100% Pass",
            "100% Pass",
            "100% Pass",
            "100% Pass"
          ],
          [
            "9",
            "Salt Spray Resistance",
            "2,000 hrs",
            "1,000 hrs",
            "1,000 hrs",
            "1,000 hrs"
          ],
          [
            "10",
            "Warranty",
            "15–20 Years",
            "10–15 Years",
            "15 Years",
            "5 Years"
          ],
          [
            "11",
            "UV Resistance",
            "Excellent",
            "Good",
            "Good",
            "Good"
          ],
          [
            "12",
            "MEK Double Rub",
            "Good",
            "Good",
            "Good",
            "Good"
          ],
          [
            "13",
            "Impact Resistance",
            "Good",
            "Good",
            "Good",
            "Good"
          ],
          [
            "14",
            "T-Bend",
            "0T / 1T",
            "0T / 1T",
            "0T / 1T",
            "1T / 2T"
          ],
          [
            "15",
            "Film Characteristics",
            "Soft",
            "Soft / Hard",
            "Hard",
            "Hard"
          ],
          [
            "16",
            "QUV-B Performance",
            "Excellent",
            "Excellent",
            "Good–Excellent",
            "Poor / Good"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "text": "Prepainted Coil Coating Types: PVDF, High Durable Polyester, PUPA & SMP"
      },
      {
        "type": "paragraph",
        "text": "The performance of prepainted metal coils depends significantly on the organic coating system applied to the substrate. Different coating systems offer different levels of UV resistance, corrosion protection, colour retention, gloss retention, flexibility, hardness, abrasion resistance and weather durability."
      },
      {
        "type": "paragraph",
        "text": "Common coating systems for prepainted metal coils include PVDF, High Durable Polyester (HDP), PUPA and Silicon Modified Polyester (SMP). The appropriate system should be selected according to the building application, environmental exposure, forming requirements, required service life and project specification."
      }
    ]
  }
};

export function getProductTechnicalContent(slug: string) {
  return productTechnicalContent[slug] ?? null;
}
