/* FILE: travel-data.js
  Đây là nơi bạn cập nhật thông tin chi tiết, hình ảnh và lộ trình.
*/

const stops = [
  {
    id: "hcm",
    coords: [10.7769, 106.7009],
    title: "TP. Hồ Chí Minh",
    date: "Jan 09, 2025",
    // Chèn ảnh trực tiếp vào desc bằng thẻ img
    desc: `Ngày đầu tiên của hành trình. Xe đã bảo dưỡng xong, hành lý gọn gàng. Cảm giác háo hức xen lẫn hồi hộp cùng theo tôi nhe.`,

    images: ["../../Picture/LONGAN/1.jpg"],
    img: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800",
  },
  {
    id: "Phan Rang - Tháp Chăm",
    coords: [11.60488, 108.9360504, 1689],
    title: "Phan Rang - Tháp Chăm",
    date: "Jan 10, 2025",
    desc: "đi đường dài khoảng 7-8 tiếng. nghỉ trưa tại TP Phan Thiết",
    img: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800",
  },
  {
    id: "TP. Quy Nhơn",
    coords: [13.7895062, 109.210734, 2130],
    title: "TP. Quy Nhơn",
    date: "Jan 11, 2025",
    desc: "nghỉ tại Nha Trang và mũi Điện",
    img: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800",
  },
  {
    id: "danang",
    coords: [16.0544, 108.2022],
    title: "Đà Nẵng",
    date: "Jan 12, 2025",
    desc: "Đang trên đường ra miền Trung. Hẹn gặp Đà Nẵng với những cây cầu huyền thoại.",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800",
  },
  {
    id: "TP. Đồng Hới",
    coords: [17.4822, 106.6295],
    title: "TP. Đồng Hới",
    date: "Jan 13, 2025",
    desc: "Đang trên đường ra miền Trung. Hẹn gặp Đà Nẵng với những cây cầu huyền thoại.",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800",
  },
  {
    id: "TP. Vinh",
    coords: [18.7538644, 105.5646966, 47442],
    title: "TP. Vinh",
    date: "Jan 14, 2025",
    desc: "Đang trên đường ra miền Trung. Hẹn gặp Đà Nẵng với những cây cầu huyền thoại.",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800",
  },
  {
    id: "Nhà",
    coords: [20.4291455, 106.4326175, 3627],
    title: "Nhà",
    date: "Dự kiến-Jan 15, 2025",
    desc: "Đang trên đường ra miền Trung. Hẹn gặp Đà Nẵng với những cây cầu huyền thoại.",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800",
  },
];

/* Cập nhật trạng thái đường đi:
  - "completed": Đã đi xong (màu xanh liền mạch)
  - "planned": Dự kiến đi (màu xám nét đứt)
*/
const routes = [
  { from: "hcm", to: "Phan Rang - Tháp Chăm", status: "planned" },
  { from: "Phan Rang - Tháp Chăm", to: "TP. Quy Nhơn", status: "planned" },
  { from: "TP. Quy Nhơn", to: "TP. Đồng Hới", status: "planned" },
  { from: "TP. Đồng Hới", to: "TP. Vinh", status: "planned" },
  { from: "TP. Vinh", to: "Nhà", status: "planned" },
];
