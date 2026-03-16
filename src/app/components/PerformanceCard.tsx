import Link from "next/link"

type PerformanceCardProps = {
    title: string,
    date: string,
    image: string
}

export default function PerformanceCard({ title, date, image }: PerformanceCardProps) {
    return (
        <div className="relative overflow-hidden rounded-xl transition delay-150 duration-300 ease-in-out hover:scale-90">
            <img
                src={image}
                alt={title}
                loading="lazy"
            />

            {/* <div className="absolute top-0 w-full bg-slate backdrop-blur-sm p-3">
                <div className="text-center uppercase text-white font-bold">
                    <h3>
                        {title}
                    </h3>
                    <p>
                        {date}
                    </p>                
                </div>

            </div> */}
        </div>
    );
}