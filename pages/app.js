import React, { Component } from 'react';

import '../styles/app.css'
import '../styles/index.scss'


class App extends Component {
    render() {
        return (
            <div className='app'>
                
                
                <p className='p1'>hello word!</p>
                <p className='p2'>你好！世界</p>


                <p className='p3'>我好！ word!</p>
                <style jsx>{`
                            .p3{
                                color:red;
                            }
                `}</style>
            </div>
        );
    }
}

export default App;