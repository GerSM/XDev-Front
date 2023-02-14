import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alert } from '../functions';


const usersView = () => {
    const url = 'http://localhost:8001/api/v1/users/';

    const [users, setUsers] = useState([]);
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [password, setPaswword] = useState('');
    const [operation, setOperation] = useState(1);
    const [title, setTitle] = useState('');

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const res = await axios.get(url);
        setUsers(res.data);
    }

    return (
        <div className='App'>
            <div className='container-fluid'>
            </div>
            <div className='modal fade'>
                <div className='row mt-3'>
                    <div className='col-md-4 offset-md-4'>
                        div
                    </div>
                </div>

            </div>
        </div>
    );
};

export default usersView;