import Card from './Card'
import Create from './Create'
import dataArray from '../data'
import {useState} from 'react'

function Main(){
    const [newDataArray, setNewDataArray] = useState(
        //the item parameter is each object in the array
        dataArray.map((item) => (
            <Card 
                key={item.id}
                item={item}
                onDelete={deleteJournal}
            />
        ))
    )

    function deleteJournal(id){
        console.log("delete", id)

        setNewDataArray((prevDataArray) =>
            prevDataArray.filter((item) => item.key !== id.toString())
        );
        // setNewDataAray(newDataArray.filter((item) => item.id !== id))
    }

    console.log(newDataArray)
    // console.log(Card)
    console.log(dataArray)

    return (
        <main className='main'>
            <Create/>
            {newDataArray}
        </main>
    )
}

export default Main