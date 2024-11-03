const Tournaments = () => {
    return (
        <div className="flex flex-col items-center my-10 text-center sm:flex-row sm:text-left sm:justify-center">
            <img
                className="h-[300px] w-[250px] sm:h-[300px] sm:w-[250px] lg:h-auto lg:w-auto mx-auto sm:mx-0"
                src="assets/TournamentFlyer.jpg"
                alt="Flyer"
            />
            <div className="sm:ml-8 mt-5 sm:mt-0">
                <h1 className="text-4xl text-black font-bold sm:text-center">Upcoming Tournaments</h1>
                <h2 className="mt-4 text-xl">Teams</h2>
                <div className="space-y-2">
                    <p>3 Eyes - Rick G./Daniel L.</p>
                    <p>Fried Pickles - Tom/Diane</p>
                    <p>Gesty Eull - Alex/Nancy</p>
                    <p>Dinking a Latte - Rich/Becky</p>
                    <p>Dreeman - Mary Jo/Dan D.</p>
                    <p>Dynamic Duo - Dan S./Rochelle</p>
                    <p>Paddle Me! - Van/Rick D.</p>
                    <p>Thunderbolt and Lightfoot - Ty/Max</p>
                </div>
                <div className="my-8 space-y-2">
                    <p>Main Court Line Judge/Scorekeeper: Bill Wright</p>
                    <p>Brackets/Stats Manager: Kathy Kelleher</p>
                    <h3 className="mt-6 mb-4 text-xl font-semibold">First Round Matchups:</h3>
                    <p>Gesty Eull vs. 3 Eyes</p>
                    <p>Fried Pickles vs. Thunderbolt and Lightfoot</p>
                    <p>Dreeman vs. Dynamic Duo</p>
                    <p>Paddle Me! vs. Dinking a Latte</p>
                </div>
            </div>
        </div>
    );
};

export default Tournaments;
