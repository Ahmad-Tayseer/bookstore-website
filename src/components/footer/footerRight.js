import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function FooterRight() {
  return (
    <div class="footer-right">
      <p class="footer-company-about">
        <span>About the company</span>
        We exist to keep real conversations between book lovers alive. We exist
        to nourish and build a community based on books. We are a neighborhood
        bookstore, and also an international presence.
      </p>

      <div class="footer-icons">
        <a href="https://www.linkedin.com/in/ahmad-abumailesh/">
          <BsLinkedin className="footerIcon" />
        </a>
        <a href="https://github.com/Ahmad-Tayseer">
          <BsGithub className="footerIcon" />
        </a>
      </div>
    </div>
  );
}
