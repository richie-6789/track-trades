import {React, useState} from 'react'
import { UitDirection  } from '@iconscout/react-unicons-thinline'
import { UilSlidersVAlt, UilTimes, UilPlusCircle, UilTrashAlt } from '@iconscout/react-unicons'

function Scrip() {

    const [isFiltersOpen, setIsFiltersOpen] = useState(false);
    const [isBasketOpen, setIsBasketOpen] = useState(false);
    const [isBasketDefine, setIsBasketDefine] = useState(false);

    const [instruments, setInstruments] = useState([]);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');

  
    const toggleFilters = () => {
      setIsFiltersOpen(!isFiltersOpen);
    };
  
    const toggleBasket = () => {
      setIsBasketOpen(!isBasketOpen);
    };

    const handleDefineBasket = () => {
        setIsBasketDefine(!isBasketDefine);
    }

    const handleAddInstrument = () => {
        // Add instrument to the instruments array
        const newInstrument = {
          name: name,
          buySell: 'B',
          type: 'MIS',
          quantity: quantity,
          price: '90.5',
        };
        setInstruments([...instruments, newInstrument]);
        setName('')
        setQuantity('');
      };
    
    const handleDeleteInstrument = (index) => {
        // Remove instrument from the instruments array
        const updatedInstruments = [...instruments];
        updatedInstruments.splice(index, 1);
        setInstruments(updatedInstruments);
      };


  return (
    <div className="my-8">
        <div className='flex flex-row justify-between'>

            <div className='flex space-x-3'>

                <input type="text" className="border p-2 w-40" placeholder="Scrip" />
                <input type="date" className="border p-2 w-40" placeholder="Date" />

                <div className="mx-4">
                    <h2 className='text-xs text-gray-500'>Spot</h2>
                    <div className="flex flex-row items-baseline">
                        <p className='font-sans'>18,245.32</p>
                        <p className='text-xs mx-3 text-green-600'>0.35%</p>
                    </div>
                </div>
                <div className="mx-4">
                    <h2 className='text-xs text-gray-500'>Fut</h2>
                    <div className="flex flex-row items-baseline">
                        <p className='font-sans'>18,245.32</p>
                        <p className='text-xs mx-3 text-green-600'>0.35%</p>
                    </div>
                </div>
            </div>
            
            <div className='flex justify-between'>
                <div className="mx-2 items-center">
                    <h2 className='text-xs text-gray-500 h-4 flex items-center'>Max pain</h2>
                    <p className='font-sans'>18,200</p>
                </div>
                <div className="mx-2 items-center">
                    <h2 className='text-xs text-gray-500 h-4 flex items-center'>PCR</h2>
                    <p className='font-sans'>0.92</p>
                </div>
                <div className="mx-2">
                    <h2 className='text-xs text-gray-500'>
                        <span className='flex justify-center items-center h-4'> Support 1 <UitDirection size={20} /> </span>
                    </h2>
                    <p className='font-sans'>18100</p>
                </div>
                <div className="mx-2">
                    <h2 className='text-xs text-gray-500'>
                        <span className='flex justify-center items-center h-4'> Resisitance 1 <UitDirection size={20} /> </span>
                    </h2>
                    <p className='font-sans'>18500</p>
                </div>
            </div>
            
            <div className="flex space-x-2">
                <div className='relative'>

                    <button
                        className="w-32 py-1 flex justify-center items-center"
                        onClick={toggleFilters}
                    >
                        <UilSlidersVAlt className="mr-2" />
                        <span className="text-center">Filters</span>
                    </button>

                    {isFiltersOpen && (
                        <div className="absolute right-6 top-10 bg-white p-4 shadow-lg text-sm">
                        
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold">Filters</h3>
                                <button className="text-gray-500 hover:text-gray-700">
                                <UilTimes size={24} onClick={toggleFilters} />
                                </button>
                            </div>

                            <div className="mb-4">
                                <label className="block mb-1">LTP range</label>
                                <div className="flex space-x-3 truncate">
                                    <input type="text" className="border border-gray-300 px-2 py-1 w-32" placeholder="Minimum LTP" />
                                    <p>-</p>
                                    <input type="text" className="border border-gray-300 px-2 py-1 w-32" placeholder="Maximum LTP" />
                                </div>
                            </div>
                            <div className="mb-4 flex justify-between">
                                <label className="block mb-1">LTP Change % by</label>
                                <input type="text" className="border border-gray-300 px-2 py-1 w-32" placeholder="Enter %" />
                            </div>
                            <div className="mb-4 flex justify-between">
                                <label className="block mb-1">Specific Strike</label>
                                <input type="text" className="border border-gray-300 px-2 py-1 w-32" placeholder="Enter strike" />
                            </div>
                            <div className="mb-4 flex justify-between">
                                <label className="block mb-1">Display</label>
                                <div className="flex items-center space-x-3 w-32">
                                    <input type="checkbox" id="calls" className="form-checkbox" />
                                    <label htmlFor="calls">Calls</label>
                                    <input type="checkbox" id="puts" className="form-checkbox" />
                                    <label htmlFor="puts">Puts</label>
                                </div>
                            </div>
                            <hr className='my-4' />
                            <div className='flex space-x-2 justify-end'>
                                <button className="border border-blue-600 text-blue-600 py-1 px-4 text-center" onClick={toggleFilters}>Reset</button>
                                <button className="bg-blue-600 text-white py-1 px-4 text-center" onClick={toggleFilters}>Apply</button>
                            </div>

                        </div>
                    )}
                </div>
                
                <div className='relative'>
                    <button
                        className="w-32 py-1 bg-blue-600 text-white"
                        onClick={toggleBasket}
                        onDoubleClick={handleDefineBasket}
                    >
                        Basket
                    </button>

                    {isBasketOpen && (
                        <div className="flex flex-col fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-white shadow-lg text-sm" style={{ width: '600px', height: '500px' }}>
                            {/* Basket content */}

                            <header className='bg-blue-600 p-4'>
                                <ul className='flex justify-between text-white w-full'>
                                    <li className=''>
                                        <p>Max profit</p>
                                        <span>24000/-</span>
                                    </li>
                                    <li className=''>
                                        <p>Max loss</p>
                                        <span>Unilimited</span>
                                    </li>
                                    <li className=''>
                                        <p>Risk: Reward</p>
                                        <span>NA</span>
                                    </li>
                                    <li className=''>
                                        <p>Probabilty</p>
                                        <span>32%</span>
                                    </li>
                                    <li className=''>
                                        <p>Breakeven</p>
                                        <span>&gt;38124.2</span>
                                    </li>
                                </ul>
                                
                            </header>
                            <div className="my-1 mx-4 overflow-y-auto">
                                
                                <table className="w-full">
                                {/* Table header */}
                                    <thead>
                                        <tr className='text-gray-700'>
                                            <th className="p-1 font-thin text-start">Instrument</th>
                                            <th className="p-1 font-thin text-start">B/S</th>
                                            <th className="p-1 font-thin text-start">Type</th>
                                            <th className="p-1 font-thin text-start">Quantity</th>
                                            <th className="p-1 font-thin text-start">Price</th>
                                            <th className="p-1 font-thin text-start">Trigger</th>
                                            <th className="p-1 font-thin text-start"></th>
                                            <th className="p-1 font-thin text-start"></th>
                                        </tr>
                                    </thead>
                                    {/* Table body */}
                                    <tbody>
                                        {instruments.map((instrument, index) => (
                                            <tr key={index} className={index%2 === 0 ? 'bg-gray-50': ''}>
                                                <td className="p-1.5 w-1/3">{instrument.name}</td>
                                                <td className="p-1.5 text-center"> <p className={`w-6 h-6 ${instrument.buySell === 'B' ? 'bg-blue-400' : 'bg-red-300'}`}>{instrument.buySell}</p></td>
                                                <td className="p-1.5 text-center text-white"> <p className='bg-blue-600 h-6 w-12'>{instrument.type}</p></td>
                                                <td className="p-1.5"> <p className='border w-12 h-6 px-2'>{instrument.quantity}</p></td>
                                                <td className="p-1.5"> <p className='border w-12 h-6 px-2'>{instrument.price}</p></td>
                                                <td className="p-1.5"> <p className='border w-12 h-6 px-2'></p></td>
                                                <td className="p-1.5 text-blue-600"> <span className='flex'><UilPlusCircle />SL</span></td>
                                                <td className="p-1.5 text-blue-600"> <span className='flex'><UilPlusCircle />Tgt</span></td>
                                                <td className="p-1.5">
                                                    <button
                                                        className="text-gray-300"
                                                        onClick={() => handleDeleteInstrument(index)}
                                                    >
                                                        <UilTrashAlt />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                                 
                            <div className="mt-auto">
                                <hr />
                                <div className='flex p-4 justify-between'>
                                    
                                    <div className='text-xs space-y-1'>
                                        <p>Margin Required: $XXX</p>
                                        <p>Available Funds: $XXX</p>
                                    </div>
                                    <button className="bg-yellow-500 hover:bg-yellow-700 py-1 px-4">
                                        <span className='flex'> <UilPlusCircle /> Auto-Hedge</span>
                                    </button>

                                    <div className="flex justify-end">
                                        <button className="mr-2 border border-blue-600 text-blue-600 py-1 px-4">
                                            Close Basket
                                        </button>
                                        <button className="bg-blue-600 text-white py-1 px-4">
                                            Place Order
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Close and place order buttons */}
                            
                        </div>
                    )}

                    {isBasketDefine && (
                        <div className="absolute right-0 top-10 space-y-3 bg-white p-3 shadow-xl text-sm text-center">
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className=' px-2 py-1 border border-gray-700'
                            />
                            <input
                                type="text"
                                placeholder="Quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                className=' px-2 py-1 border border-gray-700'
                            />
                            
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={handleAddInstrument}
                            >
                                Add Instrument
                            </button>
                        </div>
                    )}

                </div>
                


            </div>

        </div>
        <div className="flex justify-end my-4 space-x-2">
                <button className="w-24 py-1.5 bg-blue-600 text-white rounded-lg">LTP</button>
                <button className="w-24 py-1.5 bg-gray-200 rounded-lg">Greeks</button>
        </div>
    </div>


  )
}

export default Scrip