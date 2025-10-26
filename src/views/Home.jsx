import React from 'react'
import '../App.css'

export default function Home() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: "100%",
                fontSize: "24px",
                flexDirection: "column",
                backgroundColor: "#f0f0f0"
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                }}
            >
                <img
                    src='/logo.png'
                    alt='Logo'
                    width={96}
                />
                <span
                    style={{
                        fontSize: "3rem",
                        fontWeight: "bold",
                        marginTop: "16px"
                    }}
                >
                    เครื่องมือคำนวณออนไลน์
                </span>
                <span
                    style={{
                        fontSize: "1rem"
                    }}
                >
                    เลือกการคำนวณที่คุณต้องการจากรายการด้านล่าง
                </span>
            </div>
            <div
                style={{
                    display: "flex",
                    gap: "16px"
                }}
            >
                <a
                    href='/bmi'
                    className='card-link'
                >
                    <img
                        src='/bmi.png'
                        alt='BMI Calculator'
                        width={150}
                    />
                    <div
                        style={{
                            fontWeight: "semi-bold",
                        }}
                    >
                        BMI (ดัชนีมวลกาย)
                    </div>
                    <div
                        style={{
                            fontSize: "14px",
                            fontWeight: "normal",
                            color: "#555",
                        }}
                    >
                        คำนวณว่าน้ำหนักของคุณเหมาะกสมกับส่วนสูงหรือไม่
                    </div>
                </a>
                <a
                    href='/bmr'
                    className='card-link'
                >
                    <img
                        src='/bmr.png'
                        alt='BMR Calculator'
                        width={150}
                    />
                    <div
                        style={{
                            fontWeight: "semi-bold",
                        }}
                    >
                        BMR (อัตราการเผาผลาญ)
                    </div>
                    <div
                        style={{
                            fontSize: "14px",
                            fontWeight: "normal",
                            color: "#555",
                        }}
                    >
                        คำนวณพลังงานขั้นต่ำที่ร่างกายต้องการในแต่ละวัน
                    </div>
                </a>
                <a
                    href='/carinstallment'
                    className='card-link'
                >
                    <img
                        src='/car.png'
                        alt='CAR Installment Calculator'
                        width={150}
                    />
                    <div
                        style={{
                            fontWeight: "semi-bold",
                        }}
                    >
                        การผ่อนชำระรถยนต์
                    </div>
                    <div
                        style={{
                            fontSize: "14px",
                            fontWeight: "normal",
                            color: "#555",
                        }}
                    >
                        คำนวณยอดผ่อนต่อเดือนและดอกเบี้ยรถยนต์
                    </div>
                </a>
            </div>
        </div>
    )
}
