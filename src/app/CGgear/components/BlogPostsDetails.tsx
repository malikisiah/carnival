import Image from "next/image";
type BlogPostsDetailsProps = {
    date: string;
    name: string;
    image: string;
};

const BlogPostsDetails = ({ date, name, image }: BlogPostsDetailsProps) => {
    return (
        <div className="flex 0 1 auto border-2 border-solid border-gray-100">
            <div className="w-1/2 ">
                <a href="#">
                    <Image src={image}
                        alt=''
                        width={292}
                        height={292}
                    />
                </a>
            </div>
            <div className="w-1/2 flex flex-col justify-evenly px-8">
                <div className="h-1/8">
                    <a href="#" className="px-[1rem] bg-[#F7450F] text-[15px] text-center p-1 text-[#ffffff]">
                        {date}
                    </a>
                </div>
                <div className="h-1/2">
                    <a href="#" className="uppercase text-[1.9rem] hover:text-red-500 leading-none">
                        {name}
                    </a>
                </div>
                <div className="h-1/7">
                    <svg viewBox="0 0 50 1" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" x2="6" stroke="gray" />
                    </svg>
                    <a href="#"><p className="uppercase text-[0.9rem] text-gray-500 hover:text-red-500">Read More</p></a>
                </div>
            </div>
        </div>
    );
};

export default BlogPostsDetails;