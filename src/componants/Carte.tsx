function Carte() {

    return (
        <>
            <div className="relative w-full max-w-lg mx-auto">
                <img
                    src="overlay.webp"
                    alt="message fete des meres"
                    className="w-full h-auto"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10  text-center text-rose-900 w-[270px] lg:w-[380px] text-shadow-2xs text-shadow-white">
                    <h2 className="text-2xl lg:text-5xl font-bold mt-8">
                        Bonne fête Maman !
                    </h2>

                    <div className="text-lg lg:text-xl">
                        <p className="mt-4">Même si on n’est pas toujours d’accord ces temps-ci,</p>
                        <p>je veux que tu saches que je t’aime très fort.</p>
                        <p className="mt-2">Merci d’être là malgré tout, avec patience et amour.</p>
                        <p className="mt-4">Je t'aime 💕</p>
                        <p className="mt-2">Ta fille</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Carte;