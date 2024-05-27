import React from 'react'
import { Outlet, Route } from 'react-router-dom'
import Navigation from '../components/Navigation'

const MainContent = () => {

  const listItem = [
    {option: {
      name: 'Product Listing',
      path: '/front-store/main/product-listing'
    }},
    {option: {
      name: 'View Cart',
      path: '/front-store/main/view-cart'
    }},
    {option: {
      name: 'Log Out',
      path: '/front-store/login'
    }},
  ]

  return (
    <>
      <Navigation 
        type='front-store'
        listItem={listItem}
      />


      <Outlet />
    </>
  )
}

export default MainContent