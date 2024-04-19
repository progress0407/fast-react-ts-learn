import React from 'react'
import { Menu } from './model/Resturant';

// type의 상속은 아래처럼 `=` 과 `부모 타입 &` 으로 표기한다
type OwnProps = Menu & {
    showBestMenuName(name: string): string
}

// 특정 타입의 상속을 뺄 수 있다
// interface OwnProps extends Omit<Menu, 'price>{ ... }

const BestMenu:React.FC<OwnProps> = ({name, category, price, showBestMenuName}) => {
  return (
    <div>{name}</div>
  )
}

export default BestMenu