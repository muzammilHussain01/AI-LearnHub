import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const CarouselsDoc = () => {
    return (
        <Container className="py-4">
            {/* Heading */}
            <h4 className="text-primary fw-semibold mb-3">Carousels</h4>
            <p className="text-secondary mb-4">
                A slideshow component for cycling through elements—images or slides of text—like a carousel.
                Carousels don’t automatically normalize slide dimensions. As such, you may need to use
                additional utilities or custom styles to appropriately size content.
            </p>

            {/* Carousel */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x300.png?text=First+Slide"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x300.png?text=Second+Slide"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/800x300.png?text=Third+Slide"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default CarouselsDoc;
