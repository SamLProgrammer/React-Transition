import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('AddCategory Test', () => { 
    test('InputText value should change', () => {
        render(<AddCategory onAddCategory={() => {}}/>);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target: {value: 'dude'}});
        expect(input.value).toBe('dude');
    })

    test('should call onNewCategory if input has a value', () => { 
        const inputValue = 'Broly';
        render(<AddCategory onAddCategory={ () => {}}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.change(input,{target: {value: inputValue}});
        fireEvent.submit(form);
        expect(input.value).toBe('');
     })

     test('Function should be never called if inputvalue is empty', () => { 
        const onAddCategory = jest.fn();
        const inputValue = '';
        render(<AddCategory onAddCategory={ () => {}}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.change(input,{target: {value: inputValue}});
        fireEvent.submit(form);
        expect(onAddCategory).toHaveBeenCalledTimes(0);
      })
 })