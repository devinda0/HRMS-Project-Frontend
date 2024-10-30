import React, { useEffect, useRef, useState } from 'react'
import useAxios from '../../hooks/useAxios';
import EmployeeDetailsForm from '../../Components/Form/EmployeeDetailsForm';
import DependentTable from '../../Components/Table/DependentTable';
import ContactTable from '../../Components/Table/ContactTable';
import Modal from '../../Components/Modal/Modal';
import EmployeeCustomAttributeForm from '../../Components/Form/EmployeeCustomAttributeForm';
import ProfileDetailsForm from '../../Components/Form/ProfileDetailsForm';
import useWaitingSpinner from '../../hooks/useWaitingSpinner';
const Profile = () => {
    const [employeeData, setEmployeeData] = useState({});
    const [dependantData, setDependantData] = useState([]);
    const [contactData, setContactData] = useState([]);
    const axios = useAxios();
    const [showDependantModal, setShowDependantModal] = useState(false);
    const [showContactModal, setShowContactModal] = useState(false);
    const dependantNameRef = useRef(null);
    const dependantBirthdayRef = useRef(null);
    const dependantGenderRef = useRef(null);
    const dependantRelationRef = useRef(null);
    const contactNameRef = useRef(null);
    const contactNoRef = useRef(null);
    const contactRelationRef = useRef(null);
    const [attributeData, setAttributeData] = useState({});
    const { addWaiter, removeWaiter } = useWaitingSpinner();
    useEffect(() => {
        addWaiter('login');
        axios.get(`/user`)
        .then(res => {
            setEmployeeData(res.data);
        })
        .catch(err => {
            alert('Error fetching employee data');
        })
        .finally(() => {
            removeWaiter('login');
          });
    },[axios]);

    useEffect(() => {
        if(!axios) return;
        addWaiter('login');
        axios.get(`/user/custom-attributes`)
        .then(res => {
            let data = {};
            res.data.forEach(attribute => {
                data[attribute.attribute_name] = attribute.value;
            });
            setAttributeData(data);
        })
        .catch(err => {
            alert('Error fetching employee custom attributes');
        })
        .finally(() => {
            removeWaiter('login');
          });
    },[axios]);
    
    useEffect(() => {
        addWaiter('login');
        axios.get(`/user/dependants`)
        .then(res => {
            setDependantData(res.data);
        })
        .catch(err => {
            alert('Error fetching dependants');
        })
        .finally(() => {
            removeWaiter('login');
          });
    },[axios]);
    
    useEffect(() => {
        addWaiter('login');
        axios.get(`/user/emergency-contacts`)
        .then(res => {
            setContactData(res.data);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            removeWaiter('login');
          });
    },[axios]);

    const handleEmployeeDetailsEdit = (formData) => {
        addWaiter('login');
        axios.put(`/user`, formData)
        .then(res => {
            alert('Employee updated successfully');
        })
        .catch(err => {
            alert('Error updating employee');
        })
        .finally(() => {
            removeWaiter('login');
          });
    }

    const handleCustomAttributeEdit = (formData) => {
        addWaiter('login');
        axios.put(`/user/custom-attributes`, formData)
        .then(res => {
            alert('Custom attribute updated successfully');
        })
        .catch(err => {
            alert('Error updating custom attribute');
        })
        .finally(() => {
            removeWaiter('login');
          });
    }

    const handleDependantEdit = (formData) => {
        addWaiter('login');
        axios.put(`/user/dependants`, formData)
        .then(res => {
            alert('Dependant updated successfully');
        })
        .catch(err => {
            alert('Error updating dependant');
        })
        .finally(() => {
            removeWaiter('login');
          });
    }

    const handleDependantDelete = (formData) => {
        addWaiter('login');
        axios.delete(`/user/dependants/${formData.dependant_id}`)
        .then((res) => {
            alert('Dependant deleted successfully');
        })
        .catch((err) => {
            alert('Error deleting dependant');
        })
        .finally(() => {
            removeWaiter('login');
          });
    }

    const handleContactEdit = (oldData, newData) => {
        const formData = {oldData, newData};
        addWaiter('login');
        axios.put(`/user/emergency-contacts`, formData)
        .then((res) => {
            alert('Contact updated successfully');
        })
        .catch((err) => {
            alert('Error updating contact');
        })
        .finally(() => {
            removeWaiter('login');
          });
        console.log(formData);
    }

    const handleContactDelete = (formData) => {
        addWaiter('login');
        axios.delete(`/user/emergency-contacts/${formData.contact_no}`)

        .then((res) => {
            alert('Contact deleted successfully');
            contactData.filter(contact => contact.contact_no !== formData.contact_no);
        })
        .catch((err) => {
            alert('Error deleting contact');
        })
        .finally(() => {
            removeWaiter('login');
          });
    }

    const handleAddNewDependant = () => {
        const newDependant = {
            name : dependantNameRef.current?.value,
            birthday : dependantBirthdayRef.current?.value,
            gender : dependantGenderRef.current?.value,
            relation : dependantRelationRef.current?.value
        }

        if(!newDependant.name || !newDependant.gender || !newDependant.birthday || !newDependant.relation){
            alert();
            return ;
        }
        addWaiter('login');
        axios.post(`/user/dependants`, {
            ...newDependant
        })
        .then(res => {
            alert('Dependant added successfully');
            setDependantData([...dependantData, newDependant]);
        })
        .catch(err => {
            alert('Error adding dependant');
        })
        .finally(() => {
            setShowDependantModal(false);
            removeWaiter('login');
        });
    }

    const handleAddNewContact = () => {
        const newContact = {
            contact_name : contactNameRef.current?.value,
            contact_no : contactNoRef.current?.value,
            relationship : contactRelationRef.current?.value
        }

        if(!newContact.contact_name || !newContact.contact_no || !newContact.relationship){
            alert('Please fill in all fields');
            return ;
        }
        addWaiter('login');
        axios.post(`/user/emergency-contacts`, {
            ...newContact
        })
        .then(res => {
            alert('Contact added successfully');
            setContactData([...contactData, newContact]);
        })
        .catch(err => {
            alert('Error adding contact');
        })
        .finally(() => {
            setShowContactModal(false);
            removeWaiter('login');
        });

    }

  return (
    <div className=' w-full flex-1 flex flex-col gap-3 px-[5rem] py-7'>
        <h1 className=' text-[2rem] text-center'>Profile</h1>

        <div className=' w-full flex flex-col border border-black rounded px-4 py-10'>
            <ProfileDetailsForm  employeeData={employeeData} editable={true} handleEdit={handleEmployeeDetailsEdit}/>

            <div className=' divider' />

            <div className=' w-full flex flex-row justify-start items-center mb-2'>
                <h1 className=' text-[1.5rem] my-3'>Custom attributes</h1>
            </div>

            <EmployeeCustomAttributeForm attributeData={attributeData} editable={true} handleEdit={handleCustomAttributeEdit} />

            <div className=' divider' />

            <div className=' w-full flex flex-row justify-between items-center mb-2'>
                <h1 className=' text-[1.5rem] my-3'>Dependants</h1>
                <button className=' btn btn-md w-[6rem] sm:w-auto btn-outline' onClick={() => setShowDependantModal(true)}>Add Dependant</button>
            </div>

            <DependentTable tableData={dependantData} handleDelete={handleDependantDelete} handleEdit={handleDependantEdit} />

            <div className=' divider mt-10' />

            <div className=' w-full flex flex-row justify-between items-center mb-2'>
                <h1 className=' text-[1.5rem] my-3'>Contact Information</h1>
                <button className=' btn btn-md w-[6rem] sm:w-auto btn-outline' onClick={() => setShowContactModal(true)}>Add Contact</button>
            </div>

            <ContactTable tableData={contactData} handleDelete={handleContactDelete} handleEdit={handleContactEdit} />

            <Modal isVisible={showDependantModal} className={` bg-white rounded-xl py-[2rem] px-[1rem]`}>
                <div className=' w-full flex flex-col justify-start items-center gap-5'>
                    <h1 className=' text-[2rem]'>Add Dependant</h1>
                    <form method='dialog' className=' text-[1.2rem] px-10 w-full flex flex-col items-center justify-start gap-4' onClick={(e) => e.preventDefault()}>
                        <div className=' w-full flex flex-row items-center justify-center gap-5'>
                            <label htmlFor="name" className=' flex-1 pl-1'>Name :</label>
                            <input 
                                type="text" 
                                id='name' 
                                className=' input h-[2.5rem] flex-1 px-2 bg-white border border-black rounded-md'
                                ref={dependantNameRef} 
                            />
                        </div>
                        <div className=' w-full flex flex-row items-center justify-center gap-5'>
                            <label htmlFor="birthday" className=' flex-1 pl-1'>Birthday :</label>
                            <input 
                                type="date" 
                                id='birthday' 
                                className=' h-[2.5rem] flex-1 px-2 bg-white border border-black rounded-md' 
                                ref={dependantBirthdayRef}
                            />
                        </div>
                        <div className=' w-full flex flex-row items-center justify-center gap-5'>
                            <label htmlFor="gender" className=' flex-1 pl-1'>Gender :</label>
                            <input 
                                type="text" 
                                id='gender' 
                                className=' h-[2.5rem] flex-1 px-2 bg-white border border-black rounded-md' 
                                ref={dependantGenderRef}
                            />
                        </div>
                        <div className=' w-full flex flex-row items-center justify-center gap-5'>
                            <label htmlFor="relation" className=' flex-1 pl-1'>Relation :</label>
                            <input 
                                type="text" 
                                id='relation' 
                                className=' h-[2.5rem] flex-1 px-2 bg-white border border-black rounded-md' 
                                ref={dependantRelationRef}
                            />
                        </div>
                        <div className=' w-full flex flex-row items-center justify-center gap-5'>
                            <button className=' btn btn-outline' onClick={handleAddNewDependant}>ADD</button>
                            <button className=' btn btn-outline' onClick={() => setShowDependantModal(false)}>Cancel</button>
                        </div>

                    </form>
                </div>
            </Modal>

            <Modal isVisible={showContactModal} className={`bg-white rounded-xl py-[2rem] px-[1rem]`} >
            <div className=' w-full flex flex-col justify-start items-center gap-5'>
                    <h1 className=' text-[2rem]'>Add Emergency Contact</h1>
                    <form method='dialog' className=' text-[1.2rem] px-10 w-full flex flex-col items-center justify-start gap-4' onClick={(e) => e.preventDefault()}>
                        <div className=' w-full flex flex-row items-center justify-center gap-5'>
                            <label htmlFor="name" className=' flex-1 pl-1'>Name :</label>
                            <input 
                                type="text" 
                                id='name' 
                                className=' input h-[2.5rem] flex-1 px-2 bg-white border border-black rounded-md'
                                ref={contactNameRef} 
                            />
                        </div>
                        <div className=' w-full flex flex-row items-center justify-center gap-5'>
                            <label htmlFor="contact_no" className=' flex-1 pl-1'>Contact No :</label>
                            <input 
                                type="text" 
                                id='contact_no' 
                                className=' h-[2.5rem] flex-1 px-2 bg-white border border-black rounded-md' 
                                ref={contactNoRef}
                            />
                        </div>
                        <div className=' w-full flex flex-row items-center justify-center gap-5'>
                            <label htmlFor="relationship" className=' flex-1 pl-1'>Relation :</label>
                            <input 
                                type="text" 
                                id='relationship' 
                                className=' h-[2.5rem] flex-1 px-2 bg-white border border-black rounded-md' 
                                ref={contactRelationRef}
                            />
                        </div>
                        <div className=' w-full flex flex-row items-center justify-center gap-5'>
                            <button className=' btn btn-outline' onClick={handleAddNewContact}>ADD</button>
                            <button className=' btn btn-outline' onClick={() => setShowContactModal(false)}>Cancel</button>
                        </div>

                    </form>
                </div>
            </Modal>
        </div>

        
    </div>
  )
}

export default Profile