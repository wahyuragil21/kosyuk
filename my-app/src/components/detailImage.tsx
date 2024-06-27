'use client'
import Image from "next/image";
import React from "react";

export default function DetailImage( {imageBuilding}: {imageBuilding : any} ){
    const [currentImage, setCurrentImage] = React.useState(imageBuilding?.images[0]);
    const handleImageClick = (image: string) => {
        setCurrentImage(image);
    };
    return (
        <div className="md:flex px-4">
        <div className="flex-mx-2">
            {imageBuilding.images.map((image: any, index: any) => (
                <div key={index} className=" px-2">
                    <Image
                        className={`w-15 h-20 rounded-md object-cover cursor-pointer border-2 ${currentImage === image
                            ? "border-gray-300 dark:border-gray-600"
                            : "border-transparent"
                            }`}
                        src={image}
                        width={100}
                        height={100}
                        alt={`Product Image ${index + 1}`}
                        onClick={() => handleImageClick(image)}
                    />
                </div>
            ))}
        </div>
        <div className="h-[480px] w-[500px] rounded-lg dark:border-gray-600 bg-gray-300 dark:bg-gray-700 mb-4">
            <Image
                className="w-screen h-full rounded-md object-cover cursor-pointer"
                src={currentImage}
                alt="Product Image"
                width={1000}
                height={1000}
                onClick={() => handleImageClick(imageBuilding.images[0])}
            />
        </div>
    </div>
    )
}