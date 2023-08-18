export default function HeroText() {
  return (
    <div className="flex h-screen w-full items-center justify-start text-white">
      <div className="font-fontBn">
        <p>মাতৃভাষায় প্রোগ্রামিং শিখুন</p>
        <h1 className="text-5xl font-bold mt-4">লার্ন উইথ সারোয়ার</h1>
        <p className="mb-5">এর সাথে</p>
        <p className="my-3">
          সম্পুর্ন বাংলায় শিখুন HTML, CSS, JavaScript, Bootstrap, Tailwind CSS,
          React JS & Next JS. তাও আবার সম্পুর্ণ ফ্রিতে।
        </p>
        <button className="btn btn-ghost bg-purple-600 p-3 rounded-md text-white mr-3 hover:text-purple-600">
          হায়ার করুন
        </button>
        <button className="btn btn-ghost bg-purple-600 p-3 rounded-md text-white hover:text-purple-600">
          শেখা শুরু করুন
        </button>
      </div>
    </div>
  );
}
