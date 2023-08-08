import { useState } from 'react';

const Exercise2 = () => {
    const [name, setName] = useState("");
    const [fruit, setFruit] = useState("");
    function handleFruitChange(e){
        const selectedFruit = e.target.value;
        setFruit(selectedFruit);
        name && console.log(`${name} selected ${selectedFruit}`);
    }

    return (
        <div>
            <input id="name-input" onChange={(e) => setName(e.target.value)} value={name} />
            <select id="select-input" onChange={handleFruitChange} value={fruit}>
                <option value={"Apple"}>Apple</option>
                <option value={"Orange"}>Orange</option>
                <option value={"Pear"}>Pear</option>
            </select>
        </div>
    );
}
export default Exercise2;