import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

import { registerLicense } from '@syncfusion/ej2-base';

import { ContextProvider } from './contexts/ContextProvider';


// Registering Syncfusion license key
registerLicense('ODIxNjAyQDMyMzAyZTM0MmUzMFlGSXcrZ1FzcStPbU1BSlc3aVFRWVVDdzFVbHRMTk9DYW5hY3dBWG5wUEE9;Mgo+DSMBaFt/QHRqVVhjVFpFaV1HQmFJfFBmRGJTe156cFZWACFaRnZdQFxhS3hRdUBrWn5bcXdc;Mgo+DSMBMAY9C3t2VVhkQlFadVdJXHxLe0x0RWFab19xflFGalhSVBYiSV9jS3xSdEdlW3xbeHdUQ2JVWA==;Mgo+DSMBPh8sVXJ0S0J+XE9HflRDQmFMYVF2R2BJfl96cFVMZF9BJAtUQF1hS39RdENhWnpWc3VQQmJV;ODIxNjA2QDMyMzAyZTM0MmUzME5EN0lpRU1oWGk0MzJwd0VTREFnMXJvblcyMFkxS0dxZG0rV1lwSktCL009;NRAiBiAaIQQuGjN/V0Z+WE9EaFxKVmJWfFZpR2NbfE5xdV9CYFZVR2Y/P1ZhSXxRd0dhX31ddXxWR2VbU00=;ORg4AjUWIQA/Gnt2VVhkQlFadVdJXHxLe0x0RWFab19xflFGalhSVBYiSV9jS3xSdEdlW3xbeHdUQ2hfWA==;ODIxNjA5QDMyMzAyZTM0MmUzMFZNb3dvcVNlM1RzanA3TlVCOFZuMGxDNllOOE55SVNCMFJPeXRGQWQ1SXM9;ODIxNjEwQDMyMzAyZTM0MmUzMFdQdmRnd3hYUXFCNFpWNE5vWVIva1VkK0NGSlVHeWhiWWtYbGJOYUV1WXc9;ODIxNjExQDMyMzAyZTM0MmUzMFF4eXFFT2ZCOXp3Tkt5VWFMK3o2L1dsOXA5cnVSSjdPa0lSK2RYMmJLQ0E9;ODIxNjEyQDMyMzAyZTM0MmUzMFZMZlVlTzhwMWxZOTZBUUFkV1c2MVdaZzdNdzBDRGVWUEVuK1BFT3pZVU09;ODIxNjEzQDMyMzAyZTM0MmUzMFlGSXcrZ1FzcStPbU1BSlc3aVFRWVVDdzFVbHRMTk9DYW5hY3dBWG5wUEE9');


ReactDOM.render(
    <React.StrictMode>
        <ContextProvider>
            <App />
        </ContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);