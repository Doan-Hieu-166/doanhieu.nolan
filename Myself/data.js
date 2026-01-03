/* --- FILE: data.js --- 
   Nơi cập nhật dữ liệu. 
   Lưu ý: "coords" lấy từ Google Maps (Vĩ độ, Kinh độ)
*/

// 1. DANH SÁCH CÁC ĐIỂM DỪNG (STOPS)
const stopsData = [
  {
    id: "hcm",
    type: "past", // past = đã qua (xanh), current = đang ở (đỏ rung), future = chưa đến (xám)
    coords: [10.7769, 106.7009],
    title: "TP. Hồ Chí Minh",
    date: "01/01/2025",
    avatar: "images/hcm_cover.jpg",

    // Nội dung Blog (Hiển thị khi click vào điểm)
    blog: {
      text: [
        "Ngày khởi hành đầy nắng. Tạm biệt Sài Gòn, hành trình xuyên Việt bắt đầu!",
        "Xe đã bảo dưỡng kỹ, hành lý cột chắc chắn. Cảm giác hồi hộp khó tả.",
      ],
      images: ["images/hcm_1.jpg", "images/hcm_2.jpg"],
    },
  },
  {
    id: "dalat",
    type: "past",
    coords: [11.9404, 108.4583],
    title: "Đà Lạt",
    date: "03/01/2025",
    avatar: "images/dalat_cover.jpg",
    blog: {
      text: [
        "Đèo Bảo Lộc sương mù dày đặc. Lạnh nhưng cực kỳ phê.",
        "Săn mây Cầu Đất thành công rực rỡ.",
      ],
      images: ["images/dalat_1.jpg"],
    },
  },
  {
    id: "bienhoa",
    type: "current", // QUAN TRỌNG: Điểm này sẽ có hiệu ứng RUNG
    coords: [10.9864, 106.8208],
    title: "Biên Hòa (Hiện tại)",
    date: "Hôm nay",
    avatar: "images/avatar.jpg",
    blog: {
      text: [
        "Đang nghỉ ngơi tại nhà người thân. Chuẩn bị sức cho chặng miền Trung.",
      ],
      images: ["images/bienhoa.jpg"],
    },
  },
  {
    id: "nhatrang",
    type: "future",
    coords: [12.2388, 109.1967],
    title: "Nha Trang (Dự kiến)",
    date: "--/--/----",
    avatar: "images/nhatrang.jpg",
    blog: {
      text: ["Dự kiến sẽ đi đường ven biển cực đẹp."],
      images: [],
    },
  },
];

// 2. DANH SÁCH CUNG ĐƯỜNG (ROUTES)
// Nối các điểm với nhau và mô tả chặng đường
const routesData = [
  {
    from: "hcm",
    to: "dalat",
    status: "completed", // completed = Đậm, planned = Nhạt/Nét đứt
    distance: "300km",
    desc: "QL20 - Đèo Bảo Lộc",
    // Thông tin hiển thị khi CLICK VÀO ĐƯỜNG
    info: {
      summary: "Cung đường đèo dốc, nhiều xe khách, cần chú ý quan sát.",
      image: "images/route_hcm_dalat.jpg",
    },
  },
  {
    from: "dalat",
    to: "bienhoa",
    status: "completed",
    distance: "280km",
    desc: "Về lại Đồng Nai thăm nhà",
    info: {
      summary: "Đường về thả dốc nhiều, cảnh rừng thông tuyệt đẹp.",
      image: "images/route_dalat_bienhoa.jpg",
    },
  },
  {
    from: "bienhoa",
    to: "nhatrang",
    status: "planned", // Chưa đi -> Nét đứt
    distance: "350km",
    desc: "Hướng ra biển",
    info: {
      summary: "Dự kiến chạy QL1A kết hợp đường ven biển Bàu Trắng.",
      image: "images/route_plan.jpg",
    },
  },
];
