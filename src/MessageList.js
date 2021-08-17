const MessageList = (props) => {
    return (
        <div className="messageList" >
            { props.statMessageArray.map((message, i) =>
                <div key={i} >
                    <div className='autorMessage'>
                        { message.autor }
                    </div>
                    <div className='textMessage'>
                        { message.text } 
                    </div>
                    < div className = 'autorAnswer' > 
                        { message.autorAnswer } 
                    </div> 
                    <div className = 'textAnswer' > 
                        { message.textAnswer } 
                    </div>
                </div>
                )
            }
        </div>
    )
};

export default MessageList;