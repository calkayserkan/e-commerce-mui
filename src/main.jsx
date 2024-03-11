import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './routes';
import './index.css'
import '@fontsource-variable/inter';



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}/>
)
