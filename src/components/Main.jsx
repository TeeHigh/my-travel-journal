import Card from './Card'
import Create from './Create'
import data from '../data'
import {useState} from 'react'

function Main({openModal}){
    
    const [dataArray, setDataArray] = useState([...data])

    const [test, setTest] = useState(
        dataArray.map((item) =>
            (
                {...item, id: dataArray.indexOf(item) + 1} 
            )
        )
    )

    const [handleFormChange, setHandleFormChange] = useState(
        
        )

    //Duplicate of data source stored in state
    // const [dataArray, setDataArray] = useState([...test])

    console.log("This is test", test)
    console.log("This is dataArray", dataArray)

    //Function to delete a journal
    function deleteJournal(id){
        console.log("delete", id)

        setNewDataArray((prevDataArray) =>
            prevDataArray.filter((item) => item.key !== id.toString())
        );
    }

    //Function to create a new journal
    function addNewCard(){
        console.log("add",)
        setDataArray((prevDataArray) => 
            [
                ...prevDataArray,
                {
                    
                }
            ]
        )
        console.log("new dataArray", dataArray)
        setTest(
            dataArray.map((item) =>
            (
                {...item, id: dataArray.indexOf(item) + 1} 
            )
        )
        )
    }

    //Array that holds the card components
    const [newDataArray, setNewDataArray] = useState(
        //the item parameter is each object in the array
        test.map((item) => (
            <Card 
                key={item.id}
                item={item}
                onDelete={deleteJournal}
                addNewCard={addNewCard}
            />
        ))
    )

    

    return (
        <main className='main'>
            <Create addNewCard={addNewCard} openModal={openModal} />
            {newDataArray}
        </main>
    )
}

export default Main