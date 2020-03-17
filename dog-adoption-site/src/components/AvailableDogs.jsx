import React, {Component} from 'react';

class AvailableDogs extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <h3>Available Dogs</h3>
                <div>
                    {this.props.listOfDogs.map(
                        (dogs,index) => {
                            return (
                                <div key = {index}>
                                    <p>Name: {dogs.name}</p>
                                    <p>Breed: {dogs.breed}</p>
                                    <p>Age: {dogs.age}</p>
                                    <p>Color: {dogs.color}</p>
                                    <p>Potty Trained: {dogs.pottyTrained}</p>
                                    <br/>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        )
    }
}

export default AvailableDogs;