import AboutBanner from "@/components/AboutBanner/AboutBanner";
import AboutFour from "@/components/AboutFour/AboutFour";
import AboutPage from "@/components/AboutPage/AboutPage";
import AboutThree from "@/components/AboutThree/AboutThree";
import AboutTwo from "@/components/AboutTwo/AboutTwo";
import Wrapper from "@/layout/wrapper/Wrapper";

export default function AboutUs() {
  return (
    <Wrapper isInner>
     <AboutBanner/>
     <AboutTwo/>
     <AboutThree/>
     <AboutFour/>
    </Wrapper>
  );
}
