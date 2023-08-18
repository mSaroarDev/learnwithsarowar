import CourseCard from "./CourseCard";

export default function Courses() {
  const courseCardArray = [
    {
      id: 1,
      name: "ওয়েব ডিজাইন",
      courseStatus: "কোর্স চলছে",
      studentsCount: "১৫০",
    },
    {
      id: 2,
      name: "ফ্রন্টএন্ড ডেভেলপমেন্ট",
      courseStatus: "কোর্স চলছে",
      studentsCount: "৯৫",
    },
    {
      id: 3,
      name: "ওয়ার্ডপ্রেস",
      courseStatus: "কোর্স চলছে",
      studentsCount: "২৫০",
    },
    {
      id: 4,
      name: "ই-কমার্স",
      courseStatus: "কোর্স চলছে",
      studentsCount: "২৮০",
    },
  ];

  return (
    <section className="bg-gray-100 py-24">
      <main className="content">
        <h1 className="text-2xl font-bold font-fontBn mb-6">কোর্সসমুহ</h1>
        <div className="flex justify-between items-center">
          {courseCardArray.map((courseCard, index) => {
            return <CourseCard key={index} courseCard={courseCard} />;
          })}
        </div>
      </main>
    </section>
  );
}
