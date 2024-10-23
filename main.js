document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.getElementById("mobileMenu");
  // Đảm bảo menu được ẩn đi khi tải trang
  if (mobileMenu.classList.contains("open")) {
    mobileMenu.classList.remove("open");
  }
  mobileMenu.style.display = "none"; // Đặt hiển thị mặc định là ẩn
});

// Toggle main menu khi nhấp vào biểu tượng hamburger
function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const iconBar = document.querySelector(".header__hamburger");
  const iconClose = document.querySelector(".close-icon");
  if (mobileMenu.style.display === "none" || mobileMenu.style.display === "") {
    mobileMenu.style.display = "flex"; // Mở menu
    iconBar.style.display = "none";
    iconClose.style.display = "block  ";
  } else {
    mobileMenu.style.display = "none"; // Đóng menu
    iconClose.style.display = "none";
  }
}
function toggleSubMenu(subMenuId) {
  const subMenu = document.getElementById(subMenuId);
  if (subMenu.style.display === "none" || subMenu.style.display === "") {
    subMenu.style.display = "flex"; // Hiển thị submenu
  } else {
    subMenu.style.display = "none"; // Ẩn submenu
  }
}
document.addEventListener("DOMContentLoaded", function () {
  // Chỉ khởi tạo slider khi màn hình nhỏ hơn 768px
  if (window.innerWidth <= 768) {
    tns({
      container: ".my-slider",
      items: 1, // Hiển thị 1 mục trên mobile
      slideBy: "page",
      autoplay: true,
      autoplayTimeout: 3000,
      controls: false,
      nav: true, // Hiển thị nút điều hướng
      loop: true,
      mouseDrag: true, // Kéo bằng chuột
    });
  }
});
