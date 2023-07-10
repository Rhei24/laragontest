import React from 'react'
import TextInput from './TextInput'

export default function SearchBar() {
  return (

<div className="flex text-gray-500">   
    <div class="relative space-x-1">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
        </div>
        <input className="w-full p-4 pl-10 text-sm rounded-lg" placeholder="Search..."/>
    </div>
</div>

  )
}
