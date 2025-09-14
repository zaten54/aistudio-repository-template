export function createHeader() {
  return `
    <header class="header">
      <nav class="nav">
        <div class="nav-brand">
          <img src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop" alt="Logo" class="logo">
          <span class="brand-text">AI Studio</span>
        </div>
        <ul class="nav-links">
          <li><a href="#home" class="nav-link">Ana Sayfa</a></li>
          <li><a href="#features" class="nav-link">Özellikler</a></li>
          <li><a href="#about" class="nav-link">Hakkımızda</a></li>
          <li><a href="#contact" class="nav-link">İletişim</a></li>
        </ul>
        <button class="mobile-menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="mobile-menu">
          <a href="#home" class="mobile-link">Ana Sayfa</a>
          <a href="#features" class="mobile-link">Özellikler</a>
          <a href="#about" class="mobile-link">Hakkımızda</a>
          <a href="#contact" class="mobile-link">İletişim</a>
        </div>
      </nav>
    </header>
  `
}