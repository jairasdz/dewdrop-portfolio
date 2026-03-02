import Link from "next/link"

type PerformanceCardProps = {
    title: string,
    date: string,
}

export default function PerformanceCard({ title, date }: PerformanceCardProps) {
    return (
        <div className="text-center uppercase text-slate-500 font-bold bg-slate-300 rounded-lg hover:bg-pink-300 transition duration-600">
            <h2>
                {title}
            </h2>
            <p>
                {date}
            </p>
        </div>
    );
}