import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import auth from '../../auth';

const Dashboard = (props) => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const fetchUser = async () =>{
        setIsLoading(true);
        const token = Cookies.get('token');
        let response = await fetch('https://discordapp.com/api/users/@me', 
            {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
        const json = await response.json();
        setUser(json);
        console.log(json)
        setIsLoading(false);
    }
    
    useEffect(() => { 
        fetchUser();
    },[]) 

    return (
        <div>
            {
                isLoading 
                ?
                <div>Loading...</div>
                : (
                    <React.Fragment>
                        <h1>Dashboard</h1>
                        <img src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`} alt='avatar'/>
                        <div>{user.username}</div>
                        <button onClick={() => {
                            auth.logout(() => {
                                props.history.push('/')
                            })
                        }}>Logout</button>
                    </React.Fragment>
                )
            }
        </div>
    );
}

export default Dashboard;