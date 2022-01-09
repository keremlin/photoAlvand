import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect,useState } from 'react';
import http from './../../http-common';
import authHeader from "./../../services/auth-header";

export default function CarouselUI(props) {
    
    
    return (
        <>
            <Carousel>
                {
                    (props.isLoaded==true?props.config.map((item, index) =>
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
                    ):<></>)}
            </Carousel>
        </>
    );
}