import React, { Component } from 'react';
import qs from 'querystring';

import api from '../services/api';

import CountryTable from '../components/table/CountryTable';
import AddCountryForm from '../components/forms/AddCountryForm';
import EditCountryForm from '../components/forms/EditCountryForm';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            countrys: [],
            currentCountry: { id: null, name: ''},
            editing: false
        }
    }

    componentDidMount() {
        this.refreshCountryTable();
    }

    refreshCountryTable() {
        this.countrysData = api.get('api')
            .then(response => response.data)
            .then(data => {

                this.setState({ 
                    countrys: data.data,
                    setCountrys: data.data
                });
            });
    }

    addCountry = country => {

        api.post('api', qs.stringify(country))
            .then(res => {
                this.refreshCountryTable();
            });
    };

    deleteCountry = id => {
        api.get(`api/${id}`)
            .then(res => {
                this.refreshCountryTable();
            });
    };

    updateCountry = (id, country) => {
        
        api.get(`api/${id}`, qs.stringify(country))
            .then(res => {

                this.refreshCountryTable();
            });
        
        this.setState({ 
            currentCountry: { id: null, name: ''}
        });

        this.setEditing(false);
    };

    editRow = country => {

        this.setState({ 
            currentCountry: { id: country.id, name: country.name}
        });

        this.setEditing(true);
    };

    setEditing = isEditing => {

        this.setState({ editing: isEditing });
    };

    render () {
        const { countrys } = this.state;

        return (
            <div className="container">
                    
                <div className="row">
    
                    {
                        this.state.editing ? (
                            <div className="col s12 l6">
                                <h4>Editar País</h4>
                                <EditCountryForm 
                                    editing={this.state.editing}
                                    setEditing={this.setEditing}
                                    currentCountry={this.state.currentCountry}
                                    updateCountry={this.updateCountry} 
                                />
                            </div>
                        ) : (
                            <div className="col s12 l6">
                                <h4>Adicionar País</h4>
                                <AddCountryForm addCountry={this.addCountry} />
                            </div>
                        )
                    }
                    
                    <div className="col s12 l6">
                        <h5>Países</h5>
                        <CountryTable countrys={countrys} editRow={this.editRow} deleteCountry={this.deleteCountry} />
                    </div>
                </div>
            </div>
        );
    };
};

export default Home;