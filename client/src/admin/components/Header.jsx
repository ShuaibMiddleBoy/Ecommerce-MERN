
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import AdminBTN from "./AdminBTN"
const Header = () => {

  return (
    <>
    <AdminBTN link = "/" title="Website" />
    
    <div className="bg-white h-[60px] border flex items-center justify-between pl-5 pr-5" >
        <div className=''>
          <Link to={'/dashboard'}>
            <img src={logo} alt="logo" width={"40px"} />
            </Link>
        </div>
    </div>
    </>
  )
}

export default Header