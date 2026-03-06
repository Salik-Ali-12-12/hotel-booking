import FeatureArea from "./FeatureArea"
import BreadCrumb from "./BreadCrumb"
import HeaderOne from "@/layouts/headers/HeaderOne"
import FooterSix from "@/layouts/footers/FooterThree"
import BannerForm from "./BannerForm"
const FeatureOne = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb />
            <BannerForm />
            <FeatureArea />
         </main>
         <FooterSix />
      </>
   )
}
export default FeatureOne
