import React from 'react'
import InboxUsers from './InboxUsers'

import './InboxContainer.css'
import InboxChat from './InboxChat'

const InboxContainer = () => {
    return (
        <div className='inbox-container'>
            <InboxUsers />
            <div className="inbox-messages">
                <div className='inbox-messages__header'>
                    <h2>Corey Cimmons</h2>
                    <small> Last seen 12 hours ago </small>
                </div>
                <InboxChat />
                <form className='inbox-messages__body__form'>
                    <input type="text" />
                    <button>
                        <i class="fas fa-arrow-circle-right"></i>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default InboxContainer
