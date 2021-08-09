import React, {useState,useEffect} from 'react'
import Pagination from 'react-bootstrap/Pagination';
import active from 'react-bootstrap/PageItem'
import './App.css';


const Pagination_icon = ({postPerpage, currentpage,totalPosts, Paginate}) => {
    const pageNumbers =[];
    for(let i = 1; i <= Math.ceil(totalPosts / postPerpage); i++){
        pageNumbers.push(i);
    }

    const [numberPerpage,setnumberPerpage] = useState(5);
    const [currentNumberPage, setcurrentNumberPage] = useState(1);
    const indexOfLastnumber = currentNumberPage * numberPerpage;
    const indexOfFirstnumber = indexOfLastnumber - numberPerpage;
    const numbershowed = pageNumbers.slice(indexOfFirstnumber,indexOfLastnumber);

    const first = () => setcurrentNumberPage(1);
    const prev = () => setcurrentNumberPage((currentNumberPage - 1) <= 0 ? (1) :(currentNumberPage-1));
    const next = () => setcurrentNumberPage((currentNumberPage+1) > Math.ceil(pageNumbers.length / numberPerpage) ? Math.ceil(pageNumbers.length / numberPerpage) : (currentNumberPage+1));
    const last = () => setcurrentNumberPage(Math.ceil(pageNumbers.length / numberPerpage));

    useEffect(() => {
        console.log(currentpage)
      })


    
    return (
        <div className = 'pagination'>
        <Pagination>
        <Pagination.First onClick ={first}/>
        <Pagination.Prev onClick ={prev}/>
        {pageNumbers.length <= numberPerpage ? 
        (pageNumbers.map((number) =>(
            <Pagination.Item 
            onClick ={() => Paginate(number)}
            className={currentpage === number ? "active" : null}>{number}</Pagination.Item>
        ))
        ) : (numbershowed.map((number) =>(
        <Pagination.Item onClick ={() => Paginate(number)} 
        className={currentpage === number ? "active" : null}>{number}</Pagination.Item>))
        )}
        <Pagination.Next onClick ={next}/>
        <Pagination.Last onClick ={last}/>
      </Pagination>
      </div>
     
    )
}

export default Pagination_icon
