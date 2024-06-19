import React, { useState } from 'react'
import {  Col, Row} from 'react-bootstrap';
import SingleBook from './SingleBook';
// import fantasy from './books/fantasy.json';
// import history from './books/history.json';
// import horror from './books/horror.json';
// import romance from './books/romance.json';
// import scifi from './books/scifi.json';



export default function AllTheBooks(props) {
//  console.log(props.books);
const [selected, setSelected] = useState(false);   
// let [type,setType] = useState('fantasy');
 

return (

  <>
        {/* {type === 'fantasy' && <Button variant="link" onClick={() => setType('fantasy')}> Fantasy </Button>}
        {type === 'history'&&<Button variant="link" onClick={() => setType('history')}> History </Button>}
        {type === 'horror' && <Button variant="link" onClick={() => setType('horror')}> Horror </Button>}
        {type === 'romance' &&<Button variant="link" onClick={() => setType('romance')}> Romance </Button>}
        {type === 'scifi' && <Button variant="link" onClick={() => setType('scifi')}> Scifi </Button>} */}
         <Col>
          <Row>
              {props.books
              .slice(0,20) //metodo per far apparire solo il numero inserito(20) di libri 
              .filter(book => book.title.toLowerCase().includes(props.search))
              .map(book => <SingleBook  
                              key={book.asin} 
                              book={book}
                              selected={selected}  
                              setSelected={setSelected}         
                            />)}
          </Row>
        </Col>
</>
  )
}
             