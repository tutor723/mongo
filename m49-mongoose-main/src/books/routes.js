const { Router } = require("express")
const bookRouter = Router()

const { addBook , getAllBooks ,deleteAllBooks,putAllBooks } = require("./controllers")



bookRouter.post("/books/addBook",addBook)
bookRouter.get("/books/getBooks",getAllBooks)

bookRouter.delete("/books/deletebooks/:title", deleteAllBooks)
bookRouter.put("/books/putBooks/:title", putAllBooks)
module.exports = bookRouter