import { Button } from '@material-ui/core';
import React from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/popup';
import OrderPopup from '../components/popups/OrderPopup';

const checkpop = () => {

    const [open,setOpen]=useRecoilState(modalState)

    const  handlePop=()=>{
        setOpen(true)
    }

  return (
    <div>
      <Button variant='contained' color='primary' onClick={handlePop} >
view order
      </Button>
      <OrderPopup/>
    </div>
  );
}

export default checkpop;
