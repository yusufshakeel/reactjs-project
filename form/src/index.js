import React from 'react';
import ReactDOM from 'react-dom';

// import MyForm from './component/MyForm';
import MySuperForm from './component/MySuperForm';

const App = () => {
    return (
        <div>
            {/*<MyForm/>*/}
            {/*<hr/>*/}
            <MySuperForm/>
        </div>
    );
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);