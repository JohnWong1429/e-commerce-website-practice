import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BiUser } from 'react-icons/bi';
import { UserContext } from '../context/user_context';
import '../styles/UserMenu.css';
import { CartContext } from '../context/cart_context';

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { logout, loginWithRedirect, myUser } = React.useContext(UserContext);
  const { clearCart } = React.useContext(CartContext);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const log_in = () => {
    loginWithRedirect();
    handleClose();
  }
  const log_out = () => {
    logout();
    handleClose();
    clearCart();
  }

  return (
    <div className='user-menu'>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <div className="user-icon">
            <BiUser />
        </div>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {myUser ? (
            <MenuItem onClick={log_out}>Logout</MenuItem>
        ) : (
            <MenuItem onClick={log_in}>Login</MenuItem>
        )}
      </Menu>
    </div>
  );
}
