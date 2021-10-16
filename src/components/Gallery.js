import React, {useState, useCallback} from "react";
import PhotoGallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";

function Gallery(props) {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const photos = [
        {
            src: 'https://static.co-duck.com/wedding/wedding12.jpg',
            width: 3,
            height: 4
        },
        {
            src: 'https://static.co-duck.com/wedding/wedding16.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://static.co-duck.com/wedding/wedding13.jpg',
            width: 3,
            height: 4
        },
        {
            src: 'https://static.co-duck.com/wedding/wedding7.jpg',
            width: 3,
            height: 4
        },
        {
            src: 'https://static.co-duck.com/wedding/wedding2.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://static.co-duck.com/wedding/wedding15.jpg',
            width: 3,
            height: 4
        },
        {
            src: 'https://static.co-duck.com/wedding/wedding14.jpg',
            width: 3,
            height: 4
        },
        {
            src: 'https://static.co-duck.com/wedding/wedding8.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://static.co-duck.com/wedding/wedding3.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://static.co-duck.com/wedding/wedding5.jpg',
            width: 3,
            height: 4
        },
        {
            src: 'https://static.co-duck.com/wedding/wedding4.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://static.co-duck.com/wedding/wedding6.jpg',
            width: 3,
            height: 4
        },
        {
            src: 'https://static.co-duck.com/wedding/wedding1.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://static.co-duck.com/wedding/wedding10.jpg',
            width: 3,
            height: 4
        },
        {
            src: 'https://static.co-duck.com/wedding/wedding9.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://static.co-duck.com/wedding/wedding11.jpg',
            width: 4,
            height: 3
        }
    ];

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    const columnsCount = 3;

    return (
        <div className='section-gallery'>
            <PhotoGallery photos={photos} columns={columnsCount} direction='column' onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map((x) => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );
}

export default Gallery;
