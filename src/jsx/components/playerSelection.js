import React from 'react'
const PlayerSelection = ({ playWithComputer, setComputerPlay }) => (
    <p>
        <span className="checkbox">  
            <label className="radio-inline">
                <input type="radio" name="cplay" defaultChecked="{playWithComputer}"
                    onClick={(e) => {setComputerPlay(e, true)}}
                    value="yes"/>
                Play with computer</label>
            <label className="radio-inline">
                <input type="radio" name="cplay"
                    onClick={(e) => {setComputerPlay(e, false)}}
                    value="no"/>
                Two player</label>
       </span>
   </p>
)

export default PlayerSelection