import React from 'react'
import CardMenu from '../components/CardMenu'

export default function Home() {
    return (
        <div className='w-full h-screen flex justify-center items-center flex-col gap-8 bg-gray-100'>
            <div className='flex flex-col justify-center items-center'>
                <img
                    src='/logo.png'
                    alt='Logo'
                    width={128}
                />
                <span className='text-4xl font-bold mt-4'>
                    เครื่องมือคำนวณออนไลน์
                </span>
                <span className='text-lg text-gray-600 mt-2'>
                    เลือกการคำนวณที่คุณต้องการจากรายการด้านล่าง
                </span>
            </div>
            <div className='flex gap-4'>
                <CardMenu
                    target='/bmi'
                    imgSrc='/bmi.png'
                    imgAlt='BMI Calculator'
                    title='BMI (ดัชนีมวลกาย)'
                    description='คำนวณว่าน้ำหนักของคุณเหมาะกสมกับส่วนสูงหรือไม่'
                />
                <CardMenu
                    target='/bmr'
                    imgSrc='/bmr.png'
                    imgAlt='BMR Calculator'
                    title='BMR (อัตราการเผาผลาญ)'
                    description='คำนวณพลังงานขั้นต่ำที่ร่างกายต้องการในแต่ละวัน'
                />
                <CardMenu
                    target='/carinstallment'
                    imgSrc='/car.png'
                    imgAlt='CAR Installment Calculator'
                    title='การผ่อนชำระรถยนต์'
                    description='คำนวณยอดผ่อนต่อเดือนและดอกเบี้ยรถยนต์'
                />
            </div>
        </div>
    )
}
