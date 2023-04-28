import React, { useEffect, useRef } from 'react'

const RedirectForm = ({TermUrl, MD, JWT, formURL}) => {
    const formRef = useRef()

    const handleChange = ()=> {

    }

    useEffect(()=>{
        console.log(formRef.current)
        formRef?.current?.submit()

    },[])

  return (
    <div>
       <form ref={formRef} action={formURL} method="post">
        <input type="text" hidden name="TermUrl" value={TermUrl} onChange={handleChange} />
        <input type="text" hidden name='MD' value={MD} onChange={handleChange}/>
        <input type="text" hidden name='JWT' value={JWT} onChange={handleChange}/>
        </form> 
    </div>
  )
}

export default RedirectForm