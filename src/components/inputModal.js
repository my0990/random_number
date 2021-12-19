import React, {useState} from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const Container = styled.div`
    display: flex;
    width: 700px;
    height: 400px;
    background: rgb(146, 150, 138);
    position: absolute;
    bottom: 150px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 20px;
    border: 15px solid black;
    justify-content: center;
    align-items: center;
    
`

const Input = styled.input`
    width: 100px;
    height:50px;
    vertical-align: middle;
`

const buttonStyle = {
    bottom: '20px',
    right: '20px',
    position: 'absolute',
    width: '70px',
    height: '70px',
    margin: '0',
    padding: '0',
    fontSize: '20px'
}


function InputModal(props) {
    const [isStarted,setIsStarted] = useState(false);
    const [lastNumber,setLastNumber] = useState(0);
    const handleClicked = () => {
        setIsStarted(!isStarted);
        props.getNumber(lastNumber);
    };
    
    if(isStarted === false){
        return(
            <Container>
                <div>
                    <h1 style={{marginBottom: '30px'}}>마지막 번호가 몇 번인가요?</h1>
                    <Input value={lastNumber} onChange={(e)=>{setLastNumber(e.target.value)}}/>
                    <label style={{fontSize: "2.5em" ,verticalAlign: "middle"}}>번</label>
                </div>
                <Button variant="danger" style={buttonStyle} onClick={()=>{handleClicked()}}>입력</Button>
            </Container>
        ) 
    } else {
        return (
            <Button variant="outline-danger" style={buttonStyle} onClick={()=>{handleClicked()}}>다시</Button>
        )
    }
        
    

}

export default InputModal;