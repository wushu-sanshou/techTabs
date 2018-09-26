import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import DynamicLoader from './dynamicLoader';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            tabs:[]
        };
    }
    componentDidMount(){
        fetch('tabs.json')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    tabs:json
                })
            });
    }

    static compare(a,b) {

    if (a.order < b.order)
        return -1;
    if (a.order > b.order)
        return 1;
    return 0;
}

    render(){
        const {tabs} = this.state;
        const sorted = tabs.sort(App.compare);
        let firstTab = sorted.length>0?sorted[0].id:'';
        const link = sorted.map((tab,index) => {
            const linkName = `/${tab.id}`;
            return (
                <Link key={index} to={linkName}>
                    {tab.title}
                </Link>
                    );
        });
        const routes = tabs.map((route,index) => {
            return (
                <Route key={index} exact path={`/${route.id}`} component={()=><DynamicLoader type={route.id}/>}/>
            );
        });
        return(
            <div>

                <div className="tabs">
                    {link}
                </div>
                <Route exact path='/' component={()=><DynamicLoader type={firstTab}/>}/>
                {routes}
            </div>
        )
    }
}

export default App;