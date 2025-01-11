'use client';
import '../../framer/styles.css'
import ExperienceSectionFramerComponent from "../../framer/experience-section";
import FooterFramerComponent from "../../framer/footer";
import HeroSectionFramerComponent from "../../framer/hero-section";
import NavigationBarFramerComponent from "../../framer/navigation-bar";
import ServicesSectionFramerComponent from "../../framer/services-section";
import AboutSectionFramerComponent from '../../framer/about-section';

export default function page() {
  return (
    <div>
      <NavigationBarFramerComponent.Responsive
        className='!w-full' // use !important to override framer default size
        style={{ width: '100%' }} // or use style prop, which has higher specificity than the Framer class
        variants={{
          lg: 'Desktop',
          base: 'Phone',
        }} />
      <HeroSectionFramerComponent.Responsive
        className='!w-full' // use !important to override framer default size
        style={{ width: '100%' }} // or use style prop, which has higher specificity than the Framer class
        variants={{
          base: 'Desktop',
          md: 'Tablet',
          sm: 'Phone'
        }} />
      <ExperienceSectionFramerComponent.Responsive
        className='!w-full' // use !important to override framer default size
        style={{ width: '100%' }} // or use style prop, which has higher specificity than the Framer class
        variants={{
          base: 'Desktop',
          md: 'Tablet',
          sm: 'Phone'
        }} />
      <AboutSectionFramerComponent.Responsive
        className='!w-full' // use !important to override framer default size
        style={{ width: '100%' }} // or use style prop, which has higher specificity than the Framer class
        variants={{
          base: 'Desktop',
          md: 'Tablet',
          sm: 'Phone'
        }} />
      <ServicesSectionFramerComponent.Responsive
        className='!w-full' // use !important to override framer default size
        style={{ width: '100%' }} // or use style prop, which has higher specificity than the Framer class
        variants={{
          base: 'Desktop',
          md: 'Tablet',
          sm: 'Phone'
        }} />
      <FooterFramerComponent.Responsive
        className='!w-full' // use !important to override framer default size
        style={{ width: '100%' }} // or use style prop, which has higher specificity than the Framer class
        variants={{
          base: 'Desktop',
          sm: 'Phone'
        }} />
    </div>

  )
}