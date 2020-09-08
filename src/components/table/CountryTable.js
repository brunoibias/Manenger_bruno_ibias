import React from 'react';

const CountryTable = props => (
  
    <table className="responsive-table">
        <thead>
            <tr>
                <th>Nome</th>
                <th>Ações</th>
            </tr>
        </thead>
    <tbody>
        {
            props.countrys.length > 0 ? (
                props.countrys.map (country => (

                    <tr key={country.id}>
                        <td>{country.name}</td>
                        <td className="center-align">
                            <button 
                                className="waves-effect waves-light btn-small"
                                onClick={() => props.editRow(country)}>
                                Editar
                            </button>

                            <button 
                                className="waves-effect waves-light btn-small red darken-4"
                                onClick={() => props.deleteCountry(country.id)}>
                                Excluirete
                            </button>
                        </td> 
                    </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>{props.countrys[0]}não há países cadastrados.</td>
                    </tr>
                )
        }          
    </tbody>
  </table>
);
    
export default CountryTable;