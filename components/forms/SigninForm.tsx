'use client'
import {useState} from 'react'

const SignInForm = () => {
  const [ isOtpSent, setIsOtpSent ] = useState(false)

  const sendOtp = async (e) => {
    e.preventDefault()
    const otp = Math.floor(100000 + Math.random() * 900000)
    const otpResult = await fetch('http://ippanel.com/api/select', {
      method: 'POST',
      body: {
        op: 'pattern',
        user: 'touristsport',
        pass: '28169889',
        fromNum: '10004443',
        toNum: '09135306411',
        patternCode: '5vhbevmwub2e1kh',
        inputData: {
          'otp-code': '123456'
        }
      } as any
    })
  }
  return (
    <div>

    </div>
  )
}

export default SignInForm
