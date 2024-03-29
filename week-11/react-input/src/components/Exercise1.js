import { useState } from 'react';

const Exercise1 = () => {
    const [person, setPerson] = useState({ name: "", age: "" });

    const handleChange = (event, property) => {
        setPerson({ ...person, [property]: event.target.value });
    }
    return (
        <div>
            <input id="name-input" onChange={(e) => handleChange(e, 'name')} value={person.name} />
            <input id="age-input" onChange={(e) => handleChange(e, 'age')} value={person.age} />
            <button onClick={() => alert(person.name + " " + person.age)}>Go to Bar</button>
        </div>
    );
}
export default Exercise1;