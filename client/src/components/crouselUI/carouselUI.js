import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import slide13 from './../../img/13.jpg';
import slide14 from './../../img/babataher.jpg';
import slide15 from './../../img/sofal2.jpg';

export default function CarouselUI() {
    return (
        <>
            <Carousel>
                <Carousel.Item >
                    <img
                        className="d-block vh-55 tales"
                        src={slide14}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>بهترین های پرسپولیس</h3>
                        <p>منتخبی از بهترین عکسهای بازی های تیم پرسپولیس</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block vh-55"
                        src={slide15}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>اماکن تاریخی</h3>
                        <p>پوشش خبری بازی های تیم ملی </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block vh-55"
                        src={slide13}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>هواداران</h3>
                        <p>عکسهای جنجالی از هوارداران ورزشهای مختلف</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}