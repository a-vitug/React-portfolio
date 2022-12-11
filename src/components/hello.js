import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

function Hello() {

    const [isLoop, setIsLoop] = useState(0);
    const [isRepeat, setIsRepeat] = useState(false);
    const [texts, setTexts] = useState('');
    const [num, setNum] = useState(300 - Math.random() * 100);
    const hello = [ 'Hello', 'Kamusta', 'Bonjour', 'こんにちは', '안녕하세요'];
    const stop = 2000;

    useEffect(() => {
        let timer = setInterval(() => {
            time();
        }, num)
        
        return () => { clearInterval(timer) };
    }, [texts])

    const time = () => {
        let i = isLoop % hello.length;
        let isTexts = hello[i];
        let updateText = isRepeat ? isTexts.substring(0, texts.length - 1) :  isTexts.substring(0, texts.length + 1);
        
        setTexts(updateText);

        if (isRepeat) {
            setNum(prevNum => prevNum / 2)
        }

        if (!isRepeat && updateText === isTexts) {
            setIsRepeat(true);
            setNum(stop);
        } else if (isRepeat && updateText === '') {
            setIsRepeat(false);
            setIsLoop(isLoop + 1);
            setNum(600);
        }
    }

    return (
        <>
            <Box className='greet' height='85vh' p={30} display='flex' justifyContent='center' textAlign='center' >
                <div className='hello'>
                    <span> {texts} </span>
                </div>
            </Box>
        
        </>
    )

}

export default Hello;