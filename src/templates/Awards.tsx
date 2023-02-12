import { Section } from '../layout/Section';
import { CCarousel,CCarouselItem, CImage,CContainer,CRow} from '@coreui/react';



const Awards = () => {
  const images = [
    {path:"assets/images/50K.jpg",
    altText:'50 K challenge',
    description:'50 K challenge'},

    {path:"assets/images//50K_2.jpg",
    altText:'50 K challenge',
    description:'50 K challenge'},

    



  ];
  return(
  <Section title="Awards" id="awards">
    <CCarousel controls indicators dark transition='crossfade'>


    {images.map(image=>(
          <CCarouselItem>
          <CContainer  >
          <CRow className='flex justify-center'>
            
            <CImage className="w-full sm:w-1/2 " src={image.path} alt={image.altText} />
            
          </CRow>
          <CRow className='flex justify-center'>
            
          <h3 className="text-2xl text-center text-gray-900 font-semibold redhat sm:w-1/2 mt-8">{image.description}
              </h3>
          </CRow>
        </CContainer>
        </CCarouselItem>
    ))}



</CCarousel>
    
  </Section>);}

  export {Awards}
