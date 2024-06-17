import React from 'react'
import { Button, ListGroupItem } from 'react-bootstrap'

import axios from '../AxiosApi/AxiosApi';
import { StarFill } from 'react-bootstrap-icons';

export default function SingleComment({comment,setUpdateReviews,updateReviews}) {
  
  const removeComment = (comment) =>{

    axios.delete('/comments/' + comment._id)
      .then((response) => {
       setUpdateReviews(!updateReviews); //visualizza il commento all'istante
      })
      .catch(error => console.error(error))
    }
 
 
    return (
    <ListGroupItem>
    {Array.from({length: comment.rate}).map(rate => <StarFill />)} {comment.comment} 
    <Button variant="danger" className='float-end'onClick={() =>removeComment(comment)}>x</Button>
    </ListGroupItem>

  )
}
