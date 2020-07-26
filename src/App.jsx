import React, {useState, useRef, useEffect} from 'react'

const App = () => {
    const [result, setresult] = useState("")
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    })

    const handlClick = (e) => {
        setresult(result.concat(e.target.name))
    }
    const backspace = () => {
        setresult(result.slice(0, -1))
    }
    const clear = () => {
        setresult("")
    }
    const calculate = () => {
        try {
            setresult(eval(result).toString())
        }
        catch(error) {
            setresult("Error")
        }
    }

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])

    return(
        <div className="calc-app">
            <form>
                <input type="text" value={result} ref={inputRef} />
            </form>
            <div className="keypad" >
                <button id="clear" onClick={clear} >Clear</button>
                <button id="backspace" onClick={backspace} >C</button>
                <button name="+" onClick={handlClick}>+</button>
                <button name="7" onClick={handlClick}>7</button>
                <button name="8" onClick={handlClick}>8</button>
                <button name="9" onClick={handlClick}>9</button>
                <button name="-" onClick={handlClick}>-</button>
                <button name="4" onClick={handlClick}>4</button>
                <button name="5" onClick={handlClick}>5</button>
                <button name="6" onClick={handlClick}>6</button>
                <button name="*" onClick={handlClick}>*</button>
                <button name="1" onClick={handlClick}>1</button>
                <button name="2" onClick={handlClick}>2</button>
                <button name="3" onClick={handlClick}>3</button>
                <button name="/" onClick={handlClick}>/</button>
                <button name="0" onClick={handlClick}>0</button>
                <button name="." onClick={handlClick}>.</button>
                <button id="result" onClick={calculate} >Result</button>
            </div>
        </div>
    )
}
export default App