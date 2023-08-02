import Image from "next/image";

type CategoriesProps = {
    subHeading: string;
    image: string;
};

export default function Categories(props: CategoriesProps) {
    return (
        <div className="w-full grid grid-rows-3 grid-flow-col border-2 border-solid border-gray-100 bg-white">

            <div className="row-span-3 my-2 pl-6 pt-3">
                <ul className="absolute text-[0.9rem] text-gray-500 marker:text-gray-500 list-disc list-inside">
                    <a href="#"><li className="pb-1 border-b-2 border-gray-300 hover:text-red-500">Dresses</li></a>
                    <a href="#"><li className="pt-1 pb-1 border-b-2 border-gray-300 hover:text-red-500">Blouses & Shirts</li></a>
                    <a href="#"><li className="pt-1 pb-1 border-b-2 border-gray-300 hover:text-red-500">Swimwear</li></a>
                    <a href="#"><li className="pt-1 pb-1 border-b-2 border-gray-300 hover:text-red-500">Nail Art & Salon</li></a>
                    <a href="#"><li className="pt-1 pb-1 border-b-2 border-gray-300 hover:text-red-500">Skin Care</li></a>
                    <a href="#"><li className="pt-1 pb-1 border-b-2 border-gray-300 hover:text-red-500">Beauty Equipment</li></a>
                    <a href="#"><li className="pt-1 pb-1 border-b-2 border-gray-300 hover:text-red-500">Tattoo & Body Art</li></a>

                    <div className="relative pt-7">
                        <svg viewBox="0 0 40 1" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" x2="6" stroke="gray" />
                        </svg>
                        <a href="#"><p className="uppercase text-[0.9rem] text-gray-500 hover:text-red-500">View all</p></a>
                    </div>
                </ul>
            </div>

            <div className="col-span-2 my-1 h-20 text-right pr-4">
                <div className="text-[1.5rem] text-gray-400"><span>categories</span></div>
                <div className="uppercase font-bold text-[1.9rem] text-[#F7450F]">{props.subHeading}</div>
            </div>

            <div className="row-span-2 col-span-2 -mt-6 pl-28">
                <Image src={props.image}
                    alt=''
                    width={238}
                    height={239}
                />
            </div>
        </div>
    );
}