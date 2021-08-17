const InputMessageComponent = (props) => {

    return (
        <input
            className="inputMessage"
            value={props.value}
            onChange={(e) => props.funcSetInputMessage(e.target.value)}
            onKeyDown={({ key }) => {
                if (key === 'Enter') {
                        props.funcOnSendMessage();
                    }
                }
            }
        />
    );
}

export default InputMessageComponent;