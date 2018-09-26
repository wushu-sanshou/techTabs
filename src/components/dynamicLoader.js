import React from 'react';
import Loadable from 'react-loadable';


const DynamicLoader = (props) => {
    const path = `./tabs/${props.type}`;
    const Component =  Loadable({
            loader:  () => import(`${path}`),
            loading: () => <div>Loading...</div>,
            delay: 900
})

    return <Component/>;
};

export default DynamicLoader;