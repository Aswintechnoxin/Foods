"use client";
import Image from 'next/image';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const steps = [
    {
        id: 1,
        title: 'Application Process',
        items: [
            'Submit required documents',
            'Provide academic qualifications',
            'Pay the application fee',
        ],
        description: 'Start by filling out the application form online or offline through the Minerva Institute of Paramedical Science college official portal.',
    },
    {
        id: 2,
        title: 'Seat Allocation & Course Selection',
        items: [
            'Review available courses and institutions',
            'Attend counseling sessions for seat selection',
            'Confirm your course and college choice',
        ],
        description: 'After the application process, candidates will be called for a counseling session...',
    },
    {
        id: 3,
        title: 'Document Verification & Admission Confirmation',
        items: [
            'Submit original documents for verification',
            'Pay admission fees and confirm enrollment',
        ],
        description: 'The final step includes document verification and fee payment for seat confirmation.',
    },
];

export default function Admission() {
    const [activeStep, setActiveStep] = useState(1);

    return (
        <div className="mx-auto p-[20px] pt-[40px] pb-[40px]">
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 pt-[20px]">
                <div>
                    <p>STEPS TO GET ADMISSION IN PARAMEDICAL COURSES</p>
                    <h2 className="mb-6 font-bold text-gray-800 step-heading">How It Works?</h2>

                    {steps.map((step) => (
                        <div key={step.id}>
                            <div
                                onClick={() => setActiveStep(step.id)}
                                className={`flex items-center space-x-4 cursor-pointer transition-colors pt-[10px] duration-200 mb-4 ${activeStep === step.id ? 'text-red-600' : 'text-gray-900 hover:text-red-600'
                                    }`}
                            >
                                <div className="flex justify-center items-center bg-yellow-400 rounded w-8 h-8 font-bold text-white">
                                    {step.id}
                                </div>
                                <h3 className="font-semibold step-title">{step.title}</h3>
                            </div>

                            {activeStep === step.id && (
                                <div className="mb-6 ml-12 text-gray-700 text-sm animate-fadeIn step-content">
                                    <p className="text-gray-500">{step.description}</p>
                                    <ul className="mt-2 pl-5 text-gray-700">
                                        {step.items.map((item, idx) => (
                                            <li key={idx} className="leading-[40px]">
                                                <div className="flex items-center gap-3">
                                                    <div className="text-red-700 step-icon">
                                                        <FaCheck />
                                                    </div>
                                                    <div className="text-gray-500 steplist">{item}</div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="relative flex justify-center items-center">
                    <div className="img-box1 style2">
                        <div className="vs-circless">
                            <div className="mega-hover">
                                <Image
                                    src="/home/step.webp"
                                    alt="banner"
                                    width={800}
                                    height={800}
                                    className="rounded-full image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
