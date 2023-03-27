import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Dragon Ball']);

    const handleAddCategory = (category) => {
        if (categories.find((cat) => { return cat.toLowerCase() == category.toLowerCase() })) return;
        setCategories((cat) => { return [category, ...categories] });
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onAddCategory={handleAddCategory} />
            {
                categories.map((category) => <GifGrid category={category} limit={5} key={category}/>)
            }
        </>
    )
}
