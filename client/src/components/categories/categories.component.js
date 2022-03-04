import Slider from "../effects/Slider";
import GalleryUI from "../galleryUI/galleryUI";
import HUIT from "../h3UI/H3UIT";

export default function Categories() {
    return (
        <>
            <Slider isLoaded={true} timeOut={1000} sliderTime={700} >
                <p><HUIT>collections</HUIT></p>
                <GalleryUI url="/category/getAllCategories"/>
            </Slider>
        </>
    );
}