import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// JQuery
import $ from 'jquery'
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// Styles du projet
import './main.css'
// Application
import App from './App.jsx'

window.$ = $;
window.jQuery = $;

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
)