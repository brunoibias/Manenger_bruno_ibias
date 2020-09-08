import React, { useState, useEffect } from 'react';

const EditCountryForm = props => {
    const [country, setCountry] = useState(props.currentCountry);

    const handleInputChange = event => {
        const { name, value } = event.target

        setCountry({ ...country, [name]: value })
    };

    const submitForm = event => {
        event.preventDefault();

        props.updateCountry(country.id, country);
    };

    useEffect(() => {
        setCountry(props.currentCountry);
    }, [props]);

    return (
        <div className="row">

            <form className="col s12"
                onSubmit={submitForm}>
                <div className="row">
                    <div className="input-field col s12">

                        <input type="text"
                            id={country.id}
                            name="name"
                            value={country.name}
                            onChange={handleInputChange}
                            required />
                        <label htmlFor="name"></label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12 m6">
                        <button className="waves-effect waves-light btn">Alterar</button>
                    </div>
                    <div className="input-field col s12 m6">
                        <button
                            className="waves-effect waves-light btn"
                            onClick={() => props.setEditing(false)}
                        >Cancelar</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditCountryForm;