import React from 'react'
import Avatar from '../../../shared/components/UIElements/Avatar'

import './InboxChat.css'

const InboxChat = () => {
    const avatarImage = 'https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=ji6Xj8tv'

    return (
        <div className="inbox-messages__body__chat">
            <div className="inbox-messages__body__chat_comment">
                <div className="inbox-messages__body__chat_comment_sender">
                    <Avatar creatorImg={avatarImage} className='avatar-small'/>
                </div>
                <div className="inbox-messages__body__chat_comment_message">
                    <p className="inbox-messages__body__chat_comment_message_text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magni.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe harum vitae exercitationem accusantium minus, soluta totam neque nemo. Voluptates, maxime.
                    </p>
                    <div className='inbox-messages__body__chat_comment_date'>13.04.2020</div>
                </div>
            </div>
            <div className="inbox-messages__body__chat_comment">
                <div className="inbox-messages__body__chat_comment_sender">
                    <Avatar creatorImg={avatarImage} className='avatar-small'/>
                </div>
                <div className="inbox-messages__body__chat_comment_message">
                    <p className="inbox-messages__body__chat_comment_message_text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magni.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe harum vitae exercitationem accusantium minus, soluta totam neque nemo. Voluptates, maxime.
                    </p>
                    <div className='inbox-messages__body__chat_comment_date'>13.04.2020</div>
                </div>
            </div>
            <div className="inbox-messages__body__chat_comment">
                <div className="inbox-messages__body__chat_comment_sender">
                    <Avatar creatorImg={avatarImage} className='avatar-small'/>
                </div>
                <div className="inbox-messages__body__chat_comment_message">
                    <p className="inbox-messages__body__chat_comment_message_text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magni.
                    </p>
                    <div className='inbox-messages__body__chat_comment_date'>13.04.2020</div>
                </div>
            </div>
            <div className="inbox-messages__body__chat_comment reverse-chat">
                <div className="inbox-messages__body__chat_comment_sender">
                    <Avatar creatorImg={avatarImage} className='avatar-small'/>
                </div>
                <div className="inbox-messages__body__chat_comment_message">
                    <p className="inbox-messages__body__chat_comment_message_text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magni.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe harum vitae exercitationem accusantium minus, soluta totam neque nemo. Voluptates, maxime.
                    </p>
                    <div className='inbox-messages__body__chat_comment_date'>13.04.2020</div>
                </div>
            </div>
            <div className="inbox-messages__body__chat_comment reverse-chat">
                <div className="inbox-messages__body__chat_comment_sender">
                    <Avatar creatorImg={avatarImage} className='avatar-small'/>
                </div>
                <div className="inbox-messages__body__chat_comment_message">
                    <p className="inbox-messages__body__chat_comment_message_text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magni.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe harum vitae exercitationem accusantium minus, soluta totam neque nemo. Voluptates, maxime.
                    </p>
                    <div className='inbox-messages__body__chat_comment_date'>13.04.2020</div>
                </div>
            </div>
            <div className="inbox-messages__body__chat_comment reverse-chat">
                <div className="inbox-messages__body__chat_comment_sender">
                    <Avatar creatorImg={avatarImage} className='avatar-small'/>
                </div>
                <div className="inbox-messages__body__chat_comment_message">
                    <p className="inbox-messages__body__chat_comment_message_text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magni.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe harum vitae exercitationem accusantium minus, soluta totam neque nemo. Voluptates, maxime.
                    </p>
                    <div className='inbox-messages__body__chat_comment_date'>13.04.2020</div>
                </div>
            </div>
            <div className="inbox-messages__body__chat_comment">
                <div className="inbox-messages__body__chat_comment_sender">
                    <Avatar creatorImg={avatarImage} className='avatar-small'/>
                </div>
                <div className="inbox-messages__body__chat_comment_message">
                    <p className="inbox-messages__body__chat_comment_message_text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magni.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe harum vitae exercitationem accusantium minus, soluta totam neque nemo. Voluptates, maxime.
                    </p>
                    <div className='inbox-messages__body__chat_comment_date'>13.04.2020</div>
                </div>
            </div>
            <div className="inbox-messages__body__chat_comment reverse-chat">
                <div className="inbox-messages__body__chat_comment_sender">
                    <Avatar creatorImg={avatarImage} className='avatar-small'/>
                </div>
                <div className="inbox-messages__body__chat_comment_message">
                    <p className="inbox-messages__body__chat_comment_message_text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, magni.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe harum vitae exercitationem accusantium minus, soluta totam neque nemo. Voluptates, maxime.
                    </p>
                    <div className='inbox-messages__body__chat_comment_date'>13.04.2020</div>
                </div>
            </div>
        </div>
    )
}

export default InboxChat
