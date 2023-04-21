import React from 'react'
import img from '../assets/react.svg'

const obj = [
    {
        id: 'hello 1',
        title: "title here 1",
        img: img
    },
    {
        id: 'hello 2',
        title: "title here 2",
        img: img
    },
    {
        id: 'hello 3',
        title: "title here 3 ",
        img: img
    },
    {
        id: 'hello 4',
        title: "title here 4 ",
        img: img
    }
]

const ZigZag = () => {
    return (

        <div>
            {
                obj.map((item, index) => (
                    <div className='item-div' key={item.id} >
                        <div>
                            <img src={item.img} alt="" />
                        </div>
                        <div>{item.title}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default ZigZag