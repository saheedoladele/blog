import React from 'react'

import { Input } from '@/components/ui/input'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { FormFieldType } from '@/lib/utils'
import { FaRegEye, FaUser } from 'react-icons/fa6'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import "react-datepicker/dist/react-datepicker.css";
import { Select, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

 const RenderField = ( {field, props} ) =>{
    const { fieldType, iconSrc, placeholder, renderSkeleton, isPassword, togglePassword, isDisable } = props
   switch (fieldType) {
    case FormFieldType.INPUT:
        return (
           

            <div className='relative border-gray-300 rounded-sm border'>
                {
                    iconSrc && (
                        <div className='ml-2 mr-2 absolute left-2 top-1/2 -translate-y-1/2'>{iconSrc}</div>
                    )
                }
                <FormControl>
                    <Input placeholder={placeholder} {...field} className="rounded-lg py-3 h-12 bg-transparent border-0 focus:outline-gray-300 text-gray-500 pl-10" disabled={isDisable} />
                </FormControl>
            </div>
        )
        case FormFieldType.PASSWORD:
        return (
            <div className='relative w-full border border-gray-300 rounded-sm '>
                {
                    iconSrc && (
                        <div className='ml-2 absolute left-2 top-1/2 -translate-y-1/2'>{iconSrc}</div>
                    )
                }
                <FormControl>
                    <Input type={isPassword ? "password" : "text"} placeholder={placeholder} {...field} className="rounded-lg py-3 h-12 bg-transparent border-0 focus:outline-gray-300 text-gray-500 pl-10" />
                </FormControl>
                <div className='ml-2 mr-2 absolute right-2 top-1/2 -translate-y-1/2'>
                    <FaRegEye onClick={togglePassword} className='text-gray-500 hover:cursor-pointer' />
                </div>
            </div>
        )
        case FormFieldType.PHONE_INPUT:
            return (
                <FormControl>
                <div className='border  rounded-lg'>
                    <PhoneInput 
                        defaultCountry='NG'
                        placeholder={placeholder}
                        international
                        value={field.value}
                        onChange={field.onChange}
                        className='input-phone'
                    />
                </div>
                
            </FormControl>
        )
        case FormFieldType.TEXTAREA: 
        return (
            <FormControl>
                <Textarea 
                    placeholder={placeholder} 
                    {...field}
                    className="border border-gray-300"
                    disable={props.disable}
                    />

                
            </FormControl>
        )
        case FormFieldType.SELECT:
            return (
                <FormControl>
                    <Select onValueChange={field.onChange} 
                            defaultValue={field.value}
                            
                            >
                            <FormControl className="border-gray-300 h-12" >
                                <SelectTrigger>
                                    <SelectValue placeholder={placeholder} />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {props.children}
                            </SelectContent>
                    </Select>
                </FormControl>
        )
        case FormFieldType.DATE_PICKER:
            return (
                <div className='relative rounded-lg w-full border border-gray-300 '>
                {
                    iconSrc && (
                        <div className='ml-2 absolute left-2 top-1/2 -translate-y-1/2'>{iconSrc}</div>
                    )
                }
                <FormControl>
                    <Input type="date" placeholder={placeholder} {...field} className="rounded-lg py-3 h-12 bg-transparent border-0 focus:outline-none text-gray-500 pl-10" />
                </FormControl>
                
            </div>

                // <div className='flex items-center gap-1 border border-primary-300 rounded-md bg-white'>
                //     {
                //     iconSrc && (
                //         <div className='ml-2 mr-2'>{iconSrc}</div>
                //     )
                // }
                // <FormControl>
                //     <DatePicker 
                //         selected={field.value} 
                //         onChange={(date) => field.onChange(date)}
                //         dateFormat={ dateFormat ?? 'YYYY-MM-DD'}
                //         showTimeSelect={ showTimeSelect ?? false}
                //         className='w-[100%] p-2 border-none text-gray-500'
                //          />
                // </FormControl>

                // </div>
        )
        case FormFieldType.SKELETON:
            return renderSkeleton ? renderSkeleton(field) : null
    default:
        break;
   }
} 
const CustomFormField = (props) => {
    const { control, label, name, fieldType,  } = props
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <FormItem>
                {
                    fieldType !== FormFieldType.CHECKBOX && label && (
                        <FormLabel>{label}</FormLabel>
                    )
                }
            
            <RenderField field={field} props={props} fieldType={fieldType} />
           
            
            <FormMessage /> 
          </FormItem>
        )}
      />
  )
}

export default CustomFormField