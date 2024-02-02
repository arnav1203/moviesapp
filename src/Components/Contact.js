import React from 'react'

export default function Contact() {
    return (
        <div className='flex justify-center flex-col'>
            <div>
                <h1 className='text-4xl text-white'>Contact Us</h1>
            </div>
            <div>
                <p className='text-white'>Please submit your inquiry using the form below and we will get in touch with you shortly.</p>
            </div>
            <div>
                <form>
                    <input placeholder='Your email' />
                    <input placeholder='Subject' />
                    <p>Message</p>
                    <input placeholder='Type Here' />
                </form>
            </div>
        </div>
    )
}
