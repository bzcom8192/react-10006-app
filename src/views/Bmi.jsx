import React from 'react'

export default function Bmi() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
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
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
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
            minWidth: "400px",
            borderRadius: "16px"
          }}
        >
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "bold"
            }}
          >
            BMI Calculator
          </div>
          <div
            style={{
              fontSize: "14px",
              color: "#666",
              marginBottom: "16px"
            }}
          >
            คำนวณ BMI
          </div>
          <img
            src='/bmi.png'
            alt='BMI Calculator'
            width={64}
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
            <label htmlFor='weight'
              style={{
                fontSize: "14px",
                color: "#444"
              }}
            >
              ป้อนน้ำหนัก (กิโลกรัม)
            </label>
            <input
              type='number'
              id='weight'
              name='weight'
              placeholder='เช่น 65'
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
            <label htmlFor='height'
              style={{
                fontSize: "14px",
                color: "#444"
              }}
            >
              ป้อนส่วนสูง (เซนติเมตร)
            </label>
            <input
              type='number'
              id='height'
              name='height'
              placeholder='เช่น 170'
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <button
            style={{
              marginTop: "24px",
              padding: "8px 12px",
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
            คำนวณ BMI
          </button>
          <button
            style={{
              marginTop: "8px",
              padding: "8px 12px",
              width: "100%",
              backgroundColor: "#ddd",
              color: "black",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "600"
            }}
          >
            รีเซ็ต
          </button>
          <div
            style={{
              textAlign: "center",
              marginTop: "16px",
              fontSize: "16px",
              fontWeight: "500"
            }}
          >
            ค่า BMI ที่คำนวณได้: <span style={{ color: "#3f5cffff" }}>0.00</span>
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
