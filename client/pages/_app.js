import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'
import '../public/css/styles.css'
import '../components/TopNav'
import TopNav from '../components/TopNav';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "../context";
 
function Myapp ({ Component, pageProps }) {
    return (
        <Provider>
        <ToastContainer position ="top-center"/>
        < TopNav />
        <Component {...pageProps} />
        </Provider>
    )
}

export default Myapp;