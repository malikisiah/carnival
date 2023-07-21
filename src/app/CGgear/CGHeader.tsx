export default function CGHeader() {
  return (
    <>
      <div className=" flex justify-center join rounded-none pt-4 text-xl font-bold">
        <div className="flex artboard w-[680px] h-[520px] text-center items-center justify-center bg-[#a9a9a9]">
          680x520
        </div>
        <div className="join-vertical">
          <div className="flex artboard w-[210px] h-[400px] text-center items-center justify-center bg-[#bcbcbc]">
            210x400
          </div>
          <div className="flex artboard w-[210px] h-[120px] text-center items-center justify-center bg-[#bcbcbc] border border-white">
            210x120
          </div>
        </div>
      </div>

      <div className="flex rounded-none text-xl font-bold join justify-center pt-8">
        <div className=" flex artboard w-[390px] h-[200px] text-center items-center justify-center bg-[#bcbcbc]">
          390x200
        </div>
        <div className="flex artboard w-[390px] h-[200px] text-center items-center justify-center bg-[#bcbcbc]">
          390x200
        </div>
        <div className="flex artboard w-[390px] h-[200px] text-center items-center justify-center bg-[#bcbcbc]">
          390x200
        </div>
      </div>
    </>
  );
}
