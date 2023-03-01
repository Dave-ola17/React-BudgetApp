import React from 'react';

// library imports for icons etc
import { TrashIcon } from '@heroicons/react/24/solid';

// react router dom imports
import { Form, NavLink } from 'react-router-dom';

// assets
import logoMark from '../assets/logomark.svg';

const Nav = ({userName}) => {
  return (
    <nav
    to="/"
    arial-label='Go To Home Page'
    >
        <NavLink>
            <img src={logoMark} alt="" height={30}/>
            <span>Home Budgets</span>
        </NavLink>  
        {
            userName && (
                <Form 
                method="Post"
                action='/logout'
                onSubmit={(event) =>{
                    if(!confirm("delete user and all data??")){
                        event.preventDefault()
                    }
                }}
                >
                    <button className='btn btn--warning' type="submit">
                        <span>Delete User</span>
                        <TrashIcon width={20} />
                    </button>
                </Form>
            )
        }      
    </nav>
  )
}

export default Nav