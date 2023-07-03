import React from 'react'

export default function OperationButton({label, action}) {
  return (
    <button 
        className={'border-sky-400 border-solid border rounded p-2 mb-1 font-mono font-semibold hover:italic'}
        onClick={action}
    >{label}</button>
  )
}
