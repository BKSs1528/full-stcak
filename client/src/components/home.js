import React from "react"
import MockData from "./Mockdata.json"
import './home.css'
const HomePage=()=>{
    return(
        <>
        <div className="book-container">
        <h1>Book List</h1>
        <div className="btn"><i class="fa fa-plus"></i> Add New Book</div>
        <div className="books">
        {MockData.map(book=>{
            return(
                <div className="book">
                <img src={book.image} alt="book"/>
                <h4>{book.title}</h4>
                <h5>{book.author}</h5>
                <h5>{book.genre}</h5>

                </div>
            )            
        })}
        </div>
        </div>
        </>
    )
}
export default HomePage