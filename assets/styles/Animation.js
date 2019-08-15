import React from 'react'

const Animation = () => {
  return (
    <style jsx global>{`
      .topBottomBordersOut::before, .topBottomBordersOut::after {
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        background: #FFF;
        content: "";
        
        opacity: 0;
        transition: all 0.3s;        
      }

      .topBottomBordersOut::before {
        top: 0px;   
        transform: translateY(10px);
      }

      .topBottomBordersOut::after {
        bottom: 0px;   
        transform: translateY(-10px);
      }

      
      .topBottomBordersOut:hover:after, .topBottomBordersOut:hover:before {
        background: #71ff2f;
        opacity: 1;
      }

      .topBottomBordersOut:hover:after {
        transform: translateY(-20px);
      }

      .topBottomBordersOut:hover:before {
        transform: translateY(20px);
      }

      .ripple {
        position: relative;
        overflow: hidden;
        transform: translate3d(0, 0, 0);
      }
      
      .ripple::after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
        background-repeat: no-repeat;
        background-position: 50%;
        transform: scale(10, 10);
        opacity: 0;
        transition: transform .5s, opacity 1s;
      }
      
      .ripple:active::after {
        transform: scale(0, 0);
        opacity: .3;
        transition: 0s;
      }
    `}</style>
  )
}

export default Animation
