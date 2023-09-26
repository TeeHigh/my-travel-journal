import React from 'react'

const Duration = (props) => {
    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    const start = formatDate(props.startDate)
    const end = formatDate(props.endDate)

    return (
        <strong className="duration">
            {start} {props.singleDay ? "" : `- ${end}`}
        </strong>
    )
}

export default Duration