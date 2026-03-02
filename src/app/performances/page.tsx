import PerformanceCard from "../components/PerformanceCard";

export default function Performances() {
    return (
        <main className="p-8">
            <h1 className="flex flex-col items-center font-bold text-center uppercase tracking-[0.15em]">
                This is the performances page! Wahooo
            </h1>            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center ">
                {/* {cards go here } */}
                <PerformanceCard title="LOVE IS EVOL" date="TBD"/>
                <PerformanceCard title="The Twilight Benefit Show" date="August 8, 2025"/>
                <PerformanceCard title="The SlutCracker" date="August 8, 2025"/>
                <PerformanceCard title="CUNTRY Night" date="August 8, 2025"/>
                <PerformanceCard title="OOPS! All Villains" date="August 8, 2025"/>
                <PerformanceCard title="Night Of Enchantment" date="August 8, 2025"/>
                <PerformanceCard title="Raven Studios 5th Year Anniversary Student Showcase" date="August 8, 2025"/>
            </div>

        </main>
    );
}