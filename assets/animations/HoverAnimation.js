import React from 'react'

const Animation = (props) => {
  return (
    <style jsx global>{`
      .scale {
        transform: scale(${props.scaleFrom || "0"});
        transition all ${props.scaleTime || "0.3"}s;
      }

      .scale:hover {
        transform: scale(${props.scaleTo || "1"});
      }

      .topBottomBordersOut::before, .topBottomBordersOut::after {
        position: absolute;
        left: 0;
        width: 100%;
        height: ${props.borderInOutWidth || "2"}px;
        background: #FFF;
        content: "";
        
        opacity: 0;
        transition: all ${props.borderInOutTime || "0.3"}s;        
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
        background: ${props.borderInOutAnimColor || "#71ff2f"};
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
      
    `}</style>
  )
}

export default Animation
