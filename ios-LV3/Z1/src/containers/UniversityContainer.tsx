import React from 'react';
import UniversityScreen from '../screens/UniversityScreen';
import axios from 'axios';
import { University } from '../types/University';
import DisplayError from '../components/DisplayError';

const UniversityContainer = () => {
    const [universities, setUniversities] = React.useState<University[]>([]);
    const [error, setError] = React.useState<string>("");

    React.useEffect(() => {
        fetchUniversity();
    }, [])

    const fetchUniversity = React.useCallback(async () => {
        try {
            const response = await axios.get('http://universities.hipolabs.com/search?country=croatia');
            const formatedData = response.data.reduce((prev, curr, index) => {
                return {
                    ...prev,
                    [index]: {
                        name: curr.name,
                        country: curr.country,
                        url: curr.web_pages
                    }
                }
            }, {} as University)
            setUniversities(Object.values(formatedData));
        } catch (error) {
            setError("URLSessionTask failed with error: The internet connection appears to be offline.");
        }
    }, [])

    if (error) {
        return <DisplayError error={error} clearError={() => setError("")} />;
    }
    return (
        <UniversityScreen
            universities={universities}
        />
    )
}

export default UniversityContainer;