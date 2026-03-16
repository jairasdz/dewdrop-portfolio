import PerformanceCard from "../components/PerformanceCard";
import { performances } from "@/lib/performances"
import type { Metadata } from "next";

export const metadata: Metadata = { // sets the title in browser tab
    title: "Performances",
  };

const upcomingShows = performances.filter(p => p.category === "upcoming");
const pastShows = performances.filter(p => p.category === "past");

export default function Performances() {
    return (
        <main className="p-8">
            <h1 className="flex flex-col items-center font-bold text-center text-xl uppercase tracking-[0.15em]">
                This is the performances page! Wahooo
            </h1>
            <section className="mt-4">
                <h2 className="flex flex-col items-center mb-4 font-bold text-center text-lg uppercase tracking-[0.15em] underline">
                    Upcoming Shows
                </h2>
                <h3 className="text-center text-sm font-bold uppercase tracking-[0.15em] mb-4">
                    (NOTE: All upcoming shows are TBD due to venue issues)
                </h3>  
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* {upcoming performance cards go here } */}
                    {upcomingShows.map((perf, i) => (
                        <PerformanceCard 
                            key={i} 
                            title={perf.title} 
                            date={perf.date} 
                            image={perf.poster}/>
                    ))}

                </div>               
            </section>
            <section className="mt-12">
                <h2 className="flex flex-col items-center mb-4 font-bold text-center text-lg uppercase tracking-[0.15em] underline hover:text-slate-500">
                        Past Shows
                </h2> 
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* {past performance cards go here } */}
                    {pastShows.map((perf, i) => (
                        <PerformanceCard
                            key={i}
                            title={perf.title}
                            date={perf.date}
                            image={perf.poster}
                        />
                    ))}
                </div>                
            </section>
        </main>
    );
}