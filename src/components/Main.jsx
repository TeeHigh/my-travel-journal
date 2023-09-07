import Card from './Card'
import Create from './Create'
import data  from '../data.js'

function Main(){
    const newDataArray = data.map(item =>{
                return(
                        <Card 
                            key={item.id}
                            item={item}
                        />
                )
            }
        )
    return (
        <main className='main'>
            <Create/>
            {newDataArray}
        </main>
    )
}

export default Main