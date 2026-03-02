export default function Performances() {
    return (
        <main className="p-8">
            <h1 className="flex flex-col items-center font-bold text-center uppercase tracking-[0.15em]">
                This is the performances page! Wahooo
            </h1>            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                {/* {cards go here } */}
                <div className="bg-pink-400 h-32">Card 1</div>
                <div className="bg-pink-500 h-32">Card 2</div>
                <div className="bg-pink-600 h-32">Card 3</div>
                <div className="bg-pink-400 h-32">Card 4</div>
                <div className="bg-pink-500 h-32">Card 5</div>
                <div className="bg-pink-600 h-32">Card 6</div>
            </div>

        </main>
    );
}