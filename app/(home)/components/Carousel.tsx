"use client";
import { Button } from "@/components/ui/button";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const images = [
  { src: "/image1.png" },
  { src: "/image2.png" },
  { src: "/image3.png" }
];

interface CarouslHomeProps {
  onLoad: () => void;
}

const CarouslHome: React.FC<CarouslHomeProps> = ({ onLoad }) => {
  useEffect(() => {
    // Simulate loading time before calling onLoad
    const timer = setTimeout(() => {
      onLoad();
    }, 100); // Adjust the delay as necessary

    return () => clearTimeout(timer);
  }, [onLoad]);
const router=useRouter()
  return (
    <div className="h-44   md:h-[400px] xl:h-[600px] 2xl:h-[700px]">
      <Carousel
        slideInterval={2000}
        pauseOnHover
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <div className="w-full h-full" key={index}>
            <Image
              src={image.src}
              alt={`Image ${index + 1}`}
              width={100}
              height={100}
              layout="responsive"
              className="object-cover z-30"
            />
            <div className="absolute inset-0 flex justify-center bg-black/25 opacity-0 hover:opacity-100 hover:transition hover:ease-in hover:duration-300 items-center h-full w-full">
              <Button
              onClick={()=>router.push("/donate")}
                size={"lg"}
                className="bg-warmGreen opacity-100 bottom-0 flex"
              >
                Donate Now!
              </Button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouslHome;
