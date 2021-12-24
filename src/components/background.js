import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import img from '../cannon.png';
import InputModal from './inputModal';
import {useTransition, animated, config } from 'react-spring';
import cannon from './cannon.mp3';

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
const AnimatedBall = styled(animated.div)`
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    bottom: 125px;
    left: 44%;
    transform: translateX(-65%);
    background: rgb(45, 194, 84);
    font-size: 10em;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Background(){
    const [lastNumber,setLastNumber] = useState(0);
    const [numArr,setNumArr] = useState([]);
    const [isFirstClicked,setIsFirstClicked] = useState(false);
    const [pickedNumber,setPickedNumber] = useState([]);
    const getNumber = (number) => {
        let tempArr = [];
        for(let i=0;i<number;i++){
            tempArr.push(i);
        }
        setLastNumber(number);
        setNumArr(tempArr);
        setIsFirstClicked(false);
    };
    const [isStarted,setIsStarted] = useState(false);
    var audio = new Audio(cannon);
    const handleClick = () => {
        setIsFirstClicked(true);
        setToggle(toggle + 1);
        let randomNumber = Math.random()*lastNumber;
        let tempArr = numArr;
        let popped = tempArr.splice(randomNumber,1);
        setPickedNumber(popped);
        setNumArr(tempArr);
        if(lastNumber!==0){
        setLastNumber(lastNumber - 1);
        audio.play();
        } else {
            alert('번호를 모두 뽑았습니다.')
            setIsFirstClicked(false);
            setIsStarted(false);
        }
    };
    const [toggle,setToggle] = useState(true);
    const transition = useTransition(toggle, {
        from: {y: 50, width: 100, x: 0, height: 100},
        enter: {y: -300, width:400, x: -130, height: 400},
        config: config.wobbly
      })

    
    return(
    <Wrapper>
        <Grass2 />
        <Grass1 />
        {isFirstClicked ? transition((style,item)=>
        item ? <AnimatedBall style={style}>{pickedNumber.length ? parseInt(pickedNumber) + 1 : ''}</AnimatedBall>: ''
        ) : <CannonBall />}
        
        <Cannon />
        <Button onClick={()=>{handleClick()}}/>
        <InputModal getNumber={getNumber} setIsStarted={setIsStarted} isStarted={isStarted}/>
        
        
    </Wrapper>
    )
}

