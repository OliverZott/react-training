import react, { useState } from 'react'
import { IState } from '../App'


interface IProps {
    people: IState["people"]
    setPeople: React.Dispatch<React.SetStateAction<IState["people"]>>
}


const AddToList: React.FC<IProps> = ({ people, setPeople }) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        url: "",
    })

    const handleChange = (e: react.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {

        if (!input.name || !input.age) {
            return
        }

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),  // same as parseInt()
                note: input.note,
                url: input.url,
            }
        ]);

        // to clear input (ugly version)
        setInput({
            name: "",
            age: "",
            note: "",
            url: "",
        });
    }


    // Various versions of onChange event handling
    // video @49:00
    return (
        <div className='AddToList' >
            <input
                type="text"
                placeholder='Name'
                className='AddToList-input'
                value={input.name}
                onChange={handleChange}
                name="name"
            />
            <input
                type="text"
                placeholder='Age'
                className='AddToList-input'
                value={input.age}
                onChange={(e) => {
                    setInput(prevState => {
                        return { ...prevState, age: e.target.value }
                    })
                }}
                name="age"
            />
            <input
                type="text"
                placeholder='Image-url'
                className='AddToList-input'
                value={input.url}
                onChange={(e) => {
                    setInput({ ...input, url: e.target.value })
                }}
                name="url"
            />
            <textarea
                // type="text"
                placeholder='note'
                className='AddToList-input'
                value={input.note}
                onChange={handleChange}
                name="note"
            />
            <button className='AddToList-btn' onClick={handleClick}>Add to list</button>
        </div >
    )
}

export default AddToList
