import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HoverAnimation from 'assets/animations/HoverAnimation';

const Contact = () => {
  const buttonCN = "text-2xl md:text-4xl lg:text-6xl mx-2 md:mx-4 "
  const iconCN = "text-white hover:text-green-400 scale ";

  const notify = (myStr) => toast("🦄 Copied \"" + myStr + "\" to clipboard!");

  const copyToClipboard = (myStr) => {
    navigator.clipboard.writeText(myStr).then(function () {
      notify(myStr);
      console.log("Clipboard--Copied : " + myStr + " to clipboard");
    }, function () {
      /* clipboard write failed */
      console.log("Clipboard--Fail to copy to clipboard : " + myStr);
    });
  }

  return (
    <div className="absolute bottom-0 right-0 bg-black rounded-tl-lg pl-2 md:pl-4 opacity-75 z-50 ">

      <a className={buttonCN}
        href="https://www.facebook.com/ptmdmusique"
        target="_blank"
        rel="noopener noreferrer">
        <i className={"fab fa-facebook-square " + iconCN}></i>
      </a>
      <a className={buttonCN}
        href="https://github.com/ptmdmusique"
        target="_blank"
        rel="noopener noreferrer">
        <i className={"fab fa-github-square " + iconCN}></i>
      </a>
      <button className={buttonCN}
        onClick={() => copyToClipboard("ptmdmusic@gmail.com")}>
        <i className={"fas fa-envelope-square " + iconCN}></i>
      </button>
      <a className={buttonCN}
        href="https://www.linkedin.com/in/duc-phan-576846132/ "
        target="_blank"
        rel="noopener noreferrer">
        <i className={"fab fa-linkedin " + iconCN}></i>
      </a>

      <ToastContainer />
      <HoverAnimation
        borderInOutWidth={1}
        scaleFrom={1}
        scaleTo={1.2}
      />
    </div>
  )
}

export default Contact
