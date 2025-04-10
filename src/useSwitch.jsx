import { useState } from "react"

export default function useSwitch() {
    const [isActive, setIsActive] = useState(false)

    function toggle() {
        setIsActive(!isActive)
    }

    return [isActive, toggle]
}