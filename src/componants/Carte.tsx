function Carte() {

    return (
        <>
            <div className="relative w-full max-w-lg mx-auto">
                <img
                    src="overlay.webp"
                    alt="message fete des meres"
                    className="w-full h-auto"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <h2 className="text-center text-rose-900 text-2xl lg:text-5xl font-bold w-[250px] mt-8">
                        Bonne fête Maman !
                    </h2>

                    <div className=" text-center text-rose-900 text-lg lg:text-xl font-bold w-[250px]">
                        <p className="mt-8">Même si on n’est pas</p>
                        <p>toujours d’accord ces temps-ci,</p>
                        <p>je veux que tu saches que</p>
                        <p>je t’aime très fort.</p>
                        <p className="mt-2">Merci d’être là malgré tout,</p>
                        <p>avec patience et amour.</p>
                        <p className="mt-2">Tu restes la meilleure,</p>
                        <p>sans discussion !</p>
                        <p className="mt-4">Ta fille</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Carte;