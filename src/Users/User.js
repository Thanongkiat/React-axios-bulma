import React from 'react';
import UserItems from './User-Items/UserItems';

import axios from 'axios';


class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }

    }
    componentDidMount() {
        axios.get('https://flagfrog-78f30.firebaseio.com/user-post/DSVfSBQanFOTOU0I6BEOCh2paqt1.json')
        .then((data) => {
            console.log(data.data);
            Object.keys(data.data).map((el , key)=>{
                //console.log(data[el].textPost)
                console.log(data.data[el].textPost);
                this.setState({
                    data: this.state.data.concat(data.data[el].textPost)
                })
            })
            // data.data.forEach((element)=> {
            //     console.log(element)
            // });
            //this.setState({
              //  email: data.data.email
            //})

        })
    }
    render() {
        return (
            <div>
                <UserItems data={this.state.data}/>
            </div>
        )
    }
}

export default User; 