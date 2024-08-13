import React, { useContext, useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import axios from "axios"

export const Content = () => {
    const [data, setData] = useState("")
    const [tasks, setTasks] = useState([])

    const displayTasks = () => {
        if (data == tasks) {
            axios.get("https://revtask-hfenhja8emeyddbs.southindia-01.azurewebsites.net/tasks")
                .then((response) => {
                    setTasks(response.data.data)
                })
                .catch((err) => {
                    console.log("Error occured");

                })
        }
    }


    return (
        <div>
            <Navbar display={displayTasks}></Navbar>
            {tasks.length > 0 ?
                (
                    tasks.map((task) => {
                        return (
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{task.task_name}</h5>
                                    <p className="card-text">{task.description}</p>
                                </div>
                            </div>
                        )
                    })
                )
                :
                <h1>Welcome to home page</h1>}
        </div>
    )
}