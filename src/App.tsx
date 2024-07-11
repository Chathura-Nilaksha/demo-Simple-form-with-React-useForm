import { useState } from 'react'
import { useForm } from 'react-hook-form';
import './App.css'
function App() {
  // type FieldValues = {
  //   deliveryName: string,
  //   deliveryLastName: string,   // deliveryAddress: string, // deliveryPhone: string,    
  //   billingName : string, 
  //   billingLastName : string  // billingAddress : string,// billingPhone : string,   
  // }
  const { register, watch, setValue } = useForm();

  const [check, setCheck] = useState(false)
  const [state, setState] = useState({
    deliveryName: "",
    deliveryLastName: "" // deliveryAddress: "", // deliveryPhone: ""   
  });  

  const [stateBillData, setStateBillData] = useState({
    billingName: "",
    billingLastName: ""  
  });


  const shipDeliveryName = watch('deliveryName');
  const shipDeliveryLastName = watch('deliveryLastName');
  const checkBoxChange = (e:any) => { 
    setCheck(!check); 
    if(e.target.checked===true){
      setValue("billingName", shipDeliveryName );
      setValue("billingLastName", shipDeliveryLastName );
    }  
  }
   
  return (
    <>
      <div>
        <form >
          <h1>     Delivery Address     </h1>
          <input type="text" /*name='deliveryName'*/ placeholder='First Name' autoComplete='{false}' id='deliveryNameId' 
                // onChange={(e) => setState({...state, deliveryName: e.target.value })} 
                // value={state.deliveryName}
                {...register("deliveryName")}/>
          <input type="text" /*name='deliveryLastName'*/ placeholder='Last Name' autoComplete='{false}' 
                // onChange={(e) => setState({...state, deliveryLastName: e.target.value })} 
                // value={state.deliveryLastName}
                {...register("deliveryLastName")}/>

          <h1>     Billing Address       </h1>

          <div className='check'>
            <label htmlFor='checkbox'>Same as Delivery address</label>
            <input type="checkbox" value='false' name='checkbox' checked={check} onChange={checkBoxChange} />
          </div>

          <input type="text" /*name='billingName' */ placeholder='First Name' autoComplete='{false}' disabled={check} 
              // onChange={(e) => setStateBillData({...stateBillData, billingName: e.target.value })} 
              // value={stateBillData.billingName}
              {...register("billingName")}/>
          <input type="text" /*name='billingLastName'*/ placeholder='Last Name' autoComplete='{false}' disabled={check}
              // onChange={(e) => setStateBillData({...stateBillData, billingLastName: e.target.value })} 
              // value={stateBillData.billingLastName}
              {...register("billingLastName")}/>

          <br /><br />
          <input type="button" className='btn' value="Submit" />

        </form>
      </div>

    </>
  )
}
export default App;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//   const { register, watch, setValue } = useForm();

//   const shippingAddress = watch('shippingAddress');

//   // Function to handle shipping address change and update billing address fields
//   const handleShippingAddressChange = () => {
//     const billingAddressFields = ['billingAddress1', 'billingAddress2', 'billingCity', 'billingState', 'billingZip'];
//     billingAddressFields.forEach(field => {
//       setValue(field, shippingAddress[field.replace('billing', 'shipping')]);
//     });
//   };

//   return (
//     <form>
//       <label>Shipping Address</label>

//       <input {...register('shippingAddress.address1')} />
//       <input {...register('shippingAddress.address2')} />
//       <input {...register('shippingAddress.city')} />
//       <input {...register('shippingAddress.state')} />
//       <input {...register('shippingAddress.zip')} />

//       <label>Billing Address</label>

//       <input {...register('billingAddress.address1')} />
//       <input {...register('billingAddress.address2')} />
//       <input {...register('billingAddress.city')} />
//       <input {...register('billingAddress.state')} />
//       <input {...register('billingAddress.zip')} />

