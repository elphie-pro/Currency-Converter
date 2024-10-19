import { useEffect, useState } from 'react'
import image from './assets/arrow 1.svg'
import { MoonLoader } from 'react-spinners'
import './App.css'

function App() {
  const [amount, setAmount] = useState('')
  const [result, setResult] = useState('')
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('EUR')
  const [loading, setLoading] = useState(false)

  const fetchAmount = async() => {
    try {
      setLoading(true)
      const res = await fetch(`https://v6.exchangerate-api.com/v6/7dfb6e3ccd0c6352f6ad8564/pair/${from}/${to}/${amount}`)
      const data = await res.json()
      setResult(data)
    }
    catch(e) {
      console.log(e)
    }
    finally {
      setLoading(false)
    }
  }


  return (
    <>
     <div className="container">
      <div className="tit">
            <h3 className='title'>Currency Converter</h3>  
      </div>
      <div className="items">
        <h3 className='one'>Amount</h3>
        <input type="text" className='amount' value={amount} onChange={(e) => {
          setAmount(e.target.value)
        }}/>
        <br />
        <h3 className='two'>From</h3>
        <select name="" id="" className='from' value={from} onChange={(e) => {
          setFrom(e.target.value)
        }}>
            <option value="USD">United States Dollar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="GBP">British Pound (GBP)</option>
            <option value="JPY">Japanese Yen (JPY)</option>
            <option value="NGN">Nigerian Naira (NGN)</option>
            <option value="CAD">Canadian Dollar (CAD)</option>
            <option value="AUD">Australian Dollar (AUD)</option>
            <option value="CHF">Swiss Franc (CHF)</option>
            <option value="CNY">Chinese Yuan (CNY)</option>
            <option value="INR">Indian Rupee (INR)</option>
            <option value="ZAR">South African Rand (ZAR)</option>
            <option value="BRL">Brazilian Real (BRL)</option>
            <option value="MXN">Mexican Peso (MXN)</option>
            <option value="RUB">Russian Ruble (RUB)</option>
            <option value="KRW">South Korean Won (KRW)</option>
            <option value="SGD">Singapore Dollar (SGD)</option>
            <option value="HKD">Hong Kong Dollar (HKD)</option>
            <option value="NOK">Norwegian Krone (NOK)</option>
            <option value="SEK">Swedish Krona (SEK)</option>
            <option value="TRY">Turkish Lira (TRY)</option>
            <option value="NZD">New Zealand Dollar (NZD)</option>
            <option value="PLN">Polish Zloty (PLN)</option>
        </select>
        <br />
        <img src={image} alt="" className='img'/>

        <h3 className='three'>To</h3>
        <select name="" id="" className='to' value={to} onChange={(e) => {
          setTo(e.target.value)
        }}>
            <option value="EUR">Euro (EUR)</option>
            <option value="GBP">British Pound (GBP)</option>
            <option value="USD">United States Dollar (USD)</option>
            <option value="JPY">Japanese Yen (JPY)</option>
            <option value="CAD">Canadian Dollar (CAD)</option>
            <option value="AUD">Australian Dollar (AUD)</option>
            <option value="CHF">Swiss Franc (CHF)</option>
            <option value="CNY">Chinese Yuan (CNY)</option>
            <option value="NGN">Nigerian Naira (NGN)</option>
            <option value="INR">Indian Rupee (INR)</option>
            <option value="ZAR">South African Rand (ZAR)</option>
            <option value="BRL">Brazilian Real (BRL)</option>
            <option value="MXN">Mexican Peso (MXN)</option>
            <option value="RUB">Russian Ruble (RUB)</option>
            <option value="KRW">South Korean Won (KRW)</option>
            <option value="SGD">Singapore Dollar (SGD)</option>
            <option value="HKD">Hong Kong Dollar (HKD)</option>
            <option value="NOK">Norwegian Krone (NOK)</option>
            <option value="SEK">Swedish Krona (SEK)</option>
            <option value="TRY">Turkish Lira (TRY)</option>
            <option value="NZD">New Zealand Dollar (NZD)</option>
            <option value="PLN">Polish Zloty (PLN)</option>
        </select>
      </div>
      <div className="res">
        {loading?  <MoonLoader className='loader'/> : <main>
          <p className="ans">{amount} {from} = {result.conversion_result} {to}</p>
          </main>}
      </div>
      <div className="button">
         <button className='btn' onClick={() => {
          fetchAmount()
         }}>Convert</button>
      </div>
     </div>
    </>
  )
}

export default App
