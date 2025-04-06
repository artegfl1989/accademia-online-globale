document.addEventListener('DOMContentLoaded', function() {
    const verifyForm = document.getElementById('verify-form');
    const resultContainer = document.getElementById('result');
    const resultContent = document.getElementById('result-content');
    const startScannerBtn = document.getElementById('start-scanner');
    
    // Sample database of valid certificates (in a real application, this would be server-side)
    const validCertificates = {
        'GOA-2023-12345-XYZ': {
            name: 'John Doe',
            program: 'Bachelor of Computer Science',
            issueDate: '2023-06-15',
            status: 'valid'
        },
        'GOA-2023-67890-ABC': {
            name: 'Jane Smith',
            program: 'Master of Business Administration',
            issueDate: '2023-05-20',
            status: 'valid'
        },
        'GOA-2022-54321-PQR': {
            name: 'Robert Johnson',
            program: 'High School Diploma - Science',
            issueDate: '2022-12-10',
            status: 'valid'
        }
    };
    
    // Handle form submission
    verifyForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const certificateId = document.getElementById('certificate-id').value.trim();
        verifyCertificate(certificateId);
    });
    
    // Start barcode scanner
    startScannerBtn.addEventListener('click', function() {
        // In a real application, this would initialize a barcode scanner library
        // For this example, we'll simulate scanning a barcode
        alert('In a real implementation, this would access your camera to scan a barcode.');
        
        // Simulate finding a barcode after 2 seconds
        setTimeout(() => {
            const simulatedBarcode = 'GOA-2023-12345-XYZ';
            verifyCertificate(simulatedBarcode);
        }, 2000);
    });
    
    // Verify certificate function
    function verifyCertificate(certificateId) {
        resultContainer.style.display = 'block';
        
        // Scroll to result
        resultContainer.scrollIntoView({ behavior: 'smooth' });
        
        if (validCertificates[certificateId]) {
            const cert = validCertificates[certificateId];
            resultContainer.className = 'result-container valid-certificate';
            resultContent.innerHTML = `
                <div class="verification-success">
                    <p><i class="fas fa-check-circle" style="color: #28a745; font-size: 2rem;"></i></p>
                    <h4>Valid Certificate</h4>
                    <p>This is an authentic certificate issued by Global Online Academy.</p>
                    
                    <div class="certificate-details">
                        <h5>Certificate Details:</h5>
                        <ul>
                            <li><strong>Name:</strong> ${cert.name}</li>
                            <li><strong>Program:</strong> ${cert.program}</li>
                            <li><strong>Issue Date:</strong> ${cert.issueDate}</li>
                            <li><strong>Certificate ID:</strong> ${certificateId}</li>
                            <li><strong>Status:</strong> Active</li>
                        </ul>
                    </div>
                </div>
            `;
        } else {
            resultContainer.className = 'result-container invalid-certificate';
            resultContent.innerHTML = `
                <div class="verification-error">
                    <p><i class="fas fa-times-circle" style="color: #dc3545; font-size: 2rem;"></i></p>
                    <h4>Invalid Certificate</h4>
                    <p>We could not verify this certificate. It may be invalid or not issued by Global Online Academy.</p>
                    <p>If you believe this is an error, please contact our verification department at verify@globalonlineacademy.edu.</p>
                </div>
            `;
        }
    }
});