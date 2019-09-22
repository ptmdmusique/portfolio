import React from 'react'

const APIModel = (props) => {
  return (
    <div>
      <div className="flex h-12 w-64 border-solid border-2 rounded justify-center align-middle mb-4 bg-gray-100 ">
        <span className="inline-flex w-3/4 justify-center items-center select-all\
          border-r-2 border-solid">
          {"www.duc.com" + (props.endpoint || "/name")}
        </span>

        <span className="inline-flex w-1/4 justify-center items-center\
          bg-blue-500 hover:bg-blue-700 select-none text-white font-bold font-PixelArt text-xs">
          Send
        </span>
      </div>

      <style jsx>{`

      `}</style>
    </div>
  )
}

export default APIModel
