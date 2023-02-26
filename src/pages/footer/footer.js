import "./footer.css";
import FooterCenter from "../../components/footer/footerCenter";
import FooterLeft from "../../components/footer/footerLeft";
import FooterRight from "../../components/footer/footerRight";
import TurnUpButtton from "../../components/turnUpButton/turnUpButton";

export default function Footer() {
  return (
    <div>
      <footer class="footer-distributed">
        <FooterLeft />
        <FooterCenter />
        <FooterRight />
        <TurnUpButtton />
      </footer>
    </div>
  );
}
