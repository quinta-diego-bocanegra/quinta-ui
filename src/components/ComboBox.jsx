import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
  } from "@/components/ui/command"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { useState, useMemo } from "react"
import ShadowButton from "./ShadowButton"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { cn } from "@/lib/utils"
import { FormControl } from "@/components/ui/form"

export default function ComboBox({title, placeholder, options=[], value, onChange, create = false, onCreate, className, form = false, disabled = false, ...props}) {
    const [open, setOpen] = useState(false)
    const [selectedValue, setSelectedValue] =  (onChange) ? [value, onChange] : useState("")
    const [inputValue, setInputValue] = useState("")
    const isNewValue = useMemo(() => isInOptions(inputValue), [inputValue])

    function isInOptions(inputValue) {
        return (inputValue && !!inputValue.replace(/\s/g, '').length) && (
            !((options[0].title) ? (
                options.map(optionsGroup => optionsGroup.optionsList).flat().find((option) => option.value === inputValue)
            ) : (
                options.find((option) => option.value === inputValue)
            ))
        )  
    }

    const ListOptions = (optionsList) => {
        return (
            optionsList && optionsList.map(
                (option) => (
                    <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={(currentValue) => {
                        setSelectedValue(currentValue === selectedValue ? "" : currentValue)
                        setOpen(false)
                    }}>
                        <p className={cn(disabled && "text-gray-200")}>{option.label}</p>
                        { selectedValue === option.value && <FontAwesomeIcon icon={faCheck} className="ml-auto"/>}
                    </CommandItem>
                )
            )
        )
    }


    const ComboTrigger = () => {
        return (
            <ShadowButton icon={faChevronDown} iconLocaton="right" className={cn(className, disabled && "cursor-not-allowed shadow-none border hover:border hover:border-gray-200 border-gray-200 text-gray-300")}>
                {
                    selectedValue ? (
                        (
                            (
                                (options[0].title) ? (
                                    options.map(optionsGroup => optionsGroup.optionsList).flat().find((option) => option.value === selectedValue)
                                ) : (
                                    options.find((option) => option.value === selectedValue)
                                )
                            )?.label
                        ) ?? (
                            selectedValue
                        )
                    ) : (
                        title
                    )
                }
            </ShadowButton>
        )
    }

    return (
        <Popover open={open} onOpenChange={!disabled && setOpen}>
        <PopoverTrigger asChild>
            {
                form ? (
                    <FormControl>
                        <ComboTrigger/>
                    </FormControl>
                ) : (
                    <ComboTrigger/>
                )
            }

        </PopoverTrigger>
        <PopoverContent className={"p-0 w-fit"} {...props}>
            <Command className={cn(className)}>
            <CommandInput placeholder={placeholder} value={inputValue} onValueChange={setInputValue}/>
            <CommandList>
                <CommandEmpty>Sin coincidencias</CommandEmpty>
                {
                    (options[0]?.title) ? (
                        options.map(
                            (optionsGroup, index, array) => (
                                <>
                                    <CommandGroup heading={optionsGroup.title}>
                                        {
                                           ListOptions(optionsGroup.optionsList) 
                                        }
                                    </CommandGroup>
                                    {index != (array.length - 1) && <CommandSeparator />}
                                </>
                            )
                        )
                    ) : (
                        <CommandGroup>
                            {ListOptions(options)}
                        </CommandGroup>
                    )
                }
                {
                    (create && isNewValue && inputValue) && (
                        <>
                            <CommandSeparator />
                            <div className="w-full p-1">
                                <button className="w-full rounded-md p-2 bg-gray-100 flex justify-start" onClick={() => { setOpen(false); setSelectedValue(inputValue); onCreate(inputValue)}}>
                                    <div className=" max-w-48 whitespace-nowrap overflow-hidden text-ellipsis ">
                                        Crear <b>{inputValue}</b>
                                    </div>
                                </button>
                            </div>
                        </>
                    )
                }
            </CommandList>
            </Command>
        </PopoverContent>
        </Popover>
    )
}