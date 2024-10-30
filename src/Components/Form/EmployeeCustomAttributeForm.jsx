import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import useWaitingSpinner from '../../hooks/useWaitingSpinner';
const EmployeeCustomAttributeForm = ({attributeData, editable, handleEdit}) => {
    const [disabled, setDisabled] = useState(true);
    const [tempData, setTempData] = useState({...attributeData});
    const [attributes, setAttributes] = useState([]);
    const axios = useAxios();
    const { addWaiter, removeWaiter } = useWaitingSpinner();
    useEffect(() => {
        if(!axios) return;
        addWaiter('customattribute');
        axios.get('/pim/custom-attributes')
        .then(res => {
            res.data.forEach(attribute => {
                setTempData(pre => {
                    return {
                        ...pre,
                        [attribute.attribute_name]: attributeData[attribute.attribute_name] || ''
                    }
                });
            });
            setAttributes(res.data);
        })
        .catch(err => {
            console.log(err);
            alert('Error fetching custom attributes');
        })
        .finally(() => {
            removeWaiter('customattribute');
          });
    },[axios, attributeData]);

    useEffect(() => {
        if(!!!attributeData) return;
        setTempData(attributeData);
    },[attributeData]);

    const handleChange = (e) => {
        setTempData({...tempData, [e.target.name]: e.target.value});
    }

    const handleSave = () => {
        handleEdit(tempData);
        setDisabled(true);
    }

  return (
    <div className=' w-full flex flex-col justify-start items-center gap-5 my-2'>
        <form className=' w-full flex flex-row flex-wrap items-center justify-start gap-5' action="">

            {
                attributes.map((attribute, index) => {
                    return (
                        <div key={index} className=' flex flex-col text-[1rem] font-medium w-[15rem] flex-shrink-0 flex-1'>
                            <label htmlFor="name" className=' pl-1'>{attribute.attribute_name}</label>
                            <input 
                                type="text" 
                                id={attribute.attribute_id} 
                                name={attribute.attribute_name}
                                className=' h-[2.5rem] px-2 bg-white border border-black rounded-md' 
                                value={tempData[attribute.attribute_name]}
                                onChange={handleChange}
                                disabled={disabled}
                            />
                        </div>
                    )
                })
            }
        </form>
        {
            editable && (
                <div className=' w-full flex flex-row justify-end gap-5 items-center'>
                {
                    disabled ?(
                        <button 
                            className='btn btn-outline border-purple-500 border-2 text-purple-500 font-semibold'
                            onClick={() => setDisabled(false)}
                        >
                            Edit
                        </button>
                    ) : (
                        <>
                            <button 
                                className='btn btn-outline border-red-500 border-2 text-red-500 font-semibold'
                                onClick={() => {
                                    setDisabled(true);
                                    setTempData(attributeData);
                                }}
                            >
                                Cancel
                            </button>
                            <button 
                                className='btn btn-outline border-purple-500 border-2 text-purple-500 font-semibold'
                                onClick={() => {
                                    handleSave();
                                }}
                            >
                                Save
                            </button>
                        </>
                    )
                }
                </div>
            )
        }
    </div>
  )
}

export default EmployeeCustomAttributeForm