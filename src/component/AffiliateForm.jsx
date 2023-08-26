import React, { useEffect } from 'react'
import {Form,Button} from 'react-bootstrap';
import { useForm} from 'react-hook-form';
function AffiliateForm() {
  const {register,handleSubmit,formState:{errors},setValue,getValues,setFocus} = useForm({
    defaultValues:{
      firstName:"Ashish",
      lastName:"AshishPanchal"
    }
  }) 


  
  const onSubmit =(data)=>{
    console.log('data', data)
  }
  const updateField =(field,e)=>{
    console.log('e', e)
    setValue(field,e.target.value,)
  }
  // if you want to only get value of firstName and if you want all data so only call getValue
//(getValues("firstName")
  // focus to when first Time Render the component
  useEffect(()=>{
    setFocus("lastName")
  },[setFocus])
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="text" placeholder="firstName" {...register("firstName",{required:true})}  value={getValues("firstName")} onChange={(e)=> updateField("firstName",e)}/>
        {errors?.firstName &&<> <Form.Text className= "text-danger">First Name is Required</Form.Text></>}
        <Form.Label>LastName</Form.Label>
        <Form.Control type="test" placeholder="lastName" {...register("lastName",{minLength:10})} value={getValues("lastName")} onChange={(e)=>updateField("lastName",e)}/>
        {errors?.lastName && <><Form.Text className="text-danger">Last Name is required</Form.Text> </>}
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button variant ="success" onClick={()=>alert(JSON.stringify(getValues("firstName")))}>Click</Button>
      </Form>
    </>
  )
}

export default AffiliateForm
