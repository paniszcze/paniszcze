import { useContext, useEffect, useState } from 'react';
import { AxiosContext } from '../contexts/AxiosContext';

import { ReactComponent as Monitor } from '../assets/images/monitor.svg';

export default function StatusMonitor() {
    const [styles, setStyles] = useState(' idle');
    const { isPending, response, error } = useContext(AxiosContext);

    useEffect(() => {
        setStyles(error ? ' error' : response ? ' success' : isPending ? ' pending' : ' idle');
    }, [error, response, isPending]);

    return (
        <div className={`monitor${styles}`}>
            <div className="tile"></div>
            <Monitor />
        </div>
    );
}
