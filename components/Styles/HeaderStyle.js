import MediaQuery from 'react-responsive';

const SectionStyle = (props) => {
  return (
    <style jsx="true" >{` 
      .headerContainer {
        width: 100%;
        background-color: rgba(0,0,0,0.6);

        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
        -moz-box-sizing: border-box;    /* Firefox, other Gecko */
        box-sizing: border-box;         /* Opera/IE 8+ */
      }

      @font-face {
        font-family: "Arkhip" 
        src: url("../../assets/fonts/Potra.ttf")
      }
      .headerText {
        align-text: center;
        font-family: "Arkhip"
      }
    `}</style>
  )
}

export default SectionStyle
