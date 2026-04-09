import React, { useState } from 'react'
import UseEffectMouseDetect from './UseEffectMouseDetect'

function MouseTrackerParent() {

    const [showComponent, setShowComponent] = useState(true)

    const toggleComponenet = ()=>{
        setShowComponent((prev) =>!prev)
    }

  return (
    <div>
        <button onClick={toggleComponenet}>
            {showComponent ? 'Unmount Tracker ': 'Mount Track'}
        </button>

        {showComponent && <UseEffectMouseDetect/>}
    </div>
  )
}

export default MouseTrackerParent