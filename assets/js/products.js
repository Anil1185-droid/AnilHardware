const IMG = {
  asianPaints: "assets/images/products/asian-paints.svg",
  bergerPaints: "assets/images/products/berger-paints.svg",
  bangurCement: "assets/images/products/bangur-cement.svg",
  ambujaCement: "assets/images/products/ambuja-cement.svg",
  tataRod: "assets/images/products/tata-rod.svg",
  jindalRod: "assets/images/products/jindal-rod.svg",
  birlaPutty: "assets/images/products/birla-putty.svg",
  germanRustic: "assets/images/products/german-rustic.svg",
  generic: "assets/images/products/generic-hardware.svg"
};

export const products = [
  {
    id: "CEM-001",
    name: "UltraTech OPC 53 Grade Cement",
    category: "Cement",
    brand: "UltraTech",
    unit: "50 kg bag",
    price: 430,
    rating: 4.8,
    tags: ["foundation", "RCC", "high strength"],
    image: IMG.generic
  },
  {
    id: "CEM-002",
    name: "ACC Gold Water Shield Cement",
    category: "Cement",
    brand: "ACC",
    unit: "50 kg bag",
    price: 445,
    rating: 4.7,
    tags: ["water resistance", "durable"],
    image: IMG.generic
  },
  {
    id: "CEM-003",
    name: "Ambuja Cool Walls Cement",
    category: "Cement",
    brand: "Ambuja",
    unit: "50 kg bag",
    price: 435,
    rating: 4.6,
    tags: ["low heat", "summer comfort"],
    image: IMG.ambujaCement,
    offer: "Save Rs 10 per bag on 100+ bag orders"
  },
  {
    id: "CEM-004",
    name: "Bangur PowerMax Cement",
    category: "Cement",
    brand: "Bangur",
    unit: "50 kg bag",
    price: 428,
    rating: 4.6,
    tags: ["high strength", "site friendly"],
    image: IMG.bangurCement,
    offer: "Bulk site pricing available"
  },
  {
    id: "ROD-001",
    name: "Tata Tiscon SD TMT Rod 10mm",
    category: "TMT Rod",
    brand: "Tata Tiscon",
    unit: "per piece",
    price: 790,
    rating: 4.9,
    tags: ["earthquake resistant", "high ductility"],
    image: IMG.tataRod,
    offer: "Contractor slab discount"
  },
  {
    id: "ROD-002",
    name: "Fe 550 TMT Rod 12mm",
    category: "TMT Rod",
    brand: "JSW Neosteel",
    unit: "per piece",
    price: 1120,
    rating: 4.8,
    tags: ["construction", "corrosion resistant"],
    image: IMG.generic
  },
  {
    id: "ROD-003",
    name: "Kamdhenu NXT TMT Rod 8mm",
    category: "TMT Rod",
    brand: "Kamdhenu",
    unit: "per piece",
    price: 570,
    rating: 4.6,
    tags: ["flexible", "beams"],
    image: IMG.generic
  },
  {
    id: "ROD-004",
    name: "Jindal Panther TMT Rod 12mm",
    category: "TMT Rod",
    brand: "Jindal",
    unit: "per piece",
    price: 1090,
    rating: 4.7,
    tags: ["high tensile", "trusted quality"],
    image: IMG.jindalRod,
    offer: "Free binding wire on bulk order"
  },
  {
    id: "PAI-001",
    name: "Asian Paints Tractor Emulsion",
    category: "Paints",
    brand: "Asian Paints",
    unit: "10 L bucket",
    price: 2140,
    rating: 4.6,
    tags: ["interior", "matte finish"],
    image: IMG.asianPaints,
    offer: "Up to 8% off on selected buckets"
  },
  {
    id: "PAI-002",
    name: "Berger Easy Clean Luxury Emulsion",
    category: "Emulsion",
    brand: "Berger",
    unit: "10 L bucket",
    price: 3740,
    rating: 4.7,
    tags: ["washable", "stain resistant"],
    image: IMG.bergerPaints,
    offer: "Free roller tray on selected packs"
  },
  {
    id: "PAI-003",
    name: "Nerolac Beauty Gold Distemper",
    category: "Distemper",
    brand: "Nerolac",
    unit: "20 kg pack",
    price: 1260,
    rating: 4.5,
    tags: ["budget", "smooth look"],
    image: IMG.generic
  },
  {
    id: "PAI-004",
    name: "Asian Paints Apcolite Premium Enamel",
    category: "Paints",
    brand: "Asian Paints",
    unit: "4 L can",
    price: 1480,
    rating: 4.6,
    tags: ["wood", "metal", "gloss"],
    image: IMG.asianPaints
  },
  {
    id: "PAI-005",
    name: "Berger Walmasta Distemper",
    category: "Distemper",
    brand: "Berger",
    unit: "20 kg pack",
    price: 1180,
    rating: 4.4,
    tags: ["budget", "wall finish"],
    image: IMG.bergerPaints
  },
  {
    id: "PAI-006",
    name: "Asian Apex Ultima Exterior Paint",
    category: "Emulsion",
    brand: "Asian Paints",
    unit: "10 L bucket",
    price: 4290,
    rating: 4.9,
    tags: ["anti-fade", "weather guard"],
    image: IMG.asianPaints,
    offer: "Weather shield combo discount"
  },
  {
    id: "PAI-007",
    name: "German Rustic Texture Finish",
    category: "Texture Finish",
    brand: "German Rustic",
    unit: "20 kg bucket",
    price: 2890,
    rating: 4.7,
    tags: ["designer walls", "premium texture"],
    image: IMG.germanRustic,
    offer: "Introductory pricing on texture line"
  },
  {
    id: "PUT-001",
    name: "JK Wall Putty White Cement Based",
    category: "Putty",
    brand: "JK",
    unit: "40 kg bag",
    price: 990,
    rating: 4.8,
    tags: ["crack fill", "paint base"],
    image: IMG.generic
  },
  {
    id: "PUT-002",
    name: "Birla White WallCare Putty",
    category: "Putty",
    brand: "Birla White",
    unit: "20 kg bag",
    price: 560,
    rating: 4.7,
    tags: ["water resistance", "high coverage"],
    image: IMG.birlaPutty,
    offer: "Combo deal with paint products"
  },
  {
    id: "PUT-003",
    name: "Acrylic Wall Putty Ready Mix",
    category: "Putty",
    brand: "Dr. Fixit",
    unit: "25 kg tub",
    price: 1140,
    rating: 4.5,
    tags: ["smooth finish", "interior walls"],
    image: IMG.generic
  },
  {
    id: "EML-001",
    name: "Dulux Weathershield Exterior Emulsion",
    category: "Emulsion",
    brand: "Dulux",
    unit: "20 L bucket",
    price: 6940,
    rating: 4.8,
    tags: ["UV resistant", "exterior"],
    image: IMG.generic
  },
  {
    id: "PLU-001",
    name: "CPVC Pipe 3/4 inch",
    category: "Plumbing",
    brand: "Astral",
    unit: "3 meter length",
    price: 320,
    rating: 4.6,
    tags: ["hot water", "durable"],
    image: IMG.generic
  },
  {
    id: "PLU-002",
    name: "UPVC Ball Valve Set",
    category: "Plumbing",
    brand: "Supreme",
    unit: "set",
    price: 280,
    rating: 4.4,
    tags: ["leak proof", "bathroom"],
    image: IMG.generic
  },
  {
    id: "ELE-001",
    name: "Anchor 6A Modular Switch",
    category: "Electrical",
    brand: "Anchor",
    unit: "piece",
    price: 75,
    rating: 4.5,
    tags: ["home wiring", "modular"],
    image: IMG.generic
  },
  {
    id: "ELE-002",
    name: "Polycab House Wire 1.5 sqmm",
    category: "Electrical",
    brand: "Polycab",
    unit: "90 meter coil",
    price: 1650,
    rating: 4.8,
    tags: ["fire resistant", "copper"],
    image: IMG.generic
  },
  {
    id: "TLS-001",
    name: "Masonry Trowel Premium Steel",
    category: "Tools",
    brand: "Taparia",
    unit: "piece",
    price: 290,
    rating: 4.4,
    tags: ["finishing", "construction"],
    image: IMG.generic
  },
  {
    id: "TLS-002",
    name: "Heavy Duty Paint Roller Kit",
    category: "Tools",
    brand: "Generic",
    unit: "set",
    price: 420,
    rating: 4.3,
    tags: ["paint", "easy coverage"],
    image: IMG.generic
  },
  {
    id: "SAN-001",
    name: "Vitreous Wash Basin Wall Mount",
    category: "Sanitary",
    brand: "Parryware",
    unit: "piece",
    price: 1890,
    rating: 4.5,
    tags: ["bathroom", "premium finish"],
    image: IMG.generic
  },
  {
    id: "SAN-002",
    name: "Single Lever Basin Mixer",
    category: "Sanitary",
    brand: "Jaquar",
    unit: "piece",
    price: 2640,
    rating: 4.7,
    tags: ["chrome", "water saving"],
    image: IMG.generic
  }
];

export const categories = [
  "All",
  ...new Set(products.map((product) => product.category))
];
