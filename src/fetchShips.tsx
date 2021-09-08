import { Data } from "@material-ui/core/node_modules/popper.js";
import React from "react"

// Does not work to import the data like this
import Ships from '../server/ships.json'

/*interface  Ship = {
    ShipId: shipId,

}*/

export default function fetchShips() {
    /*
    const showShips =  document.getElementById('showShips');
    let ships = []

    function fetchShips() {
        return fetch('http://localhost:4000/api/ships')
        .then(function(response){
        if(!response.ok) {
            throw new Error('Could not fetch the ships.');
        }
        return response.json();
        });
    }

    async function init() {
        try {
        ships = await fetchShips();
        }
        catch(error){
        console.log('ERROR', error.message);
        }
    }
    init();*/
    
    return(
        <div >
            <table id="showShips">
                <tr>
                    <td>ShipId</td>
                    <td>Heading</td>
                    <td>Year of Construction</td>
                    <td>Passenger Capacity</td>
                    <td>Speed</td>
                </tr>
                {Ships.map( ship => {
                    return (
                        <tr key={ship.shipId}>
                            <td>{ship.shipId}</td>
                            <td>{ship.heading}</td>
                            <td>{ship.yearOfConstruction}</td>
                            <td>{ship.passengerCapacity}</td>
                            <td>{ship.speed}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}