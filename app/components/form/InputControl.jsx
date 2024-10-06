
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const InputControl = ({ name, type, placeholder, label, value, fn}) => {
  return (
    <div className="grid w-full  items-center gap-1.5 mb-3">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} 
             name={name} 
             placeholder={placeholder} 
             className="h-12" 
             onChange={fn}
             value={value}
        />
    </div>
  )
}

export default InputControl