//       <input type="checkbox" onChange={handleShippingAddressChange} />
//       <label>Same as shipping address</label>
//     </form>
//   );
// }


///////////////////////////////////////////
// error description

// The error you're encountering seems to be related to Visual Studio Code's attempt to load a JSON schema for your `package.json` file. Let's break down the error message:

// ```
// "Problems loading reference 'https://json.schemastore.org/package': Unable to load schema from 'https://json.schemastore.org/package': getaddrinfo ENOTFOUND json.schemastore.org."
// ```

// This error message indicates that Visual Studio Code (or another tool in your development environment) is trying to fetch a JSON schema from `https://json.schemastore.org/package`, but it is unable to do so because it cannot find the server `json.schemastore.org`. The specific error `getaddrinfo ENOTFOUND json.schemastore.org` typically means that the hostname `json.schemastore.org` cannot be resolved to an IP address, suggesting a DNS resolution issue.

// Here are a few steps you can take to troubleshoot and potentially resolve this issue:

// 1. **Check your internet connection**: Ensure that your internet connection is active and working properly. Sometimes network issues can prevent your computer from resolving domain names.

// 2. **DNS Resolution**: Verify that your DNS settings are configured correctly. You can try accessing `https://json.schemastore.org/package` directly in a web browser to see if it loads. If it doesn't load in the browser, it confirms a DNS issue.

// 3. **Proxy Settings**: If you are behind a proxy, ensure that your proxy settings are correctly configured in Visual Studio Code or your system environment variables.

// 4. **Firewall and Security Software**: Check if any firewall or security software on your computer is blocking access to external websites. Temporarily disabling them can help diagnose if they are causing the problem.



// 5. **Visual Studio Code Settings**: If you are using Visual Studio Code, check if there are any specific settings related to JSON schemas (`settings.json` or workspace settings) that might be configured to fetch schemas from `json.schemastore.org`. Adjust or remove these settings if they are causing issues.

// 6. **Fallback or Offline Schema**: As a temporary workaround, you can try using a local or fallback JSON schema for `package.json` within Visual Studio Code. You can specify a local schema file path or use a different schema URL that you know is accessible.

// Once you've identified the underlying cause (such as DNS resolution, network settings, or software configuration), you should be able to resolve the issue and allow Visual Studio Code to load the JSON schema for your `package.json` file without errors.

















////////////////////////////////////////////////////////////////

// To implement a feature in React where the user can choose to make the billing address the same as the shipping address, 
//you'll need to create a form with checkboxes or a toggle switch to enable or disable this option. Here’s a step-by-step guide on how you can achieve this:
// Step 1: Set Up State Variables

// First, define state variables to store the addresses and whether the billing address should be the same as the shipping address.
 
// ---------------------------
// Explanation:

//     State Variables:
//         shippingAddress: Stores the shipping address fields.
//         billingAddressSameAsShipping: Boolean state to determine if billing address should be the same as shipping address.
//         billingAddress: Stores the billing address fields.

//     Toggle Function:
//         toggleBillingSameAsShipping: Toggles the billingAddressSameAsShipping state and optionally copies the shipping address to the billing address when enabled.

//     Form Rendering:
//         Renders two forms: one for shipping address and one for billing address.
//         Uses conditional rendering ({!billingAddressSameAsShipping && (...)}) to show/hide the billing address form based on the checkbox state.

//     Input Handling:
//         handleShippingAddressChange and handleBillingAddressChange functions update the respective address state fields when user inputs data.

// Additional Considerations:

//     You may need additional fields (city, state, postalCode, etc.) in the address forms depending on your requirements.
//     Validation and error handling for address fields should be added as per your application's needs.
//     Styling and layout can be adjusted using CSS to improve the user interface.

// This setup allows users to easily toggle between using the same address for shipping and billing, 
//providing a seamless experience while entering their information. 
//Adjust the form structure and styling based on your specific design requirements and preferences.
