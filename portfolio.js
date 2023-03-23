function toggleMenu() {
  // change class toggle to toggle active
  const menuToggle = document.getElementById("toggle");
  const sidebarToggle = document.getElementById("sidebar");
  menuToggle.classList.toggle("active");
  sidebarToggle.classList.toggle("active");
}
