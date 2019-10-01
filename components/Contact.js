import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HoverAnimation from 'assets/animations/HoverAnimation';

const Contact = () => {
  const buttonCN = "btn text-xl md:text-2xl lg:text-3xl 2k:text-5xl m-2 w-10 h-10 md:w-12 md:h-12 2k:w-24 2k:h-24";
  // const buttonCN = "text-2xl md:text-4xl lg:text-6xl mx-2 md:mx-4 "
  // const iconCN = "text-white hover:text-green-400 scale ";
  const iconCN = "self-center ";

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
    <div className="fixed bottom-0 right-0 bg-black \
                    rounded-tl-lg pl-2 md:pl-4 opacity-75 z-50 \
                    flex py-1 ">

      <a className={buttonCN}
        href="https://www.facebook.com/ptmdmusique"
        target="_blank"
        rel="noopener noreferrer">
        <i className={"fab fa-facebook-f " + iconCN}></i>
      </a>
      <a className={buttonCN}
        href="https://github.com/ptmdmusique"
        target="_blank"
        rel="noopener noreferrer">
        <i className={"fab fa-github " + iconCN}></i>
      </a>
      <button className={buttonCN}
        onClick={() => copyToClipboard("ptmdmusic@gmail.com")}>
        <i className={"fas fa-envelope " + iconCN}></i>
      </button>
      <a className={buttonCN}
        href="https://www.linkedin.com/in/duc-phan-576846132/ "
        target="_blank"
        rel="noopener noreferrer">
        <i className={"fab fa-linkedin-in " + iconCN}></i>
      </a>

      <ToastContainer />
      <HoverAnimation
        borderInOutWidth={1}
        scaleFrom={1}
        scaleTo={1.2}
      />

      <style jsx >{`
        .btn {
          display: inline-flex;
          
          position: relative;

          border-radius: 30%;

          background: #f1f1f1;
          box-shadow:-5px 5px 15px -5px #f1f1f1; 
          
          overflow: hidden;
          position: relative;
          
          justify-content: center;
          align-content: center;

          transition: 0.15s linear;
        }

        .btn i {
          transition: 0.15s linear;
        }
        .btn:nth-child(1) i {
          color:#3b5998;
        }
        
        .btn:nth-child(2) i {
          color:#2e2e2e;
        }
        
        .btn:nth-child(3) i {
          color:#db4437;
        }
        
        .btn:nth-child(4) i {
          color:#15AABF;
        }

        .btn:hover {
          transform: scale(1.1);
        }

        .btn:hover i {
          transform: scale(1.2);
          color: #fff;
        }

        .btn:nth-child(1)::before {
          background: #3b5998;
        }
        
        .btn:nth-child(2)::before {
          background: #2e2e2e;
        }
        
        .btn:nth-child(3)::before {
          background: #db4437;
        }
        
        .btn:nth-child(4)::before {
          background: #15AABF;
        }

        .btn:before {
          content:"";
          position:absolute;
          width:120%;
          height:120%;
          transform: rotate(45deg);
          left: -110%;
          top:90%;
        }
        .btn:hover::before {
          animation: aaa 0.3s 1;
          top: -10%;
          left: -10%;
        }
        
        @keyframes aaa {
          0% {
            left: -110%;
            top:90%;
          }
          50% {
            left:10%;
            top: -30%;
          }
          100% {
            left: -10%;
            top: -10%;
          }
        }
      `}</style>
    </div>
  )
}

export default Contact
