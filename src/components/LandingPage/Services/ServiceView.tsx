import Image from 'next/image'

interface ServiceViewProps {
    title: string,
    text: string,
    image: string,
}

const ServiceView = ( {title, text, image}: ServiceViewProps ) => {
    return (
        <div className="flex flex-col items-center justify-center text-center text-black bg-white p-4 rounded-md shadow-lg font-lufga">
            <div className="mb-2 font-lufgaBold text-black text-3xl">
                <h1> {title} </h1>
            </div>
            <div className="mb-4">
                <Image src={image} 
                    width={200}
                    height={200}
                    alt="" 
                    className="object-contain h-48 w-full" />
            </div>

            <div className='font-lufga'>
                <p> {text} </p>
            </div>
        </div>
    )
}

export default ServiceView