import React from "react";
import Contact from "./Contact";

export default function List({contacts, parentCallback}) {
    return (
        <>
            {contacts.map(contact => <Contact contact={contact} parentCallback={parentCallback}/>)}

        </>
    )
}