import React from 'react'
import InboxContainer from '../components/InboxContainer'

const Inbox = () => {
    document.title="Mesaj qutusu"

    return (
        <div className="inbox-page">
            <InboxContainer />
        </div>
    )
}

export default Inbox
