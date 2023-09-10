import Image from "next/image";

  export default function Banner() { 
    return (
        <div>
            <div className="max-w-[73.5rem] h-auto w-full m-auto flex justify-end items-center py-4">
                <Image src="https://via.placeholder.com/270x338"
                    alt=''
                    width={270}
                    height={338} 
                />
            </div>

            <div className="flex justify-center items-center space-x-8 py-4">
                <Image src="https://via.placeholder.com/570x200"
                    alt=''
                    width={570}
                    height={200} 
                />

                <Image src="https://via.placeholder.com/570x200"
                    alt=''
                    width={570}
                    height={200} 
                />
            </div>
        </div>
    );
}