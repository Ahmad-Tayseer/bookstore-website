import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
export default function FooterCenter() {
  return (
    <div class="footer-center">
      <div>
        <FaMapMarkerAlt className="footerIcon" />
        <p>Amman - Jordan</p>
      </div>

      <div>
        <BsFillTelephoneFill className="footerIcon" />
        <p>+00 962 790112641</p>
      </div>

      <div>
        <FaEnvelope className="footerIcon" />
        <p>
          <a href="mailto:support@company.com">support@BookCom.com</a>
        </p>
      </div>
    </div>
  );
}
