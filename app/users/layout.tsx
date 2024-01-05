import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import getUsers from '../action/getUsers'
import UserLlst from './components/UserLlst';

export default async function UsersLayout({ children }: { children: React.ReactNode}) {
  const users = await getUsers();
    return (
        <Sidebar>
          <div className='h-full'>
            <UserLlst items={users}/>
            {children}
          </div>
        </Sidebar>
    )
}