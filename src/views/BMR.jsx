import { CakeRounded, RadioButtonUncheckedRounded, ScaleRounded, StraightenRounded, TaskAltRounded } from "@mui/icons-material"
import { useState } from "react"

export default function BMR() {
	const [weight, setWeight] = useState('')
	const [height, setHeight] = useState('')
	const [age, setAge] = useState('')
	const [gender, setGender] = useState('')
	const [result, setResult] = useState('0.00')

	const handleCalculateBMR = () => {
		/*
			สำหรับผู้ชาย :
			BMR = 66 + (13.7 x น้ำหนักตัวเป็น กก.) + (5 x ส่วนสูงเป็น ซม.) – (6.8 x อายุ)
			สำหรับผู้หญิง :
			BMR = 665 + (9.6 x น้ำหนักตัวเป็น กก.) + (1.8 x ส่วนสูงเป็น ซม.) – (4.7 x อายุ)
		*/

		if (weight && height && age && gender) {
			let bmr = 0
			if (gender === 'male') {
				bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age)
			} else if (gender === 'female') {
				bmr = 665 + (9.6 * weight) + (1.8 * height) - (4.7 * age)
			}
			setResult(bmr.toFixed(2))
		}
	}

	const handleReset = () => {
		setWeight('')
		setHeight('')
		setAge('')
		setGender('')
		setResult('0.00')
	}

	return (
		<div className='flex flex-col items-center h-screen w-full text-lg'>
			<div className='flex justify-center items-center gap-4 py-8 my-auto'>
				<div className='flex flex-col items-center p-4 border border-gray-300 shadow-md drop-shadow-xl min-w-[500px] rounded-2xl bg-white [&_input]:placeholder:text-base'>
					<div className='text-3xl font-bold'>
						BMR Calculator
					</div>
					<div className='text-base text-gray-500 mb-4'>
						คำนวณ BMR
					</div>
					<img
						src='/bmr.png'
						alt='BMR Calculator'
						width={96}
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
					<div className='w-full mt-4 flex flex-col gap-2'>
						<div className="flex gap-2">
							<CakeRounded />
							<label htmlFor='age' className='text-base text-gray-500'>
								ป้อนอายุ (ปี)
							</label>
						</div>
						<input
							type='number'
							id='age'
							name='age'
							placeholder='เช่น 25'
							className='px-3 py-2 rounded-md border border-gray-300'
							value={age}
							onChange={(e) => setAge(e.target.value)}
						/>
					</div>
					<div className='w-full mt-4 flex flex-col gap-2'>
						<span className='text-lg'>เพศ:</span>
						<div className='flex gap-2 text-base'>
							<span className="flex items-center gap-2 **:cursor-pointer"
								onClick={() => setGender('male')}
							>
								{gender == "male" ?
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
								<label htmlFor='male'>
									ชาย
								</label>
							</span>
						</div>
						<div className='flex gap-2 text-base'>
							<span className="flex items-center gap-2 **:cursor-pointer"
								onClick={() => setGender('female')}
							>
								{gender == "female" ?
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
								<label htmlFor='male'>
									หญิง
								</label>
							</span>
						</div>
					</div>
					<div className='flex flex-col gap-2 mt-6 w-full'>
						<button
							onClick={handleCalculateBMR}
							className='px-4 py-2 w-full bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300 cursor-pointer'
						>
							คำนวณ BMR
						</button>
						<button
							onClick={handleReset}
							className='px-4 py-2 w-full bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition-colors duration-300 cursor-pointer'
						>
							รีเซ็ต
						</button>
					</div>
					<div className='text-center mt-4 font-medium'>
						ค่า BMR ที่คำนวณได้: <span className='text-blue-600'>{result}</span>
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
