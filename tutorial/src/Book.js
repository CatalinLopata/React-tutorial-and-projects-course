import React from 'react'

const Book = ({ img, title, author }) => {
    //props destructing
    //console.log(props)
    //const { img, title, author } = props.book;
    //attribute, event
    const clickHandler = (e) => {
        console.log(e)
        console.log(e.target)
        alert(title)
    }

    const complexExample = (a) => {
        console.log(a)
    }

    return (
        <article className="book" onMouseOver={() => {
            console.log(title)
        }}>
            <img src={img} alt=""></img>
            <h1>{title}</h1>
            <h4>{author}</h4>
            <button type="button" onClick={clickHandler /*or we can add a function here*/}>Reference example</button>
            <button type="button" onClick={() => complexExample(author)} >More Complex Example</button>
        </article>
    )
}

export default Book