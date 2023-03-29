import { useState } from "react";
import { ImageLink, ImageLinkProps } from "../../molecules/imageLink/ImageLink";
import { Button } from "../../atoms/button/Button";

export interface CarouselProps {
    carouselImages: ImageLinkProps[];
}

export const Carousel: React.FC<CarouselProps> = ({ carouselImages }) => {
    const [showImage, setShowImage] = useState(0);

    return (
        <div className="relative" data-carousel="static">
            <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                {carouselImages.map((imageLink, index) => {
                    const { href, ariaLabel, src, alt, rel } = imageLink;
                    return (
                        <div
                            className={`${
                                showImage !== index ? "hidden" : ""
                            } duration-700 ease-in-out`}
                            data-carousel-item
                        >
                            <ImageLink
                                href={href}
                                ariaLabel={ariaLabel}
                                src={src}
                                alt={alt}
                                rel={rel}
                                imageClassName="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                            />
                        </div>
                    );
                })}
            </div>
            <Button
                hasIconOnly={true}
                renderIcon="chevron-left"
                align="start"
                onClick={() =>
                    setShowImage((prevState) => {
                        if (prevState === 0) return carouselImages.length - 1;
                        else return prevState - 1;
                    })
                }
                btnClassName="bg-gray-200 hover:bg-gray-400 flex absolute top-0 left-0 justify-center items-center px-4 h-full cursor-pointer group"
                iconClassName="h-12 w-12"
            />
            <Button
                hasIconOnly={true}
                renderIcon="chevron-right"
                align="start"
                onClick={() =>
                    setShowImage((prevState) => {
                        if (prevState === carouselImages.length - 1) return 0;
                        else return prevState + 1;
                    })
                }
                btnClassName="bg-gray-200 hover:bg-gray-400 flex absolute top-0 right-0 justify-center items-center px-4 h-full cursor-pointer group"
                iconClassName="h-12 w-12"
            />
        </div>
    );
};
