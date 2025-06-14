'use client';
 
import { Separator } from '@radix-ui/react-separator';
import React from 'react';
 
export default function Invoice() {
    return (
        <div className="flex justify-center items-center">
            <div className='max-w-3xl w-full border border-gray-300 p-2'>
                <div className='flex justify-center font-bold p-3 text-2xl'>Invoice</div>
                <div className="width-full mx-10 p-6 bg-white border border-gray-300 text-sm text-black">
                    <div className="flex justify-between items-start border-b border-b-gray-300 pb-4">
                        <div>
                            <div className="text-lg font-medium">LOGO</div>
                        </div>
                        <div className="text-left text-sm">
                            <p><span className='font-semibold'>Invoice #:</span> BL-771</p>
                            <p><span className='font-semibold'>Date:</span> 08 Jun, 2025</p>
                            <p><span className='font-semibold'>ID:</span> BL203487NTNQLP</p>
                            <p><span className='font-semibold'>Payment:</span> stripe</p>
                        </div>
                    </div>
                    <div className="flex justify-start gap-40 items-start pb-4">
                        <div className="mt-2">
                            <p>. Company Address</p>
                        </div>
                        <div className="mt-4 pb-4">
                            <p><span className='font-semibold'>Customer:</span> mohd</p>
                            <p><span className='font-semibold'>Address:</span> dubai</p>
                            <p><span className='font-semibold'>Country:</span> -</p>
                            <p><span className='font-semibold'>Email:</span> kasi@mail.com</p>
                            <p><span className='font-semibold'>Mobile:</span> -</p>
                            <p><span className='font-semibold'>Whatsapp:</span></p>
                        </div>
                    </div>
 
                    <div className="mt-6 border border-gray-300">
                        <div className="grid grid-cols-6 bg-neutral-400 font-medium text-center">
                            <div className="py-2 px-1 border-r font-semibold border-white">Sr</div>
                            <div className="py-2 px-1 border-r font-semibold border-white col-span-2">Description</div>
                            <div className="py-2 px-1 border-r font-semibold border-white">Color</div>
                            <div className="py-2 px-1 border-r font-semibold border-white">Qty</div>
                            <div className="py-2 px-1 font-semibold">Price</div>
                        </div>
                        <div className="grid grid-cols-6 text-center border-t border-white">
                            <div className="py-2 px-1 border-r border-white">1</div>
                            <div className="py-2 px-1 border-r border-white col-span-2">Product name</div>
                            <div className="py-2 px-1 border-r border-white">-</div>
                            <div className="py-2 px-1 border-r border-white">2</div>
                            <div className="py-2 px-1">180.00</div>
                        </div>
                    </div>
 
                    {/* Totals Table */}
                    <div className="mt-6 overflow-x-auto">
                        <table className="w-full border border-gray-300 text-sm text-left">
                            <tbody>
                                {[
                                    ['Sub Total', 'AED 360.00'],
                                    ['Vat Amount 5%', 'AED 18.00'],
                                    ['Shipping Charge', 'AED 30.00'],
                                    ['Discount', '0.00 - none'],
                                    ['Grand Total', 'AED 408.00'],
                                ].map(([label, value], i) => (
                                    <tr key={label} className="bg-neutral-400 text-black">
                                        <td className="border text-center border-white px-3 py-2 font-semibold">{label}</td>
                                        <td className="border text-center border-white px-3 py-2 font-semibold">{value}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <p className="text-sm px-3 py-2">Total In Words : Four hundred and eight Dirhams Only.</p>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Footer */}
                    <Separator className="my-2" />
                    <div className="mt-16 text-right">
                        <p className="font-semibold">Received By</p>
                    </div>
                </div>
            </div>
        </div>
    );
}