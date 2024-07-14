import HeroSection from "@/components/hero-section";
import HeroSectionInfo from "@/components/hero-section-info";
import HomeAvail from "@/components/home-avail";
import HomeSectionDownloadPage from "@/components/home-section-download";
import StoreLocator from "@/components/store-locator";

export default function Homepage() {
    return (
        <div>
        <HeroSection />
         <HeroSectionInfo />
         <HomeAvail />
         <HomeSectionDownloadPage />
         {/* <StoreLocator /> */}
        </div>

)}