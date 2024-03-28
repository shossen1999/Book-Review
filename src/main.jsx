import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesRead from './components/PagesRead/PagesRead';
import BookDetails from './components/BookDetails/BookDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/books',
        element:<ListedBooks></ListedBooks>
      },
      {
        path:'/book/:id',
        element:<BookDetails></BookDetails>,
        loader:() => fetch('../public/books.json')
      },
      {
        path:'/pages',
        element:<PagesRead></PagesRead>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
