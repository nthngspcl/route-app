import { useEffect, useRef } from "react";
import Portal from "./Portal";

const Modal = () => {

    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            // if (e.key === 'Escape') {
                // onClose()
            // }
        })

        return () => {
            window.removeEventListener('keydown', (e) => {})
        }
    }, [])

    return ( 
        <Portal>
            <div className="overlay">
                <div className="content">
                    hello world
                </div>
            </div>
        </Portal>
    );
}
 
export default Modal;