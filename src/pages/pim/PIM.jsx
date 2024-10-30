import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFileAlt } from 'react-icons/fa';
import Modal from '../../Components/Modal/Modal';
import useAxios from '../../hooks/useAxios';
import { MdDeleteForever } from 'react-icons/md';
import { IoMdAdd } from 'react-icons/io';
import useWaitingSpinner from '../../hooks/useWaitingSpinner';
export const PIM = () => {
    const [showCustomAttributeModal, setShowCustomAttributeModal] = useState(false);
    const [customAttributes, setCustomAttributes] = useState(['attribute1', 'attribute2', 'attribute3']);
    const [newAttribute, setNewAttribute] = useState('');
    const axios = useAxios();
    const { addWaiter, removeWaiter } = useWaitingSpinner();
    const getCustomAttributes = () => {
        if(!axios) return;
        addWaiter('PIM');
        axios.get('/pim/custom-attributes')
        .then(res => {
            setCustomAttributes(res.data);
        })
        .catch(err => {
            console.log(err);
            alert('Error fetching custom attributes');
        })
        .finally(() => {
          removeWaiter('PIM');
        });
    }

    useEffect(() => {
      if(!axios) return;
      addWaiter('PIM');
      axios.get('/pim/custom-attributes')
      .then(res => {
          setCustomAttributes(res.data);
      })
      .catch(err => {
          console.log(err);
          alert('Error fetching custom attributes');
      })
      .finally(() => {
        removeWaiter('PIM');
      });
    }, [axios]);

    const handleAttributeDelete = (attribute) => {
        if(!axios) return;
        addWaiter('PIM');
        axios.delete(`/pim/custom-attributes/${attribute.attribute_id}`)
        .then(res => {
            alert('Attribute deleted');
            getCustomAttributes();
        })
        .catch(err => {
            const errMsg = err.response.data?.message || 'Error deleting attribute';
            alert(errMsg);
        })
        .finally(() => {
          removeWaiter('PIM');
        });
    }

    const handleAddNewAttribute = () => {
        if(!axios) return;
        addWaiter('PIM');
        axios.post('/pim/custom-attributes', {
            attribute_name : newAttribute
        })
        .then(res => {
            alert('Attribute added');
            getCustomAttributes();
            setNewAttribute('');
        })
        .catch(err => {
            const errMsg = err.response.data?.message || 'Error adding attribute';
            alert(errMsg);
        })
        .finally(() => {
          removeWaiter('PIM');
        });
    }

  return (
    <div className=' w-full flex-1 bg-custompurple px-[10rem] py-7'>
      <h1 className='text-black text-[2.5rem] text-center font-bold p-5'>Personal Information Managment</h1>
      <div className=' w-full flex flex-col justify-start items-center gap-4 mt-7 '>
        <Link 
          to={'employee'}
          className="w-full bg-white p-8 rounded-lg border-[2px] border-transparent hover:border-[#723BE9] shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <div className="flex items-center mb-2">
            <FaFileAlt className="text-3xl text-gray-700 mr-4" />
            <h3 className="text-[2rem] font-bold font-manrope text-black">Employees</h3>
          </div>
          <div className="bg-[#D9D9D9] p-2 mt-3">
            <p className="text-black font-manrope text-[1rem]">
              Displays employee details 
            </p>
          </div>
        </Link>
        <div
            className="w-full bg-white p-8 rounded-lg border-[2px] border-transparent hover:border-[#723BE9] shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => setShowCustomAttributeModal(true)}
        >
          <div className="flex items-center mb-2">
            <FaFileAlt className="text-3xl text-gray-700 mr-4" />
            <h3 className="text-[2rem] font-bold font-manrope text-black">Change Custom Attributes</h3>
          </div>
          <div className="bg-[#D9D9D9] p-2 mt-3">
            <p className="text-black font-manrope text-[1rem]">
              Change custom attributes for employees
            </p>
          </div>
        </div>
      </div>

        <Modal isVisible={showCustomAttributeModal} className='flex flex-col gap-3 py-[4rem] px-[5rem] rounded-xl bg-white'>
            <h1 className=' text-[2rem] mb-3 font-semibold'>Custom Attributes</h1>
            {
                customAttributes.map((attribute, index) => {
                    return (
                        <div key={index} className='flex flex-row  items-center gap-2'>
                            <input 
                                type="text" 
                                className='h-[2.5rem] flex-1 px-2 bg-white border border-black rounded-md'
                                name={attribute.attribute_name} 
                                id={attribute.attribute_id} 
                                value={attribute.attribute_name}
                                disabled
                            />
                            <button 
                                className='w-10 h-10 flex justify-center items-center border border-black rounded-xl hover:bg-red-500 active:scale-90 transition-transform duration-250' 
                                onClick={() => handleAttributeDelete(attribute)} >
                                <MdDeleteForever className=' scale-[1.5]'/>
                            </button>
                        </div>
                    )
                })
            }
            <div className='flex flex-row  items-center gap-2'>
                <input 
                    type="text" 
                    className='h-[2.5rem] flex-1 px-2 bg-white border border-black rounded-md'
                    name={newAttribute} 
                    id={newAttribute} 
                    value={newAttribute}
                    onChange={(e) => setNewAttribute(e.target.value)}
                />
                <button 
                    className='w-10 h-10 flex justify-center items-center border border-black rounded-xl hover:bg-custompurple active:scale-90 transition-transform duration-250' 
                    onClick={() => handleAddNewAttribute()} >
                    <IoMdAdd color='green' size={32}/>
                </button>
            </div>
            <div className=' mt-5 flex flex-row justify-center items-center'>
                <button className='btn btn-outline' onClick={() => setShowCustomAttributeModal(false)}>
                    Done
                </button>
            </div>

        </Modal>

    </div>
  )
}
export default PIM;