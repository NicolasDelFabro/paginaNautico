import Landing from "@/views/Landing";

export default function Home() {
  return (
    <>
    <div className="min-h-screen w-screen flex flex-col">
      <div className="flex-1 flex justify-center items-center bg-gradient-to-r from-black to-gray-800">
        <Landing />
      </div>
      </div>
  </>
  );
}
