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

  // const [state, setState] = useState({
  //   deliveryName: "",
  //   deliveryLastName: "" // deliveryAddress: "", // deliveryPhone: ""   
  // });  

  // const [stateBillData, setStateBillData] = useState({
  //   billingName: "",
  //   billingLastName: ""  
  // });

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

