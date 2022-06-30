import React, { useState ,useEffect } from 'react';
import './Checklist.css'

const getLocalItem =()=>{
    let list = localStorage.getItem('lists')
    console.log(list);
    if(list){
        return JSON.parse(list)
    }else{
        return [];
    }
}
function CheckList() {
    const [text, setText] = useState(" ")
    const [task, setTask] = useState(getLocalItem())


    const changeText = (e) => {
        // console.log(e);
        setText(e.target.value)
    }
    const submitHandler = (e) => {
        console.log("submited");
        e.preventDefault();
        setTask([...task, text])

        setText("")
    }
    const removeTask =(a)=>{
        const finalData = task.filter((curEle,index)=>{
            return index !== a;
        })

        setTask(finalData)
    }

    useEffect(()=>{
        localStorage.setItem("lists",JSON.stringify(task))
    },[task])
    return <>
        <div className="container">
            <div className="row justify-content-center align-items-center main-row">
                <div className="col shadow main-col bg-white">
                    <div className="row bg-light text-success">
                        <div className="col  p-4">
                            <h4 className='text-center fs-1'>CheckList</h4>
                        </div>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className="row justify-content-between text-white p-3">
                            <div className="form-group flex-fill mb-2 col-9">
                                <input id="todo-input" type="text" required className="form-control" value={text} onChange={changeText} />
                            </div>
                            <button type="submit" className="btn btn-success mb-2 ml-2 badge fs-6 col-3">Add List</button>
                        </div>
                    </form>

                    <div className="container">
                        <div className="row">
                            {
                                task.map((value,index) => {
                                    
                                    return (
                                        <>
                                            <div className="col-6 my-2 bg-success text-white badge fs-5 text-center " key={index}>{value}</div>
                                            <div className="col-6 my-2 "><button className='btn btn-danger' onClick={()=>removeTask(index)}>X</button></div>
                                        </>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default CheckList;