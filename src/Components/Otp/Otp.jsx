import React from 'react';
import OtpInput from 'react-otp-input';
import './Otp.css'
function Otp() {
    const [otp, setOtp] = React.useState('');
    return (
        <div className='otp'>
            <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        separator={<span>-</span>}
                className='otp-input'
                containerStyle={{
                    width: '100%',
                }}
                inputStyle={{
                    width: "",
                    padding: "0.3rem",
                }}
                
      />
        </div>
    );
}

export default Otp;
