import React from 'react'

function Table() {
  return (
    <div className='font-sans'>

        <div class="flex flex-row items-baseline justify-center w-full">
        
            <table className='flex-grow'>
                <caption className='my-3'><h2>CALLS</h2></caption>
                <thead>
                    <tr className='bg-blue-100 border-b border-blue-300'>
                        <th className='p-3 font-normal'>OI Buildup</th>
                        <th className='p-3 font-normal'>IV</th>
                        <th className='p-3 font-normal'>OI</th>
                        <th className='p-3 font-normal'>Volume</th>
                        <th className='p-3 font-normal'>Chng%</th>
                        <th className='p-3 font-normal'>LTP</th>
                        <th className='p-3 font-normal'></th>
                        <th className='p-3 font-normal'></th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 11 }).map((_, index) => (
                        <tr className='text-center bg-yellow-100'>
                            <td className="border-b border-yellow-300 p-3">Long Buildup</td>
                            <td className="border-b border-yellow-300 p-3">9.4</td>
                            <td className="border-b border-yellow-300 p-3">35K</td>
                            <td className="border-b border-yellow-300 p-3">1.25K</td>
                            <td className="border-b border-yellow-300 p-3 text-green-500">+123.5%</td>
                            <td className="border-b border-yellow-300 p-3">1,245.3</td>
                            <td className="border-b border-yellow-300 p-1"> <p className='border bg-white w-6 h-6'>B</p> </td>
                            <td className="border-b border-yellow-300 p-1"> <p className='border bg-white w-6 h-6'>S</p> </td>
                        </tr>
                    ))}
                    {Array.from({ length: 2 }).map((_, index) => (
                        <tr className='text-center '>
                            <td className="border-b p-3">Long Buildup</td>
                            <td className="border-b p-3">9.4</td>
                            <td className="border-b p-3">35K</td>
                            <td className="border-b p-3">1.25K</td>
                            <td className="border-b p-3 text-green-500">+123.5%</td>
                            <td className="border-b p-3">1,245.3</td>
                            <td className="border-b p-1"> <p className='border bg-white w-6 h-6'>B</p> </td>
                            <td className="border-b p-1"> <p className='border bg-white w-6 h-6'>S</p> </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table className='bg-purple-100 border-b border-l border-r border-purple-400 flex-grow'>
                
                <thead>
                    <tr>
                        <th className='p-3 font-normal'>Strike</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: (18300 - 17700) / 50 + 1 }).map((_, index) => (
                    <tr className='text-center'>
                        <td className='p-3 border border-purple-400'>{17750 + index * 50}</td>
                    </tr>
                    ))}
                </tbody>
            </table>

            <table className='flex-grow'>
                <caption className='my-3'><h2>PUTS</h2></caption>
                <thead>
                <tr className='bg-blue-100 border-b border-blue-300'>
                    <th className='p-3 font-normal'></th>
                    <th className='p-3 font-normal'></th>
                    <th className='p-3 font-normal'>LTP</th>
                    <th className='p-3 font-normal'>Chng%</th>
                    <th className='p-3 font-normal'>Volume</th>
                    <th className='p-3 font-normal'>OI</th>
                    <th className='p-3 font-normal'>IV</th>
                    <th className='p-3 font-normal'>OI Buildup</th>
                </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 11 }).map((_, index) => (
                        <tr className='text-center'>
                            <td className="border-b p-1"> <p className='border bg-white w-6 h-6'>B</p> </td>
                            <td className="border-b p-1"> <p className='border bg-white w-6 h-6'>S</p> </td>
                            <td className="border-b p-3">15.3</td>
                            <td className="border-b p-3 text-red-400">-44.2%</td>
                            <td className="border-b p-3">982</td>
                            <td className="border-b p-3">1.4K</td>
                            <td className="border-b p-3">9.2</td>
                            <td className="border-b p-3">Long unwinding</td>
                        </tr>
                    ))}
                    {Array.from({ length: 2 }).map((_, index) => (
                        <tr className='text-center bg-yellow-100'>
                            <td className="border-b border-yellow-300 p-1"> <p className='border bg-white w-6 h-6'>B</p> </td>
                            <td className="border-b border-yellow-300 p-1"> <p className='border bg-white w-6 h-6'>S</p> </td>
                            <td className="border-b border-yellow-300 p-3">15.3</td>
                            <td className="border-b border-yellow-300 p-3 text-red-400">-44.2%</td>
                            <td className="border-b border-yellow-300 p-3">982</td>
                            <td className="border-b border-yellow-300 p-3">1.4K</td>
                            <td className="border-b border-yellow-300 p-3">9.2</td>
                            <td className="border-b border-yellow-300 p-3">Long unwinding</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

            
    </div>
    
    

  )
}

export default Table