import React from 'react'
import Navigation from '../components/Navigation'
import { Routes, Route, Outlet } from 'react-router-dom'
import ManageProduct from './ManageProduct'

const MainContent = () => {

  const listItem = [
    {option: {
      name: 'Manage Product',
      path: '/back-store/main/manage-product'
    }},
    {option: {
      name: 'Manage User',
      path: '/back-store/main/manage-user'
    }},
    {option: {
      name: 'Log Out',
      path: '/back-store/login'
    }},
  ]

  return (
    <div>
        <Navigation 
          type='back-store'
          listItem={listItem}
        />

        <Outlet />
    </div>
  )
}

export default MainContent