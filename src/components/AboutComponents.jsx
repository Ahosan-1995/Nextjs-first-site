import Link from 'next/link';
import React from 'react';

const AboutComponents = () => {
    return (
        <div className="space-x-5">
            <Link href={'/about/history'}>History</Link>
            <Link href={'/about/mission'}>Mission</Link>
        </div>
    );
};

export default AboutComponents;