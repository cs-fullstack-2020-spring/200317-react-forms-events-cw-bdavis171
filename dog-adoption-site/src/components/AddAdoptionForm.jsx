import React, {Component} from 'react';

class AddAdoptionForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            breed: '',
            age: 0,
            color: '',
            pottyTrained: 'No',
            listOfDogs: []
        }
    }
    //record input entries
    inputEntries = (event) => {
        if (event.target.name == 'name') {
            this.setState({name: event.target.value});
        }
        else if (event.target.name == 'breed'){
            this.setState({breed: event.target.value});
        }
        else if (event.target.name == 'age'){
            this.setState({age: event.target.value});
        }
        else if (event.target.name == 'color'){
            this.setState({color: event.target.value});
        }
        
    }

    //add each dog to the array as objects
    addToList = (event) => {
        event.preventDefault();
        this.state.listOfDogs.push(
            {
                name: this.state.name,
                breed: this.state.breed,
                age: this.state.age,
                color: this.state.color,
                pottyTrained: this.state.pottyTrained
            }
        );
        this.setState({ listOfDogs: this.state.listOfDogs});
        this.props.updateDogList(this.state.listOfDogs);
        this.setState(
            {
                name: '',
                breed: '',
                age: '',
                color: '',
                pottyTrained: 'No'  
            }
        )
    }

    //record if pottyTrained is checked
    isPottyTrained = (event) => {
        if (event.target.checked == true) {
            this.setState({pottyTrained: 'Yes'});
        }
        else {
            this.setState({pottyTrained: 'No'});
        }
        console.log(event.target.checked)
    }


    render(){
        return(
            <div>
                <form action="">
                    <fieldset>
                        <legend>Add a Dog</legend>
                        
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name='name' id='name' onChange={this.inputEntries} value={this.state.name}/>
                        </div>

                        <br/>

                        <div>
                            <label htmlFor="breed">Breed:</label>
                            <input type="text" name='breed' id='breed' onChange={this.inputEntries} value={this.state.breed}/>
                        </div>

                        <br/>

                        <div>
                            <label htmlFor="age">Age:</label>
                            <input type="number" name='age' id='age' onChange={this.inputEntries}/>
                        </div>

                        <br/>

                        <div>
                            <label htmlFor="color">Color:</label>
                            <select name="color" id="color" onChange={this.inputEntries}>
                                <option value={this.state.color}>--</option>
                                <option value="white">White</option>
                                <option value="brown">Brown</option>
                                <option value="spotted">Spotted</option>
                                <option value="black">Black</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <br/>

                        <div>
                            <label htmlFor="pottyTrained">Potty Trained?</label>
                            <input type="checkbox" name='pottytTrained' id='pottyTrained' onChange={this.isPottyTrained}/>
                        </div>

                        <br/>

                        <button onClick={this.addToList}>Submit</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default AddAdoptionForm;