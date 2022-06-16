import React from 'react';
import './Navbar.scss';
import Button from '../Atoms/Button';
import { Link } from 'react-router-dom';

type NavbarProps = {
  onMemberPage?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ onMemberPage = false }) => {
  return (
    <div className='navbar'>
      <Link to='/' className='home-link'>
        <h3>ENVIDAO</h3>
      </Link>
      <div className='nav-links'>
        <Button
          className='navbar-btn'
          onClick={() => console.log('contributing')}
          color='primary'
        >
          Contribute
        </Button>
        {onMemberPage ? (
          <Button
            onClick={() => console.log('connect wallet')}
            variant='text'
            className='link'
          >
            Connect your wallet
          </Button>
        ) : (
          <Link to='/member' className='link'>
            Go to Community Page
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;