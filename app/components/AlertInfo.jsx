import { InformationCircleIcon } from '@heroicons/react/20/solid'

const AlertInfo = ({ message }) => {
  return (
    <div className="rounded-md bg-yellow-100 p-4 mt-8 shadow-sm">
      <div className="flex">
        <div className="flex-shrink-0">
          <InformationCircleIcon aria-hidden="true" className="h-5 w-5 text-yellow-500" />
        </div>
        <div className="ml-3 flex-1 md:flex md:justify-between">
          <p className="text-sm text-yellow-500"> {message}</p>
         
        </div>
      </div>
    </div>
  )
}

export default AlertInfo