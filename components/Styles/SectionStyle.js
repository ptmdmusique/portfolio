import MediaQuery from 'react-responsive';

const SectionStyle = (props) => {
  return (
    <style jsx="true" >{`
      .sectionContainer {
        height: 1100px;
        width: 100%;
        background-color: rgba(0,0,0,0.5);
        background-blend-mode: darken;
      }
    `}</style>
  )
}

export default SectionStyle
