import Card from './Card'
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
            {newDataArray}
        </main>
    )
}

export default Main