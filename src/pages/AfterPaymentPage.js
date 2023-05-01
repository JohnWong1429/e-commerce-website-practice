import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SuccessPayment from '../components/SuccessPayment';
import CancelPayment from '../components/CancelPayment';

const AfterPaymentPage = () => {
    const id = useParams().id;
    const [success, setSuccess] = useState(false);
    
    useEffect(() => {
        if (id === 'success=1') {
            setSuccess(true);
        } else {
            setSuccess(false);
        }
    }, [id]);


    return (
        <>
            {success ? (
                <>
                    <SuccessPayment />
                </>
            ) : (
                <>
                    <CancelPayment />
                </>
            )}
        </>
    );
}

export default AfterPaymentPage;
