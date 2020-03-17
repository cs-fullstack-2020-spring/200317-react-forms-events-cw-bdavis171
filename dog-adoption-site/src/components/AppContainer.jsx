import React, {Component} from 'react';
import AvailableDogs from './AvailableDogs';
import AddAdoptionForm from './AddAdoptionForm';
import '../App.css'

class AppContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            listOfDogs : []
        }
    }

 //update dog list with the new list as the parameter
 updateDogList = (newList) => {
    this.setState(
        {
            listOfDogs : newList
        }
    )
}

    render(){
        return(
            <div className='container'>
                <h1>Dog Adoption</h1>
                <div id='available-dogs'>
                <AvailableDogs  listOfDogs = {this.state.listOfDogs}/>
                </div>
                <div id ='add-form'>
                <AddAdoptionForm updateDogList = {this.updateDogList}/>
                </div>
            </div>
        )
    }
}

export default AppContainer;