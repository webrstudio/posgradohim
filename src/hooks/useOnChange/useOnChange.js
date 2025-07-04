import { useState } from "react";

export const useOnChange = () => {
    const [data, setData] = useState({})
    const onChange = (e) => {
        const { name, type, value, files } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: type === "file" ? files[0] : value,
        }));
    };
    const onReset = () => setData({}) 
    return { data, onChange, onReset }
}