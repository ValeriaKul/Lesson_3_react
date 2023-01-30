import React from 'react'
import './style.modules.css'

export default function AddProduct({createProduct}) {

    const onSubmit = (e) => {
    e.preventDefault();
    const {title, price} = e.target;
    createProduct(title.value, +price.value);
    title.value = '';
    price.value = '';
  }
  return (
    <>
    <form 
        className='formAdd'
        onSubmit={onSubmit} >
            <input 
                type="text" 
                placeholder='Title' 
                name='title'/>
            <input 
                type="number" 
                placeholder='Price' 
                name='price'/>
            <button
                className='btnAdd'>
                Add
            </button>
    </form>
    </>
  )
}
