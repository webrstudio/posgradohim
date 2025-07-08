import { useState } from "react";

export const useOnChange = () => {
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const onChange = (e) => {
        const { name, type, value, files } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: type === "file" ? files[0] : value,
        }));
    };
    const onLoading = (value)=>{
        setIsLoading(value)
    }
    const onReset = () => setData({}) 
    return { data, onChange, onReset, onLoading, isLoading }
}