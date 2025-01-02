import Link from "next/link";

const Page = () => {
  return (
    <div className="flex justify-center items-center gap-5 mt-[400px]">
      <Link href={"/formatTime"}>
        <button className="bg-red-400 w-[180px] h-[40px] rounded-xl text-[23px]">
          FormatTime
        </button>
      </Link>
      <Link href="/tags">
        <button className="bg-amber-400 w-[100px] h-[40px] rounded-xl text-[23px]">
          Tags
        </button>
      </Link>
      <Link href={"/timer"}>
        <button className="bg-lime-400 w-[100px] h-[40px] rounded-xl text-[23px]">
          Timer
        </button>
      </Link>
      <Link href={"/gifSearch"}>
        <button className="bg-green-500 w-[130px] h-[40px] rounded-xl text-[23px]">
          GifSearch
        </button>
      </Link>
    </div>
  );
};
export default Page;
