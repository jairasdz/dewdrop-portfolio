import PerformanceCard from "../components/PerformanceCard";
import type { Metadata } from "next";

export const metadata: Metadata = { // sets the title in browser tab
    title: "Performances",
  };

export default function Performances() {
    return (
        <main className="p-8">
            <h1 className="flex flex-col items-center font-bold text-center text-xl uppercase tracking-[0.15em]">
                This is the performances page! Wahooo
            </h1>
            <section className="mt-8">
                <h2 className="flex flex-col items-center mb-4 font-bold text-center text-lg uppercase tracking-[0.15em] underline">
                    Upcoming Shows
                </h2>   
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* {cards go here } */}
                    <PerformanceCard title="LOVE IS EVOL" date="TBD"/>
                    <PerformanceCard title="Gaga for Gaga" date="TBD"/>
                    <PerformanceCard title="Cabaret Meets Broadway" date="TBD"/>
                    <PerformanceCard title="Revenge of the Nerdlesque" date="TBD"/>
                    <PerformanceCard title="Enchanted Ravens Pride" date="TBD"/>

                </div>               
            </section>
            <section className="mt-12">
                <h2 className="flex flex-col items-center mb-4 font-bold text-center text-lg uppercase tracking-[0.15em] underline hover:text-slate-500">
                        Past Shows
                </h2> 
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        <PerformanceCard title="The Twilight Benefit Show" date="January 8, 2026"/>
                        <PerformanceCard title="The SlutCracker" date="December 4, 2025"/>
                        <PerformanceCard title="CUNTRY Night" date="November 6, 2025"/>
                        <PerformanceCard title="OOPS! All Villains" date="October 2, 2025"/>
                        <PerformanceCard title="Night Of Enchantment" date="August 8, 2025"/>
                        <PerformanceCard title="Raven Studios 5th Year Anniversary Student Showcase" date="June 28, 2025"/>
                </div>                
            </section>
        </main>
    );
}