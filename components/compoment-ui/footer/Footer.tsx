import React from "react";
import FooterCategories from "@/components/compoment-ui/footer/FooterCategories";
import "./footer.css";
const Footer = () => {
  const handleClick = () => {
    console.log("Button clicked!");
    // Add your logic here
  };
  return (
    <div className="footer_main bg-[#001] mt-4 ">
      {/* <button onClick={handleClick} >download</button> */}
      <div className="flex justify-center flex-row bg-background-footer pt-4 pb-4 ">
        <div className="container mx-auto overflow-hidden">
          <div className="grid grid-cols-4 gap-4 px-2.5 xs:grid-cols-1">
            <div className="xs:hidden">
              <h3 className="text-big font-bold text-gray-200 leading-[21px] mb-3">
                Hỗ trợ khách hàng
              </h3>
              <ul className="form-normal leading-[25px] text-gray-200">
                <li className="form-normal ">Quy định đăng tin</li>
                <li className="form-normal ">Điều khoảng sử dụng</li>
                <li className="form-normal ">Chính sách bảo mật</li>
                <li className="form-normal ">Hướng dẫn thanh toán</li>
              </ul>
            </div>

            <div className="xs:hidden">
              <h3 className="text-big font-bold text-gray-200 leading-[21px] mb-3">
                Về chúng tôi
              </h3>
              <ul className="form-normal leading-[25px] text-gray-200">
                <li className="form-normal ">Giới thiệu</li>
                <li className="form-normal ">Tuyển dụng</li>
                <li className="form-normal ">Liên hệ hỗ trợ</li>
                <li className="form-normal ">Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="text-big font-bold text-gray-200 mb-4">
                Kết nối với chúng tôi
              </h3>
              <div className="grid grid-cols-5 justify-between items-center">
                <div className="flex items-center flex-wrap gap-x-7 gap-y-3.5 col-span-4 sm:col-span-5 sm:justify-between xs:col-span-5 xs:justify-between xs:flex-wrap xs:gap-0">
                  <div className="socical_icon cursor-pointer w-[40px] h-[40px] flex items-center justify-center border border-solid border-gray-200 rounded-full hover:border-primary-blue xs:w-[36px] xs:h-[36px]">
                    <i className="icon-mm-facebook text-gray-200 text-[14px]"></i>
                  </div>
                  <div className="socical_icon cursor-pointer w-[40px] h-[40px] flex items-center justify-center border border-solid border-gray-200 rounded-full hover:border-primary-blue xs:w-[36px] xs:h-[36px]">
                    <i className="icon-mm-youtube text-gray-200 text-[14px]"></i>
                  </div>
                  <div className="socical_icon cursor-pointer w-[40px] h-[40px] flex items-center justify-center border border-solid border-gray-200 rounded-full hover:border-primary-blue xs:w-[36px] xs:h-[36px]">
                    <i className="icon-mm-twitter text-gray-200 text-[14px]"></i>
                  </div>
                  <div className="socical_icon cursor-pointer w-[40px] h-[40px] flex items-center justify-center border border-solid border-gray-200 rounded-full hover:border-primary-blue xs:w-[36px] xs:h-[36px]">
                    <i className="icon-mm-instagram text-gray-200 text-[14px]"></i>
                  </div>
                  <div className="socical_icon cursor-pointer w-[40px] h-[40px] flex items-center justify-center border border-solid border-gray-200 rounded-full hover:border-primary-blue xs:w-[36px] xs:h-[36px]">
                    <i className="icon-mm-linkedin text-gray-200 text-[14px]"></i>
                  </div>
                  <div className="socical_icon cursor-pointer w-[40px] h-[40px] flex items-center justify-center border border-solid border-gray-200 rounded-full hover:border-primary-blue xs:w-[36px] xs:h-[36px]">
                    <i className="icon-mm-pinterest text-gray-200 text-[14px]"></i>
                  </div>
                </div>
                <div className="col-span-1"></div>
              </div>
              <div className="xs:flex xs:justify-start xs:items-center mt-4">
                <img
                  src="https://static.chotot.com/storage/default/android.svg"
                  alt="Description of the image"
                  className="w-[10px] h-[10px] "
                />
              </div>
            </div>
            <div className="w-auto ">
              <h3 className="text-big font-bold text-gray-200 mb-3">
                Tải ứng dụng ngay - Mua bán cực nhanh
              </h3>
              <div className="inline-flex flex-row gap-2 xs:w-full">
                <img
                  src="https://static.chotot.com/storage/default/group-qr.webp"
                  alt="Description of the image"
                  className="w-[10px] h-[10px] "
                />

                <div className="flex items-center flex-col gap-2 xs:flex-row">
                  <img
                    src="https://static.chotot.com/storage/default/android.svg"
                    alt="Description of the image"
                    className="w-[10px] h-[10px] "
                  />
                  <img
                    src="https://static.chotot.com/storage/default/android.svg"
                    alt="Description of the image"
                    className="w-[10px] h-[10px] "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#131A22] p-4 overflow-hidden xs:mb-[50px]">
        <div className="flex flex-row justify-center ">
          <span className="text-[15px] text-[#94A3B8] xs:mb-2.5">
            CÔNG TY TNHH MAUMAU
          </span>
        </div>
        <div className="flex flex-col justify-center gap-y-2.5 mt-2 items-center xs:flex-col-reverse">
          <div className="flex flex-row justify-center items-center xs:flex-wrap">
            <span className="leading-[16px] text-[#94A3B8] flex flex-row gap-1 items-center xs:text-[13px] xs:mb-2.5">
              <i className="icon-mm-location text-[#94A3B8]"></i> 1/4C Linh
              Đông, Linh Đông, Tp. Thủ Đức
            </span>
            <span className="leading-[16px] flex flex-row ml-3 mr-3 text-[#94A3B8] gap-1 items-center xs:text-[13px] xs:mb-2.5">
              <i className="icon-mm-phone-1 text-[#94A3B8]"></i> 0862.55.79.66
            </span>
            <span className="leading-[16px] flex flex-row text-[#94A3B8] gap-1 items-center xs:text-[13px] xs:mb-2.5">
              <i className="icon-mm-mail text-[#94A3B8]"></i> info@maumau.vn
            </span>
          </div>

          <span className="leading-[16px] text-[#94A3B8] text-center xs:mb-2.5 xs:text-small">
            MSDN: 0316975789 - Sở KHĐT TP Hồ Chí Minh cấp 14/10/2021
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
