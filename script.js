document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('.sidebar-nav a');

    // --- ROUTER & NAVIGATION ---
    const navigateTo = (page) => {
        // Update active class on sidebar
        navLinks.forEach(link => {
            link.parentElement.classList.toggle('active', link.dataset.page === page);
        });

        // Render the correct page content
        switch (page) {
            case 'dashboard':
                renderDashboard();
                break;
            case 'profile':
                renderProfileForm();
                break;
            case 'submissions':
                renderSubmissionsTable();
                break;
            case 'apply':
                renderApplicationWizard();
                break;
            case 'knowledge':
                renderKnowledgeBase();
                break;
            case 'support':
                renderSupportPage();
                break;
            default:
                renderDashboard();
        }
    };

    // --- PAGE RENDER FUNCTIONS ---

    const renderDashboard = () => {
        mainContent.innerHTML = `
            <div class="panel-header"><h2>Dashboard</h2></div>
            <div class="kpi-grid">
                <div class="panel kpi-card">
                    <h3>Latest Payment</h3>
                    <p>$1,250.00</p>
                    <button class="btn">View Details</button>
                </div>
                <div class="panel kpi-card gold">
                    <h3>Your Program</h3>
                    <p>Web Development</p>
                    <button class="btn gold">View Program</button>
                </div>
                <div class="panel kpi-card green">
                    <h3>Support Request</h3>
                    <p>2 Open</p>
                    <button class="btn green">Get Help</button>
                </div>
            </div>
        `;
    };

    const renderProfileForm = () => {
        mainContent.innerHTML = `
            <div class="panel">
                <div class="panel-header"><h2>My Profile</h2></div>
                <form>
                    <div class="form-grid">
                        <div class="form-group"><label for="name">Full Name</label><input type="text" id="name" value="John Doe"></div>
                        <div class="form-group"><label for="email">Email Address</label><input type="email" id="email" value="john.doe@example.com"></div>
                        <div class="form-group"><label for="phone">Phone</label><input type="tel" id="phone" value="+1 234 567 890"></div>
                        <div class="form-group"><label for="country">Country</label><input type="text" id="country" value="United States"></div>
                    </div>
                    <div class="form-actions"><button type="submit" class="btn">Save Changes</button></div>
                </form>
            </div>
        `;
    };

    const renderSubmissionsTable = () => {
        mainContent.innerHTML = `
            <div class="panel">
                <div class="panel-header"><h2>My Submissions</h2></div>
                <table class="data-table">
                    <thead><tr><th>Program Name</th><th>Submission Date</th><th>Status</th><th>Action</th></tr></thead>
                    <tbody>
                        <tr><td>Web Development Bootcamp</td><td>2023-10-26</td><td><span class="status approved">Approved</span></td><td><a href="#">View</a></td></tr>
                        <tr><td>Data Science Fundamentals</td><td>2023-09-15</td><td><span class="status pending">Pending Review</span></td><td><a href="#">View</a></td></tr>
                        <tr><td>UI/UX Design Masterclass</td><td>2023-08-01</td><td><span class="status rejected">Rejected</span></td><td><a href="#">View</a></td></tr>
                    </tbody>
                </table>
            </div>
        `;
    };

    const renderApplicationWizard = () => {
        mainContent.innerHTML = `
            <div class="panel">
                <div class="wizard-stepper">
                    <div class="step active" data-step="1"> <div class="step-icon">1</div> <div class="step-label">Biodata</div> </div>
                    <div class="step" data-step="2"> <div class="step-icon">2</div> <div class="step-label">Program</div> </div>
                    <div class="step" data-step="3"> <div class="step-icon">3</div> <div class="step-label">Module</div> </div>
                    <div class="step" data-step="4"> <div class="step-icon">4</div> <div class="step-label">Confirmation</div> </div>
                </div>
                <div id="wizard-form">
                    <div class="wizard-content active" data-content="1">
                        <div class="panel-header"><h3>Apply New Program - Biodata</h3></div>
                        <div class="form-group"><label for="w-name">Full Name</label><input type="text" id="w-name"></div>
                        <div class="form-group" style="margin-top:20px;"><label for="w-email">Email</label><input type="email" id="w-email"></div>
                        <div class="form-actions"><button class="btn wizard-next">Next</button></div>
                    </div>
                    <div class="wizard-content" data-content="2">
                        <div class="panel-header"><h3>Select Program</h3></div>
                        <div class="form-group"><label for="w-program">Program</label><select id="w-program"><option>Web Development</option><option>Data Science</option></select></div>
                        <div class="form-actions"><button class="btn wizard-prev">Previous</button> <button class="btn wizard-next">Next</button></div>
                    </div>
                    <div class="wizard-content" data-content="3">
                        <div class="panel-header"><h3>Select Module</h3></div>
                        <div class="form-group"><label for="w-module">Module</label><select id="w-module"><option>Frontend</option><option>Backend</option></select></div>
                        <div class="form-actions"><button class="btn wizard-prev">Previous</button> <button class="btn wizard-next">Next</button></div>
                    </div>
                    <div class="wizard-content" data-content="4">
                        <div class="panel-header"><h3>Confirmation</h3></div>
                        <p>Please review your details and submit.</p>
                        <div class="form-actions"><button class="btn wizard-prev">Previous</button> <button class="btn">Submit Application</button></div>
                    </div>
                </div>
            </div>
        `;
        attachWizardListeners();
    };

    const renderKnowledgeBase = () => {
        mainContent.innerHTML = `
            <div class="panel">
                <div class="panel-header"><h2>Knowledge Center</h2></div>
                <div class="article-list">
                    <a href="#">How to check your payment status?</a>
                    <a href="#">Program curriculum details</a>
                    <a href="#">What is our refund policy?</a>
                    <a href="#">Technical requirements for courses</a>
                </div>
            </div>`;
    };

    const renderSupportPage = () => {
        mainContent.innerHTML = `
            <div class="panel">
                <div class="panel-header"><h2>Support Ticket #12345</h2></div>
                <div class="chat-container">
                    <div class="chat-message support">Hello! How can I help you today?</div>
                    <div class="chat-message user">I have a question about my last invoice.</div>
                </div>
                <form class="form-group" style="margin-top:30px;"><label>Your Reply</label><textarea rows="4" style="padding:12px; border-radius:6px; border:1px solid #ddd;"></textarea></form>
                <div class="form-actions"><button class="btn">Send Reply</button></div>
            </div>`;
    };

    // --- EVENT LISTENERS ---

    // Add click listener to all nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            navigateTo(page);
        });
    });

    // Special listener for the wizard buttons
    const attachWizardListeners = () => {
        let currentStep = 1;
        const wizardForm = document.getElementById('wizard-form');
        if (!wizardForm) return;

        const updateWizardView = () => {
            wizardForm.querySelectorAll('.wizard-content').forEach(el => el.classList.remove('active'));
            wizardForm.querySelector(`[data-content="${currentStep}"]`).classList.add('active');
            
            document.querySelectorAll('.wizard-stepper .step').forEach(stepEl => {
                const stepNum = parseInt(stepEl.dataset.step);
                stepEl.classList.remove('active', 'completed');
                if (stepNum < currentStep) stepEl.classList.add('completed');
                if (stepNum === currentStep) stepEl.classList.add('active');
            });
        };

        wizardForm.addEventListener('click', (e) => {
            if (e.target.classList.contains('wizard-next')) {
                if (currentStep < 4) currentStep++;
            }
            if (e.target.classList.contains('wizard-prev')) {
                if (currentStep > 1) currentStep--;
            }
            updateWizardView();
        });
    };

    // --- INITIAL PAGE LOAD ---
    navigateTo('dashboard'); // Load the dashboard by default
});