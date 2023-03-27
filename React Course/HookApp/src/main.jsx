import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MainApp } from './useContext/MainApp'
import './useReducer/intro-reducer'
import { BrowserRouter, createBrowserRouter, RouterProvider, } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    //   // <React.StrictMode>
    <BrowserRouter>
        <MainApp />
    </BrowserRouter>
    //   //  </React.StrictMode>,
)
