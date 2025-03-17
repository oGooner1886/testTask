import React from 'react'
import style from "./ErrorCard.module.css"
import warning from "../../../assets/alert-triangle.svg"
const ErrorCard = () => {
  return (
    <div className={style.errorCard}>
        <img src={warning} alt="warning" />
        <div className={style.description}>Ошибка: не удалось загрузить информацию</div>
      
    </div>
  )
}

export default ErrorCard
