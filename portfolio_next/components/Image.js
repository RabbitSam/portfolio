import NextImage from "next/image";

export default function Image({ src, className, alt }) {
    return (
        <div className={`${className} relative`}>
            <NextImage
                className="rounded-md shadow-image"
                src={src}
                alt={alt}
                fill
                sizes="100vw"
            />
        </div>
    );
}