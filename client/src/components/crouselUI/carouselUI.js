import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function CarouselUI(props) {
    return (
        <>
            <Carousel>
                {
                    (props.isLoaded===true && props.listOfPaths[0]!==null ? props.config.map((item, index) =>
                        <Carousel.Item key={index*7}>
                            <img
                                className="d-block vh-55 tales"
                                src={props.listOfPaths[index].filePath}
                                alt={"First slide"}
                            />
                            <Carousel.Caption>
                                <h3>{item.bigText}</h3>
                                <p>{item.smallText}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ):<><CircularProgress color='secondary'/></>)}
            </Carousel>
        </>
    );
}