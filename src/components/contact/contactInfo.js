import { TfiHome } from "react-icons/tfi";
import { MdPhoneIphone } from "react-icons/md";
import { BsEnvelope } from "react-icons/bs";

export default function ContactInfo() {
  return (
    <div class="footer-center">
      <div>
        <TfiHome className="footerIcon" />
        <p>Amman - Jordan</p>
      </div>

      <div>
        <MdPhoneIphone className="footerIcon" />
        <p>+00 962 790112641</p>
      </div>

      <div>
        <BsEnvelope className="footerIcon" />
        <p>
          <a href="mailto:support@company.com">support@company.com</a>
        </p>
      </div>
    </div>
  );
}
