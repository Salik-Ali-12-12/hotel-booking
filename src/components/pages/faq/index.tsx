import BreadCrumb from "@/components/common/BreadCrumb"
import HeaderThree from "@/layouts/headers/HeaderOne"
import FaqArea from "./FaqArea"
import Cta from "../pricing/Cta"
import FooterThree from "@/layouts/footers/FooterThree"

const Faq = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <BreadCrumb title="Frequently Asked Question" sub_title="Faq’s" />
            <FaqArea />
            <Cta />
         </main>
         <FooterThree />
      </>
   )
}

export default Faq
