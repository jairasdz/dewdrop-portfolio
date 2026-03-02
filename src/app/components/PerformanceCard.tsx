import Link from "next/link"

type PerformanceCardProps = {
    title: string,
    date: string,
}

export default function PerformanceCard({ title, date }: PerformanceCardProps) {
    return (
        <div className="text-center uppercase text-slate-500 font-bold bg-slate-300 rounded-lg">
            <h2>
                title: {title}
            </h2>
            <p>
                date: {date}
            </p>
        </div>
    );
}