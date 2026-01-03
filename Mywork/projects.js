/* FILE: projects.js
    Đây là nơi bạn cập nhật thông tin chi tiết, hình ảnh và video cho từng dự án.
*/

const projectsData = [
  {
    id: "longan",
    title: "Long An Cold Storage",
    capacity: "1.7 MWp",
    tech: "SMA Inverter (Central Inverter)",
    description:
      "The industrial-scale cold storage project adopts SMA’s centralized inverter solution, which enhances operational efficiency and ensures stable performance for large electrical loads.",
    // Cập nhật đường dẫn ảnh của bạn vào đây (ví dụ: 'images/longan-1.jpg')
    images: [
      "../Picture/LONGAN/1.jpg",
      "../Picture/LONGAN/2.jpg",
      "../Picture/LONGAN/3.JPG",
      "../Picture/LONGAN/4.JPG",
      "../Picture/LONGAN/7.JPG",
      "../Picture/LONGAN/6.JPG",
      "../Picture/LONGAN/8.JPG",
      "../Picture/LONGAN/9.JPG",
      "../Picture/LONGAN/10.JPG",
    ],
  },
  {
    id: "antesco",
    title: "Antesco An Giang",
    capacity: "1.3 MWp",
    tech: "Huawei Inverter (String Inverter)",
    description:
      "Hệ thống điện mặt trời áp mái nhà máy Antesco, sử dụng công nghệ String Inverter của Huawei để linh hoạt trong việc lắp đặt và giám sát từng chuỗi pin.",
    images: [
      "https://via.placeholder.com/800x400?text=Antesco+Site",
      "https://via.placeholder.com/400x300?text=Installation+Process",
    ],
    video: "", // Để trống nếu không có video
  },
  {
    id: "cholimex",
    title: "Cholimex Factory",
    capacity: "952 KWp",
    tech: "SolarEdge Inverter (Micro-inverter)",
    description:
      "Ứng dụng công nghệ Micro-inverter của SolarEdge giúp tối đa hóa sản lượng điện năng khi có bóng râm và đảm bảo an toàn cháy nổ cao nhất cho nhà máy.",
    images: [
      "https://via.placeholder.com/800x400?text=Cholimex+Roof",
      "https://via.placeholder.com/400x300?text=SolarEdge+System",
    ],
    video: "",
  },
  {
    id: "blaofood",
    title: "B'laofood Factory",
    capacity: "880 KWp",
    tech: "Collaborating with CNGRA",
    description:
      "Dự án đang triển khai hợp tác cùng CNGRA, tập trung vào giải pháp năng lượng xanh bền vững cho dây chuyền chế biến thực phẩm.",
    images: ["https://via.placeholder.com/800x400?text=Blaofood+Planning"],
    video: "",
  },
  {
    id: "longhau",
    title: "Long Hau Pharmaceutical",
    capacity: "499.14 kWp",
    tech: "GMP-EU Standards",
    description:
      "Dự án yêu cầu tiêu chuẩn khắt khe GMP-EU cho dược phẩm. Thiết kế và thi công tuân thủ nghiêm ngặt các quy định về an toàn và vệ sinh.",
    images: ["https://via.placeholder.com/800x400?text=Long+Hau+Pharma"],
    video: "",
  },
];
