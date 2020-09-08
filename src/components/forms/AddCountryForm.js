import React, { useState } from 'react';

const AddCountryForm = props => {

    const initialFormState = { name: '' };
    const [country, setCountry] = useState(initialFormState);

    const handleInputChange = event => {
        const { name, value } = event.target;

        setCountry({ ...country, [name]: value });
    }

    const submitForm = event => {
        event.preventDefault();

        if (!country.name) return;

        props.addCountry(country);
        setCountry(initialFormState);
    };

    return (
        <div className="row">

            <form className="col s12"
                onSubmit={submitForm}>
                <div className="row">
                    <div className="input-field col s12">

                        <input type="text"
                            id="name"
                            name="name"
                            value={country.name}
                            onChange={handleInputChange}
                            required />
                        <label htmlFor="country">Nome do País</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">

                        <button className="waves-effect waves-light btn">Add</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCountryForm;