"use client"
import React from 'react';
import { Input } from "@/components/ui/input"
import { Button } from '../ui/button';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

const LeetCodeSideBar = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    // Get current filters from URL
    const currentType = searchParams.get('type');
    const currentSearch = searchParams.get('search') || '';

    const createQueryString = (name: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set(name, value);
        } else {
            params.delete(name);
        }
        return params.toString();
    };

    const handleSearch = (value: string) => {
        const queryString = createQueryString('search', value);
        router.push(`${pathname}?${queryString}`);
    };

    const handleTypeFilter = (type: string) => {
        const newType = currentType === type ? '' : type;
        const queryString = createQueryString('type', newType);
        router.push(`${pathname}?${queryString}`);
    };

    return (
        <div className="w-full flex flex-col justify-end gap-2 text-md px-2 hidden xl:flex animate-[upblur_3s_ease-in-out]">
            <Input 
                type="text" 
                className='dark:bg-zinc-900/70 bg-zinc-100' 
                placeholder="Search by task name..."
                value={currentSearch}
                onChange={(e) => handleSearch(e.target.value)}
            />

            <div className="w-full grid gap-2 grid-cols-3">
                <Button 
                    className={`text-xs text-cyan-500 p-1 h-7 opacity-50 ${currentType === 'easy' ? 'bg-zinc-200/50 dark:bg-zinc-900 opacity-100' : 'bg-zinc-100 dark:bg-zinc-900/70'} backdrop-blur-xl border rounded-md flex text-center dark:hover:opacity-80 hover:bg-zinc-200/70`}
                    onClick={() => handleTypeFilter('easy')}
                >
                    Easy
                </Button>
                <Button 
                    className={`text-xs text-orange-500 p-1 h-7 opacity-50 ${currentType === 'medium' ? 'bg-zinc-200/50 dark:bg-zinc-900 opacity-100' : 'bg-zinc-100 dark:bg-zinc-900/70'} backdrop-blur-xl border rounded-md flex text-center dark:hover:opacity-80 hover:bg-zinc-200/70`}
                    onClick={() => handleTypeFilter('medium')}
                >
                    Med.
                </Button>
                <Button 
                    className={`text-xs text-red-500 p-1 h-7 opacity-50 ${currentType === 'hard' ? 'bg-zinc-200/50 dark:bg-zinc-900 opacity-100' : 'bg-zinc-100 dark:bg-zinc-900/70'} backdrop-blur-xl border rounded-md flex text-center dark:hover:opacity-80 hover:bg-zinc-200/70`}
                    onClick={() => handleTypeFilter('hard')}
                >
                    Hard
                </Button>
            </div>
        </div>
    );
};

export default LeetCodeSideBar;
