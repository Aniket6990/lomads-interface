import React, { useState } from 'react'
import CreateDaoSidebar from '../components/CreateDaoSidebar'
import BasicsPage from './BasicsPage'
import SettingsPage from './SettingsPage'
import TokenPage from './TokenPage'
import GoLivePage from './GoLivePage'
import { sidebarPropType } from '../types'

const SidebarPage = (props: sidebarPropType) => {
  
  const renderPage = () => {
    if (props.page === "Basics") {
      return (
        <div>
          <BasicsPage/>
        </div>
      );
    } else if (props.page === "Token") {
      return (
        <div>
          <TokenPage/>
        </div>
      );
    }
    else if (props.page === "Settings") {
      return (
        <div>
          <SettingsPage />
        </div>
      );
    } else if (props.page === "Go Live") {
      return (
        <div>
          <GoLivePage/>
        </div>
      );
    }
    return (
      <div></div>
    );
  }
  return (
    <div style={{ display: "flex" }}>
      <CreateDaoSidebar />
      {renderPage()}
    </div>
  )
}

export default SidebarPage