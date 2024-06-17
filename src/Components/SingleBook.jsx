import { React,useContext } from 'react';
import { Button, Card, Col} from 'react-bootstrap';

import { ThemeContext } from '../modules/Context'
import { useNavigate } from 'react-router-dom';


export default function SingleBook( {book, selected, setSelected} ) {
  

  let [updateContext,setUpdateContext] = useContext(ThemeContext);
  let navigate = useNavigate();
  
  return (
 
    <Col>
      <Card bg={updateContext} data-bs-theme={updateContext} style={{ width: "18rem", border: selected === book.asin ? "2px solid red" :"none", cursor:"pointer"}} 
      //prende l'asin del book all'onClick
      onClick={() => setSelected(book.asin)}>  
        <Card.Img variant="top" className='holder.js/100px160' src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Button className='w-100 mt-2' variant="outline-secondary"
            onClick={() => navigate('/details/'+book.asin)}
            >BookDetails</Button>
          </Card.Body> 
      </Card>

    </Col>
  );
}
{/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Button className='w-100 mt-2' variant="outline-secondary"
            onClick={() => navigate('/details/'+book.asin)}
            >BookDetails</Button>
      </Card.Body>
</Card> */}