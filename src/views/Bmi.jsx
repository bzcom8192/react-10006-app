import { ScaleRounded, StraightenRounded } from '@mui/icons-material'
import React, { useState } from 'react'

export default function Bmi() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [result, setResult] = useState('0.00')

  const handleCalculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100
      const bmi = weight / (heightInMeters * heightInMeters)
      setResult(bmi.toFixed(2))
    }
  }

  const handleReset = () => {
    setWeight('')
    setHeight('')
    setResult('0.00')
  }


  return (
    <div className='flex flex-col justify-center items-center h-screen w-full text-lg'>
      <div className='flex justify-center items-center gap-4'>
        <div className='flex flex-col items-center p-4 border border-gray-300 shadow-md drop-shadow-xl min-w-[400px] rounded-2xl bg-white [&_input]:placeholder:text-base'>
          <div className='text-3xl font-bold'>
            BMI Calculator
          </div>
          <div className='text-base text-gray-500 mb-4'>
            คำนวณ BMI
          </div>
          <img
            src='/bmi.png'
            alt='BMI Calculator'
            width={64}
          />
          <div className='w-full mt-4 flex flex-col gap-2'>
            <div className="flex gap-2">
              <ScaleRounded />
              <label htmlFor='weight' className='text-base text-gray-500'>
                ป้อนน้ำหนัก (กิโลกรัม)
              </label>
            </div>
            <input
              type='number'
              id='weight'
              name='weight'
              placeholder='เช่น 65'
              className='px-3 py-2 rounded-md border border-gray-300'
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className='w-full mt-4 flex flex-col gap-2'>
            <div className="flex gap-2">
              <StraightenRounded />
              <label htmlFor='height' className='text-base text-gray-500'>
                ป้อนส่วนสูง (เซนติเมตร)
              </label>
            </div>
            <input
              type='number'
              id='height'
              name='height'
              placeholder='เช่น 170'
              className='px-3 py-2 rounded-md border border-gray-300'
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <button
            onClick={handleCalculateBMI}
            className='mt-6 px-4 py-2 w-full bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300 cursor-pointer'
          >
            คำนวณ BMI
          </button>
          <button
            onClick={handleReset}
            className='mt-2 px-4 py-2 w-full bg-gray-300 text-black rounded-md font-semibold hover:bg-gray-400 transition-colors duration-300 cursor-pointer'
          >
            รีเซ็ต
          </button>
          <div className='text-center mt-4 font-medium'>
            ค่า BMI ที่คำนวณได้: <span className='text-blue-600'>{result}</span>
          </div>
          <a
            href='/'
            className='mt-2 px-4 py-2 w-full text-center bg-gray-300 text-black rounded-md hover:bg-gray-400 transition-colors duration-300 cursor-pointer'
          >
            กลับหน้าหลัก
          </a>
        </div>
      </div>
    </div>
  )
}
