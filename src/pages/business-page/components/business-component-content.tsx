
"use client";
import React, {useContext, useEffect, useState} from 'react';
import { getBusinessById } from '@/controller/business/controller-business';
import { EventModel } from '@/internal/models/event';
import { useBusinessProvider } from '@/provider/business-provider';
import BusinessComponentPackages from './business-component-packages';

export default function BusinessComponentContent({ business }: { business: EventModel }) {
    const { selectedBusiness, setSelectedBusiness } = useBusinessProvider();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getBusinessById(business.ID);
            setSelectedBusiness(data);
        };
        fetchData();
    }, [business.ID]);

    return (
        <div className=''>
            <div>
                <h1 className='uppercase mb-2 font-bold text-xl pl-10 pt-10'>Choose package</h1>
                <BusinessComponentPackages packages={selectedBusiness?.packages!} />
            </div>
            <div className=''>
                <h1 className='uppercase mb-2 font-bold text-xl pl-10 pt-10'>Choose Product</h1>
          
            </div>
        </div>
    );
}