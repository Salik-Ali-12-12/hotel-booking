import FeatureTwo from "@/components/features/feature-two";
import Wrapper from "@/layouts/Wrapper";
import FooterThree from "@/layouts/footers/FooterThree"

export const metadata = {
  title: "Feature Two Tourex - Tour & Travel Booking React Next js Template",
};
const page = () => {
  return (
    <Wrapper>
      <FeatureTwo />
      <FooterThree />
    </Wrapper>
  )
}

export default page