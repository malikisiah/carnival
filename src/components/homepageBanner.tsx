export default function HomepageBanner() {
    return (
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
            <div className="mb-12 -mt-12">
                <ul className="flex items-center">
                    <li className="flex-1">
                        <a className="text-center block border border-orange-500  py-8 px-4 bg-[#F7450F] hover:border-white" href="#">
                            <div>
                                <p className="font-semibold text-[0.7rem] text-white">RETURN POLICY </p>
                                <p className="text-[0.6rem] text-white">* CONDITION APPLY</p>
                            </div>
                        </a>
                    </li>

                    <li className="flex-1">
                        <a className="text-center block border border-orange-500 py-8 px-4 bg-[#F7450F] hover:border-white" href="#">
                            <p className="font-semibold text-[0.7rem] text-white">FREE SHIPPING</p>
                            <p className="text-[0.6rem] text-white">ON ORDER OVER $200</p>
                        </a>
                    </li>
                    <li className="flex-1">
                        <a className="text-center block border border-orange-500 py-8 px-4 bg-[#F7450F] hover:border-white" href="#">
                            <p className="font-semibold text-[0.7rem] text-white">SIGNUP ACCOUNT</p>
                            <p className="text-[0.6rem] text-white">SAVE YOUR MONEY WITH US</p>
                        </a>
                    </li>
                    <li className="flex-1">
                        <a className="text-center block border border-orange-500 py-8 px-4 bg-[#F7450F] hover:border-white" href="#">
                            <p className="font-semibold text-[0.7rem] text-white">POSITIVE RESPONSE</p>
                            <p className="text-[0.6rem] text-white">ALWAYS HAPPY FEEDBACK</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="-m-1 flex flex-wrap md:-m-2">

                <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                        <a className="" href="">
                            <img
                                alt="gallery"
                                className="block h-full w-full object-cover object-center"
                                src="/homepageBannerImg1.jpg" />
                        </a>
                    </div>
                </div>
                <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                        <a className="" href="">
                            <img
                                alt="gallery"
                                className="block h-full w-full  object-cover object-center"
                                src="/homepageBannerImg2.jpg" />
                        </a>
                    </div>
                </div>
                <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                        <a className="" href="">
                            <img
                                alt="gallery"
                                className="block h-full w-full  object-cover object-center"
                                src="/homepageBannerImg3.jpg" />
                        </a>
                    </div>
                </div>
                <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                        <a className="" href="">
                            <img
                                alt="gallery"
                                className="block h-full w-full object-cover object-center"
                                src="/homepageBannerImg4.jpg" />
                        </a>
                    </div>
                </div>
                <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                        <a className="" href="">
                            <img
                                alt="gallery"
                                className="block h-full w-full object-cover object-center"
                                src="/homepageBannerImg5.jpg" />
                        </a>
                    </div>
                </div>
                <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                        <a className="" href="">
                            <img
                                alt="gallery"
                                className="block h-full w-full object-cover object-center"
                                src="/homepageBannerImg6.jpg" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}