import { performances } from "@/lib/performances"
import type { Metadata } from "next";


//ensures the tab name has the performance name
export async function generateMetadata({ params }: { params: Promise<{ slug: string }>}): Promise<Metadata> {
    const { slug } = await params;

    const performance = performances.find((p) => p.slug === slug);

    return {
        title: performance?.title
    };
}

export default async function PerformanceDetail({ params } : { params: Promise<{ slug: string }>}) {

    const { slug } = await params;

    const performance = performances.find(
        (p) => p.slug === slug
    );

    //have two different outcomes
    //if upcoming show -> maybe don't make clickable
    //if past show

    if (!performance) {
        return <div>Performance not found</div>;
    }

    return (
        <main className="p-8 text-center">
        <h1 className="text-2xl font-bold">{performance.title}</h1>
        <p className="mt-2 text-gray-500">{performance.date}</p>
  
        <img
          src={performance.poster}
          alt={performance.title}
          className="mt-6 rounded-xl w-full max-w-2xl"
        />
      </main>
    );
}