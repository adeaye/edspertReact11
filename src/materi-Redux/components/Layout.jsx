import { Button } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div style={{height: '300px', background: 'lime', marginBottom: '24px'}}>
            <div style={{display: 'flex', gap: '12px'}}>
            <Button onClick={() => navigate('/')}>List</Button>
            <Button onClick={() => navigate('detail/1')}>Detail</Button>
            <Button onClick={() => navigate('checkout')}>Checkout</Button>
            </div>
            </div>
            <Outlet/>
        </div>
    );
}

export default Layout;