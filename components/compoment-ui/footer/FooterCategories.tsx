import React from 'react';

const FooterCategories = () => {
  return (
    // sửa phong từ 14 thành 12.5
    <div className="p-2 mb-[20px] mt-3.5 xs:hidden">
      <h2 className="font-bold text-big text-gray-600 mb-3.5">Danh mục</h2>

      <div className="grid-cols-4 grid gap-4">
        <div>
          <p className="font-bold text-gray-600 mb-2 mt-2">THỜI TRANG NAM</p>
          <div className="text-gray-600 text-[12.5px]  hover:cursor-pointer">
            <span className="hover:text-primary-red">Áo Khoác</span> |&nbsp;
            <span className="hover:text-primary-red">Áo Vest và Blazerc</span> |&nbsp;
            <span className="hover:text-primary-red">Áo Hoodie, Áo Len & Áo Nỉ</span> |&nbsp;
            <span className="hover:text-primary-red">Quần Jeans</span> |&nbsp;
            <span className="hover:text-primary-red"> Quần Dài/Quần Âu Thống</span>|&nbsp;
            <span className="hover:text-primary-red">Quần Short</span> |&nbsp;
            <span className="hover:text-primary-red">Áo</span> |&nbsp;
            <span className="hover:text-primary-red"> Áo Ba Lỗ</span> |&nbsp;
            <span className="hover:text-primary-red"> Đồ Lót </span> |&nbsp;
            <span className="hover:text-primary-red"> Đồ Ngủ </span> |&nbsp;
            <span className="hover:text-primary-red"> Đồ Bộ </span> |&nbsp;
            <span className="hover:text-primary-red"> Vớ/Tất</span> |&nbsp;
            <span className="hover:text-primary-red">Trang Phục Truyền</span> |&nbsp;
            <span className="hover:text-primary-red">Đồ Hóa Trang</span> |&nbsp;
            <span className="hover:text-primary-red">Trang Phục Ngành Nghề</span> |&nbsp;
            <span className="hover:text-primary-red">Khác</span> |&nbsp;
            <span className="hover:text-primary-red">Trang Sức Nam</span> |&nbsp;
            <span className="hover:text-primary-red">Kính Mắt Nam</span> |&nbsp;
            <span className="hover:text-primary-red">Thắt Lưng Nam</span> |&nbsp;
            <span className="hover:text-primary-red">Cà vạt & Nơ cổ</span> |&nbsp;
            <span className="hover:text-primary-red">Phụ Kiện Nam</span>
          </div>
          <p className="font-bold text-gray-600 mb-2 mt-2">MẸ & BÉ</p>
          <span className="text-gray-600 hover:cursor-pointer text-[12.5px]">
            <span className="hover:text-primary-red">Đồ dùng du lịch cho bé </span> |{' '}
            <span className="hover:text-primary-red">Đồ dùng ăn dặm cho bé</span> |{' '}
            <span className="hover:text-primary-red">Phụ kiện cho mẹ </span> |{' '}
            <span className="hover:text-primary-red">Chăm sóc sức khỏe mẹ</span> |{' '}
            <span className="hover:text-primary-red">Đồ dùng phòng tắm & Chăm sóc cơ thể bé</span> |{' '}
            <span className="hover:text-primary-red">Đồ dùng phòng ngủ cho bé </span> |{' '}
            <span className="hover:text-primary-red">An toàn cho bé</span> |{' '}
            <span className="hover:text-primary-red"> Thực phẩm cho bé </span>|{' '}
            <span className="hover:text-primary-red">Chăm sóc sức khỏe bé</span> |{' '}
            <span className="hover:text-primary-red">Tã & bô em bé</span>|{' '}
            <span className="hover:text-primary-red"> Đồ chơi</span> |{' '}
            <span className="hover:text-primary-red">Bộ & Gói quà tặng</span> |{' '}
            <span className="hover:text-primary-red">Khác</span>|{' '}
            <span className="hover:text-primary-red">Sữa công thức trên 24 tháng</span> |{' '}
            <span className="hover:text-primary-red">Sữa công thức 0-24 tháng tuổi</span>
          </span>
        </div>

        <div>
          <p className="font-bold text-gray-600 mb-2 mt-2">ĐIỆN THOẠI & PHỤ KIỆN</p>
          <span className="text-gray-600 hover:cursor-pointer text-[12.5px]">
            <span className="hover:text-primary-red">Đồ dùng du lịch cho bé </span> |{' '}
            <span className="hover:text-primary-red">Đồ dùng ăn dặm cho bé</span> |{' '}
            <span className="hover:text-primary-red">Phụ kiện cho mẹ </span> |{' '}
            <span className="hover:text-primary-red">Chăm sóc sức khỏe mẹ</span> |{' '}
            <span className="hover:text-primary-red">Đồ dùng phòng tắm & Chăm sóc cơ thể bé</span> |{' '}
            <span className="hover:text-primary-red">Đồ dùng phòng ngủ cho bé </span> |{' '}
            <span className="hover:text-primary-red">An toàn cho bé</span> |{' '}
            <span className="hover:text-primary-red"> Thực phẩm cho bé </span>|{' '}
            <span className="hover:text-primary-red">Chăm sóc sức khỏe bé</span> |{' '}
            <span className="hover:text-primary-red">Tã & bô em bé</span>|{' '}
            <span className="hover:text-primary-red"> Đồ chơi</span> |{' '}
            <span className="hover:text-primary-red">Bộ & Gói quà tặng</span> |{' '}
            <span className="hover:text-primary-red">Khác</span>|{' '}
            <span className="hover:text-primary-red">Sữa công thức trên 24 tháng</span> |{' '}
            <span className="hover:text-primary-red">Sữa công thức 0-24 tháng tuổi</span>
          </span>
          <p className="font-bold text-gray-600 mb-2 mt-2">MÁY TÍNH & LAPTOP</p>
          <span className="text-gray-600 hover:cursor-pointer text-[12.5px]">
            <span className="hover:text-primary-red">Đồ dùng du lịch cho bé </span> |{' '}
            <span className="hover:text-primary-red">Đồ dùng ăn dặm cho bé</span> |{' '}
            <span className="hover:text-primary-red">Phụ kiện cho mẹ </span> |{' '}
            <span className="hover:text-primary-red">Chăm sóc sức khỏe mẹ</span> |{' '}
            <span className="hover:text-primary-red">Đồ dùng phòng tắm & Chăm sóc cơ thể bé</span> |{' '}
            <span className="hover:text-primary-red">Đồ dùng phòng ngủ cho bé </span> |{' '}
            <span className="hover:text-primary-red">An toàn cho bé</span> |{' '}
            <span className="hover:text-primary-red"> Thực phẩm cho bé </span>|{' '}
            <span className="hover:text-primary-red">Chăm sóc sức khỏe bé</span> |{' '}
            <span className="hover:text-primary-red">Tã & bô em bé</span>|{' '}
            <span className="hover:text-primary-red"> Đồ chơi</span> |{' '}
            <span className="hover:text-primary-red">Bộ & Gói quà tặng</span> |{' '}
            <span className="hover:text-primary-red">Khác</span>|{' '}
            <span className="hover:text-primary-red">Sữa công thức trên 24 tháng</span> |{' '}
            <span className="hover:text-primary-red">Sữa công thức 0-24 tháng tuổi</span>
          </span>
          <p className="font-bold text-gray-600 mb-2 mt-2">DỤNG CỤ VÀ THIẾT BỊ TIỆN ÍCH</p>
          <span className="text-gray-600 hover:cursor-pointer text-[12.5px]">
            <span className="hover:text-primary-red">Đồ dùng du lịch cho bé </span> |{' '}
            <span className="hover:text-primary-red">Đồ dùng ăn dặm cho bé</span> |{' '}
            <span className="hover:text-primary-red">Phụ kiện cho mẹ </span> |{' '}
            <span className="hover:text-primary-red">Chăm sóc sức khỏe mẹ</span> |{' '}
            <span className="hover:text-primary-red">Đồ dùng phòng tắm & Chăm sóc cơ thể bé</span> |{' '}
            <span className="hover:text-primary-red">Đồ dùng phòng ngủ cho bé </span> |{' '}
            <span className="hover:text-primary-red">An toàn cho bé</span> |{' '}
            <span className="hover:text-primary-red"> Thực phẩm cho bé </span>|{' '}
            <span className="hover:text-primary-red">Chăm sóc sức khỏe bé</span> |{' '}
            <span className="hover:text-primary-red">Tã & bô em bé</span>|{' '}
            <span className="hover:text-primary-red"> Đồ chơi</span> |{' '}
            <span className="hover:text-primary-red">Bộ & Gói quà tặng</span> |{' '}
            <span className="hover:text-primary-red">Khác</span>|{' '}
            <span className="hover:text-primary-red">Sữa công thức trên 24 tháng</span> |{' '}
            <span className="hover:text-primary-red">Sữa công thức 0-24 tháng tuổi</span>
          </span>
        </div>

        <div>
          <p className="font-bold text-gray-600 mb-2 mt-2">ĐIỆN THOẠI & PHỤ KIỆN</p>
          <span className="text-gray-600 hover:cursor-pointer text-[12.5px]">
            <span className="hover:text-primary-red">Đồ dùng du lịch cho bé </span> |{' '}
            <span className="hover:text-primary-red">Đồ dùng ăn dặm cho bé</span> |{' '}
            <span className="hover:text-primary-red">Phụ kiện cho mẹ </span> |{' '}
            <span className="hover:text-primary-red">Chăm sóc sức khỏe mẹ</span> |{' '}
            <span className="hover:text-primary-red">Đồ dùng phòng tắm & Chăm sóc cơ thể bé</span> |{' '}
            <span className="hover:text-primary-red">Đồ dùng phòng ngủ cho bé </span> |{' '}
            <span className="hover:text-primary-red">An toàn cho bé</span> |{' '}
            <span className="hover:text-primary-red"> Thực phẩm cho bé </span>|{' '}
            <span className="hover:text-primary-red">Chăm sóc sức khỏe bé</span> |{' '}
            <span className="hover:text-primary-red">Tã & bô em bé</span>|{' '}
            <span className="hover:text-primary-red"> Đồ chơi</span> |{' '}
            <span className="hover:text-primary-red">Bộ & Gói quà tặng</span> |{' '}
            <span className="hover:text-primary-red">Khác</span>|{' '}
            <span className="hover:text-primary-red">Sữa công thức trên 24 tháng</span> |{' '}
            <span className="hover:text-primary-red">Sữa công thức 0-24 tháng tuổi</span>
          </span>
          <p className="font-bold text-gray-600 mb-2 mt-2">MÁY TÍNH & LAPTOP</p>
          <span className="text-gray-600 hover:cursor-pointer text-[12.5px]">
            <span className="hover:text-primary-red">Đồ dùng du lịch cho bé </span> |{' '}
            <span className="hover:text-primary-red">Đồ dùng ăn dặm cho bé</span> |{' '}
            <span className="hover:text-primary-red">Phụ kiện cho mẹ </span> |{' '}
            <span className="hover:text-primary-red">Chăm sóc sức khỏe mẹ</span> |{' '}
            <span className="hover:text-primary-red">Đồ dùng phòng tắm & Chăm sóc cơ thể bé</span> |{' '}
            <span className="hover:text-primary-red">Đồ dùng phòng ngủ cho bé </span> |{' '}
            <span className="hover:text-primary-red">An toàn cho bé</span> |{' '}
            <span className="hover:text-primary-red"> Thực phẩm cho bé </span>|{' '}
            <span className="hover:text-primary-red">Chăm sóc sức khỏe bé</span> |{' '}
            <span className="hover:text-primary-red">Tã & bô em bé</span>|{' '}
            <span className="hover:text-primary-red"> Đồ chơi</span> |{' '}
            <span className="hover:text-primary-red">Bộ & Gói quà tặng</span> |{' '}
            <span className="hover:text-primary-red">Khác</span>|{' '}
            <span className="hover:text-primary-red">Sữa công thức trên 24 tháng</span> |{' '}
            <span className="hover:text-primary-red">Sữa công thức 0-24 tháng tuổi</span>
          </span>
          <p className="font-bold text-gray-600 mb-2 mt-2">DỤNG CỤ VÀ THIẾT BỊ TIỆN ÍCH</p>
          <span className="text-gray-600 hover:cursor-pointer text-[12.5px]">
            <span className="hover:text-primary-red">Đồ dùng du lịch cho bé </span> |{' '}
            <span className="hover:text-primary-red">Đồ dùng ăn dặm cho bé</span> |{' '}
            <span className="hover:text-primary-red">Phụ kiện cho mẹ </span> |{' '}
            <span className="hover:text-primary-red">Chăm sóc sức khỏe mẹ</span> |{' '}
            <span className="hover:text-primary-red">Đồ dùng phòng tắm & Chăm sóc cơ thể bé</span> |{' '}
            <span className="hover:text-primary-red">Đồ dùng phòng ngủ cho bé </span> |{' '}
            <span className="hover:text-primary-red">An toàn cho bé</span> |{' '}
            <span className="hover:text-primary-red"> Thực phẩm cho bé </span>|{' '}
            <span className="hover:text-primary-red">Chăm sóc sức khỏe bé</span> |{' '}
            <span className="hover:text-primary-red">Tã & bô em bé</span>|{' '}
            <span className="hover:text-primary-red"> Đồ chơi</span> |{' '}
            <span className="hover:text-primary-red">Bộ & Gói quà tặng</span> |{' '}
            <span className="hover:text-primary-red">Khác</span>|{' '}
            <span className="hover:text-primary-red">Sữa công thức trên 24 tháng</span> |{' '}
            <span className="hover:text-primary-red">Sữa công thức 0-24 tháng tuổi</span>
          </span>
        </div>

        <div>
          <p className="font-bold text-gray-600 mb-2 mt-2">THIẾT BỊ ĐIỆN TỬ</p>
          <span className="text-gray-600 hover:cursor-pointer text-[12.5px]">
            <span className="hover:text-primary-red">Đồ dùng du lịch cho bé </span> |{' '}
            <span className="hover:text-primary-red">Đồ dùng ăn dặm cho bé</span> |{' '}
            <span className="hover:text-primary-red">Phụ kiện cho mẹ </span> |{' '}
            <span className="hover:text-primary-red">Chăm sóc sức khỏe mẹ</span> |{' '}
            <span className="hover:text-primary-red">Đồ dùng phòng tắm & Chăm sóc cơ thể bé</span> |{' '}
            <span className="hover:text-primary-red">Đồ dùng phòng ngủ cho bé </span> |{' '}
            <span className="hover:text-primary-red">An toàn cho bé</span> |{' '}
            <span className="hover:text-primary-red"> Thực phẩm cho bé </span>|{' '}
            <span className="hover:text-primary-red">Chăm sóc sức khỏe bé</span> |{' '}
            <span className="hover:text-primary-red">Tã & bô em bé</span>|{' '}
            <span className="hover:text-primary-red"> Đồ chơi</span> |{' '}
            <span className="hover:text-primary-red">Bộ & Gói quà tặng</span> |{' '}
            <span className="hover:text-primary-red">Khác</span>|{' '}
            <span className="hover:text-primary-red">Sữa công thức trên 24 tháng</span> |{' '}
            <span className="hover:text-primary-red">Sữa công thức 0-24 tháng tuổi</span>
          </span>
          <p className="font-bold text-gray-600 mb-2 mt-2">THIẾT BỊ ĐIỆN GIA DỤNG</p>
          <span className="text-gray-600 hover:cursor-pointer text-[12.5px]">
            <span className="hover:text-primary-red">Đồ dùng du lịch cho bé </span> |{' '}
            <span className="hover:text-primary-red">Đồ dùng ăn dặm cho bé</span> |{' '}
            <span className="hover:text-primary-red">Phụ kiện cho mẹ </span> |{' '}
            <span className="hover:text-primary-red">Chăm sóc sức khỏe mẹ</span> |{' '}
            <span className="hover:text-primary-red">Đồ dùng phòng tắm & Chăm sóc cơ thể bé</span> |{' '}
            <span className="hover:text-primary-red">Đồ dùng phòng ngủ cho bé </span> |{' '}
            <span className="hover:text-primary-red">An toàn cho bé</span> |{' '}
            <span className="hover:text-primary-red"> Thực phẩm cho bé </span>|{' '}
            <span className="hover:text-primary-red">Chăm sóc sức khỏe bé</span> |{' '}
            <span className="hover:text-primary-red">Tã & bô em bé</span>|{' '}
            <span className="hover:text-primary-red"> Đồ chơi</span> |{' '}
            <span className="hover:text-primary-red">Bộ & Gói quà tặng</span> |{' '}
            <span className="hover:text-primary-red">Khác</span>|{' '}
            <span className="hover:text-primary-red">Sữa công thức trên 24 tháng</span> |{' '}
            <span className="hover:text-primary-red">Sữa công thức 0-24 tháng tuổi</span>
          </span>
          <p className="font-bold text-gray-600 mb-2 mt-2">DỤNG CỤ VÀ THIẾT BỊ TIỆN ÍCH</p>
          <span className="text-gray-600 hover:cursor-pointer text-[12.5px]">
            <span className="hover:text-primary-red">Đồ dùng du lịch cho bé </span> |{' '}
            <span className="hover:text-primary-red">Đồ dùng ăn dặm cho bé</span> |{' '}
            <span className="hover:text-primary-red">Phụ kiện cho mẹ </span> |{' '}
            <span className="hover:text-primary-red">Chăm sóc sức khỏe mẹ</span> |{' '}
            <span className="hover:text-primary-red">Đồ dùng phòng tắm & Chăm sóc cơ thể bé</span> |{' '}
            <span className="hover:text-primary-red">Đồ dùng phòng ngủ cho bé </span> |{' '}
            <span className="hover:text-primary-red">An toàn cho bé</span> |{' '}
            <span className="hover:text-primary-red"> Thực phẩm cho bé </span>|{' '}
            <span className="hover:text-primary-red">Chăm sóc sức khỏe bé</span> |{' '}
            <span className="hover:text-primary-red">Tã & bô em bé</span>|{' '}
            <span className="hover:text-primary-red"> Đồ chơi</span> |{' '}
            <span className="hover:text-primary-red">Bộ & Gói quà tặng</span> |{' '}
            <span className="hover:text-primary-red">Khác</span>|{' '}
            <span className="hover:text-primary-red">Sữa công thức trên 24 tháng</span> |{' '}
            <span className="hover:text-primary-red">Sữa công thức 0-24 tháng tuổi</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterCategories;
