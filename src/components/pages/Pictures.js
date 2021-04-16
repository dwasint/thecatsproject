import ImageSlider from "../ImageSlider";
import { SliderData } from '../SliderData';
import '../ImageSlider.css';
import PictureSection from '../PictureSection';

function Pictures(){
    return (
        <>
           <PictureSection />
           <ImageSlider slides={SliderData} />;
        </>
    );
}

export default Pictures