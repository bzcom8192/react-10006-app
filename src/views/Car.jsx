import React from 'react'

export default function Car() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        fontSize: "24px"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          margin: "auto 0"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1rem",
            boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
            minWidth: "600px",
            borderRadius: "16px"
          }}
        >
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "bold"
            }}
          >
            Car Installment Calculator
          </div>
          <div
            style={{
              fontSize: "14px",
              color: "#666",
              marginBottom: "16px"
            }}
          >
            คำนวณ Car Installment
          </div>
          <img
            src='/car.png'
            alt='Car Installment Calculator'
            width={150}
          />
          <div
            style={{
              width: "100%",
              marginTop: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}
          >
            <label htmlFor='name'
              style={{
                fontSize: "14px",
                color: "#444"
              }}
            >
              ชื่อผู้คำนวณ
            </label>
            <input
              type='text'
              id='name'
              name='name'
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div
            style={{
              width: "100%",
              marginTop: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}
          >
            <label htmlFor='price'
              style={{
                fontSize: "14px",
                color: "#444"
              }}
            >
              ราคารถ (บาท)
            </label>
            <input
              type='number'
              id='price'
              name='price'
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div
            style={{
              width: "100%",
              marginTop: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}
          >
            <label htmlFor='interest'
              style={{
                fontSize: "14px",
                color: "#444"
              }}
            >
              ดอกเบี้ยต่อปี (%)
            </label>
            <input
              type='number'
              id='interest'
              name='interest'
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div
            style={{
              width: "100%",
              marginTop: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}
          >
            <span style={{ fontSize: "16px" }}>เงินดาวน์ (%)</span>
            <div
              style={{
                display: "flex",
                gap: "16px",
              }}
            >
              {[15, 20, 25, 30, 35].map((v) => {
                return (
                  <div
                    key={v}
                    style={{
                      display: "flex",
                      gap: "8px",
                      fontSize: "16px"
                    }}
                  >
                    <input
                      type='radio'
                      id={`p${v}`}
                      name='gender'
                      value={v}
                    />
                    <label htmlFor={`p${v}`}>
                      {v} %
                    </label>
                  </div>
                )
              })}
            </div>
          </div>
          <div
            style={{
              width: "100%",
              marginTop: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}
          >
            <label htmlFor='interest'
              style={{
                fontSize: "14px",
                color: "#444"
              }}
            >
              จำนวนเดือนที่ผ่อน
            </label>
            <select
              id='months'
              name='months'
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                backgroundColor: "#fff",
              }}
            >
              {[24, 36, 48, 60, 72, 84].map((v) => {
                return (
                  <option key={v} value={v}>{v} เดือน</option>
                )
              })}
            </select>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              marginTop: "18px",
              gap: "12px"
            }}
          >
            <button
              style={{
                padding: "8px 0",
                width: "100%",
                backgroundColor: "#3f5cffff",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              คำนวณ
            </button>
            <button
              style={{
                padding: "8px 0",
                width: "100%",
                backgroundColor: "#ccc",
                color: "#000",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: "600"
              }}
            >
              ล้างข้อมูล
            </button>
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "16px",
              fontSize: "16px",
              fontWeight: "500"
            }}
          >
            ผ่อนชำระต่อเดือน: 0.00 บาท
          </div>
          <a
            href='/'
            style={{
              marginTop: "8px",
              padding: "8px 0",
              width: "100%",
              backgroundColor: "#ddd",
              color: "black",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "500",
              textDecoration: "none",
              textAlign: "center"
            }}
          >
            กลับหน้าหลัก
          </a>
        </div>
      </div>
    </div>
  )
}
