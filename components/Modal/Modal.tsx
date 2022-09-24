import React, { useState } from 'react'
import style from './Modal.module.css'

export default function Modal() {

	const [isOpen, setIsOpen] = useState(true)

	return (
		<>
			{isOpen && 
				<div className={style.container} > 
					<button className={style.close}  onClick={() => setIsOpen(!isOpen) } > Закрыть </button>
					<div className={style.text} >
						fdf 
					</div>
				</div> 
			}
		</>
		
	)
}
