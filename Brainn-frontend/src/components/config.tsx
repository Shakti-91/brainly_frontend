import type { ReactElement } from "react";

export interface ButtonInterface{
    text:string,
    icon?:ReactElement,
    onClick?:()=>void,
    variant:'primary'|'secondry'|'signUp',
    size:'sm'|'md'|'lg',

}

export interface CardInterface{
    type:string,
    title:string
    link:string
}

export interface ModalInterface{
    open:boolean,
    onClose:()=>void
}