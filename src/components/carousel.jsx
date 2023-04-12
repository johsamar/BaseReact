import { useEffect, useState } from "react";
import { getProductos } from "../services/productos";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const CarouselComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProductos().then((response) => {
      setData(response);
    });
  }, []);

  const items = [
    {
      src: "https://picsum.photos/id/123/1200/400",
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: "https://picsum.photos/id/456/1200/400",
      altText: "Slide 2",
      caption: "Slide 2",
      key: 2,
    },
    {
      src: "https://picsum.photos/id/678/1200/400",
      altText: "Slide 3",
      caption: "Slide 3",
      key: 3,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const mapProducts = () => {
    return data.map((producto) => {
      return {
        src: producto.imagen,
        altText: producto.titulo,
        caption: producto.descripcion,
        key: producto.id,
      }
    });
  }

  const slides = mapProducts().map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
      >
        <div className="d-flex flex-column align-items-center m-3 text-light">
          <img className="img-fluid" src={item.src} alt={item.altText} />
        </div>
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}

      >
        <CarouselIndicators
          items={mapProducts()}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </>
  );
};

export default CarouselComponent;
