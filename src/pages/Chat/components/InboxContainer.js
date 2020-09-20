import React from 'react'
import InboxUsers from './InboxUsers'
import Button from '../../../shared/components/FormElements/Button'

import './InboxContainer.css'

const InboxContainer = () => {
    return (
        <div className='inbox-container'>
            <InboxUsers />
            <div className="inbox-messages">
                <div className='inbox-messages__header'>
                    <h2>Corey Cimmons</h2>
                    <small> Last seen 12 hours ago </small>
                </div>
                <div className="inbox-messages__body">
                    <div className="inbox-messages__body__chat">
                        Chat
                    </div>
                    <form className='inbox-messages__body__form'>
                        <input type="text" />
                        <i className="fas fa-paper-plane"></i>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default InboxContainer
