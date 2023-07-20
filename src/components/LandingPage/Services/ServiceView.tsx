import Image from 'next/image'

interface ServiceViewProps {
    title: string,
    text: string,
    image: string,
    imageWidth?: string,
    imageHeight?: string,
    imageSmall? : string
    imageSmallWidth?: number
    imageSmallHeight?: number
}

const ServiceView = ( {title, text, image, imageSmall, imageSmallWidth, imageSmallHeight}: ServiceViewProps ) => {
    return (
        <div className="flex items-center justify-center gap-[15vw] text-center text-black p-4 mt-20 rounded-md font-lufga">
            <div className="w-1/2 relative">
                <Image src={image} 
                    width={400}
                    height={400}
                    alt="" 
                    className="object-contain h-full w-full shadow-xl"/>

                {imageSmall && (
                    <Image src={imageSmall} 
                        width={imageSmallWidth || 150}
                        height={imageSmallHeight || 150}
                        alt="" 
                        className="object-contain h-36 w-36 absolute top-0 right-0 -mt-12 -mr-12 shadow-2xl" />
                )}
            </div>
            {/* text div */}
            <div className="w-1/2 flex flex-col justify-start ">
                <div className="mb-2 font-lufgaBold text-black text-5xl text-left">
                    <h1> {title} </h1>
                </div>

                <div className='font-lufga mt-5 text-left text-lg'>
                    <p> {text} </p>
                </div>
            </div>
        </div>
    )
}

export default ServiceView