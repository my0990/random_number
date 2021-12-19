import React, {useState} from 'react';
import styled from 'styled-components';
import img from '../cannon.png';
import InputModal from './inputModal';

const Wrapper = styled.div`
    width: 1100px;
    height: 100vh;
    background: white;
    margin: 0 auto;
    position: relative;
    background: linear-gradient(blue, white);
`

const Grass1 = styled.div`
    position: absolute;
    background: lightgreen;
    width: 1200px;
    height: 500px;
    bottom: 0;
    right: 0;
    clip-path: ellipse(68% 39% at 98% 100%);
`

const Grass2 = styled.div`
    position: absolute;
    background: green;
    width: 1000px;
    height: 500px;
    bottom: 0;
    left: 0;
    clip-path: ellipse(68% 26% at -1% 100%);
`
const Cannon = styled.div`
    position: absolute;
    width: 400px;
    height: 225px;
    background: url(${img});
    background-size: cover;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
`

const Button = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 100px;
    bottom: 30px;
    left: 50%;
    transform: translateX(-65%);
    cursor: pointer;
    opacity: 1;
`

const CannonBall = styled.div`
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 100px;
    bottom: 125px;
    left: 50%;
    transform: translateX(-65%);
    background: rgb(45, 194, 84)
`
const AnimatedBall = styled.div`
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 100px;
    bottom: 125px;
    left: 50%;
    transform: translateX(-65%);
    background: rgb(45, 194, 84);
`

export default function Background(){
    const [lastNumber,setLastNumber] = useState(0);
    const [isFirstClicked,setIsFirstClicked] = useState(false);
    const getNumber = (number) => {
        setLastNumber(number);
    };
    const handleClick = () => {
        setIsFirstClicked(true)
    }
    return(
    <Wrapper>
        <Grass2 />
        <Grass1 />
        {isFirstClicked ? null : <CannonBall />}
        <Cannon />
        <Button onClick={()=>{handleClick()}}/>
        <InputModal getNumber={getNumber}/>
        
    </Wrapper>
    )
}

