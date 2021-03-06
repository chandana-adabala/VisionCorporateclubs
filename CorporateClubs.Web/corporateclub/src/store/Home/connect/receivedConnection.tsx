import React from 'react'
import {Icon} from 'react-icons-kit';
import {library} from 'react-icons-kit/icomoon/library';
import {ic_mail} from 'react-icons-kit/md/ic_mail';
import {phone} from 'react-icons-kit/icomoon/phone'
export default class ReceivedConnection extends React.Component<any,any>{

    render(){
        return(
            <div className="reqWindow">
                <div className='profilePic'>

                </div>
                <div className='body'>
                    <p>{} wants to connect with you !</p>
                    <p className="mutualClubs">
                         <Icon icon={library}/>
                         {}  in mutual
                    </p>
                    <p className="contact">
                        <span className='mail'>
                            <Icon icon={ic_mail}></Icon>
                            {}
                        </span>
                        <span className='phone'>
                            <Icon icon={phone}/>
                            {}
                        </span>
                    </p>
                    <p className='mutualContacts'>
                            <span>You and {} know</span>
                            <span>{}</span>
                    </p>
                    <div>
                        <button>Connect Now</button>
                        <button>Block</button>
                    </div>
                </div>
            </div>
        );
    }
}