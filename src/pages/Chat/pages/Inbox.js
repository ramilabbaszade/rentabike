import React, {useEffect} from 'react'
import InboxContainer from '../components/InboxContainer'

const Inbox = () => {
    useEffect(() => {
        document.title = "Mesaj qutusu"

     }, [])


    return (
        <div className="inbox-page">
            <InboxContainer />
        </div>
    )
}

export default Inbox
