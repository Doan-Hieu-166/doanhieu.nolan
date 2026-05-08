/* FILE: projects.js
    Đây là nơi bạn cập nhật thông tin chi tiết, hình ảnh và video cho từng dự án.
*/

const projectsData = [
  {
    id: "longan",
    title: "Long An Cold Storage",
    capacity: "1.7 MWp",
    tech: "SMA Inverter (Central Inverter)",
    role: "Site Engineer",
    description:
      "Long An Cold Storage Project (SEA's Tallest Cold Storage as of 09/2025): Served as a technical engineer implementing energy systems utilizing a central DC bus inverter solution to optimize string connectivity. In this specialized high-rise project, my primary focus was maintaining rigorous safety protocols (HSE) and strict progress control to ensure precise system integration and on-time delivery.",
    // Cập nhật đường dẫn ảnh của bạn vào đây (ví dụ: 'images/longan-1.jpg')
    images: [
      "../Picture/LONGAN/1.jpg",
      "../Picture/LONGAN/2.jpg",
      "../Picture/LONGAN/3.jpg",
      "../Picture/LONGAN/4.jpg",
      "../Picture/LONGAN/7.jpg",
      "../Picture/LONGAN/6.jpg",
      "../Picture/LONGAN/8.jpg",
      "../Picture/LONGAN/9.jpg",
      "../Picture/LONGAN/10.jpg",
    ],
  },
  {
    id: "antesco",
    title: "Antesco An Giang",
    capacity: "1.3 MWp",
    tech: "Huawei Inverter (String Inverter)",
    role: "QA/QC Engineer",
    description:
      "Managed quality assurance and control for the solar installation at the Antesco factory, featuring Huawei String Inverter technology. Focused on verifying the precision of individual string monitoring and installation, ensuring high operational flexibility and full compliance with technical specifications.",
    images: [
      "../Picture/ANTESCO/1.jpg",
      "../Picture/ANTESCO/2.jpg",
      "../Picture/ANTESCO/3.jpg",
      "../Picture/ANTESCO/4.jpg",
      "../Picture/ANTESCO/5.jpg",
      "../Picture/ANTESCO/6.jpg",
    ],
    video: "", // Để trống nếu không có video
  },
  {
    id: "cholimex",
    title: "Cholimex Factory",
    capacity: "952 KWp",
    tech: "SolarEdge Inverter (Micro-inverter)",
    role: "Design Engineer|Site Engineer",
    description:
      "Spearheaded the design and on-site supervision of a high-safety solar system utilizing SolarEdge Micro-inverter technology. This solution was specifically chosen to maximize energy yield under shading conditions and ensure the highest fire safety standards for the facility. I managed the entire lifecycle of the project, from engineering design to final commissioning and successful handover.",
    images: [
      "../Picture/CHOLIMEX/2.jpg",
      "../Picture/CHOLIMEX/3.jpg",
      "../Picture/CHOLIMEX/4.jpg",
      "../Picture/CHOLIMEX/5.jpg",
      "../Picture/CHOLIMEX/6.jpg",
      "../Picture/CHOLIMEX/1.jpg",
    ],
    video: "",
  },
  {
    id: "blaofood",
    title: "B'laofood Factory",
    capacity: "880 KWp",
    tech: "Collaborating with CNGRA",
    role: "Design Engineer|Site Engineer",
    description:
      "Spearheaded the engineering design and on-site supervision of sustainable energy solutions for food processing lines. I was directly responsible for configuring Modbus communication protocols, ensuring seamless data acquisition and system monitoring. By actively coordinating with third-party contractors and partners, I successfully managed project milestones and maintained rigorous schedules to ensure on-time delivery and commissioning.",
    images: [
      "../Picture/BLAOFOOD/4.jpg",
      "../Picture/BLAOFOOD/1.jpg",
      "../Picture/BLAOFOOD/24.jpg",
      "../Picture/BLAOFOOD/2.jpg",
      "../Picture/BLAOFOOD/3.jpg",
      "../Picture/BLAOFOOD/21.jpg",
      "../Picture/BLAOFOOD/22.jpg",
      "../Picture/BLAOFOOD/23.jpg",
      "../Picture/BLAOFOOD/25.jpg",
    ],
    video: "",
  },
  {
    id: "longhau",
    title: "Long Hau Pharmaceutical",
    capacity: "499.14 kWp",
    tech: "GMP-EU Standards",
    role: "Site Engineer",
    description:
      "Spearheaded the engineering design and supervision of energy solutions for a pharmaceutical facility under rigorous GMP-EU standards. I was responsible for configuring Modbus communication protocols for high-precision monitoring while managing third-party contractors to ensure strict adherence to safety, hygiene, and project milestones. My focus remained on delivering a robust, grid-compliant system that meets the highest international benchmarks in a sterile production environment.",
    images: [
      "../Picture/LONGHAU/4.jpg",
      "../Picture/LONGHAU/2.jpg",
      "../Picture/LONGHAU/3.jpg",
      "../Picture/LONGHAU/1.jpg",
      "../Picture/LONGHAU/5.jpg",
      "../Picture/LONGHAU/6.jpg",
    ],
    video: "",
  },
];
