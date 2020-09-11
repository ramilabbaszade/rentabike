import React from 'react'
import InboxUsers from './InboxUsers'

import './InboxContainer.css'

const InboxContainer = () => {
    return (
        <div className='inbox-container'>
            <InboxUsers/>
            <div className="inbox-messages">
                <div className='inbox-messages__header'>
                    <h2>Corey Cimmons</h2>
                    <small> Last seen 12 hours ago </small>
                </div>
                <div className="inbox-messages__body">
                    <div className="inbox-messages__body__chat">
                        Chat
                    </div>
                    <div className="inbox-messages__body__input">
                        <input type="text"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InboxContainer
