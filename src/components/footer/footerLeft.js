export default function FooterLeft() {
  return (
    <div className="footer-left">
      <a href="/">
        <h3>
          Book<span>Com</span>
        </h3>
      </a>
      <p className="footer-links">
        <a href="/" className="link-1">
          Home
        </a>
        <a href="/about">About</a>
        <a href="/categories">Categories</a>
        <a href="/contact">Contact</a>
      </p>
      <p className="footer-company-name">
        Copyright ©2023 All rights reserved | <span>Book.Com</span>
      </p>
    </div>
  );
}
