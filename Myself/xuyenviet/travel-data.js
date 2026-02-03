/* FILE: travel-data.js
  Dữ liệu hành trình Xuyên Việt - Nolan's Journey
  Lộ trình TỐC ĐỘ: TP.HCM -> Thái Bình (08/01 - 12/01)
  Quy tắc: Chạy 4h-10h (Sáng) & 13h30-18h30 (Chiều).
*/

const stops = [
  // --- NGÀY 1: 08/01 (HCM -> PHAN RANG) ---
  {
    id: "hcm",
    coords: [10.7769, 106.7009],
    title: "Xuất phát: TP. Hồ Chí Minh",
    date: "08/01/2025 (04:00)",
    type: "main",
    desc: `<b>NGÀY 1: KHỞI HÀNH SỚM</b><br>
    Xuất phát 4:00 sáng để tránh nắng và kẹt xe. Mục tiêu: Ăn trưa Phan Thiết.`,
    images: [],
    img: "https://images.unsplash.com/photo-1555921090-b1cd718d123d?w=800",
  },
  {
    id: "phan-thiet",
    coords: [10.9289, 108.1021],
    title: "Nghỉ trưa: Phan Thiết",
    date: "08/01/2025 (10:00)",
    type: "rest",
    desc: "Nghỉ ngơi 10h-13h30. Tránh nắng gắt.",
    img: "https://images.unsplash.com/photo-1565691253456-353279998818?w=800",
  },
  {
    id: "thap-cham",
    coords: [11.5956, 108.9749],
    title: "Tham quan & Nghỉ đêm: Phan Rang",
    date: "08/01/2025 (17:00)",
    type: "main",
    desc: "Thăm Tháp Chàm Po Klong Garai. Nghỉ đêm tại Phan Rang để sáng mai đi cung đường biển.",
    img: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800",
  },

  // --- NGÀY 2: 09/01 (PHAN RANG -> QUY NHƠN) ---
  {
    id: "vinh-hy",
    coords: [11.7225, 109.1916],
    title: "Check-in: Vịnh Vĩnh Hy",
    date: "09/01/2025 (06:00)",
    type: "gas",
    desc: "Cung đường biển đẹp nhất Việt Nam. Đổ đầy bình xăng.",
    img: "https://images.unsplash.com/photo-1534008897995-27a23e859048?w=800",
  },
  {
    id: "mui-dien",
    coords: [12.8944, 109.4622],
    title: "Nghỉ trưa: Mũi Điện - Đại Lãnh",
    date: "09/01/2025 (10:30)",
    type: "main",
    desc: "Check-in Cực Đông. Nghỉ trưa dài đến 13h30.",
    img: "https://plus.unsplash.com/premium_photo-1669047913360-1e52db679c29?w=800",
  },
  {
    id: "quy-nhon",
    coords: [13.7830, 109.2197],
    title: "Nghỉ đêm: Quy Nhơn",
    date: "09/01/2025 (17:30)",
    type: "main",
    desc: "Kết thúc ngày 2. Thưởng thức bún chả cá Quy Nhơn.",
    img: "https://images.unsplash.com/photo-1594406359567-5d341904c632?w=800",
  },

  // --- NGÀY 3: 10/01 (QUY NHƠN -> HUẾ) ---
  {
    id: "tam-ky",
    coords: [15.5646, 108.4820],
    title: "Dừng chân: Tam Kỳ",
    date: "10/01/2025 (08:30)",
    type: "gas",
    desc: "Nghỉ ngơi ngắn + Đổ xăng.",
    img: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800",
  },
  {
    id: "da-nang",
    coords: [16.0544, 108.2022],
    title: "Nghỉ trưa: Đà Nẵng",
    date: "10/01/2025 (10:30)",
    type: "main",
    desc: "Nghỉ trưa tại Đà Nẵng. 13h30 xuất phát leo đèo Hải Vân.",
    img: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800",
  },
  {
    id: "hue",
    coords: [16.4637, 107.5909],
    title: "Nghỉ đêm: Cố đô Huế",
    date: "10/01/2025 (17:00)",
    type: "main",
    desc: "Dạo chơi Đại Nội, ra bờ sông Hương hóng mát.",
    img: "https://images.unsplash.com/photo-1588607736666-acbb27db68e2?w=800",
  },

  // --- NGÀY 4: 11/01 (HUẾ -> THANH HÓA) - NGÀY CĂNG NHẤT ---
  {
    id: "dong-hoi",
    coords: [17.4765, 106.6214],
    title: "Check-in nhanh: Đồng Hới",
    date: "11/01/2025 (07:30)",
    type: "gas",
    desc: "Chụp ảnh cổng Quảng Bình Quan rồi đi tiếp.",
    img: "https://images.unsplash.com/photo-1623896562094-d2e07173de46?w=800",
  },
  {
    id: "ha-tinh",
    coords: [18.3430, 105.9056],
    title: "Nghỉ trưa: Hà Tĩnh",
    date: "11/01/2025 (11:00)",
    type: "rest",
    desc: "Ăn trưa, nghỉ ngơi lấy sức.",
    img: "https://images.unsplash.com/photo-1605809758652-52028637df00?w=800",
  },
  {
    id: "thanh-hoa",
    coords: [19.8091, 105.7739],
    title: "Nghỉ đêm: Thanh Hóa",
    date: "11/01/2025 (18:30)",
    type: "main",
    desc: "Cố gắng về đến Thanh Hóa để mai thong thả.",
    img: "https://images.unsplash.com/photo-1594142750388-75618b0c6114?w=800",
  },

   // --- NGÀY 5: 12/01 (THANH HÓA -> THÁI BÌNH) ---
  {
    id: "ninh-binh",
    coords: [20.2506, 105.9744],
    title: "Ăn sáng: Ninh Bình",
    date: "12/01/2025 (07:00)",
    type: "rest",
    desc: "Ăn sáng miến lươn/cơm cháy.",
    img: "https://images.unsplash.com/photo-1594142750388-75618b0c6114?w=800",
  },
  {
    id: "nha",
    coords: [20.4461, 106.3362],
    title: "VỀ ĐẾN NHÀ: Thái Bình",
    date: "12/01/2025 (09:00)",
    type: "main",
    desc: `<b>🎉 MISSION COMPLETED!</b><br>
    Đã về đến nhà an toàn sau 5 ngày hành trình tốc hành.
    <br>Tổng quãng đường: 1750km.`,
    img: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800",
  },
];

/* Reverting to original routing logic */
const routes = [
  { from: "hcm", to: "phan-thiet", status: "completed" },
  { from: "phan-thiet", to: "thap-cham", status: "completed" },
  { from: "thap-cham", to: "vinh-hy", status: "planned" },
  { from: "vinh-hy", to: "mui-dien", status: "planned" },
  { from: "mui-dien", to: "quy-nhon", status: "planned" },
  { from: "quy-nhon", to: "tam-ky", status: "planned" },
  { from: "tam-ky", to: "da-nang", status: "planned" },
  { from: "da-nang", to: "hue", status: "planned" },
  { from: "hue", to: "dong-hoi", status: "planned" },
  { from: "dong-hoi", to: "ha-tinh", status: "planned" },
  { from: "ha-tinh", to: "thanh-hoa", status: "planned" },
  { from: "thanh-hoa", to: "ninh-binh", status: "planned" },
  { from: "ninh-binh", to: "nha", status: "planned" },
];
