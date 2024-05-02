// PdfViewer.js
import React, { useState } from 'react';

function PdfViewer() {
    const [loading, setLoading] = useState(false);

    const handleOpenPdf = async () => {
        setLoading(true);
        try {
            const response = await fetch('/generate-signed-url', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ filePath: 'path/to/your/pdf.pdf' }),
            });

            const data = await response.json();
            if (response.ok) {
                window.open(data.signedUrl, '_blank');
            } else {
                console.error('Failed to load PDF:', data.error);
            }
        } catch (error) {
            console.error('Network error:', error);
        }
        setLoading(false);
    };

    return (
        <button onClick={handleOpenPdf} disabled={loading}>
            {loading ? 'Loading...' : 'View PDF'}
        </button>
    );
}

export default PdfViewer;
