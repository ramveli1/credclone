import HeroSection from '../components/HeroSection'

import Header from '../common/Header'
import ProductShowCase from '../components/ProductShowCase'
import FeelSpecial from '../components/FeelSpecial'
import CredExperience from '../components/common/CredExperience'
import CredSecurity from '../components/CredSecurity'
import BrandLove from '../components/BrandsLove'
import WindowPeak from '../components/WindowPeak'
import MobileScroll from '../components/MobileScroll'
import CredStory from '../components/CredStory'
import AppRating from '../components/AppRating'

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProductShowCase />
      <FeelSpecial />
      <BrandLove />
      <CredExperience />
      <MobileScroll />
      <div className="non-mobile">
        <WindowPeak />
      </div>
      <CredSecurity />
      <CredStory />
      <AppRating />
    </div>
  )
}
export default HomePage
