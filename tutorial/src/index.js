import ReactDom from 'react-dom';
import './index.css' //CSS
import { data } from './books' //import books component
import Book from './Book'
import { greeting } from './testing/greeting'


/*
demo for map function
const names = ['lopata', 'catalin', 'alexandru'];
const newNames = names.map((name) => {
  return <h1>{name}</h1>
})
console.log(newNames) */


function BookList() {
  console.log(greeting)
  return (
    <section className="booklist">{data.map((book) => {
      return (
        <Book key={book.id} img={book.img} title={book.title} author={book.author}  /*or we can use spread operator like {...book}*/ />
      )
    })}</section>
  )
}




ReactDom.render(<BookList />, document.getElementById('root'));


