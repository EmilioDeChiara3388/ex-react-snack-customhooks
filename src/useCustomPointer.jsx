import { useEffect, useState } from "react";

export default function useCustomPointer(component) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        function updateMousePosition(e) {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        document.addEventListener("mousemove", updateMousePosition)
        return () => document.removeEventListener("mousemove", updateMousePosition)

    }, [])

    return (
        <div
            style={{
                position: "fixed",
                top: mousePosition.y,
                left: mousePosition.x,
                transform: "translate(-50%, -50%)",
                cursor: "none"
            }
            }>
            {component}
        </div>
    )
}