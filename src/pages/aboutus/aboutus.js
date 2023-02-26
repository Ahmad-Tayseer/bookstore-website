import AboutSection from "../../components/about/aboutSection";
import Cover from "../../components/cover/cover";
import "./aboutus.css";
import image from "./asset14.jpg";

export default function About() {
  const page = "About";
  const ourGoal =
    "We believe in the power of knowledge. So our goal is to help those who supply it and share it with those who crave it. Which is why every action we take, and every book purchase you make helps fund it. We are driven to provide customers with a highly-valued experience, and one that allows them to align their actions with their values. We want to be their favorite marketplace and their favorite partner, so we incorporate their input into everything we do. We strive to do the right thing at all times, with all people and all issues. We are committed to the cause of literacy. Every person should have the chance to achieve their potential and participate fully in society. We seek out talented people who work hard and invest in them. We respect each individual, reward achievement, and celebrate team success. We look for new ideas and bold moves while we embrace and create change. We’re more than just a business. We equally consider our shareholders, our customers, our employees, our community, our planet, and the lives changed by our common cause. Through our business we strive to enable people to make sustainable positive changes in this world. Thanks to you, we’re well on our way.";
  const ourStory =
    "We exist to keep real conversations between book lovers alive. We exist to nourish and build a community based on books. We are a neighborhood bookstore, and also an international presence. Our visitors come from Minneapolis-St. Paul, from every U.S. reservation and Canadian reserve, and from all over the world. We are different from all other bookstores on earth! We are a locus for Indigirati—literate Indigenous people who have survived over half a millennium on this continent. We sponsor readings by Native and non-Native writers, journalists, historians. We are also a cozy little destination—a neighborhood bookstore. Next door to the Kenwood restaurant. Just down the block from Bockey Gallery and ARTrageous Adventures. Around the corner from Framestyles and Kenwood Pet Clinic. Across the street from Kenwood Elementary. A stone's throw from Lake of the Isles. We are a teaching bookstore. Ask us about our books and special displays. Our inventory includes quillwork, traditional basketry, silverwork, unusual dreamcatchers, and Indigenous paintings. We deal directly with local, regional, and southwestern artisans, and can also special order whatever interests you. We stock traditional hand made objects available only seasonally, or as the artist completes them.";
  return (
    <div className="aboutDiv">
      <Cover label={page} img={image} />
      <div className="aboutContent">
        <AboutSection title={"Our Story"} content={ourStory} />
        <AboutSection title={"Our Goal"} content={ourGoal} />
      </div>
    </div>
  );
}
