import { useState } from "react"
import PropTypes from 'prop-types'
export const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState('One Punch');

    const handleInputChange = (evt) => {
        setInputValue((v) => evt.target.value);
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault();

        const value = inputValue.trim();
        if(value.length < 1) return;
        onAddCategory(value);
        setInputValue((vl) => {return ''});
    }

    return (
        <form aria-label="form" onSubmit={ (event) => {handleFormSubmit(event)} }>
            <input type="text"
                placeholder="Search Gif"
                onChange={handleInputChange}
                value={inputValue} />
        </form>
    )
}

AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired,
}
