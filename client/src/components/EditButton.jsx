import React from "react";

const EditButton = () => {
    return (
        <button
            onClick={() => alert('Edit clicked!')}
            style={{
                position: 'absolute',
                top: '10px',  // Position from the top
                left: '10px', // Position from the left
                background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
                color: 'white',
                border: 'none',
                padding: '10px 15px',
                borderRadius: '5px',
                cursor: 'pointer',
                zIndex: 10,
                transition: 'transform 0.3s ease',
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                style={{ width: '20px', height: '20px' }}
            >
                <path
                    fillRule="evenodd"
                    d="M17.414 2.586a2 2 0 0 1 0 2.828l-12 12a2 2 0 0 1-1.417.586l-3 1a2 2 0 0 1-.586-3.417l1-3a2 2 0 0 1 .586-1.417l12-12a2 2 0 0 1 2.828 2.828zM16.707 3.293a1 1 0 0 0-1.414 0L12 6.586 13.414 8l3.293-3.293a1 1 0 0 0 0-1.414z"
                    clipRule="evenodd"
                />
            </svg>
        </button>
    )
}

export default EditButton;