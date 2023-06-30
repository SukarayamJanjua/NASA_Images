import React from 'react'
import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title: "NASA Image",
    description: "NASA API for APOD"
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body className='bg-cyan-300'>
            <Provider>
            <div className="main">
                <div className='gradient'/>
            </div>

            <main className='app'>
                <Nav/>
                {children}

            </main>
            </Provider>
        </body>

    </html>
  )
}

export default RootLayout;
