import { useEffect, useState } from "react";
import * as phoneService from '../services/phoneService';
import PhoneListItem from "./PhoneListItem";


export default function Shop() {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        phoneService.getAll()
            .then(result => setPhones(result));
    }, []);

console.log(phones);

    return (
        <>
        <h2 className="All-prod">All products</h2>
        <div className="s-container">
            
            {phones.map(phone => (

                <PhoneListItem key={phone._id} {...phone} />
            ))}
            {phones.length === 0 && (
                <h3 className="no-articles">No phones yet</h3>
            )}
        </div>
        </>
    );
}