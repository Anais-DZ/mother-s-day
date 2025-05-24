import { useState } from "react";
import Overlay from "./Overlay";

function ButtonOpenOverlay() {
    const [showOverlay, setShowOverlay] = useState(false);

    const handleOpen = () => setShowOverlay(true);
    const handleClose = () => setShowOverlay(false);

    return (
        <>
            <button
                onClick={handleOpen}
                className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-full text-3xl px-10 py-2.5 text-center my-2 border-white border-2 shadow-xl cursor-pointer tracking-[1px]">

                Ouvrir ici !

            </button>

            {showOverlay && <Overlay onClose={handleClose} />}
        </>
    );
};

export default ButtonOpenOverlay;