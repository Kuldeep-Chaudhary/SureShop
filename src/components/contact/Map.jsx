import React from 'react';

const Map = () => {
    // The HTML content with the iframe
    const mapIframe = `
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d112113.32945134763!2d77.25056!3d28.5835264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1724153759046!5m2!1sen!2sin"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    `;

    return (
        <div
            dangerouslySetInnerHTML={{ __html: mapIframe }}
            style={{ maxWidth: '100%', overflow: 'hidden' }} // Optional: ensures iframe is responsive
        />
    );
};

export default Map;
