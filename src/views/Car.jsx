import { useState } from "react"
import { PeopleRounded, PercentRounded, PriceChangeRounded, RadioButtonUncheckedRounded, TaskAltRounded } from "@mui/icons-material"


export default function Car() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [interest, setInterest] = useState('')
  const [percentDown, setPercentDown] = useState(15)
  const [months, setMonths] = useState(24)
  const [monthlyPayment, setMonthlyPayment] = useState('0.00')

  const handleCalculate = () => {
    /*
      คำนวณงวดรถ เริ่มจาก
      คำนวณยอดจัดไฟแนนซ์: ราคารถ - เงินดาวน์
      คำนวณดอกเบี้ย: ยอดจัดไฟแนนซ์ x อัตราดอกเบี้ยรายปี x จำนวนปีที่ผ่อน
      คำนวณยอดรวมทั้งหมดที่ต้องผ่อน: ยอดจัดไฟแนนซ์ + ดอกเบี้ยทั้งหมด
      คำนวณค่างวดต่อเดือน: ยอดรวมทั้งหมดที่ต้องผ่อน / จำนวนเดือนที่ผ่อน
    */
    if (price && interest && percentDown && months) {
      const downPayment = (percentDown / 100) * parseFloat(price)
      const financedAmount = parseFloat(price) - downPayment
      const totalInterest = financedAmount * (parseFloat(interest) / 100) * (months / 12)
      const totalPayment = financedAmount + totalInterest
      const monthly = totalPayment / months
      setMonthlyPayment(monthly.toFixed(2))
    }
  }

  const handleReset = () => {
    setName('')
    setPrice('')
    setInterest('')
    setPercentDown(15)
    setMonths(24)
    setMonthlyPayment('0.00')
  }

  return (
    <div className='flex flex-col items-center h-screen w-full text-lg'>
      <div className='flex justify-center items-center gap-4 py-8 my-auto'>
        <div className='flex flex-col items-center p-4 border border-gray-300 shadow-md drop-shadow-xl min-w-[500px] rounded-2xl bg-white [&_input]:placeholder:text-base'>
          <div className='text-3xl font-bold'>
            Car Installment Calculator
          </div>
          <div className='text-base text-gray-500 mb-4'>
            คำนวณ Car Installment
          </div>
          <img
            src='/car.png'
            alt='Car Installment Calculator'
            width={150}
          />
          <div className='w-full mt-4 flex flex-col gap-2'>
            <div className="flex gap-2">
              <PeopleRounded />
              <label htmlFor='name' className='text-base text-gray-500'>
                ชื่อผู้คำนวณ
              </label>
            </div>
            <input
              type='text'
              id='name'
              name='name'
              placeholder="กรอกชื่อผู้คำนวณ"
              className='px-3 py-2 rounded-md border border-gray-300'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='w-full mt-4 flex flex-col gap-2'>
            <div className="flex gap-2">
              <PriceChangeRounded />
              <label htmlFor='price' className='text-base text-gray-500'>
                ราคารถ (บาท)
              </label>
            </div>
            <input
              type='number'
              id='price'
              name='price'
              placeholder="กรอกราคารถ"
              className="px-3 py-2 rounded-md border border-gray-300"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className='w-full mt-4 flex flex-col gap-2'>
            <div className="flex gap-2">
              <PercentRounded />
              <label htmlFor='interest' className='text-base text-gray-500'>
                ดอกเบี้ยต่อปี (%)
              </label>
            </div>
            <input
              type='number'
              id='interest'
              name='interest'
              placeholder="กรอกอัตราดอกเบี้ย"
              className='px-3 py-2 rounded-md border border-gray-300'
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
            />
          </div>
          <div className='w-full mt-4 flex flex-col gap-2'>
            <span style={{ fontSize: "16px" }}>เงินดาวน์ (%)</span>
            <div className='flex gap-5'>
              {[15, 20, 25, 30, 35].map((v) => {
                return (
                  <div
                    key={v}
                    className='flex gap-2 text-base **:cursor-pointer'
                    onClick={() => setPercentDown(v)}
                  >
                    {percentDown === v ?
                      (
                        <TaskAltRounded
                          className="text-blue-600"
                        />
                      ) : (
                        <RadioButtonUncheckedRounded
                          className="text-gray-300"
                        />
                      )
                    }
                    <label htmlFor={`p${v}`}>
                      {v} %
                    </label>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="w-full mt-4 flex flex-col gap-2">
            <label htmlFor='months' className='text-base text-gray-500'>
              จำนวนเดือนที่ผ่อน
            </label>
            <select
              id='months'
              name='months'
              className='px-3 py-2 rounded-md border border-gray-300 bg-white'
              value={months}
              onChange={(e) => setMonths(e.target.value)}
            >
              {[24, 36, 48, 60, 72, 84].map((v) => {
                return (
                  <option key={v} value={v}>{v} เดือน</option>
                )
              })}
            </select>
          </div>
          <div className='flex flex-col w-full mt-6 gap-3'>
            <button
              onClick={handleCalculate}
              className='px-4 py-2 w-full bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300 cursor-pointer'
            >
              คำนวณ
            </button>
            <button
              onClick={handleReset}
              className='px-4 py-2 w-full bg-gray-300 text-black rounded-md font-semibold hover:bg-gray-400 transition-colors duration-300 cursor-pointer'
            >
              ล้างข้อมูล
            </button>
          </div>
          <div className='text-center mt-4 font-medium'>
            ผ่อนชำระต่อเดือน: {monthlyPayment} บาท
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
